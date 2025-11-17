# Strategic Implementation Plan: Creative Design Agents
## Producing Uncommon, Non-AI-Looking Designs

**Version:** 1.0
**Date:** November 16, 2025
**Objective:** Create designs that are creative, uncommon, and don't look like AI-generated work

---

## Executive Summary

This plan translates the **Agentic RAG & Creative Synthesis** methodology from the SOP into actionable Claude Code agents and skills that produce creative, brand-grounded designs that avoid the "generic AI design" trap.

**Core Strategy:** Replace generic AI patterns with grounded metaphor generation, constraint-as-creativity frameworks, and multi-source research synthesis.

---

## 1. Gap Analysis: Current vs. Target State

### Current State (What Exists)

**Existing Design Agents:**
- `brand-design-strategist.md` - Brand alignment focus
- `innovation-designer.md` - Blue sky concept generation
- `user-centric-designer.md` - Usability/accessibility focus
- `design_specifier.md` - Technical implementation specs
- `design-system-reviewer.md` - Design system compliance
- `ux-heuristic-evaluator.md` - UX evaluation

**Existing Design Skills:**
- `design-archetypes/` - 3-Archetype Framework (Bold, Elegant, Approachable)
- `design-to-code-workflow/` - Figma to Astro translation

**Gaps Identified:**

| Missing Capability | Current State | Target State (Iris v2.1) |
|-------------------|---------------|--------------------------|
| **Agentic RAG Research** | No multi-source synthesis | Query decomposition → parallel retrieval → synthesis |
| **Grounded Metaphor Generation** | Generic metaphors | 3-step: Extract keywords → Blend concepts → Score consistency |
| **Constraint-as-Creativity** | Constraints treated as filters | Constraints as creative puzzles |
| **Visual Asset Finding** | Manual image search | Automated MCP-powered asset discovery |
| **Variability Engine** | Single design output | Systematic (batch) + Stochastic (unique) generation systems |
| **Traceability/Verification** | No grounding check | Verification agent fact-checks creative claims |
| **Self-Correcting Loop** | No generic detection | Self-critique → refine query → re-synthesize |

### Why Current Designs Look AI-Generated

**Research Findings (November 2025):**

**Visual Patterns:**
- Default "safe" choices: blue primary, rounded corners, generic sans-serif fonts
- Lack of emotional differentiation (healthcare = SaaS = law firms)
- Repetitive layouts, standardized patterns
- Missing human touch, no brand personality

**Process Failures:**
- **No Phase 2.5:** Skipping from brief → implementation without design concept generation
- **Summarizer-First Trap:** Compressing all brand documents into single summary = "generic averaging"
- **Single-Query RAG:** Complex creative requests averaged into one vector = retrieval bias
- **Constraint-as-Filter:** Treating constraints as restrictions instead of creative catalysts

**Root Cause:** Current agents lack the **multi-source research synthesis** and **grounded creative reasoning** required to produce unique, brand-specific designs.

---

## 2. Agent Architecture Strategy

### 2.1 New Core Agent: Creative Director (Iris v2.1)

**Purpose:** Master orchestrator for creative design concept generation using Agentic RAG methodology.

**Agent Name:** `creative-director-orchestrator.md`

**Model:** Sonnet 4.5 (requires advanced reasoning for query decomposition and synthesis)

**Tools Required:**
- Read, Grep, Glob (document research)
- WebSearch, WebFetch (external research)
- TodoWrite (workflow tracking)
- Chrome DevTools MCP (asset finding - future integration)

**Core Responsibilities:**

1. **Query Decomposition (Step 1)**
   - Receive design brief
   - Break down into granular sub-queries:
     - "Retrieve persona's primary *frustration*" (not just "persona info")
     - "Retrieve compliance constraint #3" (not just "compliance rules")
     - "Retrieve brand's emotional goals" (not just "brand attributes")

2. **Parallel Multi-Source Retrieval (Step 2)**
   - Search `BRAND_GUIDELINES.md` for brand attributes
   - Search `CLAUDE.md` for project constraints
   - Search content collections for user pain points
   - External web research for visual inspiration (Behance, Dribbble)

3. **Grounded Metaphor Generation (Step 3)**
   - Extract keywords from retrieved documents (brand attributes, emotional goals)
   - Apply Conceptual Metaphor Theory (Target Domain → Source Domain mapping)
   - Score metaphors for holistic consistency (discard conflicting concepts)
   - Select highest-scoring, brand-aligned metaphor

