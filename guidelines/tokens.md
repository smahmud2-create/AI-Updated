# PartnerHome Design Token Reference

> All tokens use CSS variable syntax: `var(--partnerhome-*)`
> Defined in `/src/styles/theme.css`

---

## Typography

### Font Family
- `'Lato', 'Inter', sans-serif` — Lato via Google Fonts CDN
- Weights: 400 (regular), 700 (bold), 900 (black), plus italic variants

### Font Sizes (8 tokens)
| Token | Value | Usage |
|-------|-------|-------|
| `--partnerhome-font-size-500` | 11.2px | Captions, badges, tooltip content |
| `--partnerhome-font-size-1000` | 14px | Body text, buttons, inputs |
| `--partnerhome-font-size-2000` | 17.5px | h3, subsections |
| `--partnerhome-font-size-3000` | 21.9px | h2, section titles |
| `--partnerhome-font-size-4000` | 27.1px | h1, page titles |
| `--partnerhome-font-size-5000` | 34.1px | Marketing h3 |
| `--partnerhome-font-size-6000` | 42.9px | Marketing h2 |
| `--partnerhome-font-size-7000` | 53.4px | Marketing h1, hero |

### Font Weights (2 tokens)
| Token | Value | Usage |
|-------|-------|-------|
| `--partnerhome-font-weight-normal` | 400 | Body, links, inputs, buttons |
| `--partnerhome-font-weight-bold` | 700 | Headings, badges |

### Line Height (1 token)
| Token | Value |
|-------|-------|
| `--partnerhome-line-height-base` | 1.4286 |

---

## Spacing (11 tokens)

| Token | Value | Usage |
|-------|-------|-------|
| `--partnerhome-spacing-250` | 2px | |
| `--partnerhome-spacing-500` | 4px | Tight padding, badge padding |
| `--partnerhome-spacing-1000` | 8px | Tight gaps, icon gaps |
| `--partnerhome-spacing-1500` | 12px | |
| `--partnerhome-spacing-2000` | 16px | Standard padding (buttons, inputs, cards) |
| `--partnerhome-spacing-2500` | 20px | |
| `--partnerhome-spacing-3000` | 24px | Section gaps, modal padding |
| `--partnerhome-spacing-3500` | 28px | |
| `--partnerhome-spacing-4000` | 32px | |
| `--partnerhome-spacing-4500` | 36px | |
| `--partnerhome-spacing-5000` | 40px | |

---

## Border Radius (5 tokens)

| Token | Value | Usage |
|-------|-------|-------|
| `--partnerhome-radius-small` | 1px | |
| `--partnerhome-radius-base` | 2px | Inputs, form fields |
| `--partnerhome-radius-medium` | 2px | Dropdown items |
| `--partnerhome-radius-large` | 4px | Cards |
| `--partnerhome-radius-button` | 4px | Buttons |

---

## Stroke Weights (3 tokens)

| Token | Value | Usage |
|-------|-------|-------|
| `--partnerhome-stroke-weights-small` | 1px | Default borders |
| `--partnerhome-stroke-weights-medium` | 1.5px | Hover states |
| `--partnerhome-stroke-weights-large` | 2px | Active states |

---

## Shadows (4 tokens)

| Token | Value | Usage |
|-------|-------|-------|
| `--partnerhome-shadow-10` | `0 1px 2px rgba(33,30,34,0.2)` | Tooltips |
| `--partnerhome-shadow-20` | `0 3px 6px rgba(33,30,34,0.2)` | Cards, hover |
| `--partnerhome-shadow-30` | `0 5px 10px rgba(33,30,34,0.2)` | Modals, dropdowns |
| `--partnerhome-shadow-40` | `0 7px 14px rgba(33,30,34,0.2)` | Heavy elevation |

---

## Background Colors (49+ tokens)

Key tokens (`--partnerhome-bg-color-*`):

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-color-button-primary` | | Primary button |
| `bg-color-button-primary-hover` | | Primary button hover |
| `bg-color-button-secondary` | | Secondary button |
| `bg-color-button-secondary-hover` | | Secondary button hover |
| `bg-color-global-body` | #F5F5F5 | Page/card background |
| `bg-color-base` | | Base background |
| `bg-color-primary` | | Primary background |
| `bg-color-primaryhover` | | Primary hover |
| `bg-color-primaryactive` | | Primary active |
| `bg-color-tertiaryidle` | | Default dropdown item |
| `bg-color-tertiaryhover` | | Default dropdown hover (**MUST OVERRIDE**) |
| `bg-color-tertiaryactive` | | Default dropdown active |
| `bg-color-secondaryidle` | | Selected dropdown item |
| `bg-color-secondaryhover` | #F1E9F1 | Selected dropdown hover (**MUST OVERRIDE**) |
| `bg-color-secondaryactive` | | Selected dropdown active |
| `bg-color-sale` | | Sale/error background |
| `bg-color-accent` | | Accent background |
| `bg-color-disabledsubtle` | | Disabled backgrounds |

---

## Text Colors (36 tokens)

Key tokens (`--partnerhome-text-color-*`):

| Token | Hex | Usage |
|-------|-----|-------|
| `text-color-base` | #211E22 | Most common text |
| `text-color-primary` | #66256A | Links, purple text |
| `text-color-primary-hover` | #3B153F | Link hover |
| `text-color-inverse` | #FFFFFF | White text on dark bg (**CRITICAL for tooltips**) |
| `text-color-secondary` | | Secondary text |
| `text-color-disabled` | | Disabled text |

---

## Border Colors (35+ tokens)

Key tokens (`--partnerhome-border-color-*`):

| Token | Hex | Usage |
|-------|-----|-------|
| `border-color-base` | #D1D1D6 | Default border |
| `border-color-primary` | #66256A | Primary border |
| `border-color-primary-hover` | | Primary hover border |
| `border-color-disabled` | | Disabled border |
| `border-color-tertiaryhoversubtle` | | Dropdown hover (inset) |
| `border-color-tertiaryactivesubtle` | | Dropdown active (inset) |
| `border-color-secondaryhover` | | Selected dropdown hover (inset) |
| `border-color-secondaryactive` | | Selected dropdown active (inset) |

---

## Surface Colors (5 tokens)

| Token | Hex | Usage |
|-------|-----|-------|
| `--partnerhome-surface-color-base` | #FFFFFF | Base surface |
| `--partnerhome-surface-color-inverse` | #211E22 | Tooltip background |
| `--partnerhome-surface-color-inversesubtle` | #F5F5F5 | |
| `--partnerhome-surface-color-primarysubtle` | #F1E9F1 | Subtle badge bg |
| `--partnerhome-surface-color-neutralsubtle` | #F5F5F5 | |

---

## Utility Colors (2 tokens)

| Token | Hex | Usage |
|-------|-----|-------|
| `--partnerhome-utility-focus` | #1364F1 | Focus ring |
| `--partnerhome-utility-overlay-3` | #211E22 | Overlay |

---

## Standard Component Dimensions

| Element | Height | Padding |
|---------|--------|---------|
| Buttons | 48px | `0 spacing-2000` |
| Buttons (condensed) | 40px (icon: 32px) | `0 spacing-1500` |
| Inputs | 48px | `0 spacing-2000` |
| Dropdowns | 48px | `0 spacing-2000` |
| Cards | — | `spacing-2000` |
| Modals | — | `spacing-3000` |
| Tooltips | — | `spacing-3000` vert, `spacing-2000` horiz |
| Tooltips (condensed) | — | `spacing-1000` |
