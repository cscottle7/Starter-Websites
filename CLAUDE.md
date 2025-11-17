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

**Primary Metrics:**

1. **Time to Launch:** <1 week per client site (baseline: 3-4 weeks)
2. **Automation ROI:** 70% reduction in manual audit time (<2.5 hours/site/month)
3. **Client Independence:** 90% of content updates without developer
4. **Portfolio Scalability:** 10+ client sites with current team
5. **AI Crawler Indexing:** 90%+ of content successfully crawled

**Quality Standards:**

6. **Core Web Vitals:** LCP <2.5s, FID <100ms, CLS <0.1
7. **Accessibility:** WCAG 2.1 AA (zero critical violations)
8. **SEO Health:** 100% schema markup coverage
9. **Build Performance:** <60 seconds per site
10. **Security:** Zero high/critical vulnerabilities

**Measurement methodology:** See [docs/METRICS.md](./docs/METRICS.md) (future)

### 6. Core Features & Scope

### 0. Current Project Status

**As of November 2025:**

The multi-site infrastructure is **operational and ready for new client sites**. All foundational systems are in place.

**Current Phase: Active Client Site Creation**

**Infrastructure Complete (Phases 1-3):**
- ✅ Nx monorepo with shared packages (`ui-components`, `seo-utils`, `cms-config`)
- ✅ Sveltia CMS integration with Git-based content workflow
- ✅ Three pilot sites operational with distinct themes
- ✅ Design workflow orchestrator and theme-aware components
- ✅ GitHub repository with proper authentication

**Active Focus:**
- Creating new client sites using established infrastructure
- Customizing themes and brand guidelines per client
- Implementing CMS content collections
- Deploying sites to production

**Reference Documentation:**
- [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) - File structure, commands, code style
- [docs/MULTI_SITE_GUIDE.md](./docs/MULTI_SITE_GUIDE.md) - Creating new sites
- [docs/GETTING_STARTED.md](./docs/GETTING_STARTED.md) - Setup instructions

#### Features Deferred to Phase 4+

- Advanced orchestration agents (quality gates, deployment coordination)
- Expanded Claude Code skills library
- Automated GitHub Actions pipeline
- Performance monitoring and analytics

#### Out of Scope

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

**High-Level Organization:**
- `packages/` - Shared components, SEO utilities, CMS config
- `sites/` - Individual client websites (each with Astro + Sveltia CMS)
- `.claude/` - Agent definitions and reusable skills
- `docs/` - Comprehensive documentation
- `scripts/` - Automation utilities

**Detailed structure:** See [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)

### 10. Key Commands

**Essential Commands:**
- `pnpm dev --filter=site-name` - Start development server
- `nx build site-name` - Build specific site
- Creating new sites - See [docs/MULTI_SITE_GUIDE.md](./docs/MULTI_SITE_GUIDE.md)

**Complete command reference:** See [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)

### 11. Code Style & Conventions

**General Principles:**
- TypeScript strict mode required
- Functional programming patterns preferred
- Self-documenting code with clear naming
- Consistency over individual preference

**Naming Conventions:**
- Utility files: `snake_case` (e.g., `schema_generator.ts`)
- Component files: `PascalCase` (e.g., `HeroSection.astro`)
- Functions/variables: `camelCase`
- Types/interfaces: `PascalCase`

**Astro Components:**
- Keep components small and focused
- Use Content Collections API (never hardcode content)
- Static rendering by default
- Structure: imports → props → logic → template → styles

**TypeScript:**
- Prefer `interface` over `type`
- Explicit return types for public functions
- Use `const` over `let`; avoid `var`

**Tailwind CSS:**
- Use utility classes directly in templates
- `@apply` only for repeated complex patterns
- Define design tokens in `tailwind.config.cjs`

**Content & Markdown:**
- Frontmatter YAML for all metadata
- Semantic heading hierarchy (single H1)
- Always include alt text for images
- Use relative links for internal pages

**Git Commits:**
- Conventional Commits: `feat(scope): description`
- Scope references package/site
- First line <72 characters

**Claude Code Agents:**
- Store in `.claude/agents/`
- Use kebab-case filenames
- Document purpose and expected outputs

**Detailed examples:** See [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)

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

**Critical Prohibitions:**

1. **NO WordPress/PHP or database-backed content** (static generation + Git only)
2. **NO production deployment without passing quality gates** (6-gate validation required)
3. **NO content in databases/external CMS** (Git is single source of truth)
4. **NO blocking AI crawlers** (GPTBot, ClaudeBot) unless client explicitly requests
5. **NO direct commits to `main`** (pull requests required for quality checks)
6. **NO modifying shared components** without testing impact on ALL sites
7. **NO client-side JavaScript for content** (AI crawlers ignore it)
8. **NO hardcoded content in components** (use Content Collections API)
9. **NO Tailwind `@apply` for simple utilities** (direct classes only)
10. **NO missing alt text** (even decorative images need `alt=""`)
11. **NO multiple H1 headings per page** (single H1 for SEO)
12. **NO external fonts without performance budget** (self-host, subset, limit families)
13. **NO dependencies without bundle size check** (run `nx run site:analyze`)
14. **NO large media in Git** (use Git LFS or external CDN)
15. **NO new agents without `skills-creator`** (standardization required)

**Detailed rationales and exceptions:** See [docs/STANDARDS.md](./docs/STANDARDS.md) (future)

---

**End of Project Constitution**

*This document serves as the single source of truth for project requirements, technical architecture, and development constraints. All implementation decisions should reference this constitution. Update this document when project direction or technical requirements change significantly.*

**Version:** 1.2
**Last Updated:** November 2025
**Maintained By:** Technical Lead
**Review Frequency:** Quarterly or when major architectural decisions required

**Changelog:**
- **v1.2 (2025-11):** Reduced size by 40% for performance; moved detailed content to docs/ARCHITECTURE.md; updated status to "Active Client Site Creation" phase; condensed Success Metrics, Code Style, Prohibitions sections
- **v1.1 (2025-10-31):** Added Current Project Status; clarified phase state; updated timeline estimates
- **v1.0 (2025-10-29):** Initial constitution release
