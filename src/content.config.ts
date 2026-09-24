import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { machineSchema, machineTagIdSchema } from './lib/mcMachines';

// Status maps to colored Fluent badges on cards.
const Status = z.enum(['planned', 'active', 'stopped']).default('active');

const downloadSchema = z.object({
  label: z.string(),
  href: z.string(),
  kind: z.enum(['iso', 'ova', 'image', 'archive', 'link']).default('link'),
  /** Extraction code — when present, shown in the download-notice dialog. */
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

const screenshotSchema = z.union([z.string(), z.object({ src: z.string(), alt: z.string().optional() })]);

// A documented config key or plugin (see the Minecraft wiki's 性能与修复 and 插件特性
// pages). Grouped so each section can carry its own heading and intro.
const configEntrySchema = z.object({
  key: z.string(),
  /** Pills describing how the key is configured, e.g. 全部子项启用. */
  meta: z.array(z.string()).default([]),
  /** Where the entry comes from rather than upstream, e.g. 本地分支 / 私有插件. */
  origin: z.string().optional(),
  /** Description. Inline HTML is allowed here for links and <code>. */
  body: z.string(),
});

const configGroupSchema = z.object({
  title: z.string(),
  lead: z.string().optional(),
  entries: z.array(configEntrySchema).default([]),
  /** Closing paragraphs after the entries, for the odds and ends a list can't hold. */
  notes: z.array(z.string()).default([]),
});

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

const mcserver = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mcserver' }),
  schema: z.object({
    title: z.string(),
    lead: z.string().optional(),
    description: z.string().optional(),
    blurb: z.string().optional(),
    order: z.number().default(100),
    navTitle: z.string().optional(),
    indexLabel: z.string().optional(),
    directory: z.enum(['sections', 'children']).optional(),
    sharedContent: z.literal('group-rules').optional(),
    actions: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
          variant: z.enum(['standard', 'accent']).default('standard'),
          external: z.boolean().default(false),
        }),
      )
      .default([]),
    machines: z.array(machineSchema).optional(),
    configGroups: z.array(configGroupSchema).optional(),
    tagLegend: z
      .array(
        z.object({
          title: z.string(),
          tags: z.array(machineTagIdSchema),
        }),
      )
      .optional(),
  }),
});

export const collections = { os, virus, tools, mcserver };
