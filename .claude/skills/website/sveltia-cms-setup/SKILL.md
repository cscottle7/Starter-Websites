---
name: sveltia-cms-setup
description: Configure Sveltia CMS for new client sites with GitHub OAuth, content collections, and Git-based workflow. Creates admin interface, collection schemas, and preview templates. Use when setting up CMS for new client sites or adding new content types.
---

# Sveltia CMS Setup

## Purpose
Provides step-by-step procedure for configuring Sveltia CMS on new client sites. Ensures Git-based content workflow, proper authentication, and type-safe content collections.

---

## Content Update Workflow

**High-Level Flow:**
```
Client Editor (at https://site.com/admin)
  ↓
GitHub OAuth Authentication
  ↓
Visual Content Editing (Sveltia CMS UI)
  ↓
Git Commit (via Sveltia → GitHub API)
  ↓
GitHub Webhook Trigger (push event)
  ↓
GitHub Actions Workflow Starts
  ↓
Claude Code Agent Quality Checks
  ↓
Automated Fixes Committed (if needed)
  ↓
CI/CD Build (Astro static generation)
  ↓
Staging Deployment (preview URL)
  ↓
Client Approval
  ↓
Production Deployment (manual merge or automated)
```

---

## Setup Procedure

### Step 1: Install Sveltia CMS Files

**Location:** `sites/<client-name>/public/admin/`

**Create `index.html`:**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
  </head>
  <body>
    <!-- Sveltia CMS -->
    <script src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js" type="module"></script>
  </body>
</html>
```

**File:** `sites/<client-name>/public/admin/index.html`

---

### Step 2: Configure GitHub OAuth

**Backend Options:**
1. **GitHub OAuth App** (recommended for production)
2. **Netlify/Vercel OAuth** (if using managed hosting)
3. **Local development:** Use GitHub personal access token

**GitHub OAuth App Setup:**
1. Go to: https://github.com/settings/developers
2. Create new OAuth App
3. Set Authorization callback URL:
   - Production: `https://client-site.com/admin/`
   - Local: `http://localhost:4321/admin/`
4. Copy Client ID and Client Secret
5. Configure in CMS config (next step)

---

### Step 3: Create CMS Configuration

**Location:** `sites/<client-name>/public/admin/config.yml`

**Basic Configuration:**
```yaml
# Sveltia CMS Configuration
backend:
  name: github
  repo: your-org/starter-websites
  branch: main
  base_url: https://your-oauth-provider.com  # OAuth endpoint
  site_domain: client-site.com

# Local development backend
local_backend: true  # Enable for local testing

# Media files
media_folder: "sites/<client-name>/src/assets/images"
public_folder: "/src/assets/images"

# Collections (content types)
collections:
  # Pages collection
  - name: "pages"
    label: "Pages"
    folder: "sites/<client-name>/src/content/pages"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Description", name: "description", widget: "text"}
      - {label: "Publish Date", name: "publishDate", widget: "datetime"}
      - {label: "Body", name: "body", widget: "markdown"}

  # Blog posts collection
  - name: "blog"
    label: "Blog Posts"
    folder: "sites/<client-name>/src/content/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Description", name: "description", widget: "text"}
      - {label: "Publish Date", name: "publishDate", widget: "datetime"}
      - {label: "Author", name: "author", widget: "string"}
      - {label: "Featured Image", name: "image", widget: "image", required: false}
      - {label: "Tags", name: "tags", widget: "list", required: false}
      - {label: "Body", name: "body", widget: "markdown"}
```

**File:** `sites/<client-name>/public/admin/config.yml`

---

### Step 4: Configure Astro Content Collections

**Location:** `sites/<client-name>/src/content/config.ts`

**Define Type-Safe Schemas:**
```typescript
import { defineCollection, z } from 'astro:content';

// Pages collection schema
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
  }),
});

// Blog collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'pages': pagesCollection,
  'blog': blogCollection,
};
```

**File:** `sites/<client-name>/src/content/config.ts`

---

### Step 5: Create Content Directories

**Structure:**
```bash
sites/<client-name>/src/content/
├── pages/
│   └── .gitkeep  # Ensure directory is tracked
└── blog/
    └── .gitkeep
```

**Commands:**
```bash
mkdir -p sites/<client-name>/src/content/pages
mkdir -p sites/<client-name>/src/content/blog
touch sites/<client-name>/src/content/pages/.gitkeep
touch sites/<client-name>/src/content/blog/.gitkeep
```

---

### Step 6: Create Initial Content

**Example Page:** `sites/<client-name>/src/content/pages/home.md`

