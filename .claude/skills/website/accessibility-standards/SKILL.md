# Accessibility Standards Skill

## Skill Metadata
- **Name:** accessibility-standards
- **Category:** website
- **Type:** knowledge
- **Version:** 1.0.0
- **Last Updated:** 2025-11-11

## Description
Comprehensive WCAG 2.1 AA accessibility guidelines and implementation patterns for web components. This skill provides detailed checklists, code examples, and testing procedures to ensure all website components meet accessibility standards.

## When to Use This Skill
- When creating new Astro components
- When auditing existing components for accessibility compliance
- When implementing forms, interactive elements, or navigation
- Before deploying any client site to production
- When receiving accessibility bug reports or client requests

## Core Knowledge

### WCAG 2.1 AA Requirements

#### 1. Perceivable

**1.1 Text Alternatives**
- All images must have descriptive `alt` text
- Decorative images use `alt=""` (empty string)
- Complex images (charts, diagrams) need longer descriptions via `aria-describedby`

```astro
<!-- Good: Informative image -->
<img src="/features/analytics.png" alt="Dashboard showing website traffic analytics with 45% increase">

<!-- Good: Decorative image -->
<img src="/decorations/divider.svg" alt="" role="presentation">

<!-- Good: Complex image with description -->
<img
  src="/charts/revenue.png"
  alt="Revenue chart Q1-Q4 2025"
  aria-describedby="revenue-description"
>
<div id="revenue-description" class="sr-only">
  Revenue increased from $50K in Q1 to $120K in Q4, showing steady growth across all quarters.
</div>
```

**1.3 Adaptable Content**
- Use semantic HTML: `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`
- Proper heading hierarchy (single H1, then H2 → H3 → H4)
- Form labels always associated with inputs via `for` attribute

```astro
<!-- Good: Semantic structure -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<main>
  <h1>Page Title</h1>
  <section>
    <h2>Section Title</h2>
    <p>Content...</p>
  </section>
</main>

<!-- Good: Form labels -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required>
```

**1.4 Distinguishable**
- Color contrast ratios:
  - Normal text: 4.5:1 minimum
  - Large text (18pt+): 3:1 minimum
  - UI components: 3:1 minimum
- Don't rely on color alone to convey information
- Text resizable to 200% without loss of functionality

```astro
<!-- Good: Sufficient contrast with DaisyUI -->
<button class="btn btn-primary">
  <!-- Primary color has 4.5:1 contrast against white text -->
  Submit
</button>

<!-- Good: Icon + text, not color alone -->
<div class="alert alert-error">
  <svg><!-- Error icon --></svg>
  <span>Error: Email is required</span>
</div>
```

#### 2. Operable

**2.1 Keyboard Accessible**
- All interactive elements accessible via keyboard
- Visible focus indicators required
- Tab order follows logical reading order
- No keyboard traps

```astro
<!-- Good: Custom interactive element with keyboard support -->
<div
  role="button"
  tabindex="0"
  @click="handleClick"
  @keydown.enter="handleClick"
  @keydown.space.prevent="handleClick"
  class="custom-button"
>
  Click me
</div>

<style>
  .custom-button:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
</style>
```

**2.4 Navigable**
- Skip links for keyboard users
- Descriptive page titles
- Link text describes destination (avoid "click here")
- Multiple ways to find pages (navigation, search, sitemap)

```astro
<!-- Good: Skip link -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4">
  Skip to main content
</a>

<!-- Good: Descriptive links -->
<a href="/services">View our services</a> <!-- NOT "Click here" -->

<!-- Good: Breadcrumbs -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li aria-current="page">Article Title</li>
  </ol>
</nav>
```

#### 3. Understandable

**3.2 Predictable**
- Navigation consistent across pages
- Focus doesn't trigger unexpected changes
- Form submission explicit (requires user action)

**3.3 Input Assistance**
- Error messages identify field and suggest fix
- Labels and instructions provided before input
- Error prevention for legal/financial transactions

```astro
<!-- Good: Form with error handling -->
<form>
  <div class="form-control">
    <label for="email" class="label">
      <span class="label-text">Email Address *</span>
    </label>
    <input
      type="email"
      id="email"
      name="email"
      class:list={['input input-bordered', { 'input-error': errors.email }]}
      aria-invalid={errors.email ? 'true' : undefined}
      aria-describedby={errors.email ? 'email-error' : undefined}
      required
    >
    {errors.email && (
      <label class="label">
        <span id="email-error" class="label-text-alt text-error" role="alert">
          {errors.email}
        </span>
      </label>
    )}
  </div>
</form>
```

#### 4. Robust

