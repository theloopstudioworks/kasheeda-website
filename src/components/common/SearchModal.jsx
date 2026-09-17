import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, navigateTo } = useShop();
  const [query, setQuery] = useState('');

  useBodyScrollLock(isSearchOpen);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          !p.isHidden &&
          (p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 p-4">
      <div className="bg-surface border border-outline-variant/40 rounded max-w-2xl w-full p-6 shadow-2xl relative">
        <button
          onClick={() => setIsSearchOpen(false)}
          className="absolute top-4 right-4 text-primary hover:opacity-80"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="relative mb-6">
          <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-primary">
            search
          </span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sarees, suit sets, chiffon, banarasi..."
            className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-secondary/50 font-body-lg text-primary focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {query.trim() && (
          <div className="max-h-96 overflow-y-auto space-y-4">
            <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest block">
              Found {filteredProducts.length} results
            </span>
            {filteredProducts.length === 0 ? (
              <p className="text-on-surface-variant text-sm py-4">
                No items found matching "{query}".
              </p>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    if (product.isSoldOut) return;
                    setIsSearchOpen(false);
                    navigateTo('detail', product.category, product);
                  }}
                  className={`flex items-center gap-4 p-2 rounded transition-colors ${
                    product.isSoldOut
                      ? 'cursor-not-allowed opacity-75'
                      : 'hover:bg-surface-container cursor-pointer'
                  }`}
                >
                  <img
                    src={product.images.main}
                    alt={product.title}
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-headline-sm text-sm text-primary">
                      {product.title}
                    </h4>
                    <p className="font-body-md text-xs text-on-surface-variant">
                      {product.category} • {product.priceFormatted}
                    </p>
                  </div>
                  {product.isSoldOut && (
                    <span className="font-label-caps text-[10px] tracking-wider text-on-surface-variant border border-outline px-2 py-1 rounded">
                      SOLD OUT
                    </span>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
