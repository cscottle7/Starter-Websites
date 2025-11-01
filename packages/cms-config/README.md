# @workspace/cms-config

Shared Sveltia CMS configuration templates for rapid client site setup.

## Overview

This package provides reusable Sveltia CMS configurations and content schemas that can be extended per client site. Sveltia CMS is a Git-based headless CMS that allows non-technical clients to edit content through a visual interface while maintaining full version control.

## Features

- Base Sveltia CMS configuration template
- Reusable content schemas (pages, blog posts, navigation)
- Pre-configured for GitHub OAuth authentication
- Editorial workflow support for content review
- Accessibility and SEO validation in content fields

## Quick Start

### 1. Copy Base Configuration

Copy the base config to your client site:

```bash
cp packages/cms-config/sveltia-base-config.yml sites/client-name/public/admin/config.yml
```

### 2. Customize for Client

Edit `sites/client-name/public/admin/config.yml`:

```yaml
backend:
  repo: your-org/starter-template  # Update with your repo
  branch: main

media_folder: "src/assets/images"
public_folder: "/images"
```

### 3. Setup Admin Interface

Create `sites/client-name/public/admin/index.html`:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
  </head>
  <body>
    <script src="https://unpkg.com/@sveltia/cms@latest/dist/sveltia-cms.js" type="module"></script>
  </body>
</html>
```

### 4. Access CMS

Navigate to `http://localhost:4321/admin` (or your site URL + `/admin`) and authenticate with GitHub.

## Content Schemas

### Pages Schema

For general website pages (About, Contact, Services, etc.):

```yaml
- name: "pages"
  label: "Pages"
  folder: "src/content/pages"
  create: true
  fields:
    - { label: "Title", name: "title", widget: "string" }
    - { label: "SEO Description", name: "description", widget: "text" }
    - { label: "Publish Date", name: "publishDate", widget: "datetime" }
    - { label: "Body", name: "body", widget: "markdown" }
```

**Features:**
- SEO description field with length validation (50-160 chars)
- Featured image support
- Markdown editor for content
- Optional noindex flag

### Blog Posts Schema

For blog/news articles:

```yaml
- name: "blog"
  label: "Blog Posts"
  folder: "src/content/blog"
  create: true
  fields:
    - { label: "Title", name: "title", widget: "string" }
    - { label: "Author", name: "author", widget: "string" }
    - { label: "Publish Date", name: "publishDate", widget: "datetime" }
    - { label: "Featured Image", name: "image", widget: "image", required: true }
    - { label: "Image Alt Text", name: "imageAlt", widget: "string" }
    - { label: "Tags", name: "tags", widget: "list" }
    - { label: "Body", name: "body", widget: "markdown" }
```

**Features:**
- Required featured image with alt text
- Author attribution
- Tags/categories support
- Slug includes date: `2025-10-31-post-title`

### Navigation Schema

For site navigation menus:

```yaml
- name: "config"
  label: "Site Configuration"
  files:
    - name: "navigation"
      label: "Navigation"
      file: "src/content/config/navigation.json"
      fields:
        - label: "Main Navigation"
          name: "mainNav"
          widget: "list"
          fields:
            - { label: "Label", name: "label", widget: "string" }
            - { label: "URL", name: "url", widget: "string" }
```

**Features:**
- Main navigation menu items
- Footer links
- JSON-based configuration

## Authentication Setup

### GitHub OAuth via Netlify

1. **Create OAuth App in GitHub:**
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - New OAuth App
   - **Homepage URL:** `https://your-site.netlify.app`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
   - Note Client ID and generate Client Secret

2. **Configure Netlify:**
   - Netlify site settings → Access control → OAuth
   - Install Provider: GitHub
   - Paste Client ID and Client Secret

3. **Update CMS Config:**
   ```yaml
   backend:
     name: github
     repo: your-org/repo-name
     branch: main
     base_url: https://api.netlify.com
     auth_endpoint: auth
   ```

