import React, { useState } from "react";
import { createPortal } from "react-dom";
import svgPaths from "../../../imports/svg-2ileaadwai";

// ── SVG Icon ───────────────────────────────────────────────────────────

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
        d={svgPaths.p771e300}
        stroke={color || "var(--partnerhome-text-color-base-subtle)"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// ── Tooltip (fixed via portal) ─────────────────────────────────────────

function ChartTooltip({
  content,
  position,
}: {
  content: React.ReactNode;
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
        {content}
      </div>
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

function useTooltip() {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onEnter = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPos({ x: rect.left + rect.width / 2, y: rect.top + 6 });
    setShow(true);
  };

  const onLeave = () => setShow(false);

  return { show, pos, onEnter, onLeave };
}

// ── Data ───────────────────────────────────────────────────────────────

interface MonthData {
  month: string;
  shipped: { yes: number; no: number }; // percentages that stack
  cancelled: { yes: number; no: number; noResponse: number };
}

const CHART_DATA: MonthData[] = [
  {
    month: "Dec 18",
    shipped: { yes: 70, no: 28 },
    cancelled: { yes: 27, no: 21, noResponse: 12 },
  },
  {
    month: "Jan 18",
    shipped: { yes: 70, no: 17 },
    cancelled: { yes: 16, no: 21, noResponse: 46 },
  },
  {
    month: "Feb 18",
    shipped: { yes: 58, no: 40 },
    cancelled: { yes: 48, no: 21, noResponse: 10 },
  },
  {
    month: "Mar 18",
    shipped: { yes: 70, no: 17 },
    cancelled: { yes: 16, no: 21, noResponse: 46 },
  },
  {
    month: "Apr 18",
    shipped: { yes: 70, no: 28 },
    cancelled: { yes: 27, no: 21, noResponse: 12 },
  },
  {
    month: "May 18",
    shipped: { yes: 70, no: 17 },
    cancelled: { yes: 16, no: 21, noResponse: 46 },
  },
  {
    month: "Jun 18",
    shipped: { yes: 70, no: 28 },
    cancelled: { yes: 27, no: 21, noResponse: 12 },
  },
];

// Summary data
const SUMMARY = {
  totalPartRequests: 88,
  confirmYes: { total: 63, shipped: 62, cancelled: 1 },
  confirmNo: { total: 19, shipped: 6, cancelled: 13 },
  noResponse: 6,
};

// ── Chart color tokens ─────────────────────────────────────────────────
// Mapping Figma colors to the closest semantic tokens:
const COLORS = {
  shippedYes: "var(--partnerhome-bg-color-positive)", // #245728
  shippedNo: "var(--partnerhome-bg-color-positive-subtle)", // #B3DBB3
  cancelledYes: "var(--partnerhome-core-80)", // #3B153F (no bg semantic)
  cancelledNo: "var(--partnerhome-core-40)", // #976397 (no bg semantic)
  cancelledNoResponse: "var(--partnerhome-bg-color-tertiary)", // #DBC5DB
};

// ── Summary Card ───────────────────────────────────────────────────────

interface SummaryCardProps {
  title: string;
  value: string | number;
  subDetails?: { label: string; value: number }[];
  tooltipText?: string;
}

function SummaryCard({ title, value, subDetails, tooltipText }: SummaryCardProps) {
  const tooltip = useTooltip();

  return (
    <div
      style={{
        flex: "1 1 0",
        minWidth: 0,
        position: "relative",
        borderRadius: "var(--partnerhome-radius-large)",
      }}
    >
      {/* Inset border */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          border:
            "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-lighter-grey)",
          borderRadius: "var(--partnerhome-radius-large)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--partnerhome-spacing-250)",
          padding:
            "var(--partnerhome-spacing-1000) var(--partnerhome-spacing-1500)",
          boxSizing: "border-box",
        }}
      >
        {/* Title + info icon */}
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
              lineHeight: "20px",
              color: "var(--partnerhome-text-color-base-subtle)",
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
                flexShrink: 0,
              }}
              onMouseEnter={tooltip.onEnter}
              onMouseLeave={tooltip.onLeave}
            >
              <InfoIconStroke />
            </div>
          )}
        </div>

        {/* Value row */}
        <div
          style={{
            display: "flex",
            gap: "var(--partnerhome-spacing-1000)",
            alignItems: "center",
            padding: "var(--partnerhome-spacing-500) 0",
          }}
        >
          <span
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-3000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              lineHeight: "40px",
              color: "var(--partnerhome-text-color-base)",
              margin: 0,
            }}
          >
            {value}
          </span>
          {subDetails && subDetails.length > 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {subDetails.map((detail) => (
                <span
                  key={detail.label}
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-500)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    lineHeight: "16px",
                    color: "var(--partnerhome-text-color-base-subtle)",
                    margin: 0,
                  }}
                >
                  {detail.label}: {detail.value}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tooltip via portal */}
      {tooltip.show &&
        tooltipText &&
        createPortal(
          <ChartTooltip content={tooltipText} position={tooltip.pos} />,
          document.body
        )}
    </div>
  );
}

