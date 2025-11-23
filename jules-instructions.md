
# Project Update: Refactor Service Pages to Astro Content Collections

Hi Jules,

We are moving forward with refactoring our services pages to Astro's **Content Collections** pattern.

**IMPORTANT URL CHANGE:**
Due to the structure of the Content Collection, the URLs for the service pages **will change** from `/driveways` to **`/services/driveways`**.

This change requires us to update the navigation links. Instead of just updating the hardcoded links, we will make them dynamic, so they automatically update when a new service is added.

Here is the full plan, including the new navigation refactor.

### 🎯 Mission

Convert all existing, static service pages (e.g., `src/pages/driveways.astro`, `src/pages/pool-decks.astro`) into a single, dynamic Content Collection and update all navigation links to be dynamically built from this new data source.

---

## Phase 1: Set Up the Content Collection

### 1. Create the Folder
Create a new folder at `src/content/services/`.

### 2. Define the Schema
Create a new file at `src/content/config.ts` (or add to it, if it exists). This defines the structure of the data in our service Markdown files.

**`src/content/config.ts`**
```typescript
import { defineCollection, z } from 'astro:content';

// Define the schema for our 'services'
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Please ADJUST this schema to match the data in our current pages.
    title: z.string(),
    description: z.string(), 
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'services': servicesCollection,
};
````

-----

## Phase 2: Create the Dynamic Route Template

### 1\. Create the Dynamic Route File

Create a new file at **`src/pages/services/[slug].astro`**.

### 2\. Use an Old Page as a Starting Point

Copy the contents of one of our *existing* service pages (like `src/pages/driveways.astro`) into the new `src/pages/services/[slug].astro` file.

### 3\. Add the Dynamic Logic

Modify the new `[slug].astro` file by adding the `getStaticPaths` function and replacing the static HTML with dynamic props.

**`src/pages/services/[slug].astro`**

```astro
---
// Import the 'getCollection' helper from astro:content
import { getCollection } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro'; // Or whatever layout we use

// 1. Add getStaticPaths to generate all service pages
export async function getStaticPaths() {
  const services = await getCollection('services');

  return services.map(service => ({
    params: { slug: service.slug },
    props: { service },
  }));
}

// 2. Get the 'service' prop for this specific page
const { service } = Astro.props;

// 3. Get the rendered HTML content from the Markdown file
const { Content } = await service.render();
---

<BaseLayout 
  title={service.data.title} 
  description={service.data.description}
>
  
  <img src={service.data.heroImage} alt={service.data.title} />

  <h1>{service.data.title}</h1>

  <div class="prose">
    <Content />
  </div>

  {service.data.gallery && (
    <div class="gallery">
      {service.data.gallery.map(image => (
        <img src={image} alt="Service gallery image" />
      ))}
    </div>
  )}

</BaseLayout>
```

-----

## Phase 3: Migrate & Clean Up (One by One)

1.  **Pick a page:** Start with `src/pages/driveways.astro`.
2.  **Create Markdown:** Create `src/content/services/driveways.md`.
3.  **Transfer Content:** Move all frontmatter and body HTML content from the old `.astro` file into the new `.md` file, converting HTML to Markdown where applicable.
4.  **Test:** Visit `http://localhost:4321/services/driveways` and verify the new dynamic page works.
5.  **DELETE:** Once confirmed, **delete the old `src/pages/driveways.astro` file.**

Repeat steps 1-5 for all other existing service pages.

-----

## **Phase 4: Refactor Navigation Links (NEW CRITICAL TASK)**

We must now remove the hardcoded links in the navigation and replace them with a dynamic list powered by the Content Collection data. This is a one-time fix for maintainability.

You will need to identify the component containing the navigation (likely a layout or header component).

### 1\. Query the Collection in the Nav Component

In the **frontmatter** of the header/nav component, query all service titles and slugs:

```astro
---
import { getCollection } from 'astro:content';

// Sort by title for clean navigation
const services = await getCollection('services', ({ data }) => {
    return data.title !== undefined; // Simple filter to ensure a title exists
});
services.sort((a, b) => a.data.title.localeCompare(b.data.title));
---
```

### 2\. Replace Hardcoded HTML with Loops

Replace the existing hardcoded HTML lists with a `.map()` loop that generates the new dynamic URLs (`/services/${service.slug}`).

**A. Dropdown Menu (Desktop):**

Replace the existing `<ul>` content with this loop:

```astro
<ul class="dropdown-menu absolute left-0 mt-1 w-44 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-navy-900 rounded-md shadow-xl overflow-hidden">
  {services.map((service) => (
    <li>
      <a class="block px-4 py-2 text-sm text-white hover:bg-pride-red transition-colors" 
         href={`/services/${service.slug}`}>
        {service.data.title}
      </a>
    </li>
  ))}
</ul>
```

**B. Mobile/Aside Menu:**

Replace the hardcoded `<a>` tags with this loop:

```astro
<div class="pt-4 mt-4 border-t border-white/10">
  <span class="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-white/50 uppercase tracking-wider">
    <Icon name="fa-solid:tools" class="w-4 h-4" />Areas of Expertise
  </span>
  {services.map((service) => (
    <a @click="isOpen = false" 
       href={`/services/${service.slug}`} 
       class="mobile-nav-item pl-12">
      {service.data.title}
    </a>
  ))}
</div>
```

-----

## Definition of Done

  * The `src/content/config.ts` file is created and has a `services` schema.
  * The `src/content/services/` folder is populated with `.md` files for all our services.
  * The `src/pages/services/[slug].astro` template exists and correctly renders all services.
  * **All hardcoded service links in the navigation (desktop and mobile) have been replaced with a dynamic loop that queries the `services` collection.**
  * All the old, static service pages (e.g., `src/pages/driveways.astro`) have been **deleted**.