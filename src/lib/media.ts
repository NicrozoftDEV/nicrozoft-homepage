// Bulk downloads (the /data and /video trees) are too large for Workers Static
// Assets (25 MiB/file limit) and are served from a Cloudflare R2 bucket on a
// custom domain instead. `.assetsignore` keeps them out of the Worker upload;
// this helper rewrites their URLs to the R2 base at render time.
//
// The base is the R2 custom domain. Override per build with PUBLIC_MEDIA_BASE
// (set PUBLIC_MEDIA_BASE="" to serve from the same origin during local dev).
// CHANGE THIS DEFAULT if your R2 domain differs from dl.nicrozoft.org.
const DEFAULT_BASE = 'https://nzdl.nevergonnatellalieandhurt.you';
const BASE = (import.meta.env.PUBLIC_MEDIA_BASE ?? DEFAULT_BASE).replace(/\/+$/, '');

// Path prefixes that live in R2 rather than in the Worker's static assets.
const OFFLOADED = /^\/(data|video)\//;

/** Rewrite an offloaded /data or /video path to the R2 base; pass through everything else. */
export function mediaUrl(href: string): string;
export function mediaUrl(href: undefined): undefined;
export function mediaUrl(href: string | undefined): string | undefined;
export function mediaUrl(href: string | undefined): string | undefined {
  if (BASE && typeof href === 'string' && OFFLOADED.test(href)) return BASE + href;
  return href;
}
