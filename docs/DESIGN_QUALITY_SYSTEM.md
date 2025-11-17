# Design Quality System: Eliminating "Generic AI Design"

> **Investigation Lead Report**
> **Date:** November 10, 2025
> **Status:** Squad Analysis Complete
> **Test Case:** Bigger Boss Website (sites/bigger-boss/)

---

## Executive Summary

**Problem Statement:**
Current client sites (bigger-boss, test-client-alpha, test-client-beta) feel like "generic AI designs" rather than unique, branded experiences that reflect current November 2025 design trends.

**Root Cause:**
The multi-site system prioritizes technical excellence (SEO, accessibility, performance) over brand differentiation. The workflow lacks an explicit **Design Concept Selection Phase**, causing all sites to default to identical shared components with grayscale colors and system fonts.

**Solution:**
Implement a **3-Archetype Design Concept Framework** with mandatory brand identity completion, enhanced component flexibility, and workflow integration that ensures every client site has a distinct visual direction before development begins.

**Impact:**
- **Before:** All sites look like variations of the same template (grayscale, centered text, identical card grids)
- **After:** Each site has unique color palette, typography, and layout approach aligned with 2025 design trends
- **Timeline:** Adds 3-5 days to project (Week 2: Design Concept Phase) but reduces iteration cycles
- **Cost:** Minimal (no new tools required, Claude Code reproducible)

---

## Table of Contents

