import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DownloadIcon } from "../icons";

/* ====================================================
   KPICard — Reusable KPI summary card component
   ====================================================
   Fully configurable:
   - title, value, description, value color
   - secondary icon-only buttons (32×32) matching ComponentsPage pattern
   - horizontal sliders filter icon from table pages
   - portal-based tooltips on action hover
   ==================================================== */

// ─── Inline SVG: Horizontal Sliders filter icon (from table pages) ───

function SlidersHorizontalIcon({
  size = 18,
  color = "currentColor",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ color, flexShrink: 0 }}
      aria-hidden="true"
    >
      <path
        d="M3 7h4M7 7a2 2 0 104 0M7 7a2 2 0 114 0M11 7h10M3 12h10M13 12a2 2 0 104 0M13 12a2 2 0 114 0M17 12h4M3 17h4M7 17a2 2 0 104 0M7 17a2 2 0 114 0M11 17h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Public types ──────────────────────────────────

export interface KPICardAction {
  /** Unique key for this action */
  key: string;
  /** PH icon element (e.g. <DownloadIcon size={18} />) */
  icon: React.ReactNode;
  /** Accessible label for the action */
  label: string;
  /** Callback when the action button is clicked */
  onClick: () => void;
}

export interface KPICardProps {
  /** Card heading text */
  title: string;
  /** Large metric value (number or formatted string) */
  value: string | number;
  /** Short description to the right of the value */
  description: string;
  /**
   * Semantic token for the value number color, e.g.
   * "var(--partnerhome-text-color-negative)" (error red)
   * "var(--partnerhome-text-color-warning)" (warning amber)
   * "var(--partnerhome-text-color-primary)" (primary purple)
   */
  valueColor?: string;
  /** Action buttons rendered on the right side of the card */
  actions?: KPICardAction[];
  /** Tooltip text shown when hovering the info area (optional) */
  tooltipText?: string;
}

// ─── Default actions helper ────────────────────────

/** Convenience factory: builds the 2 standard table-actions (Download, Filter) */
export function defaultKPIActions(handlers?: {
  onDownload?: () => void;
  onFilter?: () => void;
}): KPICardAction[] {
  return [
    {
      key: "download",
      icon: <DownloadIcon size={24} />,
      label: "Download table data",
      onClick: handlers?.onDownload ?? (() => {}),
    },
    {
      key: "filter",
      icon: <SlidersHorizontalIcon size={24} />,
      label: "Filter table",
      onClick: handlers?.onFilter ?? (() => {}),
    },
  ];
}

// ─── Ghost icon-only button (32×32 condensed) ──

function IconButton({
  action,
  onTooltipShow,
  onTooltipHide,
}: {
  action: KPICardAction;
  onTooltipShow: (
    e: React.MouseEvent<HTMLButtonElement>,
    action: KPICardAction
  ) => void;
  onTooltipHide: () => void;
}) {
  return (
    <button
      key={action.key}
      aria-label={action.label}
      onClick={action.onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.color =
          "var(--partnerhome-text-color-primary-hover)";
        onTooltipShow(e, action);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color =
          "var(--partnerhome-text-color-primary)";
        onTooltipHide();
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "48px",
        height: "48px",
        padding: 0,
        margin: 0,
        background: "transparent",
        border: "none",
        borderRadius: "var(--partnerhome-radius-button)",
        cursor: "pointer",
        color: "var(--partnerhome-text-color-primary)",
        transition: "color 200ms ease",
        fontWeight: "var(--partnerhome-font-weight-normal)",
      }}
    >
      {action.icon}
    </button>
  );
}

// ─── Component ─────────────────────────────────────

