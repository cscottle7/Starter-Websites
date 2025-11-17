# Complete Website Development Workflow Guide

> **Last Updated:** November 9, 2025
> **Status:** Phase 0 - Foundation Documentation Complete

---

## 📋 What This Document Contains

This guide provides the **complete end-to-end process** for designing and building client websites in the multi-site system, from initial client briefing through production deployment.

---

## 🎯 The Complete 8-Phase Workflow

### **Phase 1: Discovery & Planning** (Week 1)

**Objective:** Understand client needs, research competition, establish project scope

**Steps:**
1. **Client briefing call** (60-90 minutes)
   - Business goals, target audience, competitors
   - Content requirements, pages needed
   - Timeline, budget constraints

2. **Create project documentation**
   - Copy `.claude/prompts/BRAND_GUIDELINES_TEMPLATE.md` to `sites/[client]/BRAND_GUIDELINES.md`
   - Fill in brand identity, target audience, personality
   - Document competitor differentiation

3. **Research & Strategy**
   - Invoke `@competitive-intelligence-analyst` to research competitor websites
   - Invoke `@keyword-researcher` to identify SEO opportunities
   - Create sitemap (information architecture)

4. **Mood board creation**
   - Gather 15-20 design examples (Pinterest, Dribbble, Awwwards)
   - Client selects 5 favorites
   - Extract themes: colors, typography, layout style
   - Document in BRAND_GUIDELINES.md "Inspiration Sites" section

**Deliverables:**
- ✅ BRAND_GUIDELINES.md completed
- ✅ Sitemap finalized
- ✅ Mood board PDF or Pinterest board
- ✅ Competitive analysis notes

---

### **Phase 2: Wireframing** (Week 1-2)

**Objective:** Establish page structure and content hierarchy before visual design

**Steps:**
1. **Create low-fidelity wireframes in Figma**
   - Grayscale only (no colors/branding yet)
   - Focus on layout structure, content placement
   - Mobile, tablet, desktop views for key pages
   - Pages to wireframe:
     - Homepage
     - About
     - Services/Products
     - Blog post template
     - Contact

2. **Client review & iteration**
   - Present wireframes via Figma link
   - Gather feedback on structure
   - Revise until approved

**Deliverables:**
- ✅ Wireframe Figma file
- ✅ Client approval sign-off

**Tools:**
- Figma (primary)
- Excalidraw (alternative for quick sketches)

---

### **Phase 3: High-Fidelity Design** (Week 2-3)

**Objective:** Create pixel-perfect designs with brand visual identity

**Steps:**
1. **Set up Figma design system**
   - Extract color palette from mood board
   - Define typography scale (heading sizes, body text)
   - Create spacing system (aligned with Tailwind's 4px/8px/16px scale)
   - Build component library (buttons, cards, forms)

2. **Design key pages**
   - Homepage (most important - sets visual direction)
   - About page
   - Services/Product page
   - Blog post template
   - Contact page

3. **Design components with variants**
   - Button states: default, hover, active, disabled
   - Card variants: image-top, image-left, icon-only
   - Navigation: desktop horizontal, mobile hamburger

4. **Extract design tokens**
   - Use Figma Tokens plugin (or manual extraction)
   - Export colors, typography, spacing to JSON
   - Prepare for Tailwind config import

5. **Client review & iteration**
   - Present high-fidelity mockups
   - Gather feedback on visual design
   - Revise colors, typography, imagery
   - Final approval

**Deliverables:**
- ✅ Complete Figma file with design system
- ✅ Exported design tokens (JSON)
- ✅ Client approval sign-off

**Reference Documentation:**
- Read: `.claude/prompts/website-global-rules.md` (design principles)
- Read: `sites/[client]/BRAND_GUIDELINES.md` (brand colors, typography)

---

### **Phase 4: Design-to-Code Translation** (Week 3-4)

**Objective:** Translate Figma designs into production-ready Astro components

**Steps:**

#### **4.1: Extract Design Tokens**
```bash
# Update Tailwind config with brand colors
code sites/[client]/tailwind.config.cjs
```

Add colors, fonts from Figma:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',    // From Figma
        secondary: '#2d3748',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
};
```

#### **4.2: Build Shared Component Library**

**Prompt Claude Code:**
```
Build a Button component for the shared component library.

Context:
- File: packages/ui-components/src/components/Button.astro
- Brand: [from sites/[client]/BRAND_GUIDELINES.md]
- Purpose: Reusable button with primary/secondary/ghost variants

Requirements:
1. TypeScript Props interface with variant, size, href options
2. Three variants: primary (bg-primary), secondary (bg-secondary), ghost (transparent)
3. Three sizes: sm (px-4 py-2), md (px-6 py-3), lg (px-8 py-4)
4. Responsive: Works on mobile (touch-friendly 44x44px minimum)
5. Accessibility: Focus states (focus:ring-2), keyboard navigation, aria-label support
6. Supports both <button> and <a> tags (if href provided, use <a>)

