/**
 * V+T Table Component
 * Independent table view with hierarchy (expandable/collapsible rows) and checkboxes
 * This is a UNIQUE implementation - not shared with Simple View or C+H Table
 */

import React, { useState, useRef, useEffect } from 'react';
import svgPaths from "../../imports/svg-lsyuuifzbe";
import { SearchInput } from './SearchInput';
import { FilterPanel } from './FilterPanel';
import { SegmentControlDropdown } from './SegmentControlDropdown';
import { QuickFilterDropdown } from './QuickFilterDropdown';
import { SortDropdown } from './SortDropdown';
import { TableRow } from "./TableRow";
import { Pagination } from "./Pagination";
import { BulkEditBar } from "./BulkEditBar";
import ChevronDownIcon from "../../imports/ChevronDown";
import { SortableColumnHeader } from "./SortableColumnHeader";
import { Checkbox } from './Checkbox';
import { Button } from './Button';

// Unique data interface for V+T Table with Hierarchy
interface VTTableRow {
  id: string;
  productName: string;
  status: 'Active' | 'Pending' | 'Inactive' | 'Archived';
  category: string;
  date: string;
  amount: string;
  parentId?: string;
  children?: VTTableRow[];
}

export function VTTable() {
  // Unique state management for V+T Table
  const [vtSearchQuery, setVTSearchQuery] = useState("");
  const [vtSortColumn, setVTSortColumn] = useState<string | null>(null);
  const [vtSortDirection, setVTSortDirection] = useState<'asc' | 'desc' | null>(null);
  const [vtSelectedSegment, setVTSelectedSegment] = useState('all');
  const [vtSelectedQuickFilter, setVTSelectedQuickFilter] = useState('all');
  const [vtIsFilterPanelOpen, setVTIsFilterPanelOpen] = useState(false);
  const [vtSelectedRows, setVTSelectedRows] = useState<Set<string>>(new Set());
  const [vtCurrentPage, setVTCurrentPage] = useState(1);
  const [vtRowsPerPage, setVTRowsPerPage] = useState(50);
  const [vtHoveredRow, setVTHoveredRow] = useState<string | null>(null);
  const [vtExpandedRows, setVTExpandedRows] = useState<Set<string>>(new Set());

  // Track applied filters from FilterPanel
  const [vtAppliedPanelFilters, setVTAppliedPanelFilters] = useState({
    status: [] as string[],
    category: [] as string[],
    priority: [] as string[],
    amount: '',
  });

  // Calculate total filter count for badge
  const vtFilterCount = vtAppliedPanelFilters.status.length + 
                        vtAppliedPanelFilters.category.length + 
                        vtAppliedPanelFilters.priority.length + 
                        (vtAppliedPanelFilters.amount ? 1 : 0);

  // Sample hierarchical data for V+T Table
  const vtTableData: VTTableRow[] = [
    {
      id: 'vt-1',
      productName: 'Electronics Department',
      status: 'Active',
      category: 'Electronics',
      date: '2024-01-15',
      amount: '$1,299.99',
      children: [
        { id: 'vt-1-1', productName: 'Premium Wireless Headphones', status: 'Active', category: 'Electronics', date: '2024-01-15', amount: '$299.99', parentId: 'vt-1' },
        { id: 'vt-1-2', productName: 'Laptop Stand Aluminum', status: 'Active', category: 'Electronics', date: '2024-01-12', amount: '$79.99', parentId: 'vt-1' },
        { id: 'vt-1-3', productName: 'USB-C Hub 7-in-1', status: 'Pending', category: 'Electronics', date: '2024-01-08', amount: '$49.99', parentId: 'vt-1' },
      ],
    },
    {
      id: 'vt-2',
      productName: 'Furniture Collection',
      status: 'Active',
      category: 'Furniture',
      date: '2024-01-14',
      amount: '$849.00',
      children: [
        { id: 'vt-2-1', productName: 'Ergonomic Office Chair', status: 'Active', category: 'Furniture', date: '2024-01-14', amount: '$449.00', parentId: 'vt-2' },
        { id: 'vt-2-2', productName: 'Desk Lamp LED', status: 'Inactive', category: 'Furniture', date: '2024-01-11', amount: '$59.99', parentId: 'vt-2' },
      ],
    },
    {
      id: 'vt-3',
      productName: 'Accessories',
      status: 'Pending',
      category: 'Accessories',
      date: '2024-01-13',
      amount: '$199.98',
      children: [
        { id: 'vt-3-1', productName: 'Smartphone Case - Blue', status: 'Pending', category: 'Accessories', date: '2024-01-13', amount: '$29.99', parentId: 'vt-3' },
        { id: 'vt-3-2', productName: 'Mouse Pad Extra Large', status: 'Archived', category: 'Accessories', date: '2024-01-09', amount: '$19.99', parentId: 'vt-3' },
        { id: 'vt-3-3', productName: 'Mechanical Keyboard RGB', status: 'Active', category: 'Electronics', date: '2024-01-10', amount: '$159.99', parentId: 'vt-3' },
      ],
    },
  ];

  // Flatten hierarchy for display
  const flattenHierarchy = (rows: VTTableRow[]): VTTableRow[] => {
    const result: VTTableRow[] = [];
    rows.forEach(row => {
      result.push(row);
      if (row.children && vtExpandedRows.has(row.id)) {
        result.push(...row.children);
      }
    });
    return result;
  };

  // Filter logic
  const vtFilteredData = flattenHierarchy(vtTableData).filter(row => {
    // Apply search filter
    const matchesSearch = row.productName.toLowerCase().includes(vtSearchQuery.toLowerCase()) ||
                         row.category.toLowerCase().includes(vtSearchQuery.toLowerCase()) ||
                         row.status.toLowerCase().includes(vtSearchQuery.toLowerCase());
    
    // Apply FilterPanel filters
    if (vtAppliedPanelFilters.status.length > 0 && !vtAppliedPanelFilters.status.includes(row.status)) {
      return false;
    }
    if (vtAppliedPanelFilters.category.length > 0 && !vtAppliedPanelFilters.category.includes(row.category)) {
      return false;
    }
    
    return matchesSearch;
  });

  // Apply sorting
  const vtSortedData = [...vtFilteredData].sort((a, b) => {
    if (!vtSortColumn || !vtSortDirection) return 0;

    let aValue: any;
    let bValue: any;

    switch (vtSortColumn) {
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
      return vtSortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    // Handle number/date comparison
    if (vtSortDirection === 'asc') {
      return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    } else {
      return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
    }
  });

  const vtHasActiveFilters = vtSearchQuery !== '' || vtSelectedSegment !== 'all' || vtSelectedQuickFilter !== 'all';

  const handleVTResetFilters = () => {
    setVTSearchQuery('');
    setVTSelectedSegment('all');
    setVTSelectedQuickFilter('all');
    setVTAppliedPanelFilters({
      status: [],
      category: [],
      priority: [],
      amount: '',
    });
  };

  const handleVTApplyFilters = (filters: { status: string[], category: string[], priority: string[], amount: string }) => {
    setVTAppliedPanelFilters(filters);
    setVTIsFilterPanelOpen(false);
  };

  // Hierarchy handlers
  const toggleExpand = (rowId: string) => {
    const newExpanded = new Set(vtExpandedRows);
    if (newExpanded.has(rowId)) {
      newExpanded.delete(rowId);
    } else {
      newExpanded.add(rowId);
    }
    setVTExpandedRows(newExpanded);
  };

  // Checkbox selection handlers
  const handleVTSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = new Set(vtFilteredData.map(row => row.id));
      setVTSelectedRows(allIds);
    } else {
      setVTSelectedRows(new Set());
    }
  };

  const handleVTRowSelect = (rowId: string, checked: boolean) => {
    const newSelection = new Set(vtSelectedRows);
    if (checked) {
      newSelection.add(rowId);
    } else {
      newSelection.delete(rowId);
    }
    setVTSelectedRows(newSelection);
  };

  const vtAllSelected = vtFilteredData.length > 0 && vtFilteredData.every(row => vtSelectedRows.has(row.id));
  const vtSomeSelected = vtFilteredData.some(row => vtSelectedRows.has(row.id)) && !vtAllSelected;

  // Render table row
  const renderVTTableRow = (row: VTTableRow) => {
    const isSelected = vtSelectedRows.has(row.id);
    const isHovered = vtHoveredRow === row.id;
    const showQuickview = isHovered;
    const hasChildren = row.children && row.children.length > 0;
    const isExpanded = vtExpandedRows.has(row.id);
    const isChild = !!row.parentId;

    return (
      <TableRow
        key={row.id}
        isSelected={false}
        className="border-t first:border-t-0 border-[var(--partnerhome-border-color-base)] transition-colors hover:bg-[var(--partnerhome-surface-color-primarysubtle)]"
        style={{ 
          height: "48px"
        }}
        onMouseEnter={() => setVTHoveredRow(row.id)}
        onMouseLeave={() => setVTHoveredRow(null)}
      >
        {/* Chevron Column (Hierarchy Expand/Collapse) */}
        <td style={{ height: "48px", maxHeight: "48px", padding: "0 var(--partnerhome-spacing-1000)", overflow: "hidden", boxSizing: "border-box", verticalAlign: "middle", width: "48px" }}>
          {hasChildren ? (
            <button
              onClick={() => toggleExpand(row.id)}
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 200ms ease",
              }}
            >
              <ChevronDownIcon />
            </button>
          ) : (
            <div style={{ width: "24px", height: "24px" }} />
          )}
        </td>

        {/* Checkbox Column */}
        <td style={{ height: "48px", maxHeight: "48px", padding: "0 var(--partnerhome-spacing-1500) 0 0", overflow: "hidden", boxSizing: "border-box", verticalAlign: "middle", width: "48px" }}>
          <Checkbox
            checked={isSelected}
            onChange={(checked) => handleVTRowSelect(row.id, checked)}
            id={`vt-row-${row.id}`}
          />
        </td>

        {/* Image + Text Column with Quickview Button */}
        <td
          className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-base)]"
          style={{ fontFamily: "var(--partnerhome-font-family-base)", width: "300px", maxWidth: "300px", height: "48px", maxHeight: "48px", padding: "0 var(--partnerhome-spacing-2000) 0 var(--partnerhome-spacing-1500)", overflow: "hidden", boxSizing: "border-box", verticalAlign: "middle" }}
        >
          <div className="flex items-center gap-[var(--partnerhome-spacing-1000)]" style={{ width: "100%", minWidth: 0, height: "100%", paddingLeft: isChild ? "24px" : "0" }}>
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
                label="Search"
                value={vtSearchQuery}
                onChange={(e) => setVTSearchQuery(e.target.value)}
              />
            </div>

            {/* Quick Filter Dropdown */}
            <div style={{ marginLeft: 'var(--partnerhome-spacing-1000)' }}>
              <QuickFilterDropdown
                options={[
                  { id: 'all', label: 'All Items', count: vtTableData.length },
                  { id: 'active', label: 'Active', count: 3 },
                  { id: 'pending', label: 'Pending', count: 2 },
                  { id: 'inactive', label: 'Inactive', count: 1 },
                ]}
                selectedOption={vtSelectedQuickFilter}
                onApply={(optionId) => {
                  setVTSelectedQuickFilter(optionId);
                  console.log('V+T Filter applied:', optionId);
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
              selectedOption={vtSelectedSegment}
              onApply={(optionId) => {
                setVTSelectedSegment(optionId);
                console.log('V+T Segment applied:', optionId);
              }}
              triggerStyle="text"
            />

            {/* All Filters Button */}
            <Button
              variant="secondary"
              onClick={() => setVTIsFilterPanelOpen(true)}
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
              {vtFilterCount > 0 && (
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
                  {vtFilterCount > 999 ? '999' : vtFilterCount}
                </span>
              )}
            </Button>

            {/* Reset Button */}
            {vtHasActiveFilters && (
              <Button variant="text" onClick={handleVTResetFilters}>
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
              selectedOption={vtSortColumn || 'name'}
              sortDirection={vtSortDirection}
              onApply={(optionId, direction) => {
                setVTSortColumn(optionId);
                setVTSortDirection(direction);
                console.log('V+T Sort:', optionId, direction);
              }}
            />
          </div>
        </div>
      </div>

      {/* Bulk Edit Bar - Shows when items are selected */}
      {vtSelectedRows.size > 0 && (
        <div className="px-[var(--partnerhome-spacing-3000)]">
          <BulkEditBar
            selectedCount={vtSelectedRows.size}
            totalCount={vtFilteredData.length}
            onDeselectAll={() => setVTSelectedRows(new Set())}
            onSelectAll={handleVTSelectAll.bind(null, true)}
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
                {/* Chevron Header (empty) */}
                <th
                  style={{ 
                    fontFamily: "var(--partnerhome-font-family-base)", 
                    width: "48px", 
                    height: "48px",
                    maxHeight: "48px",
                    padding: "0 var(--partnerhome-spacing-1000)",
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    overflow: "hidden"
                  }}
                />

                {/* Checkbox Header */}
                <th
                  style={{ 
                    fontFamily: "var(--partnerhome-font-family-base)", 
                    width: "48px", 
                    height: "48px",
                    maxHeight: "48px",
                    padding: "0",
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    overflow: "hidden"
                  }}
                >
                  <div style={{ height: "48px", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <Checkbox
                      checked={vtAllSelected}
                      indeterminate={vtSomeSelected}
                      onChange={handleVTSelectAll}
                      id="vt-select-all"
                    />
                  </div>
                </th>

                {/* Product Name */}
                <SortableColumnHeader
                  label="Product Name"
                  columnId="productName"
                  currentSortColumn={vtSortColumn}
                  currentSortDirection={vtSortDirection}
                  onSort={(columnId, direction) => {
                    setVTSortColumn(columnId);
                    setVTSortDirection(direction);
                    console.log('V+T Sort:', columnId, direction);
                  }}
                  width="300px"
                  align="left"
                />

                {/* Status */}
                <SortableColumnHeader
                  label="Status"
                  columnId="status"
                  currentSortColumn={vtSortColumn}
                  currentSortDirection={vtSortDirection}
                  onSort={(columnId, direction) => {
                    setVTSortColumn(columnId);
                    setVTSortDirection(direction);
                    console.log('V+T Sort:', columnId, direction);
                  }}
                  align="left"
                />

                {/* Category */}
                <SortableColumnHeader
                  label="Category"
                  columnId="category"
                  currentSortColumn={vtSortColumn}
                  currentSortDirection={vtSortDirection}
                  onSort={(columnId, direction) => {
                    setVTSortColumn(columnId);
                    setVTSortDirection(direction);
                    console.log('V+T Sort:', columnId, direction);
                  }}
                  align="left"
                />

                {/* Date */}
                <SortableColumnHeader
                  label="Date"
                  columnId="date"
                  currentSortColumn={vtSortColumn}
                  currentSortDirection={vtSortDirection}
                  onSort={(columnId, direction) => {
                    setVTSortColumn(columnId);
                    setVTSortDirection(direction);
                    console.log('V+T Sort:', columnId, direction);
                  }}
                  align="left"
                />

                {/* Amount */}
                <SortableColumnHeader
                  label="Amount"
                  columnId="amount"
                  currentSortColumn={vtSortColumn}
                  currentSortDirection={vtSortDirection}
                  onSort={(columnId, direction) => {
                    setVTSortColumn(columnId);
                    setVTSortDirection(direction);
                    console.log('V+T Sort:', columnId, direction);
                  }}
                  align="left"
                />
              </tr>
            </thead>
            <tbody>
              {vtSortedData.map(row => renderVTTableRow(row))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-[var(--partnerhome-spacing-3000)] px-[var(--partnerhome-spacing-3000)]">
        <Pagination
          currentPage={vtCurrentPage}
          totalPages={Math.ceil(vtFilteredData.length / vtRowsPerPage)}
          rowsPerPage={vtRowsPerPage}
          onPageChange={(page) => {
            setVTCurrentPage(page);
            console.log('V+T Page changed:', page);
          }}
          onRowsPerPageChange={(rows) => {
            setVTRowsPerPage(rows);
            setVTCurrentPage(1);
            console.log('V+T Rows per page changed:', rows);
          }}
        />
      </div>

      {/* Filter Panel */}
      <FilterPanel
        isOpen={vtIsFilterPanelOpen}
        onClose={() => setVTIsFilterPanelOpen(false)}
        resultCount={vtFilteredData.length}
        onApplyFilters={handleVTApplyFilters}
        onResetFilters={handleVTResetFilters}
      />
    </>
  );
}