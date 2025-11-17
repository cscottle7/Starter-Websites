# Astro Headless UI Prompting Guide

> **Purpose:** Complete prompt templates and examples for building components with astro-headless-ui
> **Last Updated:** November 9, 2025
> **Library Docs:** https://github.com/RyanCavanaugh/astro-headless-ui

---

## Quick Reference: Component Prompt Templates

### Dropdown Menu (Navigation)
```
Build a dropdown navigation menu using astro-headless-ui Menu component.

Context:
- File: src/components/UserMenu.astro
- Purpose: User account dropdown (Profile, Settings, Logout links)
- Position: Top-right corner of navigation bar

Requirements:
1. Import Menu from 'astro-headless-ui'
2. Button text: "Account" with user icon
3. Dropdown items:
   - Profile (/profile)
   - Settings (/settings)
   - Logout (/logout)
4. Styling:
   - Button: bg-primary text-white px-4 py-2 rounded-lg
   - Dropdown: bg-white shadow-lg border rounded-lg
   - Items: hover:bg-gray-100
5. Accessibility:
   - Add client:load directive
   - Keyboard navigation (Arrow keys, Enter, Escape)
   - ARIA attributes (automatically handled by Menu component)
6. Responsive: Works on mobile and desktop

Deliverable:
UserMenu.astro component ready to import in Header.astro
```

---

### Accordion / FAQ
```
Build an FAQ accordion section using astro-headless-ui Disclosure component.

Context:
- File: src/components/FAQ.astro
- Purpose: Collapsible FAQ section with 5 questions
- Design: Each question expands to show answer, only one open at a time

Requirements:
1. Import Disclosure from 'astro-headless-ui'
2. Create 5 FAQ items with these questions:
   - "What is your refund policy?"
   - "How long does shipping take?"
   - "Do you offer international shipping?"
   - "How can I track my order?"
   - "What payment methods do you accept?"
3. Styling:
   - Button: bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg
   - Arrow icon rotates 180° when open (ui-open:rotate-180)
   - Panel: px-4 py-3 text-gray-600
4. Add client:load directive
5. Keyboard accessible (Tab, Enter, Space)

Deliverable:
FAQ.astro component with all questions and placeholder answers
```

---

### Modal / Dialog
```
Build a contact form modal using astro-headless-ui Dialog component.

Context:
- File: src/components/ContactModal.astro
- Purpose: Pop-up contact form triggered by "Contact Us" button
- Design: Centered modal with overlay

Requirements:
1. Import Dialog from 'astro-headless-ui'
2. Trigger button: "Contact Us" (bg-primary text-white)
3. Modal overlay: Semi-transparent black background (bg-black/50)
4. Modal panel:
   - Centered on screen (fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2)
   - White background, rounded-lg, shadow-xl
   - Max width 500px
5. Form fields:
   - Name (text input)
   - Email (email input)
   - Message (textarea)
   - Submit button (bg-primary text-white)
   - Cancel button (closes modal)
6. Accessibility:
   - Add client:load directive
   - Focus trap (keyboard stays in modal)
   - Escape key closes modal
   - Click overlay closes modal

Deliverable:
ContactModal.astro component ready to use on any page
```

---

### Tabs
```
Build a services showcase using astro-headless-ui Tabs component.

Context:
- File: src/components/ServiceTabs.astro
- Purpose: Show 3 service categories in tab format
- Design: Horizontal tab navigation with content panels below

Requirements:
1. Import Tabs from 'astro-headless-ui'
2. Create 3 tabs:
   - "Web Design" (default selected)
   - "Development"
   - "SEO Services"
3. Each panel contains:
   - H3 heading (service name)
   - Description paragraph (2-3 sentences)
   - List of key features (3-4 bullet points)
   - CTA button ("Learn More")
4. Styling:
   - Tab list: border-b border-gray-200
   - Tab button: px-4 py-2 text-gray-600 hover:text-primary
   - Selected tab: text-primary border-b-2 border-primary (ui-selected)
   - Panel: Fade in when selected
5. Add client:load directive
6. Keyboard navigation (Arrow keys, Tab)

Deliverable:
ServiceTabs.astro with all 3 service categories and content
```

