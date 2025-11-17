# Code Style & Conventions Guide

**Last Updated:** November 17, 2025

This document provides comprehensive code style conventions and examples for the Multi-Site Website Development System.

## General Principles

1. **Test Coverage:** All new code must be accompanied by appropriate tests
   - Unit tests for utilities (vitest)
   - Playwright tests for UI components
   - Minimum 80% coverage for critical paths

2. **TypeScript Strict Mode:** All new code uses strict mode
   - `strict: true` in `tsconfig.json`
   - Explicit return types for public functions
   - No `any` types without justification

3. **Functional Programming:** Prefer functional patterns over OOP
   - Pure functions without side effects
   - Immutability (use `const`, avoid mutations)
   - Composition over inheritance

4. **Self-Documenting Code:**
   - Clear variable/function names
   - Comments only for complex business logic
   - JSDoc for public APIs

5. **Consistency Over Preference:**
   - Follow existing patterns in codebase
   - Principle of least surprise
   - Team conventions > personal style

---

## Astro Components (`.astro` files)

### File Naming
- Use **PascalCase**: `HeroSection.astro`, `BlogPostCard.astro`, `NavigationMenu.astro`

### Component Structure

```astro
---
// 1. Imports (external → internal → types)
import { getCollection } from 'astro:content';
import { Button } from '@workspace/ui-components';
import type { CollectionEntry } from 'astro:content';

// 2. Props interface (always define explicitly)
interface Props {
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
}

// 3. Props destructuring with defaults
const {
  title,
  description = 'Default description',
  variant = 'primary'
} = Astro.props;

// 4. Logic (data fetching, transformations)
const posts = await getCollection('blog');
const processedTitle = title.toUpperCase();
---

<!-- 5. Template (semantic HTML, Tailwind utilities) -->
<section class="container mx-auto px-4 py-8">
  <h2 class="text-3xl font-bold text-gray-900">{processedTitle}</h2>
  {description && (
    <p class="mt-4 text-lg text-gray-600">{description}</p>
  )}

  <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {posts.map((post) => (
      <article class="rounded-lg border border-gray-200 p-6">
        <h3 class="text-xl font-semibold">{post.data.title}</h3>
      </article>
    ))}
  </div>
</section>

<!-- 6. Scoped styles (only when Tailwind insufficient) -->
<style>
  section {
    @apply container mx-auto px-4;
  }

  /* Custom CSS for complex patterns only */
  article:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
</style>
```

### Best Practices

**✅ DO:**
- Keep components small and focused (single responsibility)
- Extract reusable logic to TypeScript utilities
- Use Content Collections API for all content
- Prefer static rendering; add `client:*` only when needed
- Use semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`)

**❌ DON'T:**
- Hardcode content in components (use Content Collections)
- Use `client:load` for non-interactive content
- Create components >300 lines (refactor into smaller pieces)
- Mix data fetching logic with presentation

### Client Directives (Use Sparingly)

```astro
<!-- Static by default (NO JavaScript shipped) -->
<HeroSection title="Welcome" />

<!-- Hydrate immediately (use for above-fold interactivity) -->
<MobileMenu client:load />

<!-- Hydrate when visible (use for below-fold interactivity) -->
<ContactForm client:visible />

<!-- Hydrate when idle (use for low-priority interactivity) -->
<NewsletterSignup client:idle />

<!-- Hydrate on media query match (use for responsive components) -->
<DesktopSidebar client:media="(min-width: 768px)" />
```

---

## TypeScript

### File Naming

- **Utility files:** `snake_case` → `schema_generator.ts`, `meta_tags.ts`
- **Component files:** `PascalCase` → `Button.astro`, `HeroSection.astro`
- **Config files:** `kebab-case` → `astro.config.mjs`, `tailwind.config.cjs`

### Naming Conventions

```typescript
// Functions and variables: camelCase
function generateSchema(data: SchemaData): string { }
const metaTitle = "Page Title";

// Types and interfaces: PascalCase
interface BlogPost {
  title: string;
  slug: string;
}

type SEOMetadata = {
  title: string;
  description: string;
};

// Constants: SCREAMING_SNAKE_CASE (only for true constants)
const MAX_RETRIES = 3;
const API_BASE_URL = "https://api.example.com";
```

### Prefer `interface` over `type`

```typescript
// ✅ GOOD: Use interface for object shapes
interface UserProfile {
  name: string;
  email: string;
  age?: number;
}

