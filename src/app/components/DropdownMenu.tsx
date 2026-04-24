/**
 * DropdownMenu — Reusable popover menu primitive for dropdown lists.
 *
 * Handles: positioning, backdrop, container styling, optional search, scrollable content,
 * optional sticky footer. Compose with Checkbox, RadioButton, etc. for specific use cases.
 *
 * Usage:
 *   <DropdownMenu
 *     isOpen={isOpen}
 *     onClose={() => setIsOpen(false)}
 *     triggerRef={buttonRef}
 *     searchable
 *     searchValue={query}
 *     onSearchChange={setQuery}
 *     footer={<div>...</div>}
 *   >
 *     {items.map(item => (
 *       <DropdownMenuItem key={item.id} onClick={() => handleSelect(item.id)}>
 *         {item.label}
 *       </DropdownMenuItem>
 *     ))}
 *   </DropdownMenu>
 */

import React, { useState, useRef, useEffect, useCallback, ReactNode } from "react";
import { SearchInput } from "./SearchInput";
import { Checkbox } from "./Checkbox";

// ─── DropdownMenuItem ───────────────────────────────────────────────────────────

export interface DropdownMenuItemProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  style?: React.CSSProperties;
}

export function DropdownMenuItem({
  children,
  onClick,
  disabled = false,
  selected = false,
  style,
}: DropdownMenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getBackground = () => {
    if (disabled) return "transparent";
    if (selected) {
      return isHovered
        ? "var(--partnerhome-bg-color-secondaryhover)"
        : "var(--partnerhome-surface-color-primarysubtle)";
    }
    return isHovered
      ? "var(--partnerhome-bg-color-tertiaryhover)"
      : "transparent";
  };

  return (
    <div
      onClick={() => {
        if (!disabled) onClick?.();
      }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "6px var(--partnerhome-spacing-1000)",
        width: "100%",
        height: "44px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        backgroundColor: getBackground(),
        borderRadius: "var(--partnerhome-radius-large)",
        transition: "background-color 150ms ease",
        boxSizing: "border-box",
        gap: "var(--partnerhome-spacing-1000)",
        ...style,
      }}
    >
      {typeof children === "string" ? (
        <span
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            lineHeight: "20px",
            color: "var(--partnerhome-text-color-base)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            flex: 1,
          }}
        >
          {children}
        </span>
      ) : (
        children
      )}
    </div>
  );
}

// ─── DropdownMenuCheckboxItem ───────────────────────────────────────────────────

export interface DropdownMenuCheckboxItemProps {
  /** Option label text */
  label: string;
  /** Whether the checkbox is checked */
  checked: boolean;
  /** Change handler */
  onChange: (checked: boolean) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Optional count badge */
  count?: number;
  /** Additional style overrides */
  style?: React.CSSProperties;
}

/**
 * Convenience item for checkbox-list dropdowns.
 * Composes DropdownMenuItem + Checkbox internally.
 */
export function DropdownMenuCheckboxItem({
  label,
  checked,
  onChange,
  disabled = false,
  count,
  style,
}: DropdownMenuCheckboxItemProps) {
  return (
    <DropdownMenuItem
      selected={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      style={style}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Checkbox
          checked={checked}
          onChange={onChange}
        />
      </div>
      <span
        style={{
          fontFamily: "'Lato', 'Inter', sans-serif",
          fontSize: "var(--partnerhome-font-size-1000)",
          fontWeight: "var(--partnerhome-font-weight-normal)",
          lineHeight: "20px",
          color: "var(--partnerhome-text-color-base)",
          flex: 1,
        }}
      >
        {label}
      </span>
      {count !== undefined && (
        <span
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            lineHeight: "20px",
            color: "var(--partnerhome-text-color-secondary)",
            flexShrink: 0,
          }}
        >
          {count}
        </span>
      )}
    </DropdownMenuItem>
  );
}

// ─── DropdownMenuRadioItem ──────────────────────────────────────────────────────

export interface DropdownMenuRadioItemProps {
  /** Option label text */
  label: string;
  /** Whether this radio is selected */
  selected: boolean;
  /** Select handler */
  onSelect: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Additional style overrides */
  style?: React.CSSProperties;
}

/**
 * Convenience item for radio-list (single-select) dropdowns.
 * Renders an inline radio control + label inside DropdownMenuItem.
 */
export function DropdownMenuRadioItem({
  label,
  selected,
  onSelect,
  disabled = false,
  style,
}: DropdownMenuRadioItemProps) {
  return (
    <DropdownMenuItem
      selected={selected}
      disabled={disabled}
      onClick={onSelect}
      style={style}
    >
      {/* Radio Control */}
      <div
        style={{
          width: "32px",
          height: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            width: "20px",
            height: "20px",
            background: "var(--partnerhome-bg-color-base)",
            border: selected
              ? "var(--partnerhome-stroke-weights-medium) solid var(--partnerhome-border-color-primary)"
              : "var(--partnerhome-stroke-weights-medium) solid var(--partnerhome-border-color-tertiaryidle)",
            borderRadius: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {selected && (
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "var(--partnerhome-bg-color-primary)",
                borderRadius: "100px",
              }}
            />
          )}
        </div>
      </div>
      {/* Label */}
      <span
        style={{
          fontFamily: "'Lato', 'Inter', sans-serif",
          fontWeight: "var(--partnerhome-font-weight-normal)",
          fontSize: "var(--partnerhome-font-size-1000)",
          lineHeight: "20px",
          color: "var(--partnerhome-text-color-base)",
          flex: 1,
        }}
      >
        {label}
      </span>
    </DropdownMenuItem>
  );
}

