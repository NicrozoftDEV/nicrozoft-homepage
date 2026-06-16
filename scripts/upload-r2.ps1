#Requires -Version 7
<#
.SYNOPSIS
  Sync the R2-hosted bulk files to a Cloudflare R2 bucket with Wrangler.

.DESCRIPTION
  public/data and public/video are kept out of the Worker upload (public/.assetsignore)
  and served from the R2 custom domain instead (see src/lib/media.ts). This script
  uploads them via `wrangler r2 object put`, preserving paths so an object lands at e.g.
  data/FightAgainstNish/NMario.png — matching the rewritten links.

  Unchanged files are skipped: the script lists the bucket via the Cloudflare REST API
  (wrangler has no list command) using wrangler's stored OAuth token, and compares each
  local file's size + MD5 against the object's size + ETag. Wrangler uploads single-part,
  so an R2 ETag equals the content MD5 — an exact, cheap dedupe.

  It can also remove objects whose local source was deleted (orphans). By default those
  are only reported as warnings; pass -Prune to delete them.

  Authenticate first with `wrangler login`.

.PARAMETER Bucket
  R2 bucket name. Defaults to nicrozoft-dl.

.PARAMETER Paths
  Sub-paths under public/ to sync. Default: data, video. Example: -Paths data/winxptheme

.PARAMETER AccountId
  Cloudflare account that owns the bucket. Defaults to the account holding nicrozoft-dl.

.PARAMETER Prune
  Delete R2 objects (under -Paths) whose local file no longer exists.

.PARAMETER Force
  Re-upload every file, even if size + ETag already match (skip the dedupe check).

.EXAMPLE
  ./scripts/upload-r2.ps1            # upload only changed/new files; warn about orphans
.EXAMPLE
  ./scripts/upload-r2.ps1 -Prune     # also delete objects with no local file
.EXAMPLE
  ./scripts/upload-r2.ps1 -Force     # re-upload everything
#>
[CmdletBinding(SupportsShouldProcess)]
param(
  [string]$Bucket = 'nicrozoft-dl',
  [string[]]$Paths = @('data', 'video'),
  [string]$AccountId = '7b2bd67073ad02a4f7f94ff756893e77',
  [switch]$Prune,
  [switch]$Force
)

$ErrorActionPreference = 'Stop'
$publicDir = (Resolve-Path (Join-Path $PSScriptRoot '..' 'public')).Path
# Pin the account so wrangler is deterministic across multiple logged-in accounts.
$env:CLOUDFLARE_ACCOUNT_ID = $AccountId

$mime = @{
  '.zip'  = 'application/zip'; '.7z' = 'application/x-7z-compressed'; '.rar' = 'application/vnd.rar'
  '.iso'  = 'application/x-iso9660-image'; '.exe' = 'application/vnd.microsoft.portable-executable'
  '.mp4'  = 'video/mp4'; '.webm' = 'video/webm'; '.wmv' = 'video/x-ms-wmv'
  '.png'  = 'image/png'; '.jpg' = 'image/jpeg'; '.jpeg' = 'image/jpeg'; '.gif' = 'image/gif'
  '.webp' = 'image/webp'; '.ico' = 'image/x-icon'; '.svg' = 'image/svg+xml'
  '.pdf'  = 'application/pdf'; '.json' = 'application/json'
  '.txt'  = 'text/plain; charset=utf-8'; '.html' = 'text/html; charset=utf-8'; '.cmd' = 'text/plain; charset=utf-8'
}

function Get-Key([string]$full) { ([IO.Path]::GetRelativePath($publicDir, $full)) -replace '\\', '/' }

# --- gather local files under the requested paths ---
$files = foreach ($p in $Paths) {
  $full = Join-Path $publicDir $p
  if (Test-Path -LiteralPath $full) { Get-ChildItem -LiteralPath $full -Recurse -File }
  else { Write-Warning "skip (not found): public/$p" }
}
$localKeys = [System.Collections.Generic.HashSet[string]]::new([string[]]@($files | ForEach-Object { Get-Key $_.FullName }))

