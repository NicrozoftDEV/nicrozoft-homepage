/**
 * Edge entry for the Nicrozoft site on Cloudflare Workers.
 *
 * `wrangler.jsonc` sets `assets.run_worker_first: true`, so every request hits
 * this Worker first. It handles two kinds of redirect, then hands everything
 * else to the static build via the ASSETS binding (which applies html_handling
 * and the configured 404 page):
 *
 *   1. Canonicalize the `www` host to the apex.
 *   2. Redirect the old flat GitHub Pages URLs (/win11ext.html, /batvirus.html,
 *      …) to the new nested collection paths (/os/*, /virus/*, /tools/*).
 *      Top-level pages (/about, /oslist, …) kept their path and fall through.
 */

// Old flat slug → new nested path. OS and tools keep their slug (just gain a
// prefix); three virus pages were renamed to kebab-case.
const OLD_TO_NEW = Object.fromEntries([
  ...['wih11', 'wih11shit', 'wih7', 'wih7ghostshadow', 'wih7hell', 'wihvista',
      'wihvistabroken', 'wihxp', 'win10ext', 'win10to11', 'win11ext', 'win7to11',
      'win7tolh', 'winlh4074', 'winvistatolh', 'winxptheme', 'winxptolh',
     ].map((s) => [s, `/os/${s}`]),
  ...['7gssol', 'nishmario', 'nzi964', 'officesadepa', 'winfs',
     ].map((s) => [s, `/tools/${s}`]),
  ...Object.entries({
    batvirus: 'batvirus',
    vistahorror: 'vistahorror',
    Nicozoft_super_virus: 'nicozoft-super-virus',
    Nicrozoft_Lframe32_Virus: 'nicrozoft-lframe32-virus',
    Nicrozoft_Super_WindowsKiller_Virus: 'nicrozoft-super-windowskiller-virus',
  }).map(([oldSlug, newSlug]) => [oldSlug, `/virus/${newSlug}`]),
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. www → apex.
    if (url.hostname === 'www.nicrozoft.org') {
      url.hostname = 'nicrozoft.org';
      return Response.redirect(url.toString(), 301);
    }

    // 2. Old flat URL → new nested path. Normalize by stripping the leading
    //    slash, any trailing slash, and a `.html` suffix to get the old slug.
    const slug = url.pathname.replace(/^\/+/, '').replace(/\/+$/, '').replace(/\.html$/i, '');
    const dest = OLD_TO_NEW[slug];
    if (dest) {
      url.pathname = dest;
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
