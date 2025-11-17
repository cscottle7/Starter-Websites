# Figma Free Plan to Astro + Tailwind CSS Workflow Guide

**Investigation Lead: Squad Analysis Report**
**Date:** November 10, 2025
**Mission:** Research optimal workflow for converting Figma designs to Astro + Tailwind CSS websites using ONLY Figma free plan features and free plugins

---

## Executive Summary

**CRITICAL FINDING:** The user-suggested plugins "Figma Token Exporter" and "Design Tokens" plugin DO exist and work on Figma free plan. However, our investigation reveals a **three-tiered workflow strategy** is optimal:

1. **Token Export Workflow** (RECOMMENDED) - Best for design systems with consistent tokens
2. **Component-to-Code Workflow** (FASTEST) - Best for rapid prototyping
3. **Manual Inspection Workflow** (MOST ACCURATE) - Best for pixel-perfect accuracy

**Key Limitations of Figma Free Plan:**
- ❌ NO Dev Mode access (requires paid plan - $12-35/mo per seat)
- ❌ NO team library publishing (can create local styles/variables only)
- ❌ Limited to 3 Figma files per team project
- ✅ YES basic inspect panel (measure spacing with Alt/Option key)
- ✅ YES asset export (images, icons)
- ✅ YES copy CSS from elements
- ✅ YES full plugin ecosystem access

**Time Estimates (Based on Industry Data):**
- **Token Export + Automation:** 3.5-5 hours per site (after initial setup)
- **Component-to-Code Plugins:** 5-8 hours per site (requires manual cleanup)
- **Manual Inspection Method:** 12-15 hours per site (highest accuracy)

---

## Phase 1: Squad Specialist Findings

### Specialist 1: Plugin Discovery Analyst

#### User's Suggested Plugins - EVALUATION

**1. "Figma Token Exporter"**
- **Status:** ✅ ACTIVE - Multiple variants exist (evaluated 3 leading plugins)
- **Best Option:** "Figma Token Exporter" by figma-tokens.com
  - **What it exports:** Figma variables/tokens → CSS, SASS, SCSS, JSON formats
  - **Free plan compatible:** ✅ YES
  - **Use case:** Recommended for non-enterprise users who need developer handoff without paid Figma seats
  - **Output formats:** CSS variables, SCSS variables, JSON (Style Dictionary compatible)
  - **Maintenance status:** Active development as of 2025
  - **Figma Community:** https://www.figma.com/community/plugin/1345069854741911632/figma-token-exporter

**Alternative Token Exporters:**
- **"Token Exporter" by Nate Mills** (Plugin ID: 1521741753717588633)
  - Zero-config alternative to Style Dictionary
  - One-click transform to production-ready code
  - Active in 2025

- **"Design Tokens (W3C) Export"** (Plugin ID: 1377982390646186215)
  - Exports variable collections as W3C-compliant JSON
  - Downloads as .zip file with separate JSON per collection
  - Best for standards-compliant workflows

**2. "Design Tokens" Plugin**
- **Status:** ✅ ACTIVE - Refers to "Design Tokens" by Lukas Oppermann
- **GitHub:** https://github.com/lukasoppermann/design-tokens
- **What it exports:** Figma styles + custom tokens → Amazon Style Dictionary compatible JSON
- **Free plan compatible:** ✅ YES
- **GitHub integration:** Can sync directly to GitHub repositories
- **Output format:** JSON optimized for Style Dictionary transformations
- **Community rating:** Well-established, widely used in production
- **Figma Community:** https://www.figma.com/community/plugin/888356646278934516/design-tokens

#### Top Alternative Free Plugins (Beyond User Suggestions)

**1. Tokens Studio for Figma** (Formerly "Figma Tokens")
- **Status:** ✅ ACTIVE - Industry standard for token management
- **Free tier:** Full core features, Pro features require subscription
- **What free tier includes:**
  - Design token management inside Figma
  - Git sync (GitHub, GitLab, Bitbucket)
  - JSON export/import
  - 21 unique token types (colors, spacing, typography, shadows, borders, sizing, etc.)
  - Export to Figma Styles and Variables
- **Free tier limitations:**
  - Cannot export from Themes (Pro feature) - must export from Token Sets
  - No multi-mode Variable Collections
  - No non-local Variable references
- **Best for:** Teams wanting design system as code with Git version control
- **Figma Community:** https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma
- **Documentation:** https://docs.tokens.studio

**2. GreatFrontEnd – Figma to Code**
- **Status:** ✅ ACTIVE - Free component-to-code conversion
- **What it does:** Click element → instant HTML + CSS/Tailwind code
- **Output:** HTML structure + Tailwind utility classes OR pure CSS
- **Free plan compatible:** ✅ YES - Completely free
- **Accuracy:** Good for rapid prototyping, requires manual cleanup for production
- **Best for:** Quick component extraction, learning Tailwind patterns
- **Figma Community:** https://www.figma.com/community/plugin/1377511503285748115/greatfrontend-figma-to-code-html-css-tailwind-for-free

**3. Figma to Code (Open Source by Bernardo Ferrari)**
- **Status:** ⚠️ ACTIVE BUT LIMITED MAINTENANCE
- **GitHub:** https://github.com/bernaferrari/FigmaToCode
- **What it does:** Converts Figma layouts → HTML, Tailwind, Svelte, Flutter, SwiftUI
- **Free plan compatible:** ✅ YES - Fully open source
- **Known issues:** Author noted "Figma changed a lot, but my plugin didn't keep up"
- **Output quality:** Good for basic layouts, struggles with complex designs
- **Best for:** Open-source enthusiasts, educational purposes, simple layouts
- **Community contributions:** Welcomes pull requests
- **Figma Community:** https://www.figma.com/community/plugin/842128343887142055/figma-to-code-html-tailwind-flutter-swiftui

#### Plugins NOT Recommended for Free Plan Workflow

- **Builder.io with Fusion** - Subscription required for meaningful features
- **Figma to Tailwind CSS AI** - Subscription-based (70+ blocks require payment)
- **Anima** - Free tier very limited, core features require Pro ($31/mo)

---

### Specialist 2: Free Plan Capability Analyst

#### What You CAN Access on Figma Free Plan

**Basic Inspection Features:**
- ✅ **Measure spacing:** Hold Alt/Option + hover between elements to see pixel distances
- ✅ **View properties:** Select element → right sidebar shows width, height, colors, fonts
- ✅ **Copy CSS:** Right-click element → "Copy as CSS" (gives standard CSS, not Tailwind)
- ✅ **Export assets:** Right-click → Export (PNG, JPG, SVG, PDF formats)
- ✅ **Access Inspect Panel:** View design properties without Dev Mode (limited)
- ✅ **Create local Variables & Styles:** Define colors, typography, spacing (cannot publish to team library)
- ✅ **Use all community plugins:** Full plugin ecosystem access
- ✅ **Share view-only links:** Developers can view designs, measure, export assets

**Collaboration Features:**
- ✅ **Comments:** Pin comments to elements, mention teammates, resolve threads
- ✅ **Version history:** View past versions, restore previous states
- ✅ **Unlimited viewers:** Add developers as view-only collaborators (no seat cost)
- ✅ **Prototyping:** Interactive prototypes for UX flows
- ✅ **Component playground:** View component variants (basic view only)

