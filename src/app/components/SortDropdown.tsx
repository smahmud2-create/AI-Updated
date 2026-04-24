import React, { useState, useRef } from "react";
import { Button } from "./Button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuDivider } from "./DropdownMenu";
import svgPaths from "../../imports/svg-tjh7k56hkx";
import ascendIcon from "figma:asset/ed3419fa4e0c5f824c7b9b1e849490f3ec8ea58b.png";
import descendIcon from "figma:asset/fa3dd18da310dae1e08d11d5ad231900b4b6d83f.png";

interface SortOption {
  id: string;
  label: string;
  disabled?: boolean;
}

interface SortDropdownProps {
  options: SortOption[];
  selectedOption?: string;
  sortDirection?: 'asc' | 'desc';
  onApply?: (optionId: string, direction: 'asc' | 'desc') => void;
}

export function SortDropdown({
  options,
  selectedOption,
  sortDirection = 'asc',
  onApply,
}: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelectedOption, setInternalSelectedOption] = useState<string>(selectedOption || options[0]?.id || '');
  const [internalDirection, setInternalDirection] = useState<'asc' | 'desc'>(sortDirection);
  const [hoveredDirection, setHoveredDirection] = useState<'asc' | 'desc' | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOptionClick = (optionId: string, disabled?: boolean) => {
    if (disabled) return;
    setInternalSelectedOption(optionId);
    onApply?.(optionId, internalDirection);
    setIsOpen(false);
  };

  const handleDirectionClick = (direction: 'asc' | 'desc') => {
    setInternalDirection(direction);
    onApply?.(internalSelectedOption, direction);
    setIsOpen(false);
  };

  const currentOption = internalSelectedOption || selectedOption || options[0]?.id;
  const currentDirection = internalDirection || sortDirection;

  return (
    <div className="relative inline-block">
      {/* Sort Button */}
      <Button
        ref={buttonRef}
        variant="secondary"
        onClick={() => setIsOpen(!isOpen)}
        style={{ gap: "4px", padding: "0 var(--partnerhome-spacing-1500)" }}
      >
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none">
          <g>
            <path d={svgPaths.p24da3900} fill="var(--partnerhome-text-color-primary)" />
            <path d={svgPaths.p5450380} fill="var(--partnerhome-text-color-primary)" />
            <path d={svgPaths.p24da3900} stroke="var(--partnerhome-text-color-primary)" strokeWidth="0.5" />
            <path d={svgPaths.p5450380} stroke="var(--partnerhome-text-color-primary)" strokeWidth="0.5" />
          </g>
        </svg>
        <span style={{ color: "var(--partnerhome-text-color-primary)" }}>Sort</span>
      </Button>

      {/* Dropdown Menu — powered by DropdownMenu primitive */}
      <DropdownMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        triggerRef={buttonRef}
        width={256}
      >
        {/* Radio Button List */}
        {options.map((option) => {
          const isSelected = currentOption === option.id;
          return (
            <DropdownMenuItem
              key={option.id}
              onClick={() => handleOptionClick(option.id, option.disabled)}
              disabled={option.disabled}
            >
              {/* Radio Control */}
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    width: "20px",
                    height: "20px",
                    background: "var(--partnerhome-bg-color-base)",
                    border: isSelected
                      ? "var(--partnerhome-stroke-weights-medium) solid var(--partnerhome-border-color-primary)"
                      : "var(--partnerhome-stroke-weights-medium) solid var(--partnerhome-border-color-tertiaryidle)",
                    borderRadius: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {isSelected && (
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        background: "var(--partnerhome-bg-color-primary)",
                        borderRadius: "100px",
                      }}
                    />
                  )}
                </div>
              </div>
              {/* Label */}
              <span
                style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontWeight: "var(--partnerhome-font-weight-normal)",
                  fontSize: "var(--partnerhome-font-size-1000)",
                  lineHeight: "20px",
                  color: "var(--partnerhome-text-color-base)",
                }}
              >
                {option.label}
              </span>
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuDivider />

        {/* Sort Direction Options */}
        {/* Ascending */}
        <div
          onClick={() => handleDirectionClick('asc')}
          onMouseEnter={() => setHoveredDirection('asc')}
          onMouseLeave={() => setHoveredDirection(null)}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "var(--partnerhome-spacing-2000)",
            gap: "var(--partnerhome-spacing-1000)",
            width: "100%",
            height: "56px",
            cursor: "pointer",
            boxSizing: "border-box",
            border: currentDirection === 'asc'
              ? "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-primary)"
              : "var(--partnerhome-stroke-weights-small) solid transparent",
            borderRadius: "var(--partnerhome-radius-large)",
            backgroundColor: hoveredDirection === 'asc' && currentDirection !== 'asc'
              ? "var(--partnerhome-bg-color-tertiaryhover)"
              : "transparent",
            transition: "background-color 150ms ease, border-color 150ms ease",
          }}
        >
          <img src={ascendIcon} alt="Ascending" style={{ width: "24px", height: "24px" }} />
          <span
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              fontSize: "var(--partnerhome-font-size-1000)",
              lineHeight: "20px",
              color: "var(--partnerhome-text-color-base)",
            }}
          >
            Ascending
          </span>
        </div>

        {/* Descending */}
        <div
          onClick={() => handleDirectionClick('desc')}
          onMouseEnter={() => setHoveredDirection('desc')}
          onMouseLeave={() => setHoveredDirection(null)}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "var(--partnerhome-spacing-2000)",
            gap: "var(--partnerhome-spacing-1000)",
            width: "100%",
            height: "56px",
            cursor: "pointer",
            boxSizing: "border-box",
            border: currentDirection === 'desc'
              ? "var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-primary)"
              : "var(--partnerhome-stroke-weights-small) solid transparent",
            borderRadius: "var(--partnerhome-radius-large)",
            backgroundColor: hoveredDirection === 'desc' && currentDirection !== 'desc'
              ? "var(--partnerhome-bg-color-tertiaryhover)"
              : "transparent",
            transition: "background-color 150ms ease, border-color 150ms ease",
          }}
        >
          <img src={descendIcon} alt="Descending" style={{ width: "24px", height: "24px" }} />
          <span
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              fontSize: "var(--partnerhome-font-size-1000)",
              lineHeight: "20px",
              color: "var(--partnerhome-text-color-base)",
            }}
          >
            Descending
          </span>
        </div>
      </DropdownMenu>
    </div>
  );
}