// ── Bar Segment ────────────────────────────────────────────────────────

interface BarSegmentProps {
  heightPercent: number; // % of chart height
  color: string;
  label: string;
  value: number;
  maxHeight: number; // chart area height in px
  isTop?: boolean; // top-most segment gets rounded corners
}

function BarSegment({
  heightPercent,
  color,
  label,
  value,
  maxHeight,
  isTop,
}: BarSegmentProps) {
  const tooltip = useTooltip();
  const pxHeight = (heightPercent / 100) * maxHeight;

  if (heightPercent <= 0) return null;

  return (
    <>
      <div
        style={{
          width: "100%",
          height: `${pxHeight}px`,
          background: color,
          borderRadius: isTop ? "2px 2px 0 0" : undefined,
          cursor: "pointer",
          flexShrink: 0,
        }}
        onMouseEnter={tooltip.onEnter}
        onMouseLeave={tooltip.onLeave}
      />
      {tooltip.show &&
        createPortal(
          <ChartTooltip
            content={
              <span
                style={{
                  color: "var(--partnerhome-text-color-inverse)",
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-500)",
                  fontWeight: "var(--partnerhome-font-weight-normal)",
                  lineHeight: "16px",
                }}
              >
                {label}: {value}%
              </span>
            }
            position={tooltip.pos}
          />,
          document.body
        )}
    </>
  );
}

// ── Stacked Bar ────────────────────────────────────────────────────────

interface StackedBarProps {
  segments: { heightPercent: number; color: string; label: string; value: number }[];
  chartHeight: number;
}

function StackedBar({ segments, chartHeight }: StackedBarProps) {
  const totalPercent = segments.reduce((sum, s) => sum + s.heightPercent, 0);
  const barHeight = (totalPercent / 100) * chartHeight;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "10px",
        height: `${barHeight}px`,
        alignItems: "stretch",
        overflow: "hidden",
        borderRadius: "2px 2px 0 0",
        flexShrink: 0,
      }}
    >
      {/* Render segments top-to-bottom (first segment = top of stack) */}
      {segments.map((seg, i) => (
        <BarSegment
          key={seg.label}
          heightPercent={seg.heightPercent}
          color={seg.color}
          label={seg.label}
          value={seg.value}
          maxHeight={chartHeight}
          isTop={i === 0}
        />
      ))}
    </div>
  );
}

// ── Y-Axis ─────────────────────────────────────────────────────────────

const Y_LABELS = ["100%", "80%", "60%", "40%", "20%", "0"];
const CHART_HEIGHT = 145; // px, matches Figma
const GRID_LINES = 6; // 0, 20, 40, 60, 80, 100

// ── Main Component ─────────────────────────────────────────────────────

