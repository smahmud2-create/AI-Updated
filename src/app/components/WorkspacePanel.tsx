import { useState, useEffect, useRef } from "react";
import { Button } from "./Button";
import { EditIcon } from "./icons";
import { TableRow } from "./TableRow";
import { ProductSalesTrend, type Product as WorkspaceProductRow } from "./ProductSalesTrend";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import svgPaths from "../../imports/svg-0nid74xoow";

const RECOMMENDATION_INFO_TOOLTIP =
  "Suggested starting values based on similar patterns and context. You stay in control and can update them before approval.";

/** Matches Partner Assistant budget input card options (Chat). */
const INTENT_FOCUS_OPTIONS = [
  "Grow sales for my best opportunities",
  "Support products that are underperforming",
  "See where this budget could make the biggest difference",
  "Something else",
] as const;

const WORKSPACE_INTENT_AGENTS = [
  { name: "Performance Insights", initials: "PI", bgColor: "#66256A" },
  { name: "Promotions", initials: "PA", bgColor: "#1A8C5E" },
  { name: "Ads", initials: "AA", bgColor: "#2B6CB0" },
] as const;

/**
 * Agent chips on the Intent Summary card only. Styling lives in `global.css` (`.ph-intent-agent-chip*`)
 * with !important so layout is stable next to Tailwind preflight.
 */
function IntentAgentChips() {
  return (
    <div data-name="Intent Agent Chips" className="ph-intent-agent-chip-wrap">
      {WORKSPACE_INTENT_AGENTS.map((agent) => (
        <span key={agent.name} data-name={`Intent Agent Chip ${agent.initials}`} className="ph-intent-agent-chip">
          <span className="ph-intent-agent-chip-avatar" style={{ backgroundColor: agent.bgColor }}>
            {agent.initials}
          </span>
          <span className="ph-intent-agent-chip-label">{agent.name}</span>
        </span>
      ))}
    </div>
  );
}

function RecommendationInfoIcon({
  tooltip = RECOMMENDATION_INFO_TOOLTIP,
  ariaLabel = "About suggested values",
}: { tooltip?: string; ariaLabel?: string } = {}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={ariaLabel}
          style={{
            border: "none",
            background: "transparent",
            padding: 0,
            cursor: "help",
            display: "inline-flex",
            alignItems: "center",
            flexShrink: 0,
            verticalAlign: "middle",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <circle cx="7" cy="7" r="6" stroke="#646266" strokeWidth="1.2" />
            <path d="M7 6.5V10" stroke="#646266" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="7" cy="4.5" r="0.7" fill="#646266" />
          </svg>
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={6} className="max-w-[280px] text-left">
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}

interface WorkspacePanelProps {
  onClose: () => void;
  onCardCompleted?: () => void;
}

function WorkspaceCard({
  title,
  description,
  statusText,
  statusColor,
  fields,
  children,
  footer,
}: {
  title: string;
  description?: string;
  statusText?: string;
  statusColor?: string;
  fields: { label: string; value: React.ReactNode; hasInfo?: boolean }[];
  children?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div
      style={{
        border: "1px solid var(--partnerhome-border-color-base, #D1D1D6)",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        fontFamily: "'Lato', sans-serif",
      }}
    >
      {/* Title + Status */}
      <div>
        <p style={{ fontSize: "var(--partnerhome-font-size-2000)", lineHeight: "24px", fontWeight: "bold", color: "#211E22", margin: "0 0 6px 0" }}>{title}</p>
        {description && (
          <p style={{ fontSize: "var(--partnerhome-font-size-1000)", color: "#4D4A4F", margin: "0 0 6px 0", lineHeight: "20px", fontWeight: "normal" }}>{description}</p>
        )}
        {statusText && statusColor && (
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: statusColor, flexShrink: 0 }} />
            <span style={{ fontSize: "var(--partnerhome-font-size-500)", color: "#646266", fontWeight: "normal" }}>{statusText}</span>
          </div>
        )}
      </div>

      {/* Fields */}
      {fields.map((f, i) => (
        <div key={i}>
          {f.label && (
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
              <span style={{ fontSize: "var(--partnerhome-font-size-500)", color: "#646266", fontWeight: "bold" }}>{f.label}</span>
              {f.hasInfo && <RecommendationInfoIcon />}
            </div>
          )}
          {typeof f.value === "string" ? (
          <div
            style={{
              border: "1px solid #D1D1D6",
              borderRadius: "4px",
              padding: "8px 12px",
              fontSize: "var(--partnerhome-font-size-500)",
              color: "#211E22",
              fontWeight: "normal",
              display: "inline-block",
              minWidth: "80px",
            }}
          >
            {f.value}
          </div>
          ) : (
            f.value
          )}
        </div>
      ))}

      {/* Enrollment status */}
      {children}

      {/* Action buttons */}
      {footer !== undefined ? footer : (
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <ReviewButton />
        <ApproveButton />
      </div>
      )}
    </div>
  );
}

function ReviewButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Lato', sans-serif",
        fontSize: "var(--partnerhome-font-size-500)",
        fontWeight: "bold",
        color: "var(--partnerhome-text-color-primary)",
        backgroundColor: hovered ? "var(--partnerhome-bg-color-button-tertiary-hover)" : "transparent",
        border: "1.5px solid var(--partnerhome-border-color-primary)",
        borderRadius: "20px",
        padding: "6px 20px",
        cursor: "pointer",
        transition: "background-color 0.15s",
        boxShadow: "none",
      }}
    >
      Review
    </button>
  );
}

function ApproveButton({ onClick }: { onClick?: () => void } = {}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        fontFamily: "'Lato', sans-serif",
        fontSize: "var(--partnerhome-font-size-500)",
        fontWeight: "bold",
        color: "#FFFFFF",
        backgroundColor: hovered ? "var(--partnerhome-bg-color-button-primary-hover)" : "var(--partnerhome-bg-color-button-primary)",
        border: "none",
        borderRadius: "20px",
        padding: "6px 20px",
        cursor: "pointer",
        transition: "background-color 0.15s",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {/* Sparkle icon */}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1L8.5 5.5L13 7L8.5 8.5L7 13L5.5 8.5L1 7L5.5 5.5L7 1Z" fill="white" />
      </svg>
      Approve
    </button>
  );
}

function ViewOfferButton({ label = "View Offer" }: { label?: string } = {}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Lato', sans-serif",
        fontSize: "var(--partnerhome-font-size-500)",
        fontWeight: "bold",
        color: "var(--partnerhome-text-color-primary)",
        backgroundColor: hovered ? "var(--partnerhome-bg-color-button-tertiary-hover)" : "transparent",
        border: "1.5px solid var(--partnerhome-border-color-primary)",
        borderRadius: "20px",
        padding: "6px 20px",
        cursor: "pointer",
        transition: "background-color 0.15s",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {label}
    </button>
  );
}