// ─── DropdownMenu (popover container) ───────────────────────────────────────────

export interface DropdownMenuProps {
  /** Whether the menu is open */
  isOpen: boolean;
  /** Close handler */
  onClose: () => void;
  /** Ref to the trigger element for positioning */
  triggerRef: React.RefObject<HTMLElement | null>;
  /** Menu content */
  children: ReactNode;
  /** Fixed width of the menu (default: 300px) */
  width?: number;
  /** Enable built-in search input at the top */
  searchable?: boolean;
  /** Controlled search value (required when searchable=true) */
  searchValue?: string;
  /** Search change handler */
  onSearchChange?: (value: string) => void;
  /** Search placeholder text */
  searchPlaceholder?: string;
  /** Optional sticky header content (rendered below search, above scrollable list) */
  header?: ReactNode;
  /** Optional sticky footer content (e.g., Cancel/Apply buttons) */
  footer?: ReactNode;
  /** Max height for the scrollable content area */
  maxContentHeight?: string;
}

export function DropdownMenu({
  isOpen,
  onClose,
  triggerRef,
  children,
  width = 300,
  searchable = false,
  searchValue = "",
  onSearchChange,
  searchPlaceholder = "Search",
  header,
  footer,
  maxContentHeight = "300px",
}: DropdownMenuProps) {
  const [styles, setStyles] = useState<React.CSSProperties>({});
  const menuRef = useRef<HTMLDivElement>(null);

  // Position the dropdown relative to the trigger
  const calculatePosition = useCallback(() => {
    if (!triggerRef.current) return;

    const buttonRect = triggerRef.current.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const top = buttonRect.bottom + 4;

    let left: number;
    const buttonCenter = buttonRect.left + buttonRect.width / 2;
    const isButtonOnRightSide = buttonCenter > windowWidth / 2;

    if (isButtonOnRightSide) {
      left = buttonRect.right - width;
    } else {
      left = buttonRect.left;
    }

    const minLeft = 8;
    const maxLeft = windowWidth - width - 8;
    left = Math.max(minLeft, Math.min(left, maxLeft));

    setStyles({
      position: "fixed",
      top: `${top}px`,
      left: `${left}px`,
      zIndex: 15,
      maxHeight: `${Math.min(500, windowHeight - top - 16)}px`,
    });
  }, [triggerRef, width]);

  useEffect(() => {
    if (isOpen) {
      calculatePosition();
      // Recalculate after brief delay for layout shifts
      const timeoutId = setTimeout(calculatePosition, 10);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, calculatePosition]);

  // Auto-focus search input when menu opens
  useEffect(() => {
    if (isOpen && searchable && menuRef.current) {
      const timeoutId = setTimeout(() => {
        const input = menuRef.current?.querySelector('input[type="text"]') as HTMLInputElement;
        input?.focus();
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, searchable]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        style={{ zIndex: 14 }}
        onClick={onClose}
      />

      {/* Menu Popover */}
      <div
        ref={menuRef}
        style={{
          ...styles,
          display: "flex",
          flexDirection: "column",
          width: `${width}px`,
          background: "var(--partnerhome-bg-color-base)",
          border:
            "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
          boxShadow: "var(--partnerhome-shadow-20)",
          borderRadius: "var(--partnerhome-radius-medium)",
          overflow: "hidden",
        }}
      >
        {/* Search Section (sticky top) — uses SearchInput component */}
        {searchable && (
          <div
            style={{
              padding: "var(--partnerhome-spacing-1000)",
              background: "var(--partnerhome-bg-color-base)",
              borderBottom:
                "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
            }}
          >
            <SearchInput
              label={searchPlaceholder}
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              containerStyle={{ width: "100%" }}
            />
          </div>
        )}

        {/* Optional Header (sticky, below search) */}
        {header && (
          <div
            style={{
              padding:
                "var(--partnerhome-spacing-500) var(--partnerhome-spacing-1000)",
              background: "var(--partnerhome-bg-color-base)",
              borderBottom:
                "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
            }}
          >
            {header}
          </div>
        )}

        {/* Scrollable Content Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            padding: "var(--partnerhome-spacing-1000)",
            gap: "var(--partnerhome-spacing-500)",
            maxHeight: maxContentHeight,
            overflowY: "auto",
            flex: "1 1 auto",
          }}
        >
          {children}
        </div>

        {/* Optional Footer (sticky bottom) */}
        {footer && (
          <div
            style={{
              position: "sticky",
              bottom: 0,
              display: "flex",
              gap: "var(--partnerhome-spacing-1000)",
              padding: "var(--partnerhome-spacing-1000)",
              background: "var(--partnerhome-bg-color-base)",
              borderTop:
                "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
              zIndex: 1,
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </>
  );
}

// ─── DropdownMenuDivider ────────────────────────────────────────────────────────

export function DropdownMenuDivider() {
  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        background: "var(--partnerhome-border-color-base)",
        margin: "var(--partnerhome-spacing-500) 0",
        flexShrink: 0,
      }}
    />
  );
}

// ─── DropdownMenuEmptyState ─────────────────────────────────────────────────────

export function DropdownMenuEmptyState({ message = "No results found" }: { message?: string }) {
  return (
    <div
      style={{
        width: "100%",
        padding: "var(--partnerhome-spacing-2000)",
        fontFamily: "'Lato', 'Inter', sans-serif",
        fontSize: "var(--partnerhome-font-size-1000)",
        fontWeight: "var(--partnerhome-font-weight-normal)",
        color: "var(--partnerhome-text-color-basesubtle)",
        textAlign: "center",
      }}
    >
      {message}
    </div>
  );
}