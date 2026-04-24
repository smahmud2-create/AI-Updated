import React, { useState } from "react";
import { Chip } from "./Chip";
import { Search, Tag, Heart, Star } from "lucide-react";

export function ChipShowcase() {
  // Filter chips (button type - dismissible)
  const [activeFilters, setActiveFilters] = useState<string[]>([
    "electronics",
    "active",
    "high-priority",
  ]);

  // Checkbox chips (multi-select)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "electronics",
  ]);

  // Radio chips (single-select for size)
  const [selectedSize, setSelectedSize] = useState<string>("medium");

  // Radio chips (single-select for view)
  const [selectedView, setSelectedView] = useState<string>("grid");

  const handleRemoveFilter = (filterId: string) => {
    setActiveFilters((prev) => prev.filter((id) => id !== filterId));
  };

  const handleToggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div
      style={{
        padding: "var(--partnerhome-spacing-3000)",
        background: "var(--partnerhome-bg-color-base)",
      }}
    >
      <h2
        style={{
          fontFamily: "'Lato', 'Inter', sans-serif",
          fontSize: "var(--partnerhome-font-size-3000)",
          fontWeight: "var(--partnerhome-font-weight-bold)",
          color: "var(--partnerhome-text-color-base)",
          marginBottom: "var(--partnerhome-spacing-3000)",
        }}
      >
        Chip Component Library
      </h2>

      {/* Section: Interactive Filter Chips (Button Type) */}
      <div
        style={{
          marginBottom: "var(--partnerhome-spacing-4000)",
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
          Filter Chips (Button Type - Dismissible)
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
          Filter chips represent active filters. Click the × to remove a filter.
          Used for displaying applied filters that can be dismissed.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--partnerhome-spacing-1000)",
          }}
        >
          {activeFilters.includes("electronics") && (
            <Chip
              label="Electronics"
              type="button"
              onDismiss={() => handleRemoveFilter("electronics")}
            />
          )}
          {activeFilters.includes("active") && (
            <Chip
              label="Active Status"
              type="button"
              onDismiss={() => handleRemoveFilter("active")}
            />
          )}
          {activeFilters.includes("high-priority") && (
            <Chip
              label="High Priority"
              type="button"
              onDismiss={() => handleRemoveFilter("high-priority")}
            />
          )}
        </div>
      </div>

      {/* Section: Checkbox Chips (Multi-Select) */}
      <div
        style={{
          marginBottom: "var(--partnerhome-spacing-4000)",
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
          Checkbox Chips (Multi-Select)
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
          Select multiple categories. Selected chips show purple background,
          unselected show white with border.
        </p>

        {/* Default Size */}
        <div style={{ marginBottom: "var(--partnerhome-spacing-2000)" }}>
          <h4
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-1000)",
            }}
          >
            Default Size:
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--partnerhome-spacing-1000)",
            }}
          >
            <Chip
              label="Electronics"
              type="checkbox"
              selected={selectedCategories.includes("electronics")}
              onClick={() => handleToggleCategory("electronics")}
            />
            <Chip
              label="Home Goods"
              type="checkbox"
              selected={selectedCategories.includes("home-goods")}
              onClick={() => handleToggleCategory("home-goods")}
            />
            <Chip
              label="Clothing"
              type="checkbox"
              selected={selectedCategories.includes("clothing")}
              onClick={() => handleToggleCategory("clothing")}
            />
            <Chip
              label="Food & Beverage"
              type="checkbox"
              selected={selectedCategories.includes("food")}
              onClick={() => handleToggleCategory("food")}
            />
            <Chip
              label="Disabled"
              type="checkbox"
              selected={false}
              disabled={true}
            />
          </div>
        </div>

        {/* Condensed Size */}
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
            Condensed Size:
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--partnerhome-spacing-1000)",
            }}
          >
            <Chip
              label="Electronics"
              type="checkbox"
              size="condensed"
              selected={selectedCategories.includes("electronics")}
              onClick={() => handleToggleCategory("electronics")}
            />
            <Chip
              label="Home Goods"
              type="checkbox"
              size="condensed"
              selected={selectedCategories.includes("home-goods")}
              onClick={() => handleToggleCategory("home-goods")}
            />
            <Chip
              label="Clothing"
              type="checkbox"
              size="condensed"
              selected={selectedCategories.includes("clothing")}
              onClick={() => handleToggleCategory("clothing")}
            />
          </div>
        </div>
      </div>

      {/* Section: Radio Chips (Single-Select) */}
      <div
        style={{
          marginBottom: "var(--partnerhome-spacing-4000)",
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
          Radio Chips (Single-Select)
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
          Select one option from a limited set. Only one chip can be selected at
          a time.
        </p>

        {/* Size Selection */}
        <div style={{ marginBottom: "var(--partnerhome-spacing-2000)" }}>
          <h4
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-1000)",
            }}
          >
            Size Selection:
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--partnerhome-spacing-1000)",
            }}
          >
            <Chip
              label="Small"
              type="radio"
              name="size"
              selected={selectedSize === "small"}
              onClick={() => setSelectedSize("small")}
            />
            <Chip
              label="Medium"
              type="radio"
              name="size"
              selected={selectedSize === "medium"}
              onClick={() => setSelectedSize("medium")}
            />
            <Chip
              label="Large"
              type="radio"
              name="size"
              selected={selectedSize === "large"}
              onClick={() => setSelectedSize("large")}
            />
            <Chip
              label="X-Large"
              type="radio"
              name="size"
              selected={selectedSize === "x-large"}
              onClick={() => setSelectedSize("x-large")}
            />
          </div>
        </div>

        {/* View Mode Selection */}
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
            View Mode:
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--partnerhome-spacing-1000)",
            }}
          >
            <Chip
              label="Grid View"
              type="radio"
              name="view"
              selected={selectedView === "grid"}
              onClick={() => setSelectedView("grid")}
            />
            <Chip
              label="List View"
              type="radio"
              name="view"
              selected={selectedView === "list"}
              onClick={() => setSelectedView("list")}
            />
          </div>
        </div>
      </div>

      {/* Section: Action Chips (Link Type with Icons) */}
      <div
        style={{
          marginBottom: "var(--partnerhome-spacing-4000)",
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
          Action Chips (Link Type with Icons)
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
          Action chips trigger contextual actions. Must include an icon to
          indicate the action type.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--partnerhome-spacing-1000)",
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
          <Chip
            label="Add to favorites"
            type="link"
            icon={<Heart size={16} />}
            href="#favorites"
            onClick={() => console.log("Add to favorites")}
          />
          <Chip
            label="Top rated"
            type="link"
            icon={<Star size={16} />}
            href="#rated"
            onClick={() => console.log("Top rated")}
          />
        </div>
      </div>

      {/* Section: Icon Chips */}
      <div
        style={{
          marginBottom: "var(--partnerhome-spacing-4000)",
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
          Chip with Icons (Checkbox Type)
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
          Chips can include leading icons for visual clarity.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--partnerhome-spacing-1000)",
          }}
        >
          <Chip
            label="Favorites"
            type="checkbox"
            icon={<Heart size={16} />}
            selected={selectedCategories.includes("favorites")}
            onClick={() => handleToggleCategory("favorites")}
          />
          <Chip
            label="Top Rated"
            type="checkbox"
            icon={<Star size={16} />}
            selected={selectedCategories.includes("top-rated")}
            onClick={() => handleToggleCategory("top-rated")}
          />
          <Chip
            label="Featured"
            type="checkbox"
            icon={<Tag size={16} />}
            selected={selectedCategories.includes("featured")}
            onClick={() => handleToggleCategory("featured")}
          />
        </div>
      </div>

      {/* Section: All States Examples */}
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
          All Chip States
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
          Demonstration of all available states: idle, hover, active, focus, and
          disabled.
        </p>

        {/* Unselected States */}
        <div style={{ marginBottom: "var(--partnerhome-spacing-2000)" }}>
          <h4
            style={{
              fontFamily: "'Lato', 'Inter', sans-serif",
              fontSize: "var(--partnerhome-font-size-1000)",
              fontWeight: "var(--partnerhome-font-weight-bold)",
              color: "var(--partnerhome-text-color-base)",
              marginBottom: "var(--partnerhome-spacing-1000)",
            }}
          >
            Unselected:
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--partnerhome-spacing-1000)",
            }}
          >
            <Chip label="Idle" type="checkbox" selected={false} />
            <Chip
              label="Disabled"
              type="checkbox"
              selected={false}
              disabled={true}
            />
          </div>
        </div>

        {/* Selected States */}
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
            Selected:
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--partnerhome-spacing-1000)",
            }}
          >
            <Chip label="Selected" type="checkbox" selected={true} />
            <Chip
              label="Selected Disabled"
              type="checkbox"
              selected={true}
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
