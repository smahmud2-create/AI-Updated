/**
 * HomeBase Checkbox Component
 * 
 * Matches HomeBase V2 Design System specifications:
 * - 20px × 20px checkbox with 32px tap target
 * - 4px border radius (medium)
 * - 1.5px border (medium stroke weight)
 * - 3px border for active state (large stroke weight)
 * - White checkmark icon when selected
 * - White dash icon when indeterminate
 * 
 * States: Idle, Hover, Active, Focus, Disabled
 * Status: Selected, Unselected, Indeterminate
 */

import React from "react";
import { CheckboxCheckIcon, IndeterminateIcon } from "./icons";

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  id?: string;
  className?: string;
}

export function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  label,
  id,
  className = "",
}: CheckboxProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Sync indeterminate state with native input
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const isChecked = checked || indeterminate;

  // Determine checkbox state classes
  const getCheckboxStyles = () => {
    // Disabled state (overrides all others)
    if (disabled) {
      if (isChecked) {
        return {
          background: "var(--partnerhome-bg-color-disabled)",
          border: "1.5px solid var(--partnerhome-border-color-disabled)",
        };
      } else {
        return {
          background: "var(--partnerhome-bg-color-disabledsubtle)",
          border: "1.5px solid var(--partnerhome-border-color-disabled)",
        };
      }
    }

    // Active state (mouse down)
    if (isActive) {
      if (isChecked) {
        return {
          background: "var(--partnerhome-bg-color-primary-active)",
          border: "3px solid var(--partnerhome-border-color-primary-active)",
        };
      } else {
        return {
          background: "var(--partnerhome-bg-color-tertiaryactive)",
          border: "3px solid var(--partnerhome-border-color-tertiaryactive)",
        };
      }
    }

    // Hover state
    const isHover = !isActive;

    // Focus state (keyboard focus)
    const focusRing = isFocused
      ? "0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px var(--partnerhome-utility-focus)"
      : "none";

    // Idle state (default)
    if (isChecked) {
      return {
        background: "var(--partnerhome-bg-color-primary)",
        border: "1.5px solid var(--partnerhome-border-color-primary)",
        boxShadow: focusRing,
      };
    } else {
      return {
        background: "var(--partnerhome-bg-color-tertiaryidle)",
        border: "1.5px solid var(--partnerhome-border-color-tertiaryidle)",
        boxShadow: focusRing,
      };
    }
  };

  const getHoverStyles = () => {
    if (disabled || isActive) return {};

    if (isChecked) {
      return {
        background: "var(--partnerhome-bg-color-primary-hover)",
        border: "1.5px solid var(--partnerhome-border-color-primary-hover)",
      };
    } else {
      return {
        background: "var(--partnerhome-bg-color-tertiaryhover)",
        border: "1.5px solid var(--partnerhome-border-color-tertiaryhover)",
      };
    }
  };

  const checkboxStyles = getCheckboxStyles();

  return (
    <label
      className={`inline-flex items-center gap-[var(--partnerhome-spacing-1000)] cursor-pointer ${className}`}
      style={{
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {/* Hidden native input for accessibility */}
      <input
        ref={inputRef}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        id={id}
        className="sr-only"
        aria-checked={indeterminate ? "mixed" : checked}
      />

      {/* Custom checkbox visual */}
      <div
        className="checkbox-container"
        style={{
          position: "relative",
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseDown={() => !disabled && setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onMouseLeave={() => setIsActive(false)}
      >
        <div
          className="checkbox-visual group-hover:transition-all"
          style={{
            position: "relative",
            width: "20px",
            height: "20px",
            borderRadius: "var(--partnerhome-radius-medium)",
            transition: "all 150ms ease",
            ...checkboxStyles,
          }}
          onMouseEnter={(e) => {
            if (!disabled && !isActive) {
              const hoverStyles = getHoverStyles();
              Object.assign(e.currentTarget.style, hoverStyles);
            }
          }}
          onMouseLeave={(e) => {
            if (!disabled && !isActive) {
              Object.assign(e.currentTarget.style, checkboxStyles);
            }
          }}
        >
          {/* Checkmark icon (selected state) */}
          {checked && !indeterminate && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            >
              <CheckboxCheckIcon size={24} color="#FFFFFF" />
            </div>
          )}

          {/* Indeterminate icon (dash) */}
          {indeterminate && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            >
              <IndeterminateIcon size={24} color="#FFFFFF" />
            </div>
          )}
        </div>
      </div>

      {/* Label text */}
      {label && (
        <span
          style={{
            fontFamily: "var(--partnerhome-font-family-base)",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            lineHeight: "var(--partnerhome-line-height-base)",
            color: disabled
              ? "var(--partnerhome-text-color-disabled)"
              : "var(--partnerhome-text-color-base)",
          }}
        >
          {label}
        </span>
      )}
    </label>
  );
}