1. [Investigation Findings](#investigation-findings)
2. [Current Design Trends (November 2025)](#current-design-trends-november-2025)
3. [3-Archetype Design Concept Framework](#3-archetype-design-concept-framework)
4. [Workflow Integration](#workflow-integration)
5. [Component Enhancement Specifications](#component-enhancement-specifications)
6. [Test Implementation: Bigger Boss Redesign](#test-implementation-bigger-boss-redesign)
7. [Implementation Checklist](#implementation-checklist)
8. [Appendix: Specialist Reports](#appendix-specialist-reports)

---

## Investigation Findings

### What Makes Current Sites "Generic"?

**Design Pattern Analysis (All 3 Sites: bigger-boss, test-client-alpha, test-client-beta):**

| Generic AI Design Indicator | Current Implementation | Impact |
|------------------------------|------------------------|--------|
| **Grayscale Dominance** | Primary: #1a202c, Secondary: #2d3748, Accent: #4a5568 | No visual brand identity |
| **Predictable Layout** | Hero → Section → Card Grid → Section → CTA (every site) | Feels template-driven |
| **No Typography Hierarchy** | System fonts only, uniform sizing (3rem headlines, 1.25rem body) | Lacks visual interest |
| **Minimal Visual Elements** | No gradients, illustrations, photography, or custom graphics | Looks AI-generated |
| **Dashboard-Style Widgets** | Progress bars (blue/green/purple) on test-client sites | Wrong context (marketing ≠ dashboard) |
| **Overused Patterns** | Green checkmarks (✓), comparison tables, "Learn more →" text | Screams "AI template" |
| **Incomplete Brand Identity** | BRAND_GUIDELINES.md 80% boilerplate, missing fonts/colors/voice | No differentiation mechanism |

### Shared Component Rigidity

**Current components are functional but inflexible:**

**Hero Component:**
- ❌ Only center-aligned text
- ❌ Single background color option (no gradients, videos, images)
- ❌ No size variants (all same height)
- ✅ Responsive, accessible

**Card Component:**
- ❌ Fixed 16:9 aspect ratio
- ❌ Hardcoded "Learn more →" text
- ❌ No variant options (bordered, elevated, flat)
- ✅ Supports images, links

**Button Component:**
- ❌ Missing size variants (sm, md, lg)
- ❌ No icon support
- ❌ Only 3 variants (primary, secondary, outline)
- ✅ Accessible, responsive

**Result:** Customization is possible but not encouraged, so developers use defaults.

---

## Current Design Trends (November 2025)

**Data Sources:** Awwwards, B2B design trend reports, professional services agency analysis

### Trend 1: AI-Powered Personalization
- **Adoption:** 66% of B2B buyers expect personalized experiences
- **Implementation:** Dynamic content, adaptive layouts, personalized CTAs
- **Constraint:** May conflict with static site architecture (defer to future phase)

### Trend 2: Trust-Building Through Transparency
**Visual Elements:**
- Large, authentic photography (not stock photos)
- Real client testimonials with photos, names, companies
- Case studies with metrics
- Video backgrounds showing actual team/process

**Design Language:** Authentic, human-centered, not overly polished

### Trend 3: Deep Scrolling & Storytelling
**Pattern:** Single-page layouts with scroll-triggered animations
**Use Case:** Product launches, service explanations, brand stories
**Example:** Noomo Agency (Awwwards Website of Year 2025)

### Trend 4: Typography as Hero Element
**Characteristics:**
- **Variable fonts:** Adjustable weight/width for performance
- **High-contrast:** Large bold headlines (5rem-8rem) vs. small body text
- **Monospaced fonts:** For technical brands
- **Transparent text overlays:** On images/videos

**Example Sizes:**
- Desktop H1: 5rem-8rem (80px-128px)
- Mobile H1: 2.5rem-4rem (40px-64px)
- Body text: 1.125rem-1.25rem (18px-20px)

### Trend 5: Color Palette Shifts (November 2025)

**Pantone Color of Year 2025: Mocha Mousse**
- Warm browns, terracotta, clay tones
- Conveys sustainability, trustworthiness, warmth

**Popular Palette Formulas:**

**Formula A: Soft Pastels + Bright Accents**
- Foundation: Muted neutrals (beige, ash gray, warm white)
- Accent: Vibrant pops (neon yellow, coral, bright blue)
- Example: #F5F1EB (warm white) + #FF6B35 (coral) + #004E89 (navy)

**Formula B: Earth Tones**
- Terracotta (#E07A5F)
- Olive green (#81B29A)
- Clay/sand (#D4A574)
- Moss (#4F6F52)

**Formula C: Digital Lavender (Wellness Brands)**
- Soft purples (#C5A3FF, #E6D9FF)
- For mindfulness, self-care, health sectors

**Formula D: High-Contrast for Accessibility**
- Light pastels with dark contrasting elements
- Ensures WCAG compliance while maintaining visual appeal

### Trend 6: Minimalism with Purpose
**Not:** Empty whitespace for its own sake
**But:** Intentional whitespace directing attention to key elements

**Features:**
- Large headlines
- Monospaced fonts for tech brands
- Neutral palettes
- Transparent text overlays

### Trend 7: Cinematic & Engaging Visuals
- High-resolution hero images (full viewport)
- Video backgrounds (10-15 second looping clips)
- Interactive graphics (WebGL, 3D for high-end agencies)
- Scroll-triggered reveals and parallax effects

### Reference Sites (Awwwards November 2025)
1. **Noomo Agency** - Website of Year, AI/3D/AR integration
2. **Lusion** - WebGL + 3D animations, immersive experience
3. **Emele Collab** - Site of Day Nov 09, 2025
4. **Mantis** - Site of Day Nov 08, 2025
5. **GKC Architecture & Design** - Site of Day Nov 06, 2025
6. **SOIL** - Site of Day Nov 07, 2025
7. **Kaleida** - Site of Day Nov 05, 2025

**Key Takeaway:** Modern professional sites balance minimalism with visual richness through typography, color, and motion—not decoration.

---

## 3-Archetype Design Concept Framework

### The Problem with Color Swaps

**Common Mistake:** Presenting 3 concepts that differ only by color:
- Concept A: Blue theme
- Concept B: Green theme
- Concept C: Purple theme

**Result:** Client can't distinguish meaningful differences, chooses arbitrarily, doesn't feel ownership.

### The Solution: Structural Differentiation

**Each concept must differ across multiple dimensions:**
1. **Color Palette** (>60° apart on color wheel)
2. **Typography** (different font categories: serif vs. sans-serif, rounded vs. geometric)
3. **Layout Style** (symmetric vs. asymmetric, card-based vs. full-bleed)
4. **Visual Language** (geometric vs. organic, minimal vs. rich)
5. **Interaction Patterns** (animated vs. static, playful vs. professional)

---

### Concept A: Bold & Modern

**Visual Identity:**
- **Color Palette:** High-contrast (dark navy + bright accent like neon yellow or coral)
- **Typography:** Large, bold sans-serif headlines (5rem+), tight letter-spacing
- **Layout Style:** Asymmetric grids, overlapping elements, full-bleed images
- **Visual Language:** Geometric shapes, sharp angles, minimal decoration
- **Interaction:** Scroll-triggered animations, parallax effects

**Example Color Scheme:**
```
Primary:   #0A2540 (Dark Navy)
Secondary: #1E3A5F (Medium Navy)
Accent:    #FF6B35 (Electric Orange)
Background: #FFFFFF (White)
Text:      #0A2540 (Dark Navy)
```

**Typography Pairing:**
- **Headings:** Inter (700-900 weight), tight tracking (-0.02em)
- **Body:** Inter (400-500 weight), normal tracking

**Best For:**
- Tech companies, SaaS, startups, fintech
- Brands emphasizing innovation, speed, cutting-edge

**Avoid For:**
- Law firms, healthcare (too aggressive)
- Traditional industries (may appear unprofessional)

**Inspiration Examples:**
- Stripe, Vercel, Linear, Figma

---

### Concept B: Elegant & Refined

**Visual Identity:**
- **Color Palette:** Soft neutrals (cream, beige, warm white) + single deep accent (burgundy or forest green)
- **Typography:** Serif headlines (Playfair Display, Lora), generous line-height
- **Layout Style:** Symmetric grids, centered text, ample whitespace
- **Visual Language:** Soft shadows, rounded corners, subtle gradients
- **Interaction:** Gentle fades, smooth transitions, minimal motion

**Example Color Scheme:**
```
Primary:   #2C3333 (Charcoal)
Secondary: #395B64 (Slate Blue)
Accent:    #D4AF37 (Gold)
Background: #F5F1EB (Cream)
Text:      #2C3333 (Charcoal)
```

**Typography Pairing:**
- **Headings:** Playfair Display (600-700 weight), generous line-height (1.3)
- **Body:** Open Sans (400-600 weight), relaxed tracking

**Best For:**
- Law firms, consulting, luxury brands, financial advisors
- Brands emphasizing trust, expertise, legacy

**Avoid For:**
- Youth brands, nonprofits (too formal)
- Tech startups (may appear outdated)

**Inspiration Examples:**
- McKinsey, Deloitte, premium hotel brands

---

### Concept C: Approachable & Human

**Visual Identity:**
- **Color Palette:** Earth tones (terracotta, olive green, Mocha Mousse brown) + warm accents
- **Typography:** Rounded sans-serif (DM Sans, Plus Jakarta Sans), casual hierarchy
- **Layout Style:** Card-based grids, illustration-heavy, mixed media
- **Visual Language:** Custom illustrations, hand-drawn elements, photography with people
- **Interaction:** Playful micro-animations, hover effects

**Example Color Scheme:**
```
Primary:   #E07A5F (Terracotta)
Secondary: #81B29A (Sage Green)
Accent:    #F2CC8F (Warm Yellow)
Background: #F8F4EF (Warm White)
Text:      #3D405B (Dark Slate)
```

**Typography Pairing:**
- **Headings:** DM Sans (500-700 weight), rounded, open tracking
- **Body:** DM Sans (400 weight), comfortable line-height (1.6)

**Best For:**
- Healthcare, education, nonprofits, community organizations
- Brands emphasizing warmth, accessibility, human connection

**Avoid For:**
- Enterprise B2B (may appear unprofessional)
- Financial services (lacks gravitas)

**Inspiration Examples:**
- Notion, Airtable, Mailchimp, Duolingo

---

### Concept Brief Template

Use this template for each concept presentation:

```markdown
## Concept [A/B/C]: [Archetype Name]

### Color Palette
- **Primary:** #XXXXXX ([Color Name]) - Used for headlines, primary CTAs
- **Secondary:** #XXXXXX ([Color Name]) - Used for subheadings, secondary elements
- **Accent:** #XXXXXX ([Color Name]) - Used for highlights, links, hover states
- **Background:** #XXXXXX ([Color Name]) - Page background, section backgrounds
- **Text:** #XXXXXX ([Color Name]) - Body text, paragraphs

**Color Preview:** [Insert Coolors.co link with full palette]

### Typography
- **Heading Font:** [Font Name] ([Google Fonts link])
  - H1: [size]rem, [weight], [line-height], [letter-spacing]
  - H2: [size]rem, [weight], [line-height], [letter-spacing]
  - H3: [size]rem, [weight], [line-height], [letter-spacing]
- **Body Font:** [Font Name] ([Google Fonts link])
  - Paragraph: [size]rem, [weight], [line-height], [letter-spacing]
  - Small: [size]rem, [weight], [line-height], [letter-spacing]

**Typography Preview:** [Insert Google Fonts preview link]

### Layout Approach
- **Grid System:** [e.g., 12-column asymmetric, card-based, full-bleed sections]
- **Spacing Scale:** [e.g., Tailwind default 4px/8px, custom 6px/12px/24px]
- **Breakpoints:** Mobile-first, [tablet]px, [desktop]px
- **Container Max Width:** [e.g., 1280px, 1440px, full-width]

### Visual Elements
- **Hero Style:** [full-viewport image, gradient, solid color, video background, split-screen]
- **Card Style:** [bordered, shadow, flat, elevated, image-top/left/background]
- **Button Style:** [rounded, pill-shaped, square, ghost, filled, outline]
- **Icons:** [line icons, filled icons, custom illustrations, none]
- **Imagery:** [photography style, illustrations, abstract graphics, mixed]

### Interaction Patterns
- **Animations:** [scroll-triggered reveals, hover effects, page transitions, none/minimal]
- **Navigation:** [sticky header, hamburger, desktop horizontal, mega menu]
- **Scroll Behavior:** [smooth scroll, parallax, fixed backgrounds, standard]

### Inspiration References
1. **[Site Name]** ([URL]): [What to borrow - e.g., "asymmetric hero layout"]
2. **[Site Name]** ([URL]): [What to borrow - e.g., "color palette warmth"]
3. **[Site Name]** ([URL]): [What to borrow - e.g., "typography scale"]

### Validation Checklist
- [ ] **Distinctness:** Does this concept differ from other concepts by >60% across color, typography, layout?
- [ ] **Client Alignment:** Does this match client's brand personality from BRAND_GUIDELINES.md?
- [ ] **Industry Appropriateness:** Does this concept fit client's industry norms?
- [ ] **Competitor Differentiation:** Does this visually distinguish from competitors?
- [ ] **Technical Feasibility:** Can this be implemented with Astro + Tailwind + astro-headless-ui?
- [ ] **Accessibility:** Do colors meet WCAG 2.1 AA contrast ratios (4.5:1 minimum)?
- [ ] **Performance:** Are fonts web-optimized (Google Fonts, Bunny Fonts)?
```

---

### Validation Rules

**Distinctness Check (Must Pass 3 of 5):**
1. ✅ Color palettes differ by >60° on color wheel
2. ✅ Typography uses different font categories (serif vs. sans-serif, rounded vs. geometric)
3. ✅ Layout styles differ structurally (symmetric vs. asymmetric, card-based vs. full-bleed)
4. ✅ Visual language differs (geometric vs. organic, minimal vs. rich)
5. ✅ Interaction patterns differ (animated vs. static, playful vs. professional)

**Client Alignment Check (Must Pass All):**
1. ✅ Concept matches client's industry norms (law firm ≠ Bold & Modern)
2. ✅ Concept matches client's stated brand personality from BRAND_GUIDELINES.md
3. ✅ Concept differentiates from competitors identified in research

**Technical Feasibility Check (Must Pass All):**
1. ✅ Colors can be implemented in Tailwind config
2. ✅ Fonts available on Google Fonts or Bunny Fonts (free, open-source)
3. ✅ Layout achievable with Tailwind utility classes (minimal custom CSS)
4. ✅ Interactions achievable with Astro Islands + Alpine.js (minimal JavaScript)
5. ✅ Color contrast meets WCAG 2.1 AA standards (4.5:1 normal text, 3:1 large text)

---

## Workflow Integration

### Current Workflow (docs/COMPLETE_WORKFLOW_GUIDE.md)

**Phase 1:** Discovery & Planning (Week 1)
**Phase 2:** Wireframing (Week 1-2)
**Phase 3:** High-Fidelity Design (Week 2-3)
**Phase 4:** Design-to-Code Translation (Week 3-4)

**Problem:** Phase 3 assumes Figma expertise and full design system creation (2-3 weeks).

---

### New Recommended Workflow: Hybrid Approach

**Phase 1:** Discovery & Planning (Week 1) - *No Change*

**Phase 2:** Wireframing (Week 1) - *No Change*

**Phase 2.5: Design Concept Generation (Week 2)** - *NEW PHASE*

**Objective:** Generate 3 distinct visual directions for client selection

**Steps:**
1. **Create mood board** (15-20 examples from Awwwards, Dribbble, Pinterest)
   - Search for: "[client industry] website design 2025"
   - Save to Pinterest board or PDF compilation
   - Include mix of Awwwards winners + industry-specific sites

2. **Client selects favorites** (async via email/Loom video)
   - Send mood board to client
   - Client selects 5 favorite examples
   - Client explains what they like about each (color, layout, feel)

3. **Claude Code generates 3 concept briefs**
   - Invoke `@design-concept-generator` agent (see Recommendation 4)
   - Provide inputs: industry, brand personality, mood board favorites
   - Agent outputs 3 concept briefs using archetype framework
   - Each brief includes: color palette, typography, layout approach, inspiration links

4. **Present concepts to client**
   - Send DESIGN_CONCEPTS.md file via email
   - Include color palette swatches (Coolors.co links)
   - Include typography previews (Google Fonts links)
   - Include 3-5 inspiration site links per concept

5. **Client selects winning concept** (30-min call or async)
   - Discuss pros/cons of each concept
   - Client selects preferred direction
   - Capture specific elements client likes (e.g., "I like Concept A's colors but Concept B's typography")

6. **Create quick homepage mockup** (Figma or V0.dev, 2-4 hours)
   - Shows hero section, one content section, card grid
   - Validates color palette, typography, basic layout
   - NOT a full design system (just homepage direction)

**Deliverables:**
- ✅ Mood board (15-20 examples)
- ✅ 3 design concept briefs (DESIGN_CONCEPTS.md)
- ✅ Winning concept selected by client
- ✅ Quick homepage mockup (Figma/V0.dev)

**Timeline:** 3-5 days (including client async review time)

---

**Phase 3: Implementation** (Week 2-3) - *Replaces "High-Fidelity Design"*

**Objective:** Translate winning concept into production-ready Astro components

**Steps:**
1. **Update BRAND_GUIDELINES.md** with winning concept details
   - Copy color palette from concept brief
   - Copy typography choices
   - Add mood board inspiration links

2. **Configure Tailwind + fonts**
   - Update `sites/[client]/tailwind.config.cjs` with brand colors
   - Add Google Fonts imports to BaseLayout
   - Test color contrast ratios (WCAG validator)

3. **Customize shared components**
   - Extend Hero, Card, Button components with client brand tokens
   - Create client-specific variants in `sites/[client]/src/components/`
   - Example: `HeroBold.astro` (asymmetric layout for Concept A clients)

4. **Build pages with winning concept styling**
   - Homepage
   - About
   - Services
   - Contact
   - Blog template

5. **Iterate based on quick mockup**
   - Reference homepage mockup for spacing, sizing, layout details
   - Adjust until matches mockup direction (not pixel-perfect)

**Deliverables:**
- ✅ Tailwind config with brand colors
- ✅ Font imports configured
- ✅ All pages built with winning concept styling
- ✅ Responsive across mobile/tablet/desktop

**Timeline:** 5-7 days

---

**Phase 4:** Content Integration (Week 3) - *No Change*

**Phase 5:** Quality Assurance (Week 3-4) - *No Change*

**Phase 6:** Deployment (Week 4) - *No Change*

**Phase 7:** Client Handoff (Week 4) - *No Change*

---

### Workflow Comparison: Design-First vs. Hybrid

| Aspect | Design-First (Figma) | Hybrid (Concept Briefs + Quick Mockup) |
|--------|----------------------|----------------------------------------|
| **Timeline** | 3-4 weeks (full design phase) | 1-2 weeks (concept selection + implementation) |
| **Designer Required** | Yes (Figma expertise) | No (Claude Code reproducible) |
| **Client Visual Clarity** | High (pixel-perfect mockups) | Medium (text briefs + quick mockup) |
| **Flexibility** | Low (design changes = Figma updates + code updates) | High (iterate directly in code) |
| **Cost** | $10k+ projects | $5k-$10k projects |
| **Best For** | Complex brand requirements, high-budget clients | Fast timelines, flexible clients, MVP/proof-of-concept |

**Recommendation:** Use **Hybrid Approach** for 80% of projects, reserve Design-First for clients with:
- Existing complex brand guidelines
- High budget ($15k+)
- Need for stakeholder sign-off on mockups before development
- Multi-department approval processes

---

## Component Enhancement Specifications

### Problem: Current Components Are Rigid

**Current Hero.astro:**
- Only center-aligned text
- Single background color option
- No size variants

**What We Need:**
- Left/right/center alignment
- Background: solid color, gradient, image, video
- Size variants: normal (4rem padding) vs. large (8rem padding)

---

### Enhanced Hero Component

**File:** `packages/ui-components/src/components/Hero.astro`

```typescript
interface Props {
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaUrl?: string;
  ctaSecondaryText?: string;
  ctaSecondaryUrl?: string;

  // NEW: Alignment options
  alignment?: 'left' | 'center' | 'right';

  // NEW: Background variants
  variant?: 'default' | 'gradient' | 'image' | 'video';
  backgroundColor?: string;
  backgroundGradient?: string; // e.g., "from-blue-500 to-purple-600"
  backgroundImage?: string;
  backgroundVideo?: string;

  // NEW: Size variants
  size?: 'normal' | 'large';

  // NEW: Text color override
  textColor?: string;
}

const {
  headline,
  subheadline,
  ctaText,
  ctaUrl,
  ctaSecondaryText,
  ctaSecondaryUrl,
  alignment = 'center',
  variant = 'default',
  backgroundColor,
  backgroundGradient,
  backgroundImage,
  backgroundVideo,
  size = 'normal',
  textColor
} = Astro.props;

const alignmentClasses = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end'
};

const sizeClasses = {
  normal: 'py-16 md:py-20',
  large: 'py-24 md:py-32'
};
```

**Usage Example (Concept A: Bold & Modern):**
```astro
<Hero
  headline="AI Marketing in 90 Minutes, Not 8 Weeks"
  subheadline="AI-orchestrated research and strategy for Australian agencies"
  ctaText="Book Free Assessment"
  ctaUrl="#contact"
  ctaSecondaryText="Watch Demo"
  ctaSecondaryUrl="#demo"
  alignment="left"
  variant="gradient"
  backgroundGradient="from-[#0A2540] to-[#1E3A5F]"
  size="large"
  textColor="white"
/>
```

---

### Enhanced Card Component

**File:** `packages/ui-components/src/components/Card.astro`

```typescript
interface Props {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  link?: string;

  // NEW: Variant options
  variant?: 'default' | 'bordered' | 'elevated' | 'flat';

  // NEW: Image position
  imagePosition?: 'top' | 'left' | 'background';

  // NEW: Aspect ratio
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';

  // NEW: CTA customization
  ctaText?: string; // Default: "Learn more →"

  // NEW: Icon support
  icon?: string; // Icon name (from icon library)
}

const {
  title,
  description,
  image,
  imageAlt = '',
  link,
  variant = 'default',
  imagePosition = 'top',
  aspectRatio = '16/9',
  ctaText = 'Learn more →',
  icon
} = Astro.props;

const variantClasses = {
  default: 'bg-white border border-gray-200 shadow-sm hover:shadow-md',
  bordered: 'bg-white border-2 border-gray-900 hover:border-accent',
  elevated: 'bg-white shadow-lg hover:shadow-xl border-0',
  flat: 'bg-gray-50 border-0 hover:bg-gray-100'
};

const aspectRatioClasses = {
  '16/9': 'aspect-[16/9]',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  'auto': ''
};
```

**Usage Example (Concept B: Elegant & Refined):**
```astro
<Card
  title="Marketing Strategy"
  description="Complete market research and positioning frameworks delivered in under 2 hours"
  image="/images/strategy.jpg"
  imageAlt="Strategic planning workspace"
  link="/services/strategy"
  variant="elevated"
  imagePosition="top"
  aspectRatio="4/3"
  ctaText="Explore service →"
/>
```

---

### Enhanced Button Component

**File:** `packages/ui-components/src/components/Button.astro`

```typescript
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';

  // NEW: Size variants
  size?: 'sm' | 'md' | 'lg';

  type?: 'button' | 'submit' | 'reset';
  href?: string;

  // NEW: Icon support
  icon?: string; // Icon name
  iconPosition?: 'left' | 'right';

  class?: string;
  disabled?: boolean;
}

const {
  variant = 'primary',
  size = 'md',
  type = 'button',
  href,
  icon,
  iconPosition = 'left',
  class: className = '',
  disabled = false
} = Astro.props;

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};
```

**Usage Example (Concept C: Approachable & Human):**
```astro
<Button
  variant="primary"
  size="lg"
  href="#contact"
  icon="arrow-right"
  iconPosition="right"
>
  Get Started Today
</Button>
```

---

### New Component: Section Container

**File:** `packages/ui-components/src/components/Section.astro`

**Current Version:** Only supports solid `backgroundColor` prop

**Enhanced Version:**

```typescript
interface Props {
  // Background options
  backgroundColor?: string;
  backgroundGradient?: string; // e.g., "from-blue-50 to-white"
  backgroundPattern?: 'dots' | 'grid' | 'waves' | 'none';

  // Spacing variants
  spacing?: 'compact' | 'normal' | 'spacious';

  // Container width
  containerWidth?: 'narrow' | 'normal' | 'wide' | 'full';
}

const {
  backgroundColor,
  backgroundGradient,
  backgroundPattern = 'none',
  spacing = 'normal',
  containerWidth = 'normal'
} = Astro.props;

const spacingClasses = {
  compact: 'py-8 md:py-12',
  normal: 'py-12 md:py-16',
  spacious: 'py-16 md:py-24'
};

const containerWidthClasses = {
  narrow: 'max-w-4xl',
  normal: 'max-w-6xl',
  wide: 'max-w-7xl',
  full: 'max-w-none'
};
```

**Usage Example:**
```astro
<Section
  backgroundGradient="from-[#F5F1EB] to-white"
  spacing="spacious"
  containerWidth="wide"
>
  <div class="grid md:grid-cols-3 gap-8">
    <Card title="..." description="..." />
    <Card title="..." description="..." />
    <Card title="..." description="..." />
  </div>
</Section>
```

---

## Test Implementation: Bigger Boss Redesign

### Current State Analysis

**File:** `sites/bigger-boss/src/pages/index.astro`

**Generic AI Design Indicators Found:**
- ✅ Grayscale colors (#1a202c, #2d3748)
- ✅ Center-aligned text throughout
- ✅ Green checkmarks (✓) in trust signals
- ✅ Progress bars (wrong context)
- ✅ Comparison table (generic styling)
- ✅ Predictable layout pattern

**BRAND_GUIDELINES.md Status:**
- ✅ 80% boilerplate
- ❌ Typography: `[To be completed by client]`
- ❌ Logo Usage: `[To be completed by client]`
- ❌ Voice & Tone: `[To be completed by client]`

---

### Proposed 3 Design Concepts for Bigger Boss

**Client Context:**
- **Industry:** Marketing automation for agencies
- **Target Audience:** Australian digital agencies, professional services, in-house teams
- **Brand Personality:** Confident, innovative, efficient, results-driven
- **Key Differentiator:** Speed (90 minutes vs. 8 weeks) + Australian compliance built-in

---

#### **CONCEPT A: BOLD & MODERN** ✅ RECOMMENDED

**Why This Concept:**
- Matches "Bigger Boss" name (confident, authoritative)
- Aligns with tech-forward positioning (AI automation)
- Differentiates from competitors (most agencies use Concept B)
- Reflects Australian tech scene (Canva, Atlassian use bold colors)

**Color Palette:**
```
Primary:   #0A2540 (Dark Navy) - Headlines, primary CTAs
Secondary: #1E3A5F (Medium Navy) - Subheadings, backgrounds
Accent:    #FF6B35 (Electric Orange) - Highlights, links, CTAs
Background: #FFFFFF (White)
Alt Background: #F8FAFC (Light Gray)
Text:      #0A2540 (Dark Navy)
```

**Color Preview:** https://coolors.co/0a2540-1e3a5f-ff6b35-ffffff-f8fafc

**Typography:**
- **Headings:** Inter (700-900 weight)
  - H1: 4rem (64px) desktop, 2.5rem (40px) mobile, weight: 800, line-height: 1.1, letter-spacing: -0.02em
  - H2: 3rem (48px) desktop, 2rem (32px) mobile, weight: 700, line-height: 1.2
  - H3: 1.75rem (28px), weight: 600
- **Body:** Inter (400-500 weight)
  - Paragraph: 1.125rem (18px), weight: 400, line-height: 1.6
  - Small: 0.875rem (14px), weight: 400

**Typography Preview:** https://fonts.google.com/specimen/Inter

**Layout Approach:**
- **Hero:** Asymmetric split-screen (text left 60%, visual right 40%)
- **Sections:** Alternating left-right content blocks (not centered)
- **Cards:** Elevated variant with subtle shadows, 4/3 aspect ratio
- **Grid:** 2-column on desktop (not 3-column)

**Visual Elements:**
- **Hero Style:** Gradient background (from-[#0A2540] to-[#1E3A5F]), large headline, two CTAs (primary orange, secondary outline)
- **Card Style:** Elevated, shadow-lg, hover:shadow-xl, white background
- **Button Style:** Rounded (0.5rem), bold weight, large size
- **Icons:** Line icons (Heroicons or Lucide)
- **Imagery:** Abstract geometric patterns, data visualizations (not people photos)

**Interaction Patterns:**
- **Animations:** Scroll-triggered fade-in for sections
- **Navigation:** Sticky header, simple horizontal menu
- **Buttons:** Scale on hover (transform: scale(1.05))

**Inspiration References:**
1. **Stripe** (https://stripe.com): Asymmetric hero layout, bold typography
2. **Vercel** (https://vercel.com): Navy + bright accent color scheme
3. **Linear** (https://linear.app): Clean, minimal, high-contrast design

**Implementation Preview (Hero Section):**
```astro
<Hero
  headline="AI Marketing Strategies in 90 Minutes, Not 8 Weeks"
  subheadline="AI-orchestrated research, strategy, and content planning with built-in compliance for Australian businesses"
  ctaText="Book Free Strategy Assessment"
  ctaUrl="#contact"
  ctaSecondaryText="View Case Studies"
  ctaSecondaryUrl="/case-studies"
  alignment="left"
  variant="gradient"
  backgroundGradient="from-[#0A2540] to-[#1E3A5F]"
  size="large"
  textColor="white"
/>
```

---

#### **CONCEPT B: ELEGANT & REFINED**

**Why This Concept:**
- Appeals to professional services (lawyers, accountants)
- Emphasizes trust and credibility
- Classic approach for established brands

**Color Palette:**
```
Primary:   #2C3333 (Charcoal)
Secondary: #395B64 (Slate Blue)
Accent:    #D4AF37 (Gold)
Background: #F5F1EB (Cream)
Text:      #2C3333 (Charcoal)
```

**Typography:**
- **Headings:** Playfair Display (600-700 weight)
- **Body:** Open Sans (400-600 weight)

**Layout Approach:**
- Symmetric, centered text
- Generous whitespace
- Traditional grid structures

**Visual Elements:**
- Soft shadows
- Rounded corners
- Subtle gradients

**Best For:** If Bigger Boss pivots to serve law firms, accounting firms exclusively

**Why Not Recommended:** Doesn't match tech-forward positioning or "Bigger Boss" boldness

---

#### **CONCEPT C: APPROACHABLE & HUMAN**

**Why This Concept:**
- Warm, friendly, collaborative tone
- Earth tones align with 2025 trends (Mocha Mousse)
- Appeals to in-house teams, smaller agencies

**Color Palette:**
```
Primary:   #E07A5F (Terracotta)
Secondary: #81B29A (Sage Green)
Accent:    #F2CC8F (Warm Yellow)
Background: #F8F4EF (Warm White)
Text:      #3D405B (Dark Slate)
```

**Typography:**
- **Headings:** DM Sans (500-700 weight)
- **Body:** DM Sans (400 weight)

**Layout Approach:**
- Card-based grids
- Illustration-heavy
- Mixed media (photos + illustrations)

**Visual Elements:**
- Custom illustrations
- Hand-drawn elements
- Photography with people

**Best For:** If Bigger Boss emphasizes collaborative approach, small team feel

**Why Not Recommended:** May appear less authoritative than "Bigger Boss" name suggests

---

### Recommended Concept: **A (Bold & Modern)**

**Implementation Plan:**

#### Step 1: Update BRAND_GUIDELINES.md

```bash
# Edit file
code sites/bigger-boss/BRAND_GUIDELINES.md
```

Add:
```markdown
## Color Palette (Concept A: Bold & Modern)

- **Primary Color:** #0A2540 (Dark Navy)
- **Secondary Color:** #1E3A5F (Medium Navy)
- **Accent Color:** #FF6B35 (Electric Orange)
- **Background:** #FFFFFF (White)
- **Alt Background:** #F8FAFC (Light Gray)

## Typography

- **Heading Font:** Inter (Google Fonts)
  - Weights: 700 (bold), 800 (extrabold), 900 (black)
- **Body Font:** Inter (Google Fonts)
  - Weights: 400 (regular), 500 (medium)

## Design Concept

**Archetype:** Bold & Modern

**Inspiration Sites:**
- Stripe (https://stripe.com) - Asymmetric hero layout
- Vercel (https://vercel.com) - Navy + bright accent colors
- Linear (https://linear.app) - Clean, high-contrast design

## Voice & Tone

- **Confident:** Direct language, no hedging ("delivers" not "can help deliver")
- **Results-Driven:** Lead with outcomes (90 minutes, 85% savings, 85+ quality score)
- **Australian:** Mention compliance (AHPRA, ASIC), Australian-owned
```

#### Step 2: Update Tailwind Config

```bash
# Edit file
code sites/bigger-boss/tailwind.config.cjs
```

Update `theme.extend.colors`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',    // Dark Navy
        secondary: '#1E3A5F',  // Medium Navy
        accent: '#FF6B35',     // Electric Orange
        background: '#FFFFFF', // White
        'alt-bg': '#F8FAFC'   // Light Gray
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  }
}
```

#### Step 3: Add Font Import

```bash
# Edit BaseLayout
code packages/ui-components/src/components/BaseLayout.astro
```

Add to `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap" rel="stylesheet">
```

#### Step 4: Redesign Homepage

**File:** `sites/bigger-boss/src/pages/index.astro`

**Replace current Hero with:**
```astro
<Hero
  headline="AI Marketing Strategies in 90 Minutes, Not 8 Weeks"
  subheadline="AI-orchestrated research, strategy, and content planning with built-in compliance for Australian businesses. Up to 85% cost savings guaranteed."
  ctaText="Book Free Strategy Assessment"
  ctaUrl="#contact"
  ctaSecondaryText="View Case Studies"
  ctaSecondaryUrl="/case-studies"
  alignment="left"
  variant="gradient"
  backgroundGradient="from-[#0A2540] to-[#1E3A5F]"
  size="large"
  textColor="white"
/>
```

**Replace Trust Signals section with:**
```astro
<Section backgroundColor="#F8FAFC" spacing="compact">
  <div class="flex flex-wrap justify-center gap-8 text-sm">
    <div class="flex items-center gap-2 text-gray-700">
      <div class="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <span class="font-medium">100% AHPRA/ASIC Compliant</span>
    </div>
    <!-- Repeat for other trust signals -->
  </div>
</Section>
```

**Replace Card Grid with:**
```astro
<Section spacing="spacious">
  <div class="text-center mb-12">
    <h2 class="text-4xl font-bold text-primary mb-4">Why Australian Agencies Choose The Bigger Boss</h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <Card
      title="Same-Day Delivery"
      description="Complete marketing strategies delivered under 2 hours. Execute faster than competitors."
      variant="elevated"
      aspectRatio="4/3"
      icon="lightning-bolt"
    />
    <Card
      title="85+ Quality Score Guaranteed"
      description="4-persona automated review system ensures every deliverable scores 85/100+."
      variant="elevated"
      aspectRatio="4/3"
      icon="shield-check"
    />
    <!-- Continue with other cards -->
  </div>
</Section>
```

**Expected Visual Changes:**
- ✅ Navy + orange color scheme (vs. grayscale)
- ✅ Left-aligned hero (vs. center)
- ✅ Gradient background on hero (vs. solid color)
- ✅ Inter font (vs. system default)
- ✅ Elevated cards (vs. flat)
- ✅ 2-column grid (vs. 3-column)
- ✅ Icons in trust signals (vs. checkmarks)

#### Step 5: Validate Against Generic AI Design Checklist

**Before (Current Site):**
- ❌ Grayscale dominance
- ❌ Predictable centered layout
- ❌ System fonts only
- ❌ Checkmark lists
- ❌ Generic comparison table

**After (Bold & Modern Redesign):**
- ✅ Distinct brand colors (navy + orange)
- ✅ Asymmetric layout
- ✅ Custom typography (Inter with varied weights)
- ✅ Icons instead of checkmarks
- ✅ Redesigned comparison table with accent highlights

---

## Implementation Checklist

### Phase 0: Setup (Before First Client Project)

- [ ] **Install astro-headless-ui** (optional, for interactive components)
  ```bash
  cd packages/ui-components
  pnpm add astro-headless-ui
  ```

- [ ] **Update shared components** with enhanced Props interfaces
  - [ ] Hero.astro (add alignment, variant, size options)
  - [ ] Card.astro (add variant, imagePosition, aspectRatio)
  - [ ] Button.astro (add size, icon support)
  - [ ] Section.astro (add backgroundGradient, spacing, containerWidth)

- [ ] **Create BRAND_GUIDELINES_TEMPLATE.md** with mandatory sections
  - [ ] Color Palette (with validation: must have 3+ colors)
  - [ ] Typography (heading font, body font, Google Fonts links required)
  - [ ] Design Concept Selected (A, B, or C)
  - [ ] Inspiration Sites (3+ links required)

- [ ] **Create design-concept-generator agent**
  - [ ] File: `.claude/agents/design-concept-generator.md`
  - [ ] Inputs: industry, brand personality, mood board favorites
  - [ ] Output: 3 concept briefs using archetype framework
  - [ ] Test with Bigger Boss as proof of concept

- [ ] **Update scaffolding script** (`pnpm create-client`)
  - [ ] Add guided CLI wizard for brand identity
  - [ ] Auto-populate BRAND_GUIDELINES.md
  - [ ] Auto-update tailwind.config.cjs
  - [ ] Auto-add font imports

### Phase 1: First Client Project (Week 1-2)

- [ ] **Discovery & Planning**
  - [ ] Client briefing call (use discovery template)
  - [ ] Create mood board (15-20 examples)
  - [ ] Client selects 5 favorites

- [ ] **Design Concept Generation**
  - [ ] Invoke `@design-concept-generator` agent
  - [ ] Review 3 generated concept briefs
  - [ ] Validate concepts (distinctness, alignment, feasibility)
  - [ ] Present concepts to client (async via email)

- [ ] **Concept Selection**
  - [ ] Client selects winning concept (30-min call)
  - [ ] Create quick homepage mockup (Figma or V0.dev, 2-4 hours)
  - [ ] Client approval

- [ ] **BRAND_GUIDELINES.md Completion**
  - [ ] Copy winning concept details to BRAND_GUIDELINES.md
  - [ ] Add color palette with hex codes
  - [ ] Add typography choices with Google Fonts links
  - [ ] Add inspiration site references

### Phase 2: Implementation (Week 2-3)

- [ ] **Configure Tailwind + Fonts**
  - [ ] Update `sites/[client]/tailwind.config.cjs` with brand colors
  - [ ] Add Google Fonts import to BaseLayout
  - [ ] Test color contrast ratios (WCAG validator)

- [ ] **Customize Components**
  - [ ] Create client-specific component variants (if needed)
  - [ ] Example: `HeroBold.astro` for Concept A clients
  - [ ] Test components in isolation (Storybook or manual)

- [ ] **Build Pages**
  - [ ] Homepage (reference quick mockup)
  - [ ] About
  - [ ] Services
  - [ ] Contact
  - [ ] Blog template

- [ ] **Responsive Testing**
  - [ ] Test at 375px (mobile)
  - [ ] Test at 768px (tablet)
  - [ ] Test at 1440px (desktop)

### Phase 3: Quality Validation (Week 3)

- [ ] **Run Generic AI Design Checklist**
  - [ ] No grayscale dominance (distinct brand colors used)
  - [ ] Layout variety (not all centered, not all 3-column grids)
  - [ ] Custom typography imported (not system fonts)
  - [ ] Minimal checkmark lists (use icons or other visual elements)
  - [ ] Unique visual elements (gradients, patterns, custom styling)

- [ ] **Run Standard Quality Gates**
  - [ ] Code quality (linting, type-checking)
  - [ ] SEO compliance (meta tags, schema, sitemap)
  - [ ] Accessibility (WCAG 2.1 AA, color contrast)
  - [ ] Performance (Core Web Vitals, Lighthouse >90)
  - [ ] AI readiness (robots.txt, llms.txt, SSR validation)

### Phase 4: Client Handoff (Week 4)

- [ ] **Deploy to staging**
- [ ] **Client UAT review**
- [ ] **Address feedback**
- [ ] **Production deployment**
- [ ] **CMS training**

---

## Appendix: Specialist Reports

### Specialist 1: Design Pattern Analyst

**Full Report:** [See "Investigation Findings" section above]

**Key Findings:**
- All 3 sites share identical layout patterns (Hero → Section → Card Grid → CTA)
- Grayscale color dominance (#1a202c, #2d3748, #4a5568)
- No custom typography (system fonts only)
- Components are functional but inflexible (fixed variants, hardcoded text)
- BRAND_GUIDELINES.md 80% incomplete boilerplate

**Root Cause:** Template-First workflow prioritizes speed/technical excellence over brand differentiation

---

### Specialist 2: Design Trend Researcher

**Full Report:** [See "Current Design Trends (November 2025)" section above]

**Key Findings:**
- 2025 trends emphasize AI personalization (66% of B2B buyers expect it)
- Trust-building through transparency (authentic photos, real testimonials)
- Deep scrolling + storytelling (single-page layouts, scroll-triggered animations)
- Typography as hero element (5rem-8rem headlines, variable fonts)
- Color shift toward earth tones (Mocha Mousse, terracotta, sage green)
- Minimalism with purpose (intentional whitespace, not empty space)
- Cinematic visuals (high-res images, video backgrounds, WebGL animations)

**Awwwards November 2025 Winners:**
- Noomo Agency (Website of Year)
- Lusion (WebGL + 3D)
- Emele Collab (Site of Day Nov 09)
- Mantis (Site of Day Nov 08)

**Key Takeaway:** Modern sites balance minimalism with visual richness through typography, color, motion

---

### Specialist 3: Workflow Systems Analyst

**Full Report:** [See "Workflow Integration" section above]

**Workflow Options Evaluated:**

**Option A: Design-First (Figma → Figma MCP → Implementation)**
- **Timeline:** 3-4 weeks (separate design phase)
- **Cost:** $10k+ (requires designer)
- **Pros:** Pixel-perfect mockups, high client clarity
- **Cons:** Slow, requires Figma expertise, changes are expensive

**Option B: Research-First (Mood Board → 3 Concepts → Direct to Code)**
- **Timeline:** 1-2 weeks (no separate design phase)
- **Cost:** $5k or less (no designer needed)
- **Pros:** Fast, Claude Code reproducible, lower cost
- **Cons:** Less visual clarity, risk of mismatch

**Option C: Hybrid (Mood Board → 3 Concepts → Quick Mockup → Implementation)** ✅ RECOMMENDED
- **Timeline:** 1-2 weeks (quick mockup adds 2-4 hours)
- **Cost:** $5k-$10k (mockup reduces risk without full design phase)
- **Pros:** Balances speed, cost, visual clarity
- **Cons:** Quick mockup may not be pixel-perfect

**Recommendation:** Hybrid Workflow C for 80% of projects

---

### Specialist 4: Design Concept Generation Specialist

**Full Report:** [See "3-Archetype Design Concept Framework" section above]

**Key Findings:**

**Problem:** How to ensure 3 concepts aren't just "color swaps"?

**Solution:** 3-Archetype Framework with validation rules

**Archetypes:**
1. **Concept A: Bold & Modern** (tech, SaaS, startups)
2. **Concept B: Elegant & Refined** (law, consulting, luxury)
3. **Concept C: Approachable & Human** (healthcare, education, nonprofits)

**Validation Rules:**
- Concepts must differ by >60° on color wheel
- Typography must use different font categories (serif vs. sans-serif)
- Layout must differ structurally (symmetric vs. asymmetric)
- At least 2 of 3 visual characteristics must differ

**Output Format:** Text briefs + mood board links (for client selection), quick homepage mockup (for winner)

**Claude Code Reproducible:** Yes (agents can generate briefs, V0.dev prompts)

---

## Conclusion: From Generic to Unique

### The Transformation

**Before (Generic AI Design):**
- Shared components used as-is
- Grayscale colors (#1a202c, #2d3748)
- System fonts, no brand identity
- Identical layouts across all sites
- Feels like "better template"

**After (Brand-Differentiated Design):**
- Components customized with brand tokens
- Distinct color palettes per client (navy + orange, charcoal + gold, terracotta + sage)
- Custom typography (Inter, Playfair Display, DM Sans)
- Varied layouts (asymmetric, symmetric, card-based)
- Feels like "unique brand experience"

### Success Metrics

**Measure Design Quality Improvement:**
1. **Brand Identity Completion:** 100% of BRAND_GUIDELINES.md sections completed (vs. 20% currently)
2. **Visual Distinctness:** Sites differ by >70% across color, typography, layout (vs. <30% currently)
3. **Client Satisfaction:** Clients can identify their site in lineup of 5 sites (vs. cannot currently)
4. **Time to Unique Design:** 1 week design concept phase (vs. 3-4 weeks full Figma design, or 0 weeks no design)

### Next Steps

1. **Immediate (This Week):**
   - [ ] Implement Bigger Boss redesign using Concept A (Bold & Modern)
   - [ ] Update Hero, Card, Button, Section components with enhanced Props
   - [ ] Create design-concept-generator agent

2. **Short-Term (Next 2 Weeks):**
   - [ ] Update COMPLETE_WORKFLOW_GUIDE.md with Phase 2.5 (Design Concept Generation)
   - [ ] Create BRAND_GUIDELINES_TEMPLATE.md with mandatory sections
   - [ ] Update scaffolding script with guided brand identity wizard

3. **Medium-Term (Month 2):**
   - [ ] Test workflow on 2-3 new client projects
   - [ ] Gather client feedback on concept selection process
   - [ ] Refine archetype framework based on learnings
   - [ ] Create component variant library (HeroBold, HeroElegant, HeroApproachable)

4. **Long-Term (Quarter 2):**
   - [ ] Measure success metrics (brand identity completion, visual distinctness, client satisfaction)
   - [ ] Consider premium tier: Full Figma design for high-budget clients ($15k+)
   - [ ] Explore AI personalization (Trend 1) for dynamic content variants

---

**Version:** 1.0
**Date:** November 10, 2025
**Investigation Lead:** Claude Code Agent System
**Specialist Squad:**
- Design Pattern Analyst
- Design Trend Researcher (November 2025)
- Workflow Systems Analyst
- Design Concept Generation Specialist

**Test Case:** Bigger Boss Website (sites/bigger-boss/)
**Status:** Investigation Complete, Ready for Implementation

---

## Related Documentation

- **Project Constitution:** `CLAUDE.md` (strategic vision, tech stack, architecture)
- **Workflow Guide:** `docs/COMPLETE_WORKFLOW_GUIDE.md` (8-phase development process)
- **Quick Start:** `docs/QUICK_START.md` (5-minute developer onboarding)
- **Client Onboarding:** `docs/CLIENT_ONBOARDING.md` (new client setup process)
- **Astro + Headless UI Guide:** `docs/ASTRO_HEADLESS_UI_GUIDE.md` (component library integration)

**Questions or Feedback:** Update this document as workflow evolves and design trends shift.
