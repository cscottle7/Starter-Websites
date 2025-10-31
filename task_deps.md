# Task Dependency Plan: Multi-Site Website Development System

**Project:** Multi-Site Astro + Sveltia CMS Development Platform
**Plan Created:** 2025-10-31
**Based on:** CLAUDE.md v1.1 + Squad Investigation Report
**Target Timeline:** 8 weeks (Phases 1-3), 12 weeks total (through Phase 4)

---

## Overview & Execution Strategy

This plan implements the validated architecture from CLAUDE.md, transitioning from **Phase 0 (Strategic Planning)** → **Phase 3 (Automation Foundation)**. Each phase has clear acceptance criteria and dependency gates.

**Critical Success Factors:**
- Validate Sveltia CMS viability before committing to full monorepo (Phase 0 → Phase 1 gate)
- Build pilot client site as proof-of-concept before scaling infrastructure (Phase 2 validates Phase 1)
- Automate quality gates incrementally (each gate proven before adding next)

**Resource Assumptions:**
- 1-2 developers (can scale certain tasks in parallel with 2-person team)
- GitHub account with Actions enabled (track usage for cost monitoring)
- Domain for pilot client site testing

---

## Phase 0: Pre-Implementation Validation (Week 0, ~16 hours)

**Goal:** Answer critical decision points and validate risky assumptions before infrastructure commitment.

### Task 0.1: Stakeholder Alignment Meeting
**Dependencies:** None
**Estimated Time:** 2 hours
**Owner:** Technical Lead + Project Manager

**Deliverables:**
- [x] Document answers to 8 Squad Report Decision Points:
  - Current team size and skill composition
  - Pilot client identification (name, scope, timeline, content readiness)
  - GitHub Actions budget/billing plan (public vs. private repo)
  - Sveltia CMS migration triggers (when to switch to CloudCannon)
  - Definition of "routine content update" vs. developer-required work
  - AI-optimized success criteria (technical accessibility vs. guaranteed indexing)
  - Phase 1-3 timeline confirmation (6-8 weeks realistic?)
  - WordPress migration path (if applicable to target market)

**Acceptance Criteria:**
- [x] All 8 decision points documented in `docs/DECISIONS.md` (template created, awaiting stakeholder completion)
- [ ] Pilot client committed with signed agreement or internal approval
- [ ] GitHub billing alert configured (if private repo)

---

### Task 0.2: Sveltia CMS Proof-of-Concept
**Dependencies:** Task 0.1 (need pilot client content examples)
**Estimated Time:** 8-12 hours
**Owner:** Frontend Developer

**Purpose:** Validate Sveltia CMS viability before betting entire architecture on pre-v1.0 software.

