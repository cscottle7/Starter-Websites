# Project Constitution: Multi-Site Website Development System

---
## Part A: Strategic & Product Definition
---

### 1. The Press Release
*FOR IMMEDIATE RELEASE*

**Revolutionary Multi-Site Development System Enables Agencies to Launch AI-Optimized Client Websites in Under One Week**

**Washington, DC** – Today marks the launch of an innovative multi-site website development platform that transforms how agencies build and maintain client websites. By combining cutting-edge Astro framework technology with intelligent automation through Claude Code agents, agencies can now deliver high-performance, AI-optimized websites in less than one week—down from the industry standard of 3-4 weeks—while empowering non-technical clients to manage their own content through intuitive visual editing.

Built on a monorepo architecture with zero CMS licensing costs, this system solves the critical challenge facing modern web agencies: how to scale quality website delivery without proportional team growth. Through automated SEO auditing, accessibility compliance checking, and AI crawler optimization, agencies can maintain consistent excellence across their entire client portfolio while reducing manual audit work by 70%.

"This isn't just about building websites faster," explains the system architect. "It's about creating a sustainable, scalable foundation that treats AI agents—both as website visitors through crawlers like GPTBot and ClaudeBot, and as development partners through Claude Code automation—as first-class citizens in the entire development workflow."

The platform leverages Sveltia CMS for Git-based visual editing, ensuring all content changes are versioned and automatically validated through a comprehensive 6-gate quality system before deployment. With shared component libraries, centralized CI/CD pipelines, and intelligent orchestration of specialized Claude Code agents, agencies can now support 10+ client sites with their current team size while achieving superior performance metrics: Core Web Vitals "Good" scores across all sites, 100% schema markup coverage, and WCAG 2.1 AA accessibility compliance.

### 2. Customer FAQ

**Q: Can each client have their own custom domain?**
A: Absolutely. Each client site can use their own custom domain (e.g., clientname.com) while benefiting from the shared infrastructure and quality standards of the monorepo system. Domain configuration is straightforward through your deployment platform (Vercel/Netlify) or your own server setup.

**Q: Will my clients be able to edit their websites without technical knowledge?**
A: Yes. Clients access a modern visual editing interface through Sveltia CMS at their-site.com/admin. They can edit content, add pages, update images, and publish changes—all without touching code. Every change is automatically version-controlled in Git and runs through quality validation before deployment.

**Q: How does this system optimize for AI search engines like ChatGPT and Claude?**
A: The system is built from the ground up for AI crawler optimization. Astro's server-side rendering ensures all content is accessible to AI crawlers (which ignore client-side JavaScript), automated schema markup provides machine-readable structured data, and semantic HTML helps AI models understand and cite your content. The AI Readiness Auditor agent continuously validates these optimizations.

**Q: What happens if I need to roll back a change my client made?**
A: Because all content is stored in Git, every change has a complete history. You can roll back to any previous version instantly. Additionally, all changes deploy to a staging environment first, allowing preview and approval before production deployment.

**Q: How long does it take to launch a new client site?**
A: From initial setup to production deployment: less than one week. The system includes automated scaffolding scripts, pre-built component libraries, and quality validation workflows that eliminate weeks of manual work. Most agencies achieve first client site launch within 2 weeks during initial setup, then sub-1-week launches for subsequent clients.

**Q: Does this work with WordPress?**
A: This system uses Astro + Sveltia CMS for optimal performance and automation. However, WordPress integration is available as a premium tier option if clients specifically require WordPress. See the WordPress Options Analysis document for detailed comparison and trade-offs.

### 3. Internal FAQ

**Q: Why Astro instead of Next.js or other popular frameworks?**
A: Astro provides three critical advantages for multi-site agency work: (1) Islands architecture ships zero JavaScript by default, delivering 40% faster page loads than comparable Next.js setups—critical for SEO and Core Web Vitals; (2) Framework flexibility allows using React, Vue, Svelte, or Alpine components side-by-side; (3) Server-side rendering by default ensures AI crawlers (which ignore client-side JS) can access all content. Next.js is better suited for complex applications with database interactions and real-time functionality—not the primary use case for marketing/content websites.

**Q: Why Sveltia CMS instead of paid options like TinaCMS or CloudCannon?**
A: Sveltia CMS is 100% free and open source with zero licensing costs, enabling investment in better hosting and automation tools instead. It's a drop-in replacement for Decap CMS with 265+ bug fixes, modern UX, mobile-friendly interface, and active development toward v1.0 in early 2026. Since all content lives in Git (not the CMS database), we can migrate to CloudCannon ($49+/month) or TinaCMS if premium support becomes necessary. Starting free gives maximum flexibility.

**Q: What's the risk if Sveltia CMS development stalls or the project is abandoned?**
A: Minimal risk due to architecture design: (1) All content is stored in Git, not in the CMS—Sveltia is just an editing interface; (2) Sveltia is a drop-in replacement for Decap CMS, so we can fall back instantly; (3) The system architecture supports swapping CMSs (TinaCMS, CloudCannon) with minimal code changes; (4) Git-based CMS is an established pattern with multiple competing implementations. The CMS layer is intentionally decoupled from core infrastructure.

**Q: How do we handle clients with different branding requirements?**
A: The three-tier customization model addresses this: (1) Template Core (shared build tooling, SEO utilities, quality standards—never customized); (2) Design System (color tokens, typography, component variants—customizable per client via `astro.config.mjs` and client-specific components); (3) Content & Configuration (fully client-specific via `BRAND_GUIDELINES.md` and Sveltia CMS content). Clients get unique branding while benefiting from shared infrastructure.

