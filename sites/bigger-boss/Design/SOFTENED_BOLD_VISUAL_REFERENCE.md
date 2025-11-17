# Softened Bold Visual Reference Guide

**Project:** Bigger Boss Homepage Redesign
**Purpose:** Quick visual reference for designers/developers
**Design System:** See `SOFTENED_BOLD_DESIGN_SYSTEM.md` for complete tokens
**Date:** November 17, 2025

---

## Quick Color Reference

### Copy-Paste Color Values

```css
/* Primary Navy (Engine Casing) */
--navy-dark: #0F2C59;
--navy-darker: #0A1F3F;
--navy-light: #1A3A6B;

/* Muted Orange (Controlled Energy) */
--orange-muted: #D97642;
--orange-light: #E68B5C;
--orange-dark: #C55E2C;

/* Supporting Blue (Innovation) */
--blue-vibrant: #2E8BC0;
--blue-light: #4A9FD0;
--blue-dark: #1F6B9A;

/* Validation Green */
--green-success: #36D399;

/* Text Colors */
--text-primary: #1A202C;
--text-secondary: #4A5568;
--text-tertiary: #718096;

/* Borders & Backgrounds */
--border-default: #E2E8F0;
--border-light: #EDF2F7;
--bg-primary: #FFFFFF;
--bg-secondary: #F7FAFC;
--bg-tertiary: #EDF2F7;
```

### Visual Color Swatches

```
Navy Dark #0F2C59    ████████████  (Hero backgrounds, headers)
Navy Darker #0A1F3F  ████████████  (Gradients, footer)
Navy Light #1A3A6B   ████████████  (Hover states)

Orange Muted #D97642 ████████████  (Primary CTAs, metrics)
Orange Light #E68B5C ████████████  (Hover states)
Orange Dark #C55E2C  ████████████  (Pressed states)

Blue Vibrant #2E8BC0 ████████████  (Links, secondary CTAs)
Green Success #36D399 ████████████  (Quality badges)

Text Primary #1A202C ████████████  (Body text)
Text Secondary #4A5568 ████████████  (Captions)
Border #E2E8F0       ████████████  (Dividers)
BG Secondary #F7FAFC ████████████  (Section alternation)
```

---

## Typography Quick Reference

### Headline Sizes (Desktop)

```
H1: Complete Marketing Strategies in 90 Minutes
    ▲ 56px (3.5rem), Weight: 800 (ExtraBold), Color: White/Navy

H2: Why Australian Marketing Teams Choose Bigger Boss
    ▲ 40px (2.5rem), Weight: 700 (Bold), Color: Navy

H3: Same-Day Delivery
    ▲ 30px (1.875rem), Weight: 700 (Bold), Color: Navy

H4: Digital Marketing Agencies
    ▲ 24px (1.5rem), Weight: 600 (Semi-Bold), Color: Navy

H5: Key Benefits
    ▲ 20px (1.25rem), Weight: 600 (Semi-Bold), Color: Text Primary

H6: AI MARKETING STRATEGIES • AUSTRALIAN B2B
    ▲ 14px (0.875rem), Weight: 700 (Bold), UPPERCASE, Color: Orange
```

### Body Text Sizes

```
Large Body: AI-orchestrated research, strategy, and content planning...
           ▲ 20px (1.25rem), Weight: 400, Line-height: 1.6

Standard Body: Complete marketing strategies delivered under 2 hours.
              ▲ 16px (1rem), Weight: 400, Line-height: 1.6

Small Text: Trust signals, captions, metadata
           ▲ 14px (0.875rem), Weight: 400, Line-height: 1.5
```

### Interactive Elements

```
Primary Button: Join Beta Waitlist
               ▲ 18px (1.125rem), Weight: 700, White on Orange

Secondary Button: Watch 3-Minute Demo
                 ▲ 16px (1rem), Weight: 600, White on Navy outline

Link: See How It Works →
     ▲ Inherit size, Weight: 600, Color: Blue Vibrant
```

### Metrics & Numbers

```
90 MIN
▲ 48px (3rem), Weight: 800, Color: Orange/Green (hero metrics)

"542% Capacity Increase"
▲ 16px, Weight: 700, Color: Orange (testimonial highlights)
```

---

## Spacing Quick Reference

### Section Padding (Vertical)

```
Desktop:
├─ Standard sections: 5rem (80px) top/bottom
├─ Hero sections: 6rem (96px) top/bottom
└─ Final CTA: 6rem (96px) top/bottom

Mobile (<768px):
├─ Standard sections: 3rem (48px) top/bottom
└─ Hero: 4rem (64px) top/bottom
```

