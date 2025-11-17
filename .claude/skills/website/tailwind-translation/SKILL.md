---
name: tailwind-translation
description: Quick reference guide for translating Figma CSS properties to Tailwind utility classes
keywords: [tailwind, css, figma, utility-classes, design-tokens]
version: 1.0.0
---

# Figma CSS to Tailwind Class Translation Guide

## Spacing Translation

### Padding & Margin

| Figma Value | Tailwind Class | Pixels |
|------------|---------------|--------|
| padding: 4px | `p-1` | 4px |
| padding: 8px | `p-2` | 8px |
| padding: 12px | `p-3` | 12px |
| padding: 16px | `p-4` | 16px |
| padding: 20px | `p-5` | 20px |
| padding: 24px | `p-6` | 24px |
| padding: 32px | `p-8` | 32px |
| padding: 48px | `p-12` | 48px |
| padding: 64px | `p-16` | 64px |

**Directional Padding:**
- `padding-left: 16px` → `pl-4`
- `padding-right: 16px` → `pr-4`
- `padding-top: 16px` → `pt-4`
- `padding-bottom: 16px` → `pb-4`
- `padding-left: 16px; padding-right: 16px` → `px-4`
- `padding-top: 16px; padding-bottom: 16px` → `py-4`

**Gap (Flexbox/Grid):**
- `gap: 16px` → `gap-4`
- `row-gap: 16px` → `gap-y-4`
- `column-gap: 16px` → `gap-x-4`

---

## Typography Translation

### Font Sizes

| Figma Value | Tailwind Class | Size |
|------------|---------------|------|
| font-size: 12px | `text-xs` | 0.75rem |
| font-size: 14px | `text-sm` | 0.875rem |
| font-size: 16px | `text-base` | 1rem |
| font-size: 18px | `text-lg` | 1.125rem |
| font-size: 20px | `text-xl` | 1.25rem |
| font-size: 24px | `text-2xl` | 1.5rem |
| font-size: 30px | `text-3xl` | 1.875rem |
| font-size: 36px | `text-4xl` | 2.25rem |
| font-size: 48px | `text-5xl` | 3rem |
| font-size: 60px | `text-6xl` | 3.75rem |
| font-size: 72px | `text-7xl` | 4.5rem |

### Font Weights

| Figma Value | Tailwind Class | Weight |
|------------|---------------|--------|
| font-weight: 100 | `font-thin` | 100 |
| font-weight: 300 | `font-light` | 300 |
| font-weight: 400 | `font-normal` | 400 |
| font-weight: 500 | `font-medium` | 500 |
| font-weight: 600 | `font-semibold` | 600 |
| font-weight: 700 | `font-bold` | 700 |
| font-weight: 900 | `font-black` | 900 |

### Line Heights

| Figma Value | Tailwind Class | Line Height |
|------------|---------------|-------------|
| line-height: 1 | `leading-none` | 1 |
| line-height: 1.25 | `leading-tight` | 1.25 |
| line-height: 1.375 | `leading-snug` | 1.375 |
| line-height: 1.5 | `leading-normal` | 1.5 |
| line-height: 1.625 | `leading-relaxed` | 1.625 |
| line-height: 2 | `leading-loose` | 2 |

---

## Layout Translation

### Display & Position

| Figma/CSS | Tailwind Class |
|-----------|---------------|
| display: flex | `flex` |
| display: grid | `grid` |
| display: block | `block` |
| display: inline | `inline` |
| display: inline-block | `inline-block` |
| display: none | `hidden` |
| position: relative | `relative` |
| position: absolute | `absolute` |
| position: fixed | `fixed` |
| position: sticky | `sticky` |

### Flexbox

| Figma/CSS | Tailwind Class |
|-----------|---------------|
| flex-direction: row | `flex-row` |
| flex-direction: column | `flex-col` |
| justify-content: flex-start | `justify-start` |
| justify-content: center | `justify-center` |
| justify-content: flex-end | `justify-end` |
| justify-content: space-between | `justify-between` |
| align-items: flex-start | `items-start` |
| align-items: center | `items-center` |
| align-items: flex-end | `items-end` |
| align-items: stretch | `items-stretch` |
| gap: 16px | `gap-4` |

### Grid