---

### Combobox / Autocomplete Select
```
Build a searchable city selector using astro-headless-ui Combobox component.

Context:
- File: src/components/CitySelector.astro
- Purpose: Select a city with autocomplete search
- Design: Input field with dropdown suggestions

Requirements:
1. Import Combobox from 'astro-headless-ui'
2. Predefined cities list: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"]
3. Features:
   - Input field with search (filters cities as you type)
   - Dropdown shows matching cities
   - Click or arrow keys to select
4. Styling:
   - Input: border border-gray-300 px-4 py-2 rounded-lg
   - Dropdown: bg-white shadow-lg border rounded-lg mt-2
   - Options: px-4 py-2 hover:bg-gray-100
   - Selected option: bg-primary text-white
5. Add client:load directive
6. Keyboard navigation (Arrow keys, Enter, Escape)

Deliverable:
CitySelector.astro component that returns selected city value
```

---

## Standard Prompt Structure

### Template
```
Build a [component type] using astro-headless-ui [Component] component.

Context:
- File: [exact file path]
- Purpose: [what this component does]
- Design: [layout description]

Requirements:
1. Import [Component] from 'astro-headless-ui'
2. [Specific feature 1]
3. [Specific feature 2]
4. Styling: [Tailwind classes for each element]
5. Add client:load directive (or client:visible if below fold)
6. Accessibility: [keyboard navigation, ARIA notes]
7. Responsive: [mobile/desktop behavior]

Deliverable:
[ComponentName].astro component ready to [use case]
```

---

## Component-Specific Patterns

### Menu (Dropdown)

**Basic Pattern:**
```astro
import { Menu } from 'astro-headless-ui';

<Menu client:load>
  <Menu.Button class="[button-styling]">
    Button Text
  </Menu.Button>

  <Menu.Items class="[dropdown-styling]">
    <Menu.Item class="[item-styling]">
      <a href="/link">Link Text</a>
    </Menu.Item>
  </Menu.Items>
</Menu>
```

**When to Use:**
- User account dropdowns
- Navigation mega menus
- Action menus (Edit, Delete, Share)

**Key Styling Classes:**
- Button: `px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark focus:ring-2`
- Items container: `absolute bg-white shadow-lg border rounded-lg mt-2 py-1 w-56`
- Item: `block px-4 py-2 text-gray-700 hover:bg-gray-100`

---

### Disclosure (Accordion)

**Basic Pattern:**
```astro
import { Disclosure } from 'astro-headless-ui';

<Disclosure client:load>
  <Disclosure.Button class="[button-styling] ui-open:bg-gray-200">
    Question Text
    <svg class="transform ui-open:rotate-180">[chevron-icon]</svg>
  </Disclosure.Button>

  <Disclosure.Panel class="[panel-styling]">
    Answer Text
  </Disclosure.Panel>
</Disclosure>
```

**When to Use:**
- FAQ sections
- Collapsible content blocks
- Sidebar navigation with expandable sections

**Key Styling Classes:**
- Button: `flex justify-between w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg`
- Panel: `px-4 py-3 text-gray-600`
- Arrow icon: `transform ui-open:rotate-180 transition-transform`

---

### Dialog (Modal)

**Basic Pattern:**
```astro
import { Dialog } from 'astro-headless-ui';

<Dialog client:load>
  <Dialog.Trigger class="[trigger-button-styling]">
    Open Modal
  </Dialog.Trigger>

  <Dialog.Overlay class="fixed inset-0 bg-black/50 z-40" />

  <Dialog.Panel class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 max-w-md w-full z-50">
    <Dialog.Title class="text-2xl font-bold mb-4">Modal Title</Dialog.Title>
    <Dialog.Description class="text-gray-600 mb-6">Modal description</Dialog.Description>

    <!-- Content -->

    <Dialog.Close class="px-4 py-2 text-gray-600">Close</Dialog.Close>
  </Dialog.Panel>
</Dialog>
```

