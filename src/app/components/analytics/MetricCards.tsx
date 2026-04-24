import React, { useState } from "react";
import { createPortal } from "react-dom";
import infoStrokePaths from "../../../imports/svg-ttbjvldsrh";
import infoFilledPaths from "../../../imports/svg-dfzew4kg5e";
import warningPaths from "../../../imports/svg-2l3iuzavv8";

// ── SVG Icon Components ────────────────────────────────────────────────

/** Stroke-style info circle icon (used in Action & Analytics cards) */
function InfoIconStroke({ color }: { color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path
        d={infoStrokePaths.p771e300}
        stroke={color || "var(--partnerhome-text-color-base)"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/** Filled info circle icon (used in Dashboard cards) */
function InfoIconFilled() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path
        d={infoFilledPaths.p23eaee00}
        fill="var(--partnerhome-text-color-base-subtle)"
      />
    </svg>
  );
}

/** Trend-up icon (used in Dashboard cards) */
function TrendUpIcon({ color }: { color: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path
        d={infoFilledPaths.p4146280}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/** Trend-down icon (mirror of trend-up) */
function TrendDownIcon({ color }: { color: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: "block", flexShrink: 0, transform: "scaleY(-1)" }}
    >
      <path
        d={infoFilledPaths.p4146280}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/** Warning diamond icon (used in Analytics cards) */
function WarningDiamondIcon() {
  return (
    <div
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "12px",
        background: "var(--partnerhome-bg-color-negative-subtle)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg
        width="19.2"
        height="19.2"
        viewBox="0 0 19.2 19.2"
        fill="none"
        style={{ display: "block" }}
      >
        <path
          d={warningPaths.p396c9480}
          stroke="var(--partnerhome-text-color-negative)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  );
}

/** Chevron-up icon for change badges */
function ChevronUpIcon({ color }: { color: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path
        d="M7 13.5L12 8.5L17 13.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/** Chevron-down icon for change badges */
function ChevronDownIcon({ color }: { color: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path
        d="M7 10.5L12 15.5L17 10.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// ── Shared Tooltip ─────────────────────────────────────────────────────

function InfoTooltip({
  text,
  position,
}: {
  text: string;
  position: { x: number; y: number };
}) {
  return (
    <div
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -100%)",
        pointerEvents: "none",
        zIndex: 10000,
      }}
    >
      {/* Tooltip body */}
      <div
        style={{
          background: "var(--partnerhome-surface-color-inverse)",
          color: "var(--partnerhome-text-color-inverse)",
          padding:
            "var(--partnerhome-spacing-1000) var(--partnerhome-spacing-2000)",
          borderRadius: "var(--partnerhome-radius-medium)",
          fontFamily: "'Lato', 'Inter', sans-serif",
          fontSize: "var(--partnerhome-font-size-500)",
          fontWeight: "var(--partnerhome-font-weight-normal)",
          lineHeight: "var(--partnerhome-line-height-base)",
          boxShadow: "var(--partnerhome-shadow-10)",
          maxWidth: "280px",
          whiteSpace: "normal",
        }}
      >
        {text}
      </div>
      {/* Pointer triangle */}
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderTop: "6px solid var(--partnerhome-surface-color-inverse)",
          margin: "0 auto",
        }}
      />
    </div>
  );
}

function useInfoTooltip() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top + 4,
    });
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return { showTooltip, tooltipPos, handleMouseEnter, handleMouseLeave };
}

// ═══════════════════════════════════════════════════════════════════════
// VARIANT 1: ACTION METRIC CARDS (Orders-style)
// ═══════════════════════════════════════════════════════════════════════

interface ActionMetricCardProps {
  category: string;
  title: string;
  value: string;
  linkText: string;
  tooltipText?: string;
  onLinkClick?: () => void;
}

