import React from "react";
import { Button } from "./Button";
import { ChevronRight, Info, Calendar, ExternalLink } from "lucide-react";
import { PerformanceCard } from "./analytics/PerformanceCards";

export function HomePage() {
  return (
    <div className="w-full min-h-full" style={{ position: "relative" }}>
      {/* Top Section - Grey Background */}
      <div className="bg-[var(--partnerhome-surface-color-inversesubtle)] p-[var(--partnerhome-spacing-4000)]">
        {/* Header */}
        <h1
          className="text-[var(--partnerhome-font-size-4000)] font-[var(--partnerhome-font-weight-bold)] text-[var(--partnerhome-text-color-base)]"
          style={{ 
            fontFamily: "'Lato', 'Inter', sans-serif",
            marginBottom: "var(--partnerhome-spacing-1500)"
          }}
        >
          Your Wayfair Dashboard
        </h1>

        {/* Metric Cards */}
        <div className="grid grid-cols-3 gap-[var(--partnerhome-spacing-2000)] mb-[var(--partnerhome-spacing-4000)]">
          {/* Active Orders */}
          <MetricCard
            count={0}
            label="Active Order(s)"
          />
          {/* Tickets */}
          <MetricCard
            count={0}
            label="Ticket(s)"
          />
          {/* Pending RMAs */}
          <MetricCard
            count={0}
            label="Pending RMAs"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-bold)] text-[var(--partnerhome-text-color-base)]"
            style={{ 
              fontFamily: "'Lato', 'Inter', sans-serif",
              marginBottom: "var(--partnerhome-spacing-1500)"
            }}
          >
            Quick Links
          </h3>
          <div className="flex items-center gap-[var(--partnerhome-spacing-2500)]">
            <QuickLink label="Product Management" />
            <QuickLink label="Inventory Management" />
            <QuickLink label="Pricing Home" />
            <QuickLink label="Dropship Orders" />
            <QuickLink label="Advertising" />
            <QuickLink label="Promotions" />
            <QuickLink label="Pending RMAs" />
          </div>
        </div>
      </div>

      {/* Bottom Section - White Background */}
      <div className="bg-white px-[var(--partnerhome-spacing-4000)] py-[var(--partnerhome-spacing-4000)]">
        {/* Two Column Layout: News & Growth Opportunities */}
        <div className="grid grid-cols-2 gap-[var(--partnerhome-spacing-3000)] mb-[var(--partnerhome-spacing-3000)]">
          {/* What's new on Partner Home */}
          <div
            className="bg-white rounded-[var(--partnerhome-radius-large)] p-[var(--partnerhome-spacing-3000)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              className="text-[var(--partnerhome-font-size-3000)] font-[var(--partnerhome-font-weight-bold)] text-[var(--partnerhome-text-color-base)]"
              style={{ 
                fontFamily: "'Lato', 'Inter', sans-serif",
                marginBottom: "var(--partnerhome-spacing-2000)"
              }}
            >
              What's new on Partner Home
            </h3>

            <NewsArticle
              date="Jan 22 2026"
              title="New Media Tray Order Feature"
              description="We've launched a new Media Tray Order feature! These enhancements allow you to manage the order in which your images appear on site through the Media tab in the Product Management Page. This allows you to customize your listing's media to meet your creative direction and preferences!"
              isFirst
            />
            <NewsArticle
              date="Jan 20 2026"
              title="New 'Groups' Feature in the Product Management Page"
              description="We've added a new 'Groups' feature that allows you to manage variant grouping details associated with a listing, including how they are named and ordered!"
            />
            <NewsArticle
              date="Jan 20 2026"
              title="Meet Accelerated Product Addition"
              description="We've launched a powerful new Product Addition experience that enables faster product launches on site, with greater flexibility and transparency than ever before!"
            />
            <NewsArticle
              date="Dec 17 2025"
              title="Contracted CGF Rates Now Display Instantly in Partner Home"
              description="We've improved the CGF Request a Quote tool to ensure your contracted ocean and drayage rates display instantly when you request a quote."
              isLast
            />

            <a
              href="#"
              className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-primary)] hover:text-[var(--partnerhome-text-color-primary-hover)] underline inline-block mt-[var(--partnerhome-spacing-2000)]"
              style={{ fontFamily: "'Lato', 'Inter', sans-serif" }}
            >
              View All Updates
            </a>
          </div>

          {/* Growth Opportunities */}
          <div
            className="bg-white rounded-[var(--partnerhome-radius-large)] p-[var(--partnerhome-spacing-3000)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              className="text-[var(--partnerhome-font-size-3000)] font-[var(--partnerhome-font-weight-bold)] text-[var(--partnerhome-text-color-base)]"
              style={{ 
                fontFamily: "'Lato', 'Inter', sans-serif",
                marginBottom: "var(--partnerhome-spacing-2000)"
              }}
            >
              Growth Opportunities
            </h3>

            <OpportunityCard
              icon={<ChartIcon />}
              title="Get Ready for Cyber 13!"
              description="Cyber 13 runs Nov 20–Dec 2! Submit top deals to boost visibility, drive traffic, and close the year strong with our biggest event of the season."
              buttonLabel="Submit Deals"
              buttonVariant="secondary"
            />
            <OpportunityCard
              icon={<ChartIcon />}
              title="Invest in Cyber Month Advertising"
              description="Cyber Month is peak traffic—launch Sponsored Products, optimize bids and budgets, and capture demand to grow sales and visibility all season."
              buttonLabel="Advertise Now"
              buttonVariant="secondary"
            />
            <OpportunityCard
              icon={<CalendarIcon />}
              title="Update Warehouse Hours"
              description="With the upcoming peak season, please update warehouse hours and mark any planned warehouse closures."
              buttonLabel="Update Now"
              buttonVariant="primary"
              isLast
            />
          </div>
        </div>

        {/* Business Performance - Single Column Width */}
        <div className="grid grid-cols-2 gap-[var(--partnerhome-spacing-3000)]">
          <div
            className="bg-white rounded-[var(--partnerhome-radius-large)] p-[var(--partnerhome-spacing-3000)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <div className="flex items-center justify-between mb-[var(--partnerhome-spacing-2000)]">
              <h3
                className="text-[var(--partnerhome-font-size-3000)] font-[var(--partnerhome-font-weight-bold)] text-[var(--partnerhome-text-color-base)]"
                style={{ fontFamily: "'Lato', 'Inter', sans-serif" }}
              >
                Business Performance
              </h3>
              <div className="flex items-center gap-[var(--partnerhome-spacing-1000)]">
                <Calendar size={16} className="text-[var(--partnerhome-text-color-base)]" />
                <span
                  className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-base)]"
                  style={{ fontFamily: "'Lato', 'Inter', sans-serif" }}
                >
                  01 January 2026 - 31 January 2026
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", gap: "var(--partnerhome-spacing-2000)", marginBottom: "var(--partnerhome-spacing-2000)", flexWrap: "wrap" }}>
              {/* Revenue Chart */}
              <PerformanceCard
                id="home-revenue"
                categoryLabel="PERFORMANCE"
                title="Revenue"
                value="$ 0.00"
                change="0.0% YoY"
                changeType="up"
                chartData={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
                yAxisLabels={["$0", "$0.2", "$0.4", "$0.6", "$0.8", "$1.0"]}
                xAxisLabels={["01/0.2", "01/0.4", "01/0.6", "01/0.8", "01/1"]}
                tooltipText="Total revenue generated over the selected time period"
                condensed
              />
              {/* Units Sold Chart */}
              <PerformanceCard
                id="home-units-sold"
                categoryLabel="PERFORMANCE"
                title="Units Sold"
                value="0.00"
                change="0.0% YoY"
                changeType="down"
                chartData={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
                yAxisLabels={["0", "0", "0", "1", "1", "1"]}
                xAxisLabels={["01/0.2", "01/0.4", "01/0.6", "01/0.8", "01/1"]}
                tooltipText="Total units sold over the selected time period"
                condensed
              />
            </div>

            <a
              href="#"
              className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-primary)] hover:text-[var(--partnerhome-text-color-primary-hover)] underline inline-block"
              style={{ fontFamily: "'Lato', 'Inter', sans-serif" }}
            >
              View Performance Summary
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Metric Card Component
function MetricCard({ count, label }: { count: number; label: string }) {
  return (
    <div
      className="bg-white rounded-[var(--partnerhome-radius-large)] p-[var(--partnerhome-spacing-2000)] flex items-center justify-between cursor-pointer transition-all hover:shadow-[var(--partnerhome-shadow-20)]"
      style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
    >
      <div className="flex items-center gap-[var(--partnerhome-spacing-1000)]">
        <div 
          className="w-[32px] h-[32px] rounded-full flex items-center justify-center"
          style={{ backgroundColor: "var(--partnerhome-border-color-base)" }}
        >
          <span
            className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-bold)] text-[var(--partnerhome-text-color-base)]"
            style={{ fontFamily: "'Lato', 'Inter', sans-serif" }}
          >
            {count}
          </span>
        </div>
        <span
          className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-base)]"
          style={{ fontFamily: "'Lato', 'Inter', sans-serif" }}
        >
          {label}
        </span>
      </div>
      <ChevronRight size={20} className="text-[var(--partnerhome-text-color-base)]" />
    </div>
  );
}

