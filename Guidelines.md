# PartnerHome FigmaMake Guidelines (Core)

> **IMPORTANT:** This is the slim core. Detailed references are in `/guidelines/` — read them on-demand when needed.
> - `/guidelines/tokens.md` — Full token reference (colors, spacing, radius, shadows, strokes)
> - `/guidelines/components.md` — Component behaviors, code examples, HomeBase V2 patterns
> - `/guidelines/registry.md` — Complete component registry with file paths and exports

---

## Priority Order (MUST FOLLOW)

1. **Component Registry** — ALWAYS import existing components from `/guidelines/registry.md`. NEVER duplicate.
2. **HomeBase V2 Library** — Reference component behaviors from the attached Figma design system.
3. **PartnerHome Design Tokens** — All styling MUST use `var(--partnerhome-*)` tokens. See `/guidelines/tokens.md`.
4. **Tailwind/Shadcn** — LAST RESORT. MUST override defaults with PartnerHome tokens.

---

## Source of Truth Pages (Immutable)

1. **ComponentsPage** (`/src/app/components/ComponentsPage.tsx`) — UI primitives
2. **DataTableSamplesPage** (`/src/app/components/DataTableSamplesPage.tsx`) — Tables, filters, pagination
3. **AnalyticsLibraryPage** (`/src/app/components/AnalyticsLibraryPage.tsx`) — Charts, KPIs, metrics

Style files: `/src/styles/theme.css` (tokens), `/src/styles/fonts.css` (Lato font), `/src/styles/global.css` (button classes)

**NEVER modify source-of-truth component files for page-specific needs.** Wrap, pass props, or add page-level styles instead.

---

## Critical Rules

### Tokens
- ALL colors, spacing, font sizes, radii, shadows, strokes MUST use `var(--partnerhome-*)` tokens
- NEVER use hardcoded hex values, Tailwind default colors, or arbitrary values
- Use semantic tokens, not primitives (e.g., `text-color-base` not `neutral-80`)

### Font
- Font family: `'Lato', 'Inter', sans-serif`
- Font weight MUST be explicitly set — `theme.css` sets `font-weight: bold` on all `<button>` elements
- Body text, links, inputs, buttons: `font-weight: 400` (normal) — NOT bold
- Headings, badges: `font-weight: 700` (bold)
- Marketing headings: `font-weight: 400` (normal)

### Buttons (CRITICAL)
- ALL buttons MUST use the `<Button>` component from `/src/app/components/Button.tsx`
  - `import { Button } from "./Button";`
  - Variants: `primary`, `secondary`, `text`, `icon-primary`, `icon-secondary`, `ghost`, `destructive`
  - Sizes: `standard` (48px, default) | `condensed` (32px)
- NEVER use raw `<button>` elements — always use `<Button variant="...">` 
- Button.tsx uses inline styles + JS handlers internally to defeat `theme.css` overrides — this is intentional
- For buttons with icons, pass `style={{ gap: "var(--partnerhome-spacing-1000)" }}` and explicit colors on child `<svg>` / `<span>` elements
- Secondary button text stays `text-color-primary` on hover — NOT `text-color-inverse`

### Tooltips
- Background: `var(--partnerhome-surface-color-inverse)` (dark)
- Text: `var(--partnerhome-text-color-inverse)` (white) — CRITICAL for contrast
- Use `ReactDOM.createPortal` to render at `document.body`

### Search Inputs
- For any search field, use `<SearchInput>` from `/src/app/components/SearchInput.tsx`
- This wraps TextInput with the search icon pre-configured — no manual icon wiring needed
- `import { SearchInput } from "./SearchInput";`

### Dropdowns & Popover Menus
- For dropdown/popover menus, use `<DropdownMenu>` from `/src/app/components/DropdownMenu.tsx`
- Compose with `<DropdownMenuItem>`, `<DropdownMenuDivider>`, `<DropdownMenuEmptyState>`
- Supports: positioning, backdrop, built-in search (`searchable` prop), sticky footer
- MUST explicitly override hover states — FigmaMake won't do this automatically
- Use inset `box-shadow` for hover borders, not regular borders
- See `/guidelines/components.md` for full dropdown state patterns

### Filter Panels
- Checkbox list items inside filter panels should NOT get dropdown-style inset box-shadow borders
- Filter panel checkbox items only get subtle background fill on hover

---

## Quick Token Cheat Sheet

| Category | Token Pattern | Common Values |
|----------|--------------|---------------|
| Font sizes | `--partnerhome-font-size-{500-7000}` | 1000=14px (body), 4000=27px (h1) |
| Spacing | `--partnerhome-spacing-{250-5000}` | 1000=8px, 2000=16px, 3000=24px |
| Radius | `--partnerhome-radius-{small,base,medium,large,button}` | base=2px, large/button=4px |
| Shadows | `--partnerhome-shadow-{10,20,30,40}` | 10=tooltip, 20=card, 30=modal |
| Strokes | `--partnerhome-stroke-weights-{small,medium,large}` | small=1px, medium=1.5px, large=2px |
| Heights | Buttons/inputs/dropdowns: `48px` | Condensed buttons: `40px` (icon: `32px`) |

> For the full token list, read `/guidelines/tokens.md`.

---

## Validation Checklist

Before finalizing any component:
- [ ] Checked `/guidelines/registry.md` — no existing component duplicated
- [ ] All buttons use `<Button>` from Button.tsx — no raw `<button>` elements
- [ ] All styling uses `var(--partnerhome-*)` tokens — no hardcoded values
- [ ] Font weight explicitly set (normal or bold)
- [ ] Font family set to `'Lato', 'Inter', sans-serif`
- [ ] Tooltip text is white on dark backgrounds
- [ ] Dropdown hover states explicitly set
- [ ] Source-of-truth files not modified for page-specific needs
