# Figma MCP Server Setup & Usage Guide

> **Status:** ✅ Production-Ready (Official Figma Release)
> **Last Updated:** November 9, 2025
> **Official Docs:** https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server

---

## What is Figma MCP?

**Figma Model Context Protocol (MCP) Server** allows Claude Code to directly access Figma files through the Figma API, enabling:

- ✅ Read design file structure programmatically
- ✅ Extract component specs, colors, spacing directly from Figma
- ✅ Generate code from live Figma designs (no manual export needed)
- ✅ Stay in sync with design updates

**Key Advantage over Design Tokens Export:**
- **Design Tokens:** Manual export → import workflow (one-time snapshot)
- **Figma MCP:** Live connection to Figma files (always up-to-date)

---

## Prerequisites

### 1. Figma Account & Files
- ✅ Figma account (free or paid)
- ✅ Design files accessible via URL
- ✅ Figma personal access token

### 2. Claude Code Desktop
- ✅ Claude Code installed
- ✅ Version with MCP support (check Settings → MCP Servers)

---

## Installation & Setup

### Step 1: Generate Figma Personal Access Token

1. **Go to Figma Settings:**
   - Open Figma → Click profile icon (top-left)
   - Select "Settings"

2. **Navigate to Personal Access Tokens:**
   - Scroll to "Personal access tokens" section
   - Click "Create new token"

3. **Configure Token:**
   - **Name:** "Claude Code MCP" (or similar)
   - **Scopes:** Select "File content" (read access)
   - Click "Generate token"