**Implementation Steps:**
1. Create standalone Astro project (outside main repo): `npm create astro@latest sveltia-poc`
2. Install Sveltia CMS: Follow [Sveltia CMS Quick Start](https://github.com/sveltia/sveltia-cms)
3. Configure basic content collections (pages, blog posts)
4. Deploy to Netlify with GitHub OAuth
5. Test workflows:
   - Content editing via `/admin` interface
   - Image upload and management
   - Git commit workflow (edit → save → commit → preview)
   - Rollback to previous version
   - Mobile editing experience (Sveltia claims mobile-friendly)

**Deliverables:**
- [ ] Working Sveltia CMS demo deployed to Netlify
- [ ] `docs/SVELTIA_CMS_VALIDATION.md` with findings:
  - ✅ Works as expected (proceed) OR
  - ⚠️ Minor issues found (document workarounds) OR
  - 🚨 Critical blockers (recommend CloudCannon migration)
- [ ] Screenshot/video walkthrough of client editing experience

**Acceptance Criteria (GO/NO-GO Gate):**
- ✅ Non-technical user can edit content and publish successfully
- ✅ Git workflow functions correctly (commits attributed to editor)
- ✅ Zero critical bugs blocking content management
- ✅ Mobile editing functional (or documented limitation acceptable)

**If NO-GO:** Pivot to CloudCannon ($49/month), update CLAUDE.md budget section, proceed with Phase 1 using CloudCannon config.

---

### Task 0.3: GitHub Actions Cost Modeling
**Dependencies:** Task 0.1 (know public vs. private repo)
**Estimated Time:** 2 hours
**Owner:** DevOps/Technical Lead

**Purpose:** Prevent budget surprises from CI/CD automation.

**Calculations Needed:**
```
Estimated Monthly GitHub Actions Usage:
- 10 client sites × 5 min/build × 20 deploys/month = 1,000 minutes
- 6 quality gates × 2 min/gate × 100 commits/month = 1,200 minutes
- Overhead (failed builds, retries) × 1.3 multiplier = 2,860 minutes total

If Private Repo:
- Free tier: 2,000 minutes/month
- Overage: 860 minutes × $0.008/min = $6.88/month
- At 20 sites: ~$13/month

If Public Repo:
- Unlimited free minutes ✅
```

**Deliverables:**
- [ ] `docs/GITHUB_ACTIONS_COST_MODEL.md` with:
  - Build time estimates per site type (5-page brochure vs. 50-page content site)
  - Quality gate execution time per agent
  - Monthly projection table (5 sites, 10 sites, 20 sites)
  - Alert threshold recommendation (e.g., "notify at 1,500 min/month")
  - Optimization strategies (cache reuse, conditional builds, matrix strategy)

**Acceptance Criteria:**
- ✅ Monthly cost projection documented for 10-site target
- ✅ Cost aligns with "near-zero ongoing costs" claim OR budget adjusted in CLAUDE.md
- ✅ GitHub Actions usage alert configured (GitHub Settings → Billing → Email notifications)

---

### Task 0.4: Create Detailed Roadmap with Acceptance Criteria
**Dependencies:** Tasks 0.1-0.3 (informed by validation results)
**Estimated Time:** 4 hours
**Owner:** Technical Lead

**Purpose:** Define clear "done" criteria for each phase to prevent scope creep.

**Deliverables:**
- [ ] `docs/ROADMAP.md` with sections:
  - **Phase 0:** Pre-implementation validation (this phase)
  - **Phase 1:** Foundation Infrastructure (2-3 weeks)
  - **Phase 2:** Pilot Client Site (2-3 weeks)
  - **Phase 3:** Automation Foundation (2-3 weeks)
  - **Phase 4:** Advanced Features (4-5 weeks)

Each phase must include:
- Clear deliverables list
- Quantified acceptance criteria (e.g., "5 core components built and tested")
- Dependency gates (what must be done before starting next phase)
- Estimated effort (hours/days)
- Risk mitigation for known blockers

**Acceptance Criteria:**
- ✅ All phases have measurable "done" criteria
- ✅ Pilot client scope documented in Phase 2 (page count, features, content readiness)
- ✅ Phase 1-3 timeline matches stakeholder-approved schedule from Task 0.1

---

## Phase 0 Exit Gate

**Before proceeding to Phase 1, validate:**
- ✅ All Decision Points answered and documented
- ✅ Sveltia CMS validated (GO decision made) OR CloudCannon selected as alternative
- ✅ GitHub Actions cost model approved
- ✅ Detailed roadmap reviewed and approved by stakeholders
- ✅ Pilot client committed with content/branding assets ready (or timeline for readiness)

**Estimated Phase 0 Duration:** 3-5 days (if stakeholders responsive and Sveltia POC succeeds)

---

## Phase 1: Foundation Infrastructure (Weeks 1-3, ~80 hours)

**Goal:** Build Nx monorepo with shared packages and validate architecture before pilot site.

### Task 1.1: Initialize Nx Monorepo
**Dependencies:** Phase 0 Exit Gate
**Estimated Time:** 6-8 hours
**Owner:** Full-Stack Developer (DevOps experience helpful)

**Implementation Steps:**
1. Create Nx workspace:
   ```bash
   npx create-nx-workspace@latest starter-template \
     --preset=npm \
     --packageManager=pnpm
   cd starter-template
   ```

2. Configure pnpm workspaces:
   - Create `pnpm-workspace.yaml`:
     ```yaml
     packages:
       - 'packages/*'
       - 'sites/*'
     ```

3. Install Nx Astro plugin:
   ```bash
   pnpm add -D @nxext/astro
   ```

4. Create base TypeScript configuration (`tsconfig.base.json`):
   ```json
   {
     "compilerOptions": {
       "strict": true,
       "moduleResolution": "bundler",
       "paths": {
         "@workspace/ui-components": ["packages/ui-components/src"],
         "@workspace/seo-utils": ["packages/seo-utils/src"],
         "@workspace/cms-config": ["packages/cms-config/src"]
       }
     }
   }
   ```

5. Configure ESLint and Prettier:
   - `.eslintrc.js` (root): Base rules for all packages
   - `.prettierrc`: Code formatting standards from CLAUDE.md Section 11

**Deliverables:**
- [ ] Working Nx workspace with pnpm package manager
- [ ] `nx.json` configured with caching strategies
- [ ] TypeScript path aliases configured for shared packages
- [ ] ESLint + Prettier operational (`nx run-many --target=lint --all` passes)
- [ ] `.gitignore` configured (node_modules, .nx, dist, .env)

**Acceptance Criteria:**
- ✅ `pnpm install` succeeds without errors
- ✅ `nx graph` displays empty dependency graph (ready for packages)
- ✅ Linting runs successfully across workspace

---

### Task 1.2: Create Shared UI Components Package
**Dependencies:** Task 1.1
**Estimated Time:** 16-20 hours
**Owner:** Frontend Developer

**Purpose:** Build 10-15 reusable Astro components as foundation for all client sites.

**Implementation Steps:**
1. Generate package structure:
   ```bash
   nx generate @nxext/astro:library ui-components \
     --directory=packages/ui-components \
     --importPath=@workspace/ui-components
   ```

2. Build core components (following CLAUDE.md Section 11 conventions):
   - **Layout Components:**
     - `BaseLayout.astro` - HTML structure, meta tags, global styles
     - `Header.astro` - Site header with navigation
     - `Footer.astro` - Site footer with links
   - **Content Components:**
     - `Hero.astro` - Hero section (headline, subheadline, CTA)
     - `Card.astro` - Content card (image, title, description, link)
     - `Section.astro` - Content section wrapper
   - **UI Elements:**
     - `Button.astro` - Styled button with variants (primary, secondary, outline)
     - `Navigation.astro` - Responsive navigation menu
     - `Image.astro` - Optimized image wrapper (uses Astro Image integration)
   - **Form Elements:**
     - `Input.astro` - Form input with label and validation
     - `Textarea.astro` - Textarea input
     - `FormGroup.astro` - Form field wrapper

3. Each component must include:
   - TypeScript interface for props (strict typing)
   - Tailwind CSS utility classes (design tokens as CSS variables)
   - Accessibility attributes (ARIA labels, semantic HTML)
   - JSDoc comments for prop descriptions
   - Example usage in component file header

4. Create `packages/ui-components/src/index.ts` barrel export:
   ```typescript
   export { default as BaseLayout } from './components/BaseLayout.astro';
   export { default as Hero } from './components/Hero.astro';
   // ... etc
   ```

**Deliverables:**
- [ ] 10-15 Astro components following CLAUDE.md conventions
- [ ] `packages/ui-components/README.md` with component catalog and usage examples
- [ ] Each component tested in Astro dev environment (visual QA)
- [ ] TypeScript definitions exported correctly

**Acceptance Criteria:**
- ✅ All components import successfully: `import { Hero } from '@workspace/ui-components'`
- ✅ Components render without errors in test Astro page
- ✅ No console errors or accessibility violations (manual browser check)
- ✅ Components responsive across mobile/tablet/desktop breakpoints

---

### Task 1.3: Create Shared SEO Utilities Package
**Dependencies:** Task 1.1
**Estimated Time:** 12-16 hours
**Owner:** Full-Stack Developer

**Purpose:** Centralize SEO utilities for schema markup, meta tags, sitemaps, robots.txt.

**Implementation Steps:**
1. Generate package:
   ```bash
   nx generate @nxext/astro:library seo-utils \
     --directory=packages/seo-utils \
     --importPath=@workspace/seo-utils
   ```

2. Install dependencies:
   ```bash
   cd packages/seo-utils
   pnpm add schema-dts
   ```

3. Build utilities:
   - **`schema-generator.ts`** - JSON-LD schema markup helpers:
     ```typescript
     import type { Thing, WebSite, Organization, Article } from 'schema-dts';

     export function generateWebsiteSchema(data: { name, url, description }): WebSite { ... }
     export function generateOrganizationSchema(data: { name, logo, address }): Organization { ... }
     export function generateArticleSchema(data: { headline, author, datePublished }): Article { ... }
     ```

   - **`meta-tags.ts`** - Meta tag generation:
     ```typescript
     export interface MetaTagsConfig {
       title: string;
       description: string;
       ogImage?: string;
       canonicalUrl: string;
       noindex?: boolean;
     }

     export function generateMetaTags(config: MetaTagsConfig): MetaTag[] { ... }
     ```

   - **`sitemap-builder.ts`** - XML sitemap generation:
     ```typescript
     export interface SitemapEntry {
       url: string;
       lastmod: Date;
       changefreq: 'daily' | 'weekly' | 'monthly';
       priority: number;
     }

     export function generateSitemap(entries: SitemapEntry[]): string { ... }
     ```

   - **`robots-txt.ts`** - robots.txt generation (AI crawler friendly):
     ```typescript
     export interface RobotsTxtConfig {
       allowAll?: boolean;
       disallow?: string[];
       allowAICrawlers?: boolean; // GPTBot, ClaudeBot, etc.
       sitemapUrl: string;
     }

     export function generateRobotsTxt(config: RobotsTxtConfig): string { ... }
     ```

4. Add unit tests (Vitest):
   - Test schema markup generates valid JSON-LD
   - Test meta tag generation with various configs
   - Test robots.txt includes AI crawler user agents

**Deliverables:**
- [ ] 4 core utility modules with TypeScript types
- [ ] Unit tests with >80% coverage (`nx test seo-utils`)
- [ ] `packages/seo-utils/README.md` with API documentation and examples
- [ ] Integration examples for Astro pages

**Acceptance Criteria:**
- ✅ All utilities importable: `import { generateMetaTags } from '@workspace/seo-utils'`
- ✅ Unit tests pass (`nx test seo-utils`)
- ✅ Generated schema validates at https://validator.schema.org/
- ✅ TypeScript strict mode enabled, no type errors

---

### Task 1.4: Create Shared CMS Configuration Package
**Dependencies:** Task 0.2 (Sveltia POC completed)
**Estimated Time:** 8-10 hours
**Owner:** Frontend Developer

**Purpose:** Reusable Sveltia CMS configuration templates for rapid client onboarding.

**Implementation Steps:**
1. Generate package:
   ```bash
   mkdir -p packages/cms-config
   cd packages/cms-config
   pnpm init
   ```

2. Create base Sveltia CMS config template (`sveltia-base-config.yml`):
   ```yaml
   # Base configuration to be extended by client sites
   backend:
     name: github
     repo: your-org/starter-template
     branch: main
     base_url: https://api.netlify.com
     auth_endpoint: auth

   publish_mode: editorial_workflow
   media_folder: "src/assets/images"
   public_folder: "/images"

   # Reusable content schemas
   collections:
     - name: "pages"
       label: "Pages"
       folder: "src/content/pages"
       create: true
       fields:
         - { label: "Title", name: "title", widget: "string" }
         - { label: "SEO Description", name: "description", widget: "text" }
         - { label: "Body", name: "body", widget: "markdown" }
   ```

3. Create content schema templates:
   - `content-schemas/blog-post.yml` - Blog post schema
   - `content-schemas/page.yml` - Generic page schema
   - `content-schemas/navigation.yml` - Navigation menu schema

4. Add documentation:
   - `packages/cms-config/README.md` explaining how to extend base config per client
   - Examples of client-specific customizations (brand colors, custom fields)

**Deliverables:**
- [ ] Base Sveltia CMS configuration template
- [ ] 3 reusable content schema templates
- [ ] Documentation for extending configs per client site

**Acceptance Criteria:**
- ✅ Base config validated against Sveltia CMS schema (no YAML errors)
- ✅ Config templates reduce client setup time (documented time savings)
- ✅ Examples show how to customize for client branding

---

### Task 1.5: Setup GitHub Repository Structure
**Dependencies:** Tasks 1.1-1.4 (all packages created)
**Estimated Time:** 4 hours
**Owner:** DevOps/Technical Lead

**Purpose:** Initialize Git repository with proper structure and protections.

**Implementation Steps:**
1. Initialize Git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "chore: initial Nx monorepo setup with shared packages"
   ```

2. Create GitHub repository:
   - Public repo (recommended for free unlimited Actions) OR
   - Private repo (if client work requires confidentiality)

3. Configure branch protection rules (GitHub Settings → Branches):
   - Protect `main` branch:
     - Require pull request before merging
     - Require status checks to pass (will add in Phase 3)
     - Require linear history (no merge commits)
   - Create `staging` branch for preview deployments

4. Create `.github/` directory structure:
   ```
   .github/
   ├── CODEOWNERS          # Define code review ownership
   ├── workflows/          # GitHub Actions (added in Phase 3)
   └── PULL_REQUEST_TEMPLATE.md
   ```

5. Add CODEOWNERS file:
   ```
   # Default owner for everything
   * @technical-lead-username

   # Shared packages require extra scrutiny
   /packages/ @technical-lead-username @senior-dev-username
   ```

**Deliverables:**
- [ ] GitHub repository created and pushed
- [ ] Branch protection configured for `main`
- [ ] CODEOWNERS file defining review requirements
- [ ] Pull request template created

**Acceptance Criteria:**
- ✅ Repository accessible to team members
- ✅ Direct commits to `main` blocked (requires PR)
- ✅ Initial codebase committed with clear history

---

### Task 1.6: Create Root Documentation (README, QUICK_START)
**Dependencies:** Tasks 1.1-1.5 (infrastructure complete)
**Estimated Time:** 6-8 hours
**Owner:** Technical Lead

**Purpose:** Enable new developers to contribute within 5 minutes (per CLAUDE.md goal).

**Implementation Steps:**
1. Create root `README.md`:
   - Project overview (what this system does)
   - Technology stack summary
   - Quick start link
   - Links to detailed docs (`docs/` directory)
   - Contribution guidelines

2. Create `docs/QUICK_START.md`:
   ```markdown
   # Quick Start Guide

   Get up and running in 5 minutes.

   ## Prerequisites
   - Node.js 18+ and pnpm 8+
   - GitHub account

   ## Setup
   ```bash
   # Clone and install
   git clone <repo-url>
   cd starter-template
   pnpm install

   # Verify setup
   nx run-many --target=lint --all

   # Start development (once client sites exist)
   pnpm dev --filter=client-name
   ```

   ## Next Steps
   - Read [CLAUDE.md](../CLAUDE.md) for architecture overview
   - See [ROADMAP.md](./ROADMAP.md) for current phase
   - Review [Component Catalog](../packages/ui-components/README.md)
   ```

3. Create `docs/` directory structure:
   ```
   docs/
   ├── QUICK_START.md         # 5-minute onboarding
   ├── ROADMAP.md             # Phase tracking (from Task 0.4)
   ├── DECISIONS.md           # Decision points (from Task 0.1)
   ├── SVELTIA_CMS_VALIDATION.md  # POC results (from Task 0.2)
   ├── GITHUB_ACTIONS_COST_MODEL.md  # Cost projections (from Task 0.3)
   └── (Phase 2+): CLIENT_ONBOARDING.md, CMS_SETUP.md, etc.
   ```

**Deliverables:**
- [ ] Root README with clear project description
- [ ] QUICK_START.md with 5-minute setup instructions
- [ ] docs/ directory initialized with Phase 0-1 documents

**Acceptance Criteria:**
- ✅ New developer can clone repo and run `pnpm install` successfully following QUICK_START
- ✅ All documentation links resolve correctly
- ✅ README includes badge for build status (once CI/CD added in Phase 3)

---

## Phase 1 Exit Gate

**Before proceeding to Phase 2, validate:**
- ✅ Nx monorepo operational (`pnpm install` and `nx graph` work)
- ✅ 10-15 shared UI components built and importable
- ✅ SEO utilities functional with passing unit tests
- ✅ CMS config templates documented
- ✅ GitHub repository configured with branch protection
- ✅ Documentation enables 5-minute developer onboarding
- ✅ `nx run-many --target=lint --all` passes with zero errors

**Estimated Phase 1 Duration:** 2-3 weeks (80 hours ÷ 40 hours/week = 2 weeks for solo dev; 1.5 weeks for pair)

---

## Phase 2: Pilot Client Site (Weeks 4-6, ~60 hours)

**Goal:** Build first production-ready client site validating full stack from shared components to CMS to deployment.

### Task 2.1: Generate Pilot Client Site Scaffold
**Dependencies:** Phase 1 Exit Gate
**Estimated Time:** 4 hours
**Owner:** Full-Stack Developer

**Implementation Steps:**
1. Create client site using Nx:
   ```bash
   nx generate @nxext/astro:application pilot-client \
     --directory=sites/pilot-client
   ```

2. Configure `sites/pilot-client/astro.config.mjs`:
   ```javascript
   import { defineConfig } from 'astro/config';
   import tailwind from '@astrojs/tailwind';

   export default defineConfig({
     integrations: [tailwind()],
     site: 'https://pilot-client.com', // Real client domain
     output: 'static', // SSG mode
   });
   ```

3. Configure Tailwind CSS with pilot client branding:
   - `sites/pilot-client/tailwind.config.cjs`:
     ```javascript
     module.exports = {
       theme: {
         extend: {
           colors: {
             primary: '#1a202c',   // Client brand primary
             secondary: '#2d3748', // Client brand secondary
           },
         },
       },
     };
     ```

4. Create `sites/pilot-client/BRAND_GUIDELINES.md`:
   - Document client brand colors, typography, logo usage
   - Design system tokens
   - Content voice/tone guidelines

5. Initialize Astro Content Collections:
   - Create `sites/pilot-client/src/content/config.ts`:
     ```typescript
     import { defineCollection, z } from 'astro:content';

     const pagesCollection = defineCollection({
       schema: z.object({
         title: z.string(),
         description: z.string(),
         publishDate: z.date(),
       }),
     });

     export const collections = {
       pages: pagesCollection,
       blog: blogCollection,
     };
     ```

**Deliverables:**
- [ ] Pilot client site scaffolded in `sites/pilot-client/`
- [ ] Astro + Tailwind CSS configured with client branding
- [ ] Content Collections schema defined
- [ ] BRAND_GUIDELINES.md created

**Acceptance Criteria:**
- ✅ `nx dev pilot-client` starts development server successfully
- ✅ Can import shared components: `import { Hero } from '@workspace/ui-components'`
- ✅ Tailwind CSS applies client brand colors

---

### Task 2.2: Build Pilot Site Pages (5 Core Pages)
**Dependencies:** Task 2.1
**Estimated Time:** 20-24 hours
**Owner:** Frontend Developer

**Purpose:** Create 5 production-quality pages using shared components.

**Pages to Build:**

1. **Homepage (`src/pages/index.astro`):**
   - Hero section with headline, subheadline, CTA
   - Services/features overview (3-4 cards)
   - Testimonials section
   - CTA section

2. **About Page (`src/pages/about.astro`):**
   - Company story
   - Team member grid (if applicable)
   - Mission/values section

3. **Services Page (`src/pages/services.astro`):**
   - Service cards with descriptions
   - Pricing table (if applicable)
   - FAQ section

4. **Blog Index (`src/pages/blog/index.astro`):**
   - List of blog posts (from Content Collections)
   - Pagination (if >10 posts)
   - Categories/tags filter

5. **Blog Post Template (`src/pages/blog/[slug].astro`):**
   - Dynamic routing for blog posts
   - Author info, publish date
   - Related posts section

**Each page must include:**
- SEO meta tags (using `@workspace/seo-utils`)
- Schema.org JSON-LD markup (Organization, WebSite, Article)
- Semantic HTML structure (nav, main, article, aside, footer)
- Responsive design (mobile-first Tailwind CSS)
- Accessibility attributes (ARIA labels, alt text)

**Deliverables:**
- [ ] 5 pages built using shared components from `@workspace/ui-components`
- [ ] All pages use SEO utilities for meta tags and schema markup
- [ ] Content stored in Astro Content Collections (not hardcoded)
- [ ] Pages accessible at:
  - http://localhost:4321/
  - http://localhost:4321/about
  - http://localhost:4321/services
  - http://localhost:4321/blog
  - http://localhost:4321/blog/[sample-post]

**Acceptance Criteria:**
- ✅ All pages render without errors in development
- ✅ Schema markup validates at https://validator.schema.org/
- ✅ Lighthouse audit scores >90 for Performance, Accessibility, SEO (run `npx lighthouse http://localhost:4321/`)
- ✅ Mobile responsive (test at 375px, 768px, 1440px viewport widths)
- ✅ No console errors or accessibility violations (manual browser check)

---

### Task 2.3: Install and Configure Sveltia CMS
**Dependencies:** Task 2.2 (pages exist to edit)
**Estimated Time:** 6-8 hours
**Owner:** Frontend Developer

**Implementation Steps:**
1. Create Sveltia CMS admin panel:
   ```bash
   mkdir -p sites/pilot-client/public/admin
   ```

2. Create `sites/pilot-client/public/admin/index.html`:
   ```html
   <!doctype html>
   <html>
     <head>
       <meta charset="utf-8" />
       <title>Content Manager</title>
     </head>
     <body>
       <script src="https://unpkg.com/@sveltia/cms@latest/dist/sveltia-cms.js" type="module"></script>
     </body>
   </html>
   ```

3. Create `sites/pilot-client/public/admin/config.yml`:
   - Extend base config from `@workspace/cms-config`
   - Configure collections for pages and blog posts
   - Set up GitHub backend with OAuth
   - Configure media folder and preview templates

4. Set up GitHub OAuth (Netlify Auth):
   - Deploy to Netlify (or use Decap CMS OAuth backend)
   - Configure OAuth app in GitHub Settings
   - Update `config.yml` with OAuth credentials (use environment variables)

5. Test CMS workflow:
   - Access http://localhost:4321/admin
   - Authenticate with GitHub
   - Edit homepage hero text
   - Save and commit
   - Verify Git commit created in repository
   - Verify change reflected on frontend

**Deliverables:**
- [ ] Sveltia CMS accessible at `/admin` route
- [ ] GitHub OAuth authentication working
- [ ] Content collections editable (pages, blog posts)
- [ ] Media upload functional (images)
- [ ] Git commits attributed to CMS user

**Acceptance Criteria:**
- ✅ Non-technical user can log in to `/admin`
- ✅ Can edit existing page content and see preview
- ✅ Can create new blog post with markdown editor
- ✅ Can upload images and insert into content
- ✅ Save creates Git commit with clear message (e.g., "Update homepage hero section")
- ✅ Changes visible on frontend after CMS save

---

### Task 2.4: Add Static Assets and Content
**Dependencies:** Task 2.3 (CMS configured)
**Estimated Time:** 8-10 hours
**Owner:** Frontend Developer + Content Writer

**Implementation Steps:**
1. Optimize and add client assets:
   - Logo (SVG preferred, PNG fallback)
   - Brand images (hero backgrounds, about page photos)
   - Team member headshots (if applicable)
   - Service/product images

2. Use Astro Image optimization:
   ```astro
   ---
   import { Image } from 'astro:assets';
   import heroImage from '../assets/hero-background.jpg';
   ---
   <Image src={heroImage} alt="..." width={1920} height={1080} format="webp" />
   ```

3. Create initial content in Content Collections:
   - 5 pages (homepage, about, services, contact, blog index)
   - 3-5 sample blog posts
   - Navigation menu configuration
   - Footer links configuration

4. Add `public/robots.txt` (using `@workspace/seo-utils`):
   ```typescript
   import { generateRobotsTxt } from '@workspace/seo-utils';

   const robotsTxt = generateRobotsTxt({
     allowAll: true,
     allowAICrawlers: true, // GPTBot, ClaudeBot allowed
     sitemapUrl: 'https://pilot-client.com/sitemap.xml',
   });
   ```

5. Generate XML sitemap (integrate `@workspace/seo-utils`):
   - Create `src/pages/sitemap.xml.ts` dynamic route
   - Fetch all pages from Content Collections
   - Generate sitemap using utility function

**Deliverables:**
- [ ] All client assets optimized (WebP format for images, <200KB per image)
- [ ] Initial content created for all 5 pages
- [ ] 3-5 sample blog posts published
- [ ] robots.txt configured (AI crawlers allowed)
- [ ] XML sitemap generated dynamically

**Acceptance Criteria:**
- ✅ All images optimized (WebP format, responsive sizes)
- ✅ Total page weight <2MB (check with Lighthouse)
- ✅ robots.txt accessible at `/robots.txt` and allows AI crawlers
- ✅ Sitemap accessible at `/sitemap.xml` and includes all pages
- ✅ Content passes grammar/spell check (use Grammarly or similar)

---

### Task 2.5: Deploy Pilot Site to Staging Environment
**Dependencies:** Task 2.4 (content and assets ready)
**Estimated Time:** 4-6 hours
**Owner:** DevOps/Full-Stack Developer

**Purpose:** Validate deployment process and get feedback from pilot client.

**Implementation Steps:**
1. Choose deployment platform (recommend Netlify for MVP):
   - Sign up for Netlify account (free tier sufficient)
   - Connect GitHub repository
   - Configure build settings:
     - Build command: `nx build pilot-client`
     - Publish directory: `dist/sites/pilot-client`
     - Node version: 18+

2. Configure environment variables (Netlify dashboard):
   - `SITE_URL`: https://pilot-client.netlify.app (or custom domain)
   - `CMS_BACKEND_REPO`: your-org/starter-template
   - Any API keys (analytics, forms, etc.)

3. Set up custom domain (if client has one):
   - Add domain in Netlify DNS settings
   - Update Astro config with production domain
   - Enable HTTPS (automatic with Netlify)

4. Configure deploy previews:
   - Enable branch previews in Netlify (PR deployments)
   - Configure Sveltia CMS preview URL in `config.yml`

5. Test deployment:
   - Push to `staging` branch
   - Verify site deploys successfully
   - Test all pages load correctly
   - Test Sveltia CMS admin panel at `https://pilot-client.netlify.app/admin`

**Deliverables:**
- [ ] Pilot site deployed to staging URL
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled
- [ ] Sveltia CMS accessible on staging
- [ ] Deploy previews configured for pull requests

**Acceptance Criteria:**
- ✅ Site accessible at staging URL with <3 second load time
- ✅ All pages render correctly on staging (no broken links/images)
- ✅ Sveltia CMS login works on staging
- ✅ SSL certificate valid (green padlock in browser)
- ✅ Lighthouse audit on staging: Performance >90, SEO >95, Accessibility >95

---

### Task 2.6: Pilot Client Feedback & Iteration
**Dependencies:** Task 2.5 (staging deployed)
**Estimated Time:** 8-12 hours (budget 2-3 rounds of feedback)
**Owner:** Frontend Developer + Project Manager

**Purpose:** Validate client UX and refine before production deployment.

**Process:**
1. Client onboarding session (1 hour):
   - Walkthrough of staging site
   - Demonstration of Sveltia CMS editing workflow
   - Set expectations for feedback timeline (48-72 hours)

2. Collect feedback:
   - Content changes (text, images)
   - Design tweaks (colors, spacing, typography)
   - Functional requests (contact forms, analytics)

3. Prioritize feedback (MoSCoW method):
   - **Must Have:** Critical for launch (fix before production)
   - **Should Have:** Important but not blocking (next sprint)
   - **Could Have:** Nice-to-haves (Phase 4+)
   - **Won't Have:** Out of scope (document for future)

4. Implement "Must Have" changes:
   - Create feature branch for each change
   - Make updates
   - Deploy to staging for client review
   - Iterate until approval

**Deliverables:**
- [ ] Client feedback documented in GitHub Issues
- [ ] Must Have changes implemented and deployed
- [ ] Client sign-off on staging site (email approval or formal acceptance)
- [ ] Should Have / Could Have items moved to backlog

**Acceptance Criteria:**
- ✅ Client approves staging site for production deployment
- ✅ All critical feedback addressed
- ✅ Client demonstrates ability to edit content via CMS independently
- ✅ Client confirms site meets brand guidelines

---

### Task 2.7: Production Deployment and Launch
**Dependencies:** Task 2.6 (client approval)
**Estimated Time:** 4 hours
**Owner:** DevOps/Technical Lead

**Implementation Steps:**
1. Pre-flight checks:
   - Run full Lighthouse audit (all pages >90 scores)
   - Validate schema markup (Google Rich Results Test)
   - Check robots.txt allows indexing (unless client requests delay)
   - Verify sitemap includes all pages
   - Test forms (if applicable)
   - Check analytics tracking (if configured)

2. Production deployment:
   - Merge `staging` → `main` branch via pull request
   - Netlify auto-deploys to production domain
   - Verify production URL loads correctly

3. DNS configuration (if custom domain):
   - Update DNS records to point to Netlify
   - Wait for DNS propagation (15 min - 24 hours)
   - Verify production domain resolves correctly

4. Post-launch validation:
   - Test all pages on production domain
   - Verify Sveltia CMS admin panel accessible
   - Submit sitemap to Google Search Console (if client approved SEO)
   - Monitor for errors (Netlify logs, browser console)

5. Client handoff:
   - Send launch announcement email with production URL
   - Provide CMS login instructions
   - Schedule follow-up check-in (1 week post-launch)

**Deliverables:**
- [ ] Pilot site live on production domain
- [ ] All pre-flight checks passed
- [ ] Client notified of launch
- [ ] Post-launch monitoring configured (Netlify alerts)

**Acceptance Criteria:**
- ✅ Production site accessible at custom domain (or Netlify subdomain)
- ✅ All pages load successfully with <3 second LCP
- ✅ Sveltia CMS functional on production
- ✅ Client confirms receipt of launch notification
- ✅ No critical errors in Netlify logs (first 24 hours)

---

## Phase 2 Exit Gate

**Before proceeding to Phase 3, validate:**
- ✅ Pilot client site deployed to production and stable
- ✅ Client using Sveltia CMS independently for content updates
- ✅ Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1 (Google Search Console or Lighthouse)
- ✅ SEO validation: Schema markup valid, sitemap indexed, robots.txt correct
- ✅ Accessibility: WCAG 2.1 AA compliance (manual spot check + axe-core)
- ✅ No critical bugs reported in first week post-launch
- ✅ Lessons learned documented (what worked, what needs improvement for next client)

**Estimated Phase 2 Duration:** 2-3 weeks (60 hours ÷ 40 hours/week = 1.5 weeks solo dev; faster with parallel content work)

---

## Phase 3: Automation Foundation (Weeks 7-9, ~60 hours)

**Goal:** Build automated quality gates and CI/CD pipeline to enable scalable multi-client deployments.

### Task 3.1: Setup GitHub Actions CI/CD Foundation
**Dependencies:** Phase 2 Exit Gate
**Estimated Time:** 6-8 hours
**Owner:** DevOps Engineer

**Purpose:** Automate linting, type-checking, and testing on every commit.

**Implementation Steps:**
1. Create `.github/workflows/ci-quality.yml`:
   ```yaml
   name: CI Quality Checks

   on:
     pull_request:
       branches: [main, staging]
     push:
       branches: [main, staging]

   jobs:
     quality:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: pnpm/action-setup@v2
           with:
             version: 8
         - uses: actions/setup-node@v4
           with:
             node-version: 18
             cache: 'pnpm'

         - name: Install dependencies
           run: pnpm install --frozen-lockfile

         - name: Lint all packages
           run: pnpm nx run-many --target=lint --all --parallel

         - name: Type check
           run: pnpm nx run-many --target=type-check --all --parallel

         - name: Run tests
           run: pnpm nx run-many --target=test --all --parallel
   ```

2. Add type-check and test scripts to package.json files:
   - Root: `"type-check": "tsc --noEmit"`
   - Packages: Add Vitest configuration for unit tests

3. Configure Nx caching for GitHub Actions:
   - Enable remote caching (optional but recommended for multi-site builds)
   - Set up Nx Cloud (free tier) or custom cache storage

4. Test workflow:
   - Create test PR
   - Verify all checks run and pass
   - Confirm status checks appear on PR

**Deliverables:**
- [ ] CI workflow file committed to `.github/workflows/`
- [ ] Workflow runs on every PR and push
- [ ] All quality checks passing (lint, type-check, tests)

**Acceptance Criteria:**
- ✅ GitHub Actions workflow visible in repository Actions tab
- ✅ Test PR shows green checkmarks for all quality checks
- ✅ Workflow completes in <5 minutes for pilot client site
- ✅ Failed checks block PR merge (branch protection working)

---

### Task 3.2: Create SEO Optimizer Agent
**Dependencies:** Task 3.1 (CI foundation)
**Estimated Time:** 16-20 hours
**Owner:** Claude Code Specialist + Full-Stack Developer

**Purpose:** Automate SEO auditing for schema markup, meta tags, heading hierarchy, and AI crawler readiness.

**Implementation Steps:**
1. Create agent definition `.claude/agents/website/seo-optimizer.md`:
   ```markdown
   # SEO Optimizer Agent

   ## Name
   seo-optimizer

   ## Description
   Audits website pages for SEO compliance: validates schema markup, checks meta tags, analyzes heading hierarchy, and ensures AI crawler accessibility.

   ## System Prompt
   You are an expert SEO auditor specializing in technical SEO for static websites. Your role is to:

   1. **Schema Markup Validation:**
      - Verify JSON-LD structured data on all pages
      - Check Organization, WebSite, Article, BreadcrumbList schemas
      - Validate against schema.org specifications
      - Test with Google Rich Results API

   2. **Meta Tags Analysis:**
      - Ensure title, description present and optimal length
      - Check Open Graph tags (og:title, og:description, og:image)
      - Verify canonical URLs
      - Check robots meta tags (noindex, nofollow)

   3. **Content Structure:**
      - Validate single H1 per page
      - Check heading hierarchy (H1 → H2 → H3, no skipping)
      - Verify alt text on all images
      - Check internal linking structure

   4. **AI Crawler Readiness:**
      - Confirm server-side rendering (no client-side JS for content)
      - Check robots.txt allows GPTBot, ClaudeBot, Google-Extended
      - Validate sitemap.xml includes all pages
      - Check page load performance (Core Web Vitals)

   ## Output Format
   Return JSON report:
   ```json
   {
     "score": 95,
     "passed": true,
     "checks": [
       {
         "category": "Schema Markup",
         "status": "pass",
         "issues": []
       },
       {
         "category": "Meta Tags",
         "status": "warning",
         "issues": ["Homepage description exceeds 160 characters"]
       }
     ],
     "recommendations": [
       "Shorten homepage meta description to 155 characters",
       "Add og:image to About page"
     ]
   }
   ```

   ## Tools
   - Read: Access HTML files, Astro components, content collections
   - Bash: Run schema validators, lighthouse CLI
   - WebFetch: Google Rich Results Test API

   ## Model
   claude-sonnet-4-5
   ```

2. Create supporting skill library `.claude/skills/website/seo-checklist/SKILL.md`:
   - Comprehensive SEO audit checklist
   - Schema.org examples for common types
   - Meta tag best practices
   - Core Web Vitals thresholds

3. Build GitHub Actions integration `.github/workflows/seo-audit.yml`:
   ```yaml
   name: SEO Audit

   on:
     pull_request:
       paths:
         - 'sites/**/src/pages/**'
         - 'sites/**/src/content/**'

   jobs:
     seo-audit:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4

         - name: Build site for audit
           run: |
             pnpm install
             pnpm nx build pilot-client

         - name: Run SEO Optimizer Agent
           env:
             ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
           run: |
             # Invoke Claude Code agent via SDK or API
             claude-code --agent=seo-optimizer \
               --project=sites/pilot-client \
               --output=seo-report.json

         - name: Comment on PR with results
           uses: actions/github-script@v7
           with:
             script: |
               const report = require('./seo-report.json');
               const comment = `## SEO Audit Results\n\nScore: ${report.score}/100\n\n${report.recommendations.join('\n- ')}`;
               github.rest.issues.createComment({
                 issue_number: context.issue.number,
                 owner: context.repo.owner,
                 repo: context.repo.repo,
                 body: comment
               });
   ```

4. Test agent manually:
   - Invoke agent on pilot client site
   - Verify it identifies issues (test with intentionally broken page)
   - Validate JSON output format
   - Confirm recommendations actionable

**Deliverables:**
- [ ] `seo-optimizer.md` agent definition
- [ ] SEO checklist skill library
- [ ] GitHub Actions workflow for automated audits
- [ ] Agent tested on pilot site with documented results

**Acceptance Criteria:**
- ✅ Agent identifies SEO issues accurately (test with intentional errors)
- ✅ JSON report format valid and parseable
- ✅ GitHub Actions workflow runs on content changes
- ✅ PR comments include SEO score and recommendations
- ✅ Agent execution time <3 minutes

---

### Task 3.3: Create Accessibility Auditor Agent
**Dependencies:** Task 3.2 (pattern established)
**Estimated Time:** 16-20 hours
**Owner:** Claude Code Specialist + Frontend Developer

**Purpose:** Automate WCAG 2.1 AA compliance checking using axe-core and Playwright.

**Implementation Steps:**
1. Create agent definition `.claude/agents/website/accessibility-auditor.md`:
   - System prompt for WCAG 2.1 AA compliance
   - Automated checks: axe-core via Playwright
   - Manual check guidelines: keyboard navigation, screen reader testing
   - Output: JSON report with violations by severity

2. Install testing dependencies:
   ```bash
   pnpm add -D @playwright/test @axe-core/playwright
   ```

3. Create Playwright test suite `sites/pilot-client/tests/a11y.spec.ts`:
   ```typescript
   import { test, expect } from '@playwright/test';
   import AxeBuilder from '@axe-core/playwright';

   test.describe('Accessibility Tests', () => {
     test('Homepage should not have accessibility violations', async ({ page }) => {
       await page.goto('http://localhost:4321/');
       const results = await new AxeBuilder({ page })
         .withTags(['wcag2a', 'wcag2aa'])
         .analyze();
       expect(results.violations).toEqual([]);
     });

     // Repeat for other pages
   });
   ```

4. Create GitHub Actions workflow `.github/workflows/accessibility-audit.yml`:
   - Build site
   - Start dev server in background
   - Run Playwright accessibility tests
   - Generate report (JSON + HTML)
   - Comment on PR with violations

5. Create supporting skill `.claude/skills/website/accessibility-wcag/SKILL.md`:
   - WCAG 2.1 AA guidelines summary
   - Common violations and fixes
   - Testing tools and methods
   - ARIA best practices

**Deliverables:**
- [ ] `accessibility-auditor.md` agent definition
- [ ] Playwright test suite with axe-core
- [ ] GitHub Actions workflow for a11y audits
- [ ] WCAG skill library

**Acceptance Criteria:**
- ✅ Playwright tests identify violations (test with intentional errors)
- ✅ Agent reports violations by severity (critical, serious, moderate, minor)
- ✅ GitHub Actions workflow runs on page changes
- ✅ PR comments include violation count and recommendations
- ✅ Zero critical violations on pilot client site

---

### Task 3.4: Create Content Optimizer Agent
**Dependencies:** Task 3.3
**Estimated Time:** 12-16 hours
**Owner:** Claude Code Specialist

**Purpose:** Analyze content quality, readability, keyword usage, and AI-friendliness.

**Implementation Steps:**
1. Create agent definition `.claude/agents/website/content-optimizer.md`:
   - System prompt for content quality analysis
   - Readability scoring (Flesch-Kincaid, Gunning Fog Index)
   - Keyword density analysis (avoid keyword stuffing)
   - AI readability checks:
     - Clear topic sentences
     - Logical structure
     - Proper use of headings for scannability
   - Output: JSON report with content scores and improvement suggestions

2. Build content analysis utilities:
   - Markdown parser to extract content
   - Readability scoring algorithms
   - Keyword extraction and frequency analysis

3. Create GitHub Actions workflow `.github/workflows/content-audit.yml`:
   - Trigger on changes to `src/content/**`
   - Analyze updated content files
   - Generate content quality report
   - Comment on PR with recommendations

4. Create supporting skill `.claude/skills/website/ai-readability/SKILL.md`:
   - Content structure best practices for AI understanding
   - Examples of AI-friendly vs. AI-opaque content
   - Schema markup for enhanced content understanding

**Deliverables:**
- [ ] `content-optimizer.md` agent definition
- [ ] Content analysis utilities
- [ ] GitHub Actions workflow
- [ ] AI readability skill library

**Acceptance Criteria:**
- ✅ Agent scores content readability accurately
- ✅ Identifies keyword stuffing and suggests improvements
- ✅ Provides actionable content recommendations
- ✅ Workflow runs on content changes
- ✅ Pilot site content achieves >80/100 content quality score

---

### Task 3.5: Integrate Quality Gate System
**Dependencies:** Tasks 3.2-3.4 (all agents operational)
**Estimated Time:** 8-10 hours
**Owner:** DevOps Engineer

**Purpose:** Orchestrate 6 quality gates sequentially with pass/fail criteria.

**Implementation Steps:**
1. Create master quality gate workflow `.github/workflows/quality-gates.yml`:
   ```yaml
   name: Quality Gate System

   on:
     pull_request:
       branches: [main]

   jobs:
     gate-1-code-quality:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - run: pnpm install
         - run: pnpm nx run-many --target=lint --all
         - run: pnpm nx run-many --target=type-check --all
         - run: pnpm nx run-many --target=test --all

     gate-2-seo-compliance:
       needs: gate-1-code-quality
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - run: pnpm install && pnpm nx build pilot-client
         - name: Run SEO Optimizer
           run: claude-code --agent=seo-optimizer --threshold=90

     gate-3-accessibility:
       needs: gate-2-seo-compliance
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - run: pnpm install && pnpm nx build pilot-client
         - name: Run Accessibility Auditor
           run: pnpm playwright test --project=a11y

     gate-4-performance:
       needs: gate-3-accessibility
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - run: pnpm install && pnpm nx build pilot-client
         - name: Run Lighthouse CI
           run: |
             npm install -g @lhci/cli
             lhci autorun --assert.preset=lighthouse:recommended

     gate-5-ai-readiness:
       needs: gate-4-performance
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - run: pnpm install && pnpm nx build pilot-client
         - name: Run Content Optimizer
           run: claude-code --agent=content-optimizer --threshold=80

     gate-6-security:
       needs: gate-5-ai-readiness
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - run: pnpm install
         - name: Audit dependencies
           run: pnpm audit --audit-level=high
   ```

2. Configure pass/fail thresholds:
   - Gate 1: All lint/type/test checks pass (no failures)
   - Gate 2: SEO score >90/100
   - Gate 3: Zero critical a11y violations
   - Gate 4: Lighthouse Performance >90, Accessibility >95, SEO >95
   - Gate 5: Content quality >80/100
   - Gate 6: Zero high/critical security vulnerabilities

3. Add retry logic:
   - If gate fails, create GitHub issue with details
   - Allow 3 manual retry attempts (manual workflow dispatch)
   - After 3 failures, require technical lead review

4. Update branch protection:
   - Require "Quality Gate System" workflow to pass before merge
   - Add CODEOWNERS review requirement for shared packages

**Deliverables:**
- [ ] Quality gate workflow with sequential jobs
- [ ] Pass/fail thresholds documented
- [ ] Retry logic implemented
- [ ] Branch protection updated

**Acceptance Criteria:**
- ✅ All 6 gates run sequentially (Gate N+1 only if Gate N passes)
- ✅ Failed gate blocks PR merge
- ✅ GitHub issue created on gate failure with specific recommendations
- ✅ Quality gate workflow completes in <15 minutes for pilot site

---

### Task 3.6: Setup Automated Deployment Pipeline
**Dependencies:** Task 3.5 (quality gates operational)
**Estimated Time:** 6-8 hours
**Owner:** DevOps Engineer

**Purpose:** Automate staging and production deployments with quality gate integration.

**Implementation Steps:**
1. Create staging deployment workflow `.github/workflows/deploy-staging.yml`:
   ```yaml
   name: Deploy to Staging

   on:
     push:
       branches: [staging]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - run: pnpm install
         - run: pnpm nx build pilot-client
         - name: Deploy to Netlify (Staging)
           uses: nwtgck/actions-netlify@v2
           with:
             publish-dir: './dist/sites/pilot-client'
             production-deploy: false
             github-token: ${{ secrets.GITHUB_TOKEN }}
             deploy-message: "Deploy from GitHub Actions (staging)"
           env:
             NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
             NETLIFY_SITE_ID: ${{ secrets.NETLIFY_STAGING_SITE_ID }}
   ```

2. Create production deployment workflow `.github/workflows/deploy-production.yml`:
   ```yaml
   name: Deploy to Production

   on:
     push:
       branches: [main]

   jobs:
     quality-check:
       uses: ./.github/workflows/quality-gates.yml

     deploy:
       needs: quality-check
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - run: pnpm install
         - run: pnpm nx build pilot-client
         - name: Deploy to Netlify (Production)
           uses: nwtgck/actions-netlify@v2
           with:
             publish-dir: './dist/sites/pilot-client'
             production-deploy: true
             github-token: ${{ secrets.GITHUB_TOKEN }}
             deploy-message: "Production deploy from GitHub Actions"
           env:
             NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
             NETLIFY_SITE_ID: ${{ secrets.NETLIFY_PRODUCTION_SITE_ID }}
   ```

3. Configure GitHub Secrets:
   - `NETLIFY_AUTH_TOKEN`: Netlify personal access token
   - `NETLIFY_STAGING_SITE_ID`: Staging site ID
   - `NETLIFY_PRODUCTION_SITE_ID`: Production site ID
   - `ANTHROPIC_API_KEY`: For Claude Code agents

4. Setup deploy previews (automatic via Netlify):
   - PRs get automatic preview URLs
   - Configure Sveltia CMS to use preview URLs for editing

**Deliverables:**
- [ ] Staging deployment workflow (auto-deploys on push to `staging`)
- [ ] Production deployment workflow (requires quality gates pass)
- [ ] GitHub Secrets configured
- [ ] Deploy previews enabled for PRs

**Acceptance Criteria:**
- ✅ Push to `staging` branch triggers automatic staging deployment
- ✅ Merge to `main` triggers production deployment ONLY if quality gates pass
- ✅ PR preview URLs accessible within 3 minutes of commit
- ✅ Failed quality gate blocks production deployment

---

### Task 3.7: Create Client Site Scaffolding Script
**Dependencies:** Phase 3 tasks 3.1-3.6 (full pipeline operational)
**Estimated Time:** 12-16 hours
**Owner:** Full-Stack Developer

**Purpose:** Automate creation of new client sites to achieve "<1 week launch" goal.

**Implementation Steps:**
1. Create Node.js scaffolding script `scripts/create-client-site.mjs`:
   ```javascript
   import fs from 'fs-extra';
   import path from 'path';
   import inquirer from 'inquirer';
   import { execSync } from 'child_process';

   async function createClientSite() {
     // Prompt for client details
     const answers = await inquirer.prompt([
       { name: 'clientName', message: 'Client name (lowercase, hyphenated):' },
       { name: 'displayName', message: 'Client display name:' },
       { name: 'domain', message: 'Primary domain:' },
       { name: 'primaryColor', message: 'Primary brand color (hex):' },
       { name: 'secondaryColor', message: 'Secondary brand color (hex):' },
     ]);

     // Copy pilot-client as template
     const sourceDir = 'sites/pilot-client';
     const targetDir = `sites/${answers.clientName}`;

     console.log(`Creating client site: ${answers.clientName}`);
     await fs.copy(sourceDir, targetDir);

     // Update astro.config.mjs
     const astroConfig = path.join(targetDir, 'astro.config.mjs');
     let config = await fs.readFile(astroConfig, 'utf-8');
     config = config.replace(/site: '.*'/, `site: 'https://${answers.domain}'`);
     await fs.writeFile(astroConfig, config);

     // Update tailwind.config.cjs with brand colors
     const tailwindConfig = path.join(targetDir, 'tailwind.config.cjs');
     let tailwind = await fs.readFile(tailwindConfig, 'utf-8');
     tailwind = tailwind.replace(/primary: '.*'/, `primary: '${answers.primaryColor}'`);
     tailwind = tailwind.replace(/secondary: '.*'/, `secondary: '${answers.secondaryColor}'`);
     await fs.writeFile(tailwindConfig, tailwind);

     // Create BRAND_GUIDELINES.md
     const brandGuideTemplate = `
     # ${answers.displayName} Brand Guidelines

     **Primary Color:** ${answers.primaryColor}
     **Secondary Color:** ${answers.secondaryColor}
     **Domain:** ${answers.domain}

     ## Voice & Tone
     [To be completed by client]

     ## Logo Usage
     [To be completed by client]
     `;
     await fs.writeFile(path.join(targetDir, 'BRAND_GUIDELINES.md'), brandGuideTemplate);

     // Update Nx project configuration
     execSync(`nx generate @nxext/astro:application ${answers.clientName} --directory=sites/${answers.clientName}`);

     // Build to verify setup
     console.log('Building client site to verify setup...');
     execSync(`nx build ${answers.clientName}`, { stdio: 'inherit' });

     console.log(`\n✅ Client site created: sites/${answers.clientName}`);
     console.log(`\nNext steps:`);
     console.log(`1. Review BRAND_GUIDELINES.md and add client assets`);
     console.log(`2. Configure Sveltia CMS in public/admin/config.yml`);
     console.log(`3. Update content in src/content/ directories`);
     console.log(`4. Run: pnpm dev --filter=${answers.clientName}`);
   }

   createClientSite().catch(console.error);
   ```

2. Add dependencies:
   ```bash
   pnpm add -D inquirer fs-extra
   ```

3. Add script to root `package.json`:
   ```json
   {
     "scripts": {
       "create-client": "node scripts/create-client-site.mjs"
     }
   }
   ```

4. Create documentation `docs/CLIENT_ONBOARDING.md`:
   - Prerequisites (client brand assets, content outline)
   - Step-by-step walkthrough of scaffolding script
   - Post-generation checklist (CMS config, content population, testing)
   - Timeline expectations (2-5 days from scaffold to staging)

**Deliverables:**
- [ ] `scripts/create-client-site.mjs` scaffolding script
- [ ] Script tested (creates functional client site)
- [ ] `docs/CLIENT_ONBOARDING.md` documentation
- [ ] Package.json script alias configured

**Acceptance Criteria:**
- ✅ Script successfully creates new client site from pilot template
- ✅ Generated site builds without errors (`nx build client-name`)
- ✅ Brand colors applied correctly in Tailwind config
- ✅ Domain configured in Astro config
- ✅ Script execution time <2 minutes
- ✅ Documentation enables non-technical PM to scaffold site

---

### Task 3.8: Document Agent Usage and Quality Gates
**Dependencies:** Tasks 3.2-3.6 (agents and gates operational)
**Estimated Time:** 6-8 hours
**Owner:** Technical Lead

**Purpose:** Enable team to use agents and understand quality gate system.

**Implementation Steps:**
1. Create `docs/AGENT_GUIDE.md`:
   - What are Claude Code agents and how they work
   - List of available agents (seo-optimizer, accessibility-auditor, content-optimizer)
   - How to invoke agents manually: `claude-code --agent=seo-optimizer --project=sites/client-a`
   - How agents integrate with GitHub Actions (automatic triggers)
   - How to interpret agent reports
   - How to create new agents (reference `@skills-creator`)

2. Create `docs/QUALITY_GATES.md`:
   - Overview of 6-gate quality system
   - Detailed pass/fail criteria for each gate
   - What happens when gate fails (GitHub issue, retry process)
   - How to manually trigger quality gates
   - Emergency bypass procedure (when critical hotfix needed)

3. Create `docs/TROUBLESHOOTING.md`:
   - Common issues and solutions:
     - Build failures (Nx cache corruption, dependency conflicts)
     - Quality gate failures (how to debug specific gates)
     - Deployment issues (Netlify errors, DNS problems)
     - Sveltia CMS issues (OAuth failures, content not saving)
   - How to get help (escalation path)

**Deliverables:**
- [ ] `docs/AGENT_GUIDE.md` with comprehensive agent documentation
- [ ] `docs/QUALITY_GATES.md` explaining gate system
- [ ] `docs/TROUBLESHOOTING.md` with common issues

**Acceptance Criteria:**
- ✅ Documentation enables new developer to invoke agents independently
- ✅ Quality gate pass/fail criteria clearly explained with examples
- ✅ Troubleshooting guide resolves 80% of common issues without escalation

---

## Phase 3 Exit Gate

**Before declaring MVP complete, validate:**
- ✅ All 6 quality gates operational and passing for pilot client site
- ✅ GitHub Actions workflows configured for CI/CD (staging + production deployments)
- ✅ 3 Tier 1 agents functional (seo-optimizer, accessibility-auditor, content-optimizer)
- ✅ Client site scaffolding script tested (creates working site in <5 minutes)
- ✅ Comprehensive documentation (AGENT_GUIDE, QUALITY_GATES, TROUBLESHOOTING, CLIENT_ONBOARDING)
- ✅ GitHub Actions usage tracked and within budget (monitor for 1 week)
- ✅ Pilot client successfully editing content via CMS without developer assistance
- ✅ Zero critical bugs or blockers in production pilot site

**Estimated Phase 3 Duration:** 2-3 weeks (60 hours ÷ 40 hours/week = 1.5 weeks solo; faster with agent specialist + DevOps parallel work)

---

## Phase 3 Success Validation

**Measure against CLAUDE.md success metrics:**

1. **Time to Launch:** Can second client site be launched in <1 week using scaffolding script?
   - **Test:** Create second client site using `pnpm create-client`
   - **Target:** From scaffold to production in 5 business days or less

2. **Automation ROI:** Has manual audit time been reduced by 70%?
   - **Baseline:** 8 hours/site/month manual audits (before automation)
   - **Current:** <2.5 hours/site/month (automated agents handle routine checks)
   - **Validation:** Track time spent on manual audits for pilot client (1 month post-Phase 3)

3. **Client Independence:** Is pilot client editing content without developer assistance?
   - **Target:** 90% of content updates self-service
   - **Validation:** Track Git commits by author (client vs. developer) for 1 month

4. **Quality Standards:** Are all sites meeting quality thresholds?
   - **Core Web Vitals:** LCP <2.5s, FID <100ms, CLS <0.1 (Google Search Console)
   - **SEO Health:** Schema markup 100% coverage, SEO score >90
   - **Accessibility:** WCAG 2.1 AA compliant, zero critical violations
   - **Validation:** Quality gate reports from GitHub Actions

---

## Phase 4+: Advanced Features (Weeks 10-12, Optional)

**Note:** Phase 4+ is beyond MVP scope. Only proceed after Phase 3 is stable and at least 2 client sites are operational.

### Planned Features (from CLAUDE.md Section 6)

- **Advanced Orchestration:**
  - `website-project-orchestrator` - Master project coordinator
  - `quality-gate-orchestrator` - 6-gate validation system orchestrator
  - `multi-site-deployment-orchestrator` - Cross-site deployment coordination

- **Research & Strategy Agents:**
  - `keyword-researcher` - SEO keyword research and content strategy
  - `competitive-intelligence-analyst` - Competitor website analysis
  - `brand-sentiment-analyst` - Brand consistency validation
  - `content-auditor` - Cross-site content quality assessment

- **Specialized Analysis:**
  - `ai-readiness-auditor` - AI crawler optimization validation
  - `static-site-build-agent` - Build performance optimization

- **Enhanced Documentation:**
  - ORCHESTRATOR_WORKFLOWS.md - Multi-agent coordination patterns
  - DEPLOYMENT_GUIDE.md - Server/Vercel/Netlify deployment options
  - Portfolio management SOPs

**Trigger for Phase 4:**
- 2+ client sites operational
- All Phase 3 success metrics validated
- Client demand for advanced features (e.g., keyword research, competitive analysis)
- Team capacity available (not firefighting pilot client issues)

---

## Risk Management & Contingencies

### Critical Risks and Mitigation

**Risk 1: Sveltia CMS Instability (Pre-v1.0 Software)**
- **Probability:** MEDIUM (pre-v1.0 software has inherent risk)
- **Impact:** HIGH (entire client independence strategy depends on CMS)
- **Mitigation:**
  - Task 0.2 validates CMS early (Phase 0)
  - Git-based content decouples from CMS (can migrate to CloudCannon/Decap)
  - Budget $490/month for CloudCannon if Sveltia fails (10 sites × $49/month)
- **Trigger for Migration:** 2+ critical bugs unfixed >60 days OR 3+ client complaints/month

**Risk 2: GitHub Actions Cost Overruns**
- **Probability:** MEDIUM (private repos burn through free tier)
- **Impact:** MEDIUM (budget impact $10-30/month)
- **Mitigation:**
  - Task 0.3 models costs early
  - Use public repo if client work allows (unlimited free Actions)
  - Optimize workflows (cache aggressive, conditional builds)
  - Set billing alerts at 80% of free tier (1600 minutes)
- **Contingency:** Self-hosted GitHub Actions runners (requires server setup)

**Risk 3: Pilot Client Delays (Content/Branding Not Ready)**
- **Probability:** HIGH (clients often delay asset delivery)
- **Impact:** LOW (delays Phase 2, doesn't block Phase 1 or 3)
- **Mitigation:**
  - Task 0.1 confirms pilot client readiness before Phase 1
  - Create timeline with client asset deadlines
  - Use placeholder content to build structure, swap real content later
- **Contingency:** Use internal site as pilot if external client delays >2 weeks

**Risk 4: Agent Development Complexity Underestimated**
- **Probability:** MEDIUM (Claude Code agent SDK is new)
- **Impact:** HIGH (70% automation ROI depends on agents)
- **Mitigation:**
  - Tasks 3.2-3.4 are timeboxed (16-20 hours each)
  - Start with simplest agent (seo-optimizer) to validate pattern
  - Use existing tools (axe-core, Lighthouse) as fallback if agent complex
- **Contingency:** Phase 3 agents become Phase 4 if complexity exceeds estimates; use standard CI/CD tools (Lighthouse CLI, axe-cli) as MVP

**Risk 5: Team Capacity Insufficient for Timeline**
- **Probability:** MEDIUM (estimates assume 1-2 developers)
- **Impact:** HIGH (delays all phases)
- **Mitigation:**
  - Task 0.1 confirms team size and availability
  - Parallel work opportunities identified (2-person team can compress Phase 1-2 timelines)
  - Buffer built into estimates (8-week target vs. original 6-week estimate)
- **Contingency:** Extend timeline to 12 weeks if solo developer, or hire contractor for specialized tasks (agent development, DevOps)

---

## Success Criteria & Definition of Done

### Overall MVP Success (End of Phase 3)

**Technical Success:**
- ✅ Nx monorepo operational with 3 shared packages
- ✅ Pilot client site deployed to production and stable (>99% uptime)
- ✅ 6-gate quality validation system enforced on all deployments
- ✅ 3 Tier 1 agents operational (seo-optimizer, accessibility-auditor, content-optimizer)
- ✅ CI/CD pipeline automated (staging + production deployments)
- ✅ Client site scaffolding script functional (<5 min to scaffold site)

**Business Success:**
- ✅ Pilot client editing content independently via Sveltia CMS (90% self-service)
- ✅ Time to launch validated (<1 week for second client site)
- ✅ Automation ROI demonstrated (70% reduction in manual audit time)
- ✅ All Core Web Vitals "Good" scores (LCP <2.5s, FID <100ms, CLS <0.1)
- ✅ GitHub Actions costs within budget (<$15/month for 10-site projection)

**Documentation Success:**
- ✅ QUICK_START.md enables new developer onboarding in <5 minutes
- ✅ CLIENT_ONBOARDING.md enables non-technical PM to scaffold sites
- ✅ AGENT_GUIDE.md enables team to use agents independently
- ✅ QUALITY_GATES.md explains validation system clearly

### Phase-Specific Success Criteria

**Phase 0 Success:**
- All 8 decision points answered and documented
- Sveltia CMS validated (GO decision made)
- Pilot client identified and committed
- Roadmap approved by stakeholders

**Phase 1 Success:**
- Nx monorepo builds successfully
- 10-15 shared components importable by client sites
- SEO utilities functional with unit tests passing
- New developer onboards successfully using QUICK_START.md

**Phase 2 Success:**
- Pilot client site deployed to production with <3s LCP
- Client demonstrates content editing via CMS
- Core Web Vitals "Good" scores achieved
- Zero critical bugs in first week post-launch

**Phase 3 Success:**
- All 6 quality gates operational and passing
- GitHub Actions workflows automated for staging + production
- Client site scaffolding script creates working site in <5 minutes
- Comprehensive documentation complete

---

## Timeline Summary

| Phase | Duration | Key Deliverables | Team Size |
|-------|----------|------------------|-----------|
| **Phase 0** | 3-5 days | Decision points answered, Sveltia validated, roadmap approved | 1-2 |
| **Phase 1** | 2-3 weeks | Nx monorepo, 3 shared packages, documentation | 1-2 |
| **Phase 2** | 2-3 weeks | Pilot client site deployed to production | 1-2 |
| **Phase 3** | 2-3 weeks | Quality gates, CI/CD, agents, scaffolding script | 1-2 |
| **Total (MVP)** | **8-10 weeks** | **Production-ready multi-site system** | **1-2** |

**Best Case:** 8 weeks (2-person team, parallel work, no blockers)
**Realistic Case:** 9 weeks (solo developer or 2-person team with minor delays)
**Worst Case:** 10 weeks (solo developer with blockers or learning curve)

---

## Next Steps

1. **Review this task dependency plan** with stakeholders
2. **Schedule Phase 0 kickoff meeting** (Task 0.1) to answer decision points
3. **Assign owners** to Phase 0 tasks (Tasks 0.1-0.4)
4. **Begin Task 0.2 immediately** (Sveltia CMS POC) - critical validation gate
5. **Update CLAUDE.md** with any decisions from Phase 0 (maintain single source of truth)

---

**Plan Status:** Ready for Phase 0 Execution
**Next Review:** End of Phase 0 (before committing to Phase 1 infrastructure build)
**Plan Maintained By:** Technical Lead
**Last Updated:** 2025-10-31