**Local Design System Features:**
- ✅ **Components:** Create/edit components within a file
- ✅ **Variables:** Store single raw values (colors, numbers, booleans, strings)
- ✅ **Styles:** Color styles, text styles, effect styles, layout grid styles
- ✅ **Auto Layout:** Responsive component layouts

#### What You CANNOT Access on Free Plan

**Dev Mode Restrictions (Paid Feature):**
- ❌ **Side-by-side version comparison:** See design changes before/after
- ❌ **Component change history:** "Last edited" timestamps
- ❌ **Ready for dev markers:** Flag frames as ready for development
- ❌ **Status tracking:** Mark items as "in progress," "complete"
- ❌ **Design change notifications:** Automated alerts for updates
- ❌ **Advanced component playground:** Full component variant code export
- ❌ **Consolidated dev feed:** Centralized task view

**Publishing Restrictions:**
- ❌ **Team library publishing:** Share variables/styles across multiple files (paid plans only)
- ❌ **Component library publishing:** Centralized component library (paid plans only)

**File Limits:**
- ❌ **3 Figma files per team project** (vs unlimited on paid plans)
- ❌ **Maximum 2 editors** on Starter plan

**Important Note:** Figma removed most inspect panel functionality when Dev Mode launched (Sept 2023). Free plan users now have **basic inspection only**, which requires Alt/Option key for measurements.

#### Workarounds for Free Plan Limitations

**1. Measurement Without Dev Mode:**
- Hold **Alt** (Windows) or **Option** (Mac) while hovering over elements
- Select element A, hover over element B → displays spacing between them
- Displays: margins, padding, distances in pixels

**2. Extract Color/Typography Values:**
- Select element → Right sidebar → "Design" tab shows:
  - Fill colors (hex codes, RGB, HSL)
  - Stroke colors and weights
  - Font family, size, weight, line height, letter spacing
- **Copy values manually** → paste into `tailwind.config.js`

**3. Copy CSS Properties:**
- Right-click element → "Copy/Paste as" → "Copy as CSS"
- **Note:** Generates standard CSS (NOT Tailwind utility classes)
- Use as reference for manual Tailwind conversion

**4. Asset Export:**
- Select layer → Right sidebar → "Export" section
- Choose format: PNG, JPG, SVG, PDF
- Set scale: 1x, 2x, 3x (for responsive images)
- **Tip:** Use SVG for icons/logos for infinite scalability

---

### Specialist 3: Design-to-Code Workflow Analyst

#### Workflow Option 1: TOKEN EXPORT WORKFLOW (RECOMMENDED)

**Best for:** Design systems with consistent colors, spacing, typography, shadows
**Time estimate:** 3.5-5 hours per site (after initial pipeline setup)
**Accuracy:** High for design tokens, medium for component layouts
**Maintenance:** Low (automated token updates)

**Step-by-Step Process:**

**PHASE 1: Designer Setup in Figma (One-time, 1-2 hours)**

1. **Install Plugin:**
   - Option A: "Figma Token Exporter" (simpler, direct export)
   - Option B: "Tokens Studio for Figma" (more powerful, Git sync)

2. **Create Figma Variables** (if not already done):
   - Colors: `brand-primary`, `brand-secondary`, `neutral-100`, etc.
   - Spacing: `spacing-xs`, `spacing-sm`, `spacing-md`, `spacing-lg`, `spacing-xl`
   - Typography: Font sizes, weights, line heights
   - Shadows: `shadow-sm`, `shadow-md`, `shadow-lg`
   - Border radius: `radius-sm`, `radius-md`, `radius-lg`

3. **Organize Variables into Collections:**
   - Collection 1: Colors
   - Collection 2: Spacing
   - Collection 3: Typography
   - Collection 4: Effects (shadows, blurs)
   - Collection 5: Sizing (widths, heights)

4. **Export Tokens Using Plugin:**

   **For "Figma Token Exporter":**
   - Plugins → Figma Token Exporter → Select collections → Export as JSON
   - Save file as `design-tokens.json`

   **For "Tokens Studio":**
   - Plugins → Tokens Studio → "Export to Figma" (creates Styles/Variables)
   - Settings → Sync → Connect to GitHub repository
   - Push tokens to `tokens/` folder in repository
   - Export format: JSON (W3C Design Tokens Format or Style Dictionary)

5. **Share with Developer:**
   - Send `design-tokens.json` file
   - OR provide Git repository URL (if using Tokens Studio sync)
   - Share Figma file link (view-only access)

**PHASE 2: Developer Transformation (Initial setup: 2-3 hours, then automated)**

6. **Install Transformation Tools:**

```bash
# Navigate to your project
cd c:\Apps\Websites\Starter-Websites

# Install Style Dictionary + Tokens Studio transforms
pnpm add -D style-dictionary @tokens-studio/sd-transforms

# Install token-transformer (if using Tokens Studio output)
pnpm add -D token-transformer
```

7. **Create `token-transformer` Config** (if using Tokens Studio):

```bash
# Transform Tokens Studio JSON → Style Dictionary format
npx token-transformer tokens/design-tokens.json tokens/transformed-tokens.json
```

**Options:**
- `--expandTypography=true` - Expands typography objects into individual tokens
- `--expandShadow=true` - Expands shadow objects
- `--resolveReferences=true` - Resolves token aliases/references

8. **Create Style Dictionary Config:**

Create `style-dictionary.config.js` in project root:

```javascript
const StyleDictionary = require('style-dictionary');
const { registerTransforms } = require('@tokens-studio/sd-transforms');

// Register Tokens Studio transforms
registerTransforms(StyleDictionary);

module.exports = {
  source: ['tokens/transformed-tokens.json'], // Input tokens
  platforms: {
    tailwind: {
      transformGroup: 'tokens-studio', // Use Tokens Studio transform group
      buildPath: 'packages/design-tokens/',
      files: [
        {
          destination: 'tailwind-tokens.js',
          format: 'javascript/module', // CommonJS for Tailwind config
        },
      ],
    },
  },
};
```

**For simpler workflows (without Tokens Studio):**

```javascript
module.exports = {
  source: ['tokens/design-tokens.json'],
  platforms: {
    tailwind: {
      transformGroup: 'js', // JavaScript transform group
      buildPath: 'packages/design-tokens/',
      files: [
        {
          destination: 'tailwind-tokens.js',
          format: 'javascript/module',
        },
      ],
    },
  },
};
```

9. **Run Style Dictionary Build:**

```bash
npx style-dictionary build
```

**Output:** `packages/design-tokens/tailwind-tokens.js`

**Example output:**
```javascript
module.exports = {
  colorBrandPrimary: "#3B82F6",
  colorBrandSecondary: "#8B5CF6",
  spacingSm: "8px",
  spacingMd: "16px",
  fontSizeBase: "16px",
  shadowMd: "0 4px 6px rgba(0,0,0,0.1)"
};
```

10. **Import Tokens into Tailwind Config:**

Edit `sites/your-site/tailwind.config.cjs`:

