# Component Patterns & Behaviors

> Detailed component patterns, code examples, and HomeBase V2 behavior mappings.
> Read this file when building or modifying specific component types.

---

## Button Patterns

### Canonical Component: `<Button>` from `/src/app/components/Button.tsx`

ALL buttons MUST use this component. It uses inline styles + JS event handlers internally
to guarantee correct rendering despite `theme.css` overrides on `<button>` elements.

| Variant | Description | Height |
|---------|-------------|--------|
| `primary` | Solid purple bg, white text | 48px (32px condensed) |
| `secondary` | Transparent bg, purple border | 48px (32px condensed) |
| `destructive` | Solid red bg, white text | 48px (32px condensed) |
| `icon-primary` | Square solid purple, icon only | 48x48px (32x32px condensed) |
| `icon-secondary` | Square with purple border, icon only | 48x48px (32x32px condensed) |
| `ghost` | Transparent, no border, icon only | 48x48px (32x32px condensed) |
| `text` | No bg/border, underlined purple text | auto |

### Usage

```tsx
import { Button } from "./Button";

{/* Standard */}
<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="destructive">Delete</Button>

{/* Condensed */}
<Button variant="primary" size="condensed">Save</Button>

{/* With icon — pass gap via style, explicit colors on children */}
<Button variant="primary" style={{ gap: "var(--partnerhome-spacing-1000)" }}>
  <SearchIcon style={{ color: "var(--partnerhome-text-color-inverse)" }} />
  <span style={{ color: "var(--partnerhome-text-color-inverse)" }}>Search</span>
</Button>

{/* Icon-only */}
<Button variant="icon-primary" aria-label="Search"><SearchIcon /></Button>
<Button variant="ghost" aria-label="More"><MoreIcon /></Button>
<Button variant="ghost" size="condensed" aria-label="Close"><XIcon /></Button>

{/* Text/link */}
<Button variant="text">View Details</Button>

{/* Disabled */}
<Button variant="primary" disabled>Disabled</Button>
```

> **Note:** CSS classes in `global.css` (`.button-primary`, etc.) are retained as a fallback
> but `Button.tsx` is the canonical approach. Never use raw `<button>` elements.

### HomeBase V2 Behavior Mapping

- **Transitions:** 250ms for color/background, 100ms for transform
- **Hover:** Border width increases from `stroke-weights-small` to `stroke-weights-medium`
- **Active:** `scale(0.95)` + darker background
- **Focus:** Ring with `utility-focus` color

### Secondary Button States (CRITICAL)