**4.1 Compatible**
- Valid HTML (no duplicate IDs, proper nesting)
- ARIA attributes used correctly
- Name, Role, Value exposed for assistive technologies

```astro
<!-- Good: ARIA for custom components -->
<div
  role="alert"
  aria-live="polite"
  aria-atomic="true"
  class="alert alert-success"
>
  <span>Profile updated successfully</span>
</div>

<!-- Good: Modal dialog -->
<dialog
  open={isOpen}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
  class="modal modal-open"
>
  <div class="modal-box">
    <h3 id="modal-title" class="font-bold text-lg">Confirm Action</h3>
    <p id="modal-description" class="py-4">Are you sure you want to proceed?</p>
  </div>
</dialog>
```

### Common Component Patterns

#### Buttons
```astro
<!-- All button states accessible -->
<button
  type="submit"
  class="btn btn-primary"
  disabled={isLoading}
  aria-busy={isLoading}
>
  {isLoading ? (
    <>
      <span class="loading loading-spinner"></span>
      <span>Processing...</span>
    </>
  ) : (
    'Submit'
  )}
</button>
```

#### Navigation
```astro
<!-- Mobile navigation with proper ARIA -->
<nav aria-label="Main navigation">
  <button
    class="btn btn-ghost lg:hidden"
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
    aria-label="Toggle navigation menu"
  >
    <svg><!-- Hamburger icon --></svg>
  </button>

  <div id="mobile-menu" hidden={!isOpen}>
    <a href="/" aria-current={currentPage === '/' ? 'page' : undefined}>
      Home
    </a>
  </div>
</nav>
```

#### Cards
```astro
<!-- Card as link with proper semantics -->
<article class="card bg-base-100 shadow-xl">
  <figure>
    <img src={image} alt={imageAlt}>
  </figure>
  <div class="card-body">
    <h3 class="card-title">
      <a href={link} class="after:absolute after:inset-0">
        {title}
      </a>
    </h3>
    <p>{description}</p>
  </div>
</article>
```

### Screen Reader Only Utility

```css
/* Add to global styles or Tailwind config */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

## Testing Procedures

### Automated Testing

**Using axe-core with Playwright:**

```typescript
// tests/accessibility.test.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  test('Homepage should not have accessibility violations', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
```

### Manual Testing Checklist

**Keyboard Navigation:**
- [ ] Tab through entire page - all interactive elements focusable
- [ ] Focus indicators visible for all elements
- [ ] Tab order follows logical reading order
- [ ] Escape key closes modals/dropdowns
- [ ] Enter/Space activates buttons
- [ ] Arrow keys work in menus/select elements

**Screen Reader Testing (NVDA/JAWS/VoiceOver):**
- [ ] Page title announced correctly
- [ ] Headings hierarchy makes sense when navigated
- [ ] Form labels read aloud with inputs
- [ ] Error messages announced immediately
- [ ] Dynamic content changes announced (ARIA live regions)
- [ ] Images have meaningful alt text

**Visual Testing:**
- [ ] Page readable at 200% zoom
- [ ] Color contrast meets 4.5:1 minimum (use WebAIM Contrast Checker)
- [ ] Information conveyed with more than color alone
- [ ] Focus indicators visible against all backgrounds

## Common Violations and Fixes

| Violation | Fix |
|-----------|-----|
| Missing alt text | Add descriptive `alt` attribute to all `<img>` tags |
| Low color contrast | Adjust colors to meet 4.5:1 ratio (use contrast checker) |
| Missing form labels | Add `<label for="id">` associated with `<input id="id">` |
| Improper heading hierarchy | Ensure single H1, then H2 → H3 → H4 (no skipping levels) |
| Link text not descriptive | Change "Click here" to "View pricing details" |
| Missing keyboard support | Add `tabindex="0"`, `@keydown` handlers for custom elements |
| No focus indicator | Add `:focus` styles with visible outline |
| Duplicate IDs | Ensure all `id` attributes unique on page |

## Resources

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools Browser Extension](https://www.deque.com/axe/devtools/)
- [DaisyUI Accessibility Documentation](https://daisyui.com/docs/accessibility/)
- [Inclusive Components](https://inclusive-components.design/)

## Integration with Project

This skill is referenced by:
- `accessibility-auditor` agent (automated compliance checking)
- `quality-gate-orchestrator` (Gate 3: Accessibility validation)
- Component creation workflows
- Pre-deployment checklists

## Changelog

### 1.0.0 (2025-11-11)
- Initial skill creation
- WCAG 2.1 AA guidelines documented
- Code examples for common patterns
- Testing procedures defined
- DaisyUI-specific patterns included
