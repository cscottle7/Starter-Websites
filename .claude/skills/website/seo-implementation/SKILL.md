---
name: seo-implementation
description: SEO best practices for Astro websites including meta tags, schema markup, sitemaps, and AI crawler optimization
keywords: [seo, schema-markup, meta-tags, sitemap, ai-crawlers]
version: 1.0.0
---

# SEO Implementation Guide

## Meta Tags (Required for Every Page)

### Basic Meta Tags

**In Base Layout:**

```astro
---
// src/layouts/BaseLayout.astro
interface Props {
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}

const {
  title,
  description,
  image = '/og-default.jpg',
  noindex = false
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalURL} />
  {noindex && <meta name="robots" content="noindex,nofollow" />}

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={new URL(image, Astro.site)} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={canonicalURL} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={new URL(image, Astro.site)} />

  <slot name="head" />
</head>
<body>
  <slot />
</body>
</html>
```

**Usage:**
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="About Us | Company Name"
  description="Learn about our mission, values, and the team behind Company Name."
>
  <!-- Page content -->
</BaseLayout>
```

---

## JSON-LD Schema Markup

### Organization Schema (Homepage)

```astro
---
// src/pages/index.astro
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://www.example.com",
  "logo": "https://www.example.com/logo.png",
  "description": "Brief company description",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-555-5555",
    "contactType": "Customer Service",
    "email": "info@example.com"
  },
  "sameAs": [
    "https://www.facebook.com/company",
    "https://twitter.com/company",
    "https://www.linkedin.com/company/company"
  ]
};
---

<BaseLayout title="Home" description="...">
  <script type="application/ld+json" set:html={JSON.stringify(organizationSchema)} />
  <!-- Page content -->
</BaseLayout>
```

---

### Article Schema (Blog Posts)

```astro
---
// src/pages/blog/[slug].astro
import { getEntry } from 'astro:content';

const { slug } = Astro.params;
const post = await getEntry('blog', slug);

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": post.data.title,
  "description": post.data.description,
  "image": new URL(post.data.image, Astro.site).toString(),
  "datePublished": post.data.publishDate.toISOString(),
  "dateModified": post.data.updatedDate?.toISOString() || post.data.publishDate.toISOString(),
  "author": {
    "@type": "Person",
    "name": post.data.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Company Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.example.com/logo.png"
    }
  }
};
---

<BaseLayout title={post.data.title} description={post.data.description}>
  <script type="application/ld+json" set:html={JSON.stringify(articleSchema)} />
  <article>
    <h1>{post.data.title}</h1>
    <Content />
  </article>
</BaseLayout>
```

---

### BreadcrumbList Schema

```astro
---
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.example.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://www.example.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Article Title",
      "item": "https://www.example.com/blog/article-slug"
    }
  ]
};
---
```

---

## Heading Hierarchy (Critical for SEO)

### Rules:
- **One H1 per page** (page title)
- **Progressive hierarchy** (H1 → H2 → H3 → H4, never skip levels)
- **Descriptive headings** (not "Click Here" or "Learn More")

### Example:
```astro
<h1>Main Page Title</h1> <!-- Only one H1 -->

<section>
  <h2>Section Title</h2> <!-- Major section -->

  <h3>Subsection Title</h3> <!-- Subsection under H2 -->
  <p>Content...</p>

  <h3>Another Subsection</h3> <!-- Same level as previous H3 -->

  <h2>Another Major Section</h2> <!-- Back to H2 level -->
</section>
```

---

## Image Optimization for SEO

### Requirements:
1. **Descriptive alt text** (explain what's in the image)
2. **File names** (descriptive, not IMG_1234.jpg)
3. **Responsive sizes** (use Astro Image component)
4. **WebP format** (Astro handles conversion)

### Example:
```astro
---
import { Image } from 'astro:assets';
import teamPhoto from '../images/team-collaboration.jpg';
---

<!-- Good: Descriptive alt text, optimized image -->
<Image
  src={teamPhoto}
  alt="Marketing team collaborating on strategy in modern office"
  width={1200}
  height={800}
  format="webp"
  loading="lazy"
/>

<!-- Bad: Generic alt text, no optimization -->
<img src="/images/IMG_1234.jpg" alt="image" />
```

---

## XML Sitemap Generation

### Astro Sitemap Integration

**Install:**
```bash
pnpm add @astrojs/sitemap
```

**Configure:**
```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.example.com',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/admin') &&
        !page.includes('/draft') &&
        !page.includes('/test'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
```

**Generated sitemap at:** `https://www.example.com/sitemap-0.xml`

---

## robots.txt Configuration

### AI-Crawler Friendly robots.txt

**File:** `public/robots.txt`

```
# Allow all crawlers (including AI crawlers)
User-agent: *
Allow: /

# AI Crawlers (specifically allow)
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

# Disallow admin/internal pages
Disallow: /admin/
Disallow: /test/
Disallow: /draft/

# Sitemap
Sitemap: https://www.example.com/sitemap-0.xml
```

---

## AI Crawler Optimization (llms.txt)

### llms.txt for AI Discoverability

**File:** `public/llms.txt`

```
# Company Name - AI-Readable Site Information

## About
Company Name provides [brief description of what you do].

## Key Pages
- Homepage: https://www.example.com/
- About Us: https://www.example.com/about
- Services: https://www.example.com/services
- Blog: https://www.example.com/blog
- Contact: https://www.example.com/contact

## Primary Topics
- [Topic 1]: [Brief description]
- [Topic 2]: [Brief description]
- [Topic 3]: [Brief description]

## Contact Information
- Email: info@example.com
- Phone: +1-555-555-5555
- Address: 123 Main Street, City, State 12345
```

---

## Internal Linking Strategy

### Best Practices:
1. **Descriptive anchor text** (not "click here")
2. **Contextual relevance** (link to related content)
3. **3-5 internal links per page** (reasonable, not excessive)

### Example:
```astro
<!-- Good: Descriptive anchor text -->
<p>
  Learn more about our
  <a href="/services/web-development" class="text-primary hover:underline">
    web development services
  </a>
  and how we can help your business grow.
</p>

<!-- Bad: Generic anchor text -->
<p>
  We offer web development services.
  <a href="/services">Click here</a> to learn more.
</p>
```

---

## Performance Optimization (SEO Impact)

### Core Web Vitals:
- **LCP (Largest Contentful Paint):** <2.5 seconds
- **FID (First Input Delay):** <100 milliseconds
- **CLS (Cumulative Layout Shift):** <0.1

### Optimization Techniques:
1. **Lazy load images** below the fold
2. **Preload critical fonts**
3. **Minimize JavaScript** (Astro Islands)
4. **Use CDN for static assets**

```astro
---
// Preload critical fonts
---

<head>
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin />
</head>
```

---

## SEO Checklist (Per Page)

- [ ] **Title tag** (50-60 characters, includes target keyword)
- [ ] **Meta description** (150-160 characters, compelling CTA)
- [ ] **Canonical URL** (prevents duplicate content issues)
- [ ] **H1 tag** (one per page, matches title intent)
- [ ] **Heading hierarchy** (progressive H1 → H2 → H3)
- [ ] **Image alt text** (all images have descriptive alt text)
- [ ] **Internal links** (3-5 contextual links to related pages)
- [ ] **Schema markup** (Organization, Article, or relevant type)
- [ ] **Mobile-friendly** (responsive design, tested at 375px)
- [ ] **Page speed** (Lighthouse score >90)

---

## Related Skills
- [accessibility-validation](../accessibility-validation/SKILL.md)
- [design-to-code-workflow](../design-to-code-workflow/SKILL.md)
