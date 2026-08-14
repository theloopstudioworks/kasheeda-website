import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

export const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, navigateTo } = useShop();
  const [selectedColor, setSelectedColor] = useState(null);

  useBodyScrollLock(Boolean(quickViewProduct));

  // Clear the picked colour when a different product is opened.
  useEffect(() => {
    setSelectedColor(null);
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const color = selectedColor || quickViewProduct.color;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      {/* Modal Card */}
      <div className="bg-surface rounded max-w-3xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-surface/80 text-primary flex items-center justify-center hover:bg-surface transition-colors"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Product Image */}
        <div className="w-full md:w-1/2 aspect-[3/4] bg-surface-container relative overflow-hidden">
          <img
            src={quickViewProduct.images.main}
            alt={quickViewProduct.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Information */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto no-scrollbar">
          <div>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-1">
              {quickViewProduct.category}
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary mb-2">
              {quickViewProduct.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant font-medium mb-4">
              {quickViewProduct.priceFormatted}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant/90 leading-relaxed mb-6">
              {quickViewProduct.description}
            </p>

            {/* Color options */}
            {quickViewProduct.colorOptions && (
              <div className="mb-6">
                <span className="font-label-caps text-label-caps text-on-surface block mb-2">
                  Color: {color}
                </span>
                <div className="flex gap-3">
                  {quickViewProduct.colorOptions.map((opt) => (
                    <button
                      key={opt.name}
                      onClick={() => setSelectedColor(opt.name)}
                      style={{ backgroundColor: opt.hex }}
                      className={`w-7 h-7 rounded-full border border-outline/30 transition-transform ${
                        color === opt.name ? 'ring-2 ring-secondary ring-offset-2' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-outline-variant/30">
            <button
              onClick={() => {
                addToCart(quickViewProduct, color, 1);
                setQuickViewProduct(null);
              }}
              className="w-full py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest rounded hover:bg-primary/90 transition-colors"
            >
              Add to Shopping Bag
            </button>
            <button
              onClick={() => {
                const prod = quickViewProduct;
                setQuickViewProduct(null);
                navigateTo('detail', prod.category, prod);
              }}
              className="w-full py-3 border border-outline text-primary font-label-caps text-label-caps uppercase tracking-widest rounded hover:bg-surface-container-low transition-colors"
            >
              View Full Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
