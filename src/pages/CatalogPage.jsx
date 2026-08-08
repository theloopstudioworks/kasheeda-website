import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { FilterSidebar } from '../components/catalog/FilterSidebar';
import { ProductGrid } from '../components/catalog/ProductGrid';

export const CatalogPage = () => {
  const { selectedCategory, setSelectedCategory } = useShop();

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
      if (selectedColorFilter) {
        if (!product.color.toLowerCase().includes(selectedColorFilter.toLowerCase())) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0;
    });
  }, [selectedCategory, selectedOccasion, selectedPriceRange, selectedColorFilter, sortBy]);

  const categoryTitles = {
    All: 'The Royal Collection',
    Lehengas: 'Lehengas',
    Sarees: 'Heritage Sarees',
    Kurtas: 'Handspun Kurtas',
  };

  const categoryDescriptions = {
    All: 'Discover our complete catalog of handcrafted ethnic wear, where traditional Indian textiles meet modern minimalist elegance.',
    Lehengas: 'Discover our curated collection of handcrafted Lehengas, where heritage craftsmanship meets contemporary elegance.',
    Sarees: 'Exquisite hand-woven Varanasi silk and organza sarees featuring timeless zari patterns and delicate embroidery.',
    Kurtas: 'Tailored luxury kurtas in handspun organic linen and raw silk, designed for clean modern silhouettes.',
  };

  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20">
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
      <div className="flex justify-center gap-6 mb-12 border-b border-outline-variant/30 pb-4 font-label-caps text-label-caps">
        {['All', 'Lehengas', 'Sarees', 'Kurtas'].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
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
          selectedOccasion={selectedOccasion}
          setSelectedOccasion={setSelectedOccasion}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          selectedColorFilter={selectedColorFilter}
          setSelectedColorFilter={setSelectedColorFilter}
        />

        <ProductGrid
          products={filteredProducts}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedOccasion={selectedOccasion}
          setSelectedOccasion={setSelectedOccasion}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          selectedColorFilter={selectedColorFilter}
          setSelectedColorFilter={setSelectedColorFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </main>
  );
};
