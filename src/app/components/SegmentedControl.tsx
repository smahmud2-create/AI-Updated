import React, { useState } from "react";

export interface SegmentOption {
  value: string;
  label?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps {
  options: SegmentOption[];
  value: string;
  onChange: (value: string) => void;
  emphasis?: "prominent" | "subtle";
  displayMode?: "icon-text" | "icon-only" | "text-only";
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  value,
  onChange,
  emphasis = "prominent",
  displayMode = "icon-text",
}) => {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "var(--partnerhome-spacing-500)",
        position: "relative",
        background: "var(--partnerhome-bg-color-base)",
        border: "1px solid var(--partnerhome-border-color-base)",
        borderRadius: "var(--partnerhome-radius-medium)",
        isolation: "isolate",
      }}
    >
      {options.map((option) => (
        <SegmentButton
          key={option.value}
          option={option}
          isSelected={value === option.value}
          onClick={() => !option.disabled && onChange(option.value)}
          emphasis={emphasis}
          displayMode={displayMode}
        />
      ))}
    </div>
  );
};

interface SegmentButtonProps {
  option: SegmentOption;
  isSelected: boolean;
  onClick: () => void;
  emphasis: "prominent" | "subtle";
  displayMode: "icon-text" | "icon-only" | "text-only";
}

const SegmentButton: React.FC<SegmentButtonProps> = ({
  option,
  isSelected,
  onClick,
  emphasis,
  displayMode,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const getBackgroundColor = (): string => {
    if (option.disabled) {
      return "var(--partnerhome-bg-color-disabledsubtle)";
    }

    if (isSelected) {
      // SELECTED STATES
      if (emphasis === "prominent") {
        // Prominent selected
        if (isActive) {
          return "var(--partnerhome-bg-color-primaryactive)";
        }
        if (isHovered) {
          return "var(--partnerhome-bg-color-primaryhover)";
        }
        return "var(--partnerhome-bg-color-primary)";
      } else {
        // Subtle selected
        if (isActive) {
          return "var(--partnerhome-bg-color-secondaryactive)";
        }
        if (isHovered) {
          return "var(--partnerhome-bg-color-secondaryhover)";
        }
        return "var(--partnerhome-bg-color-secondaryactive)"; // #DBC5DB
      }
    } else {
      // UNSELECTED STATES (same for both prominent and subtle)
      if (isActive) {
        return "var(--partnerhome-bg-color-tertiaryactive)";
      }
      if (isHovered) {
        return "var(--partnerhome-bg-color-tertiaryhover)";
      }
      return "var(--partnerhome-bg-color-tertiaryidle)";
    }
  };

  const getTextColor = (): string => {
    if (option.disabled) {
      return "var(--partnerhome-text-color-disabled)";
    }

    if (isSelected) {
      if (emphasis === "prominent") {
        // Prominent selected: white text
        return "var(--partnerhome-text-color-inverse)";
      } else {
        // Subtle selected: primary purple text
        return "var(--partnerhome-text-color-primary)";
      }
    } else {
      // Unselected: base text
      return "var(--partnerhome-text-color-base)";
    }
  };

  const getIconColor = (): string => {
    if (option.disabled) {
      return "var(--partnerhome-text-color-disabled)";
    }

    if (isSelected) {
      if (emphasis === "prominent") {
        // Prominent selected: white icon
        return "var(--partnerhome-text-color-inverse)";
      } else {
        // Subtle selected: base (dark) icon - DIFFERENT from text!
        return "var(--partnerhome-text-color-base)";
      }
    } else {
      // Unselected: base icon
      return "var(--partnerhome-text-color-base)";
    }
  };

  const shouldShowIcon = displayMode === "icon-text" || displayMode === "icon-only";
  const shouldShowText = displayMode === "icon-text" || displayMode === "text-only";

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      disabled={option.disabled}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "var(--partnerhome-spacing-1000) var(--partnerhome-spacing-2000)",
        gap: "var(--partnerhome-spacing-1000)",
        minHeight: "40px",
        background: getBackgroundColor(),
        borderRadius: "var(--partnerhome-radius-medium)",
        border: "none",
        cursor: option.disabled ? "not-allowed" : "pointer",
        transition: "background-color 150ms ease, transform 50ms ease",
        fontFamily: "'Lato', 'Inter', sans-serif",
        fontSize: "var(--partnerhome-font-size-1000)",
        fontWeight: "var(--partnerhome-font-weight-normal) !important",
        lineHeight: "20px",
        color: getTextColor(),
        flex: "none",
        opacity: option.disabled ? 0.5 : 1,
      }}
    >
      {shouldShowIcon && option.icon && (
        <div
          style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: getIconColor(),
          }}
        >
          {option.icon}
        </div>
      )}
      {shouldShowText && option.label && (
        <span
          style={{
            display: "flex",
            alignItems: "flex-end",
            color: getTextColor(),
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            lineHeight: "20px",
          }}
        >
          {option.label}
        </span>
      )}
    </button>
  );
};

export default SegmentedControl;