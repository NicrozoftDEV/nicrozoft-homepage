// Single source of truth for the public contact email — stored base64-encoded
// so the plaintext address appears neither in the source nor in the built HTML.
// The address is reconstructed client-side by the de-obfuscation script in
// BaseLayout, so scrapers reading either the repo or the static markup never
// see a plaintext address or a `mailto:` link.
//
// To change it: `node -e "process.stdout.write(btoa('you@example.com'))"`.
export const CONTACT_EMAIL_ENCODED = 'Y29udGFjdEBuaWNyb3pvZnQub3Jn';
