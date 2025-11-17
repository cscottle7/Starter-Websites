# Human vs AI Workflow Breakdown

> **Purpose:** Clear delineation of what humans do vs. what AI agents can automate in the website development process
> **Last Updated:** November 9, 2025

---

## 🎯 Overview: Division of Labor

### Human Responsibilities (Creative, Strategic, Client-Facing)
- Client communication & relationship management
- Design decisions & creative direction
- Quality control & final approval
- Strategic planning

### AI Agent Responsibilities (Research, Automation, Code Generation)
- Design inspiration research
- Code generation from specifications
- Quality validation (SEO, accessibility, performance)
- Documentation generation

---

## Phase 1: Discovery & Planning

### ✅ HUMAN Tasks (Cannot Automate)

**1. Client Briefing Call** (60-90 minutes)
- Conduct discovery interview
- Understand business goals, target audience
- Identify pain points, competitors
- Agree on timeline, budget, scope
- **Deliverable:** Meeting notes, project brief outline

**2. Strategic Decisions**
- Define project success metrics
- Prioritize features (must-have vs. nice-to-have)
- Set brand positioning
- **Deliverable:** Signed project scope document

**3. Initial Content Gathering**
- Request client materials (logo files, existing brand guidelines, copy)
- Gather competitor URLs for research
- **Deliverable:** Client asset folder

---

### 🤖 AI AGENT Tasks (Can Automate)

**1. Mood Board & Design Inspiration Research**

**Agent:** `@web-intelligence-analyst`

**Prompt:**
```
Research design inspiration for [industry] website targeting [audience].

Context:
- Industry: [e.g., Tech Startup, Healthcare, E-commerce]
- Target Audience: [e.g., Small business owners aged 30-50]
- Brand Personality: [Professional, Innovative, Approachable]
- Competitor URLs: [list 3-5 competitors]

Tasks:
1. Search for high-quality website designs in this industry
2. Identify 15-20 design examples from:
   - Awwwards (awwwards.com)
   - Dribbble (dribbble.com)
   - Behance (behance.net)
   - SiteInspire (siteinspire.com)
3. For each example, document:
   - URL
   - What makes it effective (color palette, layout, typography)
   - Relevance to our project (why this example fits)

Deliverable:
Markdown file with categorized design examples:
- Color palettes (warm, cool, neutral, bold)
- Layout styles (grid-based, asymmetrical, minimal, content-rich)
- Typography approaches (modern sans-serif, classic serif, mixed)
```

**Output:** `docs/research/design-inspiration-[client-name].md`

---

**2. Competitive Analysis**

**Agent:** `@competitive-intelligence-analyst`

**Prompt:**
```
Analyze competitor websites for [client name] in [industry].

Competitor URLs:
- [competitor1.com]
- [competitor2.com]
- [competitor3.com]

Tasks:
1. For each competitor, analyze:
   - Site structure (navigation, page hierarchy)
   - Key features (forms, calculators, chatbots)
   - Design approach (colors, typography, imagery)
   - Content strategy (blog, resources, case studies)
   - SEO strength (meta tags, schema markup, performance)
   - Strengths to emulate
   - Weaknesses to avoid

2. Identify gaps (what competitors are missing that we can offer)

3. Recommend differentiation strategy

Deliverable:
Competitive analysis report with:
- Feature comparison matrix
- Design style comparison
- Differentiation recommendations
```

**Output:** `docs/research/competitive-analysis-[client-name].md`

---

**3. SEO Keyword Research**

**Agent:** `@keyword-researcher`

**Prompt:**
```
Conduct keyword research for [client name] targeting [services/products].

Context:
- Business: [description]
- Target Geographic Area: [city, state, national, global]
- Primary Services: [list 3-5 main offerings]

Tasks:
1. Identify primary keywords (high volume, high intent)
2. Identify long-tail keywords (lower volume, specific intent)
3. Analyze keyword difficulty vs. opportunity
4. Recommend page structure (which keywords map to which pages)

Deliverable:
Keyword research report with:
- Primary keywords (homepage, main service pages)
- Secondary keywords (blog topics, supporting pages)
- Content recommendations (what pages/posts to create)
```

**Output:** `docs/research/keyword-research-[client-name].md`

---

**4. User Journey Mapping**

**Agent:** `@user-empath-analyst` (if creating from scratch)

**Prompt:**
```
Create user journey map for [target persona] visiting [client website].

Persona:
- Role: [e.g., Small business owner]
- Pain Points: [e.g., Needs affordable marketing, limited time]
- Goals: [e.g., Find agency that understands SMB constraints]

Tasks:
1. Map typical user journey:
   - Awareness (how they discover the site)
   - Consideration (what pages they visit)
   - Decision (what convinces them to contact)
2. Identify friction points (where users might drop off)
3. Recommend content for each stage
4. Suggest CTAs (calls-to-action) for conversion

Deliverable:
User journey map with:
- Typical entry points (Google search, social media, referral)
- Page flow (homepage → services → about → contact)
- Content needs at each stage
- Recommended CTAs
```