// ⚠️ ACCEPTABLE: Use type for unions, intersections, primitives
type UserRole = 'admin' | 'editor' | 'viewer';
type ApiResponse = SuccessResponse | ErrorResponse;
```

### Explicit Return Types

```typescript
// ✅ GOOD: Explicit return type for public functions
export function generateMetaTags(data: PageData): MetaTag[] {
  return data.tags.map(tag => ({
    name: tag.key,
    content: tag.value
  }));
}

// ❌ BAD: Inferred return type (less clear, harder to catch errors)
export function generateMetaTags(data: PageData) {
  return data.tags.map(tag => ({
    name: tag.key,
    content: tag.value
  }));
}
```

### Prefer `const` over `let`

```typescript
// ✅ GOOD
const items = [1, 2, 3];
const result = items.map(x => x * 2);

// ❌ BAD (use let only when reassignment needed)
let items = [1, 2, 3];
let result = items.map(x => x * 2);
```

### Template Literals for String Concatenation

```typescript
// ✅ GOOD
const fullUrl = `${baseUrl}/${path}`;
const greeting = `Hello, ${userName}!`;

// ❌ BAD
const fullUrl = baseUrl + '/' + path;
const greeting = 'Hello, ' + userName + '!';
```

---

## Tailwind CSS

### Direct Utility Classes (Preferred)

```astro
<!-- ✅ GOOD: Direct utilities in HTML -->
<button class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
  Click me
</button>

<!-- ❌ BAD: Unnecessary abstraction for simple combinations -->
<button class="btn-primary">
  Click me
</button>
<style>
  .btn-primary {
    @apply rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700;
  }
</style>
```

### Design Tokens in `tailwind.config.cjs`

```javascript
// sites/client-a/tailwind.config.cjs
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          // ... full palette
          600: '#1a202c',  // Main brand color
          900: '#0c0a09',
        },
        secondary: '#2d3748',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
};
```

### Using `@apply` (Only for Complex Patterns)

```astro
<!-- ✅ GOOD: Use @apply for patterns repeated 5+ times -->
<style>
  .card-elevated {
    @apply rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl;
  }
</style>

<!-- ❌ BAD: @apply for simple combinations -->
<style>
  .text-primary {
    @apply text-blue-600;
  }
</style>
```

### Utility Class Order

**Convention:** layout → sizing → spacing → typography → colors → effects

```astro
<!-- ✅ GOOD: Consistent ordering -->
<div class="
  flex items-center justify-between
  w-full h-16
  px-4 py-2
  text-lg font-semibold
  text-gray-900 bg-white
  rounded-lg shadow-md hover:shadow-lg
">
  Content
</div>
```

### Responsive Modifiers

```astro
<!-- ✅ GOOD: Mobile-first responsive design -->
<div class="
  grid grid-cols-1 gap-4
  md:grid-cols-2 md:gap-6
  lg:grid-cols-3 lg:gap-8
">
  <!-- Cards -->
</div>

<!-- ❌ BAD: Avoid custom media queries when Tailwind provides modifiers -->
<style>
  @media (min-width: 768px) {
    .container {
      max-width: 768px;
    }
  }
</style>
```

---

## Content & Markdown

### Frontmatter YAML

```yaml
---
title: "Complete Guide to Astro SEO"
description: "Learn how to optimize Astro sites for search engines with schema markup, meta tags, and performance best practices."
publishDate: 2025-11-17
author: "Jane Developer"
tags:
  - astro
  - seo
  - web-performance
featured: true
image:
  src: "./hero-image.jpg"
  alt: "Diagram showing Astro SEO optimization workflow"
---
```

### Semantic Heading Hierarchy

```markdown
# Page Title (H1 - Only one per page)

## Main Section (H2)

### Subsection (H3)

#### Detail (H4)

##### Fine Detail (H5)
```

**❌ DON'T skip heading levels:**
```markdown
# Page Title
### This should be H2, not H3 ❌
```

### Image Alt Text

```markdown
<!-- ✅ GOOD: Descriptive alt text -->
![Screenshot showing the Sveltia CMS content editor with a blog post being edited](./cms-screenshot.jpg)

<!-- ❌ BAD: Generic or missing alt text -->
![image](./cms-screenshot.jpg)
![](./cms-screenshot.jpg)
```

### Internal Links (Relative Paths)

```markdown
<!-- ✅ GOOD: Relative links -->
[About Us](/about)
[Blog Post](/blog/astro-seo-guide)

