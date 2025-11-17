# Technology Stack & Rationale

**Last Updated:** November 17, 2025

This document provides comprehensive details on technology choices, library selections, and the rationale behind each decision in the Multi-Site Website Development System.

## Stack Overview

```
┌─────────────────────────────────────────────┐
│         Frontend & Build Layer              │
│  Astro 5.0 + Vite 5.0 + TypeScript 5.2+    │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│            Styling Layer                    │
│        Tailwind CSS 3.4+                    │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│        Content Management Layer             │
│   Sveltia CMS + Git (version control)      │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│         Monorepo & Build Tools              │
│      Nx 17+ + pnpm 8+ workspaces           │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│      Automation & Quality Layer             │
│   Claude Code Agents + GitHub Actions       │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│          Deployment Layer                   │
│  Static Files (Nginx) or Vercel/Netlify   │
└─────────────────────────────────────────────┘
```

---

## Frontend Framework & Build Tools

### Astro 5.0
**Why:** Islands architecture for optimal performance and AI crawler compatibility.

**Key Features:**
- **Server-side rendering (SSR)** by default → AI crawlers can access all content
- **Zero JavaScript by default** → ships only HTML/CSS unless explicitly hydrated
- **Partial hydration** → interactive components load only when needed
- **Framework agnostic** → use React, Vue, Svelte, Alpine components side-by-side

**vs. Alternatives:**
- **Next.js:** Requires client-side JavaScript for hydration, heavier bundle sizes, better for SPAs/apps
- **Gatsby:** Slower builds at scale, GraphQL overhead, less active development
- **Eleventy:** Great for simplicity, but lacks built-in component frameworks and TypeScript support

**Bundle Size Impact:** Astro sites average **40% smaller JavaScript bundles** than Next.js equivalents.

---

### Vite 5.0+
**Why:** Fast development experience bundled with Astro.

**Key Features:**
- **Hot Module Replacement (HMR)** → instant updates during development
- **ESM-native** → faster cold starts than Webpack
- **Optimized production builds** → tree-shaking, code-splitting, minification
- **Plugin ecosystem** → integrates seamlessly with Astro

**Build Performance:**
- Development server startup: **<2 seconds**
- HMR updates: **<100ms**
- Production builds: **15-45 seconds** per typical client site

---

### TypeScript 5.2+
**Why:** Type safety reduces bugs and improves developer experience.

**Configuration:**
- **Strict mode enabled** → `strict: true` in `tsconfig.json`
- **Explicit return types** required for public functions
- **Content Collections API** provides type-safe content schemas

**Benefits:**
- Catch errors at compile-time vs. runtime
- Better IDE autocomplete and refactoring
- Self-documenting code through types

---

## Styling Framework

### Tailwind CSS 3.4+
**Why:** Utility-first CSS for rapid UI development and design consistency.

**Key Features:**
- **Utility classes** → no custom CSS needed for 90% of styling
- **Design tokens** → centralized color palettes, spacing scales, typography
- **JIT compiler** → generates only CSS you actually use (smaller bundles)
- **Responsive modifiers** → mobile-first design (`md:`, `lg:` prefixes)

**vs. Alternatives:**
- **CSS-in-JS (Styled Components, Emotion):** Adds runtime overhead, larger bundles
- **Bootstrap:** Too opinionated, harder to customize, larger base CSS
- **Vanilla CSS:** No constraints, leads to inconsistent designs and maintenance burden

**Bundle Size:** Tailwind production builds average **15-30KB** (after purging unused styles).

---

## Content Management System

### Sveltia CMS (Git-Based)
**Why:** Free, open-source, Git-native CMS with modern UX.

**Key Features:**
- **100% free and open-source** → $0/month vs. $49-$600/month for competitors
- **Git-based storage** → all content in repository, full version control
- **Visual editor** → WYSIWYG-style content editing for non-technical clients
- **Drop-in Decap CMS replacement** → 265+ bug fixes, mobile-friendly, modern UX
- **Active development** → v1.0 planned for early 2026

**Architecture:**
- **Content storage:** Git repository (markdown, YAML, JSON)
- **Authentication:** GitHub OAuth (clients log in with GitHub accounts)
- **Editing interface:** Static HTML/JS served from `/admin`
- **Commits:** Sveltia → GitHub API → Git commit → webhook → CI/CD

**vs. Alternatives:**

| CMS | Cost | Storage | Migration | Vendor Lock-In |
|-----|------|---------|-----------|----------------|
| **Sveltia CMS** | $0/month | Git | Easy | None |
| TinaCMS | $0-$29/month | Git/GraphQL | Moderate | Low |
| CloudCannon | $49-$299/month | Git | Easy | Low |
| Contentful | $300+/month | API/Database | Hard | High |
| WordPress | $0-$45/month | MySQL | Hard | High |

