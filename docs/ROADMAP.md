# Implementation Roadmap: Multi-Site Website Development System

**Project:** Multi-Site Astro + Sveltia CMS + Claude Code Agents Development Platform
**Created:** 2025-10-31
**Based On:** task_deps.md + CLAUDE.md v1.1
**Target Timeline:** 8-10 weeks (Phases 0-3 to MVP)
**Status:** ✅ Phase 0 Technical Deliverables Complete - Awaiting Stakeholder Sign-Off
**Owner:** Technical Lead

---

## Document Purpose

This roadmap defines:
1. **Clear "done" criteria** for each phase (prevents scope creep)
2. **Dependency gates** between phases (when to proceed vs. block)
3. **Quantified acceptance criteria** (measurable success thresholds)
4. **Risk mitigation** for known blockers
5. **Resource allocation** (who does what when)

**Single Source of Truth:** This roadmap translates `task_deps.md` technical tasks into stakeholder-friendly milestones with business value.

---

## Roadmap Overview

| Phase | Duration | Key Deliverable | Business Value |
|-------|----------|-----------------|----------------|
| **Phase 0** | 3-5 days | Decision points answered, Sveltia validated | Risk mitigation before infrastructure commitment |
| **Phase 1** | 2-3 weeks | Nx monorepo + 3 shared packages | Reusable foundation for all client sites |
| **Phase 2** | 2-3 weeks | Pilot client site deployed to production | First revenue-generating site, architecture validation |
| **Phase 3** | 2-3 weeks | 6 quality gates + 3 agents + CI/CD | 70% automation ROI, scalable deployment pipeline |
| **MVP Complete** | **8-10 weeks** | **Production-ready multi-site system** | **Launch 10+ sites with current team** |

---

## Phase 0: Pre-Implementation Validation

**Goal:** Validate risky assumptions and answer critical decision points before infrastructure build.

**Duration:** 3-5 days (contingent on stakeholder responsiveness)

**Status:** ✅ Technical deliverables complete; ⏱️ Awaiting stakeholder meeting

### Deliverables

#### ✅ Task 0.1: Stakeholder Alignment Framework
**Owner:** Technical Lead
**Time:** 2 hours
**Status:** ✅ Complete

**Output:**
- `docs/DECISIONS.md` - Structured template for 8 critical decision points
- Decision framework ready for stakeholder meeting

**Business Value:**
- Prevents misaligned expectations
- Identifies blockers before costly infrastructure work
- Ensures pilot client commitment before Phase 2

#### ✅ Task 0.2: Sveltia CMS Proof-of-Concept
**Owner:** Frontend Developer
**Time:** 8-12 hours (actual: completed)
**Status:** ✅ POC Built - Awaiting Human Testing

**Output:**
- Working Sveltia CMS + Astro POC at `sveltia-poc/`
- Comprehensive testing documentation (`docs/SVELTIA_CMS_VALIDATION.md`)
- Test checklist with GO/NO-GO criteria

**Business Value:**
- **CRITICAL PATH ITEM:** Validates or invalidates entire CMS strategy
- Prevents betting on pre-v1.0 software without validation
- CloudCannon contingency plan documented ($49/month cost impact)

**Acceptance Criteria (GO/NO-GO):**
- [ ] Non-technical user can edit content successfully
- [ ] Git workflow functions (commits attributed correctly)
- [ ] Zero critical bugs blocking content management
- [ ] Mobile editing functional (or limitation acceptable)

**Next Action Required:** Schedule human testing session

#### ✅ Task 0.3: GitHub Actions Cost Model
**Owner:** DevOps/Technical Lead
**Time:** 2 hours
**Status:** ✅ Complete

**Output:**
- `docs/GITHUB_ACTIONS_COST_MODEL.md` - Comprehensive cost analysis
- Projections for 5, 10, 20 sites
- Public vs. private repository decision framework
- Optimization strategies documented

