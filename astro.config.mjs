import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://christian97dd.dev',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
