/**
 * P-Table Component
 * Duplicated from C+H Table with additional features:
 * - KPI Summary Cards above controls (Warnings, Opportunities, Missing Attributes)
 * - "Search By" dropdown before the search input
 * - Product counter + Export All text button below filters (left)
 * - "Showing data for: last 90 days" below filters (right)
 * - KPI filter icon filters the table by that KPI category
 * This is a STANDALONE component — fully self-contained for reuse.
 */

import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Button } from "./Button";
import { TableRow } from "./TableRow";
import { SortDropdown } from "./SortDropdown";
import { SegmentControlDropdown } from "./SegmentControlDropdown";
import { QuickFilterDropdown } from "./QuickFilterDropdown";
import { SearchInput } from "./SearchInput";
import { Pagination } from "./Pagination";
import { FilterPanel } from "./FilterPanel";
import { Checkbox } from "./Checkbox";
import { BulkEditBar } from "./BulkEditBar";
import { SortableColumnHeader } from "./SortableColumnHeader";
import ChevronDownIcon from "../../imports/ChevronDown";
import { DownloadIcon } from "./icons";

// ═══════════════════════════════════════════════════════════
//  Inline KPI Card (duplicated from analytics/KPICard.tsx)
// ═══════════════════════════════════════════════════════════

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

function XCloseIcon({
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
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface PKPIAction {
  key: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

interface PKPICardProps {
  title: string;
  value: string | number;
  description: string;
  valueColor?: string;
  actions?: PKPIAction[];
  isActive?: boolean;
}

function PKPIIconButton({
  action,
  onTooltipShow,
  onTooltipHide,
}: {
  action: PKPIAction;
  onTooltipShow: (
    e: React.MouseEvent<HTMLButtonElement>,
    action: PKPIAction
  ) => void;
  onTooltipHide: () => void;
}) {
  return (
    <Button
      variant="ghost"
      aria-label={action.label}
      onClick={action.onClick}
      onMouseEnter={(e) => {
        onTooltipShow(e, action);
      }}
      onMouseLeave={() => {
        onTooltipHide();
      }}
    >
      {action.icon}
    </Button>
  );
}

function PKPICard({
  title,
  value,
  description,
  valueColor = "var(--partnerhome-text-color-negative)",
  actions,
  isActive = false,
}: PKPICardProps) {
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [tooltipLabel, setTooltipLabel] = useState("");

  const handleActionMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement>,
    action: PKPIAction
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
          background: isActive
            ? "var(--partnerhome-bg-color-secondaryhover)"
            : "var(--partnerhome-surface-color-base)",
          border: isActive
            ? "var(--partnerhome-stroke-weights-medium) solid var(--partnerhome-border-color-secondaryhover)"
            : "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
          borderRadius: "var(--partnerhome-radius-large)",
          display: "flex",
          flexDirection: "column",
          gap: "0px",
          flex: "0 0 280px",
          width: "280px",
          overflow: "hidden",
          height: "100px",
          boxSizing: "border-box",
          boxShadow: isActive
            ? "inset 0 0 0 var(--partnerhome-stroke-weights-small) var(--partnerhome-border-color-secondaryhover)"
            : "none",
          transition: "background-color 200ms ease, border-color 200ms ease, box-shadow 200ms ease",
        }}
      >
        {/* Title row */}
        <div
          style={{
            padding:
              "var(--partnerhome-spacing-1000) var(--partnerhome-spacing-2000) 0",
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

        {/* Content row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding:
              "var(--partnerhome-spacing-500) var(--partnerhome-spacing-2000) var(--partnerhome-spacing-1000)",
            gap: "var(--partnerhome-spacing-1000)",
            flex: "1 1 0",
            minHeight: 0,
          }}
        >
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

          <div
            style={{
              width: "var(--partnerhome-stroke-weights-small)",
              height: "var(--partnerhome-font-size-3000)",
              background: "var(--partnerhome-border-color-base)",
              flexShrink: 0,
            }}
          />

          <span
            style={{
              fontFamily: "var(--partnerhome-font-family-base)",
              fontSize: "var(--partnerhome-font-size-500)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              lineHeight: "var(--partnerhome-line-height-base)",
              color: "var(--partnerhome-text-color-base)",
              flex: "1 1 0",
              minWidth: 0,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical" as const,
              overflow: "hidden",
            }}
          >
            {description}
          </span>

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
                  <PKPIIconButton
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

function pDefaultKPIActions(handlers?: {
  onDownload?: () => void;
  onFilter?: () => void;
  isActive?: boolean;
}): PKPIAction[] {
  return [
    {
      key: "download",
      icon: <DownloadIcon size={24} />,
      label: "Download table data",
      onClick: handlers?.onDownload ?? (() => {}),
    },
    {
      key: "filter",
      icon: handlers?.isActive ? <XCloseIcon size={24} /> : <SlidersHorizontalIcon size={24} />,
      label: handlers?.isActive ? "Clear filter" : "Filter table",
      onClick: handlers?.onFilter ?? (() => {}),
    },
  ];
}

// ═══════════════════════════════════════════════════════════
//  Inline "Search By" Dropdown (Standard Dropdown pattern)
// ═══════════════════════════════════════════════════════════

interface SearchByOption {
  id: string;
  label: string;
}

const SEARCH_BY_OPTIONS: SearchByOption[] = [
  { id: "single-product", label: "Single Product" },
  { id: "bulk-supplier", label: "Bulk - Supplier Part Number" },
  { id: "bulk-manufacturer", label: "Bulk - Manufacturer Part Number" },
  { id: "bulk-wayfair-sku", label: "Bulk - Wayfair SKU" },
  { id: "bulk-display-sku", label: "Bulk - Display SKU" },
];

function SearchByDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const hasValue = value !== "";
  const isLabelFloating = isFocused || hasValue;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionId: string) => {
    onChange(optionId);
    setIsOpen(false);
    setIsFocused(false);
  };

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
    setIsFocused(true);
  };

  const getBorderStyle = () => {
    if (isFocused) {
      return "2px solid var(--partnerhome-border-color-tertiaryidle)";
    }
    return "1.5px solid var(--partnerhome-border-color-tertiaryidle)";
  };

  const selectedOption = SEARCH_BY_OPTIONS.find((opt) => opt.id === value);

  return (
    <div style={{ width: "100%", position: "relative" }} ref={dropdownRef}>
      {/* Dropdown Input */}
      <div
        onClick={handleDropdownClick}
        style={{
          position: "relative",
          width: "100%",
          height: "48px",
          cursor: "pointer",
        }}
      >
        {/* Background with Border */}
        <div
          style={{
            position: "absolute",
            height: "48px",
            left: 0,
            right: 0,
            top: 0,
            background: "var(--partnerhome-bg-color-base)",
            border: getBorderStyle(),
            borderRadius: "var(--partnerhome-radius-large)",
            boxSizing: "border-box",
            transition: "border-width 150ms ease",
            zIndex: 0,
          }}
        />

        {/* Floating Label */}
        <label
          style={{
            position: "absolute",
            left: "16px",
            top: isLabelFloating ? "-8px" : "50%",
            transform: isLabelFloating ? "translateY(0)" : "translateY(-50%)",
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: isLabelFloating
              ? "var(--partnerhome-font-size-500)"
              : "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            lineHeight: "16px",
            color: "var(--partnerhome-text-color-basesubtle)",
            background: isLabelFloating
              ? "var(--partnerhome-bg-color-base)"
              : "transparent",
            padding: isLabelFloating ? "0 4px" : "0",
            pointerEvents: "none",
            transition: "all 150ms ease",
            transformOrigin: "left center",
            zIndex: 2,
          }}
        >
          Search by
        </label>

        {/* Label + Right Icon Container */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "48px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "0 0 0 16px",
            zIndex: 1,
          }}
        >
          {/* Selected Value */}
          <div
            style={{
              flex: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              color: "var(--partnerhome-text-color-base)",
              lineHeight: "20px",
              display: "flex",
              alignItems: "center",
              paddingRight: "8px",
            }}
          >
            {hasValue ? selectedOption?.label : ""}
          </div>

          {/* Chevron Icon Tap Target */}
          <div
            style={{
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--partnerhome-text-color-base)",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 150ms ease",
              }}
            >
              <ChevronDownIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            right: 0,
            background: "var(--partnerhome-bg-color-base)",
            border:
              "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
            borderRadius: "var(--partnerhome-radius-large)",
            boxShadow: "var(--partnerhome-shadow-30)",
            padding: "var(--partnerhome-spacing-1000)",
            zIndex: 1000,
            maxHeight: "240px",
            overflowY: "auto",
          }}
        >
          {SEARCH_BY_OPTIONS.map((option) => {
            const isSelected = value === option.id;
            return (
              <div
                key={option.id}
                onClick={() => handleSelect(option.id)}
                style={{
                  padding: "6px var(--partnerhome-spacing-2000)",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--partnerhome-spacing-1000)",
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-1000)",
                  fontWeight: "var(--partnerhome-font-weight-normal)",
                  color: "var(--partnerhome-text-color-base)",
                  cursor: "pointer",
                  background: isSelected
                    ? "var(--partnerhome-bg-color-secondaryidle)"
                    : "var(--partnerhome-bg-color-tertiaryidle)",
                  transition: "background 150ms ease",
                  overflow: "hidden",
                  marginBottom: "var(--partnerhome-spacing-1000)",
                  borderRadius: "var(--partnerhome-radius-large)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isSelected
                    ? "var(--partnerhome-bg-color-secondaryhover)"
                    : "var(--partnerhome-bg-color-tertiaryhover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isSelected
                    ? "var(--partnerhome-bg-color-secondaryidle)"
                    : "var(--partnerhome-bg-color-tertiaryidle)";
                }}
              >
                <span
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    flex: 1,
                  }}
                >
                  {option.label}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
