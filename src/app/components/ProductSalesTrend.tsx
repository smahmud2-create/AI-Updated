import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface Product {
  name: string;
  asin: string;
  impressionsPercentile: number;
  totalImpressions: number;
  conversionRate: number;
  conversionVsClass: number;
  unitsSold: number;
  uniqueVisits: number;
  salesTrend: number;
  price: number;
  image: string;
}

interface ProductSalesTrendProps {
  product: Product;
  onBack: () => void;
}

type Timeframe = "7" | "30" | "90";

function timeframeDays(tf: Timeframe): number {
  switch (tf) {
    case "7":
      return 7;
    case "30":
      return 30;
    case "90":
      return 90;
    default:
      return 30;
  }
}

function timeframeLabel(tf: Timeframe): string {
  switch (tf) {
    case "7":
      return "Last 7 days";
    case "30":
      return "Last 30 days";
    case "90":
      return "Last 90 days";
    default:
      return "Last 30 days";
  }
}

/** Scale table snapshot (30-day–style) metrics to the selected period length. */
function scaledMetrics(product: Product, days: number) {
  const factor = days / 30;
  return {
    unitsSold: Math.max(1, Math.round(product.unitsSold * factor)),
    uniqueVisits: Math.max(1, Math.round(product.uniqueVisits * factor)),
    totalImpressions: Math.max(1, Math.round(product.totalImpressions * factor)),
    salesTrend: product.salesTrend,
    conversionRate: product.conversionRate,
    conversionVsClass: product.conversionVsClass,
  };
}

function formatShortDate(d: Date) {
  return d.toLocaleString("en-US", { month: "short", day: "numeric" });
}

/**
 * Daily units sold per day (oldest → newest / today).
 * When table sales trend is negative, recent days sell fewer units than older days (declining chart to the right).
 */
function generateUnitsOverTime(product: Product, days: number) {
  const { unitsSold: periodTotal } = scaledMetrics(product, days);
  const today = new Date(2026, 2, 17);
  const data: { date: string; units: number }[] = [];
  const seed = product.asin.charCodeAt(3) + days;
  const t = product.salesTrend / 100;

  let wOld = 1;
  let wNew = 1;
  const k = 2.4;
  const mag = Math.min(Math.abs(t), 0.4);
  if (t < -0.0005) {
    wOld = 1 + k * mag;
    wNew = Math.max(0.12, 1 - k * mag * 0.9);
  } else if (t > 0.0005) {
    wOld = Math.max(0.12, 1 - k * mag * 0.9);
    wNew = 1 + k * mag;
  }

  const rawWeights: number[] = [];
  for (let i = 0; i < days; i++) {
    const f = days > 1 ? i / (days - 1) : 0;
    rawWeights.push(wOld + (wNew - wOld) * f);
  }
  const sumW = rawWeights.reduce((a, b) => a + b, 0);

  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - (days - 1 - i));
    const share = rawWeights[i] / sumW;
    const noiseScale = periodTotal / Math.max(8, days);
    const noise =
      (Math.sin(i * 2.4 + seed) * 0.07 + Math.cos(i * 1.1 + seed) * 0.05) * noiseScale;
    const units = Math.max(1, Math.round(periodTotal * share + noise));
    data.push({ date: formatShortDate(date), units });
  }

  const sum = data.reduce((s, d) => s + d.units, 0);
  const diff = periodTotal - sum;
  if (data.length > 0 && diff !== 0) {
    const li = data.length - 1;
    data[li] = { ...data[li], units: Math.max(1, data[li].units + diff) };
  }
  return data;
}

function generateConversionOverTime(product: Product, days: number) {
  const rate = product.conversionRate;
  const today = new Date(2026, 2, 17);
  const data: { date: string; conversionRate: number }[] = [];
  const seed = product.asin.charCodeAt(4) + days;

  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - (days - 1 - i));
    const wobble = (Math.sin(i * 0.35 + seed) * 0.25 + Math.cos(i * 0.2) * 0.15) * 0.3;
    const conversionRate = Math.max(0.1, Math.round((rate + wobble) * 10) / 10);
    data.push({ date: formatShortDate(date), conversionRate });
  }
  if (data.length > 0) {
    data[data.length - 1] = { ...data[data.length - 1], conversionRate: rate };
  }
  return data;
}

