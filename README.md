# Astro Website

This is a website built with [Astro](https://astro.build/), a modern static site generator. This README provides instructions for setting up, developing, and deploying the project.

## Getting Started

Follow these instructions to get the project running locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or later recommended)
- [npm](https://www.npmjs.com/) (or another package manager like yarn or pnpm)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server, run the following command:

```bash
npm run dev
```

This will start a hot-reloading development server, typically at `http://localhost:4321`.

## Project Structure

The project follows a standard Astro project structure:

-   `src/`: Contains all of the website's source code.
    -   `assets/`: For static assets like images, fonts, etc.
    -   `components/`: Reusable Astro, Vue, or other framework components.
    -   `content/`: For content collections (e.g., blog posts, documentation).
    -   `layouts/`: Defines the basic UI structure for pages.
    -   `pages/`: Each file in this directory becomes a page on your site.
    -   `styles/`: For global CSS styles.
-   `public/`: For files that don't need to be processed (e.g., `favicon.ico`, `robots.txt`).
-   `astro.config.mjs`: The Astro configuration file.
-   `package.json`: Lists project dependencies and scripts.
-   `tailwind.config.mjs`: The Tailwind CSS configuration file.

## Creating and Updating Pages

### Astro Pages

To create a new page, add a `.astro` file to the `src/pages/` directory. The filename will determine the page's URL. For example, `src/pages/about.astro` will create a page at `/about`.

### Markdown/MDX Pages

You can also create pages using Markdown (`.md`) or MDX (`.mdx`) in the `src/pages/` directory. This is useful for content-heavy pages like blog posts or documentation.

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. You can add utility classes directly to your HTML elements. For global styles, edit the files in the `src/styles/` directory.

The Tailwind CSS configuration is in `tailwind.config.mjs`. You can customize your design system (colors, fonts, spacing, etc.) in this file.

## Icons

We use the [`astro-icon`](https://github.com/natemoo-re/astro-icon) component to display icons. This component makes it easy to add icons from various icon sets. The project is pre-configured with the Heroicons set.

**Example Usage:**

```astro
---
import { Icon } from 'astro-icon/components';
---

<Icon name="heroicons:arrow-right" />
```

To add other icon sets, you'll need to install them via npm (e.g., `npm install @iconify-json/mdi`) and then you can use them in your components.

## Deployment

To build the site for production, run:

```bash
npm run build
```

This will create a `dist/` directory with the optimized, static files for your website. You can then deploy this directory to any static hosting provider like Netlify, Vercel, or GitHub Pages.
