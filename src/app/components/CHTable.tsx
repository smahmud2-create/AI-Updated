/**
 * C+H Table Component
 * Independent table view with checkboxes for multi-select functionality
 * This is a UNIQUE implementation - not shared with Simple View tab
 */

import React, { useState } from "react";
import { TableRow } from "./TableRow";
import { SortDropdown } from "./SortDropdown";
import { SegmentControlDropdown } from "./SegmentControlDropdown";
import { QuickFilterDropdown } from "./QuickFilterDropdown";
import { SearchInput } from "./SearchInput";
import { Pagination } from "./Pagination";
import { FilterPanel } from "./FilterPanel";
import { Checkbox } from "./Checkbox";
import { BulkEditBar } from "./BulkEditBar";
import { SortableColumnHeader } from "./SortableColumnHeader";
import { Button } from "./Button";

// Unique data interface for C+H Table
interface CHTableRow {
  id: string;
  productName: string;
  status: 'Active' | 'Pending' | 'Inactive' | 'Archived';
  category: string;
  date: string;
  amount: string;
}

export function CHTable() {
  // Unique state management for C+H Table
  const [chSearchQuery, setCHSearchQuery] = useState("");
  const [chSortColumn, setCHSortColumn] = useState<string | null>(null);
  const [chSortDirection, setCHSortDirection] = useState<'asc' | 'desc' | null>(null);
  const [chSelectedSegment, setCHSelectedSegment] = useState('all');
  const [chSelectedQuickFilter, setCHSelectedQuickFilter] = useState('all');
  const [chIsFilterPanelOpen, setCHIsFilterPanelOpen] = useState(false);
  const [chSelectedRows, setCHSelectedRows] = useState<Set<string>>(new Set());
  const [chCurrentPage, setCHCurrentPage] = useState(1);
  const [chRowsPerPage, setCHRowsPerPage] = useState(50);
  const [chHoveredRow, setCHHoveredRow] = useState<string | null>(null);

  // Track applied filters from FilterPanel
  const [chAppliedPanelFilters, setCHAppliedPanelFilters] = useState({
    status: [] as string[],
    category: [] as string[],
    priority: [] as string[],
    amount: '',
  });

  // Calculate total filter count for badge
  const chFilterCount = chAppliedPanelFilters.status.length + 
                        chAppliedPanelFilters.category.length + 
                        chAppliedPanelFilters.priority.length + 
                        (chAppliedPanelFilters.amount ? 1 : 0);

  // Sample data for C+H Table
  const chTableData: CHTableRow[] = [
    { id: 'ch-1', productName: 'Premium Wireless Headphones', status: 'Active', category: 'Electronics', date: '2024-01-15', amount: '$299.99' },
    { id: 'ch-2', productName: 'Ergonomic Office Chair', status: 'Active', category: 'Furniture', date: '2024-01-14', amount: '$449.00' },
    { id: 'ch-3', productName: 'Smartphone Case - Blue', status: 'Pending', category: 'Accessories', date: '2024-01-13', amount: '$29.99' },
    { id: 'ch-4', productName: 'Laptop Stand Aluminum', status: 'Active', category: 'Electronics', date: '2024-01-12', amount: '$79.99' },
    { id: 'ch-5', productName: 'Desk Lamp LED', status: 'Inactive', category: 'Furniture', date: '2024-01-11', amount: '$59.99' },
    { id: 'ch-6', productName: 'Mechanical Keyboard RGB', status: 'Active', category: 'Electronics', date: '2024-01-10', amount: '$159.99' },
    { id: 'ch-7', productName: 'Mouse Pad Extra Large', status: 'Archived', category: 'Accessories', date: '2024-01-09', amount: '$19.99' },
    { id: 'ch-8', productName: 'USB-C Hub 7-in-1', status: 'Active', category: 'Electronics', date: '2024-01-08', amount: '$49.99' },
    { id: 'ch-9', productName: 'Wireless Mouse Pro', status: 'Active', category: 'Electronics', date: '2024-01-07', amount: '$89.99' },
    { id: 'ch-10', productName: 'Standing Desk Converter', status: 'Active', category: 'Furniture', date: '2024-01-06', amount: '$199.99' },
    { id: 'ch-11', productName: 'Webcam 4K Ultra HD', status: 'Pending', category: 'Electronics', date: '2024-01-05', amount: '$179.99' },
    { id: 'ch-12', productName: 'Phone Holder Adjustable', status: 'Active', category: 'Accessories', date: '2024-01-04', amount: '$24.99' },
    { id: 'ch-13', productName: 'Monitor 27 inch 4K', status: 'Active', category: 'Electronics', date: '2024-01-03', amount: '$399.99' },
    { id: 'ch-14', productName: 'Desk Organizer Set', status: 'Inactive', category: 'Furniture', date: '2024-01-02', amount: '$39.99' },
    { id: 'ch-15', productName: 'Cable Management Box', status: 'Active', category: 'Accessories', date: '2024-01-01', amount: '$19.99' },
    { id: 'ch-16', productName: 'Bluetooth Speaker', status: 'Active', category: 'Electronics', date: '2023-12-31', amount: '$129.99' },
    { id: 'ch-17', productName: 'Office Plant Pot', status: 'Archived', category: 'Furniture', date: '2023-12-30', amount: '$14.99' },
    { id: 'ch-18', productName: 'Laptop Sleeve 15 inch', status: 'Active', category: 'Accessories', date: '2023-12-29', amount: '$34.99' },
    { id: 'ch-19', productName: 'USB Flash Drive 128GB', status: 'Active', category: 'Electronics', date: '2023-12-28', amount: '$29.99' },
    { id: 'ch-20', productName: 'Ergonomic Footrest', status: 'Pending', category: 'Furniture', date: '2023-12-27', amount: '$49.99' },
    { id: 'ch-21', productName: 'Screen Cleaning Kit', status: 'Active', category: 'Accessories', date: '2023-12-26', amount: '$12.99' },
    { id: 'ch-22', productName: 'Graphics Tablet', status: 'Active', category: 'Electronics', date: '2023-12-25', amount: '$249.99' },
    { id: 'ch-23', productName: 'Book Stand Adjustable', status: 'Active', category: 'Furniture', date: '2023-12-24', amount: '$29.99' },
    { id: 'ch-24', productName: 'Wrist Rest Gel', status: 'Inactive', category: 'Accessories', date: '2023-12-23', amount: '$15.99' },
    { id: 'ch-25', productName: 'External SSD 1TB', status: 'Active', category: 'Electronics', date: '2023-12-22', amount: '$149.99' },
    { id: 'ch-26', productName: 'Monitor Arm Mount', status: 'Active', category: 'Furniture', date: '2023-12-21', amount: '$79.99' },
    { id: 'ch-27', productName: 'Keyboard Wrist Rest', status: 'Active', category: 'Accessories', date: '2023-12-20', amount: '$19.99' },
    { id: 'ch-28', productName: 'Noise Cancelling Earbuds', status: 'Active', category: 'Electronics', date: '2023-12-19', amount: '$199.99' },
    { id: 'ch-29', productName: 'Desk Mat Large', status: 'Pending', category: 'Furniture', date: '2023-12-18', amount: '$39.99' },
    { id: 'ch-30', productName: 'Phone Charging Cable', status: 'Active', category: 'Accessories', date: '2023-12-17', amount: '$14.99' },
    { id: 'ch-31', productName: 'Portable Charger 20000mAh', status: 'Active', category: 'Electronics', date: '2023-12-16', amount: '$59.99' },
    { id: 'ch-32', productName: 'Chair Cushion Memory Foam', status: 'Active', category: 'Furniture', date: '2023-12-15', amount: '$44.99' },
    { id: 'ch-33', productName: 'Headphone Stand', status: 'Archived', category: 'Accessories', date: '2023-12-14', amount: '$24.99' },
    { id: 'ch-34', productName: 'Smart Watch Pro', status: 'Active', category: 'Electronics', date: '2023-12-13', amount: '$349.99' },
    { id: 'ch-35', productName: 'Storage Ottoman', status: 'Active', category: 'Furniture', date: '2023-12-12', amount: '$89.99' },
    { id: 'ch-36', productName: 'Tablet Case 10 inch', status: 'Inactive', category: 'Accessories', date: '2023-12-11', amount: '$29.99' },
    { id: 'ch-37', productName: 'Wireless Charger Pad', status: 'Active', category: 'Electronics', date: '2023-12-10', amount: '$39.99' },
    { id: 'ch-38', productName: 'Filing Cabinet 3 Drawer', status: 'Active', category: 'Furniture', date: '2023-12-09', amount: '$159.99' },
    { id: 'ch-39', productName: 'Laptop Backpack', status: 'Active', category: 'Accessories', date: '2023-12-08', amount: '$69.99' },
    { id: 'ch-40', productName: 'Document Scanner', status: 'Pending', category: 'Electronics', date: '2023-12-07', amount: '$229.99' },
    { id: 'ch-41', productName: 'Whiteboard Calendar', status: 'Active', category: 'Furniture', date: '2023-12-06', amount: '$34.99' },
    { id: 'ch-42', productName: 'Screen Protector Glass', status: 'Active', category: 'Accessories', date: '2023-12-05', amount: '$19.99' },
    { id: 'ch-43', productName: 'Video Conference Light', status: 'Active', category: 'Electronics', date: '2023-12-04', amount: '$79.99' },
    { id: 'ch-44', productName: 'Adjustable Laptop Table', status: 'Active', category: 'Furniture', date: '2023-12-03', amount: '$119.99' },
    { id: 'ch-45', productName: 'USB-C Adapter Kit', status: 'Active', category: 'Accessories', date: '2023-12-02', amount: '$29.99' },
  ];

  // Filter logic
  const chFilteredData = chTableData.filter(row => {
    // Apply search filter
    const matchesSearch = row.productName.toLowerCase().includes(chSearchQuery.toLowerCase()) ||
                         row.category.toLowerCase().includes(chSearchQuery.toLowerCase()) ||
                         row.status.toLowerCase().includes(chSearchQuery.toLowerCase());
    
    // Apply FilterPanel filters
    if (chAppliedPanelFilters.status.length > 0 && !chAppliedPanelFilters.status.includes(row.status)) {
      return false;
    }
    if (chAppliedPanelFilters.category.length > 0 && !chAppliedPanelFilters.category.includes(row.category)) {
      return false;
    }
    
    return matchesSearch;
  });

  // Apply sorting
  const chSortedData = [...chFilteredData].sort((a, b) => {
    if (!chSortColumn || !chSortDirection) return 0;

    let aValue: any;
    let bValue: any;

    switch (chSortColumn) {
      case 'productName':
        aValue = a.productName;
        bValue = b.productName;
        break;
      case 'status':
        aValue = a.status;
        bValue = b.status;
        break;
      case 'category':
        aValue = a.category;
        bValue = b.category;
        break;
      case 'date':
        aValue = new Date(a.date);
        bValue = new Date(b.date);
        break;
      case 'amount':
        // Remove $ and commas, convert to number
        aValue = parseFloat(a.amount.replace(/[$,]/g, ''));
        bValue = parseFloat(b.amount.replace(/[$,]/g, ''));
        break;
      default:
        return 0;
    }

    // Handle string comparison
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return chSortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    // Handle number/date comparison
    if (chSortDirection === 'asc') {
      return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    } else {
      return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
    }
  });

  const chHasActiveFilters = chSearchQuery !== '' || chSelectedSegment !== 'all' || chSelectedQuickFilter !== 'all';

  const handleCHResetFilters = () => {
    setCHSearchQuery('');
    setCHSelectedSegment('all');
    setCHSelectedQuickFilter('all');
    setCHAppliedPanelFilters({
      status: [],
      category: [],
      priority: [],
      amount: '',
    });
  };

  const handleCHApplyFilters = (filters: { status: string[], category: string[], priority: string[], amount: string }) => {
    setCHAppliedPanelFilters(filters);
    setCHIsFilterPanelOpen(false);
  };

  // Checkbox selection handlers
  const handleCHSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = new Set(chFilteredData.map(row => row.id));
      setCHSelectedRows(allIds);
    } else {
      setCHSelectedRows(new Set());
    }
  };

  const handleCHRowSelect = (rowId: string, checked: boolean) => {
    const newSelection = new Set(chSelectedRows);
    if (checked) {
      newSelection.add(rowId);
    } else {
      newSelection.delete(rowId);
    }
    setCHSelectedRows(newSelection);
  };

  const chAllSelected = chFilteredData.length > 0 && chFilteredData.every(row => chSelectedRows.has(row.id));
  const chSomeSelected = chFilteredData.some(row => chSelectedRows.has(row.id)) && !chAllSelected;

  // Render table row
  const renderCHTableRow = (row: CHTableRow) => {
    const isSelected = chSelectedRows.has(row.id);
    const isHovered = chHoveredRow === row.id;
    const showQuickview = isHovered;

    return (
      <TableRow
        key={row.id}
        isSelected={false}
        className="border-t first:border-t-0 border-[var(--partnerhome-border-color-base)] transition-colors hover:bg-[var(--partnerhome-surface-color-primarysubtle)]"
        style={{ 
          height: "48px"
        }}
        onMouseEnter={() => setCHHoveredRow(row.id)}
        onMouseLeave={() => setCHHoveredRow(null)}
      >
        {/* Checkbox Column */}
        <td style={{ height: "48px", maxHeight: "48px", padding: "0 var(--partnerhome-spacing-1500) 0 var(--partnerhome-spacing-2000)", overflow: "hidden", boxSizing: "border-box", verticalAlign: "middle", width: "48px" }}>
          <Checkbox
            checked={isSelected}
            onChange={(checked) => handleCHRowSelect(row.id, checked)}
            id={`ch-row-${row.id}`}
          />
        </td>

        {/* Image + Text Column with Quickview Button */}
        <td
          className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-base)]"
          style={{ fontFamily: "var(--partnerhome-font-family-base)", width: "300px", maxWidth: "300px", height: "48px", maxHeight: "48px", padding: "0 var(--partnerhome-spacing-2000) 0 var(--partnerhome-spacing-1500)", overflow: "hidden", boxSizing: "border-box", verticalAlign: "middle" }}
        >
          <div className="flex items-center gap-[var(--partnerhome-spacing-1000)]" style={{ width: "100%", minWidth: 0, height: "100%" }}>
            {/* Image Placeholder */}
            <div
              className="w-[32px] h-[32px] bg-[var(--partnerhome-surface-color-inversesubtle)] rounded-[var(--partnerhome-radius-base)] flex items-center justify-center flex-shrink-0"
              style={{ border: "1px solid var(--partnerhome-border-color-base)" }}
            >
              <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" fill="var(--partnerhome-text-color-base)" opacity="0.2" />
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="var(--partnerhome-text-color-base)" strokeWidth="2" fill="none" />
                <circle cx="8.5" cy="8.5" r="1.5" fill="var(--partnerhome-text-color-base)" />
                <path d="M21 15L16 10L5 21" stroke="var(--partnerhome-text-color-base)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", minWidth: 0, flex: "1 1 auto", color: isHovered ? "var(--partnerhome-text-color-primary)" : "inherit" }}>{row.productName}</span>
            {/* Quickview Button - Shows on hover */}
            {showQuickview && (
              <Button
                variant="secondary"
                size="condensed"
                style={{ flexShrink: 0 }}
              >
                Quickview
              </Button>
            )}
          </div>
        </td>

        {/* Status Column with Badge */}
        <td style={{ height: "48px", maxHeight: "48px", padding: "0 var(--partnerhome-spacing-2000)", overflow: "hidden", boxSizing: "border-box", verticalAlign: "middle" }}>
          <span
            style={{ 
              display: "inline-flex",
              alignItems: "center",
              padding: "2px 8px",
              borderRadius: "var(--partnerhome-radius-base)",
              fontFamily: "'Lato', sans-serif",
              fontSize: "var(--partnerhome-font-size-500)",
              fontWeight: "var(--partnerhome-font-weight-normal)",
              height: "16px",
              lineHeight: "16px",
              background: row.status === "Active"
                ? "var(--partnerhome-bg-color-positive)"
                : row.status === "Pending"
                ? "var(--partnerhome-bg-color-warning)"
                : "var(--partnerhome-bg-color-neutral)",
              color: "var(--partnerhome-text-color-inverse)",
            }}
          >
            {row.status}
          </span>
        </td>

        {/* Category */}
        <td
          className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-base)]"
          style={{ fontFamily: "var(--partnerhome-font-family-base)", height: "48px", maxHeight: "48px", padding: "0 var(--partnerhome-spacing-2000)", overflow: "hidden", boxSizing: "border-box", verticalAlign: "middle" }}
        >
          {row.category}
        </td>

        {/* Date */}
        <td
          className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-base)]"
          style={{ fontFamily: "var(--partnerhome-font-family-base)", height: "48px", maxHeight: "48px", padding: "0 var(--partnerhome-spacing-2000)", overflow: "hidden", boxSizing: "border-box", verticalAlign: "middle" }}
        >
          {row.date}
        </td>

        {/* Amount */}
        <td
          className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-base)]"
          style={{ fontFamily: "var(--partnerhome-font-family-base)", height: "48px", maxHeight: "48px", padding: "0 var(--partnerhome-spacing-2000)", overflow: "hidden", boxSizing: "border-box", verticalAlign: "middle" }}
        >
          {row.amount}
        </td>
      </TableRow>
    );
  };

  return (
    <>
      {/* Controls Section */}
      <div className="px-[var(--partnerhome-spacing-3000)] pt-[var(--partnerhome-spacing-3000)] pb-[var(--partnerhome-spacing-2000)]">
        <div className="flex items-center justify-between gap-[var(--partnerhome-spacing-2000)]">
          <div className="flex items-center gap-[var(--partnerhome-spacing-1000)] flex-1">
            {/* Search Input */}
            <div style={{ width: "320px" }}>
              <SearchInput
                value={chSearchQuery}
                onChange={(e) => setCHSearchQuery(e.target.value)}
              />
            </div>

            {/* Quick Filter Dropdown */}
            <div style={{ marginLeft: 'var(--partnerhome-spacing-1000)' }}>
              <QuickFilterDropdown
                options={[
                  { id: 'all', label: 'All Items', count: chTableData.length },
                  { id: 'active', label: 'Active', count: chTableData.filter(r => r.status === 'Active').length },
                  { id: 'pending', label: 'Pending', count: chTableData.filter(r => r.status === 'Pending').length },
                  { id: 'inactive', label: 'Inactive', count: chTableData.filter(r => r.status === 'Inactive').length },
                ]}
                selectedOption={chSelectedQuickFilter}
                onApply={(optionId) => {
                  setCHSelectedQuickFilter(optionId);
                  console.log('C+H Filter applied:', optionId);
                }}
                triggerStyle="text"
              />
            </div>

            {/* Segment Control Dropdown */}
            <SegmentControlDropdown
              label="Segment"
              options={[
                { id: 'all', label: 'All Segments' },
                { id: 'electronics', label: 'Electronics' },
                { id: 'furniture', label: 'Furniture' },
                { id: 'accessories', label: 'Accessories' },
              ]}
              selectedOption={chSelectedSegment}
              onApply={(optionId) => {
                setCHSelectedSegment(optionId);
                console.log('C+H Segment applied:', optionId);
              }}
              triggerStyle="text"
            />

            {/* All Filters Button */}
            <Button
              variant="secondary"
              onClick={() => setCHIsFilterPanelOpen(true)}
              style={{
                gap: "var(--partnerhome-spacing-1000)",
                position: "relative",
                overflow: "visible",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ flexShrink: 0 }}
              >
                <path
                  d="M3 7h4M7 7a2 2 0 104 0M7 7a2 2 0 114 0M11 7h10M3 12h10M13 12a2 2 0 104 0M13 12a2 2 0 114 0M17 12h4M3 17h4M7 17a2 2 0 104 0M7 17a2 2 0 114 0M11 17h10"
                  stroke="var(--partnerhome-text-color-primary)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span style={{ color: "var(--partnerhome-text-color-primary)" }}>All Filters</span>
              {chFilterCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    minWidth: "20px",
                    height: "20px",
                    padding: "0 4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--partnerhome-surface-color-primarysubtle)",
                    color: "var(--partnerhome-text-color-primary)",
                    borderRadius: "50%",
                    fontFamily: "'Lato', 'Inter', sans-serif",
                    fontSize: "var(--partnerhome-font-size-500)",
                    fontWeight: "var(--partnerhome-font-weight-bold)",
                    lineHeight: "1",
                    zIndex: 10,
                  }}
                >
                  {chFilterCount > 999 ? '999' : chFilterCount}
                </span>
              )}
            </Button>

            {/* Reset Button */}
            {chHasActiveFilters && (
              <Button variant="text" onClick={handleCHResetFilters}>
                <span style={{ color: "var(--partnerhome-text-color-primary)" }}>Reset</span>
              </Button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-[var(--partnerhome-spacing-1000)]">
            <SortDropdown
              options={[
                { id: 'name', label: 'Name' },
                { id: 'status', label: 'Status' },
                { id: 'category', label: 'Category' },
                { id: 'date', label: 'Date' },
                { id: 'amount', label: 'Amount' },
              ]}
              selectedOption={chSortColumn || 'name'}
              sortDirection={chSortDirection}
              onApply={(optionId, direction) => {
                setCHSortColumn(optionId);
                setCHSortDirection(direction);
                console.log('C+H Sort:', optionId, direction);
              }}
            />
          </div>
        </div>
      </div>

      {/* Bulk Edit Bar - Shows when items are selected */}
      {chSelectedRows.size > 0 && (
        <div className="px-[var(--partnerhome-spacing-3000)]">
          <BulkEditBar
            selectedCount={chSelectedRows.size}
            totalCount={chFilteredData.length}
            onDeselectAll={() => setCHSelectedRows(new Set())}
            onSelectAll={handleCHSelectAll.bind(null, true)}
            onEdit={() => console.log('Edit clicked')}
            onExport={() => console.log('Export clicked')}
            onMoreActions={() => console.log('More Actions clicked')}
          />
        </div>
      )}

      {/* Table */}
      <div className="px-[var(--partnerhome-spacing-3000)]">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ height: "48px", maxHeight: "48px", background: "#F5F5F5" }}>
                {/* Checkbox Header */}
                <th
                  style={{ 
                    fontFamily: "var(--partnerhome-font-family-base)", 
                    width: "48px", 
                    height: "48px",
                    maxHeight: "48px",
                    padding: "0 var(--partnerhome-spacing-2000)",
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    overflow: "hidden"
                  }}
                >
                  <div style={{ height: "48px", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <Checkbox
                      checked={chAllSelected}
                      indeterminate={chSomeSelected}
                      onChange={handleCHSelectAll}
                      id="ch-select-all"
                    />
                  </div>
                </th>

                {/* Sortable Column Headers */}
                <SortableColumnHeader
                  label="Product Name"
                  columnId="productName"
                  currentSortColumn={chSortColumn}
                  currentSortDirection={chSortDirection}
                  onSort={(columnId, direction) => {
                    setCHSortColumn(columnId);
                    setCHSortDirection(direction);
                    console.log('C+H Sort:', columnId, direction);
                  }}
                  width="300px"
                  align="left"
                />
                <SortableColumnHeader
                  label="Status"
                  columnId="status"
                  currentSortColumn={chSortColumn}
                  currentSortDirection={chSortDirection}
                  onSort={(columnId, direction) => {
                    setCHSortColumn(columnId);
                    setCHSortDirection(direction);
                    console.log('C+H Sort:', columnId, direction);
                  }}
                  align="left"
                />
                <SortableColumnHeader
                  label="Category"
                  columnId="category"
                  currentSortColumn={chSortColumn}
                  currentSortDirection={chSortDirection}
                  onSort={(columnId, direction) => {
                    setCHSortColumn(columnId);
                    setCHSortDirection(direction);
                    console.log('C+H Sort:', columnId, direction);
                  }}
                  align="left"
                />
                <SortableColumnHeader
                  label="Date"
                  columnId="date"
                  currentSortColumn={chSortColumn}
                  currentSortDirection={chSortDirection}
                  onSort={(columnId, direction) => {
                    setCHSortColumn(columnId);
                    setCHSortDirection(direction);
                    console.log('C+H Sort:', columnId, direction);
                  }}
                  align="left"
                />
                <SortableColumnHeader
                  label="Amount"
                  columnId="amount"
                  currentSortColumn={chSortColumn}
                  currentSortDirection={chSortDirection}
                  onSort={(columnId, direction) => {
                    setCHSortColumn(columnId);
                    setCHSortDirection(direction);
                    console.log('C+H Sort:', columnId, direction);
                  }}
                  align="left"
                />
              </tr>
            </thead>
            <tbody>
              {chSortedData.map(row => renderCHTableRow(row))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination - Sticky at Bottom */}
      <div 
        className="px-[var(--partnerhome-spacing-3000)] sticky bottom-0"
        style={{
          backgroundColor: "white",
          zIndex: 10,
          paddingTop: "4px",
          paddingBottom: "4px"
        }}
      >
        <Pagination
          currentPage={chCurrentPage}
          totalPages={Math.ceil(chFilteredData.length / chRowsPerPage)}
          rowsPerPage={chRowsPerPage}
          onPageChange={(page) => {
            setCHCurrentPage(page);
            console.log('C+H Page changed:', page);
          }}
          onRowsPerPageChange={(rows) => {
            setCHRowsPerPage(rows);
            setCHCurrentPage(1);
            console.log('C+H Rows per page changed:', rows);
          }}
        />
      </div>

      {/* Filter Panel */}
      <FilterPanel
        isOpen={chIsFilterPanelOpen}
        onClose={() => setCHIsFilterPanelOpen(false)}
        resultCount={chFilteredData.length}
        onApplyFilters={handleCHApplyFilters}
        onResetFilters={handleCHResetFilters}
      />
    </>
  );
}