function ActionMetricCard({
  category,
  title,
  value,
  linkText,
  tooltipText,
  onLinkClick,
}: ActionMetricCardProps) {
  const { showTooltip, tooltipPos, handleMouseEnter, handleMouseLeave } =
    useInfoTooltip();

  return (
    <>
      <div
        style={{
          background: "var(--partnerhome-surface-color-base)",
          borderRadius: "var(--partnerhome-radius-large)",
          width: "312px",
          height: "124px",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding:
              "var(--partnerhome-spacing-1000) var(--partnerhome-spacing-2000)",
            borderRadius: "inherit",
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          {/* Top section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--partnerhome-spacing-500)",
              width: "100%",
            }}
          >
            {/* Category + Info icon row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <span
                style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-500)",
                  fontWeight: "var(--partnerhome-font-weight-bold)",
                  lineHeight: "20px",
                  color: "var(--partnerhome-text-color-base-subtle)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  margin: 0,
                }}
              >
                {category}
              </span>
              {tooltipText && (
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <InfoIconStroke />
                </div>
              )}
            </div>

            {/* Title */}
            <div
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                lineHeight: "16px",
                color: "var(--partnerhome-text-color-base)",
                margin: 0,
              }}
            >
              {title}
            </div>

            {/* Value */}
            <div
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-3000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                lineHeight: "16px",
                color: "var(--partnerhome-text-color-base)",
                margin: 0,
              }}
            >
              {value}
            </div>
          </div>

          {/* Bottom link */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "24px",
            }}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onLinkClick?.();
              }}
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                lineHeight: "20px",
                color: "var(--partnerhome-text-color-primary)",
                textDecoration: "underline",
                cursor: "pointer",
                margin: 0,
              }}
            >
              {linkText}
            </a>
          </div>
        </div>

        {/* Inset border overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            border:
              "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
            borderRadius: "var(--partnerhome-radius-large)",
            pointerEvents: "none",
          }}
        />
      </div>

      {showTooltip && tooltipText && (
        <InfoTooltip text={tooltipText} position={tooltipPos} />
      )}
    </>
  );
}

/** Set of Action Metric Cards (Orders) */
export function ActionMetricCards() {
  return (
    <div
      style={{
        display: "flex",
        gap: "var(--partnerhome-spacing-3000)",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <ActionMetricCard
        category="ORDERS"
        title="Overdues Orders"
        value="10"
        linkText="View Overdue Orders"
        tooltipText="Orders that have passed their expected delivery date"
      />
      <ActionMetricCard
        category="ORDERS"
        title="Cancelled Orders"
        value="2"
        linkText="View Cancelled Orders"
        tooltipText="Orders cancelled in the current period"
      />
      <ActionMetricCard
        category="ORDERS"
        title="Unconfirmed Replacement Parts"
        value="50"
        linkText="View Unconfirmed Replacement Parts"
        tooltipText="Replacement parts awaiting confirmation"
      />
      <ActionMetricCard
        category="ORDERS"
        title="Unshipped Replacement Parts"
        value="5"
        linkText="View Unshipped Replacement Parts"
        tooltipText="Replacement parts that have not yet shipped"
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// VARIANT 2: DASHBOARD METRIC CARDS (Retail RoAS-style)
// ═══════════════════════════════════════════════════════════════════════

interface DashboardMetricCardProps {
  title: string;
  value: string;
  trendValue: string;
  trendDirection: "up" | "down";
  trendPeriod: string;
  tooltipText?: string;
}

function DashboardMetricCard({
  title,
  value,
  trendValue,
  trendDirection,
  trendPeriod,
  tooltipText,
}: DashboardMetricCardProps) {
  const { showTooltip, tooltipPos, handleMouseEnter, handleMouseLeave } =
    useInfoTooltip();

  const trendColor =
    trendDirection === "up"
      ? "var(--partnerhome-text-color-positive)"
      : "var(--partnerhome-text-color-negative)";

  return (
    <>
      <div
        style={{
          background: "var(--partnerhome-surface-color-base)",
          borderRadius: "var(--partnerhome-radius-large)",
          flex: "1 1 0",
          minWidth: "180px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--partnerhome-spacing-1000)",
            padding:
              "var(--partnerhome-spacing-1500) var(--partnerhome-spacing-2000)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Title + Info icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                lineHeight: "24px",
                color: "var(--partnerhome-text-color-base-subtle)",
                flex: "1 1 0",
                margin: 0,
              }}
            >
              {title}
            </span>
            {tooltipText && (
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <InfoIconStroke />
              </div>
            )}
          </div>

          {/* Large value */}
          <div
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-3000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              lineHeight: "36px",
              color: "var(--partnerhome-text-color-base)",
              margin: 0,
            }}
          >
            {value}
          </div>

          {/* Trend indicator */}
          <div
            style={{
              display: "flex",
              gap: "var(--partnerhome-spacing-500)",
              alignItems: "center",
            }}
          >
            {trendDirection === "up" ? (
              <TrendUpIcon color={trendColor} />
            ) : (
              <TrendDownIcon color={trendColor} />
            )}
            <span
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                lineHeight: "24px",
                color: trendColor,
                margin: 0,
              }}
            >
              {trendValue}
            </span>
            <span
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-500)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                lineHeight: "19.5px",
                color: "var(--partnerhome-text-color-base-subtle)",
                margin: 0,
              }}
            >
              {trendPeriod}
            </span>
          </div>
        </div>
      </div>

      {showTooltip && tooltipText && (
        <InfoTooltip text={tooltipText} position={tooltipPos} />
      )}
    </>
  );
}

