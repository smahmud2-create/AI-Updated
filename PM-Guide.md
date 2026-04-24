# PartnerHome Component Guide (For Humans)

> **NOTE:** This is a guide for product managers and designers, not for the AI.
> The AI uses `/Guidelines.md` and `/guidelines/` files instead.
> Do not reference this file in AI prompts.

---

## How to Prompt Figma Make

### Use exact component names:
- "Add a **Toggle** for enabling notifications"
- "Add a **Dropdown** for selecting a country"
- "Put a **ProgressStepper** at the top with 4 steps"

### Reference existing pages:
- "Build a page like the **Data Table Samples Page** with columns for Order ID, Customer, Status"
- "Create a dashboard like the **Analytics Library Page** with shipping metrics"

### Combine components:
- "Add a **FilterPanel** with checkboxes for Status and radio buttons for Priority"
- "Put a **SortDropdown** and **QuickFilterDropdown** above the table"

---

## Component Names Quick Reference

**Controls:** Checkbox, RadioButton, Toggle, TextInput, Dropdown, DropdownWithCheckbox, Chip
**Buttons:** Primary Button, Secondary Button, Icon Ghost Button
**Navigation:** Pagination, ProgressStepper, SegmentedControl, Modal
**Tables:** SortDropdown, SegmentControlDropdown, QuickFilterDropdown, QuickFilterHierarchy, QuickFilterWithChips, FilterPanel, SortableColumnHeader, TableRow, BulkEditBar
**Analytics:** KPICard, PerformanceCards, MetricCards, BarChart, IncidentsReturnsChart
**Layout:** CardContainer, ListComponent, BadgeShowcase

---

## Rules of Thumb
1. Say the component name exactly — "Toggle" not "switch"
2. Point to a reference page for similar layouts
3. Components already have correct colors, hover states, and spacing
4. Don't ask to change a source component — ask for a new variation
5. All pages share the same design tokens automatically