**Risk Mitigation:**
- All content in Git (CMS is just editing interface)
- Can swap to Decap CMS, TinaCMS, or CloudCannon with minimal code changes
- Git-based CMS is an established pattern with multiple implementations

---

## Monorepo & Workspace Management

### Nx 17+
**Why:** Advanced monorepo tooling with intelligent caching and task orchestration.

**Key Features:**
- **Dependency graph analysis** → build only affected projects
- **Distributed caching** → reuse build artifacts across team
- **Task orchestration** → parallel builds, optimized task scheduling
- **Nx Cloud integration** → remote caching (optional)

**Performance Impact:**
- **Affected builds:** Only rebuild changed sites (vs. rebuilding everything)
- **Cache hit rate:** 70-90% on incremental builds
- **Parallel execution:** Build multiple sites simultaneously

**vs. Alternatives:**
- **Turborepo:** Similar features, less mature, fewer plugins
- **Lerna:** Older, less performant, no built-in caching
- **Manual workspaces:** No caching, no task orchestration, slow

---

### pnpm 8+
**Why:** Fast, disk-efficient package manager with excellent monorepo support.

**Key Features:**
- **Content-addressable storage** → deduplicated node_modules (saves disk space)
- **Strict dependency resolution** → prevents phantom dependencies
- **Fast installation** → 2-3x faster than npm, competitive with Yarn
- **Workspace support** → native monorepo management

**Performance:**
- **Install time:** 30-60 seconds for full monorepo (vs. 2-3 minutes with npm)
- **Disk usage:** ~50% less than npm due to hard-linking

---

## Deployment & Hosting

### Primary: Your Own Server (Nginx/Apache)
**Why:** Full control, zero ongoing costs, predictable performance.

**Setup:**
- **Build output:** Static HTML/CSS/JS files
- **Web server:** Nginx or Apache (simple static file serving)
- **SSL/TLS:** Let's Encrypt (free SSL certificates)
- **Deployment:** rsync, scp, or GitHub Actions → server