/** Set of Dashboard Metric Cards (Retail) */
export function DashboardMetricCards() {
  return (
    <div
      style={{
        display: "flex",
        gap: "var(--partnerhome-spacing-1500)",
        alignItems: "flex-start",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <DashboardMetricCard
        title="Retail RoAS"
        value="17.6x"
        trendValue="3.5%"
        trendDirection="up"
        trendPeriod="in last 28 days"
        tooltipText="Return on Ad Spend for retail campaigns"
      />
      <DashboardMetricCard
        title="Retail Revenue"
        value="$259,456"
        trendValue="3.5%"
        trendDirection="up"
        trendPeriod="in last 28 days"
        tooltipText="Total revenue from retail advertising"
      />
      <DashboardMetricCard
        title="Spend"
        value="$10,376"
        trendValue="3.5%"
        trendDirection="up"
        trendPeriod="in last 28 days"
        tooltipText="Total ad spend in the selected period"
      />
      <DashboardMetricCard
        title="Impressions"
        value="69,456"
        trendValue="3.5%"
        trendDirection="up"
        trendPeriod="in last 28 days"
        tooltipText="Total ad impressions in the selected period"
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// VARIANT 3: ANALYTICS METRIC CARDS (Incidents-style)
// ═══════════════════════════════════════════════════════════════════════

interface ChangeBadge {
  value: string;
  direction: "up" | "down";
}

interface AnalyticsMetricCardProps {
  title: string;
  value: string;
  valueColor?: "default" | "negative";
  description?: string;
  statusIcon?: "warning";
  changeBadge?: ChangeBadge;
  changeDescription?: string;
  tooltipText?: string;
}

function AnalyticsMetricCard({
  title,
  value,
  valueColor = "default",
  description,
  statusIcon,
  changeBadge,
  changeDescription,
  tooltipText,
}: AnalyticsMetricCardProps) {
  const { showTooltip, tooltipPos, handleMouseEnter, handleMouseLeave } =
    useInfoTooltip();

  const valueColorToken =
    valueColor === "negative"
      ? "var(--partnerhome-text-color-negative)"
      : "var(--partnerhome-text-color-base)";

  return (
    <div
      style={{
        background: "var(--partnerhome-surface-color-base)",
        borderRadius: "var(--partnerhome-radius-large)",
        flex: "1 1 0",
        minWidth: "200px",
        position: "relative",
      }}
    >
      {/* Inset border */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          border:
            "0.5px solid var(--partnerhome-border-color-base)",
          borderRadius: "var(--partnerhome-radius-large)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--partnerhome-spacing-500)",
          padding:
            "var(--partnerhome-spacing-1500) var(--partnerhome-spacing-2000) var(--partnerhome-spacing-2000)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Title row — flex-start keeps info icon pinned to top when title wraps */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "var(--partnerhome-spacing-500)",
              alignItems: "center",
            }}
          >
            {statusIcon === "warning" && <WarningDiamondIcon />}
            <span
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                lineHeight: "20px",
                color: "var(--partnerhome-text-color-base-subtle)",
                margin: 0,
              }}
            >
              {title}
            </span>
          </div>
          {tooltipText && (
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <InfoIconStroke color="var(--partnerhome-text-color-base-subtle)" />
            </div>
          )}
        </div>

        {/* Value + description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--partnerhome-spacing-250)",
          }}
        >
          {/* Large value */}
          <div
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-3000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              lineHeight: "40px",
              color: valueColorToken,
              margin: 0,
            }}
          >
            {value}
          </div>

          {/* Change badge + description row */}
          {(changeBadge || description) && (
            <div
              style={{
                display: "flex",
                gap: "var(--partnerhome-spacing-1000)",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              {changeBadge && (
                <div
                  style={{
                    display: "flex",
                    gap: "var(--partnerhome-spacing-500)",
                    alignItems: "center",
                    background: "var(--partnerhome-bg-color-negative-subtle)",
                    borderRadius: "var(--partnerhome-radius-base)",
                    padding:
                      "0 var(--partnerhome-spacing-500)",
                    flexShrink: 0,
                  }}
                >
                  {changeBadge.direction === "up" ? (
                    <ChevronUpIcon color="var(--partnerhome-text-color-negativeactive)" />
                  ) : (
                    <ChevronDownIcon color="var(--partnerhome-text-color-negativeactive)" />
                  )}
                  <span
                    style={{
                      fontFamily: "'Lato', 'Inter', sans-serif",
                      fontSize: "var(--partnerhome-font-size-500)",
                      fontWeight: "var(--partnerhome-font-weight-normal)",
                      lineHeight: "16px",
                      color: "var(--partnerhome-text-color-negativeactive)",
                      margin: 0,
                    }}
                  >
                    {changeBadge.value}
                  </span>
                </div>
              )}
              {(changeDescription || description) && (
                <div
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-500)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    lineHeight: "16px",
                    color: "var(--partnerhome-text-color-base-subtle)",
                    margin: 0,
                    padding: "var(--partnerhome-spacing-250) 0",
                  }}
                >
                  {changeDescription || description}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Tooltip rendered via portal to escape all overflow/stacking contexts */}
      {showTooltip && tooltipText &&
        createPortal(
          <InfoTooltip text={tooltipText} position={tooltipPos} />,
          document.body
        )}
    </div>
  );
}

/** Set of Analytics Metric Cards (Incidents) */
export function AnalyticsMetricCards() {
  return (
    <div
      style={{
        display: "flex",
        gap: "var(--partnerhome-spacing-2000)",
        alignItems: "stretch",
        width: "100%",
        flexWrap: "nowrap",
      }}
    >
      <AnalyticsMetricCard
        title="Damage & Defect Allowance (DDA)"
        value="3.00%"
        description="Changed from 2% to 3% on Feb 18, 2025."
        tooltipText="The allowable damage and defect rate threshold"
      />
      <AnalyticsMetricCard
        title="Damage & Defect Incident"
        value="5.46%"
        valueColor="negative"
        statusIcon="warning"
        changeBadge={{ value: "- 2.00%", direction: "up" }}
        changeDescription="vs. Gross Incident Exposure (GIE) % of wholesale cost"
        tooltipText="Current damage and defect incident rate"
      />
      <AnalyticsMetricCard
        title="Overall Incident"
        value="8.10%"
        description="(Potential next steps/ comparison data/ trends)"
        tooltipText="Overall incident rate across all categories"
      />
      <AnalyticsMetricCard
        title="Buyers' Remorse Return"
        value="2.23%"
        description="(Potential next steps/ comparison data/ trends)"
        tooltipText="Rate of returns due to buyer's remorse"
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// MAIN EXPORT: Metric Cards Section (all three variants)
// ═══════════════════════════════════════════════════════════════════════

export function MetricCardsSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--partnerhome-spacing-5000)",
        width: "100%",
      }}
    >
      {/* Variant 1: Action Metric Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--partnerhome-spacing-2000)",
        }}
      >
        <h3
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-2000)",
            fontWeight: "var(--partnerhome-font-weight-bold)",
            lineHeight: "var(--partnerhome-line-height-base)",
            color: "var(--partnerhome-text-color-base)",
            margin: 0,
          }}
        >
          Action Metric Cards
        </h3>
        <p
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            lineHeight: "var(--partnerhome-line-height-base)",
            color: "var(--partnerhome-text-color-base-subtle)",
            margin: 0,
          }}
        >
          Fixed-width cards with category labels, values, and actionable links.
          Used for order management dashboards.
        </p>
        <ActionMetricCards />
      </div>

      {/* Variant 2: Dashboard Metric Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--partnerhome-spacing-2000)",
        }}
      >
        <h3
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-2000)",
            fontWeight: "var(--partnerhome-font-weight-bold)",
            lineHeight: "var(--partnerhome-line-height-base)",
            color: "var(--partnerhome-text-color-base)",
            margin: 0,
          }}
        >
          Dashboard Metric Cards
        </h3>
        <p
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            lineHeight: "var(--partnerhome-line-height-base)",
            color: "var(--partnerhome-text-color-base-subtle)",
            margin: 0,
          }}
        >
          Flexible-width cards with KPI values and trend indicators. Used for
          advertising and retail analytics dashboards.
        </p>
        <DashboardMetricCards />
      </div>

      {/* Variant 3: Analytics Metric Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--partnerhome-spacing-2000)",
        }}
      >
        <h3
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-2000)",
            fontWeight: "var(--partnerhome-font-weight-bold)",
            lineHeight: "var(--partnerhome-line-height-base)",
            color: "var(--partnerhome-text-color-base)",
            margin: 0,
          }}
        >
          Analytics Metric Cards
        </h3>
        <p
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            lineHeight: "var(--partnerhome-line-height-base)",
            color: "var(--partnerhome-text-color-base-subtle)",
            margin: 0,
          }}
        >
          Flexible-width cards with status indicators, change badges, and
          descriptive context. Used for incident and quality analytics.
        </p>
        <AnalyticsMetricCards />
      </div>
    </div>
  );
}