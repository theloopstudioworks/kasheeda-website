import React from 'react';
import { useShop } from '../../context/ShopContext';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { PRODUCTS } from '../../data/products';

export const WishlistDrawer = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    setIsCartOpen,
    navigateTo,
  } = useShop();

  useBodyScrollLock(isWishlistOpen);

  if (!isWishlistOpen) return null;

  // The wishlist stores ids; resolve them and drop any that no longer exist.
  const savedProducts = wishlist
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean);

  // Moving a piece to the bag takes it out of the wishlist — the row
  // disappearing is the confirmation that it landed in the bag.
  const handleAddToBag = (product) => {
    addToCart(product, product.color, 1, { openCart: false });
    toggleWishlist(product.id);
  };

  const handleAddAll = () => {
    savedProducts.forEach((product) => {
      addToCart(product, product.color, 1, { openCart: false });
      toggleWishlist(product.id);
    });
    setIsWishlistOpen(false);
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface shadow-2xl border-l border-outline-variant/30 flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-outline-variant/30 flex items-center justify-between">
            <h2 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">favorite</span>
              Your Wishlist
            </h2>
            <button
              onClick={() => setIsWishlistOpen(false)}
              aria-label="Close"
              className="text-primary hover:opacity-80 p-1"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Saved Items List */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            {savedProducts.length === 0 ? (
              <div className="text-center py-16 text-on-surface-variant flex flex-col items-center">
                <span className="material-symbols-outlined text-5xl mb-4 opacity-40">
                  favorite
                </span>
                <p className="font-headline-sm text-lg text-primary mb-2">
                  Nothing saved yet
                </p>
                <p className="font-body-md text-sm text-on-surface-variant/80 max-w-xs mb-6">
                  Tap the heart on any piece to keep it here for later.
                </p>
                <button
                  onClick={() => {
                    setIsWishlistOpen(false);
                    navigateTo('catalog', 'All');
                  }}
                  className="px-6 py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider rounded"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              savedProducts.map((product) => {
                const openDetail = () => {
                  setIsWishlistOpen(false);
                  navigateTo('detail', product.category, product);
                };

                return (
                  <div
                    key={product.id}
                    className="flex gap-4 border-b border-outline-variant/20 pb-4"
                  >
                    <img
                      src={product.images.main}
                      alt={product.title}
                      onClick={openDetail}
                      // self-stretch so the image matches the text column's
                      // height instead of leaving a gap beneath it.
                      className="w-20 self-stretch min-h-[96px] object-cover rounded-sm bg-surface-container flex-shrink-0 cursor-pointer"
                    />
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <button
                          onClick={openDetail}
                          className="text-left w-full"
                        >
                          <h4 className="font-headline-sm text-base text-primary line-clamp-2 hover:opacity-80 transition-opacity">
                            {product.title}
                          </h4>
                        </button>
                        <p className="font-label-caps text-xs text-on-surface-variant mt-1">
                          {product.fabric}
                        </p>
                        <p className="font-body-md text-sm text-on-surface-variant font-medium mt-1">
                          {product.priceFormatted}
                        </p>
                      </div>

                      <div className="flex justify-between items-center gap-3 mt-3">
                        <button
                          onClick={() => handleAddToBag(product)}
                          className="flex-1 py-2 px-3 font-label-caps text-[11px] uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 bg-primary text-on-primary hover:bg-primary/90"
                        >
                          <span className="material-symbols-outlined text-[15px]">
                            shopping_bag
                          </span>
                          Add to Shopping Bag
                        </button>

                        <button
                          onClick={() => toggleWishlist(product.id)}
                          aria-label={`Remove ${product.title} from wishlist`}
                          className="text-xs font-label-caps text-outline hover:text-error transition-colors shrink-0"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Actions */}
          {savedProducts.length > 0 && (
            <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low">
              <div className="flex justify-between items-center mb-4">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  Saved Pieces
                </span>
                <span className="font-headline-sm text-lg text-primary font-bold">
                  {savedProducts.length}
                </span>
              </div>
              <button
                onClick={handleAddAll}
                className="w-full py-4 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest uppercase rounded flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
              >
                <span className="material-symbols-outlined text-lg">shopping_bag</span>
                Add All to Shopping Bag
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
