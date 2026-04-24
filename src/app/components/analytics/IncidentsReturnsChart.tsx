import React, { useState, useRef, useCallback, useMemo } from "react";

// ── Data ──────────────────────────────────────────────────────────────
interface DataPoint {
  label: string; // x-axis label
  fullDate: string; // tooltip header
  ddaAllowance: number;
  ddIncident: number;
  overallIncident: number;
  buyersRemorse: number;
}

const CHART_DATA: DataPoint[] = [
  { label: "Dec 18", fullDate: "Dec 18, 2024", ddaAllowance: 2.2, ddIncident: 2.1, overallIncident: 1.5, buyersRemorse: 2.1 },
  { label: "Jan 18", fullDate: "Jan 18, 2025", ddaAllowance: 2.2, ddIncident: 1.5, overallIncident: 1.5, buyersRemorse: 1.2 },
  { label: "Feb 18", fullDate: "Feb 18, 2025", ddaAllowance: 3.12, ddIncident: 3.5, overallIncident: 2.6, buyersRemorse: 2.5 },
  { label: "Mar 18", fullDate: "Mar 18, 2025", ddaAllowance: 3.12, ddIncident: 3.5, overallIncident: 3.5, buyersRemorse: 1.0 },
  { label: "Apr 18", fullDate: "Apr 18, 2025", ddaAllowance: 3.12, ddIncident: 4.7, overallIncident: 4.8, buyersRemorse: 4.0 },
  { label: "May 18", fullDate: "May 18, 2025", ddaAllowance: 3.12, ddIncident: 3.2, overallIncident: 3.5, buyersRemorse: 2.5 },
  { label: "Jun 18", fullDate: "Jun 18, 2025", ddaAllowance: 3.12, ddIncident: 3.5, overallIncident: 3.2, buyersRemorse: 1.0 },
];

const Y_MAX = 5;
const Y_LABELS = ["5%", "4%", "3%", "2%", "1%", "0"];

interface SeriesConfig {
  key: keyof DataPoint;
  label: string;
  color: string; // CSS var
  colorHex: string; // for SVG stroke (CSS vars in SVG can be tricky)
  dashed?: boolean;
  hasPoints?: boolean;
}

const SERIES: SeriesConfig[] = [
  {
    key: "ddaAllowance",
    label: "Damage & defect allowance",
    color: "var(--partnerhome-border-color-light-medium-grey)",
    colorHex: "#93939A",
    dashed: true,
    hasPoints: false,
  },
  {
    key: "ddIncident",
    label: "Damage & defect incident",
    color: "var(--partnerhome-text-color-primary)",
    colorHex: "#66256A",
    hasPoints: true,
  },
  {
    key: "overallIncident",
    label: "Overall incident",
    color: "var(--partnerhome-text-color-positive)",
    colorHex: "#245728",
    hasPoints: true,
  },
  {
    key: "buyersRemorse",
    label: "Buyers' remorse return",
    color: "var(--partnerhome-text-color-accent)",
    colorHex: "#F6B71D",
    hasPoints: true,
  },
];

// ── Helpers ────────────────────────────────────────────────────────────
const CHART_PADDING_LEFT = 40; // y-axis label area
const CHART_PADDING_RIGHT = 10;
const CHART_PADDING_TOP = 20;
const CHART_HEIGHT = 160; // plot area height
const CHART_PADDING_BOTTOM = 0;

function valueToY(value: number): number {
  return CHART_PADDING_TOP + CHART_HEIGHT - (value / Y_MAX) * CHART_HEIGHT;
}

