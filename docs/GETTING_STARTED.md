# Getting Started: Building Client Sites

**Everything you need to start building and managing client websites.**

---

## Quick Start (5 Minutes)

### 1. Create a New Client Site

```bash
# From project root
pnpm create-client
```

**You'll be prompted for:**
- Client name (lowercase, hyphenated, e.g., "acme-law-firm")
- Domain (e.g., "acmelawfirm.com")
- Description (brief business description)
- Brand color (hex code, e.g., "#1a202c")

**Script creates:**
- `sites/acme-law-firm/` directory
- Configured `package.json`, `astro.config.mjs`, `tailwind.config.cjs`
- Brand guidelines document
- Sveltia CMS setup
- All dependencies installed

**Time:** < 5 minutes

---

### 2. Start Development Server

```bash
# Navigate to client site
cd sites/acme-law-firm

# Start dev server
pnpm dev
```

**Site accessible at:** `http://localhost:4321`

**To run multiple sites simultaneously:**
```bash
# From project root - starts all sites on different ports
pnpm dev
```

Sites will run on:
- `dws-web-ai`: http://localhost:4321
- `acme-law-firm`: http://localhost:4322
- `test-client-alpha`: http://localhost:4323
- etc.

---

### 3. Access the CMS (Content Editor)

**URL:** `http://localhost:4321/admin`

**Login:**
- Development: No login required (local only)
- Production: GitHub OAuth authentication

**What you can edit:**
- Homepage content (hero section, features, testimonials)
- About page content
- Services page content
- Blog posts (create, edit, delete)
- Navigation menu items
- Contact page content

---

## Project Structure (Per Client Site)

```
sites/acme-law-firm/
├── src/
│   ├── pages/                    # Page routes (file-based routing)
│   │   ├── index.astro           # Homepage
│   │   ├── about.astro           # About page
│   │   ├── services.astro        # Services page
│   │   └── blog/
│   │       ├── index.astro       # Blog listing
│   │       └── [slug].astro      # Individual blog post
│   │
│   ├── content/                  # CMS-editable content (markdown/JSON)
│   │   ├── pages/                # Page content
│   │   │   ├── home.md           # Homepage content
│   │   │   ├── about.md          # About page content
│   │   │   ├── services.md       # Services page content
│   │   │   └── contact.md        # Contact page content
│   │   │
│   │   ├── blog/                 # Blog posts
│   │   │   ├── 2025-11-01-post-title.md
│   │   │   └── 2025-11-02-another-post.md
│   │   │
│   │   └── config/               # Site configuration
│   │       └── navigation.json   # Navigation menu
│   │
│   ├── layouts/
│   │   └── MainLayout.astro      # Site-wide layout
│   │
│   └── content/config.ts         # Content schema definitions
│
├── public/                       # Static files (images, favicon, etc.)
│   ├── admin/                    # Sveltia CMS
│   │   ├── index.html            # CMS entry point
│   │   └── config.yml            # CMS configuration
│   ├── images/
│   └── favicon.svg
│
├── astro.config.mjs              # Astro configuration
├── tailwind.config.cjs           # Tailwind CSS (brand colors)
├── package.json                  # Dependencies
├── BRAND_GUIDELINES.md           # Client brand info
└── README.md                     # Site-specific docs
```

---

## Accessing Your Sites

### Development (Local)

**Main Site:**
```bash
cd sites/acme-law-firm
pnpm dev
```
- Site: http://localhost:4321
- CMS: http://localhost:4321/admin

**All Sites (Multi-Site):**
```bash
# From project root
pnpm dev
```
Each site runs on its own port (4321, 4322, 4323, etc.)

---

### Production (After Deployment)

**Option 1: Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# From site directory
cd sites/acme-law-firm
vercel

# Follow prompts to deploy
```

**Site URLs:**
- Production: https://acme-law-firm.vercel.app
- Custom domain: https://acmelawfirm.com (after DNS setup)
- CMS: https://acmelawfirm.com/admin

**Option 2: Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# From site directory
cd sites/acme-law-firm
netlify deploy

# For production
netlify deploy --prod
```

