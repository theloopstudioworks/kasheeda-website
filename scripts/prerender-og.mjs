// Link-preview prerender.
//
// WhatsApp / Facebook / X crawlers fetch the URL once and read the raw HTML —
// they never execute our React bundle, so a SPA with one index.html gives every
// URL the same generic preview. Fix: after `vite build`, stamp out one static
// HTML file per page with its own og: tags. Vercel checks the filesystem before
// applying the catch-all rewrite in vercel.json, so those files win for crawlers
// while the SPA still boots normally for real visitors.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { PRODUCTS } from '../src/data/products.js';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, 'dist');

// og:url and og:image must be absolute — crawlers don't resolve relative paths.
// So the domain is resolved here, at build time, never hardcoded in index.html:
//   SITE_URL                       -> set this by hand to override everything
//   VERCEL_PROJECT_PRODUCTION_URL  -> Vercel sets it to the project's production
//                                     domain, preferring a custom domain once
//                                     one is attached. Nothing to change on cutover.
//   localhost                      -> `npm run build` on a laptop, previews unused
const SITE = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  'http://localhost:4173'
).replace(/\/$/, '');

const HOME = {
  id: 'home',
  path: '',
  source: 'src/assets/hero-banner-carousel-image-1.jpg',
  type: 'website',
  title: 'Kasheeda - The Boutique',
  headTitle: 'Kasheeda - The Boutique | Handpicked Heritage Couture',
  description: 'Crafting contemporary heritage through timeless hand-woven textiles and minimalist elegance.',
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const clamp = (s, n = 160) => (s.length <= n ? s : `${s.slice(0, n - 1).replace(/\s+\S*$/, '')}…`);

// Replaces the content="" of an existing tag; the tag must already be in
// index.html (it is — see the placeholder tags there), so a typo fails loudly.
const setMeta = (html, sel, value) => {
  const re = new RegExp(`(<meta ${sel} content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`meta ${sel} not found in index.html`);
  return html.replace(re, `$1${esc(value)}$2`);
};

// 1200x630 JPEG: the size every crawler crops to, and small enough that
// WhatsApp actually renders it (it drops previews over ~600KB — our source
// PNGs are 2-3MB each, so linking them directly shows no image at all).
const og = async (src, out) => {
  await mkdir(dirname(out), { recursive: true });
  await sharp(src).resize(1200, 630, { fit: 'cover', position: 'top' }).jpeg({ quality: 80 }).toFile(out);
};

const base = await readFile(join(dist, 'index.html'), 'utf8');

const pages = [
  HOME,
  ...PRODUCTS.map((p) => ({
    id: p.id,
    path: `product/${p.id}`,
    source: join('public', p.images.main),
    type: 'product',
    title: `${p.title} — ${p.priceFormatted}`,
    headTitle: `${p.title} | Kasheeda`,
    description: clamp(p.description),
  })),
];

for (const page of pages) {
  await og(join(root, page.source), join(dist, 'og', `${page.id}.jpg`));

  let html = base.replace(/<title>[^<]*<\/title>/, `<title>${esc(page.headTitle)}</title>`);
  html = setMeta(html, 'name="description"', page.description);
  html = setMeta(html, 'property="og:type"', page.type);
  html = setMeta(html, 'property="og:url"', `${SITE}/${page.path}`);
  html = setMeta(html, 'property="og:title"', page.title);
  html = setMeta(html, 'property="og:description"', page.description);
  html = setMeta(html, 'property="og:image"', `${SITE}/og/${page.id}.jpg`);

  await mkdir(join(dist, page.path), { recursive: true });
  await writeFile(join(dist, page.path, 'index.html'), html);
}

console.log(`prerendered ${pages.length} previews for ${SITE}`);
