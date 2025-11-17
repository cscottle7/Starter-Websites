# Monorepo Patterns

**Skill Type:** Architecture & Organization
**Domain:** Monorepo Management
**Tools:** Nx 17+, pnpm 8+ workspaces

## Overview

This skill provides patterns and best practices for managing the Nx-powered monorepo structure in the Multi-Site Website Development System.

## When to Apply This Skill

- Adding new client sites to the monorepo
- Creating or updating shared packages (`ui-components`, `seo-utils`)
- Optimizing build performance and caching
- Managing dependencies across workspaces
- Coordinating multi-site deployments

---

## Monorepo Structure

### Three-Tier Organization

```
starter-template/
├── packages/           # Tier 1: Shared code (NEVER customized per client)
│   ├── ui-components/  # Reusable Astro components
│   ├── seo-utils/      # SEO utilities (schema, meta tags)
│   └── cms-config/     # Shared Sveltia CMS configurations
├── sites/              # Tier 2 & 3: Client-specific sites
│   ├── client-a/       # Individual client website
│   ├── client-b/
│   └── client-c/
└── .claude/            # Automation (agents, skills)
```

---

## Core Patterns

### 1. Shared Package Creation

**When to create a shared package:**
- Code used by 2+ client sites
- Utilities that enforce standards (SEO, schema markup)
- Reusable UI components
- Common configuration files

**Steps to create new shared package:**

```bash
# 1. Create package directory
mkdir -p packages/new-package/src

# 2. Create package.json
cat > packages/new-package/package.json <<EOF
{
  "name": "@workspace/new-package",
  "version": "0.0.1",
  "type": "module",
  "main": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts"
  },
  "dependencies": {},
  "devDependencies": {
    "typescript": "^5.2.0"
  }
}
EOF

# 3. Create tsconfig.json
cat > packages/new-package/tsconfig.json <<EOF
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
EOF

# 4. Create index.ts (barrel export)
cat > packages/new-package/src/index.ts <<EOF
export * from './utils';
EOF

# 5. Register with Nx
nx.json will auto-detect the new package
```

**Import from client sites:**

```astro
---
// sites/client-a/src/pages/index.astro
import { someFunction } from '@workspace/new-package';
---
```

---

### 2. Client Site Scaffolding

**Pattern for adding new client site:**

```bash
# Use automated script (recommended)
pnpm create-client --name="acme-corp" --domain="acmecorp.com"

# Manual steps (if script unavailable):
# 1. Copy template
cp -r templates/client-template sites/acme-corp

# 2. Update package.json
sed -i 's/client-template/acme-corp/g' sites/acme-corp/package.json

# 3. Update astro.config.mjs
# Edit sites/acme-corp/astro.config.mjs to set site URL

# 4. Install dependencies
pnpm install

# 5. Register with Nx (auto-detected)
```

**Directory structure for client sites:**

```
sites/acme-corp/
├── src/
│   ├── pages/              # Astro pages (file-based routing)
│   ├── layouts/            # Base layouts (customizable per client)
│   ├── components/         # Client-specific component variants
│   └── content/            # Sveltia CMS editable content
├── public/
│   ├── admin/              # Sveltia CMS interface
│   │   └── config.yml      # CMS configuration
│   └── robots.txt          # AI crawler-friendly robots.txt
├── astro.config.mjs        # Client-specific Astro config
├── tailwind.config.cjs     # Client brand colors/typography
├── package.json
├── tsconfig.json
├── BRAND_GUIDELINES.md     # Client branding documentation
└── README.md
```

---

### 3. Nx Task Orchestration

**Common Nx commands:**

```bash
# Build specific site
nx build client-a

# Build all sites
nx run-many --target=build --all

# Build only affected sites (based on Git changes)
nx affected:build

# Lint all packages
nx run-many --target=lint --all

# Type-check specific package
nx type-check ui-components

# View dependency graph
nx graph

# Clear Nx cache
nx reset
```

**Nx Configuration (`nx.json`):**

```json
{
  "tasksRunnerOptions": {
    "default": {
      "runner": "nx/tasks-runners/default",
      "options": {
        "cacheableOperations": ["build", "lint", "test", "type-check"]
      }
    }
  },
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"]
    }
  },
  "namedInputs": {
    "default": ["{projectRoot}/**/*"],
    "production": ["!{projectRoot}/**/*.spec.ts"]
  }
}
```

---

### 4. Dependency Management

**pnpm Workspace Configuration (`pnpm-workspace.yaml`):**

```yaml
packages:
  - 'packages/*'
  - 'sites/*'
```

**Installing dependencies:**

```bash
# Install for specific package
pnpm add astro --filter=@workspace/client-a

# Install for all packages
pnpm add -w typescript

# Install shared dependency across all sites
pnpm add -r tailwindcss
```

**Updating dependencies:**

```bash
# Update specific package
pnpm update astro --filter=client-a

# Update all dependencies (monorepo-wide)
pnpm update -r

# Sync shared dependencies across sites (custom script)
pnpm sync-shared-deps
```

---

### 5. Build Caching & Performance

**Nx Caching Benefits:**
- **Cache hit rate:** 70-90% on incremental builds
- **Build time:** <60 seconds per site (cached) vs. 2-3 minutes (uncached)
- **Affected builds:** Only rebuild changed sites

**Optimizing Nx cache:**

```bash
# View cache statistics
nx reset --verbose

# Enable remote caching (Nx Cloud - optional)
# nx.json
{
  "nxCloudAccessToken": "YOUR_TOKEN"
}
```

**Parallel execution:**

```bash
# Build all sites in parallel (max 4 concurrent)
nx run-many --target=build --all --parallel=4

# Build with maxWorkers (custom)
nx run-many --target=build --all --maxWorkers=8
```

