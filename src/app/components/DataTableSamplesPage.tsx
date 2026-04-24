import React, { useState } from "react";
import { CHTable } from "./CHTable";
import { VTTable } from "./VTTable";
import { PTable } from "./PTable";
import { TableRow } from "./TableRow";
import { SortDropdown } from "./SortDropdown";
import { SegmentControlDropdown } from "./SegmentControlDropdown";
import { QuickFilterDropdown } from "./QuickFilterDropdown";
import { SearchInput } from "./SearchInput";
import { Pagination } from "./Pagination";
import HelpButton from "../../imports/HelpButton";
import { FilterPanel } from "./FilterPanel";
import ChevronDown from "../../imports/ChevronDown-2123-756";
import { SortableColumnHeader } from "./SortableColumnHeader";
import { Button } from "./Button";

interface SampleData {
  id: number;
  name: string;
  status: string;
  category: string;
  date: string;
  amount: string;
}

interface HierarchyData extends SampleData {
  children?: HierarchyData[];
  parentId?: number;
}

const simpleTableData: HierarchyData[] = [
  {
    id: 1,
    name: "Product Alpha",
    status: "Active",
    category: "Electronics",
    date: "2024-01-15",
    amount: "$1,250.00",
  },
  {
    id: 2,
    name: "Product Beta",
    status: "Pending",
    category: "Home Goods",
    date: "2024-01-18",
    amount: "$875.50",
  },
  {
    id: 3,
    name: "Product Gamma",
    status: "Active",
    category: "Electronics",
    date: "2024-01-20",
    amount: "$2,100.00",
  },
  {
    id: 4,
    name: "Product Delta",
    status: "Inactive",
    category: "Clothing",
    date: "2024-01-22",
    amount: "$450.75",
  },
  {
    id: 5,
    name: "Product Epsilon",
    status: "Active",
    category: "Home Goods",
    date: "2024-01-25",
    amount: "$1,680.00",
  },
];

