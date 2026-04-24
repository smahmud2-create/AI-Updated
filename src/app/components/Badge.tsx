import React from "react";

/* ====================================================
   Badge — Reusable badge component
   ====================================================
   Props:
   - variant:  "primary" | "neutral" | "negative" | "positive" | "warning" | "sale"
   - emphasis: "subtle" | "prominent"  (default: "subtle")
   - type:     "text" | "numeric" | "indicator"  (default: "text")
   - children: ReactNode (content for text/numeric; ignored for indicator)
   ==================================================== */

export type BadgeVariant =
  | "primary"
  | "neutral"
  | "negative"
  | "positive"
  | "warning"
  | "sale";

export type BadgeEmphasis = "subtle" | "prominent";

export type BadgeType = "text" | "numeric" | "indicator";

export interface BadgeProps {
  /** Color variant */
  variant: BadgeVariant;
  /** Emphasis level — subtle (light bg, dark text) or prominent (solid bg, white text) */
  emphasis?: BadgeEmphasis;
  /** Display type — text label, numeric pill, or indicator dot */
  type?: BadgeType;
  /** Badge content (ignored for indicator type) */
  children?: React.ReactNode;
}

// ─── Token maps ────────────────────────────────────

const SUBTLE_BG: Record<BadgeVariant, string> = {
  primary: "var(--partnerhome-bg-color-primary-subtle)",
  neutral: "var(--partnerhome-bg-color-neutral-subtle)",
  negative: "var(--partnerhome-bg-color-negative-subtle)",
  positive: "var(--partnerhome-bg-color-positive-subtle)",
  warning: "var(--partnerhome-bg-color-warning-subtle)",
  sale: "var(--partnerhome-bg-color-sale-subtle)",
};

const PROMINENT_BG: Record<BadgeVariant, string> = {
  primary: "var(--partnerhome-bg-color-primary)",
  neutral: "var(--partnerhome-bg-color-neutral)",
  negative: "var(--partnerhome-bg-color-negative)",
  positive: "var(--partnerhome-bg-color-positive)",
  warning: "var(--partnerhome-bg-color-warning)",
  sale: "var(--partnerhome-bg-color-sale)",
};

// ─── Component ─────────────────────────────────────

export function Badge({
  variant,
  emphasis = "subtle",
  type = "text",
  children,
}: BadgeProps) {
  const bg =
    emphasis === "subtle" ? SUBTLE_BG[variant] : PROMINENT_BG[variant];
  const color =
    emphasis === "subtle"
      ? "var(--partnerhome-text-color-base)"
      : "var(--partnerhome-text-color-inverse)";

  // ── Indicator dot (8×8 circle) ──
  if (type === "indicator") {
    return (
      <span
        style={{
          display: "inline-block",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: PROMINENT_BG[variant],
          flexShrink: 0,
        }}
        aria-hidden="true"
      />
    );
  }

  // ── Numeric pill (24px height, pill radius) ──
  if (type === "numeric") {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "24px",
          height: "24px",
          padding: "0 6px",
          borderRadius: "12px",
          background: bg,
          color: color,
          fontFamily: "'Lato', 'Inter', sans-serif",
          fontSize: "var(--partnerhome-font-size-500)",
          fontWeight: "var(--partnerhome-font-weight-normal)",
          lineHeight: "var(--partnerhome-line-height-base)",
          boxSizing: "border-box",
        }}
      >
        {children}
      </span>
    );
  }

  // ── Text badge (default) ──
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: "var(--partnerhome-radius-base)",
        background: bg,
        color: color,
        fontFamily: "'Lato', 'Inter', sans-serif",
        fontSize: "var(--partnerhome-font-size-500)",
        fontWeight: "var(--partnerhome-font-weight-normal)",
        lineHeight: "var(--partnerhome-line-height-base)",
        boxSizing: "border-box",
      }}
    >
      {children}
    </span>
  );
}