**Option 3: Your Own Server**
```bash
# Build site
cd sites/acme-law-firm
pnpm build

# Copy dist/ folder to your server
# dist/ contains static HTML/CSS/JS files
rsync -avz dist/ user@server:/var/www/acmelawfirm.com/
```

Serve with Nginx/Apache (dist/ folder contains everything).

---

## Accessing the CMS Backend

### Development Setup (First Time)

**1. Navigate to CMS:**
```
http://localhost:4321/admin
```

**2. Development Mode:**
- No login required in local development
- Changes saved directly to Git repository
- Content files appear in `src/content/`

**3. Make Changes:**
- Edit homepage content
- Create blog posts
- Update navigation
- Changes auto-save to local Git

**4. Commit Changes:**
```bash
git add .
git commit -m "Update homepage content"
git push
```

---

### Production Setup (After Deployment)

**1. Configure GitHub OAuth:**

Create GitHub OAuth App:
- Go to: https://github.com/settings/developers
- Click "New OAuth App"
- Application name: "Acme Law Firm CMS"
- Homepage URL: `https://acmelawfirm.com`
- Authorization callback URL: `https://api.netlify.com/auth/done` (for Netlify)
  - OR `https://acmelawfirm.com/api/auth/callback` (for custom server)

**2. Configure Sveltia CMS:**

Edit `public/admin/config.yml`:
```yaml
backend:
  name: git-gateway
  branch: main

# For GitHub direct (alternative)
backend:
  name: github
  repo: your-username/your-repo
  branch: main
```

**3. Enable Git Gateway** (if using Netlify):
- Netlify dashboard → Site settings → Identity
- Enable Identity
- Enable Git Gateway
- Invite team members

**4. Access Production CMS:**
```
https://acmelawfirm.com/admin
```

**Login with:**
- GitHub account (authenticated via OAuth)
- Only authorized users can edit

**5. Content Publishing Workflow:**
```
Client edits content in CMS
    ↓
Sveltia commits to Git (via GitHub API)
    ↓
Vercel/Netlify detects commit
    ↓
Auto-deploys updated site
    ↓
Changes live in ~60 seconds
```

---

## What's Editable in the CMS?

### Currently Editable (Out of the Box)

**1. Homepage Content** (`src/content/pages/home.md`)
```yaml
---
title: "Welcome to Acme Law Firm"
description: "Estate planning attorneys in Seattle"
hero:
  heading: "Expert Estate Planning"
  subheading: "Protecting your family's future"
  ctaText: "Schedule Consultation"
  ctaLink: "/contact"
features:
  - title: "Wills & Trusts"
    description: "Comprehensive estate planning"
  - title: "Probate"
    description: "Efficient probate administration"
---

Additional homepage content here...
```

**Editable Fields:**
- Hero heading/subheading
- CTA button text and link
- Features list (unlimited items)
- Main content body (markdown)

---

**2. About Page** (`src/content/pages/about.md`)
```yaml
---
title: "About Us"
description: "Learn about our team"
teamMembers:
  - name: "John Doe"
    title: "Senior Attorney"
    bio: "20 years of experience..."
    image: "/images/team/john-doe.jpg"
---

Company history and mission content here...
```

**Editable Fields:**
- Page title and description
- Team members (name, title, bio, photo)
- Company story (markdown)
- Mission/values

---

**3. Services Page** (`src/content/pages/services.md`)
```yaml
---
title: "Our Services"
description: "Legal services we offer"
services:
  - name: "Estate Planning"
    description: "Comprehensive planning"
    icon: "📋"
    features:
      - "Wills and testaments"
      - "Living trusts"
      - "Tax planning"
  - name: "Probate"
    description: "Probate administration"
    icon: "⚖️"
    features:
      - "Estate administration"
      - "Court representation"
---
```

**Editable Fields:**
- Services list (unlimited)
- Service name, description, icon
- Feature bullets per service

---

**4. Blog Posts** (`src/content/blog/*.md`)
```yaml
---
title: "Living Trust vs Will: Which Do You Need?"
description: "Compare living trusts and wills"
author: "John Doe"
publishDate: 2025-11-05
image: "/images/blog/living-trust-vs-will.jpg"
imageAlt: "Estate planning documents"
tags: ["estate planning", "trusts", "wills"]
featured: true
---

Blog post content here in markdown...

## Section Heading
Paragraph text...

- Bullet point 1
- Bullet point 2
```

