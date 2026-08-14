import React, { useState, useEffect } from 'react';
import {
  OCCASIONS,
  PRICE_RANGES,
  getFabricsForCategory,
  getColorsForCategory,
} from '../../data/products';

// How many entries to show before the "Show more" toggle kicks in.
const FABRIC_PREVIEW = 5;
const COLOR_PREVIEW = 10;

export const FilterSidebar = ({
  selectedCategory,
  selectedFabric,
  setSelectedFabric,
  selectedOccasion,
  setSelectedOccasion,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedColorFilter,
  setSelectedColorFilter,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showAllFabrics, setShowAllFabrics] = useState(false);
  const [showAllColors, setShowAllColors] = useState(false);

  // Both lists are derived from the catalog, so adding a product with a new
  // fabric or colour makes it appear here with no extra edits.
  const fabrics = getFabricsForCategory(selectedCategory);
  const colors = getColorsForCategory(selectedCategory);

  // If the active selection sits past the preview cut-off, open the list so the
  // user can still see what is ticked.
  useEffect(() => {
    if (selectedFabric && !fabrics.slice(0, FABRIC_PREVIEW).includes(selectedFabric)) {
      setShowAllFabrics(true);
    }
  }, [selectedFabric, fabrics]);

  useEffect(() => {
    if (
      selectedColorFilter &&
      !colors.slice(0, COLOR_PREVIEW).some((c) => c.name === selectedColorFilter)
    ) {
      setShowAllColors(true);
    }
  }, [selectedColorFilter, colors]);

  const visibleFabrics = showAllFabrics ? fabrics : fabrics.slice(0, FABRIC_PREVIEW);
  const visibleColors = showAllColors ? colors : colors.slice(0, COLOR_PREVIEW);

  const toggleButton = (isOpen, setOpen, hiddenCount) => (
    <button
      onClick={() => setOpen(!isOpen)}
      className="mt-4 font-label-caps text-label-caps text-primary uppercase tracking-wider underline underline-offset-4 hover:text-secondary transition-colors"
    >
      {isOpen ? 'Show Less' : `Show ${hiddenCount} More`}
    </button>
  );

  const heading = (label) => (
    <h3 className="font-label-caps text-label-caps text-primary mb-4 uppercase tracking-widest font-semibold">
      {label}
    </h3>
  );

  const content = (
    <div className="space-y-8">
      {/* Fabric Filter */}
      {fabrics.length > 1 && (
        <div className="border-b border-outline-variant/30 pb-6">
          {heading('Fabric')}
          <div className="space-y-2 font-body-md text-body-md text-on-surface-variant">
            {visibleFabrics.map((fabric) => {
              const isSelected = selectedFabric === fabric;
              return (
                <button
                  key={fabric}
                  onClick={() => setSelectedFabric(isSelected ? null : fabric)}
                  className={`w-full flex items-center gap-3 text-left group transition-colors ${
                    isSelected ? 'text-primary font-semibold' : 'hover:text-primary'
                  }`}
                >
                  <span
                    className={`w-4 h-4 border rounded flex items-center justify-center transition-colors shrink-0 ${
                      isSelected
                        ? 'border-primary bg-primary text-on-primary'
                        : 'border-secondary group-hover:border-primary'
                    }`}
                  >
                    {isSelected && (
                      <span className="material-symbols-outlined text-[10px]">
                        check
                      </span>
                    )}
                  </span>
                  {fabric}
                </button>
              );
            })}
          </div>
          {fabrics.length > FABRIC_PREVIEW &&
            toggleButton(
              showAllFabrics,
              setShowAllFabrics,
              fabrics.length - FABRIC_PREVIEW
            )}
        </div>
      )}

      {/* Price Filter */}
      <div className="border-b border-outline-variant/30 pb-6">
        {heading('Price')}
        <div className="space-y-3 font-body-md text-body-md text-on-surface-variant">
          {PRICE_RANGES.map((range) => {
            const isSelected = selectedPriceRange?.id === range.id;
            return (
              <label
                key={range.id}
                onClick={() =>
                  setSelectedPriceRange(isSelected ? null : range)
                }
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  className={`w-4 h-4 border rounded flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'border-primary bg-primary text-on-primary'
                      : 'border-secondary group-hover:border-primary'
                  }`}
                >
                  {isSelected && (
                    <span className="material-symbols-outlined text-[10px]">
                      check
                    </span>
                  )}
                </div>
                <span className={isSelected ? 'text-primary font-semibold' : ''}>
                  {range.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Color Filter */}
      <div className="border-b border-outline-variant/30 pb-6">
        {heading('Color')}
        <div className="flex flex-wrap gap-3">
          {visibleColors.map((c) => {
            const isSelected = selectedColorFilter === c.name;
            return (
              <button
                key={c.name}
                title={c.name}
                onClick={() =>
                  setSelectedColorFilter(isSelected ? null : c.name)
                }
                style={{ backgroundColor: c.hex }}
                className={`w-8 h-8 rounded-full border border-outline/30 hover:scale-110 transition-all ${
                  isSelected
                    ? 'ring-2 ring-secondary ring-offset-2 ring-offset-surface'
                    : ''
                }`}
              />
            );
          })}
        </div>
        {colors.length > COLOR_PREVIEW &&
          toggleButton(
            showAllColors,
            setShowAllColors,
            colors.length - COLOR_PREVIEW
          )}
      </div>

      {/* Occasion Filter */}
      <div className="pb-6">
        {heading('Occasion')}
        <div className="space-y-3 font-body-md text-body-md text-on-surface-variant">
          {OCCASIONS.map((occ) => {
            const isSelected = selectedOccasion === occ;
            return (
              <label
                key={occ}
                onClick={() => setSelectedOccasion(isSelected ? null : occ)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  className={`w-4 h-4 border rounded flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'border-primary bg-primary text-on-primary'
                      : 'border-secondary group-hover:border-primary'
                  }`}
                >
                  {isSelected && (
                    <span className="material-symbols-outlined text-[10px]">
                      check
                    </span>
                  )}
                </div>
                <span className={isSelected ? 'text-primary font-semibold' : ''}>
                  {occ}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      {/* Mobile Filter Toggle Button */}
      <div className="md:hidden flex justify-between items-center pb-4 border-b border-outline-variant/30 mb-6">
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider font-semibold">
          Filters
        </span>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-primary p-2 flex items-center gap-1 border border-secondary/40 rounded font-label-caps text-xs"
        >
          <span className="material-symbols-outlined text-base">tune</span>
          {isMobileOpen ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {/* Desktop Filter Sidebar */}
      <div className="hidden md:block">{content}</div>

      {/* Mobile Accordion Drawer */}
      {isMobileOpen && (
        <div className="md:hidden p-4 bg-surface-container-low border border-outline-variant/30 rounded mb-8">
          {content}
        </div>
      )}
    </aside>
  );
};
