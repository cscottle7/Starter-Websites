---
name: new-client-site-scaffolding
description: Scaffold new client websites using three-tier customization model. Sets up site structure, brand guidelines, Tailwind config, and CMS collections. Defines what to customize (Tier 2-3) vs never touch (Tier 1 core). Use when creating new client sites in the monorepo.
---

# New Client Site Scaffolding

## Purpose
Provides step-by-step process for creating new client sites in the monorepo. Enforces three-tier customization model ensuring core infrastructure consistency while allowing client-specific branding and content.

---

## Three-Tier Customization Model

### Tier 1: Template Core (NEVER CUSTOMIZED PER CLIENT)
**What it includes:**
- Build tooling (`astro.config.mjs` base settings, `nx.json`)
- Core SEO utilities (`packages/seo-utils/`)
- Shared component library (`packages/ui-components/`)
- Quality standards (`eslint`, `prettier`, `tsconfig.base.json`)
- GitHub Actions workflows

**Rule:** ❌ **DO NOT modify these per client**

---

### Tier 2: Design System (CUSTOMIZABLE PER CLIENT)
**What it includes:**
- Color tokens and typography (`tailwind.config.cjs`)
- Component variants (extend base components in `sites/client-x/src/components/`)
- Brand-specific layouts (`sites/client-x/src/layouts/`)
- Client-specific Astro integrations

**Rule:** ✅ **Customize these for each client's brand**

---

### Tier 3: Content & Configuration (FULLY CLIENT-SPECIFIC)
**What it includes:**
- Sveltia CMS content (`sites/client-x/src/content/`)
- Brand guidelines (`sites/client-x/BRAND_GUIDELINES.md`)
- Client-specific plugins/integrations
- Site-specific assets (images, fonts)

**Rule:** ✅ **Completely unique per client**

---

## Scaffolding Procedure

### Step 1: Choose Reference Site
**Pick the most similar existing site as template:**
```bash
# List existing sites
ls sites/

# Example output:
# client-alpha/   - Professional services theme
# client-beta/    - Creative agency theme
# client-gamma/   - E-commerce theme
```

**Choose based on:**
- Industry similarity
- Design aesthetic
- Feature requirements

---

### Step 2: Copy Site Structure
```bash
# Copy reference site
cp -r sites/client-alpha sites/new-client-name

# Rename in package.json
cd sites/new-client-name
```

**Update `package.json`:**
```json
{
  "name": "@sites/new-client-name",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "@workspace/ui-components": "workspace:*",
    "@workspace/seo-utils": "workspace:*",
    "astro": "^5.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "tailwindcss": "^3.4.0"
  }
}
```

---

### Step 3: Create Brand Guidelines (Tier 3)

**Location:** `sites/new-client-name/BRAND_GUIDELINES.md`

**Template:**
```markdown
# Brand Guidelines: [Client Name]

## Brand Identity

**Company:** [Client Company Name]
**Industry:** [Industry]
**Target Audience:** [Audience description]
**Brand Personality:** [Adjectives: Professional, Creative, Friendly, etc.]

---

## Visual Identity

### Brand Colors
- **Primary:** #1a202c (Dark blue-gray)
- **Secondary:** #2d3748 (Medium blue-gray)
- **Accent:** #3182ce (Blue)
- **Success:** #38a169 (Green)
- **Warning:** #d69e2e (Yellow)
- **Error:** #e53e3e (Red)

### Typography
- **Headings:** Inter, sans-serif
- **Body:** Inter, sans-serif
- **Monospace:** JetBrains Mono, monospace

### Logo
- **Location:** `/src/assets/images/logo.svg`
- **Usage:** [Guidelines for logo placement, sizing, clear space]

---

## Voice & Tone

**Writing Style:** [Formal/Casual/Technical/Friendly]
**Example:** [Sample sentence in brand voice]

---

## SEO & Content

**Primary Keywords:** [List]
**Content Strategy:** [Brief description]
**Target Pages:** [Homepage, Services, About, Blog, Contact]

---

## Notes

- [Any client-specific preferences]
- [Accessibility requirements]
- [Special considerations]
```

---

### Step 4: Configure Tailwind (Tier 2)

**Location:** `sites/new-client-name/tailwind.config.cjs`