**Business Value:**
- Prevents budget surprises ($0-52/month at scale)
- Justifies public repo recommendation ($0/month)
- Identifies break-even thresholds

**Key Findings:**
- **Public repo:** $0/month (unlimited free minutes)
- **Private repo:** $0-52/month depending on scale
- **Recommendation:** Public repo unless confidentiality required

#### ⏱️ Task 0.4: Detailed Roadmap (This Document)
**Owner:** Technical Lead
**Time:** 4 hours
**Status:** 🚧 In Progress

**Output:**
- `docs/ROADMAP.md` - This comprehensive phase-by-phase roadmap
- Measurable acceptance criteria per phase
- Pilot client scope definition
- Risk mitigation strategies

**Business Value:**
- Clear "done" definitions prevent endless iterations
- Stakeholder-friendly milestone tracking
- Resource allocation transparency

### Phase 0 Exit Gate

**Before proceeding to Phase 1, validate:**

- [ ] **All 8 Decision Points answered** (Task 0.1) - Documented in `docs/DECISIONS.md`
- [ ] **Sveltia CMS validated (GO decision)** OR CloudCannon selected as alternative
- [ ] **GitHub Actions cost model approved** - Budget signed off
- [ ] **Roadmap reviewed and approved** by stakeholders
- [ ] **Pilot client committed** with timeline or content readiness confirmed

**Gate Owner:** Technical Lead + Project Manager

**If Gate Fails:**
- Document blocker in `DECISIONS.md`
- Escalate to stakeholders for resolution
- DO NOT proceed to Phase 1 until gate criteria met

**Estimated Completion:** Week 0-1 (end of first week)

---

## Phase 1: Foundation Infrastructure

**Goal:** Build Nx monorepo with shared packages and validate architecture before pilot site.

**Duration:** 2-3 weeks (~80 hours)

**Dependency:** Phase 0 Exit Gate passed

### Scope & Deliverables

#### Task 1.1: Initialize Nx Monorepo (6-8 hours)
**What Gets Built:**
- Nx workspace with pnpm package manager
- TypeScript path aliases for shared packages
- ESLint + Prettier configuration
- Base `.gitignore` and workspace structure

**Acceptance Criteria:**
- ✅ `pnpm install` succeeds without errors
- ✅ `nx graph` displays dependency graph
- ✅ Linting runs successfully: `nx run-many --target=lint --all`

#### Task 1.2: Shared UI Components Package (16-20 hours)
**What Gets Built:**
- `packages/ui-components/` with 10-15 Astro components:
  - Layout: `BaseLayout`, `Header`, `Footer`
  - Content: `Hero`, `Card`, `Section`
  - UI: `Button`, `Navigation`, `Image`
  - Forms: `Input`, `Textarea`, `FormGroup`
- TypeScript interfaces with strict typing
- Accessibility (ARIA) attributes built-in
- Component catalog README

**Acceptance Criteria:**
- ✅ All components import successfully from `@workspace/ui-components`
- ✅ Components render without errors in test page
- ✅ Responsive across mobile/tablet/desktop
- ✅ Zero console errors or accessibility violations

**Business Value:**
- Single source of truth for design system
- Update once, propagate to all client sites
- Consistent quality across portfolio

#### Task 1.3: Shared SEO Utilities Package (12-16 hours)
**What Gets Built:**
- `packages/seo-utils/` with 4 core utilities:
  - `schema-generator.ts` - JSON-LD structured data
  - `meta-tags.ts` - SEO meta tag generation
  - `sitemap-builder.ts` - XML sitemap generation
  - `robots-txt.ts` - AI-crawler-friendly robots.txt
- Unit tests (Vitest) with >80% coverage
- API documentation

**Acceptance Criteria:**
- ✅ All utilities importable from `@workspace/seo-utils`
- ✅ Unit tests pass: `nx test seo-utils`
- ✅ Generated schema validates at schema.org validator
- ✅ TypeScript strict mode, no type errors

