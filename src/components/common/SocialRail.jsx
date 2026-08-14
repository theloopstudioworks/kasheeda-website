import React, { useEffect, useRef, useState } from 'react';
import { SOCIAL_LINKS } from '../../data/contact';
import { useShop } from '../../context/ShopContext';

const ICONS = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
};

// Top rule, label, socials, bottom rule — rendered in this order.
const RAIL_ITEMS = [
  { key: 'rule-top', type: 'rule', edge: 'b' },
  { key: 'label', type: 'label' },
  ...SOCIAL_LINKS.map((social) => ({ key: social.name, type: 'social', social })),
  { key: 'rule-bottom', type: 'rule', edge: 't' },
];

/**
 * Fixed "Follow us on" rail pinned to the right edge of the viewport.
 *
 * Each element decides its own colour from what sits behind it, rather than the
 * rail switching as one block. Scrolling off the hero therefore recolours the
 * rail piece by piece from the bottom up — bottom rule, icon, label, top rule.
 * Hidden below lg, where it would overlap the content.
 */
export const SocialRail = () => {
  const { activePage } = useShop();
  const itemRefs = useRef([]);
  const [overHero, setOverHero] = useState(() => RAIL_ITEMS.map(() => false));

  useEffect(() => {
    const check = () => {
      const hero = document.getElementById('hero-banner');
      const heroRect = hero ? hero.getBoundingClientRect() : null;

      setOverHero(
        RAIL_ITEMS.map((_, i) => {
          const el = itemRefs.current[i];
          if (!el || !heroRect) return false;
          const rect = el.getBoundingClientRect();
          const mid = rect.top + rect.height / 2;
          return mid >= heroRect.top && mid <= heroRect.bottom;
        })
      );
    };

    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [activePage]);

  // A soft shadow only while light, so white never gets lost on a pale photo.
  const shade = (isLight) =>
    isLight ? { filter: 'drop-shadow(0 1px 6px rgba(0,0,0,0.45))' } : undefined;

  return (
    <aside className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4 pointer-events-none">
      {RAIL_ITEMS.map((item, i) => {
        const isLight = overHero[i];
        const setRef = (el) => {
          itemRefs.current[i] = el;
        };

        if (item.type === 'rule') {
          return (
            <span
              key={item.key}
              ref={setRef}
              style={shade(isLight)}
              className={`w-px h-16 transition-colors duration-500 ${
                item.edge === 'b' ? 'bg-gradient-to-b' : 'bg-gradient-to-t'
              } from-transparent ${isLight ? 'to-white/70' : 'to-primary/40'}`}
            />
          );
        }

        if (item.type === 'label') {
          return (
            <span
              key={item.key}
              ref={setRef}
              style={{ writingMode: 'vertical-rl', ...shade(isLight) }}
              className={`font-label-caps text-label-caps uppercase tracking-[0.25em] whitespace-nowrap transition-colors duration-500 ${
                isLight ? 'text-white' : 'text-primary'
              }`}
            >
              Follow us on
            </span>
          );
        }

        return (
          <a
            key={item.key}
            ref={setRef}
            href={item.social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Kasheeda on ${item.social.name}`}
            title={`Kasheeda on ${item.social.name}`}
            style={shade(isLight)}
            className={`pointer-events-auto hover:-translate-y-0.5 hover:text-secondary transition-all duration-500 ${
              isLight ? 'text-white' : 'text-primary'
            }`}
          >
            {ICONS[item.social.name]}
          </a>
        );
      })}
    </aside>
  );
};
