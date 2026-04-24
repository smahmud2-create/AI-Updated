import React, { useState, useRef, useCallback } from "react";
import { Info, TrendingUp, TrendingDown } from "lucide-react";

interface PerformanceCardProps {
  id: string;
  categoryLabel: string;
  title: string;
  value: string;
  change: string;
  changeType: "up" | "down";
  chartData: number[];
  yAxisLabels: string[];
  xAxisLabels: string[];
  tooltipText: string;
  condensed?: boolean;
}

export function PerformanceCards({ condensed }: { condensed?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        gap: condensed
          ? "var(--partnerhome-spacing-2000)"
          : "var(--partnerhome-spacing-3000)",
        width: "fit-content",
        flexWrap: "wrap",
      }}
    >
      <PerformanceCard
        id={condensed ? "revenue-sm" : "revenue"}
        categoryLabel="PERFORMANCE"
        title="Revenue"
        value="$ 139.63K"
        change="+ 12.8% YoY"
        changeType="up"
        chartData={[
          210, 235, 220, 250, 235, 260, 245, 275, 255, 280, 270, 300, 285,
          310, 295, 335, 310, 340,
        ]}
        yAxisLabels={["500", "400", "300", "200", "100", "0"]}
        xAxisLabels={["Jan\n2025", "Feb\n2025", "Mar\n2025"]}
        tooltipText="Total revenue generated over the selected time period"
        condensed={condensed}
      />
      <PerformanceCard
        id={condensed ? "units-sold-sm" : "units-sold"}
        categoryLabel="PERFORMANCE"
        title="Units Sold"
        value="317"
        change="-0.7% YoY"
        changeType="down"
        chartData={[
          70, 50, 65, 75, 55, 80, 60, 70, 55, 65, 75, 60, 70, 55, 45, 30,
          15, 5,
        ]}
        yAxisLabels={["125", "100", "75", "50", "25", "0"]}
        xAxisLabels={["Jan\n2025", "Feb\n2025", "Mar\n2025"]}
        tooltipText="Total units sold over the selected time period"
        condensed={condensed}
      />
    </div>
  );
}

const CHART_HEIGHT = 230;
const CHART_HEIGHT_SM = 120;
const SVG_WIDTH = 400;

