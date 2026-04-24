import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';
import { ChevronDown, ChevronRight } from 'lucide-react';

// Mocking cn if not present, but I'll assume I should create it or use clsx directly.
// I'll create a utils file for cn shortly.

interface NavItemProps {
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  isSidebarExpanded: boolean;
  children?: React.ReactNode; // Subitems
  isOpen?: boolean; // Submenu open
  onToggle?: () => void;
  onClick?: () => void;
  depth?: number;
}

export const NavItem = ({
  label,
  icon,
  isActive,
  isSidebarExpanded,
  children,
  isOpen,
  onToggle,
  onClick,
  depth = 0,
}: NavItemProps) => {
  const isSubItem = depth > 0;
  
  // Colors based on tokens
  const activeBg = "var(--partnerhome-bg-color-primarysubtle)"; // #DBC5DB
  const hoverBg = "var(--partnerhome-bg-color-secondaryhover)"; // #F1E9F1
  const activeText = "var(--partnerhome-text-color-primary)"; // #66256A
  const baseText = "var(--partnerhome-text-color-base)"; // #211E22
  
  // Determine text and icon color variables
  const textColor = isActive ? activeText : baseText;
  
  return (
    <div className="w-full select-none">
      <div
        className={cn(
          "relative flex items-center cursor-pointer transition-colors duration-200 group h-[48px]",
          // Padding logic
          isSidebarExpanded ? "px-[12px]" : "justify-center px-0",
          !isActive && "hover:bg-[var(--partnerhome-bg-color-secondaryhover)]"
        )}
        style={{
          backgroundColor: isActive ? activeBg : 'transparent',
          color: textColor,
          // CSS variables for SVGs
          // @ts-ignore
          "--fill-0": textColor,
          "--stroke-0": textColor,
        } as React.CSSProperties}
        onClick={() => {
          if (children && isSidebarExpanded) {
            onToggle?.();
          } else {
            onClick?.();
          }
        }}
      >
        {/* Active Border Left Indicator - only for root items or as per design */}
        {isActive && (
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--partnerhome-bg-color-primary)]" />
        )}

        {/* Icon Container */}
        <div className={cn(
          "flex items-center justify-center shrink-0",
           // If collapsed, icon is centered. If expanded, it has margin right.
           isSidebarExpanded ? "mr-[12px]" : "mx-auto"
        )}>
           {icon}
        </div>

        {/* Label and Chevron - Only visible if expanded */}
        {isSidebarExpanded && (
          <div className="flex flex-1 items-center justify-between overflow-hidden">
            <span className="truncate font-['Lato'] text-[14px] leading-[20px] font-normal">
              {label}
            </span>
            
            {children && (
              <div className="ml-2 shrink-0">
                {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Submenu */}
      <AnimatePresence>
        {isSidebarExpanded && isOpen && children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-[var(--partnerhome-bg-color-base)]"
          >
             {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
