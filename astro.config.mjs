import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://katfalls.com',
  redirects: {
    '/books/dark-life-series': '/series/dark-life',
    '/books/inhuman-series': '/series/inhuman',
  },
});
