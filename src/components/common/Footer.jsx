import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { Wordmark } from './Wordmark';
import { INFO_PAGES, INFO_PAGE_KEYS } from '../../data/infoPages';

export const Footer = () => {
  const { navigateTo, openInfoPage } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 transition-all duration-200 ease-in-out mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter py-16 px-margin-mobile max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="md:col-span-1 mb-8 md:mb-0">
          <button
            onClick={() => navigateTo('home')}
            aria-label="Kasheeda — Home"
            className="block mb-4 text-left hover:opacity-90 transition-opacity"
          >
            <Wordmark className="h-10 md:h-12 w-auto" />
          </button>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs leading-relaxed mb-4">
            Crafting contemporary heritage through timeless hand-woven textiles and minimalist elegance.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">
            © 2024 Kasheeda. Crafted Heritage.
          </p>
        </div>

        {/* Explore Links */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-label-caps text-label-caps text-primary font-semibold mb-2 uppercase tracking-widest">
            Explore
          </h4>
          <button
            onClick={() => navigateTo('catalog', 'Lehengas')}
            className="text-left font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
          >
            Lehengas Collection
          </button>
          <button
            onClick={() => navigateTo('catalog', 'Sarees')}
            className="text-left font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
          >
            Varanasi Sarees
          </button>
          <button
            onClick={() => navigateTo('catalog', 'Kurtas')}
            className="text-left font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
          >
            Handspun Kurtas
          </button>
          <button
            onClick={() => navigateTo('journal')}
            className="text-left font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
          >
            The Heritage Journal
          </button>
        </div>

        {/* Support Links */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-label-caps text-label-caps text-primary font-semibold mb-2 uppercase tracking-widest">
            Customer Care
          </h4>
          {INFO_PAGE_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => openInfoPage(key)}
              className="text-left font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
            >
              {INFO_PAGES[key].label}
            </button>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-label-caps text-label-caps text-primary font-semibold mb-2 uppercase tracking-widest">
            Stay Connected
          </h4>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Subscribe for exclusive updates on new heirloom collections.
          </p>

          {subscribed ? (
            <div className="p-3 bg-surface-container-low border border-secondary/40 text-primary font-label-caps text-label-caps rounded">
              Thank you for subscribing to Kasheeda.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex mt-2 relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL ADDRESS"
                className="bg-transparent border-b border-outline-variant focus:border-primary focus:outline-none font-label-caps text-label-caps text-on-surface w-full py-2 pr-12 transition-colors placeholder:text-on-surface-variant/60"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-primary font-label-caps text-label-caps uppercase tracking-wider hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </footer>
  );
};