**Update brand colors:**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Client brand colors (from BRAND_GUIDELINES.md)
        primary: '#1a202c',
        'primary-dark': '#0f1419',
        'primary-light': '#2d3748',

        secondary: '#2d3748',
        'secondary-dark': '#1a202c',
        'secondary-light': '#4a5568',

        accent: '#3182ce',
        'accent-dark': '#2c5282',
        'accent-light': '#63b3ed',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
```

---

### Step 5: Update Astro Config (Tier 2)

**Location:** `sites/new-client-name/astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://new-client-name.com', // Update domain
  integrations: [tailwind()],
  output: 'static', // Tier 1: Never change (static-first)
  build: {
    format: 'directory' // Tier 1: Never change
  },
  // Client-specific integrations (Tier 2)
  // e.g., image optimization, analytics, etc.
});
```

---

### Step 6: Clear Old Content (Tier 3)

```bash
# Remove reference site content
rm -rf sites/new-client-name/src/content/pages/*
rm -rf sites/new-client-name/src/content/blog/*

# Keep directory structure
touch sites/new-client-name/src/content/pages/.gitkeep
touch sites/new-client-name/src/content/blog/.gitkeep
```

---

### Step 7: Configure Sveltia CMS (Tier 3)

**Update:** `sites/new-client-name/public/admin/config.yml`

```yaml
backend:
  name: github
  repo: your-org/starter-websites
  branch: main
  base_url: https://your-oauth-provider.com
  site_domain: new-client-name.com  # Update domain

local_backend: true

media_folder: "sites/new-client-name/src/assets/images"  # Update path
public_folder: "/src/assets/images"

collections:
  - name: "pages"
    label: "Pages"
    folder: "sites/new-client-name/src/content/pages"  # Update path
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Description", name: "description", widget: "text"}
      - {label: "Publish Date", name: "publishDate", widget: "datetime"}
      - {label: "Body", name: "body", widget: "markdown"}

  - name: "blog"
    label: "Blog Posts"
    folder: "sites/new-client-name/src/content/blog"  # Update path
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Description", name: "description", widget: "text"}
      - {label: "Publish Date", name: "publishDate", widget: "datetime"}
      - {label: "Author", name: "author", widget: "string"}
      - {label: "Body", name: "body", widget: "markdown"}
```

---

### Step 8: Create Initial Content (Tier 3)

**Homepage:** `sites/new-client-name/src/content/pages/home.md`

```markdown
---
title: "Welcome to [Client Name]"
description: "[Client value proposition]"
publishDate: 2025-11-08
---

# Welcome to [Client Name]

[Homepage content goes here - client will edit via CMS]
```

**First Blog Post:** `sites/new-client-name/src/content/blog/welcome.md`

```markdown
---
title: "Welcome to Our Blog"
description: "Introducing [Client Name] blog"
publishDate: 2025-11-08
author: "[Client Name]"
---

# Welcome to Our Blog

[First post content - client will edit via CMS]
```

---

### Step 9: Customize Components (Tier 2)

**Create client-specific component variants:**

```bash
mkdir -p sites/new-client-name/src/components
```

**Example:** `sites/new-client-name/src/components/CustomHero.astro`

```astro
---
// Extends shared Hero component with client-specific styling
import { Hero } from '@workspace/ui-components';
import { getEntry } from 'astro:content';

const homepage = await getEntry('pages', 'home');
---

<Hero
  title={homepage.data.title}
  subtitle={homepage.data.description}
  variant="custom"
  backgroundImage="/src/assets/images/hero-bg.jpg"
/>

<style>
  /* Client-specific hero customizations */
  :global(.hero.hero-custom) {
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  }
</style>
```

---

### Step 10: Update Nx Configuration

**Location:** `nx.json` (root)

**Add new site to targets:**
```json
{
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"]
    }
  },
  "namedInputs": {
    "default": ["{projectRoot}/**/*"],
    "production": [
      "default",
      "!{projectRoot}/**/*.spec.ts"
    ]
  }
}
```

**Nx automatically detects new projects in `sites/` directory**

---

### Step 11: Install Dependencies

```bash
# From monorepo root
pnpm install

# Verify new site appears in workspace
pnpm -r list --depth 0
```

---

### Step 12: Test Development Server

```bash
# Start new site
pnpm dev --filter=new-client-name