4. **Constraint-as-Creativity Synthesis (Step 4)**
   - Identify all constraints (positive + negative)
   - Reframe intersection as "creative puzzle"
   - Generate meta-prompt forcing lateral thinking (not subtractive filtering)

5. **Self-Correcting Loop (Step 5)**
   - Self-critique output for "genericness"
   - If generic == TRUE: refine queries → re-retrieve → re-synthesize
   - If generic == FALSE: output final creative meta-prompt

**Output Format:** Structured creative meta-prompt (see `design-idea.md` example: "The Systematic Orchestra")

### 2.2 Specialized Support Agents

#### Agent: `visual-asset-finder.md`

**Purpose:** Automated discovery of visual references using Chrome DevTools MCP.

**Model:** Haiku 4.5 (simple automation task)

**MCP Integration:**
- Chrome DevTools MCP for browser automation
- Navigate to Behance, Dribbble, Unsplash
- Search based on grounded metaphor keywords
- Take screenshots of relevant designs
- Return URLs + screenshots for mood board

**Input:** Grounded metaphor keywords (e.g., "systematic orchestra," "fluid security," "calm river")

**Output:**
- 5-10 curated visual references
- URLs for inspiration sources
- Screenshots saved to project `/assets/research/`

**Implementation Priority:** Phase 2 (requires MCP setup first)

#### Agent: `metaphor-grounding-verifier.md`

**Purpose:** Fact-check creative metaphors against source documents (Traceability Mandate).

**Model:** Haiku 4.5 (verification task)

**Process:**
1. Input: Metaphor claim (e.g., `{"metaphor": "calm river", "source_keyword": "fluid", "source_doc": "BRAND_GUIDELINES.md"}`)
2. Verification Query: RAG retrieval targeting `BRAND_GUIDELINES.md` for keyword "fluid"
3. Branching Logic:
   - **Pass:** Returns relevant chunks → append verified citation → approve
   - **Fail:** No chunks found → flag as hallucination → request re-generation

**Output:** `{verified: true/false, citation: "..."}` or error with suggested alternative

#### Agent: `design-variance-generator.md`

**Purpose:** Implement Systematic + Stochastic variation systems.

**Model:** Sonnet 4.5 (requires creative synthesis)

**Two Operating Modes:**

**Mode 1: Systematic Variation (Deterministic)**
- Input: Creative meta-prompt + pivot categories (personas, metaphors, CTAs)
- Process: Generate batch of prompts, one per pivot element
- Output: JSON array of 3-5 distinct creative meta-prompts
- Use Case: A/B testing, client presentations

**Mode 2: Controlled Variation (Stochastic)**
- Input: Creative meta-prompt + grounded lists (valid_personas, valid_metaphors, valid_ctas)
- Process: Randomly select one item from each list → synthesize unique prompt
- Output: Single, highly unique creative meta-prompt
- Use Case: Breaking creative blocks, idea generation

### 2.3 Modified Existing Agents

#### `brand-design-strategist.md` (Enhanced)

**Add to Core Process:**
- **Step 0 (New):** Check if `@creative-director-orchestrator` has run
- **If NO:** Delegate to `@creative-director-orchestrator` first
- **If YES:** Incorporate grounded metaphor and creative puzzle from meta-prompt

**Rationale:** Ensures brand-aligned design concepts are built on grounded creative foundation, not generic AI patterns.

#### `innovation-designer.md` (Enhanced)

**Add Constraint:**
- **Before generating "blue sky" concepts:** Consult grounded metaphor from `@creative-director-orchestrator`
- **Instead of:** Unconstrained brainstorming
- **Use:** Grounded metaphor as creative anchor for radical concepts

**Rationale:** Prevents innovation from drifting into "creative hallucinations" disconnected from brand reality.

---

## 3. Skills Architecture

### 3.1 New Core Skills

#### Skill: `agentic-rag-methodology/SKILL.md`

**Category:** design
**Type:** knowledge

**Purpose:** Teach agents the Agentic RAG workflow for creative synthesis.

**Content Sections:**

1. **Why Agentic RAG (Not Summarizer-First)**
   - Table 1 from SOP: Comparative analysis of architectures
   - Failures of "generic averaging" and "information loss"