// Quick Link Component
function QuickLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-primary)] hover:text-[var(--partnerhome-text-color-primary-hover)] underline"
      style={{ fontFamily: "'Lato', 'Inter', sans-serif" }}
    >
      {label}
    </a>
  );
}

// News Article Component
function NewsArticle({
  date,
  title,
  description,
  isLast = false,
  isFirst = false,
}: {
  date: string;
  title: string;
  description: string;
  isLast?: boolean;
  isFirst?: boolean;
}) {
  return (
    <div
      className={`${!isLast ? "mb-[var(--partnerhome-spacing-3000)] pb-[var(--partnerhome-spacing-3000)]" : ""}`}
      style={!isLast ? { borderBottom: "1px solid var(--partnerhome-border-color-base)" } : {}}
    >
      <p
        className={`text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-base)] ${!isFirst ? "mt-[var(--partnerhome-spacing-4000)]" : ""}`}
        style={{ 
          fontFamily: "'Lato', 'Inter', sans-serif",
          marginBottom: "var(--partnerhome-spacing-500)"
        }}
      >
        {date}
      </p>
      <h4
        className="text-[var(--partnerhome-font-size-2000)] font-[var(--partnerhome-font-weight-bold)] text-[var(--partnerhome-text-color-base)] mt-0 mb-[var(--partnerhome-spacing-500)]"
        style={{ fontFamily: "'Lato', 'Inter', sans-serif" }}
      >
        {title}
      </h4>
      <p
        className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-base)] mb-[var(--partnerhome-spacing-2000)]"
        style={{ fontFamily: "'Lato', 'Inter', sans-serif" }}
      >
        {description}
      </p>
      <a
        href="#"
        className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-primary)] hover:text-[var(--partnerhome-text-color-primary-hover)] underline inline-flex items-center gap-[4px]"
        style={{ fontFamily: "'Lato', 'Inter', sans-serif" }}
      >
        Read More
        <ExternalLink size={16} />
      </a>
    </div>
  );
}

