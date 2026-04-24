import React from 'react';

interface SvgIconProps {
  children: React.ReactNode;
  className?: string;
  viewBox?: string;
}

export const SvgIcon = ({ children, className = "size-full", viewBox = "0 0 24 24" }: SvgIconProps) => {
  return (
    <div className={`relative size-[24px] shrink-0 ${className}`}>
       <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={viewBox}>
         {children}
       </svg>
    </div>
  );
};
