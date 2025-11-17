---
name: responsive-testing
description: Systematic testing procedure for validating responsive design across mobile, tablet, and desktop breakpoints
keywords: [responsive-design, breakpoints, mobile-first, testing, cross-device]
version: 1.0.0
---

# Responsive Design Testing Procedure

## Purpose
This skill provides a systematic checklist for testing responsive web designs across all required breakpoints, ensuring consistent user experience on mobile, tablet, and desktop devices.

---

## Required Test Breakpoints

### Standard Breakpoints (Match Tailwind CSS Defaults)

| Device | Width | Tailwind Prefix | Test Priority |
|--------|-------|----------------|---------------|
| **Mobile** | 375px | (none) | 🔴 Critical |
| **Tablet** | 768px | `md:` | 🟡 High |
| **Desktop** | 1440px | `lg:` | 🟡 High |

### Additional Breakpoints (Optional Testing)

| Device | Width | Tailwind Prefix | Test Priority |
|--------|-------|----------------|---------------|
| Small Mobile | 320px | (none) | 🟢 Medium |
| Large Tablet | 1024px | `lg:` | 🟢 Medium |
| Wide Desktop | 1920px | `xl:` | 🟢 Low |

---

## Testing Checklist Per Component

### 1. Layout Structure

#### Mobile (375px)
- [ ] **Content stacks vertically** (`flex-col` by default)
- [ ] **No horizontal scrolling** (all content fits within viewport)
- [ ] **Touch-friendly spacing** (minimum 44x44px tap targets)
- [ ] **Readable text** (minimum 16px font size)
- [ ] **Images scale proportionally** (use `w-full` or `max-w-full`)

#### Tablet (768px - `md:` prefix)
- [ ] **Layout transitions smoothly** (e.g., `md:flex-row`)
- [ ] **Optimal use of horizontal space** (2-column grids, side-by-side content)
- [ ] **Navigation adapts** (desktop nav bar visible if applicable)
- [ ] **Typography scales up** (e.g., `md:text-5xl` for headings)

#### Desktop (1440px - `lg:` prefix)
- [ ] **Max-width prevents excessive stretching** (`lg:max-w-7xl`)
- [ ] **3-column layouts utilized** (if designed for desktop)
- [ ] **Generous whitespace** (larger padding/margins)
- [ ] **Large typography** (e.g., `lg:text-6xl` for hero headings)

---

### 2. Typography

#### Mobile (375px)
- [ ] **Headings readable** (minimum `text-4xl` for H1)
- [ ] **Body text comfortable** (`text-base` or `text-lg`)
- [ ] **Line height prevents cramping** (`leading-relaxed` or `leading-loose`)
- [ ] **No text overflow** (use `break-words` for long URLs)

#### Tablet (768px)
- [ ] **Headings scale up** (`md:text-5xl` for H1)
- [ ] **Optimal line length** (60-80 characters per line)
- [ ] **Readable at arm's length** (comfortable for tablet reading distance)

#### Desktop (1440px)
- [ ] **Large headings** (`lg:text-6xl` or `lg:text-7xl`)
- [ ] **Max-width for readability** (`max-w-prose` for long-form content)
- [ ] **Generous line height** (breathing room for large screens)

---

### 3. Images & Media

#### Mobile (375px)
- [ ] **Images responsive** (use Astro `<Image>` component with `width` and `height`)
- [ ] **Aspect ratio preserved** (use `aspect-video`, `aspect-square`)
- [ ] **Lazy loading enabled** (`loading="lazy"` for below-fold images)
- [ ] **Alt text present** (descriptive alt text for all images)
- [ ] **WebP format** (Astro automatically converts)

#### Tablet (768px)
- [ ] **Images scale appropriately** (`md:w-1/2` for side-by-side layouts)
- [ ] **Grid layouts adjust** (`md:grid-cols-2` for image galleries)

#### Desktop (1440px)
- [ ] **High-resolution images** (2x pixel density for Retina displays)
- [ ] **Max-width prevents pixelation** (set reasonable max dimensions)

