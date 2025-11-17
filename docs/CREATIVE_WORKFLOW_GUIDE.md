# Creative Design Workflow Guide

**Purpose:** Complete user guide for the AI-powered creative design system that produces non-generic, research-grounded website designs using Agentic RAG methodology.

**Target Audience:** Developers, designers, and project managers using the Multi-Site Website Development System.

**Version:** 1.0
**Last Updated:** 2025-11-17

---

## Table of Contents

1. [Overview](#overview)
2. [When to Use Creative Workflow](#when-to-use-creative-workflow)
3. [Quick Start (5-Minute Guide)](#quick-start)
4. [Complete Workflow](#complete-workflow)
5. [Understanding Outputs](#understanding-outputs)
6. [Troubleshooting](#troubleshooting)
7. [FAQ](#faq)

---

## Overview

### What is the Creative Design System?

The Creative Design System is an AI-powered workflow that generates **unique, brand-aligned design concepts** from research documents, preventing the "generic AI aesthetic" through:

- **Agentic RAG Methodology:** Multi-query research synthesis (not summarization)
- **Grounded Metaphor Generation:** Visual metaphors traceable to brand keywords (95%+ grounding rate)
- **Anti-AI Design Checklist:** 5 constraints that prevent generic defaults
- **Quality Gate 7:** Automated verification of creative quality before deployment

**Key Innovation:** System generates **creative direction** (meta-prompts), NOT final designs, preserving designer agency while accelerating research.

### System Architecture

```
User invokes @creative-director-orchestrator
  ↓
Phase 1: Context Gathering (brand docs, personas, constraints)
  ↓
Phase 2: Agentic RAG Research (multi-query decomposition)
  ↓
Phase 3: @metaphor-researcher (grounded metaphor generation)
  ↓
Phase 4: @creative-brief-synthesizer (meta-prompt creation)
  ↓
Phase 5: Human Review Checkpoint (approve/refine/reject)
  ↓
Phase 6: @design-implementation-specialist (Astro components)
  ↓
Phase 7: @metaphor-grounding-verifier (Gate 7 validation)
  ↓
✅ Production Deployment (if all quality gates pass)
```

### Key Deliverables

**Generated Artifacts:**
1. `metaphor-framework.yml` - Research-backed visual metaphor with traceability
2. `creative-meta-prompt.md` - Design brief for implementation (6 sections)
3. Astro components - Working components embodying metaphor
4. `grounding-report.md` - Verification report (95%+ traceability)
5. `implementation-notes.md` - Component-to-metaphor documentation

---

## When to Use Creative Workflow

### Decision Tree

```
START: New client website project
  ↓
Question 1: Does client supply finalized designs (Figma, mockups)?
  ├─ YES → SKIP creative orchestrator, implement supplied designs
  └─ NO → Continue to Question 2

Question 2: Is this a simple template-based project?
  ├─ YES (landing page, standard layout) → SKIP creative orchestrator
  └─ NO (custom design needed) → Continue to Question 3

Question 3: Is there time for research phase (2-4 hours)?
  ├─ NO (urgent deadline <24 hours) → SKIP creative orchestrator
  └─ YES → Continue to Question 4

Question 4: Do you have brand research materials?
  ├─ NO (no BRAND_GUIDELINES.md, personas, etc.) → SKIP (gather materials first)
  └─ YES (complete research corpus) → ✅ USE CREATIVE ORCHESTRATOR
```

### Use Cases (When to Invoke)

**✅ USE creative-director-orchestrator when:**

1. **Starting from Scratch**
   - New client website, no existing designs supplied
   - Need research-backed creative concept
   - Have complete brand research corpus (guidelines, personas, constraints)

2. **Exploring Alternatives**
   - Existing design feels generic/uninspired
   - Client wants to see multiple creative directions
   - Need to differentiate from competitors

3. **Breaking Creative Blocks**
   - Designer needs research-driven inspiration
   - Want to explore non-obvious visual metaphors
   - Need to justify creative decisions with research traceability

4. **Client Presentations**
   - Want to show research depth and strategic thinking
   - Need multiple design variations grounded in brand strategy
   - Client values transparency in creative process

### Skip Conditions (When NOT to Use)

**❌ SKIP creative orchestrator when:**

1. **Finalized Designs Supplied**
   - Client provides approved Figma files, mockups, or style guide
   - Your job is implementation, not concept generation

2. **Template-Based Projects**
   - Simple landing page using standard patterns
   - Cookie-cutter layout with minimal customization
   - Brand guidelines specify exact template to follow

3. **Urgent Timelines**
   - Deployment deadline <24 hours (no time for research phase)
   - Emergency hotfix or content update
   - MVP/prototype where design quality is secondary

4. **Insufficient Research Materials**
   - No BRAND_GUIDELINES.md or equivalent
   - Missing personas/user research
   - No understanding of constraints or differentiators

5. **Designer Preference**
   - Designer prefers manual creative process
   - Already has strong creative vision
   - Wants to sketch/prototype without AI assistance

---

## Quick Start

### 5-Minute Invocation Guide

**Prerequisites:**
- [ ] Project exists in `sites/{client-name}/` directory
- [ ] BRAND_GUIDELINES.md present (or brand identity docs)
- [ ] CLAUDE.md present (project constraints, technical requirements)
- [ ] At least one persona or user pain point documented

**Step 1: Invoke Orchestrator**

```bash
# In your terminal or Claude Code
@creative-director-orchestrator

# Provide context in natural language:
"Generate creative design concept for [client-name] financial services website.
We have complete brand guidelines but no existing design mockups."
```

**Step 2: Provide Research Corpus**

Orchestrator will request:
1. BRAND_GUIDELINES.md (or equivalent)
2. CLAUDE.md (project requirements)
3. Personas or user research
4. Competitor analysis (optional)

**Upload/reference all available brand documents.**

**Step 3: Wait for Research Phase**

Orchestrator will:
- Extract keywords from brand docs (5-7 keywords)
- Generate grounded metaphor (e.g., "Systematic Orchestra")
- Create creative meta-prompt (6-section brief)

**Estimated time:** 15-30 minutes

**Step 4: Review & Approve Meta-Prompt**

You'll receive:
- **Core Metaphor:** "The Systematic Orchestra" (derived from keywords: systematic, expert, harmonious...)
- **Creative Direction:** Specific visual implications (colors, spacing, typography)
- **Creative Puzzle:** Constraint reframed as challenge (e.g., "Build trust without case studies")

**Decision:**
- ✅ **Approve** → Proceed to implementation
- 🔄 **Refine** → Provide specific feedback, orchestrator re-synthesizes
- 🔀 **Alternatives** → Request 3 systematic variations

**Step 5: Implementation (Optional)**

If you approve meta-prompt:

```bash
# Orchestrator will ask:
"Proceed with implementation? (yes/no)"

# If YES:
@design-implementation-specialist generates Astro components
```

**OR** take meta-prompt and implement manually (preserves full designer control).

**Step 6: Verification (Gate 7)**

After implementation, orchestrator automatically runs:

```bash
@metaphor-grounding-verifier
# Checks:
# - Grounding rate ≥95%
# - Anti-AI Design Checklist (5/5 constraints)
# - Zero generic AI defaults
```

**Pass:** ✅ Deployment approved
**Fail:** ❌ Specific fix recommendations provided

---

## Complete Workflow

### Phase 1: Context Gathering

**Orchestrator Initial Prompt:**

```markdown
"Hello! I am your Creative Director for generating research-grounded design concepts.

To generate a unique, non-generic design concept, I need to analyze your complete brand research corpus.

Please provide:
1. BRAND_GUIDELINES.md (or equivalent brand identity documents)
2. CLAUDE.md (project constraints and technical requirements)
3. Personas or user research (if available)
4. Competitor analysis or industry context (if available)
5. Any existing design assets or mood boards

I will use these to build a grounded creative meta-prompt using Agentic RAG methodology."
```

**Your Response:**

Provide file paths or upload documents:

```markdown
Brand docs available:
- sites/acme-corp/BRAND_GUIDELINES.md
- sites/acme-corp/brand-values.md
- sites/acme-corp/personas.md
- Project requirements: CLAUDE.md

Competitor analysis: Not available (can you conduct web research?)
```

**Orchestrator Validation:**

Checks for minimum requirements:
- [ ] BRAND_GUIDELINES.md (REQUIRED)
- [ ] CLAUDE.md (REQUIRED)
- [ ] At least one persona or pain point (REQUIRED)
- [ ] Constraints identified (REQUIRED)

**If missing:** Requests specific materials before proceeding.

### Phase 2: Agentic RAG Research

**Orchestrator Internal Process (automatic):**

```markdown
GOAL: Generate creative design concept for [project]

SUB-QUERIES (decomposed):

Sub-Query 1: Get Persona Primary Frustration
- Target: personas.md
- Tool: Grep("frustration|pain|problem", personas.md)
- Result: "Scattered information across 5 tools causing daily friction"

Sub-Query 2: Get Key Differentiator
- Target: BRAND_GUIDELINES.md
- Tool: Grep("unique|differentiator|unlike", BRAND_GUIDELINES.md)
- Result: "Single source of truth with real-time transparency"

Sub-Query 3: Get Hard Constraint
- Target: CLAUDE.md, Section 13 (Prohibitions)
- Tool: Read(CLAUDE.md)
- Result: "No stock photos of people"

Sub-Query 4: Get Core Brand Keywords (5-7)
- Target: BRAND_GUIDELINES.md, brand-values.md
- Tool: Grep("brand value|personality|tone", BRAND_GUIDELINES.md)
- Result: ["systematic", "expert", "precision", "harmonious", "calm confidence"]

Sub-Query 5: Get External Inspiration
- Target: Web
- Tool: WebSearch("financial services creative design examples 2025")
- Result: [3-5 URLs with context]
```

**Output:** Structured research synthesis report (not summary).

### Phase 3: Grounded Metaphor Generation

**Sub-Agent: @metaphor-researcher**

**Process:**

```markdown
Step 1: Keyword Validation
- Received 5 keywords with citations ✅

Step 2: Metaphor Brainstorming (Source Domain Mapping)

Keyword: "systematic"
  → Orchestra (systematic coordination of musicians)
  → Assembly line (systematic production process)
  → Swiss watch (systematic mechanical precision)

Keyword: "harmonious"
  → Orchestra (musical harmony)
  → Ecosystem (natural harmony)

Keyword: "expert"
  → Orchestra conductor (expert coordination)
  → Surgeon (expert precision)

PATTERN RECOGNITION:
"Orchestra" appears for: systematic, harmonious, expert (3/3 keywords)

CANDIDATE METAPHOR:
"Systematic Orchestra"

Step 3: Consistency Scoring

| Metaphor | systematic | expert | precision | harmonious | calm | Score | Conflicts |
|----------|-----------|--------|-----------|------------|------|-------|-----------|
| Systematic Orchestra | +2 | +2 | +2 | +2 | +1 | 9/10 | None |
| Assembly Line | +2 | 0 | +1 | -1 | -2 | 0/10 | ⚠️ Conflicts |

SELECTED: "Systematic Orchestra" (9/10, no conflicts)

Step 4: Visual Principles Translation

visual_principles:
  color_palette:
    description: "Orchestra hall elegance: Deep blacks + warm golds + rich purples"
    tailwind_classes: "bg-neutral-900 text-amber-100 accent-purple-800"
    research_source: "systematic (precision = clean blacks), expert (quality = gold)"

  spatial_rhythm:
    description: "Musical pacing: Rhythmic grid with varied gaps"
    tailwind_implementation: "gap-4 md:gap-12 lg:gap-20 (progressive rhythm)"
    research_source: "systematic (controlled rhythm), harmonious (balanced spacing)"

Step 5: Traceability Verification

Element 1: "Systematic" ✅ VERIFIED
- Source: BRAND_GUIDELINES.md, line 23
- Evidence: "Our process is systematic and repeatable"

Element 2: "Orchestra" (harmony) ✅ VERIFIED
- Source: BRAND_GUIDELINES.md, line 67
- Evidence: "Harmonious integration of all components"

GROUNDING RATE: 5/5 = 100% ✅ PASS
```

**Output:** `metaphor-framework.yml` (saved to `.claude/agents/design/creative/research/{project}/`)

### Phase 4: Creative Brief Synthesis

**Sub-Agent: @creative-brief-synthesizer**

**Process:**

```markdown
Inputs:
- Pain Point: "Scattered information across 5 tools" (personas.md, line 23)
- Differentiator: "Single source of truth with real-time transparency" (BRAND_GUIDELINES.md, line 45)
- Constraint: "No stock photos of people" (CLAUDE.md, Section 13, Prohibition #6)
- Grounded Metaphor: metaphor-framework.yml (read from file)
- Mood Board URLs: [3-5 URLs from WebSearch]

Output: creative-meta-prompt.md (6 sections)

Section 1: Core Creative Metaphor
[Metaphor name, visual implications, tone]

Section 2: Core User Problem
[Pain point with citation]

Section 3: Core Value Prop
[Differentiator with citation]

Section 4: Creative Puzzle (Constraint Reframed)
Original: "No stock photos of people"
Reframed: "How can you evoke trust and collaboration *without* photographs of people? Explore: abstract network visualizations, data-driven metaphors."

Section 5: Mood Board
[URLs with context]

Section 6: Required Section Ideas
- Hero: "Visualize Systematic Orchestra through animated data network"
- Problem: "Show chaos before river smooths it"
- Solution: "4-column grid: 4 expert personas as 'musicians'"
- Trust: "Process transparency grid (methodology = social proof)"
- CTA: "Confident CTA aligned with conductor's podium positioning"

Quality Check: 8/9 criteria passed ✅
```

**Output:** `creative-meta-prompt.md` (saved to `.claude/agents/design/creative/outputs/{project}/`)

### Phase 5: Human Review Checkpoint

**Orchestrator Presents Meta-Prompt:**

```markdown
"I have analyzed your brand research and generated a creative meta-prompt using Agentic RAG methodology.

**Core Grounded Metaphor:** The Systematic Orchestra
- Derived from keywords: systematic, expert, precision, harmonious, calm confidence
- Grounding rate: 100% (5/5 elements verified)

**Creative Direction Summary:**
- Solves pain point: "Scattered information across 5 tools"
- Heroes differentiator: "Single source of truth with real-time transparency"
- Creative puzzle: "Evoke trust without showing people (use data visualization as metaphor)"

**Outputs Generated:**
1. metaphor-framework.yml (research artifact)
2. creative-meta-prompt.md (design brief)

**Next Steps:**
Option A: Approve meta-prompt → Proceed to implementation (@design-implementation-specialist)
Option B: Request refinement → Specify what to adjust
Option C: Generate alternatives → Run @design-variance-generator for 3 systematic variations

Which option would you like?"
```

**Your Decision:**

```markdown
# Option A: Approve
"Approve. Proceed with implementation."

# Option B: Refine
"Refine: Make the color palette warmer (less purple, more amber tones).
Emphasize 'calm confidence' more strongly in typography."

# Option C: Alternatives
"Generate 3 alternatives pivoting on different personas/metaphors."
```

**Orchestrator Response:**

- **If Approve:** Proceeds to Phase 6 (implementation)
- **If Refine:** Returns to Phase 4 with your constraints, re-synthesizes meta-prompt
- **If Alternatives:** Invokes @design-variance-generator, presents 3 variations for selection

### Phase 6: Design Implementation

**Sub-Agent: @design-implementation-specialist**

**Process:**

```markdown
Inputs:
- Approved creative-meta-prompt.md
- metaphor-framework.yml
- Target directory: sites/{project}/src/components/

Step 1: Load Creative Direction
Extract from meta-prompt:
- Color palette: bg-neutral-900 text-amber-100
- Spatial rhythm: gap-4 md:gap-12 lg:gap-20
- Typography: text-5xl font-bold tracking-tight
- Layout: Asymmetric grid (60/40 split)

Step 2: Apply Anti-AI Design Checklist

Constraint 1: Spatial Rhythm
Plan: pt-24 (Hero) → pt-16 (Features) → pt-12 (Footer)

Constraint 2: Intentional Asymmetry
Plan: Hero col-span-7/col-span-5 (60/40 split)

Constraint 3: Unexpected Hierarchy
Plan: Problem section - subheading (text-6xl) > heading (text-sm)

Constraint 4: Color Nuance
Plan: Custom colors from metaphor-framework.yml (no bg-blue-500)

Constraint 5: Constraint-Driven Creativity
Plan: ProcessTransparency.astro (4-column grid for "no case studies" constraint)

Step 3: Generate Components
- Hero.astro
- Problem.astro
- Solution.astro
- ProcessTransparency.astro
- CTA.astro

Step 4: Tailwind Config Update
Add custom colors:
  'orchestra-gold': '#D4AF37'
  primary: '#1a202c'
  accent: '#e8d5b7'

Step 5: Document Implementation
Create implementation-notes.md with traceability
```

**Outputs:**
- 5-7 Astro components (sites/{project}/src/components/)
- Updated tailwind.config.cjs
- implementation-notes.md

### Phase 7: Quality Gate 7 (Creative Quality Verification)

**Sub-Agent: @metaphor-grounding-verifier**

**Process:**

```markdown
Step 1: Load Reference Artifacts
- metaphor-framework.yml
- creative-meta-prompt.md
- implementation-notes.md

Step 2: Scan Components for Design Elements

Hero.astro:
- bg-neutral-900 → ✅ Matches metaphor-framework.yml color_palette
- text-amber-100 → ✅ Matches metaphor-framework.yml color_palette
- col-span-7 → ✅ Matches anti_ai_constraints (asymmetry)
- gap-8 md:gap-16 → ✅ Matches spatial_rhythm
- shadow-xl → ⚠️ NOT in metaphor-framework.yml (UNGROUNDED)

Total elements: 15
Grounded elements: 14
Grounding rate: 93.3% ❌ FAIL (threshold: 95%)

Step 3: Anti-AI Design Checklist Validation

Constraint 1: Spatial Rhythm
Evidence: 7 unique spacing values, progressive rhythm ✅ PASS

Constraint 2: Intentional Asymmetry
Evidence: Hero 60/40 split, CTA left-aligned ✅ PASS

Constraint 3: Unexpected Hierarchy
Evidence: Problem section inversion (subheading > heading) ✅ PASS

Constraint 4: Color Nuance
Evidence: Zero forbidden defaults, 3 custom colors ✅ PASS

Constraint 5: Constraint-Driven Creativity
Evidence: ProcessTransparency.astro solves "no case studies" ✅ PASS

Checklist: 5/5 ✅ PASS

Step 4: Generate Grounding Report

OVERALL GATE 7 DECISION: ❌ FAILED
- Grounding rate: 93.3% (target: 95%)
- Checklist: 5/5 (PASS)

Ungrounded elements:
- shadow-xl (Hero.astro, line 12): No source in metaphor framework

ACTION REQUIRED:
Remove shadow-xl OR add to metaphor with research justification
Re-run Gate 7 after fix
```

**Outcome:**

- **PASS (≥95% + 5/5 checklist):** ✅ Approved for production deployment
- **FAIL (<95% OR checklist fail):** ❌ Specific fix recommendations, max 2 retries

---

## Understanding Outputs

### metaphor-framework.yml

**Purpose:** Research artifact documenting grounded visual metaphor with traceability.

**Structure:**

```yaml
project_name: acme-corp
metaphor_primary: "Systematic Orchestra"
metaphor_definition: "Combines systematic coordination with expert harmony"

source_keywords:
  - keyword: "systematic"
    source: "BRAND_GUIDELINES.md, line 23"
    evidence: "Our process is systematic and repeatable"

visual_principles:
  color_palette:
    description: "Orchestra hall elegance"
    tailwind_classes: "bg-neutral-900 text-amber-100"
    research_source: "systematic + expert keywords"

anti_ai_constraints:
  - type: "intentional_asymmetry"
    implementation: "60/40 hero split"
    rationale: "Avoids AI centered-symmetry default"

traceability_map:
  metaphor_element_1:
    - source_keyword: "systematic"
      source_doc: "BRAND_GUIDELINES.md, line 23"
      evidence: "Our process is systematic"

consistency_score:
  total_keywords: 5
  supported_keywords: 5
  score: "9/10"
  conflicts: "None"

grounding_rate: "100%"
```

**How to Use:**
- **Implementation reference:** Translate visual_principles into component styles
- **Verification:** traceability_map used by @metaphor-grounding-verifier
- **Client presentations:** Show research-backed creative process

### creative-meta-prompt.md

**Purpose:** Design brief that guides implementation while preserving designer agency.

**Structure (6 Sections):**

```markdown
# Creative Meta-Prompt: The Systematic Orchestra

## 1. Core Creative Metaphor
- Metaphor name + definition
- Visual implications (colors, spacing, typography, shapes)
- Tonal implications (emotional quality)

## 2. Core User Problem to Solve
- Specific pain point (with citation)
- Emotional/business context

## 3. Core Value Prop to Showcase
- Key differentiator (with citation)
- Why it's proof, not just feature

## 4. The Creative Puzzle (Constraint-as-Creativity)
- Constraint stated (with citation)
- Reframed as generative challenge
- Suggested exploration techniques

## 5. Mood Board
- 3-5 visual reference URLs
- Context for each reference

## 6. Required Section Ideas
- 5-7 website sections
- Specific creative direction for each
- Metaphor integration per section
```

**How to Use:**
- **For developers:** Follow Section 6 for component creation
- **For designers:** Use as creative brief, refine/adapt as needed
- **For implementation specialist:** Input for Astro component generation

**NOT prescriptive:** This is guidance, not exact specifications. Designer has full creative control.

### grounding-report.md

**Purpose:** Gate 7 verification report showing element-by-element traceability.

**Structure:**

```markdown
# Grounding Verification Report: acme-corp

**Grounding Rate:** 96.5% ✅ PASS
**Anti-AI Checklist:** 5/5 ✅ PASS

## Detailed Analysis

### ✅ Hero.astro (10/10 grounded)
| Element | Source | Status |
|---------|--------|--------|
| bg-neutral-900 | metaphor-framework.yml, color_palette | ✅ Verified |
| col-span-7 | anti_ai_constraints (asymmetry) | ✅ Verified |

### ⚠️ Card.astro (8/10 grounded)
| Element | Source | Status |
|---------|--------|--------|
| shadow-xl | None found | ⚠️ UNGROUNDED |

## Anti-AI Checklist Results

Constraint 1: Spatial Rhythm ✅ PASS
Evidence: 7 unique spacing values, progressive rhythm

Constraint 2: Intentional Asymmetry ✅ PASS
Evidence: Hero 60/40 split, CTA left-aligned

[... etc for all 5 constraints]

## Overall Decision: ✅ APPROVED FOR PRODUCTION
```

**How to Use:**
- **If PASS:** Proceed to deployment
- **If FAIL:** Follow specific fix recommendations, re-run Gate 7

---

## Troubleshooting

### Issue 1: Low Grounding Rate (<95%)

**Symptom:** Gate 7 fails with grounding rate 87-94%

**Cause:** Design elements not traceable to metaphor-framework.yml or creative-meta-prompt.md

**Diagnosis:**

```markdown
Check grounding-report.md for ungrounded elements:
- shadow-xl (not in metaphor framework)
- rounded-lg (conflicts with metaphor's "sharp edges")
- bg-indigo-500 (not in custom color palette)
```

**Solution:**

**Option A: Remove ungrounded elements**
```astro
<!-- BEFORE (ungrounded) -->
<div class="shadow-xl rounded-lg bg-indigo-500">

<!-- AFTER (grounded) -->
<div class="bg-neutral-900 rounded-sm">  <!-- Matches metaphor-framework.yml -->
```

**Option B: Add to metaphor framework (if justified)**
```yaml
# Add to metaphor-framework.yml if shadow adds value
visual_principles:
  depth_layering:
    description: "Subtle depth for card elevation"
    tailwind_implementation: "shadow-md (not shadow-xl)"
    research_source: "Depth creates visual hierarchy per 'orchestra stage' metaphor"
```

**Option C: Manual override** (requires approval)
```markdown
Document exception:
"shadow-xl used for Card component depth.
Rationale: Client brand guidelines specify card elevation (external constraint).
Approved by: [Technical Lead], [Date]"
```

### Issue 2: Generic Meta-Prompt Output

**Symptom:** Meta-prompt uses vague descriptions ("modern design," "clean layout")

**Cause:** Query decomposition not granular enough → retrieved broad chunks

**Self-Critique Flags:**

```markdown
❌ GENERIC INDICATORS:
- "modern layout" (vague)
- "clean design" (no specificity)
- Metaphor: "rocket ship" (cliché)
- No source citations
```

**Solution:**

Orchestrator auto-triggers refinement loop:

```markdown
ROOT CAUSE: Query decomposition too broad

REFINEMENT (Attempt 1 of 2):

Original Sub-Query: "Get persona information"
↓
Refined Sub-Query 1: "Get persona's primary *frustration* with current tools"
Refined Sub-Query 2: "Get persona's *emotional state* when experiencing frustration"

Re-execute retrieval → Re-synthesize meta-prompt
```

**If still generic after 2 loops:**

```markdown
ESCALATE TO HUMAN REVIEW

Diagnostic report:
- Possible causes:
  1. Insufficient brand materials (vague brand guidelines)
  2. Brand identity itself is generic (needs strategic work first)
  3. Constraints too restrictive (limiting creative space)

Recommendation: Manual creative director review required
```

### Issue 3: MCP Unavailable (Chrome DevTools)

**Symptom:** Asset finder automation fails

**Orchestrator Prompt:**

```markdown
"Chrome DevTools MCP (for automated visual research) is unavailable.

Choose fallback strategy:

1. Manual screenshot gathering
   → You provide competitor screenshots, I analyze them
   → +30-60 minutes

2. Text-only research mode
   → Skip visual analysis, use industry reports only
   → Grounding rate may be lower (90%+ vs. 95%+)

3. Skip visual asset finding
   → Proceed without mood board
   → You can add references manually later

Which option?"
```

**Workflow Adjustment:**

- **Option 1:** Pause workflow, await user screenshots, resume Phase 3
- **Option 2:** Skip WebSearch, rely on text-based research, lower grounding threshold to 90%
- **Option 3:** Generate meta-prompt without Section 5 (Mood Board)

### Issue 4: Anti-AI Checklist Failures

**Symptom:** Gate 7 fails with checklist 3/5 (Constraints 2 and 5 fail)

**Example Failure:**

```markdown
Constraint 2: Intentional Asymmetry ❌ FAIL
Evidence: Hero section centered (mx-auto), all elements symmetric

Constraint 5: Constraint-Driven Creativity ❌ FAIL
Evidence: Constraint "no case studies" addressed by removing logo section (subtractive, not generative)
```

**Solution:**

**Fix Constraint 2:**
```astro
<!-- BEFORE (centered) -->
<section class="flex items-center justify-center text-center">
  <div class="max-w-2xl mx-auto">
    <h1 class="text-center">...</h1>
  </div>
</section>

<!-- AFTER (asymmetric) -->
<section class="grid grid-cols-12">
  <div class="col-span-12 md:col-span-7 text-left pl-16">
    <h1>...</h1>
  </div>
  <div class="col-span-12 md:col-span-5">...</div>
</section>
```

**Fix Constraint 5:**
```astro
<!-- BEFORE (subtractive - just removed logo grid) -->
<!-- Nothing -->

<!-- AFTER (generative - process transparency grid) -->
<section>
  <h2>Our Systematic Review Process</h2>
  <div class="grid grid-cols-4 gap-12">
    <div>SEO Expert</div>
    <div>UX Specialist</div>
    <div>Conversion Expert</div>
    <div>Quality Auditor</div>
  </div>
  <p>The methodology itself is the proof. 85+ score guarantee.</p>
</section>
```

Re-run Gate 7 after fixes.

### Issue 5: Conflicting Keywords

**Symptom:** Metaphor consistency score <7/10 due to keyword conflicts

**Example:**

```markdown
Keyword "fast" maps to: rocket, speed, lightning
Keyword "secure" maps to: vault, fortress, lock

CONFLICT: "vault" (secure) conflicts with "fast" (-2 score)
- Vault implies slow, heavy, defensive
```

**Solution:**

**Prioritize keywords by brand importance:**

```markdown
Orchestrator asks:
"Keyword conflict detected between 'fast' and 'secure'.

Which attribute is more critical to brand identity?
A. Fast (prioritize speed/efficiency)
B. Secure (prioritize trust/safety)
C. Both equal (need metaphor blending both)"
```

**Resolution:**

- **If A (Fast primary):** Select metaphor supporting "fast," accept neutral/weak support for "secure"
- **If B (Secure primary):** Select metaphor supporting "secure," accept neutral support for "fast"
- **If C (Both equal):** Request additional keywords to find blended metaphor (e.g., "Streamlined Vault" - fast + secure)

---

## FAQ

### Q1: How long does the creative workflow take?

**A:** Total time: 2-5 hours (depending on research depth and human review)

**Breakdown:**
- **Phase 1 (Context Gathering):** 5-10 minutes (user provides docs)
- **Phase 2 (Agentic RAG Research):** 15-30 minutes (automated)
- **Phase 3 (Metaphor Generation):** 5-10 minutes (automated)
- **Phase 4 (Meta-Prompt Synthesis):** 5-10 minutes (automated)
- **Phase 5 (Human Review):** 15-60 minutes (depends on designer review time)
- **Phase 6 (Implementation):** 30-120 minutes (component generation + refinement)
- **Phase 7 (Gate 7 Verification):** 5-10 minutes (automated)

**Compare to manual workflow:**
- Traditional research: 8-16 hours (competitor analysis, mood boards)
- Concept development: 4-8 hours (sketches, iterations)
- **Total traditional:** 12-24 hours

**Efficiency gain:** 60-75% time reduction on research + concept phases.

### Q2: Can I skip Phase 6 (implementation) and implement manually?

**A:** **Yes!** Meta-prompts are creative direction, not mandatory specifications.

**Two workflows:**

**Workflow A: Automated Implementation**
```
Phase 5 (Approve meta-prompt) → Phase 6 (@design-implementation-specialist generates components) → Phase 7 (Gate 7)
```

**Workflow B: Manual Implementation**
```
Phase 5 (Approve meta-prompt) → Designer implements manually using meta-prompt as guide → Phase 7 (Gate 7)
```

**Benefits of manual implementation:**
- Full creative control over component structure
- Can adapt meta-prompt based on emerging design insights
- Designer preference for hands-on work

**Still runs Gate 7:** Whether automated or manual, Gate 7 verifies grounding rate and checklist compliance.

### Q3: What if Gate 7 keeps failing after 2 retries?

**A:** Escalate to manual design review.

**After 2 Gate 7 failures:**

```markdown
Orchestrator:
"Gate 7 has failed 2 times. Maximum retries reached.

Failure reasons:
- Grounding rate: 88% (target: 95%)
- Ungrounded elements: 5 (shadow effects, generic colors)

Options:
A. Manual design review (technical lead approval required)
   → Designer justifies ungrounded elements
   → If approved, document exception and deploy

B. Re-run creative-director-orchestrator with refined queries
   → Start over with more specific brand keyword extraction
   → Generate new metaphor framework

C. Skip Gate 7 (emergency override - requires written approval)
   → Document quality tradeoff
   → Add post-launch refinement task

Which option?"
```

**Recommendation:** Option A (manual review) for most cases. Option B if metaphor fundamentally flawed.

### Q4: Can I generate multiple design variations?

**A:** **Yes!** Use @design-variance-generator.

**Two variation modes:**

**Mode 1: Systematic Variation (Deterministic)**
```markdown
@design-variance-generator --mode=systematic

Generates batch of 3 prompts:
- Variation 1: Pivot on Persona A (Professional Paul)
- Variation 2: Pivot on Persona B (Busy Executive Beth)
- Variation 3: Pivot on Alternative Metaphor ("Calm River" instead of "Systematic Orchestra")

Use case: A/B testing, client presentations
```

**Mode 2: Controlled Variation (Stochastic)**
```markdown
@design-variance-generator --mode=stochastic

Generates 1 unique prompt per run:
- Randomly selects: Persona B + Metaphor X + CTA Y
- Every run produces different combination
- Controlled by grounded lists (valid personas, valid metaphors)

Use case: Idea generation, breaking creative blocks
```

### Q5: How do I know if the design is truly "non-generic"?

**A:** Three validation layers:

**1. Quantitative (Automated):**
- **Grounding rate ≥95%:** Every element traceable to research
- **Anti-AI Checklist 5/5:** Constraints enforce non-defaults
- **Zero forbidden classes:** No bg-blue-500, text-gray-900, etc.

**2. Qualitative (Manual Review):**
```markdown
Ask these questions:
- [ ] Metaphor is unique to this brand (not "rocket ship")
- [ ] Visual style feels intentional (not template-derived)
- [ ] Could this design work for competitors? (NO = good)
- [ ] Client feedback: "This feels like us" (YES = good)
```

**3. Comparative (Benchmark):**
```markdown
Side-by-side comparison:
- Generic AI design: Blue hero, centered layout, stock photo
- Grounded design: Custom colors (orchestra-gold), asymmetric 60/40, data visualization

Ask: Which design is memorable? Which feels research-backed?
```

**If doubt persists:** Review grounding-report.md element-by-element. If 95%+ traceable to research, it's grounded (not generic).

### Q6: What if client rejects the creative direction?

**A:** Multiple fallback options.

**Client feedback types:**

**Type 1: "Too bold/creative"**
```markdown
Action: Refine meta-prompt to be more conservative
- Request: "Make metaphor more subtle"
- Orchestrator: Adjusts visual implications to be understated
- Example: "Systematic Orchestra" → softer colors, less dramatic spacing
```

**Type 2: "Doesn't feel like our brand"**
```markdown
Action: Re-run Agentic RAG with refined keyword extraction
- Likely cause: Wrong keywords extracted from brand docs
- Orchestrator: Decomposes queries more granularly
- Example: Original "systematic" → Refined "approachable + systematic"
```

**Type 3: "We prefer [specific style]"**
```markdown
Action: Incorporate client preference as new constraint
- Add to BRAND_GUIDELINES.md: "Client prefers minimalist aesthetic"
- Re-run creative-director-orchestrator with updated constraints
- New meta-prompt reflects client style preference
```

**Type 4: "We don't want AI-generated concepts"**
```markdown
Action: Use meta-prompt as research report only
- Present metaphor-framework.yml as "strategic design analysis"
- Designer implements manually using research insights
- Gate 7 still validates grounding (proving research-backed decisions)
```

### Q7: How does this integrate with existing design systems?

**A:** Seamlessly integrates with Tailwind CSS and Astro component architecture.

**Integration points:**

**Tailwind Custom Colors:**
```javascript
// tailwind.config.cjs (updated by @design-implementation-specialist)
module.exports = {
  theme: {
    extend: {
      colors: {
        // Custom colors from metaphor-framework.yml
        'orchestra-gold': '#D4AF37',
        primary: '#1a202c',
        accent: '#e8d5b7',
      },
    },
  },
};
```

**Astro Component Props:**
```astro
---
// Hero.astro (follows standard Astro patterns)
interface Props {
  title: string;
  subtitle?: string;
}
const { title, subtitle } = Astro.props;
---
<!-- Component uses grounded styles but standard structure -->
```

**Design System Tokens:**
```yaml
# metaphor-framework.yml maps to design tokens
visual_principles:
  color_palette:
    tailwind_classes: "bg-neutral-900 text-amber-100"
    # Maps to: --color-primary: #1a202c, --color-accent: #e8d5b7
```

**No conflicts:** Creative workflow generates unique styles WITHIN existing component architecture, not replacing it.

### Q8: Can I use this for redesigns of existing websites?

**A:** **Yes!** Two scenarios:

**Scenario A: Complete Redesign**
```markdown
Use case: Current design is generic, client wants fresh direction

Workflow:
1. Invoke @creative-director-orchestrator (same as new project)
2. Use existing site as "competitor analysis" input
3. Generate alternative metaphor-driven design
4. Compare old vs. new (show grounding traceability)
```

**Scenario B: Incremental Refinement**
```markdown
Use case: Existing design is good, wants to enhance specific sections

Workflow:
1. Use metaphor-framework.yml from original design (if available)
2. Invoke @design-implementation-specialist for specific components only
3. Run Gate 7 on new components (verify consistency with existing metaphor)
```

**Benefit:** Proves design decisions are research-backed (valuable for stakeholder buy-in).

---

## Next Steps

**After reading this guide:**

1. **Decide:** Is creative orchestrator right for your project? (Use decision tree)
2. **Prepare:** Gather brand research materials (BRAND_GUIDELINES.md, personas, constraints)
3. **Invoke:** `@creative-director-orchestrator` with project context
4. **Review:** Approve/refine meta-prompt (Phase 5)
5. **Implement:** Automated (@design-implementation-specialist) OR manual
6. **Verify:** Gate 7 validation (automatic)
7. **Deploy:** If Gate 7 passes, proceed to production

**Resources:**
- [CREATIVE_DESIGN_SYSTEM.md](CREATIVE_DESIGN_SYSTEM.md) - Full constitution and methodology
- [CREATIVE_DESIGN_AGENT_IMPLEMENTATION_PLAN.md](CREATIVE_DESIGN_AGENT_IMPLEMENTATION_PLAN.md) - Strategic implementation plan
- [sop_ai_design.md](sop_ai_design.md) - Original Agentic RAG SOP (technical details)
- [design-idea.md](../design-idea.md) - Example output ("Systematic Orchestra")

**Support:**
- Issues/questions: Check [Troubleshooting](#troubleshooting) section first
- Complex scenarios: Review [FAQ](#faq)
- Technical deep-dive: Reference skills in `.claude/skills/design/`

---

**Version:** 1.0
**Last Updated:** 2025-11-17
**Maintained By:** Design Systems Lead
**Next Review:** 2026-02-17
