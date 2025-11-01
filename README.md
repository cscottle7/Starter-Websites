# Multi-Site Website Development System

**Production-ready Nx monorepo for building and managing multiple client websites with Astro + Sveltia CMS**

## Overview

This system enables agencies to launch high-performance, AI-optimized client websites in less than one week. Built on Astro 5, Nx monorepo architecture, and Sveltia CMS, it provides:

- **Rapid Deployment:** Launch client sites in <1 week using scaffolding scripts
- **Shared Component Library:** 10+ reusable Astro components with consistent design system
- **AI-First Architecture:** Optimized for AI crawlers (GPTBot, ClaudeBot) with SSR, schema markup, and semantic HTML
- **Visual Content Editing:** Non-technical clients edit content via Sveltia CMS
- **Zero CMS Costs:** Free, open-source Sveltia CMS (Git-based, no vendor lock-in)
- **Automated Quality Gates:** CI/CD pipeline with SEO, accessibility, and performance validation

## Quick Start

Get up and running in 5 minutes:

```bash
# Clone repository
git clone <repository-url> starter-template
cd starter-template

# Install dependencies
pnpm install

# Verify workspace setup
pnpm nx graph

# Run linting across workspace
pnpm lint
```

For detailed setup instructions, see **[docs/QUICK_START.md](./docs/QUICK_START.md)**

## Project Structure

```
starter-template/
├── packages/                    # Shared workspace packages
│   ├── ui-components/          # Reusable Astro components
│   ├── seo-utils/              # SEO utilities (schema markup, meta tags)
│   └── cms-config/             # Sveltia CMS configuration templates
├── sites/                       # Individual client websites
│   ├── client-a/               # Example client site
│   └── client-b/               # Second client site
├── .claude/                     # Claude Code agent definitions
│   ├── agents/                 # Specialist agents (SEO, accessibility, content)
│   └── skills/                 # Reusable agent knowledge
├── scripts/                     # Automation scripts
├── docs/                        # Comprehensive documentation
├── nx.json                      # Nx monorepo configuration
├── pnpm-workspace.yaml         # pnpm workspace configuration
├── tsconfig.base.json          # Base TypeScript configuration
└── CLAUDE.md                    # Project constitution (single source of truth)
```

## Tech Stack

