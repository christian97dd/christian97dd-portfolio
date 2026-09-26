import { defineConfig } from 'astro/config';

// Served from GitHub Pages under the repo path until christian97dd.dev is set up.
// With the custom domain: site 'https://christian97dd.dev', no base, and public/CNAME.
export default defineConfig({
  site: 'https://christian97dd.github.io',
  base: '/christian97dd-portfolio',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