# Should open at http://localhost:4321
```

**Verify:**
1. ✅ Site loads without errors
2. ✅ Tailwind colors match brand guidelines
3. ✅ CMS accessible at `/admin`
4. ✅ Content collections working

---

### Step 13: Create README

**Location:** `sites/new-client-name/README.md`

```markdown
# [Client Name] Website

**Client:** [Client Company Name]
**Domain:** https://new-client-name.com
**CMS Access:** https://new-client-name.com/admin

---

## Quick Start

\`\`\`bash
# Development
pnpm dev --filter=new-client-name

# Build
nx build new-client-name

# Preview production build
cd sites/new-client-name && pnpm preview
\`\`\`

---

## Brand Colors

See `BRAND_GUIDELINES.md` for complete brand identity.

- **Primary:** #1a202c
- **Secondary:** #2d3748
- **Accent:** #3182ce

---

## Content Management

Clients edit content at: https://new-client-name.com/admin

**Content Types:**
- Pages (`/src/content/pages/`)
- Blog Posts (`/src/content/blog/`)

---

## Deployment

[Add deployment instructions - Vercel/Netlify/custom server]
```

---

## Checklist: New Client Site Setup

**Before Starting:**
- [ ] Gather client brand assets (logo, colors, fonts)
- [ ] Review BRAND_GUIDELINES.md template
- [ ] Choose reference site to copy from

**During Setup:**
- [ ] Copy reference site structure
- [ ] Update `package.json` name and metadata
- [ ] Create `BRAND_GUIDELINES.md`
- [ ] Configure `tailwind.config.cjs` with brand colors
- [ ] Update `astro.config.mjs` site URL
- [ ] Clear old content, add `.gitkeep` files
- [ ] Configure Sveltia CMS `config.yml`
- [ ] Create initial homepage and first blog post
- [ ] Create client-specific component variants (if needed)
- [ ] Install dependencies (`pnpm install`)
- [ ] Test dev server
- [ ] Create site README

**After Setup:**
- [ ] Test CMS access at `/admin`
- [ ] Verify content collections working
- [ ] Run build: `nx build new-client-name`
- [ ] Commit to Git
- [ ] Configure deployment (Vercel/Netlify/server)

---

## What NOT to Customize (Tier 1)

**NEVER modify these for individual clients:**

1. ❌ Core build tooling (`nx.json` global settings)
2. ❌ Shared packages (`packages/ui-components/`, `packages/seo-utils/`)
3. ❌ ESLint/Prettier/TypeScript base configs
4. ❌ GitHub Actions workflows (global)
5. ❌ Quality gate standards
6. ❌ Astro output mode (must stay `static`)

**If you need to change these:**
→ Create new shared utility/component instead
→ Propose change to Template Core (affects ALL sites)

---

## Usage Examples

### Example 1: Professional Services Site
```bash
# Copy similar site
cp -r sites/client-alpha sites/lawfirm-abc

# Update branding
# - BRAND_GUIDELINES.md (conservative, professional colors)
# - tailwind.config.cjs (navy blue primary, gold accent)
# - Create CustomHero.astro with law firm imagery
```

### Example 2: Creative Agency Site
```bash
# Copy creative reference
cp -r sites/client-beta sites/design-studio-xyz

# Update branding
# - BRAND_GUIDELINES.md (vibrant, bold colors)
# - tailwind.config.cjs (bright purple primary, orange accent)
# - Add custom animations in components
```

---

## Troubleshooting

### Issue: Build fails after copying site
**Solution:** Run `pnpm install` from monorepo root to refresh dependencies

### Issue: CMS not loading
**Solution:** Verify `config.yml` paths point to correct `sites/<client-name>/` directories

### Issue: Tailwind colors not applying
**Solution:** Check `tailwind.config.cjs` has correct color definitions and restart dev server

### Issue: Nx can't find new site
**Solution:** Nx auto-detects projects in `sites/`. Try `nx reset` to clear cache

---

## Related Skills
- `sveltia-cms-setup` - CMS configuration details
- `astro-component-structure` - Component customization
- `quality-gate-validation` - Pre-deployment validation

---

**Version:** 1.0
**Last Updated:** November 2025
**Trigger Terms:** new client site, scaffolding, site setup, three-tier customization, brand guidelines, client onboarding