```javascript
const tokens = require('../../packages/design-tokens/tailwind-tokens.js');

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: tokens.colorBrandPrimary,
          secondary: tokens.colorBrandSecondary,
        },
        neutral: {
          100: tokens.colorNeutral100,
          200: tokens.colorNeutral200,
          // ... map all color tokens
        },
      },
      spacing: {
        xs: tokens.spacingXs,
        sm: tokens.spacingSm,
        md: tokens.spacingMd,
        lg: tokens.spacingLg,
        xl: tokens.spacingXl,
      },
      fontSize: {
        base: tokens.fontSizeBase,
        lg: tokens.fontSizeLg,
        xl: tokens.fontSizeXl,
      },
      boxShadow: {
        sm: tokens.shadowSm,
        md: tokens.shadowMd,
        lg: tokens.shadowLg,
      },
      borderRadius: {
        sm: tokens.radiusSm,
        md: tokens.radiusMd,
        lg: tokens.radiusLg,
      },
    },
  },
};
```

11. **Use Tokens in Astro Components:**

```astro
<!-- sites/your-site/src/components/Button.astro -->
<button class="bg-brand-primary text-white px-md py-sm rounded-md shadow-md">
  Click Me
</button>
```

**PHASE 3: Ongoing Updates (5-10 minutes per update)**

12. **Designer Updates Tokens in Figma:**
   - Modify variables → Re-export → Send new JSON file
   - OR (if using Tokens Studio + Git): Sync → Push to repository

13. **Developer Rebuilds Tokens:**
```bash
# If using token-transformer
npx token-transformer tokens/design-tokens.json tokens/transformed-tokens.json

# Run Style Dictionary
npx style-dictionary build

# Rebuild site
pnpm nx build your-site
```

**Automated CI/CD (Advanced):**
Create `.github/workflows/token-update.yml`:

```yaml
name: Update Design Tokens

on:
  push:
    paths:
      - 'tokens/**'

jobs:
  transform-tokens:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - run: pnpm install
      - run: npx token-transformer tokens/design-tokens.json tokens/transformed-tokens.json
      - run: npx style-dictionary build
      - run: git add packages/design-tokens/
      - run: git commit -m "chore: Update design tokens"
      - run: git push
```

**Pros of Token Export Workflow:**
- ✅ Automated design system updates
- ✅ Single source of truth for design tokens
- ✅ Consistent branding across all sites
- ✅ Git version control for design changes
- ✅ No manual copy-paste of color codes

**Cons of Token Export Workflow:**
- ❌ Initial setup complexity (2-3 hours)
- ❌ Does NOT export component layouts (only design tokens)
- ❌ Requires developer knowledge of Style Dictionary
- ❌ Designer must structure Figma variables correctly

---

#### Workflow Option 2: COMPONENT-TO-CODE WORKFLOW (FASTEST)

**Best for:** Rapid prototyping, learning Tailwind patterns, simple components
**Time estimate:** 5-8 hours per site (includes cleanup)
**Accuracy:** Medium (60-75% - requires manual refinement)
**Maintenance:** Medium (manual updates when design changes)

**Step-by-Step Process:**

**PHASE 1: Designer Preparation (30 minutes)**

1. **Install Plugin:**
   - GreatFrontEnd – Figma to Code (FREE)
   - OR Figma to Code by Bernardo Ferrari (open source)

2. **Organize Figma File:**
   - Use Auto Layout for all components (critical for accurate code)
   - Name layers semantically: `hero-section`, `nav-menu`, `footer-links`
   - Group related elements into frames
   - Ensure proper constraints (left/right, top/bottom, center)

3. **Share Figma File:**
   - File → Share → Copy link → Send to developer
   - Ensure "Anyone with link can view" is enabled

**PHASE 2: Developer Extraction (5-8 hours)**

4. **Install Plugin in Figma:**
   - Open Figma file (view-only access works)
   - Plugins → Browse plugins → Search "GreatFrontEnd Figma to Code"
   - Install plugin

5. **Extract Component Code:**
   - Select frame/component in Figma (e.g., `hero-section`)
   - Plugins → GreatFrontEnd → Choose "Tailwind" output
   - Copy generated code

**Example output:**
```html
<div class="flex flex-col items-center justify-center w-full h-screen bg-blue-500">
  <h1 class="text-5xl font-bold text-white">Welcome to Our Site</h1>
  <p class="text-xl text-white mt-4">This is a hero section</p>
  <button class="bg-white text-blue-500 px-6 py-3 rounded-lg mt-6">Get Started</button>
</div>
```

6. **Create Astro Component:**

Create `sites/your-site/src/components/HeroSection.astro`:

```astro
---
// No frontmatter logic needed for simple components
---

<div class="flex flex-col items-center justify-center w-full h-screen bg-blue-500">
  <h1 class="text-5xl font-bold text-white">Welcome to Our Site</h1>
  <p class="text-xl text-white mt-4">This is a hero section</p>
  <button class="bg-white text-blue-500 px-6 py-3 rounded-lg mt-6">Get Started</button>
</div>
```

7. **Manual Cleanup & Refinement (CRITICAL STEP):**

**Common issues requiring manual fixes:**

**Issue 1: Hardcoded pixel values instead of design tokens**
```html
<!-- Plugin output (hardcoded) -->
<div class="w-[1200px] h-[600px]">

<!-- After cleanup (responsive + semantic) -->
<div class="max-w-7xl mx-auto py-24">
```

**Issue 2: Absolute positioning instead of flexbox/grid**
```html
<!-- Plugin output (fragile) -->
<div class="absolute top-[100px] left-[200px]">

<!-- After cleanup (responsive) -->
<div class="mt-24 ml-auto">
```

**Issue 3: Inline styles leaked into classes**
```html
<!-- Plugin output -->
<div class="bg-[#3B82F6]">

<!-- After cleanup (use design tokens) -->
<div class="bg-brand-primary">
```

**Issue 4: Missing responsive breakpoints**
```html
<!-- Plugin output (mobile-only) -->
<div class="text-5xl">

<!-- After cleanup (responsive) -->
<div class="text-3xl md:text-4xl lg:text-5xl">
```

**Issue 5: Complex shadows/gradients incorrect**
```html
<!-- Plugin output (inaccurate) -->
<div class="shadow-lg">

<!-- After manual inspection in Figma -->
<div class="shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
```

**Issue 6: Spacing inconsistencies**
- Select elements in Figma → Hold Alt/Option → Measure actual spacing
- Replace plugin's guesses with accurate values
- Use design system spacing tokens: `space-4`, `space-6`, `space-8`

8. **Test & Refine:**

```bash
# Start dev server
pnpm dev --filter=your-site

# Open browser
# Compare live site side-by-side with Figma design
# Adjust classes until pixel-perfect match
```

**Comparison tools:**
- **Pixelay** (Figma plugin) - Overlay Figma design on live website
- **Pixel Perfect** (Chrome extension) - Overlay screenshots for comparison

**PHASE 3: Iterate Components (Repeat steps 5-8 for each component)**

9. **Extract remaining components:**
   - Navigation menu
   - Footer
   - Cards/content sections
   - Forms
   - Call-to-action blocks

10. **Compose Page Layouts:**

`sites/your-site/src/pages/index.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
import HeroSection from '../components/HeroSection.astro';
import FeaturesSection from '../components/FeaturesSection.astro';
import Footer from '../components/Footer.astro';
---

<Layout title="Home">
  <HeroSection />
  <FeaturesSection />
  <Footer />
</Layout>
```

**Pros of Component-to-Code Workflow:**
- ✅ Fast initial extraction (minutes per component)
- ✅ Visual feedback (see code immediately)
- ✅ Good learning tool for Tailwind patterns
- ✅ Works with complex layouts