<!-- ❌ BAD: Absolute URLs for internal links -->
[About Us](https://example.com/about)
```

---

## Git Commit Messages

### Conventional Commits Format

```
type(scope): subject

[optional body]

[optional footer]
```

### Examples

```bash
# ✅ GOOD: Clear, scoped, conventional commits
feat(client-a): add contact form to homepage with validation
fix(seo-utils): correct schema markup for Article type
docs(readme): update deployment instructions for Vercel
chore(deps): update Astro to 5.0.1
refactor(ui-components): extract Button variants into separate files

# ❌ BAD: Vague, unscoped commits
update stuff
fix bug
WIP
asdf
```

### Commit Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring (no feature change)
- `test`: Adding or updating tests
- `chore`: Maintenance (deps, config, build)
- `perf`: Performance improvement
- `ci`: CI/CD pipeline changes

### Scopes

- `(client-a)`, `(client-b)` - Specific client site
- `(ui-components)` - Shared component library
- `(seo-utils)` - SEO utilities package
- `(cms-config)` - CMS configuration
- `(docs)` - Documentation

### First Line Guidelines

- Keep under **72 characters**
- Use **imperative mood**: "add" not "added" or "adds"
- Don't end with period
- Be specific but concise

---

## Claude Code Agent Definitions

### File Naming
- Use **kebab-case**: `seo-optimizer.md`, `accessibility-auditor.md`

### Agent Structure Template

```markdown
---
name: seo-optimizer
description: Analyzes Astro sites for SEO compliance and generates optimization recommendations
model: claude-sonnet-4-5
tools:
  - Read
  - Grep
  - WebFetch
  - TodoWrite
---

# System Prompt

You are an SEO optimization specialist focused on Astro static sites...

## Your Responsibilities

1. Audit meta tags (title, description, Open Graph, Twitter Cards)
2. Validate schema markup (JSON-LD)
3. Check heading hierarchy (single H1, progressive H2-H6)
4. Analyze image alt text coverage
5. Generate actionable recommendations

## Output Format

Provide findings in this structure:
- **Critical Issues** (fix immediately)
- **Warnings** (address soon)
- **Recommendations** (nice-to-have improvements)

## Example Analysis

[Provide examples of good vs. bad patterns]
```

### Version Control Agent Prompts

```markdown
<!-- Add changelog comments to agent definitions -->

---
**Changelog:**
- v1.2 (2025-11-17): Added llms.txt validation
- v1.1 (2025-11-01): Enhanced schema markup detection
- v1.0 (2025-10-15): Initial release
---
```

---

## Testing Conventions

### Unit Tests (vitest)

```typescript
// seo-utils/src/__tests__/schema_generator.test.ts
import { describe, it, expect } from 'vitest';
import { generateArticleSchema } from '../schema_generator';

describe('generateArticleSchema', () => {
  it('generates valid Article schema with required fields', () => {
    const schema = generateArticleSchema({
      title: 'Test Article',
      author: 'Jane Doe',
      publishDate: '2025-11-17',
    });

    expect(schema['@type']).toBe('Article');
    expect(schema.headline).toBe('Test Article');
    expect(schema.author.name).toBe('Jane Doe');
  });

  it('throws error when required fields missing', () => {
    expect(() => {
      generateArticleSchema({ title: 'Test' }); // Missing required fields
    }).toThrow('Author and publishDate are required');
  });
});
```

### E2E Tests (Playwright)

```typescript
// sites/client-a/tests/homepage.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('has correct meta tags', async ({ page }) => {
    await page.goto('/');

    const title = await page.title();
    expect(title).toBe('Welcome to Client A | Professional Services');

    const description = await page.locator('meta[name="description"]');
    expect(await description.getAttribute('content')).toContain('Professional services');
  });

  test('is keyboard accessible', async ({ page }) => {
    await page.goto('/');

    // Tab through navigation links
    await page.keyboard.press('Tab');
    await expect(page.locator('nav a:first-child')).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.locator('nav a:nth-child(2)')).toBeFocused();
  });
});
```

---

## Related Documentation

- [Architecture](ARCHITECTURE.md) - Project structure
- [Commands Reference](COMMANDS_REFERENCE.md) - CLI commands
- [Tech Stack](TECH_STACK.md) - Technology choices
