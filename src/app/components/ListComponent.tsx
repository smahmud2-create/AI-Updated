/**
 * Reusable List Component
 * Dropdown menu list that can be attached to buttons, dropdowns, etc.
 * Matches PartnerHome design system with proper hover states
 */

import React, { useState } from 'react';

export interface ListItem {
  id: string;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

interface ListComponentProps {
  items: ListItem[];
  onItemClick?: (itemId: string) => void;
  width?: string;
  maxHeight?: string;
}

export function ListComponent({
  items,
  onItemClick,
  width = '200px',
  maxHeight = '300px',
}: ListComponentProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleItemClick = (item: ListItem) => {
    if (item.disabled) return;
    item.onClick?.();
    onItemClick?.(item.id);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: width,
        maxHeight: maxHeight,
        background: 'var(--partnerhome-bg-color-base)',
        border: 'var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)',
        borderRadius: 'var(--partnerhome-radius-large)',
        boxShadow: 'var(--partnerhome-shadow-30)',
        padding: 'var(--partnerhome-spacing-1000) 0',
        overflowY: 'auto',
        boxSizing: 'border-box',
      }}
    >
      {items.map((item) => {
        const isHovered = hoveredItem === item.id;
        
        return (
          <div
            key={item.id}
            onClick={() => handleItemClick(item)}
            onMouseEnter={() => !item.disabled && setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '6px var(--partnerhome-spacing-2000)',
              margin: '0 var(--partnerhome-spacing-1000)',
              minHeight: '44px',
              cursor: item.disabled ? 'not-allowed' : 'pointer',
              opacity: item.disabled ? 0.4 : 1,
              background: item.disabled
                ? 'transparent'
                : isHovered
                ? 'var(--partnerhome-bg-color-tertiaryhover)'
                : 'var(--partnerhome-bg-color-tertiaryidle)',
              borderRadius: 'var(--partnerhome-radius-large)',
              transition: 'background-color 150ms ease',
              boxShadow: isHovered && !item.disabled
                ? 'inset 0 0 0 var(--partnerhome-stroke-weights-small) var(--partnerhome-border-color-tertiaryhoversubtle)'
                : 'none',
            }}
          >
            <span
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: 'var(--partnerhome-font-size-1000)',
                fontWeight: 'var(--partnerhome-font-weight-normal)',
                lineHeight: 'var(--partnerhome-line-height-base)',
                color: 'var(--partnerhome-text-color-base)',
              }}
            >
              {item.label}
            </span>
          </div>
        );
      })}

      {items.length === 0 && (
        <div
          style={{
            padding: 'var(--partnerhome-spacing-2000)',
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: 'var(--partnerhome-font-size-1000)',
            fontWeight: 'var(--partnerhome-font-weight-normal)',
            color: 'var(--partnerhome-text-color-base)',
            textAlign: 'center',
          }}
        >
          No items available
        </div>
      )}
    </div>
  );
}