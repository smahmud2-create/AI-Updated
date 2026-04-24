import React, { useState, ReactNode } from 'react';

interface CardContainerProps {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  className?: string;
}

export function CardContainer({ 
  children, 
  width = '100%', 
  height = 'auto',
  onClick,
  className = ''
}: CardContainerProps) {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getStateStyles = () => {
    if (isActive) {
      // Active state: subtle shadow, slight scale down
      return {
        boxShadow: 'var(--partnerhome-shadow-10)',
        transform: 'scale(0.98)',
      };
    }
    if (isHovered) {
      // Hover state: elevated shadow
      return {
        boxShadow: 'var(--partnerhome-shadow-30)',
        transform: 'translateY(-2px)',
      };
    }
    // Default state: no shadow, just border
    return {
      boxShadow: 'none',
      transform: 'translateY(0)',
    };
  };

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
    if (onClick) {
      onClick();
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const stateStyles = getStateStyles();

  return (
    <div
      className={className}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        maxWidth: '100%',
        height: typeof height === 'number' ? `${height}px` : height,
        background: 'var(--partnerhome-bg-color-base)',
        border: 'var(--partnerhome-stroke-weights-small) solid var(--partnerhome-border-color-base)',
        borderRadius: 'var(--partnerhome-radius-large)',
        padding: 'var(--partnerhome-spacing-2000)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'box-shadow 250ms ease, transform 150ms ease',
        boxShadow: stateStyles.boxShadow,
        transform: stateStyles.transform,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </div>
  );
}