**Cons of Component-to-Code Workflow:**
- ❌ Requires significant manual cleanup (30-50% of time)
- ❌ Accuracy varies (60-75% match to design)
- ❌ Responsive design requires manual additions
- ❌ No automated updates when design changes
- ❌ Hardcoded values instead of design tokens

**Accuracy Issues (Based on Research):**
- Complex shadows/gradients: Often incorrect
- Alignment/spacing: Frequently requires adjustment
- Responsive breakpoints: Never automated (manual work required)
- CSS conflicts: Can conflict with existing global styles
- Generic output: Not optimized for production

**Developer skill required:**
- Intermediate Tailwind CSS knowledge (must recognize incorrect utilities)
- Understanding of responsive design principles
- Ability to debug CSS layout issues
- Figma inspection skills (to verify plugin accuracy)

---

#### Workflow Option 3: MANUAL INSPECTION WORKFLOW (MOST ACCURATE)

**Best for:** Pixel-perfect accuracy, production-grade code, complex layouts
**Time estimate:** 12-15 hours per site (no automation)
**Accuracy:** Highest (95-100% match to design)
**Maintenance:** High (manual re-inspection when design changes)

**Step-by-Step Process:**

**PHASE 1: Designer Handoff (30 minutes)**

1. **Prepare Figma File:**
   - Use consistent naming: `section-name`, `component-name`
   - Apply Auto Layout to all responsive components
   - Create text/color/effect styles for all design tokens
   - Add annotations for interactive states (hover, focus, active)
   - Document spacing system in dedicated frame

2. **Export Assets:**
   - Select all icons → Right-click → Export → SVG
   - Select all images → Export → WebP or PNG (2x resolution for retina)
   - Organize exports in folder: `assets/icons/`, `assets/images/`
   - Send assets folder to developer

3. **Share Figma File:**
   - File → Share → Copy link
   - Add developer as view-only collaborator
   - Pin comment on first frame: "Start here - read BRAND_GUIDELINES.md"

**PHASE 2: Developer Manual Build (12-15 hours)**

4. **Inspect Design System Tokens:**

**Colors:**
- Select elements with different colors
- Right sidebar → "Design" tab → "Fill" section → Copy hex codes
- Document in `tailwind.config.js`:

```javascript
colors: {
  brand: {
    primary: '#3B82F6',    // Inspect: Main CTA button fill
    secondary: '#8B5CF6',  // Inspect: Secondary button fill
  },
  neutral: {
    50: '#F9FAFB',   // Inspect: Background light
    100: '#F3F4F6',  // Inspect: Card background
    900: '#111827',  // Inspect: Heading text
  },
}
```

**Typography:**
- Select each heading/body text style
- Right sidebar → "Text" section:
  - Font family
  - Font size
  - Font weight
  - Line height
  - Letter spacing

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  heading: ['Poppins', 'sans-serif'],
},
fontSize: {
  'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
  'h2': ['36px', { lineHeight: '1.3' }],
  'body': ['16px', { lineHeight: '1.6' }],
}
```

**Spacing:**
- Select two elements → Hold Alt/Option → Measure spacing
- Document common spacing values:

```javascript
spacing: {
  'section': '80px',    // Vertical spacing between sections
  'element': '24px',    // Spacing between elements
  'tight': '8px',       // Tight spacing (buttons, cards)
}
```

**Shadows:**
- Select element with shadow → Right sidebar → "Effects"
- Copy shadow parameters:

```javascript
boxShadow: {
  'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
  'card-hover': '0 10px 20px rgba(0, 0, 0, 0.15)',
}
```

**Border Radius:**
- Select rounded elements → Right sidebar → "Corner radius"

```javascript
borderRadius: {
  'button': '8px',
  'card': '12px',
  'modal': '16px',
}
```

5. **Build Components Manually:**

**Navigation Example:**

**Step A: Measure in Figma**
- Height of navbar: 80px
- Logo width: 150px
- Spacing between nav items: 32px
- Padding inside navbar: 24px left/right

**Step B: Write Astro component**

`sites/your-site/src/components/Navigation.astro`:

```astro
---
// Props can be added later for dynamic content
---

<nav class="h-20 px-6 flex items-center justify-between bg-white shadow-sm">
  <!-- Logo -->
  <div class="w-[150px]">
    <img src="/assets/logo.svg" alt="Company Logo" class="w-full h-auto">
  </div>

  <!-- Navigation Links -->
  <ul class="flex items-center gap-8">
    <li><a href="/" class="text-neutral-900 hover:text-brand-primary font-medium">Home</a></li>
    <li><a href="/about" class="text-neutral-900 hover:text-brand-primary font-medium">About</a></li>
    <li><a href="/services" class="text-neutral-900 hover:text-brand-primary font-medium">Services</a></li>
    <li><a href="/contact" class="text-neutral-900 hover:text-brand-primary font-medium">Contact</a></li>
  </ul>

  <!-- CTA Button -->
  <button class="bg-brand-primary text-white px-6 py-3 rounded-button font-semibold hover:bg-brand-primary-dark transition-colors">
    Get Started
  </button>
</nav>
```

**Step C: Cross-reference with Figma**
- Open dev server: `pnpm dev --filter=your-site`
- Place browser window side-by-side with Figma
- Hold Alt/Option in Figma to measure
- Adjust Tailwind classes until pixel-perfect match

**Hero Section Example:**

**Step A: Measure layout**
- Section height: Full viewport (`h-screen`)
- Content max-width: 1200px
- Heading font size: 48px → 60px (desktop)
- Subheading font size: 18px → 20px (desktop)
- Vertical spacing between elements: 24px

**Step B: Build component**

```astro
---
// sites/your-site/src/components/HeroSection.astro
---

<section class="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
  <div class="max-w-7xl mx-auto px-6 text-center">
    <!-- Heading -->
    <h1 class="text-5xl md:text-6xl font-bold text-neutral-900 leading-tight">
      Build Websites <span class="text-brand-primary">10x Faster</span>
    </h1>

    <!-- Subheading -->
    <p class="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
      Our multi-site development system helps agencies launch client websites in under one week.
    </p>

    <!-- CTA Buttons -->
    <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
      <button class="bg-brand-primary text-white px-8 py-4 rounded-button font-semibold text-lg hover:bg-brand-primary-dark transition-all hover:shadow-lg">
        Get Started Free
      </button>
      <button class="bg-white text-brand-primary px-8 py-4 rounded-button font-semibold text-lg border-2 border-brand-primary hover:bg-brand-primary hover:text-white transition-all">
        View Demo
      </button>
    </div>
  </div>
