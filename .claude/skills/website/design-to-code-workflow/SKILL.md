---
name: design-to-code-workflow
description: Translates Figma designs into Astro components following best practices for responsive design, accessibility, and performance
keywords: [figma, design-tokens, responsive-design, astro-components, tailwind-css]
version: 1.0.0
---

# Design-to-Code Translation Workflow

## Purpose
This skill teaches agents how to systematically translate Figma designs into production-ready Astro components with Tailwind CSS, ensuring responsive behavior, accessibility, and brand consistency.

---

## Step 1: Extract Design Tokens

### What to Extract from Figma
1. **Color Palette**
   - Primary brand color(s)
   - Secondary/accent colors
   - Neutral colors (backgrounds, text, borders)
   - Semantic colors (success, error, warning, info)

2. **Typography System**
   - Font families (headings, body, code)
   - Font sizes (H1-H6, body, captions)
   - Font weights (bold, regular, light)
   - Line heights

3. **Spacing Values**
   - Padding values (component internal spacing)
   - Margin values (component external spacing)
   - Gap values (flexbox/grid spacing)
   - **IMPORTANT:** Verify spacing aligns with Tailwind's 4px scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)

### Map to Tailwind Config

**File:** `sites/[client-name]/tailwind.config.cjs`

```javascript
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',      // From Figma color palette
        secondary: '#2d3748',
        accent: '#f59e0b',
        // Neutrals
        'gray-50': '#f7fafc',
        'gray-900': '#1a202c',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        // Map Figma font sizes to Tailwind scale
        'heading-1': ['3rem', { lineHeight: '1.2' }],    // 48px
        'heading-2': ['2.25rem', { lineHeight: '1.3' }], // 36px
        'heading-3': ['1.875rem', { lineHeight: '1.4' }],// 30px
      },
    },
  },
  plugins: [],
};
```

---

## Step 2: Analyze Component Structure

### Identify HTML Semantic Elements

**Questions to Ask:**
1. **What is the purpose of this component?**
   - Navigation → `<nav>`
   - Main content → `<main>`
   - Standalone content → `<article>`
   - Related content → `<section>`
   - Supplementary content → `<aside>`

2. **What heading level should this use?**
   - Page title → `<h1>` (only one per page)
   - Section titles → `<h2>`
   - Subsection titles → `<h3>`, `<h4>`, etc.

3. **Is this a list of items?**
   - Ordered list → `<ol>`
   - Unordered list → `<ul>`
   - Definition list → `<dl>`

### Map Layout to Tailwind

**Figma Layout Patterns → Tailwind Classes:**

| Figma Layout | Tailwind Implementation |
|-------------|------------------------|
| Vertical stack | `flex flex-col` |
| Horizontal row | `flex flex-row` |
| Grid (2 columns) | `grid grid-cols-2` |
| Grid (3 columns) | `grid grid-cols-3` |
| Centered content | `flex items-center justify-center` |
| Space between items | `flex justify-between` |

**Responsive Behavior:**
- Mobile (default): `flex flex-col` (stack vertically)
- Tablet (768px+): `md:flex-row` (horizontal on larger screens)
- Desktop (1024px+): `lg:grid-cols-3` (3 columns on desktop)

### List Interactive States

**For each interactive element, identify:**
1. **Default state** (how it appears normally)
2. **Hover state** (desktop mouse hover)
3. **Focus state** (keyboard navigation)
4. **Active state** (being clicked/pressed)
5. **Disabled state** (if applicable)

---

## Step 3: Build Component Incrementally

### Component File Structure

**File:** `packages/ui-components/src/components/[ComponentName].astro`

```astro
---
/**
 * [Component Name] - [Brief description]
 *
 * @example
 * <ComponentName
 *   prop1="value1"
 *   prop2="value2"
 * />
 */

// 1. Imports
import { Image } from 'astro:assets';

// 2. Props interface (TypeScript)
interface Props {
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
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
const baseClasses = 'rounded-lg shadow-md p-6';
const variantClasses = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
};
const componentClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
---

<!-- 5. Template (semantic HTML with Tailwind classes) -->
<article class={componentClasses}>
  <h2 class="text-2xl font-bold mb-4">{title}</h2>
  {description && (
    <p class="text-base leading-relaxed">{description}</p>
  )}
  <slot />
</article>

<!-- 6. Scoped styles (ONLY if Tailwind insufficient) -->
<style>
  /* Avoid custom CSS - prefer Tailwind utility classes */
</style>
```

### Translation Workflow

**For each Figma layer:**

1. **Identify semantic HTML element** (section, article, div, span, etc.)
2. **Add Tailwind classes for:**
   - **Layout:** `flex`, `grid`, `block`, `inline`, etc.
   - **Sizing:** `w-full`, `h-64`, `max-w-7xl`, etc.
   - **Spacing:** `p-6`, `m-4`, `space-y-4`, `gap-6`, etc.
   - **Typography:** `text-xl`, `font-bold`, `leading-relaxed`, etc.
   - **Colors:** `bg-primary`, `text-white`, `border-gray-300`, etc.
3. **Add responsive prefixes:** `md:flex-row`, `lg:grid-cols-3`, etc.
4. **Test in browser** at each breakpoint

---

## Step 4: Implement Responsive Behavior

### Breakpoint Testing Checklist

**Test at these exact widths:**
- **Mobile:** 375px (iPhone SE, standard smartphone)
- **Tablet:** 768px (iPad, standard tablet)
- **Desktop:** 1440px (Standard laptop/monitor)

### Responsive Pattern (Mobile-First)

