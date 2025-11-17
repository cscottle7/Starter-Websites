---
name: component-development
description: Standard operating procedure for developing reusable Astro components with TypeScript, Tailwind CSS, and accessibility best practices
keywords: [astro, components, typescript, reusability, best-practices]
version: 1.0.0
---

# Component Development Standard Operating Procedure

## When to Create a New Component

### Create Component If:
- ✅ Element appears on **2+ pages**
- ✅ Complex enough to warrant separation (**>30 lines**)
- ✅ Requires **props for customization**
- ✅ Has **multiple variants** (primary/secondary buttons, card styles, etc.)

### Keep Inline If:
- ❌ Used only **once** on a single page
- ❌ Simple markup (**<10 lines**)
- ❌ No reusability potential

---

## Component Checklist

Before considering component complete, verify:

- [ ] **Semantic HTML structure** (nav, article, section, etc.)
- [ ] **Props interface defined** with TypeScript
- [ ] **Tailwind classes** (avoid custom CSS unless necessary)
- [ ] **Responsive breakpoints** (`md:`, `lg:`)
- [ ] **Accessibility features** (ARIA, alt text, keyboard nav)
- [ ] **JSDoc comment** with usage example
- [ ] **Tested in isolation** (verify works standalone)

---

## Component File Structure

### Standard Template

**File:** `packages/ui-components/src/components/[ComponentName].astro`

```astro
---
/**
 * [Component Name] - [Brief description of what this component does]
 *
 * @example
 * <ComponentName
 *   requiredProp="value"
 *   optionalProp="value"
 * />
 */

// 1. Imports
import { Image } from 'astro:assets';
import type { ImageMetadata } from 'astro';

// 2. Props interface (TypeScript)
interface Props {
  /** Main heading text */
  title: string;
  /** Optional description text */
  description?: string;
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'accent';
  /** Custom CSS classes */
  className?: string;
}

// 3. Props destructuring with defaults
const {
  title,
  description,
  variant = 'primary',
  className = ''
} = Astro.props;

// 4. Logic (conditional classes, data transformations)
const baseClasses = 'rounded-lg shadow-md p-6 transition-all duration-200';
const variantClasses = {
  primary: 'bg-primary text-white hover:shadow-lg',
  secondary: 'bg-secondary text-white hover:shadow-lg',
  accent: 'bg-accent text-gray-900 hover:shadow-lg',
};
const componentClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
---

<!-- 5. Template (semantic HTML with Tailwind classes) -->
<article class={componentClasses}>
  <h2 class="text-2xl font-bold mb-4">{title}</h2>
  {description && (
    <p class="text-base leading-relaxed opacity-90">{description}</p>
  )}
  <slot />
</article>

<!-- 6. Scoped styles (ONLY if Tailwind insufficient) -->
<style>
  /* Avoid custom CSS - prefer Tailwind utility classes */
  /* Use only for complex animations or vendor-specific properties */
</style>
```

---

## Component Location Decision Tree

```
Is component used across 2+ client sites?
│
├─ YES → Store in `packages/ui-components/src/components/`
│        (Shared component library)
│
└─ NO → Is it specific to one client's branding?
         │
         ├─ YES → Store in `sites/[client]/src/components/`
         │        (Client-specific component)
         │
         └─ NO → Consider if it should be shared
                  (Future reusability potential)
```

---

## Common Component Patterns

### 1. Button Component

```astro
---
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const {
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  className = ''
} = Astro.props;

const Element = href ? 'a' : 'button';

const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary',
  ghost: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
---

<Element
  href={href}
  type={!href ? type : undefined}
  class={classes}
>
  <slot />
</Element>
```

---

### 2. Card Component