2. **The 3-Step Workflow**
   - Step 1: Query Decomposition (with examples)
   - Step 2: Parallel Retrieval (tool calling patterns)
   - Step 3: Disparate Synthesis (how to combine non-averaged data)

3. **Meta-Prompt Templates**
   - Query decomposition template
   - Self-critique template for generic detection
   - Refinement loop template

4. **Diagnostic Playbook**
   - Table 4 from SOP: RAG failure modes and mitigations

**When to Use:** All creative design concept generation tasks, research-heavy projects.

#### Skill: `grounded-metaphor-generation/SKILL.md`

**Category:** design
**Type:** knowledge + methodology

**Purpose:** Teach the 3-step grounded metaphor process.

**Content Sections:**

1. **Conceptual Metaphor Theory Primer**
   - Target Domain (abstract concepts) → Source Domain (physical metaphors)
   - Examples from design-idea.md: "systematic" → "orchestra"

2. **Step 1: Thematic Extraction**
   - How to scan brand documents for keywords
   - Tool: `Grep` with patterns for brand attributes, emotions, goals

3. **Step 2: Metaphor Brainstorming**
   - Mapping keywords to physical metaphors
   - Examples: "secure" → "vault/fortress/guardian", "fluid" → "river/water/flow"

4. **Step 3: Consistency Scoring**
   - Score matrix template (metaphor vs. all brand attributes)
   - Example: "calm river" scores high for "fluid + calm + reduce friction"
   - Example: "vault" discarded for conflicting with "fluid + fast"

5. **Anti-Patterns (Avoid These)**
   - Generic metaphors: "rocket ship," "Swiss Army knife," "lighthouse"
   - Cliché tech metaphors: "cloud," "highway," "bridge"

**When to Use:** Creative concept generation, brand storytelling, hero section design.

#### Skill: `constraint-as-creativity/SKILL.md`

**Category:** design
**Type:** knowledge + prompting framework

**Purpose:** Teach the creative puzzle methodology for constraints.

**Content Sections:**

1. **The Two Constraint Types**
   - Positive constraints (must include X)
   - Negative constraints (must NOT use Y)

2. **Table 2 from SOP: Constraint-as-Creativity Prompting Matrix**
   - 3 worked examples with before/after prompts
   - Expected AI behavior for each

3. **Creative Puzzle Template**
   - Structure: "Your challenge is to [goal]. You face a specific puzzle: [constraint intersection]. How can you use [techniques] to solve this challenge?"

4. **Constraint Intersection Analysis**
   - How to identify conflicting constraints
   - How to reframe conflict as creative opportunity

**When to Use:** Complex projects with compliance rules, legal disclosures, UX constraints, brand guidelines.

#### Skill: `anti-ai-design-patterns/SKILL.md`

**Category:** design
**Type:** knowledge + checklist

**Purpose:** Document what makes designs look AI-generated and how to avoid it.

**Content Sections:**

1. **Visual Red Flags (AI Design Symptoms)**
   - Default color schemes (blue primary, gray secondary)
   - Generic fonts (Helvetica, Arial, "safe" sans-serifs)
   - Rounded corners everywhere (0.5rem border-radius default)
   - Centered layouts with excessive white space
   - Stock photo hero sections (smiling diverse team)
   - Lack of brand personality markers

2. **Process Red Flags**
   - Skipping design concept phase (brief → code)
   - Single-pass design (no iteration)
   - No metaphor or creative anchor
   - Treating constraints as filters, not catalysts

3. **How to Avoid AI-Looking Designs**
   - **Always run `@creative-director-orchestrator` first**
   - Use grounded metaphor to drive visual decisions
   - Apply archetype consistently (not mixing patterns)
   - Custom brand colors (not default Tailwind palette)
   - Unique typography combinations (serif + sans-serif)
   - Asymmetric layouts (not always centered)
   - Brand-specific imagery (not generic stock photos)

4. **Quality Checklist**
   - [ ] Design has clear creative metaphor (not generic)
   - [ ] Colors are brand-specific (not Tailwind defaults)
   - [ ] Typography reflects brand personality (not default Inter)
   - [ ] Layout has unique structure (not centered hero + 3-column grid)
   - [ ] Constraints treated as creative puzzles (not filters)
   - [ ] Visual references from mood board (not imagination)