**Q: What's our deployment strategy—our own server or platforms like Vercel/Netlify?**
A: **Primary recommendation: Your own server** for full control and zero ongoing hosting costs. Astro builds to static files that can be served via Nginx/Apache on any server. **Alternative: Vercel/Netlify** ($20-19/month per site) if you prefer managed hosting with automatic preview deployments and CDN distribution. The architecture supports both approaches—choose based on your team's DevOps capabilities and client budget.

**Q: How do Claude Code agents integrate with the development workflow?**
A: Agents operate at multiple levels: (1) **Manual invocation** during development (e.g., "@seo-optimizer audit the homepage"); (2) **Automated via GitHub Actions** on content changes (Sveltia CMS edit → Git commit → webhook → agent runs quality checks); (3) **Orchestrated workflows** where master orchestrator agents coordinate multiple specialist agents through research → development → quality → deployment phases. All agent prompts are version-controlled in `.claude/agents/`.

**Q: What's the total cost to implement this system?**
A: **Initial setup (Phase 1-2, Weeks 1-4):** $10k-$25k in developer time for monorepo setup, first pilot client site, and core Claude Code agents. **Per-client costs (after setup):** $2k-$5k development time using scaffolding scripts. **Ongoing:** Near-zero CMS costs (Sveltia is free), minimal hosting (your server or $20/month Vercel), maintenance automated via agents. Compare to WordPress headless alternative: $50k-$150k initial, 40-60% higher ongoing costs.

### 4. Project Goal & High-Level Requirements

**Jobs-to-be-Done (JTBD) Statement:**

When I need to launch and maintain multiple high-quality client websites, I want a scalable development system with automated quality checks and non-technical client editing, so I can deliver consistently excellent, AI-optimized sites in under one week without growing my team proportionally.

**Core Requirements:**

1. **Rapid Client Site Deployment:** Launch new client websites from template to production in <1 week (vs. 3-4 weeks currently)

2. **Automated Quality Assurance:** 70% reduction in manual SEO, accessibility, and performance audits through Claude Code agent automation

3. **Non-Technical Client Empowerment:** Visual editing interface (Sveltia CMS) enabling clients to independently manage content without developer support

4. **AI-First Optimization:** All sites optimized for AI crawler indexing (GPTBot, ClaudeBot) through server-side rendering, schema markup, and semantic HTML

5. **Scalable Portfolio Management:** Support 10+ client sites with current team size through shared component libraries and centralized CI/CD

6. **Cost Efficiency:** Zero CMS licensing costs, minimal hosting expenses, maximum automation ROI

### 5. Success Metrics & Measurement Plan

**Primary Success Metrics:**

1. **Time to Launch (Target: <1 week per client site)**
   - **Measurement:** Track from `pnpm create-client` execution to production deployment
   - **Baseline:** 3-4 weeks (current manual process)
   - **Target:** <7 calendar days for new client sites after initial system setup
   - **Validation:** GitHub commit timestamps, deployment logs

2. **Automation ROI (Target: 70% reduction in manual audit time)**
   - **Measurement:** Hours spent on SEO/accessibility/performance audits before vs. after automation
   - **Baseline:** ~8 hours/site/month for manual audits
   - **Target:** <2.5 hours/site/month (automated checks handle routine work)
   - **Validation:** Time tracking, developer surveys

3. **Client Independence (Target: 90% of content updates without developer)**
   - **Measurement:** Percentage of content changes made by clients via Sveltia CMS vs. requiring developer assistance
   - **Baseline:** 0% (clients currently request all changes)
   - **Target:** 90% of routine content updates (text, images, pages) self-service
   - **Validation:** Git commit author analysis, support ticket tracking

4. **Portfolio Scalability (Target: 10+ client sites with current team)**
   - **Measurement:** Number of active client sites supported without team growth
   - **Baseline:** 3-5 sites with current team size
   - **Target:** 10+ sites maintaining quality standards
   - **Validation:** Active client count, team size stability

5. **AI Crawler Indexing (Target: 90%+ content crawled)**
   - **Measurement:** Percentage of site content successfully crawled by GPTBot, ClaudeBot, and other AI crawlers
   - **Baseline:** Unknown (not currently tracked)
   - **Target:** 90%+ of pages indexed and accessible to AI crawlers
   - **Validation:** Server log analysis (crawler user agents), llms.txt validation

**Secondary Quality Metrics:**

6. **Core Web Vitals (Target: All "Good" scores)**
   - LCP (Largest Contentful Paint): <2.5 seconds
   - FID (First Input Delay): <100 milliseconds
   - CLS (Cumulative Layout Shift): <0.1
   - **Measurement:** Google PageSpeed Insights API, Vercel Analytics
   - **Validation:** Monthly automated audits per site

7. **Accessibility Compliance (Target: WCAG 2.1 AA)**
   - **Measurement:** Automated accessibility auditor agent + manual spot checks
   - **Target:** Zero critical violations, <5 warnings per site
   - **Validation:** axe-core tests, Playwright browser automation

8. **SEO Health (Target: 100% schema markup coverage)**
   - **Measurement:** Percentage of key pages with valid JSON-LD schema markup
   - **Target:** 100% coverage on homepage, about, services, blog posts
   - **Validation:** Google Rich Results Test, schema validation tools

9. **Build Performance (Target: <60 seconds per site)**
   - **Measurement:** CI/CD build time from commit to deployable artifact
   - **Target:** <60 seconds for typical site builds
   - **Validation:** GitHub Actions workflow duration logs

10. **Security Posture (Target: Zero high/critical vulnerabilities)**
    - **Measurement:** Dependency audit results, security agent scans
    - **Target:** Zero high or critical severity vulnerabilities
    - **Validation:** npm audit, security-auditor agent reports

