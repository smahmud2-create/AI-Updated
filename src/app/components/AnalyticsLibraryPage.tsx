import React from "react";
import { PerformanceCards } from "./analytics/PerformanceCards";
import { IncidentsReturnsChart } from "./analytics/IncidentsReturnsChart";
import { MetricCardsSection } from "./analytics/MetricCards";
import { PartRequestResponseBreakdown } from "./analytics/BarChart";
import {
  KPICard,
  KPICardsRow,
  defaultKPIActions,
} from "./analytics/KPICard";

export function AnalyticsLibraryPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "var(--partnerhome-bg-color-global-body)",
        overflowY: "auto",
      }}
    >
      {/* Page Header */}
      <div
        style={{
          padding: "var(--partnerhome-spacing-4000) var(--partnerhome-spacing-4000) var(--partnerhome-spacing-3000)",
          background: "var(--partnerhome-surface-color-base)",
          borderBottom: "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
        }}
      >
        <h1
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-4000)",
            fontWeight: "var(--partnerhome-font-weight-bold)",
            lineHeight: "var(--partnerhome-line-height-base)",
            color: "var(--partnerhome-text-color-base)",
            margin: 0,
            marginBottom: "var(--partnerhome-spacing-1000)",
          }}
        >
          Analytics Library
        </h1>
        <p
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            lineHeight: "var(--partnerhome-line-height-base)",
            color: "var(--partnerhome-text-color-base)",
            margin: 0,
          }}
        >
          Analytics components for data visualization and insights
        </p>
      </div>

      {/* Content Area */}
      <div
        style={{
          flex: 1,
          padding: "var(--partnerhome-spacing-4000)",
        }}
      >
        {/* Performance Analytics Cards */}
        <section style={{ marginBottom: "var(--partnerhome-spacing-5000)" }}>
          <h2
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-3000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              lineHeight: "var(--partnerhome-line-height-base)",
              color: "var(--partnerhome-text-color-base)",
              margin: 0,
              marginBottom: "var(--partnerhome-spacing-2000)",
            }}
          >
            Performance Analytics
          </h2>

          <PerformanceCards />

          {/* Condensed variant */}
          <div
            style={{
              marginTop: "var(--partnerhome-spacing-3000)",
            }}
          >
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                lineHeight: "var(--partnerhome-line-height-base)",
                color: "var(--partnerhome-text-color-base-subtle)",
                margin: 0,
                marginBottom: "var(--partnerhome-spacing-1500)",
              }}
            >
              Condensed Variant
            </p>
            <PerformanceCards condensed />
          </div>
        </section>

        {/* KPI Summary Cards */}
        <section style={{ marginBottom: "var(--partnerhome-spacing-5000)" }}>
          <h2
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-3000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              lineHeight: "var(--partnerhome-line-height-base)",
              color: "var(--partnerhome-text-color-base)",
              margin: 0,
              marginBottom: "var(--partnerhome-spacing-1000)",
            }}
          >
            KPI Summary Cards
          </h2>
          <p
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              lineHeight: "var(--partnerhome-line-height-base)",
              color: "var(--partnerhome-text-color-base-subtle)",
              margin: 0,
              marginBottom: "var(--partnerhome-spacing-2000)",
            }}
          >
            Configurable KPI cards with action buttons for table interactions.
            Each icon triggers a callback (download, expand, filter).
          </p>

          <KPICardsRow
            cards={[
              {
                title: "Not Live",
                value: "67",
                description:
                  "Products taken down within the last 7 days",
                valueColor: "var(--partnerhome-text-color-negative)",
                actions: defaultKPIActions({
                  onDownload: () =>
                    console.log("[KPI] Not Live → Download table data"),
                  onFilter: () =>
                    console.log("[KPI] Not Live → Open table filter"),
                }),
              },
              {
                title: "Future Take Down",
                value: "195",
                description:
                  "Products will be taken down within the next 30 days",
                valueColor: "var(--partnerhome-text-color-negative)",
                actions: defaultKPIActions({
                  onDownload: () =>
                    console.log(
                      "[KPI] Future Take Down → Download table data"
                    ),
                  onFilter: () =>
                    console.log(
                      "[KPI] Future Take Down → Open table filter"
                    ),
                }),
              },
              {
                title: "Exclusivity Violations",
                value: "70",
                description:
                  "Products will lose Wayfair verified benefits",
                valueColor: "var(--partnerhome-text-color-primary)",
                actions: defaultKPIActions({
                  onDownload: () =>
                    console.log(
                      "[KPI] Exclusivity Violations → Download table data"
                    ),
                  onFilter: () =>
                    console.log(
                      "[KPI] Exclusivity Violations → Open table filter"
                    ),
                }),
              },
              {
                title: "Exclusivity Warnings",
                value: "197",
                description:
                  "Products at risk of exclusivity policy action",
                valueColor: "var(--partnerhome-text-color-warning)",
                actions: defaultKPIActions({
                  onDownload: () =>
                    console.log(
                      "[KPI] Exclusivity Warnings → Download table data"
                    ),
                  onFilter: () =>
                    console.log(
                      "[KPI] Exclusivity Warnings → Open table filter"
                    ),
                }),
              },
            ]}
          />
        </section>

        {/* Incidents and Returns Dashboard */}
        <section style={{ marginBottom: "var(--partnerhome-spacing-5000)" }}>
          <h2
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-3000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              lineHeight: "var(--partnerhome-line-height-base)",
              color: "var(--partnerhome-text-color-base)",
              margin: 0,
              marginBottom: "var(--partnerhome-spacing-2000)",
            }}
          >
            Incidents and Returns Dashboard
          </h2>

          <IncidentsReturnsChart />
        </section>

        {/* Metric Cards */}
        <section style={{ marginBottom: "var(--partnerhome-spacing-5000)" }}>
          <h2
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-3000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              lineHeight: "var(--partnerhome-line-height-base)",
              color: "var(--partnerhome-text-color-base)",
              margin: 0,
              marginBottom: "var(--partnerhome-spacing-2000)",
            }}
          >
            Metric Cards
          </h2>

          <MetricCardsSection />
        </section>

        {/* Bar Charts */}
        <section style={{ marginBottom: "var(--partnerhome-spacing-5000)" }}>
          <h2
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-3000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              lineHeight: "var(--partnerhome-line-height-base)",
              color: "var(--partnerhome-text-color-base)",
              margin: 0,
              marginBottom: "var(--partnerhome-spacing-2000)",
            }}
          >
            Bar Charts
          </h2>
          <p
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              lineHeight: "var(--partnerhome-line-height-base)",
              color: "var(--partnerhome-text-color-base-subtle)",
              margin: 0,
              marginBottom: "var(--partnerhome-spacing-2000)",
            }}
          >
            Stacked bar charts with segmented hover tooltips and categorized legends.
            Used for response breakdown and multi-category comparison dashboards.
          </p>
          <PartRequestResponseBreakdown />
        </section>

        {/* Placeholder for other analytics components */}
        <section>
          <p
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              lineHeight: "var(--partnerhome-line-height-base)",
              color: "var(--partnerhome-text-color-base)",
              opacity: 0.6,
              margin: 0,
              textAlign: "center",
              padding: "var(--partnerhome-spacing-5000)",
            }}
          >
            Additional analytics components will be added here
          </p>
        </section>
      </div>
    </div>
  );
}