**When to Use:**
- Contact forms
- Confirmation dialogs
- Image lightboxes
- Video players

**Key Styling Classes:**
- Overlay: `fixed inset-0 bg-black/50 z-40`
- Panel: `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 z-50`
- Close button: `px-4 py-2 text-gray-600 hover:text-gray-800`

---

### Tabs

**Basic Pattern:**
```astro
import { Tabs } from 'astro-headless-ui';

<Tabs client:load defaultValue="tab-1">
  <Tabs.List class="[tab-list-styling]">
    <Tabs.Tab value="tab-1" class="[tab-button-styling] ui-selected:text-primary">
      Tab 1
    </Tabs.Tab>
    <Tabs.Tab value="tab-2" class="[tab-button-styling] ui-selected:text-primary">
      Tab 2
    </Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel value="tab-1" class="[panel-styling]">
    Tab 1 Content
  </Tabs.Panel>

  <Tabs.Panel value="tab-2" class="[panel-styling]">
    Tab 2 Content
  </Tabs.Panel>
</Tabs>
```

**When to Use:**
- Service categories
- Product features showcase
- Multi-step forms (visual navigation)
- Content categorization

**Key Styling Classes:**
- Tab list: `flex gap-4 border-b border-gray-200 mb-6`
- Tab button: `px-4 py-2 text-gray-600 hover:text-primary ui-selected:text-primary ui-selected:border-b-2 ui-selected:border-primary`
- Panel: `space-y-4`

---

### Switch (Toggle)

**Basic Pattern:**
```astro
import { Switch } from 'astro-headless-ui';

<Switch client:load defaultChecked={false}>
  <Switch.Label class="[label-styling]">Enable Notifications</Switch.Label>

  <Switch.Button class="[toggle-track-styling] ui-checked:bg-primary">
    <span class="[toggle-thumb-styling] ui-checked:translate-x-6"></span>
  </Switch.Button>
</Switch>
```

**When to Use:**
- Settings toggles (Enable/Disable)
- Feature flags
- Dark mode toggle
- Newsletter subscription

**Key Styling Classes:**
- Track: `relative inline-flex h-6 w-11 rounded-full bg-gray-300 ui-checked:bg-primary transition`
- Thumb: `inline-block h-4 w-4 rounded-full bg-white transform translate-x-1 ui-checked:translate-x-6 transition`

---

### Listbox (Custom Select)

**Basic Pattern:**
```astro
import { Listbox } from 'astro-headless-ui';

<Listbox client:load defaultValue="option-1">
  <Listbox.Button class="[button-styling]">
    Select Option
  </Listbox.Button>

  <Listbox.Options class="[dropdown-styling]">
    <Listbox.Option value="option-1" class="[option-styling] ui-selected:bg-primary ui-selected:text-white">
      Option 1
    </Listbox.Option>
    <Listbox.Option value="option-2" class="[option-styling]">
      Option 2
    </Listbox.Option>
  </Listbox.Options>
</Listbox>
```

**When to Use:**
- Styled select dropdowns (alternative to native `<select>`)
- Multi-select (with multiple prop)
- Sortable lists

**Key Styling Classes:**
- Button: `w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-left`
- Options: `absolute bg-white shadow-lg border rounded-lg mt-2 py-1 w-full`
- Option: `px-4 py-2 hover:bg-gray-100 ui-selected:bg-primary ui-selected:text-white`

---

## Advanced Prompting Examples

### Mobile Navigation with Hamburger