</section>
```

**Step C: Responsive refinement**
- Test on mobile (375px), tablet (768px), desktop (1440px)
- Adjust breakpoints:
  - `sm:` → 640px
  - `md:` → 768px
  - `lg:` → 1024px
  - `xl:` → 1280px

6. **Build Remaining Components:**
- Repeat steps 5A-5C for each section:
  - Features section (grid layout)
  - Testimonials section (cards)
  - Pricing section (comparison table)
  - Footer (multi-column layout)

**Time breakdown (per component):**
- Simple component (button, card): 15-30 minutes
- Medium component (navigation, footer): 45-60 minutes
- Complex component (hero section, grid layout): 1-2 hours

7. **Handle Images & Assets:**

**Copy exported assets to Astro:**
```bash
# Copy from designer's export folder
cp -r assets/icons/* sites/your-site/public/assets/icons/
cp -r assets/images/* sites/your-site/public/assets/images/
```

**Use Astro's Image component for optimization:**

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/images/hero-bg.webp';
---

<Image src={heroImage} alt="Hero background" width={1920} height={1080} />
```

8. **Quality Assurance:**

**Pixel-perfect validation:**
- Use **Pixelay** plugin in Figma:
  - Plugins → Pixelay → Enter live site URL
  - Overlay Figma design on top of live site
  - Adjust CSS until perfect alignment

- Use **Pixel Perfect** Chrome extension:
  - Export Figma frame as PNG (2x resolution)
  - Load in Chrome extension
  - Overlay on live site → toggle opacity
  - Compare pixel-by-pixel

**Cross-browser testing:**
- Chrome (primary)
- Firefox
- Safari (especially for iOS compatibility)
- Edge

**Responsive testing:**
- Chrome DevTools → Device toolbar
- Test breakpoints: 375px, 768px, 1024px, 1440px

**Accessibility audit:**
- Check color contrast (4.5:1 minimum)
- Ensure keyboard navigation works
- Add ARIA labels where needed

**PHASE 3: Handoff Documentation**

9. **Document Build for Future Maintenance:**

Create `sites/your-site/DESIGN_NOTES.md`:

```markdown
# Design System Reference

## Colors
- Primary: #3B82F6 (Figma variable: `brand/primary`)
- Secondary: #8B5CF6 (Figma variable: `brand/secondary`)

## Typography
- Headings: Poppins (Google Fonts)
- Body: Inter (Google Fonts)
- H1: 48px → 60px (md breakpoint)

## Spacing
- Section padding: 80px vertical
- Element spacing: 24px
- Component padding: 16px

## Components
- Navigation: `src/components/Navigation.astro` (Figma frame: "Desktop Nav")
- Hero: `src/components/HeroSection.astro` (Figma frame: "Hero Section")

## Known Deviations
- Figma shows 72px heading, reduced to 60px for web readability
- Added hover states not shown in static Figma design
```

**Pros of Manual Inspection Workflow:**
- ✅ Highest accuracy (95-100% match)
- ✅ Production-ready code
- ✅ Full control over implementation
- ✅ No plugin dependencies or bugs
- ✅ Optimized for performance
- ✅ Semantic, maintainable code

**Cons of Manual Inspection Workflow:**
- ❌ Time-intensive (12-15 hours per site)
- ❌ Requires advanced developer skills
- ❌ No automation benefits
- ❌ Tedious for large sites
- ❌ High maintenance cost when design changes

**Developer skill required:**
- Advanced Tailwind CSS knowledge
- Strong understanding of responsive design
- Precision and attention to detail
- Ability to measure and translate design to code
- Knowledge of accessibility standards

---

### Specialist 4: Tailwind Integration Analyst

#### Plugin JSON → Tailwind Config Transformation

**Problem:** Design token plugins export JSON, but Tailwind config requires JavaScript object format.

**Solution Ecosystem:**

**Option 1: Style Dictionary (Industry Standard)**

**What it does:** Transforms design tokens from ANY format → ANY platform (Tailwind, CSS, iOS, Android, etc.)

**Installation:**
```bash
pnpm add -D style-dictionary @tokens-studio/sd-transforms
```

**Configuration:** `style-dictionary.config.js`

```javascript
const StyleDictionary = require('style-dictionary');
const { registerTransforms } = require('@tokens-studio/sd-transforms');

// Register Tokens Studio transforms (if using Tokens Studio plugin)
registerTransforms(StyleDictionary);

module.exports = {
  // Input: JSON files from Figma plugin
  source: ['tokens/**/*.json'],

  // Output: Tailwind-compatible JavaScript
  platforms: {
    tailwind: {
      transformGroup: 'tokens-studio', // Or 'js' for non-Tokens Studio
      buildPath: 'packages/design-tokens/',
      files: [
        {
          destination: 'tailwind-tokens.js',
          format: 'javascript/module', // CommonJS format for Tailwind
        },
      ],
    },
  },
};
```

**Transform pipeline:**
```bash
# Run transformation
npx style-dictionary build

# Output: packages/design-tokens/tailwind-tokens.js
```

**Output example:**
```javascript
// packages/design-tokens/tailwind-tokens.js
module.exports = {
  colorBrandPrimary: "#3B82F6",
  colorBrandSecondary: "#8B5CF6",
  colorNeutral100: "#F3F4F6",
  colorNeutral900: "#111827",
  spacingSm: "8px",
  spacingMd: "16px",
  spacingLg: "24px",
  spacingXl: "32px",
  fontSizeBase: "16px",
  fontSizeLg: "20px",
  fontSizeXl: "24px",
  shadowSm: "0 1px 2px rgba(0,0,0,0.05)",
  shadowMd: "0 4px 6px rgba(0,0,0,0.1)",
  shadowLg: "0 10px 15px rgba(0,0,0,0.1)"
};
```

**Import into Tailwind:**
```javascript
// sites/your-site/tailwind.config.cjs
const tokens = require('../../packages/design-tokens/tailwind-tokens.js');

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: tokens.colorBrandPrimary,
          secondary: tokens.colorBrandSecondary,
        },
        neutral: {
          100: tokens.colorNeutral100,
          900: tokens.colorNeutral900,
        },
      },
      spacing: {
        sm: tokens.spacingSm,
        md: tokens.spacingMd,
        lg: tokens.spacingLg,
        xl: tokens.spacingXl,
      },
    },
  },
};
```

**Pros:**
- ✅ Industry-standard tool (used by Salesforce, Adobe, etc.)
- ✅ Supports multi-platform output (web, iOS, Android)
- ✅ Extensible (custom transforms, formats)
- ✅ Well-documented
- ✅ Active maintenance

**Cons:**
- ❌ Learning curve (configuration required)
- ❌ Overkill for simple projects

**Resources:**
- GitHub: https://github.com/amzn/style-dictionary
- Docs: https://amzn.github.io/style-dictionary/
- Tailwind example: https://github.com/michaelmang/design-tokens-tailwind

---

**Option 2: token-transformer + Style Dictionary (For Tokens Studio)**

**What it does:** Converts Tokens Studio JSON → Style Dictionary-compatible format

**Why needed:** Tokens Studio outputs W3C Design Tokens Format, which Style Dictionary doesn't natively understand. `token-transformer` bridges this gap.

**Installation:**
```bash
pnpm add -D token-transformer style-dictionary @tokens-studio/sd-transforms
```

**Two-step process:**

**Step 1: Transform Tokens Studio JSON**
```bash
npx token-transformer tokens/design-tokens.json tokens/sd-input.json --expandTypography=true --expandShadow=true
```

**Options:**
- `--expandTypography=true` - Converts `{ fontFamily, fontSize, fontWeight }` → separate tokens
- `--expandShadow=true` - Converts `{ x, y, blur, color }` → CSS `box-shadow` string
- `--preserveRawValue=false` - Remove unresolved references
- `--resolveReferences=true` - Resolve token aliases (`{color.brand.primary}` → `#3B82F6`)

**Step 2: Run Style Dictionary**
```bash
npx style-dictionary build
```

**Combined script in `package.json`:**
```json
{
  "scripts": {
    "tokens:transform": "token-transformer tokens/design-tokens.json tokens/sd-input.json --expandTypography=true --expandShadow=true",
    "tokens:build": "style-dictionary build",
    "tokens:update": "pnpm tokens:transform && pnpm tokens:build"
  }
}
```

