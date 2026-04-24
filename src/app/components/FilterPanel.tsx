import React, { useState, useRef, useEffect } from "react";
import { TextInput } from "./TextInput";
import { SearchInput } from "./SearchInput";
import ChevronDownIcon from '../../imports/ChevronDown';
import { Checkbox } from './Checkbox';
import { RadioButton } from './RadioButton';
import { Button } from './Button';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterAccordionProps {
  title: string;
  type: 'checkbox' | 'radio' | 'text';
  options?: FilterOption[];
  selectedValues: string[];
  onSelectionChange: (values: string[]) => void;
  textValue?: string;
  onTextChange?: (value: string) => void;
}

function FilterAccordion({
  title,
  type,
  options = [],
  selectedValues,
  onSelectionChange,
  textValue = '',
  onTextChange
}: FilterAccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const selectedCount = type === 'text' 
    ? (textValue ? 1 : 0) 
    : selectedValues.length;

  const handleCheckboxChange = (optionId: string, checked: boolean) => {
    if (checked) {
      onSelectionChange([...selectedValues, optionId]);
    } else {
      onSelectionChange(selectedValues.filter(id => id !== optionId));
    }
  };

  const handleRadioChange = (optionId: string) => {
    onSelectionChange([optionId]);
  };

  return (
    <div style={{
      borderBottom: '1px solid var(--partnerhome-border-color-base)',
    }}>
      {/* Accordion Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          width: '100%',
          padding: 'var(--partnerhome-spacing-2000)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontFamily: "'Lato', 'Inter', sans-serif",
          fontSize: 'var(--partnerhome-font-size-1000)',
          fontWeight: 'var(--partnerhome-font-weight-normal)',
          color: 'var(--partnerhome-text-color-base)',
          textAlign: 'left',
        }}
      >
        <span>{title}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--partnerhome-spacing-1000)' }}>
          {selectedCount > 0 && (
            <span style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: 'var(--partnerhome-font-size-500)',
              fontWeight: 'var(--partnerhome-font-weight-normal)',
              color: 'var(--partnerhome-text-color-secondary)',
            }}>
              {selectedCount}
            </span>
          )}
          <div style={{
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 200ms ease',
            display: 'flex',
            alignItems: 'center',
            width: '24px',
            height: '24px',
          }}>
            <ChevronDownIcon />
          </div>
        </div>
      </button>

      {/* Accordion Body */}
      {isExpanded && (
        <div style={{
          padding: '0 var(--partnerhome-spacing-2000) var(--partnerhome-spacing-2000) var(--partnerhome-spacing-2000)',
        }}>
          {type === 'checkbox' && options.map((option) => {
            const isSelected = selectedValues.includes(option.id);
            
            return (
            <div 
              key={option.id}
              onMouseEnter={(e) => {
                if (isSelected) {
                  e.currentTarget.style.background = 'var(--partnerhome-bg-color-secondaryhover)';
                } else {
                  e.currentTarget.style.background = 'var(--partnerhome-bg-color-tertiaryhover)';
                }
              }}
              onMouseLeave={(e) => {
                if (isSelected) {
                  e.currentTarget.style.background = 'var(--partnerhome-bg-color-secondaryidle)';
                } else {
                  e.currentTarget.style.background = 'var(--partnerhome-bg-color-tertiaryidle)';
                }
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--partnerhome-spacing-1000)',
                padding: '6px 0',
                marginBottom: 'var(--partnerhome-spacing-500)',
                borderRadius: 'var(--partnerhome-radius-large)',
                cursor: 'pointer',
                background: isSelected
                  ? 'var(--partnerhome-bg-color-secondaryidle)'
                  : 'var(--partnerhome-bg-color-tertiaryidle)',
                transition: 'background 150ms ease, box-shadow 150ms ease',
              }}
            >
              <Checkbox
                checked={isSelected}
                onChange={(checked) => handleCheckboxChange(option.id, checked)}
                id={`filter-${option.id}`}
              />
              <label
                htmlFor={`filter-${option.id}`}
                style={{
                  fontFamily: "'Lato', 'Inter', sans-serif",
                  fontSize: 'var(--partnerhome-font-size-1000)',
                  fontWeight: 'var(--partnerhome-font-weight-normal)',
                  color: 'var(--partnerhome-text-color-base)',
                  cursor: 'pointer',
                  flex: 1,
                }}
              >
                {option.label}
              </label>
            </div>
            );
          })}

          {type === 'radio' && options.map((option) => {
            const isSelected = selectedValues.includes(option.id);

            return (
              <div
                key={option.id}
                onMouseEnter={(e) => {
                  if (isSelected) {
                    e.currentTarget.style.background = 'var(--partnerhome-bg-color-secondaryhover)';
                  } else {
                    e.currentTarget.style.background = 'var(--partnerhome-bg-color-tertiaryhover)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (isSelected) {
                    e.currentTarget.style.background = 'var(--partnerhome-bg-color-secondaryidle)';
                  } else {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: 'var(--partnerhome-spacing-1000)',
                  marginBottom: 'var(--partnerhome-spacing-500)',
                  borderRadius: 'var(--partnerhome-radius-large)',
                  cursor: 'pointer',
                  background: isSelected
                    ? 'var(--partnerhome-bg-color-secondaryidle)'
                    : 'transparent',
                  transition: 'background 150ms ease',
                }}
              >
                <RadioButton
                  name={title}
                  label={option.label}
                  value={option.id}
                  checked={isSelected}
                  onChange={handleRadioChange}
                />
              </div>
            );
          })}

          {type === 'text' && onTextChange && (
            <TextInput
              label="Enter value"
              value={textValue}
              onChange={(e) => onTextChange(e.target.value)}
            />
          )}
        </div>
      )}
    </div>
  );
}

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  resultCount?: number;
  onApplyFilters?: (filters: { status: string[], category: string[], priority: string[], amount: string }) => void;
  onResetFilters?: () => void;
}

