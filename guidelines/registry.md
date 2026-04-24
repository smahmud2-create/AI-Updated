# Component Registry

> Complete list of reusable components. ALWAYS check here before building anything new.
> NEVER duplicate, recreate, or inline any element that already exists.

## UI Primitives (from ComponentsPage)

| Component | File Path | Exports |
|-----------|-----------|---------|
| **Button** | `/src/app/components/Button.tsx` | `Button`, `ButtonProps`, `ButtonVariant`, `ButtonSize` |
| **Checkbox** | `/src/app/components/Checkbox.tsx` | `Checkbox`, `CheckboxProps` |
| **Chip** | `/src/app/components/Chip.tsx` | `Chip`, `ChipProps` |
| **ChipShowcase** | `/src/app/components/ChipShowcase.tsx` | `ChipShowcase` |
| **Badge** | `/src/app/components/Badge.tsx` | `Badge`, `BadgeProps` |
| **BadgeShowcase** | `/src/app/components/BadgeShowcase.tsx` | `BadgeShowcase` |
| **CardContainer** | `/src/app/components/CardContainer.tsx` | `CardContainer` |
| **Dropdown** | `/src/app/components/Dropdown.tsx` | `Dropdown` |
| **DropdownWithCheckbox** | `/src/app/components/DropdownWithCheckbox.tsx` | `DropdownWithCheckbox` |
| **ListComponent** | `/src/app/components/ListComponent.tsx` | `ListComponent`, `ListItem` |
| **Modal** | `/src/app/components/Modal.tsx` | `Modal`, `ModalSmall`, `ModalMedium`, `ModalLarge`, `ModalSize` |
| **Pagination** | `/src/app/components/Pagination.tsx` | `Pagination` |
| **ProgressStepper** | `/src/app/components/ProgressStepper.tsx` | `ProgressStepper`, `ProgressStepperProps` |
| **RadioButton** | `/src/app/components/RadioButton.tsx` | `RadioButton`, `RadioGroup`, `RadioButtonProps`, `RadioGroupProps` |
| **SegmentedControl** | `/src/app/components/SegmentedControl.tsx` | `SegmentedControl`, `SegmentOption`, `SegmentedControlProps` |
| **TextInput** | `/src/app/components/TextInput.tsx` | `TextInput` |
| **SearchInput** | `/src/app/components/SearchInput.tsx` | `SearchInput` |
| **DropdownMenu** | `/src/app/components/DropdownMenu.tsx` | `DropdownMenu`, `DropdownMenuItem`, `DropdownMenuCheckboxItem`, `DropdownMenuRadioItem`, `DropdownMenuDivider`, `DropdownMenuEmptyState`, `DropdownMenuProps`, `DropdownMenuItemProps`, `DropdownMenuCheckboxItemProps`, `DropdownMenuRadioItemProps` |
| **Toggle** | `/src/app/components/Toggle.tsx` | `Toggle`, `ToggleProps` |
| **Icons** | `/src/app/components/icons.tsx` | `ChevronDownIcon`, `ChevronUpIcon`, `ChevronLeftIcon`, `ChevronRightIcon`, `ArrowUpIcon`, `ArrowDownIcon`, `XIcon`, `CheckIcon`, `CheckboxCheckIcon`, `IndeterminateIcon`, `AlertIcon`, `SuccessIcon`, `WarningIcon`, `InfoIcon`, `EditIcon`, `DeleteIcon`, `SearchIcon`, `FilterIcon`, `CloseIcon`, `DismissIcon`, `MoreIcon`, `MenuIcon`, `DownloadIcon`, `UploadIcon`, `CopyIcon`, `Icons` |

## Data Table Components (from DataTableSamplesPage)