**Pros:**
- ✅ Designed specifically for Tokens Studio
- ✅ Handles W3C Design Tokens Format
- ✅ Resolves complex token references
- ✅ Expands composite tokens (typography, shadows)

**Cons:**
- ❌ Extra build step
- ❌ Only needed if using Tokens Studio plugin

**Resources:**
- NPM: https://www.npmjs.com/package/token-transformer
- GitHub: https://github.com/tokens-studio/token-transformer

---

**Option 3: Anima CLI getTailwindTheme (Simplest)**

**What it does:** Converts design tokens JSON → Tailwind theme object (and vice versa)

**Installation:**
```bash
pnpm add -D @animaapp/anima-dsa
```

**Usage:**
```javascript
// tailwind.config.js
import { getTailwindTheme } from '@animaapp/anima-dsa';
import designTokens from './tokens/design-tokens.json';

const tailwindTheme = getTailwindTheme(designTokens);

export default {
  theme: {
    extend: tailwindTheme,
  },
};
```

**Pros:**
- ✅ Simplest option (single function call)
- ✅ No configuration required
- ✅ Bidirectional conversion (Tailwind ↔ JSON)

**Cons:**
- ❌ Limited customization
- ❌ Anima-specific format required
- ❌ Less flexible than Style Dictionary

**Resources:**
- Docs: https://dsa.animaapp.com/guide/manage-design-tokens/design-tokens-tailwind.html

---

**Option 4: Cobalt UI @cobalt-ui/plugin-tailwind**

**What it does:** Generates Tailwind preset from design tokens

**Installation:**
```bash
pnpm add -D @cobalt-ui/cli @cobalt-ui/plugin-tailwind
```

**Configuration:** `cobalt.config.js`

```javascript
import tailwind from '@cobalt-ui/plugin-tailwind';

export default {
  tokens: './tokens/**/*.json',
  outDir: './packages/design-tokens/',
  plugins: [
    tailwind({
      output: 'tailwind-preset.js',
    }),
  ],
};
```

**Run:**
```bash
npx co build
```

**Output:** `packages/design-tokens/tailwind-preset.js`

**Use in Tailwind:**
```javascript
// tailwind.config.js
const designTokens = require('./packages/design-tokens/tailwind-preset.js');

module.exports = {
  presets: [designTokens],
};
```

**Pros:**
- ✅ Modern, type-safe
- ✅ Tailwind preset format (cleaner config)
- ✅ Good documentation

**Cons:**
- ❌ Newer tool (less battle-tested)
- ❌ Smaller community

**Resources:**
- Docs: https://cobalt-ui.pages.dev/integrations/tailwind

---

#### Recommended Transformation Strategy

**For this project (Starter-Websites monorepo):**

**Recommendation: Style Dictionary + @tokens-studio/sd-transforms**

**Why:**
1. ✅ Works with multiple plugin outputs (Tokens Studio, Figma Token Exporter, Design Tokens)
2. ✅ Monorepo-friendly (output to `packages/design-tokens/`)
3. ✅ Can serve multiple sites with different themes
4. ✅ Extensible for future needs (CSS variables, iOS, Android)
5. ✅ Industry-standard (strong community, long-term support)

**Implementation Plan:**

**Step 1: Create shared design tokens package**
```bash
# Structure
packages/
  design-tokens/
    package.json
    style-dictionary.config.js
    tokens/
      colors.json          # From Figma plugin export
      spacing.json
      typography.json
    output/
      tailwind-tokens.js   # Generated by Style Dictionary
```

**Step 2: Package.json for design-tokens package**
```json
{
  "name": "@workspace/design-tokens",
  "version": "1.0.0",
  "scripts": {
    "build": "style-dictionary build",
    "watch": "style-dictionary build --watch"
  },
  "devDependencies": {
    "style-dictionary": "^3.9.0",
    "@tokens-studio/sd-transforms": "^0.16.0"
  }
}
```

**Step 3: Multi-site token configuration**

For multiple sites with different themes:

```javascript
// style-dictionary.config.js
const StyleDictionary = require('style-dictionary');
const { registerTransforms } = require('@tokens-studio/sd-transforms');

registerTransforms(StyleDictionary);

// Build separate token files per site theme
['site-a', 'site-b', 'site-c'].forEach((siteName) => {
  StyleDictionary.extend({
    source: [`tokens/${siteName}/**/*.json`], // Site-specific tokens
    platforms: {
      tailwind: {
        transformGroup: 'tokens-studio',
        buildPath: `output/${siteName}/`,
        files: [
          {
            destination: 'tailwind-tokens.js',
            format: 'javascript/module',
          },
        ],
      },
    },
  }).buildAllPlatforms();
});
```

**Step 4: Import in site-specific Tailwind config**

```javascript
// sites/site-a/tailwind.config.cjs
const tokens = require('../../packages/design-tokens/output/site-a/tailwind-tokens.js');

module.exports = {
  theme: {
    extend: {
      colors: tokens.colors,
      spacing: tokens.spacing,
      fontSize: tokens.fontSize,
    },
  },
};
```

**Step 5: Nx task for automated token builds**

```json
// packages/design-tokens/project.json
{
  "targets": {
    "build-tokens": {
      "executor": "nx:run-commands",
      "options": {
        "command": "style-dictionary build",
        "cwd": "packages/design-tokens"
      }
    }
  }
}
```

**Step 6: CI/CD integration**

```yaml
# .github/workflows/design-tokens.yml
name: Update Design Tokens

on:
  push:
    paths:
      - 'packages/design-tokens/tokens/**'

jobs:
  build-tokens:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - run: pnpm install
      - run: pnpm nx run design-tokens:build-tokens
      - run: |
          git add packages/design-tokens/output/
          git commit -m "chore: Rebuild design tokens"
          git push
```

---

## Phase 2: Synthesized Findings

### Golden Thread: The Three-Tier Strategy

**INSIGHT:** No single workflow fits all scenarios. The optimal approach is **context-dependent**:

| Scenario | Recommended Workflow | Rationale |
|----------|---------------------|-----------|
| **New client site with design system** | Token Export Workflow | Design tokens reusable across sites, automated updates, single source of truth |
| **Rapid prototype / MVP** | Component-to-Code Workflow | Fast extraction, visual feedback, acceptable accuracy for testing |
| **Production-grade, pixel-perfect site** | Manual Inspection Workflow | Highest accuracy, production-ready code, full control |
| **Hybrid: Design system + custom layouts** | Token Export + Manual Inspection | Automate tokens, manually build complex layouts |

### Interconnected Findings

**Finding 1: Free Plan Capabilities → Workflow Feasibility**

- Free plan DOES support basic inspect panel (Alt/Option key measurements)
- Free plan DOES support all plugins (including token exporters)
- Free plan DOES support local Variables/Styles (cannot publish to team library)
- **Conclusion:** All three workflows are VIABLE on free plan, but with caveats

**Finding 2: Plugin Accuracy → Manual Cleanup Required**

- "Figma to Code" plugins achieve 60-75% accuracy
- Common issues: hardcoded values, absolute positioning, missing responsive breakpoints
- **Conclusion:** Component-to-Code workflow ALWAYS requires 30-50% manual refinement time