---

### 4. Interactive Elements (Buttons, Links, Forms)

#### Mobile (375px)
- [ ] **Minimum touch target 44x44px** (WCAG requirement)
- [ ] **Adequate spacing between elements** (minimum `space-y-4`)
- [ ] **Touch-friendly forms** (large input fields with `p-3` or `p-4`)
- [ ] **Visible focus states** (for keyboard navigation)
- [ ] **No hover-only interactions** (mobile doesn't have hover)

#### Tablet (768px)
- [ ] **Hover states functional** (desktop-like hover effects)
- [ ] **Form layouts optimize horizontal space** (side-by-side labels/inputs)
- [ ] **Button sizing comfortable** (not too large, not too small)

#### Desktop (1440px)
- [ ] **Hover effects smooth** (use `transition-all duration-200`)
- [ ] **Cursor changes for clickable elements** (`cursor-pointer`)
- [ ] **Focus indicators prominent** (`focus:ring-2 focus:ring-primary`)

---

### 5. Navigation

#### Mobile (375px)
- [ ] **Hamburger menu functional** (toggle open/close with JavaScript)
- [ ] **Menu accessible via keyboard** (Tab, Enter, Escape keys)
- [ ] **Menu overlay or push layout** (doesn't overlap content awkwardly)
- [ ] **Logo/brand visible** (doesn't disappear on mobile)
- [ ] **Close button clearly visible** (X icon or "Close" text)

#### Tablet (768px)
- [ ] **Desktop nav bar visible** (if designed for tablet+)
- [ ] **Or: Hamburger persists** (if menu too large for tablet)
- [ ] **Horizontal nav items spaced evenly**

#### Desktop (1440px)
- [ ] **Full horizontal nav bar**
- [ ] **Hover states on nav items** (underline, color change, etc.)
- [ ] **Dropdown menus functional** (if applicable)
- [ ] **Sticky positioning doesn't obscure content** (if `sticky` used)

---

### 6. Spacing & Whitespace

#### Mobile (375px)
- [ ] **Container padding: `px-4`** (minimum)
- [ ] **Section spacing: `space-y-8`** (between major sections)
- [ ] **Component spacing: `space-y-4`** (between related elements)

#### Tablet (768px)
- [ ] **Container padding: `md:px-8`**
- [ ] **Section spacing: `md:space-y-12`**

#### Desktop (1440px)
- [ ] **Container padding: `lg:px-16`**
- [ ] **Section spacing: `lg:space-y-16`**
- [ ] **Generous breathing room** (content doesn't feel cramped)

---

## Testing Tools & Methods

### Browser DevTools (Recommended)

**Chrome DevTools:**
1. Open DevTools (F12 or Cmd+Option+I)
2. Click "Toggle device toolbar" (Cmd+Shift+M)
3. Select device preset (e.g., "iPhone SE", "iPad", "Responsive")
4. Or: Enter custom width (375px, 768px, 1440px)
5. Test interactions (click, scroll, keyboard navigation)

**Responsive Design Mode (Firefox):**
1. Open DevTools (F12)
2. Click "Responsive Design Mode" (Cmd+Option+M)
3. Enter custom dimensions
4. Test at all breakpoints

### Physical Device Testing (Best Practice)

**Why test on real devices:**
- Touch interactions behave differently than mouse clicks
- Mobile browsers have quirks (Safari iOS, Chrome Android)
- Performance varies (slower processors, network speeds)

**Recommended test devices:**
- **Mobile:** iPhone (iOS Safari), Android phone (Chrome)
- **Tablet:** iPad (iOS Safari), Android tablet
- **Desktop:** Mac (Safari), PC (Chrome, Firefox, Edge)

### Automated Testing (Optional)

**Playwright Browser Automation:**
```javascript
// Test responsive breakpoints
test('Homepage responsive at 375px', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:3000');
  // Take screenshot
  await page.screenshot({ path: 'test-results/mobile-375.png' });
});

test('Homepage responsive at 768px', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: 'test-results/tablet-768.png' });
});

test('Homepage responsive at 1440px', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: 'test-results/desktop-1440.png' });
});
```

---

## Common Responsive Issues & Fixes

### Issue 1: Horizontal Scroll on Mobile
**Symptom:** Content overflows viewport horizontally

**Causes:**
- Fixed-width elements (e.g., `w-[500px]`)
- Images without responsive sizing
- Grid columns too wide

**Fix:**
```astro
<!-- Wrong: Fixed width -->
<div class="w-[500px]">Content</div>

<!-- Correct: Responsive width -->
<div class="w-full max-w-md">Content</div>

<!-- Wrong: Image no width constraint -->
<img src="/large-image.jpg" />

<!-- Correct: Responsive image -->
<Image src={largeImage} class="w-full" alt="Description" />
```

---

### Issue 2: Text Too Small on Mobile
**Symptom:** Users need to zoom to read text

**Causes:**
- Font size below 16px
- No responsive scaling

**Fix:**
```astro
<!-- Wrong: Too small -->
<p class="text-sm">Body text</p>

<!-- Correct: Readable size -->
<p class="text-base md:text-lg">Body text</p>
```

---

### Issue 3: Touch Targets Too Small
**Symptom:** Users mis-tap buttons/links on mobile

**Causes:**
- Buttons smaller than 44x44px
- Links too close together

**Fix:**
```astro
<!-- Wrong: Small button -->
<button class="px-2 py-1 text-xs">Click</button>

<!-- Correct: Touch-friendly button -->
<button class="px-6 py-3 text-base">Click</button>

<!-- Spacing between links -->
<nav class="flex flex-col space-y-4">
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>
```

---

### Issue 4: Desktop Layout Doesn't Adapt on Mobile
**Symptom:** Multi-column layout squished on mobile

**Causes:**
- Using desktop-first responsive classes
- No mobile breakpoint defined

**Fix:**
```astro
<!-- Wrong: Desktop-first (stays 3 columns on mobile) -->
<div class="grid grid-cols-3 md:grid-cols-1">

<!-- Correct: Mobile-first -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

### Issue 5: Images Stretched/Squashed
**Symptom:** Images lose aspect ratio on different screens

**Causes:**
- Setting both `width` and `height` without preserving ratio
- No `object-fit` property

**Fix:**
```astro
<!-- Wrong: Fixed dimensions distort image -->
<img src="/hero.jpg" class="w-full h-64" />

<!-- Correct: Aspect ratio preserved -->
<Image
  src={heroImage}
  class="w-full h-auto object-cover aspect-video"
  alt="Hero image"
/>
```

---

## Browser-Specific Quirks

### Safari (iOS)
**Issue:** `vh` units cause problems (viewport height changes when scrolling)

**Fix:** Use `min-h-screen` instead of `h-screen` for full-viewport sections

**Issue:** Buttons have default iOS styling

**Fix:** Add `-webkit-appearance: none` or use Tailwind's reset

---

### Firefox
**Issue:** Flexbox gap property not supported in older versions

**Fix:** Use `space-x-*` or `space-y-*` utilities instead of `gap-*` if targeting older Firefox

---

### Internet Explorer 11 (Legacy)
**Note:** Astro does NOT support IE11 by default. If client requires IE11, discuss alternatives (polyfills, separate legacy build).

---

## Summary: Responsive Testing Workflow

1. **Build mobile-first** (no prefixes for mobile)
2. **Add tablet adaptations** (`md:` prefixes at 768px)
3. **Add desktop enhancements** (`lg:` prefixes at 1440px)
4. **Test in browser DevTools** at each breakpoint
5. **Test on physical devices** (iOS Safari, Chrome Android)
6. **Fix issues incrementally** (don't batch fixes, test as you go)

---

## Related Skills
- [design-to-code-workflow](../design-to-code-workflow/SKILL.md) - Translating Figma to code
- [tailwind-translation](../tailwind-translation/SKILL.md) - CSS to Tailwind mapping
- [accessibility-validation](../accessibility-validation/SKILL.md) - WCAG compliance
