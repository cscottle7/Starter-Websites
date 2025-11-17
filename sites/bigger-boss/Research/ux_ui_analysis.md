# **UX/UI Technical Specifications**

## **Bigger Boss Marketing Website**

**Project:** Bigger Boss Marketing Website **Prepared By:** UX/UI Analyst Agent **Date:** 6 November 2025 **Scope:** Conversion-Focused Design System & Component Specifications

---

## **Executive Summary**

This document provides actionable UX/UI specifications for The Bigger Boss marketing website, optimised for converting Australian businesses (agencies, in-house teams, professional services, SEO consultancies) into qualified leads. The design system prioritises **speed**, **transparency**, **professionalism**, and **accessibility** to support the brand positioning of delivering enterprise-grade marketing strategies in 90 minutes.

### **Strategic Design Principles**

1. **Speed Visualisation:** Design communicates rapid delivery through streamlined layouts, efficient information hierarchy, and visual momentum  
2. **Trust Signals:** Professional aesthetic with credibility markers (compliance badges, quality scores, systematic processes)  
3. **Clarity Over Cleverness:** Direct communication of value proposition without marketing jargon or ambiguity  
4. **Conversion Focus:** Every page element drives towards discovery call booking or project inquiry  
5. **Australian Professional Standard:** Polished, credible design reflecting premium positioning

   ### **Target Performance Benchmarks**

- **Mobile Performance:** Core Web Vitals "Good" rating (LCP \<2.5s, FID \<100ms, CLS \<0.1)  
- **Accessibility:** WCAG 2.1 AA compliance minimum (targeting AAA for text contrast)  
- **Conversion Rate:** 3-5% discovery call booking rate (industry benchmark: 1-2%)  
- **Engagement:** 2-3 minute average session duration, \<40% bounce rate  
  ---

  ## **1\. User Experience Strategy**

  ### **1.1 Information Architecture**

  **Primary Navigation Structure:**

```
Top Level Navigation (Desktop)
├── Services (dropdown)
│   ├── For Agencies
│   ├── For In-House Teams
│   ├── For Professional Services
│   └── For SEO Consultancies
├── How It Works
├── Pricing
├── Industries
│   ├── Healthcare (AHPRA Compliance)
│   ├── Legal Services (Law Society)
│   └── Financial Services (ASIC)
├── About
└── Contact

Mobile Navigation (Hamburger Menu)
├── Home
├── Services (expandable)
├── How It Works
├── Pricing
├── Industries (expandable)
├── About
├── Resources/Blog
└── [CTA: Book Discovery Call]
```

  **Secondary Navigation:**

- Footer: Quick links, legal (Privacy, Terms), social media, contact information  
- Sticky Header: Logo, primary navigation, Book Discovery Call CTA (always visible on scroll)  
- Contextual CTAs: Service-specific CTAs within sections  
  **IA Design Rationale:**  
- **Audience-first Services menu:** Immediate self-identification ("I'm an agency owner" → relevant service page)  
- **Industry compliance prominence:** Regulated industries need immediate reassurance (dedicated navigation item)  
- **How It Works accessibility:** Addresses primary objection ("How does this actually work?") via top-level navigation  
- **Pricing transparency:** Bold placement signals transparent, no-hidden-fees positioning  
  ---

  ### **1.2 User Journey Flows**

  **Journey 1: Agency Owner (High Intent)**

```
Entry Point: Google Search "AI marketing tools for agencies"
↓
Homepage Hero Section (5 seconds)
- Value proposition recognition: "5-10x client capacity"
- Trust signal: "4-persona quality review"
↓
Services → For Agencies (30-45 seconds)
- Pain point validation: "Turning away clients due to capacity?"
- Solution clarity: "90-minute complete strategy vs 8-12 weeks"
- Social proof: Agency testimonial/case study
↓
How It Works (20-30 seconds)
- Process transparency: 4-phase research workflow
- Deliverable preview: "256-374 pages in 90 minutes"
- Quality assurance: 85+ score requirement
↓
Pricing Page (15-30 seconds)
- Transparent pricing vs competitor comparison
- ROI calculator interaction
- Value demonstration: "$15,000-$35,000 deliverables"
↓
Conversion: Book Discovery Call
- Form: Name, Email, Phone, Agency Size, Primary Pain Point
- Calendar integration: Book specific time slot
- Confirmation: Email with discovery call preparation guide
```

  **Expected Conversion Rate:** 5-7% (high-intent traffic) **Journey Duration:** 2-3 minutes

  ---

  **Journey 2: Professional Services (Compliance-Focused)**

```
Entry Point: Google Search "AHPRA compliant content creation"
↓
Homepage Hero Section (5 seconds)
- Compliance signal recognition: "AHPRA, ASIC, Law Society certified"
↓
Industries → Healthcare (AHPRA Compliance) (45-60 seconds)
- Pain point validation: "Legal review delays costing weeks?"
- Compliance confidence: "Zero violations across all deliverables"
- Evidence: Sample compliant content brief excerpt
↓
How It Works (20-30 seconds)
- Compliance verification: Built-in regulatory framework
- Quality assurance: Evidence-based content (peer-reviewed sources)
↓
Pricing (15-30 seconds)
- Cost comparison: "Eliminate $500+ legal review per piece"
- Volume pricing: "4x content production with compliance confidence"
↓
Conversion: Book Compliance-Focused Discovery Call
- Form includes: Industry (Healthcare/Legal/Finance), Regulatory Concern
- Downloadable resource: "AHPRA Compliance Checklist for Content Marketing"
```

  **Expected Conversion Rate:** 4-6% (high-need, risk-averse audience) **Journey Duration:** 2.5-3.5 minutes

  ---

  **Journey 3: In-House Marketer (Research Phase)**

```
Entry Point: LinkedIn article share or industry blog
↓
Blog Post: "How AI Is Transforming Marketing Strategy Development" (2-3 minutes)
- Educational value: Industry trends, statistics, insights
- Soft CTA: "See how marketing teams 10x output" → Services page
↓
Homepage (scrolling exploration) (30-45 seconds)
- Value proposition: "Enterprise-grade strategies without specialist hires"
- Trust signals: Client logos, quality scores, deliverable samples
↓
Resources Download: "The In-House Marketing Efficiency Playbook" (lead magnet)
- Form: Name, Email, Company, Team Size
- Email nurture sequence begins
↓
Email Nurture → Services (For In-House Teams) (return visit)
- Pain point validation: "Limited budget, high expectations?"
- Capability demonstration: Technical audits, compliance, specialist research
↓
Conversion: Demo Request or ROI Calculator
- Lower-commitment conversion: "Calculate your team's efficiency gains"
- Progression to discovery call via email follow-up
```

  **Expected Conversion Rate:** 2-3% (awareness stage traffic) **Journey Duration:** Multiple sessions over 3-7 days

  ---

  ### **1.3 Conversion Optimisation Principles**

  **Clarity Over Creativity:**

- Headlines state benefits explicitly: "90-Minute Complete Website Strategy" (not "Marketing at the Speed of Light")  
- CTAs use action language: "Book Discovery Call" (not "Get Started" or "Learn More")  
- Value propositions quantified: "75-85% cost savings" (not "Affordable pricing")  
  **Trust Building Hierarchy:**  
1. **Immediate credibility:** Compliance badges, quality scores, systematic process visualisation  
2. **Social proof:** Client testimonials with specific results ("5x capacity increase, $40,000 savings")  
3. **Transparency:** Pricing displayed, process explained, sample deliverables shown  
4. **Authority signals:** Industry certifications, methodology documentation, thought leadership  
   **Friction Reduction:**  
- Primary CTA (Book Discovery Call) accessible within 2 clicks from any page  
- Forms request minimum fields: Name, Email, Phone, Context (dropdown)  
- Calendar integration eliminates email back-and-forth  
- Mobile-optimised contact forms (single-column, large touch targets)  
  **Progressive Disclosure:**  
- Homepage: High-level value proposition and primary differentiators  
- Service pages: Audience-specific pain points and solutions  
- How It Works: Detailed process transparency  
- Pricing: Comprehensive cost comparison and ROI demonstration  
  ---

  ### **1.4 Mobile-First Approach**

  **Mobile Experience Priorities:**  
  **Navigation:**  
