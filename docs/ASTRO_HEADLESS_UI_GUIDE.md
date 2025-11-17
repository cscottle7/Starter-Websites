# Astro Headless UI Integration Guide

> **Purpose:** Complete guide to using astro-headless-ui for accessible, zero-JavaScript interactive components
> **Last Updated:** November 9, 2025

---

## What is astro-headless-ui?

**astro-headless-ui** is a collection of **unstyled, accessible UI component primitives** for Astro, inspired by Headless UI (React) and Radix UI.

### Key Concept: "Headless" Components

**"Headless" means:**
- ✅ **Functionality without styling** - You get the behavior (keyboard nav, ARIA, state management)
- ✅ **You add your own styles** - Use Tailwind classes to match your brand
- ✅ **Zero JavaScript by default** - Works with Astro's Islands architecture
- ✅ **Accessibility built-in** - WCAG 2.1 AA compliant out of the box

---

## Installation

### 1. Install Package

```bash
cd packages/ui-components
pnpm add astro-headless-ui
```

### 2. Verify Installation

```bash
# Check package.json
cat package.json | grep astro-headless-ui
```

Should show:
```json
"dependencies": {
  "astro-headless-ui": "^1.0.0"
}
```

---

## Available Components

### Interactive Components (Require Client-Side JavaScript)

1. **Menu (Dropdown)** - Accessible dropdown menus
2. **Listbox (Select)** - Custom select dropdowns
3. **Combobox (Autocomplete)** - Searchable select with autocomplete
4. **Disclosure (Accordion)** - Collapsible sections
5. **Dialog (Modal)** - Accessible modal dialogs
6. **Popover** - Floating content overlays
7. **Tabs** - Tab navigation
8. **Switch (Toggle)** - On/off toggles
9. **RadioGroup** - Radio button groups
10. **Transition** - Smooth transitions

---

## How to Use: Component Examples

### Example 1: Dropdown Menu (Navigation)

**What You Get:**
- ✅ Keyboard navigation (Arrow keys, Enter, Escape)
- ✅ Focus management (automatically focuses first item)
- ✅ ARIA attributes (aria-expanded, role="menu")
- ✅ Click-outside-to-close behavior

**Basic Usage:**

```astro
---
// src/components/UserMenu.astro
import { Menu } from 'astro-headless-ui';
---

<Menu>
  <Menu.Button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary">
    Account
  </Menu.Button>

  <Menu.Items class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
    <Menu.Item class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
      <a href="/profile">Your Profile</a>
    </Menu.Item>
    <Menu.Item class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
      <a href="/settings">Settings</a>
    </Menu.Item>
    <Menu.Item class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
      <a href="/logout">Sign out</a>
    </Menu.Item>
  </Menu.Items>
</Menu>
```

**With Client Directive:**
```astro
<Menu client:load>
  <!-- Component content -->
</Menu>
```

---

### Example 2: Disclosure (Accordion/FAQ)

**What You Get:**
- ✅ Keyboard accessible (Tab, Enter, Space)
- ✅ ARIA attributes (aria-expanded, aria-controls)
- ✅ Smooth state management

**Usage:**

```astro
---
// src/components/FAQ.astro
import { Disclosure } from 'astro-headless-ui';
---

<div class="space-y-4">
  <Disclosure client:load>
    <Disclosure.Button class="flex justify-between w-full px-4 py-3 text-left bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary">
      <span class="font-semibold">What is your refund policy?</span>
      <svg class="w-5 h-5 transform ui-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </Disclosure.Button>

    <Disclosure.Panel class="px-4 py-3 text-gray-600">
      We offer a 30-day money-back guarantee. If you're not satisfied with our product, contact us for a full refund.
    </Disclosure.Panel>
  </Disclosure>

  <Disclosure client:load>
    <Disclosure.Button class="flex justify-between w-full px-4 py-3 text-left bg-gray-100 rounded-lg hover:bg-gray-200">
      <span class="font-semibold">How long does shipping take?</span>
      <svg class="w-5 h-5 transform ui-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </Disclosure.Button>

    <Disclosure.Panel class="px-4 py-3 text-gray-600">
      Standard shipping takes 5-7 business days. Express shipping available for 2-3 day delivery.
    </Disclosure.Panel>
  </Disclosure>
</div>
```

