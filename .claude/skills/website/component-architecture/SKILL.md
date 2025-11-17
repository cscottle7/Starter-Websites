# Component Architecture Skill

## Skill Metadata
- **Name:** component-architecture
- **Category:** website
- **Type:** knowledge
- **Version:** 1.0.0
- **Last Updated:** 2025-11-11

## Description
Best practices for creating reusable, maintainable Astro components in a monorepo environment. Covers component structure, prop design, composition patterns, and the three-tier customization model.

## When to Use This Skill
- When creating new components in `packages/ui-components/`
- When extending shared components in client sites
- When refactoring existing components
- When designing component APIs for reusability
- During code reviews of component changes

## Core Principles

### 1. Zero JavaScript by Default
Astro's Islands architecture ships zero JavaScript unless explicitly requested.

**Philosophy:**
- Components render as static HTML during build
- Add interactivity only when needed via `client:*` directives
- Server-side rendering ensures AI crawler compatibility

```astro
<!-- Static component (default, no JS shipped) -->
<Button variant="primary" href="/contact">
  Contact Us
</Button>

<!-- Interactive component (ships JS only for this component) -->
<Dropdown buttonText="Account" client:load>
  <Menu.Item href="/profile">Profile</Menu.Item>
</Dropdown>
```

**Client Directives:**
- `client:load` - Load immediately on page load
- `client:idle` - Load when main thread is idle
- `client:visible` - Load when component enters viewport
- `client:media="(min-width: 768px)"` - Load when media query matches
- `client:only="react"` - Render only on client (skip SSR)

### 2. Component File Structure

**Standard Astro Component Pattern:**

```astro
---
/**
 * ComponentName - Brief description
 *
 * @example
 * ```astro
 * <ComponentName
 *   prop1="value"
 *   prop2={true}
 * >
 *   Content
 * </ComponentName>
 * ```
 */

// 1. Imports
import { OtherComponent } from './OtherComponent.astro';
import { utilityFunction } from '../utils/helpers';

// 2. Props Interface (TypeScript)
interface Props {
  title: string;                           // Required
  description?: string;                    // Optional
  variant?: 'primary' | 'secondary';       // Union types for variants
  size?: 'sm' | 'md' | 'lg';              // Size options
  class?: string;                          // Allow custom classes
}

// 3. Props Destructuring with Defaults
const {
  title,
  description,
  variant = 'primary',
  size = 'md',
  class: className = '',
} = Astro.props;

// 4. Component Logic
const processedTitle = title.toUpperCase();
const isLarge = size === 'lg';

// 5. Dynamic Class Construction
const variantClasses = {
  primary: 'bg-primary text-primary-content',
  secondary: 'bg-secondary text-secondary-content',
};
---

<!-- 6. Template -->
<div class:list={[
  'component-base-classes',
  variantClasses[variant],
  className,
]}>
  <h2>{processedTitle}</h2>
  {description && <p>{description}</p>}
  <slot />
</div>

<!-- 7. Scoped Styles (only if DaisyUI insufficient) -->
<style>
  /* Minimal custom CSS - prefer DaisyUI classes */
  .component-base-classes {
    /* Only add styles not available in DaisyUI */
  }
</style>
```

### 3. Three-Tier Customization Model

#### Tier 1: Template Core (NEVER Modified Per Client)
Shared infrastructure that propagates to all sites:

**Location:** `packages/ui-components/`

**Examples:**
- Build tooling configuration
- Core SEO utilities
- Base component implementations
- Tailwind/DaisyUI setup

**Rule:** Changes here affect ALL client sites.

#### Tier 2: Design System (Customizable Per Client)
Visual design tokens and component variants:

**Location:**
- `packages/ui-components/config/archetype-*.js` (archetype presets)
- `sites/client-x/tailwind.config.cjs` (client-specific overrides)
- `sites/client-x/src/components/` (extended component variants)

**Examples:**
```javascript
// packages/ui-components/config/archetype-bold.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',    // Deep navy
        secondary: '#FF6B35',  // Electric orange
      },
    },
  },
};

// sites/acme-corp/tailwind.config.cjs
const archetypeBold = require('../../packages/ui-components/config/archetype-bold');

module.exports = {
  presets: [archetypeBold],
  theme: {
    extend: {
      colors: {
        primary: '#003366',  // Custom navy (overrides archetype)
      },
    },
  },
};
```

**Component Extension:**
```astro
// sites/acme-corp/src/components/CustomHero.astro
---
import { Hero } from '@workspace/ui-components';

interface Props {
  headline: string;
  ctaText?: string;
  ctaUrl?: string;
}

const { headline, ctaText, ctaUrl } = Astro.props;
---

<!-- Extend base Hero with client-specific layout -->
<div class="custom-wrapper">
  <Hero
    archetype="bold"
    headline={headline}
    ctaText={ctaText}
    ctaUrl={ctaUrl}
  />
  <div class="client-specific-badge">
    ACME Corp Exclusive Offer
  </div>
</div>
```