export function PartRequestResponseBreakdown() {
  return (
    <div
      style={{
        background: "var(--partnerhome-surface-color-base)",
        borderRadius: "8px",
        position: "relative",
        width: "100%",
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
          borderRadius: "8px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--partnerhome-spacing-2000)",
          padding:
            "var(--partnerhome-spacing-3000) var(--partnerhome-spacing-4000)",
          boxSizing: "border-box",
        }}
      >
        {/* Title */}
        <div
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-2000)",
            fontWeight: "var(--partnerhome-font-weight-bold)",
            lineHeight: "20px",
            color: "var(--partnerhome-text-color-base)",
            margin: 0,
          }}
        >
          Part Request Response Breakdown
        </div>

        {/* Summary Cards Row */}
        <div
          style={{
            display: "flex",
            gap: "var(--partnerhome-spacing-1500)",
            alignItems: "stretch",
            width: "100%",
          }}
        >
          <SummaryCard
            title="Total Part Requests"
            value={SUMMARY.totalPartRequests}
            tooltipText="Total number of part requests in the selected period"
          />
          <SummaryCard
            title="Confirm: Yes"
            value={SUMMARY.confirmYes.total}
            subDetails={[
              { label: "Shipped", value: SUMMARY.confirmYes.shipped },
              { label: "Cancelled", value: SUMMARY.confirmYes.cancelled },
            ]}
            tooltipText="Part requests that were confirmed by the partner"
          />
          <SummaryCard
            title="Confirm: No"
            value={SUMMARY.confirmNo.total}
            subDetails={[
              { label: "Shipped", value: SUMMARY.confirmNo.shipped },
              { label: "Cancelled", value: SUMMARY.confirmNo.cancelled },
            ]}
            tooltipText="Part requests that were declined by the partner"
          />
          <SummaryCard
            title="No Response"
            value={SUMMARY.noResponse}
            tooltipText="Part requests with no partner response"
          />
        </div>

        {/* Chart Area */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Graph + Y-axis */}
          <div style={{ display: "flex", width: "100%", gap: "var(--partnerhome-spacing-1000)" }}>
            {/* Y-axis labels */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                width: "42px",
                flexShrink: 0,
              }}
            >
              {/* Y-axis title */}
              <div
                style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-500)",
                  fontWeight: "var(--partnerhome-font-weight-normal)",
                  lineHeight: "16px",
                  color: "var(--partnerhome-text-color-base-subtle)",
                  textAlign: "center",
                  marginBottom: "var(--partnerhome-spacing-500)",
                  whiteSpace: "nowrap",
                }}
              >
                Response Rate (%)
              </div>

              {/* Labels */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: `${CHART_HEIGHT}px`,
                }}
              >
                {Y_LABELS.map((label) => (
                  <span
                    key={label}
                    style={{
                      fontFamily: "'Lato', 'Inter', sans-serif",
                      fontSize: "var(--partnerhome-font-size-500)",
                      fontWeight: "var(--partnerhome-font-weight-normal)",
                      lineHeight: "16px",
                      color: "var(--partnerhome-text-color-base-subtle)",
                      textAlign: "right",
                      margin: 0,
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Chart plot area */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Spacer for y-axis title alignment */}
              <div
                style={{
                  height: "20px",
                  flexShrink: 0,
                }}
              />

              {/* Grid + bars area */}
              <div
                style={{
                  position: "relative",
                  height: `${CHART_HEIGHT}px`,
                }}
              >
                {/* Horizontal grid lines */}
                {Array.from({ length: GRID_LINES }).map((_, i) => {
                  const yPos = (i / (GRID_LINES - 1)) * CHART_HEIGHT;
                  const isBase = i === GRID_LINES - 1;
                  return (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        top: `${yPos}px`,
                        left: 0,
                        right: 0,
                        height: "1px",
                        background: isBase
                          ? "var(--partnerhome-border-color-light-medium-grey)"
                          : "var(--partnerhome-border-color-lighter-grey)",
                      }}
                    />
                  );
                })}

                {/* Vertical y-axis line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: "1px",
                    background:
                      "var(--partnerhome-border-color-light-medium-grey)",
                  }}
                />

                {/* Bar groups */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "flex-end",
                    paddingLeft: "var(--partnerhome-spacing-2000)",
                    paddingRight: "var(--partnerhome-spacing-2000)",
                  }}
                >
                  {CHART_DATA.map((data) => {
                    // Shipped bar segments: No (light, top) → Yes (dark, bottom)
                    const shippedSegments = [
                      {
                        heightPercent: data.shipped.no,
                        color: COLORS.shippedNo,
                        label: "Shipped No",
                        value: data.shipped.no,
                      },
                      {
                        heightPercent: data.shipped.yes,
                        color: COLORS.shippedYes,
                        label: "Shipped Yes",
                        value: data.shipped.yes,
                      },
                    ];

                    // Cancelled bar segments: NoResponse (light, top) → No (mid) → Yes (dark, bottom)
                    const cancelledSegments = [
                      {
                        heightPercent: data.cancelled.noResponse,
                        color: COLORS.cancelledNoResponse,
                        label: "No response",
                        value: data.cancelled.noResponse,
                      },
                      {
                        heightPercent: data.cancelled.no,
                        color: COLORS.cancelledNo,
                        label: "Cancelled No",
                        value: data.cancelled.no,
                      },
                      {
                        heightPercent: data.cancelled.yes,
                        color: COLORS.cancelledYes,
                        label: "Cancelled Yes",
                        value: data.cancelled.yes,
                      },
                    ];

                    return (
                      <div
                        key={data.month}
                        style={{
                          display: "flex",
                          gap: "6px",
                          alignItems: "flex-end",
                          height: "100%",
                        }}
                      >
                        <StackedBar
                          segments={shippedSegments}
                          chartHeight={CHART_HEIGHT}
                        />
                        <StackedBar
                          segments={cancelledSegments}
                          chartHeight={CHART_HEIGHT}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* X-axis labels */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingLeft: "var(--partnerhome-spacing-2000)",
                  paddingRight: "var(--partnerhome-spacing-2000)",
                  marginTop: "var(--partnerhome-spacing-1000)",
                }}
              >
                {CHART_DATA.map((data) => (
                  <span
                    key={data.month}
                    style={{
                      fontFamily: "'Lato', 'Inter', sans-serif",
                      fontSize: "var(--partnerhome-font-size-500)",
                      fontWeight: "var(--partnerhome-font-weight-normal)",
                      lineHeight: "16px",
                      color: "var(--partnerhome-text-color-base-subtle)",
                      textAlign: "center",
                      margin: 0,
                      width: "40px",
                    }}
                  >
                    {data.month}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div
            style={{
              display: "flex",
              gap: "60px",
              alignItems: "center",
              paddingLeft: "var(--partnerhome-spacing-4000)",
              paddingTop: "var(--partnerhome-spacing-2000)",
            }}
          >
            {/* Shipped group */}
            <div
              style={{
                display: "flex",
                gap: "var(--partnerhome-spacing-2000)",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-500)",
                  fontWeight: "var(--partnerhome-font-weight-bold)",
                  lineHeight: "16px",
                  color: "var(--partnerhome-text-color-base)",
                  margin: 0,
                  width: "50px",
                }}
              >
                Shipped
              </span>
              <LegendItem color={COLORS.shippedYes} label="Yes" />
              <LegendItem color={COLORS.shippedNo} label="No" />
            </div>

            {/* Cancelled group */}
            <div
              style={{
                display: "flex",
                gap: "var(--partnerhome-spacing-2000)",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-500)",
                  fontWeight: "var(--partnerhome-font-weight-bold)",
                  lineHeight: "16px",
                  color: "var(--partnerhome-text-color-base)",
                  margin: 0,
                  width: "50px",
                }}
              >
                Cancelled
              </span>
              <LegendItem color={COLORS.cancelledYes} label="Yes" />
              <LegendItem color={COLORS.cancelledNo} label="No" />
              <LegendItem
                color={COLORS.cancelledNoResponse}
                label="No response"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Legend Item ─────────────────────────────────────────────────────────

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "var(--partnerhome-spacing-250)",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "var(--partnerhome-radius-medium)",
          background: color,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "'Lato', 'Inter', sans-serif",
          fontSize: "var(--partnerhome-font-size-500)",
          fontWeight: "var(--partnerhome-font-weight-normal)",
          lineHeight: "16px",
          color: "var(--partnerhome-text-color-base-subtle)",
          margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
}