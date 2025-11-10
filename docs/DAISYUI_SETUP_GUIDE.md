# DaisyUI Setup & Integration Guide

> **Purpose:** Complete guide to using DaisyUI with Astro + Tailwind CSS in the monorepo
> **Last Updated:** November 10, 2025
> **Library Docs:** https://daisyui.com/

---

## Table of Contents

1. [What is DaisyUI?](#what-is-daisyui)
2. [Strategic Decision: DaisyUI vs. astro-headless-ui](#strategic-decision)
3. [Installation & Configuration](#installation--configuration)
4. [Component Architecture Strategy](#component-architecture-strategy)
5. [Theme Customization](#theme-customization)
6. [Common Components Examples](#common-components-examples)
7. [Prompting Claude Code with DaisyUI](#prompting-claude-code-with-daisyui)
8. [Advantages & Disadvantages](#advantages--disadvantages)
9. [Migration Strategy](#migration-strategy)

---

## What is DaisyUI?

**DaisyUI** is a **component library built on top of Tailwind CSS** that provides pre-styled, production-ready component classes.

### Key Concept: Pre-Styled Components

**DaisyUI means:**
- ✅ **Pre-made component classes** - Use `btn`, `card`, `alert` instead of writing 50+ utility classes
- ✅ **Built-in theme system** - Change entire site colors with one config change
- ✅ **Zero JavaScript** - Pure CSS classes (perfect for Astro's static-first philosophy)
- ✅ **Tailwind-compatible** - Works seamlessly with your existing Tailwind utilities

### Example: Button Without vs. With DaisyUI

**Without DaisyUI (Pure Tailwind):**
```html
<button class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200 disabled:opacity-50">
  Click Me
</button>
```

**With DaisyUI:**
```html
<button class="btn btn-primary">
  Click Me
</button>
```

Both produce the same result, but DaisyUI:
- Saves **90% of the code**
- Includes hover/focus/disabled states automatically
- Maintains consistent styling across all sites
- Easier to prompt Claude Code with

---

## Strategic Decision

### Use BOTH DaisyUI + astro-headless-ui Together

They serve **different purposes** and complement each other perfectly:

| Library | Purpose | Use For |
|---------|---------|---------|
| **DaisyUI** | Pre-styled component classes (CSS only) | Buttons, cards, forms, badges, alerts |
| **astro-headless-ui** | Interactive behavior + accessibility (JavaScript) | Dropdowns, modals, accordions, tabs |

### Recommended Architecture

```
Component Library Strategy:

├── Static Components (DaisyUI) ⚡
│   ├── Button.astro           → class="btn btn-primary"
│   ├── Card.astro             → class="card bg-base-100"
│   ├── Alert.astro            → class="alert alert-success"
│   ├── Badge.astro            → class="badge badge-primary"
│   └── Input.astro            → class="input input-bordered"
│
├── Interactive Components (astro-headless-ui + DaisyUI) 🎯
│   ├── Dropdown.astro         → Menu + DaisyUI classes
│   ├── Modal.astro            → Dialog + DaisyUI modal classes
│   ├── Accordion.astro        → Disclosure + DaisyUI collapse
│   └── Tabs.astro             → Tabs + DaisyUI tab classes
│
└── Custom Components (Pure Tailwind) 🎨
    ├── Hero.astro             → Client-specific, unique design
    ├── Navigation.astro       → Brand-specific layout
    └── Footer.astro           → Custom branding
```

**Key Principle:**
- **DaisyUI for styling** (rapid component development)
- **astro-headless-ui for behavior** (accessibility, keyboard nav, state management)
- **Pure Tailwind for unique designs** (highly customized, brand-specific sections)

---

## Installation & Configuration

### Step 1: Install DaisyUI in Shared Package

```bash
cd packages/ui-components
pnpm add -D daisyui@latest
```

### Step 2: Create Tailwind Config in Shared Package

**File:** `packages/ui-components/tailwind.config.cjs`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        // Base theme that client sites can override
        base: {
          "primary": "#1a202c",      // Default primary color
          "secondary": "#2d3748",    // Default secondary color
          "accent": "#4a5568",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "base-200": "#f7fafc",
          "base-300": "#e2e8f0",
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
    // Enable only components you need (reduces CSS bundle size)
    base: true,
    styled: true,
    utils: true,
  },
};
```

### Step 3: Configure Per Client Site

Each client site extends the base config with their brand colors.

**File:** `sites/client-a/tailwind.config.cjs`

```javascript
/** @type {import('tailwindcss').Config} */
const baseConfig = require('../../packages/ui-components/tailwind.config.cjs');

module.exports = {
  ...baseConfig,
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '../../packages/ui-components/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  daisyui: {
    themes: [
      {
        clienta: {
          "primary": "#1a202c",      // Client A's brand primary
          "secondary": "#2d3748",    // Client A's brand secondary
          "accent": "#f59e0b",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "base-200": "#f7fafc",
          "base-300": "#e2e8f0",
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
  },
};
```

### Step 4: Apply Theme in Layout

**File:** `sites/client-a/src/layouts/BaseLayout.astro`

```astro
<!DOCTYPE html>
<html lang="en" data-theme="clienta">
<head>
  <!-- ... meta tags ... -->
</head>
<body>
  <slot />
</body>
</html>
```

### Step 5: Verify Installation

```bash
# Build a client site to verify DaisyUI is working
cd sites/client-a
pnpm dev

# Check browser DevTools > Elements > <html> tag
# Should see: data-theme="clienta"

# Inspect a button with class="btn btn-primary"
# Should see DaisyUI styles applied
```

---

## Component Architecture Strategy

### Component Location Decision Tree

```
Is the component used by 2+ client sites?
├─ YES → Build in packages/ui-components/ (shared library)
└─ NO  → Build in sites/[client]/src/components/ (client-specific)

Does the component need JavaScript interactivity?
├─ YES → Use astro-headless-ui + DaisyUI styling
└─ NO  → Use DaisyUI classes only

Is the design highly unique/custom?
├─ YES → Use pure Tailwind utilities
└─ NO  → Use DaisyUI pre-styled classes
```

### Example: Button Component (Shared Library)

**File:** `packages/ui-components/src/components/Button.astro`

```astro
---
/**
 * Button - DaisyUI-based button component
 *
 * @example
 * ```astro
 * <Button variant="primary" href="/contact">Contact Us</Button>
 * <Button variant="secondary" size="sm">Learn More</Button>
 * ```
 */

interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  class?: string;
}

const {
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  class: className = '',
} = Astro.props;

const Element = href ? 'a' : 'button';
---

<Element
  href={href}
  type={!href ? type : undefined}
  class:list={[
    'btn',
    `btn-${variant}`,
    size !== 'md' && `btn-${size}`,
    className,
  ]}
>
  <slot />
</Element>
```

**Usage:**
```astro
---
import Button from '@workspace/ui-components/Button.astro';
---

<Button variant="primary" size="lg">Get Started</Button>
<Button variant="secondary" href="/about">Learn More</Button>
<Button variant="ghost">Cancel</Button>
```

**What you get automatically:**
- ✅ Hover states
- ✅ Focus states (keyboard navigation visible)
- ✅ Active/pressed states
- ✅ Disabled states (`disabled` attribute)
- ✅ Loading states (`btn-loading` class)
- ✅ Brand colors (from Tailwind theme)
- ✅ Consistent sizing across all sites

### Example: Card Component (Shared Library)

**File:** `packages/ui-components/src/components/Card.astro`

```astro
---
/**
 * Card - DaisyUI-based content card
 *
 * @example
 * ```astro
 * <Card
 *   title="Service Name"
 *   description="Service description text"
 *   image="/images/service.jpg"
 *   imageAlt="Service illustration"
 *   link="/services/name"
 * />
 * ```
 */

interface Props {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  link?: string;
  class?: string;
}

const { title, description, image, imageAlt = '', link, class: className = '' } = Astro.props;
const CardTag = link ? 'a' : 'div';
---

<CardTag href={link} class:list={['card bg-base-100 shadow-xl', className]}>
  {image && (
    <figure>
      <img src={image} alt={imageAlt} class="w-full h-48 object-cover" />
    </figure>
  )}
  <div class="card-body">
    <h3 class="card-title">{title}</h3>
    <p>{description}</p>
    {link && (
      <div class="card-actions justify-end">
        <span class="btn btn-primary btn-sm">Learn more →</span>
      </div>
    )}
  </div>
</CardTag>
```

**What you get automatically:**
- ✅ Consistent padding/spacing
- ✅ Shadow and rounded corners
- ✅ Hover effect (if link provided)
- ✅ Responsive image sizing
- ✅ Brand colors applied

---

## Theme Customization

### Client-Specific Brand Colors

Each client site can override DaisyUI theme colors in their `tailwind.config.cjs`:

**File:** `sites/bigger-boss/tailwind.config.cjs`

```javascript
module.exports = {
  // ... rest of config ...
  daisyui: {
    themes: [
      {
        biggerboss: {
          "primary": "#1a202c",      // Deep navy (from BRAND_GUIDELINES.md)
          "secondary": "#2d3748",    // Slate gray
          "accent": "#4a5568",       // Neutral accent
          "neutral": "#334e68",
          "base-100": "#ffffff",     // Background
          "base-200": "#f0f4f8",     // Light background
          "base-300": "#d9e2ec",     // Lighter gray
          "info": "#3b82f6",         // Blue
          "success": "#10b981",      // Green
          "warning": "#f59e0b",      // Amber
          "error": "#ef4444",        // Red
        },
      },
    ],
  },
};
```

Then apply in layout:

```astro
<html lang="en" data-theme="biggerboss">
```

### Available DaisyUI Color Tokens

| Token | Purpose | Example Usage |
|-------|---------|---------------|
| `primary` | Main brand color | CTA buttons, links |
| `secondary` | Secondary brand color | Secondary buttons |
| `accent` | Highlight/emphasis | Badges, special elements |
| `neutral` | Text/borders | Body text, dividers |
| `base-100` | Background | Page background |
| `base-200` | Alternative background | Cards, sections |
| `base-300` | Borders | Input borders, dividers |
| `info` | Informational | Info alerts, messages |
| `success` | Success states | Success alerts, confirmations |
| `warning` | Warning states | Warning alerts, cautions |
| `error` | Error states | Error alerts, form errors |

---

## Common Components Examples

### 1. Buttons

```html
<!-- Primary CTA -->
<button class="btn btn-primary">Get Started</button>

<!-- Secondary action -->
<button class="btn btn-secondary">Learn More</button>

<!-- Ghost (subtle) -->
<button class="btn btn-ghost">Cancel</button>

<!-- Link style -->
<button class="btn btn-link">Read more →</button>

<!-- Sizes -->
<button class="btn btn-primary btn-xs">Extra Small</button>
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-md">Medium (default)</button>
<button class="btn btn-primary btn-lg">Large</button>

<!-- States -->
<button class="btn btn-primary" disabled>Disabled</button>
<button class="btn btn-primary btn-loading">Loading...</button>
```

### 2. Cards

```html
<div class="card bg-base-100 shadow-xl">
  <figure>
    <img src="/images/service.jpg" alt="Service illustration" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Service Name</h2>
    <p>Service description text goes here</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Learn More</button>
    </div>
  </div>
</div>
```

### 3. Alerts

```html
<!-- Success alert -->
<div class="alert alert-success">
  <svg><!-- icon --></svg>
  <span>Your purchase has been confirmed!</span>
</div>

<!-- Error alert -->
<div class="alert alert-error">
  <svg><!-- icon --></svg>
  <span>Error! Task failed successfully.</span>
</div>

<!-- Warning alert -->
<div class="alert alert-warning">
  <svg><!-- icon --></svg>
  <span>Warning: Your session is about to expire.</span>
</div>

<!-- Info alert -->
<div class="alert alert-info">
  <svg><!-- icon --></svg>
  <span>New software update available.</span>
</div>
```

### 4. Form Inputs

```html
<!-- Text input -->
<label class="form-control w-full">
  <div class="label">
    <span class="label-text">Email Address</span>
  </div>
  <input
    type="email"
    placeholder="you@example.com"
    class="input input-bordered w-full"
  />
</label>

<!-- Textarea -->
<label class="form-control w-full">
  <div class="label">
    <span class="label-text">Your Message</span>
  </div>
  <textarea
    class="textarea textarea-bordered w-full"
    placeholder="Enter your message"
  ></textarea>
</label>

<!-- Select -->
<label class="form-control w-full">
  <div class="label">
    <span class="label-text">Choose Option</span>
  </div>
  <select class="select select-bordered w-full">
    <option disabled selected>Pick one</option>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</label>
```

### 5. Badges

```html
<span class="badge badge-primary">New</span>
<span class="badge badge-secondary">Popular</span>
<span class="badge badge-accent">Featured</span>
<span class="badge badge-ghost">Draft</span>

<!-- Sizes -->
<span class="badge badge-primary badge-sm">Small</span>
<span class="badge badge-primary badge-md">Medium</span>
<span class="badge badge-primary badge-lg">Large</span>
```

### 6. Combining with astro-headless-ui (Interactive)

**Dropdown Menu:**
```astro
---
import { Menu } from 'astro-headless-ui';
---

<Menu client:load>
  <!-- DaisyUI styling on button -->
  <Menu.Button class="btn btn-primary">
    Account
  </Menu.Button>

  <!-- DaisyUI styling on menu items -->
  <Menu.Items class="menu bg-base-100 rounded-box shadow-xl w-56">
    <Menu.Item>
      <a class="menu-item">Profile</a>
    </Menu.Item>
    <Menu.Item>
      <a class="menu-item">Settings</a>
    </Menu.Item>
    <Menu.Item>
      <a class="menu-item">Logout</a>
    </Menu.Item>
  </Menu.Items>
</Menu>
```

**Modal:**
```astro
---
import { Dialog } from 'astro-headless-ui';
---

<Dialog client:load>
  <!-- DaisyUI button -->
  <Dialog.Trigger class="btn btn-primary">Open Modal</Dialog.Trigger>

  <!-- DaisyUI modal styling -->
  <Dialog.Panel class="modal-box">
    <h3 class="font-bold text-lg">Modal Title</h3>
    <p class="py-4">Modal content goes here</p>
    <div class="modal-action">
      <Dialog.Close class="btn">Close</Dialog.Close>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </Dialog.Panel>
</Dialog>
```

---

## Prompting Claude Code with DaisyUI

### Standard Prompt Template

```
Build [ComponentName] using DaisyUI classes.

Context:
- File: [file path]
- Purpose: [component purpose]
- Design: [visual description]

Requirements:
1. Use DaisyUI classes ONLY (no custom CSS)
2. Component structure:
   [describe HTML structure]
3. DaisyUI classes to use:
   - Base: [e.g., 'btn', 'card', 'alert']
   - Variant: [e.g., 'btn-primary', 'alert-success']
   - Size: [e.g., 'btn-lg', 'badge-sm']
4. Props interface (TypeScript):
   [list required/optional props]
5. Responsive: Works on mobile (375px) and desktop (1440px)
6. Accessibility: [specific requirements]

Deliverable:
[ComponentName].astro using DaisyUI classes
```

### Example: Button Component Prompt

```
Build a Button component using DaisyUI classes.

Context:
- File: packages/ui-components/src/components/Button.astro
- Purpose: Reusable button with brand styling
- Design: Standard button with hover/focus states

Requirements:
1. Use DaisyUI classes ONLY
2. Props interface:
   - variant?: 'primary' | 'secondary' | 'ghost' | 'link'
   - size?: 'xs' | 'sm' | 'md' | 'lg'
   - href?: string (if link, use <a> tag instead of <button>)
   - type?: 'button' | 'submit' | 'reset' (only if not link)
3. DaisyUI classes:
   - Base: 'btn'
   - Variant: 'btn-primary', 'btn-secondary', 'btn-ghost', 'btn-link'
   - Size: 'btn-xs', 'btn-sm', 'btn-md', 'btn-lg'
4. Conditional element: <button> or <a> based on href prop
5. Support for slot content (button text)
6. Add JSDoc comment with usage example

Deliverable:
Button.astro component using DaisyUI classes (no custom CSS)
```

### Example: Card Component Prompt

```
Build a Card component using DaisyUI classes.

Context:
- File: packages/ui-components/src/components/Card.astro
- Purpose: Reusable card for services, blog posts, team members
- Design: Card with optional image, title, description, CTA button

Requirements:
1. Use DaisyUI card classes
2. Props interface:
   - title: string (required)
   - description: string (required)
   - image?: string (optional)
   - imageAlt?: string (optional, default empty string)
   - link?: string (optional - if provided, entire card is clickable)
3. Structure:
   - If image provided: <figure> at top with image
   - Card body: title (H3), description (paragraph), slot for custom content
   - If link provided: CTA button at bottom
4. DaisyUI classes:
   - Card wrapper: 'card bg-base-100 shadow-xl'
   - Body: 'card-body'
   - Title: 'card-title'
   - Actions: 'card-actions justify-end'
   - Button: 'btn btn-primary btn-sm'
5. Conditional element: <a> if link, <div> if no link
6. Responsive: Card stacks properly on mobile

Deliverable:
Card.astro component using DaisyUI classes
```

---

## Advantages & Disadvantages

### Advantages ✅

#### 1. Rapid Development ⚡
```html
<!-- Without DaisyUI: 50+ characters of utility classes -->
<button class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200">
  Button
</button>

<!-- With DaisyUI: 3 simple classes -->
<button class="btn btn-primary">Button</button>
```

**Result:** 60-90% faster component development

#### 2. Built-in Theme System 🎨
- Change entire site colors with one config change
- Consistent color usage across all components
- Dark mode support with `data-theme` attribute

#### 3. Consistent Spacing & Sizing 📏
- All components use same spacing scale
- Sizes (sm, md, lg) consistent across all component types
- No need to define padding/margins repeatedly

#### 4. Accessibility Baked In ♿
- Proper ARIA attributes on interactive elements
- Keyboard navigation considered in styling
- Color contrast meets WCAG standards by default

#### 5. Reduced CSS Bundle Size 📦
- DaisyUI components compile to efficient CSS
- Only ~50KB added to bundle
- Much smaller than writing equivalent custom CSS

### Disadvantages ⚠️

#### 1. Opinionated Styling
- Less flexible than pure Tailwind utilities
- Harder to achieve highly unique designs
- "DaisyUI look" might be recognizable across sites

**Solution:** Mix DaisyUI (for standard components) + custom Tailwind (for unique client-facing sections)

#### 2. Learning Curve 📚
- Need to learn DaisyUI class names (`btn`, `card`, `alert`, etc.)
- Different from standard Tailwind utilities

**Solution:** Reference DaisyUI docs (https://daisyui.com/components/) and use prompts with specific class names

#### 3. Additional Dependency
- One more library to maintain
- Potential version conflicts with Tailwind updates

**Solution:** DaisyUI is actively maintained, well-documented, and has 45k+ GitHub stars

---

## Migration Strategy

### Phase 1: Install & Configure (Week 1)

**Tasks:**
1. Install DaisyUI in `packages/ui-components`
2. Create base Tailwind config with DaisyUI plugin
3. Configure client sites to extend base config
4. Test with one simple component (Button)

**Validation:**
- [ ] DaisyUI installed and version confirmed
- [ ] Tailwind configs created and client sites inherit correctly
- [ ] Button component renders with DaisyUI classes
- [ ] No build errors

### Phase 2: Migrate Core Components (Week 2)

**Components to migrate:**
1. Button → `btn` classes
2. Card → `card` classes
3. Alert → `alert` classes
4. Badge → `badge` classes
5. Input/Textarea/Select → `input`, `textarea`, `select` classes

**Process per component:**
1. Read existing component (custom CSS approach)
2. Rewrite using DaisyUI classes
3. Test in client site
4. Compare visual output (should match or improve)
5. Update component exports

**Validation:**
- [ ] All 5 components migrated
- [ ] Visual appearance matches previous version
- [ ] All client sites using migrated components render correctly
- [ ] No console errors or TypeScript errors

### Phase 3: Build Interactive Components (Week 3)

**New components using astro-headless-ui + DaisyUI:**
1. Dropdown menu (Menu + DaisyUI)
2. Modal (Dialog + DaisyUI)
3. Accordion (Disclosure + DaisyUI)
4. Tabs (Tabs + DaisyUI)

**Process per component:**
1. Install astro-headless-ui (if not already installed)
2. Build component with astro-headless-ui behavior
3. Style with DaisyUI classes
4. Test keyboard navigation and accessibility
5. Add to shared component library

**Validation:**
- [ ] All 4 interactive components built
- [ ] Keyboard navigation works (Tab, Enter, Escape, Arrow keys)
- [ ] ARIA attributes present and correct
- [ ] Visual styling matches brand guidelines
- [ ] Components work on mobile and desktop

### Phase 4: Documentation & Training (Week 4)

**Tasks:**
1. Update component documentation with DaisyUI examples
2. Create prompt templates for Claude Code
3. Add DaisyUI examples to BRAND_GUIDELINES templates
4. Update QUICK_START guide with DaisyUI setup

**Validation:**
- [ ] All components documented with usage examples
- [ ] Prompt templates tested and working
- [ ] Team trained on DaisyUI usage
- [ ] Quick start guide updated

---

## Component Catalog

### DaisyUI Components Available

#### Actions
- ✅ **Button** (10+ variants)
- ✅ **Dropdown** (styling only - use astro-headless-ui for behavior)
- ✅ **Modal** (styling only - use astro-headless-ui for behavior)
- ✅ **Swap** (icon swap on click)

#### Data Display
- ✅ **Alert**
- ✅ **Avatar**
- ✅ **Badge**
- ✅ **Card**
- ✅ **Carousel**
- ✅ **Chat bubble**
- ✅ **Collapse** (styling only - use astro-headless-ui for behavior)
- ✅ **Countdown**
- ✅ **Stat**
- ✅ **Table**
- ✅ **Timeline**

#### Data Input
- ✅ **Checkbox**
- ✅ **File Input**
- ✅ **Radio**
- ✅ **Range**
- ✅ **Rating**
- ✅ **Select**
- ✅ **Text Input**
- ✅ **Textarea**
- ✅ **Toggle**

#### Layout
- ✅ **Artboard** (mockup frames)
- ✅ **Divider**
- ✅ **Drawer** (sidebar)
- ✅ **Footer**
- ✅ **Hero**
- ✅ **Indicator** (notification badge)
- ✅ **Join** (join elements)
- ✅ **Mask** (shaped images)
- ✅ **Stack** (layered elements)

#### Navigation
- ✅ **Breadcrumbs**
- ✅ **Bottom navigation**
- ✅ **Link**
- ✅ **Menu**
- ✅ **Navbar**
- ✅ **Pagination**
- ✅ **Steps**
- ✅ **Tab** (styling only - use astro-headless-ui for behavior)

---

## Quality Checklist

Before considering DaisyUI implementation complete:

### Installation & Configuration
- [ ] DaisyUI installed in `packages/ui-components/package.json`
- [ ] Base Tailwind config created with DaisyUI plugin
- [ ] Client sites extend base config with brand colors
- [ ] Theme applied in BaseLayout (`data-theme` attribute)

### Component Development
- [ ] Button, Card, Alert, Badge, Input components migrated to DaisyUI
- [ ] All components use TypeScript Props interfaces
- [ ] All components have JSDoc comments with usage examples
- [ ] Components exported from `packages/ui-components/src/index.ts`

### Theme Customization
- [ ] Client brand colors defined in `tailwind.config.cjs`
- [ ] Theme name matches client site identifier
- [ ] All DaisyUI color tokens defined (primary, secondary, accent, etc.)
- [ ] Colors meet WCAG 2.1 AA contrast requirements

### Testing
- [ ] Components render correctly on mobile (375px)
- [ ] Components render correctly on tablet (768px)
- [ ] Components render correctly on desktop (1440px)
- [ ] Keyboard navigation works for interactive components
- [ ] No console errors in browser
- [ ] Build completes without errors

### Documentation
- [ ] Component usage examples documented
- [ ] Prompt templates created for common components
- [ ] Migration guide documented
- [ ] Team trained on DaisyUI usage

---

## Related Documentation

- [Astro Headless UI Guide](./ASTRO_HEADLESS_UI_GUIDE.md) - Interactive component behavior
- [Astro Headless UI Prompting Guide](./ASTRO_HEADLESS_UI_PROMPTING_GUIDE.md) - Prompt templates
- [Website Global Rules](./.claude/prompts/website-global-rules.md) - Design principles
- [Content Width Standard](./.claude/prompts/CONTENT_WIDTH_STANDARD.md) - Layout standards

---

## Troubleshooting

### DaisyUI classes not applying

**Problem:** Classes like `btn btn-primary` have no effect

**Solutions:**
1. Verify DaisyUI plugin in `tailwind.config.cjs`:
   ```javascript
   plugins: [require('daisyui')]
   ```
2. Check `data-theme` attribute on `<html>` tag
3. Rebuild Tailwind CSS: `pnpm build`
4. Clear browser cache and hard refresh (Ctrl+Shift+R)

### Theme colors not matching brand guidelines

**Problem:** Button shows default blue instead of brand primary color

**Solutions:**
1. Verify client theme defined in `tailwind.config.cjs`
2. Check `data-theme` attribute matches theme name
3. Ensure primary color hex value correct in config
4. Rebuild and restart dev server

### Components look different across client sites

**Problem:** Same component has different styling on different sites

**Solutions:**
1. Each client site should extend base config, not replace it
2. Verify shared components use DaisyUI token classes (`btn-primary`) not hardcoded colors
3. Check each client's theme config defines all required color tokens
4. Ensure content array includes shared component paths

---

**Questions or issues?** Reference DaisyUI docs: https://daisyui.com/ or create an issue in the project repository.
