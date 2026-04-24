/**
 * ComponentsPage — PartnerHome Design System Showcase
 *
 * All buttons use the reusable <Button> component from Button.tsx.
 * See /Guidelines.md > Buttons section for the canonical pattern.
 */

import React, { useState } from "react";
import { Button } from "./Button";
import { SortDropdown } from "./SortDropdown";
import { SegmentControlDropdown } from "./SegmentControlDropdown";
import { QuickFilterDropdown } from "./QuickFilterDropdown";
import { QuickFilterHierarchy } from "./QuickFilterHierarchy";
import { QuickFilterWithChips } from "./QuickFilterWithChips";
import { TextInput } from "./TextInput";
import { SearchInput } from "./SearchInput";
import { DropdownMenu, DropdownMenuItem, DropdownMenuDivider, DropdownMenuEmptyState, DropdownMenuCheckboxItem, DropdownMenuRadioItem } from "./DropdownMenu";
import { Pagination } from "./Pagination";
import { Modal, ModalSmall, ModalMedium, ModalLarge } from "./Modal";
import { BadgeShowcase } from "./BadgeShowcase";
import { CardContainer } from "./CardContainer";
import { Dropdown } from "./Dropdown";
import { DropdownWithCheckbox } from "./DropdownWithCheckbox";
import { ProgressStepper } from "./ProgressStepper";
import { RadioButton, RadioGroup } from "./RadioButton";
import { SegmentedControl } from "./SegmentedControl";
import { Toggle } from "./Toggle";
import { Chip } from "./Chip";
import { ChipShowcase } from "./ChipShowcase";
import { Grid, List, BarChart, TrendingUp, Search, Tag } from "lucide-react";
import HelpButton from "../../imports/HelpButton";
import ChevronDownIcon from "../../imports/ChevronDown";

