import React, { useState, useRef, useEffect } from "react";
import ChevronDownIcon from "../../imports/ChevronDown";
import { Checkbox } from "./Checkbox";
import { Button } from "./Button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuEmptyState } from "./DropdownMenu";

interface FilterOption {
  id: string;
  label: string;
  disabled?: boolean;
  count?: number;
}

interface QuickFilterDropdownProps {
  options: FilterOption[];
  selectedOption?: string;
  selectedOptions?: string[];
  onApply?: (selectedId: string) => void;
  onCancel?: () => void;
  triggerStyle?: 'button' | 'text';
}

export function QuickFilterDropdown({
  options,
  selectedOption,
  selectedOptions = [],
  onApply,
  onCancel,
  triggerStyle = 'button',
}: QuickFilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelectedOptions, setInternalSelectedOptions] = useState<Set<string>>(new Set(selectedOptions));
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleCheckboxChange = (optionId: string, checked: boolean, disabled?: boolean) => {
    if (disabled) return;
    const newSelected = new Set(internalSelectedOptions);
    if (checked) {
      newSelected.add(optionId);
    } else {
      newSelected.delete(optionId);
    }
    setInternalSelectedOptions(newSelected);
  };

  const handleApply = () => {
    onApply?.(Array.from(internalSelectedOptions)[0]);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setInternalSelectedOptions(new Set(selectedOptions));
    setSearchQuery("");
    onCancel?.();
    setIsOpen(false);
  };

  const handleReset = () => {
    setInternalSelectedOptions(new Set());
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Filter options based on search query
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative inline-block">
      {/* Quick Filter Button */}
      {triggerStyle === 'text' ? (
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="h-[48px] flex items-center gap-[var(--partnerhome-spacing-500)] px-0 bg-transparent border-none font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-font-size-1000)] transition-colors cursor-pointer"
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
          <span className="underline" style={{ color: "inherit" }}>Filter 1</span>
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
            }}
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
          <span style={{ color: "var(--partnerhome-text-color-primary)" }}>Quick Filter</span>
        </Button>
      )}

      {/* Dropdown Menu — powered by DropdownMenu primitive */}
      <DropdownMenu
        isOpen={isOpen}
        onClose={handleClose}
        triggerRef={buttonRef}
        width={300}
        searchable
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        header={
          internalSelectedOptions.size > 0 ? (
            <Button variant="text" onClick={handleReset}>
              Reset
            </Button>
          ) : undefined
        }
        footer={
          <>
            <Button
              variant="secondary"
              onClick={handleCancel}
              style={{ flex: "1 1 0", minWidth: 0 }}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleApply}
              style={{ flex: "1 1 0", minWidth: 0 }}
            >
              Apply Filters
            </Button>
          </>
        }
      >
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => {
            const isChecked = internalSelectedOptions.has(option.id);
            return (
              <DropdownMenuItem
                key={option.id}
                selected={isChecked}
                disabled={option.disabled}
                onClick={() => handleCheckboxChange(option.id, !isChecked, option.disabled)}
              >
                {/* Checkbox */}
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Checkbox
                    checked={isChecked}
                    onChange={(checked) => handleCheckboxChange(option.id, checked, option.disabled)}
                  />
                </div>
                {/* Label */}
                <span
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontStyle: "normal",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    lineHeight: "20px",
                    display: "flex",
                    alignItems: "center",
                    color: "var(--partnerhome-text-color-base)",
                  }}
                >
                  {option.label}
                </span>
              </DropdownMenuItem>
            );
          })
        ) : (
          <DropdownMenuEmptyState />
        )}
      </DropdownMenu>
    </div>
  );
}
