# Generating Brand Guidelines from Logo + Research

> **Purpose:** How to create comprehensive brand guidelines when client only provides a logo (no existing brand book)
> **Last Updated:** November 9, 2025

---

## Scenario: Client Has Logo Only, No Brand Guidelines

**Common Situation:**
- Small business with DIY logo
- Startup with basic logo from Fiverr/99designs
- Established business that never formalized brand guidelines
- New client hasn't thought deeply about brand identity

**What We Need to Generate:**
1. Color palette (primary, secondary, accent, neutrals)
2. Typography system (heading fonts, body fonts)
3. Brand personality (adjectives, tone of voice)
4. Design style guidelines (layout, imagery, spacing)

---

## Step 1: Extract Design Tokens from Logo

### Method A: Automatic Color Extraction (AI Agent)

**Agent:** `@brand-design-strategist`

**Prompt:**
```
Analyze logo file and extract brand colors for [client name].

Logo File: [Attach logo.svg, logo.png, or logo.pdf]

Context:
- Client: [client name]
- Industry: [e.g., Tech Startup, Healthcare, E-commerce]
- Target Audience: [e.g., Small business owners, Developers, Consumers]

Tasks:
1. Extract colors from logo:
   - Identify all unique colors used
   - Determine primary brand color (most prominent)
   - Identify secondary/accent colors (if present)
   - Note color values in hex format (#RRGGBB)

2. Analyze color psychology:
   - What emotions/associations do these colors evoke?
   - Are they appropriate for the industry?
   - How do they compare to competitors? (use competitive analysis if available)

3. Recommend complete color palette:
   - Primary: [from logo]
   - Secondary: [from logo or complementary]
   - Accent: [for highlights, CTAs]
   - Neutrals: [grays for backgrounds, text]
     - Background light: #ffffff, #f7fafc
     - Background dark: #1a202c, #2d3748
     - Text primary: #1a202c (dark gray)
     - Text secondary: #4a5568 (medium gray)
     - Borders: #e2e8f0 (light gray)
   - Semantic: success (#10b981), error (#ef4444), warning (#f59e0b), info (#3b82f6)

4. Verify accessibility:
   - Check primary color contrast on white background
   - Ensure text will be readable (4.5:1 ratio minimum)
   - Suggest darker/lighter variants if needed

Deliverable:
Complete color palette with:
- Hex codes
- Usage guidelines (when to use each color)
- Accessibility notes (contrast ratios)
```

**Expected Output:**
```markdown
# Color Palette for [Client Name]

## Primary Color
- **Hex:** #1a202c (Dark Navy)
- **Usage:** CTAs (buttons), links, primary headings, key UI elements
- **Contrast:** 12:1 on white (excellent for text)
- **Psychology:** Trust, professionalism, stability

## Secondary Color
- **Hex:** #2d3748 (Slate Gray)
- **Usage:** Accents, secondary CTAs, borders, supporting UI elements
- **Contrast:** 8:1 on white (excellent for text)

## Accent Color
- **Hex:** #f59e0b (Amber)
- **Usage:** Highlights, hover states, important CTAs (use sparingly)
- **Contrast:** 3.1:1 on white (large text only, not for body copy)
- **Psychology:** Energy, optimism, creativity

## Neutral Colors
- Background Light: #ffffff (White), #f7fafc (Light Gray)
- Background Dark: #1a202c (Dark Gray), #2d3748 (Charcoal)
- Text Primary: #1a202c (Dark Gray) - 12:1 contrast
- Text Secondary: #4a5568 (Medium Gray) - 7:1 contrast
- Borders: #e2e8f0 (Light Gray)

## Semantic Colors
- Success: #10b981 (Green)
- Error: #ef4444 (Red)
- Warning: #f59e0b (Amber)
- Info: #3b82f6 (Blue)

## Accessibility Notes
✅ Primary (#1a202c) passes WCAG AAA for normal text (12:1)
✅ Secondary (#2d3748) passes WCAG AAA for normal text (8:1)
⚠️ Accent (#f59e0b) passes WCAG AA only for large text (3.1:1)
   - Use for headings 18px+, not for body copy
   - Alternative for small text: Darken to #d97706 (4.6:1)
```

---

### Method B: Manual Extraction (Human + Tools)

