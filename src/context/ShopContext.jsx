import React, { createContext, useContext, useEffect, useState } from 'react';
import { PRODUCTS } from '../data/products';
import { pathFor, stateFromPath } from '../routes';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const landed = stateFromPath(window.location.pathname);
  const [activePage, setActivePage] = useState(landed.page);
  const [selectedCategory, setSelectedCategory] = useState(landed.category || 'All');
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [infoPageKey, setInfoPageKey] = useState(landed.infoKey || 'shipping');
  const [selectedProduct, setSelectedProduct] = useState(landed.product || PRODUCTS[0]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  
  // UI states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const pushPath = (path) => {
    if (path !== window.location.pathname) window.history.pushState({}, '', path);
  };

  // `fabric` lets a link jump straight into a pre-filtered catalog view,
  // e.g. clicking "Chiffon" on a product page.
  const navigateTo = (page, category = 'All', product = null, fabric = null) => {
    setActivePage(page);
    if (category) setSelectedCategory(category);
    if (product) setSelectedProduct(product);
    setSelectedFabric(fabric);
    pushPath(pathFor(page, { category, product: product || selectedProduct }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back/forward must move between a shared link and the rest of the site.
  useEffect(() => {
    // An unknown URL (/sameer) renders home, so put the address bar back at /.
    const normalisePath = () => {
      const path = window.location.pathname;
      if (path !== '/' && stateFromPath(path).page === 'home')
        window.history.replaceState({}, '', '/');
    };
    normalisePath();

    const onPop = () => {
      normalisePath();
      const next = stateFromPath(window.location.pathname);
      setActivePage(next.page);
      setSelectedCategory(next.category || 'All');
      if (next.product) setSelectedProduct(next.product);
      if (next.infoKey) setInfoPageKey(next.infoKey);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const selectCategory = (category) => {
    setSelectedCategory(category);
    pushPath(pathFor('catalog', { category }));
  };

  // Opens one of the Customer Care pages (see src/data/infoPages.js).
  const openInfoPage = (key) => {
    setInfoPageKey(key);
    setActivePage('info');
    pushPath(pathFor('info', { infoKey: key }));
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
        setSelectedCategory: selectCategory,
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