**Business Value:**
- Automated SEO compliance (100% schema markup coverage)
- AI crawler optimization (GPTBot, ClaudeBot allowed)
- Eliminates manual meta tag management

#### Task 1.4: Shared CMS Configuration Package (8-10 hours)
**What Gets Built:**
- `packages/cms-config/` with:
  - Base Sveltia CMS configuration template
  - 3 reusable content schemas (blog, page, navigation)
  - Extension documentation for client customization

**Acceptance Criteria:**
- ✅ Base config validates (no YAML errors)
- ✅ Documentation shows client customization process
- ✅ Config templates reduce setup time (vs. manual config)

**Business Value:**
- Rapid client onboarding (10 min vs. 2 hours for CMS config)
- Consistent content structure across sites
- Reduces CMS configuration errors

#### Task 1.5: GitHub Repository Structure (4 hours)
**What Gets Built:**
- GitHub repository initialized
- Branch protection rules (require PRs for `main`)
- CODEOWNERS file
- Pull request template
- Staging branch created

**Acceptance Criteria:**
- ✅ Repository accessible to team
- ✅ Direct commits to `main` blocked
- ✅ Initial codebase committed

**Business Value:**
- Version control and collaboration foundation
- Code review process enforced
- Production stability (no accidental deployments)

#### Task 1.6: Root Documentation (6-8 hours)
**What Gets Built:**
- `README.md` - Project overview
- `docs/QUICK_START.md` - 5-minute developer onboarding
- docs/ directory with Phase 0 deliverables organized

**Acceptance Criteria:**
- ✅ New developer can clone and run `pnpm install` following QUICK_START
- ✅ All documentation links resolve
- ✅ README includes build status badge (once CI/CD added)

**Business Value:**
- Onboard new developers in <5 minutes (vs. days)
- Reduces knowledge silos
- Enables team scaling

### Phase 1 Exit Gate

**Before proceeding to Phase 2, validate:**

- ✅ Nx monorepo operational (`pnpm install` and `nx graph` work)
- ✅ 10-15 shared UI components built and importable
- ✅ SEO utilities functional with passing unit tests (>80% coverage)
- ✅ CMS config templates documented and validated
- ✅ GitHub repository configured with branch protection
- ✅ Documentation enables 5-minute developer onboarding
- ✅ `nx run-many --target=lint --all` passes with zero errors
- ✅ No critical bugs or blockers identified

**Quantified Success Metrics:**
- **Build Time:** Workspace builds in <30 seconds
- **Test Coverage:** Shared packages >80% coverage
- **Component Count:** 10-15 components documented
- **Documentation:** New developer onboards in <5 minutes (timed test)

**Gate Owner:** Technical Lead

**Estimated Completion:** Week 3-4 (end of fourth week)

---

## Phase 2: Pilot Client Site

**Goal:** Build first production-ready client site validating full stack from components to CMS to deployment.

**Duration:** 2-3 weeks (~60 hours)

**Dependency:** Phase 1 Exit Gate passed

### Pilot Client Scope Definition

**To Be Completed in Task 0.1 Stakeholder Meeting:**

**Pilot Client Name:** ___________

**Site Type:**
- [ ] 5-page brochure site (homepage, about, services, contact, blog)
- [ ] 10-15 page content site (additional service pages, case studies)
- [ ] Custom scope: ___________

**Key Features Required:**
- [ ] Homepage with hero section
- [ ] About page
- [ ] Services/products page
- [ ] Blog with 3-5 posts
- [ ] Contact information
- [ ] Navigation menu
- [ ] Footer with links

**Content Readiness:**
- Brand guidelines: Available by _______
- Logo/assets: Available by _______
- Page content: ______% complete
- Images: Available by _______

**Launch Deadline:** _______ (if applicable)

### Deliverables

