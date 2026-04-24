/**
 * SearchInput — Shorthand wrapper around TextInput pre-configured with search icon.
 * 
 * Usage:
 *   <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />
 * 
 * This is the canonical search field component. Use it anywhere you need a search input
 * instead of manually wiring <TextInput label="Search" icon={<FigmaSearchIcon />} />.
 */

import React, { InputHTMLAttributes } from "react";
import { TextInput } from "./TextInput";
import FigmaSearchIcon from "../../imports/Search-6-3006";

interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text — defaults to "Search" */
  label?: string;
  /** Helper message below the input */
  helperMessage?: string;
  /** Error state */
  error?: boolean;
  /** Container style overrides */
  containerStyle?: React.CSSProperties;
}

export function SearchInput({
  label = "Search",
  helperMessage,
  error,
  containerStyle,
  ...inputProps
}: SearchInputProps) {
  return (
    <TextInput
      label={label}
      icon={<FigmaSearchIcon />}
      helperMessage={helperMessage}
      error={error}
      containerStyle={containerStyle}
      {...inputProps}
    />
  );
}