export function KPICard({
  title,
  value,
  description,
  valueColor = "var(--partnerhome-text-color-negative)",
  actions,
  tooltipText,
}: KPICardProps) {
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [tooltipLabel, setTooltipLabel] = useState("");

  const handleActionMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement>,
    action: KPICardAction
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top + 6,
    });
    setTooltipLabel(action.label);
    setHoveredAction(action.key);
  };

  const handleActionMouseLeave = () => {
    setHoveredAction(null);
  };

  return (
    <>
      <div
        style={{
          background: "var(--partnerhome-surface-color-base)",
          border:
            "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
          borderRadius: "var(--partnerhome-radius-large)",
          display: "flex",
          flexDirection: "column",
          gap: "0px",
          flex: "1 1 0",
          minWidth: "220px",
          maxWidth: "300px",
          overflow: "hidden",
        }}
      >
        {/* Title row */}
        <div
          style={{
            padding:
              "var(--partnerhome-spacing-2000) var(--partnerhome-spacing-2000) 0",
          }}
        >
          <span
            style={{
              fontFamily: "var(--partnerhome-font-family-base)",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              lineHeight: "var(--partnerhome-line-height-base)",
              color: "var(--partnerhome-text-color-base)",
              margin: 0,
            }}
          >
            {title}
          </span>
        </div>

        {/* Content row: value | description   actions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding:
              "var(--partnerhome-spacing-1000) var(--partnerhome-spacing-2000) var(--partnerhome-spacing-2000)",
            gap: "var(--partnerhome-spacing-1000)",
          }}
        >
          {/* Value */}
          <span
            style={{
              fontFamily: "var(--partnerhome-font-family-base)",
              fontSize: "var(--partnerhome-font-size-3000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              lineHeight: "1",
              color: valueColor,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {value}
          </span>

          {/* Vertical divider */}
          <div
            style={{
              width: "var(--partnerhome-stroke-weights-small)",
              height: "var(--partnerhome-font-size-3000)",
              background: "var(--partnerhome-border-color-base)",
              flexShrink: 0,
            }}
          />

          {/* Description */}
          <span
            style={{
              fontFamily: "var(--partnerhome-font-family-base)",
              fontSize: "var(--partnerhome-font-size-500)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              lineHeight: "var(--partnerhome-line-height-base)",
              color: "var(--partnerhome-text-color-base)",
              flex: "1 1 0",
              minWidth: 0,
            }}
          >
            {description}
          </span>

          {/* Action buttons — ghost icon-only, overlapped for tight spacing */}
          {actions && actions.length > 0 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0px",
                flexShrink: 0,
                marginRight: "-12px",
              }}
            >
              {actions.map((action) => (
                <div key={action.key} style={{ marginLeft: "-12px" }}>
                  <IconButton
                    action={action}
                    onTooltipShow={handleActionMouseEnter}
                    onTooltipHide={handleActionMouseLeave}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action tooltip — portal to body */}
      {hoveredAction !== null &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "fixed",
              left: `${tooltipPos.x}px`,
              top: `${tooltipPos.y}px`,
              transform: "translate(-50%, -100%)",
              pointerEvents: "none",
              zIndex: 10000,
            }}
          >
            <div
              style={{
                background: "var(--partnerhome-surface-color-inverse)",
                color: "var(--partnerhome-text-color-inverse)",
                padding:
                  "var(--partnerhome-spacing-500) var(--partnerhome-spacing-1000)",
                borderRadius: "var(--partnerhome-radius-medium)",
                fontFamily: "var(--partnerhome-font-family-base)",
                fontSize: "var(--partnerhome-font-size-500)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                lineHeight: "var(--partnerhome-line-height-base)",
                whiteSpace: "nowrap",
                boxShadow: "var(--partnerhome-shadow-10)",
              }}
            >
              {tooltipLabel}
            </div>
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop:
                  "5px solid var(--partnerhome-surface-color-inverse)",
                margin: "0 auto",
              }}
            />
          </div>,
          document.body
        )}
    </>
  );
}

// ─── KPICards row — demo / showcase wrapper ────────

export interface KPICardsRowProps {
  cards: KPICardProps[];
}

export function KPICardsRow({ cards }: KPICardsRowProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "var(--partnerhome-spacing-2000)",
        width: "fit-content",
        flexWrap: "wrap",
      }}
    >
      {cards.map((card, i) => (
        <KPICard key={card.title + "-" + i} {...card} />
      ))}
    </div>
  );
}