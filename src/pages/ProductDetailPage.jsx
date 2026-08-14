import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductAccordions } from '../components/product/ProductAccordions';
import { ProductCard } from '../components/common/ProductCard';
import { PRODUCTS } from '../data/products';
import { whatsappLink } from '../data/contact';

export const ProductDetailPage = () => {
  const {
    selectedProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    navigateTo,
  } = useShop();

  const product = selectedProduct || PRODUCTS[0];
  const [selectedColor, setSelectedColor] = useState(product.color);

  // This page stays mounted when navigating product -> product, so state that
  // was seeded from the old product has to be re-synced.
  useEffect(() => {
    setSelectedColor(product.color);
  }, [product]);

  const isLiked = isInWishlist(product.id);

  const handleWhatsAppOrder = () => {
    const message = `Hello Kasheeda Team,%0A%0AI would like to inquire about/order the following garment:%0A• *${
      product.title
    }*%0A• Color: ${selectedColor || product.color}%0A• Price: ${
      product.priceFormatted
    }%0A%0APlease assist me with custom sizing and order confirmation.`;
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  // Prefer pieces in the same fabric, then the same category, then anything.
  const relatedProducts = [
    ...PRODUCTS.filter((p) => p.id !== product.id && p.fabric === product.fabric),
    ...PRODUCTS.filter((p) => p.id !== product.id && p.fabric !== product.fabric && p.category === product.category),
    ...PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category),
  ].slice(0, 3);

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-16">
        {/* Left Column: Image Gallery */}
        <ProductGallery images={product.images} title={product.title} />

        {/* Right Column: Sticky Product Details */}
        <section className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-28 h-fit pt-4 lg:pt-0">
          {/* Breadcrumb Navigation */}
          <nav className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2">
            <button
              onClick={() => navigateTo('catalog', product.category)}
              className="hover:text-primary transition-colors"
            >
              {product.category}
            </button>
            <span>/</span>
            <span className="text-primary font-semibold">{product.title}</span>
          </nav>

          {/* Header & Price */}
          <div className="flex flex-col gap-2">
            <h1 className="font-headline-md text-headline-md text-on-background">
              {product.title}
            </h1>
            {product.fabric && (
              <button
                onClick={() => navigateTo('catalog', product.category, null, product.fabric)}
                className="font-label-caps text-label-caps text-secondary uppercase tracking-widest self-start hover:text-primary transition-colors"
              >
                {product.fabric}
              </button>
            )}
            <p className="font-body-lg text-xl text-primary font-bold">
              {product.priceFormatted}
            </p>
          </div>

          {/* Description */}
          <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            <p>{product.description}</p>
          </div>

          {/* Color Selection */}
          <div className="flex flex-col gap-3 border-t border-outline-variant/30 pt-6">
            <span className="font-label-caps text-label-caps text-on-background uppercase tracking-wider">
              Color: <strong className="text-primary">{selectedColor}</strong>
            </span>
            <div className="flex gap-4">
              {product.colorOptions ? (
                product.colorOptions.map((opt) => (
                  <button
                    key={opt.name}
                    title={opt.name}
                    onClick={() => setSelectedColor(opt.name)}
                    style={{ backgroundColor: opt.hex }}
                    className={`w-10 h-10 rounded-full border border-outline/30 transition-all ${
                      selectedColor === opt.name
                        ? 'ring-2 ring-primary ring-offset-2 ring-offset-surface scale-105'
                        : 'hover:scale-105'
                    }`}
                  />
                ))
              ) : (
                <button
                  style={{ backgroundColor: product.colorHex }}
                  className="w-10 h-10 rounded-full border border-outline ring-2 ring-primary ring-offset-2"
                />
              )}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            {/* WhatsApp CTA (Specialized Forest Green) */}
            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-4 px-6 flex items-center justify-center gap-3 bg-[#25D366] text-white hover:opacity-90 transition-opacity font-label-caps text-label-caps tracking-widest uppercase rounded shadow-sm"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path>
              </svg>
              ORDER VIA WHATSAPP
            </button>

            {/* Add to Shopping Bag CTA */}
            <button
              onClick={() => addToCart(product, selectedColor, 1)}
              className="w-full py-4 px-6 bg-primary text-on-primary hover:bg-primary/90 transition-colors font-label-caps text-label-caps tracking-widest uppercase rounded shadow-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">
                shopping_bag
              </span>
              ADD TO SHOPPING BAG
            </button>

            {/* Save to Wishlist Button */}
            <button
              onClick={() => toggleWishlist(product.id)}
              className="w-full py-3 px-6 border border-outline text-primary hover:bg-surface-container-low transition-colors font-label-caps text-label-caps tracking-widest uppercase rounded flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isLiked ? 'favorite' : 'favorite_border'}
              </span>
              {isLiked ? 'SAVED TO WISHLIST' : 'SAVE TO WISHLIST'}
            </button>
          </div>

          {/* Accordion Sections */}
          <ProductAccordions details={product.details} />

          {/* Trust & Authenticity Badges */}
          <div className="flex items-center gap-6 mt-2 pt-4 border-t border-outline-variant/10">
            <div className="flex items-center gap-2 opacity-80">
              <span className="material-symbols-outlined text-primary font-light">
                handshake
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px]">
                100% Authentic Handloom
              </span>
            </div>
            <div className="flex items-center gap-2 opacity-80">
              <span className="material-symbols-outlined text-primary font-light">
                public
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px]">
                Complimentary Insured Shipping
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Suggested Products Section */}
      <section className="mt-28 border-t border-outline-variant/30 pt-16">
        <div className="text-center mb-12">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-1">
            Curated Recommendations
          </span>
          <h2 className="font-headline-md text-headline-md text-primary">
            You May Also Admire
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {relatedProducts.map((relProduct) => (
            <ProductCard key={relProduct.id} product={relProduct} />
          ))}
        </div>
      </section>
    </main>
  );
};