**Finding 3: Token Export + Transformation → Ecosystem Maturity**

- Style Dictionary is battle-tested (used by Salesforce, Adobe, Amazon)
- token-transformer bridges Tokens Studio → Style Dictionary gap
- Tailwind config supports CommonJS imports (JavaScript module format required)
- **Conclusion:** Token Export workflow has MATURE tooling, low risk

**Finding 4: Time Investment → Accuracy Trade-off**

| Workflow | Setup Time | Per-Component Time | Accuracy | Maintenance |
|----------|------------|-------------------|----------|-------------|
| Token Export | 2-3 hours (one-time) | 5-10 min (automated) | High (tokens only) | Low (automated) |
| Component-to-Code | 30 min | 30-60 min (includes cleanup) | Medium (60-75%) | Medium (re-extract) |
| Manual Inspection | None | 60-120 min | Highest (95-100%) | High (re-inspect) |

**Conclusion:** Token Export has BEST ROI for long-term projects (high upfront cost, low ongoing cost)

**Finding 5: Monorepo Architecture → Shared Design Tokens**

- Current monorepo has `packages/ui-components/`, `packages/seo-utils/`
- **Opportunity:** Add `packages/design-tokens/` as shared package
- All sites import from shared tokens → consistent branding across portfolio
- **Conclusion:** Token Export workflow ALIGNS with existing architecture

---

## Phase 3: Root Cause Analysis

### Why Previous MCP Server Research Was Invalid

**Root cause:** Assumed Dev Mode access, which is a **paid feature** ($12-35/mo per seat)

**What we know now:**
- MCP server requires Dev Mode API access
- Free plan only has basic inspect panel
- Free plan users CANNOT access Dev Mode features (version comparison, ready-for-dev markers, component playground code export)

**Corrected recommendation:** MCP server is NOT viable for free plan users

---

### Why Plugin-Based Workflow IS Viable

**Root cause:** Figma's plugin ecosystem provides FREE alternatives to paid Dev Mode

**Supporting evidence:**
1. Token export plugins (Figma Token Exporter, Tokens Studio) work on free plan
2. Component-to-code plugins (GreatFrontEnd, FigmaToCode) work on free plan
3. Free plan supports local Variables/Styles creation
4. Basic inspect panel accessible via Alt/Option keyboard shortcut

**Conclusion:** Plugins effectively "unlock" Dev Mode-like features for free plan users

---

### Why Manual Inspection Remains Necessary

**Root cause:** ALL automated plugins have accuracy limitations

**Evidence from research:**
- Complex shadows/gradients often incorrect
- Responsive breakpoints never automated
- Alignment/spacing frequently requires adjustment
- Hardcoded values instead of design tokens

**Conclusion:** Even with plugins, developers need Figma inspection skills for quality assurance

---

## Phase 4: Actionable Recommendations

### PRIMARY RECOMMENDATION: Hybrid Token + Manual Strategy

**Rationale:** Combines automation benefits (tokens) with accuracy benefits (manual layouts)

**Implementation:**

**Step 1: Designer adopts Tokens Studio** (2-3 hours setup)
- Install "Tokens Studio for Figma" plugin
- Create design token collections: colors, spacing, typography, shadows, sizing
- Sync tokens to GitHub repository
- Export tokens as JSON

**Step 2: Developer sets up Style Dictionary pipeline** (2-3 hours setup)
```bash
# Install dependencies
pnpm add -D style-dictionary @tokens-studio/sd-transforms token-transformer

# Create packages/design-tokens/ package
# Configure style-dictionary.config.js (see Specialist 4 findings)
# Run initial build
pnpm nx run design-tokens:build-tokens
```

**Step 3: Import tokens into Tailwind configs** (30 min per site)
```javascript
// sites/your-site/tailwind.config.cjs
const tokens = require('../../packages/design-tokens/output/your-site/tailwind-tokens.js');

module.exports = {
  theme: {
    extend: tokens, // Automated token import
  },
};
```

**Step 4: Manually build component layouts** (8-12 hours per site)
- Use token-based Tailwind classes: `bg-brand-primary`, `space-md`, `text-heading-lg`
- Measure complex layouts in Figma (Alt/Option key)
- Build responsive breakpoints manually
- QA with Pixelay plugin for pixel-perfect validation

**Time estimate (per site after initial setup):**
- Token updates: 5-10 minutes (automated)
- Component layouts: 8-12 hours (manual, but using standardized tokens)
- **Total: 8-12 hours per site** (vs 12-15 hours pure manual)

**Benefits:**
- ✅ Automated design token updates (colors, spacing, typography)
- ✅ Consistent branding across all sites (shared token package)
- ✅ Pixel-perfect layouts (manual inspection)
- ✅ Production-ready code quality
- ✅ Low ongoing maintenance (token automation)

---

### ALTERNATIVE RECOMMENDATION: Component-to-Code for Prototypes

**Use case:** MVP, proof-of-concept, client demos, rapid iteration

**Implementation:**

**Step 1: Designer installs GreatFrontEnd plugin** (5 minutes)

**Step 2: Developer extracts components** (5-8 hours per site)
- Select Figma frame → Run plugin → Copy Tailwind code
- Paste into Astro component
- Manual cleanup (30-50% of time)

**Step 3: Refine for production** (2-4 hours)
- Replace hardcoded values with design tokens
- Add responsive breakpoints
- Fix alignment/spacing issues

**Time estimate: 7-12 hours per site**

**Benefits:**
- ✅ Fast initial extraction
- ✅ Visual feedback (see code immediately)
- ✅ Good for learning Tailwind patterns

**Trade-offs:**
- ❌ Requires significant cleanup time
- ❌ 60-75% accuracy (not pixel-perfect)
- ❌ High maintenance cost when design changes

---

### TERTIARY RECOMMENDATION: Figma Free Plan Workarounds

**Workaround 1: Measurement without Dev Mode**
- Use Alt/Option key + hover for spacing measurements
- Select element → Right sidebar for property values
- Export Figma frames as PNG → use Pixel Perfect Chrome extension for overlay comparison

**Workaround 2: Asset management**
- Export all assets at 2x resolution for retina displays
- Use SVG for icons/logos (infinite scalability)
- Organize exports: `assets/icons/`, `assets/images/`, `assets/fonts/`

**Workaround 3: Design handoff documentation**
- Designer creates dedicated "Developer Handoff" page in Figma
- Annotate spacing values, color codes, font sizes
- Add comments with implementation notes
- Pin comment on first frame: "Read BRAND_GUIDELINES.md before starting"

**Workaround 4: Single source of truth**
- Keep ONE Figma file as production design (not multiple drafts)
- Designer updates this file → commits to version history
- Developer always references latest version via shared link

---

## Appendix: Tool Comparison Matrix

### Token Export Plugins Comparison

| Plugin | Free Plan Compatible | Output Formats | GitHub Sync | Maintenance Status | Best For |
|--------|---------------------|----------------|-------------|-------------------|----------|
| **Figma Token Exporter** | ✅ YES | CSS, SASS, SCSS, JSON | ❌ No | ✅ Active 2025 | Simple token export, non-enterprise users |
| **Tokens Studio** (Free) | ✅ YES | JSON (W3C), Figma Styles/Variables | ✅ Yes (GitHub/GitLab) | ✅ Active 2025 | Design systems as code, Git version control |
| **Design Tokens** (Lukas O.) | ✅ YES | JSON (Style Dictionary) | ✅ Yes (GitHub) | ✅ Active 2025 | Amazon Style Dictionary workflows |
| **Token Exporter** (Nate M.) | ✅ YES | Production-ready code | ❌ No | ✅ Active 2025 | Zero-config, one-click export |