export function DataTableSamplesPage() {
  const [activeTab, setActiveTab] = useState<'simpleview' | 'chtable' | 'vttable' | 'ptable'>('ptable');

  return (
    <div className="w-full">
      {/* Grey Background Section - Title + Tabs */}
      <div className="bg-[var(--partnerhome-surface-color-inversesubtle)] pb-0 pt-[var(--partnerhome-spacing-3000)] px-[var(--partnerhome-spacing-3000)]">
        {/* Title + Global CTAs Row */}
        <div className="h-[48px] relative mb-[var(--partnerhome-spacing-2000)]">
          {/* Page Title (left) */}
          <div className="absolute left-0 top-[4px]">
            <h1
              className="text-[var(--partnerhome-font-size-4000)] font-[var(--partnerhome-font-weight-bold)] text-[var(--partnerhome-text-color-base)]"
              style={{ fontFamily: "'Lato', 'Inter', sans-serif" }}
            >
              Data Table Samples
            </h1>
          </div>

          {/* Buttons (right) - Flush aligned */}
          <div className="absolute top-0 right-0 flex items-center gap-[var(--partnerhome-spacing-1000)]">
            {/* More Button with Chevron */}
            <Button variant="secondary" style={{ gap: "var(--partnerhome-spacing-1000)" }}>
              More
              <div style={{ width: "24px", height: "24px", position: "relative", flexShrink: 0 }}>
                <ChevronDown />
              </div>
            </Button>

            {/* Secondary Button */}
            <Button variant="secondary">
              Secondary
            </Button>

            {/* Primary Button */}
            <Button variant="primary">
              Primary
            </Button>
          </div>

          {/* Help Button - Positioned independently, aligned with buttons */}
          <div className="absolute right-0" style={{ top: "70px" }}>
            <HelpButton />
          </div>
        </div>

        {/* Tabs */}
        <div className="relative flex items-end gap-0">
          <div className="flex gap-0">
            <button
              onClick={() => setActiveTab('simpleview')}
              onMouseEnter={(e) => {
                if (activeTab !== 'simpleview') {
                  e.currentTarget.style.backgroundColor = 'var(--partnerhome-surface-color-primarysubtle)';
                  e.currentTarget.style.borderTop = '2px solid var(--partnerhome-border-color-primary)';
                  e.currentTarget.style.paddingTop = '0';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'simpleview') {
                  e.currentTarget.style.backgroundColor = 'var(--partnerhome-bg-color-neutralsubtle)';
                  e.currentTarget.style.borderTop = 'none';
                  e.currentTarget.style.paddingTop = '2px';
                }
              }}
              className={`tab-button h-[48px] px-[var(--partnerhome-spacing-2000)] relative ${
                activeTab === 'simpleview' ? 'tab-selected' : ''
              }`}
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: activeTab === 'simpleview' ? "var(--partnerhome-font-weight-bold)" : "var(--partnerhome-font-weight-normal)",
                color: activeTab === 'simpleview' ? "var(--partnerhome-text-color-primary)" : "var(--partnerhome-text-color-base)",
                backgroundColor: activeTab === 'simpleview' ? 'white' : 'var(--partnerhome-bg-color-neutralsubtle)',
                borderTop: activeTab === 'simpleview' ? "2px solid var(--partnerhome-border-color-primary)" : "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: activeTab === 'simpleview' ? "2px solid white" : "none",
                paddingTop: activeTab === 'simpleview' ? '0' : '2px',
                paddingBottom: '0',
                boxSizing: "border-box",
                transition: "background-color 150ms ease, color 150ms ease",
                cursor: "pointer"
              }}
            >
              Simple View
            </button>
            <button
              onClick={() => setActiveTab('chtable')}
              onMouseEnter={(e) => {
                if (activeTab !== 'chtable') {
                  e.currentTarget.style.backgroundColor = 'var(--partnerhome-surface-color-primarysubtle)';
                  e.currentTarget.style.borderTop = '2px solid var(--partnerhome-border-color-primary)';
                  e.currentTarget.style.paddingTop = '0';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'chtable') {
                  e.currentTarget.style.backgroundColor = 'var(--partnerhome-bg-color-neutralsubtle)';
                  e.currentTarget.style.borderTop = 'none';
                  e.currentTarget.style.paddingTop = '2px';
                }
              }}
              className={`tab-button h-[48px] px-[var(--partnerhome-spacing-2000)] relative ${
                activeTab === 'chtable' ? 'tab-selected' : ''
              }`}
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: activeTab === 'chtable' ? "var(--partnerhome-font-weight-bold)" : "var(--partnerhome-font-weight-normal)",
                color: activeTab === 'chtable' ? "var(--partnerhome-text-color-primary)" : "var(--partnerhome-text-color-base)",
                backgroundColor: activeTab === 'chtable' ? 'white' : 'var(--partnerhome-bg-color-neutralsubtle)',
                borderTop: activeTab === 'chtable' ? "2px solid var(--partnerhome-border-color-primary)" : "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: activeTab === 'chtable' ? "2px solid white" : "none",
                paddingTop: activeTab === 'chtable' ? '0' : '2px',
                paddingBottom: '0',
                boxSizing: "border-box",
                transition: "background-color 150ms ease, color 150ms ease",
                cursor: "pointer"
              }}
            >
              C+H Table
            </button>
            <button
              onClick={() => setActiveTab('vttable')}
              onMouseEnter={(e) => {
                if (activeTab !== 'vttable') {
                  e.currentTarget.style.backgroundColor = 'var(--partnerhome-surface-color-primarysubtle)';
                  e.currentTarget.style.borderTop = '2px solid var(--partnerhome-border-color-primary)';
                  e.currentTarget.style.paddingTop = '0';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'vttable') {
                  e.currentTarget.style.backgroundColor = 'var(--partnerhome-bg-color-neutralsubtle)';
                  e.currentTarget.style.borderTop = 'none';
                  e.currentTarget.style.paddingTop = '2px';
                }
              }}
              className={`tab-button h-[48px] px-[var(--partnerhome-spacing-2000)] relative ${
                activeTab === 'vttable' ? 'tab-selected' : ''
              }`}
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: activeTab === 'vttable' ? "var(--partnerhome-font-weight-bold)" : "var(--partnerhome-font-weight-normal)",
                color: activeTab === 'vttable' ? "var(--partnerhome-text-color-primary)" : "var(--partnerhome-text-color-base)",
                backgroundColor: activeTab === 'vttable' ? 'white' : 'var(--partnerhome-bg-color-neutralsubtle)',
                borderTop: activeTab === 'vttable' ? "2px solid var(--partnerhome-border-color-primary)" : "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: activeTab === 'vttable' ? "2px solid white" : "none",
                paddingTop: activeTab === 'vttable' ? '0' : '2px',
                paddingBottom: '0',
                boxSizing: "border-box",
                transition: "background-color 150ms ease, color 150ms ease",
                cursor: "pointer"
              }}
            >
              V+T Table
            </button>
            <button
              onClick={() => setActiveTab('ptable')}
              onMouseEnter={(e) => {
                if (activeTab !== 'ptable') {
                  e.currentTarget.style.backgroundColor = 'var(--partnerhome-surface-color-primarysubtle)';
                  e.currentTarget.style.borderTop = '2px solid var(--partnerhome-border-color-primary)';
                  e.currentTarget.style.paddingTop = '0';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'ptable') {
                  e.currentTarget.style.backgroundColor = 'var(--partnerhome-bg-color-neutralsubtle)';
                  e.currentTarget.style.borderTop = 'none';
                  e.currentTarget.style.paddingTop = '2px';
                }
              }}
              className={`tab-button h-[48px] px-[var(--partnerhome-spacing-2000)] relative ${
                activeTab === 'ptable' ? 'tab-selected' : ''
              }`}
              style={{
                fontFamily: "'Lato', 'Inter', sans-serif",
                fontSize: "var(--partnerhome-font-size-1000)",
                fontWeight: activeTab === 'ptable' ? "var(--partnerhome-font-weight-bold)" : "var(--partnerhome-font-weight-normal)",
                color: activeTab === 'ptable' ? "var(--partnerhome-text-color-primary)" : "var(--partnerhome-text-color-base)",
                backgroundColor: activeTab === 'ptable' ? 'white' : 'var(--partnerhome-bg-color-neutralsubtle)',
                borderTop: activeTab === 'ptable' ? "2px solid var(--partnerhome-border-color-primary)" : "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: activeTab === 'ptable' ? "2px solid white" : "none",
                paddingTop: activeTab === 'ptable' ? '0' : '2px',
                paddingBottom: '0',
                boxSizing: "border-box",
                transition: "background-color 150ms ease, color 150ms ease",
                cursor: "pointer"
              }}
            >
              P Table
            </button>
          </div>
        </div>
      </div>

      {/* White Background Section - Tab Content */}
      <div className="bg-white">
        {activeTab === 'simpleview' ? (
          <SimpleViewTab />
        ) : activeTab === 'chtable' ? (
          <CHTable />
        ) : activeTab === 'vttable' ? (
          <VTTable />
        ) : (
          <PTable />
        )}
      </div>
    </div>
  );
}

function SimpleViewTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedQuickFilter, setSelectedQuickFilter] = useState("all");
  const [selectedSegment, setSelectedSegment] = useState("all");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  
  // Track applied filters from FilterPanel
  const [appliedPanelFilters, setAppliedPanelFilters] = useState({
    status: [] as string[],
    category: [] as string[],
    priority: [] as string[],
    amount: '',
  });

  const hasActiveFilters = selectedQuickFilter !== 'all' || selectedSegment !== 'all' || searchQuery.length > 0;
  
  // Calculate total filter count for badge
  const filterCount = appliedPanelFilters.status.length + 
                     appliedPanelFilters.category.length + 
                     appliedPanelFilters.priority.length + 
                     (appliedPanelFilters.amount ? 1 : 0);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedQuickFilter("all");
    setSelectedSegment("all");
    setSortColumn(null);
    setSortDirection(null);
    setAppliedPanelFilters({
      status: [],
      category: [],
      priority: [],
      amount: '',
    });
  };
  
  const handleApplyFilters = (filters: { status: string[], category: string[], priority: string[], amount: string }) => {
    console.log('Applying filters:', filters); // Debug log
    setAppliedPanelFilters(filters);
    setIsFilterPanelOpen(false);
  };

  const filteredData = simpleTableData.filter(row => {
    // Apply FilterPanel filters
    if (appliedPanelFilters.status.length > 0 && !appliedPanelFilters.status.includes(row.status)) {
      console.log('Filtering out by status:', row.name, row.status); // Debug log
      return false;
    }
    if (appliedPanelFilters.category.length > 0 && !appliedPanelFilters.category.includes(row.category)) {
      console.log('Filtering out by category:', row.name, row.category); // Debug log
      return false;
    }
    // Add more filter logic as needed
    return true;
  });

  // Apply sorting
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn || !sortDirection) return 0;

    let aValue: any;
    let bValue: any;

    switch (sortColumn) {
      case 'name':
        aValue = a.name;
        bValue = b.name;
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
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    // Handle number/date comparison
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    } else {
      return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
    }
  });

  console.log('Applied filters:', appliedPanelFilters); // Debug log
  console.log('Filtered data length:', filteredData.length); // Debug log

  const renderRowSimpleView = (row: HierarchyData) => {
    return (
      <TableRow key={row.id} isOdd={row.id % 2 === 0}>
        <td
          className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-base)]"
          style={{ fontFamily: "var(--partnerhome-font-family-base)", height: "48px", maxHeight: "48px", padding: "0 var(--partnerhome-spacing-2000)", overflow: "hidden", boxSizing: "border-box", verticalAlign: "middle" }}
        >
          {row.name}
        </td>
        <td
          className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-base)]"
          style={{ fontFamily: "var(--partnerhome-font-family-base)", height: "48px", maxHeight: "48px", padding: "0 var(--partnerhome-spacing-2000)", overflow: "hidden", boxSizing: "border-box", verticalAlign: "middle" }}
        >
          {row.status}
        </td>
        <td
          className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-base)]"
          style={{ fontFamily: "var(--partnerhome-font-family-base)", height: "48px", maxHeight: "48px", padding: "0 var(--partnerhome-spacing-2000)", overflow: "hidden", boxSizing: "border-box", verticalAlign: "middle" }}
        >
          {row.category}
        </td>
        <td
          className="text-[var(--partnerhome-font-size-1000)] font-[var(--partnerhome-font-weight-normal)] text-[var(--partnerhome-text-color-base)]"
          style={{ fontFamily: "var(--partnerhome-font-family-base)", height: "48px", maxHeight: "48px", padding: "0 var(--partnerhome-spacing-2000)", overflow: "hidden", boxSizing: "border-box", verticalAlign: "middle" }}
        >
          {row.date}
        </td>
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
    <div className="w-full pt-[var(--partnerhome-spacing-3000)]">
      {/* Action Bar */}
      <div className="flex items-center justify-between mb-[var(--partnerhome-spacing-2000)] px-[var(--partnerhome-spacing-3000)]">
        
        <div className="flex items-center gap-[var(--partnerhome-spacing-1000)]">
          <SearchInput
            id="simple-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div style={{ marginLeft: 'var(--partnerhome-spacing-1000)' }}>
            <QuickFilterDropdown
              options={[
                { id: 'all', label: 'All Items', count: 5 },
                { id: 'active', label: 'Active', count: 3 },
                { id: 'pending', label: 'Pending', count: 1 },
                { id: 'inactive', label: 'Inactive', count: 1 },
              ]}
              selectedOption={selectedQuickFilter}
              onApply={(optionId) => {
                setSelectedQuickFilter(optionId);
                console.log('Filter applied:', optionId);
              }}
              triggerStyle="text"
            />
          </div>
          <SegmentControlDropdown
            label="Segment"
            options={[
              { id: 'all', label: 'All Segments' },
              { id: 'electronics', label: 'Electronics' },
              { id: 'home-goods', label: 'Home Goods' },
              { id: 'clothing', label: 'Clothing' },
            ]}
            selectedOption={selectedSegment}
            onApply={(optionId) => {
              setSelectedSegment(optionId);
              console.log('Segment applied:', optionId);
            }}
            triggerStyle="text"
          />
          
          {/* All filters button */}
          <Button
            variant="secondary"
            onClick={() => setIsFilterPanelOpen(true)}
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
            {filterCount > 0 && (
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
                {filterCount > 999 ? '999' : filterCount}
              </span>
            )}
          </Button>

          {/* Reset button - only shows when filters are active */}
          {hasActiveFilters && (
            <Button variant="text" onClick={handleResetFilters}>
              <span style={{ color: "var(--partnerhome-text-color-primary)" }}>Reset</span>
            </Button>
          )}
        </div>
        <div className="flex items-center gap-[var(--partnerhome-spacing-1000)]">
          <SortDropdown
            options={[
              { id: 'name', label: 'Name' },
              { id: 'status', label: 'Status' },
              { id: 'category', label: 'Category' },
              { id: 'date', label: 'Date' },
              { id: 'amount', label: 'Amount' },
            ]}
            selectedOption={sortColumn || 'name'}
            sortDirection={sortDirection}
            onApply={(optionId, direction) => {
              setSortColumn(optionId);
              setSortDirection(direction);
              console.log('Sort:', optionId, direction);
            }}
          />
        </div>
      </div>

      {/* Table */}
      <div className="px-[var(--partnerhome-spacing-3000)]">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ height: "48px", background: "#F5F5F5" }}>
                <SortableColumnHeader
                  label="Product Name"
                  columnId="name"
                  currentSortColumn={sortColumn}
                  currentSortDirection={sortDirection}
                  onSort={(columnId, direction) => {
                    setSortColumn(columnId);
                    setSortDirection(direction);
                    console.log('Sort:', columnId, direction);
                  }}
                  width="300px"
                  align="left"
                />
                <SortableColumnHeader
                  label="Status"
                  columnId="status"
                  currentSortColumn={sortColumn}
                  currentSortDirection={sortDirection}
                  onSort={(columnId, direction) => {
                    setSortColumn(columnId);
                    setSortDirection(direction);
                    console.log('Sort:', columnId, direction);
                  }}
                  align="left"
                />
                <SortableColumnHeader
                  label="Category"
                  columnId="category"
                  currentSortColumn={sortColumn}
                  currentSortDirection={sortDirection}
                  onSort={(columnId, direction) => {
                    setSortColumn(columnId);
                    setSortDirection(direction);
                    console.log('Sort:', columnId, direction);
                  }}
                  align="left"
                />
                <SortableColumnHeader
                  label="Date"
                  columnId="date"
                  currentSortColumn={sortColumn}
                  currentSortDirection={sortDirection}
                  onSort={(columnId, direction) => {
                    setSortColumn(columnId);
                    setSortDirection(direction);
                    console.log('Sort:', columnId, direction);
                  }}
                  align="left"
                />
                <SortableColumnHeader
                  label="Amount"
                  columnId="amount"
                  currentSortColumn={sortColumn}
                  currentSortDirection={sortDirection}
                  onSort={(columnId, direction) => {
                    setSortColumn(columnId);
                    setSortDirection(direction);
                    console.log('Sort:', columnId, direction);
                  }}
                  align="left"
                />
              </tr>
            </thead>
            <tbody>
              {sortedData.map(row => renderRowSimpleView(row))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-[var(--partnerhome-spacing-3000)] px-[var(--partnerhome-spacing-3000)]">
        <Pagination
          currentPage={1}
          totalPages={1}
          rowsPerPage={50}
          onPageChange={(page) => console.log('Page changed:', page)}
          onRowsPerPageChange={(rows) => console.log('Rows per page changed:', rows)}
        />
      </div>

      {/* Filter Panel */}
      <FilterPanel
        isOpen={isFilterPanelOpen}
        onClose={() => setIsFilterPanelOpen(false)}
        resultCount={simpleTableData.length}
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
      />
    </div>
  );
}