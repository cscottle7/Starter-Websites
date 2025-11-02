# DWS-Web-AI Brand Guidelines

**Project:** DWS-Web-AI Internal Demo Site
**Last Updated:** 2025-11-02
**Version:** 1.0

---

## Brand Identity

### Project Purpose
DWS-Web-AI is an internal demonstration site showcasing the capabilities of the Multi-Site Website Development System. It serves as a proof-of-concept for AI-optimized web development using Astro framework and Sveltia CMS.

### Target Audience
- Web development agencies
- Technical decision-makers
- Potential clients evaluating modern web development approaches
- Internal stakeholders reviewing the system capabilities

---

## Visual Identity

### Color Palette

**Primary Colors:**
- **Primary:** `#1a202c` (Dark slate gray) - Main navigation, headings, primary CTAs
- **Secondary:** `#2d3748` (Medium slate gray) - Secondary elements, subheadings
- **Accent:** `#4a5568` (Light slate gray) - Highlights, hover states

**Usage Guidelines:**
- Primary color for all major headings and primary call-to-action buttons
- Secondary color for body text and supporting elements
- Accent color for interactive elements and visual interest
- Ensure WCAG 2.1 AA contrast ratios on all text

**Neutral Colors:**
- White: `#ffffff` - Backgrounds, light sections
- Light gray: `#f7fafc` - Alternate sections, cards
- Dark gray: `#2d3748` - Footer, dark sections

**Functional Colors:**
- Success: `#48bb78` - Success messages, positive indicators
- Warning: `#ed8936` - Warning messages, attention indicators
- Error: `#f56565` - Error messages, critical alerts
- Info: `#4299e1` - Informational messages, links

### Typography

**Font Families:**
- **Headings:** Poppins (Primary), Inter (Fallback)
  - Font Weight: 600-700 (Semibold to Bold)
  - Use for H1-H6, section titles, CTAs

- **Body Text:** Inter (Primary), system-ui (Fallback)
  - Font Weight: 400-500 (Regular to Medium)
  - Use for paragraphs, lists, descriptions

**Font Sizes:**
- H1: 3rem (48px) - Page titles
- H2: 2.25rem (36px) - Section headings
- H3: 1.875rem (30px) - Subsection headings
- H4: 1.5rem (24px) - Card titles
- H5: 1.25rem (20px) - Small headings
- H6: 1rem (16px) - Micro headings
- Body: 1rem (16px) - Standard text
- Small: 0.875rem (14px) - Fine print, captions

**Line Height:**
- Headings: 1.2-1.3
- Body text: 1.6-1.8
- Lists: 1.8

### Logo Usage

**Logo Files:** (To be added)
- Primary logo: `src/assets/logo-primary.svg`
- Secondary/icon mark: `src/assets/logo-icon.svg`
- Light version (for dark backgrounds): `src/assets/logo-light.svg`

**Logo Specifications:**
- Minimum size: 120px width
- Clear space: Minimum 20px on all sides
- Do not stretch, distort, or rotate the logo
- Use SVG format for scalability

---

## Voice & Tone

### Brand Voice
- **Professional yet Approachable:** Technical expertise without jargon overload
- **Innovative:** Emphasize cutting-edge technology and AI-first approach
- **Confident:** Demonstrate authority in modern web development
- **Educational:** Help users understand the value and process

### Tone Guidelines

**Homepage & Marketing Pages:**
- Inspiring and forward-thinking
- Focus on benefits and outcomes
- Use active voice and power words
- Example: "Transform your web development workflow with AI-powered automation"

**Technical Documentation:**
- Clear and instructional
- Step-by-step explanations
- Avoid unnecessary complexity
- Example: "Configure Sveltia CMS in three simple steps"

**Blog Posts:**
- Informative and engaging
- Share insights and best practices
- Conversational but professional
- Example: "We've discovered that AI crawler optimization isn't just about technical SEO..."

**Calls-to-Action:**
- Action-oriented and specific
- Create urgency without pressure
- Examples: "Start Building Today", "See It In Action", "Get Started Free"

### Writing Style

**Do:**
- Use second person ("you") to address users directly
- Keep sentences concise (15-20 words average)
- Lead with the most important information
- Use bullet points for scannable content
- Write in active voice

**Don't:**
- Use excessive technical jargon without explanation
- Write overly long paragraphs (max 3-4 sentences)
- Use passive voice unnecessarily
- Include filler words ("very", "really", "actually")
- Make unsubstantiated claims

---

## Content Strategy

### Key Messages