#### Tier 3: Content & Configuration (Fully Client-Specific)
All editable content and client brand identity:

**Location:**
- `sites/client-x/src/content/` (Sveltia CMS content)
- `sites/client-x/BRAND_GUIDELINES.md` (brand documentation)
- `sites/client-x/public/` (client assets)

### 4. Prop Design Best Practices

**Good Props:**
```astro
interface Props {
  // Clear naming
  variant?: 'primary' | 'secondary' | 'accent';  // Union types for finite options
  size?: 'sm' | 'md' | 'lg';

  // Boolean props with clear intent
  disabled?: boolean;
  loading?: boolean;

  // Allow customization
  class?: string;

  // Required props have no default
  title: string;

  // Optional props have sensible defaults
  spacing?: 'sm' | 'md' | 'lg';  // Default: 'md'
}
```

**Bad Props:**
```astro
interface Props {
  // Avoid vague names
  type?: string;  // Too generic - what types?

  // Avoid string-based booleans
  isDisabled?: 'true' | 'false';  // Use boolean instead

  // Avoid too many size options
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';  // Too many choices

  // Avoid exposing implementation details
  cssClass?: string;  // Use 'class' instead
  inlineStyles?: string;  // Avoid inline styles
}
```

### 5. Composition Over Configuration

**Prefer Composition (Good):**
```astro
<!-- Hero.astro - accepts slot for flexible content -->
<Hero archetype="bold">
  <h1>Custom Headline</h1>
  <p>Custom subheadline with <strong>bold text</strong></p>
  <Button variant="primary">Custom CTA</Button>
</Hero>

<!-- Card.astro - composable structure -->
<Card>
  <Card.Image src="/image.jpg" alt="Description" />
  <Card.Body>
    <Card.Title>Title</Card.Title>
    <Card.Description>Description</Card.Description>
    <Card.Actions>
      <Button variant="primary">Action 1</Button>
      <Button variant="ghost">Action 2</Button>
    </Card.Actions>
  </Card.Body>
</Card>
```

**Avoid Over-Configuration (Bad):**
```astro
<!-- Too many props for every variation -->
<Hero
  headline="Headline"
  headlineSize="xl"
  headlineColor="primary"
  headlineFontWeight="bold"
  subheadline="Subheadline"
  subheadlineSize="lg"
  subheadlineColor="secondary"
  ctaText="Click"
  ctaVariant="primary"
  ctaSize="lg"
  ctaIcon="arrow-right"
  ctaIconPosition="right"
  backgroundImage="/bg.jpg"
  backgroundOverlay="dark"
  backgroundOverlayOpacity={0.5}
/>
<!-- This should be composition with slots instead -->
```

### 6. DaisyUI Integration Patterns

**Use Semantic Classes:**
```astro
<!-- Good: DaisyUI semantic classes -->
<button class="btn btn-primary">
  Submit
</button>

<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Title</h2>
  </div>
</div>

<!-- Avoid: Reinventing DaisyUI components -->
<button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
  Submit
</button>
```

**Extend DaisyUI, Don't Replace:**
```astro
---
// Good: Build on DaisyUI base
const sizeClasses = {
  sm: 'btn-sm',
  md: '',        // Default size needs no class
  lg: 'btn-lg',
};
---

<button class:list={[
  'btn btn-primary',     // DaisyUI base
  sizeClasses[size],     // DaisyUI size modifier
  loading && 'loading',  // DaisyUI state
  className,             // Custom overrides
]}>
  <slot />
</button>
```

### 7. Slot Usage

**Named Slots for Complex Layouts:**
```astro
---
// Modal.astro
interface Props {
  title?: string;
}
---

<dialog class="modal">
  <div class="modal-box">
    <!-- Named slot for header -->
    <div class="modal-header">
      <slot name="header">
        {title && <h3 class="font-bold text-lg">{title}</h3>}
      </slot>
    </div>

    <!-- Default slot for body -->
    <div class="modal-body">
      <slot />
    </div>

    <!-- Named slot for actions -->
    <div class="modal-actions">
      <slot name="actions" />
    </div>
  </div>
</dialog>

<!-- Usage -->
<Modal title="Confirm">
  <p>Are you sure?</p>
  <div slot="actions">
    <Button variant="primary">Confirm</Button>
    <Button variant="ghost">Cancel</Button>
  </div>
</Modal>
```

## Common Patterns

