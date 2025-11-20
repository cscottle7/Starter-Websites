# Creative Workflow Enhancements v2.0

**Updated:** 2025-11-19
**Issue:** Design homogeneity across client sites
**Solution:** 6-layer diversity injection system

---

## Problem Summary

**Observed Issue:**
- Harbourview General Practice and Bigger Boss websites look similar despite different industries
- Meta-prompts from creative workflow produce convergent designs
- Using same meta-prompt on different AIs yields similar results

**Root Causes Identified:**
1. Single-point retrieval (1 mood board, 1 pain point) creates deterministic outputs
2. No differentiation checking against past projects
3. Fixed section structure (all projects use Hero → Problem → Solution → Trust → CTA)
4. No image placeholder strategy (designers default to generic stock photos)
5. No visual pattern analysis during research phase

---

## Solution Architecture

### 1. Visual-First Research (Phase 2A - Enhanced)

**BEFORE (5-7 screenshots):**
```
WebSearch → Screenshot 5-7 examples → Proceed to keywords
```

**AFTER (15-20 screenshots + analysis):**
```
WebSearch → Screenshot 15-20 examples →
Extract color families (warm/cool/neutral) →
Identify layout patterns (asymmetric/symmetric/card-based/full-bleed) →
Note typography trends (serif/sans-serif pairings) →
Cluster into 3 visual style families →
Select from LEAST common cluster (forced differentiation)
```

**Impact:**
- 3x more visual examples
- Forced diversity through clustering
- Color/typography/layout dimensions tracked

---

### 2. Keyword Diversity Clustering (Phase 2B - Enhanced)

**BEFORE (5-7 keywords, single retrieval):**
```
Grep keywords → Select 5-7 → Use for metaphor
```

**AFTER (15 keywords with clustering):**
```
Grep keywords → Extract 15 keywords →
Cluster into 3 groups (functional/emotional/aspirational) →
Select 1 keyword from EACH cluster (forced diversity) →
Total 3-5 keywords with semantic variation
```

**Impact:**
- Prevents keyword clustering in single semantic family
- Ensures metaphors balance functional + emotional + aspirational dimensions

---

### 3. Creativity Parameters (Temperature Control)

**Added to creative-brief-synthesizer.md:**

```yaml
model: sonnet
temperature: 0.6  # NEW - balanced creativity + coherence
```

**Purpose:**
- Temperature 0.6 produces moderate creative divergence
- Higher than research phase (0.2) for factual accuracy
- Lower than max creativity (1.0) to maintain coherence

**Expected Result:**
- More unique vocabulary choices
- Less repetition of generic phrases
- Better metaphor variation

---

### 4. Image Placeholder Strategy (Section 7 - NEW)

**Added to meta-prompt template:**

```markdown
## 7. Image Sourcing & Placeholders

### AI Image Generation Prompts (Imagen 3)

**Hero Background:**
- Prompt: "[Metaphor-specific description], [lighting], [color palette], photorealistic, high quality"
- Aspect Ratio: 16:9
- Example: "Calm harbour waters at dawn, soft golden light, muted blues and warm sand tones, photorealistic"

### Stock Photo Sourcing Strategy
1. Unsplash collections: "[industry] + natural light"
2. Photographer style: [Match metaphor aesthetic]
3. Avoid: Generic handshakes, fake diversity photos
4. Use: Authentic workspace, candid moments

### Photography Direction
- Lighting: Natural/studio/golden hour
- Background: [Specific color matching brand]
- Expression: Authentic/professional
- Shot type: 3/4 portrait/environmental
```

**Impact:**
- Designers get specific image sourcing guidance
- Imagen 3 prompts generate unique hero backgrounds
- No more generic stock photo defaults

---

### 5. Narrative Structure Variation (5 Templates)

**Added template library to creative-brief-synthesizer:**

```markdown
TEMPLATE A: Problem-First Journey
Sections: Painful Current State → Aggravating Factors → Solution → How It Works → Proof → CTA

TEMPLATE B: Solution-First Impact
Sections: Bold Claim → Immediate Proof → Problem Context → How We Deliver → Social Proof → CTA

TEMPLATE C: Storytelling Arc
Sections: User Journey → Turning Point → Transformation → How We Enable → CTA

TEMPLATE D: Data-Driven Credibility
Sections: Stats Hero → Numbers Behind It → What This Means → Methodology → Results → CTA

TEMPLATE E: Visual Journey
Sections: Full-Viewport Visual → Scroll Story → Interactive Experience → Deep Dive → CTA
```

**Selection Logic:**
- Medical/Healthcare: Template C or A
- B2B SaaS: Template B or D
- Creative Agencies: Template E
- **NEVER use same template for consecutive projects**

**Impact:**
- Structural variation between projects
- Industry-appropriate narrative patterns
- Prevents Hero → Problem → Solution repetition