```markdown
---
title: "Welcome to Our Site"
description: "Homepage for client site"
publishDate: 2025-11-08
---

# Welcome

This is the homepage content. Edit via Sveltia CMS at /admin.
```

**Example Blog Post:** `sites/<client-name>/src/content/blog/first-post.md`

```markdown
---
title: "First Blog Post"
description: "Our inaugural blog post"
publishDate: 2025-11-08
author: "Client Name"
tags: ["announcement", "welcome"]
---

# First Post

Welcome to our blog!
```

---

### Step 7: Configure Dynamic Routes

**Location:** `sites/<client-name>/src/pages/blog/[slug].astro`

**Dynamic Blog Post Page:**
```astro
---
import { getCollection } from 'astro:content';
import BlogLayout from '../../layouts/BlogLayout.astro';

export async function getStaticPaths() {
  const blogPosts = await getCollection('blog');
  return blogPosts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();
---

<BlogLayout title={post.data.title} description={post.data.description}>
  <h1>{post.data.title}</h1>
  <p class="meta">
    By {post.data.author} on {post.data.publishDate.toLocaleDateString()}
  </p>
  <Content />
</BlogLayout>
```

---

### Step 8: Test Local CMS Access

**Start Development Server:**
```bash
pnpm dev --filter=<client-name>
```

**Access CMS:**
1. Navigate to: `http://localhost:4321/admin`
2. Authenticate with GitHub
3. Create/edit content
4. Verify content appears in `src/content/` directories

---

### Step 9: Configure Git-Based Workflow

**Enable Auto-Save (Optional):**
```yaml
# In config.yml
publish_mode: editorial_workflow  # Enables draft/review/published workflow

# OR simple mode (direct commits)
publish_mode: simple
```

**Editorial Workflow:**
- Draft → Review → Published
- Creates pull requests for content changes
- Requires approval before merging

**Simple Workflow:**
- Saves commit directly to main branch
- Immediate deployment trigger

---

## Common Content Types

### Navigation Collection
```yaml
- name: "navigation"
  label: "Navigation"
  files:
    - label: "Main Navigation"
      name: "main"
      file: "sites/<client-name>/src/content/navigation/main.json"
      fields:
        - label: "Menu Items"
          name: "items"
          widget: "list"
          fields:
            - {label: "Label", name: "label", widget: "string"}
            - {label: "URL", name: "url", widget: "string"}
```

### Settings Collection
```yaml
- name: "settings"
  label: "Site Settings"
  files:
    - label: "General Settings"
      name: "general"
      file: "sites/<client-name>/src/content/settings/general.json"
      fields:
        - {label: "Site Title", name: "title", widget: "string"}
        - {label: "Site Description", name: "description", widget: "text"}
        - {label: "Contact Email", name: "email", widget: "string"}
```

---

## Troubleshooting

### Issue: "Error: Cannot authenticate with GitHub"
**Solution:**
1. Verify OAuth app credentials in config.yml
2. Check callback URL matches registered URL
3. Ensure backend.repo is correct

### Issue: "Content not appearing in CMS"
**Solution:**
1. Verify collection folder path is correct
2. Check file naming matches slug pattern
3. Ensure frontmatter matches schema in config.ts

### Issue: "Build fails after CMS edit"
**Solution:**
1. Validate frontmatter matches Astro content schema
2. Check for required fields
3. Verify date formats are correct

---

## Usage Examples

### Example 1: Add New Client Site CMS
```bash
# Copy base config from packages/cms-config/
cp packages/cms-config/sveltia-base-config.yml sites/new-client/public/admin/config.yml

# Customize for client
# - Update backend.repo
# - Update collection folder paths
# - Customize fields per client needs
```

### Example 2: Add New Content Type
```yaml
# In config.yml, add new collection
- name: "services"
  label: "Services"
  folder: "sites/<client-name>/src/content/services"
  create: true
  fields:
    - {label: "Service Name", name: "name", widget: "string"}
    - {label: "Price", name: "price", widget: "number"}
    - {label: "Description", name: "description", widget: "markdown"}
```

Then update `src/content/config.ts`:
```typescript
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    price: z.number(),
    description: z.string(),
  }),
});

export const collections = {
  // ... existing
  'services': servicesCollection,
};
```

---

## Related Skills
- `new-client-site-scaffolding` - Overall site setup process
- `astro-component-structure` - Using content in components

---

**Version:** 1.0
**Last Updated:** November 2025
**Trigger Terms:** CMS setup, Sveltia configuration, content collections, GitHub OAuth, content management
