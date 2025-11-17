# Astro Best Practices

**Skill Type:** Technical Patterns
**Domain:** Frontend Development
**Framework:** Astro 5.0+

## Overview

This skill provides best practices for building high-performance, AI-crawler-optimized websites with Astro framework in the Multi-Site Website Development System.

## When to Apply This Skill

- Building new Astro components
- Optimizing existing components for performance
- Deciding between static generation vs. server-side rendering
- Implementing Islands architecture (partial hydration)
- Ensuring AI crawler accessibility

## Core Principles

### 1. Static-First Philosophy

**Default Approach:** All pages should be statically generated (SSG) unless dynamic content is absolutely required.

```astro
---
// ✅ GOOD: Static generation by default
export const prerender = true; // Explicit (optional in SSG mode)

import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
---

<main>
  {posts.map(post => <article>{post.data.title}</article>)}
</main>
```

**Why:** AI crawlers (GPTBot, ClaudeBot) ignore client-side JavaScript. Static HTML ensures 100% content accessibility.

### 2. Zero JavaScript by Default

**Ship HTML/CSS only unless interactivity is explicitly needed.**

```astro
---
// ✅ GOOD: No JavaScript shipped
---

<section class="hero">
  <h1>Welcome to Our Site</h1>
  <p>This content is fully accessible to AI crawlers.</p>
</section>

<!-- ❌ BAD: Unnecessary hydration -->
<HeroSection client:load />
```

**Hydration Decision Tree:**

```
Is the component interactive? (buttons, forms, modals, carousels)
  ├─ YES → Use client:* directive
  │    ├─ Above fold + critical? → client:load
  │    ├─ Below fold? → client:visible
  │    └─ Low priority? → client:idle
  └─ NO → Ship as static HTML (no directive)
```

### 3. Client Directive Guidelines

**Choose the right hydration strategy:**

```astro
<!-- Critical above-fold interactivity -->
<MobileNavigation client:load />

<!-- Below-fold interactive elements -->
<ContactForm client:visible />

<!-- Low-priority features -->
<NewsletterSignup client:idle />

<!-- Responsive components -->
<DesktopSidebar client:media="(min-width: 768px)" />

<!-- Only client-side rendering (use sparingly!) -->
<ClientOnlyWidget client:only="react" />
```

**Performance Impact:**
- `client:load`: Hydrates immediately (adds to FCP/LCP)
- `client:visible`: Hydrates when scrolled into view (better LCP)
- `client:idle`: Hydrates after main thread idle (best for non-critical)
- `client:media`: Hydrates on media query match (responsive optimization)

### 4. Component Structure Standard

**Follow this order for consistency:**

```astro
---
// 1. IMPORTS (external → internal → types)
import { getCollection } from 'astro:content';
import { Button } from '@workspace/ui-components';
import { generateSchema } from '@workspace/seo-utils';
import type { CollectionEntry } from 'astro:content';

// 2. PROPS INTERFACE (always explicit, never implicit)
interface Props {
  title: string;
  description?: string;
  posts?: CollectionEntry<'blog'>[];
  variant?: 'primary' | 'secondary';
}

// 3. PROPS DESTRUCTURING (with defaults)
const {
  title,
  description = 'Default description',
  posts = [],
  variant = 'primary'
} = Astro.props;

// 4. DATA FETCHING & LOGIC
const recentPosts = posts.length > 0
  ? posts
  : await getCollection('blog', ({ data }) => data.featured);

const schemaMarkup = generateSchema({
  type: 'WebPage',
  name: title,
  description
});
---

<!-- 5. TEMPLATE (semantic HTML, Tailwind utilities) -->
<main class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold">{title}</h1>
  {description && <p class="mt-4 text-lg">{description}</p>}

  <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {recentPosts.map(post => (
      <article class="rounded-lg border p-6">
        <h2>{post.data.title}</h2>
      </article>
    ))}
  </div>
</main>

<!-- 6. SCHEMA MARKUP (for AI crawlers & SEO) -->
<script type="application/ld+json" set:html={JSON.stringify(schemaMarkup)} />

<!-- 7. SCOPED STYLES (only when Tailwind insufficient) -->
<style>
  /* Custom styles for complex patterns */
  article:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
</style>
```

### 5. Content Collections API (Required)

**Never hardcode content in components. Use Content Collections:**

```astro
---
// ❌ BAD: Hardcoded content
const posts = [
  { title: 'Post 1', slug: 'post-1' },
  { title: 'Post 2', slug: 'post-2' }
];

// ✅ GOOD: Content Collections
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
---
```

**Define schemas in `src/content/config.ts`:**

```typescript
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }).optional()
  })
});

export const collections = {
  blog: blogCollection
};
```

### 6. Semantic HTML (AI Crawler Optimization)

**Use proper HTML5 semantic elements:**

