// "Download additional info" — extra notices shown in a WinUI ContentDialog
// when a user clicks a download button, before the download proceeds.
//
// The site owner controls notices at four levels, from broad to precise, by
// combining the targeting filters on a notice. See DownloadNotice below.

import { groupKey, type Download } from './downloads';
import globalNoticesData from '../data/download-notices.json';

export type NoticeTone = 'info' | 'warning' | 'critical';

/**
 * A download-notice rule.
 *
 * TARGETING — every filter that is present must match (logical AND); an omitted
 * filter matches anything. Combine them to hit exactly the scope you want:
 *
 *   • ALL downloads, every page ....... {}                       (no filters)
 *   • one collection .................. { collections: ['os'] }  ('os' | 'virus' | 'tools')
 *   • one page ........................ { pages: ['win11ext'] }
 *   • one category / version group .... { pages: ['win11ext'], groups: ['6.0 版'] }
 *   • one button only ................. { pages: ['win11ext'], labels: ['移动网盘链接 (6.0 完整版)'] }
 *   • buttons matching a pattern ...... { labels: ['*6.0 完整版*'] }   (glob — see below)
 *   • every ISO button ................ { kinds: ['iso'] }
 *
 * WILDCARDS — any filter value may use "*" as a glob wildcard, where "*" matches
 * any run of characters: "*6.0 完整版*" (contains), "移动网盘*" (starts with),
 * "*基本版" (ends with). Whitespace and case are ignored when comparing.
 *
 * `pages`  – content file ids (the filename without .md, e.g. "win11ext").
 * `groups` – the same bucket labels the UI shows ("6.0 版", "变种", "其他"); see groupKey().
 * `labels` – a button's visible text. A pattern with no "*" must match the whole
 *            label (set labelMatch: 'includes' for plain substring matching);
 *            a pattern with "*" is always glob-matched.
 * `kinds`  – download kind ('iso' | 'ova' | 'image' | 'archive').
 *
 * `body` is trusted inline HTML authored by the site owner (the same way the
 * markdown pages already use <span class="warn">…</span>); it renders as-is.
 */
export interface DownloadNotice {
  /** Optional heading shown above this notice inside the dialog. */
  title?: string;
  /** Notice content — trusted inline HTML is allowed. */
  body: string;
  /** Accent + icon styling. Default 'info'. */
  tone?: NoticeTone;

  // ---- targeting filters (AND; omit a filter to match anything) ----
  collections?: string[];
  pages?: string[];
  groups?: string[];
  labels?: string[];
  labelMatch?: 'exact' | 'includes';
  kinds?: string[];
}

/** What the dialog actually renders — targeting fields stripped out. */
export interface RenderableNotice {
  title?: string;
  body: string;
  tone: NoticeTone;
}

/* ===========================================================================
 * SITE-OWNER GLOBAL CONFIG  →  src/data/download-notices.json
 * -----------------------------------------------------------------------------
 * Edit that JSON file to control notices across the WHOLE site. Each entry is a
 * DownloadNotice object (see the fields + targeting examples above). An entry
 * with no filters shows on every download; add collections / pages / groups /
 * labels / kinds to narrow it. Page authors can also attach page-local notices
 * via the `notices:` field in a product's markdown frontmatter.
 *
 * Example download-notices.json contents:
 *   [
 *     { "tone": "info", "body": "下载前请阅读对应产品页面的说明。" },
 *     { "collections": ["os"], "body": "安装系统前请务必备份重要数据。" },
 *     { "pages": ["win11ext"], "labels": ["移动网盘链接 (6.0 完整版)"],
 *       "tone": "warning", "body": "完整版体积较大，请确认磁盘空间充足。" }
 *   ]
 * ========================================================================= */
export const globalDownloadNotices = globalNoticesData as DownloadNotice[];

export interface DownloadCtx {
  collection: string;
  page: string;
  label: string;
  group: string;
  kind: string;
}

const norm = (s: string) => s.replace(/\s+/g, '').toLowerCase();
const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// A pattern containing "*" is a glob: each "*" matches any run of characters,
// so "*6.0 完整版*" matches any value containing "6.0 完整版". Both pattern and
// value are already normalized (whitespace stripped, lower-cased) when passed in.
const globMatch = (pattern: string, value: string): boolean =>
  new RegExp('^' + pattern.split('*').map(escapeRegExp).join('.*') + '$').test(value);

/**
 * Test one targeting filter: does any of `patterns` match `value`?
 * Patterns with "*" are globs; otherwise `mode` decides exact vs. substring.
 */
function filterMatches(patterns: string[], value: string, mode: 'exact' | 'includes' = 'exact'): boolean {
  const v = norm(value);
  return patterns.some((p) => {
    const np = norm(p);
    if (np.includes('*')) return globMatch(np, v);
    if (mode === 'includes') return v.includes(np);
    return v === np;
  });
}

/** Does a notice's targeting match this specific download? */
export function noticeMatches(n: DownloadNotice, ctx: DownloadCtx): boolean {
  if (n.collections && !filterMatches(n.collections, ctx.collection)) return false;
  if (n.pages && !filterMatches(n.pages, ctx.page)) return false;
  if (n.kinds && !filterMatches(n.kinds, ctx.kind)) return false;
  if (n.groups && !filterMatches(n.groups, ctx.group)) return false;
  if (n.labels && n.labels.length && !filterMatches(n.labels, ctx.label, n.labelMatch ?? 'exact')) return false;
  return true;
}

const toRenderable = (n: DownloadNotice): RenderableNotice => ({
  ...(n.title ? { title: n.title } : {}),
  body: n.body,
  tone: n.tone ?? 'info',
});

export interface ResolvedNotices {
  /** Deduplicated notices, referenced by index from `idsByDownload`. */
  registry: RenderableNotice[];
  /** For each input download, the registry indices that apply (in order). */
  idsByDownload: Map<Download, number[]>;
}

/**
 * Resolve which notices apply to each download button on a product page.
 * Global notices are considered first, then the page's own frontmatter notices
 * (which are implicitly scoped to this page). Identical notices are deduped so
 * the JSON registry embedded in the page stays small.
 */
export function resolveDownloadNotices(params: {
  collection: string;
  page: string;
  downloads: Download[];
  pageNotices?: DownloadNotice[];
}): ResolvedNotices {
  const { collection, page, downloads, pageNotices = [] } = params;
  const all = [...globalDownloadNotices, ...pageNotices];

  const registry: RenderableNotice[] = [];
  const indexByKey = new Map<string, number>();
  const idsByDownload = new Map<Download, number[]>();

  for (const d of downloads) {
    const ctx: DownloadCtx = {
      collection,
      page,
      label: d.label,
      group: groupKey(d.label).key,
      kind: d.kind,
    };
    const ids: number[] = [];
    for (const n of all) {
      if (!noticeMatches(n, ctx)) continue;
      const renderable = toRenderable(n);
      const key = JSON.stringify(renderable);
      let idx = indexByKey.get(key);
      if (idx === undefined) {
        idx = registry.length;
        registry.push(renderable);
        indexByKey.set(key, idx);
      }
      if (!ids.includes(idx)) ids.push(idx);
    }
    if (ids.length) idsByDownload.set(d, ids);
  }

  return { registry, idsByDownload };
}
