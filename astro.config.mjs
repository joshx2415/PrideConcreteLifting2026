// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

import icon from 'astro-icon';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://prideconcretelifting.com',
  integrations: [mdx(), sitemap(), tailwind(), alpinejs(), icon(), vue()],
  vite: {
    server: {
      watch: {
        ignored: ['**/test-results/**'],
      },
    },
  },
});