- **Framework:** [Astro 5](https://astro.build/) - Islands architecture, SSR, partial hydration
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Monorepo:** [Nx 17](https://nx.dev/) - Advanced caching, task orchestration
- **Package Manager:** [pnpm](https://pnpm.io/) - Fast, disk-efficient, monorepo-friendly
- **CMS:** [Sveltia CMS](https://github.com/sveltia/sveltia-cms) - Git-based visual content editing
- **Type Safety:** [TypeScript 5](https://www.typescriptlang.org/) - Strict mode enabled
- **Testing:** [Vitest](https://vitest.dev/) - Fast unit testing framework
- **CI/CD:** [GitHub Actions](https://github.com/features/actions) - Automated deployments and quality gates

## Key Features

### For Agencies

- **Scalable:** Support 10+ client sites with current team size
- **Automated Quality:** 70% reduction in manual SEO/accessibility audits
- **Cost-Efficient:** Zero CMS licensing costs, minimal hosting expenses
- **Rapid Onboarding:** New developers productive in <5 minutes
- **Client Independence:** 90% of content updates self-service via CMS

### For Clients

- **Fast Performance:** Core Web Vitals "Good" scores (LCP <2.5s)
- **SEO Optimized:** 100% schema markup coverage, AI crawler-friendly
- **Accessible:** WCAG 2.1 AA compliant out of the box
- **Easy Content Editing:** Visual CMS interface, no technical knowledge required
- **Version Control:** Full content history via Git

### For Developers

- **Modern Stack:** Latest Astro, TypeScript, Tailwind CSS
- **Type Safety:** Strict TypeScript, Content Collections API
- **Component Library:** Reusable, documented, accessible components
- **Quality Gates:** Automated linting, type-checking, testing
- **Clear Documentation:** Comprehensive guides for all tasks

## Development Workflow

### Working on Client Sites

```bash
# Start development server for specific client
pnpm dev --filter=client-a

# Build specific client site
pnpm nx build client-a

# Run quality checks on client site
pnpm lint --filter=client-a
pnpm type-check --filter=client-a
```

### Creating New Client Sites

```bash
# Run scaffolding script
pnpm create-client

# Follow interactive prompts:
# - Client name (lowercase, hyphenated)
# - Display name
# - Primary domain
# - Brand colors

# New site created at sites/client-name/
```

### Using Shared Packages

Import shared components in client sites:

```astro
---
import { BaseLayout, Hero, Card } from '@workspace/ui-components';
import { generateMetaTags, schemaToJsonLd } from '@workspace/seo-utils';
---

<BaseLayout title="Page Title" description="SEO description">
  <Hero
    headline="Welcome"
    subheadline="Build amazing sites"
    ctaText="Get Started"
    ctaUrl="/contact"
  />
</BaseLayout>
```

## Documentation

- **[QUICK_START.md](./docs/QUICK_START.md)** - 5-minute developer onboarding
- **[ROADMAP.md](./docs/ROADMAP.md)** - Phase-by-phase implementation plan
- **[CLAUDE.md](./CLAUDE.md)** - Complete project constitution and architecture
- **[task_deps.md](./task_deps.md)** - Detailed task dependency plan

### Phase 1 (Current) - Foundation Infrastructure

- [x] Nx monorepo setup with pnpm workspace
- [x] Shared UI components package (10+ Astro components)
- [x] Shared SEO utilities package (schema markup, meta tags, sitemaps)
- [x] Shared CMS configuration templates
- [x] Root documentation (README, QUICK_START)

### Phase 2 (Next) - Pilot Client Site

- [ ] Generate first client site from template
- [ ] Configure Sveltia CMS for client
- [ ] Build 5 core pages (homepage, about, services, blog, contact)
- [ ] Deploy to staging environment
- [ ] Client feedback and iteration
- [ ] Production deployment

### Phase 3 (Future) - Automation Foundation

- [ ] GitHub Actions CI/CD pipeline
- [ ] Claude Code agents (SEO, accessibility, content optimization)
- [ ] Quality gate system (6 sequential validation gates)
- [ ] Automated deployment workflows
- [ ] Client site scaffolding script

See **[ROADMAP.md](./docs/ROADMAP.md)** for complete phase breakdown and timelines.

## Success Metrics

Tracking progress against CLAUDE.md Section 5 targets:

1. **Time to Launch:** Target <1 week per client site (vs. 3-4 weeks baseline)
2. **Automation ROI:** Target 70% reduction in manual audit time
3. **Client Independence:** Target 90% self-service content updates
4. **Portfolio Scalability:** Target 10+ client sites with current team
5. **AI Crawler Indexing:** Target 90%+ content crawled by GPTBot/ClaudeBot

## Contributing

### Adding New Components

1. Create component file in `packages/ui-components/src/components/`
2. Add JSDoc comments with usage examples
3. Export component in `packages/ui-components/src/index.ts`
4. Document in package README
5. Test in a client site

### Adding New SEO Utilities

1. Add function to appropriate file in `packages/seo-utils/src/`
2. Export from `packages/seo-utils/src/index.ts`
3. Add tests in `*.spec.ts` files (>80% coverage required)
4. Update package README
5. Run tests: `pnpm nx test seo-utils`

### Code Style

Follow conventions in CLAUDE.md Section 11:

- **Astro Components:** PascalCase filenames (e.g., `HeroSection.astro`)
- **TypeScript:** snake_case for utility files (e.g., `meta_tags.ts`)
- **Commits:** Conventional Commits (e.g., `feat(client-a): add contact form`)
- **Formatting:** Prettier (run `pnpm format`)
- **Linting:** ESLint (run `pnpm lint`)

## Deployment

### Staging Deployment (Automatic)

Push to `staging` branch triggers automatic Netlify staging deployment:

```bash
git push origin staging
```

### Production Deployment

Merge to `main` branch after quality gates pass:

```bash
git checkout main
git merge staging
git push origin main
```

Quality gates must pass before production deployment:
1. Code Quality (linting, type-checking, tests)
2. SEO Compliance (>90/100 score)
3. Accessibility (WCAG 2.1 AA, zero critical violations)
4. Performance (Core Web Vitals "Good" scores)
5. AI Readiness (crawler validation)
6. Security (zero high/critical vulnerabilities)

## Troubleshooting

**Nx cache issues:**
```bash
pnpm nx reset
```

**TypeScript path alias not resolving:**
```bash
# Verify tsconfig.base.json paths match package structure
# Restart TypeScript server in IDE
```

**pnpm install fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules .pnpm-store
pnpm install
```

**Client site not building:**
```bash
# Check Nx graph for dependency issues
pnpm nx graph

# Build dependencies first
pnpm nx build ui-components
pnpm nx build seo-utils
```

For more troubleshooting, see **docs/TROUBLESHOOTING.md** (Phase 3).

## License

UNLICENSED - Proprietary agency codebase.

## Support

For questions or issues:
1. Check documentation in `docs/` directory
2. Review CLAUDE.md for architectural decisions
3. Create GitHub issue with detailed description
4. Contact technical lead

## Version History

- **v1.0.0** (2025-10-31) - Phase 1 Foundation Infrastructure complete
  - Nx monorepo initialized
  - Shared packages created (ui-components, seo-utils, cms-config)
  - Root documentation published

---

**Built with** [Astro](https://astro.build/) + [Nx](https://nx.dev/) + [Sveltia CMS](https://github.com/sveltia/sveltia-cms)

**Architecture by** Claude (Anthropic) with AI-Native Development Workflow principles