// ── Component ──────────────────────────────────────────────────────────
export function IncidentsReturnsChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const dataCount = CHART_DATA.length;

  // SVG viewBox dimensions
  const svgWidth = 1000;
  const plotLeft = 0;
  const plotRight = svgWidth;
  const plotWidth = plotRight - plotLeft;

  const getX = useCallback(
    (index: number) => {
      if (dataCount <= 1) return plotLeft;
      return plotLeft + (index / (dataCount - 1)) * plotWidth;
    },
    [dataCount, plotLeft, plotWidth]
  );

  // Build SVG path for a series
  const buildPath = useCallback(
    (seriesKey: keyof DataPoint, dashed: boolean) => {
      const points = CHART_DATA.map((d, i) => {
        const x = getX(i);
        const y = valueToY(d[seriesKey] as number);
        return { x, y };
      });

      // DDA allowance has a step: flat then jumps
      if (dashed && seriesKey === "ddaAllowance") {
        // Find the step point (between index 1 and 2 where value changes)
        const segments: string[] = [];
        let prevX = points[0].x;
        let prevY = points[0].y;
        segments.push(`M ${prevX} ${prevY}`);

        for (let i = 1; i < points.length; i++) {
          const currX = points[i].x;
          const currY = points[i].y;
          if (Math.abs(currY - prevY) > 0.5) {
            // Step: draw horizontal to midpoint, then vertical, then horizontal
            const midX = (prevX + currX) / 2;
            segments.push(`L ${midX} ${prevY}`);
            segments.push(`L ${midX} ${currY}`);
            segments.push(`L ${currX} ${currY}`);
          } else {
            segments.push(`L ${currX} ${currY}`);
          }
          prevX = currX;
          prevY = currY;
        }
        return segments.join(" ");
      }

      return points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
    },
    [getX]
  );

  // Grid lines (horizontal)
  const gridLines = useMemo(() => {
    const lines: { y: number; label: string }[] = [];
    for (let v = 0; v <= Y_MAX; v++) {
      lines.push({ y: valueToY(v), label: `${v}%` });
    }
    return lines;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      // The chart area starts after y-axis labels
      const yAxisWidth = 40; // approximate
      const chartAreaLeft = rect.left + yAxisWidth;
      const chartAreaWidth = rect.width - yAxisWidth - 10;

      const relX = e.clientX - chartAreaLeft;
      const pct = relX / chartAreaWidth;

      // Find nearest data point
      const rawIndex = pct * (dataCount - 1);
      const nearest = Math.round(rawIndex);
      const clamped = Math.max(0, Math.min(dataCount - 1, nearest));

      setHoveredIndex(clamped);
    },
    [dataCount]
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const svgViewBox = `0 0 ${svgWidth} ${CHART_PADDING_TOP + CHART_HEIGHT + CHART_PADDING_BOTTOM}`;

  return (
    <div
      style={{
        background: "var(--partnerhome-surface-color-base)",
        border: "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
        borderRadius: "var(--partnerhome-radius-large)",
        padding: "var(--partnerhome-spacing-2000)",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Title */}
      <div
        style={{
          marginBottom: "var(--partnerhome-spacing-2000)",
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
          Incidents and Returns
        </h3>
      </div>

      {/* Chart Area */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          display: "flex",
          gap: "0px",
          cursor: "crosshair",
        }}
      >
        {/* Y-axis labels */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "40px",
            flexShrink: 0,
            paddingTop: `${CHART_PADDING_TOP - 8}px`,
            paddingBottom: "0px",
            height: `${CHART_HEIGHT + 8}px`,
          }}
        >
          {/* Y-axis title */}
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-500)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              lineHeight: "16px",
              color: "var(--partnerhome-text-color-disabled)",
              whiteSpace: "nowrap",
            }}
          >
            Rate (%)
          </div>
          {Y_LABELS.map((label, i) => (
            <div
              key={label}
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-500)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                lineHeight: "16px",
                color: "var(--partnerhome-text-color-disabled)",
                textAlign: "right",
                paddingRight: "var(--partnerhome-spacing-500)",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* SVG Chart */}
        <div style={{ flex: 1, position: "relative" }}>
          <svg
            width="100%"
            height={CHART_PADDING_TOP + CHART_HEIGHT}
            viewBox={svgViewBox}
            preserveAspectRatio="none"
            style={{ display: "block", overflow: "visible" }}
          >
            {/* Grid lines */}
            {gridLines.map((line, i) => (
              <line
                key={`grid-${i}`}
                x1={0}
                y1={line.y}
                x2={svgWidth}
                y2={line.y}
                stroke={i === 0 ? "#93939A" : "var(--partnerhome-border-color-lighter-grey)"}
                strokeWidth={i === 0 ? 1 : 0.5}
              />
            ))}

            {/* Vertical axis line at left */}
            <line
              x1={0}
              y1={CHART_PADDING_TOP}
              x2={0}
              y2={valueToY(0)}
              stroke="var(--partnerhome-border-color-light-medium-grey)"
              strokeWidth={0.5}
            />

            {/* Hover vertical dashed line */}
            {hoveredIndex !== null && (
              <line
                x1={getX(hoveredIndex)}
                y1={CHART_PADDING_TOP}
                x2={getX(hoveredIndex)}
                y2={valueToY(0)}
                stroke="var(--partnerhome-border-color-light-medium-grey)"
                strokeWidth={0.5}
                strokeDasharray="4 4"
              />
            )}

            {/* Series paths */}
            {SERIES.map((series) => (
              <path
                key={series.key}
                d={buildPath(series.key, !!series.dashed)}
                fill="none"
                stroke={series.colorHex}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={series.dashed ? "4 4" : undefined}
                style={{ pointerEvents: "none" }}
              />
            ))}

            {/* Data points */}
            {SERIES.filter((s) => s.hasPoints).map((series) =>
              CHART_DATA.map((d, i) => {
                const x = getX(i);
                const y = valueToY(d[series.key] as number);
                const isHovered = hoveredIndex === i;
                return (
                  <circle
                    key={`${series.key}-${i}`}
                    cx={x}
                    cy={y}
                    r={isHovered ? 4 : 2.5}
                    fill="var(--partnerhome-surface-color-base)"
                    stroke={series.colorHex}
                    strokeWidth={2}
                    style={{
                      pointerEvents: "none",
                      transition: "r 100ms ease",
                    }}
                  />
                );
              })
            )}
          </svg>

          {/* X-axis labels */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "var(--partnerhome-spacing-500)",
              padding: "0",
            }}
          >
            {CHART_DATA.map((d, i) => (
              <div
                key={d.label}
                style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-500)",
                  fontWeight: "var(--partnerhome-font-weight-normal)",
                  lineHeight: "16px",
                  color: "var(--partnerhome-text-color-disabled)",
                  textAlign: "center",
                  width: "40px",
                }}
              >
                {d.label}
              </div>
            ))}
          </div>
        </div>

        {/* Hover Tooltip */}
        {hoveredIndex !== null && (
          <ChartTooltip
            data={CHART_DATA[hoveredIndex]}
            containerRef={containerRef}
            hoveredIndex={hoveredIndex}
            dataCount={dataCount}
          />
        )}
      </div>

      {/* Bottom Legend */}
      <div
        style={{
          display: "flex",
          gap: "var(--partnerhome-spacing-2000)",
          alignItems: "center",
          paddingLeft: "40px",
          paddingTop: "var(--partnerhome-spacing-2000)",
          flexWrap: "wrap",
        }}
      >
        {SERIES.map((series) => (
          <LegendItem key={series.key} series={series} />
        ))}
      </div>
    </div>
  );
}

