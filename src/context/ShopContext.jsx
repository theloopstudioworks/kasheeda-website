import React, { createContext, useContext, useState } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [infoPageKey, setInfoPageKey] = useState('shipping');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]); // default to first product
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState(['varanasi-silk-saree']);
  
  // UI states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // `fabric` lets a link jump straight into a pre-filtered catalog view,
  // e.g. clicking "Chiffon" on a product page.
  const navigateTo = (page, category = 'All', product = null, fabric = null) => {
    setActivePage(page);
    if (category) setSelectedCategory(category);
    if (product) setSelectedProduct(product);
    setSelectedFabric(fabric);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Opens one of the Customer Care pages (see src/data/infoPages.js).
  const openInfoPage = (key) => {
    setInfoPageKey(key);
    setActivePage('info');
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // `openCart: false` lets a caller add silently — the wishlist drawer uses it
  // so adding an item doesn't yank the panel out from under you.
  const addToCart = (product, color = null, quantity = 1, { openCart = true } = {}) => {
    const itemColor = color || product.color;
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.color === itemColor
      );
      if (existingIndex > -1) {
        // Must return a NEW item object. `[...prevCart]` is a shallow copy, so
        // mutating newCart[i].quantity would edit the item still held in the
        // previous state — and React re-runs this updater in StrictMode, which
        // applied the increment twice (1 -> 3 instead of 1 -> 2).
        return prevCart.map((item, i) =>
          i === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, color: itemColor, quantity }];
    });
    if (openCart) setIsCartOpen(true);
  };

  const removeFromCart = (productId, color) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.product.id === productId && item.color === color)
      )
    );
  };

  const updateCartQuantity = (productId, color, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.product.id === productId && item.color === color) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <ShopContext.Provider
      value={{
        activePage,
        selectedCategory,
        selectedFabric,
        infoPageKey,
        selectedProduct,
        cart,
        wishlist,
        isCartOpen,
        isWishlistOpen,
        isMobileMenuOpen,
        isSearchOpen,
        quickViewProduct,
        cartCount,
        cartTotal,
        navigateTo,
        openInfoPage,
        setSelectedCategory,
        setSelectedFabric,
        setSelectedProduct,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        toggleWishlist,
        isInWishlist,
        setIsCartOpen,
        setIsWishlistOpen,
        setIsMobileMenuOpen,
        setIsSearchOpen,
        setQuickViewProduct,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
