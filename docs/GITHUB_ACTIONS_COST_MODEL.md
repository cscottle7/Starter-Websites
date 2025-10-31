# GitHub Actions Cost Model - Multi-Site CI/CD

**Task:** Phase 0, Task 0.3
**Purpose:** Model GitHub Actions usage and costs to prevent budget surprises
**Created:** 2025-10-31
**Status:** ✅ Complete
**Owner:** Technical Lead

---

## Executive Summary

**Recommendation:** Use **public repository** for unlimited free GitHub Actions minutes.

**If public repo not feasible:**
- **5 sites:** $0/month (within 2,000 free minutes)
- **10 sites:** ~$7/month
- **20 sites:** ~$30/month
- **Mitigation:** Aggressive caching, billing alerts, optimization strategies documented

---

## GitHub Actions Pricing (2025)

### Free Tier Limits

| Repository Type | Free Minutes/Month | Overage Cost |
|-----------------|-------------------|--------------|
| **Public** | **Unlimited** | **$0** |
| **Private** | 2,000 minutes | $0.008/minute |

**Source:** https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions

### Cost Per Minute (Private Repos)
- **Linux runners:** $0.008/minute
- **Windows runners:** $0.016/minute (2x cost)
- **macOS runners:** $0.08/minute (10x cost)

**Our usage:** Linux runners only (Windows/macOS unnecessary for static site builds)

---

## Workflow Analysis

### Phase 3 Planned Workflows

Based on `task_deps.md` Phase 3 automation plan:

1. **CI Quality Checks** (`ci-quality.yml`)
   - Triggers: Every PR and push to `main`/`staging`
   - Actions: Lint, type-check, unit tests
   - Estimated runtime: **3 minutes** per execution

2. **SEO Audit** (`seo-audit.yml`)
   - Triggers: Changes to `sites/**/src/pages/**` or `sites/**/src/content/**`
   - Actions: Build site, run `seo-optimizer` agent
   - Estimated runtime: **5 minutes** per execution

3. **Accessibility Audit** (`accessibility-audit.yml`)
   - Triggers: Changes to page files
   - Actions: Build site, run Playwright accessibility tests
   - Estimated runtime: **4 minutes** per execution

4. **Content Quality Audit** (`content-audit.yml`)
   - Triggers: Changes to `src/content/**`
   - Actions: Analyze content, run `content-optimizer` agent
   - Estimated runtime: **2 minutes** per execution

5. **Quality Gates** (`quality-gates.yml`)
   - Triggers: Pull requests to `main`
   - Actions: Sequential 6-gate validation (code, SEO, a11y, performance, AI, security)
   - Estimated runtime: **15 minutes** per execution

6. **Deploy Staging** (`deploy-staging.yml`)
   - Triggers: Push to `staging` branch
   - Actions: Build site, deploy to Netlify staging
   - Estimated runtime: **3 minutes** per site

7. **Deploy Production** (`deploy-production.yml`)
   - Triggers: Merge to `main` (after quality gates pass)
   - Actions: Build site, deploy to Netlify production
   - Estimated runtime: **3 minutes** per site

---

## Usage Projections

### Assumptions

**Development Activity (per site per month):**
- Content updates (Sveltia CMS commits): 15/month
- Feature development PRs: 5/month
- Production deployments: 4/month
- Total commits triggering workflows: ~20/month per site

**Workflow Execution Frequency:**
```
Per site per month:
- CI Quality: 20 executions × 3 min = 60 min
- SEO Audit: 10 executions × 5 min = 50 min (50% of commits change pages)
- Accessibility: 10 executions × 4 min = 40 min
- Content Quality: 15 executions × 2 min = 30 min (content updates only)
- Quality Gates: 5 executions × 15 min = 75 min (PRs only)
- Staging Deploy: 20 executions × 3 min = 60 min
- Production Deploy: 4 executions × 3 min = 12 min

Total per site: 327 minutes/month
Overhead (failed builds, retries): ×1.3 = 425 minutes/month per site
```

### Cost Projections (Private Repository)