const TF_OPTIONS: { id: Timeframe; label: string }[] = [
  { id: "7", label: "Last 7 days" },
  { id: "30", label: "Last 30 days" },
  { id: "90", label: "Last 90 days" },
];

const TREND_UP = "#20734B";
const TREND_DOWN = "#C13A3A";
const TREND_NEUTRAL = "var(--partnerhome-text-color-secondary, #646266)";

function isTrendFlat(pct: number, eps = 0.05) {
  return Math.abs(pct) < eps;
}

function trendColor(pct: number, eps = 0.05) {
  if (isTrendFlat(pct, eps)) return TREND_NEUTRAL;
  return pct > 0 ? TREND_UP : TREND_DOWN;
}

function TrendTriangle({ up, size = 12 }: { up: boolean; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden>
      {up ? (
        <path d="M6 2.5L10 8H2L6 2.5Z" fill="currentColor" />
      ) : (
        <path d="M6 9.5L10 4H2L6 9.5Z" fill="currentColor" />
      )}
    </svg>
  );
}

/** Stable pseudo % change for volume KPIs, aligned with sales trend direction. */
function volumeTrendPct(product: Product, salt: number): number {
  const seed = product.asin.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const st = product.salesTrend;
  if (Math.abs(st) < 0.05) return 0;
  const mag = 3 + ((seed + salt) % 14);
  return st > 0 ? mag : -mag;
}

function KpiTrendBadge({ pct, eps = 0.05 }: { pct: number; eps?: number }) {
  const flat = isTrendFlat(pct, eps);
  const up = pct > eps;
  const color = trendColor(pct, eps);
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        fontSize: "var(--partnerhome-font-size-500)",
        fontWeight: 600,
        color,
        lineHeight: 1.2,
      }}
    >
      {!flat && (
        <span style={{ display: "flex", flexShrink: 0, color }}>
          <TrendTriangle up={up} size={11} />
        </span>
      )}
      <span>{flat ? "0.0%" : `${up ? "+" : ""}${pct.toFixed(1)}%`}</span>
    </span>
  );
}

