import React, { ReactNode } from "react";
import { Button } from "./Button";
import { XIcon } from "./icons";

export type ModalSize = "small" | "medium" | "large";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  size?: ModalSize;
  children: ReactNode;
}

const MODAL_SIZES = {
  small: { width: "398px", maxHeight: "339px" },
  medium: { width: "598px", maxHeight: "339px" },
  large: { width: "798px", maxHeight: "400px" },
};

export function Modal({
  isOpen,
  onClose,
  title,
  size = "large",
  children,
}: ModalProps) {
  if (!isOpen) return null;

  const dimensions = MODAL_SIZES[size];

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--partnerhome-surface-color-inverse)",
          opacity: 0.5,
          zIndex: 999,
        }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: dimensions.width,
          maxHeight: dimensions.maxHeight,
          background: "var(--partnerhome-surface-color-base)",
          border: "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-secondarysubtle)",
          borderRadius: "var(--partnerhome-radius-large)",
          display: "flex",
          flexDirection: "column",
          zIndex: 1000,
          boxShadow: "var(--partnerhome-shadow-30)",
        }}
      >
        {/* Title + Close Button */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: "0 0 0 var(--partnerhome-spacing-3000)",
            height: "80px",
            flexShrink: 0,
          }}
        >
          {/* Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "var(--partnerhome-spacing-3000) var(--partnerhome-spacing-3000) var(--partnerhome-spacing-3000) 0",
              flex: 1,
              height: "80px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-3000)",
                fontWeight: 900,
                lineHeight: "32px",
                color: "var(--partnerhome-text-color-base)",
                margin: 0,
                flex: 1,
              }}
            >
              {title}
            </h2>
          </div>

          {/* Close Button */}
          <Button
            variant="ghost"
            onClick={onClose}
            aria-label="Close modal"
            style={{
              margin: "16px 16px 0 0",
              flexShrink: 0,
              color: "var(--partnerhome-text-color-secondaryidle)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--partnerhome-text-color-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--partnerhome-text-color-secondaryidle)";
            }}
          >
            <XIcon size={24} color="currentColor" />
          </Button>
        </div>

        {/* Content Area */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "0 var(--partnerhome-spacing-3000) var(--partnerhome-spacing-3000) var(--partnerhome-spacing-3000)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}

// Convenience components for each size
export function ModalLarge(props: Omit<ModalProps, "size">) {
  return <Modal {...props} size="large" />;
}

export function ModalMedium(props: Omit<ModalProps, "size">) {
  return <Modal {...props} size="medium" />;
}

export function ModalSmall(props: Omit<ModalProps, "size">) {
  return <Modal {...props} size="small" />;
}