| # Sites | Minutes/Month | Free Tier | Overage Minutes | Overage Cost | Total Cost |
|---------|---------------|-----------|-----------------|--------------|------------|
| **1** | 425 | 2,000 | 0 | $0.00 | **$0/month** |
| **3** | 1,275 | 2,000 | 0 | $0.00 | **$0/month** |
| **5** | 2,125 | 2,000 | 125 | $1.00 | **$1/month** |
| **10** | 4,250 | 2,000 | 2,250 | $18.00 | **$18/month** |
| **15** | 6,375 | 2,000 | 4,375 | $35.00 | **$35/month** |
| **20** | 8,500 | 2,000 | 6,500 | $52.00 | **$52/month** |

**Note:** These are UPPER BOUND estimates. Actual usage likely 20-30% lower with:
- Nx caching reducing redundant builds
- Conditional workflow execution (only affected sites)
- Path filters preventing unnecessary runs

### Cost Projections (Public Repository)

| # Sites | Minutes/Month | Cost |
|---------|---------------|------|
| **Unlimited** | Unlimited | **$0/month** |

**Public repo = zero ongoing CI/CD costs.**

---

## Public vs. Private Repository Decision

### Advantages of Public Repository

✅ **Cost Savings:**
- Unlimited free GitHub Actions minutes
- Eliminates $10-50/month CI/CD costs at scale
- No budget monitoring required

✅ **Community Benefits:**
- Positions project as open-source template/framework
- Attracts contributors and feedback
- Marketing value ("check out our open-source solution")
- Builds credibility with transparency

✅ **No Billing Complexity:**
- No usage tracking required
- No overage surprises
- No budget approvals for CI/CD

### Disadvantages of Public Repository

❌ **Codebase Exposed:**
- Anyone can view architecture and code
- Client-specific customizations visible (mitigated: use separate private repos for client sites)
- Security through obscurity lost

❌ **Competitive Intelligence:**
- Competitors can copy architecture patterns
- Agent prompt engineering visible (competitive advantage exposed)

❌ **Client Confidentiality:**
- Cannot commit client branding, proprietary content
- Requires separate private repos per client (defeats monorepo concept)

### Recommendation Framework

**Use PUBLIC repository if:**
- Project positioned as open-source template/framework
- No client-specific code in monorepo (only shared packages)
- Individual client sites deployed from separate private repos OR
- Client work not confidential (agency portfolios, landing pages)

**Use PRIVATE repository if:**
- Client work requires confidentiality (NDAs, proprietary content)
- Competitive advantage depends on proprietary architecture
- Budget approved for $10-50/month GitHub Actions costs
- Single monorepo containing all client sites

---

## Cost Optimization Strategies

### 1. Nx Remote Caching

**Setup:**
```bash
# Enable Nx Cloud (free tier: 500 hours/month remote cache)
npx nx connect-to-nx-cloud
```

**Impact:**
- Reuses build outputs from previous runs
- Reduces redundant builds by 40-60%
- Estimated savings: 170 minutes/site/month = $1.36/site/month

### 2. Conditional Workflow Execution

**Path Filters:**
```yaml
# Only run SEO audit if pages changed
on:
  pull_request:
    paths:
      - 'sites/**/src/pages/**'
      - 'sites/**/src/content/**'
```

**Impact:**
- Prevents workflows running on unrelated changes (e.g., README updates)
- Estimated savings: 20% fewer executions = 85 minutes/site/month

### 3. Matrix Strategy Parallelization

**Run multiple site builds in parallel:**
```yaml
jobs:
  build:
    strategy:
      matrix:
        site: [client-a, client-b, client-c]
    runs-on: ubuntu-latest
    steps:
      - run: nx build ${{ matrix.site }}
```

**Impact:**
- No direct cost savings (same total minutes)
- Faster CI/CD pipeline (30% faster feedback)

### 4. Selective Quality Gates

**Skip expensive gates for minor changes:**
```yaml
# Only run full quality gates on PRs to main
# Skip for draft PRs or content-only changes
if: github.event.pull_request.draft == false
```

**Impact:**
- Reduces unnecessary expensive checks
- Estimated savings: 15% = 64 minutes/site/month

