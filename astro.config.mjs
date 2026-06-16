import { defineConfig } from 'astro/config';

// Served from the root of nicrozoft.org on Cloudflare Workers — no `base` prefix.
// `site` drives canonical URLs / OG tags (BaseLayout) and must be the apex host.
export default defineConfig({
  site: 'https://nicrozoft.org',
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