**Editable Fields:**
- Title, description, author
- Publish date
- Featured image and alt text
- Tags (for categorization)
- Featured flag (show on homepage)
- Full markdown content (headings, paragraphs, lists, links, images)

---

**5. Navigation Menu** (`src/content/config/navigation.json`)
```json
{
  "mainNav": [
    { "label": "Home", "url": "/" },
    { "label": "About", "url": "/about" },
    { "label": "Services", "url": "/services" },
    { "label": "Blog", "url": "/blog" },
    { "label": "Contact", "url": "/contact" }
  ],
  "footerNav": [
    { "label": "Privacy Policy", "url": "/privacy" },
    { "label": "Terms of Service", "url": "/terms" }
  ]
}
```

**Editable Fields:**
- Main navigation items
- Footer navigation items
- Label text and URLs

---

### What You Can Make Editable (Easy Additions)

**1. Contact Form Settings**
```yaml
# src/content/config/contact.json
{
  "email": "info@acmelawfirm.com",
  "phone": "(206) 555-0100",
  "address": {
    "street": "123 Main St",
    "city": "Seattle",
    "state": "WA",
    "zip": "98101"
  },
  "hours": {
    "monday": "9am - 5pm",
    "tuesday": "9am - 5pm",
    "wednesday": "9am - 5pm",
    "thursday": "9am - 5pm",
    "friday": "9am - 5pm"
  }
}
```

**2. Homepage Testimonials**
```yaml
# src/content/testimonials/*.md
---
name: "Jane Smith"
role: "Client"
rating: 5
date: 2025-11-01
---

"Acme Law Firm helped us with our estate planning. Highly recommend!"
```

**3. Service Areas / Locations**
```yaml
# src/content/locations/*.md
---
name: "Seattle Office"
address: "123 Main St, Seattle, WA 98101"
phone: "(206) 555-0100"
hours: "Monday-Friday, 9am-5pm"
mapUrl: "https://maps.google.com/..."
---
```

**4. FAQ Section**
```yaml
# src/content/faq/*.md
---
question: "How much does estate planning cost?"
category: "Pricing"
order: 1
---

Estate planning costs vary based on complexity...
```

**5. Team Members (Separate from About Page)**
```yaml
# src/content/team/*.md
---
name: "John Doe"
title: "Senior Attorney"
email: "john@acmelawfirm.com"
phone: "(206) 555-0101"
bio: "20 years of experience..."
image: "/images/team/john-doe.jpg"
education:
  - "JD, Harvard Law School"
  - "BA, University of Washington"
specialties:
  - "Estate Planning"
  - "Trusts"
---
```

**6. Site-Wide Settings**
```yaml
# src/content/config/site.json
{
  "siteName": "Acme Law Firm",
  "tagline": "Estate Planning Attorneys in Seattle",
  "logo": "/images/logo.svg",
  "favicon": "/favicon.svg",
  "social": {
    "facebook": "https://facebook.com/acmelawfirm",
    "twitter": "https://twitter.com/acmelawfirm",
    "linkedin": "https://linkedin.com/company/acmelawfirm"
  },
  "googleAnalytics": "GA-XXXXXXXXX",
  "contactEmail": "info@acmelawfirm.com",
  "contactPhone": "(206) 555-0100"
}
```

---

## Adding New Editable Content Types

### Step 1: Define Content Schema

Edit `src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';

// Example: Add Testimonials collection
const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    rating: z.number().min(1).max(5),
    date: z.date(),
    image: z.string().optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
  blog: blogCollection,
  testimonials: testimonialsCollection, // Add new collection
};
```

---

### Step 2: Configure CMS

Edit `public/admin/config.yml`:

```yaml
collections:
  - name: "testimonials"
    label: "Testimonials"
    folder: "src/content/testimonials"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - { label: "Name", name: "name", widget: "string" }
      - { label: "Role", name: "role", widget: "string" }
      - { label: "Rating", name: "rating", widget: "number", min: 1, max: 5 }
      - { label: "Date", name: "date", widget: "datetime" }
      - { label: "Image", name: "image", widget: "image", required: false }
      - { label: "Testimonial", name: "body", widget: "markdown" }
```

