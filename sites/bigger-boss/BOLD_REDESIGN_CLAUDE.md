# Project Constitution: Bigger Boss Bold Archetype Visual Differentiation

---
## Part A: Strategic & Product Definition
---

### 1. The Press Release
*FOR IMMEDIATE RELEASE*

**Bigger Boss Redesign Establishes New Visual Standard for AI-First Development Platforms**

**Washington, DC** – Bigger Boss today unveils a comprehensive website redesign that visually demonstrates the platform's disruptive positioning in the multi-site development market. Through strategic application of the Bold archetype design system—featuring Deep Navy (#0A2540) and Electric Orange (#FF6B35) with Inter 900 typography—the new design achieves 70%+ visual differentiation from generic SaaS competitors while maintaining enterprise-grade accessibility and AI crawler optimization.

This redesign validates a hypothesis critical to the broader multi-site platform: that AI agents can autonomously drive design decisions when provided comprehensive research, mood boards, and pattern analysis. The project establishes a repeatable methodology for agent-driven design implementation that will scale across all client sites in the Bigger Boss portfolio.

"We're not just redesigning a website," explains the technical lead. "We're proving that Claude Code agents can analyze competitive positioning, extract design patterns from reference materials, and implement specifications that achieve quantifiable differentiation—all while meeting WCAG 2.1 AA accessibility standards and Core Web Vitals 'Good' scores."

The redesigned site serves dual purposes: a showcase of what the Bigger Boss platform delivers to clients, and a case study demonstrating the AI-first design workflow that makes sub-one-week launches possible. Every design decision is documented, validated against competitor benchmarks (Stripe, Vercel, Linear), and optimized for both human visitors and AI crawlers (GPTBot, ClaudeBot) through semantic HTML and comprehensive schema markup.

Target audience research confirms the Bold archetype resonates strongly with digital agency owners (5-15 person teams)—the platform's primary decision-makers. Post-launch validation will measure differentiation through agent-driven visual comparison and manual stakeholder review against established competitor references.

### 2. Customer FAQ