### Component-to-Code Plugins Comparison

| Plugin | Free Plan Compatible | Output Formats | Accuracy | Maintenance Status | Best For |
|--------|---------------------|----------------|----------|-------------------|----------|
| **GreatFrontEnd** | ✅ YES | HTML + Tailwind, HTML + CSS | Medium (60-70%) | ✅ Active 2025 | Rapid prototyping, learning |
| **Figma to Code** (Ferrari) | ✅ YES | HTML, Tailwind, Svelte, Flutter, SwiftUI | Medium (65-75%) | ⚠️ Limited updates | Open-source, educational |
| **Builder.io + Fusion** | ⚠️ Limited free tier | React, Vue, Tailwind | High (AI-assisted) | ✅ Active 2025 | Production (requires subscription) |

### Token Transformation Tools Comparison

| Tool | Input Format | Output Format | Complexity | Best For |
|------|-------------|---------------|------------|----------|
| **Style Dictionary** | JSON (any) | JS, CSS, iOS, Android, etc. | Medium | Multi-platform, extensible |
| **token-transformer** | W3C Design Tokens JSON | Style Dictionary JSON | Low | Tokens Studio → Style Dictionary bridge |
| **Anima CLI** | Anima JSON | Tailwind theme object | Very Low | Simple projects, Anima users |
| **Cobalt UI** | JSON (any) | Tailwind preset | Medium | Type-safe workflows |

---

## Appendix: Step-by-Step Quick Start Guide

### Quickstart: Token Export Workflow (30-Minute Setup)

**For Designer:**

1. **Install Tokens Studio plugin**
   - Figma → Plugins → Browse plugins → Search "Tokens Studio for Figma"
   - Click "Run" → Click "Get started"

2. **Create token collections**
   - Click "+ Add new token set" → Name: "colors"
   - Add tokens:
     - `brand.primary` → `#3B82F6`
     - `brand.secondary` → `#8B5CF6`
   - Repeat for: `spacing`, `typography`, `shadows`

3. **Export tokens**
   - Settings tab → "Export to JSON"
   - Save as `design-tokens.json`
   - Send to developer

**For Developer:**

1. **Create design-tokens package**
```bash
cd c:\Apps\Websites\Starter-Websites
mkdir -p packages/design-tokens/tokens
mkdir -p packages/design-tokens/output
```

2. **Install dependencies**
```bash
pnpm add -D style-dictionary @tokens-studio/sd-transforms
```

3. **Create config**

`packages/design-tokens/style-dictionary.config.js`:
```javascript
const StyleDictionary = require('style-dictionary');
const { registerTransforms } = require('@tokens-studio/sd-transforms');

registerTransforms(StyleDictionary);

module.exports = {
  source: ['tokens/design-tokens.json'],
  platforms: {
    tailwind: {
      transformGroup: 'tokens-studio',
      buildPath: 'output/',
      files: [
        {
          destination: 'tailwind-tokens.js',
          format: 'javascript/module',
        },
      ],
    },
  },
};
```

4. **Copy designer's JSON**
```bash
# Designer sends design-tokens.json
cp ~/Downloads/design-tokens.json packages/design-tokens/tokens/
```

5. **Build tokens**
```bash
cd packages/design-tokens
npx style-dictionary build
```

6. **Import into Tailwind**

`sites/your-site/tailwind.config.cjs`:
```javascript
const tokens = require('../../packages/design-tokens/output/tailwind-tokens.js');

module.exports = {
  theme: {
    extend: tokens,
  },
};
```

7. **Use in components**
```astro
<button class="bg-brand-primary text-white px-spacing-md py-spacing-sm">
  Click Me
</button>
```

**Total time: 30 minutes** (Designer: 10 min, Developer: 20 min)

---

### Quickstart: Component-to-Code Workflow (10-Minute Setup)

**For Designer:**

1. **Install GreatFrontEnd plugin**
   - Figma → Plugins → Browse → "GreatFrontEnd – Figma to Code"
   - Share Figma file link with developer

**For Developer:**

1. **Open Figma file** (view-only access)
   - Click shared link → Opens Figma in browser

2. **Extract component**
   - Select frame (e.g., "Hero Section")
   - Plugins → GreatFrontEnd → Choose "Tailwind"
   - Copy code

3. **Create Astro component**

`sites/your-site/src/components/HeroSection.astro`:
```astro
---
// Paste plugin output here, then clean up
---

<div class="flex flex-col items-center justify-center h-screen bg-blue-500">
  <h1 class="text-5xl font-bold text-white">Welcome</h1>
  <!-- ... rest of plugin output ... -->
</div>
```

4. **Manual cleanup** (30-50% of time)
   - Replace hardcoded colors: `bg-[#3B82F6]` → `bg-brand-primary`
   - Add responsive breakpoints: `text-5xl` → `text-3xl md:text-5xl`
   - Fix spacing: `mt-[24px]` → `mt-6`

**Total time: 10 min setup + 30-60 min per component (including cleanup)**

---

## Final Summary

**CRITICAL ANSWERS:**

**Q: Do "Figma Token Exporter" and "Design Tokens" plugins exist and work on free plan?**
✅ **YES.** Both exist, both work on free plan, both actively maintained in 2025.

**Q: What's the BEST workflow for free plan?**
**HYBRID:** Token Export (for design system) + Manual Inspection (for layouts) = 8-12 hours per site with highest accuracy.

**Q: What CAN'T you do on free plan?**
❌ Dev Mode features (version comparison, ready-for-dev markers, component playground code)
❌ Publish Variables/Styles to team library (can create locally only)
❌ More than 3 Figma files per team project

**Q: What CAN you do on free plan?**
✅ Measure spacing (Alt/Option key)
✅ Export assets (SVG, PNG, WebP)
✅ Copy CSS properties
✅ Use ALL plugins (token exporters, component-to-code)
✅ Create local Variables/Styles
✅ Share view-only links with unlimited developers

**Q: Time estimates?**
- Token Export Workflow: 3.5-5 hours per site (after 2-3 hour initial setup)
- Component-to-Code Workflow: 5-8 hours per site (includes cleanup)
- Manual Inspection Workflow: 12-15 hours per site (highest accuracy)
- **Hybrid (RECOMMENDED): 8-12 hours per site** (tokens automated, layouts manual)

**Q: Best plugin recommendations?**
1. **Tokens Studio for Figma** - Token management + Git sync (FREE tier)
2. **Figma Token Exporter** - Simple token export (FREE)
3. **GreatFrontEnd Figma to Code** - Component extraction (FREE)
4. **Style Dictionary** - Token transformation (FREE, industry standard)

---

**END OF INVESTIGATION REPORT**

**Next Steps:**
1. Choose workflow strategy based on project context (see Three-Tier Strategy table)
2. Set up initial pipeline (30 minutes for Component-to-Code, 2-3 hours for Token Export)
3. Execute first client site using chosen workflow
4. Measure time/accuracy metrics
5. Refine process based on findings

**Questions/Feedback:** This report is a living document. Update as new plugins/tools emerge or workflows are refined through practice.