### 6. Core Features & Scope

### 0. Current Project Status

**As of October 31, 2025:**

This constitution represents the **target architecture** for a multi-site website development system. The document has been structured to guide implementation and serve as the single source of truth for architectural decisions.

**Current Phase: Phase 0 - Strategic Planning & Architecture Definition**

**Completed:**
- ✅ Project constitution and strategic vision documented
- ✅ Tech stack evaluation and architectural design (Astro 5.0 + Nx + Sveltia CMS)
- ✅ WordPress alternatives analysis
- ✅ 32 SEO/content SOPs created (foundation for future agent knowledge)
- ✅ 4 generic Claude Code skills established (code quality, security, documentation, testing)

**Next Steps:**
- Phase 1: Foundation Infrastructure (Nx monorepo, shared packages)
- Phase 2: Pilot Client Site (first functional implementation)
- Phase 3: Automation Foundation (agents, quality gates, CI/CD)

All checkmarks below in "Phases 1-3" represent **planned features** that will validate this architecture, not completed work.

---

#### Planned Features (Phases 1-3, Estimated 6-8 Weeks)

**Foundation Infrastructure:**
- ⏱️ Nx monorepo setup with workspace configuration
- ⏱️ Shared component library (`packages/ui-components/`) with 10-15 base Astro components
- ⏱️ Shared SEO utilities (`packages/seo-utils/`) for schema markup and meta tag generation
- ⏱️ First pilot client site in `sites/client-pilot/`

**CMS Integration:**
- ⏱️ Sveltia CMS installation and configuration
- ⏱️ GitHub OAuth authentication for content editing
- ⏱️ Editable content collections (pages, blog posts, navigation)
- ⏱️ Preview templates for common page types
- ⏱️ Git-based content workflow with full version history

**Claude Code Agents (Tier 1 - Core):**
- ⏱️ `seo-optimizer.md` - SEO auditing, schema markup validation, meta tag optimization
- ⏱️ `accessibility-auditor.md` - WCAG 2.1 AA compliance checking, ARIA implementation
- ⏱️ `content-optimizer.md` - Content quality assessment, AI readability optimization

**Automation Pipeline:**
- ⏱️ GitHub Actions workflow for content quality checks
- ⏱️ Webhook integration (GitHub push events → agent invocation)
- ⏱️ Staging deployment environment
- ⏱️ Production deployment workflow

**Documentation (Core):**
- ⏱️ QUICK_START.md - 5-minute developer onboarding
- ⏱️ CLIENT_ONBOARDING.md - New client site setup process
- ⏱️ CMS_SETUP.md - Sveltia CMS configuration guide

#### In Scope (for Phase 4+, Weeks 7-12)

**Advanced Orchestration:**
- ⏱️ `website-project-orchestrator.md` - Master project coordinator
- ⏱️ `quality-gate-orchestrator.md` - 6-gate quality validation system
- ⏱️ `multi-site-deployment-orchestrator.md` - Cross-site deployment coordination

**Research & Strategy Agents (Tier 3):**
- ⏱️ `keyword-researcher.md` - SEO keyword research and content strategy
- ⏱️ `competitive-intelligence-analyst.md` - Competitor website analysis
- ⏱️ `brand-sentiment-analyst.md` - Brand consistency validation
- ⏱️ `content-auditor.md` - Cross-site content quality assessment

**Specialized Analysis (Tier 4):**
- ⏱️ `ai-readiness-auditor.md` - AI crawler optimization validation
- ⏱️ `static-site-build-agent.md` - Build performance optimization

**Skills Library:**
- ⏱️ `skills/website/seo-checklist/` - SEO audit procedures
- ⏱️ `skills/website/accessibility-wcag/` - WCAG guidelines with examples
- ⏱️ `skills/website/astro-patterns/` - Astro best practices
- ⏱️ `skills/orchestration/quality-gates/` - Multi-checkpoint validation workflows

**Enhanced Documentation:**
- ⏱️ AGENT_GUIDE.md - Complete agent usage and creation guide
- ⏱️ ORCHESTRATOR_WORKFLOWS.md - Multi-agent coordination patterns
- ⏱️ DEPLOYMENT_GUIDE.md - Server/Vercel/Netlify deployment
- ⏱️ QUALITY_GATES.md - Quality validation system explanation
- ⏱️ TROUBLESHOOTING.md - Common issues and solutions

#### Out of Scope (for MVP)

**Deferred to Future Versions:**
- ❌ WordPress integration (analyzed separately, available as premium tier later)
- ❌ E-commerce functionality (Shopify/WooCommerce integration)
- ❌ Multi-language/i18n support (single language per site for MVP)
- ❌ User authentication/member areas (static sites only for MVP)
- ❌ Advanced analytics dashboards (basic Google Analytics only)
- ❌ Automated social media integration
- ❌ Email marketing platform integration

**Explicitly Not Being Built:**
- ❌ WordPress/PHP-based solutions (Astro + Sveltia CMS chosen instead)
- ❌ Database-backed dynamic applications (static site generation focus)
- ❌ Native mobile apps (web-only for MVP)
- ❌ Proprietary CMS development (using open-source Sveltia CMS)

---
## Part B: Technical & Operational Framework
---

### 7. Strategic Constraint Tags for AI Architect

**Philosophy Tag:** `[Philosophy:Pragmatism]`

**Constraint Tags:**
- `[Constraint:Performance]` - Core Web Vitals "Good" scores mandatory
- `[Constraint:Scalability]` - Must support 10+ client sites without team growth
- `[Constraint:Automation]` - 70% reduction in manual quality checks required
- `[Constraint:Cost-Efficiency]` - Zero CMS licensing costs, minimal hosting expenses

