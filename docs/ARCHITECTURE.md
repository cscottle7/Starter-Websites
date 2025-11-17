# Project Architecture & File Structure

**Last Updated:** November 17, 2025

This document provides a comprehensive overview of the monorepo structure for the Multi-Site Website Development System.

## High-Level Architecture

The system uses an **Nx-powered monorepo** with three main organizational layers:

1. **`packages/`** - Shared workspace packages (reusable components, utilities, configurations)
2. **`sites/`** - Individual client websites (each with isolated content and customization)
3. **`.claude/`** - Claude Code agents and skills (automation and quality assurance)

## Complete File Structure

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
├── docs/                              # Comprehensive documentation
│   ├── QUICK_START.md                 # Get started in 5 minutes
│   ├── ARCHITECTURE.md                # This file
│   ├── AGENT_GUIDE.md                 # How to use and create agents
│   ├── ORCHESTRATOR_WORKFLOWS.md      # How orchestrators coordinate work
│   ├── CLIENT_ONBOARDING.md           # Add new client process
│   ├── CMS_SETUP.md                   # Sveltia CMS configuration guide
│   ├── DEPLOYMENT_GUIDE.md            # Server/Vercel/Netlify deployment
│   ├── QUALITY_GATES.md               # Understanding quality validation
│   ├── TROUBLESHOOTING.md             # Common issues and solutions
│   ├── AUTOMATION_SETUP.md            # Webhook and CI/CD automation
│   ├── SUCCESS_METRICS.md             # KPIs and measurement methodology
│   ├── COMMANDS_REFERENCE.md          # CLI commands reference
│   ├── CODE_STYLE_GUIDE.md            # Code conventions and examples
│   ├── PROJECT_VISION.md              # Strategic vision and FAQs
│   └── TECH_STACK.md                  # Technology choices and rationale
│
├── nx.json                            # Nx monorepo configuration
├── package.json                       # Root workspace dependencies
├── pnpm-workspace.yaml                # pnpm workspace configuration
├── tsconfig.base.json                 # Base TypeScript configuration
├── .eslintrc.js                       # ESLint configuration
├── .prettierrc                        # Prettier configuration
├── .gitignore
├── CLAUDE.md                          # Project constitution
└── README.md                          # Setup and contribution guide
```

## Directory Structure Explained

### `packages/` - Shared Workspace Packages

**Purpose:** DRY principle - write once, use across all client sites.

- **`ui-components/`**: Reusable Astro components (buttons, cards, navigation, heroes, footers)
  - Import via: `import { Button } from '@workspace/ui-components';`
  - Customizable per client via props and Tailwind config

- **`seo-utils/`**: SEO and schema markup generators
  - Schema.org JSON-LD generation
  - Meta tag utilities
  - Sitemap and robots.txt builders
  - AI crawler optimization helpers

- **`cms-config/`**: Shared Sveltia CMS configurations
  - Base configuration templates
  - Reusable content type schemas (blog posts, pages, navigation)

### `sites/` - Client Websites

**Purpose:** Isolated client sites with shared infrastructure benefits.

Each client site has:
- **Independent deployment** (own domain, own hosting config)
- **Brand customization** (Tailwind config, component variants)
- **Content isolation** (Git-based via Sveltia CMS)
- **Shared quality standards** (inherits monorepo linting, testing, build tools)

### `.claude/` - Automation Intelligence

**Purpose:** Claude Code agents for automated quality assurance and development assistance.

- **`agents/orchestrators/`**: Master coordinators for complex workflows
- **`agents/website/`**: Specialist agents for SEO, accessibility, content optimization
- **`skills/`**: Reusable knowledge modules (loaded contextually by agents)

## Three-Tier Customization Model

### Tier 1: Template Core (NEVER customized per client)
- Build tooling: `nx.json`, `pnpm-workspace.yaml`, GitHub Actions workflows
- Core utilities: `packages/seo-utils/`
- Quality standards: ESLint, Prettier, TypeScript configs

### Tier 2: Design System (Customizable per client)
- Color tokens: `sites/client-a/tailwind.config.cjs`
- Component variants: `sites/client-a/src/components/`
- Brand-specific layouts: `sites/client-a/src/layouts/`

### Tier 3: Content & Configuration (Fully client-specific)
- Editable content: `sites/client-a/src/content/`
- Brand guidelines: `sites/client-a/BRAND_GUIDELINES.md`
- Client-specific plugins: `sites/client-a/astro.config.mjs`

## Data Flow Architecture

### Content Editing Flow
```
Client logs into Sveltia CMS (/admin)
  ↓
Authenticates via GitHub OAuth
  ↓
Edits content visually (WYSIWYG)
  ↓
Saves changes → Git commit via GitHub API
  ↓
GitHub webhook triggers CI/CD pipeline
  ↓
Claude Code agents run quality checks
  ↓
Astro builds static site
  ↓
Deploys to staging for preview
  ↓
Manual approval → production deployment
```

### Build Process
```
pnpm install (monorepo dependencies)
  ↓
Nx analyzes dependency graph
  ↓
Builds affected packages first (ui-components, seo-utils)
  ↓
Client sites build (imports from packages/)
  ↓
Astro generates static HTML/CSS/JS
  ↓
Output: dist/ folder ready for deployment
```

## Key Architectural Benefits

1. **Scalability**: Add new client sites in <1 week using shared infrastructure
2. **Consistency**: Shared components ensure uniform quality across portfolio
3. **Automation**: Claude Code agents enforce quality gates on every change
4. **Maintainability**: Update shared package once → affects all client sites
5. **Isolation**: Client content and branding remains separate despite shared tooling
6. **AI-First**: All content accessible to AI crawlers (static HTML, schema markup)

## Related Documentation

- [Quick Start Guide](QUICK_START.md) - Get started in 5 minutes
- [Client Onboarding](CLIENT_ONBOARDING.md) - How to add a new client site
- [Commands Reference](COMMANDS_REFERENCE.md) - CLI commands for development
- [Tech Stack Details](TECH_STACK.md) - Technology choices and rationale