1. **AI-First Development:** Built from the ground up for AI crawler optimization
2. **Rapid Deployment:** Launch client sites in under one week
3. **Automated Quality:** 70% reduction in manual quality assurance work
4. **Client Empowerment:** Non-technical content editing via intuitive CMS
5. **Scalable Infrastructure:** Support 10+ client sites with current team

### Content Pillars

1. **Technology Innovation:** Modern frameworks, automation, AI integration
2. **Performance Excellence:** Core Web Vitals, accessibility, SEO optimization
3. **Developer Experience:** Streamlined workflows, comprehensive documentation
4. **Business Value:** Cost efficiency, faster time-to-market, client satisfaction

---

## Image Guidelines

### Image Style
- Modern and professional photography
- Clean, uncluttered compositions
- Authentic scenarios (avoid overly staged stock photos)
- Consistent color grading (cooler tones to match brand palette)

### Image Requirements
- **Format:** WebP primary, PNG/JPEG fallback
- **Optimization:** All images <200KB after compression
- **Responsive:** Provide multiple sizes for responsive images
- **Alt Text:** Descriptive, keyword-rich alt text for all images (required)

### Image Types Needed
- Hero backgrounds (1920x1080px minimum)
- Team/office photos (if applicable)
- Product/service screenshots (actual system interfaces)
- Blog post featured images (1200x630px for social sharing)
- Icons and illustrations (SVG format preferred)

---

## Accessibility Standards

### Requirements
- **WCAG 2.1 Level AA Compliance:** All content must meet accessibility standards
- **Color Contrast:** Minimum 4.5:1 for normal text, 3:1 for large text
- **Keyboard Navigation:** All interactive elements must be keyboard accessible
- **Screen Reader Support:** Proper semantic HTML and ARIA attributes
- **Alt Text:** All images require descriptive alt text

### Best Practices
- Use semantic HTML elements (nav, main, article, aside, footer)
- Provide skip links for keyboard navigation
- Ensure focus indicators are clearly visible
- Test with screen readers (NVDA, JAWS, or VoiceOver)
- Validate with automated tools (axe DevTools, Lighthouse)

---

## SEO Guidelines

### Meta Information
- **Title Tag:** 50-60 characters, include primary keyword
- **Meta Description:** 150-160 characters, compelling and keyword-rich
- **Canonical URL:** Always specify to avoid duplicate content issues

### Schema Markup Requirements
- Organization schema on homepage
- WebSite schema on all pages
- Article schema on blog posts
- BreadcrumbList schema for navigation
- FAQ schema where applicable

### Content Optimization
- Single H1 per page (page title)
- Logical heading hierarchy (H1 → H2 → H3, no skipping)
- Internal linking between related pages
- Keyword usage: Natural integration, avoid stuffing
- Image optimization: Alt text, file names, compressed sizes

---

## Technical Standards

### Performance Budgets
- **Largest Contentful Paint (LCP):** <2.5 seconds
- **First Input Delay (FID):** <100 milliseconds
- **Cumulative Layout Shift (CLS):** <0.1
- **Total Page Weight:** <2MB
- **JavaScript Bundle:** <500KB total
- **Lighthouse Performance Score:** >90

### Browser Support
- Chrome/Edge: Last 2 major versions
- Firefox: Last 2 major versions
- Safari: Last 2 major versions
- Mobile: iOS Safari 14+, Chrome Android 90+

---

## Content Update Workflow

### Client Can Edit Independently
- ✅ Page text/copy (homepage, about, services content)
- ✅ Blog post creation and editing
- ✅ Image uploads and replacements
- ✅ Meta descriptions and page titles

### Requires Developer Support
- ❌ Creating new page templates beyond blog posts
- ❌ Modifying navigation menu structure
- ❌ Changing design elements (colors, fonts, layouts)
- ❌ Adding new features or functionality
- ❌ Troubleshooting build failures

---

## Notes for Developers

### Component Usage
- All components from `@workspace/ui-components` maintain brand consistency
- Custom client-specific components go in `src/components/`
- Override shared component styles in `tailwind.config.cjs`

### Content Management
- All content stored in `src/content/` directories (pages, blog)
- Content collections defined in `src/content/config.ts`
- Editable via Sveltia CMS at `/admin` route

### Quality Assurance
- All changes must pass 6-gate quality validation before production
- SEO score >90, accessibility WCAG 2.1 AA, performance Lighthouse >90
- Schema markup validated, AI crawler accessibility confirmed

---

**Last Review:** 2025-11-02
**Next Review:** After Phase 2 completion
**Maintained By:** Technical Lead
