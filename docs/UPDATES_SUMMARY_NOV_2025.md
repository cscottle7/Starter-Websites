# Documentation Updates Summary - November 2025

> **Date:** November 9, 2025
> **Updates:** Figma MCP correction + astro-headless-ui prompting guide

---

## 🔄 Key Updates

### 1. Figma MCP is Production-Ready ✅

**Previous Info:** Marked as "experimental"
**Correction:** ✅ **Officially released and production-ready**

**What Changed:**
- Figma released official MCP server: `@figma/figma-mcp-server`
- Complete setup guide created: `docs/FIGMA_MCP_SETUP.md`
- No longer experimental - ready for production use

**Official Documentation:** https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server

---

### 2. New Guide: Figma MCP Setup (`FIGMA_MCP_SETUP.md`)

**Location:** `docs/FIGMA_MCP_SETUP.md`

**What It Covers:**
- ✅ Complete installation & configuration (step-by-step)
- ✅ How to generate Figma personal access token
- ✅ How to configure MCP in Claude Code settings
- ✅ Available Figma MCP tools (get_file, get_file_nodes, get_comments, etc.)
- ✅ Workflow examples (extract design tokens, build components from Figma, sync design updates)
- ✅ Prompt templates for common tasks
- ✅ Troubleshooting guide
- ✅ Comparison: Figma MCP vs. Design Tokens Plugin

**Key Workflows:**
1. **Extract Design Tokens:** Read colors/typography/spacing directly from Figma → `tailwind.config.cjs`
2. **Build Components:** Generate Astro components from Figma component specs
3. **Build Pages:** Generate entire pages from Figma layouts
4. **Sync Updates:** Detect design changes and update code automatically

**Example Prompt:**
```
Extract design tokens from this Figma file:
https://www.figma.com/design/ABC123/design-system

Format as JSON compatible with tailwind.config.cjs
```

---

### 3. New Guide: Astro Headless UI Prompting (`ASTRO_HEADLESS_UI_PROMPTING_GUIDE.md`)

**Location:** `docs/ASTRO_HEADLESS_UI_PROMPTING_GUIDE.md`

**What It Covers:**
- ✅ Complete prompt templates for all components (Menu, Disclosure, Dialog, Tabs, Switch, Listbox, Combobox)
- ✅ Component-specific patterns (when to use each, key styling classes)
- ✅ Advanced prompting examples (mobile nav, multi-level FAQ, confirmation dialog)
- ✅ Common mistakes to avoid (forgetting `client:` directive, not using UI state classes)
- ✅ Prompting best practices
- ✅ Quick copy-paste prompts

**Quick Reference:**

| Component | Use For | Prompt Template |
|-----------|---------|-----------------|
| Menu | Dropdowns, navigation menus | See line 18 |
| Disclosure | Accordions, FAQ sections | See line 43 |
| Dialog | Modals, confirmation dialogs | See line 68 |
| Tabs | Service showcases, categorized content | See line 93 |
| Combobox | Searchable selects, autocomplete | See line 118 |
| Switch | Toggle switches, settings | See pattern section |
| Listbox | Custom select dropdowns | See pattern section |

**Example Prompt (Dropdown Menu):**
```
Build a dropdown navigation menu using astro-headless-ui Menu component.

Context:
- File: src/components/UserMenu.astro
- Purpose: User account dropdown (Profile, Settings, Logout links)

Requirements:
1. Import Menu from 'astro-headless-ui'
2. Button text: "Account"
3. Dropdown items: Profile (/profile), Settings (/settings), Logout (/logout)
4. Styling:
   - Button: bg-primary text-white px-4 py-2 rounded-lg
   - Dropdown: bg-white shadow-lg border rounded-lg
5. Add client:load directive
6. Keyboard navigation (Arrow keys, Enter, Escape)

Deliverable:
UserMenu.astro component ready to import
```

---

## 📚 Complete Documentation Index

### New Files Created Today:
1. ✅ `docs/FIGMA_MCP_SETUP.md` - Figma MCP installation & usage
2. ✅ `docs/ASTRO_HEADLESS_UI_PROMPTING_GUIDE.md` - Complete prompting guide for astro-headless-ui
3. ✅ `docs/UPDATES_SUMMARY_NOV_2025.md` - This file

### Previously Created (Still Current):
1. ✅ `docs/README_DOCUMENTATION_INDEX.md` - Central documentation hub
2. ✅ `docs/HUMAN_VS_AI_WORKFLOW.md` - Human vs. AI division of labor
3. ✅ `docs/COMPLETE_WORKFLOW_GUIDE.md` - 8-phase end-to-end process
4. ✅ `docs/BRAND_GUIDELINES_FROM_LOGO.md` - Generate brand guidelines from logo
5. ✅ `docs/ASTRO_HEADLESS_UI_GUIDE.md` - Component library usage (general guide)
6. ✅ `.claude/prompts/CONTENT_WIDTH_STANDARD.md` - 1440px content width standard

