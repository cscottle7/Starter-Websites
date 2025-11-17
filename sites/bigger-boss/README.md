# Bigger Boss

**Client Site:** bigger-boss
**Domain:** https://biggerboss.com
**Framework:** Astro 5.0 + Tailwind CSS

## Quick Start

```bash
# Install dependencies (from monorepo root)
pnpm install

# Start development server
pnpm --filter=bigger-boss dev

# Build for production
pnpm --filter=bigger-boss build
```

## Brand Colors

- **Primary:** #1a202c
- **Secondary:** #2d3748
- **Accent:** #4a5568

## Content Management

Edit content via Sveltia CMS at `/admin` route.

See [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) for complete brand and content guidelines.

## Quality Gates

All changes must pass 6 quality gates before production deployment:

1. Code Quality (linting, type-checking, tests)
2. Build Validation (successful build)
3. SEO Compliance (meta tags, schema markup)
4. Accessibility (WCAG 2.1 AA)
5. Content Quality (frontmatter, structure)
6. Security (dependency audit)

## Deployment

- **Staging:** Push to `staging` branch
- **Production:** Merge to `main` branch (requires quality gates pass)

## Documentation

- [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) - Brand identity and content guidelines
- [Project CLAUDE.md](../../CLAUDE.md) - System architecture and constraints
- [QUICK_START.md](../../docs/QUICK_START.md) - Developer onboarding
