---
name: ai-crawler-optimization
description: Optimize websites for AI crawler indexing (GPTBot, ClaudeBot, Google-Extended, ChatGPT-User). Ensures server-side rendering, schema markup, semantic HTML, and proper robots.txt configuration. Use when validating AI readiness or optimizing for AI search engines.
---

# AI Crawler Optimization

## Purpose
Ensures all client websites are fully accessible and optimized for AI crawlers. AI search engines (ChatGPT, Claude, Perplexity) are becoming primary discovery mechanisms alongside Google. Content invisible to AI crawlers is invisible to AI-powered search.

---

## Why AI Crawler Optimization Matters

**AI Crawlers Ignore:**
- ❌ Client-side rendered JavaScript
- ❌ Content loaded via AJAX/fetch after page load
- ❌ Dynamic DOM manipulation
- ❌ Single-page application (SPA) navigation

**AI Crawlers Require:**
- ✅ Server-side rendered (SSR) HTML
- ✅ Structured data (JSON-LD schema markup)
- ✅ Semantic HTML elements
- ✅ Access granted in robots.txt

---

## AI Crawler User Agents

### Major AI Crawlers to Allow

```txt
# OpenAI (ChatGPT)
GPTBot
ChatGPT-User

# Anthropic (Claude)
ClaudeBot
anthropic-ai

# Google (Bard/Gemini)
Google-Extended

# Perplexity
PerplexityBot

# Common.Crawl (AI training data)
CCBot
```

---

## robots.txt Configuration

### ✅ CORRECT - Allow AI Crawlers (Default)

**Location:** `sites/<client-name>/public/robots.txt`

```txt
# Default: Allow all crawlers including AI
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://client-site.com/sitemap.xml

# Optional: Rate limiting for specific bots
User-agent: GPTBot
Crawl-delay: 2

User-agent: ClaudeBot
Crawl-delay: 2
```

### ❌ WRONG - Blocking AI Crawlers

```txt
# DO NOT DO THIS (blocks AI indexing)
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /
```

### Exceptions (When to Block)

**Only block AI crawlers if:**
1. Client explicitly requests it (document reason)
2. Staging/development environments
3. Internal tools/admin areas
4. Password-protected pages

**Example:** Staging environment robots.txt
```txt
# Staging: Block all crawlers
User-agent: *
Disallow: /
```

---

## Server-Side Rendering (SSR) Requirements

### Rule: All Content Must Be SSR

**Astro Default Behavior:**
- ✅ Static site generation (SSG) at build time
- ✅ All content rendered to HTML before deployment
- ✅ Zero JavaScript by default → perfect for AI crawlers

### Verify SSR is Enabled

**Check:** `sites/<client-name>/astro.config.mjs`

```javascript
export default defineConfig({
  output: 'static', // ✅ Correct: SSG mode (server-rendered)
  // NOT 'server' or 'hybrid' for static sites
});
```

### Test SSR Rendering

```bash
# Build site
nx build client-name

# Check generated HTML files
cat dist/index.html

# Content should be visible in HTML, not loaded via <script>
```

---

## Schema Markup (JSON-LD)

### Required Schema Types

**Homepage:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Client Company Name",
  "url": "https://client-site.com",
  "logo": "https://client-site.com/logo.png",
  "description": "Client description",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  }
}
```

**Blog Posts:**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "description": "Post description",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "datePublished": "2025-11-08",
  "image": "https://client-site.com/post-image.jpg"
}
```

**Services/Products:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Service Name",
  "description": "Service description",
  "provider": {
    "@type": "Organization",
    "name": "Client Company"
  }
}
```

### Implementation in Astro

**Using SEO utilities:**
```astro
---
// sites/client-name/src/pages/index.astro
import { generateOrganizationSchema } from '@workspace/seo-utils';

const schema = generateOrganizationSchema({
  name: "Client Company",
  url: "https://client-site.com",
  logo: "https://client-site.com/logo.png"
});
---

<html>
  <head>
    <script type="application/ld+json" set:html={JSON.stringify(schema)} />
  </head>
  <body>
    <!-- Content -->
  </body>
</html>
```

### Validation

**Tools:**
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

```bash
# Test schema markup
curl https://client-site.com | grep 'application/ld+json'
```

---

## Semantic HTML Structure

### Required Semantic Elements

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Page Title</title>
  <meta name="description" content="Page description" />
</head>
<body>
  <!-- Main navigation -->
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>

  <!-- Main content area -->
  <main>
    <!-- Primary article/content -->
    <article>
      <header>
        <h1>Page Heading (Single H1 Only)</h1>
      </header>

      <section>
        <h2>Section Heading</h2>
        <p>Content...</p>
      </section>

      <footer>
        <p>Article metadata</p>
      </footer>
    </article>

    <!-- Supplementary content -->
    <aside>
      <h2>Related Content</h2>
    </aside>
  </main>

  <!-- Site footer -->
  <footer>
    <p>&copy; 2025 Client Company</p>
  </footer>
</body>
</html>
```

### Heading Hierarchy Rules

