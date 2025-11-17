# Design Archetypes Skill

## Skill Metadata
- **Name:** design-archetypes
- **Category:** website
- **Type:** knowledge
- **Version:** 1.0.0
- **Last Updated:** 2025-11-11

## Description
The 3-Archetype Framework for creating visually differentiated website designs that avoid "generic AI design" problems. Each archetype represents a distinct brand personality with specific color palettes, typography, visual styling, and target industries.

## When to Use This Skill
- When starting a new client website project
- During brand discovery and design concept phase
- When client describes their brand identity
- When selecting design direction for Bigger Boss or client sites
- During design quality reviews to ensure archetype consistency

## The Generic AI Design Problem

### Why Current Designs Feel Generic

**Research Findings (Nov 2025):**
- AI-generated designs default to "safe" patterns: blue primary, rounded corners, generic sans-serif fonts
- Lack of emotional differentiation between industries (healthcare looks like SaaS looks like law firms)
- Missing Phase 2.5: Design Concept Generation before implementation
- No systematic framework for translating brand personality to visual design

**Solution: 3-Archetype Framework**

Three distinct design systems that create 70%+ visual differentiation while maintaining accessibility and usability standards.

## The Three Archetypes

### 1. Bold & Modern 🚀

**Brand Personality:**
Innovative, confident, cutting-edge, disruptive, energetic

**Target Industries:**
- Technology companies
- SaaS platforms
- Digital agencies
- Startups
- Fintech

**Color Palette:**
- **Primary:** Deep Navy `#0A2540`
  - Authority, trust, professionalism
  - High contrast against bright accents
- **Secondary:** Electric Orange `#FF6B35`
  - Energy, innovation, call-to-action
  - High visibility, demands attention
- **Accent:** Gold `#FFD700`
  - Premium positioning, success
  - Used sparingly for highlights
- **Neutral:** Dark Gray `#2D3748`
- **Background:** White `#FFFFFF`, Light Gray `#F7FAFC`

**Typography:**
- **Font Family:** Inter (sans-serif)
- **Weights:** 700 (Bold), 800 (Extra Bold), 900 (Black)
- **Scale:** Large, impactful
  - H1: 60-72px
  - H2: 48px
  - Body: 18px
- **Character:** Modern, geometric, confident

**Visual Style:**
- **Corners:** Sharp edges (0.25rem border-radius)
- **Shadows:** Elevated, pronounced
  - Primary: `0 10px 15px -3px rgb(0 0 0 / 0.1)`
  - Hover: `0 20px 25px -5px rgb(0 0 0 / 0.1)`
- **Borders:** Minimal, clean lines
- **Spacing:** Generous, breathing room
- **Animations:** Fast, snappy (0.2s transitions)

**Component Examples:**

```astro
<!-- Bold Hero -->
<Hero
  archetype="bold"
  headline="Transform Your Business with AI"
  subheadline="Cut costs by 40% while scaling to 10x growth"
  ctaText="Start Free Trial"
  ctaUrl="/trial"
/>

<!-- Renders as: -->
<div class="hero min-h-screen bg-gradient-to-br from-primary via-primary-focus to-primary">
  <div class="hero-content text-center text-white">
    <h1 class="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
      Transform Your Business with AI
    </h1>
    <p class="text-xl md:text-2xl mb-8 font-bold">
      Cut costs by 40% while scaling to 10x growth
    </p>
    <a href="/trial" class="btn btn-secondary btn-lg">
      Start Free Trial
    </a>
  </div>
</div>
```

**When to Use Bold:**
- Client wants to appear innovative, cutting-edge
- Target audience: tech-savvy professionals, early adopters
- Brand keywords: "disruptive," "innovative," "fast," "powerful"
- Competitive differentiation: standing out in crowded SaaS market

**Example Brands:** Stripe, Vercel, Linear, Notion (pre-2024)

---

### 2. Elegant & Refined 💼

**Brand Personality:**
Sophisticated, trustworthy, established, premium, professional