#### Task 2.1: Generate Pilot Client Site Scaffold (4 hours)
**What Gets Built:**
- `sites/pilot-client/` directory with Astro + Tailwind
- Brand-specific Tailwind config (colors, typography)
- Content Collections schema
- BRAND_GUIDELINES.md template

**Acceptance Criteria:**
- ✅ `nx dev pilot-client` starts development server
- ✅ Can import shared components
- ✅ Tailwind CSS applies client brand colors

#### Task 2.2: Build Pilot Site Pages (20-24 hours)
**What Gets Built:**
- 5 production-quality pages using shared components
- SEO meta tags and schema markup (all pages)
- Semantic HTML structure
- Responsive design (mobile-first)

**Acceptance Criteria:**
- ✅ All pages render without errors
- ✅ Schema markup validates at schema.org
- ✅ **Lighthouse scores >90** (Performance, Accessibility, SEO)
- ✅ Mobile responsive (tested at 375px, 768px, 1440px)
- ✅ Zero console errors

**Quantified Quality Thresholds:**
- **Lighthouse Performance:** >90/100
- **Lighthouse Accessibility:** >95/100
- **Lighthouse SEO:** >95/100
- **Core Web Vitals:** LCP <2.5s, FID <100ms, CLS <0.1

#### Task 2.3: Install and Configure Sveltia CMS (6-8 hours)
**What Gets Built:**
- Sveltia CMS admin panel at `/admin`
- GitHub OAuth authentication
- Content collections editable (pages, blog)
- Media upload functional

**Acceptance Criteria:**
- ✅ Non-technical user can log in to `/admin`
- ✅ Can edit existing page content
- ✅ Can create new blog post
- ✅ Can upload images
- ✅ Save creates Git commit with clear message
- ✅ Changes visible on frontend after save

#### Task 2.4: Add Static Assets and Content (8-10 hours)
**What Gets Built:**
- Optimized images (WebP format, responsive sizes)
- 5 pages with real content
- 3-5 blog posts
- robots.txt (AI crawlers allowed)
- XML sitemap (dynamically generated)

**Acceptance Criteria:**
- ✅ All images optimized (<200KB per image)
- ✅ Total page weight <2MB
- ✅ robots.txt allows AI crawlers (GPTBot, ClaudeBot)
- ✅ Sitemap includes all pages
- ✅ Content passes grammar/spell check

#### Task 2.5: Deploy Pilot Site to Staging (4-6 hours)
**What Gets Built:**
- Netlify deployment configured
- Custom domain (if applicable)
- HTTPS enabled
- Deploy previews for pull requests

**Acceptance Criteria:**
- ✅ Site accessible at staging URL
- ✅ All pages load correctly (<3s LCP)
- ✅ Sveltia CMS login works on staging
- ✅ SSL certificate valid
- ✅ **Lighthouse audit on staging: Performance >90, SEO >95, Accessibility >95**

#### Task 2.6: Pilot Client Feedback & Iteration (8-12 hours)
**What Gets Built:**
- Client onboarding session conducted
- Feedback documented in GitHub Issues
- Must Have changes implemented
- Client sign-off obtained

**Acceptance Criteria:**
- ✅ Client approves staging site for production
- ✅ All critical feedback addressed
- ✅ Client demonstrates ability to edit content via CMS independently
- ✅ Client confirms site meets brand guidelines

**Quantified Success:**
- **Client Satisfaction:** Formal approval documented (email or agreement)
- **CMS Independence:** Client successfully edits content without developer help

#### Task 2.7: Production Deployment and Launch (4 hours)
**What Gets Built:**
- Production deployment to live domain
- DNS configuration (if custom domain)
- Google Search Console sitemap submission
- Post-launch monitoring

**Acceptance Criteria:**
- ✅ Production site accessible at custom domain
- ✅ All pages load successfully (<3s LCP)
- ✅ Sveltia CMS functional on production
- ✅ Client notified of launch
- ✅ No critical errors in first 24 hours

