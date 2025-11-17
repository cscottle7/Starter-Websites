# Bigger Boss - 3 Homepage Concepts Implementation

**Project:** Build 3 A/B Testable Homepage Designs
**Timeline:** 3 weeks development + 4-6 weeks A/B testing
**Current Status:** Phase 0 (Planning Complete)
**Reference:** See `Design/IMPLEMENTATION_PLAN.md` for detailed specifications

---

## Task Dependency Graph

```
PHASE_1_ASSETS
  ├─> PHASE_2_COMPONENTS
  │     ├─> PHASE_3_CONCEPT_1
  │     ├─> PHASE_4_CONCEPT_2
  │     └─> PHASE_5_CONCEPT_3
  │           └─> PHASE_6_RESPONSIVE_A11Y
  │                 └─> PHASE_7_EMAIL_INTEGRATION
  │                       └─> PHASE_8_PERFORMANCE
  │                             └─> PHASE_9_AB_TESTING_SETUP
  │                                   └─> PHASE_10_QUALITY_LAUNCH
  │                                         └─> PHASE_11_AB_TESTING
```

---

## PHASE 1: Asset Generation & Setup

**Status:** `pending`
**Duration:** 2 days (6-8 hours)
**Blocking:** All subsequent phases

### Task 1.1: Generate AI Images
- **Type:** `manual` (requires Midjourney/DALL-E)
- **Priority:** `CRITICAL`
- **Deliverable:** All images in `sites/bigger-boss/public/images/`

**Image Requirements:**
- [ ] Hero images (3 concepts): 800x600px, 1920x1080px, 1200x1600px
- [ ] 4 persona avatars: 200x200px each (Sarah, Marcus, Jennifer, David)
- [ ] 3 compliance badges: 150x150px each (AHPRA, ASIC, Law Society)
- [ ] 5 core icons: 64x64px SVG (email, calendar, download, lightning, quality seal)

**Prompts:** Use `Design/IMAGE_PROMPTS.md`

### Task 1.2: Optimize & Organize Images
- **Type:** `automated`
- **Dependencies:** Task 1.1
- **Deliverable:** Optimized WebP images in organized directory structure

**Actions:**
```bash
# Compress and convert to WebP
# Create responsive versions (1x, 1.5x, 2x)
# Organize into /hero/, /personas/, /badges/, /icons/
```

---

## PHASE 2: Shared Component Library

**Status:** `pending`
**Duration:** 2 days (8-10 hours)
**Dependencies:** PHASE_1_ASSETS

### Task 2.1: Create Base Components
- **Type:** `development`
- **Location:** `sites/bigger-boss/src/components/shared/`

**Components to Build:**
- [ ] `Button.astro` - Primary/secondary/outline variants with 3 sizes
- [ ] `EmailCaptureForm.astro` - Inline/stacked layouts with validation
- [ ] `Section.astro` - Consistent spacing and container management
- [ ] `PersonaCard.astro` - 4-persona quality system display
- [ ] `Badge.astro` - Compliance/quality/trust badges
- [ ] `ComparisonTable.astro` - Responsive table (desktop) → cards (mobile)

**Acceptance Criteria:**
- All components use TypeScript interfaces
- Tailwind CSS styling (no custom CSS yet)
- Responsive across all breakpoints
- Accessible (ARIA attributes, keyboard navigation)

### Task 2.2: Create Layout Components
- **Type:** `development`
- **Location:** `sites/bigger-boss/src/layouts/`
- **Dependencies:** Task 2.1

**Deliverable:**
- [ ] `ConceptLayout.astro` - Base layout with SEO meta tags, concept-specific styling

---

## PHASE 3: Concept 1 - Data-Driven Authority

**Status:** `pending`
**Duration:** 3 days (8-10 hours)
**Dependencies:** PHASE_2_COMPONENTS

### Task 3.1: Build Concept 1 Page
- **Type:** `development`
- **File:** `sites/bigger-boss/src/pages/concept-1.astro`
- **Design:** McKinsey aesthetic, analytics-heavy, comparison table emphasis

