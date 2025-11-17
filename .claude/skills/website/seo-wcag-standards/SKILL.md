# SEO & WCAG Standards

**Skill Type:** Standards & Compliance
**Domain:** SEO, Accessibility
**Standards:** WCAG 2.1 AA, Schema.org, AI Crawler Optimization

## Overview

This skill provides comprehensive SEO and accessibility standards for the Multi-Site Website Development System, ensuring compliance with WCAG 2.1 AA and optimization for AI crawlers.

## When to Apply This Skill

- Auditing pages for SEO compliance
- Validating accessibility (WCAG 2.1 AA)
- Creating new pages or components
- Optimizing content for AI discovery (ChatGPT, Claude)
- Running quality gate validation

---

## Part A: SEO Standards

### 1. Meta Tags (Required on All Pages)

**Minimum Required:**

```html
<head>
  <title>Page Title (50-60 chars) | Site Name</title>
  <meta name="description" content="Page description (150-160 chars summarizing content)" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://site.com/page-url" />
</head>
```

**Open Graph (Social Sharing):**

```html
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Page description" />
<meta property="og:image" content="https://site.com/images/og-image.jpg" />
<meta property="og:url" content="https://site.com/page-url" />
<meta property="og:type" content="website" />
```

**Twitter Cards:**

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Page Title" />
<meta name="twitter:description" content="Page description" />
<meta name="twitter:image" content="https://site.com/images/twitter-image.jpg" />
```

**Validation Criteria:**
- ✅ Title length: 50-60 characters (truncated in SERPs if longer)
- ✅ Description length: 150-160 characters
- ✅ Unique title/description per page (no duplicates)
- ✅ Keywords naturally integrated (no keyword stuffing)

---

### 2. Schema Markup (JSON-LD)

**Required Schema Types:**

#### Homepage: Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://company.com",
  "logo": "https://company.com/logo.png",
  "description": "Company description",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://twitter.com/company",
    "https://linkedin.com/company/company"
  ]
}
```

#### Blog Posts: Article

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "datePublished": "2025-11-17",
  "dateModified": "2025-11-17",
  "description": "Article description",
  "image": "https://site.com/article-image.jpg",
  "publisher": {
    "@type": "Organization",
    "name": "Company Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://site.com/logo.png"
    }
  }
}
```

**Validation:**
- Use Google Rich Results Test: https://search.google.com/test/rich-results
- Ensure schema validates with zero errors

---

### 3. Heading Hierarchy

**Rules:**
1. **Single H1 per page** (page title)
2. **Progressive hierarchy:** H1 → H2 → H3 → H4 (never skip levels)
3. **Semantic usage:** Headings describe content structure, not styling

**✅ GOOD Example:**

```html
<h1>Main Page Title</h1>
  <h2>Section 1</h2>
    <h3>Subsection 1.1</h3>
    <h3>Subsection 1.2</h3>
  <h2>Section 2</h2>
    <h3>Subsection 2.1</h3>
```

**❌ BAD Example:**

```html
<h1>Main Title</h1>
<h1>Another Main Title</h1> <!-- ❌ Multiple H1s -->
<h2>Section</h2>
<h4>Skipped H3</h4> <!-- ❌ Skipped heading level -->
```

---

### 4. Image Optimization

**Required Attributes:**

```html
<!-- ✅ GOOD -->
<img
  src="/images/hero.webp"
  alt="Descriptive text explaining image content for screen readers and AI"
  width="1200"
  height="600"
  loading="lazy"
/>

<!-- ❌ BAD -->
<img src="/hero.jpg" /> <!-- Missing alt, width, height, not optimized -->
```

**Rules:**
- **Alt text:** Descriptive (10-125 chars), not decorative ("image of...")
- **Decorative images:** Use `alt=""` (empty, not omitted)
- **Format:** WebP or AVIF (modern formats, smaller sizes)
- **Lazy loading:** `loading="lazy"` for below-fold images
- **Dimensions:** Always specify `width` and `height` (prevents CLS)

---

### 5. robots.txt (AI Crawler Friendly)

**Required Configuration:**

```txt
# Allow all crawlers by default
User-agent: *
Allow: /

# AI Crawlers (DO NOT BLOCK unless client requests)
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Google-Extended
Allow: /

# Sitemap location
Sitemap: https://site.com/sitemap.xml
```

---

### 6. llms.txt (AI Discoverability)

**Required File:** `public/llms.txt`

**Example Content:**

```txt
# Company Name

> Brief description of the company and its services (1-2 sentences)

## About

Detailed information about the company, products, services, and expertise.

## Services

- Service 1: Description
- Service 2: Description
- Service 3: Description

## Contact

- Website: https://company.com
- Email: contact@company.com
- Phone: +1-555-123-4567

## Key Pages

- About: https://company.com/about
- Services: https://company.com/services
- Blog: https://company.com/blog
- Contact: https://company.com/contact
```

**Purpose:** Helps AI agents (ChatGPT, Claude) understand site content for better recommendations and citations.

---

### 7. Sitemap (XML)

**Auto-Generated via Astro:**

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://site.com',
  integrations: [
    sitemap()
  ]
});
```

**Manual Validation:**
- Accessible at `https://site.com/sitemap.xml`
- Includes all public pages
- No broken links
- Submitted to Google Search Console

---

## Part B: WCAG 2.1 AA Standards

### 1. Color Contrast

**Minimum Ratios:**
- **Normal text:** 4.5:1
- **Large text (18pt+ or 14pt+ bold):** 3.1
- **UI components & graphics:** 3:1

**Tools:**
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Chrome DevTools: Inspect element → Accessibility pane

