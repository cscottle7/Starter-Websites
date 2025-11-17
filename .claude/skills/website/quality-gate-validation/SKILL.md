---
name: quality-gate-validation
description: Execute 6-gate sequential quality validation for multi-site website deployments. Validates code quality, SEO compliance, accessibility (WCAG 2.1 AA), performance (Core Web Vitals), AI crawler readiness, and security before production deployment. Use when validating site readiness or before deploying to production.
---

# Quality Gate Validation

## Purpose
Ensures all client websites meet consistent quality standards through sequential validation gates. Each gate must pass before the next executes. No production deployment allowed without all 6 gates passing.

---

## Sequential Validation Gates

### Gate 1: Code Quality
**Pass Criteria:**
- ✅ ESLint: Zero errors, warnings acceptable
- ✅ Prettier: All files formatted
- ✅ TypeScript: Zero type errors (strict mode)
- ✅ Build: Successful compilation

**Commands:**
```bash
nx run-many --target=lint --all
nx run-many --target=type-check --all
nx build <site-name>
```

**Failure Action:** Fix linting/type errors, re-run gate

---

### Gate 2: SEO Compliance
**Pass Criteria:**
- ✅ Meta tags present on all pages (title, description, og:*)
- ✅ JSON-LD schema markup valid (homepage, about, services, blog)
- ✅ Heading hierarchy correct (single H1, progressive H2→H3→H4)
- ✅ Image alt text coverage: >90%
- ✅ SEO score: >90/100

**Validation:**
```bash
# Invoke SEO optimizer agent
@seo-optimizer audit sites/<site-name>
```

**Example Schema Validation:**
```yaml
pass_criteria:
  - meta_tags_present: true
  - schema_markup_valid: true
  - heading_hierarchy_correct: true
  - image_alt_text_coverage: >90%
  - seo_score: >90
```

**Failure Action:** Address specific SEO issues identified, re-run gate

---

### Gate 3: Accessibility (WCAG 2.1 AA)
**Pass Criteria:**
- ✅ Zero critical violations
- ✅ Warnings: <5 per site
- ✅ Keyboard navigation functional on all interactive elements
- ✅ Color contrast ratios: 4.5:1 (normal text), 3:1 (large text)
- ✅ ARIA attributes correct on custom components
- ✅ Focus indicators visible

**Validation:**
```bash
# Run Playwright accessibility tests
nx run <site-name>:test:a11y

# Or invoke accessibility auditor agent
@accessibility-auditor audit sites/<site-name>
```

**Tools:**
- axe-core via @axe-core/playwright
- Manual keyboard navigation testing

**Failure Action:** Fix accessibility violations, re-run gate

---

### Gate 4: Performance (Core Web Vitals)
**Pass Criteria:**
- ✅ LCP (Largest Contentful Paint): <2.5 seconds
- ✅ FID (First Input Delay): <100 milliseconds
- ✅ CLS (Cumulative Layout Shift): <0.1
- ✅ Lighthouse Performance Score: >90
- ✅ Bundle size: <500KB total JavaScript per page
- ✅ Build time: <60 seconds

**Validation:**
```bash
# Analyze bundle size
nx run <site-name>:analyze

# Run Lighthouse CI (if configured)
lighthouse <site-url> --view
```

**Failure Action:** Optimize performance bottlenecks, re-run gate

---

### Gate 5: AI Readiness
**Pass Criteria:**
- ✅ Server-side rendering (SSR) enabled for all content pages
- ✅ robots.txt allows AI crawlers (GPTBot, ClaudeBot, etc.)
- ✅ Semantic HTML structure (proper nav, main, article, section tags)
- ✅ No client-side-only content rendering
- ✅ llms.txt file present (optional but recommended)

**Validation:**
```bash
# Check SSR configuration in astro.config.mjs
# Verify robots.txt does NOT block:
# - GPTBot
# - ClaudeBot
# - Google-Extended
# - ChatGPT-User

# Invoke AI readiness auditor agent
@ai-readiness-auditor audit sites/<site-name>
```

**Failure Action:** Enable SSR, update robots.txt, re-run gate

---

### Gate 6: Security
**Pass Criteria:**
- ✅ npm audit: Zero high or critical vulnerabilities
- ✅ No hardcoded secrets or API keys in repository
- ✅ .env files gitignored
- ✅ HTTPS enforced for production
- ✅ Content Security Policy (CSP) headers configured

**Validation:**
```bash
# Dependency audit
npm audit --audit-level=high

# Scan for secrets (manual check or use tool)
grep -r "API_KEY\|SECRET\|PASSWORD" sites/<site-name>/src/
```

**Failure Action:** Update vulnerable dependencies, remove secrets, re-run gate

---

## Gate Execution Flow

```
Gate 1: Code Quality
  ↓ PASS
Gate 2: SEO Compliance
  ↓ PASS
Gate 3: Accessibility
  ↓ PASS
Gate 4: Performance
  ↓ PASS
Gate 5: AI Readiness
  ↓ PASS
Gate 6: Security
  ↓ PASS
✅ APPROVED FOR PRODUCTION DEPLOYMENT
```

**If any gate FAILS:**
1. Gate execution stops immediately
2. Failure details logged/reported
3. Developer addresses specific issues
4. Restart validation from Gate 1 (all gates must re-pass)
5. Maximum 3 retry attempts before manual review escalation

---

## Usage Examples

### Example 1: Pre-Production Validation
```bash
# Full quality gate validation before production deploy
pnpm quality-gates --site=acme-corp

# Or invoke quality gate orchestrator agent
@quality-gate-orchestrator validate sites/acme-corp
```

### Example 2: Automated CI/CD Integration
```yaml
# .github/workflows/quality-gates.yml
name: Quality Gate Validation
on: [pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - name: Gate 1 - Code Quality
        run: nx run-many --target=lint --all
      - name: Gate 2 - SEO Compliance
        run: # invoke seo-optimizer agent
      # ... continue for all 6 gates
```

### Example 3: Single Gate Validation
```bash
# Test just accessibility gate during development
@accessibility-auditor audit sites/acme-corp
```

---

## Non-Negotiable Rules

1. **NO production deployment without all 6 gates passing**
2. **Gates must execute sequentially** (Gate N+1 only if Gate N passes)
3. **All gates must re-pass after any code change** (no selective re-validation)
4. **Emergency override requires written approval** from technical lead + documentation

---

## Related Skills
- `astro-component-structure` - Component quality standards
- `ai-crawler-optimization` - AI readiness implementation
- `shared-component-testing` - Testing procedures for shared components

---

**Version:** 1.0
**Last Updated:** November 2025
**Trigger Terms:** quality gates, validation, pre-production check, deployment readiness, quality assurance