### 8. Tech Stack & Key Libraries

#### Frontend Framework & Build Tools
- **Primary Framework:** Astro 5.0 (Islands architecture, SSR, partial hydration)
- **Styling Framework:** Tailwind CSS 3.4+ (utility-first CSS, design tokens)
- **Component Library Base:** Astro components (`.astro` files) with framework flexibility
- **Build Tool:** Vite 5.0+ (bundled with Astro, fast HMR)
- **Package Manager:** pnpm 8+ (fast, disk-efficient, monorepo-friendly)

#### CMS & Content Management
- **CMS Platform:** Sveltia CMS (free, open-source, Git-based visual editing)
- **Content Storage:** Git repository (version-controlled markdown/YAML/JSON files)
- **CMS Authentication:** GitHub OAuth
- **Content Collections:** Astro Content Collections API (type-safe content schemas)

#### Monorepo & Workspace Management
- **Monorepo Tool:** Nx 17+ (advanced caching, task orchestration, dependency graph)
- **Workspace Structure:** pnpm workspaces for package management
- **Shared Packages:**
  - `@workspace/ui-components` - Reusable Astro components
  - `@workspace/seo-utils` - Schema markup generators, meta tag utilities
  - `@workspace/cms-config` - Shared Sveltia CMS configurations

#### Deployment & CI/CD
- **Primary Deployment Target:** Your own server (Nginx/Apache serving static files)
- **Alternative Deployment:** Vercel or Netlify (if managed hosting preferred)
- **CI/CD Platform:** GitHub Actions (native Claude Code on Web integration)
- **Build Output:** Static HTML/CSS/JS files (SSR pre-rendered at build time)

#### Automation & Quality Tools
- **AI Automation:** Claude Code agents (custom `.md` agent definitions in `.claude/agents/`)
- **Accessibility Testing:** axe-core, @axe-core/playwright
- **SEO Validation:** Google Rich Results Test API, schema.org validators
- **Performance Monitoring:** Lighthouse CI, Google PageSpeed Insights API
- **Linting:** ESLint 8+ (JavaScript/TypeScript), Prettier 3+ (code formatting)
- **Type Checking:** TypeScript 5.2+ (strict mode enabled)

#### Key Libraries & Utilities

**SEO & Schema Markup:**
- **schema-dts:** TypeScript definitions for schema.org structured data
- **astro-seo:** Astro integration for meta tags and SEO configuration
- **sitemap:** Automated XML sitemap generation

**Accessibility:**
- **@axe-core/playwright:** Browser-based accessibility testing
- **aria-query:** ARIA attribute validation

**Image Optimization:**
- **@astrojs/image:** Astro's built-in image optimization (WebP conversion, responsive images)
- **sharp:** High-performance image processing library

**Development Tools:**
- **@playwright/test:** End-to-end browser testing for quality gate validation
- **vitest:** Fast unit testing framework (Vite-native)
- **typescript-eslint:** TypeScript linting

**Monitoring (Optional):**
- **Google Analytics 4:** Web analytics (client implementation)
- **Vercel Analytics:** Performance monitoring (if using Vercel deployment)

### 9. Project File Structure

