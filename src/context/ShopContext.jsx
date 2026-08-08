import React, { createContext, useContext, useState } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]); // default to first product
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState(['varanasi-silk-saree']);
  
  // UI states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const navigateTo = (page, category = 'All', product = null) => {
    setActivePage(page);
    if (category) setSelectedCategory(category);
    if (product) setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product, color = null, quantity = 1) => {
    const itemColor = color || product.color;
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.color === itemColor
      );
      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += quantity;
        return newCart;
      }
      return [...prevCart, { product, color: itemColor, quantity }];
    });
    setIsCartOpen(true);
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
        selectedProduct,
        cart,
        wishlist,
        isCartOpen,
        isMobileMenuOpen,
        isSearchOpen,
        quickViewProduct,
        cartCount,
        cartTotal,
        navigateTo,
        setSelectedCategory,
        setSelectedProduct,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        toggleWishlist,
        isInWishlist,
        setIsCartOpen,
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
