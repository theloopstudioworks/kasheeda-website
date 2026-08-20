import React from 'react';
import { useShop } from '../../context/ShopContext';

export const ProductCard = ({ product }) => {
  const { navigateTo, toggleWishlist, isInWishlist, setQuickViewProduct } = useShop();

  const isLiked = isInWishlist(product.id);

  return (
    <article className="group cursor-pointer flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-container mb-4 rounded-sm">
        {/* Main Product Image */}
        <img
          src={product.images.main}
          alt={product.title}
          onClick={() => navigateTo('detail', product.category, product)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* NEW Badge */}
        {product.isNew && (
          <div className="absolute top-4 right-4 bg-primary text-on-primary px-2 py-1 font-label-caps text-[10px] rounded tracking-wider z-10">
            NEW
          </div>
        )}

        {/* Wishlist Heart Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label="Toggle Wishlist"
          className="absolute z-10 top-4 left-4 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-surface"
        >
          <span className={`material-symbols-outlined text-sm ${isLiked ? 'fill-current text-primary' : ''}`}>
            {isLiked ? 'favorite' : 'favorite_border'}
          </span>
        </button>

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="bg-surface/90 text-primary px-6 py-2 border border-secondary rounded font-label-caps text-label-caps hover:bg-primary hover:text-on-primary hover:border-primary transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-sm"
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Card Info */}
      <div
        className="text-center px-2 flex flex-col flex-grow justify-between"
        onClick={() => navigateTo('detail', product.category, product)}
      >
        <div>
          <span className="font-label-caps text-[10px] text-on-surface-variant/80 uppercase tracking-widest block mb-1">
            {product.category}
          </span>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-1 line-clamp-1 group-hover:text-secondary transition-colors">
            {product.title}
          </h3>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant font-medium mt-1">
          {product.priceFormatted}
        </p>
      </div>
    </article>
  );
};