- Sticky header: Logo \+ Hamburger menu \+ CTA button (always visible)  
- Hamburger menu: Full-screen overlay with clear hierarchy and expandable sections  
- Footer navigation: Streamlined quick links (Services, Pricing, Contact)  
  **Content Hierarchy:**  
- Hero sections: Single-column, headline \+ 1 supporting sentence \+ CTA  
- Text blocks: Maximum 3-4 lines before subheading break  
- Statistics: Large numbers (48-60px font size) for scanability  
- CTAs: Thumb-zone positioning (bottom third of screen for primary actions)  
  **Performance Optimisation:**  
- Lazy loading for below-fold images  
- Critical CSS inlined for above-fold content  
- Compressed images: WebP format with fallbacks  
- Minimal third-party scripts (analytics, calendar integration only)  
  **Touch Interaction Standards:**  
- Minimum button size: 48x48px (WCAG AA requirement)  
- Tap target spacing: 8px minimum between interactive elements  
- Swipeable carousels: Testimonials, case studies, deliverable samples  
- Hover state alternatives: Tap reveals expandable content cards  
  ---

  ### **1.5 Accessibility Standards (WCAG 2.1 AA)**

  **Visual Accessibility:**  
- **Colour contrast:** Minimum 4.5:1 for normal text, 3:1 for large text (18px+ or 14px+ bold)  
- **Text sizing:** Base font 16px minimum, relative units (rem/em) for scalability  
- **Focus indicators:** 2px solid outline with high contrast on all interactive elements  
- **Colour independence:** Information never conveyed by colour alone (icons \+ labels)  
  **Keyboard Navigation:**  
- **Tab order:** Logical sequence following visual hierarchy (header → hero → content → footer)  
- **Skip links:** "Skip to main content" visible on focus for screen reader users  
- **Modal accessibility:** Focus trapped within modal, Esc key closes, focus returns to trigger  
- **Dropdown menus:** Arrow key navigation, Enter to select, Esc to close  
  **Screen Reader Optimisation:**  
- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` structure  
- **ARIA labels:** Descriptive labels for icon-only buttons ("Open main menu", "Close modal")  
- **Alt text:** Descriptive alternative text for all images (decorative images: `alt=""`)  
- **Form labels:** Explicit `<label>` elements associated with all form inputs  
  **Multimedia Accessibility:**  
- **Video captions:** Closed captions for all video content  
- **Transcripts:** Text transcripts provided for audio content  
- **Animation control:** Respect `prefers-reduced-motion` media query for users with vestibular disorders  
  ---

  ## **2\. Visual Design System**

  ### **2.1 Brand Personality**

  **Design Personality Attributes:**  
- **Fast:** Clean layouts, efficient information density, visual momentum (directional elements)  
- **Transparent:** Open pricing, visible processes, honest communication (no marketing fluff)  
- **Professional:** Polished aesthetic, credible typography, premium materials feel  
- **Systematic:** Structured layouts, numbered processes, data-driven visualisation  
- **Australian:** Culturally appropriate imagery, British English, local market focus  
  **Visual Translation:**  
- **Fast:** Asymmetric layouts suggesting forward movement, arrow motifs, progress indicators  
- **Transparent:** Open white space, clear data visualisation, pricing comparison tables  
- **Professional:** Generous margins, sophisticated colour palette, quality photography  
- **Systematic:** Grid-based layouts, numbered sequences, modular components  
- **Australian:** Warm neutrals, natural imagery (Australian landscapes subtly), approachable professionalism  
  ---

  ### **2.2 Colour Palette**

  **Primary Colours:**

```
Brand Primary (Deep Blue)
HEX: #1A365D
RGB: 26, 54, 93
Usage: Primary CTAs, headings, navigation links
Represents: Professionalism, trust, authority

Brand Secondary (Vibrant Teal)
HEX: #0891B2
RGB: 8, 145, 178
Usage: Accent elements, hover states, progress indicators
Represents: Speed, innovation, forward-thinking

Success Green (Compliance Confidence)
HEX: #059669
RGB: 5, 150, 105
Usage: Success messages, compliance badges, positive metrics
Represents: Trust, verification, security
```

  **Neutral Palette:**

```
Text Primary (Charcoal)
HEX: #1F2937
RGB: 31, 41, 55
Usage: Body text, primary content
Contrast Ratio (on white): 14.7:1 (AAA)

Text Secondary (Slate)
HEX: #64748B
RGB: 100, 116, 139
Usage: Supporting text, metadata, captions
Contrast Ratio (on white): 5.5:1 (AA)

Background Light (Cool White)
HEX: #F8FAFC
RGB: 248, 250, 252
Usage: Page backgrounds, card backgrounds, section dividers

Background Dark (Deep Slate)
HEX: #0F172A
RGB: 15, 23, 42
Usage: Footer, dark mode sections, high-contrast areas
```

  **Accent Colours:**

```
Warning Orange (Attention)
HEX: #EA580C
RGB: 234, 88, 12
Usage: Urgency indicators, limited-time offers, alert elements
Sparingly used for emphasis

Premium Gold (Value Highlight)
HEX: #CA8A04
RGB: 202, 138, 4
Usage: Premium badges, value callouts, quality indicators
Subtle accents only
```

  **Colour Usage Guidelines:**

- **70-20-10 Rule:** 70% neutral (white, light grey), 20% brand primary (deep blue), 10% accent (teal, green)  
- **CTA Contrast:** Primary CTAs use vibrant teal (\#0891B2) on white for maximum visibility  
- **Section Alternation:** White and light grey (\#F8FAFC) backgrounds alternate for visual rhythm  
- **Dark Sections:** Deep slate (\#0F172A) footer and selected hero sections for contrast and drama  
  ---

  ### **2.3 Typography Hierarchy**

  **Font Families:**  
  **Primary Font (Headings & Display):**

```
Font: Inter (Variable Font)
Weights: 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
Source: Google Fonts
Rationale: Modern, professional, excellent legibility, optimised for screens
```

  **Secondary Font (Body Text):**

```
Font: Inter (Variable Font)
Weights: 400 (Regular), 500 (Medium)
Source: Google Fonts
Rationale: Same family as headings for cohesion, superior readability at small sizes
```

  **Typography Scale (Desktop):**

```
Display Heading (Hero Sections)
Font Size: 56px (3.5rem)
Line Height: 1.1 (61.6px)
Font Weight: 800 (ExtraBold)
Letter Spacing: -0.02em (tight)
Usage: Homepage hero, major page headers

H1 (Page Titles)
Font Size: 48px (3rem)
Line Height: 1.2 (57.6px)
Font Weight: 700 (Bold)
Letter Spacing: -0.01em
Usage: Primary page headings

H2 (Section Headings)
Font Size: 36px (2.25rem)
Line Height: 1.3 (46.8px)
Font Weight: 700 (Bold)
Letter Spacing: -0.005em
Usage: Major section breaks

H3 (Sub-Section Headings)
Font Size: 28px (1.75rem)
Line Height: 1.4 (39.2px)
Font Weight: 600 (SemiBold)
Letter Spacing: 0
Usage: Content subsections

H4 (Component Headings)
Font Size: 20px (1.25rem)
Line Height: 1.5 (30px)
Font Weight: 600 (SemiBold)
Letter Spacing: 0
Usage: Card titles, list headings

Body Large
Font Size: 20px (1.25rem)
Line Height: 1.6 (32px)
Font Weight: 400 (Regular)
Usage: Intro paragraphs, lead copy

Body Regular
Font Size: 16px (1rem)
Line Height: 1.7 (27.2px)
Font Weight: 400 (Regular)
Usage: Standard body text

