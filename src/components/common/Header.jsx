import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { Wordmark } from './Wordmark';

export const Header = () => {
  const {
    activePage,
    selectedCategory,
    navigateTo,
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsMobileMenuOpen,
    setIsSearchOpen,
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sarees', category: 'Sarees' },
    { label: 'Suits', category: 'Suits' },
    { label: 'Collections', category: 'All' },
    { label: 'Blogs', page: 'blog' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 w-full z-50 bg-surface/85 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-sm' : 'py-4'
      }`}
    >
      <div className="flex justify-between items-center h-16 px-margin-mobile max-w-container-max mx-auto">
        {/* Mobile: hamburger, then search sitting beside it */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle Menu"
            className="text-primary p-2 -ml-2 hover:opacity-80 transition-opacity"
          >
            <span className="material-symbols-outlined text-icon">menu</span>
          </button>
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
            className="text-primary p-2 hover:opacity-80 transition-opacity"
          >
            <span className="material-symbols-outlined text-icon">search</span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        {/* text-label-caps is 12px — too small for the desktop bar, so the size,
            tracking and weight are set explicitly here instead. */}
        <nav className="hidden md:flex items-center space-x-8 font-label-caps text-[15px] tracking-[0.1em] font-semibold">
          {navLinks.map((item) => {
            const isActive =
              item.page
                ? activePage === item.page
                : activePage === 'catalog' && selectedCategory === item.category;

            return (
              <button
                key={item.label}
                onClick={() => {
                  if (item.page) {
                    navigateTo(item.page);
                  } else {
                    navigateTo('catalog', item.category);
                  }
                }}
                className={`transition-colors duration-300 pb-1 ${
                  isActive
                    ? 'text-primary font-semibold border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Brand Logo */}
        <div className="text-center absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
          <button
            onClick={() => navigateTo('home')}
            aria-label="Kasheeda — Home"
            className="block hover:opacity-90 transition-opacity"
          >
            <Wordmark className="h-8 md:h-10 w-auto" />
          </button>
        </div>

        {/* Trailing Action Icons */}
        <div className="flex items-center space-x-3 text-primary">
          {/* Search lives beside the hamburger on mobile, so hide this copy */}
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
            className="p-2 hover:opacity-80 transition-opacity relative hidden md:block"
          >
            <span className="material-symbols-outlined text-icon">search</span>
          </button>

          <button
            onClick={() => setIsWishlistOpen(true)}
            aria-label="Wishlist"
            className="p-2 hover:opacity-80 transition-opacity relative"
          >
            <span className="material-symbols-outlined text-icon">favorite</span>
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-secondary text-on-secondary rounded-full text-[10px] font-bold flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Bag"
            className="p-2 hover:opacity-80 transition-opacity relative"
          >
            <span className="material-symbols-outlined text-icon">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-on-primary rounded-full text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
