# Complete Documentation Index

> **Purpose:** Central index of all documentation, skills, and guides for the multi-site website development system
> **Last Updated:** November 9, 2025
> **Status:** Phase 0 Complete - Ready for Phase 1 Implementation

---

## 📚 Quick Navigation

### For Humans (Agency Team)
1. [HUMAN_VS_AI_WORKFLOW.md](#human-vs-ai-workflow) - What humans do vs. what AI does
2. [COMPLETE_WORKFLOW_GUIDE.md](#complete-workflow-guide) - 8-phase end-to-end process
3. [BRAND_GUIDELINES_FROM_LOGO.md](#brand-guidelines-from-logo) - Generate guidelines from logo only
4. [ASTRO_HEADLESS_UI_GUIDE.md](#astro-headless-ui-guide) - Component library usage

### For AI Agents (Claude Code)
1. [website-global-rules.md](#website-global-rules) - Design principles, code standards
2. [website-agent-instructions.md](#website-agent-instructions) - Decision-making framework
3. [6 Core Skills](#core-skills) - Reusable agent knowledge

---

## 📖 Documentation Breakdown

### 1. HUMAN_VS_AI_WORKFLOW.md

**What It Covers:**
- Clear division of labor (human creative work vs. AI automation)
- Phase-by-phase breakdown (Discovery → Design → Build → Deploy)
- Specific AI agent prompts for each task
- Time savings estimates (50-60% reduction in project time)

**Key Sections:**
- **Phase 1: Discovery** - AI researches mood boards, competitors, keywords (70% faster)
- **Phase 2: Wireframing** - Human-led creative work (limited AI automation)
- **Phase 3: Design** - Human designs in Figma, AI generates brand guidelines from logo
- **Phase 4: Build** - AI generates Astro components from specs (60-70% faster)

**When to Read:**
- ✅ Before starting any new client project
- ✅ When planning team workload (understand automation potential)
- ✅ When training new team members

**Location:** `docs/HUMAN_VS_AI_WORKFLOW.md`

---

### 2. COMPLETE_WORKFLOW_GUIDE.md

**What It Covers:**
- Complete 8-phase website development process
- Detailed steps for each phase
- Deliverables and time estimates
- Component library recommendations
- Design resource links

**8 Phases:**
1. **Discovery & Planning** (Week 1)
2. **Wireframing** (Week 1-2)
3. **High-Fidelity Design** (Week 2-3)
4. **Design-to-Code Translation** (Week 3-4)
5. **Content Integration** (Week 4)
6. **Quality Assurance** (Week 4-5)
7. **Deployment** (Week 5)
8. **Client Handoff & Training** (Week 5-6)

**When to Read:**
- ✅ At project kickoff (reference for timeline)
- ✅ During each phase transition (checklist for deliverables)
- ✅ When explaining process to clients

**Location:** `docs/COMPLETE_WORKFLOW_GUIDE.md`

---

### 3. BRAND_GUIDELINES_FROM_LOGO.md

**What It Covers:**
- How to create complete brand guidelines when client only has a logo
- AI-powered color extraction from logo
- Typography recommendations based on logo style
- Brand personality generation from logo analysis + industry research
- Complete BRAND_GUIDELINES.md assembly (automated)

**Use Cases:**
- ✅ Client has no existing brand guidelines (only logo)
- ✅ Small business with DIY logo needs professional branding
- ✅ Startup wants to formalize brand identity

**Time Savings:** ~4 hours (67% faster than manual process)

**When to Use:**
- ✅ Client provides logo but no brand book
- ✅ Need to generate BRAND_GUIDELINES.md quickly

**Location:** `docs/BRAND_GUIDELINES_FROM_LOGO.md`

---

### 4. ASTRO_HEADLESS_UI_GUIDE.md

**What It Covers:**
- Complete guide to using astro-headless-ui component library
- Installation instructions
- Component examples (Menu, Disclosure, Dialog, Tabs)
- When to use astro-headless-ui vs. custom components
- How to prompt Claude Code to use it

**Key Concept:**
- "Headless" components = **functionality without styling**
- You get accessibility, keyboard nav, ARIA attributes
- You add your own Tailwind CSS styles

**When to Use:**
- ✅ Building dropdown menus (complex keyboard nav)
- ✅ Building modals (focus trapping, overlay management)
- ✅ Building accordions (state management, accessibility)
- ✅ Building tabs (keyboard nav, ARIA roles)

**When to Read:**
- ✅ Before building interactive components
- ✅ When deciding between custom code vs. library

**Location:** `docs/ASTRO_HEADLESS_UI_GUIDE.md`

---

### 5. CONTENT_WIDTH_STANDARD.md

**What It Covers:**
- Standard content width: **1440px maximum**
- Standard container pattern: `container mx-auto px-4 md:px-8 lg:px-16 max-w-[1440px]`
- When to override standard (client requests, full-width backgrounds)
- How to prompt Claude Code to use standard

**Key Rule:**
```astro
<!-- Use this pattern for ALL content sections -->
<section class="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1440px]">
  <!-- Content here -->
</section>
```

**When to Reference:**
- ✅ When building new components
- ✅ When prompting Claude Code
- ✅ When reviewing generated code

**Location:** `.claude/prompts/CONTENT_WIDTH_STANDARD.md`

---

## 🎯 Core AI Agent Files

### Global Rules & Instructions

#### website-global-rules.md

**Purpose:** Design principles, code standards, quality requirements for ALL websites

**Covers:**
- Mobile-first responsive design (375px → 768px → 1440px)
- Accessibility requirements (WCAG 2.1 AA)
- Performance budgets (Core Web Vitals)
- AI-first content architecture (server-side rendering, schema markup)
- Astro component structure (standard format)
- Tailwind CSS guidelines
- Typography hierarchy
- SEO requirements
- Quality checklist

**When Agents Read This:** Before every task (foundational rules)

**Location:** `.claude/prompts/website-global-rules.md`

---

#### website-agent-instructions.md

**Purpose:** How agents should approach website development tasks

**Covers:**
- Decision-making framework (when to create components, where to store them)
- Common task types & approach (build page, create component, fix bug, optimize SEO)
- Communication style (concise reporting, specific error messages)
- Error prevention (run type-check, lint, build before marking complete)
- Special considerations (AI crawler optimization, performance, monorepo awareness)

**When Agents Read This:** Before every task (procedural guidance)

**Location:** `.claude/prompts/website-agent-instructions.md`

---

#### BRAND_GUIDELINES_TEMPLATE.md

**Purpose:** Template for per-client branding documentation

**Usage:**
1. Copy to `sites/[client-name]/BRAND_GUIDELINES.md`
2. Fill in all sections (brand identity, colors, typography, tone)
3. Use as source of truth during design & development

**Sections:**
- Brand Identity (industry, audience, personality)
- Visual Design (color palette, typography, spacing, design style)
- Content Tone & Voice
- Navigation Structure
- Page-Specific Requirements
- Competitor Differentiation
- Special Requirements

**When to Use:**
- ✅ At project kickoff (fill in during discovery)
- ✅ Before design phase (inform Figma design)
- ✅ During development (reference for code generation)

**Location:** `.claude/prompts/BRAND_GUIDELINES_TEMPLATE.md`

---

## 🛠️ Core Skills (Agent Knowledge)

### 1. design-to-code-workflow

**Purpose:** Translates Figma designs into Astro components

**Covers:**
- Step 1: Extract design tokens (colors, typography, spacing)
- Step 2: Analyze component structure (semantic HTML, layout, states)
- Step 3: Build component incrementally (Tailwind classes, TypeScript props)
- Step 4: Implement responsive behavior (mobile-first, test breakpoints)
- Step 5: Add accessibility features (keyboard nav, ARIA, alt text)
- Step 6: Validate against design (spacing, typography, colors match Figma)

**Location:** `.claude/skills/website/design-to-code-workflow/SKILL.md`

---

### 2. responsive-testing

**Purpose:** Systematic testing procedure for responsive designs

**Covers:**
- Required breakpoints (375px, 768px, 1440px)
- Testing checklist (layout, typography, images, interactive elements, navigation, spacing)
- Common responsive issues & fixes (horizontal scroll, text too small, touch targets too small)
- Browser-specific quirks (Safari iOS, Firefox)
- Testing tools (Chrome DevTools, Playwright automation)

**Location:** `.claude/skills/website/responsive-testing/SKILL.md`

---

### 3. tailwind-translation

**Purpose:** Quick reference for CSS → Tailwind class mapping

**Covers:**
- Spacing translation table (Figma px → Tailwind classes)
- Typography (font sizes, weights, line heights)
- Layout (flexbox, grid, display, position)
- Sizing (width, height, max-width)
- Colors (custom colors in config)
- Shadows, borders, radius
- Responsive modifiers (md:, lg:)
- Hover/focus/active states

**Location:** `.claude/skills/website/tailwind-translation/SKILL.md`

---

### 4. component-development

**Purpose:** Standardizes Astro component structure and conventions

**Covers:**
- When to create new component (vs. inline code)
- Component checklist (semantic HTML, TypeScript props, Tailwind classes, responsive, accessibility)
- Component file structure (imports, props, logic, template, styles)
- Common component patterns (Button, Card, Section Container)
- Accessibility requirements (keyboard nav, ARIA, focus states)
- Testing components in isolation

**Location:** `.claude/skills/website/component-development/SKILL.md`

---

### 5. seo-implementation

**Purpose:** Ensures consistent SEO best practices

**Covers:**
- Meta tags (title, description, Open Graph, Twitter cards)
- JSON-LD schema markup (Organization, Article, BreadcrumbList)
- Heading hierarchy (single H1, progressive H2-H6)
- Image optimization (alt text, responsive sizes, WebP)
- XML sitemap generation (@astrojs/sitemap)
- robots.txt configuration (AI crawler friendly)
- llms.txt for AI discoverability
- Internal linking strategy

**Location:** `.claude/skills/website/seo-implementation/SKILL.md`

---

### 6. accessibility-validation

**Purpose:** WCAG 2.1 AA compliance checklist and validation

**Covers:**
- Color contrast requirements (4.5:1 for text, 3:1 for large text)
- Keyboard navigation (Tab, Enter, Escape, Arrow keys)
- ARIA attributes (aria-label, aria-expanded, aria-hidden, aria-live, role)
- Semantic HTML (nav, main, article, section)
- Form accessibility (visible labels, error messages, fieldset/legend)
- Image accessibility (descriptive alt text, functional vs. decorative)
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Automated testing tools (axe DevTools, WAVE, Lighthouse)

**Location:** `.claude/skills/website/accessibility-validation/SKILL.md`

---

## 🚀 Getting Started Checklist

### For New Team Members

**Day 1: Understand the System**
- [ ] Read CLAUDE.md (project constitution)
- [ ] Read HUMAN_VS_AI_WORKFLOW.md (understand division of labor)
- [ ] Read COMPLETE_WORKFLOW_GUIDE.md (8-phase process)

**Day 2: Set Up Development Environment**
- [ ] Clone repository
- [ ] Run `pnpm install`
- [ ] Explore existing client sites in `sites/` directory
- [ ] Review shared components in `packages/ui-components/`

**Day 3: Practice Workflow**
- [ ] Create test client: `pnpm create-client --name="test-client"`
- [ ] Fill in BRAND_GUIDELINES.md using BRAND_GUIDELINES_TEMPLATE.md
- [ ] Practice prompting Claude Code to build Button component

**Week 2: First Real Project**
- [ ] Follow HUMAN_VS_AI_WORKFLOW.md for Phase 1 (Discovery)
- [ ] Use AI agents to research mood boards, competitors, keywords
- [ ] Create client BRAND_GUIDELINES.md
- [ ] Begin wireframing in Figma

---

### For Starting a New Client Project

**Phase 0: Setup (Day 1)**
- [ ] Create client site: `pnpm create-client --name="[client-name]"`
- [ ] Copy BRAND_GUIDELINES_TEMPLATE.md to `sites/[client-name]/BRAND_GUIDELINES.md`

**Phase 1: Discovery & Planning (Week 1)**
- [ ] Conduct client briefing call
- [ ] Invoke `@web-intelligence-analyst` for mood board research
- [ ] Invoke `@competitive-intelligence-analyst` for competitor analysis
- [ ] Invoke `@keyword-researcher` for SEO keyword research
- [ ] Fill in BRAND_GUIDELINES.md (manually or using `@brand-design-strategist` if logo-only)
- [ ] Get client approval on brand guidelines

**Phase 2: Wireframing (Week 1-2)**
- [ ] Create low-fidelity wireframes in Figma (human creative work)
- [ ] Get client feedback and approval

**Phase 3: High-Fidelity Design (Week 2-3)**
- [ ] Design in Figma (human creative work)
- [ ] Export design tokens using Figma Tokens plugin
- [ ] Import tokens into `sites/[client]/tailwind.config.cjs`
- [ ] Get client approval on designs

**Phase 4: Build (Week 3-4)**
- [ ] Prompt Claude Code to build shared components (Button, Card, Hero, Nav, Footer)
- [ ] Prompt Claude Code to build pages (Homepage, About, Services, Blog, Contact)
- [ ] Test responsive behavior at 375px, 768px, 1440px
- [ ] Follow design-to-code-workflow skill

**Phase 5-8: Continue per COMPLETE_WORKFLOW_GUIDE.md**

---

## 📝 Key Decisions Made

### Component Library: astro-headless-ui ✅
- Native Astro (no React dependency)
- Zero JavaScript by default
- Accessible primitives (keyboard nav, ARIA)
- Perfect for high-performance marketing sites

### Content Width: 1440px Maximum ✅
- Industry standard for desktop design
- Optimal reading width
- Use `max-w-[1440px]` on all content sections

### Figma Handoff: Design Tokens (Recommended) ✅
- Export colors, typography, spacing as JSON
- Import into `tailwind.config.cjs`
- Single source of truth

### Brand Guidelines from Logo: AI-Automated ✅
- AI extracts colors from logo
- AI recommends typography based on logo style
- AI generates brand personality from industry research
- Human reviews and gets client approval
- **Time saved:** ~4 hours (67% faster)

---

## 📂 File Structure Summary

```
starter-template/
├── .claude/
│   ├── prompts/
│   │   ├── website-global-rules.md                    # Design principles, code standards
│   │   ├── website-agent-instructions.md              # Agent decision-making framework
│   │   ├── BRAND_GUIDELINES_TEMPLATE.md               # Per-client branding template
│   │   └── CONTENT_WIDTH_STANDARD.md                  # 1440px standard
│   └── skills/
│       └── website/
│           ├── design-to-code-workflow/SKILL.md       # Figma → Astro translation
│           ├── responsive-testing/SKILL.md            # Breakpoint testing
│           ├── tailwind-translation/SKILL.md          # CSS → Tailwind mapping
│           ├── component-development/SKILL.md         # Astro component best practices
│           ├── seo-implementation/SKILL.md            # SEO metadata, schema markup
│           └── accessibility-validation/SKILL.md      # WCAG 2.1 AA compliance
│
├── docs/
│   ├── README_DOCUMENTATION_INDEX.md                  # This file (central index)
│   ├── HUMAN_VS_AI_WORKFLOW.md                        # Human vs. AI division of labor
│   ├── COMPLETE_WORKFLOW_GUIDE.md                     # 8-phase end-to-end process
│   ├── BRAND_GUIDELINES_FROM_LOGO.md                  # Generate guidelines from logo
│   └── ASTRO_HEADLESS_UI_GUIDE.md                     # Component library usage
│
├── packages/
│   └── ui-components/                                 # Shared component library
│
├── sites/
│   └── [client-name]/
│       ├── BRAND_GUIDELINES.md                        # Client-specific branding
│       └── tailwind.config.cjs                        # Client-specific Tailwind config
│
└── CLAUDE.md                                          # Project constitution
```

---

## 🎓 Training Resources

### For Learning Astro
- **Official Docs:** https://docs.astro.build/
- **Tutorial:** https://docs.astro.build/en/tutorial/0-introduction/
- **Astro Showcase:** https://astro.build/showcase/

### For Learning Tailwind CSS
- **Official Docs:** https://tailwindcss.com/docs
- **Tailwind UI (Examples):** https://tailwindui.com/
- **Tailwind Play (Sandbox):** https://play.tailwindcss.com/

### For Design Inspiration
- **Awwwards:** https://www.awwwards.com/
- **Dribbble:** https://dribbble.com/
- **SiteInspire:** https://www.siteinspire.com/
- **CreateToday (Astro):** https://createtoday.io/examples?platform=astro

### For Accessibility
- **WebAIM:** https://webaim.org/
- **WCAG 2.1 Quick Reference:** https://www.w3.org/WAI/WCAG21/quickref/
- **Inclusive Components:** https://inclusive-components.design/

---

## ❓ FAQ

### Q: Do I need to read all documentation before starting?

**A:** No. Start with:
1. HUMAN_VS_AI_WORKFLOW.md (understand automation)
2. COMPLETE_WORKFLOW_GUIDE.md (understand process)
3. Reference other docs as needed during specific phases

---

### Q: How do I get Claude Code to use astro-headless-ui?

**A:** You must prompt explicitly. Include in your prompt:
```
Build [component] using astro-headless-ui.

Requirements:
- Use astro-headless-ui [Menu/Dialog/Disclosure] component
- Add client:load directive
- Style with Tailwind classes
```

See ASTRO_HEADLESS_UI_GUIDE.md for examples.

---

### Q: What if client has no brand guidelines, only a logo?

**A:** Follow BRAND_GUIDELINES_FROM_LOGO.md:
1. Use AI to extract colors from logo
2. Use AI to recommend typography
3. Use AI to generate brand personality
4. Review and get client approval
5. Use as foundation for design

---

### Q: Do agents automatically follow the 1440px content width standard?

**A:** Only if you include it in your prompt. Always add:
```
Requirements:
- Content width: 1440px maximum (use max-w-[1440px])
- Container pattern: container mx-auto px-4 md:px-8 lg:px-16 max-w-[1440px]
```

Or update website-global-rules.md to include this as a default requirement.

---

### Q: Can I use shadcn/ui instead of astro-headless-ui?

**A:** Not recommended. shadcn/ui requires React, which adds bundle weight and requires client-side hydration. This defeats Astro's zero-JS philosophy and makes content invisible to AI crawlers. Use astro-headless-ui for Astro projects.

---

## 🔄 Next Steps

### Immediate Actions (This Week)
1. ☐ Install astro-headless-ui: `cd packages/ui-components && pnpm add astro-headless-ui`
2. ☐ Create first test client site: `pnpm create-client --name="test-alpha"`
3. ☐ Practice AI agent prompts (mood board research, brand guidelines generation)
4. ☐ Review Lexington Themes bundle ($149) - identify useful templates

### This Month
1. ☐ Complete first pilot client site (Phase 1-4)
2. ☐ Test complete workflow (Discovery → Design → Build)
3. ☐ Refine AI agent prompts based on results
4. ☐ Document lessons learned

### Next Quarter
1. ☐ Launch 3 client sites using system
2. ☐ Measure time savings vs. old workflow
3. ☐ Iterate on automation (identify more tasks for AI)
4. ☐ Scale to 10+ client sites

---

**Last Updated:** November 9, 2025
**Maintained By:** Technical Lead
**Next Review:** When first pilot client site completes (estimated 2-3 weeks)