```
starter-template/                      # Root monorepo (Git repository root)
├── .github/
│   ├── workflows/
│   │   ├── ci-quality.yml             # Linting, type-checking, tests
│   │   ├── content-quality-check.yml  # Claude Code agent automation
│   │   ├── deploy-staging.yml         # Automated staging deployments
│   │   └── deploy-production.yml      # Production deployment per site
│   └── CODEOWNERS                     # Define code review ownership
│
├── packages/                          # Shared workspace packages
│   ├── ui-components/                 # Shared design system components
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Button.astro       # Example: Reusable button component
│   │   │   │   ├── Card.astro
│   │   │   │   ├── Hero.astro
│   │   │   │   ├── Navigation.astro
│   │   │   │   └── Footer.astro
│   │   │   └── index.ts               # Barrel export for all components
│   │   ├── package.json               # Component library dependencies
│   │   ├── tsconfig.json
│   │   └── README.md
│   │
│   ├── seo-utils/                     # Shared SEO utilities
│   │   ├── src/
│   │   │   ├── schema-generator.ts    # JSON-LD schema markup helpers
│   │   │   ├── meta-tags.ts           # Meta tag generation utilities
│   │   │   ├── sitemap-builder.ts     # XML sitemap generation
│   │   │   └── robots-txt.ts          # robots.txt generation (AI crawler friendly)
│   │   ├── package.json
│   │   └── README.md
│   │
│   └── cms-config/                    # Shared CMS configurations
│       ├── sveltia-base-config.yml    # Base Sveltia CMS configuration template
│       ├── content-schemas/           # Reusable content type schemas
│       │   ├── blog-post.yml
│       │   ├── page.yml
│       │   └── navigation.yml
│       └── README.md
│
├── sites/                             # Individual client websites
│   ├── client-a/                      # Example client site
│   │   ├── src/
│   │   │   ├── pages/                 # Astro pages (file-based routing)
│   │   │   │   ├── index.astro        # Homepage
│   │   │   │   ├── about.astro
│   │   │   │   └── blog/
│   │   │   │       ├── index.astro
│   │   │   │       └── [slug].astro   # Dynamic blog post pages
│   │   │   ├── layouts/
│   │   │   │   ├── BaseLayout.astro   # Base HTML structure
│   │   │   │   └── BlogLayout.astro
│   │   │   ├── content/               # Sveltia CMS editable content
│   │   │   │   ├── config.ts          # Content collection schemas
│   │   │   │   ├── pages/             # Page content (markdown)
│   │   │   │   └── blog/              # Blog post content
│   │   │   └── components/            # Client-specific component variants
│   │   ├── public/
│   │   │   ├── admin/
│   │   │   │   ├── index.html         # Sveltia CMS entry point
│   │   │   │   └── config.yml         # Sveltia CMS configuration
│   │   │   ├── robots.txt             # Generated, AI crawler friendly
│   │   │   └── favicon.ico
│   │   ├── astro.config.mjs           # Astro configuration (client-specific)
│   │   ├── tailwind.config.cjs        # Tailwind CSS config (brand colors)
│   │   ├── tsconfig.json
│   │   ├── package.json
│   │   ├── BRAND_GUIDELINES.md        # Client brand identity documentation
│   │   └── README.md
│   ├── client-b/                      # Second client site (same structure)
│   └── client-c/
│
├── .claude/                           # Claude Code agent definitions
│   ├── agents/
│   │   ├── orchestrators/             # Orchestrator agents (BiggerBoss pattern)
│   │   │   ├── website-project-orchestrator.md
│   │   │   ├── quality-gate-orchestrator.md
│   │   │   └── multi-site-deployment-orchestrator.md
│   │   └── website/                   # Website-specific specialist agents
│   │       ├── seo-optimizer.md       # SEO auditing and optimization
│   │       ├── accessibility-auditor.md  # WCAG compliance checking
│   │       ├── content-optimizer.md   # Content quality and AI readiness
│   │       ├── keyword-researcher.md  # SEO keyword research
│   │       ├── competitive-intelligence-analyst.md
│   │       ├── brand-sentiment-analyst.md
│   │       ├── content-auditor.md
│   │       └── ai-readiness-auditor.md
│   └── skills/                        # Reusable agent knowledge
│       ├── website/
│       │   ├── seo-checklist/
│       │   │   └── SKILL.md           # SEO audit procedures
│       │   ├── accessibility-wcag/
│       │   │   └── SKILL.md           # WCAG 2.1 guidelines with examples
│       │   ├── astro-patterns/
│       │   │   └── SKILL.md           # Astro best practices
│       │   ├── sveltia-cms-config/
│       │   │   └── SKILL.md           # CMS setup patterns
│       │   ├── keyword-research-methodology/
│       │   │   └── SKILL.md
│       │   ├── competitive-analysis/
│       │   │   └── SKILL.md
│       │   └── performance-budgets/
│       │       └── SKILL.md           # Core Web Vitals targets
│       └── orchestration/
│           ├── coordination-patterns/
│           │   └── SKILL.md           # Agent delegation patterns
│           └── quality-gates/
│               └── SKILL.md           # Multi-checkpoint workflows
│
├── scripts/                           # Automation scripts
│   ├── new-client-site.sh             # Scaffold new client from template
│   └── sync-shared-deps.sh            # Update shared package dependencies
│
├── docs/                              # Comprehensive documentation (BiggerBoss-inspired)
│   ├── QUICK_START.md                 # Get started in 5 minutes
│   ├── AGENT_GUIDE.md                 # How to use and create agents
│   ├── ORCHESTRATOR_WORKFLOWS.md      # How orchestrators coordinate work
│   ├── CLIENT_ONBOARDING.md           # Add new client process
│   ├── CMS_SETUP.md                   # Sveltia CMS configuration guide
│   ├── DEPLOYMENT_GUIDE.md            # Server/Vercel/Netlify deployment
│   ├── QUALITY_GATES.md               # Understanding quality validation
│   ├── TROUBLESHOOTING.md             # Common issues and solutions
│   └── AUTOMATION_SETUP.md            # Webhook and CI/CD automation
│
├── nx.json                            # Nx monorepo configuration
├── package.json                       # Root workspace dependencies
├── pnpm-workspace.yaml                # pnpm workspace configuration
├── tsconfig.base.json                 # Base TypeScript configuration
├── .eslintrc.js                       # ESLint configuration
├── .prettierrc                        # Prettier configuration
├── .gitignore
├── CLAUDE.md                          # This file (project constitution)
└── README.md                          # Setup and contribution guide
```

### 10. Key Commands

**Initial Setup:**
```bash
# Clone repository and install dependencies
git clone <repository-url> starter-template
cd starter-template
pnpm install
```

**Development:**
```bash
# Start development server for specific client site
pnpm dev --filter=client-a

# Start all client sites concurrently (for multi-site preview)
pnpm dev

# Build specific client site
nx build client-a

# Build all sites
nx run-many --target=build --all
```

**New Client Site Creation:**
```bash
# Scaffold new client site from template
pnpm create-client --name="acme-corp"

# Alternative with full options
pnpm create-client --name="acme-corp" --domain="acmecorp.com"
```

**Quality Checks:**
```bash
# Run linting across workspace
nx run-many --target=lint --all

# Run type checking
nx run-many --target=type-check --all

# Run accessibility audits via Playwright
nx run-many --target=test:a11y --all

# Run all quality gates (full validation)
pnpm quality-gates --site=client-a
```

**Claude Code Agent Invocation:**
```bash
# Invoke SEO optimizer on specific client site
claude-code --agent=seo-optimizer --project=sites/client-a

# Run quality gate orchestrator (automated multi-agent workflow)
claude-code --agent=quality-gate-orchestrator --project=sites/client-a
```

**Deployment:**
```bash
# Deploy to staging (automated via GitHub Actions on push)
git push origin staging

# Deploy specific site to production (manual trigger)
pnpm deploy:production --site=client-a

# Deploy all sites to production
pnpm deploy:production --all
```