### Component Padding

```
Cards (interior):
├─ Default: 2rem (32px)
├─ Large cards: 2.5rem (40px)
└─ Compact: 1.5rem (24px)

Buttons (horizontal):
├─ Primary: 2.5rem (40px) left/right
├─ Secondary: 2rem (32px) left/right
└─ Large: 3rem (48px) left/right
```

### Grid Gaps

```
Card grids: 2rem (32px) gap
Metrics row: 3rem (48px) gap
Tight content: 1rem (16px) gap
```

---

## Border Radius Quick Reference

```
Buttons/CTAs:    0.375rem (6px)  ────┐
                                      ├─ Softened Bold range
Cards:           0.5rem (8px)   ────┤
                                      │
Large containers: 0.75rem (12px) ────┘

Full circles:    9999px (avatar badges, icon backgrounds)
```

**Visual Comparison:**
```
Sharp 0.25rem:     ┌──┐  ← Too harsh (NOT used)
                   │  │
                   └──┘

Softened 0.375rem: ┌──┐  ← Buttons (Softened Bold)
                   │  │
                   └──┘

Professional 0.5rem: ┌──┐  ← Cards (Softened Bold)
                     │  │
                     └──┘

Soft 0.75rem:      ┌──┐  ← Large containers
                   │  │
                   └──┘

Rounded 1rem+:     ┌──┐  ← Too soft (NOT used)
                   │  │
                   └──┘
```

---

## Shadow Quick Reference

```css
/* Subtle (resting state) */
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

/* Card (moderate elevation) */
box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

/* Hover (interactive feedback) */
box-shadow: 0 4px 12px 0 rgb(0 0 0 / 0.15);

/* Large (hero dashboard) */
box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

**Visual Comparison:**
```
Subtle:  ░░░       (1px blur, minimal depth)
Card:    ░░░░░     (4-6px blur, moderate depth)
Hover:   ░░░░░░░   (12px blur, interactive feedback)
Large:   ░░░░░░░░░ (25px blur, hero emphasis)
```

---

## Button Styles Reference

### Primary CTA (Orange)

```html
<a href="#" class="bg-orange-muted hover:bg-orange-light text-white font-bold text-lg px-10 py-4 rounded-btn transition-all duration-200 hover:-translate-y-1 hover:shadow-hover">
  Join Beta Waitlist
</a>
```

**Visual:**
```
┌─────────────────────────────────────┐
│  Join Beta Waitlist                 │  ← Burnt Orange #D97642 background
└─────────────────────────────────────┘    White text, 18px, 700 weight
           ▲                                Border-radius: 0.375rem
    Hover: Lift up 2px,                     Padding: 16px 40px
           Shadow increase,
           Lighter orange #E68B5C
```

### Secondary CTA (Navy Outline on Orange/Navy BG)

```html
<a href="#" class="border-2 border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-btn transition-all duration-200">
  Watch 3-Minute Demo →
</a>
```

**Visual:**
```
┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
   Watch 3-Minute Demo →               ← White border (30% opacity)
└ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘    White text, 16px, 600 weight
           ▲                                Transparent background
    Hover: Border 60% opacity,              Padding: 16px 32px
           Background 10% white
```

### Navy CTA (on Orange Background)

```html
<a href="#" class="bg-navy-dark hover:bg-navy-light text-white font-bold text-lg px-12 py-5 rounded-btn transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
  Book Your Free Strategy Assessment
</a>
```

**Visual:**
```
┌───────────────────────────────────────────────┐
│  Book Your Free Strategy Assessment           │  ← Navy #0F2C59 background
└───────────────────────────────────────────────┘    White text, 18px, 700 weight
                     ▲                                Border-radius: 0.375rem
              Hover: Lift up 2px,                     Padding: 20px 48px
                     Shadow XL,
                     Lighter navy #1A3A6B
```

---

## Card Styles Reference

### Default Card (White Background)

```html
<div class="bg-white border border-border rounded-card p-component transition-all duration-300 hover:-translate-y-2 hover:shadow-hover">
  <!-- Card content -->
</div>
```

**Visual:**
```
┌───────────────────────────────────────┐
│  Icon                                 │
│                                       │
│  Card Title                           │
│  (24px, 700 weight, Navy)             │
│                                       │
│  Description text goes here with      │
│  16px regular weight and comfortable  │
│  line height for readability.         │
│                                       │
│  ┌────────────────────┐               │
│  │ Metric Highlight   │               │  ← Orange background box
│  └────────────────────┘               │
│                                       │
│  CTA Link →                           │  ← Blue link
└───────────────────────────────────────┘
           ▲
    Hover: Lift up 8px (translateY(-2px)),
           Shadow increase,
           Subtle scale
