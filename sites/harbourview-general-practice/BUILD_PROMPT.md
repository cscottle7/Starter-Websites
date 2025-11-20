# Build Prompt: Harbourview General Practice Homepage

## Phase 6: Implementation - Design Implementation Specialist

---

## Task Overview

You are the **design-implementation-specialist** agent. Your task is to translate the approved creative meta-prompt into production-ready Astro components with Tailwind CSS for Harbourview General Practice homepage.

---

## Input Files (All Located in sites/harbourview-general-practice/)

### 1. Creative Direction
**File:** `creative-meta-prompt.md`
- **Section 1:** Core Creative Metaphor ("The Safe Harbour")
- **Section 2:** User problems to solve
- **Section 3:** Value proposition
- **Section 4:** AHPRA compliance constraint (maritime language solution)
- **Section 5:** Mood board (7 visual references)
- **Section 6:** 8 detailed homepage sections with Tailwind code examples
- **Section 7:** Anti-AI Design Checklist (5 constraints)

### 2. Visual Framework
**File:** `Design/metaphor-framework.yml`
- Color palette with Tailwind classes
- Spatial rhythm specifications
- Typography hierarchy
- Component metaphors
- Anti-AI constraints
- 100% grounding rate (14/14 elements traced)

### 2.5. Mood Board Screenshots
**Directory:** `Design/mood-board/`

Visual research captured from approved design examples:

1. **01-dribbble-skincare-coach.png** - Clean, modern medical aesthetic with warm color palette
2. **02-magnolia-practice-homepage.png** - Organic shapes, soft rounded corners, calming neutral palette
3. **03-saban-community-clinic.png** - Community-centered messaging, multilingual elements, accessible information architecture
4. **04-crgh-fertility.png** - Trust indicators, professional photography, clean minimalist layout
5. **05-dribbble-dermatologist-branding.png** - Coastal color palette with deep blues, sandy neutrals, coral accents
6. **06-montecito-wellness.png** - Holistic wellness aesthetic, sophisticated beige palette, elegant typography
7. **07-dribbble-skin-template.png** - Modern dermatology template, clean layout, strong CTAs

These screenshots informed the Safe Harbour metaphor, color palette (deep blues, coastal coral, sandy neutrals), and spatial rhythm design decisions.

### 3. Content Source
**File:** `Content/homepage_final_content.md`
- All written content for homepage sections
- Headlines, body copy, CTAs
- Service descriptions
- Team bios

### 4. Brand Context
**File:** `BRAND_GUIDELINES.md`
- Brand values: patient-centred, experienced, accessible, community, compassionate, modern, multilingual
- 80 years of community care
- Multilingual capability (7+ languages)

---

## Your Implementation Task

### Required Outputs

Create the following Astro components in `sites/harbourview-general-practice/src/components/`:

1. **Hero.astro** - Harbour entrance metaphor
   - Deep ocean blue gradient background (`bg-gradient-to-br from-blue-900 to-blue-700`)
   - Intentional asymmetry (content positioned at 33% left margin)
   - Dual CTAs (primary coral, secondary outline)
   - Organic wave SVG transition

2. **Problem.astro** - Storm before harbour (optional section)
   - Two-column asymmetric layout (3 cols problem, 4 cols solution)
   - Warm coral for problems, calming blue for solutions
   - Tilted background shapes

3. **ServicesGrid.astro** - Mooring berths metaphor
   - Asymmetric grid (`grid-cols-1 md:grid-cols-5 lg:grid-cols-9`)
   - Varying column spans for each service card
   - Spatial rhythm variation (gap-y-8/12/20)
   - Maritime icons (anchor, compass, etc.)

4. **BookingCTA.astro** - Drop anchor metaphor
   - Deep blue background with subtle anchor illustration
   - Prominent coral CTA positioned bottom-right (unconventional)
   - Trust indicators: 24/7 booking, appointments within days, bulk billing

5. **Team.astro** - Harbourmasters metaphor
   - Asymmetric grid (lg:grid-cols-7)
   - Varying card sizes
   - Multilingual badges with flag emojis
   - Color nuance (4-5 blue/stone shades)

6. **MultilingualWelcome.astro** - International port metaphor
   - Split-screen layout
   - Non-English text LARGER than English (unexpected hierarchy)
   - Flag emojis + welcome in 7 languages
   - Patient testimonial integration

7. **Testimonials.astro** - Safe passage stories
   - Masonry layout with varied heights
   - Emotional keywords highlighted in coral
   - Google review star ratings
   - Intentional asymmetry (tall/medium/short pattern)

8. **TrustFooter.astro** - Safe waters final reassurance
   - Trust badges section (80 years, AHPRA, bulk billing, multilingual, online booking)
   - Wave separator SVG
   - Deep blue footer with organized columns
   - Coral accent on links

---

## Implementation Requirements

### Apply Anti-AI Design Checklist

Ensure all 5 constraints are implemented:

1. **Intentional Asymmetry**
   - Hero content at 33% left margin (not centered)
   - Services grid irregular column spans
   - Testimonials masonry varied heights

