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
  // N.B. The site URL must match the primary domain configured in Netlify (www).
  // A mismatch here poisons every canonical tag and sitemap entry with a 301,
  // which Google Search Console reports as "Page with redirect".
  site: 'https://www.prideconcretelifting.com',
  // Netlify serves directory-style pages at /path/ and 301s the bare /path.
  // Enforcing the trailing slash here keeps dev, build, and CDN in agreement.
  trailingSlash: 'always',
  redirects: {
    '/driveways': '/services/driveways/',
    '/pooldecks': '/services/pooldecks/',
    '/roadways': '/services/roadways/',
    '/sidewalks': '/services/sidewalks/',
  },
  integrations: [
    mdx(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/admin') && !page.includes('/test'),
    }), 
    alpinejs(), 
    icon(), 
    vue()
  ],
  vite: {
    server: {
      watch: {
        ignored: ['**/test-results/**'],
      },
    },
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});