import React, { useState, useRef, useEffect } from 'react';
import { Checkbox } from './Checkbox';

interface DropdownOption {
  id: string;
  label: string;
  subtitle?: string;
  image?: string;
  disabled?: boolean;
}

interface DropdownWithCheckboxProps {
  label: string;
  options: DropdownOption[];
  selectedValues?: string[];
  onChange?: (values: string[]) => void;
  placeholder?: string;
}

export function DropdownWithCheckbox({
  label,
  options,
  selectedValues = [],
  onChange,
  placeholder = 'Select options',
}: DropdownWithCheckboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelectedValues, setInternalSelectedValues] = useState<string[]>(selectedValues);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggleOption = (optionId: string, disabled?: boolean) => {
    if (disabled) return;

    const newSelected = internalSelectedValues.includes(optionId)
      ? internalSelectedValues.filter(id => id !== optionId)
      : [...internalSelectedValues, optionId];

    setInternalSelectedValues(newSelected);
    onChange?.(newSelected);
  };

  const getSelectedLabel = () => {
    if (internalSelectedValues.length === 0) return placeholder;
    if (internalSelectedValues.length === 1) {
      const option = options.find(opt => opt.id === internalSelectedValues[0]);
      return option?.label || '';
    }
    return `${internalSelectedValues.length} selected`;
  };

  const hasImage = options.some(opt => opt.image);
  const hasSubtitle = options.some(opt => opt.subtitle);

  return (
    <div style={{ width: '100%', position: 'relative' }} ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'relative',
          width: '100%',
          height: '48px',
          cursor: 'pointer',
        }}
      >
        {/* Background with Border */}
        <div
          style={{
            position: 'absolute',
            height: '48px',
            left: 0,
            right: 0,
            top: 0,
            background: 'var(--partnerhome-bg-color-base)',
            border: isOpen
              ? '2px solid var(--partnerhome-border-color-tertiaryidle)'
              : '1.5px solid var(--partnerhome-border-color-tertiaryidle)',
            borderRadius: 'var(--partnerhome-radius-large)',
            boxSizing: 'border-box',
            transition: 'border-width 150ms ease',
            zIndex: 0,
          }}
        />

        {/* Floating Label */}
        <label
          style={{
            position: 'absolute',
            left: '16px',
            top: '-8px',
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: 'var(--partnerhome-font-size-500)',
            fontWeight: 'var(--partnerhome-font-weight-normal)',
            lineHeight: '16px',
            color: 'var(--partnerhome-text-color-basesubtle)',
            background: 'var(--partnerhome-bg-color-base)',
            padding: '0 4px',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          {label}
        </label>

        {/* Selected Value Display */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '48px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0 0 0 16px',
            zIndex: 1,
          }}
        >
          <div
            style={{
              flex: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: 'var(--partnerhome-font-size-1000)',
              fontWeight: 'var(--partnerhome-font-weight-normal)',
              color: 'var(--partnerhome-text-color-base)',
              lineHeight: '20px',
              paddingRight: '8px',
            }}
          >
            {getSelectedLabel()}
          </div>

          {/* Chevron Icon */}
          <div
            style={{
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--partnerhome-text-color-base)',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 150ms ease',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            width: '320px',
            background: 'var(--partnerhome-bg-color-base)',
            border: '1px solid var(--partnerhome-border-color-base)',
            borderRadius: 'var(--partnerhome-radius-large)',
            boxShadow: 'var(--partnerhome-shadow-30)',
            padding: '8px',
            zIndex: 1000,
            maxHeight: '568px',
            overflowY: 'auto',
          }}
        >
          {options.map((option) => {
            const isSelected = internalSelectedValues.includes(option.id);
            const isHovered = hoveredOption === option.id;

            // State-based background colors
            let backgroundColor = 'var(--partnerhome-bg-color-tertiaryidle)'; // Default idle (white)
            if (isSelected) {
              if (isHovered) {
                backgroundColor = 'var(--partnerhome-bg-color-secondaryhover)'; // Selected hover (light purple)
              } else {
                backgroundColor = 'var(--partnerhome-bg-color-secondaryidle)'; // Selected idle
              }
            } else {
              if (isHovered) {
                backgroundColor = 'var(--partnerhome-bg-color-tertiaryhover)'; // Default hover (light gray)
              }
            }

            return (
              <div
                key={option.id}
                onClick={() => handleToggleOption(option.id, option.disabled)}
                onMouseEnter={() => !option.disabled && setHoveredOption(option.id)}
                onMouseLeave={() => setHoveredOption(null)}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '4px',
                  gap: '8px',
                  height: hasImage ? '72px' : '44px',
                  background: backgroundColor,
                  borderRadius: 'var(--partnerhome-radius-large)',
                  cursor: option.disabled ? 'not-allowed' : 'pointer',
                  opacity: option.disabled ? 0.4 : 1,
                  transition: 'background-color 150ms ease',
                  marginBottom: '8px',
                }}
              >
                {/* Checkbox */}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Checkbox
                    checked={isSelected}
                    onChange={() => handleToggleOption(option.id, option.disabled)}
                    disabled={option.disabled}
                  />
                </div>

                {/* Image (if present) */}
                {option.image && (
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      flexShrink: 0,
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={option.image}
                      alt={option.label}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                )}

                {/* Text Container */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '4px',
                    flex: 1,
                    overflow: 'hidden',
                  }}
                >
                  {/* Main Label */}
                  <div
                    style={{
                      fontFamily: "'Lato', 'Inter', sans-serif",
                      fontSize: 'var(--partnerhome-font-size-1000)',
                      fontWeight: 'var(--partnerhome-font-weight-normal)',
                      lineHeight: '20px',
                      color: 'var(--partnerhome-text-color-base)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      width: '100%',
                    }}
                  >
                    {option.label}
                  </div>

                  {/* Subtitle (if present) */}
                  {option.subtitle && (
                    <div
                      style={{
                        fontFamily: "'Lato', 'Inter', sans-serif",
                        fontSize: 'var(--partnerhome-font-size-500)',
                        fontWeight: 'var(--partnerhome-font-weight-normal)',
                        lineHeight: '16px',
                        color: 'var(--partnerhome-text-color-base)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        width: '100%',
                      }}
                    >
                      {option.subtitle}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}