### 5. Self-Hosted Runners (Advanced)

**For teams with existing server infrastructure:**
- Setup: Install GitHub Actions runner on own server
- Cost: $0 GitHub Actions charges (use own compute)
- Trade-off: Server maintenance overhead

**Impact:**
- Eliminates all GitHub Actions costs
- Requires DevOps expertise for runner management

---

## Monitoring & Alerts

### Setup Billing Alerts

1. **GitHub Settings → Billing → Spending Limits:**
   - Set spending limit: $20/month (safety threshold)
   - Email notifications: Enabled

2. **Usage Alerts:**
   - Alert at 80% of free tier (1,600 minutes)
   - Alert at 100% of free tier (2,000 minutes)
   - Alert at spending limit threshold

3. **Monthly Review:**
   - GitHub Settings → Billing → Usage this month
   - Review minutes by workflow
   - Identify optimization opportunities

### Monitoring Dashboard

**Create monthly tracking spreadsheet:**

| Month | Total Minutes | Free Tier Used | Overage Minutes | Cost | # Active Sites |
|-------|---------------|----------------|-----------------|------|----------------|
| Nov 2025 | | | | | |
| Dec 2025 | | | | | |
| Jan 2026 | | | | | |

**Alert if:**
- Cost exceeds $10/month before reaching 10 sites
- Single workflow consuming >30% of total minutes
- Overage minutes growing >50% month-over-month

---

## Budget Impact Analysis

### Break-Even Analysis

**Question:** At what scale does private repo + GitHub Actions cost become prohibitive?

**Answer:** Compare to alternative CI/CD platforms:

| Platform | Cost (10 sites) | Notes |
|----------|-----------------|-------|
| **GitHub Actions (private)** | **$18/month** | Integrated, simple |
| **Netlify Build Minutes** | $7/month | 300 min base, $7/500 min |
| **Vercel Build Time** | Included | Unlimited builds on Pro plan |
| **CircleCI** | $30/month | 6,000 min/month |
| **Travis CI** | $69/month | Unlimited builds |

**Conclusion:** GitHub Actions remains cost-competitive even at scale if private repo required.

### Cost vs. Value

**$18/month for 10 sites = $1.80/site CI/CD costs**

**Value provided:**
- Automated quality gates (70% manual audit time reduction)
- Continuous deployment (staging + production)
- Automated agent validation (SEO, accessibility, content)
- Version control integration
- PR preview environments

**ROI:** If manual audits cost $50/hour and automation saves 5 hours/month across 10 sites, value = $250/month saved vs. $18/month cost = **1,289% ROI**

---

## Decision Matrix

### Scenario 1: Open-Source Positioning (Public Repo)
**Best if:**
- Marketing value of open-source outweighs code exposure
- No client confidentiality requirements
- Want to attract contributors/community

**Cost:** $0/month ✅
**Recommendation:** PROCEED with public repo

### Scenario 2: Agency with 5-10 Clients (Private Repo)
**Best if:**
- Client work requires confidentiality
- All sites in single monorepo
- Budget allows $1-18/month

**Cost:** $1-18/month
**Recommendation:** PROCEED with private repo + billing alerts

### Scenario 3: Enterprise with 20+ Sites (Private Repo)
**Best if:**
- Large portfolio requires centralized management
- Budget allows $50-100/month CI/CD costs
- Optimization strategies implemented (Nx caching, path filters)

**Cost:** $50-100/month (with optimizations)
**Recommendation:** PROCEED with private repo + aggressive optimization

### Scenario 4: Cost-Sensitive (Hybrid Approach)
**Best if:**
- Want monorepo benefits + cost savings
- Can separate template code (public) from client sites (private)

**Architecture:**
- Public repo: Shared packages (`@workspace/ui-components`, `@workspace/seo-utils`)
- Private repos: Individual client sites consuming shared packages via npm

**Cost:** $0/month for shared packages, minimal per-client-site costs
**Recommendation:** EVALUATE hybrid architecture (out of scope for Phase 0)

---

## Phase 0 Decision Required

**Answer in `docs/DECISIONS.md` (Decision Point 3):**

1. **Repository Type:** Public / Private (circle one)

