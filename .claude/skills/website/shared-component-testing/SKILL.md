---
name: shared-component-testing
description: Test shared component changes across all client sites before committing. Uses nx affected commands to identify impacted sites, run tests, and verify builds. Prevents breaking changes from propagating to multiple sites. Use before modifying packages/ui-components.
---

# Shared Component Testing

## Purpose
Prevents breaking changes to shared components (`packages/ui-components/`) from affecting multiple client sites simultaneously. Ensures all modifications are tested across the entire portfolio before deployment.

---

## Why This Matters

**The Risk:**
- Shared components live in `packages/ui-components/`
- Changes propagate to **ALL client sites** on next build
- One broken component = **ALL sites potentially broken**
- Manual testing across 10+ sites is impractical

**The Solution:**
- Use Nx's `affected` commands to identify impacted sites
- Run automated tests only on affected sites
- Verify builds succeed before committing

---

## Testing Workflow

### Step 1: Make Changes to Shared Component

**Location:** `packages/ui-components/src/components/Button.astro`

**Example Modification:**
```astro
---
// Adding new 'outline' variant to Button component
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'; // Added 'outline'
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const { variant = 'primary', size = 'md', href } = Astro.props;

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white' // New
};
---
```

---

### Step 2: Identify Affected Sites

```bash
# From monorepo root
nx affected:graph

# Shows dependency graph with affected projects highlighted
```

**Alternative: List affected projects**
```bash
nx affected:apps
nx affected:libs

# Example output:
# - client-alpha
# - client-beta
# - client-gamma
# - @workspace/ui-components
```

---

### Step 3: Run Tests on Affected Sites

```bash
# Test only affected sites
nx affected:test

# If specific test failures, test individual site
nx test client-alpha
```

**What gets tested:**
- Unit tests for utility functions
- Component integration tests
- Playwright browser tests (if configured)

---

### Step 4: Build Affected Sites

```bash
# Build only affected sites
nx affected:build

# Verify all builds succeed
# ✅ Build output should show success for each site
```

**Expected Output:**
```
✔  nx run client-alpha:build (5s)
✔  nx run client-beta:build (4s)
✔  nx run client-gamma:build (6s)

——————————————————————————————————————————————————
Successfully ran target build for 3 projects
```

---

### Step 5: Visual Verification (Manual)

**Start dev servers for affected sites:**
```bash
# Terminal 1
pnpm dev --filter=client-alpha

# Terminal 2
pnpm dev --filter=client-beta

# Terminal 3
pnpm dev --filter=client-gamma
```

**Verify in browser:**
1. Navigate to each site
2. Find pages using the modified component
3. Test all variants (primary, secondary, outline)
4. Verify no visual regressions

---

### Step 6: Commit Changes

```bash
# If all tests pass and visual check succeeds
git add packages/ui-components/src/components/Button.astro
git commit -m "feat(ui-components): add outline variant to Button component"
```

---

## Nx Affected Commands Reference

### Show Dependency Graph
```bash
# Visual dependency graph
nx affected:graph

# Opens browser showing which projects are affected
```

### Run Commands on Affected Projects
```bash
# Test affected
nx affected:test

# Build affected
nx affected:build

# Lint affected
nx affected:lint

# Run any target on affected projects
nx affected --target=<target-name>
```

### Understand Why Project is Affected
```bash
# Show which files changed that triggered "affected" status
nx affected:graph --verbose

# Base comparison against specific branch
nx affected:apps --base=main --head=HEAD
```

### Reset Nx Cache (If needed)
```bash
# Clear Nx cache
nx reset

# Useful if affected:* commands seem incorrect
```

---

## Common Scenarios

### Scenario 1: Breaking Change to Props Interface

**Problem:**
```astro
<!-- OLD interface in Button.astro -->
interface Props {
  text: string;  // Renamed to 'label'
}
```

**Fix:**
```astro
<!-- NEW interface (backward compatible) -->
interface Props {
  label?: string;  // New name
  text?: string;   // Deprecated but still supported
}

const { label, text } = Astro.props;
const buttonText = label || text; // Fallback
```

**Why:** Prevents breaking existing sites that use `text` prop

---

### Scenario 2: New Required Prop

**Problem:**
```astro
<!-- Adding required prop breaks existing usage -->
interface Props {
  variant: string;  // Now required
  label: string;
}
```

**Fix:**
```astro
<!-- Make new props optional with defaults -->
interface Props {
  variant?: 'primary' | 'secondary';  // Optional
  label: string;
}

const { variant = 'primary', label } = Astro.props; // Default value
```

---

### Scenario 3: Removing Deprecated Code

**Process:**
1. Add deprecation warning (with version number)
2. Wait 1-2 releases
3. Update all sites to use new API
4. Remove deprecated code

