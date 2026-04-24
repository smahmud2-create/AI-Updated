import { useState } from "react";
import svgPaths from "./svg-vhd7pq24vl";

function Icon({ isHovered }: { isHovered: boolean }) {
  const color = isHovered ? "var(--partnerhome-text-color-primary-hover)" : "var(--partnerhome-text-color-primary)";
  
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Vector">
            <path d={svgPaths.p1ee90f80} fill={color} />
            <path d={svgPaths.p33b14100} fill={color} />
            <path clipRule="evenodd" d={svgPaths.pf514200} fill={color} fillRule="evenodd" />
            <path d={svgPaths.p1ee90f80} stroke={color} strokeWidth="0.5" />
            <path d={svgPaths.p33b14100} stroke={color} strokeWidth="0.5" />
            <path clipRule="evenodd" d={svgPaths.pf514200} fillRule="evenodd" stroke={color} strokeWidth="0.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HelpCenter({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px] z-[3]" data-name="Help Center">
      <Icon isHovered={isHovered} />
    </div>
  );
}

function Content({ isHovered }: { isHovered: boolean }) {
  const textColor = isHovered ? "var(--partnerhome-text-color-primary-hover)" : "var(--partnerhome-text-color-primary)";
  
  return (
    <div className="content-stretch flex gap-[4px] isolate items-center relative shrink-0 w-full z-[1]" data-name="Content">
      <HelpCenter isHovered={isHovered} />
      <button 
        className="flex items-center font-['Lato',sans-serif] not-italic relative shrink-0 text-[14px] z-[2] bg-transparent border-none p-0 cursor-pointer"
        style={{ 
          color: textColor,
          transition: "color 150ms ease",
          textDecoration: "underline",
          lineHeight: "20px",
          fontWeight: "var(--partnerhome-font-weight-normal)"
        }}
      >
        Help
      </button>
    </div>
  );
}

function Layout({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0 z-[1]" data-name="Layout">
      <Content isHovered={isHovered} />
    </div>
  );
}

export default function HelpButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="content-stretch flex flex-col isolate items-start relative size-full cursor-pointer" 
      data-name="Help Button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: "all 150ms ease",
        padding: "0 var(--partnerhome-spacing-1000)",
        height: "48px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Layout isHovered={isHovered} />
    </div>
  );
}