import React, { useRef, useCallback } from "react";

/**
 * PartnerHome Design System — Button Component
 *
 * This component uses INLINE STYLES + JS event handlers to guarantee correct
 * rendering regardless of theme.css defaults that override CSS classes.
 *
 * Source of truth: ComponentsPage.tsx button patterns.
 *
 * Variants: primary | secondary | text | icon-primary | icon-secondary | ghost | destructive
 * Sizes:    standard (48px) | condensed (32px)
 */

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "text"
  | "icon-primary"
  | "icon-secondary"
  | "ghost"
  | "destructive";

export type ButtonSize = "standard" | "condensed";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant: ButtonVariant;
  /** Size — standard (48px) or condensed (32px) */
  size?: ButtonSize;
  /** Button contents (text, icon, or both) */
  children: React.ReactNode;
}

/* ------------------------------------------------------------------ */
/*  Token constants (keep DRY – single source for token strings)      */
/* ------------------------------------------------------------------ */

const T = {
  // Backgrounds
  bgPrimary: "var(--partnerhome-bg-color-button-primary)",
  bgPrimaryHover: "var(--partnerhome-bg-color-button-primary-hover)",
  bgPrimaryActive: "var(--partnerhome-bg-color-primaryactive)",
  bgSecondary: "var(--partnerhome-surface-color-base)",
  bgSecondaryHover: "var(--partnerhome-bg-color-button-secondary-hover)",
  bgSecondaryActive: "var(--partnerhome-bg-color-secondaryactive)",
  bgDestructive: "var(--partnerhome-bg-color-sale)",
  bgDestructiveHover: "var(--partnerhome-bg-color-sale-hover, #c0392b)",
  bgDisabled: "var(--partnerhome-bg-color-global-body)",

  // Text
  textInverse: "var(--partnerhome-text-color-inverse)",
  textPrimary: "var(--partnerhome-text-color-primary)",
  textPrimaryHover: "var(--partnerhome-text-color-primary-hover)",
  textDisabled: "#93939A",

  // Border
  borderPrimary: "var(--partnerhome-border-color-primary)",
  borderBase: "var(--partnerhome-border-color-base)",
  strokeSmall: "var(--partnerhome-stroke-weights-small)",

  // Radius / Spacing / Typography
  radiusButton: "var(--partnerhome-radius-button)",
  spacing1000: "var(--partnerhome-spacing-1000)",
  spacing2000: "var(--partnerhome-spacing-2000)",
  fontFamily: "'Lato', 'Inter', sans-serif",
  fontSize1000: "var(--partnerhome-font-size-1000)",
  fontWeightNormal: "var(--partnerhome-font-weight-normal)",
  fontWeightBold: "var(--partnerhome-font-weight-bold)",
  lineHeight: "var(--partnerhome-line-height-base)",
} as const;

/* ------------------------------------------------------------------ */
/*  Per-variant base styles (idle state)                              */
/* ------------------------------------------------------------------ */

const getBaseStyle = (
  variant: ButtonVariant,
  size: ButtonSize,
  disabled: boolean
): React.CSSProperties => {
  const isCondensed = size === "condensed";
  const height = isCondensed ? 32 : 48;

  const shared: React.CSSProperties = {
    fontFamily: T.fontFamily,
    fontSize: T.fontSize1000,
    fontWeight: T.fontWeightNormal,
    lineHeight: T.lineHeight,
    borderRadius: T.radiusButton,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background-color 250ms ease, color 200ms ease, transform 100ms ease",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as const,
    opacity: disabled ? 0.5 : 1,
    boxSizing: "border-box" as const,
  };

  switch (variant) {
    case "primary":
      return {
        ...shared,
        height,
        padding: `0 ${T.spacing2000}`,
        background: disabled ? T.bgDisabled : T.bgPrimary,
        color: disabled ? T.textDisabled : T.textInverse,
        border: disabled ? `1px solid ${T.borderBase}` : "none",
      };

    case "secondary":
      return {
        ...shared,
        height,
        padding: `0 ${T.spacing2000}`,
        background: T.bgSecondary,
        color: T.textPrimary,
        border: `${T.strokeSmall} solid ${T.borderPrimary}`,
      };

    case "destructive":
      return {
        ...shared,
        height,
        padding: `0 ${T.spacing2000}`,
        background: T.bgDestructive,
        color: T.textInverse,
        border: "none",
      };

    case "text":
      return {
        ...shared,
        height: "auto",
        padding: "0",
        background: "transparent",
        color: T.textPrimary,
        border: "none",
        textDecoration: "underline",
        textAlign: "left" as const,
        gap: T.spacing1000,
      };

    case "icon-primary":
      return {
        ...shared,
        height,
        width: height,
        padding: 0,
        background: disabled ? T.bgDisabled : T.bgPrimary,
        color: disabled ? T.textDisabled : T.textInverse,
        border: disabled ? `1px solid ${T.borderBase}` : "none",
      };

    case "icon-secondary":
      return {
        ...shared,
        height,
        width: height,
        padding: 0,
        background: T.bgSecondary,
        color: T.textPrimary,
        border: `${T.strokeSmall} solid ${T.borderPrimary}`,
      };

    case "ghost":
      return {
        ...shared,
        height,
        width: height,
        padding: 0,
        background: "transparent",
        color: T.textPrimary,
        border: "none",
        transition: "color 200ms ease",
      };

    default:
      return shared;
  }
};

