import React, { useState, ReactNode, useRef, useEffect } from 'react';
import ChevronDownIcon from "../../imports/ChevronDown";

interface DropdownOption {
  id: string;
  label: string;
  image?: string;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  selectedValue?: string;
  onChange?: (value: string) => void;
  icon?: ReactNode;
  helperMessage?: string;
  errorMessage?: string;
  validMessage?: string;
  disabled?: boolean;
}

export function Dropdown({
  label,
  options,
  selectedValue,
  onChange,
  icon,
  helperMessage,
  errorMessage,
  validMessage,
  disabled = false,
}: DropdownProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(selectedValue || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const hasValue = internalValue !== '';
  const hasError = !!errorMessage;
  const isValid = !!validMessage && !hasError;
  const isLabelFloating = isFocused || hasValue;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionId: string) => {
    setInternalValue(optionId);
    setIsOpen(false);
    setIsFocused(false);
    if (onChange) {
      onChange(optionId);
    }
  };

  const handleDropdownClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setIsFocused(true);
    }
  };

  const getBorderStyle = () => {
    if (hasError) {
      return '1.5px solid var(--partnerhome-border-color-sale)';
    }
    if (isValid) {
      return '1.5px solid var(--partnerhome-border-color-positive)';
    }
    if (isFocused) {
      return '2px solid var(--partnerhome-border-color-tertiaryidle)';
    }
    return '1.5px solid var(--partnerhome-border-color-tertiaryidle)';
  };

  const getStatusIcon = () => {
    if (hasError) {
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
          <path d="M8 1L15 14H1L8 1Z" stroke="var(--partnerhome-text-color-negative)" strokeWidth="1.5" fill="none"/>
          <path d="M8 6V9" stroke="var(--partnerhome-text-color-negative)" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="8" cy="11.5" r="0.75" fill="var(--partnerhome-text-color-negative)"/>
        </svg>
      );
    }
    if (isValid) {
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
          <circle cx="8" cy="8" r="7" stroke="var(--partnerhome-text-color-positive)" strokeWidth="1.5" fill="none"/>
          <path d="M5 8L7 10L11 6" stroke="var(--partnerhome-text-color-positive)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    return null;
  };

  const selectedOption = options.find(opt => opt.id === internalValue);

  return (
    <div style={{ width: '100%', position: 'relative' }} ref={dropdownRef}>
      {/* Dropdown Input */}
      <div
        onClick={handleDropdownClick}
        style={{
          position: 'relative',
          width: '100%',
          height: '48px',
          cursor: disabled ? 'not-allowed' : 'pointer',
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
            background: disabled ? 'var(--partnerhome-bg-color-neutral-subtle)' : 'var(--partnerhome-bg-color-base)',
            border: getBorderStyle(),
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
            left: isLabelFloating ? '16px' : (icon ? '48px' : '16px'),
            top: isLabelFloating ? '-8px' : '50%',
            transform: isLabelFloating ? 'translateY(0)' : 'translateY(-50%)',
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: isLabelFloating ? 'var(--partnerhome-font-size-500)' : 'var(--partnerhome-font-size-1000)',
            fontWeight: 'var(--partnerhome-font-weight-normal)',
            lineHeight: '16px',
            color: hasError ? 'var(--partnerhome-text-color-negative)' : 'var(--partnerhome-text-color-basesubtle)',
            background: isLabelFloating ? 'var(--partnerhome-bg-color-base)' : 'transparent',
            padding: isLabelFloating ? '0 4px' : '0',
            pointerEvents: 'none',
            transition: 'all 150ms ease',
            transformOrigin: 'left center',
            zIndex: 2,
          }}
        >
          {label}
        </label>

        {/* Label + Right Icon Container */}
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
          {/* Optional Icon */}
          {icon && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
              color: 'var(--partnerhome-text-color-base)',
              flexShrink: 0,
              marginRight: '8px',
            }}>
              {icon}
            </div>
          )}

          {/* Selected Value / Label Space */}
          <div style={{
            flex: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: 'var(--partnerhome-font-size-1000)',
            fontWeight: 'var(--partnerhome-font-weight-normal)',
            color: 'var(--partnerhome-text-color-base)',
            lineHeight: '20px',
            display: 'flex',
            alignItems: 'center',
            paddingRight: '8px',
          }}>
            {hasValue ? selectedOption?.label : ''}
          </div>

          {/* Status Icon (if present) */}
          {(hasError || isValid) && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '4px',
              flexShrink: 0,
            }}>
              {getStatusIcon()}
            </div>
          )}

          {/* Chevron Icon Tap Target (48x48px) */}
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
            {/* Chevron Icon (24x24px centered in tap target, 12px from container edge) */}
            <div style={{
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--partnerhome-text-color-base)',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 150ms ease',
            }}>
              <ChevronDownIcon />
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
            right: 0,
            background: 'var(--partnerhome-bg-color-base)',
            border: 'var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)',
            borderRadius: 'var(--partnerhome-radius-large)',
            boxShadow: 'var(--partnerhome-shadow-30)',
            padding: 'var(--partnerhome-spacing-1000)',
            zIndex: 1000,
            maxHeight: '240px',
            overflowY: 'auto',
          }}
        >
          {options.map((option) => {
            const isSelected = internalValue === option.id;
            return (
              <div
                key={option.id}
                onClick={() => handleSelect(option.id)}
                style={{
                  padding: '6px var(--partnerhome-spacing-2000)',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--partnerhome-spacing-1000)',
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: 'var(--partnerhome-font-size-1000)',
                  fontWeight: 'var(--partnerhome-font-weight-normal)',
                  color: 'var(--partnerhome-text-color-base)',
                  cursor: 'pointer',
                  background: isSelected ? 'var(--partnerhome-bg-color-secondaryidle)' : 'var(--partnerhome-bg-color-tertiaryidle)',
                  transition: 'background 150ms ease',
                  overflow: 'hidden',
                  marginBottom: 'var(--partnerhome-spacing-1000)',
                  borderRadius: 'var(--partnerhome-radius-large)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isSelected 
                    ? 'var(--partnerhome-bg-color-secondaryhover)' 
                    : 'var(--partnerhome-bg-color-tertiaryhover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isSelected 
                    ? 'var(--partnerhome-bg-color-secondaryidle)' 
                    : 'var(--partnerhome-bg-color-tertiaryidle)';
                }}
              >
                {/* Thumbnail Image */}
                {option.image && (
                  <img
                    src={option.image}
                    alt={option.label}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                )}
                
                {/* Option Label */}
                <span style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  flex: 1,
                }}>
                  {option.label}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Helper/Error/Valid Message */}
      {(helperMessage || errorMessage || validMessage) && (
        <div
          style={{
            marginTop: 'var(--partnerhome-spacing-1000)',
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: 'var(--partnerhome-font-size-500)',
            fontWeight: 'var(--partnerhome-font-weight-normal)',
            color: hasError 
              ? 'var(--partnerhome-text-color-negative)' 
              : isValid 
                ? 'var(--partnerhome-text-color-positive)' 
                : 'var(--partnerhome-text-color-base)',
          }}
        >
          {errorMessage || validMessage || helperMessage}
        </div>
      )}
    </div>
  );
}