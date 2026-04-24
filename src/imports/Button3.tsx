import { useState, useRef, useEffect } from "react";
import svgPaths from "./svg-7b6k031tsn";
import { ListComponent, ListItem } from "@/app/components/ListComponent";

function Icon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p11c90b00} fill="var(--fill-0, #66256A)" id="Vector" stroke="var(--stroke-0, #66256A)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown({ isOpen }: { isOpen: boolean }) {
  return (
    <div 
      className="overflow-clip relative shrink-0 size-[24px] z-[1]" 
      data-name="Chevron Down"
      style={{
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 200ms ease',
      }}
    >
      <Icon />
    </div>
  );
}

function Content({ isOpen, isHovered }: { isOpen: boolean; isHovered: boolean }) {
  return (
    <div className="h-[48px] relative shrink-0 w-full z-[2]" data-name="Content">
      <div className="flex flex-row items-center justify-center size-full">
        <div
          className="content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] py-0 relative size-full"
          style={{
            transition: "background-color 250ms ease"
          }}
        >
          <div className="flex flex-col font-['Lato',sans-serif] justify-center relative shrink-0 text-[14px] z-[2]">
            <p style={{ 
              color: "var(--partnerhome-text-color-primary) !important",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              lineHeight: "20px",
              margin: 0
            }}>More</p>
          </div>
          <ChevronDown isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}

function Background({ isOpen, isHovered }: { isOpen: boolean; isHovered: boolean }) {
  const getBackgroundColor = () => {
    if (isOpen) return "#DBC5DB"; // Active/Open state - SecondaryActive
    if (isHovered) return "var(--partnerhome-bg-color-secondaryhover)"; // Hover state
    return "white"; // Default state
  };

  const getBorderColor = () => {
    if (isOpen || isHovered) return "var(--partnerhome-border-color-primary-hover)";
    return "var(--partnerhome-border-color-primary)";
  };

  return (
    <div
      className="absolute inset-0 rounded-[4px] z-[1]"
      data-name="Background"
      style={{
        background: getBackgroundColor(),
        transition: "background-color 250ms ease"
      }}
    >
      <div
        aria-hidden="true"
        className="absolute border-solid inset-0 pointer-events-none rounded-[4px]"
        style={{
          borderWidth: "var(--partnerhome-stroke-weights-small)",
          borderColor: getBorderColor(),
          transition: "border-color 250ms ease"
        }}
      />
    </div>
  );
}

function Layout({ isOpen, isHovered }: { isOpen: boolean; isHovered: boolean }) {
  return (
    <div className="content-stretch flex flex-col h-[48px] isolate items-start overflow-clip relative shrink-0 z-[1]" data-name="Layout">
      <Content isOpen={isOpen} isHovered={isHovered} />
      <Background isOpen={isOpen} isHovered={isHovered} />
    </div>
  );
}

export default function Button3() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number } | null>(null);

  // Sample menu items for the More dropdown
  const menuItems: ListItem[] = [
    { id: 'edit', label: 'Edit', onClick: () => console.log('Edit clicked') },
    { id: 'duplicate', label: 'Duplicate', onClick: () => console.log('Duplicate clicked') },
    { id: 'archive', label: 'Archive', onClick: () => console.log('Archive clicked') },
    { id: 'delete', label: 'Delete', onClick: () => console.log('Delete clicked') },
  ];

  // Calculate dropdown position
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownWidth = 200;
      const windowWidth = window.innerWidth;

      // Position below button with 4px gap
      const top = buttonRect.bottom + 4;
      
      // Align right edge of dropdown with right edge of button
      let left = buttonRect.right - dropdownWidth;

      // Ensure dropdown doesn't go off-screen
      const minLeft = 8;
      const maxLeft = windowWidth - dropdownWidth - 8;
      left = Math.max(minLeft, Math.min(left, maxLeft));

      setDropdownPosition({ top, left });
    }
  }, [isOpen]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleItemClick = (itemId: string) => {
    console.log('Menu item clicked:', itemId);
    setIsOpen(false);
  };

  return (
    <>
      <div
        ref={buttonRef}
        className="content-stretch flex flex-col isolate items-start relative cursor-pointer"
        data-name="Button 3"
        style={{ height: "48px", boxSizing: "border-box" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          console.log('Button clicked, isOpen:', !isOpen);
          setIsOpen(!isOpen);
        }}
      >
        <Layout isOpen={isOpen} isHovered={isHovered} />
      </div>

      {/* Dropdown List Menu */}
      {isOpen && dropdownPosition && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0"
            style={{ zIndex: 14 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown Menu */}
          <div
            ref={dropdownRef}
            style={{
              position: 'fixed',
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
              zIndex: 15,
            }}
          >
            <ListComponent
              items={menuItems}
              onItemClick={handleItemClick}
              width="200px"
              maxHeight="300px"
            />
          </div>
        </>
      )}
    </>
  );
}