export function PerformanceCard({
  id,
  categoryLabel,
  title,
  value,
  change,
  changeType,
  chartData,
  yAxisLabels,
  xAxisLabels,
  tooltipText,
  condensed,
}: PerformanceCardProps) {
  const [showInfoTooltip, setShowInfoTooltip] = useState(false);
  const [infoTooltipPos, setInfoTooltipPos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoverTooltipPos, setHoverTooltipPos] = useState({ x: 0, y: 0 });
  const chartContainerRef = useRef<HTMLDivElement>(null);

  const chartH = condensed ? CHART_HEIGHT_SM : CHART_HEIGHT;
  const iconSize = condensed ? 18 : 24;

  const parseLabel = (label: string) =>
    parseFloat(label.replace(/[^0-9.\-]/g, "")) || 0;
  const yMax = parseLabel(yAxisLabels[0]);
  const yMin = parseLabel(yAxisLabels[yAxisLabels.length - 1]);
  const yRange = yMax - yMin || 1;
  const dataCount = chartData.length;

  const lineColorRaw = changeType === "up" ? "#245728" : "#6F2119";
  const gradientId = `gradient-${id}`;

  // Percentage-based positioning for overlays
  const getXPercent = useCallback(
    (index: number) => {
      if (dataCount <= 1) return 0;
      return (index / (dataCount - 1)) * 100;
    },
    [dataCount]
  );

  const getYPercent = useCallback(
    (val: number) => {
      return (1 - (val - yMin) / yRange) * 100;
    },
    [yMin, yRange]
  );

  // Generate SVG path from data
  const generatePath = useCallback(() => {
    const points = chartData.map((val, i) => {
      const x = (i / (dataCount - 1)) * SVG_WIDTH;
      const y = (1 - (val - yMin) / yRange) * chartH;
      return `${x},${y}`;
    });
    return `M ${points.join(" L ")}`;
  }, [chartData, dataCount, yMin, yRange, chartH]);

  // Generate area path (closed to bottom)
  const generateAreaPath = useCallback(() => {
    const points = chartData.map((val, i) => {
      const x = (i / (dataCount - 1)) * SVG_WIDTH;
      const y = (1 - (val - yMin) / yRange) * chartH;
      return `${x},${y}`;
    });
    return `M 0,${chartH} L ${points.join(" L ")} L ${SVG_WIDTH},${chartH} Z`;
  }, [chartData, dataCount, yMin, yRange, chartH]);

  // Mouse handler for chart hover — track fixed position for tooltip
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const container = chartContainerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const pct = relX / rect.width;
      const rawIndex = pct * (dataCount - 1);
      const nearest = Math.max(
        0,
        Math.min(dataCount - 1, Math.round(rawIndex))
      );
      setHoveredIndex(nearest);

      // Calculate fixed position for the data point
      const pointXPct = nearest / (dataCount - 1);
      const pointYPct =
        1 - (chartData[nearest] - yMin) / yRange;
      setHoverTooltipPos({
        x: rect.left + pointXPct * rect.width,
        y: rect.top + pointYPct * rect.height,
      });
    },
    [dataCount, chartData, yMin, yRange]
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  // Info icon tooltip handler
  const handleInfoHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setInfoTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top + 4,
    });
    setShowInfoTooltip(true);
  };

  // Grid line Y positions in SVG coords
  const gridLineYPositions = yAxisLabels.map((label) => {
    const val = parseLabel(label);
    return (1 - (val - yMin) / yRange) * chartH;
  });

  return (
    <>
      <div
        style={{
          background: "var(--partnerhome-surface-color-base)",
          border:
            "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
          borderRadius: "var(--partnerhome-radius-large)",
          padding: condensed
            ? "var(--partnerhome-spacing-1000) var(--partnerhome-spacing-1500)"
            : "var(--partnerhome-spacing-1000) var(--partnerhome-spacing-2000)",
          display: "flex",
          flexDirection: "column",
          flex: "1 1 0",
          minWidth: condensed ? "176px" : "280px",
          maxWidth: condensed ? "288px" : "500px",
          gap: "0px",
        }}
      >
        {/* Category label + info icon row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "var(--partnerhome-font-family-base)",
              fontSize: "var(--partnerhome-font-size-500)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              lineHeight: "var(--partnerhome-line-height-base)",
              color: "var(--partnerhome-text-color-disabled)",
              letterSpacing: "0.5px",
              margin: 0,
            }}
          >
            {categoryLabel}
          </span>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
            onMouseEnter={handleInfoHover}
            onMouseLeave={() => setShowInfoTooltip(false)}
          >
            <Info
              size={iconSize}
              strokeWidth={1.5}
              style={{ color: "var(--partnerhome-text-color-base)" }}
            />
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: "var(--partnerhome-font-family-base)",
            fontSize: condensed
              ? "var(--partnerhome-font-size-500)"
              : "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-bold)",
            lineHeight: "var(--partnerhome-line-height-base)",
            color: "var(--partnerhome-text-color-base)",
            marginTop: "var(--partnerhome-spacing-250)",
          }}
        >
          {title}
        </div>

        {/* Value */}
        <div
          style={{
            fontFamily: "var(--partnerhome-font-family-base)",
            fontSize: condensed
              ? "var(--partnerhome-font-size-2000)"
              : "var(--partnerhome-font-size-3000)",
            fontWeight: "var(--partnerhome-font-weight-bold)",
            lineHeight: "var(--partnerhome-line-height-base)",
            color: "var(--partnerhome-text-color-base)",
            marginTop: condensed
              ? "var(--partnerhome-spacing-500)"
              : "var(--partnerhome-spacing-1000)",
          }}
        >
          {value}
        </div>

        {/* Change indicator */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: condensed
              ? "var(--partnerhome-spacing-500)"
              : "var(--partnerhome-spacing-1000)",
            marginTop: condensed
              ? "var(--partnerhome-spacing-250)"
              : "var(--partnerhome-spacing-500)",
            padding:
              "var(--partnerhome-spacing-250) var(--partnerhome-spacing-500)",
            background:
              changeType === "up"
                ? "var(--partnerhome-bg-color-speedshipping)"
                : "var(--partnerhome-sale-10)",
            borderRadius: "var(--partnerhome-radius-large)",
            width: "fit-content",
          }}
        >
          {changeType === "up" ? (
            <TrendingUp
              size={iconSize}
              strokeWidth={1.5}
              style={{
                color: "var(--partnerhome-text-color-positiveactive)",
              }}
            />
          ) : (
            <TrendingDown
              size={iconSize}
              strokeWidth={1.5}
              style={{
                color: "var(--partnerhome-text-color-saleactive)",
              }}
            />
          )}
          <span
            style={{
              fontFamily: "var(--partnerhome-font-family-base)",
              fontSize: "var(--partnerhome-font-size-500)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              lineHeight: "var(--partnerhome-line-height-base)",
              color:
                changeType === "up"
                  ? "var(--partnerhome-text-color-positiveactive)"
                  : "var(--partnerhome-text-color-saleactive)",
            }}
          >
            {change}
          </span>
        </div>

        {/* Chart section */}
        <div
          style={{
            marginTop: condensed
              ? "var(--partnerhome-spacing-500)"
              : "var(--partnerhome-spacing-1000)",
            background: "var(--partnerhome-surface-color-base)",
            paddingTop: condensed
              ? "var(--partnerhome-spacing-500)"
              : "var(--partnerhome-spacing-1000)",
          }}
        >
          {/* Chart area with y-axis */}
          <div
            style={{
              display: "flex",
              gap: "var(--partnerhome-spacing-1000)",
              alignItems: "stretch",
            }}
          >
            {/* Y-axis labels */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: `${chartH}px`,
                flexShrink: 0,
              }}
            >
              {yAxisLabels.map((label, i) => (
                <div
                  key={`${id}-y-${i}`}
                  style={{
                    fontFamily: "var(--partnerhome-font-family-base)",
                    fontSize: condensed
                      ? "var(--partnerhome-font-size-500)"
                      : "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    lineHeight: condensed ? "1" : "var(--partnerhome-line-height-base)",
                    color: "var(--partnerhome-text-color-disabled)",
                    textAlign: "right",
                    minWidth: condensed ? "22px" : "28px",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>

            {/* Chart SVG + interactive overlays */}
            <div
              ref={chartContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                flex: 1,
                position: "relative",
                height: `${chartH}px`,
                cursor: "crosshair",
                overflow: "visible",
              }}
            >
              <svg
                width="100%"
                height={chartH}
                viewBox={`0 0 ${SVG_WIDTH} ${chartH}`}
                preserveAspectRatio="none"
                style={{ display: "block", overflow: "visible" }}
              >
                {/* Grid lines */}
                {gridLineYPositions.map((y, i) => (
                  <line
                    key={`grid-${id}-${i}`}
                    x1={0}
                    y1={y}
                    x2={SVG_WIDTH}
                    y2={y}
                    stroke={
                      i === gridLineYPositions.length - 1
                        ? "#93939A"
                        : "#F5F5F5"
                    }
                    strokeWidth={
                      i === gridLineYPositions.length - 1 ? 1 : 0.5
                    }
                  />
                ))}

                {/* Area fill */}
                <path d={generateAreaPath()} fill={`url(#${gradientId})`} />

                {/* Line */}
                <path
                  d={generatePath()}
                  fill="none"
                  stroke={lineColorRaw}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient
                    id={gradientId}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2={chartH.toString()}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      stopColor={
                        changeType === "up" ? "#EDF7EC" : "#FCF3F6"
                      }
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--partnerhome-white)"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>

              {/* Hover interaction overlays — in-chart visual indicators only */}
              {hoveredIndex !== null && (
                <>
                  {/* Vertical dashed indicator line */}
                  <div
                    style={{
                      position: "absolute",
                      left: `${getXPercent(hoveredIndex)}%`,
                      top: 0,
                      bottom: 0,
                      width: 0,
                      borderLeft:
                        "var(--partnerhome-stroke-weights-small) dashed var(--partnerhome-border-color-base)",
                      pointerEvents: "none",
                      zIndex: 1,
                    }}
                  />

                  {/* Data point circle */}
                  <div
                    style={{
                      position: "absolute",
                      left: `${getXPercent(hoveredIndex)}%`,
                      top: `${getYPercent(chartData[hoveredIndex])}%`,
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "var(--partnerhome-surface-color-base)",
                      border: `var(--partnerhome-stroke-weights-large) solid ${lineColorRaw}`,
                      transform: "translate(-50%, -50%)",
                      pointerEvents: "none",
                      zIndex: 2,
                      boxShadow: "var(--partnerhome-shadow-10)",
                    }}
                  />
                </>
              )}
            </div>
          </div>

          {/* X-axis labels */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              paddingLeft: condensed
                ? "var(--partnerhome-spacing-3500)"
                : "var(--partnerhome-spacing-4500)",
              marginTop: condensed
                ? "var(--partnerhome-spacing-250)"
                : "var(--partnerhome-spacing-500)",
            }}
          >
            {xAxisLabels.map((label, i) => (
              <div
                key={`${id}-x-${i}`}
                style={{
                  fontFamily: "var(--partnerhome-font-family-base)",
                  fontSize: condensed
                    ? "var(--partnerhome-font-size-500)"
                    : "var(--partnerhome-font-size-1000)",
                  fontWeight: "var(--partnerhome-font-weight-normal)",
                  lineHeight: condensed ? "1.2" : "var(--partnerhome-line-height-base)",
                  color: "var(--partnerhome-text-color-disabled)",
                  whiteSpace: "pre-wrap",
                  textAlign: "center",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chart value tooltip — fixed position so it never clips */}
      {hoveredIndex !== null && (
        <div
          style={{
            position: "fixed",
            left: `${hoverTooltipPos.x}px`,
            top: `${hoverTooltipPos.y}px`,
            transform: "translate(-50%, calc(-100% - 14px))",
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
                "var(--partnerhome-spacing-250) var(--partnerhome-spacing-1000)",
              borderRadius: "var(--partnerhome-radius-medium)",
              fontFamily: "var(--partnerhome-font-family-base)",
              fontSize: "var(--partnerhome-font-size-500)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              lineHeight: "var(--partnerhome-line-height-base)",
              whiteSpace: "nowrap",
              boxShadow: "var(--partnerhome-shadow-10)",
              textAlign: "center",
              minWidth: "var(--partnerhome-spacing-4000)",
            }}
          >
            {chartData[hoveredIndex]}
          </div>
          {/* Pointer triangle */}
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
        </div>
      )}

      {/* Info icon tooltip (fixed positioned) */}
      {showInfoTooltip && (
        <div
          style={{
            position: "fixed",
            left: `${infoTooltipPos.x}px`,
            top: `${infoTooltipPos.y}px`,
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
              fontFamily: "var(--partnerhome-font-family-base)",
              fontSize: "var(--partnerhome-font-size-500)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              lineHeight: "var(--partnerhome-line-height-base)",
              boxShadow: "var(--partnerhome-shadow-10)",
              maxWidth: "300px",
              whiteSpace: "normal",
            }}
          >
            {tooltipText}
          </div>
          {/* Pointer triangle */}
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop:
                "6px solid var(--partnerhome-surface-color-inverse)",
              margin: "0 auto",
            }}
          />
        </div>
      )}
    </>
  );
}