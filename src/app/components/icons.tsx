/**
 * PartnerHome Icon Components for FigmaMake
 * 
 * All icons are inline SVG components that use currentColor.
 * These can be included directly in the FigmaMake agent prompt.
 * 
 * Usage: <ChevronDownIcon size={16} />
 */

import * as React from "react";
import svgPaths from "@/imports/svg-ma463uy00g";

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Navigation Icons

export function ChevronDownIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M12 16L7 11L17 11L12 16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ChevronUpIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M12 8L17 13L7 13L12 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ChevronLeftIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ChevronRightIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Sort/Arrow Icons

export function ArrowUpIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M12 4L12 20M12 4L8 8M12 4L16 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowDownIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M12 20L12 4M12 20L16 16M12 20L8 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Status Icons

export function XIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Checkbox Check Icon (for inside checkboxes) - matches HomeBase design
export function CheckboxCheckIcon({ size = 24, color = "#FFFFFF", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M6.5 12L10 15.5L17.5 8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Indeterminate Icon (horizontal dash for checkboxes) - Figma design
export function IndeterminateIcon({ size = 24, color = "#FFFFFF", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d={svgPaths.p134e6200}
        fill={color}
      />
    </svg>
  );
}

export function AlertIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M12 2L2 22H22L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 9V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

export function SuccessIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M8 12L11 15L16 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function WarningIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M12 2L2 22H22L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 8V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

export function InfoIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M12 8V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

// Action Icons

export function EditIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M11 4H4C3.45 4 3 4.45 3 5V20C3 20.55 3.45 21 4 21H19C19.55 21 20 20.55 20 20V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M18.5 2.5C18.78 2.22 19.22 2.22 19.5 2.5L21.5 4.5C21.78 4.78 21.78 5.22 21.5 5.5L12.5 14.5L9 15L9.5 11.5L18.5 2.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DeleteIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M3 6H5H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M8 6V4C8 3.45 8.45 3 9 3H15C15.55 3 16 3.45 16 4V6M19 6V20C19 20.55 18.55 21 18 21H6C5.45 21 5 20.55 5 20V6H19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function SearchIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M21 21L16.65 16.65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function FilterIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M22 3H2L10 13.46V19L14 21V13.46L22 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function CloseIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DismissIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return <CloseIcon size={size} color={color} className={className} style={style} />;
}

export function MoreIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <circle cx="12" cy="5" r="2" fill="currentColor" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="19" r="2" fill="currentColor" />
    </svg>
  );
}

export function MenuIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Content Icons

export function DownloadIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M21 15V19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M7 10L12 15L17 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 15V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function UploadIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M21 15V19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M17 8L12 3L7 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 3V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function CopyIcon({ size = 16, color = "currentColor", className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M5 15H4C2.9 15 2 14.1 2 13V4C2 2.9 2.9 2 4 2H13C14.1 2 15 2.9 15 4V5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

// Export all icons
export const Icons = {
  ChevronDown: ChevronDownIcon,
  ChevronUp: ChevronUpIcon,
  ChevronLeft: ChevronLeftIcon,
  ChevronRight: ChevronRightIcon,
  ArrowUp: ArrowUpIcon,
  ArrowDown: ArrowDownIcon,
  X: XIcon,
  Check: CheckIcon,
  CheckboxCheck: CheckboxCheckIcon,
  Indeterminate: IndeterminateIcon,
  Alert: AlertIcon,
  Success: SuccessIcon,
  Warning: WarningIcon,
  Info: InfoIcon,
  Edit: EditIcon,
  Delete: DeleteIcon,
  Search: SearchIcon,
  Filter: FilterIcon,
  Close: CloseIcon,
  Dismiss: DismissIcon,
  More: MoreIcon,
  Menu: MenuIcon,
  Download: DownloadIcon,
  Upload: UploadIcon,
  Copy: CopyIcon,
};