| Figma/CSS | Tailwind Class |
|-----------|---------------|
| grid-template-columns: repeat(2, 1fr) | `grid-cols-2` |
| grid-template-columns: repeat(3, 1fr) | `grid-cols-3` |
| grid-template-columns: repeat(4, 1fr) | `grid-cols-4` |
| grid-gap: 16px | `gap-4` |

---

## Sizing Translation

### Width

| Figma Value | Tailwind Class | Size |
|------------|---------------|------|
| width: 100% | `w-full` | 100% |
| width: 50% | `w-1/2` | 50% |
| width: 33.33% | `w-1/3` | 33.33% |
| width: 25% | `w-1/4` | 25% |
| width: auto | `w-auto` | auto |
| max-width: 1280px | `max-w-7xl` | 1280px |
| max-width: 1024px | `max-w-5xl` | 1024px |
| max-width: 768px | `max-w-3xl` | 768px |
| max-width: 640px | `max-w-2xl` | 640px |

### Height

| Figma Value | Tailwind Class | Size |
|------------|---------------|------|
| height: 100vh | `h-screen` | 100vh |
| height: 100% | `h-full` | 100% |
| height: auto | `h-auto` | auto |
| min-height: 100vh | `min-h-screen` | 100vh |

---

## Colors (Custom)

### Adding Custom Colors to Config

**Figma Color Palette → `tailwind.config.cjs`:**

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1a202c',
        'brand-gray': '#2d3748',
      }
    }
  }
}
```

**Usage in Components:**
- Background: `bg-brand-blue`
- Text: `text-brand-blue`
- Border: `border-brand-blue`

---

## Shadows

| Figma/CSS | Tailwind Class | Shadow |
|-----------|---------------|--------|
| Small shadow | `shadow-sm` | Subtle |
| Medium shadow | `shadow` | Default |
| Large shadow | `shadow-md` | Medium |
| Extra large shadow | `shadow-lg` | Large |
| 2XL shadow | `shadow-xl` | Extra large |
| No shadow | `shadow-none` | None |

---

## Borders & Radius

### Border Width

| Figma Value | Tailwind Class | Width |
|------------|---------------|-------|
| border: 1px | `border` | 1px |
| border: 2px | `border-2` | 2px |
| border: 4px | `border-4` | 4px |
| border: 0 | `border-0` | 0 |

### Border Radius

| Figma Value | Tailwind Class | Radius |
|------------|---------------|--------|
| border-radius: 0px | `rounded-none` | 0px |
| border-radius: 4px | `rounded` | 0.25rem |
| border-radius: 8px | `rounded-lg` | 0.5rem |
| border-radius: 12px | `rounded-xl` | 0.75rem |
| border-radius: 16px | `rounded-2xl` | 1rem |
| border-radius: 9999px | `rounded-full` | 9999px |

---

## Responsive Modifiers

### Breakpoint Prefixes

| Breakpoint | Tailwind Prefix | Min Width |
|------------|----------------|-----------|
| Mobile (default) | (none) | 0px |
| Tablet | `md:` | 768px |
| Desktop | `lg:` | 1024px |
| Wide Desktop | `xl:` | 1280px |

**Example:**
```astro
<!-- Mobile: Stack vertically, Desktop: Horizontal row -->
<div class="flex flex-col md:flex-row">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Mobile: Full width, Tablet: Half width, Desktop: Third width -->
<div class="w-full md:w-1/2 lg:w-1/3">Content</div>
```

---

## Hover, Focus, Active States

### State Prefixes

| State | Tailwind Prefix | When Applied |
|-------|----------------|--------------|
| Hover | `hover:` | Mouse hover (desktop) |
| Focus | `focus:` | Keyboard focus |
| Active | `active:` | Being clicked/pressed |
| Disabled | `disabled:` | Element disabled |

**Example:**
```astro
<button class="bg-primary text-white hover:bg-primary-dark focus:ring-2 focus:ring-primary active:scale-95 disabled:opacity-50">
  Click Me
</button>
```

---

## Quick Translation Workflow

1. **Inspect element in Figma** (Developer Mode → CSS)
2. **Identify property type** (spacing, typography, layout, color)
3. **Find Tailwind equivalent** in this guide
4. **Add responsive prefixes** if needed (`md:`, `lg:`)
5. **Add state prefixes** if interactive (`hover:`, `focus:`)
6. **Test in browser** at all breakpoints

---

## Related Skills
- [design-to-code-workflow](../design-to-code-workflow/SKILL.md)
- [responsive-testing](../responsive-testing/SKILL.md)