**Quantified Success:**
- **Core Web Vitals:** LCP <2.5s, FID <100ms, CLS <0.1 (measured in Google Search Console)
- **Uptime:** >99% in first week

### Phase 2 Exit Gate

**Before proceeding to Phase 3, validate:**

- ✅ Pilot client site deployed to production and stable (>99% uptime)
- ✅ Client using Sveltia CMS independently for content updates
- ✅ **Core Web Vitals "Good" scores** (Google Search Console)
- ✅ **SEO validation:** Schema markup valid, sitemap indexed, robots.txt correct
- ✅ **Accessibility:** WCAG 2.1 AA compliance (manual spot check + axe-core)
- ✅ No critical bugs reported in first week post-launch
- ✅ Lessons learned documented (what worked, what needs improvement)

**Quantified Success Metrics:**
- **Time to Launch:** Achieved <7 days from scaffold to production (target)
- **Quality Scores:** All Lighthouse scores >90
- **Client Independence:** Client makes 90% of content updates without developer
- **Performance:** LCP <2.5s on 3G mobile connection

**Gate Owner:** Technical Lead + Project Manager

**Estimated Completion:** Week 6-7 (end of seventh week)

---

## Phase 3: Automation Foundation

**Goal:** Build automated quality gates and CI/CD pipeline to enable scalable multi-client deployments.

**Duration:** 2-3 weeks (~60 hours)

**Dependency:** Phase 2 Exit Gate passed

### Scope & Deliverables

#### Task 3.1: GitHub Actions CI/CD Foundation (6-8 hours)
**What Gets Built:**
- `.github/workflows/ci-quality.yml` - Linting, type-check, tests
- Nx caching for faster builds
- Status checks required for PR merge

**Acceptance Criteria:**
- ✅ GitHub Actions workflow runs on every PR
- ✅ Test PR shows green checkmarks
- ✅ Workflow completes in <5 minutes
- ✅ Failed checks block PR merge

#### Task 3.2: SEO Optimizer Agent (16-20 hours)
**What Gets Built:**
- `.claude/agents/website/seo-optimizer.md` - Agent definition
- SEO checklist skill library
- GitHub Actions workflow for automated audits
- PR commenting with SEO scores

**Acceptance Criteria:**
- ✅ Agent identifies SEO issues accurately
- ✅ JSON report format valid
- ✅ GitHub Actions workflow runs on content changes
- ✅ PR comments include SEO score and recommendations
- ✅ Agent execution time <3 minutes

**Quantified Quality Threshold:**
- **SEO Score:** >90/100 required to pass gate

#### Task 3.3: Accessibility Auditor Agent (16-20 hours)
**What Gets Built:**
- `.claude/agents/website/accessibility-auditor.md`
- Playwright test suite with axe-core
- WCAG 2.1 guidelines skill library
- GitHub Actions workflow

**Acceptance Criteria:**
- ✅ Playwright tests identify violations
- ✅ Agent reports violations by severity
- ✅ Workflow runs on page changes
- ✅ Zero critical violations on pilot site

**Quantified Quality Threshold:**
- **Critical violations:** 0 (blocks merge)
- **Serious violations:** <5 (warning)

#### Task 3.4: Content Optimizer Agent (12-16 hours)
**What Gets Built:**
- `.claude/agents/website/content-optimizer.md`
- Readability scoring utilities
- AI readability skill library
- GitHub Actions workflow

**Acceptance Criteria:**
- ✅ Agent scores content readability
- ✅ Identifies keyword stuffing
- ✅ Provides actionable recommendations
- ✅ Workflow runs on content changes
- ✅ Pilot site content achieves >80/100 score

**Quantified Quality Threshold:**
- **Content Quality Score:** >80/100 required to pass gate

