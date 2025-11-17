# Figma-to-Code Workflow Guide: Pixel-Perfect Astro + Tailwind Conversion

**Purpose:** Convert finished Figma designs into pixel-perfect Astro components with Tailwind CSS using available Figma MCP tools and proven workflows.

**Last Updated:** November 2025
**Target Stack:** Astro 5.0 + Tailwind CSS 3.4+
**Available Tools:** Figma MCP server (Claude Code integration)

---

## Table of Contents

1. [Overview & Philosophy](#overview--philosophy)
2. [Figma MCP Server Capabilities](#figma-mcp-server-capabilities)
3. [Recommended Workflow: Hybrid MCP + Manual Approach](#recommended-workflow-hybrid-mcp--manual-approach)
4. [Alternative Workflow: Pure Manual (No MCP Required)](#alternative-workflow-pure-manual-no-mcp-required)
5. [Step-by-Step: Figma Design → Astro Website](#step-by-step-figma-design--astro-website)
6. [Design Information Extraction Reference](#design-information-extraction-reference)
7. [Figma to Tailwind Mapping Guide](#figma-to-tailwind-mapping-guide)
8. [Pixel-Perfect Verification Techniques](#pixel-perfect-verification-techniques)
9. [Common Pitfalls & How to Avoid Them](#common-pitfalls--how-to-avoid-them)
10. [Time Estimates & Expectations](#time-estimates--expectations)

---

## Overview & Philosophy

### What This Workflow Solves

**Problem:** Designer hands off finished Figma design → Developer needs pixel-perfect website in Astro + Tailwind

**NOT solving:**
- ❌ Ongoing design token sync/automation
- ❌ Designer making updates after launch
- ❌ Live Figma ↔ codebase bidirectional sync

**Solution:** One-time conversion workflow optimized for:
- ✅ Pixel-perfect accuracy (spacing, colors, typography)
- ✅ Using Figma MCP tools in Claude Code environment
- ✅ Astro + Tailwind CSS output
- ✅ Developer-focused workflow

### Key Principles

1. **Mobile-First Approach:** Implement mobile layout first, then layer responsive breakpoints
2. **Component Hierarchy:** Match Figma's atomic component structure in Astro components
3. **Design Token Extraction:** Extract colors, spacing, typography into Tailwind config before coding
4. **Verification-Driven:** Use browser overlay tools to validate pixel accuracy
5. **Pragmatic Automation:** Use MCP for structure/tokens, manual refinement for perfection

---

## Figma MCP Server Capabilities

### What Figma MCP CAN Do

The Figma MCP server (integrated in Claude Code) provides these extraction capabilities:

#### 1. **get_metadata**
- **Returns:** Sparse XML representation of design structure
- **Includes:** Layer IDs, names, types, positions, sizes
- **Use Case:** Get design outline/hierarchy before detailed extraction

**Example Output:**
```xml
<Frame id="123:456" name="Hero Section" type="FRAME" x="0" y="0" width="1440" height="800">
  <Frame id="123:457" name="Content Container" type="FRAME" x="96" y="200" width="1248" height="400">
    <Text id="123:458" name="Headline" type="TEXT" x="96" y="200" width="600" height="72"/>
  </Frame>
</Frame>
```

#### 2. **get_design_context**
- **Returns:** Detailed styling information for specific elements
- **Includes:** Colors, typography, spacing, borders, shadows, layout properties
- **Use Case:** Extract exact CSS/Tailwind values for implementation
- **Default Format:** React + Tailwind (customizable via prompts)

**Example Prompt:**
```
Get design context for node ID 123:457 in Astro + Tailwind format
```

#### 3. **get_screenshot**
- **Returns:** Visual screenshot of selected Figma elements
- **Use Case:** Maintain layout fidelity, reference during implementation, overlay verification

#### 4. **get_variable_defs**
- **Returns:** Design tokens/variables defined in Figma file
- **Includes:** Color variables, spacing tokens, typography styles
- **Use Case:** Extract design system tokens for Tailwind config

#### 5. **get_code_connect_map**
- **Returns:** Mappings between Figma components and code (if configured)
- **Use Case:** If team has pre-configured Code Connect, get direct component mappings

### What Figma MCP CANNOT Do (Current Limitations)

⚠️ **Important Limitations (as of Nov 2025):**

1. **85-90% Accuracy Rate:** Generated code requires developer oversight and refinement
2. **Requires Paid Plan:** Only works with Figma plans including Dev Mode
3. **Connection Instability:** Frequent connection failures reported
4. **Memory Intensive:** Can slow down system during large file operations
5. **No Direct Astro Support:** Defaults to React + Tailwind (requires prompt customization)
6. **No Perfect Spacing:** Often requires manual adjustment for pixel-perfect spacing

**Key Insight:** MCP is excellent for **structure extraction and token generation**, but **manual refinement is required for pixel-perfect results**.

---

## Recommended Workflow: Hybrid MCP + Manual Approach

### The Best Approach for Pixel-Perfect Conversion

Based on 2025 research and available tools, this hybrid workflow balances automation with accuracy:

```
┌─────────────────────────────────────────────────────────────┐
│ PHASE 1: DESIGN ANALYSIS & TOKEN EXTRACTION (MCP-Heavy)    │
├─────────────────────────────────────────────────────────────┤
│ • Use Figma MCP to extract design tokens                   │
│ • Use Figma Dev Mode to inspect spacing/colors             │
│ • Use get_variable_defs for color/spacing/typography       │
│ • Export optimized images (WebP, responsive sizes)         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ PHASE 2: TAILWIND CONFIG SETUP (Manual Configuration)      │
├─────────────────────────────────────────────────────────────┤
│ • Configure Tailwind with extracted design tokens          │
│ • Set up custom colors, spacing scale, typography          │
│ • Define responsive breakpoints matching Figma frames      │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ PHASE 3: COMPONENT SCAFFOLDING (MCP + Manual)              │
├─────────────────────────────────────────────────────────────┤
│ • Use get_metadata to understand component hierarchy       │
│ • Use get_design_context for initial component structure   │
│ • Manually refine to Astro component patterns              │
│ • Build mobile-first, then add responsive classes          │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ PHASE 4: PIXEL-PERFECT REFINEMENT (Manual + Verification)  │
├─────────────────────────────────────────────────────────────┤
│ • Use browser overlay tools (Pixelay, Over.fig)            │
│ • Screenshot Figma at 100% scale, overlay in browser       │
│ • Adjust spacing/sizing until pixel-perfect match          │
│ • Verify responsive breakpoints                            │
└─────────────────────────────────────────────────────────────┘
```

**Why This Hybrid Approach?**
- MCP excels at **token extraction** and **structure understanding** (fast, accurate)
- Manual work required for **pixel-perfect spacing** and **Astro-specific patterns** (high accuracy)
- Verification tools provide **objective accuracy measurement** (eliminates guesswork)

---

## Alternative Workflow: Pure Manual (No MCP Required)

### When to Use This Approach

**Use the pure manual workflow if:**
- ❌ You don't have Figma MCP access (requires paid Figma plan)
- ❌ MCP server is unavailable or experiencing connection issues
- ❌ You prefer complete manual control over every extraction
- ❌ Working on a client project where automated extraction is discouraged
- ✅ You have strong Figma Dev Mode familiarity
- ✅ You prefer transparency over automation speed

**Note:** This workflow takes **20-30% longer** than the MCP hybrid approach but achieves identical pixel-perfect results.

---

### Pure Manual Workflow Overview

```
┌─────────────────────────────────────────────────────────────┐
│ PHASE 1: MANUAL TOKEN EXTRACTION (Figma Dev Mode)          │
├─────────────────────────────────────────────────────────────┤
│ • Use Figma Dev Mode inspect panel for ALL token values    │
│ • Use Figma Variables panel (if designer created variables)│
│ • Use Figma plugins for token export (optional)            │
│ • Manual color picking and spacing measurement             │
│ • Create Tailwind config from manual extraction            │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ PHASE 2: TAILWIND CONFIG SETUP (Manual Configuration)      │
├─────────────────────────────────────────────────────────────┤
│ • Configure Tailwind with manually extracted design tokens │
│ • Set up custom colors, spacing scale, typography          │
│ • Define responsive breakpoints matching Figma frames      │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ PHASE 3: COMPONENT BUILDING (Manual + Screenshots)         │
├─────────────────────────────────────────────────────────────┤
│ • Use Figma Dev Mode CSS inspector for component structure │
│ • Screenshot reference method for layout verification      │
│ • Manual measurement of spacing/sizing via Dev Mode        │
│ • Convert Figma Auto Layout to Tailwind flex/grid          │
│ • Export assets directly from Figma                        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ PHASE 4: PIXEL-PERFECT REFINEMENT (Manual + Verification)  │
├─────────────────────────────────────────────────────────────┤
│ • Use browser overlay tools (Pixelay, Over.fig)            │
│ • Screenshot Figma at 100% scale, overlay in browser       │
│ • Adjust spacing/sizing until pixel-perfect match          │
│ • Verify responsive breakpoints                            │
└─────────────────────────────────────────────────────────────┘
```

---

### Step-by-Step: Manual Token Extraction

#### Method 1: Figma Dev Mode Inspect Panel (Most Accurate)

**Prerequisites:**
- [ ] Figma paid plan with Dev Mode access
- [ ] Finished design file with proper organization

**Step 1: Extract Color Tokens**

1. **Open Figma in Dev Mode:** Press `Shift + D`

2. **Select Each Unique Color Element:**
   - Click background elements → Note hex values in Inspect panel
   - Click text elements → Note text colors
   - Click buttons, borders, shadows → Note all color values

3. **Document Colors Systematically:**

Create a spreadsheet or text file:

```
PRIMARY COLORS:
- Primary Blue: #2563EB (buttons, links, headings)
- Secondary Purple: #7C3AED (accents, CTAs)
- Accent Yellow: #F59E0B (highlights, badges)

NEUTRAL COLORS:
- Neutral 50 (lightest): #F9FAFB (backgrounds)
- Neutral 100: #F3F4F6 (subtle backgrounds)
- Neutral 500: #6B7280 (secondary text)
- Neutral 900 (darkest): #111827 (primary text)

SUCCESS/ERROR COLORS:
- Success: #10B981
- Error: #EF4444
- Warning: #F59E0B
```

4. **Extract Opacity Values:**
   - Check "Fill" section in Inspect panel
   - Note any colors with opacity < 100%
   - Example: White text at 80% opacity → `rgba(255, 255, 255, 0.8)`

**Step 2: Extract Spacing/Padding Tokens**

1. **Click Container Elements** (sections, cards, containers)
2. **In Inspect Panel → Layout Section:**
   - Note padding values: Top, Right, Bottom, Left
   - Note margin values (if visible)
3. **Document All Unique Spacing Values:**

```
SPACING VALUES USED:
- 2px (micro spacing)
- 4px (tiny spacing)
- 8px (base grid unit)
- 12px (small spacing)
- 16px (medium spacing)
- 24px (large spacing)
- 32px (extra large)
- 48px (section spacing)
- 64px (major sections)
- 72px (custom large)  ← Non-standard, needs custom config
```

**Step 3: Extract Typography Tokens**

1. **Click Each Text Element** (headings, body text, captions)
2. **In Inspect Panel → Typography Section:**
   - Font family (e.g., "Inter", "Poppins")
   - Font size (e.g., 56px, 40px, 16px)
   - Font weight (e.g., 700 = Bold, 600 = Semibold, 400 = Regular)
   - Line height (e.g., 64px or 1.5)
   - Letter spacing (e.g., -0.02em)

3. **Document Typography System:**

```
TYPOGRAPHY TOKENS:
Hero Heading:
  - Font: Poppins
  - Size: 56px
  - Weight: 700 (Bold)
  - Line Height: 64px
  - Letter Spacing: -0.02em

H1 Heading:
  - Font: Poppins
  - Size: 40px
  - Weight: 600 (Semibold)
  - Line Height: 48px

Body Text:
  - Font: Inter
  - Size: 16px
  - Weight: 400 (Regular)
  - Line Height: 24px (1.5)
```

**Step 4: Extract Shadows, Borders, Radius**

1. **Select Elements with Shadows:**
   - Inspect Panel → Effects section
   - Copy shadow values: `0px 4px 12px rgba(0, 0, 0, 0.08)`

2. **Select Elements with Borders:**
   - Inspect Panel → Stroke section
   - Note border width, color, style

3. **Select Elements with Rounded Corners:**
   - Inspect Panel → Corner Radius
   - Note radius values (e.g., 8px, 12px, 16px)

```
EFFECTS TOKENS:
Shadows:
  - Card Shadow: 0px 4px 12px rgba(0, 0, 0, 0.08)
  - Elevated Shadow: 0px 12px 40px rgba(0, 0, 0, 0.12)

Border Radius:
  - Button Radius: 8px
  - Card Radius: 12px
  - Image Radius: 16px
```

---

#### Method 2: Figma Variables Panel (If Designer Used Variables)

**If your designer created Figma Variables (modern approach):**

1. **Open Figma Variables Panel:**
   - Right sidebar → "Local variables" icon (four squares)
   - Or: Main menu → View → Variables

2. **Export Variables:**
   - Variables panel → Click "..." menu → Export
   - OR manually copy variable names and values

3. **Map to Tailwind:**

**Figma Variables Example:**
```
Color Variables:
  color/primary/default → #2563EB
  color/primary/hover → #1D4ED8
  color/neutral/50 → #F9FAFB

Spacing Variables:
  spacing/xs → 4px
  spacing/sm → 8px
  spacing/md → 16px
  spacing/lg → 24px
```

**Tailwind Config Mapping:**
```javascript
// tailwind.config.cjs
colors: {
  'primary': '#2563EB',
  'primary-hover': '#1D4ED8',
  'neutral-50': '#F9FAFB',
},
spacing: {
  'xs': '4px',
  'sm': '8px',
  'md': '16px',
  'lg': '24px',
}
```

---

#### Method 3: Figma Plugins for Token Export (Optional)

**Recommended Plugins (as of Nov 2025):**

1. **Design Tokens (by Jan Six)**
   - Figma Community → Install "Design Tokens"
   - Select frames → Plugins → Design Tokens → Export as JSON
   - Converts Figma styles to JSON token format
   - Requires manual transformation to Tailwind config

2. **Tokens Studio for Figma (formerly Figma Tokens)**
   - Advanced token management
   - Exports to JSON compatible with Style Dictionary
   - Can generate Tailwind config via Style Dictionary build process

3. **Export Styles to CSS Variables**
   - Exports Figma color/text styles as CSS custom properties
   - Convert CSS vars to Tailwind config manually

**Example Plugin Workflow:**

```bash
# 1. Run plugin in Figma → Export tokens.json
# 2. Convert to Tailwind config

# tokens.json (from plugin):
{
  "color": {
    "primary": "#2563EB",
    "neutral-50": "#F9FAFB"
  },
  "spacing": {
    "base": "16px",
    "large": "24px"
  }
}

# 3. Manually create tailwind.config.cjs from JSON
```

**Note:** Plugin reliability varies; manual Dev Mode extraction is often faster.

---

### Building Components Without MCP

#### Step 1: Use Figma Dev Mode CSS Inspector

**Instead of MCP's `get_design_context`, use Figma's built-in CSS export:**

1. **Select Component in Figma** (e.g., Button component)
2. **Dev Mode → Inspect Panel → Code tab**
3. **Choose "CSS" format** (dropdown in Code section)
4. **Figma shows generated CSS:**

```css
/* Figma-generated CSS */
.button-primary {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  gap: 8px;
  background: #2563EB;
  border-radius: 8px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
}
```

5. **Convert CSS to Tailwind Manually:**

```astro
<!-- Converted to Tailwind -->
<button class="flex flex-row items-center justify-center px-6 py-3 gap-2 bg-primary rounded-button font-semibold text-base text-white">
  Click Me
</button>
```

**Mapping Guide:**
```
display: flex              → flex
flex-direction: row        → flex-row
align-items: center        → items-center
justify-content: center    → justify-center
padding: 12px 24px         → py-3 px-6 (12px = 3×4px, 24px = 6×4px)
gap: 8px                   → gap-2 (8px = 2×4px)
background: #2563EB        → bg-primary (custom config)
border-radius: 8px         → rounded-button (custom config)
font-family: 'Inter'       → font-sans (Tailwind config)
font-weight: 600           → font-semibold
font-size: 16px            → text-base
color: #FFFFFF             → text-white
```

---

#### Step 2: Screenshot Reference Method

**For complex layouts, use screenshot overlays:**

1. **Screenshot Figma Frame:**
   - Select frame (e.g., Hero Section)
   - Zoom to 100%
   - Export as PNG: Right-click → "Copy as PNG" → Paste into image editor → Save

2. **Use Screenshot as Layout Reference:**
   - Open screenshot in second monitor OR
   - Use browser overlay tool (Pixelay, PerfectPixel)

3. **Build Component HTML Structure First:**

```astro
---
// src/components/organisms/HeroSection.astro
// Build structure based on visual inspection of screenshot
---

<section class="hero-section">
  <div class="container">
    <div class="content-wrapper">
      <!-- Text content -->
      <div class="text-content">
        <h1>Hero Heading</h1>
        <p>Subheading text</p>
        <div class="cta-buttons">
          <button>Primary CTA</button>
          <button>Secondary CTA</button>
        </div>
      </div>

      <!-- Hero image -->
      <div class="hero-image">
        <img src="..." alt="...">
      </div>
    </div>
  </div>
</section>
```

4. **Add Tailwind Classes Based on Dev Mode Measurements:**

```astro
<section class="bg-neutral-900 text-white py-16">
  <div class="container mx-auto px-4">
    <div class="flex flex-col gap-8 lg:flex-row lg:gap-16">
      <!-- Spacing values from Dev Mode inspection -->
      <div class="space-y-6 lg:w-1/2">
        <h1 class="text-hero font-display">Hero Heading</h1>
        <p class="text-lg text-neutral-300">Subheading text</p>
        <div class="flex flex-col gap-4 md:flex-row">
          <button class="bg-primary text-white px-6 py-3 rounded-button">Primary CTA</button>
          <button class="bg-transparent border-2 border-white text-white px-6 py-3 rounded-button">Secondary CTA</button>
        </div>
      </div>

      <div class="lg:w-1/2">
        <img src="..." alt="..." class="rounded-card">
      </div>
    </div>
  </div>
</section>
```

---

#### Step 3: Manual Spacing/Sizing Measurement

**Use Figma Dev Mode's measurement tools:**

1. **Select Element in Figma**
2. **Hold Option/Alt Key** → Hover over adjacent elements
3. **Figma shows distance measurements** in red lines
4. **Note exact pixel values:**

```
Example measurements:
- Distance from top of section to heading: 64px
- Distance between heading and paragraph: 24px
- Distance between paragraph and buttons: 32px
- Gap between two buttons: 16px
```

5. **Translate to Tailwind:**

```
64px → pt-16 (or mt-16 depending on context)
24px → mb-6
32px → mt-8
16px → gap-4
```

---

#### Step 4: Convert Figma Auto Layout to Tailwind Flex/Grid

**Figma Auto Layout properties → Tailwind classes:**

**Example Figma Auto Layout (Dev Mode shows):**
```
Layout mode: Horizontal
Padding: 24px
Gap: 16px
Align items: Center
Justify content: Space between
```

**Tailwind Conversion:**
```html
<div class="flex flex-row p-6 gap-4 items-center justify-between">
  <!-- Children -->
</div>
```

**Reference Mapping:**
- Layout mode: Horizontal → `flex-row`
- Layout mode: Vertical → `flex-col`
- Padding: 24px → `p-6`
- Gap: 16px → `gap-4`
- Align items: Center → `items-center`
- Justify content: Space between → `justify-between`

---

### Asset Export Without MCP

**Export images directly from Figma:**

1. **Select Image Elements**
2. **Right Sidebar → Export Section**
3. **Configure Export Settings:**
   - Format: PNG (will convert to WebP via Astro later)
   - Resolution: 2x (for retina displays)
   - File naming: Use kebab-case (e.g., `hero-background.png`)

4. **Click "Export [Element Name]"**

5. **Save to:** `sites/your-client/src/assets/images/`

**For multiple images:**
- Select all image layers → Click "Export" once → Batch export

**Alternative: Use Figma Plugin for WebP Export:**
- Install "Exportily" or "TinyImage" plugin
- Export directly as WebP with compression
- Saves manual conversion step

---

### When to Use Pure Manual vs MCP Hybrid

| Factor | Pure Manual | MCP Hybrid | Winner |
|--------|------------|-----------|--------|
| **Setup Time** | 0 minutes (no MCP config) | 10-15 min (MCP auth) | Manual |
| **Token Extraction Speed** | 1-2 hours (manual) | 15-30 min (automated) | MCP |
| **Accuracy** | 100% (you control every value) | 85-90% (requires verification) | Manual |
| **Learning Curve** | Medium (need Figma Dev Mode skills) | Medium-High (need MCP + Figma) | Tie |
| **Reliability** | 100% (no connection issues) | 70-80% (MCP can fail) | Manual |
| **Component Structure** | Requires more manual HTML writing | MCP generates initial structure | MCP |
| **Figma Plan Required?** | Yes (Dev Mode) | Yes (Dev Mode) | Tie |
| **Total Time (5-page site)** | 28-38 hours | 23-33 hours | MCP |
| **Developer Control** | Complete control | Partial automation | Manual |

**Recommendation:**
- **Use Pure Manual if:** MCP unavailable, prefer full control, have strong Figma skills
- **Use MCP Hybrid if:** Want faster token extraction, comfortable with automation refinement

---

### Comparison: Time Breakdown

**Pure Manual Workflow (5-page site):**

| Phase | Pure Manual | MCP Hybrid | Time Difference |
|-------|------------|-----------|-----------------|
| Token Extraction | 2-3 hours | 30 min | +1.5-2.5 hours |
| Tailwind Config | 1 hour | 1 hour | Same |
| Component Building | 10-14 hours | 8-12 hours | +2 hours |
| Responsive Design | 4-6 hours | 4-6 hours | Same |
| Pixel-Perfect Refinement | 6-8 hours | 6-8 hours | Same |
| Quality Assurance | 3-4 hours | 3-4 hours | Same |
| **TOTAL** | **26-36 hours** | **23-33 hours** | **+3-5 hours** |

**Verdict:** Pure manual is 10-15% slower but achieves same quality.

---

### Browser Overlay Tools Clarification

**IMPORTANT: Claude Code Cannot Interact with Browser Overlay Tools**

Tools like **Pixelay** and **Over.fig** are **browser extensions for the developer to use manually**. They are NOT automation tools that Claude Code can control.

#### How Claude Code + Browser Tools Work Together

**Workflow:**

```
1. Claude Code generates Astro component with Tailwind classes
   ↓
2. Developer runs dev server (pnpm dev)
   ↓
3. Developer opens browser at localhost:4321
   ↓
4. Developer manually activates Pixelay/Over.fig browser extension
   ↓
5. Developer loads Figma screenshot overlay in browser
   ↓
6. Developer visually identifies spacing/sizing issues
   ↓
7. Developer tells Claude Code: "The heading needs 8px more bottom margin"
   ↓
8. Claude Code adjusts component: mb-4 → mb-6
   ↓
9. Developer refreshes browser and verifies fix
   ↓
10. Repeat until pixel-perfect
```

#### What Each Tool Does

**Pixelay (Browser Extension):**
- **What it does:** Overlays Figma screenshot on live website in browser
- **Who uses it:** Developer (manually)
- **Can Claude Code use it?** No
- **Developer workflow:**
  1. Install Pixelay extension from Chrome Web Store
  2. Open your local dev site in browser
  3. Click Pixelay extension → Upload Figma screenshot
  4. Compare live site vs design using difference mode
  5. Identify spacing mismatches
  6. Tell Claude Code: "The card padding should be 24px not 20px"

**Over.fig (Browser Extension):**
- **What it does:** Overlays Figma design + lets you click elements to inspect CSS/Tailwind
- **Who uses it:** Developer (manually)
- **Can Claude Code use it?** No
- **Developer workflow:**
  1. Install Over.fig extension
  2. Load Figma design overlay on your site
  3. Click element on overlay → See CSS properties
  4. Compare with your Tailwind classes
  5. Tell Claude Code: "Update the button to use px-6 instead of px-4"

**PerfectPixel (Browser Extension):**
- **What it does:** Generic screenshot overlay (any image, not just Figma)
- **Who uses it:** Developer (manually)
- **Can Claude Code use it?** No

#### Example Developer-Claude Collaboration

**Scenario:** Hero section spacing is slightly off

**Developer (using Pixelay):**
1. Overlays Figma design on `localhost:4321`
2. Sees heading has 4px less bottom margin than Figma design
3. Checks Figma Dev Mode: Shows `margin-bottom: 24px`
4. Checks current code: Has `mb-5` (20px)

**Developer tells Claude Code:**
```
The hero heading currently has mb-5 (20px) but Figma shows it should be 24px.
Update HeroSection.astro to use mb-6 (24px) instead.
```

**Claude Code response:**
```
I'll update the hero heading spacing from mb-5 to mb-6 to match the Figma design's 24px bottom margin.
```

**Claude Code makes edit** → Developer refreshes browser → Overlay now matches ✓

#### Key Takeaway

**Division of Labor:**
- **Claude Code:** Generates/edits code based on your instructions
- **Browser Tools (Pixelay, Over.fig):** Visual verification tools YOU use to identify issues
- **You (Developer):** Bridge between browser verification and Claude Code adjustments

**You cannot ask Claude Code to:**
- ❌ "Use Pixelay to verify the spacing" (Claude Code can't interact with browser)
- ❌ "Open Over.fig and check the button" (Claude Code has no browser access)

**You CAN ask Claude Code to:**
- ✅ "Update the button padding from px-4 to px-6 based on my Pixelay verification"
- ✅ "The overlay shows the heading is 8px too far from the paragraph, reduce the gap"

---

## Step-by-Step: Figma Design → Astro Website

### Prerequisites

**Designer Deliverables:**
- [ ] Finished Figma design file with Dev Mode access
- [ ] All frames properly named and organized
- [ ] Auto Layout used consistently for spacing
- [ ] Text styles and color styles defined
- [ ] Images marked for export with appropriate settings
- [ ] Responsive breakpoints designed (Mobile, Tablet, Desktop)

**Developer Setup:**
- [ ] Claude Code installed with Figma MCP server configured
- [ ] Astro + Tailwind project initialized (use monorepo structure from ARCHITECTURE.md)
- [ ] Figma Dev Mode access (paid plan required)
- [ ] Browser overlay extension installed (Pixelay, Over.fig, or PerfectPixel)

---

### PHASE 1: Design Analysis & Token Extraction

#### Step 1.1: Connect Figma MCP Server (One-Time Setup)

**Terminal:**
```bash
# Add Figma MCP server (Remote option - easiest)
claude mcp add --transport http figma https://mcp.figma.com/mcp

# Authenticate
# In Claude Code, type: /mcp
# Select "figma" → "Authenticate" → Click "Allow Access"
```

**Alternative (Desktop Server):**
- Open Figma Desktop → Menu → Preferences → Enable "Local MCP Server"

#### Step 1.2: Extract Design Tokens

**In Claude Code:**
```
Please analyze this Figma design and extract all design tokens:
[Paste Figma file URL]

Extract:
1. All color variables (hex values)
2. Spacing/padding values (in pixels)
3. Typography styles (font families, sizes, weights, line heights)
4. Border radius values
5. Shadow definitions

Format output as Tailwind config structure.
```

**Figma MCP will call:**
- `get_variable_defs` → Extract color/spacing variables
- `get_metadata` → Understand structure
- `get_design_context` → Get detailed styling

**Example Expected Output:**
```javascript
// tailwind.config.cjs
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#2563EB',
        'secondary': '#7C3AED',
        'accent': '#F59E0B',
        'neutral-50': '#F9FAFB',
        'neutral-900': '#111827',
      },
      spacing: {
        '4.5': '18px',  // Custom from Figma
        '18': '72px',
        '22': '88px',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '64px', fontWeight: '700' }],
        'h1': ['40px', { lineHeight: '48px', fontWeight: '600' }],
      },
      boxShadow: {
        'card': '0px 4px 12px rgba(0, 0, 0, 0.08)',
        'elevated': '0px 12px 40px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
      },
    },
  },
};
```

**Manual Verification:**
- Open Figma → Right-click design → "Copy as CSS" for spot-checking
- Use Figma Dev Mode "Inspect" panel to verify exact pixel values
- Check spacing: Click elements → View padding/margin in Dev Mode

#### Step 1.3: Export & Optimize Images

**In Figma:**
1. Select all image assets → Right sidebar → "Export" section
2. Export settings:
   - **Format:** PNG (will convert to WebP via Astro)
   - **Resolution:** 2x for retina screens
   - **File naming:** Use kebab-case (e.g., `hero-background.png`)

**Alternative (Recommended for WebP):**
- Use Figma plugin: **Exportily** or **TinyImage**
- Export directly as WebP with responsive sizes (1x, 2x)
- Export multiple sizes: Desktop (1920px), Tablet (768px), Mobile (375px)

**Save to:**
```
sites/your-client/src/assets/images/
```

---

### PHASE 2: Tailwind Config Setup

#### Step 2.1: Configure Tailwind with Design Tokens

**File:** `sites/your-client/tailwind.config.cjs`

Paste the extracted config from Step 1.2, then manually verify critical values:

**Spacing Verification:**
```javascript
// Figma uses 8px grid system → Ensure Tailwind spacing aligns
spacing: {
  '0.5': '2px',   // Figma: 2px
  '1': '4px',     // Figma: 4px
  '2': '8px',     // Figma: 8px ← Base unit
  '3': '12px',    // Figma: 12px
  '4': '16px',    // Figma: 16px
  // Add custom values if Figma uses non-standard spacing
  '4.5': '18px',  // Custom from Figma
  '18': '72px',   // Custom large spacing
}
```

**Responsive Breakpoints:**
```javascript
screens: {
  // Match Figma frame widths
  'sm': '640px',   // Mobile landscape
  'md': '768px',   // Tablet
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1536px', // Extra large (if Figma has this breakpoint)
}
```

#### Step 2.2: Test Configuration

**Create test file:** `sites/your-client/src/pages/test-tokens.astro`

```astro
---
// Test if all design tokens work
---
<html>
  <body class="bg-neutral-50 font-sans">
    <!-- Test Colors -->
    <div class="bg-primary text-white p-4">Primary Color</div>
    <div class="bg-secondary text-white p-4">Secondary Color</div>

    <!-- Test Spacing -->
    <div class="mt-18 mb-22">Custom spacing test</div>

    <!-- Test Typography -->
    <h1 class="text-hero font-display">Hero Heading</h1>

    <!-- Test Shadows -->
    <div class="shadow-card p-4">Card Shadow</div>
  </body>
</html>
```

**Run dev server:**
```bash
pnpm dev --filter=your-client-site
```

**Verify:** All tokens render correctly before building components.

---

### PHASE 3: Component Scaffolding (Mobile-First)

#### Step 3.1: Analyze Figma Component Hierarchy

**In Claude Code:**
```
Analyze the component structure of this Figma file:
[Paste Figma file URL]

Provide:
1. Component hierarchy (atomic → organisms)
2. Reusable components to extract
3. Recommended Astro component structure
```

**Figma MCP will call:**
- `get_metadata` → Extract full component tree
- Output component organization

**Example Output:**
```
Recommended Astro Component Structure:

/src/components/
├── atoms/
│   ├── Button.astro          (Figma: "Primary Button" component)
│   ├── Logo.astro            (Figma: "Brand Logo")
│   └── Icon.astro            (Figma: Icon components)
├── molecules/
│   ├── NavItem.astro         (Figma: Navigation item with icon)
│   ├── Card.astro            (Figma: Content card component)
│   └── SocialLink.astro      (Figma: Social media link)
└── organisms/
    ├── Header.astro          (Figma: Header frame)
    ├── HeroSection.astro     (Figma: Hero section frame)
    ├── Footer.astro          (Figma: Footer frame)
    └── ContactForm.astro     (Figma: Contact form frame)
```

#### Step 3.2: Extract Component Code (Start with Mobile)

**Critical:** Always start with **mobile layout first**.

**In Claude Code:**
```
Extract code for the Hero Section from this Figma file:
[Paste Figma file URL + node ID if known]

Requirements:
- Output format: Astro component with Tailwind CSS
- Mobile-first approach (start with mobile layout, no breakpoint prefixes)
- Use design tokens from our Tailwind config
- Semantic HTML structure
- Include exact spacing from Figma Dev Mode

Focus on the MOBILE version of the design first.
```

**Figma MCP will call:**
- `get_metadata` → Get component structure
- `get_design_context` → Get styling details
- `get_screenshot` → Visual reference

**Example Output (Hero Section - Mobile First):**
```astro
---
// src/components/organisms/HeroSection.astro
import Button from '../atoms/Button.astro';
import { Image } from 'astro:assets';
import heroImage from '../../assets/images/hero-background.webp';
---

<section class="relative overflow-hidden bg-neutral-900 text-white">
  <div class="container mx-auto px-4 py-16">
    <!-- Mobile-first layout: vertical stack, no breakpoint prefix -->
    <div class="flex flex-col gap-8">

      <!-- Text Content -->
      <div class="space-y-6">
        <h1 class="text-hero font-display leading-tight">
          Build Faster with AI-Powered Tools
        </h1>
        <p class="text-lg text-neutral-300">
          Transform your workflow with cutting-edge automation designed for modern teams.
        </p>
        <div class="flex flex-col gap-4">
          <Button variant="primary" size="lg">Get Started Free</Button>
          <Button variant="secondary" size="lg">Watch Demo</Button>
        </div>
      </div>

      <!-- Hero Image -->
      <div class="relative h-64 rounded-card overflow-hidden">
        <Image
          src={heroImage}
          alt="Product Dashboard"
          class="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</section>
```

#### Step 3.3: Verify Mobile Layout with Figma

**In Browser:**
1. Open `http://localhost:4321` (dev server)
2. Open browser DevTools → Toggle device toolbar → Select "iPhone 12 Pro" (390px)
3. Take screenshot of Figma mobile design at 100% scale
4. Use **Pixelay** or **Over.fig** extension:
   - Install browser extension
   - Load Figma screenshot overlay
   - Compare live site vs Figma design pixel-by-pixel

**Adjust spacing until perfect:**
```astro
<!-- Example adjustment -->
<!-- BEFORE (MCP generated): -->
<div class="space-y-6">

<!-- AFTER (pixel-perfect match): -->
<div class="space-y-8">  <!-- Changed from 6 to 8 based on overlay -->
```

**Use Figma Dev Mode to verify exact spacing:**
- Click element in Figma → Dev Mode → "Inspect" tab
- Check padding: `Top: 32px, Right: 16px, Bottom: 32px, Left: 16px`
- Translate to Tailwind: `py-8 px-4` (32px = 8 × 4px, 16px = 4 × 4px)

#### Step 3.4: Add Responsive Breakpoints (Tablet, Desktop)

**Only after mobile is pixel-perfect**, add responsive classes:

```astro
<section class="relative overflow-hidden bg-neutral-900 text-white">
  <div class="container mx-auto px-4 py-16 md:py-24 lg:py-32">

    <!-- Mobile: vertical stack | Desktop: horizontal layout -->
    <div class="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">

      <!-- Text Content -->
      <div class="space-y-6 lg:w-1/2">
        <h1 class="text-hero font-display leading-tight lg:text-6xl">
          Build Faster with AI-Powered Tools
        </h1>
        <p class="text-lg text-neutral-300 lg:text-xl">
          Transform your workflow with cutting-edge automation.
        </p>

        <!-- Mobile: stacked buttons | Desktop: horizontal -->
        <div class="flex flex-col gap-4 md:flex-row md:gap-6">
          <Button variant="primary" size="lg">Get Started Free</Button>
          <Button variant="secondary" size="lg">Watch Demo</Button>
        </div>
      </div>

      <!-- Hero Image -->
      <div class="relative h-64 rounded-card overflow-hidden md:h-80 lg:h-96 lg:w-1/2">
        <Image
          src={heroImage}
          alt="Product Dashboard"
          class="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</section>
```

**Verify each breakpoint:**
- **Mobile (< 768px):** Vertical stack, smaller text, stacked buttons
- **Tablet (768px):** Horizontal buttons, slightly larger images
- **Desktop (1024px+):** Horizontal layout (text left, image right), largest text

---

### PHASE 4: Pixel-Perfect Refinement

#### Step 4.1: Browser Overlay Verification

**Recommended Tool:** **Pixelay** (best for Figma integration)

**Installation:**
```
Chrome Web Store → Search "Pixelay for Figma" → Install
```

**Usage Workflow:**
1. **In Figma:** Navigate to the frame you're implementing (e.g., Hero Section)
2. **Screenshot:** Take screenshot at **100% zoom** (critical for accuracy)
3. **In Browser:** Open your local dev site (`http://localhost:4321`)
4. **Activate Pixelay:** Click extension → Upload Figma screenshot
5. **Overlay:** Position screenshot over your live site
6. **Compare:** Use difference mode to see discrepancies

**Adjustment Process:**
```
Overlay shows 4px gap → Check Figma Dev Mode → Says 16px padding
→ Update Tailwind: p-3 to p-4
→ Refresh browser → Overlay now matches ✓
```

**Pro Tips:**
- Use **difference mode** to highlight mismatches (appears red/green)
- Use **split mode** to compare side-by-side
- Take multiple screenshots at different viewport widths for responsive verification

#### Step 4.2: Common Spacing Adjustments

**Most Common Issues Found in Verification:**

| Figma Dev Mode Shows | Initially Used | Should Be |
|---------------------|---------------|-----------|
| Padding: 24px | `p-5` (20px) | `p-6` (24px) |
| Gap: 32px | `gap-6` (24px) | `gap-8` (32px) |
| Margin Top: 48px | `mt-10` (40px) | `mt-12` (48px) |
| Width: 600px | `max-w-xl` (576px) | `max-w-2xl` (672px) or custom |

**Solution for Non-Standard Sizes:**
```javascript
// tailwind.config.cjs
extend: {
  spacing: {
    '15': '60px',   // If Figma uses 60px frequently
    '17.5': '70px', // Custom 70px
  },
  maxWidth: {
    'figma-container': '600px', // Exact Figma container width
  },
}
```

#### Step 4.3: Typography Fine-Tuning

**Check in Figma Dev Mode:**
- Font family, size, weight, line height, letter spacing

**Example Figma Inspection:**
```
Font: Inter
Size: 56px
Weight: 700 (Bold)
Line Height: 64px
Letter Spacing: -0.02em
```

**Tailwind Implementation:**
```javascript
// tailwind.config.cjs
fontSize: {
  'hero': ['56px', {
    lineHeight: '64px',
    fontWeight: '700',
    letterSpacing: '-0.02em',
  }],
}
```

**In Component:**
```astro
<h1 class="text-hero">Build Faster with AI</h1>
```

#### Step 4.4: Color Accuracy Verification

**Use Figma's "Copy as CSS" feature:**
1. Select element in Figma
2. Right-click → "Copy as CSS"
3. Compare hex values with your Tailwind config

**Example:**
```css
/* Figma CSS output */
background: #2563EB;
```

**Check Tailwind config:**
```javascript
colors: {
  'primary': '#2563EB', // ✓ Matches
}
```

**If mismatch:**
- Update Tailwind config with exact Figma hex value
- Re-run verification

---

### PHASE 5: Image Optimization & Responsive Images

#### Step 5.1: Optimize Exported Images

**Using Astro's Built-in Image Optimization:**

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/images/hero-background.png'; // PNG from Figma
---

<!-- Astro automatically converts to WebP, generates responsive sizes -->
<Image
  src={heroImage}
  alt="Product Dashboard"
  widths={[375, 768, 1024, 1920]} // Responsive breakpoints
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1920px"
  class="w-full h-full object-cover"
  format="webp" // Force WebP output
  quality={85}  // Optimize quality
/>
```

**Astro will generate:**
- `hero-background-375w.webp` (mobile)
- `hero-background-768w.webp` (tablet)
- `hero-background-1024w.webp` (desktop)
- `hero-background-1920w.webp` (large desktop)

**Result:** Automatic lazy loading, responsive sizing, WebP format.

#### Step 5.2: Manual WebP Conversion (Alternative)

**If exporting directly as WebP from Figma:**

Use **Exportily** plugin:
1. Install from Figma Community
2. Select image assets
3. Export as WebP at multiple sizes (1x, 2x)
4. Save to `src/assets/images/`

**Usage in Astro:**
```astro
<img
  src="/images/hero-background.webp"
  alt="Product Dashboard"
  loading="lazy"
  class="w-full h-full object-cover"
/>
```

---

### PHASE 6: Final Verification Checklist

**Before considering component "complete":**

- [ ] **Mobile Layout:** Pixel-perfect match to Figma mobile design (verified with overlay)
- [ ] **Tablet Layout:** Matches Figma tablet breakpoint (768px)
- [ ] **Desktop Layout:** Matches Figma desktop breakpoint (1024px+)
- [ ] **Spacing Accuracy:** All padding/margin values match Figma Dev Mode inspection
- [ ] **Typography:** Font sizes, weights, line heights match exactly
- [ ] **Colors:** All hex values match Figma color variables
- [ ] **Images:** Optimized to WebP, responsive sizes generated
- [ ] **Accessibility:** Semantic HTML, ARIA labels where needed, alt text on all images
- [ ] **Responsive Behavior:** Smooth transitions between breakpoints (no layout jumps)

**Quality Gates (from CLAUDE.md):**
- [ ] **Code Quality:** ESLint passes, TypeScript strict mode passes
- [ ] **Accessibility:** WCAG 2.1 AA compliance (run axe DevTools)
- [ ] **Performance:** Lighthouse score >90 (check Core Web Vitals)

**Run automated checks:**
```bash
# From project root
nx lint your-client-site
nx build your-client-site
# Check for build errors
```

---

## Design Information Extraction Reference

### Complete Extraction Checklist

**What to Extract from Figma Before Coding:**

#### Layout & Structure
- [ ] Container widths (max-width values)
- [ ] Section padding (top/bottom spacing between major sections)
- [ ] Grid columns (if using grid layout)
- [ ] Flexbox direction (row vs column, alignment, justify)
- [ ] Gap values (space between flex/grid items)
- [ ] Component hierarchy (atomic → organism structure)

#### Spacing (Critical for Pixel-Perfect)
- [ ] Padding (top, right, bottom, left for each container)
- [ ] Margin (spacing between elements)
- [ ] Gap (spacing in flexbox/grid)
- [ ] Line height (typography spacing)

**How to Extract:**
- Figma Dev Mode → Click element → "Inspect" panel → Copy pixel values
- Note non-standard values (e.g., 18px, 72px) for custom Tailwind config

#### Colors
- [ ] Background colors (hex values)
- [ ] Text colors (with opacity if applicable)
- [ ] Border colors
- [ ] Gradient definitions (if used)
- [ ] Shadow colors (rgba values)

**How to Extract:**
- Figma → Right-click element → "Copy as CSS" → Extract hex values
- Or use MCP: `get_variable_defs` for color tokens

#### Typography
- [ ] Font families (primary, secondary, display)
- [ ] Font sizes (for each heading level, body text)
- [ ] Font weights (regular, medium, semibold, bold)
- [ ] Line heights (tight, normal, relaxed)
- [ ] Letter spacing (if customized)
- [ ] Text alignment (left, center, right)

**How to Extract:**
- Figma Dev Mode → Click text element → "Inspect" → Typography section
- Copy font-family, font-size, font-weight, line-height values

#### Sizing
- [ ] Element widths (fixed widths in px, percentages, max-widths)
- [ ] Element heights (fixed heights, min/max heights)
- [ ] Aspect ratios (for images, videos)

#### Borders & Radius
- [ ] Border width (1px, 2px, etc.)
- [ ] Border style (solid, dashed, etc.)
- [ ] Border radius (rounded corners: 4px, 8px, 12px, etc.)

#### Shadows & Effects
- [ ] Box shadows (offset-x, offset-y, blur, spread, color)
- [ ] Text shadows (if used)
- [ ] Blur effects (backdrop blur)

**How to Extract:**
- Figma Dev Mode → "Effects" section → Copy shadow values
- Example: `box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);`
- Translate to Tailwind: `shadow-card` (custom config)

#### Images & Assets
- [ ] Image dimensions (width, height)
- [ ] Export format (WebP recommended)
- [ ] Export resolution (2x for retina)
- [ ] Image optimization settings
- [ ] Responsive image sizes needed (mobile, tablet, desktop)

#### Interactive States
- [ ] Hover states (color changes, shadows)
- [ ] Focus states (outlines, backgrounds)
- [ ] Active states (button pressed)
- [ ] Disabled states (opacity, cursor)

**How to Extract:**
- Figma → Check component variants or prototype interactions
- Manually note color/shadow changes for hover states

#### Responsive Breakpoints
- [ ] Mobile frame width (typically 375px or 390px)
- [ ] Tablet frame width (typically 768px)
- [ ] Desktop frame width (typically 1280px or 1440px)
- [ ] Layout changes at each breakpoint (stack vs horizontal, text sizes)

**How to Extract:**
- Figma → Check frame names/widths
- Map to Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`

---

## Figma to Tailwind Mapping Guide

### Auto Layout → Tailwind Flexbox/Grid

**Figma Auto Layout is powered by Flexbox**, making conversion straightforward.

| Figma Auto Layout Property | Tailwind Class |
|----------------------------|---------------|
| Display: Flex | `flex` |
| Direction: Horizontal (Row) | `flex-row` |
| Direction: Vertical (Column) | `flex-col` |
| Align Items: Start | `items-start` |
| Align Items: Center | `items-center` |
| Align Items: End | `items-end` |
| Justify Content: Start | `justify-start` |
| Justify Content: Center | `justify-center` |
| Justify Content: End | `justify-end` |
| Justify Content: Space Between | `justify-between` |
| Gap: 8px | `gap-2` |
| Gap: 16px | `gap-4` |
| Gap: 24px | `gap-6` |
| Gap: 32px | `gap-8` |
| Padding: 16px (all sides) | `p-4` |
| Padding: Top 24px, Bottom 24px | `py-6` |
| Padding: Left 16px, Right 16px | `px-4` |
| Wrap: Wrap | `flex-wrap` |

**Example Conversion:**

**Figma Auto Layout Settings:**
```
Direction: Horizontal
Align: Center
Justify: Space Between
Gap: 16px
Padding: 24px
```

**Tailwind Implementation:**
```html
<div class="flex flex-row items-center justify-between gap-4 p-6">
  <!-- Children -->
</div>
```

### Common Figma Patterns → Tailwind

#### Pattern 1: Card Component
**Figma:**
- Background: White (#FFFFFF)
- Border Radius: 12px
- Shadow: 0px 4px 12px rgba(0,0,0,0.08)
- Padding: 24px

**Tailwind:**
```html
<div class="bg-white rounded-card shadow-card p-6">
  <!-- Card content -->
</div>
```

**Requires custom config:**
```javascript
// tailwind.config.cjs
borderRadius: {
  'card': '12px',
},
boxShadow: {
  'card': '0px 4px 12px rgba(0, 0, 0, 0.08)',
},
```

#### Pattern 2: Button Component
**Figma:**
- Background: #2563EB (Primary blue)
- Text Color: #FFFFFF (White)
- Padding: Top/Bottom 12px, Left/Right 24px
- Border Radius: 8px
- Font Weight: 600

**Tailwind:**
```html
<button class="bg-primary text-white py-3 px-6 rounded-button font-semibold">
  Click Me
</button>
```

#### Pattern 3: Hero Section (Two-Column Layout)
**Figma (Desktop):**
- Flexbox: Horizontal
- Two columns: 50% width each
- Gap: 64px
- Align: Center vertically

**Tailwind (Mobile-First):**
```html
<!-- Mobile: stacked vertically -->
<div class="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
  <div class="lg:w-1/2">Left content</div>
  <div class="lg:w-1/2">Right content</div>
</div>
```

### Responsive Breakpoint Mapping

| Device | Figma Frame Width | Tailwind Breakpoint | Usage |
|--------|------------------|--------------------|--------------------|
| Mobile (Portrait) | 375px - 390px | No prefix (default) | Base mobile styles |
| Mobile (Landscape) | 640px | `sm:` | Landscape phones |
| Tablet | 768px | `md:` | iPads, tablets |
| Desktop | 1024px | `lg:` | Laptops, small desktops |
| Large Desktop | 1280px - 1440px | `xl:` | Large monitors |
| Extra Large | 1536px+ | `2xl:` | Ultra-wide monitors |

**Typical Figma Setup:**
- Mobile frame: 375px (iPhone standard)
- Tablet frame: 768px (iPad portrait)
- Desktop frame: 1440px (common design canvas)

**Tailwind Implementation (Mobile-First):**
```astro
<!-- Default: Mobile (375px) -->
<h1 class="text-4xl md:text-5xl lg:text-6xl">
  <!--
    Mobile: 36px (text-4xl)
    Tablet (768px): 48px (text-5xl)
    Desktop (1024px): 60px (text-6xl)
  -->
</h1>
```

### Typography Conversion

**Figma Text Styles → Tailwind Font Sizes:**

| Figma Size | Figma Line Height | Tailwind Class | Custom Config |
|-----------|------------------|---------------|--------------|
| 56px | 64px | `text-hero` | Custom (see below) |
| 40px | 48px | `text-h1` | Custom |
| 32px | 40px | `text-3xl` | Built-in (or `text-h2`) |
| 24px | 32px | `text-2xl` | Built-in (or `text-h3`) |
| 20px | 28px | `text-xl` | Built-in |
| 16px | 24px | `text-base` | Built-in (default) |
| 14px | 20px | `text-sm` | Built-in |

**Custom Typography Config:**
```javascript
// tailwind.config.cjs
fontSize: {
  'hero': ['56px', { lineHeight: '64px', fontWeight: '700' }],
  'h1': ['40px', { lineHeight: '48px', fontWeight: '600' }],
  'h2': ['32px', { lineHeight: '40px', fontWeight: '600' }],
  'h3': ['24px', { lineHeight: '32px', fontWeight: '600' }],
}
```

### Spacing System Alignment

**Figma's 8px Grid → Tailwind Spacing:**

| Figma Spacing | Tailwind Default | Usage |
|--------------|-----------------|---------|
| 2px | `0.5` | Micro spacing |
| 4px | `1` | Tiny spacing |
| 8px | `2` | Small spacing |
| 12px | `3` | Medium-small |
| 16px | `4` | Base spacing |
| 24px | `6` | Large spacing |
| 32px | `8` | Extra large |
| 48px | `12` | Section spacing |
| 64px | `16` | Major sections |

**If Figma uses non-standard spacing (e.g., 18px, 72px):**
```javascript
// tailwind.config.cjs
extend: {
  spacing: {
    '4.5': '18px',  // Custom from Figma
    '18': '72px',   // Custom large spacing
  },
}
```

---

## Pixel-Perfect Verification Techniques

### Browser Overlay Tools Comparison

| Tool | Best For | Cost | Key Features |
|------|---------|------|-------------|
| **Pixelay** | Figma integration | Free | 7 comparison modes, overlay/difference/split, works on localhost |
| **Over.fig** | Extracting CSS/Tailwind | Free | Overlay + click elements for CSS code, spacing inspection |
| **PerfectPixel** | Generic overlay | Free | Semi-transparent overlay, works with any image |

### Recommended: Pixelay Workflow

**Why Pixelay?**
- Direct Figma integration (no manual screenshots)
- Difference mode highlights pixel discrepancies in red/green
- Works on localhost, staging, and live sites
- Supports responsive verification

**Step-by-Step Usage:**

1. **Install:** Chrome Web Store → "Pixelay for Figma" → Add to Chrome

2. **Connect Figma:**
   - Open Pixelay extension
   - Click "Connect Figma"
   - Authorize access

3. **Select Design:**
   - Navigate to your Figma file
   - Select frame to verify (e.g., Hero Section)
   - Copy Figma URL

4. **Overlay on Live Site:**
   - Open your local dev site (`http://localhost:4321`)
   - Click Pixelay extension → Paste Figma URL
   - Pixelay loads Figma design as overlay

5. **Compare:**
   - **Overlay Mode:** See design semi-transparent over your site
   - **Difference Mode:** Mismatches appear red/green
   - **Split Mode:** Side-by-side comparison

6. **Adjust:**
   - Identify spacing discrepancies
   - Update Tailwind classes
   - Refresh browser
   - Re-verify until perfect match

**Pro Tips:**
- Always verify at **100% browser zoom** (not 125% or 150%)
- Verify each responsive breakpoint separately
- Screenshot Figma at exact viewport width (e.g., 375px for mobile)

### Manual Screenshot Overlay (Alternative)

**If browser extension unavailable:**

1. **Take Figma Screenshot:**
   - Set Figma zoom to **100%**
   - Select frame (Cmd/Ctrl + click frame)
   - Export as PNG at 1x resolution
   - Save as `figma-hero-mobile.png`

2. **Open in Browser:**
   - Install **PerfectPixel** extension
   - Load your dev site
   - Upload screenshot to PerfectPixel
   - Adjust opacity (50% recommended)

3. **Align:**
   - Position screenshot to match your site layout
   - Look for spacing mismatches

4. **Measure Discrepancies:**
   - Use browser DevTools → Elements → Computed styles
   - Compare padding/margin values with Figma Dev Mode

### Using Figma Dev Mode for Verification

**Most Accurate Method for Spacing:**

1. **Open Figma in Dev Mode:** Press `Shift + D`

2. **Select Element:** Click the element you're verifying

3. **Inspect Panel (Right Sidebar):**
   - **Layout:** Shows width, height, position
   - **Spacing:** Shows padding, margin (if in auto layout)
   - **Typography:** Shows font details
   - **Colors:** Shows exact hex values

4. **Copy Values:**
   - Click values to copy (e.g., click "24px" copies to clipboard)

5. **Compare with Code:**
   - Check your Astro component Tailwind classes
   - Verify: `p-6` = 24px ✓

**Example Workflow:**

**Figma Dev Mode Shows:**
```
Padding:
  Top: 32px
  Right: 16px
  Bottom: 32px
  Left: 16px
```

**Your Current Code:**
```html
<div class="py-6 px-4">  <!-- py-6 = 24px (WRONG), px-4 = 16px ✓ -->
```

**Corrected Code:**
```html
<div class="py-8 px-4">  <!-- py-8 = 32px ✓, px-4 = 16px ✓ -->
```

### Verification Checklist

**For Each Component:**

- [ ] **Mobile (375px):**
  - [ ] Screenshot Figma mobile frame at 100% zoom
  - [ ] Overlay on dev site at 375px viewport
  - [ ] Verify spacing matches (use Pixelay difference mode)
  - [ ] Verify typography sizes match Figma Dev Mode
  - [ ] Verify colors match (use browser DevTools color picker)

- [ ] **Tablet (768px):**
  - [ ] Screenshot Figma tablet frame
  - [ ] Verify responsive classes (md: prefix) apply correctly
  - [ ] Check layout transitions (stack → horizontal)

- [ ] **Desktop (1024px+):**
  - [ ] Screenshot Figma desktop frame
  - [ ] Verify lg: and xl: breakpoint styles
  - [ ] Check container max-widths

- [ ] **Edge Cases:**
  - [ ] Verify at 320px (small phones)
  - [ ] Verify at 1920px (large monitors)
  - [ ] Check browser zoom levels (100%, 125%, 150%)

---

## Common Pitfalls & How to Avoid Them

### 1. Spacing Inconsistencies (Most Common Issue)

**Problem:** Figma uses custom spacing (e.g., 18px, 72px) that doesn't match Tailwind's default 4px-based scale.

**Example:**
- Figma shows: `Padding: 18px`
- Developer uses: `p-4` (16px) ❌
- Result: 2px off, visible when zoomed in

**Solution:**
```javascript
// tailwind.config.cjs
extend: {
  spacing: {
    '4.5': '18px',  // Add custom spacing
    '18': '72px',
  },
}
```

**Usage:**
```html
<div class="p-4.5">  <!-- Now matches Figma 18px ✓ -->
```

**Prevention:**
- Always check Figma Dev Mode for exact pixel values
- Don't assume standard Tailwind spacing matches Figma
- Create custom spacing tokens for non-standard values

---

### 2. Font Size Scaling Issues

**Problem:** Figma design shows large text (56px) but Tailwind's `text-5xl` (48px) is close but not exact.

**Example:**
- Figma: Hero heading = 56px, line-height 64px
- Developer uses: `text-5xl` (48px) ❌
- Result: Text appears smaller than design

**Solution:**
```javascript
// tailwind.config.cjs
fontSize: {
  'hero': ['56px', { lineHeight: '64px' }], // Exact Figma values
}
```

**Usage:**
```html
<h1 class="text-hero">Exact match ✓</h1>
```

**Prevention:**
- Use Figma Dev Mode to copy exact font-size and line-height
- Don't rely on Tailwind's default size scale for critical headings
- Create custom font sizes for all major text styles

---

### 3. Lack of Margin Support (Figma Limitation)

**Problem:** Figma's Auto Layout only supports padding, not margin. Developers expect margin values.

**Example:**
- Figma design: Two sections with 64px space between them
- Designer creates: Container with 64px top padding
- Developer expects: `mt-16` (margin-top: 64px)

**Solution (Designer):**
- Use Figma Auto Layout **gap** between elements (simulates margin)
- Document spacing intentions in Figma comments

**Solution (Developer):**
- Verify whether Figma spacing is padding or gap
- Ask designer: "Is this padding on the container or gap between elements?"
- Convert gap to Tailwind `gap-` or `space-y-` utilities

**Example Conversion:**
```astro
<!-- Figma shows: Auto Layout vertical, gap 64px -->
<div class="flex flex-col gap-16">  <!-- gap-16 = 64px ✓ -->
  <section>Section 1</section>
  <section>Section 2</section>
</div>
```

---

### 4. Responsive Breakpoint Mismatches

**Problem:** Figma shows mobile (375px), tablet (768px), desktop (1440px) but developer implements wrong breakpoint triggers.

**Example:**
- Figma tablet design starts at 768px
- Developer uses: `md:flex-row` which triggers at 768px ✓
- But layout looks wrong because Figma tablet design expects 800px content width
- Result: Layout breaks between 768px - 800px

**Solution:**
- Check Figma frame widths **and container widths**
- Customize Tailwind breakpoints if needed:

```javascript
// tailwind.config.cjs
screens: {
  'sm': '640px',
  'md': '768px',   // Match Figma tablet frame
  'lg': '1024px',
  'xl': '1440px',  // Match Figma desktop frame
}
```

**Prevention:**
- Verify each breakpoint in browser DevTools
- Test at exact Figma frame widths (375px, 768px, 1440px)
- Check intermediate sizes (e.g., 800px between tablet/desktop)

---

### 5. Color Opacity/Transparency Issues

**Problem:** Figma shows color with 80% opacity, developer uses solid color.

**Example:**
- Figma: Text color `#FFFFFF` at 80% opacity
- Developer uses: `text-white` (100% opacity) ❌
- Result: Text appears too bright

**Solution:**
```javascript
// tailwind.config.cjs
colors: {
  'white-80': 'rgba(255, 255, 255, 0.8)', // Custom with opacity
}
```

**Or use Tailwind's opacity utilities:**
```html
<p class="text-white opacity-80">Text with 80% opacity ✓</p>
```

**Prevention:**
- Always check Figma Dev Mode for opacity values
- Look for "Fill" opacity in Figma inspect panel
- Use rgba values or Tailwind opacity utilities

---

### 6. Shadow Precision Issues

**Problem:** Tailwind's default shadows don't match Figma's custom shadows.

**Example:**
- Figma: `0px 4px 12px rgba(0, 0, 0, 0.08)`
- Developer uses: `shadow-lg` (0 10px 15px -3px rgba(0,0,0,0.1)) ❌
- Result: Shadow looks different (heavier, different blur)

**Solution:**
```javascript
// tailwind.config.cjs
boxShadow: {
  'card': '0px 4px 12px rgba(0, 0, 0, 0.08)',       // Exact Figma
  'elevated': '0px 12px 40px rgba(0, 0, 0, 0.12)',
}
```

**Usage:**
```html
<div class="shadow-card">Card with exact Figma shadow ✓</div>
```

**Prevention:**
- Copy shadow values from Figma Dev Mode → Effects section
- Create custom Tailwind shadow tokens for all unique shadows
- Don't rely on Tailwind's default shadows for design system

---

### 7. Image Export Quality Issues

**Problem:** Images exported from Figma look blurry on retina screens.

**Example:**
- Designer exports: 1x resolution (800px width)
- Displayed on: Retina MacBook (needs 2x resolution)
- Result: Blurry, pixelated images

**Solution:**
- Always export at **2x resolution** for retina screens
- Or use responsive image exports (1x, 2x, 3x)

**Figma Export Settings:**
```
Format: PNG (or WebP via plugin)
Resolution: 2x
Naming: hero-image@2x.png
```

**Astro Implementation:**
```astro
<Image
  src={heroImage}
  widths={[375, 750, 1024, 2048]}  <!-- 1x and 2x sizes -->
  alt="Hero image"
/>
```

**Prevention:**
- Establish export guidelines with designer (always 2x)
- Use Astro's Image component for automatic optimization
- Convert to WebP for 30-50% smaller file sizes

---

### 8. Missing Hover/Focus States

**Problem:** Developer implements default state but forgets interactive states.

**Example:**
- Figma shows: Button with hover state (darker background)
- Developer implements: Only default state ❌
- Result: No visual feedback on hover

**Solution:**
- Check Figma for component variants or prototype interactions
- Implement all states:

```astro
<button class="
  bg-primary text-white px-6 py-3 rounded-button
  hover:bg-primary-dark     <!-- Hover state -->
  focus:ring-2 focus:ring-primary  <!-- Focus state -->
  active:bg-primary-darker  <!-- Active/pressed state -->
  disabled:opacity-50 disabled:cursor-not-allowed  <!-- Disabled -->
">
  Click Me
</button>
```

**Prevention:**
- Ask designer: "Are there hover/focus states for this component?"
- Check Figma component variants panel
- Test all interactive states in browser

---

### 9. Font Loading Issues (Flash of Unstyled Text)

**Problem:** Custom fonts from Figma not loaded correctly, causing layout shift.

**Example:**
- Figma uses: "Inter" font
- Developer doesn't preload font
- Result: Flash of system font → Inter loads → layout shift

**Solution (Self-Hosted Fonts Recommended):**
```astro
---
// src/layouts/BaseLayout.astro
---
<html>
  <head>
    <!-- Preload fonts -->
    <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
  </head>
  <body class="font-sans">  <!-- Inter applied via Tailwind config -->
```

**Tailwind Config:**
```javascript
fontFamily: {
  'sans': ['Inter', 'system-ui', 'sans-serif'],  // Inter as primary
}
```

**Prevention:**
- Self-host fonts (don't rely on Google Fonts for performance)
- Use `font-display: swap` in CSS
- Preload critical fonts in HTML head

---

### 10. Forgetting Alt Text & Accessibility

**Problem:** Figma doesn't enforce alt text, developers forget to add it.

**Example:**
- Figma: Image of product dashboard
- Developer: `<img src="dashboard.png">` ❌
- Result: Screen readers can't describe image, fails accessibility audit

**Solution:**
```astro
<Image
  src={dashboardImage}
  alt="Product dashboard showing analytics overview with charts"  ✓
/>
```

**Prevention:**
- Add alt text to ALL images (even decorative ones use `alt=""`)
- Run accessibility audits: `@axe-core/playwright`
- Follow WCAG 2.1 AA guidelines (from CLAUDE.md)

---

## Time Estimates & Expectations

### Typical Timeline: Figma Design → Deployed Astro Site

**For a 5-page website (Home, About, Services, Blog, Contact):**

| Phase | Task | Time Estimate |
|-------|------|--------------|
| **Phase 1** | Design Analysis & Token Extraction | 2-3 hours |
| | - Connect Figma MCP, extract tokens | 30 min |
| | - Configure Tailwind with design system | 1 hour |
| | - Export & optimize images | 30-60 min |
| **Phase 2** | Component Scaffolding (Mobile-First) | 8-12 hours |
| | - Homepage (5-6 sections) | 3-4 hours |
| | - About page (3-4 sections) | 1.5-2 hours |
| | - Services page (4-5 sections) | 2-3 hours |
| | - Blog listing + post template | 1-2 hours |
| | - Contact page (form + map) | 1-2 hours |
| **Phase 3** | Responsive Breakpoints | 4-6 hours |
| | - Add tablet (md:) breakpoints | 2-3 hours |
| | - Add desktop (lg:) breakpoints | 2-3 hours |
| **Phase 4** | Pixel-Perfect Refinement | 6-8 hours |
| | - Browser overlay verification | 2-3 hours |
| | - Spacing adjustments | 2-3 hours |
| | - Typography fine-tuning | 1-2 hours |
| **Phase 5** | Quality Assurance | 3-4 hours |
| | - Accessibility audit (axe DevTools) | 1 hour |
| | - Performance testing (Lighthouse) | 1 hour |
| | - Cross-browser testing | 1-2 hours |
| **TOTAL** | **End-to-End Timeline** | **23-33 hours** |

**Translates to:**
- **3-5 business days** for experienced developer
- **5-7 business days** for junior developer
- **Under 1 week** turnaround (matching CLAUDE.md goal)

### Time-Saving Strategies

**To achieve <1 week timeline:**

1. **Reuse Shared Components:** If you've already built a site in this monorepo, reuse:
   - Header/Footer components
   - Button variants
   - Card components
   - Form elements
   - → **Saves 30-40% time**

2. **Use Figma MCP for Tokens:** Let MCP extract all design tokens automatically
   - → **Saves 1-2 hours** vs manual extraction

3. **Mobile-First Discipline:** Don't jump to desktop first
   - Implementing mobile → desktop is faster than desktop → mobile
   - → **Saves 2-3 hours** in rework

4. **Verify Incrementally:** Don't wait until all components are built to verify
   - Verify each component immediately after coding
   - → **Prevents large-scale rework** (saves 3-4 hours)

5. **Use Astro Image Component:** Automatic optimization, no manual WebP conversion
   - → **Saves 1-2 hours** in image processing

**With these strategies: ~20 hours total** (2.5 days for full-time developer)

### Factors That Increase Timeline

**Add time for:**
- **Complex Animations:** Figma shows animations not easily replicated in CSS (+2-4 hours per complex interaction)
- **Custom Illustrations/SVG:** Optimizing SVG exports, adjusting paths (+1-2 hours per page)
- **Form Validation:** Client-side validation, error states (+2-3 hours)
- **CMS Integration:** Connecting to Sveltia CMS, configuring content collections (+3-5 hours)
- **Third-Party Integrations:** Google Maps, analytics, chat widgets (+1-2 hours each)

---

## Advanced Techniques

### Using Figma Variables for Theme Switching

**If Figma design uses variables (color modes):**

**Figma Setup:**
- Color variables: `primary/light`, `primary/dark`
- Designer creates two modes: Light, Dark

**Extract with MCP:**
```
Extract all color variables and modes from this Figma file:
[Paste URL]

Output as Tailwind CSS custom properties for dark mode.
```

**Implementation:**
```javascript
// tailwind.config.cjs
module.exports = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'background': 'var(--color-background)',
      },
    },
  },
};
```

```astro
---
// src/layouts/BaseLayout.astro
---
<html class="light">  <!-- or "dark" -->
  <style is:global>
    :root.light {
      --color-primary: #2563EB;
      --color-background: #FFFFFF;
    }
    :root.dark {
      --color-primary: #60A5FA;
      --color-background: #111827;
    }
  </style>
```

### Component-Driven Development (Atomic Design)

**Match Figma's component structure in code:**

**Figma Component Hierarchy:**
```
Components/
├── Atoms/
│   ├── Button (Primary, Secondary variants)
│   ├── Input Field
│   └── Icon
├── Molecules/
│   ├── Search Bar (Input + Button)
│   └── Nav Item (Icon + Text)
└── Organisms/
    ├── Header (Logo + Nav Items + CTA Button)
    └── Hero Section
```

**Astro Component Structure (Mirror Figma):**
```
src/components/
├── atoms/
│   ├── Button.astro
│   ├── InputField.astro
│   └── Icon.astro
├── molecules/
│   ├── SearchBar.astro
│   └── NavItem.astro
└── organisms/
    ├── Header.astro
    └── HeroSection.astro
```

**Benefits:**
- Designer and developer speak same language
- Easy to locate components
- Supports design system evolution

---

## Troubleshooting

### MCP Connection Issues

**Problem:** Figma MCP server won't connect or authenticate

**Solutions:**
1. **Check Figma Plan:** Requires paid plan with Dev Mode
2. **Re-authenticate:**
   ```bash
   # In Claude Code
   /mcp
   # Select "figma" → "Remove" → Re-add server
   claude mcp add --transport http figma https://mcp.figma.com/mcp
   ```
3. **Use Desktop Server Instead:**
   - Figma Desktop → Preferences → Enable "Local MCP Server"

### Inaccurate MCP Code Generation

**Problem:** MCP generates React code with incorrect spacing

**Solution:**
- Use MCP for **structure understanding only**
- Manually refine spacing with Figma Dev Mode values
- Customize prompt:
  ```
  Extract design context for Hero Section in Astro + Tailwind format.

  IMPORTANT:
  - Use exact spacing values from Figma Dev Mode
  - Output Astro component, not React
  - Use semantic HTML
  ```

### Overlay Verification Shows Mismatches

**Problem:** Pixelay shows red/green differences despite matching Figma values

**Solutions:**
1. **Check Browser Zoom:** Must be 100% (not 125%)
2. **Check Figma Zoom:** Screenshot at 100% Figma zoom
3. **Check Font Rendering:** Browser may render fonts slightly differently
   - Use Figma's "CSS" export for exact values
4. **Sub-pixel Rendering:** Some browsers round pixels differently
   - Accept 1px differences as acceptable tolerance

---

## Conclusion & Best Practices Summary

### Key Takeaways

1. **Hybrid Approach Wins:** Use MCP for token extraction, manual work for pixel perfection
2. **Mobile-First Always:** Implement mobile → tablet → desktop (saves time, prevents rework)
3. **Verification is Critical:** Use browser overlay tools (Pixelay, Over.fig) to objectively measure accuracy
4. **Custom Tokens Required:** Don't assume Tailwind defaults match Figma (they rarely do)
5. **Figma Dev Mode = Truth:** When in doubt, trust Dev Mode inspect panel over visual estimation

### Final Workflow Summary (Quick Reference)

```
1. Extract Tokens (MCP + Dev Mode) → Configure Tailwind
2. Build Mobile Components → Verify with Overlay → Refine Spacing
3. Add Responsive Breakpoints → Verify Each Breakpoint
4. Optimize Images (Astro Image Component)
5. Run Quality Checks (Accessibility, Performance)
6. Deploy
```

### Resources

- **Figma MCP Docs:** https://developers.figma.com/docs/figma-mcp-server/
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Astro Image Docs:** https://docs.astro.build/en/guides/images/
- **Pixelay Extension:** Chrome Web Store → "Pixelay for Figma"
- **Epic Web Dev Course:** "Pixel Perfect Figma to Tailwind" (paid course, highly recommended)

---

**Document Version:** 1.1
**Last Updated:** November 10, 2025
**Maintained By:** Development Team
**Questions?** Ask in team Slack #design-to-code channel

**Version 1.1 Changes:**
- Added "Alternative Workflow: Pure Manual (No MCP Required)" section
- Added "Browser Overlay Tools Clarification" explaining Claude Code cannot interact with Pixelay/Over.fig
- Clarified developer-Claude Code collaboration workflow for pixel-perfect verification
