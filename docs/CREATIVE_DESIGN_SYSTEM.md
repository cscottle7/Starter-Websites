# Project Constitution Extension: Creative Design System

**Parent Document:** [CLAUDE.md](../CLAUDE.md) (Multi-Site Website Development System)
**Extension Focus:** AI-Powered Creative Design Workflow for Non-Generic Website Aesthetics

---
## Part A: Strategic & Product Definition
---

### 1. The Press Release
*FOR IMMEDIATE RELEASE*

**Revolutionary AI Design System Eliminates "Generic AI Look" from Website Projects While Accelerating Creative Development by 60%**

**Washington, DC** – Today marks the launch of an innovative creative design workflow that solves the critical challenge facing AI-assisted web development: how to generate distinctive, brand-aligned website designs that don't look AI-generated. By combining advanced Agentic RAG (Retrieval-Augmented Generation) methodology with a grounded metaphor framework and automated quality verification, web agencies can now produce unique, creative design concepts in hours instead of days—while maintaining the human touch that makes designs feel authentic and memorable.

Built as an extension to the Multi-Site Website Development System, the Creative Design System introduces a conditional orchestration workflow where AI agents act as research assistants and creative partners, not template generators. When starting a new client website without an existing design—or when exploring alternative design directions—developers invoke the `@creative-director-orchestrator` agent, which conducts deep research into the client's industry, brand values, and competitive landscape, then synthesizes this knowledge into creative meta-prompts grounded in specific visual metaphors.

"The breakthrough isn't just faster design," explains the system architect. "It's designs that pass the 'non-AI test'—websites that feel thoughtfully crafted, emotionally resonant, and visually distinctive because they're rooted in research-backed metaphors rather than statistical pattern matching."

The system works through four specialized Claude Code agents that handle the complexity of creative research methodology behind a simple `@agent-name` invocation syntax. The `@metaphor-researcher` agent analyzes 50+ industry examples to identify authentic visual patterns; the `@creative-brief-synthesizer` transforms this research into design-ready meta-prompts; the `@design-implementation-specialist` translates creative concepts into working Astro components with Tailwind CSS; and the `@metaphor-grounding-verifier` ensures 95%+ traceability between final designs and original research—preventing the drift toward generic AI aesthetics.

All creative artifacts—research documents, metaphor frameworks, meta-prompts, and verification reports—are version-controlled in Git alongside the codebase, ensuring full transparency, reproducibility, and continuous improvement of the creative process. The system integrates seamlessly with existing quality gates, adding an optional Gate 7 (Creative Quality) for projects where the orchestrator was invoked.

**Key Innovation:** Unlike traditional AI design tools that generate final outputs directly (leading to homogeneous results), this system generates *creative direction* that informs human-supervised implementation—preserving designer agency while accelerating research and concept development.

### 2. Customer FAQ

**Q: Does this mean AI is designing my clients' websites now?**
A: No. The AI agents handle research and creative brief synthesis—the time-consuming "homework" phase of design. You retain full creative control over implementation, can reject or refine meta-prompts, and make all final design decisions. Think of it like having a junior designer who's done 40 hours of competitive research and visual analysis in 2 hours.

**Q: When should I use the creative orchestrator vs. traditional design workflow?**
A: Use `@creative-director-orchestrator` in two scenarios: (1) Starting a new client site from scratch without supplied designs, or (2) You have a design but want to explore alternative creative directions. If a client supplies final designs and you're satisfied with them, skip the orchestrator and implement directly.

**Q: Will the designs generated look like every other AI-generated website?**
A: This is the core problem the system solves. By using Agentic RAG methodology with metaphor grounding, designs are traced back to specific research artifacts (industry examples, brand values, visual patterns) rather than generic statistical patterns. The `@metaphor-grounding-verifier` agent enforces 95%+ traceability—if a design element can't be linked to research, it's flagged for revision. This prevents the "AI aesthetic" drift.

**Q: What if the creative meta-prompt doesn't match my vision?**
A: Meta-prompts are starting points, not mandates. You can: (1) Refine the meta-prompt by providing more specific constraints to the orchestrator, (2) Use it as inspiration and manually adjust design decisions, or (3) Reject it entirely and design manually. The system is designed for *augmentation*, not *replacement* of human creativity.

**Q: How does this integrate with the existing 6-gate quality system?**
A: For projects where `@creative-director-orchestrator` was invoked, an optional **Gate 7: Creative Quality** runs after implementation (between Gate 6: Security and production deployment). This gate uses `@metaphor-grounding-verifier` to check metaphor traceability (95%+ pass rate) and runs the Anti-AI Design Checklist (spatial rhythm, intentional asymmetry, etc.). If creative quality fails, the orchestrator re-runs with refined queries (max 2 retries).

**Q: Can I share the design variations with clients for feedback?**
A: Yes. After design implementation, you can optionally present the alternative meta-prompts/design directions that were generated during the creative process. This demonstrates research depth and gives clients choice—enhancing perceived value while maintaining your expert guidance.

**Q: What if the Chrome DevTools MCP server stops working or I don't want to use it?**
A: MCP dependency is intentionally flexible. If issues arise, the system will ask you to choose a fallback strategy: (1) Manual screenshot gathering (you provide screenshots, agents analyze them), (2) Skip visual analysis phase (use text-based research only), or (3) Use alternative MCP servers if available. The decision is made at runtime based on your preferences and context.

### 3. Internal FAQ

**Q: Why Agentic RAG instead of standard RAG or direct prompt-to-design?**
A: Standard RAG retrieves chunks of knowledge but doesn't synthesize creative direction. Direct prompt-to-design creates generic outputs because LLMs default to statistical averages. **Agentic RAG** uses specialized agents to (1) conduct multi-stage research with intentional queries, (2) synthesize findings into creative frameworks, (3) trace design decisions back to research artifacts. This prevents "mode collapse" (convergence to generic designs) by anchoring creativity in specific, documented sources.

**Q: Why metaphor-grounding instead of letting the AI "be creative"?**
A: Ungrounded creativity defaults to statistical patterns = generic AI aesthetics. **Grounded metaphors** (e.g., "industrial modernism," "organic brutalism") provide specific visual constraints that differentiate designs. By requiring 95%+ traceability between design elements and research artifacts, we enforce *intentionality*—every design choice has a documented reason, preventing drift toward averages.

**Q: How do we measure "non-AI-looking design quality" without subjective judgments?**
A: Three-tier measurement approach:
- **Quantitative Proxy:** Metaphor grounding rate (95%+ = good proxy for intentionality)
- **Qualitative Metric:** Client feedback survey (5-point scale: "Does this feel unique/creative?")
- **Process Metric:** Revision requests per design (with vs. without orchestrator)
- **Months 1-3:** Establish baseline by comparing designs produced with/without orchestrator
- **Months 4-6:** Track trends and correlate grounding rate with client satisfaction

**Q: What's the risk if Chrome DevTools MCP becomes unavailable?**
A: Low risk due to modular architecture: (1) Visual analysis is valuable but not critical—text-based research still functional; (2) Manual screenshot fallback available immediately; (3) Alternative MCP servers can be swapped in; (4) System explicitly asks user for preferred fallback strategy instead of assuming one. The workflow degrades gracefully.

**Q: Why not just use Figma designs and skip AI-generated concepts?**
A: This system is for scenarios where Figma designs *don't exist yet*. Traditional workflow: designer spends 2-4 days researching competitors, creating mood boards, iterating concepts. Creative orchestrator workflow: 2-3 hours of AI-assisted research + human synthesis. If client supplies Figma files, you skip the orchestrator entirely and implement those designs.

**Q: How does this affect our design team's role?**
A: Shifts from "research + ideation + implementation" to "creative direction + implementation + refinement." Designers spend less time gathering screenshots and analyzing competitors (automated) and more time making creative decisions, refining concepts, and ensuring brand alignment. Junior designers gain access to senior-level research depth; senior designers scale their expertise across more projects.

