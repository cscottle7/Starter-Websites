# Project Constitution: Multi-Site Website Development System

> **Note:** This is the condensed constitution focusing on core requirements and constraints. For comprehensive details, see the `docs/` directory.

---

## Executive Summary

Multi-site website development system enabling agencies to launch AI-optimized client websites in <1 week. Combines Astro framework, Sveltia CMS, and Claude Code automation to deliver high-performance sites while empowering non-technical clients to manage content independently.

**Key Stats:**
- Launch time: <1 week (vs. 3-4 weeks industry standard)
- Automation ROI: 70% reduction in manual audits
- Portfolio capacity: 10+ client sites with current team
- CMS cost: $0/month (Sveltia is free)

---

## Part A: Strategic Definition

### Core Jobs-to-be-Done

When I need to launch and maintain multiple high-quality client websites, I want a scalable development system with automated quality checks and non-technical client editing, so I can deliver consistently excellent, AI-optimized sites in under one week without growing my team proportionally.

### Core Requirements

1. **Rapid Deployment:** <1 week from template to production
2. **Automated Quality:** 70% reduction in manual SEO/accessibility/performance audits
3. **Client Independence:** 90% of content updates without developer assistance
4. **AI-First Optimization:** All sites optimized for AI crawler indexing (GPTBot, ClaudeBot)
5. **Scalable Portfolio:** Support 10+ client sites with current team size
6. **Cost Efficiency:** Zero CMS licensing costs

### Success Metrics

- **Time to Launch:** <7 days per client site
- **Automation ROI:** <2.5 hours/site/month (vs. 8 hours baseline)
- **Client Independence:** 90% of content commits by clients
- **Portfolio Scale:** 10+ sites with no team growth
- **AI Crawler Indexing:** 90%+ content crawled

**Full metrics:** [docs/SUCCESS_METRICS.md](docs/SUCCESS_METRICS.md)

### Project Status (as of October 31, 2025)

**Current Phase:** Phase 0 - Strategic Planning & Architecture Definition

**Completed:**
- ✅ Project constitution and tech stack evaluation
- ✅ 32 SEO/content SOPs created
- ✅ 4 generic Claude Code skills established

**Next:** Phase 1-3 (6-8 weeks) - Foundation infrastructure, pilot client site, automation

### Strategic Vision & FAQs

**See:** [docs/PROJECT_VISION.md](docs/PROJECT_VISION.md)

**Key Questions Answered:**
- Why Astro instead of Next.js?
- Why Sveltia CMS instead of paid options?
- How do clients edit without technical knowledge?
- What's our deployment strategy?
- How do Claude Code agents integrate?

---

## Part B: Technical Framework

### Strategic Constraint Tags

**Philosophy:** `[Philosophy:Pragmatism]`

**Constraints:**
- `[Constraint:Performance]` - Core Web Vitals "Good" scores mandatory
- `[Constraint:Scalability]` - 10+ sites without team growth
- `[Constraint:Automation]` - 70% manual audit reduction required
- `[Constraint:Cost-Efficiency]` - Zero CMS licensing costs

### Tech Stack (Summary)

- **Framework:** Astro 5.0 (Islands architecture, SSR, zero JavaScript by default)
- **Styling:** Tailwind CSS 3.4+ (utility-first, design tokens)
- **CMS:** Sveltia CMS (free, Git-based visual editing)
- **Monorepo:** Nx 17+ + pnpm 8+ workspaces
- **Deployment:** Your own server (Nginx/Apache) or Vercel/Netlify
- **Automation:** Claude Code agents + GitHub Actions
- **Testing:** Vitest (unit), Playwright (E2E), axe-core (accessibility)

**Full stack details:** [docs/TECH_STACK.md](docs/TECH_STACK.md)

### Project Structure (High-Level)

```
starter-template/
├── packages/           # Shared components & utilities
│   ├── ui-components/  # Reusable Astro components
│   ├── seo-utils/      # Schema markup, meta tags
│   └── cms-config/     # Sveltia CMS configurations
├── sites/              # Individual client websites
│   ├── client-a/
│   ├── client-b/
│   └── client-c/
├── .claude/
│   ├── agents/         # Claude Code agents
│   └── skills/         # Reusable agent knowledge
├── docs/               # Comprehensive documentation
└── scripts/            # Automation scripts
```