#### Task 3.5: Integrate Quality Gate System (8-10 hours)
**What Gets Built:**
- `.github/workflows/quality-gates.yml` - 6 sequential gates
- Pass/fail thresholds documented
- Retry logic (max 3 attempts)
- Branch protection updated

**6 Quality Gates:**
1. **Code Quality:** Lint, type-check, tests pass
2. **SEO Compliance:** Score >90/100
3. **Accessibility:** Zero critical violations
4. **Performance:** Lighthouse Performance >90, Accessibility >95, SEO >95
5. **AI Readiness:** Content quality >80/100
6. **Security:** Zero high/critical vulnerabilities

**Acceptance Criteria:**
- ✅ All 6 gates run sequentially
- ✅ Failed gate blocks PR merge
- ✅ GitHub issue created on gate failure
- ✅ Quality gate workflow completes in <15 minutes

**Quantified Success:**
- **Gate Pass Rate:** >90% of PRs pass all gates without retry

#### Task 3.6: Automated Deployment Pipeline (6-8 hours)
**What Gets Built:**
- `.github/workflows/deploy-staging.yml` - Auto-deploy to staging
- `.github/workflows/deploy-production.yml` - Production deployment
- GitHub Secrets configured
- Deploy previews enabled

**Acceptance Criteria:**
- ✅ Push to `staging` triggers automatic deployment
- ✅ Merge to `main` triggers production deployment ONLY if gates pass
- ✅ PR preview URLs accessible within 3 minutes
- ✅ Failed quality gate blocks production deployment

#### Task 3.7: Client Site Scaffolding Script (12-16 hours)
**What Gets Built:**
- `scripts/create-client-site.mjs` - Interactive scaffolding
- `docs/CLIENT_ONBOARDING.md` - Onboarding guide
- npm script: `pnpm create-client`

**Acceptance Criteria:**
- ✅ Script creates functional client site from template
- ✅ Generated site builds without errors
- ✅ Brand colors applied correctly
- ✅ Domain configured
- ✅ Script execution time <2 minutes
- ✅ Non-technical PM can scaffold site using documentation

**Quantified Success:**
- **Time to Scaffold:** <5 minutes from command to working site
- **Error Rate:** <10% scaffolding failures

#### Task 3.8: Document Agent Usage and Quality Gates (6-8 hours)
**What Gets Built:**
- `docs/AGENT_GUIDE.md` - Agent usage documentation
- `docs/QUALITY_GATES.md` - Gate system explanation
- `docs/TROUBLESHOOTING.md` - Common issues and solutions

**Acceptance Criteria:**
- ✅ Documentation enables independent agent invocation
- ✅ Quality gate criteria clearly explained
- ✅ Troubleshooting guide resolves 80% of common issues

### Phase 3 Exit Gate

**Before declaring MVP complete, validate:**

- ✅ All 6 quality gates operational and passing for pilot site
- ✅ GitHub Actions workflows configured (staging + production)
- ✅ 3 Tier 1 agents functional (seo-optimizer, accessibility-auditor, content-optimizer)
- ✅ Client scaffolding script tested (creates working site in <5 minutes)
- ✅ Comprehensive documentation complete
- ✅ GitHub Actions usage within budget (monitor for 1 week)
- ✅ Pilot client editing content via CMS without developer assistance
- ✅ Zero critical bugs in production pilot site

**Quantified Success Metrics:**
- **Automation ROI:** 70% reduction in manual audit time (baseline: 8 hrs/site/month → target: <2.5 hrs/site/month)
- **Time to Launch:** Second client site launched in <1 week (validate scaffolding script)
- **Quality Consistency:** All sites pass 6 quality gates (100% pass rate)
- **GitHub Actions Cost:** Within projected budget (<$20/month for 10 sites if private repo)

**Gate Owner:** Technical Lead + DevOps Lead

**Estimated Completion:** Week 9-10 (end of tenth week)

---

## MVP Success Validation

### Technical Success Criteria

