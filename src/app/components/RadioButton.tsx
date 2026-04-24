import React, { useState } from "react";

export interface RadioButtonProps {
  /** Label text for the radio button */
  label: string;
  /** Name attribute for grouping radio buttons */
  name: string;
  /** Value of the radio button */
  value: string;
  /** Whether the radio button is selected */
  checked?: boolean;
  /** Whether the radio button is disabled */
  disabled?: boolean;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Custom className for additional styling */
  className?: string;
}

export function RadioButton({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
  className = "",
}: RadioButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  const getRadioButtonStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      width: "20px",
      height: "20px",
      borderRadius: "100px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transition: "all 250ms ease",
      cursor: disabled ? "not-allowed" : "pointer",
      position: "relative",
      boxSizing: "border-box",
    };

    // SELECTED STATES (checked=true)
    if (checked) {
      // Disabled selected
      if (disabled) {
        return {
          ...baseStyle,
          background: "var(--partnerhome-bg-color-disabledsubtle)",
          border: "2px solid var(--partnerhome-border-color-disabled)",
        };
      }

      // Focus selected
      if (isFocused) {
        return {
          ...baseStyle,
          background: "var(--partnerhome-bg-color-secondaryactive)",
          border: "2px solid var(--partnerhome-border-color-primaryactive)",
          boxShadow: "0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #1364F1",
        };
      }

      // Active selected
      if (isActive) {
        return {
          ...baseStyle,
          background: "var(--partnerhome-bg-color-secondaryactive)",
          border: "2px solid var(--partnerhome-border-color-primaryactive)",
        };
      }

      // Hover selected
      if (isHovered) {
        return {
          ...baseStyle,
          background: "var(--partnerhome-bg-color-secondaryhover)",
          border: "1.5px solid var(--partnerhome-border-color-primaryhover)",
        };
      }

      // Idle selected
      return {
        ...baseStyle,
        background: "var(--partnerhome-bg-color-secondaryidle)",
        border: "1.5px solid var(--partnerhome-border-color-primaryidle)",
      };
    }

    // UNSELECTED STATES (checked=false)
    // Disabled unselected
    if (disabled) {
      return {
        ...baseStyle,
        background: "var(--partnerhome-bg-color-disabledsubtle)",
        border: "1.5px solid var(--partnerhome-border-color-disabled)",
      };
    }

    // Focus unselected
    if (isFocused) {
      return {
        ...baseStyle,
        background: "var(--partnerhome-bg-color-tertiaryactive)",
        border: "2px solid var(--partnerhome-border-color-tertiaryactive)",
        boxShadow: "0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #1364F1",
      };
    }

    // Active unselected
    if (isActive) {
      return {
        ...baseStyle,
        background: "var(--partnerhome-bg-color-tertiaryactive)",
        border: "2px solid var(--partnerhome-border-color-tertiaryactive)",
      };
    }

    // Hover unselected
    if (isHovered) {
      return {
        ...baseStyle,
        background: "var(--partnerhome-bg-color-tertiaryhover)",
        border: "1.5px solid var(--partnerhome-border-color-tertiaryhover)",
      };
    }

    // Idle unselected
    return {
      ...baseStyle,
      background: "var(--partnerhome-bg-color-tertiaryidle)",
      border: "1.5px solid var(--partnerhome-border-color-tertiaryidle)",
    };
  };

  const getInnerDotStyle = (): React.CSSProperties => {
    const baseDotStyle: React.CSSProperties = {
      width: "8px",
      height: "8px",
      borderRadius: "100px",
      transition: "all 250ms ease",
      position: "absolute",
    };

    // Hide dot if not checked
    if (!checked) {
      return {
        ...baseDotStyle,
        visibility: "hidden",
      };
    }

    // Disabled selected
    if (disabled) {
      return {
        ...baseDotStyle,
        background: "var(--partnerhome-bg-color-disabled)",
        visibility: "visible",
      };
    }

    // Active/Focus selected
    if (isActive || isFocused) {
      return {
        ...baseDotStyle,
        background: "var(--partnerhome-bg-color-primaryactive)",
        visibility: "visible",
      };
    }

    // Hover selected
    if (isHovered) {
      return {
        ...baseDotStyle,
        background: "var(--partnerhome-bg-color-primaryhover)",
        visibility: "visible",
      };
    }

    // Idle selected
    return {
      ...baseDotStyle,
      background: "var(--partnerhome-bg-color-primaryidle)",
      visibility: "visible",
    };
  };

  const getLabelStyle = (): React.CSSProperties => {
    return {
      fontFamily: "'Lato', 'Inter', sans-serif",
      fontSize: "var(--partnerhome-font-size-1000)",
      fontWeight: "var(--partnerhome-font-weight-normal)",
      lineHeight: "var(--partnerhome-line-height-base)",
      color: disabled
        ? "var(--partnerhome-text-color-disabled)"
        : "var(--partnerhome-text-color-base)",
      cursor: disabled ? "not-allowed" : "pointer",
      userSelect: "none",
    };
  };

  return (
    <label
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--partnerhome-spacing-1000)",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => !disabled && setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        onFocus={() => !disabled && setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          position: "absolute",
          opacity: 0,
          width: 0,
          height: 0,
        }}
      />
      <div style={getRadioButtonStyle()}>
        <div style={getInnerDotStyle()} />
      </div>
      <span style={getLabelStyle()}>{label}</span>
    </label>
  );
}

export interface RadioGroupProps {
  /** Name attribute for grouping radio buttons */
  name: string;
  /** Currently selected value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Radio button options */
  options: Array<{
    label: string;
    value: string;
    disabled?: boolean;
  }>;
  /** Whether to display vertically (default) or horizontally */
  orientation?: "vertical" | "horizontal";
}

export function RadioGroup({
  name,
  value,
  onChange,
  options,
  orientation = "vertical",
}: RadioGroupProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: orientation === "vertical" ? "column" : "row",
        gap: orientation === "vertical" 
          ? "var(--partnerhome-spacing-1500)" 
          : "var(--partnerhome-spacing-3000)",
      }}
    >
      {options.map((option) => (
        <RadioButton
          key={option.value}
          name={name}
          label={option.label}
          value={option.value}
          checked={value === option.value}
          disabled={option.disabled}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