# --- list the bucket (size + ETag per object) for dedupe + orphan detection ---
function Get-WranglerToken {
  & npx wrangler whoami *> $null   # refreshes an expired token + writes it back
  $cfg = Join-Path $env:APPDATA 'xdg.config/.wrangler/config/default.toml'
  if (-not (Test-Path -LiteralPath $cfg)) { $cfg = Join-Path $env:USERPROFILE '.wrangler/config/default.toml' }
  if (-not (Test-Path -LiteralPath $cfg)) { throw "wrangler config not found — run 'wrangler login'." }
  $m = Select-String -LiteralPath $cfg -Pattern 'oauth_token\s*=\s*"([^"]+)"' | Select-Object -First 1
  if (-not $m) { throw "no oauth_token in wrangler config — run 'wrangler login'." }
  return $m.Matches[0].Groups[1].Value
}

function Get-R2Objects($token) {
  $map = @{}
  $cursor = $null
  do {
    $url = "https://api.cloudflare.com/client/v4/accounts/$AccountId/r2/buckets/$Bucket/objects?per_page=1000"
    if ($cursor) { $url += '&cursor=' + [uri]::EscapeDataString($cursor) }
    $resp = Invoke-RestMethod -Uri $url -Headers @{ Authorization = "Bearer $token" }
    if (-not $resp.success) { throw "R2 list failed: $($resp.errors | ConvertTo-Json -Compress)" }
    foreach ($o in $resp.result) { $map[$o.key] = @{ etag = $o.etag.Trim('"'); size = [long]$o.size } }
    $cursor = $resp.result_info.cursor
  } while ($resp.result_info.is_truncated)
  return $map
}

Write-Host "Listing r2://$Bucket ..." -ForegroundColor Cyan
$remote = Get-R2Objects (Get-WranglerToken)

# --- upload (skipping unchanged files) ---
$total = ($files | Measure-Object).Count
Write-Host "Syncing $total local file(s) ..." -ForegroundColor Cyan
$up = 0; $skip = 0; $fail = 0; $i = 0
foreach ($f in $files) {
  $i++
  $key = Get-Key $f.FullName
  $r = $remote[$key]
  if (-not $Force -and $r -and $r.size -eq $f.Length -and (Get-FileHash -Algorithm MD5 -LiteralPath $f.FullName).Hash -ieq $r.etag) {
    $skip++
    continue
  }
  $ct = $mime[$f.Extension.ToLower()]; if (-not $ct) { $ct = 'application/octet-stream' }
  $size = '{0:N1} MiB' -f ($f.Length / 1MB)
  if ($PSCmdlet.ShouldProcess("r2://$Bucket/$key", "put ($size)")) {
    Write-Host ("[{0}/{1}] {2}  ({3})" -f $i, $total, $key, $size)
    & npx wrangler r2 object put "$Bucket/$key" --file $f.FullName --remote --content-type $ct
    if ($LASTEXITCODE -eq 0) { $up++ } else { $fail++; Write-Warning "FAILED: $key" }
  }
}

# --- orphans: on R2 (under scope) but no local file ---
$prefixes = @($Paths | ForEach-Object { ($_ -replace '\\', '/').TrimEnd('/') + '/' })
$inScope = { param($k) foreach ($p in $prefixes) { if ($k.StartsWith($p)) { return $true } } return $false }
$orphans = @($remote.Keys | Where-Object { (& $inScope $_) -and -not $localKeys.Contains($_) })

$pruned = 0
if ($orphans.Count -eq 0) {
  Write-Host "No orphaned objects." -ForegroundColor Green
}
elseif ($Prune) {
  Write-Host "Pruning $($orphans.Count) orphaned object(s) ..." -ForegroundColor Yellow
  foreach ($key in $orphans) {
    if ($PSCmdlet.ShouldProcess("r2://$Bucket/$key", "delete")) {
      & npx wrangler r2 object delete "$Bucket/$key" --remote
      if ($LASTEXITCODE -eq 0) { $pruned++; Write-Host "  deleted  $key" } else { Write-Warning "delete FAILED: $key" }
    }
  }
}
else {
  Write-Warning "$($orphans.Count) R2 object(s) have no local file — re-run with -Prune to delete:"
  foreach ($key in $orphans) { Write-Warning "  orphan: $key" }
}

Write-Host "`nDone. uploaded=$up skipped=$skip failed=$fail orphaned=$($orphans.Count) pruned=$pruned" -ForegroundColor ($fail ? 'Yellow' : 'Green')
if ($fail) { exit 1 }