Constraints:
- Zero JavaScript (pure Astro component)
- Tailwind classes only (no custom CSS)
- Follow component structure in .claude/prompts/website-global-rules.md

Deliverable:
Working Button.astro component with JSDoc comment and usage example
```

**Components to Build (in order):**
1. Button (primary, secondary, ghost variants)
2. Card (image + title + description + CTA)
3. Section Container (reusable section wrapper with background variants)
4. Navigation (desktop horizontal + mobile hamburger)
5. Hero (full-viewport hero with heading + CTA buttons)
6. Footer (multi-column footer with logo, links, social icons)
7. Form Input (text input with label, error state)
8. Form Textarea (textarea with label, error state)

**Skill Reference:**
- Read: `.claude/skills/website/design-to-code-workflow/SKILL.md`
- Read: `.claude/skills/website/component-development/SKILL.md`
- Read: `.claude/skills/website/tailwind-translation/SKILL.md`

#### **4.3: Build Page Templates**

**Prompt Claude Code:**
```
Build the Homepage for [client site name].

Context:
- File: sites/[client]/src/pages/index.astro
- Design: [Figma link or description of layout]
- Brand: From sites/[client]/BRAND_GUIDELINES.md

Requirements:
1. Use BaseLayout with SEO metadata (title, description)
2. Hero section with headline, subheadline, 2 CTA buttons
3. Services section (3-column grid of cards)
4. Testimonials section (3 customer quotes)
5. Final CTA section ("Ready to get started?")
6. Responsive: Mobile-first (stack on mobile, grid on desktop)
7. Accessibility: Proper heading hierarchy (H1 → H2 → H3), alt text, focus states

Constraints:
- Use shared components from packages/ui-components/
- Follow .claude/prompts/website-global-rules.md structure
- Test at 375px/768px/1440px breakpoints

Deliverable:
Functional homepage ready for content integration
```

**Pages to Build:**
1. Homepage (`index.astro`)
2. About (`about.astro`)
3. Services (`services.astro`)
4. Blog index (`blog/index.astro`)
5. Blog post template (`blog/[slug].astro`)
6. Contact (`contact.astro`)

#### **4.4: Implement Responsive Behavior**

**Testing Workflow:**
1. Open dev server: `pnpm dev --filter=[client-name]`
2. Open Chrome DevTools (F12)
3. Toggle device toolbar (Cmd+Shift+M)
4. Test at breakpoints:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1440px
5. Verify:
   - Content stacks on mobile
   - Layout adapts on tablet
   - Max-width prevents excessive stretching on desktop

**Skill Reference:**
- Read: `.claude/skills/website/responsive-testing/SKILL.md`

**Deliverables:**
- ✅ Shared component library (8-10 components)
- ✅ All pages built and responsive
- ✅ Components tested in isolation

---

### **Phase 5: Content Integration** (Week 4)

**Objective:** Add client content and configure CMS for client editing

**Steps:**

#### **5.1: Set Up Sveltia CMS**
```bash
# Already configured in template, verify:
cat sites/[client]/public/admin/config.yml
```

Configure collections for:
- Pages (homepage, about, services)
- Blog posts
- Navigation menu items
- Footer content

#### **5.2: Migrate Client Content**
1. Convert client-provided content (Word docs, PDFs) to markdown
2. Optimize images (resize, compress, convert to WebP)
3. Add content to `sites/[client]/src/content/`
4. Structure:
   - `content/pages/` - Static pages
   - `content/blog/` - Blog posts
   - `content/config.ts` - Content collection schemas

#### **5.3: Add SEO Metadata**

**Prompt Claude Code:**
```
Add SEO optimization to the [client] website.

Tasks:
1. Add meta tags (title, description, Open Graph) to all pages
2. Add JSON-LD schema markup:
   - Homepage: Organization schema
   - About: Organization + Person schemas
   - Blog posts: Article schema
3. Generate XML sitemap (using @astrojs/sitemap)
4. Create AI-friendly robots.txt (allow GPTBot, ClaudeBot)
5. Create llms.txt for AI discoverability

Constraints:
- Follow .claude/skills/website/seo-implementation/SKILL.md
- Ensure all images have descriptive alt text
- Verify heading hierarchy (single H1 per page)

