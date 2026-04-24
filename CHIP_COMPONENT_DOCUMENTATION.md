# Chip Component — Quick Reference

> Full implementation is in `/src/app/components/Chip.tsx` (source of truth).
> Live examples are in `/src/app/components/ChipShowcase.tsx`.
> Props API is defined in the TypeScript interface in Chip.tsx.
> Design tokens are in `/guidelines/tokens.md`.

## Variants
- **Chip Default** — Container + Label
- **Chip Icon** — Container + Leading Icon + Label
- **Chip Dismiss** — Container + Label + Dismiss Button (x)

## Interaction Types
| Type | Purpose | Key Behavior |
|------|---------|-------------|
| `checkbox` | Multi-select | Toggle on/off, multiple allowed |
| `radio` | Single-select | One active per group (use `name` prop) |
| `button` | Dismissible filter | Shows x button, `onDismiss` callback |
| `link` | Action trigger | MUST include icon, `onClick`/`href` |

## Sizes
- `default` — Standard height (padding-1000 vertical)
- `condensed` — Compact height (padding-500 vertical)

## When to Use
- Filtering content (button type, dismissible)
- 2-6 mutually exclusive options (radio type)
- Multi-selecting categories (checkbox type)
- Contextual actions near content (link type with icon)

## When NOT to Use
- More than 6 options (use Dropdown)
- Primary navigation
- Critical actions needing confirmation