2. **Unexpected Hierarchy**
   - Multilingual section: non-English text larger than English
   - Testimonials: larger text than standard subheadings

3. **Constraint Creativity**
   - Maritime language throughout (guide/navigate/support NOT cure/fix)
   - Trust badges elevated to beautiful design elements

4. **Color Nuance**
   - Use 4-5 shades per section (bg-stone-50, text-stone-600, text-blue-900, bg-blue-100, border-blue-200)
   - Three blues: deep (blue-900), calm (blue-600), sky (blue-300)

5. **Spatial Rhythm Variation**
   - Alternating vertical spacing (py-16, py-24, py-32)
   - Varied gap spacing (gap-y-8/12/20)

### Tailwind Color Palette

Use these exact Tailwind classes from metaphor-framework.yml:

**Blues:**
- `bg-blue-900`, `bg-blue-800` (harbour deep blue)
- `bg-blue-600`, `bg-blue-500` (calm water blue)
- `bg-blue-100`, `bg-blue-50` (sky reflection)

**Corals:**
- `bg-orange-400`, `text-orange-400` (coastal coral)
- `border-orange-400`, `hover:bg-orange-300`

**Neutrals:**
- `bg-stone-50`, `bg-stone-100` (sandy neutral)
- `text-stone-600`, `text-stone-700`, `text-stone-900`

### Typography Scale

```
H1: text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight
H2: text-4xl md:text-5xl font-bold
H3: text-2xl md:text-3xl font-semibold
Body: text-lg leading-relaxed
CTA: text-base md:text-lg font-semibold tracking-wide
```

### Spacing Rhythm (Tidal Variation)

```
Section 1 (Hero): py-20 md:py-32
Section 2 (Problem): py-20
Section 3 (Services): py-24
Section 4 (Booking CTA): py-24
Section 5 (Team): py-24
Section 6 (Multilingual): py-24
Section 7 (Testimonials): py-24
Section 8 (Trust/Footer): py-20
```

---

## Maritime Language Guidelines (AHPRA Compliance)

Replace outcome-based language with guidance metaphors:

❌ **Avoid:**
- "We cure"
- "We fix"
- "We solve"
- "Guaranteed results"
- "Get better faster"

✅ **Use:**
- "We guide your health journey"
- "We support you through"
- "Navigate with confidence"
- "Expert guidance for managing"
- "Comprehensive care at your pace"
- "Secure your berth"
- "Drop anchor with us"

---

## Component Structure Template

Each component should follow this Astro pattern:

```astro
---
// Imports
interface Props {
  // Props interface
}

const { propName } = Astro.props;
---

<section class="[tidal spacing] [background color]">
  <div class="container mx-auto px-6">
    <!-- Component content -->
    <!-- Apply metaphor framework -->
    <!-- Implement anti-AI constraints -->
  </div>
</section>
```

---

## Success Criteria

Your implementation passes when:

- ✅ All 8 components created in `src/components/`
- ✅ Tailwind classes match metaphor-framework.yml specifications
- ✅ All 5 Anti-AI Design Checklist constraints implemented
- ✅ Maritime language used throughout (no outcome claims)
- ✅ Intentional asymmetry in hero, services, testimonials
- ✅ Color nuance (4-5 shades) in team section
- ✅ Spatial rhythm variation (alternating py-16/24/32)
- ✅ Non-English text larger than English in multilingual section
- ✅ Organic wave SVG transitions between sections
- ✅ Components are modular and reusable

---

## Next Steps After Implementation

1. **Phase 7:** Invoke @metaphor-grounding-verifier for Gate 7 validation
2. **Phase 8:** Generate BUILD_PROMPT.md handoff (auto-generated)
3. **Production:** Integrate components into `src/pages/index.astro`

---

## Reference Files Location

All files are in `sites/harbourview-general-practice/`:

```
sites/harbourview-general-practice/
├── creative-meta-prompt.md          (Design brief - Section 6 has code examples)
├── Design/
│   └── metaphor-framework.yml       (Visual principles, color palette, constraints)
├── Content/
│   └── homepage_final_content.md    (All written content)
├── BRAND_GUIDELINES.md              (Brand values and context)
└── src/
    └── components/                  (Your output directory)
        ├── Hero.astro
        ├── Problem.astro
        ├── ServicesGrid.astro
        ├── BookingCTA.astro
        ├── Team.astro
        ├── MultilingualWelcome.astro
        ├── Testimonials.astro
        └── TrustFooter.astro
```

---

## Begin Implementation

Read the following files in order:

1. `creative-meta-prompt.md` (complete design brief)
2. `Design/metaphor-framework.yml` (visual framework)
3. `Content/homepage_final_content.md` (written content)

Then create all 8 Astro components following the Safe Harbour metaphor and Anti-AI Design Checklist.

**Important:** Every design decision must be traceable to either:
- metaphor-framework.yml (visual principles)
- creative-meta-prompt.md (section specifications)
- Anti-AI Design Checklist (constraints)

Document your implementation decisions in `Design/implementation-notes.md` for traceability.
