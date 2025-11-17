# DaisyUI Components Skill

## Skill Metadata
- **Name:** daisyui-components
- **Category:** website
- **Type:** reference
- **Version:** 1.0.0
- **DaisyUI Version:** 5.4.7
- **Last Updated:** 2025-11-11

## Description
Comprehensive reference guide for DaisyUI component classes, theme configuration, and integration patterns. This skill provides quick lookup for DaisyUI semantic class names and usage examples specific to this project's implementation.

## When to Use This Skill
- When implementing new Astro components
- When migrating custom CSS to DaisyUI classes
- When customizing component appearance via Tailwind config
- When troubleshooting theme or styling issues
- During component code reviews

## Core DaisyUI Components Reference

### Actions

#### Button
**Classes:** `btn`, `btn-{variant}`, `btn-{size}`, `btn-{shape}`, `btn-{state}`

**Variants:**
- `btn-primary` - Primary brand color
- `btn-secondary` - Secondary brand color
- `btn-accent` - Accent color
- `btn-ghost` - Transparent with hover effect
- `btn-link` - Styled like a link
- `btn-outline` - Outlined button
- `btn-active` - Active state appearance
- `btn-disabled` - Disabled appearance

**Sizes:**
- `btn-lg` - Large button
- `btn-md` - Medium (default, no class needed)
- `btn-sm` - Small button
- `btn-xs` - Extra small button

**Shapes:**
- `btn-wide` - Wider padding
- `btn-block` - Full width
- `btn-circle` - Circular button
- `btn-square` - Square button

**States:**
- `loading` - Shows loading spinner
- `disabled` - Disabled state

**Example:**
```astro
<button class="btn btn-primary btn-lg">
  Primary Large Button
</button>

<button class="btn btn-ghost loading">
  Loading...
</button>

<button class="btn btn-circle btn-outline">
  <svg><!-- Icon --></svg>
</button>
```

#### Dropdown
**Classes:** `dropdown`, `dropdown-{position}`, `dropdown-{state}`

**Positions:**
- `dropdown-end` - Align to right
- `dropdown-top` - Open upward
- `dropdown-bottom` - Open downward (default)
- `dropdown-left` - Open to left
- `dropdown-right` - Open to right

**Content:**
- `dropdown-content` - Container for dropdown items
- `menu` - Menu list inside dropdown

**Example:**
```astro
<div class="dropdown">
  <label tabindex="0" class="btn btn-ghost">Click</label>
  <ul class="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

#### Modal
**Classes:** `modal`, `modal-{state}`, `modal-box`, `modal-action`

**States:**
- `modal-open` - Shows modal
- `modal-bottom` - Bottom sheet on mobile
- `modal-middle` - Centered (default)

**Structure:**
- `modal-box` - Modal content container
- `modal-action` - Footer action buttons

**Example:**
```astro
<dialog class="modal modal-open">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Modal Title</h3>
    <p class="py-4">Modal content</p>
    <div class="modal-action">
      <button class="btn">Close</button>
    </div>
  </div>
</dialog>
```

#### Swap
**Classes:** `swap`, `swap-{animation}`, `swap-on`, `swap-off`

**Animations:**
- `swap-rotate` - Rotate animation
- `swap-flip` - Flip animation
- `swap-active` - Active state

**Example:**
```astro
<label class="swap">
  <input type="checkbox" />
  <div class="swap-on">ON</div>
  <div class="swap-off">OFF</div>
</label>
```

### Data Display

#### Card
**Classes:** `card`, `card-{variant}`, `card-body`, `card-title`, `card-actions`

**Variants:**
- `card-bordered` - With border
- `card-compact` - Smaller padding
- `card-normal` - Normal padding (default)
- `card-side` - Horizontal layout

**Structure:**
- `card-body` - Main content area
- `card-title` - Card heading
- `card-actions` - Button container
- `figure` - Image container

**Example:**
```astro
<div class="card bg-base-100 shadow-xl">
  <figure>
    <img src="/image.jpg" alt="Description" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Card description</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

#### Badge
**Classes:** `badge`, `badge-{variant}`, `badge-{size}`

