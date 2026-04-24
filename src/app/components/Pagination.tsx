import React from "react";
import svgPaths from "@/imports/svg-o1g4gjb3hy";
import { RowsPerPageDropdown } from "./RowsPerPageDropdown";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: PaginationProps) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        alignItems: "center",
        fontFamily: "'Lato', 'Inter', sans-serif"
      }}
    >
      {/* Rows per Page Section */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <p
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            color: "var(--partnerhome-text-color-base)",
            lineHeight: "20px",
            margin: 0,
          }}
        >
          Rows per Page
        </p>

        {/* Rows per Page Dropdown */}
        <RowsPerPageDropdown
          value={rowsPerPage}
          onChange={onRowsPerPageChange}
        />
      </div>

      {/* Page Number Section */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <p
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            color: "var(--partnerhome-text-color-base)",
            lineHeight: "20px",
            margin: 0,
          }}
        >
          Page
        </p>

        {/* Page Input */}
        <input
          type="number"
          min={1}
          max={totalPages}
          value={currentPage}
          onChange={(e) => {
            const page = Number(e.target.value);
            if (page >= 1 && page <= totalPages) {
              onPageChange(page);
            }
          }}
          className="pagination-page-input"
          style={{
            height: "48px",
            width: "42px",
            textAlign: "center",
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            color: "var(--partnerhome-text-color-base)",
            backgroundColor: "var(--partnerhome-bg-color-base)",
            border: "1.5px solid var(--partnerhome-border-color-base)",
            borderRadius: "4px",
            padding: "0",
          }}
        />

        <p
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            color: "var(--partnerhome-text-color-base)",
            lineHeight: "20px",
            margin: 0,
          }}
        >
          of {totalPages}
        </p>
      </div>

      {/* Navigation Controls */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {/* Jump to First Page */}
        <button
          onClick={() => onPageChange(1)}
          disabled={isFirstPage}
          aria-label="Jump to first page"
          style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            borderTop: "none",
            borderRight: "none",
            borderBottom: "none",
            borderLeft: "none",
            padding: 0,
            cursor: isFirstPage ? "not-allowed" : "pointer",
            transition: "all 150ms ease",
          }}
          onMouseEnter={(e) => {
            if (!isFirstPage) {
              const paths = e.currentTarget.querySelectorAll('svg path');
              paths.forEach(path => {
                (path as SVGPathElement).style.fill = "var(--partnerhome-text-color-primary)";
                (path as SVGPathElement).style.stroke = "var(--partnerhome-text-color-primary)";
              });
            }
          }}
          onMouseLeave={(e) => {
            if (!isFirstPage) {
              const paths = e.currentTarget.querySelectorAll('svg path');
              paths.forEach(path => {
                (path as SVGPathElement).style.fill = "var(--partnerhome-text-color-base)";
                (path as SVGPathElement).style.stroke = "var(--partnerhome-text-color-base)";
              });
            }
          }}
        >
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24" fill="none">
            <path
              d={svgPaths.p38a03d80}
              fill={isFirstPage ? "var(--partnerhome-text-color-disabled)" : "var(--partnerhome-text-color-base)"}
              stroke={isFirstPage ? "var(--partnerhome-text-color-disabled)" : "var(--partnerhome-text-color-base)"}
              strokeWidth="0.5"
            />
            <path
              d={svgPaths.pc1bae80}
              fill={isFirstPage ? "var(--partnerhome-text-color-disabled)" : "var(--partnerhome-text-color-base)"}
              stroke={isFirstPage ? "var(--partnerhome-text-color-disabled)" : "var(--partnerhome-text-color-base)"}
              strokeWidth="0.5"
            />
          </svg>
        </button>

        {/* Back by One Page */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          aria-label="Previous page"
          style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            borderTop: "none",
            borderRight: "none",
            borderBottom: "none",
            borderLeft: "none",
            padding: 0,
            cursor: isFirstPage ? "not-allowed" : "pointer",
            transition: "all 150ms ease",
          }}
          onMouseEnter={(e) => {
            if (!isFirstPage) {
              const paths = e.currentTarget.querySelectorAll('svg path');
              paths.forEach(path => {
                (path as SVGPathElement).style.fill = "var(--partnerhome-text-color-primary)";
                (path as SVGPathElement).style.stroke = "var(--partnerhome-text-color-primary)";
              });
            }
          }}
          onMouseLeave={(e) => {
            if (!isFirstPage) {
              const paths = e.currentTarget.querySelectorAll('svg path');
              paths.forEach(path => {
                (path as SVGPathElement).style.fill = "var(--partnerhome-text-color-base)";
                (path as SVGPathElement).style.stroke = "var(--partnerhome-text-color-base)";
              });
            }
          }}
        >
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24" fill="none">
            <path
              d={svgPaths.p2b9e1800}
              fill={isFirstPage ? "var(--partnerhome-text-color-disabled)" : "var(--partnerhome-text-color-base)"}
              stroke={isFirstPage ? "var(--partnerhome-text-color-disabled)" : "var(--partnerhome-text-color-base)"}
              strokeWidth="0.5"
            />
          </svg>
        </button>

        {/* Advance by One Page */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLastPage}
          aria-label="Next page"
          style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            borderTop: "none",
            borderRight: "none",
            borderBottom: "none",
            borderLeft: "none",
            padding: 0,
            cursor: isLastPage ? "not-allowed" : "pointer",
            transition: "all 150ms ease",
          }}
          onMouseEnter={(e) => {
            if (!isLastPage) {
              const paths = e.currentTarget.querySelectorAll('svg path');
              paths.forEach(path => {
                (path as SVGPathElement).style.fill = "var(--partnerhome-text-color-primary)";
                (path as SVGPathElement).style.stroke = "var(--partnerhome-text-color-primary)";
              });
            }
          }}
          onMouseLeave={(e) => {
            if (!isLastPage) {
              const paths = e.currentTarget.querySelectorAll('svg path');
              paths.forEach(path => {
                (path as SVGPathElement).style.fill = "var(--partnerhome-text-color-base)";
                (path as SVGPathElement).style.stroke = "var(--partnerhome-text-color-base)";
              });
            }
          }}
        >
          <svg style={{ width: "24px", height: "24px", marginTop: "8px" }} viewBox="0 0 24 24" fill="none">
            <path
              d={svgPaths.p18e21900}
              fill={isLastPage ? "var(--partnerhome-text-color-disabled)" : "var(--partnerhome-text-color-base)"}
              stroke={isLastPage ? "var(--partnerhome-text-color-disabled)" : "var(--partnerhome-text-color-base)"}
              strokeWidth="0.5"
            />
          </svg>
        </button>

        {/* Jump to Last Page */}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={isLastPage}
          aria-label="Jump to last page"
          style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            borderTop: "none",
            borderRight: "none",
            borderBottom: "none",
            borderLeft: "none",
            padding: 0,
            marginLeft: "-4px",
            cursor: isLastPage ? "not-allowed" : "pointer",
            transition: "all 150ms ease",
          }}
          onMouseEnter={(e) => {
            if (!isLastPage) {
              const paths = e.currentTarget.querySelectorAll('svg path');
              paths.forEach(path => {
                (path as SVGPathElement).style.fill = "var(--partnerhome-text-color-primary)";
                (path as SVGPathElement).style.stroke = "var(--partnerhome-text-color-primary)";
              });
            }
          }}
          onMouseLeave={(e) => {
            if (!isLastPage) {
              const paths = e.currentTarget.querySelectorAll('svg path');
              paths.forEach(path => {
                (path as SVGPathElement).style.fill = "var(--partnerhome-text-color-base)";
                (path as SVGPathElement).style.stroke = "var(--partnerhome-text-color-base)";
              });
            }
          }}
        >
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24" fill="none">
            <path
              d={svgPaths.pb64e140}
              fill={isLastPage ? "var(--partnerhome-text-color-disabled)" : "var(--partnerhome-text-color-base)"}
              stroke={isLastPage ? "var(--partnerhome-text-color-disabled)" : "var(--partnerhome-text-color-base)"}
              strokeWidth="0.5"
            />
            <path
              d={svgPaths.p349aac80}
              fill={isLastPage ? "var(--partnerhome-text-color-disabled)" : "var(--partnerhome-text-color-base)"}
              stroke={isLastPage ? "var(--partnerhome-text-color-disabled)" : "var(--partnerhome-text-color-base)"}
              strokeWidth="0.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}