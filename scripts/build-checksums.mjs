// Parse the plain-text checksum files in public/checksums/*.txt into a single
// structured JSON file (src/data/checksums.json) consumed by the
// /checksums/[slug] view pages.
//
// The source files are NOT uniform:
//   - Most use Chinese labels with half- or full-width colons:
//       文件名： <name> / 大小： <size> / CRC32: / MD5: / SHA1: / SHA256:
//   - Some carry only lowercase hash lines, no filename/size:
//       sha256: <HEX> / sha1: <HEX> / md5: <HEX>
// The parser is deliberately tolerant of label casing, colon width, key order,
// and missing fields. Run with: npm run gen:checksums
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('../', import.meta.url)));
const SRC_DIR = join(ROOT, 'public', 'checksums');
const OUT_FILE = join(ROOT, 'src', 'data', 'checksums.json');

// Canonical hash algorithms in display order, with the aliases each may appear
// under in the source files (normalized: lowercased, spaces/hyphens stripped).
const ALGORITHMS = [
  { algo: 'crc32', label: 'CRC32', aliases: ['crc32', 'crc'] },
  { algo: 'md5', label: 'MD5', aliases: ['md5'] },
  { algo: 'sha1', label: 'SHA-1', aliases: ['sha1'] },
  { algo: 'sha256', label: 'SHA-256', aliases: ['sha256'] },
  { algo: 'sha512', label: 'SHA-512', aliases: ['sha512'] },
];
const FILENAME_KEYS = ['文件名', 'filename', 'file', 'name'];
const SIZE_KEYS = ['大小', 'size'];

const norm = (s) => s.toLowerCase().replace(/[\s\-_]/g, '');
const algoByKey = new Map();
for (const a of ALGORITHMS) for (const alias of a.aliases) algoByKey.set(alias, a);

function parse(raw) {
  let filename = null;
  let size = null;
  const found = new Map(); // algo -> value

  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    // Split on the first half- or full-width colon.
    const m = trimmed.match(/^([^:：]+)[:：]\s*(.+)$/);
    if (!m) continue;
    const key = norm(m[1]);
    const value = m[2].trim();
    if (FILENAME_KEYS.includes(key)) { filename = value; continue; }
    if (SIZE_KEYS.includes(key)) { size = value; continue; }
    const a = algoByKey.get(key);
    // Store the hash value uppercased so mixed-case sources render uniformly.
    if (a && !found.has(a.algo)) found.set(a.algo, value.toUpperCase());
  }

  const hashes = ALGORITHMS
    .filter((a) => found.has(a.algo))
    .map((a) => ({ algo: a.algo, label: a.label, value: found.get(a.algo) }));

  return { filename, size, hashes };
}

const files = readdirSync(SRC_DIR).filter((f) => f.endsWith('.txt')).sort();
const out = {};
for (const file of files) {
  const slug = file.replace(/\.txt$/, '');
  const raw = readFileSync(join(SRC_DIR, file), 'utf8');
  const parsed = parse(raw);
  if (parsed.hashes.length === 0) {
    console.warn(`⚠ ${file}: no recognizable hash lines`);
  }
  out[slug] = { slug, source: `/checksums/${file}`, ...parsed };
}

mkdirSync(dirname(OUT_FILE), { recursive: true });
writeFileSync(OUT_FILE, JSON.stringify(out, null, 2) + '\n', 'utf8');
console.log(`✓ Wrote ${Object.keys(out).length} entries → ${OUT_FILE.replace(ROOT, '.')}`);
