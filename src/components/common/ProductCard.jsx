import React, { useState, useEffect, useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import { imageUrls } from '../../data/products';

const SLIDE_MS = 6000;

export const ProductCard = ({ product, color }) => {
  const { navigateTo, toggleWishlist, isInWishlist, setQuickViewProduct } = useShop();

  const isLiked = isInWishlist(product.id);

  const variant = color && product.colorOptions?.find((o) => o.name === color);
  const shown = variant
    ? {
        ...product,
        color,
        title: variant.title ?? product.title,
        images: variant.images ?? product.images,
      }
    : product;

  const urls = useMemo(() => imageUrls(shown.images), [shown.images]);
  const track = urls.length > 1 ? [...urls, urls[0]] : urls;
  const [slide, setSlide] = useState(0);
  const [sliding, setSliding] = useState(true);

  useEffect(() => {
    setSlide(0);
    if (
      urls.length < 2 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    const last = urls.length;
    const id = setInterval(
      () => setSlide((i) => Math.min(i + 1, last)),
      SLIDE_MS
    );
    return () => clearInterval(id);
  }, [urls]);

  useEffect(() => {
    if (sliding) return;
    const outer = requestAnimationFrame(() =>
      requestAnimationFrame(() => setSliding(true))
    );
    return () => cancelAnimationFrame(outer);
  }, [sliding]);

  return (
    <article className="group cursor-pointer flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-container mb-4 rounded-sm">
        {/* Product Image(s) — a track that slides one frame at a time */}
        <div
          onClick={() => navigateTo('detail', product.category, shown)}
          onTransitionEnd={(e) => {
            // The hover scale on each image bubbles up here too — ignore it.
            if (e.target === e.currentTarget && slide === track.length - 1) {
              setSliding(false);
              setSlide(0);
            }
          }}
          className={`absolute inset-0 flex ${
            sliding ? 'transition-transform duration-[1400ms] ease-in-out' : ''
          }`}
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {track.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={shown.title}
              aria-hidden={i !== slide}
              className="w-full h-full shrink-0 object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ))}
        </div>

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
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={isLiked}
          className={`absolute z-10 top-4 left-4 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center text-primary transition-opacity duration-300 hover:bg-surface ${
            isLiked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          <span
            className={`material-symbols-outlined text-sm ${isLiked ? 'filled' : ''}`}
          >
            favorite
          </span>
        </button>

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(shown);
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
        onClick={() => navigateTo('detail', product.category, shown)}
      >
        <div>
          <span className="font-label-caps text-[10px] text-on-surface-variant/80 uppercase tracking-widest block mb-1">
            {product.category}
          </span>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-1 line-clamp-1 group-hover:text-secondary transition-colors">
            {shown.title}
          </h3>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant font-medium mt-1">
          {product.priceFormatted}
        </p>
      </div>
    </article>
  );
};
