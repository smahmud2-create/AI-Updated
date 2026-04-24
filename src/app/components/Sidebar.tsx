import React, { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-4mjy9okaub";
import { ChevronDown, X, LayoutGrid } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

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

function Icon1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <g id="Union">{children}</g>
    </Wrapper>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <g id="Vector">{children}</g>
    </Wrapper>
  );
}

// Hamburger Icon SVG
function HamburgerIcon() {
    return (
        <Icon>
            <path
                d={svgPaths.p285d2500}
                fill="var(--partnerhome-text-color-base)"
            />
            <path
                d={svgPaths.p322da700}
                fill="var(--partnerhome-text-color-base)"
            />
            <path
                d={svgPaths.p366e1980}
                fill="var(--partnerhome-text-color-base)"
            />
            <path
                d={svgPaths.p285d2500}
                stroke="var(--partnerhome-text-color-base)"
                strokeWidth="0.5"
            />
            <path
                d={svgPaths.p322da700}
                stroke="var(--partnerhome-text-color-base)"
                strokeWidth="0.5"
            />
            <path
                d={svgPaths.p366e1980}
                stroke="var(--partnerhome-text-color-base)"
                strokeWidth="0.5"
            />
        </Icon>
    )
}

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  activeItem: string;
  setActiveItem: (id: string) => void;
  setCurrentPage: (page: string) => void;
}

interface MenuItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    children?: MenuItem[];
}