**Prompt:**
```
Build a responsive mobile navigation using astro-headless-ui Menu component.

Context:
- File: src/components/MobileNav.astro
- Purpose: Hamburger menu for mobile devices (<768px)
- Design: Hamburger icon → Full-screen menu overlay

Requirements:
1. Import Menu from 'astro-headless-ui'
2. Hamburger button (visible on mobile only, hidden on desktop):
   - 3 horizontal lines icon when closed
   - X icon when open (use ui-open class to toggle)
3. Full-screen menu overlay:
   - Fixed position, covers entire viewport
   - Background: bg-white
   - Navigation links stack vertically
   - Links: Home, About, Services, Blog, Contact
4. Styling:
   - Hamburger: p-2 hover:bg-gray-100 rounded-lg (mobile only: block md:hidden)
   - Menu panel: fixed inset-0 bg-white z-50
   - Nav links: block px-6 py-4 text-lg hover:bg-gray-100
5. Add client:load directive
6. Accessibility: ARIA label "Open menu", Escape key closes

Deliverable:
MobileNav.astro component for Header.astro (works alongside desktop nav)
```

---

### Multi-Level FAQ with Categories

**Prompt:**
```
Build a categorized FAQ section using astro-headless-ui Disclosure components.

Context:
- File: src/components/FAQCategories.astro
- Purpose: FAQ organized into 3 categories (Account, Billing, Shipping)
- Design: Each category is a disclosure, questions inside are nested disclosures

Requirements:
1. Import Disclosure from 'astro-headless-ui'
2. Create 3 category disclosures:
   - "Account" (3 questions)
   - "Billing" (3 questions)
   - "Shipping" (2 questions)
3. Category button styling:
   - bg-primary text-white px-6 py-4 rounded-lg font-bold
   - Arrow icon rotates when open (ui-open:rotate-180)
4. Nested question styling:
   - bg-gray-100 px-4 py-3 mt-2 rounded-lg
   - Smaller arrow icon
5. Add client:load directive to each Disclosure
6. Keyboard navigation works for both levels

Deliverable:
FAQCategories.astro with all categories and questions (placeholder answers)
```

---

### Confirmation Dialog with Actions

**Prompt:**
```
Build a delete confirmation modal using astro-headless-ui Dialog component.

Context:
- File: src/components/DeleteConfirmation.astro
- Purpose: Confirm before deleting item (reusable component)
- Design: Small centered modal with warning styling

Requirements:
1. Import Dialog from 'astro-headless-ui'
2. Props interface:
   - itemName: string (what's being deleted)
   - onConfirm: function (callback when confirmed)
3. Trigger button: "Delete" (bg-red-600 text-white)
4. Modal styling:
   - Overlay: bg-black/50
   - Panel: bg-white rounded-lg shadow-xl p-6 max-w-sm
   - Warning icon (red triangle with exclamation)
   - Title: "Delete [itemName]?" (text-xl font-bold)
   - Description: "This action cannot be undone."
5. Action buttons:
   - Cancel (gray, closes modal)
   - Delete (red, calls onConfirm then closes)
6. Add client:load directive
7. Accessibility: Focus Delete button by default, Escape cancels

Deliverable:
DeleteConfirmation.astro component that accepts itemName prop
```

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Forgetting client: Directive

**Wrong:**
```astro
<Menu>
  <!-- Component won't work - no JavaScript loaded -->
</Menu>
```

**Correct:**
```astro
<Menu client:load>
  <!-- Component works - JavaScript loaded -->
</Menu>
```

---

### ❌ Mistake 2: Not Using UI State Classes

**Wrong:**
```astro
<Disclosure.Button class="rotate-180">
  <!-- Arrow always rotated, doesn't toggle -->
</Disclosure.Button>
```

**Correct:**
```astro
<Disclosure.Button class="ui-open:rotate-180">
  <!-- Arrow rotates only when disclosure is open -->
</Disclosure.Button>
```

---

### ❌ Mistake 3: Missing Absolute Positioning on Dropdowns

**Wrong:**
```astro
<Menu.Items class="bg-white shadow-lg">
  <!-- Dropdown pushes content down, not overlaying -->
</Menu.Items>
```

**Correct:**
```astro
<Menu.Items class="absolute bg-white shadow-lg mt-2">
  <!-- Dropdown overlays content correctly -->
</Menu.Items>
```

