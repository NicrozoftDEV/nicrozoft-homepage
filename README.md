# nicrozoft-homepage

The Nicrozoft website — **[nicrozoft.org](https://nicrozoft.org)**.
Built with [Astro](https://astro.build) and served on Cloudflare Workers.

## Develop

```sh
bun install
bun run dev      # local dev server
bun run build    # production build → dist/
```

## Deploy

Pushes to `main` build and deploy via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
(`astro build && wrangler deploy`). Requires repo secrets `CLOUDFLARE_API_TOKEN`
(Workers Scripts + Workers Routes edit permissions on the zone) and
`CLOUDFLARE_ACCOUNT_ID`. Trigger manually from the Actions tab if needed.

## License

Source-available — contributions welcome, redistribution not. See [LICENSE](LICENSE).