export function ProductSalesTrend({ product, onBack }: ProductSalesTrendProps) {
  const [timeframe, setTimeframe] = useState<Timeframe>("30");
  const days = timeframeDays(timeframe);

  const unitsChartData = useMemo(() => generateUnitsOverTime(product, days), [product, days]);
  const conversionChartData = useMemo(() => generateConversionOverTime(product, days), [product, days]);

  const kpis = useMemo(() => scaledMetrics(product, days), [product, days]);

  const volumeTrendPcts = useMemo(
    () => ({
      units: volumeTrendPct(product, 0),
      visits: volumeTrendPct(product, 17),
      impressions: volumeTrendPct(product, 31),
    }),
    [product],
  );

  const unitsValues = unitsChartData.map((d) => d.units);
  const unitsMax = Math.max(...unitsValues, 1);
  const unitsMin = Math.min(...unitsValues, 0);
  const unitsYMin = Math.max(0, Math.floor(unitsMin * 0.92));
  const unitsYMax = Math.ceil(unitsMax * 1.08);

  const convValues = conversionChartData.map((d) => d.conversionRate);
  const convMin = Math.max(0, Math.floor((Math.min(...convValues) - 0.5) * 10) / 10);
  const convMax = Math.ceil((Math.max(...convValues) + 0.4) * 10) / 10;

  const xAxisInterval = days <= 7 ? 0 : days <= 30 ? 4 : 8;

  const kpiHeadingBase = {
    fontSize: "var(--partnerhome-font-size-1000)",
    fontWeight: "var(--partnerhome-font-weight-bold)" as const,
    margin: "0 0 6px 0",
    fontFamily: "var(--partnerhome-font-family-base, 'Lato', sans-serif)",
  };

  const kpiValueStyle = {
    fontSize: "20px",
    fontWeight: "bold" as const,
    color: "var(--partnerhome-text-color-base, #211E22)",
    margin: 0,
  };

  return (
    <div
      style={{
        border: "1px solid var(--partnerhome-border-color-base, #D1D1D6)",
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
        padding: "24px",
        fontFamily: "var(--partnerhome-font-family-base, 'Lato', sans-serif)",
      }}
    >
      {/* Back — top left; product block matches table row */}
      <div style={{ marginBottom: "20px" }}>
        <button
          type="button"
          onClick={onBack}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0 0 14px 0",
            fontFamily: "inherit",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M10 3L5 8L10 13"
              stroke="var(--partnerhome-text-color-primary, #7B189F)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: "var(--partnerhome-font-size-500)",
              color: "var(--partnerhome-text-color-primary, #7B189F)",
              fontWeight: "normal",
            }}
          >
            Back to all products
          </span>
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--partnerhome-spacing-1500)", minWidth: 0 }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "var(--partnerhome-radius-small)",
              objectFit: "cover",
              flexShrink: 0,
              border: "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
            }}
          />
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                margin: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {product.name}
            </p>
            <p
              style={{
                fontSize: "var(--partnerhome-font-size-500)",
                color: "var(--partnerhome-text-color-secondary)",
                margin: 0,
                fontWeight: "var(--partnerhome-font-weight-normal)",
              }}
            >
              {product.asin}
            </p>
          </div>
        </div>
      </div>

      {/* Timeframe filter, then KPI row below — left-aligned */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: "20px",
          marginBottom: "24px",
          paddingBottom: "24px",
          borderBottom: "1px solid var(--partnerhome-border-color-base, #D1D1D6)",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "flex-start" }}>
          {TF_OPTIONS.map(({ id, label }) => {
            const selected = timeframe === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setTimeframe(id)}
                style={{
                  fontFamily: "inherit",
                  fontSize: "var(--partnerhome-font-size-500)",
                  fontWeight: selected ? "bold" : "normal",
                  padding: "8px 14px",
                  borderRadius: "var(--partnerhome-radius-base, 6px)",
                  border: selected
                    ? "1.5px solid var(--partnerhome-border-color-primary, #7B189F)"
                    : "1px solid var(--partnerhome-border-color-base, #D1D1D6)",
                  backgroundColor: selected ? "var(--partnerhome-bg-color-secondaryhover, #F3F0F5)" : "#FFFFFF",
                  color: "var(--partnerhome-text-color-base, #211E22)",
                  cursor: "pointer",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "20px 24px",
            justifyItems: "start",
          }}
        >
          <div>
            <p
              style={{
                ...kpiHeadingBase,
                color: "var(--partnerhome-text-color-base)",
                textAlign: "left",
              }}
            >
              Sales trend
            </p>
            <p
              style={{
                ...kpiValueStyle,
                textAlign: "left",
                color:
                  kpis.salesTrend < 0 && !isTrendFlat(kpis.salesTrend)
                    ? "#C13A3A"
                    : "var(--partnerhome-text-color-base, #211E22)",
              }}
            >
              {isTrendFlat(kpis.salesTrend)
                ? "0%"
                : `${kpis.salesTrend > 0 ? "+" : ""}${kpis.salesTrend.toFixed(1)}%`}
            </p>
          </div>
          <div>
            <p style={{ ...kpiHeadingBase, color: "var(--partnerhome-text-color-base)", textAlign: "left" }}>Units sold</p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 10px" }}>
              <span style={{ ...kpiValueStyle, textAlign: "left" }}>{kpis.unitsSold.toLocaleString()}</span>
              <KpiTrendBadge pct={volumeTrendPcts.units} />
            </div>
          </div>
          <div>
            <p style={{ ...kpiHeadingBase, color: "var(--partnerhome-text-color-base)", textAlign: "left" }}>Conversion rate</p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 10px" }}>
              <span style={{ ...kpiValueStyle, textAlign: "left" }}>{kpis.conversionRate}%</span>
              <KpiTrendBadge pct={kpis.conversionVsClass} eps={0.02} />
            </div>
          </div>
          <div>
            <p style={{ ...kpiHeadingBase, color: "var(--partnerhome-text-color-base)", textAlign: "left" }}>Unique visits</p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 10px" }}>
              <span style={{ ...kpiValueStyle, textAlign: "left" }}>{kpis.uniqueVisits.toLocaleString()}</span>
              <KpiTrendBadge pct={volumeTrendPcts.visits} />
            </div>
          </div>
          <div>
            <p style={{ ...kpiHeadingBase, color: "var(--partnerhome-text-color-base)", textAlign: "left" }}>Total impressions</p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 10px" }}>
              <span style={{ ...kpiValueStyle, textAlign: "left" }}>{kpis.totalImpressions.toLocaleString()}</span>
              <KpiTrendBadge pct={volumeTrendPcts.impressions} />
            </div>
          </div>
        </div>
      </div>

      {/* Charts: units + conversion (raw scales) */}
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        <div>
          <p
            style={{
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "bold",
              color: "var(--partnerhome-text-color-base, #211E22)",
              margin: "0 0 12px 0",
            }}
          >
            Units sold over time
          </p>
          <p
            style={{
              fontSize: "var(--partnerhome-font-size-500)",
              color: "var(--partnerhome-text-color-secondary, #646266)",
              margin: "0 0 12px 0",
            }}
          >
            {timeframeLabel(timeframe)}
          </p>
          <div style={{ width: "100%", height: 240 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={unitsChartData} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8E8EA" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 11, fill: "#646266", fontFamily: "inherit" }}
                  tickLine={false}
                  axisLine={{ stroke: "#D1D1D6" }}
                  interval={xAxisInterval}
                />
                <YAxis
                  domain={[unitsYMin, unitsYMax]}
                  tick={{ fontSize: 11, fill: "#646266", fontFamily: "inherit" }}
                  tickLine={false}
                  axisLine={false}
                  width={44}
                />
                <Tooltip
                  contentStyle={{
                    fontFamily: "inherit",
                    fontSize: "var(--partnerhome-font-size-500)",
                    borderRadius: "6px",
                    border: "1px solid #D1D1D6",
                  }}
                  formatter={(value: number) => [`${value.toLocaleString()}`, "Units sold"]}
                />
                <Area
                  type="monotone"
                  dataKey="units"
                  name="Units sold"
                  stroke="#66256A"
                  strokeWidth={2}
                  fill="rgba(102, 37, 106, 0.12)"
                  dot={false}
                  activeDot={{ r: 4, stroke: "#66256A", strokeWidth: 2, fill: "#fff" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <p
            style={{
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "bold",
              color: "var(--partnerhome-text-color-base, #211E22)",
              margin: "0 0 12px 0",
            }}
          >
            Conversion rate over time
          </p>
          <p
            style={{
              fontSize: "var(--partnerhome-font-size-500)",
              color: "var(--partnerhome-text-color-secondary, #646266)",
              margin: "0 0 12px 0",
            }}
          >
            {timeframeLabel(timeframe)}
          </p>
          <div style={{ width: "100%", height: 220 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={conversionChartData} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8E8EA" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 11, fill: "#646266", fontFamily: "inherit" }}
                  tickLine={false}
                  axisLine={{ stroke: "#D1D1D6" }}
                  interval={xAxisInterval}
                />
                <YAxis
                  domain={[convMin, convMax]}
                  tick={{ fontSize: 11, fill: "#646266", fontFamily: "inherit" }}
                  tickLine={false}
                  axisLine={false}
                  width={40}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  contentStyle={{
                    fontFamily: "inherit",
                    fontSize: "var(--partnerhome-font-size-500)",
                    borderRadius: "6px",
                    border: "1px solid #D1D1D6",
                  }}
                  formatter={(value: number) => [`${value}%`, "Conversion rate"]}
                />
                <Area
                  type="monotone"
                  dataKey="conversionRate"
                  name="Conversion rate"
                  stroke="#1A6BB0"
                  strokeWidth={2}
                  fill="rgba(26, 107, 176, 0.1)"
                  dot={false}
                  activeDot={{ r: 4, stroke: "#1A6BB0", strokeWidth: 2, fill: "#fff" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
