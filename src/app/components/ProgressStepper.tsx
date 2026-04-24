import React from "react";

export interface ProgressStepperProps {
  /** Orientation of the stepper */
  orientation?: "horizontal" | "vertical";
  /** Number of steps (3-6) */
  steps: Array<{
    /** Step number (1-6) */
    number: number;
    /** Step label */
    label: string;
  }>;
  /** Current active step (1-based index) */
  currentStep: number;
}

export function ProgressStepper({
  orientation = "horizontal",
  steps,
  currentStep,
}: ProgressStepperProps) {
  const [hoveredStep, setHoveredStep] = React.useState<number | null>(null);

  // Validate step count
  if (steps.length < 3 || steps.length > 6) {
    console.warn("Progress Stepper should have between 3 and 6 steps");
  }

  const getNodeStyle = (stepNumber: number, isHovered: boolean) => {
    const isCompleted = stepNumber < currentStep;
    const isActive = stepNumber === currentStep;
    const isFuture = stepNumber > currentStep;

    // Base node styles
    const baseStyle: React.CSSProperties = {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Lato', 'Inter', sans-serif",
      fontSize: "var(--partnerhome-font-size-500)",
      fontWeight: "var(--partnerhome-font-weight-normal)",
      lineHeight: "var(--partnerhome-line-height-base)",
      cursor: isCompleted || isActive ? "pointer" : "default",
      transition: "all 250ms ease",
      position: "relative",
      flexShrink: 0,
    };

    // Completed node (filled, like primary button)
    if (isCompleted) {
      if (isHovered) {
        return {
          ...baseStyle,
          background: "var(--partnerhome-bg-color-button-primary-hover)",
          color: "var(--partnerhome-text-color-inverse)",
          border: "none",
          transform: "scale(1.05)",
        };
      }
      return {
        ...baseStyle,
        background: "var(--partnerhome-bg-color-button-primary)",
        color: "var(--partnerhome-text-color-inverse)",
        border: "none",
      };
    }

    // Active/Live node (has stroke, similar to secondary button active state)
    if (isActive) {
      if (isHovered) {
        return {
          ...baseStyle,
          background: "var(--partnerhome-surface-color-base)",
          color: "var(--partnerhome-text-color-primary)",
          border: `var(--partnerhome-stroke-weights-medium) solid var(--partnerhome-border-color-primary)`,
          boxShadow: "0 0 0 4px rgba(102, 37, 106, 0.1)",
        };
      }
      return {
        ...baseStyle,
        background: "var(--partnerhome-surface-color-base)",
        color: "var(--partnerhome-text-color-primary)",
        border: `var(--partnerhome-stroke-weights-medium) solid var(--partnerhome-border-color-primary)`,
      };
    }

    // Future/Unfilled node (disabled state, neutral colors)
    return {
      ...baseStyle,
      background: "var(--partnerhome-bg-color-global-body)",
      color: "#93939A",
      border: "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
      cursor: "default",
    };
  };

  const getLineStyle = (fromStep: number): React.CSSProperties => {
    const isCompleted = fromStep < currentStep;

    const baseLineStyle: React.CSSProperties = {
      transition: "all 250ms ease",
    };

    if (orientation === "horizontal") {
      return {
        ...baseLineStyle,
        flex: 1,
        height: "2px",
        background: isCompleted
          ? "var(--partnerhome-bg-color-button-primary)"
          : "var(--partnerhome-border-color-base)",
        marginTop: "0",
        marginBottom: "0",
        marginLeft: "0",
        marginRight: "0",
      };
    } else {
      return {
        ...baseLineStyle,
        width: "2px",
        height: "40px",
        background: isCompleted
          ? "var(--partnerhome-bg-color-button-primary)"
          : "var(--partnerhome-border-color-base)",
        marginTop: "0",
        marginBottom: "0",
        marginLeft: "11px", // Half of node width (24px / 2) - half of line width (2px / 2) = 12px - 1px = 11px
        marginRight: "0",
      };
    }
  };

  const renderNode = (step: { number: number; label: string }) => {
    const isHovered = hoveredStep === step.number;
    const nodeStyle = getNodeStyle(step.number, isHovered);
    const isCompleted = step.number < currentStep;
    const isActive = step.number === currentStep;

    return (
      <div
        key={step.number}
        style={{
          display: "flex",
          flexDirection: orientation === "horizontal" ? "column" : "row",
          alignItems: orientation === "horizontal" ? "center" : "flex-start",
          gap: orientation === "horizontal" ? "var(--partnerhome-spacing-1000)" : "var(--partnerhome-spacing-1500)",
        }}
      >
        <div
          style={nodeStyle}
          onMouseEnter={() => {
            if (isCompleted || isActive) {
              setHoveredStep(step.number);
            }
          }}
          onMouseLeave={() => setHoveredStep(null)}
        >
          {step.number}
        </div>
        <span
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            color: isCompleted || isActive
              ? "var(--partnerhome-text-color-base)"
              : "#93939A",
            lineHeight: "var(--partnerhome-line-height-base)",
            textAlign: orientation === "horizontal" ? "center" : "left",
            maxWidth: orientation === "horizontal" ? "80px" : "none",
          }}
        >
          {step.label}
        </span>
      </div>
    );
  };

  if (orientation === "horizontal") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "0px",
          width: "100%",
        }}
      >
        {steps.map((step, index) => {
          const isCompleted = step.number < currentStep;
          const isActive = step.number === currentStep;
          const isHovered = hoveredStep === step.number;

          return (
            <div
              key={step.number}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: index === 0 ? "flex-start" : index === steps.length - 1 ? "flex-end" : "center",
                padding: "0px",
                gap: "var(--partnerhome-spacing-1000)",
                height: "56px",
                flex: "none",
                alignSelf: "stretch",
                flexGrow: 1,
              }}
            >
              {/* Contents wrapper - relative positioned */}
              <div
                style={{
                  width: "100%",
                  height: "56px",
                  position: "relative",
                  flex: "none",
                  alignSelf: "stretch",
                  flexGrow: 1,
                }}
              >
                {/* Left Track - from left edge to center */}
                {index > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      height: "0px",
                      left: "0%",
                      right: "50%",
                      top: "12px",
                      borderTop: `2px solid ${
                        steps[index - 1].number < currentStep
                          ? "var(--partnerhome-border-color-primary)"
                          : "var(--partnerhome-border-color-base)"
                      }`,
                      transition: "border-color 250ms ease",
                    }}
                  />
                )}

                {/* Right Track - from center to right edge */}
                {index < steps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      height: "0px",
                      left: "50%",
                      right: "0%",
                      top: "12px",
                      borderTop: `2px solid ${
                        isCompleted
                          ? "var(--partnerhome-border-color-primary)"
                          : "var(--partnerhome-border-color-base)"
                      }`,
                      transition: "border-color 250ms ease",
                    }}
                  />
                )}

                {/* Node - centered */}
                <div
                  style={{
                    position: "absolute",
                    width: "24px",
                    height: "24px",
                    left: "calc(50% - 12px)",
                    top: "0px",
                  }}
                >
                  <div
                    style={getNodeStyle(step.number, isHovered)}
                    onMouseEnter={() => {
                      if (step.number <= currentStep) {
                        setHoveredStep(step.number);
                      }
                    }}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Text label - centered */}
                <span
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "20px",
                    left: "0",
                    top: "32px",
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    lineHeight: "20px",
                    textAlign: "center",
                    color: isCompleted || isActive
                      ? "var(--partnerhome-text-color-base)"
                      : "#93939A",
                  }}
                >
                  {step.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Vertical orientation
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {steps.map((step, index) => (
        <div key={step.number} style={{ display: "contents" }}>
          {renderNode(step)}
          {index < steps.length - 1 && <div style={getLineStyle(step.number)} />}
        </div>
      ))}
    </div>
  );
}