- **Idle:** transparent bg, `text-color-primary` text, `border-color-primary` (1px)
- **Hover:** `bg-color-secondaryhover` (#F1E9F1), `border-color-primary-hover`, text stays `text-color-primary` — **NOT `text-color-inverse`**
- **Active:** `scale(0.95)`, `stroke-weights-medium` (1.5px) border
- **Disabled:** `border-color-disabled`, `text-color-disabled`, `opacity: 0.5`

### Button Variant Summary

- **Primary**: `bg-color-button-primary`, `text-color-inverse`, `font-weight-normal`
- **Secondary**: transparent bg, `border-color-primary`, `text-color-primary`, `font-weight-normal`
- **Text/Link**: transparent, no border, `text-color-primary`, underlined, `font-weight-normal`
- **Icon Primary**: 48x48, `bg-color-button-primary`, no text
- **Icon Secondary**: 48x48, `border-color-primary`, no text
- **Ghost**: 48x48, transparent, no border, `text-color-primary` → `text-color-primary-hover`
- **Destructive**: `bg-color-sale`, `text-color-inverse`

---

## TextInput & SearchInput Patterns

### TextInput: `<TextInput>` from `/src/app/components/TextInput.tsx`

General-purpose text input with floating label and optional icon. Used for form fields like
username, email, phone, etc.

```tsx
import { TextInput } from "./TextInput";

{/* Standard — no icon */}
<TextInput label="Username" value={val} onChange={handler} />

{/* With icon — any ReactNode */}
<TextInput label="Phone" value={val} onChange={handler} icon={<PhoneIcon />} />
```

### SearchInput: `<SearchInput>` from `/src/app/components/SearchInput.tsx`

Thin shorthand around TextInput pre-wired with the Figma search icon. **Use this for every
search field** — never manually pass `icon={<FigmaSearchIcon />}` to TextInput.

```tsx
import { SearchInput } from "./SearchInput";

<SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />
<SearchInput label="Search filters" containerStyle={{ width: '100%' }} />
```

---

## DropdownMenu Primitive

### `<DropdownMenu>` from `/src/app/components/DropdownMenu.tsx`

Composable popover container. All dropdown components (`QuickFilterDropdown`, `SortDropdown`,
`SegmentControlDropdown`, `QuickFilterHierarchy`, `QuickFilterWithChips`) compose this
primitive internally — never duplicate positioning/backdrop/search logic.

```tsx
import {
  DropdownMenu, DropdownMenuItem, DropdownMenuCheckboxItem,
  DropdownMenuRadioItem, DropdownMenuDivider, DropdownMenuEmptyState
} from "./DropdownMenu";
```

### Sub-components

| Component | Purpose |
|-----------|---------|
| `DropdownMenuItem` | Generic row — string children auto-styled, ReactNode children rendered as-is |
| `DropdownMenuCheckboxItem` | Checkbox + label + optional count — renders Checkbox internally |
| `DropdownMenuRadioItem` | Radio dot + label — renders inline radio control internally |
| `DropdownMenuDivider` | 1px horizontal rule |
| `DropdownMenuEmptyState` | Centered "No results found" message |

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | boolean | — | Visibility |
| `onClose` | () => void | — | Backdrop click handler |
| `triggerRef` | RefObject | — | Trigger element for positioning |
| `width` | number | 300 | Fixed width in px |
| `searchable` | boolean | false | Show built-in search input |
| `searchValue` | string | "" | Controlled search value |
| `onSearchChange` | (v: string) => void | — | Search change handler |
| `header` | ReactNode | — | Sticky content below search |
| `footer` | ReactNode | — | Sticky footer (Cancel/Apply) |
| `maxContentHeight` | string | "300px" | Max height for scrollable area |

---

## Dropdown/Menu Patterns

### HomeBase V2 State Machine

| State | Background | Border (inset box-shadow) |
|-------|-----------|--------------------------|
| Default idle | `bg-color-tertiaryidle` | none |
| Default hover | `bg-color-tertiaryhover` | `border-color-tertiaryhoversubtle` (stroke-small) |
| Default active | `bg-color-tertiaryactive` | `border-color-tertiaryactivesubtle` (stroke-large) |
| Selected idle | `bg-color-secondaryidle` | none |
| Selected hover | `bg-color-secondaryhover` | `border-color-secondaryhover` (stroke-small) |
| Selected active | `bg-color-secondaryactive` | `border-color-secondaryactive` (stroke-large) |

### Hover Border Pattern (inset box-shadow)

```css
/* Default item hover */
box-shadow: inset 0 0 0 var(--partnerhome-stroke-weights-small) var(--partnerhome-border-color-tertiaryhoversubtle);

/* Selected item hover */
box-shadow: inset 0 0 0 var(--partnerhome-stroke-weights-small) var(--partnerhome-border-color-secondaryhover);
```

### Menu Container

```css
background: var(--partnerhome-bg-color-base);
border: var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base);
border-radius: var(--partnerhome-radius-base);
box-shadow: var(--partnerhome-shadow-30);
padding: var(--partnerhome-spacing-1000) 0;
```

### Dropdown Item

```css
padding: 6px var(--partnerhome-spacing-1000);
border-radius: var(--partnerhome-radius-medium);
font-size: var(--partnerhome-font-size-1000);
font-weight: var(--partnerhome-font-weight-normal);
cursor: pointer;
```

---

## Tooltip Patterns

### Standard Tooltip

```css
background: var(--partnerhome-surface-color-inverse);     /* #211E22 dark */
color: var(--partnerhome-text-color-inverse) !important;   /* #FFFFFF white */
border: 1px solid var(--partnerhome-surface-color-inverse);
border-radius: var(--partnerhome-radius-medium);
padding: var(--partnerhome-spacing-3000) var(--partnerhome-spacing-2000);
box-shadow: var(--partnerhome-shadow-10);
font-size: var(--partnerhome-font-size-500);               /* 11.2px */
font-weight: var(--partnerhome-font-weight-normal);
```

### Tooltip with Title

```css
/* Title */
font-size: var(--partnerhome-font-size-1000);  /* 14px */
font-weight: var(--partnerhome-font-weight-bold);
color: var(--partnerhome-text-color-inverse) !important;

/* Content */
font-size: var(--partnerhome-font-size-500);   /* 11.2px */
font-weight: var(--partnerhome-font-weight-normal);
color: var(--partnerhome-text-color-inverse) !important;
```

### Condensed Tooltip

```css
padding: var(--partnerhome-spacing-1000);  /* 8px all around */
```

---

## Card Patterns

```css
background: var(--partnerhome-bg-color-global-body);
border-radius: var(--partnerhome-radius-large);
padding: var(--partnerhome-spacing-2000);
box-shadow: var(--partnerhome-shadow-20);
border: var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base);
```

---

## Input/Form Field Patterns

```css
height: 48px;
padding: 0 var(--partnerhome-spacing-2000);
background: var(--partnerhome-bg-color-base);
color: var(--partnerhome-text-color-base);
border: var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base);
border-radius: var(--partnerhome-radius-base);
font-size: var(--partnerhome-font-size-1000);
font-weight: var(--partnerhome-font-weight-normal);

/* Focus */
border-color: var(--partnerhome-utility-focus);
box-shadow: 0 0 0 4px rgba(19, 100, 241, 0.1);
```

---

## Modal/Dialog Patterns

```css
/* Overlay */
background: rgba(0, 0, 0, 0.5);

/* Content */
background: var(--partnerhome-bg-color-base);
border-radius: var(--partnerhome-radius-large);
padding: var(--partnerhome-spacing-3000);
box-shadow: var(--partnerhome-shadow-30);
```

---

## Badge/Tag Patterns

```css
/* Prominent */
background: var(--partnerhome-bg-color-primary);
color: var(--partnerhome-text-color-inverse);

/* Subtle */
background: var(--partnerhome-surface-color-primarysubtle);
color: var(--partnerhome-text-color-primary);

/* Shared */
padding: var(--partnerhome-spacing-500) var(--partnerhome-spacing-1000);
border-radius: var(--partnerhome-radius-large);
font-size: var(--partnerhome-font-size-500);
font-weight: var(--partnerhome-font-weight-bold);
```

---

## Tab Patterns

- **Primary Tabs:** Active = `bg-color-primary` + `text-color-inverse`; Inactive = `bg-color-tertiaryidle` + `text-color-base`
- **Secondary Tabs:** Active = bottom border `border-color-primary` + `text-color-primary`; Inactive = no bottom border

---

## Toggle Patterns

| Part | Token |
|------|-------|
| Track (on) | `bg-color-primary` |
| Track (off) | `bg-color-tertiaryactive` |
| Track (disabled) | `bg-color-disabledsubtle` |
| Thumb | `surface-color-base` (white) |
| Focus ring | `rgba(19, 100, 241, 0.2)` |

Dimensions: Track 52x32px (radius 16px), Thumb 24x24px, Transition 200ms

---

## Segmented Control Patterns

### Container
```css
padding: var(--partnerhome-spacing-500);
background: var(--partnerhome-bg-color-base);
border: 1px solid var(--partnerhome-border-color-base);
border-radius: var(--partnerhome-radius-medium);
```

### Segment Button
```css
padding: var(--partnerhome-spacing-1000) var(--partnerhome-spacing-2000);
min-height: 40px;
font-size: var(--partnerhome-font-size-1000);
font-weight: var(--partnerhome-font-weight-normal) !important;  /* Override theme.css */
border-radius: var(--partnerhome-radius-medium);
border: none;
```

### States

**Prominent Selected:** `bg-color-primary` + `text-color-inverse`
**Subtle Selected:** `bg-color-secondaryactive` + `text-color-primary` (text) + `text-color-base` (icon)
**Unselected:** `bg-color-tertiaryidle` + `text-color-base`

---

## Progress Stepper

- Use 3-6 steps (fewer doesn't need a stepper, more is overwhelming)
- Horizontal (default, left-to-right) or Vertical orientation
- Show completed, current, and upcoming steps clearly
- Only for sequential processes where order matters

---

## Typography Patterns

### Body Text
```css
font-size: var(--partnerhome-font-size-1000);
font-weight: var(--partnerhome-font-weight-normal);
color: var(--partnerhome-text-color-base);
```

### Headings
- h1: `font-size-4000`, bold
- h2: `font-size-3000`, bold
- h3: `font-size-2000`, bold

### Marketing Headings (NOT bold)
- Hero: `font-size-7000`, normal weight
- h2: `font-size-6000`, normal weight
- h3: `font-size-5000`, normal weight

### Links
```css
color: var(--partnerhome-text-color-primary);
font-weight: var(--partnerhome-font-weight-normal);  /* NOT bold */
text-decoration: underline;
/* Hover: text-color-primary-hover */
```