**Sections (10 total):**
1. [ ] Hero Section (60/40 split: left content, right dashboard image)
2. [ ] Comparison Table (5 columns: Bigger Boss vs Traditional Agency vs Freelancer vs DIY)
3. [ ] 4-Persona Quality System (4-column grid with PersonaCard components)
4. [ ] Sample Deliverable Preview (screenshot + expandable TOC)
5. [ ] ROI Calculator (interactive sliders with real-time calculation)
6. [ ] Compliance Trust Section (3-column badges: AHPRA/ASIC/Law Society)
7. [ ] Audience Segmentation (3 expandable cards: Agency/Corporate/Professional Services)
8. [ ] Beta Program Section (dark navy background, full form, progress bar)
9. [ ] Founder Credibility Section (40/60 photo/bio split)
10. [ ] Sticky Footer Email Capture (appears after 50% scroll)

**Acceptance Criteria:**
- Fully responsive (mobile → tablet → desktop)
- All images loaded from `/public/images/`
- EmailCaptureForm integrated
- Accessible (WCAG 2.1 AA)

**Reference:** `Design/HOMEPAGE_CONCEPTS.md` → Concept 1 specifications

---

## PHASE 4: Concept 2 - Sophisticated Simplicity

**Status:** `pending`
**Duration:** 2 days (6-8 hours)
**Dependencies:** PHASE_2_COMPONENTS

### Task 4.1: Build Concept 2 Page
- **Type:** `development`
- **File:** `sites/bigger-boss/src/pages/concept-2.astro`
- **Design:** Stripe-inspired minimalism, 60-70% white space, large typography

**Sections (7 total - SIMPLER than Concept 1):**
1. [ ] Hero Section (full-width centered, pure typography, no imagery)
2. [ ] Three-Statement Value Proposition (vertically stacked, 120px spacing)
3. [ ] Minimalist Process Diagram (horizontal timeline, 4 steps, outline icons)
4. [ ] Single Sample Deliverable Teaser (one sentence + modal TOC on click)
5. [ ] Elegant Testimonial Placeholder (large quote mark, Playfair italic)
6. [ ] Beta Program Section (full-width dark navy, inline email form)
7. [ ] Minimal Footer (logo left, About right, copyright center)

**Acceptance Criteria:**
- Maximum minimalism (60-70% white space enforced)
- Playfair Display 64px headlines
- Single-column layout
- Faster build time than Concept 1 (less complexity)

**Reference:** `Design/HOMEPAGE_CONCEPTS.md` → Concept 2 specifications

---

## PHASE 5: Concept 3 - Human + AI Collaboration (RECOMMENDED)

**Status:** `pending`
**Duration:** 4 days (10-12 hours)
**Dependencies:** PHASE_2_COMPONENTS

### Task 5.1: Build Concept 3 Page
- **Type:** `development`
- **File:** `sites/bigger-boss/src/pages/concept-3.astro`
- **Design:** Balanced approach, 50/50 content-to-image ratio, human-centered trust

**Sections (12 total - MOST COMPREHENSIVE):**
1. [ ] Hero Section (50/50 split: left content, right professional photo)
2. [ ] Social Proof Section (3 testimonial-style personas: Marcus/Jennifer/David)
3. [ ] 4-Persona Quality System (illustrated avatars, 90/100 progress circle)
4. [ ] Process Transparency Section (4-phase workflow with flowing arrows)
5. [ ] Sample Deliverable Section (5 tabs: Executive/Audience/Competitive/Content/Compliance)
6. [ ] Audience Segmentation (3 expandable cards with detailed content)
7. [ ] Compliance Trust Section (3-column badges with guarantees lists)
8. [ ] Beta Program Section (dark navy, 6 benefits, full 5-field form, urgency elements)
9. [ ] FAQ Section (6 questions, expandable accordion format)
10. [ ] Founder Credibility Section (40/60 photo/bio, credentials, LinkedIn badge)
11. [ ] Final CTA Section (dual CTA: Beta + Sample)
12. [ ] Comprehensive Footer (4-column grid: About/Quick Links/Resources/Contact)

**Acceptance Criteria:**
- Most comprehensive (ready for real testimonial replacement)
- Human-centered trust building throughout
- Broadest persona appeal
- Interactive elements (tabs, accordions, expandable cards)

**Reference:** `Design/HOMEPAGE_CONCEPTS.md` → Concept 3 specifications (RECOMMENDED)

---

## PHASE 6: Responsive & Accessibility Testing

**Status:** `pending`
**Duration:** 2 days (4-6 hours)
**Dependencies:** PHASE_3_CONCEPT_1, PHASE_4_CONCEPT_2, PHASE_5_CONCEPT_3

