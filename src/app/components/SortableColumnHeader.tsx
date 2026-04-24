import React, { useState } from 'react';
import svgPaths from '../../imports/svg-tjh7k56hkx';

interface SortableColumnHeaderProps {
  label: string;
  columnId: string;
  currentSortColumn: string | null;
  currentSortDirection: 'asc' | 'desc' | null;
  onSort: (columnId: string | null, direction: 'asc' | 'desc' | null) => void;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export function SortableColumnHeader({
  label,
  columnId,
  currentSortColumn,
  currentSortDirection,
  onSort,
  width,
  align = 'left',
}: SortableColumnHeaderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const isCurrentColumn = currentSortColumn === columnId;
  const showSortIcon = isHovered || isCurrentColumn;

  const handleClick = () => {
    if (isCurrentColumn) {
      // If already sorting by this column, cycle through states
      if (currentSortDirection === 'asc') {
        // Second click: sort descending
        onSort(columnId, 'desc');
      } else if (currentSortDirection === 'desc') {
        // Third click: clear sort (back to default)
        onSort(null, null);
      } else {
        // Should not reach here, but default to ascending
        onSort(columnId, 'asc');
      }
    } else {
      // First click: sort ascending
      onSort(columnId, 'asc');
    }
  };

  // Determine background color
  let bgColor = 'transparent';
  if (isActive) {
    bgColor = 'var(--partnerhome-bg-color-secondaryactive)';
  } else if (isHovered) {
    bgColor = 'var(--partnerhome-bg-color-secondaryhover)';
  }

  const textAlign = align === 'right' ? 'right' : align === 'center' ? 'center' : 'left';

  return (
    <th
      className={`text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-bold)] text-[var(--partnerhome-text-color-base)]`}
      style={{
        fontFamily: 'var(--partnerhome-font-family-base)',
        width: width,
        height: '48px',
        maxHeight: '48px',
        boxSizing: 'border-box',
        verticalAlign: 'middle',
        padding: 0,
        cursor: 'pointer',
        background: bgColor,
        transition: 'background-color 200ms ease',
        userSelect: 'none',
        textAlign,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onClick={handleClick}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center',
          gap: 'var(--partnerhome-spacing-1000)',
          height: '48px',
          padding: '0 var(--partnerhome-spacing-2000)',
        }}
      >
        <span style={{
          fontWeight: 'var(--partnerhome-font-weight-bold)',
          whiteSpace: 'nowrap',
        }}>{label}</span>
        {/* Always reserve space for icon to prevent column width jumping */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            minWidth: '24px',
            height: '24px',
            flexShrink: 0,
            marginLeft: align === 'right' ? 0 : 'auto',
            visibility: showSortIcon ? 'visible' : 'hidden',
          }}
        >
          {/* Sort Icon from Figma */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g>
              {/* Up Arrow - Fill */}
              <path
                d={svgPaths.p24da3900}
                fill="var(--partnerhome-text-color-base)"
                opacity={isCurrentColumn && currentSortDirection === 'desc' ? '0.2' : '1'}
              />
              {/* Down Arrow - Fill */}
              <path
                d={svgPaths.p5450380}
                fill="var(--partnerhome-text-color-base)"
                opacity={isCurrentColumn && currentSortDirection === 'asc' ? '0.2' : '1'}
              />
              {/* Up Arrow - Stroke */}
              <path
                d={svgPaths.p24da3900}
                stroke="var(--partnerhome-text-color-base)"
                strokeWidth="0.5"
                opacity={isCurrentColumn && currentSortDirection === 'desc' ? '0.2' : '1'}
              />
              {/* Down Arrow - Stroke */}
              <path
                d={svgPaths.p5450380}
                stroke="var(--partnerhome-text-color-base)"
                strokeWidth="0.5"
                opacity={isCurrentColumn && currentSortDirection === 'asc' ? '0.2' : '1'}
              />
            </g>
          </svg>
        </div>
      </div>
    </th>
  );
}