---

### Step 3: Create Collection Folder

```bash
mkdir src/content/testimonials
```

---

### Step 4: Use in Pages

```astro
---
// src/pages/index.astro
import { getCollection } from 'astro:content';

const testimonials = await getCollection('testimonials');
---

<section>
  <h2>Client Testimonials</h2>
  {testimonials.map((testimonial) => (
    <div>
      <p>{testimonial.data.name} - {testimonial.data.role}</p>
      <p>Rating: {testimonial.data.rating}/5</p>
      <div set:html={testimonial.body} />
    </div>
  ))}
</section>
```

Now clients can add/edit testimonials in the CMS at `/admin`!

---

## Common Tasks

### Task 1: Update Brand Colors

**Edit:** `sites/acme-law-firm/tailwind.config.cjs`

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',    // Change this
        secondary: '#2d3748',  // Change this
        accent: '#3182ce',     // Add custom colors
      },
    },
  },
};
```

**Use in components:**
```html
<button class="bg-primary text-white">Click Me</button>
```

---

### Task 2: Add a New Page

**1. Create page file:**
```bash
# Create new page
touch sites/acme-law-firm/src/pages/pricing.astro
```

**2. Add content:**
```astro
---
// src/pages/pricing.astro
import MainLayout from '../layouts/MainLayout.astro';
import { getEntry } from 'astro:content';

const pricingContent = await getEntry('pages', 'pricing');
---

<MainLayout title="Pricing">
  <h1>{pricingContent.data.title}</h1>
  <div set:html={pricingContent.body} />
</MainLayout>
```

**3. Create content file:**
```bash
# Create CMS-editable content
touch sites/acme-law-firm/src/content/pages/pricing.md
```

```markdown
---
title: "Pricing"
description: "Our pricing structure"
---

## Estate Planning Packages

### Basic Package - $1,500
- Simple will
- Healthcare directive

### Comprehensive Package - $3,500
- Living trust
- Pour-over will
- Healthcare directive
- Power of attorney
```

**4. Add to navigation:**
Edit `src/content/config/navigation.json` via CMS or directly.

---

### Task 3: Customize Homepage Layout

**Edit:** `sites/acme-law-firm/src/pages/index.astro`

```astro
---
import MainLayout from '../layouts/MainLayout.astro';
import { getEntry } from 'astro:content';
import Hero from '@workspace/ui-components/Hero.astro';
import Card from '@workspace/ui-components/Card.astro';

const homeContent = await getEntry('pages', 'home');
const { hero, features } = homeContent.data;
---