---

### 6. Shared Component Patterns

**Component extension (not modification):**

```astro
---
// packages/ui-components/src/components/Button.astro (base)
interface Props {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const { variant = 'primary', size = 'md' } = Astro.props;
---

<button class={`btn btn-${variant} btn-${size}`}>
  <slot />
</button>
```

**Client-specific variant:**

```astro
---
// sites/client-a/src/components/BrandedButton.astro
import { Button } from '@workspace/ui-components';

interface Props {
  accentColor?: boolean; // Client-specific prop
}

const { accentColor = false } = Astro.props;
---

<Button variant="primary" class={accentColor ? 'bg-brand-accent' : ''}>
  <slot />
</Button>
```

**Testing shared component changes:**

```bash
# Run tests for affected projects
nx affected:test

# Build affected sites
nx affected:build

# Ensure no regressions
nx run-many --target=lint --all
```

---

### 7. Multi-Site Deployment

**Deployment strategies:**

#### Strategy 1: Deploy All Sites (Rare)

```bash
# Use when shared components updated
pnpm deploy:production --all
```

#### Strategy 2: Deploy Affected Sites Only (Recommended)

```bash
# Nx determines which sites need deployment based on Git changes
nx affected:deploy --base=main

# Or manually deploy specific site
pnpm deploy:production --site=client-a
```

#### Strategy 3: Staged Rollout

```bash
# Deploy to staging first
git push origin staging

# After approval, deploy specific site to production
pnpm deploy:production --site=client-a

# Monitor, then deploy next site
pnpm deploy:production --site=client-b
```

---

### 8. Versioning Shared Packages

**Semantic versioning for shared packages:**

```bash
# Bump version in package.json
cd packages/ui-components
pnpm version patch # 0.0.1 → 0.0.2

# Update dependents (if needed)
# In sites/client-a/package.json
{
  "dependencies": {
    "@workspace/ui-components": "workspace:^0.0.2"
  }
}

# Reinstall to update lockfile
pnpm install
```

**Changelog for shared packages:**

```markdown
# @workspace/ui-components Changelog

## [0.0.2] - 2025-11-17
### Changed
- Updated Button component to support 'ghost' variant
- Improved accessibility with better focus indicators

### Fixed
- Fixed Card component shadow on dark mode

## [0.0.1] - 2025-11-01
### Added
- Initial release with Button, Card, Hero, Navigation components
```

---

### 9. Monorepo Testing Strategy

**Unit tests (package-level):**

```bash
# Test specific package
nx test seo-utils

# Test all packages
nx run-many --target=test --all
```

**E2E tests (site-level):**

```bash
# Test specific site
nx e2e client-a

# Test affected sites only
nx affected:e2e
```

**Integration tests (cross-package):**

```typescript
// packages/ui-components/src/__tests__/integration.spec.ts
import { Button } from '../components/Button.astro';
import { generateSchema } from '@workspace/seo-utils';

describe('Component + SEO Integration', () => {
  it('Button with schema markup', () => {
    // Test that components work with SEO utilities
  });
});
```

---

### 10. Troubleshooting Monorepo Issues

**Common issues & fixes:**

#### Issue: "Cannot find module '@workspace/ui-components'"

**Fix:**
```bash
# Reinstall dependencies
pnpm install

# Clear Nx cache
nx reset

# Rebuild packages
nx run-many --target=build --all
```

#### Issue: "Circular dependency detected"

**Fix:**
```bash
# Check dependency graph
nx graph

# Identify cycle and refactor to remove circular imports
```

#### Issue: "Build cache not working"

**Fix:**
```bash
# Clear cache and rebuild
nx reset
nx build client-a

# Check cache configuration in nx.json
```

#### Issue: "Different TypeScript versions across packages"

**Fix:**
```bash
# Use workspace protocol in package.json
{
  "devDependencies": {
    "typescript": "workspace:^5.2.0"
  }
}

# Reinstall
pnpm install
```

---

## Performance Benchmarks

**Typical build times (with Nx caching):**

| Operation | Cold (No Cache) | Warm (Cache Hit) |
|-----------|-----------------|------------------|
| Single site build | 45-60s | 5-10s |
| All sites build (10 sites) | 8-12min | 1-2min |
| Affected sites build | 2-5min | 30s-1min |
| Lint all packages | 15-30s | <5s |
| Type-check all | 20-40s | <10s |

**Cache hit rates:**
- **First build:** 0% (cold cache)
- **Incremental builds:** 70-90% (unchanged packages cached)
- **After `git pull`:** 30-50% (some packages updated)

---

## Nx Configuration Best Practices

**1. Enable caching for all deterministic operations:**

```json
{
  "tasksRunnerOptions": {
    "default": {
      "options": {
        "cacheableOperations": [
          "build",
          "lint",
          "test",
          "type-check",
          "e2e"
        ]
      }
    }
  }
}
```

**2. Define dependency relationships:**

```json
{
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"]
    },
    "test": {
      "dependsOn": ["build"]
    }
  }
}
```

**3. Use named inputs for fine-grained caching:**

```json
{
  "namedInputs": {
    "default": ["{projectRoot}/**/*"],
    "production": [
      "!{projectRoot}/**/*.spec.ts",
      "!{projectRoot}/**/*.test.ts"
    ]
  }
}
```

---

## Related Documentation

- [Architecture](../../../../docs/ARCHITECTURE.md)
- [Tech Stack](../../../../docs/TECH_STACK.md)
- [Commands Reference](../../../../docs/COMMANDS_REFERENCE.md)

## Version History

- **v1.0 (2025-11-17):** Initial monorepo patterns documentation