**✅ CORRECT:**
```html
<h1>Page Title</h1>          <!-- One H1 per page -->
  <h2>Section 1</h2>
    <h3>Subsection 1.1</h3>
    <h3>Subsection 1.2</h3>
  <h2>Section 2</h2>
    <h3>Subsection 2.1</h3>
```

**❌ WRONG:**
```html
<h1>Page Title</h1>
<h1>Another Top Level</h1>   <!-- Multiple H1s -->
  <h3>Skipped H2</h3>         <!-- Skipped heading level -->
```

---

## Common Mistakes & Fixes

### ❌ Mistake 1: Client-Side Content Loading

**Problem:**
```astro
---
// BAD: Content loaded client-side
---
<div id="content"></div>
<script>
  fetch('/api/blog-posts')
    .then(r => r.json())
    .then(posts => {
      document.getElementById('content').innerHTML =
        posts.map(p => `<h2>${p.title}</h2>`).join('');
    });
</script>
```

**Fix:**
```astro
---
// GOOD: Content server-rendered
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
---
<div id="content">
  {posts.map(post => (
    <article>
      <h2>{post.data.title}</h2>
      <p>{post.data.description}</p>
    </article>
  ))}
</div>
```

---

### ❌ Mistake 2: Missing Schema Markup

**Problem:**
```astro
<!-- No structured data -->
<article>
  <h1>Blog Post Title</h1>
  <p>Content...</p>
</article>
```

**Fix:**
```astro
---
const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Blog Post Title",
  "datePublished": "2025-11-08"
};
---
<head>
  <script type="application/ld+json" set:html={JSON.stringify(schema)} />
</head>
<article>
  <h1>Blog Post Title</h1>
  <p>Content...</p>
</article>
```

---

### ❌ Mistake 3: Non-Semantic HTML

**Problem:**
```html
<!-- Generic divs everywhere -->
<div class="header">
  <div class="nav">
    <a href="/">Home</a>
  </div>
</div>
<div class="content">
  <div class="post">...</div>
</div>
```

**Fix:**
```html
<!-- Semantic elements -->
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>
<main>
  <article>...</article>
</main>
```

---

## llms.txt File (Optional Enhancement)

**Purpose:** Provide AI crawlers with structured site information

**Location:** `sites/<client-name>/public/llms.txt`

**Example:**
```txt
# Client Company

> Client tagline/description

## About
Client Company provides [services] to [audience].

## Key Pages
- Homepage: https://client-site.com
- Services: https://client-site.com/services
- Blog: https://client-site.com/blog
- Contact: https://client-site.com/contact

## Topics
- Topic 1
- Topic 2
- Topic 3

## Contact
Email: contact@client-site.com
Phone: (555) 123-4567
```

---

## Validation Checklist

### Pre-Deployment AI Readiness Check

- [ ] **SSR Enabled:** `astro.config.mjs` has `output: 'static'`
- [ ] **robots.txt:** AI crawlers allowed (not blocked)
- [ ] **Schema Markup:** JSON-LD on all key pages
- [ ] **Semantic HTML:** `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>` used
- [ ] **Single H1:** One H1 per page, progressive heading hierarchy
- [ ] **Alt Text:** All images have descriptive alt text
- [ ] **No Client-Side Content:** All content server-rendered
- [ ] **llms.txt:** Optional but recommended

---

## Testing Procedures

### Test 1: View Source
```bash
# Fetch page as AI crawler would
curl -A "GPTBot" https://client-site.com

# Verify content visible in raw HTML
# If you see content in response → ✅ Good
# If you see empty divs or loading spinners → ❌ Bad
```

### Test 2: Disable JavaScript
1. Open site in browser
2. Disable JavaScript (Chrome DevTools → Settings → Debugger → Disable JavaScript)
3. Refresh page
4. **All content should still be visible**

### Test 3: Validate Schema
```bash
# Extract schema from page
curl https://client-site.com | grep -A 20 'application/ld+json'

# Paste into: https://validator.schema.org/
```

### Test 4: Check robots.txt
```bash
# Verify AI crawlers allowed
curl https://client-site.com/robots.txt

# Should NOT see:
# User-agent: GPTBot
# Disallow: /
```

---

## Usage Examples

### Example 1: Audit Existing Site
```bash
# Run AI readiness checks
@ai-readiness-auditor audit sites/client-name

# Review report for:
# - SSR verification
# - Schema markup coverage
# - robots.txt configuration
# - Semantic HTML usage
```

### Example 2: Fix Client-Side Content
```astro
<!-- Before (BAD) -->
<div id="services"></div>
<script>
  loadServices(); // Client-side function
</script>

<!-- After (GOOD) -->
---
import { getCollection } from 'astro:content';
const services = await getCollection('services');
---
<div id="services">
  {services.map(service => (
    <article>
      <h3>{service.data.name}</h3>
      <p>{service.data.description}</p>
    </article>
  ))}
</div>
```

---

## Related Skills
- `astro-component-structure` - Ensures SSR-compatible components
- `quality-gate-validation` - Gate 5 validates AI readiness
- `sveltia-cms-setup` - CMS content is SSR-compatible

---

**Version:** 1.0
**Last Updated:** November 2025
**Trigger Terms:** AI crawler, GPTBot, ClaudeBot, SSR, schema markup, robots.txt, semantic HTML, AI search optimization