Deliverable:
SEO-optimized website ready for quality gates
```

**Or invoke agent:**
```bash
# If seo-optimizer agent exists:
@seo-optimizer audit sites/[client]
```

**Skill Reference:**
- Read: `.claude/skills/website/seo-implementation/SKILL.md`

**Deliverables:**
- ✅ Sveltia CMS configured
- ✅ All content migrated
- ✅ SEO metadata complete (meta tags, schema, sitemap)

---

### **Phase 6: Quality Assurance** (Week 4-5)

**Objective:** Validate all quality standards before client review

**Steps:**

#### **6.1: Run Automated Quality Gates**

**Code Quality:**
```bash
# Type checking
nx run [client]:type-check

# Linting
nx run [client]:lint

# Build test
nx build [client]
```

**SEO Compliance:**
```bash
# If seo-optimizer agent exists:
@seo-optimizer audit sites/[client]

# Manual checks:
# - Meta tags on all pages
# - Schema markup (Organization, Article)
# - Heading hierarchy (H1 → H2 → H3)
# - Image alt text coverage
```

**Accessibility (WCAG 2.1 AA):**
```bash
# If accessibility-auditor agent exists:
@accessibility-auditor audit sites/[client]

# Manual checks:
# - Color contrast (4.5:1 minimum)
# - Keyboard navigation (Tab through all elements)
# - ARIA attributes (modals, dropdowns)
# - Form labels visible
# - Screen reader test (NVDA, VoiceOver)
```

**Performance (Core Web Vitals):**
```bash
# Lighthouse audit
npx lighthouse http://localhost:3000 --view

# Target scores:
# - Performance: >90
# - Accessibility: >90
# - Best Practices: >90
# - SEO: >90
```

**AI Readiness:**
- Verify robots.txt allows GPTBot, ClaudeBot
- Verify llms.txt exists and complete
- Test server-side rendering (view page source, content visible)

**Security:**
```bash
# Dependency audit
pnpm audit

# Target: Zero high/critical vulnerabilities
```

#### **6.2: Manual Testing**

**Cross-Browser:**
- Chrome (primary)
- Firefox
- Safari (especially iOS for mobile)
- Edge

**Cross-Device:**
- Mobile (iPhone, Android phone)
- Tablet (iPad, Android tablet)
- Desktop (Mac, PC)

**Functionality:**
- All links work (no 404 errors)
- Forms submit correctly
- Navigation toggles (hamburger menu)
- Modals open/close
- Images load

#### **6.3: Client UAT (User Acceptance Testing)**

1. Deploy to staging environment
2. Send staging URL to client
3. Client reviews full site
4. Create punch list of revisions
5. Address feedback
6. Re-deploy to staging
7. Client final approval

**Skill Reference:**
- Read: `.claude/skills/website/accessibility-validation/SKILL.md`
- Read: `.claude/skills/website/seo-implementation/SKILL.md`
- Read: `.claude/skills/website/responsive-testing/SKILL.md`

**Deliverables:**
- ✅ All quality gates passing
- ✅ Staging environment deployed
- ✅ Client approval sign-off

---

### **Phase 7: Deployment** (Week 5)

**Objective:** Deploy to production with monitoring

**Steps:**

#### **7.1: Production Deployment**
```bash
# Merge to main branch
git checkout main
git merge staging
git push origin main

# CI/CD pipeline auto-deploys (if configured)
# OR manual build:
nx build [client]

# Deploy to:
# - Your own server (Nginx/Apache)
# - Vercel (pnpm install -g vercel && vercel --prod)
# - Netlify (netlify deploy --prod)
```

#### **7.2: DNS Configuration**
1. Point custom domain to hosting (client-domain.com)
2. Configure SSL certificate (HTTPS required)
3. Verify domain resolves correctly

#### **7.3: Post-Launch Monitoring**
1. Verify Google Analytics tracking
2. Submit XML sitemap to Google Search Console
3. Monitor Core Web Vitals (first 24-48 hours)
4. Check for broken links (Screaming Frog, manual spot checks)

**Deliverables:**
- ✅ Live production website
- ✅ Custom domain configured
- ✅ SSL certificate active
- ✅ Monitoring dashboards set up

---

### **Phase 8: Client Handoff & Training** (Week 5-6)

**Objective:** Empower client to manage content independently

**Steps:**

#### **8.1: Client Training on Sveltia CMS**
1. **Record screen tutorial (15-20 minutes):**
   - How to log in (`client-domain.com/admin`)
   - How to edit existing pages
   - How to create new blog posts
   - How to upload images
   - How to preview changes before publishing

2. **Live training session (30 minutes):**
   - Walk through CMS interface
   - Practice editing together
   - Answer questions

#### **8.2: Documentation Handoff**
```bash
# If user-guide-writer agent exists:
@user-guide-writer create sites/[client]/CLIENT_CMS_GUIDE.md