```

### Frosted Glass Card (Navy Background)

```html
<div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-card p-component transition-all duration-300">
  <!-- Card content -->
</div>
```

**Visual:**
```
┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
  ⋆⋆⋆⋆⋆                                ← 5 stars (Success Green)

  "Quote text in white italic serif
  with comfortable line height for
  readability and elegant feel."

  — Name
  Title, Company

  ┌────────────────────┐
  │ Metric: 542%       │               ← Orange highlight box
  └────────────────────┘
└ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
  ▲ Semi-transparent white (10%)
    Frosted glass blur effect
    White border (20% opacity)
```

### Highlighted Card (Orange Accent)

```html
<div class="bg-orange-muted/5 border-2 border-orange-muted/20 rounded-card p-component hover:border-orange-muted/40 transition-all duration-300">
  <!-- Card content -->
</div>
```

**Visual:**
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  Icon (Orange)                     ┃
┃                                    ┃
┃  Industry Name                     ┃
┃  (20px, 700 weight, Navy)          ┃
┃                                    ┃
┃  Description with specific         ┃
┃  benefits for this segment.        ┃
┃                                    ┃
┃  ████████████████████              ┃  ← Orange filled box
┃  Key Benefit Highlight             ┃     White text
┃                                    ┃
┃  Explore Solutions →               ┃  ← Blue link
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  ▲ Light orange tinted background (5%)
    Orange border (20% opacity)
    Hover: Border 40% opacity
```

---

## Layout Pattern Examples

### Hero Section Layout (50/50 Split)

