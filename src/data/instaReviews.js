/**
 * Instagram customer-story collage on the home page.
 *
 * COVERS are the real post images, pulled from Instagram and stored in
 * `public/reviews/` (Instagram's own CDN links are signed and expire, so they
 * have to live locally). No catalog stand-ins are used any more.
 *
 * PLAYBACK. Clicking a reel opens a lightbox on our own site — nothing links
 * out to Instagram. It plays whichever of these is available:
 *   1. `video` — a local .mp4 in `public/reviews/`. This is the one that
 *      plays *directly*: the card previews it silently on hover and the
 *      lightbox starts playing on open, with no Instagram play button in the
 *      way. Download each reel from the Instagram app and drop the file in.
 *   2. Instagram's official embed player (used while `video` is empty). It
 *      plays on our page rather than redirecting, but Instagram requires one
 *      click on their play button — their embed no longer exposes the video
 *      file, so that click cannot be removed without the local .mp4.
 *
 * THREE KINDS OF CARD:
 *   reel   — plays, shows a caption
 *   review — a customer quote over a photograph
 *   moment — a real photograph from the boutique with its own caption; used
 *            for pictures of identifiable people, which must never carry an
 *            invented review
 *
 * The `review` QUOTES AND NAMES ARE PLACEHOLDER COPY. Replace them with real
 * customer words before going live.
 */

export const INSTAGRAM_HANDLE = 'kasheeda.the.boutique';
export const INSTAGRAM_URL = 'https://www.instagram.com/kasheeda.the.boutique/';

/**
 * Reels — the playable cards. ORDER MATTERS on desktop: the first three fill
 * the inner-left, centre (hero) and inner-right slots of the collage, in that
 * order. Everything after that only appears in the mobile swipe rail.
 */
export const REVIEW_REELS = [
  {
    id: 'DXZUba7D3BR',
    kind: 'reel',
    embed: 'https://www.instagram.com/p/DXZUba7D3BR/embed/',
    cover: '/reviews/reel-pink-lehariya.jpg',
    video: '',
    caption: 'Pink lehariya, an afternoon at home',
    tag: 'Reel',
  },
  {
    id: 'DaaFr-gyDN5',
    kind: 'reel',
    embed: 'https://www.instagram.com/p/DaaFr-gyDN5/embed/',
    cover: '/reviews/reel-daant.jpg',
    video: '',
    caption: 'Daant se reshmi dor kat-ti nahi',
    tag: 'Reel',
  },
  {
    id: 'Dbfm_HwPA2A',
    kind: 'reel',
    embed: 'https://www.instagram.com/p/Dbfm_HwPA2A/embed/',
    cover: '/reviews/reel-chikankari.jpg',
    video: '',
    caption: 'Your forever Chikankari saree, just arrived',
    tag: 'Reel',
  },
  {
    id: 'DbqR37wv3oB',
    kind: 'reel',
    embed: 'https://www.instagram.com/reel/DbqR37wv3oB/embed/',
    cover: '/reviews/reel-shibori.jpg',
    video: '',
    caption: 'Shibori lehariya in pink and purple',
    tag: 'Reel',
  },
];

/** Photo cards — customer quotes, plus real moments from the boutique. */
export const REVIEW_PHOTOS = [
  {
    id: 'DW27t_sAPke',
    kind: 'moment',
    cover: '/reviews/moment-beijing.jpg',
    tag: 'Kasheeda goes global',
    caption: 'Xue Féng (雪冯) at the Forbidden City, Beijing',
    story:
      'Our client Xue Féng wore her Kasheeda suit to the Forbidden City in Beijing — Indian handwork, carried half a world away.',
  },
  {
    id: 'Db3AVPID-Rc',
    kind: 'moment',
    cover: '/reviews/moment-exhibition.jpg',
    tag: 'At the exhibition',
    caption: 'A stall full of stories and smiles',
  },
  {
    id: 'DbTA6qjAbJ3',
    kind: 'review',
    cover: '/reviews/review-blouses.jpg',
    name: 'Meghna',
    location: 'Delhi',
    rating: 5,
    quote:
      'Kamini ji helped me pick the colour over WhatsApp. It reached in four days and the work is beautifully fine.',
  },
  {
    id: 'Dbgg3vwPEn6',
    kind: 'moment',
    cover: '/reviews/moment-friendship.jpg',
    tag: 'Friendship Day',
    caption: 'To the ones who add grace to your chaos',
  },
];