**Variants:**
- `badge-primary`, `badge-secondary`, `badge-accent`
- `badge-ghost`, `badge-outline`
- `badge-success`, `badge-warning`, `badge-error`, `badge-info`

**Sizes:**
- `badge-lg`, `badge-md`, `badge-sm`, `badge-xs`

**Example:**
```astro
<span class="badge badge-primary">New</span>
<span class="badge badge-outline">Beta</span>
```

#### Collapse (Accordion)
**Classes:** `collapse`, `collapse-{type}`, `collapse-title`, `collapse-content`

**Types:**
- `collapse-arrow` - With arrow indicator
- `collapse-plus` - With plus/minus indicator
- `collapse-open` - Expanded state
- `collapse-close` - Collapsed state

**Example:**
```astro
<div class="collapse collapse-arrow bg-base-200">
  <input type="checkbox" />
  <div class="collapse-title text-xl font-medium">
    Click to expand
  </div>
  <div class="collapse-content">
    <p>Content here</p>
  </div>
</div>
```

### Data Input

#### Input
**Classes:** `input`, `input-{variant}`, `input-{size}`

**Variants:**
- `input-bordered` - With border (recommended)
- `input-ghost` - Transparent background
- `input-primary`, `input-secondary`, `input-accent`
- `input-success`, `input-warning`, `input-error`, `input-info`

**Sizes:**
- `input-lg`, `input-md`, `input-sm`, `input-xs`

**Example:**
```astro
<input type="text" placeholder="Type here" class="input input-bordered w-full" />
<input type="email" class="input input-bordered input-error" />
```

#### Textarea
**Classes:** `textarea`, `textarea-{variant}`, `textarea-{size}`

Same variants and sizes as Input.

**Example:**
```astro
<textarea
  class="textarea textarea-bordered w-full"
  placeholder="Enter message"
  rows="4"
></textarea>
```

#### Select
**Classes:** `select`, `select-{variant}`, `select-{size}`

Same variants and sizes as Input.

**Example:**
```astro
<select class="select select-bordered w-full">
  <option disabled selected>Pick one</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

#### Checkbox
**Classes:** `checkbox`, `checkbox-{variant}`, `checkbox-{size}`

**Example:**
```astro
<input type="checkbox" class="checkbox checkbox-primary" checked />
```

#### Radio
**Classes:** `radio`, `radio-{variant}`, `radio-{size}`

**Example:**
```astro
<input type="radio" name="option" class="radio radio-primary" checked />
```

#### Toggle
**Classes:** `toggle`, `toggle-{variant}`, `toggle-{size}`

**Example:**
```astro
<input type="checkbox" class="toggle toggle-primary" checked />
```

#### Range
**Classes:** `range`, `range-{variant}`, `range-{size}`

**Example:**
```astro
<input type="range" min="0" max="100" class="range range-primary" />
```

### Feedback

#### Alert
**Classes:** `alert`, `alert-{variant}`

**Variants:**
- `alert-info` - Informational (default)
- `alert-success` - Success message
- `alert-warning` - Warning message
- `alert-error` - Error message

**Example:**
```astro
<div class="alert alert-success">
  <svg><!-- Success icon --></svg>
  <span>Your purchase has been confirmed!</span>
</div>
```

#### Toast
**Classes:** `toast`, `toast-{position}`

**Positions:**
- `toast-top`, `toast-bottom`, `toast-center`
- `toast-start`, `toast-end`, `toast-middle`

**Example:**
```astro
<div class="toast toast-end">
  <div class="alert alert-info">
    <span>New message arrived</span>
  </div>
</div>
```

#### Loading
**Classes:** `loading`, `loading-{type}`, `loading-{size}`

**Types:**
- `loading-spinner` - Circular spinner
- `loading-dots` - Three dots
- `loading-ring` - Ring spinner
- `loading-ball` - Bouncing ball
- `loading-bars` - Vertical bars
- `loading-infinity` - Infinity symbol

**Sizes:**
- `loading-lg`, `loading-md`, `loading-sm`, `loading-xs`

**Example:**
```astro
<span class="loading loading-spinner loading-lg"></span>
<button class="btn">
  <span class="loading loading-spinner"></span>
  Loading...
