import React, { useEffect, useRef, useState } from 'react';

interface TableRowProps {
  isSelected: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLTableRowElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLTableRowElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLTableRowElement>) => void;
}

export const TableRow: React.FC<TableRowProps> = ({ isSelected, children, className, style, onClick, onMouseEnter, onMouseLeave }) => {
  const rowRef = useRef<HTMLTableRowElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (rowRef.current) {
      // Determine background color based on state
      let backgroundColor: string;
      
      if (isSelected) {
        if (isHovered) {
          // Selected + Hovered: Use secondaryhover (light purple hover)
          backgroundColor = 'var(--partnerhome-bg-color-secondaryhover)';
        } else {
          // Selected + Not Hovered: Use light purple (primarysubtle)
          backgroundColor = 'var(--partnerhome-surface-color-primarysubtle)';
        }
      } else {
        if (isHovered) {
          // Not Selected + Hovered: Use light purple (primarysubtle)
          backgroundColor = 'var(--partnerhome-surface-color-primarysubtle)';
        } else {
          // Not Selected + Not Hovered: Transparent
          backgroundColor = 'transparent';
        }
      }
      
      // Apply background color to the row
      rowRef.current.style.setProperty('background-color', backgroundColor, 'important');
      
      // Ensure child td elements inherit transparent background
      const cells = rowRef.current.querySelectorAll('td');
      cells.forEach(cell => {
        (cell as HTMLElement).style.setProperty('background-color', 'transparent', 'important');
      });
    }
  }, [isSelected, isHovered]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLTableRowElement>) => {
    setIsHovered(true);
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLTableRowElement>) => {
    setIsHovered(false);
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  };

  return (
    <tr
      ref={rowRef}
      className={className}
      style={{
        ...style,
        transition: 'background-color 150ms ease',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </tr>
  );
};