**Output:** `docs/research/user-journey-[client-name].md`

---

### 🔄 HUMAN Review & Synthesis (After AI Research)

**What Humans Do:**
1. **Review all AI-generated research reports**
2. **Curate mood board** (select 5-10 favorites from AI's 15-20 suggestions)
3. **Validate competitive insights** (does differentiation strategy make sense?)
4. **Approve keyword strategy** (align with business goals)
5. **Refine user journey** (add client-specific nuances AI missed)
6. **Fill in BRAND_GUIDELINES.md template** using research insights

**Time Estimate:** 2-3 hours (vs. 8-10 hours without AI research)

---

## Phase 2: Wireframing

### ✅ HUMAN Tasks (Creative Work)

**1. Create Low-Fidelity Wireframes in Figma**
- Design page structure (header, hero, sections, footer)
- Establish content hierarchy (what's most important)
- Plan mobile/tablet/desktop layouts
- **Pages to wireframe:**
  - Homepage
  - About
  - Services
  - Blog template
  - Contact

**Tool:** Figma (manual design work)

**Time Estimate:** 4-6 hours

---

### 🤖 AI AGENT Tasks (Limited Automation Potential)

**Currently Limited:** AI cannot generate Figma wireframes autonomously (Figma's API doesn't support full design generation)

**Possible Automation (Future):**
- **Figma Plugins:** AI-assisted layout suggestions (e.g., Anima, Wireframe Designer)
- **Text-to-Wireframe Tools:** Not yet reliable for production use

**Recommendation:** Keep wireframing as **human-led creative work**

---

### 🔄 HUMAN & AI Collaboration

**What AI CAN Help With:**

**Agent:** `@user-centric-designer`

**Prompt:**
```
Review wireframe layout for [page name] and suggest UX improvements.

Context:
- Page: [Homepage, About, Services, etc.]
- Target Audience: [from BRAND_GUIDELINES.md]
- Goals: [e.g., Generate leads, Build trust, Showcase expertise]

Wireframe Description:
[Describe layout: "Hero section with headline, subheadline, 2 CTAs. Below that, 3-column services grid. Testimonials section. Final CTA."]

Tasks:
1. Identify potential UX issues (clarity, hierarchy, flow)
2. Suggest improvements based on:
   - Visual hierarchy (what draws attention first)
   - Cognitive load (is it overwhelming?)
   - User flow (does it guide toward conversion?)
3. Recommend accessibility considerations

Deliverable:
UX review with specific improvement suggestions
```

**Human Then:** Revise wireframes based on AI feedback

---

## Phase 3: High-Fidelity Design

### ✅ HUMAN Tasks (Creative Design Work)

**1. Design in Figma** (Humans design, NOT AI)
- Apply brand colors from mood board/guidelines
- Choose typography (Google Fonts, Adobe Fonts)
- Design components (buttons, cards, forms, navigation)
- Create component variants (hover states, active states)
- Design all key pages at 1440px desktop width
- Design mobile versions (375px)

**Required Input (From Client or AI Research):**
- ✅ Logo files (provided by client)
- ✅ Brand colors (from existing guidelines OR generated by AI from logo)
- ✅ Typography preferences (human decision, informed by mood board)
- ✅ Mood board inspiration (curated by human from AI research)

**Time Estimate:** 10-16 hours (full high-fidelity design)

---

### 🤖 AI AGENT Tasks (Brand Guidelines Generation from Logo)

**Scenario:** Client has NO existing brand guidelines, only a logo

**Agent:** `@brand-design-strategist` + `@web-intelligence-analyst`

**Prompt:**
```
Generate brand guidelines from logo file for [client name].

Context:
- Logo file: [path to logo.svg or logo.png]
- Industry: [from discovery]
- Target Audience: [from discovery]
- Competitor brands: [from competitive analysis]

Tasks:
1. Analyze logo:
   - Extract color palette (primary, secondary, accent colors)
   - Identify design style (modern, classic, playful, serious)
   - Note typography if text-based logo

2. Research industry color psychology:
   - What do these colors communicate?
   - Are they appropriate for industry/audience?

3. Recommend complete color palette:
   - Primary color (from logo)
   - Secondary color (complementary or analogous)
   - Neutral colors (backgrounds, text)
   - Semantic colors (success, error, warning, info)

4. Recommend typography:
   - Heading font (based on logo style)
   - Body font (readable, pairs well with headings)
   - Provide 3 Google Fonts options for each

5. Define brand personality:
   - 5 adjectives describing brand (Professional, Innovative, etc.)
   - Tone of voice (Authoritative, Conversational, etc.)

Deliverable:
Complete BRAND_GUIDELINES.md file populated with:
- Color palette (hex codes, usage guidelines)
- Typography recommendations
- Brand personality definition
- Design style guidelines
```

**Human Then:**
1. Review AI-generated brand guidelines
2. Discuss with client (get approval on colors, fonts, personality)
3. Refine based on client feedback
4. Finalize BRAND_GUIDELINES.md

**Time Saved:** ~4-6 hours (vs. creating from scratch)

---

### 🔄 Figma Design Handoff Options

**Option A: Figma Design Tokens (Recommended)**

**What It Is:** Export design variables (colors, spacing, typography) from Figma as JSON/CSS, import into `tailwind.config.cjs`

**Tools:**
1. **Figma Tokens Plugin** (https://www.figma.com/community/plugin/843461159747178978)
   - Export colors, spacing, typography as JSON
   - Import directly into Tailwind config

2. **Style Dictionary** (https://amzn.github.io/style-dictionary/)
   - Transforms design tokens into multiple formats
   - Converts Figma tokens → Tailwind classes

**Process:**
1. Design in Figma with consistent color/spacing variables
2. Use Figma Tokens plugin to export JSON
3. Import JSON into `tailwind.config.cjs`:
   ```javascript
   const tokens = require('./design-tokens.json');

   module.exports = {
     theme: {
       extend: {
         colors: tokens.colors,
         spacing: tokens.spacing,
         fontSize: tokens.typography.fontSize,
       },
     },
   };
   ```
4. Claude Code uses Tailwind classes that match Figma design

**Pros:**
- ✅ Single source of truth (Figma)
- ✅ Automated token sync
- ✅ No manual translation errors

**Cons:**
- ⚠️ Requires Figma plugin setup
- ⚠️ Learning curve for design tokens workflow

---

**Option B: Figma MCP (Model Context Protocol) - EXPERIMENTAL**

**What It Is:** Direct integration between Claude Code and Figma API to read designs programmatically

**Status:** Experimental, not officially supported by Anthropic yet

**Potential Process (if available):**
1. Claude Code connects to Figma API via MCP
2. Reads design file directly
3. Extracts component specs, colors, spacing
4. Generates Astro components automatically

**Pros:**
- ✅ No manual export needed
- ✅ Live sync with Figma file

**Cons:**
- ❌ Not yet production-ready
- ❌ Requires custom MCP server setup
- ❌ Figma API has rate limits

**Recommendation:** Wait for official MCP support, use Design Tokens for now

---

**Option C: PDF/Screenshot Export + Manual Translation**

**What It Is:** Export Figma designs as PDF or images, describe layout to Claude Code

**Process:**
1. Export Figma page as PDF (File → Export → PDF)
2. Prompt Claude Code with PDF + written description
3. Claude generates components based on visual + description

**Prompt Example:**
```
Build Homepage from attached Figma PDF design.

Design File: [attach figma-homepage.pdf]

Layout Description:
- Hero: Full-viewport height, centered heading + subheadline + 2 CTAs
- Services: 3-column grid, each card has icon + title + description
- Testimonials: Carousel with 3 customer quotes

Brand Colors (from tailwind.config.cjs):
- Primary: #1a202c
- Secondary: #2d3748

Requirements:
- Match spacing from PDF (use Chrome DevTools to measure if needed)
- Responsive: Stack on mobile, grid on desktop
- Follow .claude/skills/website/design-to-code-workflow/SKILL.md

Deliverable:
Functional index.astro page matching Figma design
```

**Pros:**
- ✅ Simple, no plugin setup
- ✅ Works with existing workflow

**Cons:**
- ⚠️ Manual measurement/translation needed
- ⚠️ Higher chance of mismatch with design

---

### 🏆 RECOMMENDED APPROACH

**For Maximum Efficiency:**

1. **Human designs in Figma** (creative work)
2. **Use Figma Tokens plugin** to export design tokens
3. **Import tokens into `tailwind.config.cjs`** (automated)
4. **Prompt Claude Code** with:
   - Design tokens already configured
   - PDF/screenshot for visual reference
   - Written description of layout
5. **Claude generates Astro components** using Tailwind classes that match Figma

**This combines:**
- ✅ Automated token sync (no manual color/spacing translation)
- ✅ Visual reference (PDF helps Claude understand layout)
- ✅ Clear specifications (written description ensures accuracy)

---

## Other Figma Tools for Automation

### 1. **Figma Dev Mode** (Built-in)
- **What:** Shows CSS properties, spacing, colors directly in Figma
- **Use:** Humans copy CSS values → translate to Tailwind manually
- **Cost:** Free with Figma account

### 2. **Anima (Figma to Code Plugin)**
- **What:** Generates React/HTML/Vue code from Figma designs
- **Use:** Export as HTML → reference for Astro structure (don't use code directly)
- **Cost:** Free tier available
- **Link:** https://www.figma.com/community/plugin/857346721138427857

### 3. **Locofy (Figma to Code)**
- **What:** Converts Figma designs to React, Vue, HTML
- **Use:** Generate component structure → adapt to Astro
- **Cost:** Free tier, paid for advanced features
- **Link:** https://www.locofy.ai/

### 4. **Figma REST API**
- **What:** Programmatic access to Figma files
- **Use:** Custom scripts to extract design data
- **Cost:** Free (requires API token)
- **Docs:** https://www.figma.com/developers/api

**Recommendation:** Start with **Figma Tokens + Dev Mode**, skip code generation plugins (output quality inconsistent)

---

## Phase 4: Design-to-Code Translation

### ✅ HUMAN Tasks

**1. Initial Setup**
- Configure Tailwind with design tokens (one-time setup)
- Create component structure plan (which components to build first)

**2. Prompting Claude Code**
- Write clear, specific prompts for each component
- Review generated code
- Test in browser at breakpoints (375px, 768px, 1440px)

**3. Quality Control**
- Compare browser rendering to Figma design
- Adjust spacing/colors if mismatched
- Verify responsive behavior
- Test accessibility (keyboard navigation, screen reader)

---

### 🤖 AI AGENT Tasks (Heavy Automation)

**Component Generation from Specifications**

**Agent:** Claude Code (main development interface)

**Prompt Template:**
```
Build [ComponentName] component for [client site].

Context:
- File: packages/ui-components/src/components/[ComponentName].astro
- Brand: From sites/[client]/BRAND_GUIDELINES.md
- Design: [Attach PDF or describe layout]

Requirements:
1. [Specific functional requirement]
2. [Specific functional requirement]
3. Responsive: Mobile-first (375px → 768px → 1440px)
4. Accessibility: WCAG 2.1 AA (keyboard nav, ARIA, alt text)
5. **Content width: 1440px maximum** (use max-w-[1440px])

Design Specs:
- Layout: [flex-row, grid, etc.]
- Spacing: [padding, margins, gaps]
- Typography: [heading sizes, text sizes]
- Colors: [bg colors, text colors from tailwind.config]

Constraints:
- Zero JavaScript (unless interactive behavior required)
- Tailwind classes only (no custom CSS)
- Follow .claude/skills/website/design-to-code-workflow/SKILL.md

Deliverable:
Production-ready [ComponentName].astro with JSDoc comment and usage example
```

**Components Built by AI:**
- ✅ Button (variants, sizes, states)
- ✅ Card (image, title, description, CTA)
- ✅ Hero (full-viewport, heading, CTAs)
- ✅ Navigation (desktop + mobile)
- ✅ Footer
- ✅ Form inputs
- ✅ Sections, containers

**Time Saved:** ~60-70% of coding time

---

## Phase 5-8: Remaining Workflow

*(Condensed - see COMPLETE_WORKFLOW_GUIDE.md for full details)*

**Phase 5: Content Integration**
- 🤖 AI: SEO metadata generation (`@seo-optimizer`)
- ✅ Human: Content review, Sveltia CMS configuration

**Phase 6: Quality Assurance**
- 🤖 AI: Automated quality gates (accessibility, SEO, performance audits)
- ✅ Human: Manual testing, client UAT

**Phase 7: Deployment**
- 🤖 AI: CI/CD automation (GitHub Actions)
- ✅ Human: DNS configuration, production verification

**Phase 8: Client Handoff**
- 🤖 AI: Documentation generation (`@user-guide-writer`)
- ✅ Human: Client training, ongoing support

---

## Summary: Optimal Human-AI Collaboration

### Humans Excel At:
- ✅ Client relationships & communication
- ✅ Creative design decisions
- ✅ Strategic planning
- ✅ Quality control & final approval

### AI Agents Excel At:
- 🤖 Research & data gathering (mood boards, competitors, keywords)
- 🤖 Code generation from specifications
- 🤖 Quality validation (SEO, accessibility, performance)
- 🤖 Documentation generation

### Time Savings Estimate:
- **Phase 1 Research:** 70% faster (8-10 hours → 2-3 hours)
- **Phase 3 Brand Guidelines:** 60% faster (6 hours → 2-3 hours if starting from logo)
- **Phase 4 Coding:** 60-70% faster (20 hours → 6-8 hours)
- **Overall:** ~50-60% reduction in total project time (40 hours → 20-25 hours)

---

**Last Updated:** November 9, 2025
**Next Review:** When Figma MCP becomes production-ready
