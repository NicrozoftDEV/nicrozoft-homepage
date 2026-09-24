import { defineConfig } from 'astro/config';

// Served from the root of nicrozoft.org on Cloudflare Workers — no `base` prefix.
// `site` drives canonical URLs / OG tags (BaseLayout) and must be the apex host.
export default defineConfig({
  site: 'https://nicrozoft.org',
  // 4321 is occupied on this machine — dev and preview fall back to 4322.
  server: { port: 4322 },
  preview: { port: 4322 },
  trailingSlash: 'ignore',
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    build: {
      cssMinify: 'esbuild',
    },
  },
});