**Costs:**
- **Hosting:** $5-$20/month (VPS like DigitalOcean, Linode)
- **CMS:** $0/month (Sveltia is free)
- **SSL:** $0/month (Let's Encrypt)
- **Total:** **$5-$20/month** for unlimited client sites

---

### Alternative: Vercel or Netlify
**Why:** Managed hosting with automatic preview deployments and global CDN.

**Vercel:**
- **Pricing:** Free tier (hobby), $20/month per site (pro)
- **Features:** Automatic preview URLs, edge CDN, serverless functions
- **Best for:** Teams without DevOps expertise

**Netlify:**
- **Pricing:** Free tier (starter), $19/month per site (pro)
- **Features:** Similar to Vercel, form handling, split testing
- **Best for:** Agencies wanting managed hosting

**Trade-offs:**
- ✅ Easier deployment (git push → auto-deploy)
- ✅ Global CDN distribution
- ❌ Higher costs at scale ($200/month for 10 sites)
- ❌ Less control over infrastructure

---

## Automation & Quality Tools

### Claude Code Agents
**Why:** AI-powered automation for quality assurance and optimization.

**Agent Types:**
- **SEO Optimizer:** Meta tags, schema markup, heading hierarchy
- **Accessibility Auditor:** WCAG 2.1 AA compliance, ARIA attributes
- **Content Optimizer:** Readability, AI crawler optimization
- **Quality Gate Orchestrator:** Multi-stage validation pipeline

**Integration:**
- **Manual:** `claude-code --agent=seo-optimizer --project=sites/client-a`
- **Automated:** GitHub Actions webhook → agent runs on every commit
- **Storage:** Agent definitions in `.claude/agents/` (version-controlled)

---

### Accessibility Testing

#### axe-core
**Why:** Industry-standard accessibility testing engine.

**Coverage:**
- WCAG 2.1 Level A, AA, AAA
- Section 508 compliance
- ARIA attribute validation

#### @axe-core/playwright
**Why:** Automated browser-based accessibility testing.

**Features:**
- Runs axe-core in real browser context
- Detects dynamic accessibility issues
- Integrates with CI/CD pipeline

---

### SEO & Schema Validation

#### schema-dts
**Why:** TypeScript definitions for schema.org structured data.

**Benefits:**
- Type-safe schema markup generation
- Autocomplete for schema properties
- Compile-time validation

#### Google Rich Results Test API
**Why:** Official Google validation for structured data.

**Usage:**
- Automated testing in CI/CD
- Validates JSON-LD schema markup
- Ensures Google can parse structured data

---

### Performance Monitoring

#### Lighthouse CI
**Why:** Automated performance auditing in CI/CD.

**Metrics:**
- Performance score (0-100)
- Core Web Vitals (LCP, FID, CLS)
- SEO score
- Accessibility score

**Thresholds:**
- Performance: >90
- Accessibility: >90
- SEO: >90

#### Google PageSpeed Insights API
**Why:** Real-world field data from Chrome UX Report.

**Data Sources:**
- Lab data (Lighthouse in controlled environment)
- Field data (real user metrics from Chrome)

---

## Development & Testing Tools

### Linting & Formatting

#### ESLint 8+
**Why:** JavaScript/TypeScript linting for code quality.

**Rules:**
- TypeScript-specific rules (via `@typescript-eslint`)
- Astro component linting (via `eslint-plugin-astro`)
- Custom rules for project conventions

#### Prettier 3+
**Why:** Opinionated code formatting (no debates on style).

**Configuration:**
- Single quotes for strings
- No semicolons
- 2-space indentation
- Integrated with ESLint (via `eslint-config-prettier`)

---

### Testing Frameworks

#### Vitest
**Why:** Fast unit testing framework (Vite-native).

**Features:**
- Same config as Vite (no separate setup)
- Instant HMR for tests
- Compatible with Jest API (easy migration)

**Use Cases:**
- Unit tests for utilities (`seo-utils`, `meta-tags`)
- Schema markup generation logic
- Helper functions

#### Playwright
**Why:** End-to-end browser testing for quality gates.

**Features:**
- Cross-browser testing (Chromium, Firefox, WebKit)
- Built-in axe-core integration for accessibility
- Screenshot and video recording
- Network interception for testing

**Use Cases:**
- Accessibility audits (WCAG compliance)
- Visual regression testing
- E2E user flows

---

## Image Optimization

### @astrojs/image (Built-in)
**Why:** Automatic image optimization in Astro.

**Features:**
- WebP conversion (smaller file sizes)
- Responsive image generation (`srcset` attributes)
- Lazy loading by default
- AVIF support (next-gen format)

### sharp
**Why:** High-performance Node.js image processing.

**Features:**
- Resize, crop, optimize images
- Used by Astro Image under the hood
- Supports all major formats (JPEG, PNG, WebP, AVIF)

**Performance:**
- 4-5x faster than ImageMagick
- Reduced image sizes by 40-60%

---

## Optional Monitoring

### Google Analytics 4
**Why:** Web analytics for client sites (client implementation).

**Setup:**
- Client provides GA4 tracking ID
- Injected via Astro component in `<head>`
- Privacy-friendly (can be configured for GDPR compliance)

### Vercel Analytics
**Why:** Performance monitoring (if using Vercel hosting).

**Features:**
- Core Web Vitals tracking
- Real user monitoring (RUM)
- Performance insights dashboard

**Cost:** Included with Vercel Pro plan ($20/month)

---

## Key Libraries Summary

| Category | Library | Version | Purpose |
|----------|---------|---------|---------|
| **Framework** | Astro | 5.0+ | Static site generation |
| **Build Tool** | Vite | 5.0+ | Fast bundling and HMR |
| **Styling** | Tailwind CSS | 3.4+ | Utility-first CSS |
| **CMS** | Sveltia CMS | Latest | Git-based content editing |
| **Monorepo** | Nx | 17+ | Task orchestration, caching |
| **Package Manager** | pnpm | 8+ | Fast, disk-efficient |
| **Language** | TypeScript | 5.2+ | Type-safe development |
| **Accessibility** | axe-core | Latest | WCAG compliance testing |
| **Testing (Unit)** | Vitest | Latest | Fast unit tests |
| **Testing (E2E)** | Playwright | Latest | Browser automation |
| **Linting** | ESLint | 8+ | Code quality |
| **Formatting** | Prettier | 3+ | Code formatting |
| **Images** | sharp | Latest | Image optimization |
| **Schema** | schema-dts | Latest | Schema.org TypeScript defs |

---

## Technology Decision Matrix

### When to Use This Stack

✅ **Use when:**
- Building marketing/content websites (not web applications)
- Need AI crawler optimization (content discoverability in ChatGPT, Claude)
- Want zero CMS licensing costs
- Managing 5+ client sites with small team
- Clients need visual editing but don't want WordPress
- Performance and SEO are critical

❌ **Don't use when:**
- Building complex web applications (use Next.js, SvelteKit)
- Need real-time features (use Next.js with database)
- Require e-commerce (integrate Shopify or use dedicated platform)
- Team has deep WordPress expertise and no desire to change
- Client explicitly requires WordPress (offer as premium tier)

---

## Related Documentation

- [Architecture](ARCHITECTURE.md) - Project structure
- [Project Vision](PROJECT_VISION.md) - Strategic context
- [Code Style Guide](CODE_STYLE_GUIDE.md) - Conventions
- [Commands Reference](COMMANDS_REFERENCE.md) - CLI usage
