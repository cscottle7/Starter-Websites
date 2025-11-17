# Complete Prompt: Build Bigger Boss Homepage

## Primary Design Reference

**CRITICAL:** Follow the creative meta-prompt as your design bible:
📄 **[sites/bigger-boss/Design/creative-meta-prompt.md](Design/creative-meta-prompt.md)**

This 500-line document contains complete specifications for all design decisions, content structure, and implementation guidelines.

---

## Quick Reference Summary

### Design System (from Meta-Prompt Section 1)

**Core Metaphor:** "Precision Engine"
- Deep Navy #0F2C59 = Engine casing (professional structure)
- Burnt Orange #D97642 = Engine heat (controlled energy)
- Success Green #36D399 = Precision gauges (quality metrics)
- Machined edges = 0.375-0.5rem border radius
- Engineered spacing = 5-6rem alternating section padding

**Grounding:** 100% traceable to brand keywords (Professional, Results-Driven, Data-Focused, Systematic, Fast, Transparent, Trustworthy)

### Typography (Meta-Prompt Section 6)

- **H1:** 56px (3.5rem), Weight 800, White on Navy
- **H2:** 40px (2.5rem), Weight 700, Navy on White
- **Body:** 16px (1rem), Weight 400, Text Primary #1A202C
- **Buttons:** 18px (1.125rem), Weight 700, White
- **Font:** Inter (400, 600, 700, 800) + IBM Plex Serif (testimonials)

### Anti-AI Design Constraints (Meta-Prompt Section 4)

1. ✅ **Spatial Rhythm:** 5rem/6rem alternating (NOT uniform 4rem)
2. ✅ **Intentional Asymmetry:** Icon positions cycle (left, center, right, left)
3. ✅ **Unexpected Hierarchy:** Metrics BEFORE CTA (data-first)
4. ✅ **Color Nuance:** Muted Orange #D97642 (NOT electric #FF6B35)
5. ✅ **Constraint-Driven Geometry:** Progressive radius 0.375-0.75rem

---

## Implementation Steps

### Step 1: Install Dependencies

```bash
cd sites/bigger-boss
pnpm install
pnpm add @fontsource/inter @fontsource/ibm-plex-serif
```

### Step 2: Configure Fonts

**File:** `sites/bigger-boss/src/layouts/BaseLayout.astro`

```astro
---
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/ibm-plex-serif/400.css';
import '@fontsource/ibm-plex-serif/400-italic.css';
import '@fontsource/ibm-plex-serif/600.css';
---
```

### Step 3: Verify Tailwind Config

**File:** `sites/bigger-boss/tailwind.config.cjs`

Should contain custom colors from meta-prompt Section 5:
- `navy`: #0F2C59
- `orange`: #D97642
- `blue`: #2E8BC0
- `green`: #36D399

### Step 4: Verify Components Exist

**Location:** `sites/bigger-boss/src/components/`

Required components (already implemented):
- ✅ Hero.astro
- ✅ ComparisonTable.astro
- ✅ DifferentiatorCards.astro
- ✅ AudienceCards.astro
- ✅ TestimonialCards.astro
- ✅ FinalCTA.astro

### Step 5: Create Homepage

**File:** `sites/bigger-boss/src/pages/index.astro`

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/Hero.astro';
import ComparisonTable from '../components/ComparisonTable.astro';
import DifferentiatorCards from '../components/DifferentiatorCards.astro';
import AudienceCards from '../components/AudienceCards.astro';
import TestimonialCards from '../components/TestimonialCards.astro';
import FinalCTA from '../components/FinalCTA.astro';
---

<BaseLayout
  title="Bigger Boss - Complete Marketing Strategies in 90 Minutes"
  description="AI-orchestrated research, strategy, and content planning with built-in compliance for Australian businesses. 85+ quality score guaranteed."
