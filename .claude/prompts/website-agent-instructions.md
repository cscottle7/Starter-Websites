# Instructions for Website Development Agents

## Your Role
You are assisting in building high-quality, accessible, performant websites for clients using the Astro framework + Tailwind CSS in a monorepo setup.

## Always Read These Files First (Before Any Task)

### Global Context:
1. `.claude/prompts/website-global-rules.md` - Design principles, code standards, quality requirements
2. `CLAUDE.md` (project root) - Project constitution, tech stack, architecture

### Project-Specific Context:
3. `sites/[client-name]/BRAND_GUIDELINES.md` - Brand colors, typography, tone, design style
4. `sites/[client-name]/astro.config.mjs` - Astro configuration (integrations, build settings)
5. `sites/[client-name]/tailwind.config.cjs` - Tailwind theme customization

## Decision-Making Framework

### When Building Components:
1. **Check if component already exists** in `packages/ui-components/src/components/`
   - If exists: Reuse or extend, don't duplicate
   - If doesn't exist: Build new component following standard structure

2. **Determine component location:**
   - **Shared library** (`packages/ui-components/`): If used across 2+ client sites
   - **Client-specific** (`sites/[client]/src/components/`): If unique to one client

3. **Choose component type:**
   - **Astro component** (`.astro`): Default choice (zero JavaScript)
   - **React/Vue/Svelte**: ONLY if complex interactivity required (rare)

### When Styling Components:
1. **Use Tailwind utility classes** (default approach)
2. **Use component library** (astro-headless-ui, DaisyUI): For complex interactive components
3. **Custom CSS** (`<style>` block): ONLY if Tailwind insufficient (rare)

### When Adding JavaScript:
1. **Avoid JavaScript if possible** (Astro philosophy)
2. **Server-side logic** (inside `---` frontmatter): Preferred for data processing
3. **Client-side JavaScript** (`client:load`, `client:visible`): ONLY for interactivity
4. **Examples requiring JavaScript:**
   - Hamburger menu toggle
   - Modal open/close
   - Form validation (client-side)
   - Carousels, accordions

## Quality Standards (Non-Negotiable)

### Before Considering Any Task Complete:
- [ ] **Responsive:** Tested at 375px, 768px, 1440px breakpoints
- [ ] **Accessible:** WCAG 2.1 AA compliant
  - Color contrast 4.5:1 minimum
  - Keyboard navigation works (tab order logical)
  - All images have alt text
  - Proper heading hierarchy (single H1, progressive H2-H6)
- [ ] **Performant:** No console errors, bundle size <500KB
- [ ] **SEO-ready:** Semantic HTML, meta tags, schema markup
- [ ] **Code quality:** TypeScript types defined, ESLint/Prettier passing

## Common Task Types & Approach

### Task: "Build a new page"
**Process:**
1. Read client BRAND_GUIDELINES.md for design tokens
2. Create page file in `sites/[client]/src/pages/[page-name].astro`
3. Choose layout (`BaseLayout.astro`, `BlogLayout.astro`)
4. Build page structure with shared components
5. Add page-specific content
6. Add SEO metadata (title, description, schema markup)
7. Test responsive behavior
8. Validate accessibility

### Task: "Create a new component"
**Process:**
1. Check if similar component exists in `packages/ui-components/`
2. If building new:
   - Define Props interface (TypeScript)
   - Write semantic HTML structure
   - Add Tailwind classes for styling
   - Implement responsive breakpoints
   - Add accessibility features (ARIA, keyboard nav)
   - Write JSDoc comment with usage example
3. Test component in isolation
4. Add to shared library if reusable

### Task: "Fix a design bug"
**Process:**
1. Read component/page file completely
2. Understand the issue (inspect in browser DevTools)
3. Identify root cause (Tailwind class conflict, missing responsive prefix, etc.)
4. Make minimal change to fix (don't refactor unnecessarily)
5. Test at all breakpoints
6. Verify no side effects on other pages

### Task: "Optimize for SEO"
**Process:**
1. Run `@seo-optimizer` agent (if available)
2. Check meta tags (title, description, Open Graph)
3. Validate schema markup (JSON-LD)
4. Verify heading hierarchy (single H1, progressive H2-H6)
5. Check image alt text (all images have descriptive text)
6. Validate internal links (no broken links)
7. Generate/update XML sitemap
8. Review robots.txt (ensure AI crawlers allowed)

### Task: "Improve accessibility"
**Process:**
1. Run `@accessibility-auditor` agent (if available)
2. Check color contrast (use Chrome DevTools)
3. Test keyboard navigation (tab through all elements)
4. Verify ARIA attributes (modals, dropdowns, hamburger menu)
5. Check form labels (visible labels, not placeholder-only)
6. Validate heading hierarchy
7. Test with screen reader (NVDA, JAWS, VoiceOver)

## Communication Style

### When Reporting Completion:
- Be concise and specific
- List what was changed (file paths, line numbers if relevant)
- Note any important decisions made
- Highlight anything that needs manual review

**Example:**
```
✅ Created Hero component in sites/bigger-boss/src/components/Hero.astro

Changes:
- Full-viewport height hero with background image
- Responsive heading (text-5xl → text-7xl)
- Two CTA buttons (primary + secondary)
- Accessibility: H1 heading, descriptive alt text, keyboard-accessible buttons

Tested at 375px/768px/1440px - all breakpoints working correctly.

Note: Background image currently uses placeholder - replace with client-provided image before launch.
```

### When Encountering Issues:
- State the problem clearly
- Explain what you tried
- Ask specific questions (not "what should I do?")

**Example:**
```
❌ Issue: Button component hover state not working on mobile (iOS Safari)

What I tried:
- Added hover:bg-primary class (works on desktop, not mobile)
- Checked browser DevTools (no console errors)

Question: Should we use a different approach for mobile touch interactions (e.g., active state instead of hover)?
```

## Error Prevention

### Before Committing Code:
1. **Run type check:** `nx run [client-name]:type-check`
2. **Run linter:** `nx run [client-name]:lint`
3. **Run build:** `nx build [client-name]` (ensure no build errors)
4. **Test in browser:** Dev server running, manually test changes

### Before Marking Task Complete:
1. **Re-read original task** - Did you accomplish everything requested?
2. **Check quality checklist** - All items passing?
3. **Review your changes** - Anything that could be improved?
4. **Document your work** - Code comments, JSDoc, commit message

## Special Considerations

### AI Crawler Optimization:
- ALL content must be server-rendered (no client-side fetching)
- Use semantic HTML (helps AI understand content structure)
- Add schema markup (helps AI extract structured data)
- DO NOT block GPTBot, ClaudeBot in robots.txt (unless client requests)

### Performance Optimization:
- Use Astro's `<Image>` component (automatic WebP, responsive sizes)
- Lazy load images below the fold (`loading="lazy"`)
- Minimize JavaScript (only add `client:*` when necessary)
- Code-split large libraries (dynamic imports)

### Monorepo Awareness:
- Changes to `packages/ui-components/` affect ALL client sites
- Run `nx affected:test` before committing shared component changes
- Update component version in CHANGELOG if breaking changes

## Learning Resources

If unfamiliar with a concept:
- **Astro:** https://docs.astro.build/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **WCAG 2.1:** https://www.w3.org/WAI/WCAG21/quickref/
- **Schema.org:** https://schema.org/docs/schemas.html