//  Badge Components for table cells
// ═══════════════════════════════════════════════════════════

/** Circle badge for Warnings (warn colour) */
function WarningBadge({ count }: { count: number }) {
  if (count === 0) return null;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "24px",
        height: "24px",
        borderRadius: "12px",
        background: "var(--partnerhome-bg-color-warning)",
        color: "var(--partnerhome-text-color-inverse)",
        fontFamily: "'Lato', 'Inter', sans-serif",
        fontSize: "var(--partnerhome-font-size-500)",
        fontWeight: "var(--partnerhome-font-weight-bold)",
        lineHeight: "1",
        padding: "0 6px",
      }}
    >
      {count}
    </span>
  );
}

/** Circle badge for Opportunities (primary purple) */
function OpportunityBadge({ count }: { count: number }) {
  if (count === 0) return null;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "24px",
        height: "24px",
        borderRadius: "12px",
        background: "var(--partnerhome-bg-color-primary)",
        color: "var(--partnerhome-text-color-inverse)",
        fontFamily: "'Lato', 'Inter', sans-serif",
        fontSize: "var(--partnerhome-font-size-500)",
        fontWeight: "var(--partnerhome-font-weight-bold)",
        lineHeight: "1",
        padding: "0 6px",
      }}
    >
      {count}
    </span>
  );
}

/** Circle badge for Missing Attributes (dark neutral) */
function MissingAttributesBadge({ count }: { count: number }) {
  if (count === 0) return null;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "24px",
        height: "24px",
        borderRadius: "12px",
        background: "var(--partnerhome-surface-color-inverse)",
        color: "var(--partnerhome-text-color-inverse)",
        fontFamily: "'Lato', 'Inter', sans-serif",
        fontSize: "var(--partnerhome-font-size-500)",
        fontWeight: "var(--partnerhome-font-weight-bold)",
        lineHeight: "1",
        padding: "0 6px",
      }}
    >
      {count}
    </span>
  );
}

/** Star icon for review rating */
function StarIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="var(--partnerhome-text-color-base)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════
//  P-Table Data Interface & Sample Data
// ═══════════════════════════════════════════════════════════