<MainLayout title={homeContent.data.title}>
  <!-- Hero Section -->
  <Hero
    heading={hero.heading}
    subheading={hero.subheading}
    ctaText={hero.ctaText}
    ctaLink={hero.ctaLink}
  />

  <!-- Features Section -->
  <section class="py-12">
    <div class="grid grid-cols-3 gap-6">
      {features.map((feature) => (
        <Card
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  </section>

  <!-- Content Body -->
  <div set:html={homeContent.body} />
</MainLayout>
```

---

### Task 4: Add Custom Fonts

**1. Add font files to `public/fonts/`**

**2. Update `src/layouts/MainLayout.astro`:**
```astro
<style is:global>
  @font-face {
    font-family: 'CustomFont';
    src: url('/fonts/custom-font.woff2') format('woff2');
  }

  body {
    font-family: 'CustomFont', sans-serif;
  }
</style>
```

**3. Or use Google Fonts:**
```astro
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>

<style is:global>
  body {
    font-family: 'Inter', sans-serif;
  }
</style>
```

---

## Building and Deploying

### Build for Production

```bash
# Single site
cd sites/acme-law-firm
pnpm build

# All sites
pnpm -r build
```

**Output:** `dist/` folder contains static HTML/CSS/JS

---

### Deploy to Vercel

**First Time Setup:**
```bash
# Install Vercel CLI
npm i -g vercel

# From site directory
cd sites/acme-law-firm

# Login to Vercel
vercel login

# Deploy
vercel
```

**Subsequent Deploys:**
```bash
# Preview deployment
vercel

# Production deployment
vercel --prod
```

**Custom Domain:**
- Vercel dashboard → Project → Settings → Domains
- Add custom domain: `acmelawfirm.com`
- Update DNS records as instructed

---

### Deploy to Netlify

**First Time Setup:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# From site directory
cd sites/acme-law-firm

# Login to Netlify
netlify login

# Initialize site
netlify init
```

**Subsequent Deploys:**
```bash
# Preview deployment
netlify deploy

# Production deployment
netlify deploy --prod
```

---

### Deploy to Your Server

**1. Build locally:**
```bash
cd sites/acme-law-firm
pnpm build
```

**2. Upload to server:**
```bash
# Via rsync
rsync -avz dist/ user@server:/var/www/acmelawfirm.com/

# Or via FTP/SFTP
# Upload entire dist/ folder to web root
```

**3. Configure web server:**

**Nginx:**
```nginx
server {
    listen 80;
    server_name acmelawfirm.com www.acmelawfirm.com;
    root /var/www/acmelawfirm.com;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Apache (.htaccess):**
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## Using Claude Code Agents

### Agent Invocation (Manual)

You have 13 agents available. Invoke them manually:

**SEO Audit:**
```
@seo-optimizer "Audit acme-law-firm homepage for SEO compliance"
```

**Accessibility Check:**
```
@accessibility-auditor "Check acme-law-firm contact form for WCAG 2.1 AA compliance"
```

**Content Quality:**
```
@content-optimizer "Audit acme-law-firm blog posts for content quality"
```

**AI Readiness:**
```
@ai-readiness-auditor "Check if acme-law-firm is optimized for AI crawlers"
```

**Keyword Research:**
```
@keyword-researcher "Research keywords for Seattle estate planning law firm"
```

**Full Project Orchestration:**
```
@website-project-orchestrator "Run quality audit on acme-law-firm before client demo"
```

**Multi-Site Deployment:**
```
@multi-site-deployment-orchestrator "I updated the Header component. Which sites need redeployment?"
```

---

## Troubleshooting

### Issue: CMS won't load at /admin

**Solution:**
```bash
# Verify files exist
ls public/admin/index.html
ls public/admin/config.yml

# Restart dev server
pnpm dev
```

### Issue: Content changes not showing

**Solution:**
```bash
# Rebuild site
pnpm build

# Or restart dev server
pnpm dev
```

### Issue: Build fails with TypeScript errors

**Solution:**
```bash
# Check for errors
pnpm type-check

# Fix errors in indicated files
# Then rebuild
pnpm build
```

### Issue: Images not loading

**Solution:**
- Ensure images are in `public/images/` folder
- Reference with `/images/filename.jpg` (leading slash)
- Check image file extensions match

### Issue: Styles not applying

**Solution:**
```bash
# Rebuild Tailwind
pnpm dev

# Check tailwind.config.cjs for correct paths
# Verify class names are correct
```

---

## Next Steps

**1. Test Your First Site:**
```bash
# Start development
cd sites/dws-web-ai
pnpm dev

# Open browser
open http://localhost:4321

# Open CMS
open http://localhost:4321/admin
```

**2. Create Your First Client:**
```bash
pnpm create-client
# Follow prompts
```

**3. Deploy to Production:**
- Choose platform (Vercel recommended)
- Follow deployment steps above
- Configure custom domain
- Set up CMS authentication

**4. Start Building!**
- Edit content in CMS
- Customize layouts
- Add new pages
- Deploy updates

---

## Resources

**Documentation:**
- [Astro Documentation](https://docs.astro.build/)
- [Sveltia CMS Documentation](https://github.com/sveltia/sveltia-cms)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

**Project Docs:**
- `docs/CLAUDE.md` - Project constitution
- `docs/TESTING.md` - Testing guide
- `docs/PHASE_4_PLAN.md` - Advanced features
- `docs/AGENT_GUIDE.md` - How to use agents

**Need Help?**
- Review `docs/TROUBLESHOOTING.md`
- Check agent documentation in `.claude/agents/`
- Invoke `@website-project-orchestrator` for guidance

---

**Ready to build! 🚀**

Start with `pnpm create-client` to create your first client site.