### Task 6.1: Responsive Testing
- **Type:** `qa`
- **Scope:** All 3 concepts

**Breakpoints:**
- [ ] Mobile: 375px (iPhone SE), 414px (iPhone 12)
- [ ] Tablet: 768px (iPad), 834px (iPad Pro portrait)
- [ ] Desktop: 1024px, 1280px, 1440px, 1920px

**Checklist (per concept):**
- [ ] Hero sections stack properly on mobile
- [ ] Navigation collapses to hamburger
- [ ] Email forms adapt (inline → stacked)
- [ ] Tables convert to cards/scroll on mobile
- [ ] Images scale without overflow
- [ ] Typography scales appropriately
- [ ] Buttons remain tappable (44x44px touch targets)
- [ ] White space adjusts per breakpoint

**Tools:** Chrome DevTools, BrowserStack

### Task 6.2: Accessibility Audit
- **Type:** `qa`
- **Standard:** WCAG 2.1 AA compliance
- **Dependencies:** Task 6.1

**Checklist (per concept):**
- [ ] Color contrast: 4.5:1 minimum (text), 3:1 (large text)
- [ ] Keyboard navigation: all elements accessible, logical tab order, visible focus
- [ ] Screen reader: descriptive alt text, form labels, ARIA attributes, semantic HTML
- [ ] Form accessibility: required field indicators, error messages, autocomplete
- [ ] Content structure: heading hierarchy (single H1), landmarks, proper lists

**Tools:**
- axe DevTools (Chrome extension)
- WAVE (Web Accessibility Evaluation Tool)
- Lighthouse accessibility audit
- Manual: NVDA or VoiceOver testing

**Acceptance:** 0 critical violations, Lighthouse Accessibility score 100

---

## PHASE 7: Email Capture Integration

**Status:** `pending`
**Duration:** 1 day (2-4 hours)
**Dependencies:** PHASE_6_RESPONSIVE_A11Y

### Task 7.1: Setup Email Service Provider
- **Type:** `integration`
- **Provider:** ConvertKit (recommended) or Mailchimp

**Actions:**
1. [ ] Create ConvertKit account (free up to 1,000 subscribers)
2. [ ] Create form: "Bigger Boss Beta Waitlist"
3. [ ] Add custom fields: Name, Company, Industry, Primary Pain Point
4. [ ] Get API key and form ID
5. [ ] Add credentials to `.env` file
6. [ ] Integrate EmailCaptureForm.astro with API

**Integration Code Location:**
- `sites/bigger-boss/src/components/shared/EmailCaptureForm.astro`
- Add client-side form submission script
- Handle success/error states

### Task 7.2: Create Thank You Page
- **Type:** `development`
- **File:** `sites/bigger-boss/src/pages/thank-you.astro`
- **Dependencies:** Task 7.1

**Content:**
- Headline: "You're on the List!"
- Confirmation message
- Next steps (3 items)
- Lead magnet CTA: "Download Sample Strategy"
- Social sharing options

**Acceptance:** Redirects successfully after form submission

---

## PHASE 8: Performance Optimization

**Status:** `pending`
**Duration:** 1 day (3-4 hours)
**Dependencies:** PHASE_7_EMAIL_INTEGRATION
**Target:** <3 seconds load time

### Task 8.1: Optimize All 3 Concepts
- **Type:** `optimization`

**Checklist (per concept):**
- [ ] Image optimization: compressed (<200KB large, <50KB avatars), WebP format, lazy loading, responsive srcset
- [ ] Code splitting: critical CSS inlined, non-critical CSS deferred, JS async
- [ ] Caching strategy: static assets (1 year), HTML (1 hour)
- [ ] Font optimization: self-hosted, font-display: swap, subsetted, max 2-3 families
- [ ] Minification: HTML/CSS/JS minified, Tailwind purge enabled

**Tools:**
- Lighthouse (Chrome DevTools)
- PageSpeed Insights
- WebPageTest
- Astro build analyzer

**Acceptance:**
- All 3 concepts load <3s on 3G connection
- Lighthouse Performance score >90
- Core Web Vitals "Good" (LCP <2.5s, FID <100ms, CLS <0.1)

---

## PHASE 9: A/B Testing Setup

**Status:** `pending`
**Duration:** 1 day (3 hours)
**Dependencies:** PHASE_8_PERFORMANCE

