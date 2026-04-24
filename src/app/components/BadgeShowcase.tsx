import React from "react";
import { Badge, BadgeVariant } from "./Badge";

/* ====================================================
   BadgeShowcase — Displays all badge variants, types,
   and emphasis levels for the Components Page.
   Uses the reusable Badge component exclusively.
   ==================================================== */

const ALL_VARIANTS: BadgeVariant[] = [
  "primary",
  "neutral",
  "negative",
  "positive",
  "warning",
  "sale",
];

/** Capitalise first letter for display labels */
function label(v: BadgeVariant) {
  return v.charAt(0).toUpperCase() + v.slice(1);
}

// ─── Shared section heading styles ─────────────────

const h3Style: React.CSSProperties = {
  fontFamily: "'Lato', 'Inter', sans-serif",
  fontSize: "var(--partnerhome-font-size-2000)",
  fontWeight: "var(--partnerhome-font-weight-bold)",
  lineHeight: "var(--partnerhome-line-height-base)",
  color: "var(--partnerhome-text-color-base)",
  marginBottom: "var(--partnerhome-spacing-1000)",
  marginTop: 0,
};

const descStyle: React.CSSProperties = {
  fontFamily: "'Lato', 'Inter', sans-serif",
  fontSize: "var(--partnerhome-font-size-1000)",
  fontWeight: "var(--partnerhome-font-weight-normal)",
  lineHeight: "var(--partnerhome-line-height-base)",
  color: "var(--partnerhome-text-color-base)",
  marginBottom: "var(--partnerhome-spacing-2000)",
  marginTop: 0,
};

const h4Style: React.CSSProperties = {
  fontFamily: "'Lato', 'Inter', sans-serif",
  fontSize: "var(--partnerhome-font-size-1000)",
  fontWeight: "var(--partnerhome-font-weight-bold)",
  lineHeight: "var(--partnerhome-line-height-base)",
  color: "var(--partnerhome-text-color-base)",
  marginBottom: "var(--partnerhome-spacing-1000)",
  marginTop: 0,
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  gap: "var(--partnerhome-spacing-1000)",
  flexWrap: "wrap",
  alignItems: "center",
};

const cardStyle: React.CSSProperties = {
  border: "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
};

export function BadgeShowcase() {
  return (
    <>
      {/* ── Badges - Subtle ────────────────────────── */}
      <div
        className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
        style={cardStyle}
      >
        <h3 style={h3Style}>Badges - Subtle</h3>
        <p style={descStyle}>Subtle badges with light backgrounds.</p>

        {/* Text Badges */}
        <div style={{ marginBottom: "var(--partnerhome-spacing-2000)" }}>
          <h4 style={h4Style}>Text Badges</h4>
          <div style={rowStyle}>
            {ALL_VARIANTS.map((v) => (
              <Badge key={v} variant={v} emphasis="subtle" type="text">
                {label(v)}
              </Badge>
            ))}
          </div>
        </div>

        {/* Numeric Badges */}
        <div style={{ marginBottom: "var(--partnerhome-spacing-2000)" }}>
          <h4 style={h4Style}>Numeric Badges</h4>
          <div style={rowStyle}>
            {ALL_VARIANTS.map((v) => (
              <Badge key={v} variant={v} emphasis="subtle" type="numeric">
                ##
              </Badge>
            ))}
          </div>
        </div>

        {/* Indicator Badges */}
        <div>
          <h4 style={{ ...h4Style, marginBottom: "var(--partnerhome-spacing-2000)" }}>
            Indicator Badges
          </h4>
          <div style={rowStyle}>
            {ALL_VARIANTS.map((v) => (
              <Badge key={v} variant={v} type="indicator" />
            ))}
          </div>
        </div>
      </div>

      {/* ── Badges - Prominent ─────────────────────── */}
      <div
        className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
        style={cardStyle}
      >
        <h3 style={h3Style}>Badges - Prominent</h3>
        <p style={descStyle}>Prominent badges with solid backgrounds.</p>

        {/* Text Badges */}
        <div style={{ marginBottom: "var(--partnerhome-spacing-2000)" }}>
          <h4 style={h4Style}>Text Badges</h4>
          <div style={rowStyle}>
            {ALL_VARIANTS.map((v) => (
              <Badge key={v} variant={v} emphasis="prominent" type="text">
                {label(v)}
              </Badge>
            ))}
          </div>
        </div>

        {/* Numeric Badges */}
        <div style={{ marginBottom: "var(--partnerhome-spacing-2000)" }}>
          <h4 style={h4Style}>Numeric Badges</h4>
          <div style={rowStyle}>
            {ALL_VARIANTS.map((v) => (
              <Badge key={v} variant={v} emphasis="prominent" type="numeric">
                ##
              </Badge>
            ))}
          </div>
        </div>

        {/* Indicator Badges */}
        <div>
          <h4 style={{ ...h4Style, marginBottom: "var(--partnerhome-spacing-2000)" }}>
            Indicator Badges
          </h4>
          <div style={rowStyle}>
            {ALL_VARIANTS.map((v) => (
              <Badge key={v} variant={v} type="indicator" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
