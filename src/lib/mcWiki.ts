import type { CollectionEntry } from 'astro:content';

type WikiEntry = CollectionEntry<'mcserver'>;
export interface McWikiLink {
  label: string;
  href: string;
}
export interface McWikiSection {
  label: string;
  href?: string;
  items?: McWikiLink[];
}

export function wikiHref(id: string): string {
  return id === 'index' ? '/mcserver' : `/mcserver/${id}`;
}

export function wikiChildren(entries: WikiEntry[], parent?: string): WikiEntry[] {
  return entries
    .filter((entry) => {
      const parts = entry.id.split('/');
      return parent ? parts.slice(0, -1).join('/') === parent : parts.length === 1;
    })
    .sort((a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id));
}

export function wikiNavigation(entries: WikiEntry[]): McWikiSection[] {
  return wikiChildren(entries).map((entry) => {
    const children = wikiChildren(entries, entry.id);
    const label = entry.data.navTitle ?? entry.data.title;
    const href = wikiHref(entry.id);
    return children.length
      ? {
          label,
          items: [
            { label: entry.data.indexLabel ?? entry.data.title, href },
            ...children.map((child) => ({ label: child.data.title, href: wikiHref(child.id) })),
          ],
        }
      : { label, href };
  });
}

/** Match clean URLs, file URLs, and trailing slashes in the sidebar. */
export function normalizeWikiPath(pathname: string): string {
  return pathname.replace(/\/$/, '').replace(/\.html$/, '') || '/';
}
