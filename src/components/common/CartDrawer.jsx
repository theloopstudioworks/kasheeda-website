import React from 'react';
import { useShop } from '../../context/ShopContext';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { whatsappLink } from '../../data/contact';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    cartTotal,
    navigateTo,
  } = useShop();

  useBodyScrollLock(isCartOpen);

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    const itemsList = cart
      .map(
        (item) =>
          `• ${item.product.title} (${item.color}) x${item.quantity} - ₹${(
            item.product.price * item.quantity
          ).toLocaleString('en-IN')}`
      )
      .join('%0A');
    const message = `Hello Kasheeda Team,%0A%0AI would like to place an order for the following items:%0A${itemsList}%0A%0ATotal: ₹${cartTotal.toLocaleString(
      'en-IN'
    )}%0A%0APlease confirm availability and shipping details.`;

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface shadow-2xl border-l border-outline-variant/30 flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-outline-variant/30 flex items-center justify-between">
            <h2 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">shopping_bag</span>
              Your Shopping Bag
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close"
              className="text-primary hover:opacity-80 p-1"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-16 text-on-surface-variant flex flex-col items-center">
                <span className="material-symbols-outlined text-5xl mb-4 opacity-40">
                  shopping_bag
                </span>
                <p className="font-headline-sm text-lg text-primary mb-2">
                  Your bag is currently empty
                </p>
                <p className="font-body-md text-sm text-on-surface-variant/80 max-w-xs mb-6">
                  Explore our curated collections of handcrafted ethnic couture.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateTo('catalog', 'All');
                  }}
                  className="px-6 py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider rounded"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.color}`}
                  className="flex gap-4 border-b border-outline-variant/20 pb-4"
                >
                  <img
                    src={item.product.images.main}
                    alt={item.product.title}
                    // self-stretch so the image matches the text column's height
                    // instead of leaving a gap beneath it on taller rows.
                    className="w-20 self-stretch min-h-[96px] object-cover rounded-sm bg-surface-container flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-headline-sm text-base text-primary line-clamp-1">
                        {item.product.title}
                      </h4>
                      <p className="font-label-caps text-xs text-on-surface-variant mt-1">
                        Color: {item.color}
                      </p>
                      <p className="font-body-md text-sm text-on-surface-variant font-medium mt-1">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-outline-variant rounded">
                        <button
                          onClick={() =>
                            updateCartQuantity(item.product.id, item.color, -1)
                          }
                          className="px-2 py-0.5 text-primary hover:bg-surface-container-low"
                        >
                          -
                        </button>
                        <span className="px-3 font-label-caps text-xs">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateCartQuantity(item.product.id, item.color, 1)
                          }
                          className="px-2 py-0.5 text-primary hover:bg-surface-container-low"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.product.id, item.color)}
                        className="text-xs font-label-caps text-outline hover:text-error transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Actions */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low">
              <div className="flex justify-between items-center mb-4">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  Subtotal
                </span>
                <span className="font-headline-sm text-lg text-primary font-bold">
                  ₹{cartTotal.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="font-body-md text-xs text-on-surface-variant/70 mb-4">
                Taxes and complimentary worldwide insured shipping included.
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-4 bg-[#25D366] text-white font-label-caps text-label-caps tracking-widest uppercase rounded flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                  Order via WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