- ✅ **Infrastructure:** Nx monorepo operational, 3 shared packages, GitHub repository configured
- ✅ **Client Sites:** 1 pilot site deployed and stable (>99% uptime)
- ✅ **Automation:** 6 quality gates, 3 agents, CI/CD pipeline operational
- ✅ **Documentation:** QUICK_START, AGENT_GUIDE, QUALITY_GATES, CLIENT_ONBOARDING complete
- ✅ **Scaffolding:** Client site creation script functional (<5 min to scaffold)

### Business Success Criteria

- ✅ **Time to Launch:** <1 week for new client sites (validated with second site)
- ✅ **Automation ROI:** 70% reduction in manual audit time (tracked over 1 month)
- ✅ **Client Independence:** 90% self-service content updates via CMS (Git commit analysis)
- ✅ **Quality Standards:** All sites meet Core Web Vitals "Good" scores
- ✅ **Cost Efficiency:** GitHub Actions costs within budget, zero CMS licensing costs

### Success Metric Tracking

**Measure against CLAUDE.md Section 5 success metrics:**

| Metric | Target | Measurement Method | Frequency |
|--------|--------|-------------------|-----------|
| **Time to Launch** | <1 week | GitHub commit timestamps (scaffold → production) | Per client site |
| **Automation ROI** | 70% reduction | Time tracking (manual audits: 8 hrs → <2.5 hrs/site/month) | Monthly |
| **Client Independence** | 90% self-service | Git commit analysis (client vs. developer commits) | Monthly |
| **Portfolio Scalability** | 10+ sites | Active client count with stable team size | Quarterly |
| **AI Crawler Indexing** | 90%+ crawled | Server log analysis (GPTBot, ClaudeBot user agents) | Monthly |
| **Core Web Vitals** | All "Good" | Google Search Console / Lighthouse CI | Per deployment |
| **Accessibility** | WCAG 2.1 AA | Automated auditor + manual spot checks | Per deployment |
| **SEO Health** | 100% schema | SEO optimizer agent validation | Per deployment |
| **Build Performance** | <60s | GitHub Actions workflow duration logs | Per build |
| **Security Posture** | Zero high/critical | npm audit, security agent reports | Weekly |

---

## Risk Management & Mitigation

### Critical Risks

**Risk 1: Sveltia CMS Instability**
- **Status:** Phase 0 POC validates viability
- **Mitigation:** CloudCannon contingency ($49/month) if GO decision fails
- **Trigger:** 2+ critical bugs OR 3+ client complaints/month
- **Decision Authority:** Technical Lead

**Risk 2: GitHub Actions Cost Overruns**
- **Status:** Phase 0 cost model completed
- **Mitigation:** Public repo (unlimited free), billing alerts, optimization strategies
- **Trigger:** Cost >$20/month for 10 sites
- **Decision Authority:** Technical Lead + Finance

**Risk 3: Pilot Client Delays**
- **Status:** Task 0.1 confirms readiness
- **Mitigation:** Use internal site as pilot if external client delays >2 weeks
- **Trigger:** Content/branding not ready by Phase 2 start
- **Decision Authority:** Project Manager

**Risk 4: Agent Development Complexity**
- **Status:** Tasks 3.2-3.4 timeboxed (16-20 hrs each)
- **Mitigation:** Fall back to standard tools (Lighthouse CLI, axe-cli) if agents too complex
- **Trigger:** Agent development exceeds timebox by 50%
- **Decision Authority:** Technical Lead

**Risk 5: Team Capacity Insufficient**
- **Status:** Task 0.1 confirms team size
- **Mitigation:** Timeline extension (8 weeks → 10-12 weeks), or hire contractor for specialized tasks
- **Trigger:** Phase 1 or 2 exceeds estimate by >25%
- **Decision Authority:** Project Manager

---

## Timeline Projection

**Assuming Phase 0 completes Week 1:**

