# Commands Reference

**Last Updated:** November 17, 2025

This document provides a comprehensive reference for all CLI commands used in the Multi-Site Website Development System.

## Quick Reference

| Command | Description |
|---------|-------------|
| `pnpm install` | Install all monorepo dependencies |
| `pnpm dev --filter=client-a` | Start dev server for specific client |
| `nx build client-a` | Build specific client site |
| `nx run-many --target=build --all` | Build all sites |
| `pnpm create-client --name="acme"` | Scaffold new client site |
| `pnpm quality-gates --site=client-a` | Run all quality validation gates |

---

## Initial Setup

### Clone and Install
```bash
# Clone repository and install dependencies
git clone <repository-url> starter-template
cd starter-template
pnpm install
```

**What this does:**
- Clones the monorepo to your local machine
- Installs all workspace dependencies (shared packages + client sites)
- Sets up Nx cache and build tools
- Configures Git hooks (if present)

**Expected time:** 2-5 minutes (depending on connection speed)

---

## Development Commands

### Start Development Server

#### Single Client Site
```bash
# Start dev server for specific client site
pnpm dev --filter=client-a
```

**What this does:**
- Starts Astro dev server on `http://localhost:4321` (default)
- Enables hot module replacement (HMR) for instant updates
- Watches for file changes in `sites/client-a/`
- Automatically reloads on content changes

#### All Client Sites (Concurrent)
```bash
# Start all client sites concurrently (for multi-site preview)
pnpm dev
```

**What this does:**
- Starts dev servers for ALL client sites in parallel
- Each site gets unique port: `client-a` on `:4321`, `client-b` on `:4322`, etc.
- Useful for testing shared component changes across multiple sites

**Note:** Resource-intensive - only use when needed.

### Building Sites

#### Build Specific Client Site
```bash
# Build specific client site
nx build client-a
```

**What this does:**
- Runs Astro build process (SSR → static HTML generation)
- Outputs to `sites/client-a/dist/`
- Optimizes images (WebP conversion, responsive sizes)
- Generates sitemap and robots.txt
- Validates content schemas

**Expected time:** 15-45 seconds (depending on site size)

#### Build All Sites
```bash
# Build all sites
nx run-many --target=build --all
```

**What this does:**
- Builds all client sites in parallel (Nx caching for efficiency)
- Only rebuilds affected sites if using `nx affected`
- Useful for pre-deployment validation

**Expected time:** 1-3 minutes (all sites)

#### Build Only Affected Sites
```bash
# Build only sites affected by recent changes
nx affected:build
```

**What this does:**
- Analyzes Git changes since last build
- Builds only sites/packages that changed or depend on changed code
- Significantly faster than rebuilding everything

---

## New Client Site Creation

### Scaffold New Client Site
```bash
# Scaffold new client site from template
pnpm create-client --name="acme-corp"

# Alternative with full options
pnpm create-client --name="acme-corp" --domain="acmecorp.com"
```

**What this does:**
1. Creates new directory: `sites/acme-corp/`
2. Copies base Astro template structure
3. Configures `package.json` with client-specific name
4. Sets up Sveltia CMS config in `public/admin/config.yml`
5. Creates empty `BRAND_GUIDELINES.md` for client branding
6. Registers site with Nx workspace configuration

**Expected time:** <2 minutes

**Follow-up steps:**
1. Update `sites/acme-corp/BRAND_GUIDELINES.md` with client brand details
2. Customize `tailwind.config.cjs` with client color tokens
3. Configure `public/admin/config.yml` for Sveltia CMS
4. Add initial content to `src/content/`

---

## Quality Checks

### Linting

#### Lint All Code
```bash
# Run linting across workspace
nx run-many --target=lint --all
```

**What this does:**
- Runs ESLint on all JavaScript/TypeScript files
- Checks code style compliance (Prettier)
- Reports code quality issues
- Exit code 1 if errors found (blocks CI/CD)

#### Lint Specific Site
```bash
# Lint specific client site
nx lint client-a
```

#### Auto-Fix Lint Issues
```bash
# Automatically fix linting errors where possible
nx run-many --target=lint --all --fix
```

### Type Checking

```bash
# Run type checking
nx run-many --target=type-check --all
```

**What this does:**
- Runs TypeScript compiler in check mode (`tsc --noEmit`)
- Validates type safety across all packages
- Does NOT generate output files (just validation)

### Accessibility Audits

```bash
# Run accessibility audits via Playwright
nx run-many --target=test:a11y --all
```

**What this does:**
- Launches Playwright browser automation
- Runs axe-core accessibility scans on all pages
- Checks WCAG 2.1 AA compliance
- Generates accessibility report with violations

