import { readFile, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { PRODUCTS } from '../src/data/products.js';

const dist = join(dirname(dirname(fileURLToPath(import.meta.url))), 'dist');
const MAX = 600 * 1024; // WhatsApp drops previews above roughly this size

for (const p of [{ id: 'home', page: '' }, ...PRODUCTS.map((p) => ({ id: p.id, page: `product/${p.id}` }))]) {
  const html = await readFile(join(dist, p.page, 'index.html'), 'utf8');
  // Absolute, and stamped from the deployment domain — a relative or empty
  // og:image is exactly the failure mode that shows a blank preview card.
  assert.match(html, new RegExp(`og:image" content="https?://[^"]+/og/${p.id}\.jpg"`), `og:image wrong for ${p.id}`);
  assert.match(html, new RegExp(`og:url" content="https?://[^"]+/${p.page}"`), `og:url wrong for ${p.id}`);
  assert.ok(/og:title" content="[^"]+"/.test(html), `og:title empty for ${p.id}`);
  const { size } = await stat(join(dist, 'og', `${p.id}.jpg`));
  assert.ok(size < MAX, `${p.id}.jpg is ${Math.round(size / 1024)}KB, over the ${MAX / 1024}KB preview limit`);
}
console.log(`ok — ${PRODUCTS.length + 1} previews verified`);