---

### Example 3: Dialog (Modal)

**What You Get:**
- ✅ Focus trap (keyboard stays within modal)
- ✅ Escape key to close
- ✅ Click overlay to close
- ✅ ARIA attributes (role="dialog", aria-modal)

**Usage:**

```astro
---
// src/components/ContactModal.astro
import { Dialog } from 'astro-headless-ui';
---

<Dialog client:load>
  <!-- Trigger Button -->
  <Dialog.Trigger class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark">
    Contact Us
  </Dialog.Trigger>

  <!-- Modal Overlay -->
  <Dialog.Overlay class="fixed inset-0 bg-black bg-opacity-50 z-40" />

  <!-- Modal Panel -->
  <Dialog.Panel class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 max-w-md w-full z-50">
    <Dialog.Title class="text-2xl font-bold mb-4">Get in Touch</Dialog.Title>

    <Dialog.Description class="text-gray-600 mb-6">
      Fill out the form below and we'll get back to you within 24 hours.
    </Dialog.Description>

    <!-- Form Content -->
    <form class="space-y-4">
      <div>
        <label for="name" class="block font-semibold mb-2">Name</label>
        <input type="text" id="name" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary" />
      </div>
      <div>
        <label for="email" class="block font-semibold mb-2">Email</label>
        <input type="email" id="email" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary" />
      </div>
      <div>
        <label for="message" class="block font-semibold mb-2">Message</label>
        <textarea id="message" rows="4" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"></textarea>
      </div>

      <!-- Close Button -->
      <div class="flex justify-end gap-4">
        <Dialog.Close class="px-4 py-2 text-gray-600 hover:text-gray-800">
          Cancel
        </Dialog.Close>
        <button type="submit" class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
          Send Message
        </button>
      </div>
    </form>
  </Dialog.Panel>
</Dialog>
```

---

### Example 4: Tabs

**What You Get:**
- ✅ Keyboard navigation (Arrow keys, Tab)
- ✅ ARIA attributes (role="tablist", aria-selected)
- ✅ Automatic panel switching

**Usage:**

```astro
---
// src/components/ServiceTabs.astro
import { Tabs } from 'astro-headless-ui';
---

<Tabs client:load defaultValue="web-design">
  <Tabs.List class="flex gap-4 border-b border-gray-200 mb-6">
    <Tabs.Tab
      value="web-design"
      class="px-4 py-2 font-semibold text-gray-600 hover:text-primary ui-selected:text-primary ui-selected:border-b-2 ui-selected:border-primary"
    >
      Web Design
    </Tabs.Tab>
    <Tabs.Tab
      value="development"
      class="px-4 py-2 font-semibold text-gray-600 hover:text-primary ui-selected:text-primary ui-selected:border-b-2 ui-selected:border-primary"
    >
      Development
    </Tabs.Tab>
    <Tabs.Tab
      value="seo"
      class="px-4 py-2 font-semibold text-gray-600 hover:text-primary ui-selected:text-primary ui-selected:border-b-2 ui-selected:border-primary"
    >
      SEO
    </Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel value="web-design" class="space-y-4">
    <h3 class="text-2xl font-bold">Web Design Services</h3>
    <p class="text-gray-600">Custom website designs tailored to your brand identity and business goals.</p>
  </Tabs.Panel>

  <Tabs.Panel value="development" class="space-y-4">
    <h3 class="text-2xl font-bold">Development Services</h3>
    <p class="text-gray-600">High-performance websites built with modern frameworks like Astro and React.</p>
  </Tabs.Panel>

  <Tabs.Panel value="seo" class="space-y-4">
    <h3 class="text-2xl font-bold">SEO Services</h3>
    <p class="text-gray-600">Comprehensive SEO strategies to improve your search engine rankings.</p>
  </Tabs.Panel>
</Tabs>
```

---

## Does Claude Code Auto-Use astro-headless-ui?

### ❌ No - You Must Prompt Explicitly

