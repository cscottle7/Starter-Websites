---
name: accessibility-validation
description: WCAG 2.1 AA compliance checklist and validation procedures for web accessibility
keywords: [accessibility, wcag, aria, screen-readers, keyboard-navigation]
version: 1.0.0
---

# Accessibility Validation (WCAG 2.1 AA)

## Purpose
Ensure all websites meet WCAG 2.1 Level AA accessibility standards, making content usable for people with disabilities including visual, auditory, motor, and cognitive impairments.

---

## Color Contrast Requirements

### Minimum Ratios (WCAG 2.1 AA)
- **Normal text (<18px):** 4.5:1 contrast ratio
- **Large text (≥18px or ≥14px bold):** 3:1 contrast ratio
- **UI components & graphics:** 3:1 contrast ratio

### Testing Tools:
1. **Chrome DevTools:**
   - Inspect element → Styles panel → Color picker shows contrast ratio
   - Pass/Fail indicator for WCAG AA/AAA

2. **WebAIM Contrast Checker:**
   - https://webaim.org/resources/contrastchecker/
   - Input foreground/background colors
   - Shows pass/fail for AA/AAA

### Common Violations & Fixes:

**❌ Poor Contrast:**
```astro
<!-- Light gray text on white background (2.1:1 - FAIL) -->
<p class="text-gray-400 bg-white">Text content</p>
```

**✅ Good Contrast:**
```astro
<!-- Dark gray text on white background (7:1 - PASS) -->
<p class="text-gray-900 bg-white">Text content</p>

<!-- White text on primary color (4.8:1 - PASS if primary is dark) -->
<p class="text-white bg-primary">Text content</p>
```

---

## Keyboard Navigation

### Requirements:
- **All interactive elements** accessible via Tab key
- **Logical tab order** (matches visual order)
- **Visible focus indicators** (outline, ring, background change)
- **No keyboard traps** (user can navigate away from any element)
- **Skip navigation link** (skip to main content)

### Testing Procedure:
1. **Tab through page** (start to finish)
2. **Verify focus order** matches visual layout
3. **Check focus visibility** (outline clearly visible)
4. **Test Escape key** (closes modals/menus)
5. **Test Enter/Space** (activates buttons/links)
6. **Test Arrow keys** (navigate dropdowns/menus)

### Implementation Examples:

**Focus Indicators:**
```astro
<!-- All interactive elements need visible focus states -->
<button class="px-4 py-2 bg-primary text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
  Click Me
</button>

<a href="/about" class="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
  About Us
</a>
```

**Skip Navigation:**
```astro
<!-- At top of body tag -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white">
  Skip to main content
</a>

<!-- Main content area -->
<main id="main-content" tabindex="-1">
  <!-- Page content -->
</main>
```

---

## ARIA Attributes

### When to Use ARIA:
- **Native HTML insufficient** (custom interactive widgets)
- **Screen reader context needed** (button icon-only)
- **Dynamic content updates** (live regions)

### Common ARIA Attributes:

#### aria-label (Descriptive Label)
```astro
<!-- Icon-only button needs label -->
<button type="button" aria-label="Open navigation menu" class="p-2">
  <svg class="w-6 h-6" aria-hidden="true"><!-- hamburger icon --></svg>
</button>
```

#### aria-expanded (Expandable Sections)
```astro
<!-- Accordion/Collapsible -->
<button
  type="button"
  aria-expanded="false"
  aria-controls="faq-1"
  class="font-semibold"
>
  What is your refund policy?
</button>
<div id="faq-1" hidden>
  <p>Answer to FAQ question...</p>
</div>
```

#### aria-hidden (Decorative Elements)
```astro
<!-- Decorative icons hidden from screen readers -->
<button class="flex items-center gap-2">
  <svg class="w-5 h-5" aria-hidden="true"><!-- icon --></svg>
  <span>Download</span>
</button>
```

#### aria-live (Dynamic Content)
```astro
<!-- Announce form errors to screen readers -->
<div aria-live="polite" aria-atomic="true" class="sr-only">
  {errorMessage && <p>{errorMessage}</p>}
</div>
```

