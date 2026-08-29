import React from 'react';
import { ProductCard } from '../common/ProductCard';

export const ProductGrid = ({
  products,
  totalCount,
  selectedCategory,
  setSelectedCategory,
  selectedFabric,
  setSelectedFabric,
  selectedOccasion,
  setSelectedOccasion,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedColorFilter,
  setSelectedColorFilter,
  sortBy,
  setSortBy,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedFabric !== null ||
    selectedOccasion !== null ||
    selectedPriceRange !== null ||
    selectedColorFilter !== null;

  const clearAllFilters = () => {
    setSelectedCategory('All');
    setSelectedFabric(null);
    setSelectedOccasion(null);
    setSelectedPriceRange(null);
    setSelectedColorFilter(null);
  };

  const chip = (label, onClear) => (
    <span
      key={label}
      className="px-3 py-1 border border-secondary rounded-full font-label-caps text-label-caps text-primary flex items-center gap-1 bg-surface-container-low"
    >
      {label}
      <button onClick={onClear} className="hover:text-secondary ml-1">
        <span className="material-symbols-outlined text-[14px]">close</span>
      </button>
    </span>
  );

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex-1">
      {/* Active Filters & Sort Toolbar */}
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4 pb-4 border-b border-outline-variant/20">
        {/* Active Filter Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {selectedCategory !== 'All' &&
            chip(`Category: ${selectedCategory}`, () => setSelectedCategory('All'))}

          {selectedFabric &&
            chip(`Fabric: ${selectedFabric}`, () => setSelectedFabric(null))}

          {selectedOccasion &&
            chip(selectedOccasion, () => setSelectedOccasion(null))}

          {selectedPriceRange &&
            chip(selectedPriceRange.label, () => setSelectedPriceRange(null))}

          {selectedColorFilter &&
            chip(`Color: ${selectedColorFilter}`, () => setSelectedColorFilter(null))}

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="font-label-caps text-label-caps text-on-surface-variant underline hover:text-primary transition-colors ml-2"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Result count + Sort Dropdown */}
        <div className="flex items-center gap-4">
          <span className="font-label-caps text-label-caps text-on-surface-variant hidden sm:inline">
            {totalCount} {totalCount === 1 ? 'piece' : 'pieces'}
          </span>
          <div className="flex items-center gap-2">
            <span className="font-label-caps text-label-caps text-on-surface-variant hidden sm:inline uppercase">
              Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border-b border-secondary/50 font-label-caps text-label-caps text-primary focus:outline-none focus:border-secondary py-1 cursor-pointer"
            >
              <option value="newest">New Arrivals</option>
              <option value="price-high">Price: High to Low</option>
              <option value="price-low">Price: Low to High</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Items Grid */}
      {products.length === 0 ? (
        <div className="text-center py-24 text-on-surface-variant">
          <span className="material-symbols-outlined text-4xl mb-2 opacity-50">
            filter_alt_off
          </span>
          <p className="font-headline-sm text-lg text-primary mb-2">
            No garments match your selected filters.
          </p>
          <p className="font-body-md text-sm mb-6">
            Try resetting your filters or exploring our full collection.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider rounded"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              color={selectedColorFilter}
            />
          ))}
        </div>
      )}

      {/* Pagination Controls — only shown when there is more than one page */}
      {totalPages > 1 && (
        <div className="mt-20 flex flex-wrap justify-center items-center gap-3 font-label-caps text-label-caps">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="w-10 h-10 border border-outline-variant rounded flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-40 disabled:hover:border-outline-variant"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 border rounded flex items-center justify-center transition-colors ${
                currentPage === page
                  ? 'border-primary bg-primary text-on-primary font-bold'
                  : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="w-10 h-10 border border-outline-variant rounded flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-40 disabled:hover:border-outline-variant"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      )}
    </div>
  );
};