Body Small
Font Size: 14px (0.875rem)
Line Height: 1.6 (22.4px)
Font Weight: 400 (Regular)
Usage: Captions, metadata, fine print
```

  **Typography Scale (Mobile):**

```
Display Heading: 36px (2.25rem), Line Height: 1.2
H1: 32px (2rem), Line Height: 1.25
H2: 28px (1.75rem), Line Height: 1.3
H3: 24px (1.5rem), Line Height: 1.35
H4: 18px (1.125rem), Line Height: 1.4
Body Large: 18px (1.125rem), Line Height: 1.6
Body Regular: 16px (1rem), Line Height: 1.7
Body Small: 14px (0.875rem), Line Height: 1.6
```

  **Typography Best Practices:**

- **Line length:** 60-75 characters optimal for readability (max 90 characters)  
- **Paragraph spacing:** 1.5em between paragraphs for breathing room  
- **Headings spacing:** 0.5em above, 0.25em below headings for hierarchy clarity  
- **Link styling:** Underlined on hover for accessibility, teal colour (\#0891B2)  
  ---

  ### **2.4 Iconography Style**

  **Icon System:**

```
Library: Heroicons 2.0 (Outline & Solid variants)
Size Standards: 16px, 20px, 24px, 32px (multiples of 4px)
Stroke Width: 1.5px (outline icons)
Style: Minimalist, geometric, modern
```

  **Icon Usage:**

  **Navigation Icons:**

- Hamburger menu: 24px  
- Dropdown arrows: 16px  
- External links: 16px (arrow-up-right)  
  **Feature Icons:**  
- Service feature lists: 24px outline icons (checkmark, lightning, shield, chart)  
- Process steps: 32px solid icons (numbered badges)  
- Compliance badges: 32px solid icons (shield-check, certificate)  
  **UI Icons:**  
- Form validation: 20px (check-circle for success, x-circle for error)  
- Social media: 24px solid icons (platform-specific)  
- Search: 20px outline  
- Close: 24px outline  
  **Colour Application:**  
- Primary brand blue (\#1A365D) for navigation and informational icons  
- Teal (\#0891B2) for interactive and action icons  
- Green (\#059669) for success/verification icons  
- Slate (\#64748B) for decorative/supporting icons  
  ---

  ### **2.5 Photography Guidelines**

  **Photography Style:**  
- **Professional & Authentic:** Real business environments, not stock photo clichés  
- **Australian Context:** Australian office settings, diverse professionals, local businesses  
- **Warm & Approachable:** Natural lighting, candid moments, human connection  
- **Minimal Post-Processing:** Slight warmth adjustment, avoid oversaturation  
  **Image Categories:**  
  **Hero Images:**  
- Modern Australian office environments  
- Professionals collaborating on marketing strategy  
- Individual portraits of target persona types (agency owner, in-house marketer)  
- Aspect Ratio: 16:9 (desktop), 4:3 (mobile)  
  **Testimonial/Case Study Images:**  
- Client headshots: Professional but approachable, neutral backgrounds  
- Office/practice exteriors: Establish credibility and context  
- Aspect Ratio: 1:1 (square) for consistency  
  **Illustration Usage:**  
- Process diagrams: Custom SVG illustrations for "How It Works" workflow  
- Data visualisation: Charts, graphs, comparison tables with brand colours  
- Iconographic illustrations: Abstract representations of concepts (speed, quality, compliance)  
  **Image Optimisation:**  
- Format: WebP with JPEG fallback  
- Compression: 80% quality for photographs, lossless for illustrations/icons  
- Responsive images: `<picture>` element with multiple breakpoints  
- Lazy loading: Native `loading="lazy"` attribute for below-fold images  
  ---

  ### **2.6 Spacing & Layout Principles**

  **8-Point Grid System:**  
- All spacing values are multiples of 8px (8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 128\)  
- Consistent rhythm creates visual harmony and developer efficiency  
- Exceptions: 4px for fine-tuning in complex components (rare)  
  **Container Widths:**

```
Maximum Content Width: 1280px (80rem)
Text Content Width: 768px (48rem) for optimal readability
Wide Content (comparison tables): 1440px (90rem)
Full Bleed Sections: 100% viewport width (hero sections, footer)
```

  **Spacing Scale:**

```
Space-1: 8px (0.5rem) - Tight spacing within components
Space-2: 16px (1rem) - Standard component padding
Space-3: 24px (1.5rem) - Section element spacing
Space-4: 32px (2rem) - Between related sections
Space-5: 48px (3rem) - Section padding (vertical)
Space-6: 64px (4rem) - Major section breaks
Space-8: 96px (6rem) - Page section spacing
Space-10: 128px (8rem) - Hero section padding
```

  **Layout Patterns:**

  **Hero Section (Full-Width):**

- Padding: 96px top, 128px bottom (desktop), 64px top/bottom (mobile)  
- Content max-width: 768px centred  
- Background: Gradient or image with text overlay  
  **Content Section (Centred):**  
- Max-width: 1280px  
- Padding: 64px top/bottom, 32px left/right (desktop)  
- Padding: 48px top/bottom, 24px left/right (mobile)  
  **Grid Layouts:**  
- 12-column grid for flexible layouts  
- Gutter: 24px (desktop), 16px (mobile)  
- Common patterns: 3-column (services), 2-column (features), 4-column (stats)  
  **Whitespace Philosophy:**  
- Generous margins around text blocks (minimum 32px)  
- Breathing room between sections (minimum 64px)  
- Avoid edge-to-edge text on wide screens (max 768px content width)  
  ---

  ## **3\. Core Component Specifications**

  ### **3.1 Navigation Components**

  **Primary Desktop Navigation:**  
  **Structure:**

```html
<header class="sticky-header">
  <div class="container">
    <nav>
      <a href="/" class="logo">
        <img src="logo.svg" alt="Bigger Boss">
      </a>
      <ul class="nav-menu">
        <li><a href="/services">Services</a> [Dropdown]</li>
        <li><a href="/how-it-works">How It Works</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/industries">Industries</a> [Dropdown]</li>
        <li><a href="/about">About</a></li>
      </ul>
      <a href="/contact" class="btn-primary">Book Discovery Call</a>
    </nav>
  </div>
</header>
```

  **Visual Specifications:**

- Height: 80px (desktop), 64px (mobile)  
- Background: White with 1px bottom border (\#E5E7EB)  
- Logo: 180px width, vertically centred  
- Navigation links: 16px Inter Medium, \#1F2937 colour, 16px spacing between items  
- Hover state: Teal (\#0891B2) colour, 200ms transition  
- CTA button: See button specifications (Section 3.3)  
  **Sticky Behaviour:**  
- Remains fixed at top on scroll  
- Subtle box-shadow appears: `0 2px 8px rgba(0,0,0,0.08)`  
- Slight height reduction to 64px on scroll (desktop only)  
  **Dropdown Menus:**  
- Trigger: Hover on desktop, tap on mobile  
- Animation: Fade in \+ slide down 10px, 200ms ease-out  
- Background: White with box-shadow: `0 4px 16px rgba(0,0,0,0.12)`  
- Padding: 16px  
- Item spacing: 12px vertical padding per item  
- Hover: Light grey background (\#F8FAFC)  
  ---

  **Mobile Navigation (Hamburger Menu):**  
  **Hamburger Icon:**  
- Size: 24px x 24px  
- Position: Top-right corner, 16px margin  
- Animation: Transforms to X icon when menu open (200ms)  
  **Mobile Menu Overlay:**  
- Full-screen overlay: White background  
- Animation: Slide in from right, 300ms ease-out  
- Close button: X icon, top-right, same position as hamburger  
- Content: Vertically centred list of navigation items  
- Font size: 24px for primary items, 18px for dropdown children  
- Spacing: 24px between items  
- CTA button: Full-width, fixed to bottom of screen  
  ---

  ### **3.2 Hero Section Variants**

  **Homepage Hero (Primary):**  
  **Layout:**

```
[Left Column - 60%]
  - Eyebrow text (small, teal): "Enterprise-Grade Marketing Strategy"
  - Main headline (Display): "90-Minute Complete Website Strategy"
  - Supporting copy (Body Large): 2-3 sentences value proposition
  - CTA buttons: [Primary: Book Discovery Call] [Secondary: See How It Works]
  - Trust signals: "AHPRA | ASIC | Law Society Certified"

[Right Column - 40%]
  - Hero image or illustration (process visualisation)
  - Subtle animation: Fade in on load