export function FilterPanel({ isOpen, onClose, resultCount = 0, onApplyFilters, onResetFilters }: FilterPanelProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilters, setStatusFilters] = useState<string[]>([]);
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [priorityFilter, setPriorityFilter] = useState<string[]>([]);
  const [amountFilter, setAmountFilter] = useState('');

  const handleResetAll = () => {
    setSearchQuery('');
    setStatusFilters([]);
    setCategoryFilters([]);
    setPriorityFilter([]);
    setAmountFilter('');
    if (onResetFilters) {
      onResetFilters();
    }
  };
  
  const handleShowResults = () => {
    console.log('FilterPanel - Show Results clicked'); // Debug log
    console.log('FilterPanel - statusFilters:', statusFilters); // Debug log
    console.log('FilterPanel - categoryFilters:', categoryFilters); // Debug log
    console.log('FilterPanel - priorityFilter:', priorityFilter); // Debug log
    console.log('FilterPanel - amountFilter:', amountFilter); // Debug log
    
    if (onApplyFilters) {
      const filtersToApply = {
        status: statusFilters,
        category: categoryFilters,
        priority: priorityFilter,
        amount: amountFilter,
      };
      console.log('FilterPanel - Calling onApplyFilters with:', filtersToApply); // Debug log
      onApplyFilters(filtersToApply);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999,
        }}
      />

      {/* Panel */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '400px',
        background: 'var(--partnerhome-bg-color-base)',
        boxShadow: 'var(--partnerhome-shadow-40)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{
          padding: 'var(--partnerhome-spacing-2000)',
          borderBottom: '1px solid var(--partnerhome-border-color-base)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 'var(--partnerhome-spacing-2000)',
          }}>
            <h2 style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: 'var(--partnerhome-font-size-3000)',
              fontWeight: 'var(--partnerhome-font-weight-bold)',
              color: 'var(--partnerhome-text-color-base)',
              margin: 0,
            }}>
              All Filters
            </h2>
            <Button
              variant="ghost"
              onClick={onClose}
              style={{ padding: '4px' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M18 6L6 18M6 6l12 12" 
                  stroke="var(--partnerhome-text-color-base)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>

          {/* Search Input */}
          <div style={{ width: '100%' }}>
            <SearchInput
              label="Search filters"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              containerStyle={{ width: '100%' }}
            />
          </div>
        </div>

        {/* Scrollable Content */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
        }}>
          <FilterAccordion
            title="Status"
            type="checkbox"
            options={[
              { id: 'Active', label: 'Active' },
              { id: 'Pending', label: 'Pending' },
              { id: 'Inactive', label: 'Inactive' },
              { id: 'Archived', label: 'Archived' },
            ]}
            selectedValues={statusFilters}
            onSelectionChange={setStatusFilters}
          />

          <FilterAccordion
            title="Category"
            type="checkbox"
            options={[
              { id: 'Electronics', label: 'Electronics' },
              { id: 'Home Goods', label: 'Home Goods' },
              { id: 'Clothing', label: 'Clothing' },
              { id: 'Furniture', label: 'Furniture' },
              { id: 'Books', label: 'Books' },
              { id: 'Toys', label: 'Toys' },
            ]}
            selectedValues={categoryFilters}
            onSelectionChange={setCategoryFilters}
          />

          <FilterAccordion
            title="Priority"
            type="radio"
            options={[
              { id: 'high', label: 'High' },
              { id: 'medium', label: 'Medium' },
              { id: 'low', label: 'Low' },
            ]}
            selectedValues={priorityFilter}
            onSelectionChange={setPriorityFilter}
          />

          <FilterAccordion
            title="Amount"
            type="text"
            selectedValues={[]}
            onSelectionChange={() => {}}
            textValue={amountFilter}
            onTextChange={setAmountFilter}
          />
        </div>

        {/* Sticky Footer */}
        <div style={{
          padding: 'var(--partnerhome-spacing-2000)',
          borderTop: '1px solid var(--partnerhome-border-color-base)',
          display: 'flex',
          gap: 'var(--partnerhome-spacing-1000)',
          background: 'var(--partnerhome-bg-color-base)',
        }}>
          <Button
            variant="secondary"
            onClick={handleResetAll}
            style={{
              flex: 1,
            }}
          >
            Reset All Filters
          </Button>
          <Button
            variant="primary"
            onClick={handleShowResults}
            style={{
              flex: 1,
            }}
          >
            Show {resultCount} Results
          </Button>
        </div>
      </div>
    </>
  );
}