interface PTableRow {
  id: string;
  partNumber: string;
  status: "Live" | "Draft" | "Inactive";
  warnings: number;
  opportunities: number;
  revenue: number;
  conversionRate: number;
  images: number;
  avgReviewRating: number;
  missingAttributes: number;
}

type KPIFilterType = "notLive" | "futureTakeDown" | "exclusivityViolations" | "exclusivityAsk" | "reviewsViolations" | null;

// ═══════════════════════════════════════════════════════════
//  P-Table Component
// ═══════════════════════════════════════════════════════════

export function PTable() {
  // Search By state
  const [pSearchBy, setPSearchBy] = useState("single-product");

  // Table state
  const [pSearchQuery, setPSearchQuery] = useState("");
  const [pSortColumn, setPSortColumn] = useState<string | null>(null);
  const [pSortDirection, setPSortDirection] = useState<
    "asc" | "desc" | null
  >(null);
  const [pSelectedSegment, setPSelectedSegment] = useState("all");
  const [pSelectedQuickFilter, setPSelectedQuickFilter] = useState("all");
  const [pIsFilterPanelOpen, setPIsFilterPanelOpen] = useState(false);
  const [pSelectedRows, setPSelectedRows] = useState<Set<string>>(
    new Set()
  );
  const [pCurrentPage, setPCurrentPage] = useState(1);
  const [pRowsPerPage, setPRowsPerPage] = useState(50);
  const [pHoveredRow, setPHoveredRow] = useState<string | null>(null);

  // KPI filter state — which KPI card is actively filtering the table
  const [activeKPIFilter, setActiveKPIFilter] = useState<KPIFilterType>(null);

  // KPI scroll state
  const kpiScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateKPIScrollState = () => {
    const el = kpiScrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateKPIScrollState();
    const el = kpiScrollRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => updateKPIScrollState());
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollKPI = (direction: 'left' | 'right') => {
    const el = kpiScrollRef.current;
    if (!el) return;
    const scrollAmount = 280;
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  // Applied panel filters
  const [pAppliedPanelFilters, setPAppliedPanelFilters] = useState({
    status: [] as string[],
    category: [] as string[],
    priority: [] as string[],
    amount: "",
  });

  const pFilterCount =
    pAppliedPanelFilters.status.length +
    pAppliedPanelFilters.category.length +
    pAppliedPanelFilters.priority.length +
    (pAppliedPanelFilters.amount ? 1 : 0);

  // Sample data matching the reference image
  const pTableData: PTableRow[] = [
    { id: "p-1", partNumber: "WEST-BLK-GLD-RT", status: "Live", warnings: 2, opportunities: 2, revenue: 12450.00, conversionRate: 3.2, images: 8, avgReviewRating: 4.5, missingAttributes: 3 },
    { id: "p-2", partNumber: "WEST-GRY-GLD-RT", status: "Live", warnings: 0, opportunities: 3, revenue: 8920.00, conversionRate: 2.8, images: 6, avgReviewRating: 4.2, missingAttributes: 5 },
    { id: "p-3", partNumber: "WEST-GRN-GLD-RT", status: "Live", warnings: 0, opportunities: 1, revenue: 15780.00, conversionRate: 4.1, images: 10, avgReviewRating: 4.8, missingAttributes: 1 },
    { id: "p-4", partNumber: "WEST-DGR-BLK-RT", status: "Live", warnings: 1, opportunities: 2, revenue: 6540.00, conversionRate: 2.5, images: 5, avgReviewRating: 4.0, missingAttributes: 6 },
    { id: "p-5", partNumber: "EAST-NVY-SLV-CT", status: "Live", warnings: 3, opportunities: 0, revenue: 22310.50, conversionRate: 5.1, images: 12, avgReviewRating: 4.7, missingAttributes: 0 },
    { id: "p-6", partNumber: "EAST-RED-GLD-CT", status: "Live", warnings: 0, opportunities: 4, revenue: 9870.00, conversionRate: 3.0, images: 7, avgReviewRating: 3.9, missingAttributes: 4 },
    { id: "p-7", partNumber: "NRTH-WHT-CHR-LT", status: "Live", warnings: 1, opportunities: 1, revenue: 31450.75, conversionRate: 6.2, images: 15, avgReviewRating: 4.9, missingAttributes: 2 },
    { id: "p-8", partNumber: "NRTH-BLK-CHR-LT", status: "Draft", warnings: 0, opportunities: 2, revenue: 0, conversionRate: 0, images: 3, avgReviewRating: 0, missingAttributes: 8 },
    { id: "p-9", partNumber: "STHN-TAN-WD-TB", status: "Live", warnings: 2, opportunities: 3, revenue: 18920.00, conversionRate: 4.5, images: 9, avgReviewRating: 4.3, missingAttributes: 2 },
    { id: "p-10", partNumber: "STHN-OAK-WD-TB", status: "Live", warnings: 0, opportunities: 0, revenue: 27650.25, conversionRate: 5.8, images: 14, avgReviewRating: 4.6, missingAttributes: 0 },
    { id: "p-11", partNumber: "WEST-CRM-GLD-RT", status: "Live", warnings: 0, opportunities: 2, revenue: 11230.00, conversionRate: 3.5, images: 8, avgReviewRating: 4.1, missingAttributes: 3 },
    { id: "p-12", partNumber: "EAST-GRN-SLV-CT", status: "Inactive", warnings: 4, opportunities: 0, revenue: 3210.00, conversionRate: 1.2, images: 4, avgReviewRating: 3.5, missingAttributes: 7 },
    { id: "p-13", partNumber: "NRTH-GRY-CHR-LT", status: "Live", warnings: 0, opportunities: 1, revenue: 19870.50, conversionRate: 4.8, images: 11, avgReviewRating: 4.4, missingAttributes: 1 },
    { id: "p-14", partNumber: "STHN-WAL-WD-TB", status: "Live", warnings: 1, opportunities: 2, revenue: 14560.00, conversionRate: 3.9, images: 9, avgReviewRating: 4.2, missingAttributes: 4 },
    { id: "p-15", partNumber: "WEST-NVY-GLD-RT", status: "Live", warnings: 0, opportunities: 3, revenue: 8760.00, conversionRate: 2.7, images: 6, avgReviewRating: 4.0, missingAttributes: 5 },
    { id: "p-16", partNumber: "EAST-BLU-SLV-CT", status: "Live", warnings: 2, opportunities: 1, revenue: 16340.00, conversionRate: 4.3, images: 10, avgReviewRating: 4.5, missingAttributes: 2 },
    { id: "p-17", partNumber: "NRTH-WHT-STL-LT", status: "Draft", warnings: 0, opportunities: 0, revenue: 0, conversionRate: 0, images: 2, avgReviewRating: 0, missingAttributes: 10 },
    { id: "p-18", partNumber: "STHN-CHR-WD-TB", status: "Live", warnings: 0, opportunities: 2, revenue: 21780.00, conversionRate: 5.2, images: 13, avgReviewRating: 4.7, missingAttributes: 1 },
    { id: "p-19", partNumber: "WEST-BRZ-GLD-RT", status: "Live", warnings: 1, opportunities: 1, revenue: 7890.00, conversionRate: 2.4, images: 5, avgReviewRating: 3.8, missingAttributes: 6 },
    { id: "p-20", partNumber: "EAST-PNK-SLV-CT", status: "Live", warnings: 0, opportunities: 3, revenue: 13210.00, conversionRate: 3.7, images: 8, avgReviewRating: 4.3, missingAttributes: 3 },
    { id: "p-21", partNumber: "NRTH-BLK-STL-LT", status: "Live", warnings: 3, opportunities: 2, revenue: 25670.00, conversionRate: 5.5, images: 12, avgReviewRating: 4.6, missingAttributes: 0 },
    { id: "p-22", partNumber: "STHN-MAP-WD-TB", status: "Live", warnings: 0, opportunities: 1, revenue: 16920.50, conversionRate: 4.0, images: 10, avgReviewRating: 4.4, missingAttributes: 2 },
    { id: "p-23", partNumber: "WEST-SLV-GLD-RT", status: "Inactive", warnings: 5, opportunities: 0, revenue: 2340.00, conversionRate: 0.8, images: 3, avgReviewRating: 3.2, missingAttributes: 9 },
    { id: "p-24", partNumber: "EAST-WHT-SLV-CT", status: "Live", warnings: 0, opportunities: 2, revenue: 11450.00, conversionRate: 3.3, images: 7, avgReviewRating: 4.1, missingAttributes: 4 },
    { id: "p-25", partNumber: "NRTH-RED-CHR-LT", status: "Live", warnings: 1, opportunities: 3, revenue: 29340.00, conversionRate: 6.0, images: 14, avgReviewRating: 4.8, missingAttributes: 1 },
    { id: "p-26", partNumber: "STHN-ASH-WD-TB", status: "Live", warnings: 0, opportunities: 0, revenue: 20120.00, conversionRate: 4.7, images: 11, avgReviewRating: 4.5, missingAttributes: 0 },
    { id: "p-27", partNumber: "WEST-GLD-GLD-RT", status: "Live", warnings: 0, opportunities: 2, revenue: 9560.00, conversionRate: 2.9, images: 6, avgReviewRating: 4.0, missingAttributes: 3 },
    { id: "p-28", partNumber: "EAST-TRQ-SLV-CT", status: "Live", warnings: 2, opportunities: 1, revenue: 14780.00, conversionRate: 3.8, images: 9, avgReviewRating: 4.3, missingAttributes: 5 },
    { id: "p-29", partNumber: "NRTH-CRM-CHR-LT", status: "Draft", warnings: 0, opportunities: 0, revenue: 0, conversionRate: 0, images: 1, avgReviewRating: 0, missingAttributes: 12 },
    { id: "p-30", partNumber: "STHN-PIN-WD-TB", status: "Live", warnings: 1, opportunities: 2, revenue: 17650.00, conversionRate: 4.2, images: 10, avgReviewRating: 4.4, missingAttributes: 2 },
  ];

  // KPI summary values — static counts matching reference, relatable to table data
  const notLiveCount = pTableData.filter((r) => r.status !== "Live").length;
  const futureTakeDownCount = pTableData.filter((r) => r.warnings > 0).length;
  const exclusivityViolationsCount = pTableData.filter((r) => r.warnings > 0 && r.opportunities > 0).length;
  const exclusivityAskCount = pTableData.filter((r) => r.opportunities > 0).length;
  const reviewsViolationsCount = pTableData.filter((r) => r.avgReviewRating > 0 && r.avgReviewRating < 4.0).length;

  // Toggle KPI filter
  const handleKPIFilter = (filterType: KPIFilterType) => {
    setActiveKPIFilter((prev) => (prev === filterType ? null : filterType));
    setPCurrentPage(1);
  };

  // Filter logic
  const pFilteredData = pTableData.filter((row) => {
    // KPI filter
    if (activeKPIFilter === "notLive" && row.status === "Live") return false;
    if (activeKPIFilter === "futureTakeDown" && row.warnings === 0) return false;
    if (activeKPIFilter === "exclusivityViolations" && !(row.warnings > 0 && row.opportunities > 0)) return false;
    if (activeKPIFilter === "exclusivityAsk" && row.opportunities === 0) return false;
    if (activeKPIFilter === "reviewsViolations" && !(row.avgReviewRating > 0 && row.avgReviewRating < 4.0)) return false;

    // Search filter
    const matchesSearch =
      row.partNumber.toLowerCase().includes(pSearchQuery.toLowerCase()) ||
      row.status.toLowerCase().includes(pSearchQuery.toLowerCase());

    // Status quick filter
    if (pSelectedQuickFilter === "live" && row.status !== "Live") return false;
    if (pSelectedQuickFilter === "draft" && row.status !== "Draft") return false;
    if (pSelectedQuickFilter === "inactive" && row.status !== "Inactive") return false;

    // Panel filters (status)
    if (
      pAppliedPanelFilters.status.length > 0 &&
      !pAppliedPanelFilters.status.includes(row.status)
    ) {
      return false;
    }

    return matchesSearch;
  });

  // Sorting
  const pSortedData = [...pFilteredData].sort((a, b) => {
    if (!pSortColumn || !pSortDirection) return 0;

    let aValue: any;
    let bValue: any;

    switch (pSortColumn) {
      case "partNumber":
        aValue = a.partNumber;
        bValue = b.partNumber;
        break;
      case "status":
        aValue = a.status;
        bValue = b.status;
        break;
      case "warnings":
        aValue = a.warnings;
        bValue = b.warnings;
        break;
      case "opportunities":
        aValue = a.opportunities;
        bValue = b.opportunities;
        break;
      case "revenue":
        aValue = a.revenue;
        bValue = b.revenue;
        break;
      case "conversionRate":
        aValue = a.conversionRate;
        bValue = b.conversionRate;
        break;
      case "images":
        aValue = a.images;
        bValue = b.images;
        break;
      case "avgReviewRating":
        aValue = a.avgReviewRating;
        bValue = b.avgReviewRating;
        break;
      case "missingAttributes":
        aValue = a.missingAttributes;
        bValue = b.missingAttributes;
        break;
      default:
        return 0;
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return pSortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (pSortDirection === "asc") {
      return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    } else {
      return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
    }
  });

  const pHasActiveFilters =
    pSearchQuery !== "" ||
    pSelectedSegment !== "all" ||
    pSelectedQuickFilter !== "all" ||
    activeKPIFilter !== null;

  const handlePResetFilters = () => {
    setPSearchQuery("");
    setPSelectedSegment("all");
    setPSelectedQuickFilter("all");
    setActiveKPIFilter(null);
    setPAppliedPanelFilters({
      status: [],
      category: [],
      priority: [],
      amount: "",
    });
  };

  const handlePApplyFilters = (filters: {
    status: string[];
    category: string[];
    priority: string[];
    amount: string;
  }) => {
    setPAppliedPanelFilters(filters);
    setPIsFilterPanelOpen(false);
  };

  // Checkbox handlers
  const handlePSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = new Set(pFilteredData.map((row) => row.id));
      setPSelectedRows(allIds);
    } else {
      setPSelectedRows(new Set());
    }
  };

  const handlePRowSelect = (rowId: string, checked: boolean) => {
    const newSelection = new Set(pSelectedRows);
    if (checked) {
      newSelection.add(rowId);
    } else {
      newSelection.delete(rowId);
    }
    setPSelectedRows(newSelection);
  };

  const pAllSelected =
    pFilteredData.length > 0 &&
    pFilteredData.every((row) => pSelectedRows.has(row.id));
  const pSomeSelected =
    pFilteredData.some((row) => pSelectedRows.has(row.id)) && !pAllSelected;

  // Product count
  const totalProductCount = pTableData.length;

  // Format currency
  const formatRevenue = (val: number) => {
    if (val === 0) return "$0.00";
    return "$" + val.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Render table row
  const renderPTableRow = (row: PTableRow) => {
    const isSelected = pSelectedRows.has(row.id);
    const isHovered = pHoveredRow === row.id;
    const showQuickview = isHovered;

    const cellStyle: React.CSSProperties = {
      fontFamily: "var(--partnerhome-font-family-base)",
      fontSize: "var(--partnerhome-font-size-1000)",
      fontWeight: "var(--partnerhome-font-weight-normal)",
      color: "var(--partnerhome-text-color-base)",
      height: "48px",
      maxHeight: "48px",
      padding: "0 var(--partnerhome-spacing-2000)",
      overflow: "hidden",
      boxSizing: "border-box" as const,
      verticalAlign: "middle" as const,
    };

    return (
      <TableRow
        key={row.id}
        isSelected={false}
        className="border-t first:border-t-0 border-[var(--partnerhome-border-color-base)] transition-colors hover:bg-[var(--partnerhome-surface-color-primarysubtle)]"
        style={{
          height: "48px",
        }}
        onMouseEnter={() => setPHoveredRow(row.id)}
        onMouseLeave={() => setPHoveredRow(null)}
      >
        {/* Checkbox Column */}
        <td
          style={{
            height: "48px",
            maxHeight: "48px",
            padding:
              "0 var(--partnerhome-spacing-1500) 0 var(--partnerhome-spacing-2000)",
            overflow: "hidden",
            boxSizing: "border-box",
            verticalAlign: "middle",
            width: "48px",
          }}
        >
          <Checkbox
            checked={isSelected}
            onChange={(checked) => handlePRowSelect(row.id, checked)}
            id={`p-row-${row.id}`}
          />
        </td>

        {/* Part Number (Image + Text) with Quickview */}
        <td
          style={{
            ...cellStyle,
            width: "220px",
            maxWidth: "220px",
            padding:
              "0 var(--partnerhome-spacing-2000) 0 var(--partnerhome-spacing-1500)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--partnerhome-spacing-1000)",
              width: "100%",
              minWidth: 0,
              height: "100%",
            }}
          >
            {/* Image Placeholder */}
            <div
              style={{
                width: "32px",
                height: "32px",
                background: "var(--partnerhome-surface-color-inversesubtle)",
                borderRadius: "var(--partnerhome-radius-base)",
                border: "1px solid var(--partnerhome-border-color-base)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" fill="var(--partnerhome-text-color-base)" opacity="0.2" />
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="var(--partnerhome-text-color-base)" strokeWidth="2" fill="none" />
                <circle cx="8.5" cy="8.5" r="1.5" fill="var(--partnerhome-text-color-base)" />
                <path d="M21 15L16 10L5 21" stroke="var(--partnerhome-text-color-base)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <span
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                minWidth: 0,
                flex: "1 1 auto",
                color: isHovered
                  ? "var(--partnerhome-text-color-primary)"
                  : "inherit",
              }}
            >
              {row.partNumber}
            </span>
            {showQuickview && (
              <Button
                variant="secondary"
                size="condensed"
                style={{ flexShrink: 0 }}
              >
                Quickview
              </Button>
            )}
          </div>
        </td>

        {/* Status */}
        <td style={cellStyle}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "2px 8px",
              borderRadius: "var(--partnerhome-radius-base)",
              fontFamily: "'Lato', sans-serif",
              fontSize: "var(--partnerhome-font-size-500)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              height: "16px",
              lineHeight: "16px",
              background:
                row.status === "Live"
                  ? "var(--partnerhome-bg-color-positive)"
                  : row.status === "Draft"
                  ? "var(--partnerhome-bg-color-warning)"
                  : "var(--partnerhome-bg-color-neutral)",
              color: "var(--partnerhome-text-color-inverse)",
            }}
          >
            {row.status}
          </span>
        </td>

        {/* Warnings */}
        <td style={{ ...cellStyle, textAlign: "center" }}>
          <WarningBadge count={row.warnings} />
        </td>

        {/* Opportunities */}
        <td style={{ ...cellStyle, textAlign: "center" }}>
          <OpportunityBadge count={row.opportunities} />
        </td>

        {/* Revenue */}
        <td style={cellStyle}>
          {formatRevenue(row.revenue)}
        </td>

        {/* Conversion Rate */}
        <td style={{ ...cellStyle, textAlign: "center" }}>
          {row.conversionRate > 0 ? `${row.conversionRate.toFixed(1)}%` : "—"}
        </td>

        {/* Images */}
        <td style={{ ...cellStyle, textAlign: "center" }}>
          {row.images}
        </td>

        {/* Avg. Review Rating */}
        <td style={cellStyle}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--partnerhome-spacing-250)",
              justifyContent: "center",
            }}
          >
            {row.avgReviewRating > 0 ? (
              <>
                <span>{row.avgReviewRating.toFixed(1)}</span>
                <StarIcon size={14} />
              </>
            ) : (
              "—"
            )}
          </div>
        </td>

        {/* Missing Attributes */}
        <td style={{ ...cellStyle, textAlign: "center" }}>
          <MissingAttributesBadge count={row.missingAttributes} />
        </td>
      </TableRow>
    );
  };

  return (
    <>
      {/* ── KPI Summary Cards ────────────────────────────── */}
      <div
        className="px-[var(--partnerhome-spacing-3000)] pt-[var(--partnerhome-spacing-3000)] pb-[var(--partnerhome-spacing-2000)]"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0px",
            width: "100%",
            position: "relative",
          }}
        >
          {/* Left Chevron — secondary icon button */}
          <Button
            variant="icon-secondary"
            aria-label="Scroll KPI cards left"
            onClick={() => scrollKPI('left')}
            style={{
              display: canScrollLeft ? "inline-flex" : "none",
              flexShrink: 0,
              marginRight: "var(--partnerhome-spacing-1000)",
              zIndex: 2,
              boxShadow: "var(--partnerhome-shadow-10)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Button>

          {/* Scrollable KPI cards container */}
          <div
            ref={kpiScrollRef}
            onScroll={updateKPIScrollState}
            className="hide-scrollbar"
            style={{
              display: "flex",
              gap: "var(--partnerhome-spacing-2000)",
              flex: "1 1 0",
              minWidth: 0,
              flexWrap: "nowrap",
              overflowX: "auto",
              alignItems: "stretch",
            }}
          >
            <PKPICard
              title="Not Live"
              value={notLiveCount}
              description="Products taken down within the last 7 days"
              valueColor="var(--partnerhome-text-color-negative)"
              isActive={activeKPIFilter === "notLive"}
              actions={pDefaultKPIActions({
                onDownload: () =>
                  console.log("[P-Table KPI] Not Live → Download"),
                onFilter: () => handleKPIFilter("notLive"),
                isActive: activeKPIFilter === "notLive",
              })}
            />
            <PKPICard
              title="Future Take Down"
              value={futureTakeDownCount}
              description="Products will be taken down within the next 30 days"
              valueColor="var(--partnerhome-text-color-warning)"
              isActive={activeKPIFilter === "futureTakeDown"}
              actions={pDefaultKPIActions({
                onDownload: () =>
                  console.log("[P-Table KPI] Future Take Down → Download"),
                onFilter: () => handleKPIFilter("futureTakeDown"),
                isActive: activeKPIFilter === "futureTakeDown",
              })}
            />
            <PKPICard
              title="Exclusivity Violations"
              value={exclusivityViolationsCount}
              description="Products will lose Wayfair verified benefits"
              valueColor="var(--partnerhome-text-color-negative)"
              isActive={activeKPIFilter === "exclusivityViolations"}
              actions={pDefaultKPIActions({
                onDownload: () =>
                  console.log("[P-Table KPI] Exclusivity Violations → Download"),
                onFilter: () => handleKPIFilter("exclusivityViolations"),
                isActive: activeKPIFilter === "exclusivityViolations",
              })}
            />
            <PKPICard
              title="Exclusivity Ask"
              value={exclusivityAskCount}
              description="Products can receive Wayfair verified benefits"
              valueColor="var(--partnerhome-text-color-primary)"
              isActive={activeKPIFilter === "exclusivityAsk"}
              actions={pDefaultKPIActions({
                onDownload: () =>
                  console.log("[P-Table KPI] Exclusivity Ask → Download"),
                onFilter: () => handleKPIFilter("exclusivityAsk"),
                isActive: activeKPIFilter === "exclusivityAsk",
              })}
            />
            <PKPICard
              title="Reviews Violations"
              value={reviewsViolationsCount}
              description="Products will lose Wayfair verified benefits"
              valueColor="var(--partnerhome-text-color-negative)"
              isActive={activeKPIFilter === "reviewsViolations"}
              actions={pDefaultKPIActions({
                onDownload: () =>
                  console.log("[P-Table KPI] Reviews Violations → Download"),
                onFilter: () => handleKPIFilter("reviewsViolations"),
                isActive: activeKPIFilter === "reviewsViolations",
              })}
            />
          </div>

          {/* Right Chevron — secondary icon button */}
          <Button
            variant="icon-secondary"
            aria-label="Scroll KPI cards right"
            onClick={() => scrollKPI('right')}
            style={{
              display: canScrollRight ? "inline-flex" : "none",
              flexShrink: 0,
              marginLeft: "var(--partnerhome-spacing-1000)",
              zIndex: 2,
              boxShadow: "var(--partnerhome-shadow-10)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Button>
        </div>
      </div>



      {/* ── Controls Section ─────────────────────────────── */}
      <div className="px-[var(--partnerhome-spacing-3000)] pb-[var(--partnerhome-spacing-2000)]">
        <div className="flex items-center justify-between gap-[var(--partnerhome-spacing-2000)]">
          <div className="flex items-center gap-[var(--partnerhome-spacing-1000)] flex-1">
            {/* Search By Dropdown */}
            <div style={{ width: "240px", flexShrink: 0 }}>
              <SearchByDropdown
                value={pSearchBy}
                onChange={(val) => setPSearchBy(val)}
              />
            </div>

            {/* Search Input */}
            <div style={{ width: "320px" }}>
              <SearchInput
                value={pSearchQuery}
                onChange={(e) => setPSearchQuery(e.target.value)}
              />
            </div>

            {/* Quick Filter Dropdown */}
            <div
              style={{
                marginLeft: "var(--partnerhome-spacing-1000)",
              }}
            >
              <QuickFilterDropdown
                options={[
                  {
                    id: "all",
                    label: "All Items",
                    count: pTableData.length,
                  },
                  {
                    id: "live",
                    label: "Live",
                    count: pTableData.filter(
                      (r) => r.status === "Live"
                    ).length,
                  },
                  {
                    id: "draft",
                    label: "Draft",
                    count: pTableData.filter(
                      (r) => r.status === "Draft"
                    ).length,
                  },
                  {
                    id: "inactive",
                    label: "Inactive",
                    count: pTableData.filter(
                      (r) => r.status === "Inactive"
                    ).length,
                  },
                ]}
                selectedOption={pSelectedQuickFilter}
                onApply={(optionId) => {
                  setPSelectedQuickFilter(optionId);
                }}
                triggerStyle="text"
              />
            </div>

            {/* Segment Control Dropdown */}
            <SegmentControlDropdown
              label="Segment"
              options={[
                { id: "all", label: "All Segments" },
                { id: "west", label: "WEST" },
                { id: "east", label: "EAST" },
                { id: "north", label: "NRTH" },
                { id: "south", label: "STHN" },
              ]}
              selectedOption={pSelectedSegment}
              onApply={(optionId) => {
                setPSelectedSegment(optionId);
              }}
              triggerStyle="text"
            />

            {/* All Filters Button */}
            <Button
              variant="secondary"
              onClick={() => setPIsFilterPanelOpen(true)}
              style={{
                gap: "var(--partnerhome-spacing-1000)",
                position: "relative",
                overflow: "visible",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ flexShrink: 0 }}
              >
                <path
                  d="M3 7h4M7 7a2 2 0 104 0M7 7a2 2 0 114 0M11 7h10M3 12h10M13 12a2 2 0 104 0M13 12a2 2 0 114 0M17 12h4M3 17h4M7 17a2 2 0 104 0M7 17a2 2 0 114 0M11 17h10"
                  stroke="var(--partnerhome-text-color-primary)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              All Filters
              {pFilterCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    minWidth: "20px",
                    height: "20px",
                    padding: "0 4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "var(--partnerhome-surface-color-primarysubtle)",
                    color: "var(--partnerhome-text-color-primary)",
                    borderRadius: "50%",
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-500)",
                    fontWeight: "var(--partnerhome-font-weight-bold)",
                    lineHeight: "1",
                    zIndex: 10,
                  }}
                >
                  {pFilterCount > 999 ? "999" : pFilterCount}
                </span>
              )}
            </Button>

            {/* Reset Button */}
            {pHasActiveFilters && (
              <Button
                variant="text"
                onClick={handlePResetFilters}
                style={{ height: "48px", padding: "0 var(--partnerhome-spacing-1000)" }}
              >
                Reset
              </Button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-[var(--partnerhome-spacing-1000)]">
            <SortDropdown
              options={[
                { id: "partNumber", label: "Part Number" },
                { id: "status", label: "Status" },
                { id: "warnings", label: "Warnings" },
                { id: "opportunities", label: "Opportunities" },
                { id: "revenue", label: "Revenue" },
                { id: "conversionRate", label: "Conversion Rate" },
                { id: "avgReviewRating", label: "Avg. Review Rating" },
                { id: "missingAttributes", label: "Missing Attributes" },
              ]}
              selectedOption={pSortColumn || "partNumber"}
              sortDirection={pSortDirection}
              onApply={(optionId, direction) => {
                setPSortColumn(optionId);
                setPSortDirection(direction);
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Product Counter + Export All | Data Frequency ─── */}
      <div
        className="px-[var(--partnerhome-spacing-3000)] pb-[var(--partnerhome-spacing-2000)]"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: Product Count + Export All */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--partnerhome-spacing-2000)",
          }}
        >
          {/* Product Counter */}
          <span
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              lineHeight: "var(--partnerhome-line-height-base)",
              color: "var(--partnerhome-text-color-base)",
            }}
          >
            {pFilteredData.length} Products
          </span>

          {/* Export All — text button with icon */}
          <Button
            variant="text"
            onClick={() => console.log("[P-Table] Export All clicked")}
          >
            <DownloadIcon
              size={16}
              style={{ color: "var(--partnerhome-text-color-primary)" }}
            />
            <span
              style={{
                color: "var(--partnerhome-text-color-primary)",
                textDecoration: "underline",
              }}
            >
              Export All
            </span>
          </Button>
        </div>

        {/* Right: Data frequency */}
        <span
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            lineHeight: "var(--partnerhome-line-height-base)",
            color: "var(--partnerhome-text-color-base)",
          }}
        >
          Showing data for: last 90 days
        </span>
      </div>

      {/* ── Bulk Edit Bar ────────────────────────────────── */}
      {pSelectedRows.size > 0 && (
        <div className="px-[var(--partnerhome-spacing-3000)]">
          <BulkEditBar
            selectedCount={pSelectedRows.size}
            totalCount={pFilteredData.length}
            onDeselectAll={() => setPSelectedRows(new Set())}
            onSelectAll={handlePSelectAll.bind(null, true)}
            onEdit={() => console.log("P-Table Edit clicked")}
            onExport={() => console.log("P-Table Export clicked")}
            onMoreActions={() =>
              console.log("P-Table More Actions clicked")
            }
          />
        </div>
      )}

      {/* ── Table ────────────────────────────────────────── */}
      <div className="px-[var(--partnerhome-spacing-3000)]">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse" style={{ minWidth: "1200px", tableLayout: "fixed" }}>
            <thead>
              <tr
                style={{
                  height: "48px",
                  maxHeight: "48px",
                  background: "var(--partnerhome-surface-color-neutralsubtle)",
                }}
              >
                {/* Checkbox Header */}
                <th
                  style={{
                    fontFamily: "var(--partnerhome-font-family-base)",
                    width: "48px",
                    height: "48px",
                    maxHeight: "48px",
                    padding: "0 var(--partnerhome-spacing-2000)",
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Checkbox
                      checked={pAllSelected}
                      indeterminate={pSomeSelected}
                      onChange={handlePSelectAll}
                      id="p-select-all"
                    />
                  </div>
                </th>

                {/* Sortable Column Headers */}
                <SortableColumnHeader
                  label="Part Number"
                  columnId="partNumber"
                  currentSortColumn={pSortColumn}
                  currentSortDirection={pSortDirection}
                  onSort={(columnId, direction) => {
                    setPSortColumn(columnId);
                    setPSortDirection(direction);
                  }}
                  width="220px"
                  align="left"
                />
                <SortableColumnHeader
                  label="Status"
                  columnId="status"
                  currentSortColumn={pSortColumn}
                  currentSortDirection={pSortDirection}
                  onSort={(columnId, direction) => {
                    setPSortColumn(columnId);
                    setPSortDirection(direction);
                  }}
                  width="100px"
                  align="left"
                />
                <SortableColumnHeader
                  label="Warnings"
                  columnId="warnings"
                  currentSortColumn={pSortColumn}
                  currentSortDirection={pSortDirection}
                  onSort={(columnId, direction) => {
                    setPSortColumn(columnId);
                    setPSortDirection(direction);
                  }}
                  width="100px"
                  align="center"
                />
                <SortableColumnHeader
                  label="Opportunities"
                  columnId="opportunities"
                  currentSortColumn={pSortColumn}
                  currentSortDirection={pSortDirection}
                  onSort={(columnId, direction) => {
                    setPSortColumn(columnId);
                    setPSortDirection(direction);
                  }}
                  width="115px"
                  align="center"
                />
                <SortableColumnHeader
                  label="Revenue"
                  columnId="revenue"
                  currentSortColumn={pSortColumn}
                  currentSortDirection={pSortDirection}
                  onSort={(columnId, direction) => {
                    setPSortColumn(columnId);
                    setPSortDirection(direction);
                  }}
                  width="120px"
                  align="left"
                />
                <SortableColumnHeader
                  label="Conversion Rate"
                  columnId="conversionRate"
                  currentSortColumn={pSortColumn}
                  currentSortDirection={pSortDirection}
                  onSort={(columnId, direction) => {
                    setPSortColumn(columnId);
                    setPSortDirection(direction);
                  }}
                  width="135px"
                  align="center"
                />
                <SortableColumnHeader
                  label="Images"
                  columnId="images"
                  currentSortColumn={pSortColumn}
                  currentSortDirection={pSortDirection}
                  onSort={(columnId, direction) => {
                    setPSortColumn(columnId);
                    setPSortDirection(direction);
                  }}
                  width="80px"
                  align="center"
                />
                <SortableColumnHeader
                  label="Avg. Review Rating"
                  columnId="avgReviewRating"
                  currentSortColumn={pSortColumn}
                  currentSortDirection={pSortDirection}
                  onSort={(columnId, direction) => {
                    setPSortColumn(columnId);
                    setPSortDirection(direction);
                  }}
                  width="145px"
                  align="center"
                />
                <SortableColumnHeader
                  label="Missing Attributes"
                  columnId="missingAttributes"
                  currentSortColumn={pSortColumn}
                  currentSortDirection={pSortDirection}
                  onSort={(columnId, direction) => {
                    setPSortColumn(columnId);
                    setPSortDirection(direction);
                  }}
                  width="137px"
                  align="center"
                />
              </tr>
            </thead>
            <tbody>
              {pSortedData.map((row) => renderPTableRow(row))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Pagination ───────────────────────────────────── */}
      <div
        className="px-[var(--partnerhome-spacing-3000)] sticky bottom-0"
        style={{
          backgroundColor: "var(--partnerhome-surface-color-base)",
          zIndex: 10,
          paddingTop: "4px",
          paddingBottom: "4px",
        }}
      >
        <Pagination
          currentPage={pCurrentPage}
          totalPages={Math.ceil(pFilteredData.length / pRowsPerPage)}
          rowsPerPage={pRowsPerPage}
          onPageChange={(page) => {
            setPCurrentPage(page);
          }}
          onRowsPerPageChange={(rows) => {
            setPRowsPerPage(rows);
            setPCurrentPage(1);
          }}
        />
      </div>

      {/* ── Filter Panel ─────────────────────────────────── */}
      <FilterPanel
        isOpen={pIsFilterPanelOpen}
        onClose={() => setPIsFilterPanelOpen(false)}
        resultCount={pFilteredData.length}
        onApplyFilters={handlePApplyFilters}
        onResetFilters={handlePResetFilters}
      />
    </>
  );
}