const COUPON_REDEMPTION_RATE = 0.135;

const TOP_RIGHT_BUDGET_TOOLTIP =
  "This recommendation uses the full selected budget across one coupon and one Sponsored Products campaign for the same 4 products. Ad spend is planned. Coupon cost is estimated based on sales and redemption.";

function roundToNearest(value: number, step: number): number {
  if (step <= 0) return value;
  return Math.round(value / step) * step;
}

/** Estimated coupon cost: based on the 4 products' recent unit sales, the discount, and a redemption rate. */
function computeCouponCost(products: WorkspaceProductRow[], discountPct: number): number {
  if (products.length === 0 || discountPct <= 0) return 0;
  return products.reduce(
    (sum, p) =>
      sum + Math.max(0, p.unitsSold) * p.price * (discountPct / 100) * COUPON_REDEMPTION_RATE,
    0,
  );
}

function EnrollmentStatusRow({ enrollment }: { enrollment: string }) {
  return (
    <p style={{ fontSize: "12px", lineHeight: "16px", color: "#646266", fontWeight: "normal", margin: 0 }}>
      Enrollment:{" "}
      <span style={{ color: enrollment === "Completed" ? "#1A8C5E" : "#211E22", fontWeight: "bold" }}>{enrollment}</span>
    </p>
  );
}