| Week | Phase | Key Milestone | Go/No-Go Gate |
|------|-------|---------------|---------------|
| **Week 1** | Phase 0 | Decision points answered, Sveltia validated | ✅ Exit Gate: All decisions documented |
| **Weeks 2-3** | Phase 1 | Nx monorepo + shared packages | ✅ Exit Gate: 10-15 components, SEO utils, docs |
| **Week 4** | Phase 1 | GitHub repo setup, documentation | |
| **Weeks 5-6** | Phase 2 | Pilot site pages built | |
| **Week 7** | Phase 2 | CMS integration, staging deployment | ✅ Exit Gate: Client site production-ready |
| **Weeks 8-9** | Phase 3 | Quality gates + agents | |
| **Week 10** | Phase 3 | CI/CD pipeline, scaffolding script | ✅ Exit Gate: MVP complete, automation validated |

**Best Case:** 8 weeks (2-person team, no blockers)
**Realistic Case:** 9 weeks (solo dev or minor delays)
**Worst Case:** 10 weeks (solo dev with learning curve)

---

## Phase 4+: Advanced Features (Optional)

**Not in MVP scope. Only proceed after Phase 3 validation.**

**Trigger Criteria:**
- 2+ client sites operational and stable
- All Phase 3 success metrics validated
- Client demand for advanced features
- Team capacity available

**Planned Features:**
- Advanced orchestration (multi-agent coordination)
- Research agents (keyword research, competitive analysis)
- Specialized analysis (AI readiness auditor, build optimizer)
- Enhanced documentation and workflows

**Estimated Duration:** 4-5 weeks

---

## Resource Allocation

### Team Roles & Responsibilities

**Technical Lead:**
- Phase 0: Decision documentation, cost modeling, roadmap
- Phase 1: Repository setup, documentation, architecture validation
- Phase 3: Agent design, quality gate orchestration

**Frontend Developer:**
- Phase 0: Sveltia CMS POC
- Phase 1: UI components library
- Phase 2: Pilot client site pages, CMS integration

**Full-Stack Developer:**
- Phase 1: SEO utilities package, build configuration
- Phase 2: Content setup, deployment
- Phase 3: Agent development (assist)

**DevOps Engineer:**
- Phase 1: Monorepo tooling, GitHub setup
- Phase 3: CI/CD workflows, deployment pipelines

**Claude Code Specialist:**
- Phase 3: Agent development (seo-optimizer, accessibility-auditor, content-optimizer)

**Project Manager:**
- Phase 0: Stakeholder meeting facilitation
- Phase 2: Client feedback coordination, launch management
- All phases: Timeline tracking, risk escalation

---

## Next Steps (Immediate Actions)

### 1. Complete Phase 0 Exit Gate
- [ ] Schedule stakeholder alignment meeting
- [ ] Complete DECISIONS.md (8 decision points)
- [ ] Conduct Sveltia CMS POC human testing
- [ ] Get budget approval for GitHub Actions (if private repo)
- [ ] Obtain stakeholder sign-off on roadmap

### 2. Phase 1 Kickoff (After Phase 0 Gate Passes)
- [ ] Assign Task 1.1 owner (Nx monorepo initialization)
- [ ] Schedule Phase 1 standup cadence (daily or 3x/week)
- [ ] Set up project tracking (GitHub Projects or equivalent)

### 3. Documentation Maintenance
- [ ] Update this roadmap after each phase completion
- [ ] Document lessons learned in phase retrospectives
- [ ] Adjust timeline estimates based on actual completion times

---

## Document History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 0.1 | 2025-10-31 | Initial roadmap created from task_deps.md | Workflow Orchestrator |
| | | | |

---

**Document Status:** ✅ Complete - Ready for Stakeholder Review
**Current Phase:** Phase 0 (Technical deliverables complete, awaiting stakeholder meeting)
**Next Milestone:** Phase 0 Exit Gate validation
**Owner:** Technical Lead
**Last Updated:** 2025-10-31