4. **Copy Token:**
   - ⚠️ **IMPORTANT:** Copy token immediately (won't be shown again)
   - Store securely (you'll need it for Claude Code config)

**Security Note:** Never commit this token to Git! Keep it in secure environment variables.

---

### Step 2: Configure Figma MCP in Claude Code

1. **Open Claude Code Settings:**
   - Claude Code → Settings (Cmd+, or Ctrl+,)
   - Navigate to "MCP Servers"

2. **Add Figma MCP Server:**

**For macOS/Linux:**
```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": [
        "-y",
        "@figma/figma-mcp-server"
      ],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "figd_YOUR_TOKEN_HERE"
      }
    }
  }
}
```

**For Windows:**
```json
{
  "mcpServers": {
    "figma": {
      "command": "npx.cmd",
      "args": [
        "-y",
        "@figma/figma-mcp-server"
      ],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "figd_YOUR_TOKEN_HERE"
      }
    }
  }
}
```

3. **Replace Token:**
   - Replace `figd_YOUR_TOKEN_HERE` with your actual Figma token
   - Save settings

4. **Restart Claude Code:**
   - Restart application for MCP server to initialize

---

### Step 3: Verify Installation

1. **Check MCP Server Status:**
   - Open Claude Code → Settings → MCP Servers
   - "figma" should show status: ✅ Connected

2. **Test with Simple Prompt:**
```
List the components in this Figma file:
https://www.figma.com/design/FILE_KEY/file-name
```

If working, Claude Code will respond with component list from the Figma file.

---

## Available Figma MCP Tools

### 1. `figma_get_file_nodes`
**Purpose:** Get detailed information about specific nodes in a Figma file

**Usage:**
```
Get the Button component details from this Figma file:
https://www.figma.com/design/ABC123/design-system

Component node ID: 123:456
```

**Returns:**
- Node properties (width, height, fills, strokes)
- Text styles (font family, size, weight)
- Layout properties (auto-layout, padding, spacing)

---

### 2. `figma_get_file`
**Purpose:** Get high-level file structure and metadata

**Usage:**
```
Show me the structure of this Figma file:
https://www.figma.com/design/ABC123/website-design

Include all pages and top-level frames.
```

**Returns:**
- Pages in the file
- Top-level frames (artboards)
- Component sets
- Styles defined in the file

---

### 3. `figma_get_comments`
**Purpose:** Retrieve design comments and feedback

**Usage:**
```
Get all comments from the Homepage frame in:
https://www.figma.com/design/ABC123/client-website
```

**Returns:**
- Comment text
- Author
- Timestamp
- Resolved status

---

### 4. `figma_get_component_sets`
**Purpose:** Get all component sets (variants) in a file

**Usage:**
```
List all button variants from the design system:
https://www.figma.com/design/ABC123/design-system
```

**Returns:**
- Component set names
- Variant properties
- Default variant

---

## How to Use Figma MCP for Development

### Workflow 1: Extract Design Tokens

**Prompt:**
```
Extract the design system tokens from this Figma file:
https://www.figma.com/design/ABC123/client-design-system

Extract:
1. All color variables (primary, secondary, neutrals)
2. Typography styles (headings, body, sizes)
3. Spacing tokens (padding, margins, gaps)

Format as JSON compatible with tailwind.config.cjs
```

**Expected Output:**
```json
{
  "colors": {
    "primary": "#1a202c",
    "secondary": "#2d3748",
    "accent": "#f59e0b",
    "gray": {
      "50": "#f7fafc",
      "900": "#1a202c"
    }
  },
  "fontFamily": {
    "heading": ["Inter", "sans-serif"],
    "body": ["Open Sans", "sans-serif"]
  },
  "fontSize": {
    "xs": "0.75rem",
    "sm": "0.875rem",
    "base": "1rem",
    "lg": "1.125rem"
  },
  "spacing": {
    "1": "0.25rem",
    "2": "0.5rem",
    "4": "1rem"
  }
}
```

---

### Workflow 2: Generate Component from Figma Spec

**Prompt:**
```
Build an Astro Button component based on this Figma component:
https://www.figma.com/design/ABC123/design-system

Component: "Button/Primary"
Frame ID: 123:456

Requirements:
1. Extract exact colors, padding, border-radius from Figma
2. Support all variants (primary, secondary, ghost)
3. Support all sizes (sm, md, lg)
4. Match Figma spacing exactly (use Tailwind classes)
5. File: packages/ui-components/src/components/Button.astro

Constraints:
- Use Tailwind CSS (no custom CSS)
- TypeScript Props interface
- Accessibility: focus states, keyboard navigation
- Follow .claude/skills/website/component-development/SKILL.md

Deliverable:
Production-ready Button.astro component matching Figma spec exactly
```

**Claude Code Will:**
1. Access Figma file via MCP
2. Read Button component node (123:456)
3. Extract fill colors, stroke, border-radius, padding, typography
4. Translate to Tailwind classes
5. Generate Astro component with TypeScript props

---

### Workflow 3: Build Page from Figma Layout

**Prompt:**
```
Build the Homepage from this Figma design:
https://www.figma.com/design/ABC123/client-website

Page: "Homepage" (Frame ID: 1:2)

Extract layout structure:
1. Hero section (heading, subheadline, 2 CTAs)
2. Services section (3-column grid of cards)
3. Testimonials section (carousel)
4. Final CTA section

Requirements:
- Match spacing from Figma exactly
- Use shared components from packages/ui-components/ where possible
- File: sites/acme-corp/src/pages/index.astro
- Responsive: mobile-first (375px → 768px → 1440px)
- Content width: 1440px maximum

Deliverable:
Functional index.astro matching Figma layout
```

---

### Workflow 4: Sync Design Updates

**Scenario:** Designer updates button colors in Figma

**Prompt:**
```
The Button component in Figma has been updated with new colors.

Figma file: https://www.figma.com/design/ABC123/design-system
Component: "Button/Primary" (Frame ID: 123:456)

Tasks:
1. Read updated component from Figma
2. Compare to current Button.astro implementation
3. Update only the changed properties (colors)
4. Preserve all existing functionality

File: packages/ui-components/src/components/Button.astro

Show me what changed before making updates.
```

**Claude Code Will:**
1. Fetch latest Figma component via MCP
2. Compare with current code
3. Show diff of what changed
4. Update only changed properties

---

## Advantages of Figma MCP vs. Manual Workflows

### Figma MCP (Live Connection)
- ✅ **Always up-to-date:** Reads latest design directly from Figma
- ✅ **No manual export:** Skip Figma Tokens plugin export step
- ✅ **Accurate translation:** Direct access to exact values (no eyeballing)
- ✅ **Design change detection:** Can compare current code to latest Figma state
- ✅ **Comment integration:** Can read designer feedback directly from Figma

### Figma Design Tokens (Manual Export)
- ✅ **One-time setup:** No ongoing sync needed once exported
- ✅ **Works offline:** Design tokens in codebase, no Figma API calls
- ❌ **Manual updates:** Must re-export when design changes
- ❌ **Drift risk:** Code and design can get out of sync

### PDF/Screenshot (Most Manual)
- ✅ **Simple:** No plugin setup
- ❌ **Inaccurate:** Eyeballing measurements
- ❌ **High maintenance:** Re-export every design change

---

## Recommended Workflow: Hybrid Approach

**Best of Both Worlds:**

1. **Initial Setup (Phase 3 - Design):**
   - Use **Figma MCP** to extract design tokens
   - Generate `tailwind.config.cjs` from Figma via MCP
   - Build initial components from Figma via MCP

2. **Development (Phase 4 - Build):**
   - Reference Figma via MCP for exact specs
   - Build components with Claude Code + Figma MCP
   - Verify against Figma visually (side-by-side)

3. **Ongoing Maintenance:**
   - When designer updates Figma → Use MCP to sync changes
   - Prompt: "Update [component] from latest Figma version"

---

## Example Prompts Library

### Extract Colors
```
Extract all color variables from this Figma file:
https://www.figma.com/design/ABC123/design-system

Format as Tailwind config colors object.
```

---

### Extract Typography
```
Extract typography styles (font families, sizes, weights) from:
https://www.figma.com/design/ABC123/design-system

Format as Tailwind config fontFamily and fontSize objects.
```

---

### Build Component from Figma
```
Build [ComponentName] Astro component from Figma:
https://www.figma.com/design/ABC123/design-system

Component node ID: [ID from Figma URL]

Requirements:
- Extract exact colors, spacing, typography from Figma
- Use Tailwind classes
- TypeScript Props interface
- Accessibility (WCAG 2.1 AA)
- File: packages/ui-components/src/components/[ComponentName].astro

Follow .claude/skills/website/component-development/SKILL.md
```

---

### Compare Code to Figma
```
Compare the current Button.astro implementation to the latest Figma version:

Figma: https://www.figma.com/design/ABC123/design-system
Component: "Button/Primary"
Code: packages/ui-components/src/components/Button.astro

Show me:
1. What's different (colors, spacing, typography)
2. What needs to be updated
3. Suggested code changes
```

---

### Build Page from Figma
```
Build [PageName] page from Figma layout:
https://www.figma.com/design/ABC123/website

Frame: "[PageName]" (Frame ID: [ID])

Extract:
- Section structure (header, main sections, footer)
- Spacing between sections
- Typography hierarchy
- Component usage (buttons, cards, forms)

Requirements:
- File: sites/[client]/src/pages/[page].astro
- Use shared components from packages/ui-components/
- Responsive: 375px → 768px → 1440px
- Content width: 1440px maximum

Follow .claude/skills/website/design-to-code-workflow/SKILL.md
```

---

## Troubleshooting

### Issue: MCP Server Not Connecting

**Symptoms:** "Figma MCP server unavailable" error

**Solutions:**
1. **Verify token:** Check `FIGMA_PERSONAL_ACCESS_TOKEN` is correct
2. **Check internet:** Figma API requires internet connection
3. **Restart Claude Code:** MCP servers initialize on startup
4. **Check token permissions:** Ensure "File content" scope is enabled
5. **Test token:** Try accessing Figma file in browser while logged in

---

### Issue: "File Not Found" Error

**Symptoms:** Claude Code can't access Figma file URL

**Solutions:**
1. **Check file sharing:** File must be accessible with your Figma account
2. **Verify URL:** Use full Figma file URL: `https://www.figma.com/design/FILE_KEY/file-name`
3. **Check permissions:** Ensure your Figma account has view access to the file
4. **Use file key:** Extract file key from URL (alphanumeric string after `/design/`)

---

### Issue: Node ID Not Found

**Symptoms:** Can't extract specific component/frame

**Solutions:**
1. **Get node ID from Figma:**
   - Right-click component in Figma → Copy link
   - URL format: `...?node-id=123%3A456`
   - Node ID is `123:456` (replace `%3A` with `:`)
2. **Use frame name:** Instead of node ID, specify frame by name
3. **List all nodes first:** Prompt Claude to list all nodes in file, then reference by name

---

## Security Best Practices

### 1. Token Storage
- ❌ **NEVER commit token to Git**
- ✅ Store in Claude Code settings (encrypted by OS)
- ✅ Use environment variables for CI/CD
- ✅ Rotate tokens regularly (every 90 days)

### 2. Token Permissions
- ✅ Use minimal scopes ("File content" read-only)
- ❌ Don't use tokens with write access unless necessary
- ✅ Create separate tokens for different environments (dev, production)

### 3. File Access
- ✅ Only share Figma files with team members who need access
- ✅ Use Figma's "View only" sharing for external clients
- ✅ Revoke access when team members leave

---

## Comparison: Figma MCP vs. Design Tokens Plugin

| Feature | Figma MCP | Figma Tokens Plugin |
|---------|-----------|-------------------|
| **Setup Complexity** | Medium (token + config) | Low (install plugin) |
| **Live Sync** | ✅ Yes (reads latest) | ❌ Manual export |
| **Offline Work** | ❌ Requires internet | ✅ Works offline |
| **Accuracy** | ✅ Exact Figma values | ✅ Exact values |
| **Update Workflow** | ✅ Automatic (re-prompt) | ❌ Manual re-export |
| **Learning Curve** | Medium | Low |
| **Best For** | Active design changes | Stable design handoff |

**Recommendation:**
- **Use Figma MCP** if: Design is actively changing, need to stay in sync
- **Use Figma Tokens Plugin** if: Design is finalized, prefer offline workflow

---

## Related Documentation

- **Official Figma MCP Guide:** https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server
- **MCP Documentation:** https://modelcontextprotocol.io/
- **Figma API Docs:** https://www.figma.com/developers/api

---

**Last Updated:** November 9, 2025
**Next Steps:**
1. Set up Figma personal access token
2. Configure Figma MCP in Claude Code settings
3. Test with simple "extract colors" prompt
4. Use for real client project (Phase 4 - Build)