### Task 9.1: Create Comparison Page
- **Type:** `development`
- **File:** `sites/bigger-boss/src/pages/compare.astro`

**Purpose:** Side-by-side preview for stakeholder review

**Layout:**
- 3-column grid (desktop) with thumbnails
- Click to view full concept in modal/new tab
- Quick stats per concept (sections, complexity, load time)
- User preference survey form

**Content:**
```
Concept 1: Data-Driven Authority
- 10 sections | Analytics-heavy | Best for: Analytical buyers
[Preview] [View Full]

Concept 2: Sophisticated Simplicity
- 7 sections | Minimalist design | Best for: Premium seekers
[Preview] [View Full]

Concept 3: Human + AI Collaboration (RECOMMENDED)
- 12 sections | Balanced approach | Best for: Broadest appeal
[Preview] [View Full]
```

### Task 9.2: Analytics Setup
- **Type:** `integration`
- **Dependencies:** Task 9.1

**Google Analytics 4:**
1. [ ] Create GA4 property
2. [ ] Add tracking code to ConceptLayout.astro
3. [ ] Set up custom events:
   - Beta form submissions
   - Sample deliverable downloads
   - Concept page views
   - Scroll depth (25%, 50%, 75%, 100%)
   - CTA clicks

**Deliverable:** Analytics tracking active on all 3 concepts

---

## PHASE 10: Quality Gates & Launch

**Status:** `pending`
**Duration:** 2 days (4-6 hours)
**Dependencies:** PHASE_9_AB_TESTING_SETUP

### Task 10.1: Pre-Launch Quality Checklist

**Technical Quality:**
- [ ] All 3 concepts build successfully (`pnpm build`)
- [ ] No TypeScript errors (`astro check`)
- [ ] No linting errors (`pnpm lint`)
- [ ] All images loading correctly
- [ ] Forms submitting to email provider
- [ ] Thank you page redirecting properly

**Content Quality:**
- [ ] All placeholder content replaced with final copy
- [ ] Typos and grammar checked (Grammarly)
- [ ] Links functional (no 404s)
- [ ] Meta descriptions present (<160 characters)
- [ ] Open Graph tags for social sharing

**Performance Quality:**
- [ ] Lighthouse Performance score >90 (all 3 concepts)
- [ ] Core Web Vitals "Good" (all 3 concepts)
- [ ] Mobile page speed <3 seconds
- [ ] Desktop page speed <2 seconds

**Accessibility Quality:**
- [ ] Lighthouse Accessibility score 100 (all 3 concepts)
- [ ] WAVE errors: 0
- [ ] axe DevTools violations: 0
- [ ] Manual keyboard navigation test passed
- [ ] Manual screen reader test passed

**Cross-Browser Quality:**
- [ ] Chrome (Windows, Mac, Android)
- [ ] Safari (Mac, iOS)
- [ ] Firefox (Windows, Mac)
- [ ] Edge (Windows)

**Acceptance:** ALL quality gates passed

### Task 10.2: Deployment
- **Type:** `deployment`
- **Dependencies:** Task 10.1

**Steps:**
1. [ ] Build all 3 concepts: `pnpm build`
2. [ ] Test locally: `pnpm preview`
3. [ ] Verify all routes:
   - http://localhost:4321/concept-1
   - http://localhost:4321/concept-2
   - http://localhost:4321/concept-3
   - http://localhost:4321/compare
   - http://localhost:4321/thank-you
4. [ ] Deploy to hosting (Vercel/Netlify/own server)
5. [ ] DNS configuration (point domain, SSL certificate)

**Post-Deployment Verification:**
- [ ] All 3 concepts accessible via URLs
- [ ] Forms submitting successfully
- [ ] Images loading from CDN/server
- [ ] Analytics tracking active
- [ ] SSL certificate valid

**Deliverable:** All 3 concepts LIVE at production URLs

---

## PHASE 11: A/B Testing Execution

**Status:** `pending`
**Duration:** 4-6 weeks
**Dependencies:** PHASE_10_QUALITY_LAUNCH

### Task 11.1: Traffic Split Setup
- **Type:** `configuration`

**Option A: Google Optimize (Free)**
- Create A/B/C test experiment
- Traffic split: 33% Concept 1 | 33% Concept 2 | 34% Concept 3
- Primary goal: Beta form submissions
- Secondary goals: Scroll depth, time on page, sample downloads

