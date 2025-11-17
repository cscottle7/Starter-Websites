---
name: astro-component-structure
description: Create properly structured Astro components following monorepo standards. Enforces imports → props → logic → template → styles pattern, Content Collections API usage, static-first rendering, and PascalCase naming. Use when creating new Astro components or refactoring existing ones.
---

# Astro Component Structure

## Purpose
Ensures consistent Astro component architecture across all client sites. Enforces static-first rendering, proper separation of concerns, and Content Collections API usage for AI crawler compatibility.

---

## Component Structure Pattern

### Required Order (Strict)
```astro
---
// 1. IMPORTS (external → workspace → local)
import { SomeUtility } from '@workspace/seo-utils';
import { OtherComponent } from '../components/OtherComponent.astro';

// 2. PROPS INTERFACE (TypeScript)
interface Props {
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
}

// 3. PROPS DESTRUCTURING
const { title, description, variant = 'primary' } = Astro.props;

// 4. LOGIC (data fetching, transformations, computed values)
const processedTitle = title.toUpperCase();
const hasDescription = Boolean(description);

// 5. CONTENT COLLECTIONS (if needed)
import { getCollection } from 'astro:content';
const blogPosts = await getCollection('blog');
---

<!-- 6. TEMPLATE (HTML) -->
<section class={`hero hero-${variant}`}>
  <h1>{processedTitle}</h1>
  {hasDescription && <p>{description}</p>}
</section>

<!-- 7. SCOPED STYLES (if needed) -->
<style>
  section {
    @apply container mx-auto px-4;
  }

  .hero-primary {
    @apply bg-primary text-white;
  }

  .hero-secondary {
    @apply bg-secondary text-gray-900;
  }
</style>
```

---

## Naming Conventions

### Component Files
- **Use PascalCase:** `HeroSection.astro`, `BlogPostCard.astro`, `NavigationMenu.astro`
- **NOT:** `hero-section.astro`, `blogPostCard.astro`, `HERO_SECTION.astro`

### Component Location
```
Shared components:     packages/ui-components/src/components/Button.astro
Client-specific:       sites/<client-name>/src/components/CustomHero.astro
Layouts:               sites/<client-name>/src/layouts/BaseLayout.astro
```

---

## Props Guidelines

### Always Use TypeScript Interface
```astro
---
// ✅ CORRECT
interface Props {
  title: string;
  subtitle?: string;
  count: number;
}

// ❌ WRONG - No type safety
const { title, subtitle, count } = Astro.props;
---
```

### Default Values
```astro
---
interface Props {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

// Provide defaults in destructuring
const {
  variant = 'primary',
  size = 'md'
} = Astro.props;
---
```

### Validation
```astro
---
interface Props {
  title: string;
  items: Array<{ id: string; name: string }>;
}

const { title, items } = Astro.props;

// Validate required props
if (!title || items.length === 0) {
  throw new Error('HeroSection requires title and items');
}
---
```

---

## Content Collections (Required for All Content)

### ❌ NEVER Hardcode Content
```astro
---
// ❌ WRONG - Content not editable via CMS
const blogPosts = [
  { title: "Post 1", content: "..." },
  { title: "Post 2", content: "..." }
];
---
```

### ✅ ALWAYS Use Content Collections API
```astro
---
// ✅ CORRECT - Content from CMS
import { getCollection } from 'astro:content';

const blogPosts = await getCollection('blog');
const sortedPosts = blogPosts
  .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
  .slice(0, 3);
---

<div class="blog-grid">
  {sortedPosts.map(post => (
    <article>
      <h2>{post.data.title}</h2>
      <p>{post.data.description}</p>
      <a href={`/blog/${post.slug}`}>Read more</a>
    </article>
  ))}
</div>
```

### Filtering Content
```astro
---
import { getCollection } from 'astro:content';

// Get published posts only
const publishedPosts = await getCollection('blog', ({ data }) => {
  return data.publishDate <= new Date();
});

// Get posts by tag
const taggedPosts = await getCollection('blog', ({ data }) => {
  return data.tags?.includes('announcement');
});
---
```

---

## Static-First Rendering (Default)

### Default Behavior (No JavaScript)
```astro
---
// This component renders ONLY on the server
// Zero JavaScript shipped to client
interface Props {
  title: string;
}
const { title } = Astro.props;
---

<h1>{title}</h1>
```

### When to Add Interactivity
**Only use `client:*` directives when:**
- Forms with validation
- Interactive widgets (carousels, modals)
- Real-time updates
- User authentication UI

### Client Directive Options
```astro
---
import InteractiveForm from './InteractiveForm.jsx';
---

<!-- Load immediately on page load -->
<InteractiveForm client:load />

<!-- Load when component visible in viewport -->
<InteractiveForm client:visible />

<!-- Load when browser idle -->
<InteractiveForm client:idle />

<!-- Load only on media query match -->
<InteractiveForm client:media="(max-width: 768px)" />

<!-- Never hydrate (static only) -->
<InteractiveForm client:only="react" />
```

### ⚠️ AI Crawler Compatibility
**Rule:** Content must be server-rendered for AI crawlers (GPTBot, ClaudeBot)

```astro
<!-- ❌ WRONG - Content invisible to AI crawlers -->
<div id="content"></div>
<script>
  document.getElementById('content').innerHTML = 'Important content';
</script>

<!-- ✅ CORRECT - Content server-rendered -->
<div id="content">
  Important content rendered on server
</div>
```

---

## Component Size Guidelines