**Target Industries:**
- Law firms
- Financial services
- Luxury brands
- Consulting firms
- Architecture

**Color Palette:**
- **Primary:** Charcoal `#2C2C2C`
  - Sophistication, authority, timelessness
  - Pairs with refined accents
- **Secondary:** Sage Green `#8BA888`
  - Calm, growth, stability
  - Natural, organic feel
- **Accent:** Deep Burgundy `#6B2737`
  - Luxury, heritage, prestige
  - Used for CTAs and highlights
- **Neutral:** Warm Gray `#A8A8A8`
- **Background:** Ivory `#FDFBF7`, Soft Gray `#F5F5F5`

**Typography:**
- **Headings:** Playfair Display (serif)
  - Classic, elegant, editorial
  - Weights: 600 (Semi-bold), 700 (Bold)
- **Body:** Inter (sans-serif)
  - Modern readability
  - Weights: 400 (Regular), 500 (Medium)
- **Scale:** Refined, hierarchical
  - H1: 48-60px
  - H2: 36px
  - Body: 16px
- **Character:** Sophisticated, readable, professional

**Visual Style:**
- **Corners:** Subtle rounds (0.5rem border-radius)
- **Shadows:** Soft, understated
  - Primary: `0 4px 6px -1px rgb(0 0 0 / 0.06)`
  - Hover: `0 10px 15px -3px rgb(0 0 0 / 0.08)`
- **Borders:** 1px solid, refined dividers
- **Spacing:** Balanced, comfortable
- **Animations:** Slow, smooth (0.3s transitions)
- **Textures:** Subtle gradients, paper-like backgrounds

**Component Examples:**

```astro
<!-- Elegant Hero -->
<Hero
  archetype="elegant"
  headline="Excellence in Legal Representation"
  subheadline="Serving clients with distinction since 1987"
  ctaText="Schedule Consultation"
  ctaUrl="/contact"
/>

<!-- Renders as: -->
<div class="hero min-h-[70vh] bg-base-200">
  <div class="hero-content text-center max-w-4xl">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
      Excellence in Legal Representation
    </h1>
    <p class="text-lg md:text-xl text-base-content/80 mb-8">
      Serving clients with distinction since 1987
    </p>
    <a href="/contact" class="btn btn-accent btn-lg">
      Schedule Consultation
    </a>
  </div>
</div>
```

**When to Use Elegant:**
- Client has established reputation, heritage
- Target audience: high-net-worth individuals, executives
- Brand keywords: "trusted," "sophisticated," "premium," "established"
- Industries requiring gravitas and professionalism

**Example Brands:** Rolex, McKinsey, Four Seasons, Harvard Business Review

---

### 3. Approachable & Human 🤝

**Brand Personality:**
Warm, friendly, caring, accessible, community-focused

**Target Industries:**
- Healthcare
- Education
- Nonprofits
- Community organizations
- Family services

**Color Palette:**
- **Primary:** Terracotta `#E07A5F`
  - Warmth, approachability, earthiness
  - Inviting, human-centric
- **Secondary:** Cream `#F4F1DE`
  - Softness, comfort, openness
  - Calm, welcoming backgrounds
- **Accent:** Sage `#81B29A`
  - Growth, healing, nature
  - Positive, hopeful feeling
- **Neutral:** Warm Taupe `#C9ADA7`
- **Background:** Off-White `#FFFEF9`, Light Cream `#FAF8F3`

**Typography:**
- **Font Family:** Nunito (rounded sans-serif)
- **Weights:** 400 (Regular), 600 (Semi-bold), 700 (Bold)
- **Scale:** Friendly, readable
  - H1: 42-54px
  - H2: 32px
  - Body: 17px
- **Character:** Rounded, friendly, approachable

**Visual Style:**
- **Corners:** Fully rounded (9999px or 1.5rem border-radius)
- **Shadows:** Soft, gentle
  - Primary: `0 2px 4px -1px rgb(0 0 0 / 0.06)`
  - Hover: `0 4px 6px -1px rgb(0 0 0 / 0.08)`