| Component | File Path | Exports |
|-----------|-----------|---------|
| **TableRow** | `/src/app/components/TableRow.tsx` | `TableRow` |
| **SortableColumnHeader** | `/src/app/components/SortableColumnHeader.tsx` | `SortableColumnHeader` |
| **SortDropdown** | `/src/app/components/SortDropdown.tsx` | `SortDropdown` |
| **SegmentControlDropdown** | `/src/app/components/SegmentControlDropdown.tsx` | `SegmentControlDropdown` |
| **QuickFilterDropdown** | `/src/app/components/QuickFilterDropdown.tsx` | `QuickFilterDropdown` |
| **QuickFilterHierarchy** | `/src/app/components/QuickFilterHierarchy.tsx` | `QuickFilterHierarchy`, `HierarchyOption` |
| **QuickFilterWithChips** | `/src/app/components/QuickFilterWithChips.tsx` | `QuickFilterWithChips`, `CategoryOption`, `FilterCategory` |
| **FilterPanel** | `/src/app/components/FilterPanel.tsx` | `FilterPanel` |
| **RowsPerPageDropdown** | `/src/app/components/RowsPerPageDropdown.tsx` | `RowsPerPageDropdown` |
| **BulkEditBar** | `/src/app/components/BulkEditBar.tsx` | `BulkEditBar` |
| **CHTable** | `/src/app/components/CHTable.tsx` | `CHTable` (Column Hierarchy table) |
| **VTTable** | `/src/app/components/VTTable.tsx` | `VTTable` (Vertical Tabs table) |

## Analytics Components (from AnalyticsLibraryPage)

| Component | File Path | Exports |
|-----------|-----------|---------|
| **PerformanceCards** | `/src/app/components/analytics/PerformanceCards.tsx` | `PerformanceCards` (pair), `PerformanceCard` (individual) |
| **IncidentsReturnsChart** | `/src/app/components/analytics/IncidentsReturnsChart.tsx` | `IncidentsReturnsChart` |
| **MetricCards** | `/src/app/components/analytics/MetricCards.tsx` | `ActionMetricCards`, `DashboardMetricCards`, `AnalyticsMetricCards`, `MetricCardsSection` |
| **BarChart** | `/src/app/components/analytics/BarChart.tsx` | `PartRequestResponseBreakdown` |
| **KPICard** | `/src/app/components/analytics/KPICard.tsx` | `KPICard`, `KPICardsRow`, `defaultKPIActions`, `KPICardProps`, `KPICardAction` |

## Layout & Navigation

| Component | File Path | Exports |
|-----------|-----------|---------|
| **Layout** | `/src/app/components/Layout.tsx` | `Layout` |
| **PageContent** | `/src/app/components/PageContent.tsx` | `PageContent` |
| **Sidebar** | `/src/app/components/Sidebar.tsx` | `Sidebar` |
| **TopNav** | `/src/app/components/TopNav.tsx` | `TopNav` |
| **NavItem** | `/src/app/components/navigation/NavItem.tsx` | `NavItem` |
| **SvgIcon** | `/src/app/components/navigation/SvgIcon.tsx` | `SvgIcon` |
| **PartnerHomeLogo** | `/src/app/components/PartnerHomeLogo.tsx` | `PartnerHomeLogo` |

## Figma Assets

| Component | File Path | Exports |
|-----------|-----------|---------|
| **ImageWithFallback** | `/src/app/components/figma/ImageWithFallback.tsx` | `ImageWithFallback` (PROTECTED - do not modify) |
| **HelpButton** | `/src/imports/HelpButton` | Default export (Figma SVG) |
| **ChevronDown** | `/src/imports/ChevronDown` | Default export (Figma SVG) |
| **Search Icon** | `/src/imports/Search-6-3006` | Default export (Figma SVG) |

## Implementation Notes

### PerformanceCards
- Exports both `PerformanceCards` (pair with mock data) and `PerformanceCard` (individual, takes all props)
- Supports `condensed` prop for compact variant (120px chart height, 288px max width)

### KPICard
- `defaultKPIActions()` factory creates standard action buttons (ghost icon style)
- `KPICardsRow` renders a horizontal row of KPICards

### Tooltips
- All hover tooltips use `ReactDOM.createPortal` to render at `document.body`

### Badge Styles
- Prominent: solid purple `bg-color-primary` background with white `text-color-inverse` text
- Subtle: light purple `surface-color-primarysubtle` background with purple `text-color-primary` text