#### role (Custom Interactive Elements)
```astro
<!-- Custom navigation role -->
<nav role="navigation" aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

---

## Semantic HTML

### Use Semantic Elements (Not Generic Divs)

**❌ Non-Semantic:**
```astro
<div class="nav">
  <div class="nav-item"><a href="/">Home</a></div>
</div>

<div class="main-content">
  <div class="heading">Page Title</div>
  <div class="paragraph">Text content...</div>
</div>
```

**✅ Semantic:**
```astro
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<main>
  <h1>Page Title</h1>
  <p>Text content...</p>
</main>
```

### Proper Heading Hierarchy

**❌ Incorrect:**
```astro
<h1>Page Title</h1>
<h4>Subsection</h4> <!-- Skipped H2 and H3 -->
```

**✅ Correct:**
```astro
<h1>Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

---

## Form Accessibility

### Requirements:
- **Visible labels** for all inputs (not placeholder-only)
- **Associated labels** (for/id pairing or wrapping)
- **Error messages** (clear, descriptive, announced to screen readers)
- **Required field indicators** (visual + programmatic)
- **Fieldset/legend** for grouped inputs (radio buttons, checkboxes)

### Accessible Form Examples:

**Text Input with Label:**
```astro
<div class="mb-4">
  <label for="email" class="block font-semibold mb-2">
    Email Address <span class="text-red-600">*</span>
  </label>
  <input
    type="email"
    id="email"
    name="email"
    required
    aria-required="true"
    aria-describedby="email-error"
    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
  />
  <div id="email-error" class="text-red-600 text-sm mt-1" role="alert">
    <!-- Error message appears here -->
  </div>
</div>
```

**Radio Button Group:**
```astro
<fieldset class="mb-4">
  <legend class="font-semibold mb-2">Select Your Plan</legend>
  <div class="space-y-2">
    <label class="flex items-center">
      <input type="radio" name="plan" value="basic" class="mr-2" />
      <span>Basic Plan - $9/month</span>
    </label>
    <label class="flex items-center">
      <input type="radio" name="plan" value="pro" class="mr-2" />
      <span>Pro Plan - $29/month</span>
    </label>
  </div>
</fieldset>
```

**Error Handling:**
```astro
<form>
  <div class="mb-4">
    <label for="username" class="block font-semibold mb-2">Username</label>
    <input
      type="text"
      id="username"
      name="username"
      aria-invalid="true"
      aria-describedby="username-error"
      class="w-full px-4 py-2 border-2 border-red-500 rounded focus:ring-2 focus:ring-red-500"
    />
    <div id="username-error" class="text-red-600 text-sm mt-1" role="alert">
      Username must be at least 3 characters long.
    </div>
  </div>
</form>
```

---

## Image Accessibility

### Alt Text Guidelines:

**Informative Images:**
```astro
<!-- Describe what's in the image -->
<Image
  src={teamPhoto}
  alt="Marketing team of 6 people collaborating around whiteboard in modern office"
  width={800}
  height={600}
/>
```

**Decorative Images:**
```astro
<!-- Empty alt for purely decorative images -->
<img src="/decorative-pattern.svg" alt="" aria-hidden="true" />
```

**Functional Images (Links/Buttons):**
```astro
<!-- Describe the function, not the image -->
<a href="/download-report.pdf">
  <img src="/pdf-icon.svg" alt="Download Annual Report PDF" />
</a>
```

**Complex Images (Charts/Diagrams):**
```astro
<!-- Provide text alternative -->
<figure>
  <img src="/revenue-chart.png" alt="Bar chart showing revenue growth from 2020-2024" />
  <figcaption>
    Revenue increased from $1M in 2020 to $5M in 2024, with consistent 25% year-over-year growth.
  </figcaption>
</figure>
```

---

## Screen Reader Testing

### Screen Reader Tools:
- **NVDA** (Windows, free): https://www.nvaccess.org/
- **JAWS** (Windows, paid): https://www.freedomscientific.com/products/software/jaws/
- **VoiceOver** (Mac, built-in): Cmd+F5
- **TalkBack** (Android, built-in): Settings → Accessibility

