import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Status maps to colored Fluent badges on cards.
const Status = z.enum(['planned', 'active', 'stopped']).default('active');

const downloadSchema = z.object({
  label: z.string(),
  href: z.string(),
  kind: z.enum(['iso', 'ova', 'image', 'archive', 'link']).default('link'),
  /** Extraction code (提取码) — when present, shown in the download-notice dialog. */
  password: z.string().optional(),
});

// Page-local "download additional info" notice. Shown in a popup when a matching
// download button is clicked. Implicitly scoped to this page; narrow further with
// the optional filters (groups / labels / kinds). See src/lib/downloadNotices.ts.
const noticeSchema = z.object({
  title: z.string().optional(),
  body: z.string(),
  tone: z.enum(['info', 'warning', 'critical']).optional(),
  collections: z.array(z.string()).optional(),
  pages: z.array(z.string()).optional(),
  groups: z.array(z.string()).optional(),
  labels: z.array(z.string()).optional(),
  labelMatch: z.enum(['exact', 'includes']).optional(),
  kinds: z.array(z.string()).optional(),
});

const screenshotSchema = z.union([
  z.string(),
  z.object({ src: z.string(), alt: z.string().optional() }),
]);

// Reusable base schema for product-like entries (OS / virus / tools).
const productSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  cover: z.string(),
  status: Status,
  series: z.string().optional(),
  /** Order in listing pages: lower = earlier. Default 100. */
  order: z.number().default(100),
  /** Big hero image on the detail page. Defaults to cover. */
  hero: z.string().optional(),
  /** Optional one-line warning shown above the description. */
  warning: z.string().optional(),
  /** Short text shown under the card title on listing pages. */
  blurb: z.string().optional(),
  downloads: z.array(downloadSchema).default([]),
  /** Popups shown when a download button on this page is clicked. */
  notices: z.array(noticeSchema).default([]),
  screenshots: z.array(screenshotSchema).default([]),
  /** Hide from listing pages but still render the detail page. */
  draft: z.boolean().default(false),
});

const os = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/os' }),
  schema: productSchema,
});

const virus = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/virus' }),
  schema: productSchema,
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: productSchema,
});

// Recommend page is rendered from static data inline; no collection needed.

export const collections = { os, virus, tools };
