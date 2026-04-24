import React, { useState, useRef, useEffect } from "react";
import { Button } from "./Button";
import { ChevronDown } from "lucide-react";
import Vector from "../../imports/Vector";
import svgPaths from "../../imports/svg-n3y0hzjf12";

interface BulkEditBarProps {
  selectedCount: number;
  totalCount: number;
  onDeselectAll: () => void;
  onSelectAll: () => void;
  onEdit?: () => void;
  onExport?: () => void;
  onMoreActions?: () => void;
}

export function BulkEditBar({
  selectedCount,
  totalCount,
  onDeselectAll,
  onSelectAll,
  onEdit,
  onExport,
  onMoreActions,
}: BulkEditBarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isEditHovered, setIsEditHovered] = useState(false);
  const [isExportHovered, setIsExportHovered] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dropdownOptions = [
    { id: 'add-products', label: 'Add Products', disabled: false },
    { id: 'enroll-services', label: 'Enroll Selected in Services', disabled: true },
    { id: 'create-tickets', label: 'Create Tickets for Selected', disabled: false },
  ];

  return (
    <div
      className="h-[76px] flex items-center justify-between px-[var(--partnerhome-spacing-3000)]"
      style={{
        background: "var(--partnerhome-bg-color-button-primary)",
      }}
    >
      {/* Left side - Selection count and links */}
      <div className="flex items-center gap-[var(--partnerhome-spacing-1000)]">
        {/* Selection Count */}
        <div className="flex items-center gap-[4px]">
          <span
            className="text-[var(--partnerhome-font-size-1000)]"
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              color: "var(--partnerhome-text-color-inverse)",
              lineHeight: "var(--partnerhome-line-height-base)",
            }}
          >
            {selectedCount}
          </span>
          <span
            className="text-[var(--partnerhome-font-size-1000)]"
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              color: "var(--partnerhome-text-color-inverse)",
              lineHeight: "var(--partnerhome-line-height-base)",
            }}
          >
            Selected (of
          </span>
          <span
            className="text-[var(--partnerhome-font-size-1000)]"
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              color: "var(--partnerhome-text-color-inverse)",
              lineHeight: "var(--partnerhome-line-height-base)",
            }}
          >
            {totalCount}
          </span>
          <span
            className="text-[var(--partnerhome-font-size-1000)]"
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              color: "var(--partnerhome-text-color-inverse)",
              lineHeight: "var(--partnerhome-line-height-base)",
            }}
          >
            Objects)
          </span>
        </div>

        {/* Deselect All Link */}
        <Button
          variant="text"
          onClick={onDeselectAll}
          style={{
            color: "#F1E9F1",
            textDecorationSkipInk: "none",
            textUnderlinePosition: "from-font",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          Deselect All
        </Button>

        {/* Select All Link */}
        <Button
          variant="text"
          onClick={onSelectAll}
          style={{
            color: "#F1E9F1",
            textDecorationSkipInk: "none",
            textUnderlinePosition: "from-font",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          Select All
        </Button>
      </div>

      {/* Right side - Action buttons */}
      <div className="flex items-center gap-[14px]" style={{ position: 'relative' }}>
        {/* More Actions Button with Dropdown */}
        <div ref={dropdownRef} style={{ position: 'relative' }}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="h-[48px] flex items-center justify-center gap-[4px] px-[var(--partnerhome-spacing-1500)] cursor-pointer border border-solid transition-all"
            style={{
              background: isHovered ? '#7A417E' : 'transparent',
              borderColor: "var(--partnerhome-text-color-inverse)",
              borderWidth: "var(--partnerhome-stroke-weights-small)",
              borderRadius: "var(--partnerhome-radius-button)",
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              color: "var(--partnerhome-text-color-inverse) !important",
              lineHeight: "var(--partnerhome-line-height-base)",
            }}
          >
            <span style={{ color: "var(--partnerhome-text-color-inverse)" }}>More Actions</span>
            <div style={{ 
              width: "16px", 
              height: "16px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 200ms ease',
            }}>
              <ChevronDown size={16} style={{ color: "var(--partnerhome-text-color-inverse)" }} strokeWidth={1.5} />
            </div>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                width: '320px',
                background: 'var(--partnerhome-bg-color-base)',
                border: '1px solid var(--partnerhome-border-color-base)',
                borderRadius: 'var(--partnerhome-radius-large)',
                boxShadow: 'var(--partnerhome-shadow-30)',
                padding: '8px',
                zIndex: 1000,
              }}
            >
              {/* Dropdown Options */}
              {dropdownOptions.map((option) => {
                const isOptionHovered = hoveredOption === option.id;

                return (
                  <div
                    key={option.id}
                    onClick={() => {
                      if (!option.disabled) {
                        console.log('Selected:', option.label);
                        setIsDropdownOpen(false);
                      }
                    }}
                    onMouseEnter={() => !option.disabled && setHoveredOption(option.id)}
                    onMouseLeave={() => setHoveredOption(null)}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: '12px 8px',
                      gap: '12px',
                      height: '48px',
                      background: isOptionHovered 
                        ? 'var(--partnerhome-bg-color-tertiaryhover)' 
                        : 'var(--partnerhome-bg-color-tertiaryidle)',
                      borderRadius: 'var(--partnerhome-radius-large)',
                      cursor: option.disabled ? 'not-allowed' : 'pointer',
                      opacity: option.disabled ? 0.4 : 1,
                      transition: 'background-color 150ms ease',
                      marginBottom: '4px',
                    }}
                  >
                    {/* Icon placeholder */}
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {option.id === 'add-products' && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path 
                            d="M20 9L11 4L2 9L11 14L20 9Z" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                          <path 
                            d="M2 9V15L11 20L20 15V9" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {(option.id === 'enroll-services' || option.id === 'create-tickets') && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path 
                            d="M7 17L17 7M17 7H7M17 7V17" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>

                    {/* Label */}
                    <div
                      style={{
                        flex: 1,
                        fontFamily: "'Lato', 'Inter', sans-serif",
                        fontSize: 'var(--partnerhome-font-size-1000)',
                        fontWeight: 'var(--partnerhome-font-weight-normal)',
                        lineHeight: '20px',
                        color: 'var(--partnerhome-text-color-base)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {option.label}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Edit Button */}
        <Button
          variant="secondary"
          onClick={onEdit}
          style={{
            background: "var(--partnerhome-surface-color-base)",
            color: "var(--partnerhome-bg-color-button-primary)",
            border: "none",
            padding: "0 var(--partnerhome-spacing-1500)",
          }}
        >
          Edit
        </Button>

        {/* Export Button */}
        <Button
          variant="secondary"
          onClick={onExport}
          style={{
            background: "var(--partnerhome-surface-color-base)",
            color: "var(--partnerhome-bg-color-button-primary)",
            border: "none",
            padding: "0 var(--partnerhome-spacing-1500)",
          }}
        >
          Export
        </Button>
      </div>
    </div>
  );
}