/* ------------------------------------------------------------------ */
/*  Hover / active colour helpers                                     */
/* ------------------------------------------------------------------ */

interface StateColors {
  hoverBg?: string;
  hoverColor?: string;
  activeBg?: string;
  idleBg?: string;
  idleColor?: string;
}

const getStateColors = (variant: ButtonVariant): StateColors => {
  switch (variant) {
    case "primary":
    case "icon-primary":
      return {
        hoverBg: T.bgPrimaryHover,
        activeBg: T.bgPrimaryActive,
        idleBg: T.bgPrimary,
      };
    case "secondary":
    case "icon-secondary":
      return {
        hoverBg: T.bgSecondaryHover,
        activeBg: T.bgSecondaryActive,
        idleBg: T.bgSecondary,
      };
    case "destructive":
      return {
        hoverBg: T.bgDestructiveHover,
        activeBg: T.bgDestructive,
        idleBg: T.bgDestructive,
      };
    case "text":
      return {
        hoverColor: T.textPrimaryHover,
        idleColor: T.textPrimary,
      };
    case "ghost":
      return {
        hoverColor: T.textPrimaryHover,
        idleColor: T.textPrimary,
      };
    default:
      return {};
  }
};

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size = "standard", children, disabled = false, style, className, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, ...rest }, ref) => {
    const innerRef = useRef<HTMLButtonElement>(null);
    const buttonRef = (ref as React.RefObject<HTMLButtonElement>) || innerRef;
    const colors = getStateColors(variant);

    const isColorOnly = variant === "text" || variant === "ghost";

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        if (isColorOnly) {
          // For text/ghost: change color on self + all child svgs and spans
          e.currentTarget.style.color = colors.hoverColor || "";
          e.currentTarget.querySelectorAll("svg, span").forEach((el) => {
            (el as HTMLElement).style.color = colors.hoverColor || "";
          });
        } else {
          e.currentTarget.style.background = colors.hoverBg || "";
        }
        onMouseEnter?.(e);
      },
      [disabled, isColorOnly, colors, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        if (isColorOnly) {
          e.currentTarget.style.color = colors.idleColor || "";
          e.currentTarget.querySelectorAll("svg, span").forEach((el) => {
            (el as HTMLElement).style.color = colors.idleColor || "";
          });
        } else {
          e.currentTarget.style.background = colors.idleBg || "";
        }
        // Reset active-state transform
        e.currentTarget.style.transform = "";
        onMouseLeave?.(e);
      },
      [disabled, isColorOnly, colors, onMouseLeave]
    );

    const handleMouseDown = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        if (!isColorOnly) {
          e.currentTarget.style.background = colors.activeBg || "";
          e.currentTarget.style.transform = "scale(0.95)";
        }
        onMouseDown?.(e);
      },
      [disabled, isColorOnly, colors, onMouseDown]
    );

    const handleMouseUp = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        if (!isColorOnly) {
          e.currentTarget.style.background = colors.hoverBg || "";
          e.currentTarget.style.transform = "";
        }
        onMouseUp?.(e);
      },
      [disabled, isColorOnly, colors, onMouseUp]
    );

    const baseStyle = getBaseStyle(variant, size, !!disabled);

    return (
      <button
        ref={buttonRef}
        disabled={disabled}
        className={className}
        style={{ ...baseStyle, ...style }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