### Core Rules & Skills (Still Current):
1. ✅ `.claude/prompts/website-global-rules.md`
2. ✅ `.claude/prompts/website-agent-instructions.md`
3. ✅ `.claude/prompts/BRAND_GUIDELINES_TEMPLATE.md`
4. ✅ `.claude/skills/website/design-to-code-workflow/SKILL.md`
5. ✅ `.claude/skills/website/responsive-testing/SKILL.md`
6. ✅ `.claude/skills/website/tailwind-translation/SKILL.md`
7. ✅ `.claude/skills/website/component-development/SKILL.md`
8. ✅ `.claude/skills/website/seo-implementation/SKILL.md`
9. ✅ `.claude/skills/website/accessibility-validation/SKILL.md`

---

## 🎯 Recommended Workflow Updates

### Design Handoff: Three Options (Ranked)

**Option 1: Figma MCP ⭐ (Best for Active Projects)**
- ✅ Live connection to Figma (always synced)
- ✅ No manual export steps
- ✅ Direct API access to exact Figma values
- ⚠️ Requires setup (personal access token, MCP config)
- **Use when:** Design is actively changing, need to stay in sync
- **See:** `docs/FIGMA_MCP_SETUP.md`

**Option 2: Figma Design Tokens Plugin (Best for Stable Designs)**
- ✅ One-time export → works offline
- ✅ Simple setup (install plugin)
- ❌ Manual re-export when design changes
- **Use when:** Design is finalized, prefer offline workflow
- **See:** `docs/HUMAN_VS_AI_WORKFLOW.md` → Option A

**Option 3: PDF/Screenshot (Fallback)**
- ✅ Simplest (no setup)
- ❌ Least accurate (eyeballing measurements)
- **Use when:** Quick prototypes, client provides static mockups

---

### astro-headless-ui: Always Prompt Explicitly

**❌ Claude Code Does NOT Auto-Use astro-headless-ui**

**You Must Include in Prompt:**
```
Build [component] using astro-headless-ui [Component] component.

Requirements:
- Import [Component] from 'astro-headless-ui'
- Add client:load directive
- [Specific requirements...]
```

**Complete Prompting Guide:** `docs/ASTRO_HEADLESS_UI_PROMPTING_GUIDE.md`

---

## 🚀 Next Steps

### Immediate Actions:

1. **Set Up Figma MCP** (15 minutes)
   - Generate Figma personal access token
   - Configure in Claude Code settings
   - Test with simple "extract colors" prompt
   - **Guide:** `docs/FIGMA_MCP_SETUP.md`

2. **Practice astro-headless-ui Prompting** (30 minutes)
   - Choose one component (start with Dropdown Menu)
   - Use prompt template from `ASTRO_HEADLESS_UI_PROMPTING_GUIDE.md`
   - Generate component with Claude Code
   - Test in browser (verify keyboard navigation works)

3. **Install astro-headless-ui** (5 minutes)
   ```bash
   cd packages/ui-components
   pnpm add astro-headless-ui
   ```

4. **Review Updated Workflow** (30 minutes)
   - Read `FIGMA_MCP_SETUP.md` → Workflow sections
   - Understand when to use Figma MCP vs. Design Tokens
   - Bookmark prompt templates for future use

---

### This Week:

1. ☐ Test complete workflow with Figma MCP (extract design tokens from real Figma file)
2. ☐ Build 3 components using astro-headless-ui prompts (Menu, Disclosure, Dialog)
3. ☐ Compare Figma MCP vs. Design Tokens Plugin workflows (time each)
4. ☐ Document lessons learned for team

---

## 📖 Where to Find Help

### Figma MCP Questions:
- **Setup Issues:** `docs/FIGMA_MCP_SETUP.md` → Troubleshooting section
- **Prompt Examples:** `docs/FIGMA_MCP_SETUP.md` → Example Prompts Library
- **Official Docs:** https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server

### astro-headless-ui Questions:
- **How to Prompt:** `docs/ASTRO_HEADLESS_UI_PROMPTING_GUIDE.md` (complete templates)
- **Component Examples:** `docs/ASTRO_HEADLESS_UI_GUIDE.md` (code examples)
- **Common Mistakes:** `docs/ASTRO_HEADLESS_UI_PROMPTING_GUIDE.md` → Common Mistakes section

### General Workflow Questions:
- **Human vs. AI Tasks:** `docs/HUMAN_VS_AI_WORKFLOW.md`
- **Phase-by-Phase Process:** `docs/COMPLETE_WORKFLOW_GUIDE.md`
- **All Documentation:** `docs/README_DOCUMENTATION_INDEX.md`

---

## 📝 Changelog

### November 9, 2025

**Added:**
- `docs/FIGMA_MCP_SETUP.md` - Complete Figma MCP installation & usage guide
- `docs/ASTRO_HEADLESS_UI_PROMPTING_GUIDE.md` - Comprehensive prompting guide with templates
- `docs/UPDATES_SUMMARY_NOV_2025.md` - This summary

**Updated:**
- `docs/HUMAN_VS_AI_WORKFLOW.md` - Corrected Figma MCP status (experimental → production-ready)
- Recommendation now: Figma MCP for active projects, Design Tokens for stable designs

**Clarified:**
- astro-headless-ui requires explicit prompting (not automatic)
- Figma MCP is officially supported and production-ready
- Three design handoff options ranked by use case

---

**Last Updated:** November 9, 2025
**Next Review:** After first Figma MCP + astro-headless-ui project complete