```astro
<!-- ✅ GOOD: Semantic structure -->
<body>
  <header>
    <nav aria-label="Main navigation">
      <a href="/">Home</a>
    </nav>
  </header>

  <main>
    <article>
      <h1>Article Title</h1>
      <section>
        <h2>Section Heading</h2>
        <p>Content...</p>
      </section>
    </article>

    <aside aria-label="Related posts">
      <h2>Related</h2>
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 Company Name</p>
  </footer>
</body>

<!-- ❌ BAD: Generic divs everywhere -->
<div class="header">
  <div class="nav">...</div>
</div>
<div class="content">...</div>
```

**Benefits for AI Crawlers:**
- Semantic tags help AI understand document structure
- ARIA labels provide context for assistive tech and AI
- Heading hierarchy (H1 → H2 → H3) improves content comprehension

### 7. SEO & Schema Markup

**Every key page must include schema markup:**

```astro
---
import { generateArticleSchema } from '@workspace/seo-utils';

const schema = generateArticleSchema({
  headline: frontmatter.title,
  author: frontmatter.author,
  datePublished: frontmatter.publishDate,
  description: frontmatter.description,
  image: frontmatter.image?.src
});
---

<head>
  <title>{frontmatter.title} | Site Name</title>
  <meta name="description" content={frontmatter.description} />
  <meta property="og:title" content={frontmatter.title} />
  <meta property="og:description" content={frontmatter.description} />
</head>

<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

**Required schema types:**
- Homepage: `Organization` or `WebSite`
- About page: `AboutPage`
- Blog posts: `Article` or `BlogPosting`
- Products/Services: `Product` or `Service`

### 8. Performance Optimization

**Image Optimization (Built-in):**

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<!-- ✅ GOOD: Automatic optimization -->
<Image
  src={heroImage}
  alt="Descriptive alt text for AI and accessibility"
  width={1200}
  height={600}
  format="webp"
  loading="lazy"
/>

<!-- ❌ BAD: Unoptimized external image -->
<img src="https://example.com/large-image.jpg" alt="..." />
```

**Bundle Size Optimization:**

```astro
---
// ✅ GOOD: Import only what you need
import { formatDate } from '@workspace/seo-utils';

// ❌ BAD: Import entire library
import * as utils from '@workspace/seo-utils';
---
```

### 9. TypeScript Strictness

**Always define prop interfaces:**

```astro
---
// ✅ GOOD: Explicit Props interface
interface Props {
  title: string;
  count?: number; // Optional with ?
}

const { title, count = 0 } = Astro.props;

// ❌ BAD: No interface (inferred types can be wrong)
const { title, count } = Astro.props;
---
```

### 10. Accessibility (WCAG 2.1 AA)

**Required accessibility patterns:**

```astro
<!-- Keyboard navigation -->
<button
  type="button"
  aria-label="Close modal"
  @click="closeModal"
  class="focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  ×
</button>

<!-- Skip to main content (keyboard users) -->
<a href="#main-content" class="sr-only focus:not-sr-only">
  Skip to main content
</a>

<!-- ARIA landmarks -->
<nav aria-label="Main navigation">...</nav>
<main id="main-content">...</main>

<!-- Color contrast (minimum 4.5:1 for normal text) -->
<p class="text-gray-900 bg-white"> <!-- ✅ Good contrast -->
<p class="text-gray-400 bg-white"> <!-- ❌ Insufficient contrast -->
```

## Common Patterns

### Layout Wrapper

```astro
---
// src/layouts/BaseLayout.astro
import { SEO } from 'astro-seo';

interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <SEO title={title} description={description} />
    <slot name="head" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

### Dynamic Routes

```astro
---
// src/pages/blog/[slug].astro
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post }
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();
---

<article>
  <h1>{post.data.title}</h1>
  <Content />
</article>
```

## Performance Checklist

- [ ] All pages statically generated (unless dynamic required)
- [ ] Zero JavaScript shipped for non-interactive components
- [ ] `client:visible` or `client:idle` for below-fold interactivity
- [ ] Images optimized (WebP format, responsive sizes, lazy loading)
- [ ] Schema markup on all key pages
- [ ] Semantic HTML structure (nav, main, article, aside, footer)
- [ ] Single H1 per page, progressive heading hierarchy
- [ ] Alt text on all images (including decorative: `alt=""`)
- [ ] Lighthouse score >90 (Performance, SEO, Accessibility)
- [ ] Bundle size <500KB JavaScript per page

## Related Documentation

- [Code Style Guide](../../../../docs/CODE_STYLE_GUIDE.md)
- [Tech Stack Details](../../../../docs/TECH_STACK.md)
- [SEO & WCAG Standards](../seo-wcag-standards/SKILL.md)

## Version History

- **v1.0 (2025-11-17):** Initial skill creation for Astro 5.0 best practices