**When to Use:** Design quality reviews, client feedback sessions, design system audits.

### 3.2 Modified Existing Skills

#### `design-archetypes/SKILL.md` (Enhanced)

**Add Section: "Archetype + Grounded Metaphor Integration"**

- How to combine archetype selection with creative metaphor
- Example: Bold archetype + "Systematic Orchestra" metaphor = high-contrast grid layouts with rhythmic spacing
- Example: Approachable archetype + "Calm River" metaphor = flowing scroll animations, organic shapes

**Rationale:** Connect existing archetype framework to new creative methodology.

---

## 4. MCP Integration Strategy

### 4.1 Chrome DevTools MCP Setup

**Purpose:** Enable `visual-asset-finder` agent to automate visual research.

**Installation:**

```bash
# Via Claude Code CLI
claude mcp add chrome-devtools npx chrome-devtools-mcp@latest
```

**Configuration:**

```json
// .claude/settings.json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"],
      "env": {
        "VIEWPORT": "1440x900",
        "HEADLESS": "false"
      }
    }
  }
}
```

### 4.2 Asset Finder Agent Workflow

**Automation Sequence:**

1. **Input:** Grounded metaphor keywords (e.g., `["systematic", "orchestra", "precision", "harmony"]`)

2. **Browser Automation:**
   ```
   navigate_page("https://www.behance.net/search/projects")
   fill_form(search_query: "systematic data visualization")
   wait_for_results()
   take_screenshot("behance-systematic-1.png")
   scroll_page(direction: down, distance: 1000)
   take_screenshot("behance-systematic-2.png")
   ```

3. **Multi-Source Search:**
   - Behance: `{metaphor keyword} + "design"`
   - Dribbble: `{metaphor keyword} + "UI"`
   - Unsplash: `{metaphor keyword} + "photography"`

4. **Output:**
   - Screenshots saved to `/assets/research/{project-name}/`
   - URLs JSON file with metadata
   - Mood board markdown with embedded images

**Implementation Priority:** Phase 2 (after Phase 1 agents proven)

---

## 5. Implementation Sequence

### Phase 1: Foundation (Weeks 1-2)

**Objective:** Build core creative infrastructure.

**Tasks:**

1. **Create Core Skills (Priority Order)**
   - [ ] `agentic-rag-methodology/SKILL.md` (foundational)
   - [ ] `grounded-metaphor-generation/SKILL.md` (core methodology)
   - [ ] `constraint-as-creativity/SKILL.md` (core methodology)
   - [ ] `anti-ai-design-patterns/SKILL.md` (quality standard)

2. **Create Core Agent**
   - [ ] `creative-director-orchestrator.md` (master agent)
   - [ ] Test with existing client brief (e.g., bigger-boss site)
   - [ ] Validate grounded metaphor output quality

3. **Enhance Existing Agents**
   - [ ] Modify `brand-design-strategist.md` (add Step 0 delegation)
   - [ ] Modify `innovation-designer.md` (add grounding constraint)

**Success Criteria:**
- `@creative-director-orchestrator` produces creative meta-prompt similar to "The Systematic Orchestra" example
- Output includes grounded metaphor traceable to brand document keywords
- No generic metaphors (e.g., "rocket ship," "Swiss Army knife")

### Phase 2: Verification & Variation (Weeks 3-4)

**Objective:** Add quality control and variability systems.

**Tasks:**

1. **Create Verification Agent**
   - [ ] `metaphor-grounding-verifier.md`
   - [ ] Test with known hallucinated metaphor
   - [ ] Validate fact-checking against source docs

2. **Create Variability Agent**
   - [ ] `design-variance-generator.md`
   - [ ] Implement Mode 1: Systematic variation
   - [ ] Implement Mode 2: Stochastic variation
   - [ ] Test batch generation (3-5 prompts)

3. **Document Workflow**
   - [ ] Create `CREATIVE_DESIGN_WORKFLOW.md` guide
   - [ ] Document orchestrator invocation patterns
   - [ ] Create workflow diagram (brief → research → concept → implementation)

**Success Criteria:**
- Verifier catches ungrounded metaphors 90%+ accuracy
- Systematic mode generates 3 distinct prompts per client brief
- Stochastic mode generates unique combinations each run

### Phase 3: MCP Integration (Weeks 5-6)

**Objective:** Automate visual asset finding.