// Opportunity Card Component
function OpportunityCard({
  icon,
  title,
  description,
  buttonLabel,
  buttonVariant = "secondary",
  isLast = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonLabel: string;
  buttonVariant?: "primary" | "secondary";
  isLast?: boolean;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={`p-[var(--partnerhome-spacing-2000)] rounded-[var(--partnerhome-radius-medium)] ${!isLast ? "mb-[var(--partnerhome-spacing-2000)]" : ""} cursor-pointer transition-all`}
      style={{
        backgroundColor: isHovered ? "var(--partnerhome-surface-color-primarysubtle)" : "var(--partnerhome-surface-color-neutralsubtle)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between gap-[var(--partnerhome-spacing-2000)]">
        <div className="flex-1">
          <div className="flex items-center gap-[var(--partnerhome-spacing-1000)] mb-[var(--partnerhome-spacing-1000)]">
            {icon}
            <h4
              className="text-[var(--partnerhome-font-size-2000)] font-[var(--partnerhome-font-weight-bold)] text-[var(--partnerhome-text-color-base)]"
              style={{ fontFamily: "'Lato', 'Inter', sans-serif" }}
            >
              {title}
            </h4>
          </div>
          <p
            className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-base)]"
            style={{ fontFamily: "'Lato', 'Inter', sans-serif" }}
          >
            {description}
          </p>
        </div>
        <Button
          variant="secondary"
          size="condensed"
          style={{
            flexShrink: 0,
            whiteSpace: "nowrap",
            height: "40px",
            backgroundColor: isHovered ? "var(--partnerhome-bg-color-button-primary)" : "white",
            color: isHovered ? "var(--partnerhome-text-color-inverse)" : "var(--partnerhome-text-color-primary)",
            border: isHovered ? "none" : "1px solid var(--partnerhome-border-color-primary)",
          }}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}

// Icon Components
function OrderIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect
        x="2"
        y="2"
        width="12"
        height="12"
        stroke="var(--partnerhome-text-color-primary)"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 2v12M2 8h12"
        stroke="var(--partnerhome-text-color-primary)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function RMAIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 8l3 3 5-6"
        stroke="var(--partnerhome-text-color-primary)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M3 17V9M10 17V3M17 17V12"
        stroke="var(--partnerhome-text-color-base)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect
        x="3"
        y="4"
        width="14"
        height="13"
        rx="2"
        stroke="var(--partnerhome-text-color-base)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M3 8h14M7 3v2M13 3v2"
        stroke="var(--partnerhome-text-color-base)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}