```

  **Visual Specifications:**

- Background: Light grey gradient (\#F8FAFC to \#FFFFFF)  
- Padding: 128px top/bottom (desktop), 64px (mobile)  
- Headline colour: Deep blue (\#1A365D)  
- Supporting copy colour: Slate (\#64748B)  
- CTA spacing: 16px horizontal gap between buttons  
- Trust signals: Small icons \+ text, 24px top margin  
  **Mobile Adaptation:**  
- Single column layout  
- Image moves below text  
- Headlines reduce font size (per typography scale)  
- CTAs stack vertically, full-width  
  ---

  **Service Page Hero (Secondary):**  
  **Layout:**

```
[Centred Content - Max 768px]
  - Eyebrow text: "For [Audience Segment]"
  - Main headline: "[Benefit Statement]"
  - Supporting copy: Pain point + solution summary
  - Single primary CTA: "Book Discovery Call"
  - Breadcrumb navigation below: Home > Services > For Agencies
```

  **Visual Specifications:**

- Background: White  
- Padding: 96px top/bottom (desktop), 64px (mobile)  
- Centred text alignment  
- Breadcrumb: 14px, slate colour (\#64748B), links separated by "\>"  
  ---

  ### **3.3 CTA Button Specifications**

  **Primary CTA (High Emphasis):**  
  **Default State:**

```css
background: #0891B2 (Vibrant Teal)
color: #FFFFFF (White)
padding: 16px 32px (Medium), 20px 40px (Large)
font-size: 16px (Medium), 18px (Large)
font-weight: 600 (SemiBold)
border-radius: 8px
border: none
box-shadow: 0 1px 3px rgba(0,0,0,0.1)
cursor: pointer
transition: all 200ms ease-out
```

  **Hover State:**

```css
background: #0E7490 (Darker Teal)
box-shadow: 0 4px 12px rgba(8, 145, 178, 0.3)
transform: translateY(-2px)
```

  **Active/Pressed State:**

```css
background: #155E75 (Even Darker)
box-shadow: 0 2px 4px rgba(0,0,0,0.15)
transform: translateY(0)
```

  **Disabled State:**

```css
background: #CBD5E1 (Light Grey)
color: #94A3B8 (Medium Grey)
cursor: not-allowed
box-shadow: none
```

  ---

  **Secondary CTA (Medium Emphasis):**

  **Default State:**

```css
background: transparent
color: #1A365D (Deep Blue)
padding: 16px 32px
font-size: 16px
font-weight: 600
border-radius: 8px
border: 2px solid #1A365D
cursor: pointer
transition: all 200ms ease-out
```

  **Hover State:**

```css
background: #1A365D (Deep Blue)
color: #FFFFFF (White)
```

  ---

  **Tertiary CTA (Low Emphasis \- Text Link):**

  **Default State:**

```css
background: none
color: #0891B2 (Teal)
font-size: 16px
font-weight: 500
text-decoration: underline
cursor: pointer
transition: color 200ms ease-out
```

  **Hover State:**

```css
color: #0E7490 (Darker Teal)
```

  ---

  **CTA Placement Guidelines:**

- **Hero sections:** Primary \+ Secondary side-by-side (desktop), stacked (mobile)  
- **Content sections:** Single Primary CTA centred at section end  
- **Navigation:** Primary CTA right-aligned in header  
- **Forms:** Primary CTA as submit button, full-width on mobile  
  ---

  ### **3.4 Form Components**

  **Contact/Discovery Call Form:**  
  **Structure:**

```html
<form class="discovery-form">
  <div class="form-group">
    <label for="name">Full Name *</label>
    <input type="text" id="name" required>
  </div>

  <div class="form-group">
    <label for="email">Email Address *</label>
    <input type="email" id="email" required>
  </div>

  <div class="form-group">
    <label for="phone">Phone Number *</label>
    <input type="tel" id="phone" required>
  </div>

  <div class="form-group">
    <label for="segment">I Am A... *</label>
    <select id="segment" required>
      <option value="">Select one</option>
      <option value="agency">Agency Owner/Manager</option>
      <option value="inhouse">In-House Marketing Team</option>
      <option value="professional">Professional Services (Healthcare/Legal/Finance)</option>
      <option value="seo">SEO Consultant/Freelancer</option>
    </select>
  </div>

  <div class="form-group">
    <label for="pain-point">Primary Challenge (Optional)</label>
    <textarea id="pain-point" rows="4"></textarea>
  </div>

  <button type="submit" class="btn-primary-large">Book Discovery Call</button>
</form>
```

  **Visual Specifications:**

  **Input Fields:**

```css
background: #FFFFFF
border: 1px solid #CBD5E1
border-radius: 6px
padding: 12px 16px
font-size: 16px
color: #1F2937
transition: border-color 200ms
```

  **Input Focus State:**

```css
border: 2px solid #0891B2 (Teal)
outline: none
box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1)
```

  **Input Error State:**

```css
border: 2px solid #DC2626 (Red)
```

  **Labels:**

```css
font-size: 14px
font-weight: 500
color: #1F2937
margin-bottom: 8px
display: block
```

  **Error Messages:**

```css
font-size: 14px
color: #DC2626 (Red)
margin-top: 4px
display: flex
align-items: center
[Icon: x-circle, 16px, left of text]
```

  **Success Messages:**

```css
font-size: 14px
color: #059669 (Green)
margin-top: 4px
display: flex
align-items: center
[Icon: check-circle, 16px, left of text]
```

  **Form Group Spacing:**

- Margin-bottom: 24px between form groups  
- Label to input: 8px vertical spacing  
- Submit button: 32px top margin from last field  
  **Mobile Optimisations:**  
- Full-width inputs (100%)  
- Larger touch targets: 48px minimum height for inputs  
- Number keyboard for phone field (input type="tel")  
- Email keyboard for email field (input type="email")  
  ---

  ### **3.5 Content Card Components**

  **Service Feature Card:**  
  **Structure:**

```html
<div class="feature-card">
  <div class="card-icon">
    [Icon: 32px, Brand Primary colour]
  </div>
  <h3 class="card-title">Rapid Delivery</h3>
  <p class="card-description">
    Complete website strategy in 90 minutes instead of 8-12 weeks.
  </p>
</div>
```

  **Visual Specifications:**

```css
background: #FFFFFF
border: 1px solid #E5E7EB
border-radius: 12px
padding: 32px
transition: all 300ms ease-out
```

  **Hover State:**

```css
border-color: #0891B2 (Teal)
box-shadow: 0 8px 24px rgba(0,0,0,0.08)
transform: translateY(-4px)
```

  **Layout:**

- Icon top-aligned, 24px margin-bottom  
- Title: H3 size, 16px margin-bottom  
- Description: Body regular size, slate colour (\#64748B)  
- Card spacing in grid: 24px gap between cards  
  **Grid Usage:**  
- Desktop: 3-column grid (equal width)  
- Tablet: 2-column grid  
- Mobile: Single column, full-width  
  ---

  **Testimonial Card:**  
  **Structure:**

```html
<div class="testimonial-card">
  <div class="testimonial-header">
    <img src="client-headshot.jpg" alt="Client Name" class="client-photo">
    <div class="client-info">
      <p class="client-name">Sarah Johnson</p>
      <p class="client-role">Agency Principal, Digital Growth Co.</p>
    </div>
  </div>
  <blockquote class="testimonial-quote">
    "5x client capacity increase in first month. The 4-persona quality review
    eliminated our QA bottlenecks completely."
  </blockquote>
  <div class="testimonial-metrics">
    <span class="metric">5x Capacity</span>
    <span class="metric">$40K Savings</span>
  </div>