export function Sidebar({
  isCollapsed,
  toggleCollapse,
  activeItem,
  setActiveItem,
  setCurrentPage,
}: SidebarProps) {
    // Only one group expanded at a time (Accordion)
    const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
    // Track expanded sub-groups (like Finance -> Accounts Receivable)
    const [expandedSubGroups, setExpandedSubGroups] = useState<string[]>([]);

    const items: MenuItem[] = [
    {
        id: "home",
        label: "Home",
        icon: (
            <div className="size-[24px] flex items-center justify-center">
                <LayoutGrid size={20} strokeWidth={2} />
            </div>
        )
    },
    {
      id: "orders",
      label: "Customer Orders",
      icon: (
        <Wrapper>
          <path
            d={svgPaths.p1e802b00}
            fill="currentColor"
            id="Vector"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </Wrapper>
      ),
      children: [
        { id: "dropship-orders", label: "Dropship Orders" },
        { id: "castlegate-orders", label: "CastleGate Orders" },
        { id: "order-entry", label: "Order Entry" },
        { id: "multi-channel-order-entry", label: "Multi-Channel Order Entry" },
        { id: "multi-channel-retailers", label: "Multi-Channel Retailers" },
        { id: "order-alerts", label: "Order Alerts" },
        { id: "castlegate-returns", label: "CastleGate Returns" },
        { id: "pickup-center", label: "Pickup Center" },
      ]
    },
    {
      id: "products",
      label: "Products",
      icon: (
        <Icon>
          <path
            clipRule="evenodd"
            d={svgPaths.p229c8a00}
            fill="currentColor"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p16fb4100}
            fill="currentColor"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p229c8a00}
            fillRule="evenodd"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p16fb4100}
            fillRule="evenodd"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </Icon>
      ),
      children: [
        { id: "product-management", label: "Product Management" },
        { id: "libraries", label: "Libraries" },
        { id: "update-product-details", label: "Update Product Details" },
        { id: "pricing-home", label: "Pricing Home" },
        { id: "shipping-dimensions", label: "Shipping Dimensions" },
        { id: "accelerated-product-review", label: "Accelerated Product Review" },
        { id: "advertising-campaigns", label: "Advertising Campaigns" },
        { id: "wayfair-sponsored-products", label: "Wayfair Sponsored Products" },
        { id: "wayfair-sponsored-shops", label: "Wayfair Sponsored Shops" },
        { id: "product-compliance", label: "Product Compliance" },
        { id: "brand-page-management", label: "Brand Page Management" },
        { id: "premium-shelf", label: "Premium Shelf" },
      ]
    },
    {
      id: "inventory",
      label: "Inventory",
      icon: (
        <div
          className="absolute contents inset-[12.5%_9.58%_14.17%_8.33%]"
          data-name="Media/01 Icons/Side Nav/Inventory"
        >
          <div
            className="absolute inset-[12.5%_9.58%_14.17%_8.33%]"
            data-name="inventory"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 19.7 17.6"
            >
              <g id="inventory">
                <g id="Path"></g>
                <g id="Path_2"></g>
                <g id="Path_3"></g>
                <path
                  d={svgPaths.p942e200}
                  fill="currentColor"
                  id="Shape"
                />
              </g>
            </svg>
          </div>
        </div>
      ),
      children: [
        { id: "inventory-integration-score", label: "Inventory Integration Score" },
        { id: "inventory-alerts", label: "Inventory Alerts" },
        { id: "inventory-management", label: "Inventory Management" },
        { id: "confirm-stock-status", label: "Confirm Stock Status" },
        { id: "product-discontinuation", label: "Product Discontinuation" },
        { id: "castlegate-inventory", label: "CastleGate Inventory" },
        { id: "inbound-orders", label: "Inbound Orders" },
        { id: "castlegate-dashboard", label: "CastleGate Dashboard" },
        { id: "castlegate-products", label: "CastleGate Products" },
        { id: "stocking-orders", label: "Stocking Orders" },
      ]
    },
    {
      id: "finances",
      label: "Finance",
      icon: (
        <Wrapper>
          <path
            d={svgPaths.p1c4f3100}
            fill="currentColor"
            id="Vector"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </Wrapper>
      ),
      children: [
        { id: "finance-dashboard", label: "Finance Dashboard" },
        { 
            id: "accounts-receivable", 
            label: "Accounts Receivable",
            children: [
                { id: "deductions", label: "Deductions" },
                { id: "ar-summary", label: "Accounts Receivable Summary" },
                { id: "invoice-summary", label: "Invoice Summary" }
            ]
        },
        { 
            id: "accounts-payable", 
            label: "Accounts Payable",
            children: [
                { id: "ap-summary", label: "Accounts Payable Summary" },
                { id: "invoice-processing", label: "Invoice Processing" }
            ]
        },
      ]
    },
    {
      id: "reports",
      label: "Reports",
      icon: (
        <Icon1>
          <path d={svgPaths.p78e5180} fill="currentColor" />
          <path d={svgPaths.p38af6e80} fill="currentColor" />
        </Icon1>
      ),
      children: [
        { id: "sales-dashboard", label: "Sales Dashboard" },
        { id: "forecast", label: "Forecast" },
        { id: "consumer-insights", label: "Consumer Insights" },
        { id: "supplier-registration-compliance", label: "Supplier Registration Compliance" },
        { id: "operations-performance", label: "Operations Performance" },
        { id: "report-center", label: "Report Center" },
      ]
    },
    {
      id: "developer",
      label: "Developer",
      icon: (
        <div
          className="absolute contents inset-[14.58%_8.75%_12.5%_10%]"
          data-name="Media/01 Icons/Side Nav/Developer"
        >
          <div
            className="absolute inset-[14.58%_8.75%_12.5%_10%]"
            data-name="developer"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 19.5 17.5"
            >
              <g id="developer">
                <g id="Path"></g>
                <g id="Shape"></g>
                <path d={svgPaths.pe092c00} fill="currentColor" id="Path_2" />
                <path d={svgPaths.pcb39300} fill="currentColor" id="Path_3" />
                <path d={svgPaths.p215c3a00} fill="currentColor" id="Shape_2" />
              </g>
            </svg>
          </div>
        </div>
      ),
      children: [
        { id: "partner-marketplace", label: "Partner Marketplace" },
        { id: "documentation", label: "Documentation" },
        { id: "application", label: "Application" },
        { id: "testing", label: "Testing" },
        { id: "graphiql", label: "GraphiQL" },
        { id: "supplier-integration-status", label: "Supplier Integration Status" },
      ]
    },
    {
      id: "download-center",
      label: "Download Center",
      icon: (
        <Icon1>
          <path d={svgPaths.p2d76e600} fill="currentColor" />
          <path d={svgPaths.p99b7f00} fill="currentColor" />
        </Icon1>
      ),
      children: [
        { id: "download-history", label: "Download History" },
        { id: "files", label: "Files" },
      ]
    },
    {
      id: "help-support",
      label: "Help & Support",
      icon: (
        <Icon>
          <path d={svgPaths.p1ee90f80} fill="currentColor" />
          <path d={svgPaths.p33b14100} fill="currentColor" />
          <path
            clipRule="evenodd"
            d={svgPaths.pf514200}
            fill="currentColor"
            fillRule="evenodd"
          />
          <path
            d={svgPaths.p1ee90f80}
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d={svgPaths.p33b14100}
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pf514200}
            fillRule="evenodd"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </Icon>
      ),
      children: [
        { id: "help-center", label: "Help Center" },
        { id: "my-tickets", label: "My Tickets" },
        { id: "submit-a-ticket", label: "Submit a Ticket" },
        { id: "system-health", label: "System Health" },
        { id: "contact-us", label: "Contact Us" },
      ]
    },
  ];

  // Helper to check if any child (deeply) is active
  const isDescendantActive = (item: MenuItem): boolean => {
      if (item.id === activeItem) return true;
      if (item.children) {
          return item.children.some(child => isDescendantActive(child));
      }
      return false;
  };

  // Initialize expanded groups based on active item
  useEffect(() => {
    const activeGroup = items.find(item => isDescendantActive(item));
    if (activeGroup && expandedGroup !== activeGroup.id) {
        setExpandedGroup(activeGroup.id);
    }
    
    // Check for nested active items (e.g. Finance -> AR -> Deductions)
    items.forEach(item => {
        if (item.children) {
            item.children.forEach(child => {
                 if (child.children && isDescendantActive(child)) {
                     setExpandedSubGroups(prev => [...prev, child.id]);
                 }
            });
        }
    });
  }, []); 

  const handleToggleGroup = (id: string) => {
      setExpandedGroup(prev => (prev === id ? null : id));
  };

  const handleToggleSubGroup = (id: string, e: React.MouseEvent) => {
      e.stopPropagation();
      setExpandedSubGroups(prev => 
        prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
      );
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
      const isActive = activeItem === item.id;
      const isParentActive = isDescendantActive(item);
      const isExpanded = level === 0 
        ? expandedGroup === item.id 
        : expandedSubGroups.includes(item.id);
      
      const hasChildren = item.children && item.children.length > 0;
      
      // Indentation base
      const paddingLeft = level === 0 ? 0 : 48 + ((level - 1) * 20);

      // Parent Item Render
      const itemContent = (
          <div
            className={`
                relative shrink-0 cursor-pointer group flex items-center transition-colors mx-2 rounded-[4px]
                ${level === 0 ? 'h-[48px]' : 'h-[40px]'}
                ${
                    (level === 0 && isParentActive)
                        ? "text-[var(--partnerhome-text-color-primaryactive)]"
                        : level === 0
                        ? "text-[var(--partnerhome-text-color-base)] hover:bg-[var(--partnerhome-bg-color-secondaryhover)]"
                        : "" // Sub-items style handled below
                }
                ${
                    (level > 0 && isActive)
                        ? "text-[var(--partnerhome-text-color-primaryactive)] font-medium"
                        : level > 0
                        ? "text-[var(--partnerhome-text-color-base)] hover:bg-[var(--partnerhome-bg-color-secondaryhover)]"
                        : ""
                }
            `}
            style={{ paddingLeft: level > 0 ? `${paddingLeft}px` : undefined }}
            onClick={(e) => {
                if (level === 0) {
                    if (isCollapsed) {
                        // Collapsed sidebar: expand sidebar and open the group
                        toggleCollapse();
                        setTimeout(() => handleToggleGroup(item.id), 50);
                    } else if (hasChildren) {
                        // Parent with children: only toggle accordion, do NOT navigate
                        handleToggleGroup(item.id);
                    } else {
                        // Leaf item at level 0: navigate
                        setActiveItem(item.id);
                        setCurrentPage(item.id);
                    }
                } else {
                    if (hasChildren) {
                        // Sub-group with children: only toggle sub-accordion, do NOT navigate
                        handleToggleSubGroup(item.id, e);
                    } else {
                        // Leaf child item: navigate
                        setActiveItem(item.id);
                        setCurrentPage(item.id);
                    }
                }
            }}
            data-name={`${item.label} Nav Item`}
          >
              {/* Selected Indicator */}
              {level === 0 && isParentActive && (
                  <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 h-[24px] w-[4px] bg-[var(--partnerhome-core-60)] rounded-r-full" />
              )}

              {/* Level 0 Icon */}
              {level === 0 && (
                  <div
                    className={`absolute left-[4px] top-[4px] size-[40px] flex items-center justify-center rounded-[var(--partnerhome-radius-large)] transition-colors
                        ${isParentActive ? "bg-[var(--partnerhome-bg-color-secondaryhover)]" : "bg-transparent"}
                    `}
                  >
                     <div className="size-[24px] relative text-inherit">
                        {item.icon}
                     </div>
                  </div>
              )}

              {/* Label */}
              {!isCollapsed && (
                <div 
                    className={`
                        ${level === 0 ? 'absolute left-[48px] top-1/2 -translate-y-1/2' : 'truncate pr-[var(--partnerhome-spacing-2000)]'}
                        text-body text-inherit
                    `}
                >
                  {item.label}
                </div>
              )}

              {/* Chevron */}
              {!isCollapsed && hasChildren && (
                 <div className={`absolute right-[var(--partnerhome-spacing-2000)] top-1/2 -translate-y-1/2 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown size={16} className="text-[var(--partnerhome-text-color-base)]" />
                 </div>
              )}
          </div>
      );

      // If collapsed and level 0, wrap in Tooltip
      if (isCollapsed && level === 0) {
          return (
             <div key={item.id} className="w-full flex flex-col">
                 <Tooltip>
                    <TooltipTrigger asChild>
                        {itemContent}
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-[var(--partnerhome-surface-color-inverse)] text-[var(--partnerhome-text-color-inverse)] border-0" sideOffset={5}>
                        {item.label}
                    </TooltipContent>
                 </Tooltip>
             </div>
          )
      }

      return (
        <div key={item.id} className="w-full flex flex-col">
            {itemContent}
            {/* Children */}
            {!isCollapsed && isExpanded && hasChildren && (
                <div className={`flex flex-col w-full bg-[var(--partnerhome-bg-color-base)] ${level === 0 ? 'gap-1 pb-2' : ''}`}>
                    {item.children!.map(child => renderMenuItem(child, level + 1))}
                </div>
            )}
        </div>
      );
  };

  return (
    <div
      className={`relative flex flex-col bg-[var(--partnerhome-bg-color-base)] border-r border-[var(--partnerhome-border-color-base)] transition-all duration-300 ease-in-out h-full min-h-screen ${
        isCollapsed ? "w-[64px]" : "w-[320px]"
      }`}
      data-name=".Base/Sidebar"
    >
      {/* Sidebar Header / Toggle */}
      <div
        className={`flex items-center h-[64px] relative shrink-0 ${isCollapsed ? 'justify-center' : 'justify-start pl-[var(--partnerhome-spacing-2000)] pr-[var(--partnerhome-spacing-2000)]'}`}
        data-name="Heading Layout"
      >
        {/* Toggle Button / Icon */}
        <div 
            className="cursor-pointer shrink-0 flex items-center justify-center size-[32px] rounded-[var(--partnerhome-radius-large)] hover:bg-[var(--partnerhome-bg-color-secondaryhover)] transition-colors"
            onClick={toggleCollapse}
        >
            {isCollapsed ? (
                <div className="relative size-[24px]" data-name="Menu">
                    <HamburgerIcon />
                </div>
            ) : (
                <X size={24} className="text-[var(--partnerhome-text-color-base)]" />
            )}
        </div>

        {/* Logo - Only when expanded */}
        {!isCollapsed && (
            <div className="ml-[var(--partnerhome-spacing-1000)] h-[22px] shrink-0 flex items-center">
                <span className="text-[var(--partnerhome-text-color-base)] font-semibold text-base whitespace-nowrap">Wayfair Partner Home</span>
            </div>
        )}
      </div>

      {/* Navigation Items */}
      <div
        className="flex flex-col gap-[var(--partnerhome-spacing-1000)] items-start relative shrink-0 w-full mt-[var(--partnerhome-spacing-1500)] overflow-y-auto pb-4"
        data-name="L1 Items"
      >
        {items.map(item => renderMenuItem(item, 0))}
      </div>
    </div>
  );
}