**Option B: Custom Routing (Astro Middleware)**
- Implement random variant assignment
- Store variant in cookie for consistency
- Track variant in analytics

### Task 11.2: Data Collection & Analysis
- **Type:** `monitoring`
- **Duration:** 4-6 weeks
- **Dependencies:** Task 11.1

**Metrics to Track:**

**Primary (Conversion):**
- Email signup conversion rate (target: 5-10%)
- Beta form completion rate (target: 80% of signups)
- Time to conversion

**Secondary (Engagement):**
- Average time on page (target: >2 minutes)
- Scroll depth (target: >75% reach beta section)
- Sample deliverable downloads (target: 20-30%)
- Bounce rate (target: <50%)

**Sample Size Target:**
- Minimum 100 visitors per concept
- Minimum 30 conversions total
- 4-6 week test duration

**Analysis Plan:**
- Weekly reports (Monday morning)
- Statistical significance calculator (95% confidence)
- Winner declaration criteria:
  - >10% conversion rate improvement AND
  - >100 visitors per variant AND
  - 95% statistical significance

**Deliverable:** Winning concept identified + data report

---

## Timeline Summary

### Week 1: Assets & Foundation
- **Days 1-2:** PHASE 1 - Asset generation
- **Days 3-4:** PHASE 2 - Component library
- **Days 5-7:** PHASE 3 - Concept 1

### Week 2: Concepts 2 & 3
- **Days 1-3:** PHASE 4 - Concept 2
- **Days 4-7:** PHASE 5 - Concept 3

### Week 3: Polish & Launch
- **Days 1-2:** PHASE 6 - Responsive & A11y testing
- **Day 3:** PHASE 7 - Email integration
- **Day 4:** PHASE 8 - Performance optimization
- **Day 5:** PHASE 9 - A/B testing setup
- **Days 6-7:** PHASE 10 - Quality gates & deployment

### Weeks 4-9: A/B Testing
- **Weeks 4-9:** PHASE 11 - Data collection & analysis
- **Week 10:** Winner selection & optimization

**Total Development:** 3 weeks (120-150 hours)
**Total Project:** 10 weeks (including A/B testing)

---

## Resource Requirements

### Human Resources
- **Lead Developer:** 120-150 hours over 3 weeks
- **Optional UI/UX Designer:** 8-10 hours (image generation, design QA)
- **Optional Copywriter:** 4-6 hours (final copy refinement)

### Tools & Services
- **AI Image Generation:** $50-100 (Midjourney or DALL-E)
- **Email Provider:** Free tier (ConvertKit <1,000 subscribers)
- **Hosting:** Free (Vercel) or $20/month (Netlify)
- **Analytics:** Free (Google Analytics 4)
- **A/B Testing:** Free (Google Optimize or custom)

**Total Budget:** $50-200 (primarily image generation)

---

## Success Criteria

### Technical Success
- ✅ All 3 concepts fully functional
- ✅ <3 second load times (all concepts)
- ✅ WCAG 2.1 AA compliant (all concepts)
- ✅ 0 TypeScript/linting errors
- ✅ Lighthouse Performance >90, Accessibility 100

### Business Success
- 🎯 5-10% email signup conversion rate
- 🎯 50+ qualified beta waitlist signups
- 🎯 20-30% sample deliverable downloads
- 🎯 >2 minute average time on page
- 🎯 Statistically significant A/B test results (95% confidence)

---

## Current Status

**Completed:**
- ✅ Content strategy documented (`Content/homepage.md`)
- ✅ 3 design concepts documented (`Design/HOMEPAGE_CONCEPTS.md`)
- ✅ Implementation plan created (`Design/IMPLEMENTATION_PLAN.md`)
- ✅ Image prompts documented (`Design/IMAGE_PROMPTS.md`)
- ✅ Astro 5.0 + Nx + Tailwind infrastructure set up
- ✅ Sveltia CMS configured
- ⚠️ **PARTIAL:** One hybrid homepage exists (not 3 separate concepts)

**Next Immediate Action:**
- **START PHASE 1:** Generate AI images using `Design/IMAGE_PROMPTS.md`

**Orchestrator Recommendation:**
Execute phases sequentially. Each phase must complete before next begins (dependencies enforced).

---

**Document Version:** 1.0
**Created:** 2025-11-08
**Format:** BiggerBoss task_deps.md compatible
**Owner:** Development Team
**Orchestrator:** @workflow-orchestrator