# Manual creation:
# Copy from template, customize for client
```

**Include:**
- How to add blog posts
- How to edit page content
- How to add images (optimization tips)
- Emergency contact info
- Common troubleshooting

#### **8.3: Ongoing Maintenance Plan**
- **Monthly:** Client updates content via CMS (self-service)
- **Quarterly:** SEO audits (automated via agents)
- **Annually:** Design refresh, feature enhancements

**Deliverables:**
- ✅ CMS training video
- ✅ CLIENT_CMS_GUIDE.md documentation
- ✅ Maintenance schedule agreed upon

---

## 🛠️ Component Library Recommendation: astro-headless-ui

### Why astro-headless-ui?
- ✅ **Native Astro compatibility** (no React dependency)
- ✅ **Zero JavaScript by default** (Astro Islands philosophy)
- ✅ **Accessible primitives** (keyboard nav, ARIA, focus management)
- ✅ **Perfect for your use case:** High-performance marketing sites

### When to Use DaisyUI Instead?
- ✅ **Rapid prototyping** (pre-styled components)
- ✅ **Internal tools** (admin panels where performance less critical)
- ❌ **Avoid for client sites:** Less customizable, generic appearance

### Avoid shadcn/ui (React-Based)
- ❌ **React dependency** adds bundle weight
- ❌ **Client-side hydration** required (defeats Astro zero-JS goal)
- ❌ **AI crawlers** can't read client-rendered content

---

## 📁 Files Created in This Setup

### Global Rules & Instructions
```
.claude/prompts/
├── website-global-rules.md          # Design principles, code standards
├── website-agent-instructions.md    # Agent decision-making framework
└── BRAND_GUIDELINES_TEMPLATE.md     # Per-client branding template
```

### Skills (Agent Knowledge)
```
.claude/skills/website/
├── design-to-code-workflow/SKILL.md      # Figma → Astro translation
├── responsive-testing/SKILL.md           # Breakpoint testing procedures
├── tailwind-translation/SKILL.md         # CSS → Tailwind class mapping
├── component-development/SKILL.md        # Astro component best practices
├── seo-implementation/SKILL.md           # SEO metadata, schema markup
└── accessibility-validation/SKILL.md     # WCAG 2.1 AA compliance
```

---

## 🎨 Design Resources

### Component Libraries
1. **astro-headless-ui** (Recommended): https://github.com/RyanCavanaugh/astro-headless-ui
2. **DaisyUI** (Alternative): https://daisyui.com/docs/install/astro/
3. **Flowbite** (Selective use): https://flowbite.com/docs/getting-started/astro/

### Reference Sites
1. **Astro Showcase**: https://astro.build/showcase/
2. **CreateToday Curated**: https://createtoday.io/examples?platform=astro
3. **DatoCMS Multi-Brand Case Study**: https://www.datocms.com/customer-stories/on-building-astro-themes-for-multi-brand-websites

### Premium Templates
1. **Lexington Themes**: https://lexingtonthemes.com/ ($149 bundle)
2. **Cosmic Themes**: https://cosmicthemes.com/ ($39-79 per theme)
3. **AstroWind** (Free): https://astrowind.vercel.app/

### Technical Guides
1. **Tailwind v4 in Monorepo**: https://medium.com/@philippbtrentmann/setting-up-tailwind-css-v4-in-a-turbo-monorepo-7688f3193039
2. **Multi-Portal Theming**: https://wawand.co/blog/posts/managing-multiple-portals-with-tailwind/
3. **Design Tokens with Tailwind**: https://www.michaelmang.dev/blog/integrating-design-tokens-with-tailwind/

---

## 🚀 Next Steps (Action Items)

### This Week:
1. ☐ Install astro-headless-ui in `packages/ui-components/`
2. ☐ Review Lexington Themes bundle - identify 2-3 templates
3. ☐ Create first client site using scaffolding script
4. ☐ Test design-to-code workflow with one Figma component

### Next Week:
1. ☐ Build out 5-8 shared components (Button, Card, Hero, Navigation, Footer)
2. ☐ Create sample client BRAND_GUIDELINES.md
3. ☐ Test Claude Code prompts for component generation
4. ☐ Review 10 reference sites from Astro Showcase

### Within 2 Weeks:
1. ☐ Complete first pilot client site (Phase 1-3 from CLAUDE.md)
2. ☐ Purchase Lexington Themes bundle ($149) if 3+ templates useful
3. ☐ Create comprehensive component documentation
4. ☐ Set up CI/CD pipeline for automated quality gates

---

## 📚 Related Documentation

- **Project Constitution:** `CLAUDE.md` (strategic vision, tech stack, architecture)
- **Quick Start:** `docs/QUICK_START.md` (5-minute developer onboarding)
- **Client Onboarding:** `docs/CLIENT_ONBOARDING.md` (new client setup process)

---

**Version:** 1.0
**Maintained By:** Technical Lead
**Last Reviewed:** November 9, 2025