</div>
```

  **Visual Specifications:**

```css
background: #F8FAFC (Light Grey)
border-left: 4px solid #0891B2 (Teal)
border-radius: 8px
padding: 32px
```

  **Client Photo:**

```css
width: 64px
height: 64px
border-radius: 50% (circular)
object-fit: cover
margin-right: 16px
```

  **Quote Styling:**

```css
font-size: 18px
line-height: 1.6
color: #1F2937
font-style: italic
margin: 24px 0
```

  **Metrics:**

```css
display: inline-block
background: #FFFFFF
padding: 8px 16px
border-radius: 6px
font-size: 14px
font-weight: 600
color: #059669 (Green)
margin-right: 12px
```

  ---

  ### **3.6 Social Proof Elements**

  **Compliance Badge Row:**

  **Structure:**

```html
<div class="compliance-badges">
  <div class="badge">
    <img src="ahpra-icon.svg" alt="AHPRA Certified">
    <span>AHPRA Certified</span>
  </div>
  <div class="badge">
    <img src="asic-icon.svg" alt="ASIC Compliant">
    <span>ASIC Compliant</span>
  </div>
  <div class="badge">
    <img src="law-society-icon.svg" alt="Law Society Standards">
    <span>Law Society Standards</span>
  </div>
</div>
```

  **Visual Specifications:**

- Badge height: 48px  
- Icon size: 24px  
- Font size: 14px, font-weight: 500  
- Colour: Slate (\#64748B)  
- Spacing: 24px between badges (desktop), 16px (mobile)  
- Background: Transparent or light grey (\#F8FAFC)  
  ---

  **Statistics Highlight Bar:**  
  **Structure:**

```html
<div class="stats-bar">
  <div class="stat">
    <p class="stat-number">90 min</p>
    <p class="stat-label">Complete Strategy</p>
  </div>
  <div class="stat">
    <p class="stat-number">85+</p>
    <p class="stat-label">Quality Score</p>
  </div>
  <div class="stat">
    <p class="stat-number">75-85%</p>
    <p class="stat-label">Cost Savings</p>
  </div>
  <div class="stat">
    <p class="stat-number">256-374</p>
    <p class="stat-label">Pages Delivered</p>
  </div>