---

### 6. Differentiation Verifier Agent (NEW)

**Purpose:** Prevent creative homogeneity by comparing new meta-prompts to last 5 projects

**Created:** `.claude/agents/design/creative/differentiation-verifier.md`

**Process:**
1. Load last 5 project meta-prompts
2. Extract comparison dimensions:
   - Core metaphor keywords
   - Visual language (color/typography/layout)
   - Section structure
   - Emotional tone
3. Calculate similarity scores:
   - Semantic similarity (keyword overlap)
   - Structural similarity (section patterns)
   - Visual language overlap (3 dimensions)
4. Apply pass/fail criteria:
   - ✅ PASS: <70% semantic, <80% structural, ≤1 visual dimension match
   - ❌ FAIL: Return to synthesis with explicit "avoid" constraints

**Integration:**
```
Phase 4.1: @creative-brief-synthesizer generates meta-prompt
Phase 4.2: @differentiation-verifier checks similarity (NEW)
  → PASS: Proceed to user review
  → FAIL: Return to 4.1 with constraints (max 2 retries)
  → FAIL after retries: Escalate to manual review
```

**Impact:**
- Automatic detection of too-similar designs
- Iterative refinement with specific constraints
- Quality gate before user sees meta-prompt

---

## Workflow Changes Summary

### Phase 2: Agentic RAG Research

**Changes:**
- Increased screenshots: 5-7 → 15-20
- Added visual pattern analysis (color/typography/layout clustering)
- Added keyword clustering: 5-7 keywords → 15 keywords in 3 clusters
- Added diversity selection: Select from LEAST common clusters

### Phase 4: Meta-Prompt Synthesis

**Changes:**
- Added Step 4.0: Select narrative template (check history, force variation)
- Added Step 4.2: Invoke differentiation-verifier (NEW)
- Added Step 4.2.1: Retry logic with constraints (max 2 retries)
- Modified temperature: Default → 0.6 (moderate creativity)

### Meta-Prompt Output

**Changes:**
- Added Section 7: Image Sourcing & Placeholders
  - Imagen 3 prompts for hero/backgrounds/icons
  - Stock photo sourcing strategy
  - Photography direction for custom shoots
- Updated quality checklist: 8/9 → 9/10 checks (added image placeholders)

---

## Expected Impact

### Before Enhancement

**Consecutive Projects Similarity:**
- Semantic: 60-70% overlap (same keywords recycled)
- Structural: 75%+ (Hero → Problem → Solution → Trust → CTA)
- Visual: 1-2 dimensions match (similar color families, typography)

**Designer Feedback:**
- "Feels like variations of same template"
- "Need more creative direction for images"
- "Metaphors are too similar across clients"

### After Enhancement

**Consecutive Projects Similarity:**
- Semantic: <40% overlap (keyword clustering + diversity selection)
- Structural: <50% (5 narrative templates, forced variation)
- Visual: 0 dimensions match (clustering + LEAST common selection)

**Designer Feedback (Expected):**
- "Each project feels unique and appropriate"
- "Image sourcing guidance is specific and actionable"
- "Metaphors are distinct and memorable"

---

## Files Modified

1. `.claude/agents/design/creative/creative-director-orchestrator.md`
   - Increased screenshot requirement: 5-7 → 15-20
   - Added visual pattern analysis phase
   - Added keyword clustering (15 keywords → 3 clusters)
   - Added Step 4.0: Narrative template selection
   - Added Step 4.2: Differentiation verification
   - Updated sub-agent coordination (4 → 5 agents)

2. `.claude/agents/design/creative/creative-brief-synthesizer.md`
   - Added temperature: 0.6
   - Added narrative structure templates (5 templates)
   - Added Step 8: Image sourcing & placeholders (Section 7)
   - Updated quality checklist: 8/9 → 9/10

3. `.claude/agents/design/creative/differentiation-verifier.md` (NEW)
   - Semantic similarity calculation
   - Structural similarity calculation
   - Visual language overlap detection
   - Pass/fail decision logic
   - Project history management

---

## Next Steps

### Immediate (Ready Now)

1. **Test on Harbourview Redesign:**
   - Run enhanced workflow on Harbourview General Practice
   - Compare new meta-prompt to original
   - Measure similarity scores

2. **Initialize Project History:**
   - Create `.claude/agents/design/creative/history/` directory
   - Create `index.json` for tracking
   - Add Harbourview + Bigger Boss as first 2 entries

3. **Generate First Enhanced Meta-Prompt:**
   - Use @creative-director-orchestrator with new workflow
   - Verify differentiation-verifier runs automatically
   - Review Section 7 (Image Placeholders) quality

### Short-Term (Week 2)