**Maintenance:**
```bash
# Update shared dependencies across all sites
pnpm sync-shared-deps

# Update Nx cache
nx reset

# Analyze bundle sizes
nx run client-a:analyze
```

### 11. Code Style & Conventions

**General Principles:**
- All new code must be accompanied by appropriate tests (unit tests for utilities, Playwright tests for UI components)
- Use TypeScript strict mode for all new code (`strict: true` in `tsconfig.json`)
- Prefer functional programming patterns (pure functions, immutability) over object-oriented approaches
- Write self-documenting code with clear variable/function names; add comments only for complex business logic
- Follow the principle of least surprise—consistency with existing patterns is more important than individual preference

**Astro Components (`.astro` files):**
- Use PascalCase for component filenames: `HeroSection.astro`, `BlogPostCard.astro`
- Keep components small and focused (single responsibility principle)
- Extract reusable logic to utility functions in TypeScript files
- Use Astro's Content Collections API for all content (never hardcode content in components)
- Prefer static rendering by default; add `client:*` directives only when interactivity is required
- Component structure order:
  ```astro
  ---
  // 1. Imports
  import { SomeUtility } from '@workspace/seo-utils';

  // 2. Props interface
  interface Props {
    title: string;
    description?: string;
  }

  // 3. Props destructuring
  const { title, description } = Astro.props;

  // 4. Logic (data fetching, transformations)
  const processedTitle = title.toUpperCase();
  ---

  <!-- 5. Template -->
  <section>
    <h1>{processedTitle}</h1>
    {description && <p>{description}</p>}
  </section>

  <!-- 6. Scoped styles (if needed) -->
  <style>
    section {
      @apply container mx-auto px-4;
    }
  </style>
  ```

**TypeScript:**
- Use snake_case for file names in utility directories: `schema_generator.ts`, `meta_tags.ts`
- Use PascalCase for component files: `Button.astro`, `HeroSection.astro`
- Use camelCase for functions and variables: `generateSchema()`, `metaTitle`
- Use PascalCase for types/interfaces: `BlogPost`, `SEOMetadata`
- Prefer `interface` over `type` for object shapes (better error messages)
- Always define explicit return types for public functions
- Prefer `const` over `let`; avoid `var` entirely
- Use template literals for string concatenation: `` `${base}/${path}` ``

**Tailwind CSS:**
- Use Tailwind utility classes directly in Astro templates (avoid custom CSS unless necessary)
- Define design tokens in `tailwind.config.cjs` per client site:
  ```javascript
  // sites/client-a/tailwind.config.cjs
  module.exports = {
    theme: {
      extend: {
        colors: {
          primary: '#1a202c',   // Client brand primary color
          secondary: '#2d3748', // Client brand secondary color
        },
      },
    },
  };
  ```
- Use `@apply` directive in `<style>` blocks only for frequently repeated complex patterns
- Prefer responsive modifiers (`md:`, `lg:`) over media queries
- Order utility classes consistently: layout → sizing → spacing → typography → colors → effects

**Content & Markdown:**
- Use frontmatter YAML for all metadata:
  ```yaml
  ---
  title: "Page Title"
  description: "SEO meta description"
  publishDate: 2025-10-29
  author: "Client Name"
  ---
  ```
- Use semantic heading hierarchy (single H1 per page, progressive H2 → H3 → H4)
- Always include alt text for images: `![Descriptive alt text](./image.jpg)`
- Use relative links for internal pages: `[About](/about)` not `[About](https://site.com/about)`

**Git Commit Messages:**
- Follow Conventional Commits specification:
  - `feat(client-a): add contact form to homepage`
  - `fix(seo-utils): correct schema markup for Article type`
  - `docs(readme): update deployment instructions`
  - `chore(deps): update Astro to 5.0.1`
- Scope should reference affected package/site: `(client-a)`, `(ui-components)`, `(seo-utils)`
- Keep first line under 72 characters
- Add description in commit body for complex changes

**Claude Code Agent Definitions:**
- Store agent definitions in `.claude/agents/` directory
- Use kebab-case for agent filenames: `seo-optimizer.md`, `accessibility-auditor.md`
- Follow agent template structure: name, description, system prompt, tools, model selection
- Document agent purpose and expected outputs clearly
- Version control agent prompts with changelog comments

### 12. Architectural Principles & Constraints

**Core Architectural Principles:**

1. **Static-First, Dynamic When Necessary**
   - All client sites must be statically generated by default (Astro SSG mode)
   - Add server-side rendering (SSR) or client-side interactivity only when required
   - Ship zero JavaScript by default; hydrate components selectively using Astro Islands (`client:load`, `client:visible`, etc.)
   - Justification: AI crawlers ignore client-side JavaScript; static HTML ensures complete content accessibility

2. **Git as Single Source of Truth**
   - All content must be stored in Git repository (markdown, YAML, JSON files)
   - NO database-backed content storage for MVP (Sveltia CMS edits commit directly to Git)
   - Content changes trigger Git commits → webhooks → automated quality checks
   - Justification: Full version history, no vendor lock-in, Claude Code agents can read/validate content

3. **Monorepo Modularity**
   - Shared components live in `packages/ui-components/` (single source of truth)
   - Client sites extend/customize via composition, not modification
   - Update shared component once → propagates to all client sites on next build
   - Justification: Consistent quality standards, DRY principle, centralized maintenance

4. **Automated Quality Gates (Non-Negotiable)**
   - NO deployment to production without passing all 6 quality gates:
     1. Code Quality (linting, type-checking)
     2. SEO Compliance (>90/100 score via `seo-optimizer` agent)
     3. Accessibility (WCAG 2.1 AA via `accessibility-auditor` agent)
     4. Performance (Core Web Vitals "Good" via Lighthouse CI)
     5. AI Readiness (crawler validation via `ai-readiness-auditor`)
     6. Security (zero high/critical vulnerabilities via dependency audits)
   - Gate failures return to development phase for fixes (max 3 retry attempts)
   - Justification: Enforce consistent quality across all client sites