**Q: What's the total cost to implement the Creative Design System?**
A: **Initial setup (Weeks 1-2):** $5k-$10k developer time to create 4 agents + 4 skills + documentation. **Per-project costs:** Negligible (agent invocations are time, not money). **Ongoing maintenance:** <$1k/quarter to update skills with new design patterns. Compare to hiring a dedicated design researcher: $60k-$90k annually.

**Q: How do we prevent agents from generating culturally insensitive or inappropriate metaphors?**
A: **Gate 7: Creative Quality** includes a Cultural Sensitivity Checklist as part of metaphor verification. Agents flag potential issues (e.g., religious symbols, culturally loaded imagery) and require human approval before proceeding. All meta-prompts are human-reviewed before implementation begins—no automated deployment of creative concepts.

### 4. Project Goal & High-Level Requirements

**Jobs-to-be-Done (JTBD) Statement:**

When I need to create a distinctive, brand-aligned website design from scratch, I want an AI-assisted research and creative synthesis workflow that generates grounded design concepts in hours instead of days, so I can deliver designs that feel human-crafted and visually unique without spending days on competitive analysis and mood board creation.

**Core Requirements:**

1. **Conditional Creative Workflow:** Orchestrator invoked only when (a) no design supplied or (b) exploring alternatives—not mandatory for all projects

2. **Research-Backed Creativity:** All design concepts traced to specific industry examples, brand values, and visual patterns (95%+ grounding rate)

3. **Non-Generic Design Quality:** Designs pass Anti-AI Design Checklist (spatial rhythm, intentional asymmetry, unexpected element hierarchy, constraint-driven creativity)

4. **Transparent Creative Process:** All research artifacts, metaphor frameworks, and meta-prompts version-controlled in Git for reproducibility and refinement

5. **Simple Invocation, Complex Methodology:** End users invoke `@creative-director-orchestrator`; agents handle multi-stage Agentic RAG workflow behind the scenes

6. **Graceful MCP Degradation:** System asks user for fallback strategy if Chrome DevTools MCP unavailable (manual screenshots, text-only research, alternative MCP)

7. **Optional Quality Gate Integration:** Gate 7 (Creative Quality) runs only for projects where orchestrator was invoked—validates metaphor grounding and anti-AI design principles

### 5. Success Metrics & Measurement Plan

**Primary Success Metrics:**

1. **Creative Development Speed (Target: 60% reduction)**
   - **Measurement:** Time from project kickoff to approved design concept
   - **Baseline:** Not currently tracked—establish baseline in Month 1
   - **Target:** Design concept approval in <8 hours (vs. estimated 2-4 days manual)
   - **Validation Method:** Track from orchestrator invocation to "design concept approved" milestone in project management system

2. **Non-AI Design Quality (Target: 95%+ metaphor grounding rate)**
   - **Measurement:** Percentage of design elements traceable to research artifacts (automated via `@metaphor-grounding-verifier`)
   - **Baseline:** N/A (new metric)
   - **Target:** 95%+ grounding rate for all designs passing Gate 7
   - **Validation Method:** Automated agent reports in `.claude/agents/design/creative/outputs/grounding-reports/`

3. **Client Satisfaction with Creativity (Target: 4.2+ / 5.0 average)**
   - **Measurement:** Post-design client survey: "Does this design feel unique and aligned with our brand?"
   - **Baseline:** Establish baseline in Month 1 (survey designs with vs. without orchestrator)
   - **Target:** 4.2+ average score (5-point scale)
   - **Validation Method:** Google Forms survey sent after design approval, tracked in spreadsheet

4. **Design Revision Efficiency (Target: <2 revisions per project)**
   - **Measurement:** Number of design revision requests before final approval
   - **Baseline:** Establish baseline in Month 1
   - **Target:** <2 revisions on average for orchestrator-assisted designs (hypothesis: better research = fewer surprises)
   - **Validation Method:** Count revision requests in project communication logs

