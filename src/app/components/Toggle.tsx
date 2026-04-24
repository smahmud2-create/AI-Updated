import React, { useState } from "react";

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  labelPosition?: "left" | "right";
  offLabel?: string;
  onLabel?: string;
  disabled?: boolean;
  id?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  labelPosition = "right",
  offLabel,
  onLabel,
  disabled = false,
  id,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      handleToggle();
    }
  };

  const getTrackColor = (): string => {
    if (disabled) {
      return "var(--partnerhome-bg-color-disabledsubtle)";
    }
    if (checked) {
      if (isHovered) {
        return "var(--partnerhome-bg-color-primaryhover)";
      }
      return "var(--partnerhome-bg-color-primary)";
    }
    // Unselected state uses tertiaryidle background
    if (isHovered) {
      return "var(--partnerhome-bg-color-tertiaryhover)";
    }
    return "var(--partnerhome-bg-color-tertiaryidle)";
  };

  const getTrackBorder = (): string => {
    if (disabled) {
      return "var(--partnerhome-stroke-weights-medium) solid var(--partnerhome-border-color-disabled)";
    }
    if (checked) {
      // Selected state border matches background for seamless look
      if (isHovered) {
        return "var(--partnerhome-stroke-weights-medium) solid var(--partnerhome-bg-color-primaryhover)";
      }
      return "var(--partnerhome-stroke-weights-medium) solid var(--partnerhome-bg-color-primary)";
    }
    // Unselected state has tertiaryidle border
    return "var(--partnerhome-stroke-weights-medium) solid var(--partnerhome-border-color-tertiaryidle)";
  };

  const getThumbColor = (): string => {
    if (disabled) {
      return "var(--partnerhome-bg-color-disabledsubtle)";
    }
    if (checked) {
      // Selected thumb is white
      return "var(--partnerhome-surface-color-base)";
    }
    // Unselected thumb is inverse (dark)
    return "var(--partnerhome-bg-color-inverse)";
  };

  const getLabelColor = (): string => {
    if (disabled) {
      return "var(--partnerhome-text-color-disabled)";
    }
    return "var(--partnerhome-text-color-base)";
  };

  const statusLabel = checked ? onLabel : offLabel;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--partnerhome-spacing-1000)",
        flexDirection: labelPosition === "left" ? "row-reverse" : "row",
        height: "32px",
      }}
    >
      {/* Main Label (optional) */}
      {label && (
        <label
          htmlFor={toggleId}
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            lineHeight: "32px",
            color: getLabelColor(),
            cursor: disabled ? "not-allowed" : "pointer",
            userSelect: "none",
          }}
        >
          {label}
        </label>
      )}

      {/* Toggle Container */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--partnerhome-spacing-1000)",
        }}
      >
        {/* Toggle Track */}
        <div
          role="switch"
          aria-checked={checked}
          aria-labelledby={label ? toggleId : undefined}
          tabIndex={disabled ? -1 : 0}
          id={toggleId}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: "relative",
            width: "52px",
            height: "32px",
            background: getTrackColor(),
            borderRadius: "16px",
            cursor: disabled ? "not-allowed" : "pointer",
            transition: "background-color 200ms ease, box-shadow 200ms ease",
            outline: "none",
            boxShadow: isFocused && !disabled
              ? `0 0 0 3px var(--partnerhome-utility-focus)`
              : "none",
            opacity: disabled ? 0.5 : 1,
            border: getTrackBorder(),
            boxSizing: "border-box",
          }}
        >
          {/* Toggle Thumb */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: checked ? "22.5px" : "4px",
              width: "24px",
              height: "24px",
              background: getThumbColor(),
              borderRadius: "50%",
              transition: "left 200ms ease, transform 200ms ease",
              boxShadow: "0 2px 4px rgba(33, 30, 34, 0.2)",
            }}
          />

          {/* Status Label (optional) */}
          {statusLabel && (
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: checked ? "8px" : "auto",
                right: checked ? "auto" : "8px",
                transform: "translateY(-50%)",
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-500)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                lineHeight: "1",
                color: "var(--partnerhome-text-color-inverse)",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {statusLabel}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Toggle;