5. **AI-First Content Architecture**
   - Server-side rendering (SSR) required for all content pages
   - JSON-LD schema markup (schema.org) required for all key pages (homepage, about, services, blog posts)
   - Semantic HTML required (proper heading hierarchy, ARIA attributes, alt text)
   - DO NOT block AI crawlers in `robots.txt` unless client explicitly requests
   - Justification: AI crawlers (GPTBot, ClaudeBot) becoming primary discovery mechanism alongside Google

6. **Separation of Concerns**
   - Editing Layer: Sveltia CMS visual editor (non-technical client interface)
   - Storage Layer: Git repository (version control, source of truth)
   - Automation Layer: Claude Code agents (quality validation, optimization)
   - Deployment Layer: CI/CD pipeline (build, test, deploy)
   - Justification: Each layer can be swapped independently (e.g., migrate from Sveltia to CloudCannon without touching other layers)

**Design Patterns:**

1. **Three-Tier Customization Model**
   - **Tier 1: Template Core** (NEVER customized per client)
     - Build tooling (`astro.config.mjs` base, `nx.json`, GitHub Actions workflows)
     - Core SEO utilities (`packages/seo-utils/`)
     - Quality standards (ESLint, Prettier, tsconfig.base.json)
   - **Tier 2: Design System** (Customizable per client)
     - Color tokens and typography (`tailwind.config.cjs` per site)
     - Component variants (extend base components in `sites/client-x/src/components/`)
     - Brand-specific layouts
   - **Tier 3: Content & Configuration** (Fully client-specific)
     - Sveltia CMS content (`sites/client-x/src/content/`)
     - Brand guidelines (`sites/client-x/BRAND_GUIDELINES.md`)
     - Client-specific plugins/integrations

2. **Multi-Orchestrator Hierarchy (BiggerBoss Pattern)**
   - **Master Orchestrator:** `@website-project-orchestrator` (high-level client project coordination)
   - **Phase-Specific Orchestrators:**
     - Research & Strategy: `@keyword-researcher`, `@competitive-intelligence-analyst`
     - Development: `@seo-optimizer`, `@accessibility-auditor`, `@content-optimizer`
     - Quality Validation: `@quality-gate-orchestrator` (sequential gate execution)
     - Deployment: `@multi-site-deployment-orchestrator`
   - **Specialist Agents:** Single-purpose agents invoked by orchestrators
   - Agent communication via `@agent_name` syntax in prompts

3. **Quality Gate Pattern (Sequential Validation)**
   - Gate N+1 only executes if Gate N passes
   - Each gate has clear pass/fail criteria (quantified thresholds)
   - Gate failure returns to development phase with specific fix recommendations
   - All gates must pass before production deployment
   - Example Gate 2 (SEO Compliance):
     ```yaml
     pass_criteria:
       - meta_tags_present: true
       - schema_markup_valid: true
       - heading_hierarchy_correct: true
       - image_alt_text_coverage: >90%
       - seo_score: >90
     ```

**Data Flow & State Management:**

1. **Content Update Workflow**
   ```
   Client Editor (Sveltia CMS at /admin)
     → GitHub OAuth Authentication
     → Visual Content Editing
     → Git Commit (via Sveltia → GitHub API)
     → GitHub Webhook Trigger (push event)
     → GitHub Actions Workflow Starts
     → Claude Code Agent Invocation (quality checks)
     → Automated Fixes Committed (if needed)
     → CI/CD Build (Astro static generation)
     → Staging Deployment (preview URL)
     → Client Approval
     → Production Deployment (manual merge or automated)
   ```

2. **Build-Time Data Sources**
   - Content Collections: Astro's Content Collections API fetches from `src/content/`
   - Schema Markup: Generated at build time via `@workspace/seo-utils` functions
   - Sitemap: Generated at build time, includes all static routes
   - NO runtime API calls to CMS (content baked into HTML at build time)

**Error Handling & Resilience:**

1. **Build Failures**
   - All TypeScript errors must be resolved before build completes (strict mode)
   - Invalid content schema (missing required frontmatter) fails build with clear error message
   - Broken internal links detected via `astro check` and fail build
   - Recovery: Fix errors locally, commit, re-trigger build

2. **Quality Gate Failures**
   - Gate failure creates GitHub issue with specific failure details
   - Development team notified via GitHub notifications
   - Maximum 3 retry attempts per gate; after 3 failures, escalate to manual review
   - Recovery: Address specific failures listed in gate report, re-run quality gates

3. **CMS Unavailability**
   - Sveltia CMS is static HTML/JS served from `/admin` (no external service dependency)
   - If GitHub API unavailable, content editing paused (graceful degradation: show error message)
   - Existing content unaffected (already in Git repository)
   - Recovery: Wait for GitHub API recovery; if extended outage, edit content directly in repository

**Performance Budgets:**

- **Bundle Size:** <500KB total JavaScript per page (measured at build time)
- **Time to Interactive (TTI):** <3.5 seconds on 3G mobile connection
- **Lighthouse Performance Score:** >90 for all pages
- **Build Time:** <60 seconds per client site (measured in CI/CD)
- **Image Optimization:** All images converted to WebP with responsive sizes

**Security Constraints:**

- All dependencies must pass `npm audit` with zero high/critical vulnerabilities
- NO hardcoded secrets or API keys in repository (use environment variables via `.env` files, gitignored)
- ALL forms must include CSRF protection if server-side handling added
- Content Security Policy (CSP) headers configured to prevent XSS attacks
- HTTPS enforced for all production deployments