</button>
```

#### Progress
**Classes:** `progress`, `progress-{variant}`

**Example:**
```astro
<progress class="progress progress-primary w-56" value="70" max="100"></progress>
```

### Layout

#### Hero
**Classes:** `hero`, `hero-overlay`, `hero-content`

**Example:**
```astro
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">Provident cupiditate voluptatem</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
```

#### Divider
**Classes:** `divider`, `divider-{position}`, `divider-{variant}`

**Positions:**
- `divider-horizontal` - Vertical divider
- `divider-vertical` - Horizontal divider (default)

**Example:**
```astro
<div class="divider">OR</div>
<div class="flex">
  <div>Left</div>
  <div class="divider divider-horizontal"></div>
  <div>Right</div>
</div>
```

### Navigation

#### Menu
**Classes:** `menu`, `menu-{size}`, `menu-{direction}`

**Sizes:**
- `menu-lg`, `menu-md`, `menu-sm`, `menu-xs`

**Directions:**
- `menu-horizontal` - Horizontal layout
- `menu-vertical` - Vertical layout (default)

**Example:**
```astro
<ul class="menu bg-base-200 w-56 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li>
    <details>
      <summary>Parent</summary>
      <ul>
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </details>
  </li>
</ul>
```

#### Navbar
**Classes:** `navbar`, `navbar-{position}`

**Structure:**
- `navbar-start` - Left section
- `navbar-center` - Center section
- `navbar-end` - Right section

**Example:**
```astro
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl">Logo</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Link</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <button class="btn">Button</button>
  </div>
</div>
```

#### Breadcrumbs
**Classes:** `breadcrumbs`

**Example:**
```astro
<div class="text-sm breadcrumbs">
  <ul>
    <li><a>Home</a></li>
    <li><a>Documents</a></li>
    <li>Add Document</li>
  </ul>
</div>
```

#### Tabs
**Classes:** `tabs`, `tab`, `tab-{variant}`, `tab-active`

**Variants:**
- `tabs-bordered` - With bottom border
- `tabs-lifted` - Lifted tab style
- `tabs-boxed` - Boxed style
- `tab-active` - Active tab

**Example:**
```astro
<div class="tabs tabs-boxed">
  <a class="tab tab-active">Tab 1</a>
  <a class="tab">Tab 2</a>
  <a class="tab">Tab 3</a>
</div>
```

## Theme Colors Reference

### Color System
DaisyUI uses semantic color names that adapt to theme:

**Base Colors:**
- `bg-base-100` - Main background
- `bg-base-200` - Slightly darker background
- `bg-base-300` - Even darker background
- `base-content` - Text color on base backgrounds

**Semantic Colors:**
- `primary` / `primary-content` - Primary brand color / text on primary
- `secondary` / `secondary-content` - Secondary brand color / text on secondary
- `accent` / `accent-content` - Accent color / text on accent
- `neutral` / `neutral-content` - Neutral color / text on neutral

**Feedback Colors:**
- `success` / `success-content` - Success states
- `warning` / `warning-content` - Warning states
- `error` / `error-content` - Error states
- `info` / `info-content` - Informational states

**Usage:**
```astro
<!-- Background + text color -->
<div class="bg-primary text-primary-content">
  Text with proper contrast
</div>

<!-- Button variants use semantic colors -->
<button class="btn btn-success">Success Button</button>

<!-- Alert variants -->
<div class="alert alert-warning">
  <span>Warning message</span>