**Full architecture:** [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

### Key Commands

```bash
# Development
pnpm dev --filter=client-a         # Start dev server
nx build client-a                  # Build specific site

# New client site
pnpm create-client --name="acme"   # Scaffold new client

# Quality checks
pnpm quality-gates --site=client-a # Run all validation gates

# Deployment
git push origin staging            # Deploy to staging
pnpm deploy:production --site=client-a
```

**Full commands:** [docs/COMMANDS_REFERENCE.md](docs/COMMANDS_REFERENCE.md)

### Code Style Essentials

1. **TypeScript strict mode** for all new code (`strict: true`)
2. **Functional programming patterns** (pure functions, immutability)
3. **Self-documenting code** with clear names, comments only for complex logic
4. **Astro components:** PascalCase filenames, static by default, `client:*` only when needed
5. **Tailwind utilities** directly in HTML, `@apply` only for patterns repeated 5+ times
6. **Conventional Commits:** `type(scope): subject` (e.g., `feat(client-a): add contact form`)

**Full style guide:** [docs/CODE_STYLE_GUIDE.md](docs/CODE_STYLE_GUIDE.md)

---

## Part C: Architectural Principles

### Core Principles

1. **Static-First, Dynamic When Necessary**
   - All sites statically generated by default (Astro SSG)
   - AI crawlers ignore client-side JavaScript → static HTML ensures accessibility
   - Hydrate components selectively using Astro Islands

2. **Git as Single Source of Truth**
   - All content in Git (markdown, YAML, JSON)
   - NO database-backed storage
   - Content changes trigger: Git commit → webhooks → automated quality checks

3. **Monorepo Modularity**
   - Shared components in `packages/ui-components/` (single source of truth)
   - Update once → propagates to all client sites
   - Client sites extend via composition, not modification

4. **Automated Quality Gates (Non-Negotiable)**
   - NO production deployment without passing all 6 gates:
     1. Code Quality (linting, type-checking)
     2. SEO Compliance (>90/100 score)
     3. Accessibility (WCAG 2.1 AA)
     4. Performance (Core Web Vitals "Good")
     5. AI Readiness (crawler validation)
     6. Security (zero high/critical vulnerabilities)

5. **AI-First Content Architecture**
   - Server-side rendering required for all content
   - JSON-LD schema markup required for key pages
   - Semantic HTML (heading hierarchy, ARIA, alt text)
   - DO NOT block AI crawlers unless client explicitly requests

6. **Separation of Concerns**
   - Editing Layer: Sveltia CMS (non-technical interface)
   - Storage Layer: Git (version control)
   - Automation Layer: Claude Code agents (quality validation)
   - Deployment Layer: CI/CD pipeline (build, test, deploy)

### Design Patterns

**Three-Tier Customization Model:**
- **Tier 1:** Template Core (NEVER customized - build tooling, SEO utils, quality standards)
- **Tier 2:** Design System (customizable - colors, typography, component variants)
- **Tier 3:** Content & Config (fully client-specific - CMS content, brand guidelines)

**Quality Gate Pattern:**
- Sequential validation (Gate N+1 only runs if Gate N passes)
- Clear pass/fail criteria with quantified thresholds
- Failure returns to development with specific fix recommendations

**Multi-Orchestrator Hierarchy (BiggerBoss Pattern):**
- Master orchestrator coordinates phase-specific orchestrators
- Phase orchestrators delegate to specialist agents
- Agent communication via `@agent_name` syntax

### Performance Budgets

- **Bundle Size:** <500KB total JavaScript per page
- **Time to Interactive:** <3.5 seconds on 3G
- **Lighthouse Score:** >90 for all pages
- **Build Time:** <60 seconds per site

### Security Constraints

- All dependencies pass `npm audit` with zero high/critical vulnerabilities
- NO hardcoded secrets (use `.env` files, gitignored)
- Content Security Policy (CSP) headers prevent XSS
- HTTPS enforced for all production deployments

### Accessibility Requirements (WCAG 2.1 AA)

- All interactive elements keyboard-accessible
- Color contrast: 4.5:1 normal text, 3:1 large text
- 100% image alt text coverage (validated by `accessibility-auditor` agent)
- Proper ARIA attributes for custom components
- Semantic HTML structure (nav, main, aside, footer, article, section)

---

## Part D: Prohibitions (DO NOT)

1. **DO NOT** use WordPress, PHP, or database-backed content management
   - Exception: WordPress available as premium tier if client requires

2. **DO NOT** deploy to production without passing all 6 quality gates
   - Exception: Emergency override with written approval + documentation

3. **DO NOT** store content in databases or external CMS APIs
   - Exception: Third-party integrations (Shopify) as data sources, NOT primary content

4. **DO NOT** block AI crawlers (GPTBot, ClaudeBot) in robots.txt
   - Exception: Client explicitly requests blocking specific pages

5. **DO NOT** commit code directly to `main` without pull request
   - Exception: Emergency hotfixes with post-merge review within 24 hours

6. **DO NOT** modify shared components without testing impact on ALL sites
   - Process: Run `nx affected:test` and `nx affected:build` first

7. **DO NOT** use client-side JavaScript for content rendering
   - Exception: Interactive features with `client:*` directives, content must be SSR

8. **DO NOT** hardcode content in Astro components
   - Exception: UI labels if documented in `BRAND_GUIDELINES.md`

9. **DO NOT** use Tailwind `@apply` for simple utility combinations
   - Guideline: Use only for patterns repeated 5+ times

10. **DO NOT** skip alt text for images (even decorative: `alt=""`)
    - Enforced by `accessibility-auditor` agent

11. **DO NOT** create multiple H1 headings per page
    - SEO best practice: Single H1 per page (enforced by `seo-optimizer`)

12. **DO NOT** use external fonts without performance budget consideration
    - Process: Self-host, `font-display: swap`, subset glyphs, max 2-3 families

13. **DO NOT** install dependencies without checking bundle size
    - Process: Run `nx run client-a:analyze` before/after, document in PR

14. **DO NOT** commit large media files (>100KB) to Git
    - Process: Use Git LFS or external CDN

15. **DO NOT** create Claude Code agents without using `skills-creator` agent
    - Process: Invoke `@skills-creator`, review generated `.md`, test before committing

---

## Documentation Index

**Core Documentation:**
- [QUICK_START.md](docs/QUICK_START.md) - Get started in 5 minutes
- [ARCHITECTURE.md](docs/ARCHITECTURE.md) - Project structure and file organization
- [TECH_STACK.md](docs/TECH_STACK.md) - Technology choices and rationale
- [PROJECT_VISION.md](docs/PROJECT_VISION.md) - Strategic vision and FAQs

**Development Guides:**
- [CODE_STYLE_GUIDE.md](docs/CODE_STYLE_GUIDE.md) - Code conventions with examples
- [COMMANDS_REFERENCE.md](docs/COMMANDS_REFERENCE.md) - CLI commands
- [AGENT_GUIDE.md](docs/AGENT_GUIDE.md) - Claude Code agent usage
- [CLIENT_ONBOARDING.md](docs/CLIENT_ONBOARDING.md) - Add new client process

**Operations:**
- [DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md) - Server/Vercel/Netlify deployment
- [CMS_SETUP.md](docs/CMS_SETUP.md) - Sveltia CMS configuration
- [QUALITY_GATES.md](docs/QUALITY_GATES.md) - Quality validation system
- [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) - Common issues and solutions

**Metrics & Process:**
- [SUCCESS_METRICS.md](docs/SUCCESS_METRICS.md) - KPIs and measurement methodology
- [ORCHESTRATOR_WORKFLOWS.md](docs/ORCHESTRATOR_WORKFLOWS.md) - Multi-agent coordination
- [AUTOMATION_SETUP.md](docs/AUTOMATION_SETUP.md) - Webhook and CI/CD automation

---

**Version:** 2.0
**Last Updated:** November 17, 2025
**Maintained By:** Technical Lead
**Review Frequency:** Quarterly or when major architectural decisions required

**Changelog:**
- **v2.0 (2025-11-17):** Condensed to <25k chars, moved detailed content to docs/, added Skills architecture
- **v1.1 (2025-10-31):** Added Section 0 "Current Project Status", updated timeline estimates
- **v1.0 (2025-10-29):** Initial constitution release
