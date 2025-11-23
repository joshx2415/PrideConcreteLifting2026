// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';

import icon from 'astro-icon';

import vue from '@astrojs/vue';


import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  site: 'https://prideconcretelifting.com',
  redirects: {
    '/driveways': '/services/driveways',
    '/pooldecks': '/services/pooldecks',
    '/roadways': '/services/roadways',
    '/sidewalks': '/services/sidewalks',
  },
  integrations: [mdx(), sitemap(), alpinejs(), icon(), vue()],
  vite: {
    server: {
      watch: {
        ignored: ['**/test-results/**'],
      },
    },

    plugins: [tailwindcss()],
  },
});