5. **Creative Process Adoption Rate (Target: 40%+ of new projects)**
   - **Measurement:** Percentage of new client sites where orchestrator was invoked
   - **Baseline:** 0% (system doesn't exist yet)
   - **Target:** 40%+ adoption within 6 months (indicates team finds it valuable)
   - **Validation Method:** Count orchestrator invocations in `.claude/` logs vs. total new client sites launched

**Secondary Quality Metrics:**

6. **Anti-AI Design Checklist Pass Rate (Target: 90%+)**
   - **Measurement:** Percentage of designs passing all 5 checklist criteria (spatial rhythm, asymmetry, hierarchy, color nuance, constraint creativity)
   - **Target:** 90%+ pass rate on first submission to Gate 7
   - **Validation Method:** Manual checklist evaluation by design lead during Gate 7 review

7. **Metaphor Diversity Score (Target: <30% metaphor reuse)**
   - **Measurement:** Percentage of projects using identical or highly similar metaphors
   - **Target:** <30% reuse rate (indicates fresh, project-specific creativity)
   - **Validation Method:** Quarterly analysis of metaphor frameworks in version control

8. **Cultural Sensitivity Compliance (Target: Zero incidents)**
   - **Measurement:** Number of culturally inappropriate metaphors flagged post-approval
   - **Target:** Zero incidents requiring post-launch redesign
   - **Validation Method:** Cultural sensitivity review in Gate 7, client feedback tracking

9. **Research Artifact Completeness (Target: 100% documentation)**
   - **Measurement:** Percentage of orchestrator-assisted projects with complete research docs (industry analysis, competitor screenshots, metaphor frameworks, meta-prompts)
   - **Target:** 100% completeness
   - **Validation Method:** Automated file existence checks in `.claude/agents/design/creative/research/`

10. **Designer Time Allocation Shift (Target: +30% on creative decision-making)**
    - **Measurement:** Self-reported time breakdown: research vs. creative direction vs. implementation
    - **Baseline:** Establish baseline in Month 1 via designer time-tracking survey
    - **Target:** 30% increase in time spent on creative decisions (vs. research) after orchestrator adoption
    - **Validation Method:** Monthly designer surveys (5-minute time allocation questionnaire)

### 6. Core Features & Scope

#### Current Project Status

**As of November 16, 2025:**

This document extends the Multi-Site Website Development System (CLAUDE.md) with a creative design workflow enhancement. The parent system has completed Phase 0 (strategic planning); this Creative Design System represents a **parallel Phase 3.5 enhancement** focused on non-generic design quality.

**Current Phase: Phase 0 - Creative System Architecture Definition**

**Completed:**
- ✅ Strategic interview with Director (conditional invocation, MCP flexibility, quality gate integration)
- ✅ Success metrics framework (measurement approach for "non-AI design quality")
- ✅ Architectural design (Agentic RAG + Grounded Metaphor + 4-agent orchestration)
- ✅ This constitution document defining creative workflow

**Next Steps:**
- Phase 3.5A: Implement 4 core creative agents (creative-director-orchestrator, metaphor-researcher, creative-brief-synthesizer, design-implementation-specialist)
- Phase 3.5B: Implement 4 skills (agentic-rag-methodology, metaphor-grounding-framework, anti-ai-design-checklist, creative-meta-prompting)
- Phase 3.5C: Create Gate 7 (Creative Quality) integration with quality-gate-orchestrator
- Phase 3.5D: Documentation (CREATIVE_WORKFLOW_GUIDE.md, agent invocation examples)

**All checkmarks below represent planned features, not completed work.**

---

#### Planned Features (Phase 3.5, Estimated 2-3 Weeks)

**Creative Orchestration Agents:**
- ⏱️ `creative-director-orchestrator.md` - Master coordinator for creative workflow (invokes other 3 agents in sequence)
- ⏱️ `metaphor-researcher.md` - Industry visual analysis, competitor research, metaphor extraction (uses Agentic RAG)
- ⏱️ `creative-brief-synthesizer.md` - Transforms research into design-ready meta-prompts with grounded metaphors
- ⏱️ `design-implementation-specialist.md` - Translates meta-prompts into Astro components with Tailwind CSS
- ⏱️ `metaphor-grounding-verifier.md` - Validates 95%+ traceability between design and research (optional Gate 7 execution)

**Skills Library (Creative):**
- ⏱️ `skills/design/agentic-rag-methodology/SKILL.md` - Multi-stage research with intentional queries, synthesis patterns
- ⏱️ `skills/design/metaphor-grounding-framework/SKILL.md` - How to extract, document, and verify visual metaphors
- ⏱️ `skills/design/anti-ai-design-checklist/SKILL.md` - 5 criteria for non-generic design quality
- ⏱️ `skills/design/creative-meta-prompting/SKILL.md` - Best practices for writing design meta-prompts

**Quality Gate Integration:**
- ⏱️ Gate 7 (Creative Quality) - Conditional gate (runs only if orchestrator invoked)
  - Metaphor grounding verification (95%+ pass rate)
  - Anti-AI Design Checklist evaluation (5 criteria)
  - Cultural sensitivity review
  - Pass: Proceed to deployment; Fail: Re-run orchestrator with refined queries (max 2 retries)

**Documentation (Creative):**
- ⏱️ `docs/CREATIVE_WORKFLOW_GUIDE.md` - When/how to use orchestrator, decision tree, example invocations
- ⏱️ `docs/AGENT_INVOCATION_EXAMPLES.md` - Sample conversations with creative agents
- ⏱️ `docs/METAPHOR_LIBRARY.md` - Reusable metaphor frameworks from past projects (anonymized)

**Tooling & Automation:**
- ⏱️ Chrome DevTools MCP integration for automated screenshot gathering
- ⏱️ Fallback strategy CLI prompt ("MCP unavailable—choose fallback: manual/text-only/skip")
- ⏱️ Automated grounding report generation (links design elements to research artifacts)
- ⏱️ Version control integration for creative artifacts (`.claude/agents/design/creative/research/`, `/outputs/`)

#### In Scope (for Phase 3.5)

**Core Creative Workflow:**
- Conditional orchestrator invocation (not mandatory for all projects)
- Multi-stage Agentic RAG research workflow (industry analysis → competitor research → metaphor extraction → synthesis)
- Grounded metaphor framework (95%+ traceability requirement)
- Creative meta-prompt generation (design-ready briefs with specific visual constraints)
- Design implementation assistance (Astro components + Tailwind CSS generation)
- Automated grounding verification (links design elements back to research)
- Optional Gate 7 (Creative Quality) for orchestrator-assisted projects

**Research Artifact Management:**
- Version-controlled research documents (industry analysis reports, competitor screenshots, metaphor frameworks)
- Meta-prompt templates and examples
- Grounding verification reports (automated traceability documentation)
- Reusable metaphor library (past projects' frameworks for inspiration)

**Graceful Degradation:**
- MCP fallback strategy decision prompt (runtime choice, not predetermined)
- Manual screenshot workflow (if MCP unavailable)
- Text-only research mode (if visual analysis skipped)
- Human override points (review meta-prompts before implementation, reject/refine concepts)

#### Out of Scope (for Phase 3.5)

**Deferred to Future Versions:**
- ❌ Automated Figma file generation (meta-prompts → human designer implementation for MVP)
- ❌ Multi-language design localization (single-language designs only)
- ❌ A/B testing different design variations (single approved design per project)
- ❌ Animation/interaction design automation (static design focus)
- ❌ Accessibility audit integration with creative workflow (handled by existing `accessibility-auditor` agent in Gate 3)
- ❌ Brand sentiment analysis automation (manual brand guidelines review for MVP)

**Explicitly Not Being Built:**
- ❌ Direct AI-to-design generation (no "generate full website design" button)
- ❌ Template-based design systems (antithetical to non-generic design goal)
- ❌ Design-by-committee voting tools (preserves designer authority)
- ❌ Automated client design presentation decks (meta-prompts shared manually if desired)
- ❌ Proprietary design asset libraries (uses open-source resources + client-provided assets)

---
## Part B: Technical & Operational Framework
---

### 7. Strategic Constraint Tags for AI Architect

**Philosophy Tag:** `[Philosophy:Creativity-Through-Constraint]`

**Constraint Tags:**
- `[Constraint:Non-Generic-Design]` - 95%+ metaphor grounding rate mandatory
- `[Constraint:Research-Traceability]` - All design decisions linked to documented sources
- `[Constraint:Conditional-Workflow]` - Orchestrator invoked only when needed (not all projects)
- `[Constraint:Human-Creative-Control]` - Meta-prompts are guidance, not mandates

### 8. Tech Stack & Key Libraries

**Parent System Tech Stack:**
See [CLAUDE.md Section 8](../CLAUDE.md#8-tech-stack--key-libraries) for core Astro + Nx + Sveltia CMS stack.

**Creative Design System Extensions:**

#### AI Orchestration & Research Tools
- **Orchestration Platform:** Claude Code agents (custom `.md` definitions in `.claude/agents/design/creative/`)
- **Research Methodology:** Agentic RAG (multi-stage retrieval with intentional queries)
- **Visual Analysis Tool:** Chrome DevTools MCP (via `mcp__chrome_devtools` server)
- **Fallback Research:** Manual screenshot gathering + text-based competitive analysis

#### Creative Design Tools
- **Meta-Prompt Storage:** Markdown files in Git (`.claude/agents/design/creative/outputs/meta-prompts/`)
- **Metaphor Framework Documentation:** YAML schemas for visual metaphor definitions
- **Grounding Verification:** Custom TypeScript utility (`metaphor-tracer.ts`) linking design elements to research
- **Design Implementation:** Astro components + Tailwind CSS (same stack as parent system)

#### Quality Assurance Tools
- **Anti-AI Design Checklist:** Manual evaluation checklist (5 criteria) in Gate 7
- **Cultural Sensitivity Screening:** Manual review checklist integrated into Gate 7
- **Grounding Rate Calculator:** Automated analysis of design-to-research links (TypeScript utility)

#### Documentation & Knowledge Management
- **Research Artifact Storage:** `.claude/agents/design/creative/research/` (Git version control)
- **Metaphor Library:** `.claude/agents/design/creative/metaphor-library.yml` (reusable frameworks)
- **Creative Process Logs:** `.claude/agents/design/creative/logs/` (orchestrator execution records)

#### Key Libraries & Utilities

**Agentic RAG Implementation:**
- **Custom Skills:** `skills/design/agentic-rag-methodology/SKILL.md` (no external libraries—agent prompt patterns)

**Visual Metaphor Analysis:**
- **Chrome DevTools MCP:** Screenshot capture, DOM inspection (when available)
- **Image Analysis:** Claude vision capabilities (via agent multimodal input)
- **Fallback:** Manual screenshot analysis

**Design Implementation:**
- **Astro Components:** `.astro` files (same as parent system)
- **Tailwind CSS:** Utility classes (same as parent system)
- **TypeScript Utilities:** `metaphor-tracer.ts` (custom grounding verification)

### 9. Project File Structure

**Extension to Parent File Structure** (see [CLAUDE.md Section 9](../CLAUDE.md#9-project-file-structure) for base structure)

```
starter-template/                      # Root monorepo (existing)
│
├── .claude/                           # Claude Code agent definitions (existing)
│   ├── agents/
│   │   ├── design/                    # ⭐ NEW: Creative design agents
│   │   │   └── creative/
│   │   │       ├── creative-director-orchestrator.md    # Master coordinator
│   │   │       ├── metaphor-researcher.md               # Industry/competitor analysis
│   │   │       ├── creative-brief-synthesizer.md        # Meta-prompt generation
│   │   │       ├── design-implementation-specialist.md  # Astro component creation
│   │   │       ├── metaphor-grounding-verifier.md       # Traceability validation (Gate 7)
│   │   │       ├── research/                            # Research artifacts (Git version control)
│   │   │       │   ├── {project-name}/
│   │   │       │   │   ├── industry-analysis.md         # Industry visual patterns
│   │   │       │   │   ├── competitor-screenshots/      # Visual reference images
│   │   │       │   │   │   ├── competitor-a-homepage.png
│   │   │       │   │   │   └── competitor-b-services.png
│   │   │       │   │   ├── metaphor-framework.yml       # Extracted visual metaphors
│   │   │       │   │   └── brand-values.md              # Client brand analysis
│   │   │       ├── outputs/                             # Creative deliverables
│   │   │       │   ├── {project-name}/
│   │   │       │   │   ├── meta-prompts/                # Design-ready briefs
│   │   │       │   │   │   ├── primary-meta-prompt.md   # Recommended direction
│   │   │       │   │   │   ├── alternative-1.md         # Alternative concept
│   │   │       │   │   │   └── alternative-2.md         # Alternative concept
│   │   │       │   │   ├── grounding-reports/           # Verification documentation
│   │   │       │   │   │   └── grounding-report.md      # Element-to-research traceability
│   │   │       │   │   └── implementation-notes.md      # Technical implementation guidance
│   │   │       ├── logs/                                # Orchestrator execution logs
│   │   │       │   └── {project-name}-execution.log     # Workflow audit trail
│   │   │       └── metaphor-library.yml                 # Reusable metaphor frameworks
│   │   │
│   │   ├── orchestrators/             # Existing orchestrators (extended)
│   │   │   ├── quality-gate-orchestrator.md  # ⭐ MODIFIED: Add Gate 7 (Creative Quality)
│   │   │   └── ...
│   │
│   └── skills/                        # Reusable agent knowledge
│       ├── design/                    # ⭐ NEW: Creative design skills
│       │   ├── agentic-rag-methodology/
│       │   │   └── SKILL.md           # Multi-stage research patterns
│       │   ├── metaphor-grounding-framework/
│       │   │   └── SKILL.md           # Visual metaphor extraction/verification
│       │   ├── anti-ai-design-checklist/
│       │   │   └── SKILL.md           # 5 criteria for non-generic design
│       │   └── creative-meta-prompting/
│       │       └── SKILL.md           # Meta-prompt writing best practices
│
├── packages/                          # Shared workspace packages (existing)
│   └── design-utils/                  # ⭐ NEW: Design verification utilities
│       ├── src/
│       │   ├── metaphor-tracer.ts     # Grounding verification logic
│       │   ├── anti-ai-checklist.ts   # Automated checklist evaluation
│       │   └── cultural-sensitivity.ts # Cultural screening helpers
│       ├── package.json
│       └── README.md
│
├── docs/                              # Documentation (existing, extended)
│   ├── CREATIVE_WORKFLOW_GUIDE.md     # ⭐ NEW: When/how to use creative orchestrator
│   ├── AGENT_INVOCATION_EXAMPLES.md   # ⭐ NEW: Sample orchestrator conversations
│   ├── METAPHOR_LIBRARY.md            # ⭐ NEW: Reusable metaphor frameworks
│   ├── QUALITY_GATES.md               # ⭐ MODIFIED: Add Gate 7 documentation
│   └── ...
```

**Key File Naming Conventions:**
- Agent files: `kebab-case-agent-name.md` (e.g., `creative-director-orchestrator.md`)
- Research artifacts: `{project-name}/artifact-type.md` (e.g., `acme-corp/industry-analysis.md`)
- Meta-prompts: `{concept-type}-meta-prompt.md` (e.g., `primary-meta-prompt.md`)
- Grounding reports: `grounding-report.md` (one per project, regenerated on Gate 7 runs)

### 10. Key Commands

**Parent System Commands:**
See [CLAUDE.md Section 10](../CLAUDE.md#10-key-commands) for core Astro/Nx commands.

**Creative Design System Commands:**

**Invoking the Creative Orchestrator:**
```bash
# Start creative research workflow for new client site
# (Must be in project directory: sites/client-name/)
@creative-director-orchestrator "New financial services client, brand values: trust, innovation, accessibility. No existing design supplied."

# Explore alternative design directions (even if design exists)
@creative-director-orchestrator "Existing design feels generic. Explore bold alternative direction grounded in 'organic brutalism' metaphor."

# Refine meta-prompt after initial review
@creative-director-orchestrator "Initial meta-prompt too abstract. Provide more specific Tailwind CSS color palette and component layout guidance."
```

**Manual Research Workflow (if MCP unavailable):**
```bash
# Manually provide competitor screenshots
# 1. Create research directory for project
mkdir -p .claude/agents/design/creative/research/acme-corp/competitor-screenshots

# 2. Add screenshots to directory (manually saved browser screenshots)

# 3. Invoke metaphor researcher with manual mode
@metaphor-researcher --mode=manual --project=acme-corp "Analyze provided screenshots in research directory"
```

**Design Implementation:**
```bash
# After meta-prompt approval, generate Astro components
@design-implementation-specialist "Implement primary meta-prompt for acme-corp homepage. Output to sites/acme-corp/src/components/"

# Refine specific component
@design-implementation-specialist "Refine Hero component: increase whitespace, softer color transitions per 'organic brutalism' metaphor"
```

**Quality Gate Execution:**
```bash
# Run Gate 7 (Creative Quality) manually
@metaphor-grounding-verifier --project=acme-corp

# Full quality gate sequence (includes Gate 7 if orchestrator was invoked)
pnpm quality-gates --site=acme-corp
```

**Research Artifact Management:**
```bash
# View all creative projects
ls -la .claude/agents/design/creative/research/

# View specific project's research artifacts
cat .claude/agents/design/creative/research/acme-corp/industry-analysis.md

# View grounding report for verification
cat .claude/agents/design/creative/outputs/acme-corp/grounding-reports/grounding-report.md

# Add project to reusable metaphor library (after success)
# (Manual edit of .claude/agents/design/creative/metaphor-library.yml)
```

**Fallback Strategy Selection (if MCP fails):**
```bash
# System will prompt:
# "Chrome DevTools MCP unavailable. Choose fallback strategy:
#  1) Manual screenshot gathering (you provide images, agent analyzes)
#  2) Text-only research (skip visual analysis, use industry reports)
#  3) Skip creative orchestrator (implement design manually)
# Enter choice (1-3):"

# User selects option, workflow adjusts accordingly
```

### 11. Code Style & Conventions

**Parent System Conventions:**
See [CLAUDE.md Section 11](../CLAUDE.md#11-code-style--conventions) for core Astro/TypeScript/Tailwind conventions.

**Creative Design System Extensions:**

#### Agent Prompt Writing Conventions

**Creative Agent Definitions (`.md` files):**
- Use clear role definition in agent frontmatter: "You are a metaphor researcher specializing in visual design analysis"
- Document expected inputs/outputs explicitly:
  ```yaml
  # Expected Input:
  # - Project name
  # - Client brand values (optional)
  # - Industry sector

  # Expected Output:
  # - industry-analysis.md (visual patterns document)
  # - metaphor-framework.yml (structured metaphor definitions)
  # - competitor-screenshots/ (visual reference images)
  ```
- Use step-by-step workflow structure (1. Research, 2. Synthesize, 3. Document, 4. Invoke next agent)
- Include fallback instructions: "If MCP unavailable, prompt user for manual screenshots"
- Version control prompts with changelog comments at bottom of `.md` file

**Meta-Prompt Formatting:**
- Use structured markdown with clear sections:
  ```markdown
  # Meta-Prompt: [Project Name] - [Concept Name]

  ## Core Metaphor
  [1-2 sentence metaphor definition linked to research]

  ## Visual Principles (Research-Grounded)
  - **Spatial Rhythm:** [Specific guidance] → *Source: [research artifact link]*
  - **Color Palette:** [Tailwind CSS classes] → *Source: [research artifact link]*
  - **Typography Hierarchy:** [Specific guidance] → *Source: [research artifact link]*

  ## Component Specifications
  ### Hero Section
  - Layout: [Specific Tailwind utilities]
  - Content hierarchy: [Specific elements]
  - Grounding: [Links to research artifacts]

  ## Anti-AI Design Constraints
  - [Intentional asymmetry example]
  - [Unexpected hierarchy choice]
  - [Constraint-driven creativity example]
  ```

**Research Artifact Conventions:**

**Industry Analysis Documents (`industry-analysis.md`):**
- Use comparative table format for visual patterns:
  ```markdown
  | Visual Pattern       | Frequency (n=50) | Example Sites           | Design Implication     |
  |---------------------|------------------|-------------------------|------------------------|
  | Gradient backgrounds | 72% (36/50)      | Site A, Site B, Site C  | Avoid (too common)     |
  | Asymmetric layouts   | 18% (9/50)       | Site D, Site E          | Explore (distinctive)  |
  ```
- Always include sample size and methodology
- Link to specific competitor screenshots
- Document "avoid these patterns" (overused) vs. "explore these" (distinctive)

**Metaphor Framework YAML Schema:**
```yaml
project_name: acme-corp
metaphor_primary: "Organic Brutalism"
metaphor_definition: "Combines raw, structural honesty (brutalism) with soft, natural asymmetry (organic forms)"

visual_principles:
  spatial_rhythm:
    description: "Irregular grid with intentional whitespace asymmetry"
    research_source: "competitor-screenshots/site-d-homepage.png (asymmetric hero layout)"
    tailwind_implementation: "grid grid-cols-12 gap-8 md:gap-16 (vary gap sizes)"

  color_palette:
    primary: "#1a1a1a"  # Near-black (brutalist)
    accent: "#e8d5b7"   # Warm beige (organic)
    research_source: "industry-analysis.md (18% use muted earth tones)"
    tailwind_classes: "text-neutral-900 bg-amber-100"

  typography_hierarchy:
    description: "Large, confident headings (brutalist) with generous line-height (organic)"
    research_source: "competitor-screenshots/site-e-about.png (48px headings, 1.6 line-height)"
    tailwind_implementation: "text-5xl leading-relaxed font-bold"

anti_ai_constraints:
  - type: "intentional_asymmetry"
    implementation: "Hero CTA button offset 2/3 right (not centered)"
    rationale: "Avoids AI default of centered symmetry"

  - type: "unexpected_hierarchy"
    implementation: "Subheading larger than heading in Services section"
    rationale: "Challenges conventional information hierarchy"

traceability_map:
  hero_section:
    - element: "Asymmetric grid layout"
      source: "competitor-screenshots/site-d-homepage.png"
    - element: "Warm beige accent color"
      source: "industry-analysis.md (muted earth tones pattern)"
```

**Grounding Report Format:**
```markdown
# Grounding Verification Report: [Project Name]

**Generated:** 2025-11-16
**Verifier Agent:** metaphor-grounding-verifier
**Target:** 95%+ traceability

## Summary
- **Total Design Elements:** 24
- **Grounded Elements:** 23
- **Ungrounded Elements:** 1
- **Grounding Rate:** 95.8% ✅ PASS

## Element-by-Element Traceability

### ✅ Hero Section
| Element                     | Grounding Source                          | Verification Status |
|-----------------------------|-------------------------------------------|---------------------|
| Asymmetric grid layout      | `research/acme-corp/competitor-screenshots/site-d-homepage.png` | ✅ Verified |
| Warm beige accent (#e8d5b7) | `research/acme-corp/industry-analysis.md` (muted earth tones) | ✅ Verified |
| 48px heading size           | `research/acme-corp/metaphor-framework.yml` (typography_hierarchy) | ✅ Verified |

### ⚠️ Services Section
| Element                | Grounding Source | Verification Status |
|------------------------|------------------|---------------------|
| Icon set (custom SVGs) | *None found*     | ⚠️ **UNGROUNDED** |

## Recommendations
- **Ungrounded Element:** Icon set appears generic. Replace with metaphor-aligned custom illustrations or link to research source justifying choice.
- **Overall:** 95.8% grounding rate meets 95%+ threshold. Approved for production.
```

**Cultural Sensitivity Checklist Format:**
```markdown
# Cultural Sensitivity Review: [Project Name]

**Reviewer:** [Human designer name]
**Review Date:** 2025-11-16

## Metaphor Analysis
- **Primary Metaphor:** Organic Brutalism
- **Potential Cultural Concerns:** None identified (architectural movement with global context)

## Visual Element Review
| Element            | Potential Concern | Review Status | Notes                     |
|--------------------|-------------------|---------------|---------------------------|
| Color palette      | None              | ✅ Approved    | Neutral earth tones       |
| Typography         | None              | ✅ Approved    | Sans-serif, no script fonts |
| Imagery (proposed) | None              | ✅ Approved    | Abstract geometric shapes |

## Overall Assessment
✅ **APPROVED** - No culturally sensitive elements identified. Metaphor has universal architectural context.

**Sign-off:** [Designer name], [Date]
```

#### TypeScript Conventions for Design Utilities

**Metaphor Tracer Utility (`packages/design-utils/src/metaphor-tracer.ts`):**
```typescript
/**
 * Metaphor Grounding Tracer
 * Analyzes design implementation and links elements to research artifacts
 */

interface DesignElement {
  name: string;               // "Hero asymmetric grid"
  implementation: string;     // Tailwind classes or component reference
  componentFile: string;      // Path to .astro file
  lineNumber: number;         // Location in component
}

interface ResearchArtifact {
  type: 'screenshot' | 'document' | 'metaphor-framework';
  path: string;               // Relative path in .claude/agents/design/creative/research/
  relevantSection?: string;   // Specific section of document
}

interface GroundingLink {
  element: DesignElement;
  source: ResearchArtifact | null;  // null = ungrounded
  verified: boolean;
}

interface GroundingReport {
  projectName: string;
  totalElements: number;
  groundedElements: number;
  ungroundedElements: number;
  groundingRate: number;        // Percentage (0-100)
  links: GroundingLink[];
  generatedAt: Date;
}

/**
 * Generate grounding report for project
 * Scans component files for design elements, attempts to link to research artifacts
 */
export async function generateGroundingReport(
  projectName: string,
  componentDir: string,
  researchDir: string
): Promise<GroundingReport> {
  // Implementation: parse .astro components, extract design decisions,
  // match against research artifacts using keyword analysis + Claude vision API
  // Return structured report
}

/**
 * Check if grounding report passes 95%+ threshold
 */
export function isGroundingReportPassing(report: GroundingReport): boolean {
  return report.groundingRate >= 95.0;
}
```

**Anti-AI Design Checklist Evaluator:**
```typescript
/**
 * Anti-AI Design Checklist Evaluator
 * Automated checks for non-generic design principles
 */

interface ChecklistCriterion {
  name: string;
  description: string;
  automated: boolean;        // Can be checked programmatically?
  manualReviewRequired: boolean;
}

const ANTI_AI_CHECKLIST: ChecklistCriterion[] = [
  {
    name: 'spatial_rhythm',
    description: 'Varied spacing and asymmetric grid usage (not uniform padding)',
    automated: true,          // Can analyze Tailwind classes
    manualReviewRequired: false
  },
  {
    name: 'intentional_asymmetry',
    description: 'Elements intentionally off-center or unbalanced',
    automated: false,
    manualReviewRequired: true  // Requires design judgment
  },
  {
    name: 'unexpected_hierarchy',
    description: 'Information hierarchy challenges conventions',
    automated: false,
    manualReviewRequired: true
  },
  {
    name: 'color_nuance',
    description: 'Non-standard color combinations (not primary/secondary defaults)',
    automated: true,           // Can analyze Tailwind color classes
    manualReviewRequired: false
  },
  {
    name: 'constraint_creativity',
    description: 'Design shows evidence of working within intentional constraints',
    automated: false,
    manualReviewRequired: true
  }
];

export interface ChecklistResult {
  criterion: ChecklistCriterion;
  passed: boolean;
  evidence?: string;         // For automated checks
  reviewerNotes?: string;    // For manual checks
}

export interface ChecklistEvaluation {
  projectName: string;
  results: ChecklistResult[];
  overallPass: boolean;      // All criteria passed
  evaluatedAt: Date;
}

/**
 * Run automated checklist criteria (spatial_rhythm, color_nuance)
 */
export async function runAutomatedChecks(
  componentDir: string
): Promise<ChecklistResult[]> {
  // Parse Tailwind classes, check for varied spacing, non-default colors
  // Return results for automated criteria
}

/**
 * Generate manual review template for human designer
 */
export function generateManualReviewTemplate(
  projectName: string
): string {
  // Return markdown template with manual criteria for designer to complete
}
```

### 12. Architectural Principles & Constraints

**Parent System Principles:**
See [CLAUDE.md Section 12](../CLAUDE.md#12-architectural-principles--constraints) for core architectural patterns.

**Creative Design System Principles:**

#### 1. Agentic RAG Over Direct Generation

**Principle:** Use multi-stage research agents with intentional queries to build creative context, then synthesize findings into meta-prompts—never directly generate final designs.

**Rationale:** Direct LLM prompt-to-design defaults to statistical averages (generic outputs). Agentic RAG builds specific, project-unique knowledge bases that inform creative decisions.

**Implementation:**
```
Stage 1: Industry Analysis (@metaphor-researcher)
  Query 1: "What visual patterns appear in top 50 [industry] websites?"
  Query 2: "Which patterns are overused (>60% frequency)?"
  Query 3: "Which patterns are distinctive (<20% frequency)?"

Stage 2: Metaphor Extraction (@metaphor-researcher)
  Query 4: "Given distinctive patterns, what visual metaphors can be extracted?"
  Query 5: "How do these metaphors align with client brand values?"

Stage 3: Synthesis (@creative-brief-synthesizer)
  Query 6: "Given metaphors + brand values, generate 3 meta-prompt variations"
  Query 7: "For primary meta-prompt, specify Tailwind CSS implementation guidance"

Stage 4: Verification (@metaphor-grounding-verifier)
  Query 8: "Link each design element in implementation to research artifacts"
  Query 9: "Calculate grounding rate; flag ungrounded elements"
```

**Prohibition:** DO NOT allow agents to generate full website designs without intermediate synthesis steps.

---

#### 2. Grounded Metaphor Framework (95%+ Traceability)

**Principle:** Every design element must be traceable to a specific research artifact (competitor screenshot, industry pattern, brand value, metaphor framework). Ungrounded elements = generic AI defaults.

**Rationale:** Metaphor grounding enforces intentionality. If a designer can't explain *why* an element exists (linked to research), it's likely an AI statistical default.

**Implementation:**
- `metaphor-framework.yml` documents metaphor definition + sources
- `grounding-report.md` links implemented elements back to framework
- Gate 7 enforces 95%+ grounding rate before production approval
- Ungrounded elements flagged for revision or explicit justification

**Example Grounded Element:**
```yaml
element: "Hero section asymmetric grid (60/40 split)"
grounding_chain:
  - research_source: "competitor-screenshots/site-d-homepage.png"
    evidence: "Screenshot shows successful asymmetric layout, 18% frequency (distinctive)"
  - metaphor_source: "metaphor-framework.yml (spatial_rhythm: irregular grid)"
    evidence: "Aligns with 'organic' aspect of Organic Brutalism metaphor"
  - brand_source: "brand-values.md (innovation, approachability)"
    evidence: "Asymmetry = innovation; generous whitespace = approachability"
```

**Prohibition:** DO NOT approve designs with <95% grounding rate without explicit designer override + justification documentation.

---

#### 3. Anti-AI Design Checklist (Constraint-as-Creativity)

**Principle:** Non-generic design emerges from intentional constraints that counteract AI statistical defaults. The Anti-AI Design Checklist defines 5 constraints that prevent mode collapse.

**Rationale:** AI models optimize for "most likely" patterns = generic outputs. By explicitly constraining against common AI defaults (centered layouts, uniform spacing, conventional hierarchy), we force creative problem-solving.

**The 5 Constraints:**

1. **Spatial Rhythm (Not Uniform Padding)**
   - AI default: `p-4` everywhere, uniform grid gaps
   - Constraint: Vary spacing intentionally (e.g., `gap-4 md:gap-12 lg:gap-20`)
   - Creative opportunity: Rhythm creates visual interest, guides eye flow

2. **Intentional Asymmetry (Not Centered Symmetry)**
   - AI default: Centered hero sections, symmetric layouts
   - Constraint: Place key elements off-center (e.g., 2/3 right, 1/3 left split)
   - Creative opportunity: Asymmetry = dynamism, modernity

3. **Unexpected Hierarchy (Not Conventional Order)**
   - AI default: H1 > H2 > H3 font sizes, conventional information hierarchy
   - Constraint: Subvert expectations (e.g., larger subheading, de-emphasized headline)
   - Creative opportunity: Challenges viewer assumptions, creates memorable moments

4. **Color Nuance (Not Primary/Secondary Defaults)**
   - AI default: `bg-blue-500`, `text-gray-900` (Tailwind defaults)
   - Constraint: Use non-default color values (e.g., `bg-amber-100`, `text-neutral-800`)
   - Creative opportunity: Unique color palettes = brand distinctiveness

5. **Constraint-Driven Creativity (Evidence of Working Within Limits)**
   - AI default: "Anything is possible" = generic solutions
   - Constraint: Show evidence of creative problem-solving within metaphor constraints
   - Creative opportunity: Constraints force innovation (e.g., "How to express 'brutalism' with only earth tones?")

**Implementation:** Gate 7 requires manual designer evaluation against checklist. Automated checks for #1 and #4 (analyze Tailwind classes); manual review for #2, #3, #5.

---

#### 4. Conditional Orchestration (Not Mandatory)

**Principle:** Creative orchestrator is a tool for specific scenarios, not a mandatory workflow step. Designers decide when/whether to invoke based on project context.

**When to Use Orchestrator:**
1. **No design supplied** - Starting from scratch, need creative direction
2. **Generic design supplied** - Existing design lacks distinctiveness, explore alternatives
3. **Creative block** - Designer needs research-backed inspiration
4. **Client exploration request** - Client wants to see multiple creative directions

**When to Skip Orchestrator:**
1. **Finalized design supplied** - Client provides approved Figma files, implement directly
2. **Template-based project** - Simple landing page using standard patterns
3. **Time constraints** - Urgent deadline, no time for research phase
4. **Designer preference** - Designer prefers manual creative process

**Implementation:** Orchestrator invocation tracked in project metadata; Gate 7 only runs if orchestrator was used.

---

#### 5. Graceful MCP Degradation (Flexible Tooling)

**Principle:** Chrome DevTools MCP enhances research workflow but is not critical dependency. System asks user for fallback strategy if MCP unavailable.

**Fallback Decision Tree:**
```
MCP connection attempt → FAILED
  ↓
System prompts user:
  "Chrome DevTools MCP unavailable. Choose fallback:
   1) Manual screenshot gathering (I'll provide images)
   2) Text-only research (skip visual analysis)
   3) Skip orchestrator (manual design process)"
  ↓
User selects option → Workflow adjusts accordingly
```

**Rationale:** Avoid brittle dependencies on external tools. User context determines best fallback (e.g., manual screenshots if 30 min available; text-only if urgent; skip if very urgent).

**Implementation:** Agents include fallback instructions; orchestrator pauses for user input if MCP connection fails.

---

#### 6. Human Creative Control (Meta-Prompts = Guidance, Not Mandates)

**Principle:** Meta-prompts are creative briefs that inform implementation, not automated deployment targets. Designers review, refine, or reject before implementing.

**Human Decision Points:**
1. **After research synthesis** - Review metaphor framework, approve/refine/reject
2. **After meta-prompt generation** - Review 3 meta-prompt variations, choose or request refinement
3. **During implementation** - Adjust design decisions based on emerging context
4. **At Gate 7** - Final approval of grounding report and anti-AI checklist

**Prohibition:** DO NOT automate deployment of orchestrator outputs without human review at each decision point.

---

### Design Patterns (Creative Workflow)

#### 1. Four-Agent Orchestration Sequence

**Pattern:** Master orchestrator coordinates 4 specialist agents in sequence, passing context between stages.

**Sequence:**
```
@creative-director-orchestrator
  ↓
Step 1: Research Phase
  @metaphor-researcher
    Input: Project name, industry, brand values
    Output: industry-analysis.md, competitor-screenshots/, metaphor-framework.yml
  ↓
Step 2: Synthesis Phase
  @creative-brief-synthesizer
    Input: metaphor-framework.yml, brand-values.md
    Output: primary-meta-prompt.md, alternative-1.md, alternative-2.md
  ↓
Step 3: Implementation Phase (after human approval of meta-prompt)
  @design-implementation-specialist
    Input: Approved meta-prompt, component specifications
    Output: Astro components in sites/{project}/src/components/
  ↓
Step 4: Verification Phase (Gate 7)
  @metaphor-grounding-verifier
    Input: Implemented components, research artifacts
    Output: grounding-report.md (pass/fail decision)
```

**Agent Communication:** Each agent reads previous agent's outputs from Git-versioned files in `.claude/agents/design/creative/research/` and `/outputs/`.

---

#### 2. Research Artifact Version Control Pattern

**Pattern:** All creative research stored in Git with same version control discipline as code.

**Benefits:**
- **Reproducibility:** Can regenerate design from research artifacts months later
- **Transparency:** Clients/stakeholders can audit creative decisions
- **Continuous improvement:** Analyze successful metaphors across projects
- **Conflict resolution:** If design questioned, refer to grounding documentation

**Directory Structure:**
```
.claude/agents/design/creative/
├── research/{project-name}/      # Research inputs (immutable after approval)
├── outputs/{project-name}/        # Creative outputs (versioned, can be regenerated)
└── logs/{project-name}.log        # Execution audit trail
```

**Commit Strategy:**
- Commit research artifacts after research phase approval
- Commit meta-prompts after synthesis phase approval
- Commit implementation after design approval
- Commit grounding report after Gate 7 pass

---

#### 3. Metaphor Library Reuse Pattern

**Pattern:** Successful metaphor frameworks cataloged in `metaphor-library.yml` for inspiration (not copy-paste) in future projects.

**Library Entry Format:**
```yaml
- id: organic-brutalism-finserv-2025
  project_name: acme-corp (anonymized)
  industry: financial-services
  metaphor: "Organic Brutalism"
  success_metrics:
    grounding_rate: 96.2%
    client_satisfaction: 4.5/5.0
    revision_count: 1
  key_insights:
    - "Asymmetric grids work well for financial trust (structural honesty)"
    - "Earth tones soften brutalist rawness without sacrificing authority"
  reuse_guidance: "Consider for clients needing trust + innovation positioning"
  avoid_reuse: "Don't use for creative/artistic industries (too structured)"
```

**Usage:** Designers browse library during research phase for inspiration; agents do NOT directly copy metaphors (prevents repetition).

---

### Data Flow & State Management (Creative Workflow)

#### Creative Orchestrator Execution Flow

```
User Invocation (@creative-director-orchestrator "prompt")
  ↓
1. Context Gathering
   - Parse user prompt (project name, industry, brand values)
   - Check if MCP available (attempt connection)
   - If MCP unavailable → Prompt user for fallback strategy
  ↓
2. Research Phase (@metaphor-researcher)
   - If MCP available: Automated screenshot gathering (50+ competitor sites)
   - If manual fallback: Prompt user to provide screenshots in research/ directory
   - Analyze visual patterns (Agentic RAG queries)
   - Generate: industry-analysis.md, metaphor-framework.yml
   - Commit research artifacts to Git
  ↓
3. Human Review Checkpoint #1
   - Present metaphor-framework.yml to user
   - User approves/refines/rejects
   - If refined: Re-run research phase with additional constraints
   - If rejected: Offer fallback (manual design process)
  ↓
4. Synthesis Phase (@creative-brief-synthesizer)
   - Read metaphor-framework.yml + brand-values.md
   - Generate 3 meta-prompt variations (primary + 2 alternatives)
   - Apply Anti-AI Design Checklist constraints to meta-prompts
   - Commit meta-prompts to outputs/ directory
  ↓
5. Human Review Checkpoint #2
   - Present 3 meta-prompts to user
   - User selects one OR requests refinement
   - If refinement: Adjust synthesis with specific feedback
  ↓
6. Implementation Phase (@design-implementation-specialist)
   - Read approved meta-prompt
   - Generate Astro components with Tailwind CSS
   - Document implementation decisions in implementation-notes.md
   - Commit components to sites/{project}/src/components/
  ↓
7. Human Review Checkpoint #3
   - Designer reviews generated components
   - Manual refinements as needed (orchestrator outputs = starting point)
   - Commit finalized components
  ↓
8. Quality Gate 7 (@metaphor-grounding-verifier)
   - Analyze implemented components
   - Link design elements to research artifacts
   - Calculate grounding rate
   - Evaluate Anti-AI Design Checklist (automated + manual)
   - Generate grounding-report.md
  ↓
9. Gate 7 Pass/Fail Decision
   - If PASS (≥95% grounding + checklist pass): Approve for production
   - If FAIL: Return to Step 6 (implementation refinement) or Step 4 (re-synthesize)
   - Max 2 retries; after 2 failures → Manual review required
  ↓
10. Production Deployment
    - Proceed to existing quality gates (SEO, accessibility, performance)
    - Standard deployment workflow (staging → approval → production)
```

**State Persistence:** All intermediate outputs stored in Git-versioned files; orchestrator can resume from any checkpoint if interrupted.

---

### Error Handling & Resilience (Creative Workflow)

#### 1. MCP Connection Failures

**Scenario:** Chrome DevTools MCP unavailable (server down, network issues, permission errors)

**Detection:** Orchestrator attempts MCP connection at research phase start; timeout after 10 seconds

**User Prompt:**
```
Chrome DevTools MCP connection failed.

Choose fallback strategy:
1) Manual screenshot gathering
   → You provide competitor screenshots (I'll guide you on what to capture)
   → Estimated additional time: 30-60 minutes

2) Text-only research mode
   → Skip visual analysis, use industry reports and text descriptions
   → Faster but less visually grounded (grounding rate may be lower)

3) Skip creative orchestrator
   → Proceed with manual design process (no meta-prompts)
   → Standard design workflow

Enter choice (1-3):
```

**Recovery:**
- **Option 1:** Agent provides screenshot checklist, waits for user to upload images to `research/competitor-screenshots/`, then continues
- **Option 2:** Agent skips visual analysis, focuses on text-based competitive research, adjusts grounding expectations (90%+ instead of 95%+)
- **Option 3:** Orchestrator exits gracefully; user proceeds with manual design

---

#### 2. Low Grounding Rate (<95%) at Gate 7

**Scenario:** `@metaphor-grounding-verifier` reports grounding rate below 95% threshold

**Automated Response:**
1. Generate detailed grounding-report.md with ungrounded elements highlighted
2. Create GitHub issue: "Gate 7 Failed: Low Grounding Rate (XX.X%)"
3. Notify designer via issue assignment

**Designer Decision Tree:**
```
Grounding rate < 95%
  ↓
Review ungrounded elements in report
  ↓
Option A: Refine implementation
  → Link ungrounded elements to existing research artifacts
  → Re-run Gate 7 verification

Option B: Expand research
  → Add new research artifacts justifying ungrounded elements
  → Update metaphor-framework.yml
  → Re-run Gate 7 verification

Option C: Accept with justification
  → Document explicit design decision (overriding grounding requirement)
  → Require technical lead approval
  → Proceed to production with documented exception
```

**Retry Logic:** Max 2 automatic re-runs of Gate 7 after refinement; 3rd failure escalates to manual review.

---

#### 3. Anti-AI Checklist Failures

**Scenario:** Design fails one or more Anti-AI Design Checklist criteria

**Manual Review Required:** Checklist includes subjective criteria (intentional asymmetry, unexpected hierarchy) requiring human judgment

**Designer Response:**
1. Review failed criteria in grounding report
2. Either:
   - **Refine design:** Adjust implementation to satisfy criteria
   - **Justify exception:** Document why criterion doesn't apply to this project (e.g., "Client brand guidelines require centered symmetry")
3. Re-submit for Gate 7 review

**Escalation:** If designer consistently fails checklist (>50% projects), recommend training on anti-AI design principles (refer to `skills/design/anti-ai-design-checklist/SKILL.md`).

---

#### 4. Cultural Sensitivity Flags

**Scenario:** Metaphor or visual element flagged as potentially culturally sensitive

**Automated Detection:** Keywords in metaphor-framework.yml trigger warnings (e.g., religious symbols, national flags, culturally specific patterns)

**Manual Review Required:** All flags require human designer + cultural sensitivity reviewer approval

**Review Process:**
1. Agent generates warning: "Metaphor uses [element] which may have cultural significance"
2. Designer reviews context: Is this appropriate for client/audience?
3. Options:
   - **Approve with documentation:** "Reviewed; appropriate for [reason]"
   - **Revise metaphor:** Adjust to remove culturally sensitive element
   - **Escalate:** Consult with diversity/inclusion specialist (for high-stakes projects)

**Zero-tolerance:** Any culturally inappropriate metaphor that reaches production = immediate post-launch redesign + process review.

---

### Performance Budgets (Creative Workflow)

**Research Phase:**
- **MCP screenshot gathering:** <5 minutes for 50 competitor sites
- **Visual analysis (Agentic RAG):** <10 minutes per 50 screenshots
- **Total research phase:** <30 minutes end-to-end

**Synthesis Phase:**
- **Meta-prompt generation:** <5 minutes for 3 variations
- **Human review time:** 15-30 minutes (designer evaluates meta-prompts)

**Implementation Phase:**
- **Component generation:** <10 minutes for typical homepage (5-7 components)
- **Designer refinement:** 1-3 hours (manual adjustments, content integration)

**Verification Phase (Gate 7):**
- **Grounding analysis:** <5 minutes (automated element-to-research linking)
- **Checklist evaluation:** 10-15 minutes (manual designer review)

**Total Creative Workflow Time Budget:**
- **Automated portions:** <60 minutes (research + synthesis + verification)
- **Human review/refinement:** 2-4 hours (decision-making + implementation)
- **Overall:** <5 hours from orchestrator invocation to Gate 7 approval

**Compare to Manual Workflow:**
- **Traditional research:** 8-16 hours (competitor analysis, mood boards)
- **Concept development:** 4-8 hours (sketches, iterations)
- **Total traditional:** 12-24 hours

**Target Efficiency Gain:** 60-75% time reduction on research + concept phases.

---

### 13. Prohibitions (Forbidden Actions)

**Parent System Prohibitions:**
See [CLAUDE.md Section 13](../CLAUDE.md#13-prohibitions-forbidden-actions) for core system prohibitions.

**Creative Design System Prohibitions:**

#### DO NOT:

1. **DO NOT generate final website designs directly without meta-prompt synthesis**
   - **Rationale:** Direct LLM generation = generic AI aesthetics. Agentic RAG + metaphor grounding required to prevent mode collapse.
   - **Correct workflow:** Research → Metaphor → Meta-prompt → Human review → Implementation
   - **Prohibited workflow:** "Generate homepage design for [client]" → Direct component output

2. **DO NOT approve designs with <95% grounding rate without documented justification**
   - **Rationale:** Low grounding rate = unintentional AI defaults creeping in. Defeats non-generic design goal.
   - **Exception:** Technical lead approval + explicit justification (e.g., "Client brand guidelines require this ungrounded element")

3. **DO NOT skip human review checkpoints in orchestrator workflow**
   - **Rationale:** Automation accelerates research, but creative decisions must remain human-supervised.
   - **Required checkpoints:**
     1. After research phase (approve metaphor framework)
     2. After synthesis phase (select meta-prompt)
     3. After implementation phase (review generated components)
     4. At Gate 7 (approve grounding report)

4. **DO NOT reuse metaphor frameworks directly across projects without adaptation**
   - **Rationale:** Copy-paste metaphors = repetitive designs. Library is for *inspiration*, not *templates*.
   - **Correct usage:** "Project X used 'organic brutalism'—can we explore a related but distinct metaphor for Project Y?"
   - **Prohibited usage:** "Copy Project X's metaphor-framework.yml to Project Y"

5. **DO NOT use summarizer-first research approach**
   - **Rationale:** Asking LLM to "summarize competitor designs" = loses nuance, defaults to generic descriptions.
   - **Correct approach (Agentic RAG):** Intentional queries → Specific visual pattern extraction → Synthesis
   - **Prohibited approach:** "Summarize these 50 screenshots" → Use summary as creative brief

6. **DO NOT deploy designs with unresolved cultural sensitivity flags**
   - **Rationale:** Cultural insensitivity = reputational damage, potential client lawsuits.
   - **Required process:** All flags reviewed by human designer + cultural sensitivity checklist approval

7. **DO NOT mandate orchestrator usage for all projects**
   - **Rationale:** Orchestrator is a tool for specific scenarios, not a universal requirement. Designer judgment determines when it adds value.
   - **Correct decision-making:** "Does this project benefit from research-backed creative direction, or do we have sufficient existing design guidance?"

8. **DO NOT use MCP as critical dependency without fallback**
   - **Rationale:** External tool availability can't block creative workflow.
   - **Required:** System must prompt user for fallback strategy if MCP unavailable (manual screenshots, text-only, skip orchestrator)

9. **DO NOT skip Anti-AI Design Checklist evaluation**
   - **Rationale:** Checklist enforces constraints that prevent generic design. Skipping = risk of AI aesthetic.
   - **Required:** All 5 criteria evaluated at Gate 7 (automated checks + manual review)

10. **DO NOT store research artifacts outside Git version control**
    - **Rationale:** Research must be reproducible, auditable, and versioned alongside code.
    - **Prohibited:** Storing screenshots/analysis in Notion, Google Drive, or non-versioned locations
    - **Required:** All artifacts in `.claude/agents/design/creative/research/` (Git-tracked)

11. **DO NOT generate meta-prompts without linking to specific research sources**
    - **Rationale:** Unlinked meta-prompts = speculative creativity (defaults to AI statistical patterns).
    - **Correct format:** Every meta-prompt section includes `→ Source: [research artifact]` citations
    - **Prohibited format:** Generic meta-prompt without research traceability

12. **DO NOT auto-approve Gate 7 without human review**
    - **Rationale:** Even with 95%+ grounding rate, human judgment needed for Anti-AI Checklist subjective criteria.
    - **Required:** Designer manually signs off on grounding report + checklist before production approval

13. **DO NOT present alternative meta-prompts to clients without designer curation**
    - **Rationale:** Unfiltered AI outputs may include inappropriate/irrelevant concepts.
    - **Correct process:** Designer reviews 3 meta-prompt variations → Selects 1-2 client-appropriate options → Presents with context
    - **Prohibited process:** Auto-send all 3 variations to client without review

14. **DO NOT use generic placeholder content in meta-prompts**
    - **Rationale:** "Lorem ipsum" style placeholders reduce creative specificity.
    - **Required:** Meta-prompts use client-specific content examples (actual brand values, realistic copy)

15. **DO NOT create new creative agents without using existing skill patterns**
    - **Rationale:** Consistency in agent structure ensures maintainability and discoverability.
    - **Required:** New agents must reference `skills/design/agentic-rag-methodology/SKILL.md` and follow established orchestration patterns

---

**End of Creative Design System Constitution**

*This document extends the Multi-Site Website Development System (CLAUDE.md) with creative design workflow capabilities. All implementation decisions should reference both this constitution and the parent CLAUDE.md. Update this document when creative workflow methodology or quality standards evolve.*

**Version:** 1.0
**Created:** November 16, 2025
**Maintained By:** Creative Systems Lead
**Review Frequency:** Quarterly or when significant creative methodology changes required

**Changelog:**
- **v1.0 (2025-11-16):** Initial constitution based on strategic interview with Director; established conditional orchestration, Agentic RAG methodology, grounded metaphor framework, Anti-AI Design Checklist, and Gate 7 integration
