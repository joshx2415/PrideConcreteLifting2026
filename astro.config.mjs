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
  // N.B. Legacy shortcut redirects live in netlify.toml as true 301s.
  // Astro's static `redirects` emits meta-refresh stubs served as 200s —
  // exactly the shadow GSC flagged before. Do not resurrect them here.
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      // N.B. No `lastmod: new Date()` — stamping every page as freshly
      // modified at every build teaches Google to distrust our sitemap.
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