import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';

export const Header = () => {
  const {
    activePage,
    selectedCategory,
    navigateTo,
    cartCount,
    wishlist,
    setIsCartOpen,
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
    { label: 'Lehengas', category: 'Lehengas' },
    { label: 'Sarees', category: 'Sarees' },
    { label: 'Kurtas', category: 'Kurtas' },
    { label: 'Collections', category: 'All' },
    { label: 'Journal', page: 'journal' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 w-full z-50 bg-surface/85 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-sm' : 'py-4'
      }`}
    >
      <div className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Mobile Menu Trigger */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle Menu"
            className="text-primary p-2 -ml-2 hover:opacity-80 transition-opacity"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 font-label-caps text-label-caps">
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
            className="kasheeda-script text-primary block hover:opacity-90 transition-opacity leading-none"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
          >
            Kasheeda
          </button>
        </div>

        {/* Trailing Action Icons */}
        <div className="flex items-center space-x-3 text-primary">
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
            className="p-2 hover:opacity-80 transition-opacity relative"
          >
            <span className="material-symbols-outlined text-xl">search</span>
          </button>

          <button
            onClick={() => navigateTo('catalog')}
            aria-label="Wishlist"
            className="p-2 hover:opacity-80 transition-opacity relative hidden sm:block"
          >
            <span className="material-symbols-outlined text-xl">favorite</span>
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
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-on-primary rounded-full text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            aria-label="Profile"
            className="p-2 hover:opacity-80 transition-opacity hidden md:block"
          >
            <span className="material-symbols-outlined text-xl">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
