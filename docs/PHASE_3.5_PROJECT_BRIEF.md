# Phase 3.5: Creative Design System Implementation

## Project Overview

**Goal:** Build AI-powered creative design agents and skills that produce uncommon, non-AI-looking website designs using Agentic RAG methodology and Grounded Metaphor Generation.

**Parent Documents:**
- Constitution: [docs/CREATIVE_DESIGN_SYSTEM.md](CREATIVE_DESIGN_SYSTEM.md)
- Strategic Plan: [docs/CREATIVE_DESIGN_AGENT_IMPLEMENTATION_PLAN.md](CREATIVE_DESIGN_AGENT_IMPLEMENTATION_PLAN.md)
- Original SOP: [docs/sop_ai_design.md](sop_ai_design.md)

---

## Deliverables

### Phase 3.5A: Skills (Foundation Layer)
Create 4 reusable skills that agents will use:

1. **`.claude/skills/design/agentic-rag-methodology/SKILL.md`**
   - Multi-query decomposition process
   - Parallel retrieval strategies
   - Synthesis patterns for creative work

2. **`.claude/skills/design/grounded-metaphor-generation/SKILL.md`**
   - 3-step methodology: Extract → Blend → Score
   - Grounding verification requirements (95%+ traceability)
   - Metaphor library examples

3. **`.claude/skills/design/anti-ai-design-checklist/SKILL.md`**
   - 5 constraints that prevent generic designs
   - Spatial rhythm, asymmetry, hierarchy, color, constraint-driven creativity
   - Pass/fail criteria with examples

4. **`.claude/skills/design/creative-meta-prompting/SKILL.md`**
   - Meta-prompt structure and format
   - How to translate metaphors into design direction
   - Example meta-prompts (like "Systematic Orchestra")

### Phase 3.5B: Agents (Execution Layer)
Create 5 specialized agents:

1. **`.claude/agents/design/creative/creative-director-orchestrator.md`**
   - Master coordinator agent (user invokes this)
   - Delegates to 4 sub-agents
   - Manages workflow: research → synthesis → implementation → verification

2. **`.claude/agents/design/creative/metaphor-researcher.md`**
   - Conducts Agentic RAG research
   - Analyzes industry examples, brand docs, competitor sites
   - MCP integration for automated screenshot gathering
   - Outputs: Research report with categorized examples

3. **`.claude/agents/design/creative/creative-brief-synthesizer.md`**
   - Takes research report
   - Extracts keywords, generates grounded metaphors
   - Creates creative meta-prompts
   - Outputs: Creative brief (like "Systematic Orchestra" example)

4. **`.claude/agents/design/creative/design-implementation-specialist.md`**
   - Takes meta-prompt
   - Translates to Astro components + Tailwind CSS
   - Applies Anti-AI Design Checklist
   - Outputs: Working design implementation

5. **`.claude/agents/design/creative/metaphor-grounding-verifier.md`**
   - Audits final design for traceability
   - Verifies 95%+ grounding rate
   - Runs Gate 7 (Creative Quality) checks
   - Outputs: Grounding report (pass/fail)

### Phase 3.5C: Integration
1. **Modify `.claude/agents/orchestrators/quality-gate-orchestrator.md`**
   - Add optional Gate 7 (Creative Quality)
   - Runs only if creative-director-orchestrator was invoked
   - Uses metaphor-grounding-verifier agent

### Phase 3.5D: Documentation
1. **`docs/CREATIVE_WORKFLOW_GUIDE.md`**
   - When to use creative orchestrator (decision tree)
   - Example invocations
   - How to interpret outputs
   - Troubleshooting

---

## Success Criteria

**Skills:**
- ✅ Each skill follows Claude Code skills format
- ✅ Includes examples and anti-patterns
- ✅ Can be discovered autonomously by agents

**Agents:**
- ✅ Follow established agent template structure
- ✅ Include clear system prompts and tool access
- ✅ Reference skills for methodology
- ✅ Work together via orchestrator pattern

**Integration:**
- ✅ Gate 7 integrates seamlessly with existing quality gates
- ✅ Conditional execution (only for creative orchestrator projects)

**Documentation:**
- ✅ Developer can use system after reading 5-minute guide
- ✅ Includes real example walkthrough

---

## Reference Materials

**For Skills Creation:**
- [docs/sop_ai_design.md](sop_ai_design.md) - Original Agentic RAG SOP (DWS-SOP-GEM-002)
- [design-idea.md](../design-idea.md) - Example creative output ("Systematic Orchestra")
- Claude Code skills docs: https://code.claude.com/docs/en/skills