### 1. Variant-Based Components
```astro
---
interface Props {
  variant?: 'success' | 'warning' | 'error' | 'info';
  class?: string;
}

const { variant = 'info', class: className = '' } = Astro.props;

const variantClasses = {
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error',
  info: 'alert-info',
};
---

<div class:list={['alert', variantClasses[variant], className]}>
  <slot />
</div>
```

### 2. Responsive Components
```astro
---
interface Props {
  mobileLayout?: 'stack' | 'grid';
  desktopLayout?: 'sidebar' | 'columns';
}

const {
  mobileLayout = 'stack',
  desktopLayout = 'columns',
} = Astro.props;

const layoutClasses = {
  mobile: {
    stack: 'flex flex-col',
    grid: 'grid grid-cols-2 gap-4',
  },
  desktop: {
    sidebar: 'lg:grid lg:grid-cols-[250px_1fr]',
    columns: 'lg:grid lg:grid-cols-3',
  },
};
---

<div class:list={[
  layoutClasses.mobile[mobileLayout],
  layoutClasses.desktop[desktopLayout],
]}>
  <slot />
</div>
```

### 3. Conditional Rendering
```astro
---
interface Props {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

const { title, description, image, imageAlt } = Astro.props;
---

<div class="card">
  {image && (
    <figure>
      <img src={image} alt={imageAlt || ''} />
    </figure>
  )}

  <div class="card-body">
    <h3 class="card-title">{title}</h3>
    {description && <p>{description}</p>}
    <slot />
  </div>
</div>
```

## Testing Component Architecture

### Type Safety
```bash
# Verify TypeScript types
pnpm nx type-check ui-components
```

### Component Usage Validation
```astro
---
// This will error at build time if props invalid
import { Button } from '@workspace/ui-components';
---

<Button variant="invalid-variant"> <!-- TypeScript error -->
  Click
</Button>
```

### Build Validation
```bash
# Build all sites to test component changes
pnpm nx run-many --target=build --all
```

## Anti-Patterns to Avoid

❌ **Inline Styles**
```astro
<!-- Bad -->
<div style={`color: ${color}; font-size: ${size}px`}>
```
✅ Use Tailwind classes or DaisyUI variants instead

❌ **Deeply Nested Components**
```astro
<!-- Bad: Hard to maintain -->
<Layout>
  <Container>
    <Section>
      <Wrapper>
        <InnerWrapper>
          <Content />
        </InnerWrapper>
      </Wrapper>
    </Section>
  </Container>
</Layout>
```
✅ Flatten hierarchy, use composition

❌ **Too Many Variants**
```astro
<!-- Bad: Combinatorial explosion -->
<Button
  variant="primary"
  size="lg"
  rounded="full"
  shadow="xl"
  border="thick"
  animation="bounce"
/>
```
✅ Limit to 2-3 key variation axes

❌ **Hardcoded Content**
```astro
<!-- Bad: Not editable via CMS -->
<Hero headline="Welcome to Our Site" />
```
✅ Source content from Astro Content Collections

## Checklist for New Components

Before creating a new component:
- [ ] Search existing components - can you extend instead?
- [ ] Check DaisyUI - does it already provide this?
- [ ] Will this be used in 3+ places? (If not, keep it client-specific)

When creating component:
- [ ] TypeScript Props interface defined with clear types
- [ ] JSDoc comment with usage example
- [ ] Default values for optional props
- [ ] `class` prop for customization
- [ ] DaisyUI classes used (not custom CSS)
- [ ] Semantic HTML structure
- [ ] Accessibility attributes (ARIA when needed)
- [ ] Responsive design (mobile-first)

After creating component:
- [ ] Export in `packages/ui-components/src/index.ts`
- [ ] Document in `packages/ui-components/README.md`
- [ ] Test in at least one client site
- [ ] Verify build succeeds (`pnpm nx run-many --target=build --all`)
- [ ] Accessibility audit with keyboard navigation

## Resources

- [Astro Components Documentation](https://docs.astro.build/en/core-concepts/astro-components/)
- [Astro Islands Architecture](https://docs.astro.build/en/concepts/islands/)
- [DaisyUI Component List](https://daisyui.com/components/)
- [Tailwind CSS Utilities](https://tailwindcss.com/docs/utility-first)

## Integration with Project

This skill is referenced by:
- Component creation workflows
- Code review checklists
- `quality-assessor` agent (code quality evaluation)
- `CLAUDE.md` Section 11 (Code Style & Conventions)

## Changelog

### 1.0.0 (2025-11-11)
- Initial skill creation
- Zero JavaScript principle documented
- Three-tier customization model explained
- DaisyUI integration patterns included
- Common component patterns cataloged