</div>
```

## Customizing DaisyUI Themes

### Archetype Configuration Pattern

This project uses archetype presets for brand differentiation:

```javascript
// packages/ui-components/config/archetype-bold.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',      // Deep navy
        'primary-focus': '#051220',
        'primary-content': '#FFFFFF',
        secondary: '#FF6B35',    // Electric orange
        'secondary-focus': '#E55A25',
        'secondary-content': '#FFFFFF',
        accent: '#FFD700',       // Gold
        neutral: '#2D3748',
        'base-100': '#FFFFFF',
        'base-200': '#F7FAFC',
        'base-300': '#E2E8F0',
        'base-content': '#1A202C',
      },
    },
  },
  daisyui: {
    themes: [
      {
        bold: {
          "primary": "#0A2540",
          "primary-focus": "#051220",
          "primary-content": "#FFFFFF",
          "secondary": "#FF6B35",
          "secondary-focus": "#E55A25",
          "secondary-content": "#FFFFFF",
          "accent": "#FFD700",
          "neutral": "#2D3748",
          "base-100": "#FFFFFF",
          "base-200": "#F7FAFC",
          "base-300": "#E2E8F0",
          "base-content": "#1A202C",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
};
```

### Client Site Integration

```javascript
// sites/client-name/tailwind.config.cjs
const archetypeBold = require('../../packages/ui-components/config/archetype-bold');

module.exports = {
  presets: [archetypeBold],
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '../../packages/ui-components/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // Client-specific overrides
      colors: {
        primary: '#003366',  // Override archetype primary
      },
    },
  },
};
```

## Component Migration Patterns

### Replacing Custom CSS with DaisyUI

**Before (Custom CSS):**
```astro
<button class="custom-button">Click</button>

<style>
  .custom-button {
    padding: 0.75rem 1.5rem;
    background-color: #3b82f6;
    color: white;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: background-color 0.2s;
  }
  .custom-button:hover {
    background-color: #2563eb;
  }
</style>
```

**After (DaisyUI):**
```astro
<button class="btn btn-primary">Click</button>
<!-- Zero custom CSS needed -->
```

### Extending DaisyUI Components

```astro
---
// Create custom variant using DaisyUI as base
const variantClasses = {
  hero: 'btn btn-primary btn-lg',
  subtle: 'btn btn-ghost',
  danger: 'btn btn-error btn-outline',
};

interface Props {
  variant?: 'hero' | 'subtle' | 'danger';
}

const { variant = 'hero' } = Astro.props;
---

<button class={variantClasses[variant]}>
  <slot />
</button>
```

## Utility Classes

### Spacing
- `p-{size}` - Padding (0-96, in increments of 4px)
- `m-{size}` - Margin
- `gap-{size}` - Gap for flex/grid

### Sizing
- `w-{size}` - Width (px, %, or screen fractions)
- `h-{size}` - Height
- `max-w-{size}` - Max width (xs, sm, md, lg, xl, 2xl, etc.)

### Flexbox/Grid
- `flex`, `flex-col`, `flex-row`
- `justify-{position}` - Justify content (start, center, end, between, around)
- `items-{position}` - Align items (start, center, end, stretch)
- `grid`, `grid-cols-{n}`

### Typography
- `text-{size}` - Font size (xs, sm, base, lg, xl, 2xl... 9xl)
- `font-{weight}` - Font weight (thin, normal, medium, bold, black)
- `text-{align}` - Text alignment (left, center, right, justify)

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| DaisyUI classes not applying | Check `tailwind.config.cjs` has DaisyUI plugin: `plugins: [require('daisyui')]` |
| Theme colors not working | Verify theme defined in `daisyui.themes` config |
| Buttons don't have hover states | Ensure `daisyui.styled: true` in config |
| Custom colors not showing | Check color defined in both `theme.extend.colors` AND `daisyui.themes[{themeName}]` |
| Component classes conflict | DaisyUI classes should come before custom classes: `class:list={['btn btn-primary', customClass]}` |

## Resources

- [DaisyUI Official Documentation](https://daisyui.com/docs/)
- [DaisyUI Components Gallery](https://daisyui.com/components/)
- [DaisyUI Theme Generator](https://daisyui.com/theme-generator/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Integration with Project

This skill is referenced by:
- All component creation in `packages/ui-components/`
- Migration workflows (Phase 2)
- `component-architecture` skill
- Client site Tailwind configurations

## Changelog

### 1.0.0 (2025-11-11)
- Initial skill creation
- Complete component reference for DaisyUI 5.4.7
- Archetype configuration patterns documented
- Migration patterns from custom CSS included
- Theme customization examples provided
