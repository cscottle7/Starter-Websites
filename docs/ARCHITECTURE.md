# Technical Architecture Reference

This document contains detailed technical specifications extracted from the Project Constitution (CLAUDE.md) for quick reference during development.

## Table of Contents
1. [Project File Structure](#project-file-structure)
2. [Key Commands](#key-commands)
3. [Code Style Examples](#code-style-examples)
4. [Development Standards](#development-standards)

---

## Project File Structure

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
├── CLAUDE.md                          # Project constitution
└── README.md                          # Setup and contribution guide
```

---

## Key Commands

### Initial Setup
```bash
# Clone repository and install dependencies
git clone <repository-url> starter-template
cd starter-template
pnpm install
```

### Development
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

### New Client Site Creation
```bash
# Scaffold new client site from template
pnpm create-client --name="acme-corp"

# Alternative with full options
pnpm create-client --name="acme-corp" --domain="acmecorp.com"
```

### Quality Checks
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

### Claude Code Agent Invocation
```bash
# Invoke SEO optimizer on specific client site
claude-code --agent=seo-optimizer --project=sites/client-a

# Run quality gate orchestrator (automated multi-agent workflow)
claude-code --agent=quality-gate-orchestrator --project=sites/client-a
```

### Deployment
```bash
# Deploy to staging (automated via GitHub Actions on push)
git push origin staging

# Deploy specific site to production (manual trigger)
pnpm deploy:production --site=client-a

# Deploy all sites to production
pnpm deploy:production --all
```

### Maintenance
```bash
# Update shared dependencies across all sites
pnpm sync-shared-deps

# Update Nx cache
nx reset

# Analyze bundle sizes
nx run client-a:analyze
```

---

## Code Style Examples

### Astro Component Structure

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

### Tailwind CSS Configuration

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

### Content Frontmatter

```yaml
---
title: "Page Title"
description: "SEO meta description"
publishDate: 2025-10-29
author: "Client Name"
---
```

### Git Commit Messages

Follow Conventional Commits specification:
- `feat(client-a): add contact form to homepage`
- `fix(seo-utils): correct schema markup for Article type`
- `docs(readme): update deployment instructions`
- `chore(deps): update Astro to 5.0.1`

Scope should reference affected package/site: `(client-a)`, `(ui-components)`, `(seo-utils)`

---

## Development Standards

### Naming Conventions

**Files:**
- Utility files: `snake_case` → `schema_generator.ts`, `meta_tags.ts`
- Component files: `PascalCase` → `Button.astro`, `HeroSection.astro`

**Code:**
- Functions/variables: `camelCase` → `generateSchema()`, `metaTitle`
- Types/interfaces: `PascalCase` → `BlogPost`, `SEOMetadata`

### TypeScript Rules

- Prefer `interface` over `type` for object shapes (better error messages)
- Always define explicit return types for public functions
- Prefer `const` over `let`; avoid `var` entirely
- Use template literals for string concatenation: `` `${base}/${path}` ``

### Content Rules

- Use semantic heading hierarchy (single H1 per page, progressive H2 → H3 → H4)
- Always include alt text for images: `![Descriptive alt text](./image.jpg)`
- Use relative links for internal pages: `[About](/about)` not `[About](https://site.com/about)`

### Astro Best Practices

- Use PascalCase for component filenames: `HeroSection.astro`, `BlogPostCard.astro`
- Keep components small and focused (single responsibility principle)
- Extract reusable logic to utility functions in TypeScript files
- Use Astro's Content Collections API for all content (never hardcode content in components)
- Prefer static rendering by default; add `client:*` directives only when interactivity is required

### Tailwind CSS Guidelines

- Use Tailwind utility classes directly in Astro templates (avoid custom CSS unless necessary)
- Use `@apply` directive in `<style>` blocks only for frequently repeated complex patterns
- Prefer responsive modifiers (`md:`, `lg:`) over media queries
- Order utility classes consistently: layout → sizing → spacing → typography → colors → effects

### Claude Code Agent Definitions

- Store agent definitions in `.claude/agents/` directory
- Use kebab-case for agent filenames: `seo-optimizer.md`, `accessibility-auditor.md`
- Follow agent template structure: name, description, system prompt, tools, model selection
- Document agent purpose and expected outputs clearly
- Version control agent prompts with changelog comments

---

## Performance Budgets

- **Bundle Size:** <500KB total JavaScript per page (measured at build time)
- **Time to Interactive (TTI):** <3.5 seconds on 3G mobile connection
- **Lighthouse Performance Score:** >90 for all pages
- **Build Time:** <60 seconds per client site (measured in CI/CD)
- **Image Optimization:** All images converted to WebP with responsive sizes

---

## Security Requirements

- All dependencies must pass `npm audit` with zero high/critical vulnerabilities
- NO hardcoded secrets or API keys in repository (use environment variables via `.env` files, gitignored)
- ALL forms must include CSRF protection if server-side handling added
- Content Security Policy (CSP) headers configured to prevent XSS attacks
- HTTPS enforced for all production deployments

---

## Accessibility Requirements (WCAG 2.1 AA)

- All interactive elements keyboard-accessible (tab navigation functional)
- Color contrast ratios meet minimum standards (4.5:1 for normal text, 3:1 for large text)
- All images include descriptive alt text (validated by `accessibility-auditor` agent)
- Proper ARIA attributes for custom interactive components
- Semantic HTML structure (nav, main, aside, footer, article, section elements used appropriately)
- Focus indicators visible on all interactive elements

---

**Reference:** This document extracts detailed technical specifications from CLAUDE.md for development reference. For strategic context and architectural decisions, refer to the main constitution.
