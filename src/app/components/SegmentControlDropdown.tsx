import React, { useState, useRef, useEffect } from "react";
import { Button } from "./Button";
import ChevronDownIcon from "../../imports/ChevronDown";
import { RadioButton } from "./RadioButton";
import { DropdownMenu, DropdownMenuItem } from "./DropdownMenu";

interface SegmentOption {
  id: string;
  label: string;
  disabled?: boolean;
}

interface SegmentControlDropdownProps {
  options: SegmentOption[];
  selectedOption?: string;
  label?: string;
  onApply?: (optionId: string) => void;
  onCancel?: () => void;
  triggerStyle?: 'button' | 'text';
}

export function SegmentControlDropdown({
  options,
  selectedOption,
  label = 'Segment',
  onApply,
  onCancel,
  triggerStyle = 'button',
}: SegmentControlDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelectedOption, setInternalSelectedOption] = useState<string>(selectedOption || options[0]?.id || '');
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Manage trigger color states when open/closed
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      buttonRef.current.style.color = "var(--partnerhome-text-color-primaryactive)";
      const chevronDiv = buttonRef.current.querySelector('div[data-chevron]') as HTMLElement;
      if (chevronDiv) {
        chevronDiv.style.setProperty('--fill-0', 'var(--partnerhome-text-color-primaryactive)');
        chevronDiv.style.setProperty('--stroke-0', 'var(--partnerhome-text-color-primaryactive)');
      }
    }
    if (!isOpen && buttonRef.current) {
      buttonRef.current.style.color = "var(--partnerhome-text-color-primary)";
      const chevronDiv = buttonRef.current.querySelector('div[data-chevron]') as HTMLElement;
      if (chevronDiv) {
        chevronDiv.style.setProperty('--fill-0', 'var(--partnerhome-text-color-primary)');
        chevronDiv.style.setProperty('--stroke-0', 'var(--partnerhome-text-color-primary)');
      }
    }
  }, [isOpen]);

  const handleOptionChange = (value: string) => {
    setInternalSelectedOption(value);
  };

  const handleApply = () => {
    onApply?.(internalSelectedOption);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setInternalSelectedOption(selectedOption || options[0]?.id || '');
    onCancel?.();
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const currentOption = internalSelectedOption || selectedOption || options[0]?.id;

  return (
    <div className="relative inline-block">
      {/* Segment Control Button */}
      {triggerStyle === 'text' ? (
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="h-[48px] flex items-center gap-[4px] px-0 bg-transparent border-none font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-font-size-1000)] transition-colors cursor-pointer"
          style={{ 
            fontFamily: "'Lato', 'Inter', sans-serif", 
            whiteSpace: "nowrap",
            color: isOpen ? "var(--partnerhome-text-color-primaryactive)" : "var(--partnerhome-text-color-primary)"
          }}
          onMouseEnter={(e) => {
            if (!isOpen) {
              e.currentTarget.style.color = "var(--partnerhome-text-color-primaryhover)";
              const chevronDiv = e.currentTarget.querySelector('div[data-chevron]') as HTMLElement;
              if (chevronDiv) {
                chevronDiv.style.setProperty('--fill-0', 'var(--partnerhome-text-color-primaryhover)');
                chevronDiv.style.setProperty('--stroke-0', 'var(--partnerhome-text-color-primaryhover)');
              }
            }
          }}
          onMouseLeave={(e) => {
            if (!isOpen) {
              e.currentTarget.style.color = "var(--partnerhome-text-color-primary)";
              const chevronDiv = e.currentTarget.querySelector('div[data-chevron]') as HTMLElement;
              if (chevronDiv) {
                chevronDiv.style.setProperty('--fill-0', 'var(--partnerhome-text-color-primary)');
                chevronDiv.style.setProperty('--stroke-0', 'var(--partnerhome-text-color-primary)');
              }
            }
          }}
        >
          <span className="underline" style={{ color: "inherit" }}>Filter 2</span>
          <div 
            data-chevron
            style={{ 
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", 
              transition: "transform 200ms ease", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              width: "24px",
              height: "24px",
              ['--fill-0' as any]: isOpen ? 'var(--partnerhome-text-color-primaryactive)' : 'var(--partnerhome-text-color-primary)',
              ['--stroke-0' as any]: isOpen ? 'var(--partnerhome-text-color-primaryactive)' : 'var(--partnerhome-text-color-primary)'
            } as React.CSSProperties}
          >
            <ChevronDownIcon />
          </div>
        </button>
      ) : (
        <Button
          ref={buttonRef}
          variant="secondary"
          onClick={() => setIsOpen(!isOpen)}
          style={{ gap: "4px", padding: "0 var(--partnerhome-spacing-2000)" }}
        >
          <span style={{ color: "var(--partnerhome-text-color-primary)" }}>{label}</span>
        </Button>
      )}

      {/* Dropdown Menu — powered by DropdownMenu primitive */}
      <DropdownMenu
        isOpen={isOpen}
        onClose={handleClose}
        triggerRef={buttonRef}
        width={300}
        footer={
          <>
            <Button
              variant="secondary"
              onClick={handleCancel}
              style={{ flex: "1 1 0", minWidth: 0, padding: "0 var(--partnerhome-spacing-1500)" }}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleApply}
              style={{ flex: "1 1 0", minWidth: 0, padding: "0 var(--partnerhome-spacing-1500)" }}
            >
              Apply
            </Button>
          </>
        }
      >
        {options.map((option) => {
          const isSelected = currentOption === option.id;
          return (
            <DropdownMenuItem
              key={option.id}
              selected={isSelected}
              disabled={option.disabled}
              onClick={() => handleOptionChange(option.id)}
            >
              <RadioButton
                label={option.label}
                name="segment-dropdown"
                value={option.id}
                checked={isSelected}
                disabled={option.disabled}
                onChange={handleOptionChange}
              />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenu>
    </div>
  );
}