</div>
```

  **Visual Specifications:**

  **Stat Number:**

```css
font-size: 48px (desktop), 36px (mobile)
font-weight: 800 (ExtraBold)
color: #1A365D (Deep Blue)
line-height: 1
margin-bottom: 8px
```

  **Stat Label:**

```css
font-size: 14px
font-weight: 500
color: #64748B (Slate)
text-transform: uppercase
letter-spacing: 0.05em
```

  **Layout:**

- 4-column grid (desktop)  
- 2-column grid (tablet)  
- Single column (mobile)  
- Divider lines: 1px vertical line (\#E5E7EB) between stats (desktop only)  
  ---

  ## **4\. Page Layout Guidelines**

  ### **4.1 Homepage Layout Structure**

  **Section Sequence:**

1. **Hero Section** (Full-width, light grey gradient background)

   - Primary value proposition  
   - Dual CTAs (Book Discovery Call \+ See How It Works)  
   - Trust signals (compliance badges)  
   - Hero image/illustration (right column)

2. **Social Proof Bar** (Full-width, white background)

   - 4-stat highlight bar  
   - Client logo strip (optional: "Trusted by 50+ Australian businesses")

3. **Value Propositions** (Centred, max-width 1280px, light grey background)

   - Section heading: "Why Bigger Boss?"  
   - 3-card grid: Speed | Quality | Compliance  
   - Each card: Icon \+ Headline \+ 2-3 sentence description \+ Learn More link

4. **How It Works** (Centred, white background)

   - Section heading: "Complete Marketing Strategy in 4 Phases"  
   - 4-step process visualisation (numbered icons \+ titles \+ descriptions)  
   - Timeline visual: 90-minute total duration  
   - CTA: "See Detailed Process"

5. **Audience Segments** (Full-width, light grey background)

   - Section heading: "Solutions for Every Marketing Team"  
   - 4-column grid: Agencies | In-House | Professional Services | SEO Consultancies  
   - Each column: Icon \+ Headline \+ Pain point \+ Value prop \+ CTA link

6. **Testimonials** (Centred, white background)

   - Section heading: "Success Stories"  
   - 2-column testimonial cards (3 total, carousel on mobile)  
   - Each testimonial: Photo \+ Quote \+ Metrics \+ Name/Role

7. **Pricing Teaser** (Centred, light grey background)

   - Section heading: "Transparent Pricing"  
   - Comparison table: Bigger Boss vs Traditional Agency vs DIY Tools  
   - Key metrics: Cost | Time | Quality | Deliverables  
   - CTA: "See Full Pricing Details"

8. **Final CTA Section** (Full-width, deep blue background, white text)

   - Heading: "Ready to Transform Your Marketing Strategy?"  
   - Supporting text: "Book a 30-minute discovery call to discuss your needs"  
   - Primary CTA (white button with blue text): "Book Discovery Call"  
   - Secondary info: "No obligation. No hard sell. Just strategic clarity."

9. **Footer** (Full-width, dark slate background)

   - Standard footer (see Section 4.8)

   **Mobile Adaptations:**

- All grids collapse to single column  
- Hero image moves below text  
- Stats bar becomes 2-column  
- Testimonials become carousel (swipeable)  
  ---

  ### **4.2 Services Pages Layout**

  **For Agencies | For In-House Teams | For Professional Services | For SEO Consultancies**  
  **Section Sequence:**

1. **Hero Section** (Audience-specific)

   - Eyebrow: "For \[Audience\]"  
   - Headline: Primary pain point addressed  
   - Supporting copy: Solution summary  
   - Primary CTA: "Book Discovery Call"  
   - Breadcrumb navigation

2. **Pain Point Validation** (White background)

   - Section heading: "Challenges You're Facing"  
   - 3-column grid: 3 major pain points  
   - Each: Icon \+ Title \+ Description \+ Impact statement  
   - Emphasises understanding of audience struggles

3. **Solution Overview** (Light grey background)

   - Section heading: "How Bigger Boss Solves This"  
   - Side-by-side comparison: Before (Traditional) vs After (Bigger Boss)  
   - Metrics: Time savings | Cost savings | Quality improvement | Capacity increase  
   - Visual: Infographic or comparison chart

4. **Deliverables Breakdown** (White background)

   - Section heading: "What You Receive"  
   - Expandable accordion or tabbed interface  
   - Each deliverable: Name \+ Description \+ Word count \+ Time to completion  
   - Sample deliverable preview (screenshot or excerpt)

5. **Process Deep-Dive** (Light grey background)

   - Section heading: "Your 90-Minute Journey"  
   - Timeline visualisation with detailed phase breakdown  
   - Phase 1-4 with specific deliverables listed  
   - Quality assurance checkpoints highlighted

6. **Testimonials (Audience-Specific)** (White background)

   - 2 testimonials from same audience segment  
   - Detailed case study format  
   - Metrics: Specific results achieved

7. **FAQ Section** (Light grey background)

   - Section heading: "Common Questions"  
   - Accordion format: 6-8 questions specific to audience  
   - Addresses objections and concerns

8. **CTA Section** (Deep blue background)

   - Headline: "Ready to Scale Without Hiring?" (audience-specific variant)  
   - Primary CTA: "Book Discovery Call"  
   - Secondary CTA: "Download \[Audience\] Success Guide" (lead magnet)

   ---

   ### **4.3 How It Works Page Layout**

   **Section Sequence:**

1. **Hero Section**

   - Headline: "Complete Marketing Strategy in 90 Minutes"  
   - Supporting copy: Process overview  
   - Visual: Timeline graphic showing 4 phases

2. **Phase 1: Foundation Research** (White background)

   - Phase icon \+ title \+ duration (30-40 minutes)  
   - Deliverables list with descriptions  
   - Visual: Sample output screenshot  
   - Expand/collapse for detailed breakdown

3. **Phase 2: Competitive Intelligence** (Light grey background)

   - Same structure as Phase 1  
   - Duration: 25-35 minutes

4. **Phase 3: Keyword Strategy** (White background)

   - Same structure  
   - Duration: 15-20 minutes

5. **Phase 4: Content Planning** (Light grey background)

   - Same structure  
   - Duration: 20-30 minutes

6. **Quality Assurance Process** (White background)

   - Section heading: "4-Persona Quality Review"  
   - 4-column grid: Technical SEO | Conversion | UX | Content Quality  
   - Each persona: Icon \+ Title \+ Scoring criteria (0-25 points)  
   - Total score requirement: 85/100+ for delivery

7. **Compliance Verification** (Light grey background, for regulated industries)

   - Section heading: "Built-In Compliance"  
   - 3-column: AHPRA | ASIC | Law Society  
   - Each: Icon \+ Description \+ Verification process

8. **CTA Section** (Deep blue background)

   - Headline: "Experience the Bigger Boss Difference"  
   - CTA: "Book Discovery Call"

   ---

   ### **4.4 Pricing Page Layout**

   **Section Sequence:**

1. **Hero Section**

   - Headline: "Transparent Pricing. No Surprises."  
   - Supporting copy: "75-85% cost savings vs traditional agencies"

2. **Pricing Comparison Table** (White background)

   - 4-column comparison: Bigger Boss | Traditional Agency | DIY Tools | In-House Hire  
   - Rows: Upfront Cost | Monthly Cost | Time to Completion | Deliverables | Quality Assurance | Compliance | Scalability  
   - Bigger Boss column highlighted (light teal background)

3. **Package Options** (Light grey background)

   - 3-tier pricing: Starter | Professional | Enterprise  
   - Each tier: Price \+ Included deliverables \+ Best for (audience)  
   - CTA button per tier: "Get Started" or "Contact Sales"

4. **ROI Calculator** (White background, interactive)

   - Section heading: "Calculate Your Savings"  
   - Input fields: Current agency cost | Project frequency | Team hours saved  
   - Output: Annual savings | Time savings | Capacity increase  
   - CTA: "Book Call to Discuss Your ROI"

5. **Value Breakdown** (Light grey background)

   - Section heading: "What $X Delivers"  
   - Itemised list: Deliverable \+ Typical market value  
   - Total value: "$15,000-$35,000 worth of deliverables"

6. **FAQ \- Pricing** (White background)

   - Common pricing questions  
   - Accordion format

7. **CTA Section** (Deep blue background)

   - Headline: "Ready to Get Started?"  
   - CTA: "Book Discovery Call"

   ---

   ### **4.5 Industries Pages Layout**

   **Healthcare (AHPRA) | Legal (Law Society) | Financial (ASIC)**

   **Section Sequence:**

1. **Hero Section**

   - Headline: "AHPRA-Compliant Content Marketing" (industry-specific)  
   - Supporting copy: Compliance confidence \+ thought leadership positioning  
   - Compliance badge prominent

2. **Compliance Challenge** (White background)

   - Section heading: "The AHPRA Compliance Burden"  
   - Pain points: Legal review delays | Violation risks | Costly legal fees  
   - Statistics: Cost per legal review | Time delays | Violation penalties

3. **Bigger Boss Compliance Solution** (Light grey background)

   - Section heading: "Built-In Compliance Framework"  
   - How it works: Automated verification \+ Evidence-based content \+ Regulatory alignment  
   - Guarantee: "Zero violations across all deliverables"

4. **Industry-Specific Deliverables** (White background)

   - Sample content briefs for industry  
   - Screenshots or excerpts showing compliance elements  
   - Highlight: Citations, disclaimers, evidence-based claims

5. **Case Study** (Light grey background)

   - Healthcare/Legal/Finance practice success story  
   - Before/After: Compliance challenges → Bigger Boss solution → Results  
   - Metrics: Content volume increase | Legal review cost elimination | Time savings

6. **Testimonial** (White background)

   - Industry-specific testimonial  
   - Focus on compliance confidence and professional credibility

7. **FAQ \- Compliance** (Light grey background)

   - Industry-specific compliance questions

8. **CTA Section** (Deep blue background)

   - Headline: "Achieve Compliance Confidence"  
   - CTA: "Book Compliance-Focused Discovery Call"

   ---

   ### **4.6 About Page Layout**

   **Section Sequence:**

1. **Hero Section**

   - Headline: "AI-Powered Marketing Intelligence for Australian Businesses"  
   - Supporting copy: Mission statement

2. **Our Story** (White background)

   - Origin story: Why we built Bigger Boss  
   - Problem identified: Agency capacity constraints, slow delivery, high costs  
   - Solution created: AI agent orchestration system

3. **Our Approach** (Light grey background)

   - Section heading: "Systematic Quality, Every Time"  
   - 3-column: Research-Backed | Quality-Assured | Compliance-Ready  
   - Each: Icon \+ Description

4. **The Team** (White background) \- Optional, if applicable

   - Founder/team photos and bios  
   - Expertise areas: Marketing strategy | AI systems | Compliance frameworks

5. **Our Values** (Light grey background)

   - 4 values: Transparency | Quality | Speed | Integrity  
   - Each: Icon \+ Title \+ Description

6. **CTA Section** (Deep blue background)

   - Headline: "Partner With Us"  
   - CTA: "Book Discovery Call"

   ---

   ### **4.7 Contact Page Layout**

   **Section Sequence:**

1. **Hero Section**

   - Headline: "Let's Discuss Your Marketing Strategy Needs"  
   - Supporting copy: "30-minute discovery call. No obligation."

2. **Discovery Call Form** (White background, centred, max-width 600px)

   - Form fields: Name | Email | Phone | I Am A... (dropdown) | Primary Challenge (textarea)  
   - Submit CTA: "Book Discovery Call"  
   - Calendar integration (Calendly embed or similar)

3. **Alternative Contact Methods** (Light grey background)

   - Email: [hello@biggerboss.com.au](mailto:hello@biggerboss.com.au)  
   - Phone: \+61 X XXXX XXXX  
   - Business hours: Mon-Fri 9am-5pm AEST

4. **What Happens Next** (White background)

   - 3-step process: Book call → Discovery conversation → Receive proposal  
   - Each step: Icon \+ Title \+ Description

   ---

   ### **4.8 Footer Layout**

   **Structure:**

```html
<footer class="site-footer">
  <div class="footer-main">
    <div class="footer-column">
      <h4>Services</h4>
      <ul>
        <li><a href="/services/agencies">For Agencies</a></li>
        <li><a href="/services/inhouse">For In-House Teams</a></li>
        <li><a href="/services/professional">For Professional Services</a></li>
        <li><a href="/services/seo">For SEO Consultancies</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Industries</h4>
      <ul>
        <li><a href="/industries/healthcare">Healthcare (AHPRA)</a></li>
        <li><a href="/industries/legal">Legal Services</a></li>
        <li><a href="/industries/financial">Financial Services</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Company</h4>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/how-it-works">How It Works</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Resources</h4>
      <ul>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/case-studies">Case Studies</a></li>
        <li><a href="/guides">Free Guides</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <p class="copyright">© 2025 Bigger Boss. All rights reserved.</p>
    <ul class="legal-links">
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
    </ul>
    <div class="social-icons">
      [LinkedIn Icon] [Twitter Icon]
    </div>
  </div>