```
Desktop (≥1024px):
┌─────────────────────────────────────────────────────────────────┐
│                   NAVY GRADIENT BACKGROUND                      │
│                                                                 │
│  ┌─────────────────────────┐  ┌──────────────────────────────┐ │
│  │ LEFT COLUMN             │  │ RIGHT COLUMN                 │ │
│  │                         │  │                              │ │
│  │ Eyebrow (Orange 14px)   │  │ ┌──────────────────────────┐ │ │
│  │                         │  │ │                          │ │ │
│  │ H1 (56px, 800 weight)   │  │ │  Quality Dashboard       │ │ │
│  │ Complete Marketing      │  │ │  (White card with        │ │ │
│  │ Strategies in           │  │ │   4-persona scores)      │ │ │
│  │ 90 Minutes              │  │ │                          │ │ │
│  │                         │  │ │  ┌──────┐ ┌──────┐       │ │ │
│  │ Subheadline (20px)      │  │ │  │ SEO  │ │ Conv │       │ │ │
│  │ AI-orchestrated...      │  │ │  │ 23/25│ │ 24/25│       │ │ │
│  │                         │  │ │  └──────┘ └──────┘       │ │ │
│  │ Metrics Row:            │  │ │  ┌──────┐ ┌──────┐       │ │ │
│  │ 90 MIN | 85+ | 100%     │  │ │  │ UX   │ │ Cont │       │ │ │
│  │                         │  │ │  │ 21/25│ │ 22/25│       │ │ │
│  │ ┌──────────────────┐    │  │ │  └──────┘ └──────┘       │ │ │
│  │ │ Join Beta        │    │  │ │                          │ │ │
│  │ │ Waitlist         │    │  │ │  Aggregate: 90/100       │ │ │
│  │ └──────────────────┘    │  │ │  ✓ Publication Approved  │ │ │
│  │ Watch Demo →            │  │ │                          │ │ │
│  │                         │  │ └──────────────────────────┘ │ │
│  │ Trust Signals Row       │  │                              │ │
│  └─────────────────────────┘  └──────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

Mobile (<768px):
```
┌───────────────────────┐
│  NAVY BG (stacked)    │
│                       │
│  Eyebrow (14px)       │
│                       │
│  H1 (40px reduced)    │
│  Complete Marketing   │
│  Strategies in        │
│  90 Minutes           │
│                       │
│  Subheadline (18px)   │
│                       │
│  Metrics (2x2 grid):  │
│  90 MIN  | 85+        │
│  100%    |            │
│                       │
│  ┌──────────────────┐ │
│  │ Join Beta        │ │
│  │ (full-width)     │ │
│  └──────────────────┘ │
│  Watch Demo →        │
│                       │
│  Trust Signals       │
│                       │
│  [Dashboard hidden]  │
│  (shown below fold)  │
└───────────────────────┘
```

### Comparison Table Layout

Desktop:
```
┌─────────┬────────────┬────────────┬──────────┬──────────────┐
│ Feature │ Agencies   │ AI Tools   │ ChatGPT  │ Bigger Boss  │
│         │            │            │          │ (highlighted)│
├─────────┼────────────┼────────────┼──────────┼──────────────┤
│ Delivery│ 8-12 weeks │ Ongoing    │ 40-60hrs │ 90 minutes   │
│         │ (gray)     │ (gray)     │ (gray)   │ (ORANGE)     │
├─────────┼────────────┼────────────┼──────────┼──────────────┤
│ Cost    │ $15-35k    │ $99-499/mo │ $0-20/mo │ $2,997-8,997 │
│         │ (gray)     │ (gray)     │ (gray)   │ (ORANGE)     │
└─────────┴────────────┴────────────┴──────────┴──────────────┘
  ▲ Navy header row, white text
    Bigger Boss column: Light orange background (#FFF5F0)
    Bigger Boss values: Bold orange text
```

Mobile (Stacked Cards):
```
┌───────────────────────────────┐
│ Bigger Boss (featured first)  │
│ ┌─────────────────────────┐   │
│ │ Delivery: 90 minutes    │   │
│ │ Cost: $2,997-8,997      │   │
│ │ Quality: 85+ score      │   │
│ └─────────────────────────┘   │
└───────────────────────────────┘

┌───────────────────────────────┐
│ Traditional Agencies          │
│ ┌─────────────────────────┐   │
│ │ Delivery: 8-12 weeks    │   │
│ │ Cost: $15,000-35,000    │   │
│ └─────────────────────────┘   │
└───────────────────────────────┘

[Additional competitor cards...]
```

### 4-Column Grid Layout

Desktop (≥1024px):
```
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│ Card 1  │  │ Card 2  │  │ Card 3  │  │ Card 4  │
│         │  │         │  │         │  │         │
│ Icon    │  │ Icon    │  │ Icon    │  │ Icon    │
│ (Orange)│  │ (Green) │  │ (Orange)│  │ (Blue)  │
│         │  │         │  │         │  │         │
│ Title   │  │ Title   │  │ Title   │  │ Title   │
│ (Navy)  │  │ (Navy)  │  │ (Navy)  │  │ (Navy)  │
│         │  │         │  │         │  │         │
│ Desc... │  │ Desc... │  │ Desc... │  │ Desc... │
│         │  │         │  │         │  │         │
│ Metric  │  │ Metric  │  │ Metric  │  │ Metric  │
│ CTA →   │  │ CTA →   │  │ CTA →   │  │ CTA →   │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
    ↔ 2rem gap (32px) between cards
```

Mobile (<768px):
```
┌─────────────────┐
│ Card 1          │
│ (full-width)    │
└─────────────────┘

┌─────────────────┐
│ Card 2          │
└─────────────────┘

┌─────────────────┐
│ Card 3          │
└─────────────────┘

┌─────────────────┐
│ Card 4          │
└─────────────────┘
  ↕ 2rem gap (32px) between cards
```

---

## Accessibility Quick Checks

### Color Contrast Checklist

**Before using any color combination, verify:**

✅ **Safe Combinations:**
- White on Navy #0F2C59 (14.5:1) - All sizes
- Navy on White (14.5:1) - All sizes
- Text Primary #1A202C on White (16.1:1) - All sizes
- Blue #2E8BC0 on White (4.8:1) - All sizes

⚠️ **Restricted Combinations:**
- Orange #D97642 on White (4.1:1) - **Large text ≥18px ONLY**
- Orange on Navy (5.2:1) - Buttons/CTAs (inherently large)

❌ **Never Use:**
- Orange #D97642 for body text <18px on white
- Orange for small UI elements <18px (use Blue instead)

### Focus Indicator Checklist

**All interactive elements must have visible focus ring:**

```css
/* Primary CTA (Orange button) */
.btn-primary:focus {
  ring: 2px solid #D97642;  /* Orange */
  ring-offset: 2px;
}

/* Secondary CTA (Navy outline button) */
.btn-secondary:focus {
  ring: 2px solid #FFFFFF;  /* White */
  ring-offset: 2px;
}

/* Text Links */
a:focus {
  ring: 2px solid #2E8BC0;  /* Blue */
  ring-offset: 2px;
}
```

### Touch Target Checklist

**Minimum sizes:**
- Buttons: 44x44px minimum
- Links: 24px height minimum (with padding)
- Interactive cards: Full card area clickable

```html
<!-- Correct: Button with adequate touch target -->
<button class="px-10 py-4">  <!-- 40px height = sufficient -->
  Join Waitlist
</button>

<!-- Incorrect: Link too small -->
<a class="text-sm">Click here</a>  <!-- <24px height = too small -->

<!-- Correct: Link with padding -->
<a class="text-sm py-2 px-4">Click here</a>  <!-- ≥24px height -->
```

---

## Common Implementation Patterns

### Gradient Background (Navy)

```css
/* Hero section gradient */
.hero-section {
  background: linear-gradient(135deg, #0F2C59 0%, #0A1F3F 100%);
}

/* Alternative: Soft gradient (less dramatic) */
.hero-soft {
  background: linear-gradient(180deg, #0F2C59 0%, #1A3A6B 100%);
}
```

### Hover Effects

```css
/* Button hover: Lift + shadow + color change */
.btn-primary:hover {
  background-color: #E68B5C;  /* Orange light */
  transform: translateY(-2px);
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 0.15);
}

/* Card hover: Lift + shadow */
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 0.15);
}

