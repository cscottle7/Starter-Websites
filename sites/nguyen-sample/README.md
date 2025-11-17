# Dr. Thomas Nguyen ENT Website

Professional ENT specialist website for Dr. Thomas Nguyen, featuring comprehensive information about rhinitis treatment, sleep apnea solutions, and general ENT care.

## Quick Start

```bash
# From repository root
pnpm install

# Start development server
pnpm dev --filter=nguyen-sample

# Or from this directory
cd sites/nguyen-sample
pnpm dev
```

Visit `http://localhost:4321` to view the site.

## Content Management

### Sveltia CMS Access

1. Start the development server: `pnpm dev`
2. Navigate to `http://localhost:4321/admin`
3. Login with your GitHub credentials
4. Edit pages, blog posts, and site configuration

### Local Development

When `local_backend: true` is enabled in `/public/admin/config.yml`, you can edit content locally without GitHub authentication.

## Project Structure

```
sites/nguyen-sample/
├── public/
│   ├── admin/               # Sveltia CMS
│   │   ├── index.html       # CMS interface
│   │   └── config.yml       # CMS configuration
│   └── images/              # Uploaded media
├── src/
│   ├── content/             # CMS-editable content
│   │   ├── config.ts        # Content schemas
│   │   ├── pages/           # Page content
│   │   └── blog/            # Blog posts
│   ├── layouts/
│   │   └── MainLayout.astro # Site layout
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   └── admin.astro      # CMS redirect
│   └── components/          # Custom components
├── astro.config.mjs         # Astro configuration
├── tailwind.config.cjs      # Tailwind config (brand colors)
├── package.json
├── tsconfig.json
└── BRAND_GUIDELINES.md      # Brand identity documentation
```

## Brand Identity

**Primary Colors:**
- Primary: `#0f4c75` (Deep Blue) - Medical professionalism
- Secondary: `#3282b8` (Light Blue) - Trust and clarity
- Accent: `#1b6ca8` (Medium Blue) - Engagement

**Typography:**
- Headings: Merriweather (Serif)
- Body: Lato (Sans-serif)

See [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) for complete brand specifications.

## Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint on JavaScript/TypeScript files |
| `pnpm type-check` | Run TypeScript type checking |

## Deployment

This site is configured for static deployment. Build output is in `dist/` directory.

### Build Command
```bash
pnpm build
```

### Deploy Platforms
- **Vercel/Netlify:** Auto-detect Astro, zero configuration
- **Your Server:** Copy `dist/` contents to web server root
- **GitHub Pages:** Use GitHub Actions workflow

## Content Guidelines

### Page Creation
1. Navigate to `/admin` in your browser
2. Select "Pages" collection
3. Click "New Pages"
4. Fill in required fields:
   - Title (SEO important)
   - Description (meta description)
   - Publish Date
   - Body content (Markdown)

### Blog Post Creation
1. Navigate to `/admin`
2. Select "Blog Posts" collection
3. Click "New Blog Posts"
4. Required fields:
   - Title
   - Description
   - Author (Dr. Thomas Nguyen)
   - Publish Date
   - Featured Image
   - Image Alt Text (accessibility required)
   - Body content (Markdown)

### SEO Best Practices
- Page titles: 50-60 characters
- Meta descriptions: 150-160 characters
- Image alt text: Descriptive, specific
- Heading hierarchy: Single H1 per page
- Internal linking: Link to related services/articles

## Technical Details

**Framework:** Astro 5.0 (Static Site Generation)
**Styling:** Tailwind CSS 3.4
**CMS:** Sveltia CMS (Git-based, zero cost)
**Type Safety:** TypeScript (strict mode)
**Content Collections:** Astro Content Collections API

## Shared Packages

This site uses shared workspace packages:

- `@workspace/ui-components` - Reusable Astro components
- `@workspace/seo-utils` - Schema markup and SEO utilities
- `@workspace/cms-config` - Base CMS configurations

## Support & Documentation

- [Astro Documentation](https://docs.astro.build)
- [Sveltia CMS Documentation](https://github.com/sveltia/sveltia-cms)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Project Constitution: See root `CLAUDE.md`

## License

© 2025 Dr. Thomas Nguyen ENT. All rights reserved.