---

### ❌ Mistake 4: Incorrect Nested Structure

**Wrong:**
```astro
<Menu client:load>
  <Menu.Items>
    <Menu.Button>Button</Menu.Button> <!-- Button should be outside Items -->
  </Menu.Items>
</Menu>
```

**Correct:**
```astro
<Menu client:load>
  <Menu.Button>Button</Menu.Button>
  <Menu.Items>
    <Menu.Item>Item</Menu.Item>
  </Menu.Items>
</Menu>
```

---

## Prompting Best Practices

### 1. Always Specify Component Type
```
✅ "Build a dropdown menu using astro-headless-ui Menu component"
❌ "Build a dropdown menu" (Claude might use custom code instead)
```

### 2. Include client: Directive in Requirements
```
✅ "Add client:load directive"
❌ Assume Claude will add it automatically
```

### 3. Specify UI State Classes
```
✅ "Arrow icon rotates when open (ui-open:rotate-180)"
❌ "Arrow icon rotates" (Claude might use custom JavaScript)
```

### 4. Reference Official Component Structure
```
✅ "Follow astro-headless-ui Menu structure: Menu → Menu.Button → Menu.Items → Menu.Item"
❌ "Make a menu component" (too vague)
```

### 5. Test Accessibility Requirements
```
✅ "Keyboard navigation (Arrow keys, Enter, Escape), ARIA attributes"
❌ Assume accessibility is automatic (verify keyboard nav works)
```

---

## Quick Copy-Paste Prompts

### Dropdown Menu
```
Build a dropdown menu using astro-headless-ui Menu component. Import Menu from 'astro-headless-ui'. Add client:load directive. Button: "[Button Text]", Items: [list items]. Styling: Button (bg-primary text-white px-4 py-2 rounded-lg), Dropdown (absolute bg-white shadow-lg border rounded-lg mt-2), Item (px-4 py-2 hover:bg-gray-100). File: [path]. Deliverable: Working dropdown component.
```

### Accordion/FAQ
```
Build FAQ accordion using astro-headless-ui Disclosure component. Import Disclosure from 'astro-headless-ui'. Add client:load directive. Create [N] FAQ items. Button styling: bg-gray-100 hover:bg-gray-200 px-4 py-3, arrow rotates (ui-open:rotate-180). Panel styling: px-4 py-3 text-gray-600. File: [path]. Deliverable: FAQ section with [N] questions.
```

### Modal
```
Build modal using astro-headless-ui Dialog component. Import Dialog from 'astro-headless-ui'. Add client:load directive. Trigger: "[Button Text]". Modal overlay: fixed inset-0 bg-black/50. Panel: centered (fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2), bg-white rounded-lg shadow-xl p-6 max-w-md. Include: Title, Description, Close button. File: [path]. Deliverable: Working modal component.
```

### Tabs
```
Build tabs using astro-headless-ui Tabs component. Import Tabs from 'astro-headless-ui'. Add client:load directive. Create [N] tabs: [Tab 1], [Tab 2], [Tab 3]. Tab list: border-b border-gray-200. Tab button: px-4 py-2 text-gray-600 hover:text-primary ui-selected:text-primary ui-selected:border-b-2 ui-selected:border-primary. Panels: Include heading, description, CTA for each. File: [path]. Deliverable: Tabs component with [N] categories.
```

---

## Related Documentation

- **astro-headless-ui GitHub:** https://github.com/RyanCavanaugh/astro-headless-ui
- **Headless UI Docs (React - similar API):** https://headlessui.com/
- **component-development SKILL:** `.claude/skills/website/component-development/SKILL.md`
- **ASTRO_HEADLESS_UI_GUIDE.md:** Complete component examples and patterns

---

**Last Updated:** November 9, 2025
**Next Steps:**
1. Practice with one prompt (start with Dropdown Menu)
2. Test generated component in browser
3. Verify keyboard navigation works
4. Adapt prompt template for your specific use case
