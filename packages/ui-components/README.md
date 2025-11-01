# @workspace/ui-components

Shared Astro component library for the multi-site website development system.

## Installation

This package is designed to be used within the Nx monorepo workspace. It's automatically available to all sites through TypeScript path aliases.

## Usage

Import components in your Astro pages:

```astro
---
import { BaseLayout, Hero, Card, Button } from '@workspace/ui-components';
---

<BaseLayout title="My Page" description="Page description">
  <Hero
    headline="Welcome"
    subheadline="Build amazing sites"
    ctaText="Get Started"
    ctaUrl="/contact"
  />

  <Card
    title="Feature 1"
    description="Description of feature"
    image="/images/feature.jpg"
    imageAlt="Feature illustration"
    link="/features"
  />

  <Button variant="primary" href="/contact">
    Contact Us
  </Button>
</BaseLayout>
```

## Component Catalog

### Layout Components

#### BaseLayout
Base HTML structure for all pages with SEO meta tags.

**Props:**
- `title` (string, required) - Page title
- `description` (string, required) - SEO meta description
- `canonicalUrl` (string, optional) - Canonical URL
- `ogImage` (string, optional) - Open Graph image URL
- `noindex` (boolean, optional) - Disable search engine indexing

#### Header
Site header with logo and navigation.

**Props:**
- `siteName` (string, required) - Site name/logo text
- `logoUrl` (string, optional) - Logo link URL (default: '/')

#### Footer
Site footer with copyright and links.

**Props:**
- `copyright` (string, required) - Copyright text (use {{year}} for current year)

### Content Components

#### Hero
Hero section with headline, subheadline, and call-to-action.

**Props:**
- `headline` (string, required) - Main headline text
- `subheadline` (string, optional) - Subheadline text
- `ctaText` (string, optional) - CTA button text
- `ctaUrl` (string, optional) - CTA button URL
- `backgroundImage` (string, optional) - Background image URL

#### Card
Content card with image, title, description, and optional link.

**Props:**
- `title` (string, required) - Card title
- `description` (string, required) - Card description
- `image` (string, optional) - Image URL
- `imageAlt` (string, optional) - Image alt text
- `link` (string, optional) - Card link URL

#### Section
Content section wrapper with container and spacing.

**Props:**
- `class` (string, optional) - Additional CSS classes
- `backgroundColor` (string, optional) - Section background color

#### Container
Centered content container with max-width.

**Props:**
- `class` (string, optional) - Additional CSS classes
- `maxWidth` ('sm' | 'md' | 'lg' | 'xl' | 'full', optional) - Maximum width (default: 'lg')

### UI Elements

#### Button
Styled button with variants (primary, secondary, outline).

**Props:**
- `variant` ('primary' | 'secondary' | 'outline', optional) - Button style (default: 'primary')
- `type` ('button' | 'submit' | 'reset', optional) - Button type (default: 'button')
- `href` (string, optional) - If provided, renders as link instead of button
- `class` (string, optional) - Additional CSS classes

#### Navigation
Responsive navigation menu.

**Usage:**
```astro
<Navigation>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</Navigation>
```

## Design Tokens

Components use a consistent design system:

- **Colors:**
  - Primary: `#3b82f6` (blue)
  - Secondary: `#6b7280` (gray)
  - Dark: `#111827`
  - Light: `#f9fafb`

- **Spacing:**
  - Small: `1rem`
  - Medium: `2rem`
  - Large: `4rem`

- **Breakpoints:**
  - Mobile: `max-width: 768px`
  - Tablet: `768px - 1024px`
  - Desktop: `> 1024px`

## Customization

To customize components for a specific client site:

1. Override design tokens in the client's `tailwind.config.cjs`
2. Extend components in `sites/client-name/src/components/`
3. Use the `class` prop to add additional styles

## Development

```bash
# Lint components
nx lint ui-components

# Type check
nx type-check ui-components
```

## Accessibility

All components follow WCAG 2.1 AA accessibility guidelines:
- Semantic HTML structure
- Proper ARIA attributes
- Keyboard navigation support
- Color contrast ratios meet standards

## Performance

Components are optimized for performance:
- Zero JavaScript by default (Astro Islands architecture)
- Minimal CSS bundle size
- Lazy loading for images
- Responsive images with srcset

## Contributing

When adding new components:
1. Create component file in `src/components/`
2. Add JSDoc comments with usage examples
3. Export component in `src/index.ts`
4. Document in this README
5. Test in a client site