**For Agent Creation:**
- [design-agent-sample.md](../design-agent-sample.md) - Iris v2.1 reference agent
- [docs/CREATIVE_DESIGN_SYSTEM.md](CREATIVE_DESIGN_SYSTEM.md) - Full constitution
- Existing agents in `.claude/agents/design/` for template structure

**For Integration:**
- `.claude/agents/orchestrators/quality-gate-orchestrator.md` (modify this)
- [docs/COMPLETE_WORKFLOW_GUIDE.md](COMPLETE_WORKFLOW_GUIDE.md) - Existing workflow patterns

---

## Implementation Sequence

**Week 1: Foundation (Skills)**
1. Day 1-2: Create `agentic-rag-methodology` skill
2. Day 2-3: Create `grounded-metaphor-generation` skill
3. Day 3-4: Create `anti-ai-design-checklist` skill
4. Day 4-5: Create `creative-meta-prompting` skill

**Week 2: Orchestration (Agents)**
1. Day 1-2: Create `creative-director-orchestrator` + `metaphor-researcher`
2. Day 3: Create `creative-brief-synthesizer`
3. Day 4: Create `design-implementation-specialist`
4. Day 5: Create `metaphor-grounding-verifier`

**Week 3: Integration & Testing**
1. Day 1: Modify `quality-gate-orchestrator` for Gate 7
2. Day 2-3: Create `CREATIVE_WORKFLOW_GUIDE.md`
3. Day 4-5: Test full workflow on sample project
4. Day 5: Documentation polish and examples

---

## Key Architectural Decisions

**1. Skills Before Agents**
Build skills first so agents can reference them for methodology. Skills = reusable knowledge, Agents = executors.

**2. Orchestrator Pattern**
User invokes ONE agent (`@creative-director-orchestrator`), which coordinates sub-agents. User doesn't need to know about 4 sub-agents.

**3. Grounding Enforcement**
95%+ traceability requirement is non-negotiable. This is what prevents "AI look."

**4. Conditional Execution**
Creative workflow is optional, not mandatory. Use when:
- No design supplied (starting from scratch)
- Design supplied but exploring alternatives

**5. MCP Flexibility**
System asks user for fallback if Chrome DevTools MCP unavailable:
- Manual screenshots
- Text-only research
- Skip orchestrator

---

## File Structure (Target State)

```
.claude/
├── agents/
│   ├── design/
│   │   ├── creative/                          # NEW
│   │   │   ├── creative-director-orchestrator.md
│   │   │   ├── metaphor-researcher.md
│   │   │   ├── creative-brief-synthesizer.md
│   │   │   ├── design-implementation-specialist.md
│   │   │   └── metaphor-grounding-verifier.md
│   │   ├── brand-design-strategist.md         # EXISTING
│   │   ├── innovation-designer.md             # EXISTING
│   │   └── ... (other existing agents)
│   └── orchestrators/
│       └── quality-gate-orchestrator.md       # MODIFY (add Gate 7)
│
└── skills/
    └── design/                                 # NEW DIRECTORY
        ├── agentic-rag-methodology/
        │   └── SKILL.md
        ├── grounded-metaphor-generation/
        │   └── SKILL.md
        ├── anti-ai-design-checklist/
        │   └── SKILL.md
        └── creative-meta-prompting/
            └── SKILL.md

docs/
├── CREATIVE_DESIGN_SYSTEM.md                  # EXISTING (constitution)
├── CREATIVE_DESIGN_AGENT_IMPLEMENTATION_PLAN.md  # EXISTING (strategic plan)
├── sop_ai_design.md                           # EXISTING (original SOP)
├── PHASE_3.5_PROJECT_BRIEF.md                 # THIS FILE
└── CREATIVE_WORKFLOW_GUIDE.md                 # TO CREATE (user guide)
```

---

## Notes for Workflow Orchestrator

**Context Requirements:**
- Read all reference materials before starting
- Understand existing design agent structure
- Follow Claude Code skills format specification
- Maintain consistency with parent CLAUDE.md constitution

**Quality Standards:**
- All agents must include clear system prompts
- All skills must include examples and anti-patterns
- All files must be version-controlled
- All outputs must be tested before marking complete

**Success Validation:**
After implementation, test by:
1. Invoking `@creative-director-orchestrator` with sample brief
2. Verify all 4 sub-agents execute
3. Verify grounding report shows 95%+ traceability
4. Verify meta-prompt matches quality of "Systematic Orchestra" example

---

**Ready for Workflow Orchestrator Invocation**