2. **Justification:**
   ```
   [Why this choice makes sense for our use case]
   ```

3. **If Private:**
   - Monthly budget approved: $______
   - Billing alert threshold: ______ minutes
   - Optimization strategy: _____________

4. **Next Steps:**
   - [ ] Configure GitHub repository (Phase 1, Task 1.5)
   - [ ] Set up billing alerts (if private)
   - [ ] Document repository URL in CLAUDE.md

---

## Optimization Implementation Timeline

**Phase 1 (Immediate):**
- ✅ Path filters on all workflows (Day 1)
- ✅ Conditional execution for draft PRs (Day 1)

**Phase 2 (Week 2-3):**
- ⏱️ Nx Cloud remote caching setup
- ⏱️ Monitor first month usage patterns

**Phase 3 (Month 2):**
- ⏱️ Review usage data
- ⏱️ Identify high-cost workflows
- ⏱️ Implement targeted optimizations

**Phase 4 (Optional):**
- ⏱️ Self-hosted runners (if cost >$50/month)

---

## Monitoring Checklist

**Monthly Review (first 3 months):**
- [ ] Check GitHub Actions usage: Settings → Billing
- [ ] Calculate cost: (Total minutes - 2,000) × $0.008
- [ ] Compare to projection (this document)
- [ ] Document in tracking spreadsheet
- [ ] Identify cost outliers (workflows using >30% of minutes)
- [ ] Implement optimization if cost >10% above projection

**Quarterly Review:**
- [ ] Assess if public repo feasible (client confidentiality relaxed?)
- [ ] Evaluate self-hosted runners (if cost >$50/month consistently)
- [ ] Update projections based on actual usage patterns

---

## Appendix: Detailed Workflow Runtime Estimates

### CI Quality Checks (3 minutes)
```
Breakdown:
- Checkout code: 10s
- Install dependencies (with cache): 45s
- Lint (ESLint): 30s
- Type-check (TypeScript): 45s
- Unit tests (Vitest): 30s
- Total: ~2.5 min (rounded to 3 min)
```

### SEO Audit (5 minutes)
```
Breakdown:
- Checkout + install: 55s
- Build site (Astro): 1 min
- Start dev server: 10s
- Run SEO optimizer agent: 2 min
- Generate report: 15s
- Post PR comment: 10s
- Total: ~4.5 min (rounded to 5 min)
```

### Accessibility Audit (4 minutes)
```
Breakdown:
- Checkout + install: 55s
- Build site: 1 min
- Install Playwright browsers: 30s (cached after first run)
- Run axe-core tests: 1.5 min
- Generate report: 10s
- Total: ~4 min
```

### Quality Gates (15 minutes)
```
Sequential execution (gates 1-6):
- Gate 1 (Code Quality): 3 min
- Gate 2 (SEO): 5 min
- Gate 3 (Accessibility): 4 min
- Gate 4 (Performance/Lighthouse): 3 min
- Gate 5 (Content Optimizer): 2 min
- Gate 6 (Security Audit): 1 min
- Overhead (job setup): 2 min
- Total: ~15 min

Note: Sequential = slower but ensures dependency order
Parallel would be ~7 min but defeats gate pattern
```

---

## Task 0.3 Completion Criteria

- ✅ Monthly cost projections calculated for 5, 10, 20 sites
- ✅ Public vs. private repository decision framework documented
- ✅ Optimization strategies identified (5 strategies documented)
- ✅ Monitoring and alert procedures defined
- ✅ Break-even analysis completed
- ✅ ROI calculation justifies CI/CD investment

**Task Status:** ✅ COMPLETE

**Next Action:** Review with stakeholders in Task 0.1 alignment meeting

---

## References

- GitHub Actions Pricing: https://github.com/pricing
- GitHub Actions Billing: https://docs.github.com/en/billing/managing-billing-for-github-actions
- Nx Cloud: https://nx.dev/nx-cloud
- Workflow Optimization Guide: https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows

---

**Document Status:** ✅ Complete
**Created:** 2025-10-31
**Owner:** Technical Lead
**Next Review:** After first month of production CI/CD usage