function ApprovalProgressBar({ onCancel, onComplete }: { onCancel: () => void; onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [cancelHovered, setCancelHovered] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    let cancelled = false;
    let rafId: number;
    let doneTimeout: ReturnType<typeof setTimeout>;
    const delay = 300;
    const timeout = setTimeout(() => {
      const start = Date.now();
      const animate = () => {
        if (cancelled) return;
        const elapsed = Date.now() - start;
        let p: number;
        if (elapsed < 1000) {
          p = (elapsed / 1000) * 50;
        } else if (elapsed < 2000) {
          p = 50 + ((elapsed - 1000) / 1000) * 40;
        } else if (elapsed < 2500) {
          p = 90 + ((elapsed - 2000) / 500) * 10;
        } else {
          p = 100;
        }
        setProgress(Math.min(p, 100));
        if (p < 100) {
          rafId = requestAnimationFrame(animate);
        } else {
          // Let 100% render visibly for 500ms before completing
          doneTimeout = setTimeout(() => {
            if (!cancelled) onCompleteRef.current();
          }, 500);
        }
      };
      rafId = requestAnimationFrame(animate);
    }, delay);
    return () => { cancelled = true; clearTimeout(timeout); clearTimeout(doneTimeout); cancelAnimationFrame(rafId); };
  }, []);

  const currentStage = progress >= 90 ? "launching" : progress >= 50 ? "launching_pending" : "drafting";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {/* Progress bar + cancel */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ flex: 1, height: "6px", backgroundColor: "#E8E8EC", borderRadius: "3px", overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              backgroundColor: "var(--partnerhome-bg-color-button-primary)",
              borderRadius: "3px",
              transition: "width 0.1s linear",
            }}
          />
        </div>
        <button
          onClick={onCancel}
          onMouseEnter={() => setCancelHovered(true)}
          onMouseLeave={() => setCancelHovered(false)}
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "var(--partnerhome-font-size-500)",
            fontWeight: "normal",
            color: cancelHovered ? "#C13A3A" : "#646266",
            backgroundColor: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
            boxShadow: "none",
            whiteSpace: "nowrap",
            textDecoration: cancelHovered ? "underline" : "none",
          }}
        >
          Cancel
        </button>
      </div>

      {/* Stages */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {progress >= 50 ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="7" cy="7" r="6" stroke="var(--partnerhome-text-color-primary)" strokeWidth="1.2" />
              <path d="M4.5 7L6.5 9L10 5" stroke="var(--partnerhome-text-color-primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "3px", flexShrink: 0, width: "14px", justifyContent: "center" }}>
              {[0, 1, 2].map((d) => (
                <div
                  key={d}
                  style={{
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    backgroundColor: "var(--partnerhome-bg-color-button-primary)",
                    animation: `thinkingDot 1.4s ease-in-out ${d * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
          )}
          <span style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "var(--partnerhome-font-size-500)",
            color: progress >= 50 ? "#646266" : "#211E22",
            fontWeight: "normal",
          }}>
            Drafting the offer
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {progress >= 90 ? (
            progress >= 100 ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                <circle cx="7" cy="7" r="6" stroke="var(--partnerhome-text-color-primary)" strokeWidth="1.2" />
                <path d="M4.5 7L6.5 9L10 5" stroke="var(--partnerhome-text-color-primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: "3px", flexShrink: 0, width: "14px", justifyContent: "center" }}>
                {[0, 1, 2].map((d) => (
                  <div
                    key={d}
                    style={{
                      width: "3px",
                      height: "3px",
                      borderRadius: "50%",
                      backgroundColor: "var(--partnerhome-bg-color-button-primary)",
                      animation: `thinkingDot 1.4s ease-in-out ${d * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
            )
          ) : (
            <div style={{ width: "14px", height: "14px", borderRadius: "50%", border: "1.2px solid #D1D1D6", flexShrink: 0 }} />
          )}
          <span style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "var(--partnerhome-font-size-500)",
            color: progress >= 90 ? "#211E22" : "#93939A",
            fontWeight: "normal",
          }}>
            Launching the offer
          </span>
        </div>
      </div>

      <style>{`
        @keyframes thinkingDot {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

const WORKSPACE_INITIAL_PRODUCTS: WorkspaceProductRow[] = [
  {
    name: "Rhea Area Rug 5'x7'",
    asin: "B09RHE7890",
    impressionsPercentile: 14,
    totalImpressions: 894_200,
    conversionRate: 3.1,
    conversionVsClass: -2.1,
    unitsSold: 142,
    uniqueVisits: 3820,
    salesTrend: -12.3,
    price: 249,
    inventory: 124,
    image:
      "https://images.unsplash.com/photo-1761849450843-4ce9e6560b94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3ZlbiUyMGFyZWElMjBydWclMjB0ZXh0aWxlJTIwcGF0dGVybnxlbnwxfHx8fDE3NzM3NjA2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Stainless Steel Water Bottle 32oz",
    asin: "B08ABC5678",
    impressionsPercentile: 22,
    totalImpressions: 521_400,
    conversionRate: 2.4,
    conversionVsClass: -3.4,
    unitsSold: 87,
    uniqueVisits: 2290,
    salesTrend: -8.5,
    price: 29,
    inventory: 892,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMHdhdGVyJTIwYm90dGxlJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzM3NTQzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Organic Cotton Pillow Cases (Set of 2)",
    asin: "B07DEF9012",
    impressionsPercentile: 8,
    totalImpressions: 481_900,
    conversionRate: 1.9,
    conversionVsClass: -4.6,
    unitsSold: 53,
    uniqueVisits: 2524,
    salesTrend: -18.7,
    price: 39,
    inventory: 48,
    image:
      "https://images.unsplash.com/photo-1698746043955-42b03ddedfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjBwaWxsb3clMjBjYXNlcyUyMGJlZGRpbmd8ZW58MXx8fHwxNzczNzU5OTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "LED Desk Lamp with USB Charging",
    asin: "B0AGHI3456",
    impressionsPercentile: 27,
    totalImpressions: 712_050,
    conversionRate: 2.9,
    conversionVsClass: -2.1,
    unitsSold: 198,
    uniqueVisits: 3882,
    salesTrend: -5.2,
    price: 59,
    inventory: 312,
    image:
      "https://images.unsplash.com/photo-1766411503497-911658181192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBkZXNrJTIwbGFtcCUyMHByb2R1Y3R8ZW58MXx8fHwxNzczNzU5OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function WorkspacePanel({ onClose, onCardCompleted }: WorkspacePanelProps) {
  const [selectedProductAsin, setSelectedProductAsin] = useState<string | null>(null);
  const [products, setProducts] = useState<WorkspaceProductRow[]>(() => [...WORKSPACE_INITIAL_PRODUCTS]);
  const [isUpdatingProducts, setIsUpdatingProducts] = useState(false);
  const [selectedProductAsins, setSelectedProductAsins] = useState<string[]>([]);
  const [couponName, setCouponName] = useState("SPRING");
  const [couponDiscountPct, setCouponDiscountPct] = useState(10);
  const [biddingOption, setBiddingOption] = useState<"ai" | "manual">("ai");
  const [campaignBudget, setCampaignBudget] = useState(300);
  const [card1Approved, setCard1Approved] = useState<"idle" | "progress" | "completed">("idle");
  const [card2Approved, setCard2Approved] = useState<"idle" | "progress" | "completed">("idle");

  // Intent: summary by default; Edit opens draft fields. Cancel restores applied and exits edit.
  const [isIntentEditing, setIsIntentEditing] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [draftBudget, setDraftBudget] = useState("$1,000");
  const [draftFocusOption, setDraftFocusOption] = useState<string>(INTENT_FOCUS_OPTIONS[1]);
  const [draftFocusDetails, setDraftFocusDetails] = useState("");
  const [appliedIntent, setAppliedIntent] = useState({
    budget: "$1,000",
    focusOption: INTENT_FOCUS_OPTIONS[1],
    focusDetails: "",
  });
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    if (!import.meta.env.DEV) return;
    console.info(
      "%c[Partner Home prototype]%c WorkspacePanel loaded. Intent agent chips use class %cph-intent-agent-chip%c. If edits never appear, this tab is not hitting this dev server (use %chttp://localhost:5174/%c).",
      "color:#66256A;font-weight:bold",
      "color:#333",
      "font-family:monospace;color:#0a0",
      "color:#333",
      "font-family:monospace;color:#06c",
      "color:#333"
    );
  }, []);

  const handleStartEditIntent = () => {
    setDraftBudget(appliedIntent.budget);
    setDraftFocusOption(appliedIntent.focusOption);
    setDraftFocusDetails(appliedIntent.focusDetails);
    setIsIntentEditing(true);
  };

  const handleCancelIntent = () => {
    setDraftBudget(appliedIntent.budget);
    setDraftFocusOption(appliedIntent.focusOption);
    setDraftFocusDetails(appliedIntent.focusDetails);
    setIsIntentEditing(false);
  };

  const handleApplyIntent = () => {
    const focusDetails = draftFocusOption === "Something else" ? draftFocusDetails : "";
    setAppliedIntent({
      budget: draftBudget,
      focusOption: draftFocusOption,
      focusDetails,
    });
    setDraftFocusDetails(focusDetails);
    setIsIntentEditing(false);
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setRefreshCount((c) => c + 1);
    }, 1800);
  };

  const couponCost = roundToNearest(computeCouponCost(products, couponDiscountPct), 50);
  const selectedBudget = (() => {
    const n = parseInt(appliedIntent.budget.replace(/[^0-9]/g, ""), 10);
    return isNaN(n) ? 1000 : n;
  })();
  const totalAllocated = couponCost + campaignBudget;
  const isOverBudget = totalAllocated > selectedBudget;
  const overBudgetAmount = totalAllocated - selectedBudget;

  const toggleUpdateProductsMode = () => {
    setIsUpdatingProducts((prev) => {
      const next = !prev;
      if (!next) setSelectedProductAsins([]);
      return next;
    });
  };

  const toggleProductRowSelected = (asin: string) => {
    setSelectedProductAsins((prev) =>
      prev.includes(asin) ? prev.filter((a) => a !== asin) : [...prev, asin],
    );
  };

  const allProductsSelected = products.length > 0 && selectedProductAsins.length === products.length;

  const toggleSelectAllProducts = () => {
    setSelectedProductAsins((prev) =>
      prev.length === products.length && products.length > 0 ? [] : products.map((p) => p.asin),
    );
  };

  const handleAddProduct = () => {
    setProducts((prev) => {
      const n = prev.length + 1;
      const newAsin = `B0NEW${String(n).padStart(5, "0")}`;
      return [
        ...prev,
        {
          name: "New product",
          asin: newAsin,
          impressionsPercentile: 40,
          totalImpressions: 100_000,
          conversionRate: 2.0,
          conversionVsClass: -0.5,
          unitsSold: 0,
          uniqueVisits: 100,
          salesTrend: 0,
          price: 49,
          inventory: 50,
          image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80",
        },
      ];
    });
  };

  const numericColumnHeaderStyle = {
    padding: "0 var(--partnerhome-spacing-2000)",
    height: "48px",
    textAlign: "right" as const,
    fontSize: "var(--partnerhome-font-size-1000)",
    fontWeight: "var(--partnerhome-font-weight-bold)",
    color: "var(--partnerhome-text-color-base)",
    fontFamily: "var(--partnerhome-font-family-base)",
    verticalAlign: "middle" as const,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#FAFAFA",
        fontFamily: "'Lato', sans-serif",
      }}
      data-name="Workspace Panel"
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          borderBottom: "1px solid var(--partnerhome-border-color-base, #D1D1D6)",
          backgroundColor: "#FFFFFF",
          flexShrink: 0,
        }}
      >
        <p
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#211E22",
            margin: 0,
          }}
        >
          Under Performing Products Recovery Workspace
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Download icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            style={{ cursor: "pointer", flexShrink: 0 }}
          >
            <path
              d="M9 3V12M9 12L5 8M9 12L13 8"
              stroke="#646266"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 15H15"
              stroke="#646266"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          {/* Close icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            style={{ cursor: "pointer", flexShrink: 0 }}
            onClick={onClose}
          >
            <path
              d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5"
              stroke="#646266"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Content - scrollable */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Intent Summary Card — white surface, Wayfair purple left accent */}
        <div
          id="ph-intent-summary-card"
          style={{
            border: `1px solid ${isRefreshing ? "var(--partnerhome-border-color-primary)" : "var(--partnerhome-border-color-base)"}`,
            borderLeft: `3px solid ${isRefreshing ? "var(--partnerhome-border-color-primary)" : "var(--partnerhome-bg-color-primary-prominent)"}`,
            borderRadius: "var(--partnerhome-radius-large)",
            backgroundColor: "var(--partnerhome-bg-color-base)",
            padding: "var(--partnerhome-spacing-1500) var(--partnerhome-spacing-2000)",
            fontFamily: "'Lato', 'Inter', sans-serif",
            display: "flex",
            flexDirection: "column",
            gap: "var(--partnerhome-spacing-1000)",
            transition: "background-color 0.3s ease",
            position: "relative",
          }}
        >
          {/* Title row: summary shows Edit; edit mode shows Apply & Refresh + Cancel */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "var(--partnerhome-spacing-1000)",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                lineHeight: "24px",
                minWidth: 0,
              }}
            >
              {isRefreshing ? "Refreshing workspace…" : "Intent Summary"}
            </span>
            {!isRefreshing && isIntentEditing && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--partnerhome-spacing-1500)",
                  flexShrink: 0,
                  marginLeft: "auto",
                }}
              >
                <button
                  type="button"
                  disabled={isRefreshing}
                  onClick={handleCancelIntent}
                  style={{
                    fontFamily: "var(--partnerhome-font-family-base)",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    color: "var(--partnerhome-text-color-primary)",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: isRefreshing ? "not-allowed" : "pointer",
                    textDecoration: "underline",
                    opacity: isRefreshing ? 0.5 : 1,
                  }}
                >
                  Cancel
                </button>
                <Button variant="primary" size="condensed" type="button" disabled={isRefreshing} onClick={handleApplyIntent}>
                  Apply & Refresh
                </Button>
              </div>
            )}
            {!isRefreshing && !isIntentEditing && (
              <Button
                variant="text"
                size="condensed"
                onClick={handleStartEditIntent}
                style={{ gap: "var(--partnerhome-spacing-500)", flexShrink: 0, marginLeft: "auto" }}
              >
                <EditIcon size={14} color="var(--partnerhome-text-color-primary)" />
                <span style={{ color: "var(--partnerhome-text-color-primary)", fontWeight: "var(--partnerhome-font-weight-normal)" }}>Edit</span>
              </Button>
            )}
          </div>

          {!isIntentEditing ? (
            /* Read-only summary — grid: label column hugs widest label; values align */
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--partnerhome-spacing-500)" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "max-content minmax(0, 1fr)",
                  columnGap: "var(--partnerhome-spacing-1000)",
                  rowGap: "var(--partnerhome-spacing-1500)",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "20px",
                    fontWeight: "var(--partnerhome-font-weight-bold)",
                    color: "#646266",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    paddingTop: "1px",
                  }}
                >
                  Budget
                </span>
                <span style={{ fontSize: "var(--partnerhome-font-size-1000)", lineHeight: "20px", color: "var(--partnerhome-text-color-base)", fontWeight: "var(--partnerhome-font-weight-normal)" }}>
                  {appliedIntent.budget}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "20px",
                    fontWeight: "var(--partnerhome-font-weight-bold)",
                    color: "#646266",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    paddingTop: "1px",
                  }}
                >
                  Focus
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--partnerhome-spacing-250)", minWidth: 0 }}>
                  <span style={{ fontSize: "var(--partnerhome-font-size-1000)", color: "var(--partnerhome-text-color-base)", fontWeight: "var(--partnerhome-font-weight-normal)", lineHeight: "20px" }}>
                    {appliedIntent.focusOption}
                  </span>
                  {appliedIntent.focusOption === "Something else" && appliedIntent.focusDetails.trim() !== "" && (
                    <span style={{ fontSize: "12px", color: "#646266", fontWeight: "var(--partnerhome-font-weight-normal)", lineHeight: "16px" }}>
                      {appliedIntent.focusDetails}
                    </span>
                  )}
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "20px",
                    fontWeight: "var(--partnerhome-font-weight-bold)",
                    color: "#646266",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    paddingTop: "2px",
                  }}
                >
                  Collaborating Agents
                </span>
                <div style={{ minWidth: 0 }}>
                  <IntentAgentChips />
                </div>
              </div>
              {refreshCount > 0 && (
                <p style={{ margin: 0, fontSize: "12px", lineHeight: "16px", color: "#646266", fontWeight: "normal" }}>
                  Workspace refreshed based on updated intent.
                </p>
              )}
            </div>
          ) : (
            /* Editable intent — compact grid; pills + Add New on one row */
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "max-content minmax(0, 1fr)",
                columnGap: "var(--partnerhome-spacing-1000)",
                rowGap: "var(--partnerhome-spacing-1000)",
                alignItems: "start",
                fontSize: "var(--partnerhome-font-size-1000)",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  lineHeight: "16px",
                  fontWeight: "var(--partnerhome-font-weight-bold)",
                  color: "#646266",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  paddingTop: "10px",
                }}
              >
                Budget
              </span>
              <input
                type="text"
                value={draftBudget}
                onChange={(e) => setDraftBudget(e.target.value)}
                disabled={isRefreshing}
                style={{
                  border: "1px solid var(--partnerhome-border-color-base)",
                  borderRadius: "var(--partnerhome-radius-base)",
                  padding: "0 10px",
                  height: "36px",
                  fontSize: "var(--partnerhome-font-size-1000)",
                  fontFamily: "'Lato', sans-serif",
                  color: "var(--partnerhome-text-color-base)",
                  outline: "none",
                  width: "140px",
                  opacity: isRefreshing ? 0.6 : 1,
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  lineHeight: "16px",
                  fontWeight: "var(--partnerhome-font-weight-bold)",
                  color: "#646266",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  paddingTop: "4px",
                  marginTop: "var(--partnerhome-spacing-1000)",
                }}
              >
                Focus
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--partnerhome-spacing-500)", minWidth: 0 }}>
                <div
                  role="radiogroup"
                  aria-label="Focus"
                  style={{ display: "flex", flexDirection: "column", gap: "var(--partnerhome-spacing-250)", fontSize: "var(--partnerhome-font-size-1000)" }}
                >
                  {INTENT_FOCUS_OPTIONS.map((opt, idx) => {
                    const id = `intent-focus-${idx}`;
                    return (
                      <label
                        key={opt}
                        htmlFor={id}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "var(--partnerhome-spacing-500)",
                          cursor: isRefreshing ? "default" : "pointer",
                          fontSize: "var(--partnerhome-font-size-1000)",
                          color: "var(--partnerhome-text-color-base)",
                          fontWeight: "var(--partnerhome-font-weight-normal)",
                          lineHeight: "20px",
                          padding: "2px 0",
                        }}
                      >
                        <input
                          id={id}
                          type="radio"
                          name="intent-focus"
                          checked={draftFocusOption === opt}
                          onChange={() => {
                            setDraftFocusOption(opt);
                            if (opt !== "Something else") setDraftFocusDetails("");
                          }}
                          disabled={isRefreshing}
                          style={{ marginTop: "2px", flexShrink: 0, accentColor: "var(--partnerhome-text-color-primary)" }}
                        />
                        <span style={{ fontSize: "var(--partnerhome-font-size-1000)" }}>{opt}</span>
                      </label>
                    );
                  })}
                </div>
                {draftFocusOption === "Something else" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--partnerhome-spacing-250)" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        lineHeight: "16px",
                        fontWeight: "var(--partnerhome-font-weight-bold)",
                        color: "#646266",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Describe your goal
                    </span>
                    <textarea
                      value={draftFocusDetails}
                      onChange={(e) => setDraftFocusDetails(e.target.value)}
                      disabled={isRefreshing}
                      rows={2}
                      placeholder="e.g. shift clearance inventory in one region before Q3"
                      style={{
                        border: "1px solid var(--partnerhome-border-color-base)",
                        borderRadius: "var(--partnerhome-radius-base)",
                        padding: "8px 10px",
                        fontSize: "var(--partnerhome-font-size-1000)",
                        lineHeight: "20px",
                        fontFamily: "'Lato', sans-serif",
                        color: "var(--partnerhome-text-color-base)",
                        resize: "none",
                        outline: "none",
                        width: "100%",
                        boxSizing: "border-box",
                        opacity: isRefreshing ? 0.6 : 1,
                      }}
                    />
                  </div>
                )}
              </div>
              <span
                style={{
                  fontSize: "12px",
                  lineHeight: "16px",
                  fontWeight: "var(--partnerhome-font-weight-bold)",
                  color: "#646266",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  paddingTop: "4px",
                  marginTop: "var(--partnerhome-spacing-1000)",
                }}
              >
                Collaborating Agents
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  columnGap: "var(--partnerhome-spacing-1500)",
                  rowGap: "var(--partnerhome-spacing-500)",
                  minWidth: 0,
                }}
              >
                <IntentAgentChips />
                <Button
                  variant="text"
                  size="condensed"
                  type="button"
                  disabled={isRefreshing}
                  onClick={() => {
                    /* prototype: wire add-collaborator flow when defined */
                  }}
                  style={{
                    flexShrink: 0,
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    lineHeight: "20px",
                  }}
                >
                  + Add New
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Section: Products that may need attention (table) */}
        {/* Refreshing overlay wrapper */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "24px", opacity: isRefreshing ? 0.35 : 1, pointerEvents: isRefreshing ? "none" : "auto", transition: "opacity 0.3s ease" }}>
        {selectedProductAsin ? (
          <ProductSalesTrend
            product={products.find((p) => p.asin === selectedProductAsin)!}
            onBack={() => setSelectedProductAsin(null)}
          />
        ) : (
        <div
          style={{
            border: "1px solid var(--partnerhome-border-color-base, #D1D1D6)",
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            padding: "24px",
          }}
        >
          {/* Section header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* Drag handle */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, cursor: "grab" }}>
                <circle cx="6" cy="4" r="1.2" fill="#93939A" />
                <circle cx="10" cy="4" r="1.2" fill="#93939A" />
                <circle cx="6" cy="8" r="1.2" fill="#93939A" />
                <circle cx="10" cy="8" r="1.2" fill="#93939A" />
                <circle cx="6" cy="12" r="1.2" fill="#93939A" />
                <circle cx="10" cy="12" r="1.2" fill="#93939A" />
              </svg>
              <p style={{ fontSize: "var(--partnerhome-font-size-2000)", lineHeight: "24px", fontWeight: "bold", color: "#211E22", margin: 0 }}>
                Products that may need attention
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--partnerhome-spacing-1500)", flexShrink: 0 }}>
              {isUpdatingProducts ? (
                <>
                  <button
                    type="button"
                    onClick={handleAddProduct}
                    style={{
                      fontFamily: "var(--partnerhome-font-family-base)",
                      fontSize: "var(--partnerhome-font-size-1000)",
                      fontWeight: "var(--partnerhome-font-weight-normal)",
                      color: "var(--partnerhome-text-color-primary)",
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Add Products
                  </button>
                  <Button variant="primary" size="condensed" onClick={toggleUpdateProductsMode}>
                    Done
                  </Button>
                </>
              ) : (
                <Button
                  variant="text"
                  size="condensed"
                  onClick={toggleUpdateProductsMode}
                  style={{ gap: "var(--partnerhome-spacing-500)", flexShrink: 0 }}
                >
                  <EditIcon size={14} color="var(--partnerhome-text-color-primary)" />
                  <span style={{ color: "var(--partnerhome-text-color-primary)", fontWeight: "var(--partnerhome-font-weight-normal)" }}>
                    Edit
                  </span>
                </Button>
              )}
            </div>
          </div>
          <div
            role="note"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              padding: "12px 14px",
              margin: "0 0 var(--partnerhome-spacing-2000) 0",
              borderRadius: "var(--partnerhome-radius-base)",
              border: "1px solid #E0D6E3",
              backgroundColor: "#F8F2FA",
              fontFamily: "'Lato', sans-serif",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
              style={{ flexShrink: 0, marginTop: "1px" }}
            >
              <path d={svgPaths.p3bab4b72} fill="url(#banner_paint0)" />
              <path
                d={svgPaths.p16776880}
                fill="#F5E8FA"
                stroke="url(#banner_paint1)"
                strokeLinejoin="round"
                strokeWidth="1.64074"
              />
              <defs>
                <linearGradient id="banner_paint0" gradientUnits="userSpaceOnUse" x1="18.8305" x2="18.8305" y1="1.36189" y2="6.91484">
                  <stop stopColor="#7B189F" />
                  <stop offset="1" stopColor="#D5B9DF" />
                </linearGradient>
                <linearGradient id="banner_paint1" gradientUnits="userSpaceOnUse" x1="11.3383" x2="11.3383" y1="1" y2="20.4619">
                  <stop stopColor="#7A2798" />
                  <stop offset="1" stopColor="#DFC1EA" />
                </linearGradient>
              </defs>
            </svg>
            <p
              style={{
                margin: 0,
                fontSize: "var(--partnerhome-font-size-1000)",
                lineHeight: "20px",
                color: "#211E22",
                fontWeight: "normal",
              }}
            >
              These products were flagged because they are converting below similar products in their class and have lower impression percentile. You can review and edit the list if needed.
            </p>
          </div>

          {/* Product table using P table components */}
          <div
            style={{
              border: "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
              borderRadius: "var(--partnerhome-radius-base)",
              overflowX: "auto",
              overflowY: "hidden",
            }}
          >
            <table
              style={{
                width: "100%",
                minWidth: isUpdatingProducts ? "1232px" : "1180px",
                borderCollapse: "collapse",
                fontFamily: "var(--partnerhome-font-family-base)",
              }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom: "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
                  }}
                >
                  {isUpdatingProducts && (
                    <th
                      style={{
                        width: "44px",
                        padding: "0 0 0 var(--partnerhome-spacing-2000)",
                        height: "48px",
                        textAlign: "left",
                        verticalAlign: "middle",
                        fontFamily: "var(--partnerhome-font-family-base)",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={allProductsSelected}
                        onChange={toggleSelectAllProducts}
                        aria-label="Select all products"
                        style={{
                          width: "16px",
                          height: "16px",
                          cursor: "pointer",
                          accentColor: "var(--partnerhome-text-color-primary)",
                        }}
                      />
                    </th>
                  )}
                  <th
                    style={{
                      padding: "0 var(--partnerhome-spacing-2000)",
                      height: "48px",
                      textAlign: "left",
                      fontSize: "var(--partnerhome-font-size-1000)",
                      fontWeight: "var(--partnerhome-font-weight-bold)",
                      color: "var(--partnerhome-text-color-base)",
                      fontFamily: "var(--partnerhome-font-family-base)",
                    }}
                  >
                    Product
                  </th>
                  <th style={{ ...numericColumnHeaderStyle, width: "100px" }}>Inventory</th>
                  <th style={{ ...numericColumnHeaderStyle, width: "110px" }}>Sales trend</th>
                  <th style={{ ...numericColumnHeaderStyle, width: "110px" }}>Units sold</th>
                  <th style={{ ...numericColumnHeaderStyle, width: "180px" }}>Conversion rate</th>
                  <th style={{ ...numericColumnHeaderStyle, width: "120px" }}>Unique visits</th>
                  <th style={{ ...numericColumnHeaderStyle, width: "150px" }}>Impression percentile</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <TableRow
                    key={product.asin}
                    style={{
                      borderBottom: idx < products.length - 1 ? "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)" : "none",
                      cursor: "pointer",
                      backgroundColor:
                        isUpdatingProducts && selectedProductAsins.includes(product.asin)
                          ? "var(--partnerhome-bg-color-secondaryhover, #F3F0F5)"
                          : undefined,
                    }}
                    onClick={() => {
                      if (isUpdatingProducts) {
                        toggleProductRowSelected(product.asin);
                      } else {
                        setSelectedProductAsin(product.asin);
                      }
                    }}
                  >
                    {isUpdatingProducts && (
                      <td
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          width: "44px",
                          padding: "0 0 0 var(--partnerhome-spacing-2000)",
                          height: "56px",
                          verticalAlign: "middle",
                          fontFamily: "var(--partnerhome-font-family-base)",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={selectedProductAsins.includes(product.asin)}
                          onChange={() => toggleProductRowSelected(product.asin)}
                          aria-label={`Select ${product.name}`}
                          style={{
                            width: "16px",
                            height: "16px",
                            cursor: "pointer",
                            accentColor: "var(--partnerhome-text-color-primary)",
                          }}
                        />
                      </td>
                    )}
                    <td
                      style={{
                        padding: "0 var(--partnerhome-spacing-2000)",
                        height: "56px",
                        verticalAlign: "middle",
                        fontFamily: "var(--partnerhome-font-family-base)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "var(--partnerhome-spacing-1500)" }}>
                        {/* Product image thumbnail */}
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
                    </td>
                    <td
                      style={{
                        padding: "0 var(--partnerhome-spacing-2000)",
                        height: "56px",
                        textAlign: "right",
                        fontSize: "var(--partnerhome-font-size-1000)",
                        fontWeight: "var(--partnerhome-font-weight-normal)",
                        color: "var(--partnerhome-text-color-base)",
                        fontFamily: "var(--partnerhome-font-family-base)",
                        verticalAlign: "middle",
                      }}
                    >
                      {product.inventory.toLocaleString()}
                    </td>
                    <td
                      style={{
                        padding: "0 var(--partnerhome-spacing-2000)",
                        height: "56px",
                        textAlign: "right",
                        fontSize: "var(--partnerhome-font-size-1000)",
                        fontWeight: "var(--partnerhome-font-weight-normal)",
                        color: product.salesTrend < 0 ? "#C13A3A" : "var(--partnerhome-text-color-base)",
                        fontFamily: "var(--partnerhome-font-family-base)",
                        verticalAlign: "middle",
                      }}
                    >
                      {product.salesTrend < 0 ? "" : "+"}{product.salesTrend}%
                    </td>
                    <td
                      style={{
                        padding: "0 var(--partnerhome-spacing-2000)",
                        height: "56px",
                        textAlign: "right",
                        fontSize: "var(--partnerhome-font-size-1000)",
                        fontWeight: "var(--partnerhome-font-weight-normal)",
                        color: "var(--partnerhome-text-color-base)",
                        fontFamily: "var(--partnerhome-font-family-base)",
                        verticalAlign: "middle",
                      }}
                    >
                      {product.unitsSold.toLocaleString()}
                    </td>
                    <td
                      style={{
                        padding: "0 var(--partnerhome-spacing-2000)",
                        height: "56px",
                        textAlign: "right",
                        fontFamily: "var(--partnerhome-font-family-base)",
                        verticalAlign: "middle",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px" }}>
                        <span
                          style={{
                            fontSize: "var(--partnerhome-font-size-1000)",
                            fontWeight: "var(--partnerhome-font-weight-normal)",
                            color: "var(--partnerhome-text-color-base)",
                            lineHeight: "20px",
                          }}
                        >
                          {product.conversionRate}%
                        </span>
                        <span
                          style={{
                            fontSize: "var(--partnerhome-font-size-500)",
                            color: "#C13A3A",
                            lineHeight: "16px",
                            fontWeight: "var(--partnerhome-font-weight-normal)",
                          }}
                        >
                          vs. {(product.conversionRate - product.conversionVsClass).toFixed(1)}% class average
                        </span>
                      </div>
                    </td>
                    <td
                      style={{
                        padding: "0 var(--partnerhome-spacing-2000)",
                        height: "56px",
                        textAlign: "right",
                        fontSize: "var(--partnerhome-font-size-1000)",
                        fontWeight: "var(--partnerhome-font-weight-normal)",
                        color: "var(--partnerhome-text-color-base)",
                        fontFamily: "var(--partnerhome-font-family-base)",
                        verticalAlign: "middle",
                      }}
                    >
                      {product.uniqueVisits.toLocaleString()}
                    </td>
                    <td
                      style={{
                        padding: "0 var(--partnerhome-spacing-2000)",
                        height: "56px",
                        textAlign: "right",
                        fontSize: "var(--partnerhome-font-size-1000)",
                        fontWeight: "var(--partnerhome-font-weight-normal)",
                        color: "var(--partnerhome-text-color-base)",
                        fontFamily: "var(--partnerhome-font-family-base)",
                        verticalAlign: "middle",
                      }}
                    >
                      {product.impressionsPercentile}
                    </td>
                  </TableRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        )}

        {/* Section: Suggested Budget Allocation */}
        <div
          style={{
            border: "1px solid var(--partnerhome-border-color-base, #D1D1D6)",
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            padding: "24px",
          }}
        >
          {/* Section header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", marginBottom: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, cursor: "grab" }}>
                <circle cx="6" cy="4" r="1.2" fill="#93939A" />
                <circle cx="10" cy="4" r="1.2" fill="#93939A" />
                <circle cx="6" cy="8" r="1.2" fill="#93939A" />
                <circle cx="10" cy="8" r="1.2" fill="#93939A" />
                <circle cx="6" cy="12" r="1.2" fill="#93939A" />
                <circle cx="10" cy="12" r="1.2" fill="#93939A" />
              </svg>
              <p style={{ fontSize: "var(--partnerhome-font-size-2000)", lineHeight: "24px", fontWeight: "bold", color: "#211E22", margin: 0 }}>
                Suggested Budget Allocation
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ textAlign: "right", lineHeight: 1.15 }}>
                <p style={{ fontSize: "var(--partnerhome-font-size-2000)", lineHeight: "24px", fontWeight: "bold", color: isOverBudget ? "#C13A3A" : "#211E22", margin: 0, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  ${totalAllocated.toLocaleString()}
                  <RecommendationInfoIcon
                    tooltip={TOP_RIGHT_BUDGET_TOOLTIP}
                    ariaLabel="About this allocation"
                  />
                </p>
                {isOverBudget && (
                  <p style={{ fontSize: "12px", lineHeight: "16px", color: "#C13A3A", fontWeight: "normal", margin: "2px 0 0 0" }}>
                    Over budget by ${overBudgetAmount.toLocaleString()}
                  </p>
                )}
              </div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ cursor: "pointer", flexShrink: 0 }}>
                <circle cx="10" cy="4" r="1.5" fill="#646266" />
                <circle cx="10" cy="10" r="1.5" fill="#646266" />
                <circle cx="10" cy="16" r="1.5" fill="#646266" />
              </svg>
            </div>
          </div>

          {/* Intro banner */}
          <div
            role="note"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              padding: "12px 14px",
              margin: "0 0 20px 0",
              borderRadius: "var(--partnerhome-radius-base)",
              border: "1px solid #E0D6E3",
              backgroundColor: "#F8F2FA",
              fontFamily: "'Lato', sans-serif",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
              style={{ flexShrink: 0, marginTop: "1px" }}
            >
              <path d={svgPaths.p3bab4b72} fill="url(#budget_banner_paint0)" />
              <path
                d={svgPaths.p16776880}
                fill="#F5E8FA"
                stroke="url(#budget_banner_paint1)"
                strokeLinejoin="round"
                strokeWidth="1.64074"
              />
              <defs>
                <linearGradient id="budget_banner_paint0" gradientUnits="userSpaceOnUse" x1="18.8305" x2="18.8305" y1="1.36189" y2="6.91484">
                  <stop stopColor="#7B189F" />
                  <stop offset="1" stopColor="#D5B9DF" />
                </linearGradient>
                <linearGradient id="budget_banner_paint1" gradientUnits="userSpaceOnUse" x1="11.3383" x2="11.3383" y1="1" y2="20.4619">
                  <stop stopColor="#7A2798" />
                  <stop offset="1" stopColor="#DFC1EA" />
                </linearGradient>
              </defs>
            </svg>
            <p
              style={{
                margin: 0,
                fontSize: "var(--partnerhome-font-size-1000)",
                lineHeight: "20px",
                color: "#211E22",
                fontWeight: "normal",
              }}
            >
              We suggest using part of your budget for a discount coupon to encourage purchases, and run a sponsored products campaign to help more shoppers discover these products.
            </p>
          </div>

          {/* 2-column grid: Ads + Promo */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {/* Coupon */}
            <WorkspaceCard
              title="Coupon"
              description="Offer a coupon for the selected products."
              fields={[{
                label: "",
                value: (
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px", opacity: card1Approved === "completed" ? 0.6 : 1 }}>
                    {/* Editable: Coupon name */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontSize: "12px", lineHeight: "16px", color: "#646266", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.06em" }}>Coupon name</span>
                      <input
                        type="text"
                        value={couponName}
                        onChange={(e) => {
                          if (card1Approved !== "idle") return;
                          setCouponName(e.target.value.toUpperCase());
                        }}
                        disabled={card1Approved !== "idle"}
                        style={{
                          width: "160px",
                          height: "36px",
                          border: "1px solid #D1D1D6",
                          borderRadius: "4px",
                          padding: "0 10px",
                          fontSize: "var(--partnerhome-font-size-1000)",
                          color: card1Approved !== "idle" ? "#93939A" : "#211E22",
                          fontFamily: "'Lato', sans-serif",
                          outline: "none",
                          boxShadow: "none",
                          backgroundColor: card1Approved !== "idle" ? "#F5F5F7" : "#FFFFFF",
                          cursor: card1Approved !== "idle" ? "not-allowed" : "text",
                          letterSpacing: "0.04em",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>

                    {/* Editable: Discount */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontSize: "12px", lineHeight: "16px", color: "#646266", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.06em" }}>Discount</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "var(--partnerhome-font-size-1000)", color: "#211E22" }}>
                        <input
                          type="number"
                          value={couponDiscountPct}
                          onChange={(e) => {
                            if (card1Approved !== "idle") return;
                            const val = parseInt(e.target.value, 10);
                            setCouponDiscountPct(isNaN(val) || val < 0 ? 0 : Math.min(val, 100));
                          }}
                          disabled={card1Approved !== "idle"}
                          style={{
                            width: "72px",
                            height: "36px",
                            border: "1px solid #D1D1D6",
                            borderRadius: "4px",
                            padding: "0 10px",
                            fontSize: "var(--partnerhome-font-size-1000)",
                            color: card1Approved !== "idle" ? "#93939A" : "#211E22",
                            fontFamily: "'Lato', sans-serif",
                            textAlign: "center",
                            outline: "none",
                            boxShadow: "none",
                            backgroundColor: card1Approved !== "idle" ? "#F5F5F7" : "#FFFFFF",
                            cursor: card1Approved !== "idle" ? "not-allowed" : "text",
                          }}
                          onClick={(e) => e.stopPropagation()}
                        />
                        <span style={{ color: "#4D4A4F" }}>% off</span>
                      </div>
                    </div>

                    {/* Compact metadata */}
                    <p style={{ fontSize: "12px", lineHeight: "16px", color: "#646266", fontWeight: "normal", margin: 0 }}>
                      {products.length} products · All customers
                    </p>

                    {/* Spend */}
                    <div style={{ color: "#211E22" }}>
                      <p style={{ fontSize: "12px", lineHeight: "16px", color: "#646266", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 4px 0" }}>Estimated spend</p>
                      <p style={{ fontSize: "var(--partnerhome-font-size-3000)", lineHeight: "28px", fontWeight: "bold", color: "#211E22", margin: 0 }}>~${couponCost.toLocaleString()}</p>
                      <p style={{ fontSize: "12px", color: "#646266", fontWeight: "normal", margin: "4px 0 0 0", lineHeight: "16px" }}>
                        Varies based on sales and coupon redemption.
                      </p>
                    </div>
                  </div>
                ),
              }]}
              footer={card1Approved === "progress" ? (
                <ApprovalProgressBar onCancel={() => setCard1Approved("idle")} onComplete={() => { setCard1Approved("completed"); onCardCompleted?.(); }} />
              ) : card1Approved === "completed" ? (
                <ViewOfferButton label="View coupon" />
              ) : (
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <ReviewButton />
                  <ApproveButton onClick={() => setCard1Approved("progress")} />
                </div>
              )}
            >
              <EnrollmentStatusRow enrollment={card1Approved === "completed" ? "Completed" : "Not started"} />
            </WorkspaceCard>

            {/* Sponsored Products */}
            <WorkspaceCard
              title="Sponsored Products Campaign"
              description="Run a Sponsored Products campaign to help increase visibility."
              fields={[{
                label: "",
                value: (
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px", opacity: card2Approved === "completed" ? 0.6 : 1 }}>
                    {/* Bidding option select + How it works */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                        <span style={{ fontSize: "12px", lineHeight: "16px", color: "#646266", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.06em" }}>Bidding option</span>
                        <button
                          type="button"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            background: "transparent",
                            border: "none",
                            padding: 0,
                            color: "var(--partnerhome-text-color-primary, #7B189F)",
                            fontSize: "12px",
                            lineHeight: "16px",
                            fontWeight: "normal",
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            textDecoration: "underline",
                            boxShadow: "none",
                          }}
                        >
                          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
                            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                            <path d="M7 6.5V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                            <circle cx="7" cy="4.5" r="0.7" fill="currentColor" />
                          </svg>
                          How it works
                        </button>
                      </div>
                      <select
                        value={biddingOption}
                        onChange={(e) => {
                          if (card2Approved !== "idle") return;
                          setBiddingOption(e.target.value as "ai" | "manual");
                        }}
                        disabled={card2Approved !== "idle"}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          width: "260px",
                          height: "36px",
                          border: "1px solid #D1D1D6",
                          borderRadius: "4px",
                          padding: "0 32px 0 10px",
                          fontSize: "var(--partnerhome-font-size-1000)",
                          fontWeight: "normal",
                          color: card2Approved !== "idle" ? "#93939A" : "#211E22",
                          fontFamily: "'Lato', sans-serif",
                          backgroundColor: card2Approved !== "idle" ? "#F5F5F7" : "#FFFFFF",
                          cursor: card2Approved !== "idle" ? "not-allowed" : "pointer",
                          outline: "none",
                          boxShadow: "none",
                          appearance: "none",
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                          backgroundImage:
                            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'><path d='M1 1L5 5L9 1' stroke='%23646266' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 12px center",
                          lineHeight: "34px",
                        }}
                      >
                        <option value="ai">AI auto-bidding</option>
                        <option value="manual">Manual bidding</option>
                      </select>
                      <p style={{ fontSize: "12px", color: "#646266", fontWeight: "normal", margin: "2px 0 0 0", lineHeight: "16px" }}>
                        Bids are optimized automatically based on recent performance.
                      </p>
                    </div>

                    {/* Editable: Budget */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontSize: "12px", lineHeight: "16px", color: "#646266", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.06em" }}>Budget</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "var(--partnerhome-font-size-1000)", color: "#211E22" }}>
                        <span style={{ color: "#4D4A4F" }}>$</span>
                        <input
                          type="number"
                          value={campaignBudget}
                          onChange={(e) => {
                            if (card2Approved !== "idle") return;
                            const val = parseInt(e.target.value, 10);
                            setCampaignBudget(isNaN(val) || val < 0 ? 0 : val);
                          }}
                          disabled={card2Approved !== "idle"}
                          style={{
                            width: "120px",
                            height: "36px",
                            border: "1px solid #D1D1D6",
                            borderRadius: "4px",
                            padding: "0 10px",
                            fontSize: "var(--partnerhome-font-size-1000)",
                            color: card2Approved !== "idle" ? "#93939A" : "#211E22",
                            fontFamily: "'Lato', sans-serif",
                            outline: "none",
                            boxShadow: "none",
                            backgroundColor: card2Approved !== "idle" ? "#F5F5F7" : "#FFFFFF",
                            cursor: card2Approved !== "idle" ? "not-allowed" : "text",
                          }}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    </div>

                    {/* Spend */}
                    <div style={{ color: "#211E22" }}>
                      <p style={{ fontSize: "12px", lineHeight: "16px", color: "#646266", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 4px 0" }}>Planned spend</p>
                      <p style={{ fontSize: "var(--partnerhome-font-size-3000)", lineHeight: "28px", fontWeight: "bold", color: "#211E22", margin: 0 }}>${campaignBudget.toLocaleString()}</p>
                      <p style={{ fontSize: "12px", color: "#646266", fontWeight: "normal", margin: "4px 0 0 0", lineHeight: "16px" }}>
                        You control total spend through the campaign budget.
                      </p>
                    </div>
                  </div>
                ),
              }]}
              footer={card2Approved === "progress" ? (
                <ApprovalProgressBar onCancel={() => setCard2Approved("idle")} onComplete={() => setCard2Approved("completed")} />
              ) : card2Approved === "completed" ? (
                <ViewOfferButton label="View campaign" />
              ) : (
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <ReviewButton />
                  <ApproveButton onClick={() => setCard2Approved("progress")} />
                </div>
              )}
            >
              <EnrollmentStatusRow enrollment={card2Approved === "completed" ? "Completed" : "Not started"} />
            </WorkspaceCard>
          </div>
        </div>
        </div>{/* end refreshing wrapper */}
      </div>
    </div>
  );
}