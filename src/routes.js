import { PRODUCTS } from './data/products.js';
import { INFO_PAGES } from './data/infoPages.js';

const CATALOG_PATHS = { sarees: 'Sarees', suits: 'Suits', collections: 'All' };

export const pathFor = (page, { category = 'All', product, infoKey } = {}) => {
  if (page === 'detail' && product) return `/product/${product.id}`;
  if (page === 'catalog') return `/${Object.keys(CATALOG_PATHS).find((k) => CATALOG_PATHS[k] === category) || 'collections'}`;
  if (page === 'blog') return '/blogs';
  if (page === 'info' && infoKey) return `/${infoKey}`;
  return '/';
};

// Anything unrecognised falls back to home rather than a 404 screen.
export const stateFromPath = (pathname) => {
  const [first, second] = pathname.replace(/^\/+|\/+$/g, '').split('/');
  const product =
    first === 'product' && PRODUCTS.find((p) => p.id === second && !p.isHidden);
  if (product) return { page: 'detail', category: product.category, product };
  if (CATALOG_PATHS[first]) return { page: 'catalog', category: CATALOG_PATHS[first] };
  if (first === 'blogs') return { page: 'blog' };
  if (INFO_PAGES[first]) return { page: 'info', infoKey: first };
  return { page: 'home' };
};