```astro
---
import { Image } from 'astro:assets';
import type { ImageMetadata } from 'astro';

interface Props {
  image?: ImageMetadata;
  imageAlt?: string;
  title: string;
  description?: string;
  href?: string;
  ctaText?: string;
}

const { image, imageAlt = '', title, description, href, ctaText } = Astro.props;
---

<article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
  {image && (
    <Image
      src={image}
      alt={imageAlt}
      class="w-full h-48 object-cover"
    />
  )}
  <div class="p-6">
    <h3 class="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
    {description && (
      <p class="text-gray-600 mb-4 leading-relaxed">{description}</p>
    )}
    <slot />
    {href && ctaText && (
      <a
        href={href}
        class="inline-flex items-center text-primary font-semibold hover:underline"
      >
        {ctaText}
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    )}
  </div>
</article>
```

---

### 3. Section Container Component

```astro
---
interface Props {
  id?: string;
  background?: 'white' | 'gray' | 'primary';
  className?: string;
}

const { id, background = 'white', className = '' } = Astro.props;

const bgClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  primary: 'bg-primary text-white',
};

const classes = `py-16 md:py-24 ${bgClasses[background]} ${className}`;
---

<section id={id} class={classes}>
  <div class="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
    <slot />
  </div>
</section>
```

---

## Accessibility Requirements

### Keyboard Navigation
```astro
<!-- Interactive elements must be keyboard-accessible -->
<button
  class="..."
  aria-label="Open menu"
  @keydown="handleKeydown"
>
  Menu
</button>
```

### ARIA Attributes
```astro
<!-- Expandable section -->
<button
  aria-expanded="false"
  aria-controls="menu-items"
  class="..."
>
  Toggle Menu
</button>
<div id="menu-items" hidden>
  <!-- Menu content -->
</div>
```

### Focus States
```astro
<!-- All interactive elements need visible focus states -->
<a
  href="/about"
  class="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
>
  About Us
</a>
```

---

## Component Documentation

### JSDoc Format

```astro
---
/**
 * Hero Section Component
 *
 * Full-viewport hero section with background image, heading, description, and CTA buttons.
 * Optimized for mobile-first responsive design.
 *
 * @example
 * <Hero
 *   title="Welcome to Our Website"
 *   description="We help businesses grow through innovative solutions."
 *   ctaPrimary={{ text: "Get Started", href: "/contact" }}
 *   ctaSecondary={{ text: "Learn More", href: "/about" }}
 *   backgroundImage={heroImage}
 * />
 */

interface Props {
  /** Main headline (H1) */
  title: string;
  /** Supporting description text */
  description?: string;
  /** Primary CTA button configuration */
  ctaPrimary?: { text: string; href: string };
  /** Secondary CTA button configuration */
  ctaSecondary?: { text: string; href: string };
  /** Background image (Astro Image component) */
  backgroundImage?: ImageMetadata;
}
---
```

---

## Testing Components in Isolation

### Create Test Page

**File:** `sites/[client]/src/pages/component-test.astro`

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Button from '@workspace/ui-components/src/components/Button.astro';
import Card from '@workspace/ui-components/src/components/Card.astro';
---

<BaseLayout title="Component Testing">
  <main class="container mx-auto px-4 py-16 space-y-16">
    <!-- Test Button Variants -->
    <section>
      <h2 class="text-3xl font-bold mb-8">Button Component</h2>
      <div class="flex flex-wrap gap-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>
    </section>

    <!-- Test Card Component -->
    <section>
      <h2 class="text-3xl font-bold mb-8">Card Component</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Card Title 1"
          description="Card description text goes here."
          ctaText="Learn More"
          href="/services"
        />
        <Card
          title="Card Title 2"
          description="Another card description."
        />
      </div>
    </section>
  </main>
</BaseLayout>
```

---

## Version Control & Updates

### Updating Shared Components

**IMPORTANT:** Changes to `packages/ui-components/` affect ALL client sites.

**Process:**
1. **Test locally** on one client site first
2. **Run affected builds:** `nx affected:build`
3. **Verify no breaking changes** across all sites
4. **Update component version** in component file comment
5. **Document breaking changes** in CHANGELOG.md

---

## Related Skills
- [design-to-code-workflow](../design-to-code-workflow/SKILL.md)
- [responsive-testing](../responsive-testing/SKILL.md)
- [accessibility-validation](../accessibility-validation/SKILL.md)