```astro
<!-- Start with mobile layout (no prefix) -->
<div class="flex flex-col space-y-4 p-4">
  <h1 class="text-4xl font-bold">Heading</h1>

  <!-- Add tablet modifications (md: prefix) -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white p-6">Card 1</div>
    <div class="bg-white p-6">Card 2</div>
  </div>

  <!-- Add desktop modifications (lg: prefix) -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
</div>
```

### Common Responsive Patterns

| Element | Mobile (Default) | Tablet (md:) | Desktop (lg:) |
|---------|-----------------|--------------|---------------|
| Container | `px-4` | `md:px-8` | `lg:px-16` |
| Heading | `text-4xl` | `md:text-5xl` | `lg:text-6xl` |
| Grid | `grid-cols-1` | `md:grid-cols-2` | `lg:grid-cols-3` |
| Stack/Row | `flex-col` | `md:flex-row` | Same |
| Max Width | `max-w-full` | `md:max-w-3xl` | `lg:max-w-7xl` |

---

## Step 5: Add Accessibility Features

### Accessibility Checklist (WCAG 2.1 AA)

#### Keyboard Navigation
- [ ] All interactive elements accessible via Tab key
- [ ] Focus indicators visible (use `focus:ring-2 focus:ring-primary`)
- [ ] Logical tab order (matches visual order)
- [ ] Escape key closes modals/menus

#### ARIA Attributes
- [ ] `aria-label` for icon-only buttons
- [ ] `aria-expanded` for collapsible sections
- [ ] `aria-hidden="true"` for decorative images/icons
- [ ] `role` attributes for custom interactive components

#### Images
- [ ] Descriptive alt text for all images
- [ ] Empty `alt=""` for decorative images
- [ ] Text alternatives for complex images (charts, diagrams)

#### Color & Contrast
- [ ] Text contrast ratio 4.5:1 minimum (use Chrome DevTools)
- [ ] Large text (18px+) contrast ratio 3:1 minimum
- [ ] DO NOT rely on color alone to convey meaning

### Accessibility Examples

**Button with Icon:**
```astro
<button
  type="button"
  aria-label="Open menu"
  class="p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
>
  <svg class="w-6 h-6" aria-hidden="true"><!-- icon --></svg>
</button>
```

**Expandable Section:**
```astro
<button
  type="button"
  aria-expanded="false"
  aria-controls="section-content"
  class="font-semibold"
>
  Toggle Section
</button>
<div id="section-content" hidden>
  <!-- Content -->
</div>
```

---

## Step 6: Validate Against Design

### Design Comparison Process

1. **Side-by-side comparison:**
   - Open Figma design in one monitor
   - Open browser preview in another monitor

2. **Check alignment:**
   - Use browser DevTools to measure spacing
   - Compare to Figma measurements
   - Adjust Tailwind classes if mismatched

3. **Verify typography:**
   - Font sizes match (use `text-*` classes)
   - Font weights match (use `font-*` classes)
   - Line heights comfortable for reading

4. **Test interactive states:**
   - Hover states match Figma
   - Focus states visible and on-brand
   - Transitions smooth (use `transition-all duration-200`)

5. **Test responsive breakpoints:**
   - Mobile (375px): Content stacks, readable text, touch-friendly buttons
   - Tablet (768px): Layout adapts, optimal use of space
   - Desktop (1440px): Max-width prevents excessive stretching

---

## Common Translation Mistakes to Avoid

### ❌ Mistake 1: Not Using Semantic HTML
**Wrong:**
```astro
<div class="font-bold text-2xl">Page Title</div>
```
**Correct:**
```astro
<h1 class="font-bold text-2xl">Page Title</h1>
```

### ❌ Mistake 2: Hardcoding Pixel Values
**Wrong:**
```astro
<div style="padding: 27px;">Content</div>
```
**Correct:**
```astro
<div class="p-6">Content</div> <!-- 24px, aligns with Tailwind scale -->
```

### ❌ Mistake 3: Desktop-First Responsive Design
**Wrong:**
```astro
<div class="flex-row md:flex-col"><!-- Desktop first --></div>
```
**Correct:**
```astro
<div class="flex-col md:flex-row"><!-- Mobile first --></div>
```

### ❌ Mistake 4: Missing Alt Text
**Wrong:**
```astro
<img src="/hero.jpg" class="w-full" />
```
**Correct:**
```astro
<Image
  src={heroImage}
  alt="Team collaborating in modern office space"
  class="w-full"
/>
```

### ❌ Mistake 5: Over-Engineering with Custom CSS
**Wrong:**
```astro
<style>
  .card {
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
</style>
<div class="card">Content</div>
```
**Correct:**
```astro
<div class="p-6 rounded-lg shadow-md">Content</div>
```

---

## Summary: Design-to-Code Checklist

- [ ] **Step 1:** Design tokens extracted and added to `tailwind.config.cjs`
- [ ] **Step 2:** Component structure analyzed (semantic HTML, layout, states)
- [ ] **Step 3:** Component built incrementally with Tailwind classes
- [ ] **Step 4:** Responsive behavior tested at 375px/768px/1440px
- [ ] **Step 5:** Accessibility features added (keyboard nav, ARIA, alt text)
- [ ] **Step 6:** Design validated against Figma (spacing, typography, colors, states)

---

## Related Skills
- [responsive-testing](../responsive-testing/SKILL.md) - Testing responsive designs
- [tailwind-translation](../tailwind-translation/SKILL.md) - CSS to Tailwind class mapping
- [accessibility-validation](../accessibility-validation/SKILL.md) - WCAG 2.1 AA compliance
