import React, { useState, useRef, InputHTMLAttributes } from "react";

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  icon?: React.ReactNode;
  helperMessage?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
  error?: boolean;
  containerStyle?: React.CSSProperties;
}

export function TextInput({
  label,
  icon,
  helperMessage,
  showCharacterCount = false,
  maxLength,
  error = false,
  containerStyle,
  value: controlledValue,
  onChange,
  ...inputProps
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Use controlled value if provided, otherwise use internal state
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const hasValue = String(value).length > 0;
  const isLabelFloating = isFocused || hasValue;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    inputProps.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    inputProps.onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (controlledValue === undefined) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const characterCount = String(value).length;
  const maxCharacters = maxLength || 250;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 0,
        gap: "6px",
        position: "relative",
        width: "320px",
        ...containerStyle,
      }}
    >
      {/* Character Count (top right) */}
      {showCharacterCount && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "52px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            padding: 0,
            gap: "2px",
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-500)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            lineHeight: "16px",
            color: "var(--partnerhome-text-color-base)",
          }}
        >
          <span>{characterCount}</span>
          <span>/</span>
          <span>{maxCharacters}</span>
        </div>
      )}

      {/* Input Container */}
      <div
        onClick={handleContainerClick}
        style={{
          position: "relative",
          width: "100%",
          height: "48px",
          cursor: "text",
          outline: "none",
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
            border: isFocused
              ? "2px solid var(--partnerhome-border-color-tertiaryidle)"
              : error
              ? "1.5px solid var(--partnerhome-border-color-sale)"
              : "1.5px solid var(--partnerhome-border-color-tertiaryidle)",
            borderRadius: "var(--partnerhome-radius-large)",
            boxSizing: "border-box",
            transition: "border-width 150ms ease",
            outline: "none",
            pointerEvents: "none",
          }}
        />

        {/* Floating Label */}
        <label
          style={{
            position: "absolute",
            left: isLabelFloating ? "16px" : (icon ? "48px" : "16px"),
            top: isLabelFloating ? "-8px" : "50%",
            transform: isLabelFloating ? "translateY(0)" : "translateY(-50%)",
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: isLabelFloating ? "var(--partnerhome-font-size-500)" : "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            lineHeight: "16px",
            color: "var(--partnerhome-text-color-basesubtle)",
            background: isLabelFloating ? "var(--partnerhome-bg-color-base)" : "transparent",
            padding: isLabelFloating ? "0 4px" : "0",
            pointerEvents: "none",
            transition: "all 150ms ease",
            transformOrigin: "left center",
            zIndex: 2,
          }}
        >
          {label}
        </label>

        {/* Content Container */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: icon ? "0 16px 0 16px" : "0 16px",
            gap: "8px",
            width: "100%",
            height: "48px",
            top: 0,
            left: 0,
            boxSizing: "border-box",
          }}
        >
          {/* Left Icon */}
          {icon && (
            <div
              style={{
                width: "24px",
                height: "24px",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--partnerhome-text-color-base)",
              }}
            >
              {icon}
            </div>
          )}

          {/* Input Field */}
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            maxLength={maxLength}
            {...inputProps}
            style={{
              flex: 1,
              height: "24px",
              border: "none",
              outline: "none",
              boxShadow: "none",
              background: "transparent",
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              lineHeight: "20px",
              color: "var(--partnerhome-text-color-base)",
              padding: 0,
              ...inputProps.style,
            }}
          />
        </div>
      </div>

      {/* Helper Message */}
      {helperMessage && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: 0,
            gap: "8px",
            width: "100%",
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-500)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            lineHeight: "16px",
            color: error
              ? "var(--partnerhome-text-color-sale)"
              : "var(--partnerhome-text-color-base)",
          }}
        >
          {helperMessage}
        </div>
      )}
    </div>
  );
}