**Tasks:**

1. **MCP Setup**
   - [ ] Install Chrome DevTools MCP
   - [ ] Configure viewport and headless settings
   - [ ] Test browser automation (navigate, screenshot)

2. **Create Asset Finder Agent**
   - [ ] `visual-asset-finder.md`
   - [ ] Implement Behance search automation
   - [ ] Implement Dribbble search automation
   - [ ] Implement Unsplash search automation

3. **Integration Testing**
   - [ ] Test with grounded metaphor keywords
   - [ ] Validate screenshot quality
   - [ ] Test mood board generation

**Success Criteria:**
- Agent finds 10+ relevant visual references per metaphor
- Screenshots saved with proper naming convention
- Mood board markdown auto-generated with images

### Phase 4: Workflow Integration & Documentation (Week 7)

**Objective:** Integrate with existing project workflows.

**Tasks:**

1. **Update Project Constitution**
   - [ ] Add creative design workflow to `CLAUDE.md` Section 6
   - [ ] Document agent invocation sequence
   - [ ] Add quality gates for design concepts

2. **Create Training Examples**
   - [ ] 3 worked examples (different archetypes)
   - [ ] Document expected vs. actual outputs
   - [ ] Create troubleshooting guide

3. **Team Onboarding**
   - [ ] Create `CREATIVE_DESIGN_QUICKSTART.md`
   - [ ] Video walkthrough (optional)
   - [ ] Update `CLIENT_ONBOARDING.md` with creative phase

**Success Criteria:**
- Any team member can invoke `@creative-director-orchestrator` successfully
- Documentation clear enough for non-technical client understanding
- Quality gates prevent deployment of generic AI designs

---

## 6. Success Criteria & Validation

### 6.1 Qualitative Success Metrics

**Primary Objective:** Designs that are "creative, uncommon, and don't look like AI-generated work."

**Validation Method:** Comparative analysis before/after.