export function ComponentsPage() {
  const [isModalSmallOpen, setIsModalSmallOpen] = useState(false);
  const [isModalMediumOpen, setIsModalMediumOpen] = useState(false);
  const [isModalLargeOpen, setIsModalLargeOpen] = useState(false);
  const [cardState, setCardState] = useState<'default' | 'hover' | 'selected'>('default');
  const [selectedRadioValue, setSelectedRadioValue] = useState("option1");
  const [segmentedProminentIconText, setSegmentedProminentIconText] = useState("grid");
  const [segmentedProminentIconOnly, setSegmentedProminentIconOnly] = useState("grid");
  const [segmentedProminentTextOnly, setSegmentedProminentTextOnly] = useState("popular");
  const [segmentedSubtleIconText, setSegmentedSubtleIconText] = useState("grid");
  const [segmentedSubtleIconOnly, setSegmentedSubtleIconOnly] = useState("grid");
  const [segmentedSubtleTextOnly, setSegmentedSubtleTextOnly] = useState("popular");
  const [toggleLabelLeft, setToggleLabelLeft] = useState(false);
  const [toggleLabelRight, setToggleLabelRight] = useState(true);
  const [toggleNoLabel, setToggleNoLabel] = useState(true);
  const [selectedChips, setSelectedChips] = useState<string[]>(["electronics"]);
  const [activeFilters, setActiveFilters] = useState<string[]>(["active", "pending"]);
  const [selectedRadio, setSelectedRadio] = useState("a");
  const [selectedSize, setSelectedSize] = useState("m");
  const [tabsPrimaryActive, setTabsPrimaryActive] = useState<'tab1' | 'tab2' | 'tab3'>('tab1');
  const [tabsSecondaryActive, setTabsSecondaryActive] = useState<'tab1' | 'tab2' | 'tab3'>('tab1');
  const [searchInputDemo, setSearchInputDemo] = useState("");
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [dropdownMenuSearchOpen, setDropdownMenuSearchOpen] = useState(false);
  const [dropdownMenuSearch, setDropdownMenuSearch] = useState("");
  const [dropdownCheckboxOpen, setDropdownCheckboxOpen] = useState(false);
  const [dropdownCheckboxSelected, setDropdownCheckboxSelected] = useState<Set<string>>(new Set());
  const [dropdownRadioOpen, setDropdownRadioOpen] = useState(false);
  const [dropdownRadioSelected, setDropdownRadioSelected] = useState("option1");
  const dropdownMenuTriggerRef = React.useRef<HTMLButtonElement>(null);
  const dropdownMenuSearchTriggerRef = React.useRef<HTMLButtonElement>(null);
  const dropdownCheckboxTriggerRef = React.useRef<HTMLButtonElement>(null);
  const dropdownRadioTriggerRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div className="w-full">
      {/* Grey Background Section - Title */}
      <div className="bg-[var(--partnerhome-surface-color-inversesubtle)] pb-0 pt-[var(--partnerhome-spacing-3000)] px-[var(--partnerhome-spacing-3000)]">
        {/* Title + Global CTAs Row */}
        <div className="h-[48px] relative mb-[var(--partnerhome-spacing-2000)]">
          {/* Page Title (left) */}
          <div className="absolute left-0 top-[4px]">
            <h1
              className="text-[var(--partnerhome-font-size-4000)] font-[var(--partnerhome-font-weight-bold)] text-[var(--partnerhome-text-color-base)]"
              style={{ fontFamily: "'Lato', 'Inter', sans-serif" }}
            >
              Reusable Components
            </h1>
          </div>

          {/* Help Button (right) */}
          <div className="absolute right-0 top-0 flex items-center gap-[var(--partnerhome-spacing-1000)]">
            <HelpButton />
          </div>
        </div>
      </div>

      {/* White Background Section - Components Content */}
      <div className="bg-white p-[var(--partnerhome-spacing-3000)]">
        <h2
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-3000)",
            fontWeight: "var(--partnerhome-font-weight-bold)",
            color: "var(--partnerhome-text-color-base)",
            marginBottom: "var(--partnerhome-spacing-2000)",
          }}
        >
          Component Library
        </h2>

        {/* 3-Column Grid Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--partnerhome-spacing-2000)",
          }}
        >
          {/* Buttons Component - Interactive Examples */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Buttons
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-2000)",
              }}
            >
              Interactive button styles with hover and active states.
            </p>

            <div className="flex flex-col gap-[var(--partnerhome-spacing-1500)]">
              {/* Primary Button */}
              <Button variant="primary">Primary Button</Button>

              {/* Primary Button with Icon */}
              <Button variant="primary" style={{ gap: "var(--partnerhome-spacing-1000)" }}>
                <Search size={20} style={{ color: "var(--partnerhome-text-color-inverse)" }} />
                <span style={{ color: "var(--partnerhome-text-color-inverse)" }}>Primary with Icon</span>
              </Button>

              {/* Secondary Button */}
              <Button variant="secondary">Secondary Button</Button>

              {/* Secondary Button with Icon */}
              <Button variant="secondary" style={{ gap: "var(--partnerhome-spacing-1000)" }}>
                <Tag size={20} style={{ color: "var(--partnerhome-text-color-primary)" }} />
                <span style={{ color: "var(--partnerhome-text-color-primary)" }}>Secondary with Icon</span>
              </Button>

              {/* Text/Link Button */}
              <Button variant="text">Text Button / Link</Button>

              {/* Text/Link Button with Icon */}
              <Button variant="text">
                <Search size={16} style={{ color: "var(--partnerhome-text-color-primary)" }} />
                <span style={{ color: "var(--partnerhome-text-color-primary)", textDecoration: "underline" }}>Text Link with Icon</span>
              </Button>

              {/* Icon-only Buttons (48x48px) */}
              <div style={{ display: "flex", gap: "var(--partnerhome-spacing-1000)", alignItems: "center" }}>
                <Button variant="icon-primary" aria-label="Search">
                  <Search size={20} />
                </Button>
                <Button variant="icon-secondary" aria-label="Filter">
                  <Tag size={20} />
                </Button>
                <span style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-1000)",
                  fontWeight: "var(--partnerhome-font-weight-normal)",
                  color: "var(--partnerhome-text-color-base)",
                  marginLeft: "var(--partnerhome-spacing-1000)",
                }}>Icon-only (48x48px)</span>
              </div>

              {/* Icon Ghost Buttons (48x48px) */}
              <div style={{ display: "flex", gap: "var(--partnerhome-spacing-1000)", alignItems: "center" }}>
                <Button variant="ghost" aria-label="Search">
                  <Search size={20} />
                </Button>
                <Button variant="ghost" aria-label="Filter">
                  <Tag size={20} />
                </Button>
                <span style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-1000)",
                  fontWeight: "var(--partnerhome-font-weight-normal)",
                  color: "var(--partnerhome-text-color-base)",
                  marginLeft: "var(--partnerhome-spacing-1000)",
                }}>Icon Ghost (48x48px)</span>
              </div>

              {/* Disabled Button Example */}
              <Button variant="primary" disabled>Disabled Button</Button>
            </div>
          </div>

          {/* Buttons Condensed */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Buttons Condensed
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-2000)",
              }}
            >
              Compact 32px height buttons with optional icon support.
            </p>

            <div className="flex flex-col gap-[var(--partnerhome-spacing-1500)]">
              {/* Primary Condensed */}
              <Button variant="primary" size="condensed">Primary Condensed</Button>

              {/* Primary Condensed with Icon */}
              <Button variant="primary" size="condensed" style={{ gap: "var(--partnerhome-spacing-1000)" }}>
                <Search size={16} style={{ color: "var(--partnerhome-text-color-inverse)" }} />
                <span style={{ color: "var(--partnerhome-text-color-inverse)" }}>With Icon</span>
              </Button>

              {/* Secondary Condensed */}
              <Button variant="secondary" size="condensed">Secondary Condensed</Button>

              {/* Secondary Condensed with Icon */}
              <Button variant="secondary" size="condensed" style={{ gap: "var(--partnerhome-spacing-1000)" }}>
                <Tag size={16} style={{ color: "var(--partnerhome-text-color-primary)" }} />
                <span style={{ color: "var(--partnerhome-text-color-primary)" }}>With Icon</span>
              </Button>

              {/* Text/Link Condensed */}
              <Button variant="text" size="condensed">Text Link</Button>

              {/* Text/Link Condensed with Icon */}
              <Button variant="text" size="condensed">
                <Search size={14} style={{ color: "var(--partnerhome-text-color-primary)" }} />
                <span style={{ color: "var(--partnerhome-text-color-primary)", textDecoration: "underline" }}>Text Link with Icon</span>
              </Button>

              {/* Icon-only Condensed (32x32px) */}
              <div style={{ display: "flex", gap: "var(--partnerhome-spacing-1000)", alignItems: "center" }}>
                <Button variant="icon-primary" size="condensed" aria-label="Search">
                  <Search size={16} />
                </Button>
                <Button variant="icon-secondary" size="condensed" aria-label="Filter">
                  <Tag size={16} />
                </Button>
                <span style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-1000)",
                  fontWeight: "var(--partnerhome-font-weight-normal)",
                  color: "var(--partnerhome-text-color-base)",
                  marginLeft: "var(--partnerhome-spacing-1000)",
                }}>Icon-only (32x32px)</span>
              </div>

              {/* Icon Ghost Condensed (32x32px) */}
              <div style={{ display: "flex", gap: "var(--partnerhome-spacing-1000)", alignItems: "center" }}>
                <Button variant="ghost" size="condensed" aria-label="Search">
                  <Search size={16} />
                </Button>
                <Button variant="ghost" size="condensed" aria-label="Filter">
                  <Tag size={16} />
                </Button>
                <span style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-1000)",
                  fontWeight: "var(--partnerhome-font-weight-normal)",
                  color: "var(--partnerhome-text-color-base)",
                  marginLeft: "var(--partnerhome-spacing-1000)",
                }}>Icon Ghost (32x32px)</span>
              </div>

              {/* Disabled Condensed */}
              <Button variant="primary" size="condensed" disabled>Disabled Condensed</Button>
            </div>
          </div>

          {/* Text Input Variations */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Text Inputs
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-2000)",
              }}
            >
              Text input with floating label and optional icon. For search inputs, use the SearchInput shorthand below.
            </p>

            <div className="flex flex-col gap-[var(--partnerhome-spacing-2000)]">
              <TextInput
                id="example-input-1"
                label="Username"
                value=""
                onChange={(e) => console.log('Input changed:', e.target.value)}
              />
              <TextInput
                id="example-input-2"
                label="Email Address"
                value=""
                onChange={(e) => console.log('Input changed:', e.target.value)}
              />
              <TextInput
                id="example-input-3"
                label="Phone Number"
                value=""
                onChange={(e) => console.log('Input changed:', e.target.value)}
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="var(--partnerhome-text-color-base)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                }
              />
            </div>
          </div>

          {/* SearchInput — Shorthand */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              SearchInput
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Shorthand wrapper around TextInput with search icon pre-configured.
              Use this instead of manually wiring <code style={{ background: "var(--partnerhome-bg-color-neutral-subtle)", padding: "2px 6px", borderRadius: "var(--partnerhome-radius-base)", fontFamily: "monospace", fontSize: "var(--partnerhome-font-size-500)" }}>&lt;TextInput icon=&#123;&lt;SearchIcon /&gt;&#125; /&gt;</code>.
            </p>
            <div className="flex flex-col gap-[var(--partnerhome-spacing-2000)]">
              <SearchInput
                value={searchInputDemo}
                onChange={(e) => setSearchInputDemo(e.target.value)}
              />
              <SearchInput
                label="Search products"
                value=""
                onChange={() => {}}
                containerStyle={{ width: "400px" }}
              />
            </div>
          </div>

          {/* DropdownMenu — Reusable Popover List */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              DropdownMenu
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-2000)",
              }}
            >
              Reusable popover menu primitive. Handles positioning, backdrop, search, and scrollable content. Compose with DropdownMenuItem for consistent list items.
            </p>
            <div style={{ display: "flex", gap: "var(--partnerhome-spacing-2000)", flexWrap: "wrap" }}>
              {/* Basic DropdownMenu */}
              <div style={{ position: "relative" }}>
                <Button
                  ref={dropdownMenuTriggerRef}
                  variant="secondary"
                  onClick={() => setDropdownMenuOpen(!dropdownMenuOpen)}
                >
                  Basic Menu
                </Button>
                <DropdownMenu
                  isOpen={dropdownMenuOpen}
                  onClose={() => setDropdownMenuOpen(false)}
                  triggerRef={dropdownMenuTriggerRef}
                  width={220}
                >
                  <DropdownMenuItem onClick={() => { console.log("Edit"); setDropdownMenuOpen(false); }}>Edit</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => { console.log("Duplicate"); setDropdownMenuOpen(false); }}>Duplicate</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => { console.log("Archive"); setDropdownMenuOpen(false); }}>Archive</DropdownMenuItem>
                  <DropdownMenuDivider />
                  <DropdownMenuItem onClick={() => { console.log("Delete"); setDropdownMenuOpen(false); }} style={{ color: "var(--partnerhome-text-color-negative)" }}>
                    <span style={{
                      fontFamily: "'Lato', 'Inter', sans-serif",
                      fontSize: "var(--partnerhome-font-size-1000)",
                      fontWeight: "var(--partnerhome-font-weight-normal)",
                      color: "var(--partnerhome-text-color-negative)",
                    }}>
                      Delete
                    </span>
                  </DropdownMenuItem>
                </DropdownMenu>
              </div>

              {/* Searchable DropdownMenu */}
              <div style={{ position: "relative" }}>
                <Button
                  ref={dropdownMenuSearchTriggerRef}
                  variant="secondary"
                  onClick={() => setDropdownMenuSearchOpen(!dropdownMenuSearchOpen)}
                >
                  Searchable Menu
                </Button>
                <DropdownMenu
                  isOpen={dropdownMenuSearchOpen}
                  onClose={() => { setDropdownMenuSearchOpen(false); setDropdownMenuSearch(""); }}
                  triggerRef={dropdownMenuSearchTriggerRef}
                  searchable
                  searchValue={dropdownMenuSearch}
                  onSearchChange={setDropdownMenuSearch}
                  width={280}
                  footer={
                    <>
                      <Button variant="secondary" onClick={() => { setDropdownMenuSearchOpen(false); setDropdownMenuSearch(""); }} style={{ flex: "1 1 0", minWidth: 0 }}>Cancel</Button>
                      <Button variant="primary" onClick={() => { setDropdownMenuSearchOpen(false); setDropdownMenuSearch(""); }} style={{ flex: "1 1 0", minWidth: 0 }}>Apply</Button>
                    </>
                  }
                >
                  {["Electronics", "Clothing", "Home & Garden", "Sports", "Books", "Toys"].filter(
                    item => item.toLowerCase().includes(dropdownMenuSearch.toLowerCase())
                  ).length > 0 ? (
                    ["Electronics", "Clothing", "Home & Garden", "Sports", "Books", "Toys"]
                      .filter(item => item.toLowerCase().includes(dropdownMenuSearch.toLowerCase()))
                      .map(item => (
                        <DropdownMenuItem key={item} onClick={() => console.log("Selected:", item)}>
                          {item}
                        </DropdownMenuItem>
                      ))
                  ) : (
                    <DropdownMenuEmptyState />
                  )}
                </DropdownMenu>
              </div>

              {/* Checkbox-list DropdownMenu */}
              <div style={{ position: "relative" }}>
                <Button
                  ref={dropdownCheckboxTriggerRef}
                  variant="secondary"
                  onClick={() => setDropdownCheckboxOpen(!dropdownCheckboxOpen)}
                >
                  Checkbox List
                </Button>
                <DropdownMenu
                  isOpen={dropdownCheckboxOpen}
                  onClose={() => setDropdownCheckboxOpen(false)}
                  triggerRef={dropdownCheckboxTriggerRef}
                  width={280}
                  footer={
                    <>
                      <Button variant="secondary" onClick={() => { setDropdownCheckboxSelected(new Set()); setDropdownCheckboxOpen(false); }} style={{ flex: "1 1 0", minWidth: 0 }}>Reset</Button>
                      <Button variant="primary" onClick={() => setDropdownCheckboxOpen(false)} style={{ flex: "1 1 0", minWidth: 0 }}>Apply</Button>
                    </>
                  }
                >
                  {["Active", "Pending", "Inactive", "Archived"].map(item => (
                    <DropdownMenuCheckboxItem
                      key={item}
                      label={item}
                      checked={dropdownCheckboxSelected.has(item)}
                      onChange={(checked) => {
                        const next = new Set(dropdownCheckboxSelected);
                        if (checked) next.add(item); else next.delete(item);
                        setDropdownCheckboxSelected(next);
                      }}
                      count={Math.floor(Math.random() * 50 + 1)}
                    />
                  ))}
                </DropdownMenu>
              </div>

              {/* Radio-list DropdownMenu */}
              <div style={{ position: "relative" }}>
                <Button
                  ref={dropdownRadioTriggerRef}
                  variant="secondary"
                  onClick={() => setDropdownRadioOpen(!dropdownRadioOpen)}
                >
                  Radio List
                </Button>
                <DropdownMenu
                  isOpen={dropdownRadioOpen}
                  onClose={() => setDropdownRadioOpen(false)}
                  triggerRef={dropdownRadioTriggerRef}
                  width={260}
                >
                  {[
                    { id: "option1", label: "Date Created" },
                    { id: "option2", label: "Last Modified" },
                    { id: "option3", label: "Name (A–Z)" },
                    { id: "option4", label: "Priority" },
                  ].map(item => (
                    <DropdownMenuRadioItem
                      key={item.id}
                      label={item.label}
                      selected={dropdownRadioSelected === item.id}
                      onSelect={() => { setDropdownRadioSelected(item.id); setDropdownRadioOpen(false); }}
                    />
                  ))}
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Modal Sizes - Multiple Button Types */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Modals
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-2000)",
              }}
            >
              Modal dialogs in three sizes: Small, Medium, and Large.
            </p>

            <div className="flex flex-col gap-[var(--partnerhome-spacing-1500)]">
              {/* Small Modal Button */}
              <Button variant="secondary" onClick={() => setIsModalSmallOpen(true)}>
                Small Modal
              </Button>

              {/* Medium Modal Button */}
              <Button variant="secondary" onClick={() => setIsModalMediumOpen(true)}>
                Medium Modal
              </Button>

              {/* Large Modal Button */}
              <Button variant="primary" onClick={() => setIsModalLargeOpen(true)}>
                Large Modal
              </Button>
            </div>
          </div>

          {/* Sort Dropdown Component */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Sort Dropdown
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-2000)",
              }}
            >
              Sort dropdown with radio options and direction controls.
            </p>

            <div className="flex gap-[var(--partnerhome-spacing-2000)] items-start flex-wrap">
              <SortDropdown
                options={[
                  { id: 'name', label: 'Name' },
                  { id: 'status', label: 'Status' },
                  { id: 'category', label: 'Category' },
                  { id: 'date', label: 'Date' },
                  { id: 'amount', label: 'Amount' },
                  { id: 'supplier', label: 'Supplier' },
                  { id: 'location', label: 'Location' },
                ]}
                selectedOption="name"
                sortDirection="asc"
                onApply={(option, direction) => console.log('Selected:', option, 'Direction:', direction)}
              />
            </div>
          </div>

          {/* Segment Control Dropdown Component */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Segment Control Dropdown
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-2000)",
              }}
            >
              Segment dropdown with single select radio options.
            </p>

            <div className="flex gap-[var(--partnerhome-spacing-2000)] items-start flex-wrap">
              <SegmentControlDropdown
                label="Segment"
                options={[
                  { id: 'all', label: 'All Segments' },
                  { id: 'electronics', label: 'Electronics' },
                  { id: 'home-goods', label: 'Home Goods' },
                  { id: 'clothing', label: 'Clothing' },
                ]}
                selectedOption="all"
                onApply={(option) => console.log('Selected:', option)}
                triggerStyle="text"
              />
            </div>
          </div>

          {/* Quick Filter Dropdown Component */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Quick Filter Dropdowns
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-2000)",
              }}
            >
              Various quick filter variants with different features and complexity levels.
            </p>

            <div className="flex flex-col gap-[var(--partnerhome-spacing-3000)]">
              {/* Basic Quick Filter */}
              <div>
                <h4
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-bold)",
                    color: "var(--partnerhome-text-color-base)",
                    marginBottom: "var(--partnerhome-spacing-1000)",
                  }}
                >
                  Basic Quick Filter
                </h4>
                <p
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    color: "var(--partnerhome-text-color-base)",
                    marginBottom: "var(--partnerhome-spacing-1500)",
                    lineHeight: "var(--partnerhome-line-height-base)",
                  }}
                >
                  Simple filter with flat list of options and item counts.
                </p>
                <QuickFilterDropdown
                  options={[
                    { id: 'all', label: 'All Items', count: 5 },
                    { id: 'active', label: 'Active', count: 3 },
                    { id: 'pending', label: 'Pending', count: 1 },
                    { id: 'inactive', label: 'Inactive', count: 1 },
                  ]}
                  selectedOption="all"
                  onApply={(option) => console.log('Filter applied:', option)}
                  triggerStyle="text"
                />
              </div>

              {/* Hierarchy Quick Filter */}
              <div>
                <h4
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-bold)",
                    color: "var(--partnerhome-text-color-base)",
                    marginBottom: "var(--partnerhome-spacing-1000)",
                  }}
                >
                  Hierarchy Quick Filter
                </h4>
                <p
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    color: "var(--partnerhome-text-color-base)",
                    marginBottom: "var(--partnerhome-spacing-1500)",
                    lineHeight: "var(--partnerhome-line-height-base)",
                  }}
                >
                  Nested checkboxes with parent-child relationships. Parent selection selects all children.
                </p>
                <QuickFilterHierarchy
                  options={[
                    {
                      id: 'electronics',
                      label: 'Electronics',
                      count: 25,
                      children: [
                        { id: 'phones', label: 'Phones', count: 10 },
                        { id: 'laptops', label: 'Laptops', count: 8 },
                        { id: 'tablets', label: 'Tablets', count: 7 },
                      ],
                    },
                    {
                      id: 'clothing',
                      label: 'Clothing',
                      count: 18,
                      children: [
                        { id: 'mens', label: "Men's", count: 9 },
                        { id: 'womens', label: "Women's", count: 9 },
                      ],
                    },
                    {
                      id: 'home',
                      label: 'Home & Garden',
                      count: 12,
                      children: [
                        { id: 'furniture', label: 'Furniture', count: 6 },
                        { id: 'decor', label: 'Decor', count: 6 },
                      ],
                    },
                  ]}
                  selectedIds={[]}
                  onApply={(ids) => console.log('Selected IDs:', ids)}
                  triggerStyle="text"
                />
              </div>

              {/* Advanced Filter with Chips */}
              <div>
                <h4
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-bold)",
                    color: "var(--partnerhome-text-color-base)",
                    marginBottom: "var(--partnerhome-spacing-1000)",
                  }}
                >
                  Advanced Filter with Chips & Categories
                </h4>
                <p
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    color: "var(--partnerhome-text-color-base)",
                    marginBottom: "var(--partnerhome-spacing-1500)",
                    lineHeight: "var(--partnerhome-line-height-base)",
                  }}
                >
                  Complex filter with chip shortcuts, categorized sections with dividers, and nested checkboxes. Click chips to select all in category and scroll to section.
                </p>
                <QuickFilterWithChips
                  categories={[
                    {
                      id: 'status',
                      label: 'Status',
                      options: [
                        { id: 'active', label: 'Active', count: 45 },
                        { id: 'pending', label: 'Pending', count: 12 },
                        { id: 'inactive', label: 'Inactive', count: 8 },
                      ],
                    },
                    {
                      id: 'priority',
                      label: 'Priority',
                      options: [
                        {
                          id: 'high',
                          label: 'High Priority',
                          count: 15,
                          children: [
                            { id: 'urgent', label: 'Urgent', count: 5 },
                            { id: 'critical', label: 'Critical', count: 10 },
                          ],
                        },
                        { id: 'medium', label: 'Medium Priority', count: 30 },
                        { id: 'low', label: 'Low Priority', count: 20 },
                      ],
                    },
                    {
                      id: 'category',
                      label: 'Category',
                      options: [
                        {
                          id: 'products',
                          label: 'Products',
                          count: 28,
                          children: [
                            { id: 'physical', label: 'Physical', count: 18 },
                            { id: 'digital', label: 'Digital', count: 10 },
                          ],
                        },
                        { id: 'services', label: 'Services', count: 22 },
                        { id: 'subscriptions', label: 'Subscriptions', count: 15 },
                      ],
                    },
                  ]}
                  selectedIds={[]}
                  onApply={(ids) => console.log('Selected IDs:', ids)}
                  triggerStyle="text"
                />
              </div>
            </div>
          </div>

          {/* Standard Dropdown Component */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Standard Dropdown
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-2000)",
              }}
            >
              Standard dropdown with options and Apply/Cancel.
            </p>

            <Dropdown
              label="Category"
              options={[
                { id: 'electronics', label: 'Electronics' },
                { id: 'home-goods', label: 'Home Goods' },
                { id: 'clothing', label: 'Clothing' },
              ]}
              value=""
              onChange={(value) => console.log('Selected:', value)}
            />
          </div>

          {/* Dropdown with Checkbox Component */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Dropdown with Checkboxes
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-2000)",
              }}
            >
              Multi-select dropdown with checkboxes.
            </p>

            <DropdownWithCheckbox
              label="Select Options"
              options={[
                { id: 'option1', label: 'Option 1' },
                { id: 'option2', label: 'Option 2' },
                { id: 'option3', label: 'Option 3' },
              ]}
              selectedValues={[]}
              onChange={(values) => console.log('Selected values:', values)}
            />
          </div>

          {/* Dropdown with Images and Checkboxes */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Dropdown with Images
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-2000)",
              }}
            >
              Multi-select dropdown with checkboxes and images.
            </p>

            <DropdownWithCheckbox
              label="Select Products"
              options={[
                { 
                  id: 'product1', 
                  label: 'Wireless Headphones',
                  subtitle: 'Electronics',
                  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120&h=120&fit=crop'
                },
                { 
                  id: 'product2', 
                  label: 'Smart Watch',
                  subtitle: 'Wearables',
                  image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=120&h=120&fit=crop'
                },
                { 
                  id: 'product3', 
                  label: 'Laptop Bag',
                  subtitle: 'Accessories',
                  image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=120&h=120&fit=crop'
                },
                { 
                  id: 'product4', 
                  label: 'Coffee Mug',
                  subtitle: 'Home & Kitchen',
                  image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=120&h=120&fit=crop'
                },
              ]}
              selectedValues={[]}
              onChange={(values) => console.log('Selected products:', values)}
            />
          </div>

          {/* Dropdown with Subtitles Only */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Dropdown with Subtitles
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-2000)",
              }}
            >
              Multi-select dropdown with subtitles and disabled options.
            </p>

            <DropdownWithCheckbox
              label="Select Team Members"
              options={[
                { 
                  id: 'user1', 
                  label: 'John Smith',
                  subtitle: 'Product Manager'
                },
                { 
                  id: 'user2', 
                  label: 'Sarah Johnson',
                  subtitle: 'Senior Designer'
                },
                { 
                  id: 'user3', 
                  label: 'Mike Chen',
                  subtitle: 'Engineering Lead',
                  disabled: true
                },
                { 
                  id: 'user4', 
                  label: 'Emily Davis',
                  subtitle: 'UX Researcher'
                },
              ]}
              selectedValues={['user1']}
              onChange={(values) => console.log('Selected team members:', values)}
            />
          </div>

          {/* Pagination Component */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Pagination
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-2000)",
              }}
            >
              Pagination controls with rows per page selector.
            </p>

            <Pagination
              currentPage={1}
              totalPages={5}
              rowsPerPage={50}
              onPageChange={(page) => console.log('Page changed:', page)}
              onRowsPerPageChange={(rows) => console.log('Rows per page changed:', rows)}
            />
          </div>

          {/* Badge Components — rendered from BadgeShowcase (uses reusable Badge component) */}
          <BadgeShowcase />

          {/* Card Container Component */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Card Container
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-2000)",
                lineHeight: "var(--partnerhome-line-height-base)",
              }}
            >
              Flexible card container with default (no elevation), hover, and active states. Adjustable width/height. Can contain any content.
            </p>

            {/* Card Example */}
            <CardContainer style={{ maxWidth: "500px", marginBottom: "var(--partnerhome-spacing-2000)" }}>
              <h4
                style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-2000)",
                  fontWeight: "var(--partnerhome-font-weight-bold)",
                  color: "var(--partnerhome-text-color-base)",
                  marginBottom: "var(--partnerhome-spacing-2000)",
                }}
              >
                Card Title
              </h4>

              {/* Primary Action Button */}
              <Button
                variant="primary"
                style={{ width: "100%", marginBottom: "var(--partnerhome-spacing-1000)" }}
              >
                Primary Action
              </Button>

              {/* Secondary Button */}
              <Button
                variant="secondary"
                style={{ width: "100%", marginBottom: "var(--partnerhome-spacing-2000)" }}
              >
                Secondary
              </Button>

              {/* View more details link */}
              <a
                href="#"
                style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-1000)",
                  fontWeight: "var(--partnerhome-font-weight-normal)",
                  color: "var(--partnerhome-text-color-primary)",
                  textDecoration: "underline",
                  display: "block",
                  marginBottom: "var(--partnerhome-spacing-2000)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--partnerhome-text-color-primary-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--partnerhome-text-color-primary)";
                }}
              >
                View more details →
              </a>

              {/* Dropdown */}
              <Dropdown
                label="Select Option"
                options={[
                  { id: "option1", label: "Option 1" },
                  { id: "option2", label: "Option 2" },
                  { id: "option3", label: "Option 3" },
                ]}
              />
            </CardContainer>
          </div>

          {/* Progress Stepper Component */}
          <div
            className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
            style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
          >
            <h3
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-2000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Progress Stepper
            </h3>
            <p
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-2000)",
                lineHeight: "var(--partnerhome-line-height-base)",
              }}
            >
              Guide users through multi-step processes with horizontal or vertical layouts (3-6 steps).
            </p>

            {/* Vertical Progress Stepper Example */}
            <div style={{ marginBottom: "var(--partnerhome-spacing-3000)" }}>
              <h4
                style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-1000)",
                  fontWeight: "var(--partnerhome-font-weight-bold)",
                  color: "var(--partnerhome-text-color-base)",
                  marginBottom: "var(--partnerhome-spacing-2000)",
                }}
              >
                Vertical Stepper
              </h4>
              <ProgressStepper
                orientation="vertical"
                currentStep={3}
                steps={[
                  { number: 1, label: "Select Product" },
                  { number: 2, label: "Add Details" },
                  { number: 3, label: "Review Order" },
                  { number: 4, label: "Payment" },
                  { number: 5, label: "Confirmation" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Progress Stepper - Full Width Container */}
      <div className="w-full max-w-screen-2xl mx-auto px-[var(--partnerhome-spacing-3000)] mb-[var(--partnerhome-spacing-4000)]">
        <div
          className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
          style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
        >
          <h3
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-2000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-1000)",
            }}
          >
            Horizontal Progress Stepper
          </h3>
          <p
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-2000)",
              lineHeight: "var(--partnerhome-line-height-base)",
            }}
          >
            Default orientation for guiding users through multi-step processes (left to right).
          </p>
          <ProgressStepper
            orientation="horizontal"
            currentStep={2}
            steps={[
              { number: 1, label: "Account" },
              { number: 2, label: "Profile" },
              { number: 3, label: "Preferences" },
              { number: 4, label: "Security" },
              { number: 5, label: "Review" },
              { number: 6, label: "Complete" },
            ]}
          />
        </div>
      </div>

      {/* Tabs Component */}
      <div className="w-full max-w-screen-2xl mx-auto px-[var(--partnerhome-spacing-3000)] mb-[var(--partnerhome-spacing-4000)]">
        <h2
          style={{
            fontFamily: "'Lato', 'Inter', sans-serif",
            fontSize: "var(--partnerhome-font-size-3000)",
            fontWeight: "var(--partnerhome-font-weight-bold)",
            color: "var(--partnerhome-text-color-base)",
            marginBottom: "var(--partnerhome-spacing-2000)",
          }}
        >
          Tabs
        </h2>

        {/* Primary Tabs */}
        <div
          className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)] mb-[var(--partnerhome-spacing-3000)]"
          style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
        >
          <h3
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-2000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-1000)",
            }}
          >
            Primary Tabs
          </h3>
          <p
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-2000)",
              lineHeight: "var(--partnerhome-line-height-base)",
            }}
          >
            Used for primary page navigation with prominent top border on selected state. Best for switching between major sections or views.
          </p>

          {/* Primary Tabs Example */}
          <div style={{ background: "var(--partnerhome-surface-color-inversesubtle)", padding: "var(--partnerhome-spacing-2000)", borderRadius: "var(--partnerhome-radius-medium)" }}>
            <div className="relative flex items-end gap-0">
              <div className="flex gap-0">
                <button
                  onClick={() => setTabsPrimaryActive('tab1')}
                  onMouseEnter={(e) => {
                    if (tabsPrimaryActive !== 'tab1') {
                      e.currentTarget.style.backgroundColor = 'var(--partnerhome-surface-color-primarysubtle)';
                      e.currentTarget.style.borderTop = '2px solid var(--partnerhome-border-color-primary)';
                      e.currentTarget.style.paddingTop = '0';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (tabsPrimaryActive !== 'tab1') {
                      e.currentTarget.style.backgroundColor = 'var(--partnerhome-bg-color-neutralsubtle)';
                      e.currentTarget.style.borderTop = 'none';
                      e.currentTarget.style.paddingTop = '2px';
                    }
                  }}
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: tabsPrimaryActive === 'tab1' ? "var(--partnerhome-font-weight-bold)" : "var(--partnerhome-font-weight-normal)",
                    color: tabsPrimaryActive === 'tab1' ? "var(--partnerhome-text-color-primary)" : "var(--partnerhome-text-color-base)",
                    backgroundColor: tabsPrimaryActive === 'tab1' ? 'white' : 'var(--partnerhome-bg-color-neutralsubtle)',
                    borderTop: tabsPrimaryActive === 'tab1' ? "2px solid var(--partnerhome-border-color-primary)" : "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom: tabsPrimaryActive === 'tab1' ? "2px solid white" : "none",
                    paddingTop: tabsPrimaryActive === 'tab1' ? '0' : '2px',
                    paddingBottom: '0',
                    paddingLeft: "var(--partnerhome-spacing-2000)",
                    paddingRight: "var(--partnerhome-spacing-2000)",
                    height: "48px",
                    boxSizing: "border-box",
                    transition: "background-color 150ms ease, color 150ms ease",
                    cursor: "pointer"
                  }}
                >
                  Overview
                </button>
                <button
                  onClick={() => setTabsPrimaryActive('tab2')}
                  onMouseEnter={(e) => {
                    if (tabsPrimaryActive !== 'tab2') {
                      e.currentTarget.style.backgroundColor = 'var(--partnerhome-surface-color-primarysubtle)';
                      e.currentTarget.style.borderTop = '2px solid var(--partnerhome-border-color-primary)';
                      e.currentTarget.style.paddingTop = '0';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (tabsPrimaryActive !== 'tab2') {
                      e.currentTarget.style.backgroundColor = 'var(--partnerhome-bg-color-neutralsubtle)';
                      e.currentTarget.style.borderTop = 'none';
                      e.currentTarget.style.paddingTop = '2px';
                    }
                  }}
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: tabsPrimaryActive === 'tab2' ? "var(--partnerhome-font-weight-bold)" : "var(--partnerhome-font-weight-normal)",
                    color: tabsPrimaryActive === 'tab2' ? "var(--partnerhome-text-color-primary)" : "var(--partnerhome-text-color-base)",
                    backgroundColor: tabsPrimaryActive === 'tab2' ? 'white' : 'var(--partnerhome-bg-color-neutralsubtle)',
                    borderTop: tabsPrimaryActive === 'tab2' ? "2px solid var(--partnerhome-border-color-primary)" : "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom: tabsPrimaryActive === 'tab2' ? "2px solid white" : "none",
                    paddingTop: tabsPrimaryActive === 'tab2' ? '0' : '2px',
                    paddingBottom: '0',
                    paddingLeft: "var(--partnerhome-spacing-2000)",
                    paddingRight: "var(--partnerhome-spacing-2000)",
                    height: "48px",
                    boxSizing: "border-box",
                    transition: "background-color 150ms ease, color 150ms ease",
                    cursor: "pointer"
                  }}
                >
                  Analytics
                </button>
                <button
                  onClick={() => setTabsPrimaryActive('tab3')}
                  onMouseEnter={(e) => {
                    if (tabsPrimaryActive !== 'tab3') {
                      e.currentTarget.style.backgroundColor = 'var(--partnerhome-surface-color-primarysubtle)';
                      e.currentTarget.style.borderTop = '2px solid var(--partnerhome-border-color-primary)';
                      e.currentTarget.style.paddingTop = '0';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (tabsPrimaryActive !== 'tab3') {
                      e.currentTarget.style.backgroundColor = 'var(--partnerhome-bg-color-neutralsubtle)';
                      e.currentTarget.style.borderTop = 'none';
                      e.currentTarget.style.paddingTop = '2px';
                    }
                  }}
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: tabsPrimaryActive === 'tab3' ? "var(--partnerhome-font-weight-bold)" : "var(--partnerhome-font-weight-normal)",
                    color: tabsPrimaryActive === 'tab3' ? "var(--partnerhome-text-color-primary)" : "var(--partnerhome-text-color-base)",
                    backgroundColor: tabsPrimaryActive === 'tab3' ? 'white' : 'var(--partnerhome-bg-color-neutralsubtle)',
                    borderTop: tabsPrimaryActive === 'tab3' ? "2px solid var(--partnerhome-border-color-primary)" : "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom: tabsPrimaryActive === 'tab3' ? "2px solid white" : "none",
                    paddingTop: tabsPrimaryActive === 'tab3' ? '0' : '2px',
                    paddingBottom: '0',
                    paddingLeft: "var(--partnerhome-spacing-2000)",
                    paddingRight: "var(--partnerhome-spacing-2000)",
                    height: "48px",
                    boxSizing: "border-box",
                    transition: "background-color 150ms ease, color 150ms ease",
                    cursor: "pointer"
                  }}
                >
                  Settings
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div style={{ 
              background: "white", 
              padding: "var(--partnerhome-spacing-3000)",
              borderRadius: "0 0 var(--partnerhome-radius-medium) var(--partnerhome-radius-medium)"
            }}>
              <p style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                lineHeight: "var(--partnerhome-line-height-base)",
              }}>
                {tabsPrimaryActive === 'tab1' && 'Overview content goes here.'}
                {tabsPrimaryActive === 'tab2' && 'Analytics content goes here.'}
                {tabsPrimaryActive === 'tab3' && 'Settings content goes here.'}
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Tabs */}
        <div
          className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
          style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
        >
          <h3
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-2000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-1000)",
            }}
          >
            Secondary Tabs
          </h3>
          <p
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-2000)",
              lineHeight: "var(--partnerhome-line-height-base)",
            }}
          >
            Simpler tabs with bottom border indicator. Use for secondary navigation or sub-sections within a page.
          </p>

          {/* Secondary Tabs Example */}
          <div style={{ background: "white", padding: "var(--partnerhome-spacing-2000)", borderRadius: "var(--partnerhome-radius-medium)" }}>
            <div style={{ borderBottom: "1px solid var(--partnerhome-border-color-base)" }}>
              <div className="flex gap-0">
                <button
                  onClick={() => setTabsSecondaryActive('tab1')}
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: tabsSecondaryActive === 'tab1' ? "var(--partnerhome-font-weight-bold)" : "var(--partnerhome-font-weight-normal)",
                    color: tabsSecondaryActive === 'tab1' ? "var(--partnerhome-text-color-primaryactive)" : "var(--partnerhome-text-color-base)",
                    backgroundColor: "transparent",
                    border: "none",
                    borderBottom: tabsSecondaryActive === 'tab1' ? "2px solid var(--partnerhome-border-color-primary)" : "2px solid transparent",
                    paddingTop: "var(--partnerhome-spacing-1000)",
                    paddingBottom: "var(--partnerhome-spacing-1000)",
                    paddingLeft: "var(--partnerhome-spacing-2000)",
                    paddingRight: "var(--partnerhome-spacing-2000)",
                    marginBottom: "-1px",
                    boxSizing: "border-box",
                    transition: "color 150ms ease, border-color 150ms ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    if (tabsSecondaryActive !== 'tab1') {
                      e.currentTarget.style.color = "var(--partnerhome-text-color-secondaryhover)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (tabsSecondaryActive !== 'tab1') {
                      e.currentTarget.style.color = "var(--partnerhome-text-color-base)";
                    }
                  }}
                >
                  Details
                </button>
                <button
                  onClick={() => setTabsSecondaryActive('tab2')}
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: tabsSecondaryActive === 'tab2' ? "var(--partnerhome-font-weight-bold)" : "var(--partnerhome-font-weight-normal)",
                    color: tabsSecondaryActive === 'tab2' ? "var(--partnerhome-text-color-primaryactive)" : "var(--partnerhome-text-color-base)",
                    backgroundColor: "transparent",
                    border: "none",
                    borderBottom: tabsSecondaryActive === 'tab2' ? "2px solid var(--partnerhome-border-color-primary)" : "2px solid transparent",
                    paddingTop: "var(--partnerhome-spacing-1000)",
                    paddingBottom: "var(--partnerhome-spacing-1000)",
                    paddingLeft: "var(--partnerhome-spacing-2000)",
                    paddingRight: "var(--partnerhome-spacing-2000)",
                    marginBottom: "-1px",
                    boxSizing: "border-box",
                    transition: "color 150ms ease, border-color 150ms ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    if (tabsSecondaryActive !== 'tab2') {
                      e.currentTarget.style.color = "var(--partnerhome-text-color-secondaryhover)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (tabsSecondaryActive !== 'tab2') {
                      e.currentTarget.style.color = "var(--partnerhome-text-color-base)";
                    }
                  }}
                >
                  History
                </button>
                <button
                  onClick={() => setTabsSecondaryActive('tab3')}
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: tabsSecondaryActive === 'tab3' ? "var(--partnerhome-font-weight-bold)" : "var(--partnerhome-font-weight-normal)",
                    color: tabsSecondaryActive === 'tab3' ? "var(--partnerhome-text-color-primaryactive)" : "var(--partnerhome-text-color-base)",
                    backgroundColor: "transparent",
                    border: "none",
                    borderBottom: tabsSecondaryActive === 'tab3' ? "2px solid var(--partnerhome-border-color-primary)" : "2px solid transparent",
                    paddingTop: "var(--partnerhome-spacing-1000)",
                    paddingBottom: "var(--partnerhome-spacing-1000)",
                    paddingLeft: "var(--partnerhome-spacing-2000)",
                    paddingRight: "var(--partnerhome-spacing-2000)",
                    marginBottom: "-1px",
                    boxSizing: "border-box",
                    transition: "color 150ms ease, border-color 150ms ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    if (tabsSecondaryActive !== 'tab3') {
                      e.currentTarget.style.color = "var(--partnerhome-text-color-secondaryhover)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (tabsSecondaryActive !== 'tab3') {
                      e.currentTarget.style.color = "var(--partnerhome-text-color-base)";
                    }
                  }}
                >
                  Notes
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div style={{ 
              padding: "var(--partnerhome-spacing-2000) 0",
            }}>
              <p style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-normal)",
                color: "var(--partnerhome-text-color-base)",
                lineHeight: "var(--partnerhome-line-height-base)",
              }}>
                {tabsSecondaryActive === 'tab1' && 'Details content goes here.'}
                {tabsSecondaryActive === 'tab2' && 'History content goes here.'}
                {tabsSecondaryActive === 'tab3' && 'Notes content goes here.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Radio Button Component */}
      <div className="w-full max-w-screen-2xl mx-auto px-[var(--partnerhome-spacing-3000)] mb-[var(--partnerhome-spacing-4000)]">
        <div
          className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
          style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
        >
          <h3
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-2000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-1000)",
            }}
          >
            Radio Buttons
          </h3>
          <p
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-2000)",
              lineHeight: "var(--partnerhome-line-height-base)",
            }}
          >
            Enable users to select exactly one choice from a list of two or more options.
          </p>
          <RadioGroup
            name="payment-method"
            value={selectedRadioValue}
            onChange={setSelectedRadioValue}
            options={[
              { label: "Credit Card", value: "option1" },
              { label: "PayPal", value: "option2" },
              { label: "Bank Transfer", value: "option3" },
              { label: "Cash on Delivery", value: "option4", disabled: true },
            ]}
          />
        </div>
      </div>

      {/* Segmented Control Component */}
      <div className="w-full max-w-screen-2xl mx-auto px-[var(--partnerhome-spacing-3000)] mb-[var(--partnerhome-spacing-4000)]">
        <div
          className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
          style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
        >
          <h3
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-2000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-1000)",
            }}
          >
            Segmented Control
          </h3>
          <p
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-3000)",
              lineHeight: "var(--partnerhome-line-height-base)",
            }}
          >
            A horizontal group of 2-4 button-like segments for mutually exclusive actions. Use to sort or modify content display when options are predefined and limited.
          </p>

          {/* Two-column layout for Prominent vs Subtle */}
          <div style={{ display: "flex", gap: "var(--partnerhome-spacing-3000)" }}>
            {/* Prominent Emphasis */}
            <div style={{ flex: "1" }}>
              <h4
                style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-1000)",
                  fontWeight: "var(--partnerhome-font-weight-bold)",
                  color: "var(--partnerhome-text-color-base)",
                  marginBottom: "var(--partnerhome-spacing-2000)",
                }}
              >
                Prominent
              </h4>

              {/* Icon + Text */}
              <div style={{ marginBottom: "var(--partnerhome-spacing-2000)" }}>
                <p
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    color: "var(--partnerhome-text-color-base)",
                    marginBottom: "var(--partnerhome-spacing-1000)",
                  }}
                >
                  Icon + Text
                </p>
                <SegmentedControl
                  emphasis="prominent"
                  displayMode="icon-text"
                  value={segmentedProminentIconText}
                  onChange={setSegmentedProminentIconText}
                  options={[
                    { value: "grid", label: "Grid", icon: <Grid size={24} strokeWidth={1.5} /> },
                    { value: "list", label: "List", icon: <List size={24} strokeWidth={1.5} /> },
                  ]}
                />
              </div>

              {/* Icon Only */}
              <div style={{ marginBottom: "var(--partnerhome-spacing-2000)" }}>
                <p
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    color: "var(--partnerhome-text-color-base)",
                    marginBottom: "var(--partnerhome-spacing-1000)",
                  }}
                >
                  Icon Only
                </p>
                <SegmentedControl
                  emphasis="prominent"
                  displayMode="icon-only"
                  value={segmentedProminentIconOnly}
                  onChange={setSegmentedProminentIconOnly}
                  options={[
                    { value: "grid", icon: <Grid size={24} strokeWidth={1.5} /> },
                    { value: "list", icon: <List size={24} strokeWidth={1.5} /> },
                    { value: "chart", icon: <BarChart size={24} strokeWidth={1.5} /> },
                  ]}
                />
              </div>

              {/* Text Only */}
              <div>
                <p
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    color: "var(--partnerhome-text-color-base)",
                    marginBottom: "var(--partnerhome-spacing-1000)",
                  }}
                >
                  Text Only
                </p>
                <SegmentedControl
                  emphasis="prominent"
                  displayMode="text-only"
                  value={segmentedProminentTextOnly}
                  onChange={setSegmentedProminentTextOnly}
                  options={[
                    { value: "popular", label: "Popular" },
                    { value: "recent", label: "Recent" },
                    { value: "trending", label: "Trending" },
                    { value: "favorites", label: "Favorites", disabled: true },
                  ]}
                />
              </div>
            </div>

            {/* Subtle Emphasis */}
            <div style={{ flex: "1" }}>
              <h4
                style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: "var(--partnerhome-font-size-1000)",
                  fontWeight: "var(--partnerhome-font-weight-bold)",
                  color: "var(--partnerhome-text-color-base)",
                  marginBottom: "var(--partnerhome-spacing-2000)",
                }}
              >
                Subtle
              </h4>

              {/* Icon + Text */}
              <div style={{ marginBottom: "var(--partnerhome-spacing-2000)" }}>
                <p
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    color: "var(--partnerhome-text-color-base)",
                    marginBottom: "var(--partnerhome-spacing-1000)",
                  }}
                >
                  Icon + Text
                </p>
                <SegmentedControl
                  emphasis="subtle"
                  displayMode="icon-text"
                  value={segmentedSubtleIconText}
                  onChange={setSegmentedSubtleIconText}
                  options={[
                    { value: "grid", label: "Grid", icon: <Grid size={24} strokeWidth={1.5} /> },
                    { value: "list", label: "List", icon: <List size={24} strokeWidth={1.5} /> },
                  ]}
                />
              </div>

              {/* Icon Only */}
              <div style={{ marginBottom: "var(--partnerhome-spacing-2000)" }}>
                <p
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    color: "var(--partnerhome-text-color-base)",
                    marginBottom: "var(--partnerhome-spacing-1000)",
                  }}
                >
                  Icon Only
                </p>
                <SegmentedControl
                  emphasis="subtle"
                  displayMode="icon-only"
                  value={segmentedSubtleIconOnly}
                  onChange={setSegmentedSubtleIconOnly}
                  options={[
                    { value: "grid", icon: <Grid size={24} strokeWidth={1.5} /> },
                    { value: "list", icon: <List size={24} strokeWidth={1.5} /> },
                    { value: "chart", icon: <BarChart size={24} strokeWidth={1.5} /> },
                  ]}
                />
              </div>

              {/* Text Only */}
              <div>
                <p
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    fontWeight: "var(--partnerhome-font-weight-normal)",
                    color: "var(--partnerhome-text-color-base)",
                    marginBottom: "var(--partnerhome-spacing-1000)",
                  }}
                >
                  Text Only
                </p>
                <SegmentedControl
                  emphasis="subtle"
                  displayMode="text-only"
                  value={segmentedSubtleTextOnly}
                  onChange={setSegmentedSubtleTextOnly}
                  options={[
                    { value: "popular", label: "Popular" },
                    { value: "recent", label: "Recent" },
                    { value: "trending", label: "Trending" },
                    { value: "favorites", label: "Favorites", disabled: true },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Component */}
      <div className="w-full max-w-screen-2xl mx-auto px-[var(--partnerhome-spacing-3000)] mb-[var(--partnerhome-spacing-4000)]">
        <div
          className="p-[var(--partnerhome-spacing-2000)] bg-[var(--partnerhome-bg-color-global-body)] rounded-[var(--partnerhome-radius-large)]"
          style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
        >
          <h3
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-2000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-1000)",
            }}
          >
            Toggle Component
          </h3>
          <p
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              color: "var(--partnerhome-text-color-base)",
              lineHeight: "var(--partnerhome-line-height-base)",
              marginBottom: "var(--partnerhome-spacing-2000)",
            }}
          >
            Toggles enable users to turn a feature on and off. Use toggles to give the user instant feedback that a setting has been applied without requiring additional confirmation.
          </p>

          <div
            style={{
              background: "var(--partnerhome-bg-color-base)",
              padding: "var(--partnerhome-spacing-2000)",
              borderRadius: "var(--partnerhome-radius-large)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "var(--partnerhome-spacing-3000)",
            }}
          >
            <Toggle
              checked={toggleLabelLeft}
              onChange={setToggleLabelLeft}
              label="Enable Feature"
            />
            <Toggle
              checked={toggleNoLabel}
              onChange={setToggleNoLabel}
            />
            <Toggle
              checked={false}
              onChange={() => {}}
              label="Disabled"
              disabled
            />
          </div>
        </div>
      </div>

      {/* Chip Component */}
      <div className="w-full max-w-screen-2xl mx-auto px-[var(--partnerhome-spacing-3000)] mb-[var(--partnerhome-spacing-4000)]">
        <div
          style={{
            padding: "var(--partnerhome-spacing-2000)",
            background: "var(--partnerhome-bg-color-global-body)",
            borderRadius: "var(--partnerhome-radius-large)",
            border: "1px solid var(--partnerhome-border-color-base)",
          }}
        >
          <h3
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-2000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-1000)",
            }}
          >
            Chip Component
          </h3>
          <p
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-2000)",
            }}
          >
            Composable chips for filters, choices, and actions. Supports checkbox (multi-select), radio (single-select), button (dismissible), and link types.
          </p>

          {/* Filter Chips (Button Type) */}
          <div style={{ marginBottom: "var(--partnerhome-spacing-2500)" }}>
            <h4
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Filter Chips (Dismissible) - Regular & Condensed:
            </h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--partnerhome-spacing-1000)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              {activeFilters.includes("active") && (
                <Chip
                  label="Active Status"
                  type="button"
                  onDismiss={() =>
                    setActiveFilters((prev) => prev.filter((f) => f !== "active"))
                  }
                />
              )}
              {activeFilters.includes("pending") && (
                <Chip
                  label="Pending"
                  type="button"
                  onDismiss={() =>
                    setActiveFilters((prev) => prev.filter((f) => f !== "pending"))
                  }
                />
              )}
              {activeFilters.length === 0 && (
                <span
                  style={{
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-1000)",
                    color: "var(--partnerhome-text-color-base)",
                    fontStyle: "italic",
                  }}
                >
                  No active filters
                </span>
              )}
            </div>
            {/* Condensed Filter Chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--partnerhome-spacing-1000)",
              }}
            >
              <Chip
                label="Tag 1"
                type="button"
                size="condensed"
                onDismiss={() => console.log("Remove Tag 1")}
              />
              <Chip
                label="Tag 2"
                type="button"
                size="condensed"
                onDismiss={() => console.log("Remove Tag 2")}
              />
            </div>
          </div>

          {/* Checkbox Chips (Multi-Select) */}
          <div style={{ marginBottom: "var(--partnerhome-spacing-2500)" }}>
            <h4
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Checkbox Chips (Multi-Select):
            </h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--partnerhome-spacing-1000)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              <Chip
                label="Electronics"
                type="checkbox"
                selected={selectedChips.includes("electronics")}
                onClick={() =>
                  setSelectedChips((prev) =>
                    prev.includes("electronics")
                      ? prev.filter((c) => c !== "electronics")
                      : [...prev, "electronics"]
                  )
                }
              />
              <Chip
                label="Home Goods"
                type="checkbox"
                selected={selectedChips.includes("home-goods")}
                onClick={() =>
                  setSelectedChips((prev) =>
                    prev.includes("home-goods")
                      ? prev.filter((c) => c !== "home-goods")
                      : [...prev, "home-goods"]
                  )
                }
              />
              <Chip
                label="Clothing"
                type="checkbox"
                selected={selectedChips.includes("clothing")}
                onClick={() =>
                  setSelectedChips((prev) =>
                    prev.includes("clothing")
                      ? prev.filter((c) => c !== "clothing")
                      : [...prev, "clothing"]
                  )
                }
              />
              <Chip
                label="Disabled"
                type="checkbox"
                selected={false}
                disabled={true}
              />
            </div>
            {/* Condensed size example */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--partnerhome-spacing-1000)",
              }}
            >
              <Chip
                label="Small"
                type="checkbox"
                size="condensed"
                selected={selectedChips.includes("small")}
                onClick={() =>
                  setSelectedChips((prev) =>
                    prev.includes("small")
                      ? prev.filter((c) => c !== "small")
                      : [...prev, "small"]
                  )
                }
              />
              <Chip
                label="Medium"
                type="checkbox"
                size="condensed"
                selected={selectedChips.includes("medium")}
                onClick={() =>
                  setSelectedChips((prev) =>
                    prev.includes("medium")
                      ? prev.filter((c) => c !== "medium")
                      : [...prev, "medium"]
                  )
                }
              />
            </div>
          </div>

          {/* Radio Chips (Single-Select) */}
          <div style={{ marginBottom: "var(--partnerhome-spacing-2500)" }}>
            <h4
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Radio Chips (Single-Select) - Regular & Condensed:
            </h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--partnerhome-spacing-1000)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              <Chip
                label="Option A"
                type="radio"
                name="radio-group"
                selected={selectedRadio === "a"}
                onClick={() => setSelectedRadio("a")}
              />
              <Chip
                label="Option B"
                type="radio"
                name="radio-group"
                selected={selectedRadio === "b"}
                onClick={() => setSelectedRadio("b")}
              />
              <Chip
                label="Option C"
                type="radio"
                name="radio-group"
                selected={selectedRadio === "c"}
                onClick={() => setSelectedRadio("c")}
              />
            </div>
            {/* Condensed radio chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--partnerhome-spacing-1000)",
              }}
            >
              <Chip
                label="XS"
                type="radio"
                name="size-group"
                size="condensed"
                selected={selectedSize === "xs"}
                onClick={() => setSelectedSize("xs")}
              />
              <Chip
                label="S"
                type="radio"
                name="size-group"
                size="condensed"
                selected={selectedSize === "s"}
                onClick={() => setSelectedSize("s")}
              />
              <Chip
                label="M"
                type="radio"
                name="size-group"
                size="condensed"
                selected={selectedSize === "m"}
                onClick={() => setSelectedSize("m")}
              />
              <Chip
                label="L"
                type="radio"
                name="size-group"
                size="condensed"
                selected={selectedSize === "l"}
                onClick={() => setSelectedSize("l")}
              />
            </div>
          </div>

          {/* Action Chips (Link Type) */}
          <div>
            <h4
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: "var(--partnerhome-font-weight-bold)",
                color: "var(--partnerhome-text-color-base)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              Action Chips (Link with Icons) - Regular & Condensed:
            </h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--partnerhome-spacing-1000)",
                marginBottom: "var(--partnerhome-spacing-1000)",
              }}
            >
              <Chip
                label="Search similar"
                type="link"
                icon={<Search size={16} />}
                href="#search"
                onClick={() => console.log("Search similar")}
              />
              <Chip
                label="Related tags"
                type="link"
                icon={<Tag size={16} />}
                href="#tags"
                onClick={() => console.log("Related tags")}
              />
            </div>
            {/* Condensed action chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--partnerhome-spacing-1000)",
              }}
            >
              <Chip
                label="View"
                type="link"
                size="condensed"
                icon={<Search size={16} />}
                href="#view"
              />
              <Chip
                label="Share"
                type="link"
                size="condensed"
                icon={<Tag size={16} />}
                href="#share"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Components */}
      <ModalSmall
        isOpen={isModalSmallOpen}
        onClose={() => setIsModalSmallOpen(false)}
        title="Small Modal"
      >
        <p style={{
          fontFamily: "'Lato', 'Inter', sans-serif",
          fontSize: "var(--partnerhome-font-size-1000)",
          fontWeight: "var(--partnerhome-font-weight-normal)",
          color: "var(--partnerhome-text-color-base)",
          margin: 0,
        }}>
          This is a small modal dialog for simple confirmations or brief messages.
        </p>
      </ModalSmall>

      <ModalMedium
        isOpen={isModalMediumOpen}
        onClose={() => setIsModalMediumOpen(false)}
        title="Medium Modal"
      >
        <p style={{
          fontFamily: "'Lato', 'Inter', sans-serif",
          fontSize: "var(--partnerhome-font-size-1000)",
          fontWeight: "var(--partnerhome-font-weight-normal)",
          color: "var(--partnerhome-text-color-base)",
          margin: 0,
        }}>
          This is a medium-sized modal dialog for forms or moderate content.
        </p>
      </ModalMedium>

      <ModalLarge
        isOpen={isModalLargeOpen}
        onClose={() => setIsModalLargeOpen(false)}
        title="Large Modal"
      >
        <p style={{
          fontFamily: "'Lato', 'Inter', sans-serif",
          fontSize: "var(--partnerhome-font-size-1000)",
          fontWeight: "var(--partnerhome-font-weight-normal)",
          color: "var(--partnerhome-text-color-base)",
          margin: 0,
        }}>
          This is a large modal dialog for complex content, detailed forms, or multi-step processes.
        </p>
      </ModalLarge>
    </div>
  );
}