// ── Tooltip ─────────────────────────────────────────────────────────
interface ChartTooltipProps {
  data: DataPoint;
  containerRef: React.RefObject<HTMLDivElement | null>;
  hoveredIndex: number;
  dataCount: number;
}

function ChartTooltip({ data, containerRef, hoveredIndex, dataCount }: ChartTooltipProps) {
  const container = containerRef.current;
  if (!container) return null;

  const rect = container.getBoundingClientRect();
  const yAxisWidth = 40;
  const chartAreaWidth = rect.width - yAxisWidth - 10;
  const xPct = dataCount <= 1 ? 0 : hoveredIndex / (dataCount - 1);
  const tooltipLeft = yAxisWidth + xPct * chartAreaWidth;

  // Position tooltip to the right of the line if we're in the left half, left if in right half
  const tooltipWidth = 220;
  const isRightHalf = xPct > 0.5;
  const pointerSize = 8;
  const gap = 12;
  const offsetX = isRightHalf ? -(tooltipWidth + gap) : gap;

  return (
    <div
      style={{
        position: "absolute",
        left: `${tooltipLeft + offsetX}px`,
        top: "8px",
        width: `${tooltipWidth}px`,
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      {/* Horizontal pointer arrow */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          ...(isRightHalf
            ? {
                right: `-${pointerSize}px`,
                width: 0,
                height: 0,
                borderTop: `${pointerSize}px solid transparent`,
                borderBottom: `${pointerSize}px solid transparent`,
                borderLeft: `${pointerSize}px solid var(--partnerhome-surface-color-base)`,
              }
            : {
                left: `-${pointerSize}px`,
                width: 0,
                height: 0,
                borderTop: `${pointerSize}px solid transparent`,
                borderBottom: `${pointerSize}px solid transparent`,
                borderRight: `${pointerSize}px solid var(--partnerhome-surface-color-base)`,
              }),
        }}
      />

      {/* Tooltip card body */}
      <div
        style={{
          background: "var(--partnerhome-surface-color-base)",
          border: "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-lighter-grey)",
          borderRadius: "var(--partnerhome-radius-large)",
          boxShadow: "var(--partnerhome-shadow-20)",
          padding: "var(--partnerhome-spacing-1000)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--partnerhome-spacing-1000)",
          position: "relative",
        }}
      >
        {/* Date header */}
        <div
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-500)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            lineHeight: "16px",
            color: "var(--partnerhome-text-color-base)",
          }}
        >
          {data.fullDate}
        </div>

        {/* Series values */}
        {SERIES.map((series) => {
          const value = data[series.key] as number;
          return (
            <div
              key={series.key}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                gap: "var(--partnerhome-spacing-1000)",
              }}
            >
              {/* Legend icon + label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--partnerhome-spacing-500)",
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <TooltipLegendIcon series={series} />
                <span
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-500)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    lineHeight: "16px",
                    color: series.dashed
                      ? "var(--partnerhome-text-color-base-subtle)"
                      : "var(--partnerhome-text-color-disabled)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {series.label}
                </span>
              </div>
              {/* Value */}
              <span
                style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-500)",
                  fontWeight: "var(--partnerhome-font-weight-bold)",
                  lineHeight: "16px",
                  color: "var(--partnerhome-text-color-base)",
                  flexShrink: 0,
                }}
              >
                {value.toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Tooltip legend icon (small inline SVG) ──────────────────────────
function TooltipLegendIcon({ series }: { series: SeriesConfig }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      {series.dashed ? (
        <line
          x1="0"
          y1="8"
          x2="16"
          y2="8"
          stroke={series.colorHex}
          strokeWidth="1.33"
          strokeDasharray="3 2"
        />
      ) : (
        <>
          <line
            x1="0"
            y1="8"
            x2="16"
            y2="8"
            stroke={series.colorHex}
            strokeWidth="1.33"
          />
          <rect
            x="5.47"
            y="5.47"
            width="5.07"
            height="5.07"
            rx="2.53"
            fill="var(--partnerhome-surface-color-base)"
            stroke={series.colorHex}
            strokeWidth="1.33"
          />
        </>
      )}
    </svg>
  );
}

