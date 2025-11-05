# Multi-Site Management Guide

**Complete guide for managing multiple client sites with different themes, content, and backends.**

---

## Your 3 Sites Overview

| Site | Theme | Industry | Colors | Port | CMS Backend |
|------|-------|----------|--------|------|-------------|
| **dws-web-ai** | Blue/Tech | SaaS Platform | Blue (#1e40af) | 4321 | /admin |
| **test-client-alpha** | Green/Professional | Law Firm | Green (#065f46) | 4322 | /admin |
| **test-client-beta** | Purple/Creative | Design Agency | Purple (#7c3aed) | 4323 | /admin |

---

## Quick Start: View All 3 Sites

### Start All Sites Simultaneously

```bash
# From project root
pnpm dev
```

**This starts:**
- Site 1 (dws-web-ai): http://localhost:4321
- Site 2 (test-client-alpha): http://localhost:4322
- Site 3 (test-client-beta): http://localhost:4323

**Each site has its own CMS:**
- CMS 1: http://localhost:4321/admin
- CMS 2: http://localhost:4322/admin
- CMS 3: http://localhost:4323/admin

---

## Site 1: DWS-Web-AI (Blue/Tech Theme)

### Overview
- **Industry**: SaaS / Web Development Platform
- **Theme**: Professional blue tech theme
- **Target Audience**: Web agencies and developers

### Access Points
```bash
# Development
Site: http://localhost:4321
CMS:  http://localhost:4321/admin

# Production (after deployment)
Site: https://dws-web-ai.com
CMS:  https://dws-web-ai.com/admin
```

### Theme Colors
```css
Primary:   #1e40af (Blue 800)
Secondary: #1e3a8a (Blue 900)
Accent:    #3b82f6 (Blue 500)
```

### Git Backend Setup
```yaml
# For Sveltia CMS in production
backend:
  name: github
  repo: your-username/dws-web-ai
  branch: main

# Or for Git Gateway (Netlify)
backend:
  name: git-gateway
  branch: main
```

### Content Structure
```
src/content/
├── pages/
│   ├── home.md          # Homepage content
│   ├── about.md         # About page
│   ├── services.md      # Services page
│   └── contact.md       # Contact page
├── blog/                # Blog posts
└── config/
    └── navigation.json  # Menu items
```

---

## Site 2: Test Client Alpha (Green/Law Firm Theme)

### Overview
- **Industry**: Estate Planning Law Firm
- **Theme**: Professional green legal theme
- **Target Audience**: Seattle families needing estate planning

### Access Points
```bash
# Development
Site: http://localhost:4322
CMS:  http://localhost:4322/admin

# Production (after deployment)
Site: https://seattle-estate-law.com
CMS:  https://seattle-estate-law.com/admin
```

### Theme Colors
```css
Primary:   #065f46 (Green 800)
Secondary: #047857 (Green 700)
Accent:    #10b981 (Green 500)
```

### Git Backend Setup
```yaml
# Option 1: Separate repo per client
backend:
  name: github
  repo: your-username/seattle-estate-law
  branch: main

# Option 2: Monorepo with path
backend:
  name: github
  repo: your-username/starter-template
  branch: main
  base: sites/test-client-alpha
```

### Content Customizations
- Homepage: "Protecting Your Family's Future"
- Focus: Estate planning, wills, trusts, probate
- CTA: "Schedule Free Consultation"

---

## Site 3: Test Client Beta (Purple/Creative Theme)

### Overview
- **Industry**: Creative Design Agency
- **Theme**: Bold purple creative theme
- **Target Audience**: Businesses needing design services

### Access Points
```bash
# Development
Site: http://localhost:4323
CMS:  http://localhost:4323/admin

# Production (after deployment)
Site: https://creative-design-studio.com
CMS:  https://creative-design-studio.com/admin
```

### Theme Colors
```css
Primary:   #7c3aed (Purple 600)
Secondary: #6d28d9 (Purple 700)
Accent:    #a78bfa (Purple 400)
```

### Git Backend Setup
```yaml
# Option 1: Separate repo
backend:
  name: github
  repo: your-username/creative-design-studio
  branch: main

# Option 2: Monorepo with path
backend:
  name: github
  repo: your-username/starter-template
  branch: main
  base: sites/test-client-beta
```

### Content Customizations
- Homepage: "Design That Inspires Action"
- Focus: Branding, web design, digital experiences
- CTA: "View Our Work"

---

## Git Repository Setup Options

### Option 1: Monorepo (Single Repo for All Sites) ✅ **Current Setup**

**Pros:**
- Shared components automatically sync
- Single repository to manage
- Easy cross-site updates
- Version control everything together

**Cons:**
- All clients see each other's code
- Larger repository size

**Structure:**
```
starter-template/  (main repo)
├── packages/      (shared components)
├── sites/
│   ├── dws-web-ai/
│   ├── test-client-alpha/
│   └── test-client-beta/
```

**CMS Config** (`public/admin/config.yml`):
```yaml
backend:
  name: github
  repo: your-username/starter-template
  branch: main
  base: sites/dws-web-ai  # Path to this specific site
```

---

### Option 2: Separate Repos Per Client

**Pros:**
- Each client has isolated repository
- Better security/privacy
- Can give clients access to their repo only
- Smaller repo sizes

**Cons:**
- Shared components need manual syncing
- More repositories to manage
- Updates require copying across repos

**Setup Process:**

**1. Create new repo for client:**
```bash
# Create new repo on GitHub: seattle-estate-law

# Copy site folder
cp -r sites/test-client-alpha /path/to/new/repo/seattle-estate-law

# Initialize Git
cd /path/to/new/repo/seattle-estate-law
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/seattle-estate-law.git
git push -u origin main
```

**2. Update CMS Config:**
```yaml
# public/admin/config.yml
backend:
  name: github
  repo: your-username/seattle-estate-law
  branch: main
  # No 'base' needed - this is the root
```

**3. Copy shared components:**
```bash
# Copy shared packages into client repo
cp -r packages/ /path/to/seattle-estate-law/packages/
```

---

### Option 3: Hybrid (Recommended for Production)

**Development**: Monorepo (current setup)
**Production**: Separate client repos

**Workflow:**
1. Develop all sites in monorepo
2. Test multi-site workflows
3. When client ready for production:
   - Create dedicated client repo
   - Copy site folder + shared components
   - Deploy from client repo
   - Give client access to their repo only

---

## CMS Backend Configuration

### Where to Point Each Repo

**Edit each site's `public/admin/config.yml`:**

#### Site 1: dws-web-ai
```yaml
backend:
  name: github
  repo: cscottle7/starter-template  # Your actual GitHub username
  branch: main
  base: sites/dws-web-ai

media_folder: "public/images"
public_folder: "/images"

collections:
  - name: "pages"
    label: "Pages"
    folder: "src/content/pages"
    create: false
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Description", name: "description", widget: "text"}
      - {label: "Publish Date", name: "publishDate", widget: "datetime"}
      - {label: "Body", name: "body", widget: "markdown"}

  - name: "blog"
    label: "Blog Posts"
    folder: "src/content/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Description", name: "description", widget: "text"}
      - {label: "Author", name: "author", widget: "string"}
      - {label: "Publish Date", name: "publishDate", widget: "datetime"}
      - {label: "Image", name: "image", widget: "image"}
      - {label: "Image Alt", name: "imageAlt", widget: "string"}
      - {label: "Tags", name: "tags", widget: "list"}
      - {label: "Body", name: "body", widget: "markdown"}
```

#### Site 2: test-client-alpha (if separate repo)
```yaml
backend:
  name: github
  repo: cscottle7/seattle-estate-law  # Dedicated client repo
  branch: main
  # No 'base' needed

media_folder: "public/images"
public_folder: "/images"

# Same collections as above
```

#### Site 3: test-client-beta (if separate repo)
```yaml
backend:
  name: github
  repo: cscottle7/creative-design-studio  # Dedicated client repo
  branch: main
  # No 'base' needed

media_folder: "public/images"
public_folder: "/images"

# Same collections as above
```

---

## Production CMS Authentication Setup

### Step 1: Create GitHub OAuth App (Required for Production CMS)

**For each site (or one for all if monorepo):**

1. Go to: https://github.com/settings/developers
2. Click "New OAuth App"
3. Fill in details:

**For dws-web-ai:**
```
Application name: DWS-Web-AI CMS
Homepage URL: https://dws-web-ai.com
Authorization callback URL: https://dws-web-ai.com/api/auth/callback
```

**For test-client-alpha:**
```
Application name: Seattle Estate Law CMS
Homepage URL: https://seattle-estate-law.com
Authorization callback URL: https://seattle-estate-law.com/api/auth/callback
```

**For test-client-beta:**
```
Application name: Creative Design Studio CMS
Homepage URL: https://creative-design-studio.com
Authorization callback URL: https://creative-design-studio.com/api/auth/callback
```

4. Save Client ID and Client Secret
5. Add to your deployment platform (Vercel/Netlify) as environment variables:
   ```
   OAUTH_CLIENT_ID=your_client_id
   OAUTH_CLIENT_SECRET=your_client_secret
   ```

### Step 2: Enable Git Gateway (If Using Netlify)

**Per site:**
1. Netlify Dashboard → Site → Identity
2. Enable Identity
3. Settings → Registration preferences → Invite only
4. Services → Git Gateway → Enable
5. Invite team members via email

---

## Using Claude Code Agents Across Sites

### Yes! You Can Edit Multiple Sites with Agents

**Available Agents:**
- `@seo-optimizer` - SEO audits
- `@accessibility-auditor` - WCAG compliance
- `@content-optimizer` - Content quality
- `@keyword-researcher` - Keyword research
- `@ai-readiness-auditor` - AI crawler optimization
- `@website-project-orchestrator` - Full project coordination
- `@multi-site-deployment-orchestrator` - Multi-site deployments

### Example Workflows

**Audit All 3 Sites:**
```bash
# Audit Site 1
@seo-optimizer "Audit dws-web-ai homepage for SEO compliance"

# Audit Site 2
@seo-optimizer "Audit test-client-alpha homepage for law firm SEO best practices"

# Audit Site 3
@seo-optimizer "Audit test-client-beta homepage for design agency SEO"
```

**Multi-Site Deployment:**
```bash
# Ask orchestrator for guidance
@multi-site-deployment-orchestrator "I updated the Header component in @workspace/ui-components. Which sites need deployment and in what order?"
```

**Full Project Orchestration:**
```bash
# Run comprehensive quality audit
@website-project-orchestrator "Run quality audit on all 3 sites before client demos"
```

**Keyword Research Per Site:**
```bash
# Law firm keywords
@keyword-researcher "Research keywords for Seattle estate planning law firm specializing in wills, trusts, and probate"

# Design agency keywords
@keyword-researcher "Research keywords for creative design agency specializing in branding and web design"
```

---

## Multi-Site Editing Workflow

### Scenario 1: Edit Single Site Content

**Via CMS:**
1. Start dev servers: `pnpm dev`
2. Navigate to site CMS: `http://localhost:4322/admin`
3. Edit content (e.g., homepage hero text)
4. Save changes
5. Changes saved to `sites/test-client-alpha/src/content/pages/home.md`
6. Commit to Git:
   ```bash
   git add sites/test-client-alpha/
   git commit -m "Update law firm homepage hero"
   git push
   ```

**Via Code (with Claude Code):**
```bash
# Ask me to edit content
"Edit test-client-alpha homepage to change the hero headline to 'Seattle's Trusted Estate Planning Attorneys'"

# I'll use Edit tool to update src/content/pages/home.md
# Then you commit
```

---

### Scenario 2: Update Shared Component (Affects All Sites)

**Example: Update Header component**

```bash
# 1. Ask me to update shared component
"Update the Header component in @workspace/ui-components to add a phone number link in the navigation"

# 2. I edit packages/ui-components/src/components/Header.astro

# 3. Test on all sites
pnpm -r build

# 4. Use orchestrator for deployment guidance
@multi-site-deployment-orchestrator "Header component updated. Which sites need deployment?"

# 5. Orchestrator tells you:
# - All 3 sites affected (they all use Header)
# - Deploy sequentially (test on dws-web-ai first)
# - Recommended order: dws-web-ai → test-client-alpha → test-client-beta
```

---

### Scenario 3: Customize Per-Site Styles

**Example: Change button colors for law firm site**

```bash
# Edit test-client-alpha Tailwind config
"Change the primary color for test-client-alpha to a darker green (#047857)"

# I'll edit sites/test-client-alpha/tailwind.config.cjs
# Only affects that site - others unchanged
```

---

## Glenn Adaptation for This Workflow

### Current Agents vs Glenn

**You Have:**
- `@website-project-orchestrator` - Similar to Glenn's project coordination
- `@multi-site-deployment-orchestrator` - Multi-site specific

**Glenn's Strengths:**
- Analyzes high-level goals
- Routes to correct workflow (build vs investigate)
- Good for ambiguous tasks

**Your Orchestrators:**
- Specialized for multi-site website workflows
- Know about CMS, SEO, deployment
- Already tailored to this stack (Astro, Sveltia, etc.)

### Recommendation: **Don't Adapt Glenn**

**Why:**
1. `@website-project-orchestrator` already does what Glenn does (but better for websites)
2. Glenn is for generic development workflows
3. Your orchestrators are already specialized for this exact use case
4. Adding Glenn would be redundant

**Instead, use:**
```bash
# For project coordination
@website-project-orchestrator "coordinate quality audit across all 3 sites"

# For multi-site tasks
@multi-site-deployment-orchestrator "analyze shared component update impact"

# For site-specific tasks
@seo-optimizer "audit test-client-alpha for law firm SEO"
```

---

## Common Multi-Site Tasks

### Task 1: Add New Page to Single Site

```bash
# Example: Add "Team" page to law firm site

# 1. Create page file
touch sites/test-client-alpha/src/pages/team.astro

# 2. Create content file
touch sites/test-client-alpha/src/content/pages/team.md

# 3. Add to navigation (via CMS or manually)
# Edit src/content/config/navigation.json

# 4. Populate content via CMS
# http://localhost:4322/admin → Pages → New Page
```

### Task 2: Change Color Scheme

```bash
# Edit site's tailwind.config.cjs
# Example: Make law firm site use gold accents

sites/test-client-alpha/tailwind.config.cjs:
colors: {
  primary: '#065f46',   // Keep green
  secondary: '#047857',
  accent: '#f59e0b',    // Change to gold
}
```

### Task 3: Update All Sites with Security Patch

```bash
# 1. Update dependency in root
pnpm update astro

# 2. Rebuild all sites
pnpm -r build

# 3. Test all sites
pnpm dev
# Visit localhost:4321, 4322, 4323

# 4. Deploy all (if safe)
@multi-site-deployment-orchestrator "Security patch applied. Coordinate deployment"
```

---

## Build & Deploy Commands

### Build Single Site
```bash
cd sites/dws-web-ai
pnpm build
# Output: dist/ folder
```

### Build All Sites
```bash
# From root
pnpm -r build

# Builds:
# - sites/dws-web-ai/dist/
# - sites/test-client-alpha/dist/
# - sites/test-client-beta/dist/
```

### Deploy Single Site to Vercel
```bash
cd sites/dws-web-ai
vercel --prod
```

### Deploy Single Site to Netlify
```bash
cd sites/test-client-alpha
netlify deploy --prod
```

---

## Monitoring & Maintenance

### Check All Sites Health
```bash
# Build all
pnpm -r build

# Run quality checks
@website-project-orchestrator "Run quality audit on all 3 sites"

# Check for vulnerabilities
pnpm audit --production
```

### Update All Sites Quarterly
```bash
# 1. Update dependencies
pnpm update --recursive

# 2. Test builds
pnpm -r build

# 3. Run agent audits
@seo-optimizer "Audit all 3 sites"
@accessibility-auditor "Check all 3 sites"

# 4. Deploy if passing
```

---

## Quick Reference

| Task | Command |
|------|---------|
| Start all sites | `pnpm dev` |
| Build all sites | `pnpm -r build` |
| Create new site | `pnpm create-client` |
| Edit site 1 CMS | http://localhost:4321/admin |
| Edit site 2 CMS | http://localhost:4322/admin |
| Edit site 3 CMS | http://localhost:4323/admin |
| Deploy single site | `cd sites/sitename && vercel` |
| Audit all sites | `@website-project-orchestrator "audit all sites"` |
| Multi-site deploy | `@multi-site-deployment-orchestrator "coordinate deployment"` |

---

## Summary: Your Setup

✅ **3 Sites with Distinct Identities:**
- Blue tech SaaS platform
- Green professional law firm
- Purple creative design agency

✅ **Each Site Has:**
- Unique color scheme
- Unique content
- Own CMS backend at `/admin`
- Own development port

✅ **Can Edit With:**
- CMS web interface (visual editing)
- Claude Code agents (I can edit files directly)
- Manual file editing

✅ **Orchestrators Available:**
- `@website-project-orchestrator` (better than Glenn for this)
- `@multi-site-deployment-orchestrator` (multi-site specific)

✅ **Git Backend:**
- Currently: Monorepo (all sites in one repo)
- Production option: Separate repos per client
- CMS config points to correct repo path

**You're ready to manage multiple client sites!** 🚀

Start with: `pnpm dev` and visit all 3 sites to see the different themes in action.
