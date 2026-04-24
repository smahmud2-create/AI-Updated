import React, { useState, useEffect, useRef } from 'react';
import { CheckIcon } from "./icons";
import ChevronDownIcon from "../../imports/ChevronDown";

interface RowsPerPageDropdownProps {
  value: number;
  onChange: (value: number) => void;
}

const options = [10, 25, 50, 100];

export function RowsPerPageDropdown({ value, onChange }: RowsPerPageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option: number) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} style={{ position: "relative" }}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          height: "48px",
          width: "82px",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px",
          background: "var(--partnerhome-bg-color-base)",
          border: "1.5px solid var(--partnerhome-border-color-base)",
          borderRadius: "4px",
          fontFamily: "'Lato', 'Inter', sans-serif",
          fontSize: "var(--partnerhome-font-size-1000)",
          fontWeight: "var(--partnerhome-font-weight-normal)",
          color: "var(--partnerhome-text-color-base)",
          cursor: "pointer",
        }}
      >
        <span>{value}</span>
        <ChevronDownIcon />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 4px)",
            left: 0,
            minWidth: "110px",
            background: "var(--partnerhome-bg-color-base)",
            border: "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)",
            borderRadius: "var(--partnerhome-radius-base)",
            boxShadow: "var(--partnerhome-shadow-30)",
            padding: "var(--partnerhome-spacing-1000)",
            zIndex: 1000,
          }}
        >
          {options.map((option) => {
            const isSelected = option === value;
            return (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                style={{
                  width: "100%",
                  height: "40px",
                  padding: "6px var(--partnerhome-spacing-1000)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: isSelected
                    ? "var(--partnerhome-bg-color-secondaryidle)"
                    : "var(--partnerhome-bg-color-tertiaryidle)",
                  border: "none",
                  borderRadius: "var(--partnerhome-radius-medium)",
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-1000)",
                  fontWeight: "var(--partnerhome-font-weight-normal)",
                  color: "var(--partnerhome-text-color-base)",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 150ms ease",
                }}
                onMouseEnter={(e) => {
                  if (isSelected) {
                    e.currentTarget.style.background = "var(--partnerhome-bg-color-secondaryhover)";
                    e.currentTarget.style.boxShadow = "inset 0 0 0 var(--partnerhome-stroke-weights-small) var(--partnerhome-border-color-secondaryhover)";
                  } else {
                    e.currentTarget.style.background = "var(--partnerhome-bg-color-tertiaryhover)";
                    e.currentTarget.style.boxShadow = "inset 0 0 0 var(--partnerhome-stroke-weights-small) var(--partnerhome-border-color-tertiaryhoversubtle)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (isSelected) {
                    e.currentTarget.style.background = "var(--partnerhome-bg-color-secondaryidle)";
                    e.currentTarget.style.boxShadow = "none";
                  } else {
                    e.currentTarget.style.background = "var(--partnerhome-bg-color-tertiaryidle)";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
                onMouseDown={(e) => {
                  if (isSelected) {
                    e.currentTarget.style.background = "var(--partnerhome-bg-color-secondaryactive)";
                    e.currentTarget.style.boxShadow = "inset 0 0 0 var(--partnerhome-stroke-weights-large) var(--partnerhome-border-color-secondaryactive)";
                  } else {
                    e.currentTarget.style.background = "var(--partnerhome-bg-color-tertiaryactive)";
                    e.currentTarget.style.boxShadow = "inset 0 0 0 var(--partnerhome-stroke-weights-large) var(--partnerhome-border-color-tertiaryactivesubtle)";
                  }
                }}
              >
                {/* Checkmark icon for selected item */}
                <div style={{ width: "24px", height: "24px", flexShrink: 0 }}>
                  {isSelected && (
                    <CheckIcon size={24} color="var(--partnerhome-text-color-base)" />
                  )}
                </div>
                <span>{option}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}