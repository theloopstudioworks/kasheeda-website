import React from 'react';
import { ProductCard } from '../common/ProductCard';

export const ProductGrid = ({
  products,
  selectedCategory,
  setSelectedCategory,
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
}) => {
  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedOccasion !== null ||
    selectedPriceRange !== null ||
    selectedColorFilter !== null;

  const clearAllFilters = () => {
    setSelectedCategory('All');
    setSelectedOccasion(null);
    setSelectedPriceRange(null);
    setSelectedColorFilter(null);
  };

  return (
    <div className="flex-1">
      {/* Active Filters & Sort Toolbar */}
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4 pb-4 border-b border-outline-variant/20">
        {/* Active Filter Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {selectedCategory !== 'All' && (
            <span className="px-3 py-1 border border-secondary rounded-full font-label-caps text-label-caps text-primary flex items-center gap-1 bg-surface-container-low">
              Category: {selectedCategory}
              <button
                onClick={() => setSelectedCategory('All')}
                className="hover:text-secondary ml-1"
              >
                <span className="material-symbols-outlined text-[14px]">close</span>
              </button>
            </span>
          )}

          {selectedOccasion && (
            <span className="px-3 py-1 border border-secondary rounded-full font-label-caps text-label-caps text-primary flex items-center gap-1 bg-surface-container-low">
              {selectedOccasion}
              <button
                onClick={() => setSelectedOccasion(null)}
                className="hover:text-secondary ml-1"
              >
                <span className="material-symbols-outlined text-[14px]">close</span>
              </button>
            </span>
          )}

          {selectedPriceRange && (
            <span className="px-3 py-1 border border-secondary rounded-full font-label-caps text-label-caps text-primary flex items-center gap-1 bg-surface-container-low">
              {selectedPriceRange.label}
              <button
                onClick={() => setSelectedPriceRange(null)}
                className="hover:text-secondary ml-1"
              >
                <span className="material-symbols-outlined text-[14px]">close</span>
              </button>
            </span>
          )}

          {selectedColorFilter && (
            <span className="px-3 py-1 border border-secondary rounded-full font-label-caps text-label-caps text-primary flex items-center gap-1 bg-surface-container-low">
              Color: {selectedColorFilter}
              <button
                onClick={() => setSelectedColorFilter(null)}
                className="hover:text-secondary ml-1"
              >
                <span className="material-symbols-outlined text-[14px]">close</span>
              </button>
            </span>
          )}

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="font-label-caps text-label-caps text-on-surface-variant underline hover:text-primary transition-colors ml-2"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="mt-20 flex justify-center items-center gap-4 font-label-caps text-label-caps">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="w-10 h-10 border border-outline-variant rounded flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-40"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          onClick={() => setCurrentPage(1)}
          className={`w-10 h-10 border rounded flex items-center justify-center ${
            currentPage === 1
              ? 'border-primary bg-primary text-on-primary font-bold'
              : 'border-outline-variant text-on-surface-variant hover:border-primary'
          }`}
        >
          1
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          className={`w-10 h-10 border rounded flex items-center justify-center ${
            currentPage === 2
              ? 'border-primary bg-primary text-on-primary font-bold'
              : 'border-outline-variant text-on-surface-variant hover:border-primary'
          }`}
        >
          2
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, 2))}
          className="w-10 h-10 border border-outline-variant rounded flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};
