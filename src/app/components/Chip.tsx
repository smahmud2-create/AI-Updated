import React, { useState } from "react";

export interface ChipProps {
  /** Text label for the chip */
  label: string;
  
  /** Interaction type */
  type?: "checkbox" | "radio" | "button" | "link";
  
  /** Whether the chip is selected (checkbox/radio only) */
  selected?: boolean;
  
  /** Callback when chip is clicked (checkbox/radio/button/link) */
  onClick?: () => void;
  
  /** Callback when dismiss button is clicked (button type only) */
  onDismiss?: () => void;
  
  /** Optional leading icon (React node or lucide-react icon) */
  icon?: React.ReactNode;
  
  /** Whether to show dismiss button (automatic for button type) */
  dismissible?: boolean;
  
  /** Size variant */
  size?: "default" | "condensed";
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Optional id */
  id?: string;
  
  /** Optional name for radio groups */
  name?: string;
  
  /** Optional href for link type */
  href?: string;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  type = "button",
  selected = false,
  onClick,
  onDismiss,
  icon,
  dismissible = type === "button",
  size = "default",
  disabled = false,
  id,
  name,
  href,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const chipId = id || `chip-${Math.random().toString(36).substr(2, 9)}`;

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled && onDismiss) {
      onDismiss();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      handleClick();
    }
    if (e.key === "Backspace" || e.key === "Delete") {
      if (dismissible && onDismiss) {
        e.preventDefault();
        onDismiss();
      }
    }
  };

  // Determine background color based on state
  const getBackgroundColor = (): string => {
    if (disabled) {
      if (selected) {
        return "var(--partnerhome-core-10)"; // Muted purple for disabled selected
      }
      return "var(--partnerhome-bg-color-disabledsubtle)";
    }
    
    if (selected) {
      // Selected uses primary pattern (prominent)
      if (isActive) {
        return "var(--partnerhome-bg-color-primaryactive)";
      }
      if (isHovered) {
        return "var(--partnerhome-bg-color-primaryhover)";
      }
      return "var(--partnerhome-bg-color-primary)";
    }
    
    // Unselected uses tertiary pattern (like dropdown items)
    if (isActive) {
      return "var(--partnerhome-bg-color-tertiaryactive)";
    }
    if (isHovered) {
      return "var(--partnerhome-bg-color-tertiaryhover)";
    }
    return "var(--partnerhome-bg-color-tertiaryidle)";
  };

  // Determine border color based on state
  const getBorderColor = (): string => {
    if (disabled) {
      return "var(--partnerhome-border-color-disabledsubtle)";
    }
    
    if (selected) {
      // Selected chips have no visible border (matches background)
      if (isActive) {
        return "var(--partnerhome-bg-color-primaryactive)";
      }
      if (isHovered) {
        return "var(--partnerhome-bg-color-primaryhover)";
      }
      return "var(--partnerhome-bg-color-primary)";
    }
    
    // Unselected border states
    if (isActive) {
      return "var(--partnerhome-border-color-tertiaryactive)";
    }
    if (isHovered) {
      return "var(--partnerhome-border-color-tertiaryhover)";
    }
    return "var(--partnerhome-border-color-base)";
  };

  // Determine text color based on state
  const getTextColor = (): string => {
    if (disabled) {
      return "var(--partnerhome-text-color-disabled)";
    }
    
    if (selected) {
      // Selected uses tertiary text tokens (white/light on purple background)
      if (isActive) {
        return "var(--partnerhome-text-color-tertiaryactive)";
      }
      if (isHovered) {
        return "var(--partnerhome-text-color-tertiaryhover)";
      }
      return "var(--partnerhome-text-color-tertiaryidle)";
    }
    
    // Unselected uses base color (black)
    return "var(--partnerhome-text-color-base)";
  };

  // Padding based on size
  const getPadding = (): string => {
    if (size === "condensed") {
      // Condensed has reduced vertical padding
      return "var(--partnerhome-spacing-500) var(--partnerhome-spacing-1500)";
    }
    // Default has full padding
    return "var(--partnerhome-spacing-1000) var(--partnerhome-spacing-1500)";
  };

  // Gap between icon and label
  const getGap = (): string => {
    return "var(--partnerhome-spacing-1000)";
  };

  const chipStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: getGap(),
    padding: getPadding(),
    height: size === "condensed" ? "24px" : "32px",
    background: getBackgroundColor(),
    border: `var(--partnerhome-stroke-weights-small) solid ${getBorderColor()}`,
    borderRadius: "100px", // Pill shape for chips
    fontFamily: "'Lato', 'Inter', sans-serif",
    fontSize: "var(--partnerhome-font-size-1000)",
    fontWeight: "var(--partnerhome-font-weight-normal)",
    lineHeight: "var(--partnerhome-line-height-base)",
    color: `${getTextColor()} !important` as any, // Force color override
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 200ms ease",
    outline: "none",
    boxShadow: isFocused && !disabled
      ? `0 0 0 2px var(--partnerhome-utility-focus)`
      : "none",
    opacity: disabled ? 0.5 : 1,
    userSelect: "none",
    textDecoration: "none",
    whiteSpace: "nowrap",
  };

  const iconStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "16px",
    height: "16px",
    flexShrink: 0,
    color: getTextColor(),
  };

  const labelStyles: React.CSSProperties = {
    color: getTextColor(),
  };

  const dismissButtonStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "16px",
    height: "16px",
    flexShrink: 0,
    padding: 0,
    margin: 0,
    background: "transparent",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    color: getTextColor(),
    transition: "opacity 200ms ease",
  };

  // Render as link for link type
  if (type === "link" && href) {
    return (
      <a
        id={chipId}
        href={href}
        onClick={handleClick}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        style={chipStyles}
        aria-disabled={disabled}
      >
        {icon && <span style={iconStyles}>{icon}</span>}
        <span style={labelStyles}>{label}</span>
      </a>
    );
  }

  // Render as button for button/checkbox/radio types
  return (
    <button
      id={chipId}
      type="button"
      role={type === "checkbox" ? "checkbox" : type === "radio" ? "radio" : "button"}
      aria-checked={type === "checkbox" || type === "radio" ? selected : undefined}
      aria-disabled={disabled}
      name={name}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      style={chipStyles}
      disabled={disabled}
    >
      {icon && <span style={iconStyles}>{icon}</span>}
      <span style={labelStyles}>{label}</span>
      {dismissible && (
        <span
          onClick={handleDismiss}
          onMouseEnter={(e) => {
            e.stopPropagation();
          }}
          style={dismissButtonStyles}
          aria-label={`Remove ${label}`}
          role="button"
          tabIndex={-1}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </button>
  );
};

export default Chip;