**Accessibility Requirements (WCAG 2.1 AA Compliance):**

- All interactive elements keyboard-accessible (tab navigation functional)
- Color contrast ratios meet minimum standards (4.5:1 for normal text, 3:1 for large text)
- All images include descriptive alt text (validated by `accessibility-auditor` agent)
- Proper ARIA attributes for custom interactive components
- Semantic HTML structure (nav, main, aside, footer, article, section elements used appropriately)
- Focus indicators visible on all interactive elements

### 13. Prohibitions (Forbidden Actions)

**DO NOT:**

1. **DO NOT** use WordPress, PHP, or database-backed content management
   - **Rationale:** This system is designed for static site generation with Git-based content. WordPress adds complexity, costs, and prevents full automation benefits.
   - **Exception:** WordPress available as separate premium tier if client explicitly requires it (see WordPress_Options_Analysis.md)

2. **DO NOT** deploy to production without passing all 6 quality gates
   - **Rationale:** Quality gates ensure consistent standards across client portfolio. Bypassing gates creates technical debt and client dissatisfaction.
   - **Emergency Override:** Requires written approval from technical lead + documentation of why gates bypassed

3. **DO NOT** store content in databases or external CMS APIs
   - **Rationale:** Git is single source of truth. External storage breaks version control, creates vendor lock-in, prevents Claude Code agent analysis.
   - **Exception:** Third-party integrations (e.g., Shopify for e-commerce) allowed as data sources but NOT for primary content

4. **DO NOT** block AI crawlers (GPTBot, ClaudeBot, etc.) in robots.txt
   - **Rationale:** AI crawler indexing is a core success metric. Blocking them defeats primary value proposition of AI-first architecture.
   - **Exception:** Client explicitly requests blocking for specific pages (e.g., staging environments, internal tools)

5. **DO NOT** commit code directly to `main` branch without pull request
   - **Rationale:** All code changes must go through automated quality checks (GitHub Actions workflows) and peer review.
   - **Exception:** Emergency hotfixes with post-merge review within 24 hours

6. **DO NOT** modify shared components (`packages/ui-components/`) without testing impact on ALL client sites
   - **Rationale:** Shared component changes propagate to all sites. Untested changes can break multiple client sites simultaneously.
   - **Process:** Run `nx affected:test` and `nx affected:build` before committing shared component changes

7. **DO NOT** use client-side JavaScript for content rendering (except interactive components)
   - **Rationale:** AI crawlers ignore client-side JavaScript. Content rendered client-side is invisible to AI agents.
   - **Exception:** Interactive features (forms, modals, carousels) use `client:*` directives but content must be SSR

8. **DO NOT** hardcode content in Astro components
   - **Rationale:** All content must be editable via Sveltia CMS (stored in `src/content/`). Hardcoded content prevents non-technical client editing.
   - **Exception:** UI labels and microcopy in component code acceptable if documented in `BRAND_GUIDELINES.md`

9. **DO NOT** use Tailwind `@apply` for simple utility combinations
   - **Rationale:** Tailwind utilities are designed for direct use in HTML. Excessive `@apply` defeats the purpose and increases CSS bundle size.
   - **Guideline:** Use `@apply` only for complex patterns repeated 5+ times across codebase

10. **DO NOT** skip alt text for images (even decorative images use `alt=""`)
    - **Rationale:** Accessibility compliance and AI readability. `accessibility-auditor` agent will fail builds with missing alt text.
    - **Process:** All images require alt text in markdown: `![Descriptive text](./image.jpg)` or in Astro: `<img src="..." alt="..." />`

11. **DO NOT** create multiple H1 headings per page
    - **Rationale:** SEO best practice and accessibility. Single H1 per page enforced by `seo-optimizer` agent.
    - **Process:** Page title = H1, section titles = H2, subsections = H3, etc.

12. **DO NOT** use external fonts without performance budget consideration
    - **Rationale:** External fonts add latency and hurt Core Web Vitals (LCP).
    - **Process:** Self-host fonts, use `font-display: swap`, subset fonts to required glyphs, limit to 2-3 font families maximum

13. **DO NOT** install dependencies without checking bundle size impact
    - **Rationale:** JavaScript bloat directly impacts performance metrics.
    - **Process:** Run `nx run client-a:analyze` before/after adding dependency, document bundle size increase in PR description

14. **DO NOT** commit large media files directly to Git repository
    - **Rationale:** Git repositories grow unbounded with binary files, slowing clone times.
    - **Process:** Use Git LFS for files >100KB, or store in external CDN and reference via URL

15. **DO NOT** create new Claude Code agents without using `skills-creator` agent
    - **Rationale:** Standardized agent structure ensures consistency, discoverability, and proper documentation.
    - **Process:** Invoke `@skills-creator` agent with requirements, review generated `.md` file, test before committing

---

**End of Project Constitution**

*This document serves as the single source of truth for project requirements, technical architecture, and development constraints. All implementation decisions should reference this constitution. Update this document when project direction or technical requirements change significantly.*

**Version:** 1.1
**Last Updated:** October 31, 2025
**Maintained By:** Technical Lead
**Review Frequency:** Quarterly or when major architectural decisions required

**Changelog:**
- **v1.1 (2025-10-31):** Added Section 0 "Current Project Status" clarifying Phase 0 state; converted Phases 1-3 checkmarks from ✅ (complete) to ⏱️ (planned); updated estimated timeline from 6 weeks to 6-8 weeks based on implementation analysis
- **v1.0 (2025-10-29):** Initial constitution release
