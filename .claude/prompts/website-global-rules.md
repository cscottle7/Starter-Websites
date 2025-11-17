# Global Website Development Rules

## Design Principles (Non-Negotiable)

### 1. Mobile-First Responsive Design
- Design for 375px mobile FIRST
- Scale up to tablet (768px), then desktop (1440px)
- Use Tailwind responsive prefixes: `md:`, `lg:`
- Test ALL breakpoints before considering complete

### 2. Accessibility is Mandatory (WCAG 2.1 AA)
- Color contrast minimum 4.5:1 (text), 3:1 (large text)
- ALL interactive elements keyboard-accessible (tab navigation)
- ALL images have descriptive alt text (or `alt=""` if decorative)
- Proper heading hierarchy (single H1 per page, progressive H2→H3→H4)
- ARIA attributes for custom interactive components
- Minimum touch target 44x44px for mobile

### 3. Performance Budget Constraints
- Zero JavaScript by default (Astro Islands philosophy)
- Add `client:*` directives ONLY for interactive components
- Images use Astro's `<Image>` component (WebP, responsive)
- Total bundle size <500KB per page
- Core Web Vitals "Good" scores required

### 4. AI-First Content Architecture
- Server-side rendering (SSR) for ALL content pages
- Semantic HTML (nav, main, article, section elements)
- JSON-LD schema markup for key pages (homepage, about, services, blog)
- DO NOT block AI crawlers (GPTBot, ClaudeBot) in robots.txt

### 5. Code Quality Standards
- TypeScript strict mode for ALL new code
- ESLint + Prettier configured and passing
- NO console.log statements in production
- Meaningful variable/function names (self-documenting code)
- Comments only for complex business logic

## Astro Component Structure (Standard Format)

```astro
---
/**
 * [Component description]
 * @example
 * <ComponentName prop1="value" prop2="value" />
 */

// 1. Imports
import { SomeUtility } from '@workspace/seo-utils';

// 2. Props interface (TypeScript)
interface Props {
  requiredProp: string;
  optionalProp?: string;
}

// 3. Props destructuring
const { requiredProp, optionalProp = 'default' } = Astro.props;

// 4. Logic (data fetching, transformations)
const processedData = requiredProp.toUpperCase();
---

<!-- 5. Template (semantic HTML) -->
<section class="container mx-auto px-4">
  <h2 class="text-3xl font-bold mb-4">{processedData}</h2>
  {optionalProp && <p>{optionalProp}</p>}
</section>

<!-- 6. Scoped styles (ONLY if Tailwind insufficient) -->
<style>
  /* Avoid custom CSS unless absolutely necessary */
</style>
```

## Tailwind CSS Guidelines

### Class Organization Order
1. Layout (flex, grid, block, inline)
2. Sizing (w-*, h-*, min-w-*, max-w-)
3. Spacing (p-*, m-*, space-*)
4. Typography (text-*, font-*, leading-*)
5. Colors (bg-*, text-*, border-*)
6. Effects (shadow-*, opacity-*, hover:)

### Responsive Design Pattern
```html
<!-- Mobile first (no prefix), then tablet/desktop -->
<div class="flex flex-col md:flex-row lg:max-w-7xl">
  <h1 class="text-4xl md:text-5xl lg:text-6xl">Heading</h1>
</div>
```

### Custom Colors in Config
```javascript
// tailwind.config.cjs
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',    // Brand primary
        secondary: '#2d3748',  // Brand secondary
      },
    },
  },
};
```

## Typography Hierarchy (Enforce on Every Page)

- **H1:** One per page, `text-4xl md:text-5xl lg:text-6xl`
- **H2:** Section headings, `text-3xl md:text-4xl`
- **H3:** Subsections, `text-2xl md:text-3xl`
- **H4:** Minor headings, `text-xl md:text-2xl`
- **Body:** `text-base md:text-lg`, `leading-relaxed`

## Image Requirements

### Every Image Must Have:
- Descriptive alt text (explain what's in the image, not "image of...")
- Astro `<Image>` component usage (NOT `<img>` tag)
- Responsive sizes defined
- WebP format (Astro handles conversion)

### Example:
```astro
---
import { Image } from 'astro:assets';
import heroImage from '../images/hero.jpg';
---

<Image
  src={heroImage}
  alt="Team collaborating in modern office space"
  width={1440}
  height={600}
  format="webp"
/>
```

## Form Accessibility

### Required Elements:
- Visible `<label>` for every input (NOT placeholder-only)
- HTML5 validation (`required`, `type="email"`, `pattern`)
- Error messages (red text, clear instructions)
- Submit button disabled state while processing

### Example:
```astro
<form class="space-y-4">
  <div>
    <label for="email" class="block font-semibold mb-2">Email Address</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

## SEO Requirements (Every Page)

### Meta Tags (Minimum):
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
const pageTitle = "Page Title | Site Name";
const pageDescription = "Clear, concise description (150-160 characters)";
---

<BaseLayout title={pageTitle} description={pageDescription}>
  <!-- Page content -->
</BaseLayout>
```

### Schema Markup (Key Pages):
- Homepage: Organization schema
- About: Organization + Person schemas
- Blog posts: Article schema
- Services: Service schema

## Git Commit Message Format

Follow Conventional Commits:
- `feat(client-a): add contact form to homepage`
- `fix(seo-utils): correct schema markup for Article type`
- `docs(readme): update deployment instructions`
- `chore(deps): update Astro to 5.0.1`

Scope = package/site name: `(client-a)`, `(ui-components)`, `(seo-utils)`

## Quality Checklist (Before Considering Task Complete)

- [ ] Mobile (375px), Tablet (768px), Desktop (1440px) tested
- [ ] All images have alt text
- [ ] Color contrast passes WCAG AA (use Chrome DevTools)
- [ ] Keyboard navigation works (tab through all elements)
- [ ] Heading hierarchy correct (single H1, progressive H2-H6)
- [ ] No console errors in browser
- [ ] No TypeScript errors
- [ ] ESLint + Prettier passing
- [ ] Bundle size within budget (<500KB)
