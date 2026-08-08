import React from 'react';
import { useShop } from '../../context/ShopContext';

export const MobileMenu = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, navigateTo } = useShop();

  if (!isMobileMenuOpen) return null;

  const links = [
    { label: 'Home', page: 'home' },
    { label: 'Lehengas Collection', page: 'catalog', category: 'Lehengas' },
    { label: 'Heritage Sarees', page: 'catalog', category: 'Sarees' },
    { label: 'Modern Kurtas', page: 'catalog', category: 'Kurtas' },
    { label: 'All Collections', page: 'catalog', category: 'All' },
    { label: 'Journal', page: 'journal' },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden flex">
      {/* Backdrop */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-xs"
      />

      <div className="relative w-4/5 max-w-sm bg-surface h-full shadow-2xl p-6 flex flex-col justify-between z-10 border-r border-outline-variant/30">
        <div>
          <div className="flex justify-between items-center mb-8 border-b border-outline-variant/30 pb-4">
            <span className="font-display-lg text-2xl text-primary">Kasheeda</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-primary p-1"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigateTo(link.page, link.category || 'All');
                }}
                className="text-left font-label-caps text-sm text-on-surface hover:text-primary tracking-widest uppercase transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="border-t border-outline-variant/30 pt-6">
          <p className="font-body-md text-xs text-on-surface-variant mb-2">
            Kasheeda Boutique • New Delhi
          </p>
          <p className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
            © 2024 Kasheeda. Crafted Heritage.
          </p>
        </div>
      </div>
    </div>
  );
};