### Local Development (Git Gateway)

For local testing without OAuth:

```yaml
backend:
  name: git-gateway

local_backend: true
```

Run local proxy:

```bash
npx @sveltia/cms-auth local
```

## Customization

### Adding Custom Fields

Extend schemas with client-specific fields:

```yaml
collections:
  - name: "pages"
    label: "Pages"
    folder: "src/content/pages"
    fields:
      # Standard fields...
      - { label: "Title", name: "title", widget: "string" }

      # Custom client field
      - label: "Call to Action"
        name: "cta"
        widget: "object"
        fields:
          - { label: "Text", name: "text", widget: "string" }
          - { label: "URL", name: "url", widget: "string" }
```

### Widget Types

Sveltia CMS supports various widget types:

- `string` - Single-line text
- `text` - Multi-line text
- `markdown` - Markdown editor with preview
- `boolean` - Checkbox
- `datetime` - Date/time picker
- `image` - Image uploader
- `file` - File uploader
- `list` - List of items
- `object` - Nested fields
- `relation` - Reference to other content
- `select` - Dropdown selection

### Validation

Add field validation:

```yaml
- label: "SEO Description"
  name: "description"
  widget: "text"
  pattern: ['^.{50,160}$', "Description must be between 50-160 characters"]
  required: true
```

## Content Workflow

### Editorial Workflow

Enable content review before publishing:

```yaml
publish_mode: editorial_workflow
```

**Workflow States:**
1. **Draft:** Content being edited
2. **In Review:** Ready for review
3. **Ready:** Approved and ready to publish

Content moves through states in CMS UI, with each state creating a PR in GitHub.

### Direct Publishing

For simple workflows, disable editorial workflow:

```yaml
publish_mode: simple
```

Content saves directly to the main branch.

## Best Practices

1. **SEO Validation:** Always include `description` field with length validation
2. **Accessibility:** Require `imageAlt` field for all images
3. **Consistent Slugs:** Use slug templates for predictable URLs
4. **Media Organization:** Configure `media_folder` per content type if needed
5. **Field Hints:** Add `hint` to fields for editor guidance

## Astro Integration

Content from Sveltia CMS is stored as markdown/JSON files that Astro Content Collections can read:

```typescript
// sites/client-name/src/content/config.ts
import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
};
```

Use in Astro pages:

```astro
---
import { getCollection } from 'astro:content';

const pages = await getCollection('pages');
---

{pages.map(page => (
  <h2>{page.data.title}</h2>
))}
```

## Migration from Decap CMS

Sveltia CMS is a drop-in replacement for Decap CMS (formerly Netlify CMS):

1. Change script source in `admin/index.html`:
   ```html
   <!-- Old: Decap CMS -->
   <script src="https://unpkg.com/decap-cms@latest/dist/decap-cms.js"></script>

   <!-- New: Sveltia CMS -->
   <script src="https://unpkg.com/@sveltia/cms@latest/dist/sveltia-cms.js" type="module"></script>
   ```

2. Keep existing `config.yml` - no changes needed!

3. Enjoy 265+ bug fixes and better UX from Sveltia

## Troubleshooting

**CMS not loading:**
- Check `public/admin/index.html` exists
- Verify script URL is correct
- Check browser console for errors

**Authentication failing:**
- Verify GitHub OAuth app callback URL
- Check Netlify OAuth provider configuration
- Ensure `base_url` and `auth_endpoint` correct in config.yml

**Content not saving:**
- Check GitHub repo permissions
- Verify branch name in config.yml matches actual branch
- Check for merge conflicts in editorial workflow

## Resources

- [Sveltia CMS Documentation](https://github.com/sveltia/sveltia-cms)
- [Sveltia CMS vs. Decap CMS](https://github.com/sveltia/sveltia-cms#comparison-with-decap-cms)
- [Content Modeling Guide](https://decapcms.org/docs/configuration-options/)
- [Widget Reference](https://decapcms.org/docs/widgets/)