</footer>
```

   **Visual Specifications:**

- Background: Deep slate (\#0F172A)  
- Text colour: Light grey (\#CBD5E1)  
- Link colour: White (\#FFFFFF)  
- Link hover: Teal (\#0891B2)  
- Padding: 64px top/bottom, 32px left/right (desktop)  
- Footer bottom border-top: 1px solid rgba(255,255,255,0.1)  
  ---

  ## **5\. Conversion & Performance Optimisation**

  ### **5.1 CTA Strategy**

  **Primary CTA (Book Discovery Call):**  
  **Placement:**  
- Homepage hero: Dual CTA (Book Discovery Call \+ See How It Works)  
- Service pages: Hero section \+ bottom of page (2 placements)  
- How It Works: Bottom of page  
- Pricing: Bottom of each pricing tier \+ bottom of page  
- Industries: Bottom of page (compliance-focused variant)  
- About: Bottom of page  
- Contact: Form submit button  
  **Messaging Variants:**  
- Standard: "Book Discovery Call"  
- Urgency: "Book Your Strategy Session Today"  
- Benefit-focused: "Get Your 90-Minute Strategy"  
- Compliance-focused: "Book Compliance-Focused Discovery Call"  
  **Optimisation Tactics:**  
- Contrast: Vibrant teal button on white/grey backgrounds ensures visibility  
- Size: Large buttons (20px padding vertical, 40px horizontal) on key pages  
- Microcopy: "30 minutes. No obligation." below CTA reduces friction  
- Calendar integration: Direct booking eliminates email back-and-forth  
  ---

  **Secondary CTAs (Lead Magnets):**  
  **Content Downloads:**  
- "Download: The Agency Scalability Playbook" (for agencies)  
- "Download: In-House Marketing Efficiency Guide" (for in-house teams)  
- "Download: AHPRA Compliance Checklist" (for healthcare professionals)  
- "Download: SEO Consultant Capacity Calculator" (for consultants)  
  **Placement:**  
- Blog posts: Contextual inline CTAs \+ end-of-post CTAs  
- Service pages: Below testimonials section  
- Exit-intent popup: Triggered on scroll-up or mouse leave (desktop only)  
  **Form Requirements:**  
- Minimal friction: Name \+ Email only  
- Privacy assurance: "We respect your privacy. Unsubscribe anytime."  
- Instant delivery: "Instant download. No waiting."  
  ---

  **Tertiary CTAs (Low Commitment):**  
- "See How It Works" (educational, links to process page)  
- "Calculate Your ROI" (interactive tool, links to pricing page calculator)  
- "Read Case Studies" (social proof, links to testimonials/case studies section)  
- "Explore Services" (navigation, links to services overview)  
  **Usage:**  
- Hero sections: Secondary CTA alongside primary  
- Navigation: Educational links in dropdown menus  
- Content sections: Contextual links for further exploration  
  ---

  ### **5.2 Trust Signal Integration**

  **Trust Signals Hierarchy:**  
  **Level 1: Immediate Credibility (Above Fold)**  
- Compliance badges: AHPRA | ASIC | Law Society (hero section)  
- Quality score: "85/100+ on every deliverable" (hero section)  
- Speed claim: "90-minute complete strategy" (hero headline)  
  **Level 2: Social Proof (Mid-Page)**  
- Client testimonials: 2-3 per page with photos, names, roles, metrics  
- Success metrics: "5x capacity increase" | "$40K annual savings" | "Zero compliance violations"  
- Client logos: "Trusted by 50+ Australian businesses" (if available)  
  **Level 3: Process Transparency (Deep-Page)**  
- Methodology documentation: 4-phase research workflow detailed breakdown  
- Sample deliverables: Screenshots or excerpts from actual client projects  
- Quality assurance: 4-persona review system explained with scoring rubric  
  **Level 4: Authority Signals (Footer/About)**  
- Industry affiliations (if applicable)  
- Team credentials (if showing team)  
- Thought leadership: Blog posts, guides, industry commentary  
  **Implementation Guidelines:**  
- Never fabricate social proof (use "Coming soon: Client testimonials" if unavailable initially)  
- Update metrics regularly (annual savings calculations based on current pricing)  
- Authentic testimonials only (real clients with permission, or wait until available)  
  ---

  ### **5.3 Mobile Optimisation Checklist**

  **Performance:**  
- [ ] Lazy loading implemented for all below-fold images  
- [ ] WebP images with JPEG fallbacks  
- [ ] Critical CSS inlined for above-fold content  
- [ ] JavaScript deferred or async-loaded  
- [ ] Font files preloaded (Inter variable font)  
- [ ] Third-party scripts minimised (analytics \+ calendar integration only)  
- [ ] Target: Lighthouse Performance Score 90+  
      **Usability:**  
- [ ] Touch targets minimum 48x48px  
- [ ] Tap target spacing minimum 8px  
- [ ] Forms optimised: Appropriate input types (tel, email), single-column layout  
- [ ] CTAs thumb-zone accessible (bottom third of screen or sticky)  
- [ ] Hamburger menu: Smooth animation, full-screen overlay, easy close  
- [ ] Readable font sizes: 16px minimum for body text  
- [ ] Adequate line height: 1.6-1.7 for body text readability  
      **Conversion Optimisation:**  
- [ ] Primary CTA visible without scrolling on key pages (homepage, services, pricing)  
- [ ] Phone number click-to-call enabled (tel: link)  
- [ ] Email click-to-email enabled (mailto: link)  
- [ ] Forms: Single-column, large inputs, minimal fields  
- [ ] Trust signals: Compliance badges visible in mobile hero sections  
      **Accessibility:**  
- [ ] Colour contrast: 4.5:1 minimum (normal text), 3:1 (large text)  
- [ ] Tap target size: 48x48px minimum  
- [ ] Zoom support: No viewport maximum-scale restriction  
- [ ] Form labels: Explicit associations, visible labels (not placeholder-only)  
      ---

      ### **5.4 Core Web Vitals Targets**

      **Largest Contentful Paint (LCP):**  
- **Target:** \<2.5 seconds  
- **Optimisation:**  
  - Hero images: Optimised size (max 800KB), WebP format  
  - Preload hero image: `<link rel="preload" as="image" href="hero.webp">`  
  - Server-side rendering or static site generation for instant above-fold content  
  - CDN delivery for global performance

  **First Input Delay (FID):**

- **Target:** \<100ms  
- **Optimisation:**  
  - Minimal JavaScript on initial load  
  - Defer non-critical scripts  
  - Code splitting: Load interactive components only when needed  
  - Web workers for heavy computations (if any)

  **Cumulative Layout Shift (CLS):**

- **Target:** \<0.1  
- **Optimisation:**  
  - Fixed dimensions for images: Width and height attributes specified  
  - Fixed dimensions for embedded content (videos, iframes)  
  - No content injection above existing content  
  - Skeleton loaders for dynamic content areas  
  - Font loading: `font-display: swap` with fallback font sizing

  **Additional Metrics:**

  **Time to First Byte (TTFB):**

- Target: \<600ms  
- Fast hosting infrastructure, CDN, server-side caching  
  **Speed Index:**  
- Target: \<3.0 seconds  
- Progressive rendering, critical CSS prioritisation  
  ---

  ### **5.5 Competitive Differentiation Through UX**

  **Speed Perception:**  
- Progress indicators: "Your 90-minute journey" timeline visualisations  
- Before/After comparisons: "8-12 weeks → 90 minutes" side-by-side  
- Instant interactions: ROI calculator provides immediate results (no page reload)  
- Fast page loads: Core Web Vitals excellence reinforces "speed" brand positioning  
  **Quality Confidence:**  
- Visual representation: 4-persona review system illustrated with icons \+ scores  
- Sample quality: Screenshot excerpts of deliverables showing polish  
- Systematic process: Numbered steps, checklists, validation icons create trust  
- Evidence-based design: Citations, statistics, data visualisations emphasise credibility  
  **Transparency & Trust:**  
- Pricing transparency: Full pricing page with comparisons (no "Contact us for pricing")  
- Process transparency: Detailed "How It Works" breakdown with deliverable lists  
- Honest positioning: "Who Should Choose Bigger Boss" vs "Who Should Use Alternatives"  
- Compliance openness: Detailed explanation of regulatory frameworks (AHPRA, ASIC, Law Society)  
  **Professional Polish:**  
- Generous whitespace: Never cramped or cluttered layouts  
- Sophisticated colour palette: Deep blues, teals, and neutrals (no garish colours)  
- Quality typography: Inter variable font, clear hierarchy, excellent legibility  
- Attention to detail: Consistent spacing (8px grid), smooth animations (200-300ms transitions)  
  ---

  ## **6\. Implementation Priority Roadmap**

  ### **6.1 Phase 1: MVP Launch (Homepage \+ Contact) \- Week 1-2**

  **Critical Path Components:**  
  **Homepage:**  
- [ ] Hero section with primary value proposition \+ dual CTAs  
- [ ] 4-stat social proof bar  
- [ ] 3-card value proposition grid (Speed | Quality | Compliance)  
- [ ] 4-step "How It Works" overview  
- [ ] 2 testimonials (placeholder if client testimonials unavailable)  
- [ ] Final CTA section  
- [ ] Footer with basic navigation  
      **Contact Page:**  
- [ ] Discovery call booking form (Name, Email, Phone, Segment dropdown, Challenge textarea)  
- [ ] Calendar integration (Calendly or similar)  
- [ ] Confirmation page/message  
- [ ] Form validation (client-side \+ server-side)  
      **Global Components:**  
- [ ] Sticky header navigation (desktop \+ mobile hamburger)  
- [ ] Primary CTA button styling (3 variants: Primary, Secondary, Tertiary)  
- [ ] Typography system implemented (Inter variable font, full hierarchy)  
- [ ] Colour system CSS variables  
- [ ] 8px spacing system utilities  
      **Performance Baseline:**  
- [ ] Core Web Vitals: LCP \<2.5s, FID \<100ms, CLS \<0.1  
- [ ] Mobile-responsive: All breakpoints tested (375px, 768px, 1280px, 1920px)  
- [ ] Accessibility: WCAG 2.1 AA compliance (keyboard nav, colour contrast, screen reader)  
      **Success Criteria:**  
- Homepage conversion rate: 1-2% minimum (discovery call bookings)  
- Lighthouse Performance Score: 85+ (mobile), 95+ (desktop)  
- Zero critical accessibility violations (WAVE tool)  
  ---

  ### **6.2 Phase 2: Core Service & Pricing Pages \- Week 3-4**

  **Service Pages (4 pages):**  
- [ ] For Agencies  
- [ ] For In-House Teams  
- [ ] For Professional Services  
- [ ] For SEO Consultancies  
      **Each Service Page Includes:**  
- [ ] Audience-specific hero section  
- [ ] Pain point validation section (3-column grid)  
- [ ] Before/After comparison (Bigger Boss vs Traditional)  
- [ ] Deliverables breakdown (expandable accordion or tabs)  
- [ ] Process timeline (90-minute journey)  
- [ ] 2 audience-specific testimonials  
- [ ] FAQ section (6-8 questions)  
- [ ] CTA section  
      **Pricing Page:**  
- [ ] 4-column comparison table (Bigger Boss | Agency | DIY Tools | In-House)  
- [ ] 3-tier pricing packages (if applicable)  
- [ ] Interactive ROI calculator  
- [ ] Value breakdown itemisation  
- [ ] Pricing FAQ section  
- [ ] CTA section  
      **New Components:**  
- [ ] Comparison table component  
- [ ] Expandable accordion component  
- [ ] Interactive calculator (JavaScript implementation)  
- [ ] Tabbed interface component  
      **Success Criteria:**  
- Service page conversion rate: 3-4% (discovery call bookings from service pages)  
- Pricing page engagement: 40%+ interact with ROI calculator  
- Page load times: \<3 seconds for all service pages  
  ---

  ### **6.3 Phase 3: Supporting Pages & Resources \- Week 5-6**

  **How It Works Page:**  
- [ ] Detailed 4-phase breakdown  
- [ ] Phase-by-phase deliverable lists  
- [ ] Quality assurance process explanation  
- [ ] Compliance verification process (for regulated industries)  
- [ ] Sample deliverable screenshots/excerpts  
      **Industries Pages (3 pages):**  
- [ ] Healthcare (AHPRA Compliance)  
- [ ] Legal Services (Law Society)  
- [ ] Financial Services (ASIC)  
      **Each Industry Page Includes:**  
- [ ] Compliance-focused hero  
- [ ] Industry-specific pain points  
- [ ] Compliance solution explanation  
- [ ] Sample compliant content  
- [ ] Industry case study  
- [ ] Compliance FAQ  
- [ ] CTA section  
      **About Page:**  
- [ ] Mission statement  
- [ ] Origin story  
- [ ] Systematic approach explanation  
- [ ] Team section (if applicable)  
- [ ] Values section  
- [ ] CTA section  
      **Resources/Blog Setup:**  
- [ ] Blog landing page (post grid)  
- [ ] Blog post template  
- [ ] 3 strategic blog posts (from Phase 4 content planning):  
      - "How AI Is Transforming Marketing Strategy Development in 2025"  
      - "Agency Scalability: 5x Client Capacity Without Hiring"  
      - "Why Traditional Agency Models Can't Compete with AI-Powered Marketing Intelligence"

      **New Components:**

- [ ] Blog post card component  
- [ ] Blog post template (hero, body content, author, related posts)  
- [ ] Category/tag filtering (if multiple posts)  
      **Success Criteria:**  
- How It Works page: 50%+ scroll depth (indicates engagement)  
- Industries pages: 4-5% conversion rate (high-intent compliance-focused traffic)  
- Blog posts: 2-3 minute average session duration  
  ---

  ### **6.4 Quick Wins & Optimisations \- Ongoing**

  **Conversion Rate Optimisation:**  
- [ ] A/B test CTA button copy: "Book Discovery Call" vs "Get Your 90-Minute Strategy"  
- [ ] A/B test hero headline variants (benefit-focused vs pain-focused)  
- [ ] Heat mapping: Identify high-attention areas, optimise CTA placement  
- [ ] Exit-intent popup: Lead magnet offer for abandoning visitors (test impact on UX)  
      **Performance Enhancements:**  
- [ ] Image optimisation audit: Identify oversized images, compress further  
- [ ] Third-party script audit: Remove unnecessary tracking, defer non-critical scripts  
- [ ] Caching strategy: Implement browser caching headers, CDN configuration  
- [ ] Font loading optimisation: Subset Inter font to used characters only  
      **Accessibility Improvements:**  
- [ ] Screen reader testing: NVDA (Windows), VoiceOver (Mac/iOS) user flow testing  
- [ ] Keyboard navigation audit: Ensure logical tab order, visible focus states  
- [ ] Colour contrast audit: Use Stark plugin to identify low-contrast elements  
- [ ] ARIA labels audit: Ensure all interactive elements have descriptive labels  
      **Trust Signal Additions (as available):**  
- [ ] Client testimonials: Add real client testimonials as projects complete  
- [ ] Case studies: Develop detailed case studies with metrics  
- [ ] Client logos: Display client logos (with permission) in social proof section  
- [ ] Industry certifications: Add any relevant industry association memberships  
      **Content Enhancements:**  
- [ ] Lead magnets: Create downloadable guides for each audience segment  
- [ ] Video content: Record "How It Works" explainer video for homepage  
- [ ] Sample deliverables: Create public-facing sample deliverable excerpts  
- [ ] FAQ expansion: Add questions based on discovery call common questions  
      ---

      ## **Conclusion**

      These UX/UI technical specifications provide a comprehensive, conversion-focused design system for The Bigger Boss marketing website. The design prioritises **speed visualisation**, **trust building**, **transparency**, and **professional polish** to effectively convert Australian businesses into qualified leads.

      ### **Key Success Factors**

1. **Speed Perception:** Visual design reinforces rapid delivery promise through streamlined layouts and efficient information hierarchy  
2. **Trust & Credibility:** Compliance badges, quality scores, and systematic processes build confidence in regulated industries  
3. **Conversion Focus:** Every page element drives towards discovery call booking with clear CTAs and minimal friction  
4. **Mobile Excellence:** Mobile-first design ensures optimal experience across all devices, critical for busy professionals  
5. **Accessibility:** WCAG 2.1 AA compliance ensures inclusive design, expanding reach and demonstrating professionalism

   ### **Implementation Success Metrics**

   **Phase 1 (MVP):**  
- Homepage conversion rate: 1-2%  
- Lighthouse Performance: 85+ (mobile), 95+ (desktop)  
- WCAG 2.1 AA compliance: Zero critical violations  
  **Phase 2 (Core Pages):**  
- Service page conversion rate: 3-4%  
- Pricing page calculator engagement: 40%+  
- Page load times: \<3 seconds all pages  
  **Phase 3 (Complete Site):**  
- Industries page conversion rate: 4-5%  
- Blog engagement: 2-3 minute session duration  
- Overall site bounce rate: \<40%  
  **Ongoing Optimisation:**  
- Continuous A/B testing of CTAs and headlines  
- Monthly performance audits (Core Web Vitals, accessibility)  
- Quarterly trust signal updates (testimonials, case studies, metrics)  
  ---

  **Document Status:** Final **Word Count:** \~7,950 words **Ready for Design & Development:** Yes **Next Steps:** Design mockups → Development → Quality assurance → Launch  
  ---

  **Prepared By:** UX/UI Analyst Agent **Client:** Bigger Boss Marketing Website **Date:** 6 November 2025 **Version:** 1.0  
  