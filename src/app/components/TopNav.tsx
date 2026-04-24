import React from "react";
import svgPaths from "../../imports/svg-4mjy9okaub";

import Notification from "../../imports/Notification";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-0 size-[24px] top-0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

interface TopNavProps {
    isSidebarExpanded: boolean;
    setCurrentPage: (page: string) => void;
}

export function TopNav({ isSidebarExpanded, setCurrentPage }: TopNavProps) {
  return (
    <div
      className="h-[64px] w-full bg-[var(--partnerhome-bg-color-base)] border-b border-[var(--partnerhome-border-color-base)] flex items-center justify-between px-[var(--partnerhome-spacing-3000)]"
      data-name=".Base/Global Navigation/Utility Navigation"
    >
      {/* Logo Area - Hidden if sidebar is expanded, clickable to go home */}
      <div 
        className={`h-[27px] w-[256px] relative overflow-hidden transition-opacity duration-200 cursor-pointer ${isSidebarExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
        data-name="Partner Home Logo"
        onClick={() => setCurrentPage('home')}
      >
      </div>

      {/* Utility Nav */}
      <div
        className="flex gap-[var(--partnerhome-spacing-3000)] items-center"
        data-name="Utility Nav"
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className="flex gap-[var(--partnerhome-spacing-1000)] items-center relative cursor-pointer text-[var(--partnerhome-text-color-base)] hover:text-[var(--partnerhome-text-color-primary)] data-[state=open]:text-[var(--partnerhome-text-color-primary)] transition-colors"
              data-name="Switch Account"
            >
              <div
                className="flex items-center"
                data-name="📦 Text"
                style={{ transform: 'translateY(7px)' }}
              >
                <p className="text-body text-inherit text-nowrap m-0 p-0 flex items-center pb-0" style={{ lineHeight: 'normal', paddingBottom: '0' }}>
                  Supplier Org
                </p>
              </div>
              <div
                className="relative size-[24px] flex items-center justify-center"
                data-name="📦 System Icon"
              >
                <div
                  className="absolute inset-0 overflow-clip text-inherit"
                  data-name="Chevron Down"
                >
                  <Wrapper>
                    <path
                      d={svgPaths.p11c90b00}
                      fill="currentColor"
                      id="Vector"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </Wrapper>
                </div>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="end" 
            className="w-[200px] bg-[var(--partnerhome-bg-color-base)] border-[var(--partnerhome-border-color-base)] rounded-[var(--partnerhome-radius-large)] shadow-[var(--partnerhome-shadow-30)]"
          >
            <DropdownMenuItem className="cursor-pointer focus:bg-[var(--partnerhome-bg-color-global-body)]">
              Option 1
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer focus:bg-[var(--partnerhome-bg-color-global-body)]">
              Option 2
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notification Button */}
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="flex items-center cursor-pointer text-[var(--partnerhome-text-color-base)] hover:text-[var(--partnerhome-text-color-primary)] transition-colors border-none bg-transparent p-0"
                data-name="Notification"
              >
                <Notification className="relative size-[24px] [&_path]:stroke-current" />
              </button>
            </TooltipTrigger>
            <TooltipContent 
              side="bottom" 
              className="bg-[var(--partnerhome-surface-color-inverse)] !text-[var(--partnerhome-text-color-inverse)] border-0 [&_*]:text-current"
            >
              Notification
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0}>
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <div
                    className="flex items-center cursor-pointer text-[var(--partnerhome-text-color-base)] hover:text-[var(--partnerhome-text-color-primary)] data-[state=open]:text-[var(--partnerhome-text-color-primary)] transition-colors"
                    data-name="Account"
                  >
                    <div
                      className="relative size-[24px]"
                      data-name="📦 System Icon"
                    >
                      <div className="absolute inset-0 overflow-clip text-inherit" data-name="Account">
                        <Wrapper>
                          <path
                            d={svgPaths.pdf72b80}
                            fill="currentColor"
                            id="Vector"
                            stroke="currentColor"
                            strokeWidth="0.5"
                          />
                        </Wrapper>
                      </div>
                    </div>
                  </div>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent 
                  side="bottom" 
                  className="bg-[var(--partnerhome-surface-color-inverse)] !text-[var(--partnerhome-text-color-inverse)] border-0 [&_*]:text-current"
              >
                Profile
              </TooltipContent>
            </Tooltip>
            <DropdownMenuContent 
              align="end" 
              className="w-[200px] bg-[var(--partnerhome-bg-color-base)] border-[var(--partnerhome-border-color-base)] rounded-[var(--partnerhome-radius-large)] shadow-[var(--partnerhome-shadow-30)]"
            >
              <DropdownMenuItem 
                className="cursor-pointer focus:bg-[var(--partnerhome-bg-color-global-body)]"
                onClick={() => setCurrentPage('components')}
              >
                Components
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="cursor-pointer focus:bg-[var(--partnerhome-bg-color-global-body)]"
                onClick={() => setCurrentPage('data-table-samples')}
              >
                Data Table Samples
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="cursor-pointer focus:bg-[var(--partnerhome-bg-color-global-body)]"
                onClick={() => setCurrentPage('analytics-library')}
              >
                Analytics Library
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer focus:bg-[var(--partnerhome-bg-color-global-body)]">
                My Account
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer focus:bg-[var(--partnerhome-bg-color-global-body)]">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TooltipProvider>
      </div>
    </div>
  );
}