// Shared download typing + version-grouping, used by the product detail layout
// (ProductLayout.astro) and the download-notice matcher (downloadNotices.ts).
// Keeping the group key in one place means a "target a category" notice buckets
// downloads with exactly the same labels ("6.0 版", "变种", "其他") the UI shows.

export type DownloadKind = 'iso' | 'ova' | 'image' | 'archive' | 'link';

export interface Download {
  label: string;
  href: string;
  kind: DownloadKind;
}

export interface DownloadGroup {
  key: string;
  weight: number;
  items: Download[];
}

/**
 * Derive the category bucket for a download from its label.
 * Order matters: more specific predicates run first.
 *   变种 …            → "变种"
 *   … 6.0 … / 5.0.1 … → "6.0 版" / "5.0.1 版" (weighted by numeric version, desc)
 *   anything else     → "其他"
 */
export function groupKey(label: string): { key: string; weight: number } {
  if (/变种/.test(label)) return { key: '变种', weight: -5 };
  const m = label.match(/(\d+\.\d+(?:\.\d+)?)/);
  if (m) {
    const parts = m[1].split('.').map(Number);
    const weight = parts[0] * 1_000_000 + (parts[1] ?? 0) * 1000 + (parts[2] ?? 0);
    return { key: `${m[1]} 版`, weight };
  }
  return { key: '其他', weight: -20 };
}

/** Group file downloads into version/category buckets, ordered by weight desc. */
export function groupDownloads(fileDownloads: Download[]): DownloadGroup[] {
  const map = new Map<string, DownloadGroup>();
  for (const d of fileDownloads) {
    const { key, weight } = groupKey(d.label);
    const g = map.get(key) ?? { key, weight, items: [] };
    g.items.push(d);
    map.set(key, g);
  }
  return [...map.values()].sort((a, b) => b.weight - a.weight);
}
