# Content Width Standard

> **Standard Rule:** All websites use **1440px maximum content width** unless client specifically requests different
> **Last Updated:** November 9, 2025

---

## Standard Container Pattern

### Default Implementation

```astro
<!-- Standard container for all content sections -->
<section class="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1440px]">
  <h2>Section Heading</h2>
  <p>Content here will never exceed 1440px width, even on ultra-wide monitors.</p>
</section>
```

---

## Tailwind Class Breakdown

| Class | Purpose | Value |
|-------|---------|-------|
| `container` | Centers content, adds responsive padding | Auto |
| `mx-auto` | Centers horizontally | margin-left: auto; margin-right: auto; |
| `px-4` | Horizontal padding on mobile | 16px left/right |
| `md:px-8` | Horizontal padding on tablet | 32px left/right (768px+) |
| `lg:px-16` | Horizontal padding on desktop | 64px left/right (1024px+) |
| `max-w-[1440px]` | Maximum content width | 1440px |

---

## Why 1440px?

### Industry Standards:
- **Common laptop resolution:** 1440x900, 1920x1080 (1440px comfortably fits both)
- **Optimal reading width:** 1200-1440px prevents excessive eye travel
- **Design tool standard:** Figma, Sketch, Adobe XD default artboards are 1440px wide

### Alternatives (Tailwind Preset Classes):
- `max-w-7xl` = **1280px** (slightly narrower, also acceptable)
- `max-w-6xl` = **1152px** (more conservative, better for text-heavy sites)
- `max-w-full` = **No limit** (use for full-bleed images/backgrounds only)

---

## When to Override 1440px Standard

### Client Requests Different Width:
Document in their BRAND_GUIDELINES.md:
```markdown
## Special Requirements
- **Content Width:** 1200px maximum (narrower for better readability)
```

Then use:
```astro
<section class="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1200px]">
```

### Full-Width Sections (Backgrounds):
```astro
<!-- Full-width background, content still constrained -->
<section class="bg-primary text-white py-16">
  <div class="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1440px]">
    <h2>Heading</h2>
    <p>Content constrained to 1440px, background extends full width</p>
  </div>
</section>
```

---

## Implementation in BaseLayout

### Standard Pattern

```astro
---
// src/layouts/BaseLayout.astro
interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content={description} />
</head>
<body>
  <!-- Header: Full-width background, content constrained -->
  <header class="bg-white shadow-sm">
    <div class="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1440px] py-4">
      <nav><!-- Navigation content --></nav>
    </div>
  </header>

  <!-- Main content: Always constrained to 1440px -->
  <main>
    <slot />
  </main>

  <!-- Footer: Full-width background, content constrained -->
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1440px] py-16">
      <!-- Footer content -->
    </div>
  </footer>
</body>
</html>
```

---

## Prompting Claude Code

### Always Include in Component Prompts

```
Build [ComponentName] component for [client site].

Requirements:
- **Content width: 1440px maximum** (use max-w-[1440px])
- Container pattern: container mx-auto px-4 md:px-8 lg:px-16 max-w-[1440px]
- Responsive padding: px-4 (mobile), md:px-8 (tablet), lg:px-16 (desktop)
```

---

## Testing Content Width

### Browser DevTools

1. Open page in Chrome
2. Open DevTools (F12)
3. Resize browser to >1440px wide
4. Inspect content container
5. Verify max-width: 1440px is applied
6. Content should center with equal margins on both sides

### Expected Behavior:
- **<1440px viewport:** Content uses full width (minus padding)
- **>1440px viewport:** Content fixed at 1440px, centered with auto margins

---

**Related Documentation:**
- .claude/prompts/website-global-rules.md
- .claude/prompts/website-agent-instructions.md
