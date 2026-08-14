import React, { useState, useMemo, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { FilterSidebar } from '../components/catalog/FilterSidebar';
import { ProductGrid } from '../components/catalog/ProductGrid';

const PAGE_SIZE = 12;

export const CatalogPage = () => {
  const { selectedCategory, setSelectedCategory, selectedFabric, setSelectedFabric } =
    useShop();

  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedColorFilter, setSelectedColorFilter] = useState(null);
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter products dynamically
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      // Fabric filter
      if (selectedFabric && product.fabric !== selectedFabric) {
        return false;
      }
      // Occasion filter
      if (selectedOccasion && product.occasion !== selectedOccasion) {
        return false;
      }
      // Price range filter
      if (selectedPriceRange) {
        if (
          product.price < selectedPriceRange.min ||
          product.price > selectedPriceRange.max
        ) {
          return false;
        }
      }
      // Color filter
      if (selectedColorFilter && product.color !== selectedColorFilter) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0;
    });
  }, [
    selectedCategory,
    selectedFabric,
    selectedOccasion,
    selectedPriceRange,
    selectedColorFilter,
    sortBy,
  ]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));

  // A filter change can leave you stranded on a page that no longer exists.
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [currentPage, totalPages]);

  const pagedProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const categoryTitles = {
    All: 'The Royal Collection',
    Sarees: 'Heritage Sarees',
    Suits: 'Unstitched Suit Sets',
  };

  const categoryDescriptions = {
    All: 'Discover our complete catalog of handcrafted ethnic wear, where traditional Indian textiles meet modern minimalist elegance.',
    Sarees:
      'Handwoven Banarasi, Chanderi, Maheshwari, Kota and Ajrakh sarees — from everyday cottons to occasion silks, sourced directly from weaving clusters.',
    Suits:
      'Unstitched three-piece Maheshwari cotton silk sets with hand block-printed dupattas, ready for your tailor.',
  };

  const resetPageAnd = (fn) => (value) => {
    fn(value);
    setCurrentPage(1);
  };

  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile py-12 md:py-20">
      {/* Category Header Banner */}
      <header className="mb-14 text-center max-w-2xl mx-auto">
        <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-2">
          Kasheeda Collection
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
          {categoryTitles[selectedCategory] || selectedCategory}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          {categoryDescriptions[selectedCategory] || categoryDescriptions.All}
        </p>
      </header>

      {/* Category Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-6 mb-12 border-b border-outline-variant/30 pb-4 font-label-caps text-label-caps">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedFabric(null);
              setCurrentPage(1);
            }}
            className={`transition-all duration-200 pb-2 uppercase tracking-wider ${
              selectedCategory === cat
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Canvas: Sidebar + Grid */}
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
        <FilterSidebar
          selectedCategory={selectedCategory}
          selectedFabric={selectedFabric}
          setSelectedFabric={resetPageAnd(setSelectedFabric)}
          selectedOccasion={selectedOccasion}
          setSelectedOccasion={resetPageAnd(setSelectedOccasion)}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={resetPageAnd(setSelectedPriceRange)}
          selectedColorFilter={selectedColorFilter}
          setSelectedColorFilter={resetPageAnd(setSelectedColorFilter)}
        />

        <ProductGrid
          products={pagedProducts}
          totalCount={filteredProducts.length}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedFabric={selectedFabric}
          setSelectedFabric={resetPageAnd(setSelectedFabric)}
          selectedOccasion={selectedOccasion}
          setSelectedOccasion={resetPageAnd(setSelectedOccasion)}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={resetPageAnd(setSelectedPriceRange)}
          selectedColorFilter={selectedColorFilter}
          setSelectedColorFilter={resetPageAnd(setSelectedColorFilter)}
          sortBy={sortBy}
          setSortBy={setSortBy}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </main>
  );
};