**Before (Generic AI Design):**
- Blue primary color (#0066CC)
- Rounded corners (0.5rem everywhere)
- Centered hero section with stock photo
- Generic metaphor ("Your business, supercharged")
- 3-column feature grid
- Predictable layout patterns

**After (Grounded Creative Design):**
- Brand-specific colors from `BRAND_GUIDELINES.md`
- Border radius aligned with archetype (sharp/subtle/rounded)
- Hero section embodying grounded metaphor ("The Systematic Orchestra")
- Creative puzzle solution visible in design
- Unique layout structure derived from metaphor
- Visual references from mood board integrated

**Validation Questions:**

1. **Grounding Check:** Can you trace the metaphor to specific brand document keywords? (YES/NO)
2. **Creativity Check:** Does the design use a unique metaphor not seen in competitors? (YES/NO)
3. **Constraint Check:** Are constraints treated as creative puzzles (not filters)? (YES/NO)
4. **Uniqueness Check:** Would a human designer have made these choices without AI? (Ideally YES)
5. **Brand Alignment:** Does the design authentically express brand personality? (YES/NO)

**Passing Score:** 4/5 YES answers required.

### 6.2 Quantitative Success Metrics

**Metric 1: Metaphor Grounding Rate**
- **Target:** 95%+ of creative metaphors traceable to source documents
- **Measurement:** `metaphor-grounding-verifier` pass rate
- **Baseline:** Currently 0% (no verification system)

**Metric 2: Design Iteration Reduction**
- **Target:** 50% fewer client revision rounds
- **Measurement:** Track client feedback cycles before/after implementation
- **Baseline:** Average 3-4 revision rounds per client
- **Rationale:** Better creative concepts upfront = fewer "this feels generic" revisions

**Metric 3: Variability Achievement**
- **Target:** Systematic mode generates 3+ distinct concepts per brief
- **Measurement:** Semantic similarity scoring between generated prompts
- **Threshold:** <70% similarity = distinct concepts

**Metric 4: Asset Finder Efficiency**
- **Target:** Find 10+ relevant visual references in <5 minutes
- **Measurement:** Time from metaphor input to mood board output
- **Baseline:** Manual search takes 30-60 minutes

### 6.3 Anti-AI Design Checklist

**Quality Gate:** All designs must pass this checklist before client presentation.

- [ ] **Grounded Metaphor:** Traceable to brand document keywords (cite sources)
- [ ] **Unique Colors:** Not using Tailwind default palette (verified in `tailwind.config.cjs`)
- [ ] **Brand Typography:** Custom font pairings (not default Inter)
- [ ] **Archetype Consistency:** All components use correct archetype variant
- [ ] **Creative Puzzle Visible:** Constraint solution evident in design
- [ ] **Mood Board Integration:** Visual references from research incorporated
- [ ] **Non-Standard Layout:** Not using centered hero + 3-column grid default
- [ ] **Emotional Resonance:** Design evokes specific emotion from brand guidelines
- [ ] **Semantic HTML:** Proper heading hierarchy, ARIA attributes
- [ ] **Accessibility:** WCAG 2.1 AA contrast ratios verified

**Failure Response:** If 3+ items fail, re-run `@creative-director-orchestrator` with refined queries.

---

## 7. Risk Mitigation & Troubleshooting

### Risk 1: "Generic Average" Output (High Risk)

**Symptom:** Creative metaphor is vague, uses brand buzzwords but no specifics.

**Root Cause:** Query decomposition not granular enough → retrieval returns broad chunks.

**Mitigation:**
- Strengthen `agentic-rag-methodology` skill with more granular query examples
- Add self-critique step to meta-prompt forcing "genericness" detection
- Iterative refinement loop: refine queries → re-retrieve → re-synthesize

**Diagnostic Question:** "Can you cite the exact sentence in brand docs that supports this metaphor?"

### Risk 2: Hallucinated Metaphors (Medium Risk)

**Symptom:** Creative metaphor is compelling but not grounded in brand documents.

**Root Cause:** LLM generates creative idea from training data, not from project docs.

**Mitigation:**
- `metaphor-grounding-verifier` agent fact-checks all metaphors
- Verification step blocks hallucinations before client presentation
- Flag ungrounded outputs for human review

**Diagnostic Question:** "Does RAG retrieval return chunks containing the source keyword?"

### Risk 3: MCP Browser Automation Failures (Medium Risk)

**Symptom:** Asset finder times out, screenshots fail, browser crashes.

**Root Cause:** Website structure changes, rate limiting, network issues.

**Mitigation:**
- Implement retry logic with exponential backoff
- Fallback to manual search if automation fails
- Log errors for debugging
- Use headless mode to reduce resource usage

**Diagnostic Question:** "Did the MCP tool return an error status?"

### Risk 4: Overthinking Constraints (Low Risk)

**Symptom:** Designer paralyzed by constraint intersection, no creative output.

**Root Cause:** Too many conflicting constraints treated as "puzzle."

**Mitigation:**
- Prioritize constraints (mandatory vs. nice-to-have)
- If >5 constraints, split into phases
- Creative puzzle should be challenging, not impossible

**Diagnostic Question:** "Can you identify at least one viable solution to the puzzle?"

---

## 8. File Structure Summary

### New Files to Create

```
.claude/
├── agents/
│   └── design/
│       ├── creative-director-orchestrator.md (NEW - Phase 1)
│       ├── metaphor-grounding-verifier.md (NEW - Phase 2)
│       ├── design-variance-generator.md (NEW - Phase 2)
│       └── visual-asset-finder.md (NEW - Phase 3)
│
├── skills/
│   └── design/
│       ├── agentic-rag-methodology/
│       │   └── SKILL.md (NEW - Phase 1)
│       ├── grounded-metaphor-generation/
│       │   └── SKILL.md (NEW - Phase 1)
│       ├── constraint-as-creativity/
│       │   └── SKILL.md (NEW - Phase 1)
│       └── anti-ai-design-patterns/
│           └── SKILL.md (NEW - Phase 1)
│
docs/
├── CREATIVE_DESIGN_AGENT_IMPLEMENTATION_PLAN.md (THIS FILE)
├── CREATIVE_DESIGN_WORKFLOW.md (NEW - Phase 2)
└── CREATIVE_DESIGN_QUICKSTART.md (NEW - Phase 4)

assets/
└── research/
    └── {project-name}/ (AUTO-GENERATED - Phase 3)
        ├── behance-{keyword}-1.png
        ├── dribbble-{keyword}-1.png
        └── mood-board.md
```

### Modified Files

```
.claude/
├── agents/
│   └── design/
│       ├── brand-design-strategist.md (MODIFY - Phase 1)
│       └── innovation-designer.md (MODIFY - Phase 1)
│
├── skills/
│   └── design/
│       └── design-archetypes/
│           └── SKILL.md (MODIFY - Phase 2)
│
CLAUDE.md (MODIFY - Phase 4)
docs/CLIENT_ONBOARDING.md (MODIFY - Phase 4)
```

---

## 9. Example Workflow: End-to-End

**Scenario:** Client wants a landing page for a SaaS project management tool targeting enterprise teams.

### Step 1: Initial Brief Analysis

**User invokes:**
```
@creative-director-orchestrator Generate creative concept for SaaS PM tool landing page
```

**Agent reads:**
- `sites/client-saas/BRAND_GUIDELINES.md` → extracts keywords: "collaborative," "efficient," "transparent," "reduce chaos"
- `sites/client-saas/CLAUDE.md` → identifies constraints: "No stock photos of people," "Must include 3-paragraph compliance text," "Mobile-first"

### Step 2: Query Decomposition

**Agent decomposes into sub-queries:**
1. "Retrieve persona's primary frustration with current PM tools"
2. "Retrieve brand's emotional goal for users"
3. "Retrieve mandatory compliance constraint wording"
4. "Retrieve competitor visual patterns to differentiate from"

### Step 3: Parallel Retrieval

**Agent retrieves:**
- Persona frustration: "Scattered information across 5 tools"
- Emotional goal: "Calm confidence, feeling in control"
- Compliance: "3-paragraph data security disclosure"
- Competitor analysis: "Most use blue/gray with Gantt chart hero images"

### Step 4: Grounded Metaphor Generation

**Extract keywords:** "collaborative," "efficient," "transparent," "calm," "control," "reduce chaos"

**Brainstorm metaphors:**
- "chaos" → "storm" (rejected: negative)
- "control" → "cockpit" (rejected: too technical)
- "transparent" → "clear water" (promising)
- "efficient" → "streamlined river" (promising)
- **SELECTED:** "Calm River" (maps to "calm," "transparent," "efficient flow," "reduce chaos")

**Scoring:**
- ✅ Consistent with "calm confidence"
- ✅ Consistent with "transparent"
- ✅ Consistent with "efficient"
- ✅ Consistent with "reduce chaos" (chaotic → flowing)
- ❌ Neutral to "collaborative" (no conflict, acceptable)

### Step 5: Constraint-as-Creativity Puzzle

**Identified constraints:**
1. No stock photos of people (negative)
2. Must include 3-paragraph compliance text (positive)
3. Mobile-first responsive design (positive)

**Creative Puzzle:**
"Your challenge is to create a landing page that visually embodies 'Calm River' flow. You face a specific puzzle: you must evoke trust and collaboration *without* using any photographs of people. The design must also integrate dense legal text without disrupting the 'calm flow' user experience. How can you use abstract water visuals, motion animations, and creative text hierarchy to solve this?"

### Step 6: Self-Critique & Output

**Self-Critique:** "Is this generic?"
- Metaphor unique? ✅ (not "rocket ship" or "Swiss Army knife")
- Traceable to brand docs? ✅ (keywords cited)
- Constraint treated as puzzle? ✅ (not just "exclude people")

**Output: Creative Meta-Prompt**

```markdown
# Creative Meta-Prompt: The Calm River

## 1. Core Creative Metaphor
Your design must embody the grounded metaphor of **"The Calm River"**.
This concept is derived from the brand keywords: "transparent," "efficient," "calm confidence," and "reduce chaos."

It visualizes the SaaS platform as a flowing river that carries scattered information smoothly and transparently to its destination, transforming chaos into serene control.

**Visuals:**
- Use fluid, organic shapes (not rigid grids)
- Gradient blues and greens (water-inspired, not default Tailwind blue)
- Subtle scroll-triggered animations (content flows down like water)
- Translucent layers (glassmorphism effect for transparency)

**Tone:**
Serene, confident, effortless. Every element feels smooth and intentional.

## 2. Core User Problem to Solve
This design must solve: **"Scattered information across 5 tools causing daily friction."**

The visual flow must demonstrate consolidation → clarity → control.

## 3. Core Value Prop to Showcase
Hero this differentiator: **"Single source of truth with real-time transparency."**

Not just a feature—it's the proof of calm.

## 4. The Creative Puzzle (Constraint-as-Creativity)
You face a specific creative puzzle: **"Evoke trust and collaboration *without* using photographs of people."**

Your design must also integrate a **3-paragraph legal compliance disclosure** without disrupting the calm flow.

**Your challenge:** How can you use abstract water visuals, gentle motion, and elegant typography to create human trust without showing humans? How can you make dense legal text feel like a natural part of the river's flow (not a dam blocking it)?

## 5. Mood Board
Use these URLs as visual inspiration:
- Water flow data visualization: [Behance example]
- Glassmorphism UI: [Dribbble example]
- Organic gradient backgrounds: [Unsplash example]

## 6. Required Section Ideas
1. **Hero Section:** Animated gradient background (flowing blues/greens), headline with water-flow animation on scroll
2. **Problem Section:** Chaotic scattered icons that smoothly consolidate into single flow diagram
3. **Solution Section:** Transparent card layers (glassmorphism) revealing different platform features
4. **Trust Section:** Instead of client logos, use creative "transparency meter" showing real-time data sync
5. **Compliance Section:** Legal text in elegant accordion/expandable river metaphor (e.g., "Dive deeper into our security commitment")
```

### Step 7: Verification

**User invokes:**
```
@metaphor-grounding-verifier Verify "Calm River" metaphor
```

**Agent fact-checks:**
- Query: "Retrieve chunks from BRAND_GUIDELINES.md containing 'calm' OR 'transparent' OR 'efficient'"
- Result: ✅ Found 3 relevant chunks
- Citation: "Brand voice guidelines, line 47: 'We want users to feel calm confidence...'"
- **Status: VERIFIED**

### Step 8: Variance Generation (Optional)

**User requests alternatives:**
```
@design-variance-generator Generate 3 systematic variations
```

**Output:**
1. **Variant 1 (Persona A - Enterprise Admin):** Emphasize "control" metaphor, dashboard-focused hero
2. **Variant 2 (Persona B - Team Lead):** Emphasize "collaboration" metaphor, team flow diagram
3. **Variant 3 (Metaphor X - Transparency Focus):** Glassmorphism-heavy design, x-ray vision metaphor

### Step 9: Implementation

**User invokes:**
```
@brand-design-strategist Create design concept from "Calm River" meta-prompt
```

**Agent output:** Detailed visual specification aligned with metaphor, archetype (likely **Approachable**), and creative puzzle solution.

**Result:** Landing page design that is:
- ✅ Creative (unique "Calm River" metaphor)
- ✅ Uncommon (not using standard SaaS patterns)
- ✅ Not AI-looking (grounded in brand docs, not generic templates)

---

## 10. Conclusion & Next Steps

### Summary

This implementation plan translates the **Agentic RAG & Creative Synthesis** SOP into a practical, actionable system of Claude Code agents and skills.

**Key Innovations:**

1. **Agentic RAG Architecture:** Replaces generic averaging with multi-source synthesis
2. **Grounded Metaphor Engine:** 3-step process ensures creative uniqueness without hallucinations
3. **Constraint-as-Creativity:** Transforms limitations into design catalysts
4. **MCP Integration:** Automates visual research and asset finding
5. **Variability Systems:** Systematic + Stochastic generation for breadth and depth

**Expected Outcomes:**

- 95%+ metaphor grounding rate
- 50% reduction in client revision cycles
- Designs that pass "non-AI-looking" quality gate
- Scalable creative process across 10+ client sites

### Immediate Next Steps

**Week 1 Priorities:**

1. Create `agentic-rag-methodology/SKILL.md` (foundational knowledge)
2. Create `grounded-metaphor-generation/SKILL.md` (core technique)
3. Create `creative-director-orchestrator.md` (master agent)
4. Test with 1 existing client brief (bigger-boss or pilot client)

**Success Indicator:** First grounded creative meta-prompt generated that passes verification and feels "uncommon."

---

**Document Version:** 1.0
**Last Updated:** November 16, 2025
**Next Review:** After Phase 1 completion (Week 2)
**Maintained By:** Design Systems Lead

**Related Documents:**
- `docs/sop_ai_design.md` - Source methodology (Agentic RAG SOP)
- `design-idea.md` - Example creative output ("The Systematic Orchestra")
- `docs/DESIGN_QUALITY_SYSTEM.md` - 3-Archetype Framework
- `CLAUDE.md` - Project constitution and tech stack