**Expected time:** 2-5 minutes (depending on number of pages)

### Full Quality Gate Validation

```bash
# Run all quality gates (full validation)
pnpm quality-gates --site=client-a
```

**What this does:**
- Sequentially runs all 6 quality gates:
  1. Code Quality (linting + type-checking)
  2. SEO Compliance (via `seo-optimizer` agent)
  3. Accessibility (WCAG 2.1 AA)
  4. Performance (Lighthouse CI)
  5. AI Readiness (crawler validation)
  6. Security (dependency audits)
- Stops at first gate failure with detailed error report
- Exit code 0 only if ALL gates pass

**Expected time:** 5-10 minutes (comprehensive validation)

---

## Claude Code Agent Invocation

### Manual Agent Invocation

```bash
# Invoke SEO optimizer on specific client site
claude-code --agent=seo-optimizer --project=sites/client-a

# Run accessibility auditor
claude-code --agent=accessibility-auditor --project=sites/client-a
```

**What this does:**
- Loads agent definition from `.claude/agents/website/seo-optimizer.md`
- Runs agent analysis on specified client site
- Generates report with findings and recommendations
- May auto-commit fixes if agent configured with write permissions

### Orchestrator Workflows

```bash
# Run quality gate orchestrator (automated multi-agent workflow)
claude-code --agent=quality-gate-orchestrator --project=sites/client-a
```

**What this does:**
- Invokes master orchestrator agent
- Coordinates execution of multiple specialist agents in sequence
- Delegates to SEO, accessibility, performance, and security agents
- Compiles comprehensive quality report

---

## Deployment Commands

### Staging Deployment

```bash
# Deploy to staging (automated via GitHub Actions on push)
git push origin staging
```

**What this does:**
- Triggers GitHub Actions workflow: `.github/workflows/deploy-staging.yml`
- Builds site in CI/CD environment
- Runs quality checks
- Deploys to staging URL (e.g., `staging.client-a.com` or Vercel preview URL)
- Provides preview link for client approval

### Production Deployment

#### Deploy Specific Site
```bash
# Deploy specific site to production (manual trigger)
pnpm deploy:production --site=client-a
```

**What this does:**
- Runs full quality gate validation
- Builds production-optimized site
- Deploys to production hosting (server/Vercel/Netlify)
- Updates DNS if needed
- Sends deployment notification

#### Deploy All Sites
```bash
# Deploy all sites to production
pnpm deploy:production --all
```

**Warning:** Only use when deploying shared component updates that affect all sites.

---

## Maintenance Commands

### Update Dependencies

```bash
# Update shared dependencies across all sites
pnpm sync-shared-deps
```

**What this does:**
- Updates versions in `packages/*/package.json`
- Syncs lockfile (`pnpm-lock.yaml`)
- Runs `pnpm install` to update node_modules
- Tests builds to ensure compatibility

### Nx Cache Management

```bash
# Clear Nx cache (use if builds behaving unexpectedly)
nx reset

# View Nx dependency graph
nx graph
```

### Bundle Size Analysis

```bash
# Analyze bundle sizes for specific site
nx run client-a:analyze
```

**What this does:**
- Generates interactive bundle size visualization
- Identifies largest dependencies
- Helps optimize JavaScript payload
- Opens browser with treemap visualization

---

## Testing Commands

### Unit Tests
```bash
# Run unit tests for utilities
nx run seo-utils:test

# Run all unit tests
nx run-many --target=test --all
```

### End-to-End Tests (Playwright)
```bash
# Run e2e tests for specific client site
nx run client-a:e2e

# Run e2e tests in headless mode
nx run client-a:e2e --headless
```

---

## Troubleshooting Commands

### Clear Everything and Reinstall
```bash
# Nuclear option - clear all caches and reinstall
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
nx reset
```

### Check for Dependency Issues
```bash
# Run npm audit for security vulnerabilities
pnpm audit

# Fix automatically fixable vulnerabilities
pnpm audit --fix
```

### Verify Nx Configuration
```bash
# Print Nx configuration
nx show projects

# Check affected projects
nx affected:graph
```

---

## Environment-Specific Commands

### Windows (PowerShell)
```powershell
# Use PowerShell equivalents for cross-platform compatibility
pnpm install
nx build client-a
```

### Linux/macOS (Bash)
```bash
# Shell scripts work on Unix-based systems
./scripts/new-client-site.sh acme-corp
./scripts/sync-shared-deps.sh
```

---

## Related Documentation

- [Architecture](ARCHITECTURE.md) - Project structure and organization
- [Quick Start](QUICK_START.md) - Get started in 5 minutes
- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Deployment strategies
- [Troubleshooting](TROUBLESHOOTING.md) - Common issues and solutions