// ── Bottom Legend Item ───────────────────────────────────────────────
function LegendItem({ series }: { series: SeriesConfig }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--partnerhome-spacing-250)",
      }}
    >
      {/* Legend icon (larger for bottom legend) */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        style={{ flexShrink: 0 }}
      >
        {series.dashed ? (
          <line
            x1="0"
            y1="10"
            x2="20"
            y2="10"
            stroke={series.colorHex}
            strokeWidth="1.67"
            strokeDasharray="3 2"
          />
        ) : (
          <>
            <line
              x1="0"
              y1="10"
              x2="20"
              y2="10"
              stroke={series.colorHex}
              strokeWidth="1.67"
            />
            <rect
              x="6.83"
              y="6.83"
              width="6.33"
              height="6.33"
              rx="3.17"
              fill="var(--partnerhome-surface-color-base)"
              stroke={series.colorHex}
              strokeWidth="1.67"
            />
          </>
        )}
      </svg>
      <span
        style={{
          fontFamily: "'Lato', 'Inter', sans-serif",
          fontSize: "var(--partnerhome-font-size-500)",
          fontWeight: "var(--partnerhome-font-weight-normal)",
          lineHeight: "16px",
          color: series.dashed
            ? "var(--partnerhome-text-color-base-subtle)"
            : "var(--partnerhome-text-color-disabled)",
        }}
      >
        {series.label}
      </span>
    </div>
  );
}