4. **Create 3rd Client Site:**
   - New industry (not medical, not B2B SaaS)
   - Test narrative Template E (Visual Journey)
   - Measure diversity metrics vs. first 2 projects

5. **Refine Imagen 3 Prompts:**
   - Test generated prompts in Imagen 3
   - Iterate on prompt structure for quality
   - Create prompt library for common metaphor types

6. **Build Template Selection Automation:**
   - Script to check project history
   - Auto-select template based on industry + history
   - Prevent manual template selection errors

### Medium-Term (Month 2)

7. **Automate Color Palette Extraction:**
   - Build screenshot → color palette script
   - Cluster palettes (warm/cool/neutral)
   - Auto-select from least common cluster

8. **Create Typography Pairing Database:**
   - Curate 50 Google Fonts pairings
   - Cluster by style (modern/classic/playful/technical)
   - Link to industry categories

9. **Measure Diversity Metrics:**
   - Run 3 projects through enhanced workflow
   - Calculate average similarity scores
   - Target: <50% consecutive project similarity
   - Iterate workflow if >50%

---

## Success Metrics

### Quantitative Targets

| Metric | Current | Target | Measurement |
|--------|---------|--------|-------------|
| Semantic Similarity (consecutive) | 60-70% | <40% | Keyword overlap analysis |
| Structural Similarity | 75%+ | <50% | Section structure comparison |
| Visual Dimension Matches | 1-2/3 | 0/3 | Color/typography/layout overlap |
| Metaphor Category Repetition | 2/3 same | 0/3 same | Category tracking (literal/abstract/organic) |
| Designer Satisfaction | 3.0/5 | 4.5/5 | Post-project survey |

### Qualitative Indicators

**Success:**
- ✅ Clients can distinguish their meta-prompt from 4 others (blind test)
- ✅ Designers report "clear, unique direction" (not "variation of template")
- ✅ Differentiation-verifier passes on first attempt (>80% of projects)
- ✅ Imagen 3 prompts generate visually distinct hero backgrounds

**Failure:**
- ❌ Differentiation-verifier fails 2+ times per project (indicates workflow issue)
- ❌ Designers still request "more creative direction" (insufficient guidance)
- ❌ Metaphors clustered in same category 3 consecutive times

---

## Risk Mitigation

### Risk 1: Over-Diversification Reduces Quality

**Mitigation:**
- Keep grounding rate requirement at 95% (quality floor)
- Differentiation-verifier only rejects >70% similarity (allows overlap)
- Manual review escalation after 2 retries

### Risk 2: Workflow Complexity Increases

**Mitigation:**
- Template selection automated (no manual decision)
- Differentiation-verifier runs automatically in Phase 4
- Visual research reuses existing Chrome MCP (no new tools)

### Risk 3: Client Confusion with Non-Standard Structures

**Mitigation:**
- Narrative templates follow UX best practices
- Meta-prompts explain "why" for structural choices
- Designer can override template selection if needed

---

## Rollback Plan

If enhanced workflow produces worse results:

1. **Immediate Rollback:**
   - Remove differentiation-verifier from Phase 4
   - Revert screenshot count to 5-7
   - Remove temperature parameter (use default)

2. **Preserve Improvements:**
   - Keep Section 7 (Image Placeholders) - universally beneficial
   - Keep narrative templates - optional selection, doesn't break workflow
   - Keep keyword clustering - improves without breaking

3. **Diagnostic:**
   - Identify specific failure point (Phase 2/4/verification)
   - A/B test enhanced vs. original on same project
   - Iterate single component at a time

---

## Appendix: Imagen 3 Integration

### Model Details

- **API:** Gemini API (Imagen 3/4)
- **Model ID:** "imagen-3.0-generate-001" or "imagen-4-ultra"
- **Pricing:** $0.02-$0.12 per image
- **Resolution:** Up to 1024x1024 pixels
- **Capabilities:** Photorealistic imagery, advanced typography, branding elements

### Prompt Format

```
[Subject description], [lighting quality], [composition notes], [color palette keywords], photorealistic, high quality
```

**Example:**
```
Calm harbour waters at dawn, soft golden light on horizon, minimal ripples, coastal landscape, muted blues and warm sand tones, photorealistic, high quality
```

**Aspect Ratios:**
- Hero banners: 16:9
- Section backgrounds: 3:2 or 4:3
- Icons/illustrations: 1:1

### Stock Photo Alternatives

**Primary Sources:**
1. Unsplash (free, high quality)
2. Pexels (free, commercial use)
3. Photographer direction for custom shoots

**Search Strategy:**
```
"[industry keyword] + natural light + [location]"

Examples:
- "medical professional natural light sydney"
- "business team workspace australia candid"
- "coastal landscape morning light minimal"
```

---

**Version:** 2.0
**Status:** Implemented, ready for testing
**Next Review:** After 3 projects completed with enhanced workflow
