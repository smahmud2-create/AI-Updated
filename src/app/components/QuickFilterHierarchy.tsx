import React, { useState, useRef, useEffect } from "react";
import { Checkbox } from "./Checkbox";
import ChevronDownIcon from "../../imports/ChevronDown";
import { Button } from "./Button";
import { DropdownMenu } from "./DropdownMenu";

export interface HierarchyOption {
  id: string;
  label: string;
  count?: number;
  children?: HierarchyOption[];
}

interface QuickFilterHierarchyProps {
  options: HierarchyOption[];
  selectedIds: string[];
  onApply: (selectedIds: string[]) => void;
  triggerStyle?: "text" | "button";
}

export function QuickFilterHierarchy({
  options,
  selectedIds,
  onApply,
  triggerStyle = "text",
}: QuickFilterHierarchyProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempSelected, setTempSelected] = useState<string[]>(selectedIds);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Manage trigger color states when open/closed
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      buttonRef.current.style.color = "var(--partnerhome-text-color-primaryactive)";
      const chevronDiv = buttonRef.current.querySelector('div[data-chevron]') as HTMLElement;
      if (chevronDiv) {
        chevronDiv.style.setProperty('--fill-0', 'var(--partnerhome-text-color-primaryactive)');
        chevronDiv.style.setProperty('--stroke-0', 'var(--partnerhome-text-color-primaryactive)');
      }
    }
    if (!isOpen && buttonRef.current) {
      buttonRef.current.style.color = "var(--partnerhome-text-color-primary)";
      const chevronDiv = buttonRef.current.querySelector('div[data-chevron]') as HTMLElement;
      if (chevronDiv) {
        chevronDiv.style.setProperty('--fill-0', 'var(--partnerhome-text-color-primary)');
        chevronDiv.style.setProperty('--stroke-0', 'var(--partnerhome-text-color-primary)');
      }
    }
  }, [isOpen]);

  const getAllChildIds = (option: HierarchyOption): string[] => {
    const ids = [option.id];
    if (option.children) {
      option.children.forEach(child => {
        ids.push(...getAllChildIds(child));
      });
    }
    return ids;
  };

  const handleCheckboxChange = (option: HierarchyOption, checked: boolean) => {
    const allIds = getAllChildIds(option);
    
    if (checked) {
      setTempSelected([...new Set([...tempSelected, ...allIds])]);
    } else {
      setTempSelected(tempSelected.filter(id => !allIds.includes(id)));
    }
  };

  const isParentChecked = (option: HierarchyOption): boolean => {
    if (!option.children || option.children.length === 0) {
      return tempSelected.includes(option.id);
    }
    
    const childIds = getAllChildIds(option).filter(id => id !== option.id);
    const checkedChildren = childIds.filter(id => tempSelected.includes(id));
    
    return checkedChildren.length === childIds.length;
  };

  const isParentIndeterminate = (option: HierarchyOption): boolean => {
    if (!option.children || option.children.length === 0) {
      return false;
    }
    
    const childIds = getAllChildIds(option).filter(id => id !== option.id);
    const checkedChildren = childIds.filter(id => tempSelected.includes(id));
    
    return checkedChildren.length > 0 && checkedChildren.length < childIds.length;
  };

  const handleApply = () => {
    onApply(tempSelected);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setTempSelected(selectedIds);
    setIsOpen(false);
  };

  const handleClose = () => {
    setTempSelected(selectedIds);
    setIsOpen(false);
  };

  const renderOption = (option: HierarchyOption, depth: number = 0) => {
    const checked = isParentChecked(option);
    const indeterminate = isParentIndeterminate(option);
    const hasChildren = option.children && option.children.length > 0;

    return (
      <div key={option.id}>
        <div
          onClick={() => handleCheckboxChange(option, !checked)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "6px var(--partnerhome-spacing-1000)",
            paddingLeft: `calc(var(--partnerhome-spacing-1000) + ${depth * 24}px)`,
            cursor: "pointer",
            background: "transparent",
            transition: "background-color 150ms ease",
            height: "44px",
            borderRadius: "var(--partnerhome-radius-large)",
            width: "100%",
            boxSizing: "border-box",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--partnerhome-bg-color-tertiaryhover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "var(--partnerhome-spacing-1000)" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Checkbox
                checked={checked}
                indeterminate={indeterminate}
                onChange={(isChecked) => handleCheckboxChange(option, isChecked)}
              />
            </div>
            <span
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                lineHeight: "20px",
              }}
            >
              {option.label}
            </span>
          </div>
          {option.count !== undefined && (
            <span
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-secondary)",
                lineHeight: "20px",
              }}
            >
              {option.count}
            </span>
          )}
        </div>
        {hasChildren && option.children!.map(child => renderOption(child, depth + 1))}
      </div>
    );
  };

  const selectedCount = tempSelected.length;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Trigger Button */}
      {triggerStyle === "text" ? (
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            background: "transparent",
            border: "none",
            padding: "0",
            cursor: "pointer",
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-1000)",
            fontWeight: "var(--partnerhome-font-weight-normal)",
            color: isOpen ? "var(--partnerhome-text-color-primaryactive)" : "var(--partnerhome-text-color-primary)",
            lineHeight: "var(--partnerhome-line-height-base)",
            transition: "color 150ms ease",
          }}
          onMouseEnter={(e) => {
            if (!isOpen) {
              e.currentTarget.style.color = "var(--partnerhome-text-color-primaryhover)";
              const chevronDiv = e.currentTarget.querySelector('div[data-chevron]') as HTMLElement;
              if (chevronDiv) {
                chevronDiv.style.setProperty('--fill-0', 'var(--partnerhome-text-color-primaryhover)');
                chevronDiv.style.setProperty('--stroke-0', 'var(--partnerhome-text-color-primaryhover)');
              }
            }
          }}
          onMouseLeave={(e) => {
            if (!isOpen) {
              e.currentTarget.style.color = "var(--partnerhome-text-color-primary)";
              const chevronDiv = e.currentTarget.querySelector('div[data-chevron]') as HTMLElement;
              if (chevronDiv) {
                chevronDiv.style.setProperty('--fill-0', 'var(--partnerhome-text-color-primary)');
                chevronDiv.style.setProperty('--stroke-0', 'var(--partnerhome-text-color-primary)');
              }
            }
          }}
        >
          <span style={{ textDecoration: "underline", color: "inherit" }}>Quick Filter</span>
          {selectedCount > 0 && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "20px",
                height: "20px",
                padding: "0 6px",
                borderRadius: "10px",
                background: "var(--partnerhome-bg-color-primary)",
                color: "var(--partnerhome-text-color-inverse)",
                fontSize: "var(--partnerhome-font-size-500)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
              }}
            >
              {selectedCount}
            </span>
          )}
          <div
            data-chevron
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 200ms ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "24px",
              height: "24px",
              ['--fill-0' as any]: isOpen ? 'var(--partnerhome-text-color-primaryactive)' : 'var(--partnerhome-text-color-primary)',
              ['--stroke-0' as any]: isOpen ? 'var(--partnerhome-text-color-primaryactive)' : 'var(--partnerhome-text-color-primary)',
            }}
          >
            <ChevronDownIcon />
          </div>
        </button>
      ) : (
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="button-secondary"
          style={{
            height: "48px",
            display: "flex",
            alignItems: "center",
            gap: "var(--partnerhome-spacing-1000)",
            padding: "0 var(--partnerhome-spacing-2000)",
          }}
        >
          <span style={{ color: "var(--partnerhome-text-color-primary)" }}>Quick Filter</span>
          {selectedCount > 0 && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "20px",
                height: "20px",
                padding: "0 6px",
                borderRadius: "10px",
                background: "var(--partnerhome-bg-color-primary)",
                color: "var(--partnerhome-text-color-inverse)",
                fontSize: "var(--partnerhome-font-size-500)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
              }}
            >
              {selectedCount}
            </span>
          )}
        </button>
      )}

      {/* Dropdown Menu — powered by DropdownMenu primitive */}
      <DropdownMenu
        isOpen={isOpen}
        onClose={handleClose}
        triggerRef={buttonRef}
        width={300}
        footer={
          <>
            <Button
              variant="secondary"
              onClick={handleCancel}
              style={{ flex: "1 1 0", minWidth: 0 }}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleApply}
              style={{ flex: "1 1 0", minWidth: 0 }}
            >
              Apply
            </Button>
          </>
        }
      >
        {options.map(option => renderOption(option))}
      </DropdownMenu>
    </div>
  );
}