**Tools:**
1. **Adobe Color** (https://color.adobe.com/create/image)
   - Upload logo image
   - Extracts color palette automatically
   - Provides hex codes

2. **Coolors.co** (https://coolors.co/image-picker)
   - Upload logo
   - Click to select colors
   - Generates palette with hex codes

3. **Figma Eyedropper**
   - Import logo into Figma
   - Use eyedropper tool (I key)
   - Copy hex codes from color picker

**Process:**
1. Upload logo to tool
2. Extract primary color (most prominent in logo)
3. Extract secondary colors (if present)
4. Test contrast ratios: WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/)
5. Fill in missing colors (neutrals, semantic) using complementary colors

---

## Step 2: Typography Recommendations

### Method A: AI-Generated Recommendations

**Agent:** `@brand-design-strategist` + `@web-intelligence-analyst`

**Prompt:**
```
Recommend typography system for [client name] based on logo style.

Logo File: [Attach logo.svg or logo.png]

Context:
- Logo Style: [Describe: Modern sans-serif / Classic serif / Script / Geometric / etc.]
- Industry: [e.g., Tech, Healthcare, Finance, Creative Agency]
- Brand Personality: [Professional, Innovative, Approachable, Bold, Elegant]

Tasks:
1. Analyze logo typography (if text-based):
   - Font style (serif, sans-serif, script, display)
   - Weight (thin, regular, bold, black)
   - Personality (modern, classic, playful, serious)

2. Research industry typography trends:
   - What fonts do successful competitors use?
   - What typography conveys trust/professionalism in this industry?

3. Recommend heading font:
   - Should complement logo style
   - Must work at large sizes (H1 = 48px+)
   - Provide 3 Google Fonts options with rationale
   - Example: "Inter - Modern, highly readable, supports 700 weight for strong headings"

4. Recommend body font:
   - High readability (16px+ sizes)
   - Pairs well with heading font
   - Provide 3 Google Fonts options
   - Example: "Open Sans - Clean, readable, excellent at small sizes"

5. Provide complete typography scale:
   - H1: [size in px / Tailwind class]
   - H2: [size]
   - H3: [size]
   - Body: [size]
   - Caption: [size]

Deliverable:
Typography recommendations with:
- Heading font options (3 choices ranked)
- Body font options (3 choices ranked)
- Font pairing examples ("Inter + Open Sans")
- Complete typography scale
- Google Fonts URLs for easy installation
```

**Expected Output:**
```markdown
# Typography Recommendations for [Client Name]

## Heading Font Options

### Option 1: Inter (Recommended)
- **Style:** Modern sans-serif
- **Why:** Clean, professional, excellent readability at all sizes
- **Weights:** 700 (bold for headings)
- **Google Fonts:** https://fonts.google.com/specimen/Inter
- **Pairs well with:** Open Sans, Lato, Source Sans Pro

### Option 2: Montserrat
- **Style:** Geometric sans-serif
- **Why:** Bold, modern, great for tech/startup brands
- **Weights:** 600-700
- **Google Fonts:** https://fonts.google.com/specimen/Montserrat

### Option 3: Playfair Display
- **Style:** Serif
- **Why:** Elegant, classic, good for luxury/professional services
- **Weights:** 700
- **Google Fonts:** https://fonts.google.com/specimen/Playfair+Display

## Body Font Options

### Option 1: Open Sans (Recommended)
- **Style:** Humanist sans-serif
- **Why:** Highly readable, works at small sizes, pairs with most heading fonts
- **Weights:** 400 (regular), 600 (semi-bold for emphasis)
- **Google Fonts:** https://fonts.google.com/specimen/Open+Sans

### Option 2: Lato
- **Style:** Sans-serif
- **Why:** Warm, friendly, excellent for body copy
- **Weights:** 400, 700

### Option 3: Roboto
- **Style:** Neo-grotesque sans-serif
- **Why:** Modern, tech-focused, Google's default font
- **Weights:** 400, 500, 700

## Recommended Pairing

**Inter (headings) + Open Sans (body)**

Why this works:
- Both are modern sans-serifs (visual harmony)
- Inter is geometric (strong, bold), Open Sans is humanist (warm, readable)
- Excellent readability contrast between headings and body
- Both support extensive weight ranges

## Typography Scale

| Element | Font | Size (px) | Tailwind Class | Weight |
|---------|------|-----------|----------------|--------|
| H1 | Inter | 48-72px | `text-5xl lg:text-7xl` | 700 |
| H2 | Inter | 36-48px | `text-4xl lg:text-5xl` | 700 |
| H3 | Inter | 30-36px | `text-3xl lg:text-4xl` | 700 |
| H4 | Inter | 24px | `text-2xl` | 700 |
| Body | Open Sans | 16-18px | `text-base md:text-lg` | 400 |
| Small | Open Sans | 14px | `text-sm` | 400 |
| Caption | Open Sans | 12px | `text-xs` | 400 |

## Implementation (tailwind.config.cjs)

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
};
```

## Google Fonts Import

Add to `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```
```

---

## Step 3: Brand Personality Definition

### Method A: AI-Generated from Logo + Industry Research

**Agent:** `@brand-design-strategist`

**Prompt:**
```
Define brand personality for [client name] based on logo analysis and industry research.

Logo File: [Attach logo]

Context:
- Industry: [e.g., Tech Startup]
- Target Audience: [e.g., Small business owners]
- Competitive Landscape: [from competitive analysis if available]
- Business Goals: [e.g., Generate leads, Build trust, Establish authority]

Tasks:
1. Analyze logo design elements:
   - Shape language (geometric, organic, angular, rounded)
   - Color palette (bold, muted, vibrant, monochrome)
   - Typography style (modern, classic, playful, serious)
   - Overall feeling (energetic, calm, professional, creative)

2. Research industry brand archetypes:
   - What brand personalities succeed in this industry?
   - Examples: The Innovator, The Caregiver, The Hero, The Sage, etc.
   - Which archetype fits this client best?

3. Define brand personality:
   - Select 5 brand adjectives (e.g., Professional, Innovative, Approachable, Trustworthy, Bold)
   - Explain why each adjective fits
   - Provide examples of how to communicate this personality

4. Define tone of voice:
   - How should the brand communicate? (Authoritative, Conversational, Educational, Inspiring)
   - What to avoid? (Jargon, Overly casual language, Buzzwords)
   - Provide example phrases (good vs. bad)

Deliverable:
Complete brand personality definition:
- 5 brand adjectives with explanations
- Brand archetype (if applicable)
- Tone of voice guidelines
- Example phrases demonstrating voice
- "Do" and "Don't" communication guidelines
```

**Expected Output:**
```markdown
# Brand Personality for [Client Name]

## Brand Archetype: The Sage

**Why:** [Client] positions themselves as experts in [industry], helping clients make informed decisions through knowledge and data.

## Brand Adjectives

### 1. Professional
**Why:** Logo uses clean, corporate colors (navy blue) and structured typography, conveying expertise and reliability.
**How to communicate:** Use industry-standard terminology, provide data-backed insights, maintain consistent brand presentation.

### 2. Innovative
**Why:** Business model disrupts traditional [industry] approach, logo design is modern and forward-thinking.
**How to communicate:** Highlight cutting-edge solutions, showcase new technologies, use forward-looking language ("the future of...", "next-generation...").

### 3. Approachable
**Why:** Despite professional positioning, target audience (small businesses) needs to feel brand is accessible.
**How to communicate:** Use conversational tone in blog posts, provide free resources, respond promptly to inquiries.

### 4. Trustworthy
**Why:** [Industry] requires high trust (sensitive data, significant investment), brand colors (blue) convey stability.
**How to communicate:** Showcase client testimonials, display certifications/awards, be transparent about processes.

### 5. Data-Driven
**Why:** Brand differentiator is analytical approach, logo elements suggest precision and measurement.
**How to communicate:** Use statistics, provide case study metrics, visualize data in infographics.

## Tone of Voice

### Primary Tone: Educational Authority
- Teach clients about [industry] concepts
- Explain "why" behind recommendations
- Use clear examples and analogies
- Avoid talking down to audience

### Communication Guidelines

**DO:**
- ✅ "We help businesses grow through data-driven strategies tailored to your goals."
- ✅ Use industry terms WITH explanations: "SEO (search engine optimization) improves your visibility on Google."
- ✅ Back claims with data: "Our clients see an average 40% increase in qualified leads within 6 months."

**DON'T:**
- ❌ "We're crushing it with sick growth hacks! 🚀"
- ❌ Use jargon without context: "Leverage synergistic paradigms to optimize KPIs."
- ❌ Make unsubstantiated claims: "We're the best in the industry."

## Competitor Differentiation

**How we're different:**
- Most competitors use aggressive sales language → We educate first, sell second
- Competitors focus on features → We focus on outcomes
- Competitors use complex jargon → We simplify and explain
```

---

## Step 4: Complete BRAND_GUIDELINES.md Assembly

### Automated Assembly (AI Agent)

**Agent:** `@brand-design-strategist`

**Prompt:**
```
Create complete BRAND_GUIDELINES.md file for [client name].

Input Files:
- Logo: [path to logo file]
- Color Palette: [from Step 1 output]
- Typography Recommendations: [from Step 2 output]
- Brand Personality: [from Step 3 output]

Additional Context:
- Industry: [e.g., Tech Startup]
- Target Audience: [e.g., Small business owners]
- Competitor Analysis: [path to competitive analysis if available]
- Mood Board: [path to design inspiration research if available]

Tasks:
1. Use BRAND_GUIDELINES_TEMPLATE.md as structure
2. Fill in all sections with researched data:
   - Brand Identity (industry, audience, personality from Step 3)
   - Visual Design → Color Palette (from Step 1)
   - Visual Design → Typography (from Step 2)
   - Spacing Philosophy (recommend based on brand personality - generous for professional, tight for modern)
   - Design Style (extract from mood board analysis)
   - Content Tone & Voice (from Step 3)
   - Navigation Structure (recommend based on industry standards)
   - Page-Specific Requirements (homepage, about, services, blog)
   - Competitor Differentiation (from competitive analysis)

3. Ensure consistency across all sections

4. Add actionable recommendations (not just descriptions)

Deliverable:
Complete BRAND_GUIDELINES.md file ready for:
- Human review and approval
- Use by designers (Figma design phase)
- Use by developers (code implementation)
```

**Output:** `sites/[client-name]/BRAND_GUIDELINES.md` (fully populated)

---

## Step 5: Human Review & Client Approval

### What Humans Must Do

**1. Review AI-Generated Guidelines** (30-45 minutes)
- Read complete BRAND_GUIDELINES.md
- Verify color palette makes sense (good contrast, appropriate for industry)
- Check typography recommendations (readable, on-brand)
- Validate brand personality (does it match client's business?)
- Ensure tone of voice aligns with how client actually speaks

**2. Client Approval Meeting** (30-45 minutes)
- Present brand guidelines to client
- Show color palette visually (create quick mockup in Figma)
- Show typography examples (H1, H2, body text samples)
- Explain brand personality and tone of voice
- Get client feedback and approval

**3. Refine Based on Feedback** (15-30 minutes)
- Adjust colors if client prefers different shades
- Swap font recommendations if client dislikes initial choices
- Modify brand adjectives if client disagrees with personality definition

**4. Final Approval & Lock** (5 minutes)
- Client signs off on BRAND_GUIDELINES.md
- Lock file (no further changes during design phase)
- Use as source of truth for Figma design

---

## Tools Summary

### Color Extraction
- **Adobe Color:** https://color.adobe.com/create/image
- **Coolors.co:** https://coolors.co/image-picker
- **Figma:** Eyedropper tool

### Contrast Testing
- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Colorable:** https://colorable.jxnblk.com/
- **Chrome DevTools:** Inspect element → Color picker shows contrast ratio

### Typography Research
- **Google Fonts:** https://fonts.google.com/
- **Font Pair:** https://www.fontpair.co/ (font pairing suggestions)
- **Typewolf:** https://www.typewolf.com/ (typography inspiration)

### Brand Personality Research
- **Brand Archetypes Guide:** https://www.ebaqdesign.com/blog/brand-archetypes
- **Tone of Voice Examples:** https://www.semrush.com/blog/brand-voice/

---

## Time Savings Estimate

### Without AI (Manual Process)
- Color extraction: 30 minutes
- Contrast testing: 30 minutes
- Typography research: 2 hours
- Brand personality definition: 2 hours
- Writing brand guidelines: 1.5 hours
- **Total:** ~6 hours

### With AI Agents
- Color extraction (AI): 5 minutes
- Contrast testing (AI automated): Included
- Typography research (AI): 10 minutes
- Brand personality (AI): 10 minutes
- Guidelines assembly (AI): 5 minutes
- Human review & refinement: 1.5 hours
- **Total:** ~2 hours

**Time Saved:** ~4 hours (67% faster)

---

## Example: Complete Workflow from Logo → BRAND_GUIDELINES.md

### Input:
- Logo file: `logo-acme-corp.svg`
- Industry: Tech Startup (B2B SaaS)
- Target Audience: Small business owners aged 30-50
- Business Goal: Generate qualified leads

### AI Agent Steps:

1. **Color Extraction** → Primary: #1a202c (navy), Secondary: #2d3748 (slate), Accent: #f59e0b (amber)
2. **Typography** → Headings: Inter 700, Body: Open Sans 400
3. **Brand Personality** → Professional, Innovative, Approachable, Trustworthy, Data-Driven
4. **Assembly** → Complete BRAND_GUIDELINES.md file

### Human Steps:

1. Review AI output (30 min)
2. Present to client (30 min)
3. Refine based on feedback (15 min)
4. Final approval (5 min)

### Output:
- ✅ `sites/acme-corp/BRAND_GUIDELINES.md` (ready for design phase)
- ✅ `sites/acme-corp/tailwind.config.cjs` (colors, fonts configured)

---

**Last Updated:** November 9, 2025
**Related Guides:**
- HUMAN_VS_AI_WORKFLOW.md - Complete workflow breakdown
- COMPLETE_WORKFLOW_GUIDE.md - 8-phase website development process