/* Link hover: Underline slide-in */
.link:hover {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}
```

### Responsive Typography

```css
/* H1: 56px desktop, 40px mobile */
h1 {
  font-size: 3.5rem;  /* 56px */
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;  /* 40px */
  }
}

/* Body Large: 20px desktop, 18px mobile */
.body-lg {
  font-size: 1.25rem;  /* 20px */
}

@media (max-width: 768px) {
  .body-lg {
    font-size: 1.125rem;  /* 18px */
  }
}
```

---

## Do's and Don'ts Checklist

### Colors

✅ **DO:**
- Use Navy #0F2C59 for hero backgrounds and headers
- Use Muted Orange #D97642 for CTAs and metrics
- Use Blue #2E8BC0 for small UI elements (links, icons)
- Use Success Green #36D399 sparingly for validation
- Verify contrast ratios before using orange on white

❌ **DON'T:**
- Use electric orange #FF6B35 (too playful)
- Use orange for body text <18px (fails WCAG)
- Use pure black #000000 (too harsh, use #1A202C)
- Mix multiple bright accent colors (stick to orange + blue)

### Typography

✅ **DO:**
- Use Inter 800 for H1 (56px desktop)
- Use Inter 700 for H2-H3 (40-30px)
- Use Inter 400 for body text (16px, 1.6 line-height)
- Reduce headline sizes by 30-40% on mobile
- Use uppercase for eyebrows (14px, 700 weight, tracking)

❌ **DON'T:**
- Use Inter 900 (too extreme for Professional B2B)
- Use H1 >60px (sacrifices readability)
- Use body text <16px (readability issues)
- Use line-height <1.5 for body text
- Mix multiple font families (stick to Inter + IBM Plex Serif for testimonials)

### Spacing

✅ **DO:**
- Use 5-6rem vertical padding for sections
- Use 2rem padding inside cards
- Use 2rem gaps between grid items
- Reduce padding by 40-50% on mobile

❌ **DON'T:**
- Use uniform 4rem padding everywhere (lacks rhythm)
- Use <1rem padding inside cards (cramped)
- Use <1.5rem gaps between grid items (tight)
- Forget to adjust spacing for mobile

### Geometry

✅ **DO:**
- Use 0.375rem border-radius for buttons
- Use 0.5rem border-radius for cards
- Use 0.75rem border-radius for large containers
- Keep border-radius consistent within component types

❌ **DON'T:**
- Use sharp 0.25rem corners (too harsh)
- Use rounded >1rem borders (too soft)
- Mix border-radius values randomly
- Use different radius for buttons vs. inputs

---

## Quick Implementation Checklist

**Before deploying any component, verify:**

- [ ] Colors use design tokens (not hardcoded hex values)
- [ ] Typography uses defined scale (h1, h2, body classes)
- [ ] Spacing uses spacing tokens (section-y, component, grid-gap)
- [ ] Border radius matches Softened Bold spec (0.375-0.75rem)
- [ ] Shadows use defined shadow tokens (subtle, card, hover)
- [ ] Orange used ONLY for ≥18px text (contrast compliance)
- [ ] Focus indicators visible on all interactive elements
- [ ] Touch targets ≥44x44px (buttons) or ≥24px (links with padding)
- [ ] Mobile responsive breakpoints implemented
- [ ] Hover/active states defined for interactive elements

---

**Reference Version:** 1.0
**Last Updated:** November 17, 2025
**Companion Documents:**
- `SOFTENED_BOLD_DESIGN_SYSTEM.md` - Complete design tokens
- `SOFTENED_BOLD_CONCEPT_SUMMARY.md` - Full design rationale
- Astro component specifications (in concept summary)