- **Borders:** Rounded, organic shapes
- **Spacing:** Comfortable, human-scale
- **Animations:** Gentle, welcoming (0.25s transitions)
- **Illustrations:** Hand-drawn, friendly icons

**Component Examples:**

```astro
<!-- Approachable Hero -->
<Hero
  archetype="approachable"
  headline="Compassionate Care for Your Whole Family"
  subheadline="We're here to support you every step of the way"
  ctaText="Book Appointment"
  ctaUrl="/book"
  secondaryCtaText="Learn About Our Services"
  secondaryCtaUrl="/services"
/>

<!-- Renders as: -->
<div class="hero min-h-[80vh] bg-base-100">
  <div class="hero-content text-center flex-col">
    <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
      Compassionate Care for Your Whole Family
    </h1>
    <p class="text-lg md:text-xl text-base-content/70 mb-8 max-w-2xl">
      We're here to support you every step of the way
    </p>
    <div class="flex flex-wrap gap-4 justify-center">
      <a href="/book" class="btn btn-primary btn-lg rounded-full">
        Book Appointment
      </a>
      <a href="/services" class="btn btn-ghost btn-lg rounded-full">
        Learn About Our Services
      </a>
    </div>
  </div>
</div>
```

**When to Use Approachable:**
- Client serves vulnerable populations, families, children
- Target audience: everyday people, community members
- Brand keywords: "caring," "supportive," "inclusive," "community"
- Organizations prioritizing empathy over authority

**Example Brands:** Duolingo, Headspace, Airbnb, Mailchimp (pre-2021)

---

## Archetype Selection Framework

### Discovery Questions

Ask clients these questions to determine archetype:

1. **Industry & Audience:**
   - What industry are you in?
   - Who is your primary target audience?
   - Are you B2B or B2C?

2. **Brand Personality (Choose 3-5):**
   - Bold, Innovative, Cutting-edge, Disruptive
   - Sophisticated, Established, Premium, Professional
   - Warm, Caring, Accessible, Community-focused
   - Trustworthy, Reliable, Stable
   - Playful, Creative, Energetic

3. **Competitive Positioning:**
   - How do competitors typically present themselves?
   - Do you want to blend in or stand out?
   - Are you a challenger brand or category leader?

4. **Client References:**
   - "Show me 3 websites you admire"
   - "What brands embody your desired personality?"

### Decision Matrix

| Client Says... | Likely Archetype |
|----------------|------------------|
| "We're disrupting the industry" | **Bold** |
| "We're the premium choice" | **Elegant** |
| "We're here to help" | **Approachable** |
| "Fast, powerful, innovative" | **Bold** |
| "Trusted, established, sophisticated" | **Elegant** |
| "Friendly, accessible, caring" | **Approachable** |
| Target: Tech professionals | **Bold** |
| Target: Executives, high-net-worth | **Elegant** |
| Target: Families, community | **Approachable** |

## Implementation Guide

### Step 1: Select Archetype

Based on discovery, choose the archetype that best matches client brand personality.

### Step 2: Configure Tailwind

```javascript
// sites/client-name/tailwind.config.cjs
const archetypeBold = require('../../packages/ui-components/config/archetype-bold');
// OR
const archetypeElegant = require('../../packages/ui-components/config/archetype-elegant');
// OR
const archetypeApproachable = require('../../packages/ui-components/config/archetype-approachable');

module.exports = {
  presets: [archetypeBold], // Choose one
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '../../packages/ui-components/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // Client-specific color adjustments (optional)
      colors: {
        primary: '#003366', // Override if needed
      },
    },
  },
};
```

### Step 3: Use Archetype in Components

```astro
---
// pages/index.astro
import { Hero, Section, Card } from '@workspace/ui-components';
---

<Hero
  archetype="bold"
  headline="Your Headline"
  ctaText="Get Started"
/>

<Section variant="muted" spacing="lg">
  <Card
    title="Feature 1"
    description="Description"
  />
</Section>
```

