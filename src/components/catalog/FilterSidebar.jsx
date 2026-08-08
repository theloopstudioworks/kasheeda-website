import React, { useState } from 'react';
import { OCCASIONS, PRICE_RANGES } from '../../data/products';

export const FilterSidebar = ({
  selectedOccasion,
  setSelectedOccasion,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedColorFilter,
  setSelectedColorFilter,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const colors = [
    { name: 'Deep Maroon', hex: '#800020' },
    { name: 'Ivory Cream', hex: '#f5ece7' },
    { name: 'Warm Charcoal', hex: '#272725' },
    { name: 'Antique Gold', hex: '#e9c176' },
    { name: 'Crimson Red', hex: '#af2b3e' },
    { name: 'Pure White', hex: '#ffffff' },
  ];

  const content = (
    <div className="space-y-8">
      {/* Price Filter */}
      <div className="border-b border-outline-variant/30 pb-6">
        <h3 className="font-label-caps text-label-caps text-primary mb-4 flex justify-between items-center cursor-pointer uppercase tracking-widest font-semibold">
          Price
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </h3>
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
        <h3 className="font-label-caps text-label-caps text-primary mb-4 flex justify-between items-center cursor-pointer uppercase tracking-widest font-semibold">
          Color
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((c) => {
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
      </div>

      {/* Occasion Filter */}
      <div className="pb-6">
        <h3 className="font-label-caps text-label-caps text-primary mb-4 flex justify-between items-center cursor-pointer uppercase tracking-widest font-semibold">
          Occasion
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </h3>
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