**✅ GOOD Examples:**
- Black text (`#000`) on white background (`#FFF`): 21:1 ✅
- Dark gray (`#333`) on white (`#FFF`): 12.6:1 ✅
- Medium gray (`#666`) on white (`#FFF`): 5.7:1 ✅

**❌ BAD Examples:**
- Light gray (`#AAA`) on white (`#FFF`): 2.3:1 ❌ (fails 4.5:1)
- Yellow (`#FFEB3B`) on white (`#FFF`): 1.3:1 ❌ (fails)

---

### 2. Keyboard Accessibility

**Requirements:**
1. **All interactive elements focusable:** Buttons, links, form inputs
2. **Logical tab order:** Follows visual flow (left-to-right, top-to-bottom)
3. **Visible focus indicators:** Outline or ring on focus
4. **No keyboard traps:** User can tab out of all components
5. **Skip links:** Allow bypassing navigation

**✅ GOOD Example:**

```astro
<!-- Focus indicator visible -->
<button class="focus:outline-none focus:ring-2 focus:ring-blue-500">
  Submit
</button>

<!-- Skip link for keyboard users -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0">
  Skip to main content
</a>

<main id="main-content">
  <!-- Content -->
</main>
```

**Testing:**
- Tab through entire page without using mouse
- Verify all interactive elements reachable
- Ensure focus visible at all times

---

### 3. ARIA Attributes

**When to Use ARIA:**
- **Native HTML insufficient:** Custom widgets (e.g., accordions, tabs)
- **Enhanced semantics needed:** Landmark roles, live regions
- **State communication:** `aria-expanded`, `aria-checked`, `aria-current`

**ARIA Rules:**
1. **Prefer semantic HTML** over ARIA when possible
2. **Don't override native semantics** (e.g., don't add `role="button"` to `<button>`)
3. **All ARIA requires JavaScript** (if JS fails, component should degrade gracefully)

**✅ GOOD Examples:**

```html
<!-- Icon-only button (needs label) -->
<button aria-label="Close modal" onclick="closeModal()">
  ×
</button>

<!-- Expandable section -->
<button aria-expanded="false" aria-controls="details">
  Show details
</button>
<div id="details" hidden>...</div>

<!-- Current page in navigation -->
<nav>
  <a href="/" aria-current="page">Home</a>
  <a href="/about">About</a>
</nav>
```

**❌ BAD Examples:**

```html
<!-- Redundant role on semantic element -->
<nav role="navigation">...</nav> <!-- ❌ <nav> already implies role -->

<!-- Button without accessible label -->
<button onclick="submit()">
  <svg>...</svg> <!-- ❌ No text or aria-label for screen readers -->
</button>
```

---

### 4. Form Accessibility

**Requirements:**
1. **All inputs have labels:** Explicit `<label>` or `aria-labelledby`
2. **Error messages associated:** `aria-describedby` links to error text
3. **Required fields indicated:** `required` attribute + visual indicator
4. **Validation feedback:** Clear, specific error messages

**✅ GOOD Example:**

```html
<form>
  <label for="email">
    Email Address <span aria-label="required">*</span>
  </label>
  <input
    id="email"
    type="email"
    required
    aria-describedby="email-error"
    aria-invalid="true"
  />
  <span id="email-error" role="alert">
    Please enter a valid email address
  </span>
</form>
```

---

### 5. Semantic HTML (Landmarks)

**Required Landmarks:**

```html
<body>
  <header>
    <nav aria-label="Main navigation">...</nav>
  </header>

  <main>
    <article>...</article>
    <aside aria-label="Related content">...</aside>
  </main>

  <footer>...</footer>
</body>
```

**Benefits:**
- Screen readers navigate by landmarks
- AI crawlers understand document structure
- SEO benefits from semantic HTML

---

## Quick Validation Checklist

### SEO Checklist

- [ ] Meta title present (50-60 chars)
- [ ] Meta description present (150-160 chars)
- [ ] Canonical URL set
- [ ] Open Graph tags for social sharing
- [ ] Schema markup on key pages (valid JSON-LD)
- [ ] Single H1 per page
- [ ] Progressive heading hierarchy (no skipped levels)
- [ ] All images have descriptive alt text
- [ ] Sitemap generated and accessible
- [ ] robots.txt allows AI crawlers
- [ ] llms.txt present at root

### Accessibility Checklist

- [ ] Color contrast meets 4.5:1 (normal text) or 3:1 (large text)
- [ ] All interactive elements keyboard-accessible
- [ ] Visible focus indicators on all focusable elements
- [ ] Skip link present for keyboard users
- [ ] ARIA attributes used correctly (or semantic HTML preferred)
- [ ] Form labels associated with inputs
- [ ] Error messages descriptive and linked (`aria-describedby`)
- [ ] Semantic HTML landmarks (header, nav, main, footer, aside)
- [ ] No keyboard traps
- [ ] Page tested with screen reader (NVDA, JAWS, or VoiceOver)

---

## Automation Tools

**SEO:**
- `seo-optimizer` agent (Claude Code)
- Google Rich Results Test (schema validation)
- Google Search Console (sitemap, indexing)

**Accessibility:**
- `accessibility-auditor` agent (Claude Code)
- axe-core (via Playwright)
- WAVE browser extension
- Screen readers: NVDA (Windows), JAWS (Windows), VoiceOver (macOS)

---

## Related Documentation

- [Astro Best Practices](../astro-best-practices/SKILL.md)
- [Quality Gates System](../quality-gates/SKILL.md)
- [Code Style Guide](../../../../docs/CODE_STYLE_GUIDE.md)

## Version History

- **v1.0 (2025-11-17):** Initial SEO & WCAG standards documentation