>
  <!-- Section 1: Hero (Meta-Prompt Section 6, Page 248-270) -->
  <Hero
    title="Complete Marketing Strategies in 90 Minutes"
    subtitle="AI-orchestrated research, strategy, and content planning with built-in compliance for Australian businesses. 85+ quality score guaranteed."
  />

  <!-- Section 2: Value Proposition Comparison (Meta-Prompt Section 6, Page 272-306) -->
  <ComparisonTable />

  <!-- Section 3: Primary Differentiators (Meta-Prompt Section 6, Page 308-353) -->
  <DifferentiatorCards />

  <!-- Section 4: Audience Segmentation (Meta-Prompt Section 6, Page 355-376) -->
  <AudienceCards />

  <!-- Section 5: Trust Signals (Meta-Prompt Section 6, Page 378-408) -->
  <TestimonialCards />

  <!-- Section 6: Final CTA (Meta-Prompt Section 6, Page 410-425) -->
  <FinalCTA />
</BaseLayout>
```

---

## Content Source (Meta-Prompt Section 6)

**Reference Document:** `sites/bigger-boss/Content/homepage.md`

### Section 1: Hero Content (Lines 248-270)

**Eyebrow:** "AI MARKETING STRATEGIES • AUSTRALIAN B2B"
**H1:** "Complete Marketing Strategies in 90 Minutes"
**Subheadline:** "AI-orchestrated research, strategy, and content planning with built-in compliance for Australian businesses. 85+ quality score guaranteed."

**Metrics Row:**
1. **90 MIN** (vs 8-12 Weeks)
2. **85+** (Quality Score)
3. **100%** (AHPRA/ASIC Compliant)

**Primary CTA:** "Join Beta Waitlist"
**Secondary CTA:** "Watch 3-Minute Demo →"
**Trust Signals:** "✓ AHPRA/ASIC Compliant | ✓ 30-Day Guarantee | ✓ Australian-Owned"

### Section 2: Comparison Table (Lines 272-306)

**Eyebrow:** "NOT ANOTHER AI CONTENT TOOL"
**H2:** "A Complete Marketing Strategy System"

**Table Comparison:**
| Feature | Agencies | AI Tools | ChatGPT | Bigger Boss |
|---------|----------|----------|---------|-------------|
| Delivery | 8-12 weeks | Ongoing | 40-60 hours | **90 minutes** |
| Cost | $15-35k | $99-499/mo | $0-20/mo | **$2,997-8,997** |
| Research | Variable | Manual | Your expertise | **Comprehensive** |
| Quality | Inconsistent | None | Your responsibility | **85+ score** |
| Compliance | +$2k extra | Your risk | Your risk | **Built-in** |

### Section 3: Differentiators (Lines 308-353)

1. **⚡ Same-Day Delivery**
   - "90 minutes vs 8-12 weeks"
   - "Complete marketing strategies delivered under 2 hours"

2. **✓ 85+ Quality Score Guaranteed**
   - "87-91/100 average"
   - "4-persona automated review system"

3. **🏛️ Built-In Compliance**
   - "100% compliance record"
   - "AHPRA, ASIC, Law Society frameworks"

4. **💰 Up to 85% Cost Savings**
   - "$2,997-8,997 vs $15-35k"
   - "Scale to 50+ clients without hiring"

### Section 4: Audiences (Lines 355-376)

1. **🏢 Digital Marketing Agencies**
2. **💼 In-House Marketing Teams**
3. **⚕️ Professional Services** (AHPRA/ASIC)
4. **🔍 SEO Consultancies**

### Section 5: Testimonials (Lines 378-408)

1. **Marcus T.** - Agency Owner
   - "542% capacity increase"
   - ⭐⭐⭐⭐⭐

2. **Jennifer L.** - Marketing Manager
   - "$51,003 saved"
   - ⭐⭐⭐⭐⭐

3. **Dr. Amanda P.** - Medical Specialist
   - "327% patient enquiry increase"
   - ⭐⭐⭐⭐⭐

**Metrics Showcase:**
"50+ Projects | 100% Compliance | 87-91 Avg Score | <2 Hours Delivery"

### Section 6: Final CTA (Lines 410-425)

**H2:** "Ready to Deliver Marketing Strategies 16x Faster?"
**Subheadline:** "Book a 20-minute discovery call. See sample deliverables. No obligation."

**Primary CTA:** "Book Your Free Strategy Assessment"
**Secondary CTA:** "Download: 'The Agency Scalability Playbook' (17-page guide) →"
**Trust Signals:** "✓ No credit card | ✓ 30-day guarantee | ✓ 85+ quality guaranteed | ✓ Australian-owned"

---

## Build & Preview

```bash
cd sites/bigger-boss
pnpm dev
# Visit http://localhost:4321
```

---

## Quality Verification Checklist

**Before marking complete, verify:**

### Design System (Meta-Prompt Section 1)
- [ ] Deep Navy #0F2C59 used for hero/footer backgrounds
- [ ] Burnt Orange #D97642 used for CTAs and metrics
- [ ] Inter font loaded (400, 600, 700, 800 weights)
- [ ] IBM Plex Serif loaded for testimonials

### Anti-AI Constraints (Meta-Prompt Section 4)
- [ ] Section padding alternates 5rem/6rem (NOT uniform)
- [ ] Differentiator icons alternate positions (left, center, right, left)
- [ ] Hero shows metrics BEFORE CTA button
- [ ] Orange is muted #D97642 (NOT electric #FF6B35)
- [ ] Border radius varies: 0.375rem (buttons), 0.5rem (cards), 0.75rem (containers)

### Accessibility (Meta-Prompt Page 469-485)
- [ ] White on Navy: 14.5:1 contrast ✅
- [ ] Orange on White: Only used for ≥18px text ⚠️
- [ ] All buttons ≥44x44px touch targets
- [ ] Focus rings visible on all interactive elements
- [ ] Proper heading hierarchy (single H1)

### Content (Meta-Prompt Section 6)
- [ ] All 6 sections present and in order
- [ ] Content matches meta-prompt specifications
- [ ] Metrics accurate (90 MIN, 85+, 100%)
- [ ] Trust signals present in Hero and Final CTA

### Responsive (Meta-Prompt Page 462-467)
- [ ] Mobile: H1 reduces to 40px
- [ ] Mobile: Tables become stacked cards
- [ ] Mobile: 4-column grids become 1-column
- [ ] Tablet: 4-column grids become 2-column

### Performance
- [ ] Build completes without errors
- [ ] No console errors in browser
- [ ] Images optimized (if any)
- [ ] Fonts loaded correctly

---

## Reference Documents

**Primary Design Bible:**
📄 [sites/bigger-boss/Design/creative-meta-prompt.md](Design/creative-meta-prompt.md) ← **READ THIS FIRST**

**Supporting Documentation:**
- 📊 [Design System Tokens](Design/SOFTENED_BOLD_DESIGN_SYSTEM.md)
- 📋 [Concept Summary](Design/SOFTENED_BOLD_CONCEPT_SUMMARY.md)
- ✅ [Quality Gate Report](Design/grounding-report.md) - 98.6% grounding rate
- 📝 [Content Source](Content/homepage.md)
- 🎨 [2025 Design Research](Research/VISUAL_RESEARCH_2025.md)
- 🖼️ [Screenshots](Research/) - 8 design examples from Dribbble/Awwwards

**Component Implementation:**
- 📂 [Implementation Notes](.claude/agents/design/creative/outputs/bigger-boss/implementation-notes.md)

---

## Expected Outcome

A production-ready homepage that:
- ✅ **Grounding:** 98.6% design decisions traceable to brand keywords
- ✅ **Differentiation:** 75% unique vs. Stripe/Vercel/Linear
- ✅ **Accessibility:** WCAG 2.1 AA compliant
- ✅ **Anti-AI:** 5/5 creative constraints implemented
- ✅ **Performance:** Core Web Vitals "Good" target
- ✅ **2025 Trends:** Validated against current B2B SaaS best practices

---

## Troubleshooting

**Components don't exist?**
- Check: `sites/bigger-boss/src/components/`
- Fallback: Component code in `.claude/agents/design/creative/outputs/bigger-boss/implementation-notes.md`

**Tailwind config missing?**
- Check: `sites/bigger-boss/tailwind.config.cjs`
- Reference: Lines 1-50 in `Design/SOFTENED_BOLD_DESIGN_SYSTEM.md`

**Colors look wrong?**
- Verify Navy #0F2C59 (NOT #0A2540)
- Verify Orange #D97642 (NOT #FF6B35)
- Reference: Meta-prompt Section 5, Lines 170-195

**Typography too bold/light?**
- H1 should be Inter 800 at 56px
- Body should be Inter 400 at 16px
- Reference: Meta-prompt Section 6, Lines 440-443

---

**Version:** 1.0
**Date:** November 18, 2025
**Status:** Ready for implementation
**Quality Gate:** PASSED (98.6% grounding rate)