### Step 4: Import Google Fonts

```astro
---
// BaseLayout.astro
---
<head>
  <!-- Bold: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700;800;900&display=swap" rel="stylesheet">

  <!-- Elegant: Playfair Display + Inter -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">

  <!-- Approachable: Nunito -->
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
</head>
```

### Step 5: Document in BRAND_GUIDELINES.md

```markdown
# Brand Guidelines: [Client Name]

## Design Archetype: Bold & Modern

**Rationale:**
Client is a SaaS platform targeting tech-savvy professionals. Brand personality: innovative, fast, disruptive. Archetype chosen to differentiate from competitors using muted blues and generic layouts.

**Color Palette:**
- Primary: Deep Navy #0A2540 (authority)
- Secondary: Electric Orange #FF6B35 (energy, CTAs)
- Accent: Gold #FFD700 (premium highlights)

**Typography:**
- Headings: Inter 900 (Black)
- Body: Inter 700 (Bold)

**Visual Style:**
- Sharp corners (0.25rem)
- High contrast
- Elevated shadows
```

## Archetype Consistency Checklist

When reviewing designs, ensure:

- [ ] All component `archetype` props match selected archetype
- [ ] Google Fonts imported correctly for archetype
- [ ] Tailwind config extends correct archetype preset
- [ ] Colors consistent with archetype palette
- [ ] Typography weights match archetype specification
- [ ] Border radius consistent (sharp / subtle / rounded)
- [ ] Shadow depths match archetype style
- [ ] Overall emotional tone aligns with archetype personality

## Mixing Archetypes (Advanced)

**Scenario:** Client wants Bold innovation but Elegant sophistication.

**Solution:** Hybrid archetype customization

```javascript
// tailwind.config.cjs
const archetypeBold = require('../../packages/ui-components/config/archetype-bold');

module.exports = {
  presets: [archetypeBold],
  theme: {
    extend: {
      colors: {
        primary: '#2C2C2C',     // Elegant charcoal (from Elegant)
        secondary: '#FF6B35',    // Bold orange (from Bold)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],           // Bold typography
        serif: ['Playfair Display', 'serif'],    // Elegant serif for headings
      },
      borderRadius: {
        'archetype': '0.5rem',  // Elegant subtle rounds (compromise)
      },
    },
  },
};
```

**Note:** Hybrids should be documented in `BRAND_GUIDELINES.md` with clear rationale.

## Common Mistakes to Avoid

❌ **Using Wrong Archetype for Industry**
- Healthcare with Bold (too aggressive)
- SaaS with Approachable (lacks authority)

✅ **Match archetype to audience expectations**

❌ **Inconsistent Application**
- Hero uses Bold, Cards use Elegant
- Mixing rounded and sharp corners on same page

✅ **Maintain archetype consistency throughout**

❌ **Ignoring Color Contrast**
- Terracotta text on Cream background (fails WCAG)

✅ **Validate all color combinations meet 4.5:1 ratio**

❌ **Generic Font Choices**
- Using default system fonts instead of archetype fonts

✅ **Import Google Fonts specified by archetype**

## Resources

- [Design Quality System](../../../docs/DESIGN_QUALITY_SYSTEM.md) - Full 3-Archetype Framework rationale
- [Google Fonts](https://fonts.google.com/) - Typography resources
- [Coolors](https://coolors.co/) - Color palette generator
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Verify color accessibility

## Integration with Project

This skill is referenced by:
- `design-workflow-orchestrator` agent (Phase 2.5: Design Concept Generation)
- `brand-design-strategist` agent (brand-aligned design concepts)
- Client onboarding process (`CLIENT_ONBOARDING.md`)
- `BRAND_GUIDELINES.md` template

## Changelog

### 1.0.0 (2025-11-11)
- Initial skill creation
- 3-Archetype Framework documented (Bold, Elegant, Approachable)
- Discovery questions and decision matrix included
- Implementation guide with code examples
- Integration with DaisyUI and Tailwind
- Archetype consistency checklist added