**Claude Code does NOT automatically use astro-headless-ui unless you tell it to.**

### ✅ How to Get Claude Code to Use It

**Method 1: Explicit Instruction in Prompt**

```
Build a dropdown navigation menu using astro-headless-ui.

Context:
- File: src/components/UserMenu.astro
- Component: Menu from astro-headless-ui
- Purpose: User account dropdown (Profile, Settings, Logout links)

Requirements:
1. Use astro-headless-ui Menu component
2. Keyboard accessible (Arrow keys, Enter, Escape)
3. Styled with Tailwind classes (bg-white, shadow-lg, rounded-lg)
4. Add client:load directive for interactivity

Design:
- Button: "Account" with user icon
- Dropdown: 3 menu items (Profile, Settings, Logout)
- Position: Absolute positioning, right-aligned
- Hover: Gray background on menu items

Deliverable:
UserMenu.astro component using astro-headless-ui Menu primitive
```

---

**Method 2: Add to Global Rules**

Update `.claude/prompts/website-global-rules.md`:

```markdown
## Component Library Usage

### When Building Interactive Components

**Use astro-headless-ui for:**
- Dropdown menus → `Menu` component
- Accordions/Collapsible sections → `Disclosure` component
- Modals → `Dialog` component
- Tabs → `Tabs` component
- Custom select dropdowns → `Listbox` component

**Install:**
```bash
pnpm add astro-headless-ui
```

**Import:**
```astro
import { Menu, Dialog, Disclosure, Tabs } from 'astro-headless-ui';
```

**ALWAYS add client directive:**
```astro
<Menu client:load>
  <!-- Component content -->
</Menu>
```
```

---

**Method 3: Create Component Templates**

**File:** `.claude/skills/website/astro-headless-ui-patterns/SKILL.md`

```markdown
---
name: astro-headless-ui-patterns
description: Common patterns for using astro-headless-ui components
keywords: [astro-headless-ui, interactive-components, accessibility]
version: 1.0.0
---

# Astro Headless UI Component Patterns

## Dropdown Menu Pattern

```astro
import { Menu } from 'astro-headless-ui';

<Menu client:load>
  <Menu.Button class="[styling]">Button Text</Menu.Button>
  <Menu.Items class="[styling]">
    <Menu.Item><a href="/link">Link</a></Menu.Item>
  </Menu.Items>
</Menu>
```

## FAQ Accordion Pattern

```astro
import { Disclosure } from 'astro-headless-ui';

<Disclosure client:load>
  <Disclosure.Button>Question?</Disclosure.Button>
  <Disclosure.Panel>Answer</Disclosure.Panel>
</Disclosure>
```

## Modal Pattern

```astro
import { Dialog } from 'astro-headless-ui';

<Dialog client:load>
  <Dialog.Trigger>Open Modal</Dialog.Trigger>
  <Dialog.Overlay class="fixed inset-0 bg-black/50" />
  <Dialog.Panel class="fixed top-1/2 left-1/2 ...">
    <Dialog.Title>Title</Dialog.Title>
    <Dialog.Description>Description</Dialog.Description>
    <!-- Content -->
  </Dialog.Panel>
</Dialog>
```
```

**Then prompt:**
```
Build an FAQ accordion using the pattern in .claude/skills/website/astro-headless-ui-patterns/SKILL.md
```

---

## When to Use astro-headless-ui vs. Custom Components

### ✅ Use astro-headless-ui When:
- **Dropdowns/Menus** - Complex keyboard navigation, ARIA attributes
- **Modals** - Focus trapping, overlay management
- **Accordions** - State management, accessibility
- **Tabs** - Keyboard navigation, ARIA roles
- **Custom selects** - Accessible alternative to native `<select>`

### ❌ Build Custom When:
- **Simple buttons** - No complex state, just `<button>` tag
- **Simple links** - Just `<a>` tags
- **Static content** - Cards, hero sections, footers (no interactivity)
- **Forms** - Use native HTML5 form elements (more accessible)

---

## Common Styling Patterns

### UI State Classes (astro-headless-ui provides these)