### Testing Procedure:
1. **Turn on screen reader**
2. **Navigate with Tab key** (not mouse)
3. **Listen to announcements**:
   - Does it announce element role? ("button", "link", "heading level 2")
   - Does it announce label/text content?
   - Is the information sufficient to understand purpose?
4. **Test form interactions** (filling inputs, error messages)
5. **Test dynamic content** (modals, accordions, live regions)

---

## Automated Testing Tools

### Browser Extensions:

**1. axe DevTools (Chrome/Firefox)**
- https://www.deque.com/axe/devtools/
- Scans page for WCAG violations
- Provides fix recommendations

**2. WAVE (Chrome/Firefox/Edge)**
- https://wave.webaim.org/extension/
- Visual feedback on accessibility issues
- Color contrast checker

**3. Lighthouse (Chrome DevTools)**
- Built into Chrome DevTools → Audits tab
- Accessibility score + specific issues

### Command Line Tools:

**axe-core with Playwright:**
```javascript
// test/accessibility.spec.js
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Homepage should not have accessibility violations', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
```

---

## Accessibility Checklist (Per Page)

### Visual
- [ ] **Color contrast** meets 4.5:1 (text) or 3:1 (large text)
- [ ] **Text resizable** to 200% without loss of content
- [ ] **Focus indicators** visible on all interactive elements
- [ ] **No color-only information** (use icons + color)

### Keyboard
- [ ] **All functionality** accessible via keyboard
- [ ] **Logical tab order** (matches visual layout)
- [ ] **No keyboard traps** (can navigate away from any element)
- [ ] **Skip navigation link** present and functional

### Semantic HTML
- [ ] **Proper heading hierarchy** (H1 → H2 → H3, no skipping)
- [ ] **Semantic elements** used (`nav`, `main`, `article`, `section`)
- [ ] **Landmarks** defined (`role="navigation"`, `role="main"`)

### ARIA
- [ ] **ARIA labels** for icon-only buttons
- [ ] **aria-expanded** for collapsible sections
- [ ] **aria-hidden** for decorative elements
- [ ] **aria-live** for dynamic content updates

### Forms
- [ ] **Visible labels** for all inputs
- [ ] **Required fields** indicated visually and programmatically
- [ ] **Error messages** descriptive and announced
- [ ] **Fieldset/legend** for grouped inputs

### Images
- [ ] **All images** have alt text (or `alt=""` if decorative)
- [ ] **Alt text descriptive** (not "image of...")
- [ ] **Complex images** have text alternatives

### Testing
- [ ] **axe DevTools** scan passes (zero violations)
- [ ] **Lighthouse Accessibility** score >90
- [ ] **Screen reader** tested (NVDA, VoiceOver, or JAWS)
- [ ] **Keyboard navigation** tested (Tab, Enter, Escape, Arrows)

---

## Common Accessibility Violations & Fixes

### 1. Missing Alt Text
**Violation:** `<img src="/photo.jpg" />`
**Fix:** `<img src="/photo.jpg" alt="Team celebrating project launch" />`

### 2. Poor Color Contrast
**Violation:** Light gray text on white (2:1 ratio)
**Fix:** Dark gray text on white (7:1 ratio)

### 3. Missing Form Labels
**Violation:** `<input type="email" placeholder="Email" />`
**Fix:**
```astro
<label for="email">Email Address</label>
<input type="email" id="email" placeholder="you@example.com" />
```

### 4. Skipped Heading Levels
**Violation:** H1 → H4 (skipped H2 and H3)
**Fix:** H1 → H2 → H3 → H4

### 5. Icon-Only Button Without Label
**Violation:** `<button><svg>...</svg></button>`
**Fix:** `<button aria-label="Close menu"><svg aria-hidden="true">...</svg></button>`

---

## Related Skills
- [design-to-code-workflow](../design-to-code-workflow/SKILL.md)
- [responsive-testing](../responsive-testing/SKILL.md)
- [seo-implementation](../seo-implementation/SKILL.md)