### Keep Components Small
- **Target:** <150 lines per component
- **Max:** 250 lines (if exceeded, split into smaller components)

### Single Responsibility
```astro
<!-- ❌ BAD - Does too much -->
<MegaComponent
  showHeader
  showNav
  showFooter
  showSidebar
  content={...}
/>

<!-- ✅ GOOD - Focused components -->
<Header />
<Navigation />
<main>
  <Sidebar />
  <Content />
</main>
<Footer />
```

### Extract Reusable Logic
```astro
---
// ❌ BAD - Logic in component
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-');
const formatDate = (date: Date) => date.toLocaleDateString();
---

<!-- ✅ GOOD - Logic in utility -->
---
import { slugify, formatDate } from '@workspace/seo-utils';
---
```

---

## Styling Guidelines

### Tailwind Utilities (Preferred)
```astro
<!-- ✅ PREFERRED - Direct utilities -->
<section class="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
  <h1 class="text-3xl font-bold text-gray-900 mb-4">Title</h1>
</section>
```

### Scoped Styles (When Necessary)
```astro
<style>
  /* Use @apply ONLY for complex repeated patterns */
  .card-base {
    @apply rounded-lg shadow-md p-6 bg-white;
    @apply hover:shadow-lg transition-shadow duration-300;
  }
</style>
```

### When to Use `<style>`
- Complex hover/focus states
- Animations/transitions
- Patterns repeated 5+ times in same component
- CSS that can't be expressed with Tailwind utilities

---

## Component Templates

### Basic Page Component
```astro
---
// src/components/PageSection.astro
interface Props {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const { title, subtitle, align = 'left' } = Astro.props;
---

<section class={`page-section text-${align}`}>
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-2">{title}</h2>
    {subtitle && <p class="text-xl text-gray-600">{subtitle}</p>}
    <slot />
  </div>
</section>
```

### Content Collection Component
```astro
---
// src/components/BlogGrid.astro
import { getCollection } from 'astro:content';

interface Props {
  limit?: number;
}

const { limit = 6 } = Astro.props;

const posts = await getCollection('blog');
const recentPosts = posts
  .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
  .slice(0, limit);
---

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {recentPosts.map(post => (
    <article class="bg-white rounded-lg shadow-md p-6">
      <h3 class="text-2xl font-bold mb-2">
        <a href={`/blog/${post.slug}`}>{post.data.title}</a>
      </h3>
      <p class="text-gray-600 mb-4">{post.data.description}</p>
      <time class="text-sm text-gray-500">
        {post.data.publishDate.toLocaleDateString()}
      </time>
    </article>
  ))}
</div>
```

### Interactive Component (With Framework)
```astro
---
// src/components/ContactForm.astro
import ReactContactForm from './ReactContactForm.jsx';

interface Props {
  submitUrl: string;
}

const { submitUrl } = Astro.props;
---

<!-- Only this component gets JavaScript -->
<ReactContactForm
  client:visible
  submitUrl={submitUrl}
/>
```

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Client-Side Content Rendering
```astro
<!-- BAD - Content invisible to AI crawlers -->
<div id="app"></div>
<script>
  fetch('/api/content').then(r => r.json()).then(data => {
    document.getElementById('app').innerHTML = data.html;
  });
</script>
```

### ✅ Fix: Server-Side Rendering
```astro
---
const response = await fetch('https://api.example.com/content');
const data = await response.json();
---
<div>{data.html}</div>
```

### ❌ Mistake 2: Missing Props Interface
```astro
---
// BAD - No type safety
const { title, description } = Astro.props;
---
```

### ✅ Fix: Always Define Props
```astro
---
interface Props {
  title: string;
  description?: string;
}
const { title, description } = Astro.props;
---
```

### ❌ Mistake 3: Hardcoded Content
```astro
<!-- BAD - Not editable via CMS -->
<h1>Welcome to Our Site</h1>
```

### ✅ Fix: Use Content Collections
```astro
---
import { getEntry } from 'astro:content';
const page = await getEntry('pages', 'home');
---
<h1>{page.data.title}</h1>
```

---

## Usage Examples

### Example 1: Create New Hero Component
```bash
# Location
touch sites/acme-corp/src/components/HeroSection.astro
```

```astro
---
// sites/acme-corp/src/components/HeroSection.astro
import { getEntry } from 'astro:content';

const homepage = await getEntry('pages', 'home');
---

<section class="hero bg-primary text-white py-20">
  <div class="container mx-auto px-4 text-center">
    <h1 class="text-5xl font-bold mb-4">{homepage.data.title}</h1>
    <p class="text-xl mb-8">{homepage.data.description}</p>
    <a href="/contact" class="btn btn-secondary">Get Started</a>
  </div>
</section>
```

### Example 2: Shared Component with Variants
```astro
---
// packages/ui-components/src/components/Button.astro
interface Props {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const {
  variant = 'primary',
  size = 'md',
  href
} = Astro.props;

const baseClasses = 'btn rounded font-semibold transition-colors';
const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
};
const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
};

const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
const Tag = href ? 'a' : 'button';
---

<Tag class={classes} href={href}>
  <slot />
</Tag>
```

---

## Related Skills
- `sveltia-cms-setup` - Content Collections configuration
- `shared-component-testing` - Testing component changes
- `ai-crawler-optimization` - Ensuring SSR compatibility

---

**Version:** 1.0
**Last Updated:** November 2025
**Trigger Terms:** Astro component, component structure, Content Collections, SSR, static rendering, component creation