**Example:**
```astro
---
interface Props {
  label: string;
  text?: string; // DEPRECATED: Will be removed in v2.0
}

const { label, text } = Astro.props;

if (text) {
  console.warn('Button: "text" prop is deprecated. Use "label" instead.');
}

const buttonText = label || text;
---
```

---

## Testing Checklist

**Before Committing Shared Component Changes:**

- [ ] **Run `nx affected:graph`** to see impacted sites
- [ ] **Run `nx affected:test`** to execute automated tests
- [ ] **Run `nx affected:build`** to verify builds succeed
- [ ] **Start dev servers** for 2-3 affected sites
- [ ] **Visual verification** of component changes
- [ ] **Test all prop variants** (primary, secondary, etc.)
- [ ] **Test responsive behavior** (mobile, tablet, desktop)
- [ ] **Check browser console** for errors/warnings
- [ ] **Document breaking changes** in commit message
- [ ] **Update component documentation** if API changed

---

## Breaking vs Non-Breaking Changes

### ✅ Non-Breaking Changes (Safe)
- Adding optional props with defaults
- Adding new CSS classes (not removing)
- Adding new component variants
- Internal refactoring (same public API)
- Performance improvements
- Bug fixes

### ⚠️ Breaking Changes (Requires Testing)
- Removing props
- Renaming props
- Changing prop types (string → number)
- Removing CSS classes
- Changing default behavior
- Removing component variants

---

## Rollback Procedure

**If builds fail after component change:**

### Option 1: Immediate Rollback
```bash
# Revert last commit
git revert HEAD

# Push revert
git push origin main
```

### Option 2: Fix Forward
```bash
# Identify failing sites
nx affected:build --verbose

# Fix the issue
# Re-test
nx affected:test
nx affected:build

# Commit fix
git add .
git commit -m "fix(ui-components): resolve build failures in Button component"
```

---

## CI/CD Integration

**GitHub Actions Example:**

```yaml
# .github/workflows/test-shared-components.yml
name: Test Shared Components
on:
  pull_request:
    paths:
      - 'packages/ui-components/**'

jobs:
  test-affected:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0 # Fetch all history for affected:* commands

      - name: Setup pnpm
        uses: pnpm/action-setup@v2

      - name: Install dependencies
        run: pnpm install

      - name: Test affected sites
        run: pnpm nx affected:test --base=origin/main

      - name: Build affected sites
        run: pnpm nx affected:build --base=origin/main
```

**Workflow:**
1. PR modifies shared component
2. CI automatically runs tests on affected sites
3. PR cannot merge until all tests pass
4. Prevents broken components from reaching main branch

---

## Usage Examples

### Example 1: Add New Prop to Hero Component

```bash
# 1. Edit component
vim packages/ui-components/src/components/Hero.astro

# 2. Check affected sites
nx affected:apps
# Output: client-alpha, client-beta

# 3. Run tests
nx affected:test

# 4. Build affected
nx affected:build

# 5. Manual verification
pnpm dev --filter=client-alpha
# Verify Hero component on homepage

# 6. Commit
git add packages/ui-components/src/components/Hero.astro
git commit -m "feat(ui-components): add backgroundImage prop to Hero"
```

### Example 2: Fix Bug in Card Component

```bash
# 1. Fix bug
vim packages/ui-components/src/components/Card.astro

# 2. Test affected (all sites using Card)
nx affected:test

# 3. Build affected
nx affected:build

# 4. Visual spot-check on 2-3 sites
pnpm dev --filter=client-alpha
pnpm dev --filter=client-beta

# 5. Commit fix
git commit -m "fix(ui-components): correct Card shadow on hover state"
```

---

## Troubleshooting

### Issue: `nx affected:*` shows no affected projects
**Cause:** No changes detected or Nx cache stale
**Solution:**
```bash
nx reset  # Clear cache
git status  # Verify changes exist
nx affected:apps --verbose  # See why nothing affected
```

### Issue: Build fails on one site but not others
**Cause:** Site uses component differently or has unique configuration
**Solution:**
```bash
# Build specific site with verbose output
nx build client-alpha --verbose

# Check site-specific usage
grep -r "Button" sites/client-alpha/src/
```

### Issue: Tests pass but visual regression
**Cause:** Automated tests don't cover all visual states
**Solution:**
- Add visual regression tests (Playwright screenshots)
- Manual verification is still important
- Document common usage patterns in component

---

## Related Skills
- `astro-component-structure` - Component best practices
- `quality-gate-validation` - Pre-deployment validation
- `new-client-site-scaffolding` - Understanding component reuse

---

**Version:** 1.0
**Last Updated:** November 2025
**Trigger Terms:** shared component testing, nx affected, monorepo testing, component changes, breaking changes, impact analysis
