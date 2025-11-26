# Pride Concrete Lifting Website

This repository contains the source code for the **Pride Concrete Lifting** website (https://prideconcretelifting.com), a modern static site built with [Astro](https://astro.build/).

## 🚀 Getting Started

Follow these instructions to set up the project locally for development.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.17.1 or higher)
- [npm](https://www.npmjs.com/) (installed with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *Note: This project uses `@iconify-json/heroicons` for icons and specific Astro integrations.*

### Running Development Server

To start the local development server with hot module replacement:

```bash
npm run dev
```

Open your browser to `http://localhost:4321` to view the site.

## 📝 Content Management

The site's service pages are managed using **Astro Content Collections**.

### Updating Service Pages

Service pages are located in `src/content/services/`. Each file is a Markdown (`.md`) file representing a specific service (e.g., `driveways.md`).

**To edit a service:**
1.  Open the relevant `.md` file in `src/content/services/`.
2.  Update the **Frontmatter** (metadata at the top between `---`):
    *   `title`: The page heading and browser tab title.
    *   `description`: Used for SEO meta description.
    *   `heroImage`: Path to the main image (e.g., `/images/markets/we-lift-driveways.jpg`).
3.  Update the **Body** content using standard Markdown syntax.

**To add a new service:**
1.  Create a new `.md` file in `src/content/services/` (e.g., `patio-leveling.md`).
2.  Add the required frontmatter:
    ```markdown
    ---
    title: "Patio Leveling"
    description: "Expert patio leveling services..."
    heroImage: "/images/path/to/image.jpg"
    ---
    ```
3.  Write your content below the frontmatter.
4.  The new page will be automatically generated at `/services/patio-leveling`.

### Images

-   Static images are stored in the `public/images/` directory.
-   Reference them in markdown or code starting with `/images/...`.

## 🔍 SEO Configuration

Search Engine Optimization is a key part of this architecture.

### Global Configuration
-   **Base Layout:** `src/layouts/BaseLayout.astro` handles the global HTML structure, including:
    -   Canonical URLs (auto-generated).
    -   Open Graph (Facebook) and Twitter card meta tags.
    -   Structured Data (Schema.org).
-   **Sitemap:** Automatically generated at build time via `@astrojs/sitemap`. Configuration is in `astro.config.mjs`.

### Page-Level SEO
For every page, ensure the following are set correctly:
1.  **Title:** Be descriptive and include keywords (e.g., "Driveway Lifting & Leveling").
2.  **Description:** A concise summary (150-160 chars) appearing in search results.
3.  **Keywords:** (Optional) Can be passed to `BaseLayout` if needed, though modern search engines prioritize content.

### Redirects
Legacy URLs (from the previous version of the site) are redirected to new paths in `astro.config.mjs`:
```js
redirects: {
  '/driveways': '/services/driveways',
  // ...
}
```
Update this list if you change URL structures to maintain SEO ranking.

## 🛠 Technical Details

### Technology Stack
-   **Framework:** [Astro 5](https://astro.build/)
-   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
-   **Interactivity:**
    -   [Alpine.js](https://alpinejs.dev/) for lightweight UI interactions (mobile menu).
    -   [Vue.js](https://vuejs.org/) for complex components like the Contact Form.
-   **Icons:** `astro-icon` with Heroicons.

### Project Structure
-   `src/content/`: Markdown sources for service pages.
-   `src/pages/`: Route definitions.
    -   `index.astro`: Homepage.
    -   `services/[slug].astro`: Dynamic route for service pages.
-   `src/components/`: Reusable UI components (Nav, Footer, ContactForm).
-   `src/layouts/`: Page wrappers (`BaseLayout.astro`).

## 📦 Building and Deployment

To create a production build:

```bash
npm run build
```

This generates a `dist/` directory containing the static HTML, CSS, and JS files.

### Deployment
The `dist/` folder is ready to be uploaded to any static hosting provider (Netlify, Vercel, GitHub Pages, etc.).

---
*Maintained by the Pride Concrete Lifting Development Team.*