**Available Classes:**
- `ui-open` - Element is open/expanded
- `ui-closed` - Element is closed/collapsed
- `ui-selected` - Tab/item is selected
- `ui-active` - Item is being clicked/pressed

**Example:**
```astro
<Disclosure.Button class="transform ui-open:rotate-180 transition-transform">
  <!-- Rotates 180° when disclosure is open -->
</Disclosure.Button>
```

---

## Performance Considerations

### Client Directive Usage

**astro-headless-ui components REQUIRE client directives** (they need JavaScript for interactivity)

**Options:**
1. `client:load` - Load JavaScript immediately (use for above-the-fold components)
2. `client:visible` - Load when component enters viewport (use for below-the-fold)
3. `client:idle` - Load when browser is idle (use for non-critical components)

**Example:**
```astro
<!-- Above the fold navigation -->
<Menu client:load>...</Menu>

<!-- FAQ section below the fold -->
<Disclosure client:visible>...</Disclosure>
```

---

## Accessibility Checklist

When using astro-headless-ui components:

- [ ] **Add client directive** (`client:load`, `client:visible`, etc.)
- [ ] **Test keyboard navigation** (Tab, Arrow keys, Enter, Escape)
- [ ] **Verify focus indicators** visible on all interactive elements
- [ ] **Check ARIA attributes** (automatically added by library, verify in browser DevTools)
- [ ] **Test with screen reader** (NVDA, VoiceOver, JAWS)
- [ ] **Verify color contrast** on all states (open, closed, hover, focus)

---

## Troubleshooting

### Issue: Component Doesn't Work (No Interactivity)

**Cause:** Missing `client:` directive

**Fix:**
```astro
<!-- Wrong -->
<Menu>...</Menu>

<!-- Correct -->
<Menu client:load>...</Menu>
```

---

### Issue: Styles Not Applying to UI States

**Cause:** Forgot to use `ui-open`, `ui-selected` classes

**Fix:**
```astro
<!-- Wrong -->
<Disclosure.Button class="rotate-180">

<!-- Correct -->
<Disclosure.Button class="ui-open:rotate-180">
```

---

## Complete Example: Mobile Navigation with Hamburger Menu

```astro
---
// src/components/Navigation.astro
import { Menu } from 'astro-headless-ui';
---

<!-- Desktop Navigation (hidden on mobile) -->
<nav class="hidden md:flex gap-6">
  <a href="/" class="text-gray-700 hover:text-primary">Home</a>
  <a href="/about" class="text-gray-700 hover:text-primary">About</a>
  <a href="/services" class="text-gray-700 hover:text-primary">Services</a>
  <a href="/contact" class="text-gray-700 hover:text-primary">Contact</a>
</nav>

<!-- Mobile Navigation (visible on mobile) -->
<Menu client:load class="md:hidden">
  <!-- Hamburger Button -->
  <Menu.Button class="p-2 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Open menu">
    <svg class="w-6 h-6 ui-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    <svg class="w-6 h-6 ui-closed:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </Menu.Button>

  <!-- Mobile Menu Panel -->
  <Menu.Items class="absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-4">
    <Menu.Item class="block px-6 py-3 hover:bg-gray-100">
      <a href="/" class="text-gray-700">Home</a>
    </Menu.Item>
    <Menu.Item class="block px-6 py-3 hover:bg-gray-100">
      <a href="/about" class="text-gray-700">About</a>
    </Menu.Item>
    <Menu.Item class="block px-6 py-3 hover:bg-gray-100">
      <a href="/services" class="text-gray-700">Services</a>
    </Menu.Item>
    <Menu.Item class="block px-6 py-3 hover:bg-gray-100">
      <a href="/contact" class="text-gray-700">Contact</a>
    </Menu.Item>
  </Menu.Items>
</Menu>
```

---

## Resources

- **Official Docs:** https://github.com/RyanCavanaugh/astro-headless-ui (currently limited docs)
- **Headless UI (React):** https://headlessui.com/ (similar API, useful reference)
- **Radix UI Docs:** https://www.radix-ui.com/ (similar concept, excellent docs for patterns)

---

**Last Updated:** November 9, 2025
**Next Steps:** Create component library templates using astro-headless-ui patterns