**Q: How is this different from yet another SaaS landing page?**
A: The Bold archetype creates immediate visual differentiation through three distinctive elements: (1) Deep Navy + Electric Orange color combination (vs. Stripe's purple, Vercel's monochrome, Linear's purple/blue), (2) Inter 900 (Black) typography weights for maximum impact, and (3) Sharp geometric edges (0.25rem border-radius) instead of rounded corners. These choices combine to create a 70%+ differentiation score when compared against competitor baselines.

**Q: Will the site still work on mobile devices?**
A: Absolutely. The Bold archetype is fully responsive with mobile-first breakpoints. DaisyUI components provide semantic responsive behavior, and all typography scales appropriately from 320px viewports to 4K displays. Touch targets meet minimum 44x44px standards for accessibility.

**Q: Is this design accessible for users with disabilities?**
A: Yes. Critical accessibility violations (color contrast, alt text, keyboard navigation) are fixed during implementation. The Deep Navy (#0A2540) background achieves WCAG AAA contrast ratio (8.8:1) against white text. Electric Orange (#FF6B35) CTAs maintain AA compliance (4.8:1 against white). All interactive elements are keyboard-accessible with visible focus indicators.

**Q: How does this design help with SEO and AI crawlers?**
A: The Bold archetype enhances, never compromises, technical SEO. Astro's server-side rendering ensures all content is accessible to AI crawlers (which ignore client-side JavaScript). Semantic HTML structure, JSON-LD schema markup, and proper heading hierarchy enable AI models to understand and cite content accurately. Visual boldness attracts human attention; clean semantic markup attracts AI indexing.

**Q: Can I see examples of the Bold archetype in action before committing?**
A: Yes. The research phase includes 15-20 curated visual examples with detailed pattern analysis. Mood boards demonstrate how color palettes, typography, and layout patterns create cohesive Bold archetype experiences. Implementation includes staging deployment for preview before production rollout.

### 3. Internal FAQ

**Q: Why prioritize visual differentiation over conversion optimization?**
A: This is a strategic showcase site, not a direct sales funnel. Primary goal is demonstrating platform capabilities to technical decision-makers (agency owners, technical leads) who evaluate tools based on innovation signals. Visual differentiation creates memorable positioning ("That navy and orange site with the bold typography") that sticks during evaluation cycles. Conversion optimization follows differentiation in priority hierarchy.

**Q: Why DaisyUI instead of custom components for a differentiation-focused project?**
A: DaisyUI provides the 80/20 foundation: production-grade accessibility, semantic classes, automatic theming. Differentiation comes from color palette, typography, layout composition—not reinventing button mechanics. We customize through Tailwind config (brand colors, font weights) and component composition (hero layouts, card arrangements). This approach validates the platform's value proposition: speed without compromising quality.

**Q: What if the research phase reveals Bold archetype is wrong for the target audience?**
A: Research includes audience validation—analyzing what resonates with digital agency owners (primary decision-makers). If research contradicts the Bold hypothesis, findings inform strategy adjustment. However, initial positioning (innovative, fast, AI-first platform) strongly suggests Bold alignment. Research either validates or refines, never wastes time.

**Q: How do we validate 70% differentiation quantitatively?**
A: Post-implementation validation compares Bigger Boss against three benchmarks (Stripe, Vercel, Linear) across six visual dimensions: (1) Color palette distinctiveness (Deep Navy + Electric Orange vs. their schemes), (2) Typography impact (Inter 900 vs. their weights), (3) Geometric styling (sharp vs. rounded), (4) Layout composition, (5) Visual hierarchy, (6) Overall brand memorability. Agent-driven analysis scores each dimension 0-100; 70%+ across dimensions = success threshold.

**Q: What's the rollback plan if stakeholders reject the Bold aesthetic?**
A: Git version control enables instant rollback. Current design preserved in `pre-bold-redesign` branch. Staging deployment enables preview before production merge. Stakeholder review gate in workflow ensures no surprises. If fundamental rejection occurs (unlikely given research-driven approach), pivot to refined current design or explore alternative archetypes based on specific feedback.

**Q: How does this project inform client site design workflows?**
A: This project establishes the agent-driven design methodology at scale: (1) Research with visual examples and mood boards, (2) Pattern extraction and design specification, (3) DaisyUI component mapping and customization, (4) Implementation via agent-executable specifications, (5) Validation against differentiation targets. Successful execution proves the workflow works, enabling replication across 10+ client sites with confidence.

**Q: What's the timeline from kickoff to production deployment?**
A: **Phase 1 (Research & Specification): 3-4 days** – Visual example curation (15-20 sites), mood board creation, pattern analysis, design specification documentation. **Phase 2 (Implementation): 4-5 days** – DaisyUI component selection, Tailwind config customization, page-by-page redesign, responsive refinement. **Phase 3 (Validation & Deployment): 1-2 days** – Agent validation, accessibility audit, stakeholder review, staging deployment, production merge. **Total: 8-11 calendar days** with focused effort.

**Q: What if implementation reveals DaisyUI can't achieve the Bold aesthetic?**
A: DaisyUI is highly customizable through Tailwind config—color theming, border radius, shadow depths all configurable. Bold archetype requires configuration, not component replacement. If specific components require customization beyond theming (hero layouts, card compositions), create client-specific variants in `sites/bigger-boss/src/components/` that extend DaisyUI base components. This is the designed workflow: DaisyUI foundation + client customization layer.

### 4. Project Goal & High-Level Requirements

**Jobs-to-be-Done (JTBD) Statement:**

When I need to visually position Bigger Boss as an innovative, AI-first multi-site development platform, I want a Bold archetype redesign driven by agent-analyzed research and implemented through DaisyUI component customization, so I can achieve 70%+ differentiation from generic SaaS competitors while validating the agent-driven design methodology for future client sites.

**Core Requirements:**

1. **Visual Differentiation (Primary Goal):**
   - Achieve 70%+ differentiation from competitor baselines (Stripe, Vercel, Linear)
   - Deep Navy (#0A2540) + Electric Orange (#FF6B35) color palette as primary differentiator
   - Inter 900 (Black) typography weights for maximum impact
   - Sharp geometric edges (0.25rem border-radius) vs. rounded competitor patterns
   - Validated through agent-driven visual comparison and manual stakeholder review

2. **Research-Driven Design Foundation:**
   - 15-20 curated visual examples of Bold archetype websites
   - Mood boards demonstrating color palette, typography, layout patterns
   - Pattern analysis extracting what makes each example "Bold" vs. "generic"
   - Competitive analysis identifying differentiation opportunities vs. Stripe/Vercel/Linear

3. **Agent-Executable Design Specification:**
   - Clear enough for implementation agents to build without human clarification
   - Specific DaisyUI component selections mapped to design requirements
   - Exact color values, font weights, spacing values, shadow depths
   - Responsive breakpoint specifications (mobile, tablet, desktop, large desktop)
   - Accessibility requirements integrated into specs (contrast ratios, touch targets)

4. **DaisyUI Component Integration:**
   - Leverage DaisyUI foundation for accessibility and semantic classes
   - Customize through Tailwind config (brand colors, typography, border radius)
   - Create client-specific component variants where needed for uniqueness
   - Maintain upgrade path to future DaisyUI versions (minimize breaking changes)

5. **Accessibility Compliance (Non-Negotiable):**
   - Fix critical violations: color contrast (WCAG AA minimum), alt text coverage
   - Keyboard navigation functional for all interactive elements
   - Visible focus indicators on buttons, links, form fields
   - Semantic HTML structure maintained (proper heading hierarchy)
   - Defer minor warnings (non-critical issues) for post-launch iteration

6. **Performance Maintenance:**
   - Core Web Vitals "Good" scores maintained post-redesign
   - LCP (Largest Contentful Paint): <2.5 seconds
   - FID (First Input Delay): <100 milliseconds
   - CLS (Cumulative Layout Shift): <0.1
   - No degradation from current performance baseline

### 5. Success Metrics & Measurement Plan

**Primary Success Metric: Visual Differentiation (Target: 70%+)**

**Measurement Methodology:**
- Compare Bigger Boss redesign against three competitor benchmarks: Stripe, Vercel, Linear
- Evaluate across six visual dimensions (scored 0-100 per dimension):
  1. **Color Palette Distinctiveness:** Deep Navy + Electric Orange vs. competitor schemes
  2. **Typography Impact:** Inter 900 (Black) weights vs. competitor font choices
  3. **Geometric Styling:** Sharp edges (0.25rem radius) vs. rounded corners
  4. **Layout Composition:** Hero structure, section spacing, card arrangements
  5. **Visual Hierarchy:** Contrast, scale, weight creating clear information architecture
  6. **Brand Memorability:** Overall aesthetic cohesion and recall ("That navy/orange site")

**Validation Process:**
- **Agent-Driven Analysis:** Design quality agent analyzes screenshots, scores each dimension
- **Manual Stakeholder Review:** Visual side-by-side comparison against competitor references
- **Pass Threshold:** 70%+ average score across all six dimensions

**Baseline Competitor Analysis (Pre-Implementation):**
- **Stripe:** Purple (#635BFF) + Rounded corners (0.5rem) + Inter 500-700 weights
- **Vercel:** Monochrome (Black/White) + Minimal design + Inter 400-600 weights
- **Linear:** Purple/Blue gradient + Rounded corners + Inter 500-700 weights

**Expected Differentiation Drivers:**
- Color palette: 90% differentiation (Deep Navy + Electric Orange unique vs. purple/monochrome)
- Typography: 80% differentiation (Inter 900 Black weights vs. their 400-700 range)
- Geometric styling: 75% differentiation (Sharp 0.25rem vs. their 0.5rem+ rounded)
- Layout: 60% differentiation (Bold hierarchy vs. their minimalist approach)
- Visual hierarchy: 70% differentiation (High contrast vs. subtle gradients)
- Brand memorability: 75% differentiation (Distinctive color combo + bold typography)
- **Projected Average: 75% differentiation**

---

**Secondary Success Metrics:**

**2. Accessibility Compliance (Target: WCAG 2.1 AA, Zero Critical Violations)**
- **Measurement:** Automated axe-core audits + manual keyboard navigation testing
- **Critical Fixes Required:**
  - Color contrast: All text meets 4.5:1 minimum (normal text), 3:1 (large text)
  - Alt text: 100% coverage for images
  - Keyboard navigation: All interactive elements accessible via Tab key
  - Focus indicators: Visible on all focusable elements
- **Validation:** Zero critical violations, <5 minor warnings acceptable
- **Baseline:** Current site has unknown accessibility status (audit during Phase 1)

**3. Performance Maintenance (Target: Core Web Vitals "Good" Maintained)**
- **Measurement:** Google PageSpeed Insights API, Lighthouse CI
- **Thresholds:**
  - LCP: <2.5 seconds (currently unknown, establish baseline)
  - FID: <100 milliseconds (currently unknown, establish baseline)
  - CLS: <0.1 (currently unknown, establish baseline)
- **Validation:** Post-redesign performance >= pre-redesign baseline
- **Risk Mitigation:** If performance degrades, identify bottleneck (font loading, image optimization, JavaScript bundle), optimize before production deployment

**4. Implementation Timeline (Target: 8-11 Calendar Days)**
- **Measurement:** Track actual vs. estimated days per phase
- **Phase 1 (Research):** 3-4 days budgeted vs. actual
- **Phase 2 (Implementation):** 4-5 days budgeted vs. actual
- **Phase 3 (Validation):** 1-2 days budgeted vs. actual
- **Success:** Complete within 11-day maximum threshold
- **Learning:** Document variance for future client site estimates

**5. Agent Autonomy (Target: 90%+ Implementation Without Human Intervention)**
- **Measurement:** Percentage of implementation tasks completed by agents vs. requiring human clarification/fixes
- **Baseline Assumption:** With comprehensive research and specifications, agents should execute 90%+ autonomously
- **Validation:** Track intervention points during Phase 2 implementation
- **Failure Analysis:** If <90%, identify specification gaps for methodology improvement

**6. Stakeholder Satisfaction (Target: Approval Without Major Revisions)**
- **Measurement:** Stakeholder review feedback during validation phase
- **Success Criteria:**
  - Differentiation validated against competitor references
  - Bold archetype aesthetic approved
  - Zero requests for "start over" level changes
  - Minor refinements acceptable (color tweaks, spacing adjustments)
- **Validation:** Written approval before production merge

### 6. Core Features & Scope

#### In Scope (for this Redesign Project)

**Phase 1: Research & Design Specification (Days 1-4)**

**Research Deliverables:**
- [ ] **Visual Example Library (15-20 Bold archetype websites)**
  - Screenshots with annotations identifying Bold characteristics
  - URL references for live site exploration
  - Pattern analysis: "What makes this Bold vs. generic?"
  - Mix of industries: SaaS, fintech, dev tools, design tools
  - Focus on visual impact, not functionality complexity

- [ ] **Mood Boards (3-4 Boards)**
  - **Color Palette Mood Board:** Deep Navy + Electric Orange examples across industries
  - **Typography Mood Board:** Inter 900 (Black) usage, heading hierarchies, font pairing
  - **Layout Pattern Mood Board:** Hero compositions, card layouts, section spacing
  - **Competitor Analysis Board:** Stripe/Vercel/Linear side-by-side for contrast identification

- [ ] **Pattern Extraction Document**
  - Bold archetype definition with visual examples
  - Color psychology: Why Deep Navy + Electric Orange creates "Bold" perception
  - Typography impact: Why Inter 900 weights signal confidence/innovation
  - Geometric choices: Why sharp edges (0.25rem) feel modern vs. rounded (0.5rem+) friendly
  - Layout principles: Generous spacing, high contrast, clear hierarchy

- [ ] **Competitive Differentiation Analysis**
  - Stripe analysis: Purple (#635BFF), rounded corners, Inter 500-700
  - Vercel analysis: Monochrome, minimalist, Inter 400-600
  - Linear analysis: Purple/blue gradient, rounded corners, Inter 500-700
  - Differentiation opportunities: Color uniqueness, typography boldness, geometric distinctiveness

**Design Specification Deliverables:**
- [ ] **Color System Specification**
  - Primary: Deep Navy `#0A2540` (usage: hero backgrounds, headers, primary buttons)
  - Secondary: Electric Orange `#FF6B35` (usage: CTAs, hover states, highlights)
  - Accent: Gold `#FFD700` (usage: badges, success indicators, premium elements)
  - Neutrals: Dark Gray `#2D3748`, Light Gray `#F7FAFC`, Gray `#E2E8F0`
  - Feedback colors: Success `#36D399`, Warning `#FBBD23`, Error `#F87272`, Info `#3ABFF8`
  - Contrast ratios documented for all text/background combinations

- [ ] **Typography System Specification**
  - Font stack: Inter (Google Fonts, weights 400/700/800/900)
  - Type scale: H1 (60-72px/3.75-4.5rem), H2 (48px/3rem), H3 (36px/2.25rem), H4 (24px/1.5rem), Body (18px/1.125rem), Small (14px/0.875rem)
  - Font weights: Headlines (900 Black), Subheadings (800 Extra Bold), Buttons (700 Bold), Body (400 Regular)
  - Line heights: Headlines (1.1 tight), Body (1.6 comfortable)
  - Responsive scaling: Mobile (<640px), Tablet (640-1024px), Desktop (1024px+)

- [ ] **Spacing System Specification**
  - Section padding: 6-8rem vertical (desktop), 4rem (tablet), 3rem (mobile)
  - Component padding: 2-3rem (desktop), 1.5rem (tablet), 1rem (mobile)
  - Element gaps: 1-2rem consistent throughout
  - Container max-width: 1280px (large desktop), 1024px (desktop), 100% (mobile)

- [ ] **Component Style Specification**
  - Border radius: 0.25rem (buttons, inputs), 0.5rem (cards, modals)
  - Shadow depths: Elevated (primary buttons), Hover (interactive states), Subtle (cards)
  - Animation timing: 0.2s duration, cubic-bezier(0.4, 0, 0.2, 1) easing
  - Hover states: transform scale(1.02), shadow elevation, color shifts

- [ ] **DaisyUI Component Mapping**
  - Hero component: Bold variant, full-width, centered content, dual CTAs
  - Button component: Primary (Electric Orange), Secondary (Deep Navy), Ghost (transparent)
  - Card component: Elevated shadow, 0.5rem border-radius, optional image
  - Section component: Primary (Deep Navy), Secondary (Electric Orange), Muted (Light Gray)
  - Typography components: Heading sizes, body text, captions

- [ ] **Page-by-Page Redesign Specifications**
  - **Homepage:** Hero + metrics bar + features grid + tech stack + use cases + final CTA
  - **About:** Company story + mission + team (if applicable) + values
  - **Services:** Feature deep-dives + pricing (if applicable) + testimonials
  - **Comparison:** Feature matrix vs. competitors + migration guide
  - Each page spec includes: layout wireframe, component selections, content guidance, accessibility notes

- [ ] **Responsive Breakpoint Strategy**
  - Mobile (<640px): Single-column layouts, stacked navigation, touch-optimized 44x44px targets
  - Tablet (640-1024px): Two-column where appropriate, collapsible navigation
  - Desktop (1024-1440px): Full multi-column layouts, persistent navigation
  - Large Desktop (>1440px): Constrained content width (1280px max), generous white space

- [ ] **Accessibility Requirements Documentation**
  - Color contrast targets: WCAG AA minimum (4.5:1 normal, 3:1 large text)
  - Keyboard navigation: All interactive elements Tab-accessible, visible focus indicators
  - Alt text: Descriptive text for all images, empty alt for decorative
  - Semantic HTML: Proper heading hierarchy (single H1, progressive H2-H6)
  - ARIA attributes: Labels for icon-only buttons, live regions for dynamic content

**Phase 2: Implementation (Days 5-9)**

- [ ] **Tailwind Configuration Customization**
  - Update `sites/bigger-boss/tailwind.config.cjs` with Bold archetype tokens
  - Color palette: primary, secondary, accent, neutrals
  - Typography: Inter font family, custom font weights (900, 800, 700)
  - Border radius: 0.25rem buttons, 0.5rem cards
  - Box shadows: elevated, hover, subtle variants
  - Spacing scale: consistent with specification

- [ ] **DaisyUI Theme Configuration**
  - Configure DaisyUI theme in Tailwind config
  - Map Bold archetype colors to DaisyUI semantic tokens (primary, secondary, accent, neutral)
  - Customize component variants: button sizes, card styles, hero layouts
  - Test theme across all DaisyUI components for consistency

- [ ] **Shared Component Customization**
  - Review `@workspace/ui-components` for Bold archetype compatibility
  - Create client-specific component variants in `sites/bigger-boss/src/components/` where needed
  - Extend base Hero component with Bold-specific styling
  - Extend base Card component with elevated shadows, sharp corners
  - Extend base Button component with Electric Orange primary variant

- [ ] **Page-by-Page Implementation**
  - **Homepage (`index.astro`):** Implement per specification
    - Hero: Bold variant, Inter 900 headline, dual CTAs
    - Metrics bar: Electric Orange numbers, bold typography
    - Features grid: 4-column layout (desktop), responsive collapse
    - Tech stack section: Deep Navy background, white text
    - Use cases: 3-column cards with icons
    - Final CTA: Electric Orange background, high contrast
  - **About page (`about.astro`):** Company story, mission, values
  - **Services page (`services.astro`):** Feature deep-dives, pricing
  - **Comparison page (`compare.astro`):** Feature matrix, migration guide
  - Each page: Semantic HTML, proper heading hierarchy, JSON-LD schema markup

- [ ] **Typography Implementation**
  - Google Fonts integration: Inter weights 400, 700, 800, 900
  - Apply font-display: swap for performance
  - Implement responsive type scale across breakpoints
  - Test heading hierarchy on all pages (single H1, progressive H2-H6)
  - Ensure line-height consistency (1.1 headlines, 1.6 body)

- [ ] **Responsive Refinement**
  - Test all layouts at 320px, 640px, 1024px, 1440px, 1920px viewports
  - Fix layout breakages, ensure content readability at all sizes
  - Verify touch targets meet 44x44px minimum on mobile
  - Test navigation collapse/expand behavior on tablet/mobile
  - Optimize image loading with responsive sizes, WebP format

- [ ] **Accessibility Implementation**
  - Fix color contrast violations identified in Phase 1 audit
  - Add/update alt text for all images (descriptive, not "image of...")
  - Ensure keyboard navigation works: Tab through all interactive elements
  - Add visible focus indicators (outline or ring) on buttons, links, form fields
  - Test with screen reader (NVDA or macOS VoiceOver) for major flows
  - Validate semantic HTML structure (nav, main, section, article, footer)

**Phase 3: Validation & Deployment (Days 10-11)**

- [ ] **Automated Quality Checks**
  - Run ESLint, Prettier across codebase
  - Run TypeScript type checking (strict mode)
  - Run Astro build to verify no build errors
  - Run Lighthouse CI for performance metrics
  - Run axe-core accessibility audit (zero critical violations)

- [ ] **Visual Differentiation Validation**
  - **Agent-Driven Analysis:** Design quality agent scores redesign vs. Stripe/Vercel/Linear
  - Six dimensions: color palette, typography, geometric styling, layout, hierarchy, memorability
  - Target: 70%+ average score across dimensions
  - Document scores in validation report

- [ ] **Manual Stakeholder Review**
  - Deploy to staging environment
  - Provide side-by-side comparison screenshots vs. competitors
  - Present differentiation validation scores
  - Collect stakeholder feedback (approve, request minor changes, request major changes)
  - Address feedback if within scope (color tweaks, spacing adjustments acceptable)

- [ ] **Performance Validation**
  - Compare Core Web Vitals post-redesign vs. baseline
  - Verify LCP, FID, CLS within "Good" thresholds
  - If degradation detected, identify bottleneck and optimize
  - Document performance metrics in validation report

- [ ] **Accessibility Validation**
  - Zero critical violations confirmed via axe-core
  - Keyboard navigation tested on all pages
  - Color contrast validated for all text/background combinations
  - Alt text coverage verified (100% for content images)
  - Document accessibility status in validation report

- [ ] **Production Deployment**
  - Merge staging branch to main after stakeholder approval
  - Trigger production deployment via GitHub Actions
  - Verify production deployment successful (smoke test homepage, about, services)
  - Monitor for build errors or deployment issues
  - Document deployment timestamp and final commit SHA

#### Out of Scope (for this Redesign Project)

**Explicitly Deferred:**
- ❌ **Functionality Changes:** No new features, form additions, or interactive components beyond current scope
- ❌ **Content Rewrite:** Use existing copy with minor tweaks for Bold archetype fit (headline refinement acceptable)
- ❌ **Blog/Documentation Redesign:** Focus on core marketing pages (homepage, about, services, comparison)
- ❌ **E-commerce/Pricing Features:** If pricing table exists, restyle within Bold archetype; don't add new pricing logic
- ❌ **Multi-Language Support:** English-only for this project
- ❌ **Advanced Animations:** Stick to simple transitions (0.2s transforms, opacity changes); defer complex animations
- ❌ **Custom Illustrations:** Use existing images/icons; defer custom illustration commission
- ❌ **Video Production:** If video content needed, use placeholder or existing; defer video production

**Explicitly Not Being Built:**
- ❌ **Complete Site Rebuild:** This is a visual redesign, not a ground-up rebuild
- ❌ **Backend/API Changes:** Frontend-only; no backend, database, or API modifications
- ❌ **CMS Migration:** Sveltia CMS configuration unchanged; content structure unchanged
- ❌ **SEO Strategy Overhaul:** Maintain existing SEO structure (meta tags, schema markup); don't rewrite strategy
- ❌ **Brand Identity Creation:** Bold archetype already defined; this is implementation, not brand discovery
- ❌ **User Research/Testing:** Rely on existing target audience knowledge; defer user testing to post-launch

---
## Part B: Technical & Operational Framework
---

### 7. Strategic Constraint Tags for AI Architect

**Philosophy Tag:** `[Philosophy:Pragmatism]`

**Constraint Tags:**
- `[Constraint:Differentiation]` - 70%+ visual differentiation vs. competitors mandatory
- `[Constraint:Accessibility]` - WCAG 2.1 AA compliance, zero critical violations
- `[Constraint:Performance]` - Core Web Vitals "Good" scores maintained post-redesign
- `[Constraint:Timeline]` - 8-11 calendar days maximum, research-driven approach
- `[Constraint:Agent-Driven]` - Implementation must be autonomous via agent-executable specifications

### 8. Tech Stack & Key Libraries

**Unchanged from Current Implementation:**
- **Frontend Framework:** Astro 5.0 (Islands architecture, SSR, static generation)
- **Styling Framework:** Tailwind CSS 3.4+ (utility-first, design tokens)
- **Component Library:** DaisyUI 5.4 (semantic components, theming support)
- **Package Manager:** pnpm 8+ (monorepo-friendly)
- **Deployment:** Static HTML/CSS/JS (Vercel, Netlify, or own server)

**Design-Specific Tools:**
- **Typography:** Google Fonts (Inter weights 400, 700, 800, 900)
- **Icons:** Current icon library (Heroicons, Lucide, or similar)
- **Image Optimization:** Astro Image (WebP conversion, responsive sizing)

**Quality Validation Tools:**
- **Accessibility:** axe-core, @axe-core/playwright
- **Performance:** Lighthouse CI, Google PageSpeed Insights API
- **Visual Comparison:** Claude Code design quality agents
- **Linting:** ESLint 8+, Prettier 3+

### 9. Project File Structure

**Modified Files (Redesign Scope):**

```
sites/bigger-boss/
├── src/
│   ├── pages/
│   │   ├── index.astro                    # Homepage - Bold archetype redesign
│   │   ├── about.astro                    # About - Bold archetype redesign
│   │   ├── services.astro                 # Services - Bold archetype redesign
│   │   ├── compare.astro                  # Comparison - Bold archetype redesign
│   │   └── [other pages unchanged]        # Contact, thank-you, etc. - no changes
│   ├── components/
│   │   ├── BoldHero.astro                 # Custom Bold hero variant (if needed)
│   │   ├── BoldCard.astro                 # Custom Bold card variant (if needed)
│   │   ├── BoldButton.astro               # Custom Bold button variant (if needed)
│   │   └── [other components]             # Navigation, Footer, etc. - minor styling updates
│   └── layouts/
│       └── MainLayout.astro               # Base layout - potential typography updates
├── tailwind.config.cjs                    # Bold archetype Tailwind tokens
├── BRAND_GUIDELINES.md                    # Updated with Bold archetype details
├── BOLD_REDESIGN_CLAUDE.md                # This project constitution (new file)
└── public/
    └── [assets unchanged]                 # Images, fonts loaded via CDN
```

**New Files (Research & Documentation):**

```
sites/bigger-boss/
├── research/
│   ├── bold-archetype-examples/           # Screenshot library (15-20 sites)
│   ├── mood-boards/                       # Color, typography, layout boards
│   ├── pattern-analysis.md                # Bold vs. generic analysis
│   ├── competitive-analysis.md            # Stripe/Vercel/Linear comparison
│   └── design-specification.md            # Complete implementation specs
└── validation/
    ├── differentiation-report.md          # Visual differentiation scores
    ├── accessibility-report.md            # axe-core audit results
    ├── performance-report.md              # Lighthouse metrics
    └── stakeholder-review.md              # Approval documentation
```

### 10. Key Commands

**Development:**
```bash
# Start development server for Bigger Boss site
cd sites/bigger-boss
pnpm dev

# Build site to verify changes
pnpm build

# Preview production build locally
pnpm preview
```

**Quality Checks:**
```bash
# Run linting
pnpm lint

# Run type checking
pnpm type-check

# Run accessibility audit (requires Playwright)
pnpm test:a11y

# Run Lighthouse CI performance audit
pnpm lighthouse
```

**Research Phase:**
```bash
# Create research directories
mkdir -p research/bold-archetype-examples research/mood-boards

# Example: Capture competitor screenshots (manual process)
# Visit Stripe.com, Vercel.com, Linear.app
# Take full-page screenshots, save to research/competitive-screenshots/
```

**Deployment:**
```bash
# Deploy to staging for stakeholder review
git checkout staging
git merge bold-redesign-branch
git push origin staging

# Deploy to production after approval
git checkout main
git merge staging
git push origin main
```

### 11. Code Style & Conventions

**Follow existing Bigger Boss conventions (inherited from main CLAUDE.md):**

**Astro Components:**
- PascalCase filenames: `BoldHero.astro`, `BoldCard.astro`
- Single responsibility: Each component does one thing well
- Props interface defined at top of component
- Logic in frontmatter (`---` section), template below

**Tailwind CSS:**
- Use utility classes directly in templates
- Define design tokens in `tailwind.config.cjs` (colors, spacing, shadows)
- Use `@apply` sparingly (only for complex repeated patterns)
- Responsive modifiers: `md:`, `lg:`, `xl:` for breakpoints

**Typography:**
- Use Tailwind typography utilities: `text-4xl`, `font-black`, `leading-tight`
- Never hardcode pixel values in components (use Tailwind scale)
- Consistent font weight usage: 900 (headlines), 800 (subheadings), 700 (buttons), 400 (body)

**Colors:**
- Use semantic Tailwind tokens: `bg-primary`, `text-secondary`, `border-accent`
- Never hardcode hex values in components (define in tailwind.config.cjs)
- Ensure contrast ratios documented for all combinations

**Spacing:**
- Use Tailwind spacing scale: `p-4`, `mb-8`, `gap-6`
- Consistent section padding: `py-24` (desktop), `py-16` (tablet), `py-12` (mobile)
- Component padding: `p-6` (desktop), `p-4` (mobile)

**Git Commits:**
- Follow Conventional Commits: `feat(bold-redesign): implement homepage hero`
- Scope: `(bold-redesign)` for all redesign-related commits
- Descriptive first line (<72 chars), detailed body if needed

### 12. Architectural Principles & Constraints

**Design-Specific Principles:**

1. **Research Precedes Implementation (Non-Negotiable)**
   - NO implementation starts until research phase complete
   - Rationale: Agent-executable specifications require comprehensive visual examples and pattern analysis
   - Research deliverables: 15-20 visual examples, mood boards, pattern analysis, competitive differentiation
   - Validation: Design specification document reviewed and approved before Phase 2

2. **Agent-Executable Specifications Required**
   - All design decisions documented with exact values (hex codes, rem values, shadow depths)
   - Rationale: Implementation agents need precise specifications to work autonomously
   - Specification must include: color system, typography system, spacing system, component mapping, page layouts
   - Validation: Implementation agent can read specification and execute without human clarification

3. **DaisyUI Foundation, Customization for Differentiation**
   - Leverage DaisyUI semantic components for accessibility and speed
   - Rationale: Don't reinvent button mechanics; focus differentiation on color, typography, layout
   - Customization via Tailwind config (brand tokens) and component composition
   - Create client-specific variants (`BoldHero.astro`) only when DaisyUI base insufficient

4. **Differentiation Through Bold Archetype Pillars**
   - **Color Palette:** Deep Navy + Electric Orange (primary differentiator vs. purple/monochrome competitors)
   - **Typography:** Inter 900 (Black) weights (maximum impact vs. competitor 400-700 range)
   - **Geometric Styling:** Sharp edges 0.25rem (modern vs. rounded 0.5rem+ friendly)
   - Rationale: These three pillars create compounding differentiation effect
   - Validation: 70%+ differentiation score across all six evaluation dimensions

5. **Accessibility Never Compromised for Aesthetics**
   - Color contrast meets WCAG AA minimum (4.5:1 normal text, 3:1 large text)
   - Rationale: Bold archetype enhances, never compromises, accessibility
   - Deep Navy achieves WCAG AAA (8.8:1) against white text
   - Electric Orange maintains AA (4.8:1) against white backgrounds
   - All interactive elements keyboard-accessible with visible focus indicators

6. **Performance Maintained or Improved**
   - Core Web Vitals "Good" scores mandatory post-redesign
   - Rationale: Bold visual impact should not come at performance cost
   - Font loading optimized: font-display swap, subset to required glyphs
   - Image optimization: WebP format, responsive sizes, lazy loading
   - CSS minimized: Tailwind purge removes unused utilities

**Implementation Constraints:**

1. **Scope Discipline**
   - This is a visual redesign, not a feature addition project
   - NO new functionality unless directly required for Bold archetype (e.g., animated hero transitions)
   - Content tweaks acceptable (headline refinement for Bold fit), full rewrites out of scope
   - Focus: Homepage, About, Services, Comparison pages only

2. **Git Branch Strategy**
   - Create dedicated `bold-redesign` branch from `main`
   - All redesign work happens in this branch
   - Merge to `staging` for stakeholder review
   - Merge to `main` only after stakeholder approval
   - Preserve pre-redesign state in `pre-bold-redesign` tag for rollback

3. **Responsive Design Mandatory**
   - Test all layouts at: 320px, 640px, 1024px, 1440px, 1920px viewports
   - Mobile-first approach: design for mobile, enhance for desktop
   - Touch targets: 44x44px minimum on mobile/tablet
   - Navigation: Collapsible on tablet/mobile, persistent on desktop

4. **Validation Gates**
   - **Gate 1:** Research completeness (15-20 examples, mood boards, specifications)
   - **Gate 2:** Implementation quality (linting, type-checking, build success)
   - **Gate 3:** Accessibility compliance (axe-core zero critical violations)
   - **Gate 4:** Performance validation (Core Web Vitals "Good")
   - **Gate 5:** Visual differentiation (70%+ score vs. competitors)
   - **Gate 6:** Stakeholder approval (written sign-off)
   - Production deployment only after all gates pass

### 13. Prohibitions (Forbidden Actions)

**DO NOT:**

1. **DO NOT start implementation before research phase complete**
   - Rationale: Agent-driven design requires comprehensive specifications built from research
   - Exception: None. Research is foundation for all subsequent work.

2. **DO NOT hardcode color values in component files**
   - Rationale: All colors must be defined in `tailwind.config.cjs` for consistency and easy updates
   - Use semantic tokens: `bg-primary`, `text-secondary`, not `bg-[#0A2540]`
   - Exception: One-off color adjustments documented in component comments

3. **DO NOT compromise accessibility for visual impact**
   - Rationale: Bold archetype must enhance, never compromise, accessibility
   - All color combinations must meet WCAG AA contrast minimum (4.5:1 normal, 3:1 large text)
   - All interactive elements must be keyboard-accessible
   - Exception: Defer minor warnings (<5) for post-launch iteration, fix all critical violations

4. **DO NOT add new features or functionality**
   - Rationale: This is a visual redesign project; scope creep kills timelines
   - Focus: Styling, layout, typography, color—not new forms, APIs, or interactive components
   - Exception: Simple animations (0.2s transitions) acceptable if enhance Bold aesthetic

5. **DO NOT use rounded corners for primary buttons/CTAs**
   - Rationale: Sharp edges (0.25rem border-radius) are core Bold archetype characteristic
   - Competitor pattern: Stripe, Vercel, Linear all use 0.5rem+ rounded corners
   - Differentiation requires maintaining sharp geometric styling

6. **DO NOT use font weights below 700 for headlines**
   - Rationale: Inter 900 (Black) and 800 (Extra Bold) create Bold archetype impact
   - Headlines: 900 minimum, Subheadings: 800 minimum, Buttons: 700 minimum
   - Competitor pattern: Most use 500-700 weights (Stripe, Vercel, Linear)
   - Exception: Body text uses 400 (Regular) for readability

7. **DO NOT deploy to production without stakeholder approval**
   - Rationale: Visual redesigns are subjective; approval gate prevents surprises
   - Process: Deploy to staging → Present with competitor comparisons → Collect feedback → Address → Approve → Production
   - Exception: None. Approval required even for minor changes.

8. **DO NOT ignore responsive breakpoints**
   - Rationale: 60%+ traffic likely mobile/tablet; desktop-only designs fail
   - Test all layouts at minimum: 320px, 640px, 1024px, 1440px viewports
   - Fix all layout breakages before stakeholder review
   - Exception: Large desktop (>1920px) optimization deferred to post-launch if timeline tight

9. **DO NOT rewrite all content**
   - Rationale: Content strategy out of scope; use existing copy with minor tweaks
   - Acceptable: Headline refinement for Bold archetype fit ("Launch Websites Fast" → "Launch AI-Optimized Websites in Under One Week")
   - Unacceptable: Rewriting entire About page, Services descriptions, etc.
   - Exception: If existing copy directly contradicts Bold positioning, flag for stakeholder decision

10. **DO NOT customize DaisyUI components unnecessarily**
    - Rationale: DaisyUI provides accessibility, semantic classes—leverage foundation
    - Customize via Tailwind config (brand colors, border radius, shadows) first
    - Create client-specific variants (`BoldHero.astro`) only if DaisyUI base insufficient
    - Document all custom components with rationale for why DaisyUI base didn't work

11. **DO NOT skip validation gates**
    - Rationale: Quality assurance prevents post-launch firefighting
    - All six gates required: Research, Implementation, Accessibility, Performance, Differentiation, Stakeholder
    - Gate failures return to development phase with specific fix recommendations
    - Exception: None. No gate skipping permitted.

12. **DO NOT use gradients for primary brand colors**
    - Rationale: Solid Deep Navy and Electric Orange create stronger differentiation vs. competitor gradients (Linear's purple/blue gradient)
    - Use solid colors for backgrounds, CTAs, headers
    - Exception: Subtle gradients acceptable for decorative elements (hero overlays) if maintain color identity

---

**End of Bold Redesign Project Constitution**

*This document serves as the single source of truth for the Bigger Boss Bold archetype visual differentiation project. All implementation decisions should reference this constitution. Update this document if research findings require strategy adjustments.*

**Version:** 1.0
**Created:** 2025-11-11
**Project Type:** Visual Redesign (Agent-Driven Design Methodology Validation)
**Estimated Timeline:** 8-11 calendar days
**Primary Success Metric:** 70%+ visual differentiation vs. Stripe/Vercel/Linear

**Review & Approval:**
- [ ] Technical Lead Review
- [ ] Stakeholder Approval (Post-Research Phase)
- [ ] Implementation Agent Assignment
- [ ] Validation Agent Assignment

**Dependencies:**
- Existing Bigger Boss site (`sites/bigger-boss/`) as baseline
- Shared component library (`@workspace/ui-components`)
- DaisyUI 5.4 component library
- Tailwind CSS 3.4+ configuration system
- Claude Code agent infrastructure

**Success Criteria Summary:**
1. 70%+ differentiation score vs. competitors (validated via agent analysis + manual review)
2. WCAG 2.1 AA compliance (zero critical accessibility violations)
3. Core Web Vitals "Good" maintained (LCP <2.5s, FID <100ms, CLS <0.1)
4. Stakeholder approval without major revision requests
5. 8-11 day timeline maintained
6. Agent-driven methodology validated for future client site replication
