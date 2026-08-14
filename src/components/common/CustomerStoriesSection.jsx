import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  REVIEW_REELS,
  REVIEW_PHOTOS,
} from '../../data/instaReviews';

/**
 * Desktop collage layout, positioned inside `.collage-stage`.
 *
 * Cards are sized by WIDTH (height follows from the 9:16 / 4:5 aspect ratio).
 * Width percentages are relative to the stage width, which never changes with
 * the window height — so the columns keep the same ~1% gap on every screen and
 * the cards can sit close together without ever overlapping.
 *   from  — where the card starts before it animates in (px offsets + tilt)
 *   depth — how far it drifts as the page scrolls, for a little parallax
 */
/**
 * Gaps are sized for the TILTED footprint, not the upright one: rotating a
 * card widens how much room it needs by roughly (height × sin θ) ÷ 2 per side
 * — about 7px for a photo at 3° and 5px for a reel at 1.5°. The ~2% nominal
 * gaps below (≈27px on a 1240px stage) leave 10–15px of clear air once that
 * is taken off, which is why the tilts here stay small.
 */
const POSITIONS = [
  // Outer left column — two photographs stacked
  { left: '0.2%', top: '6%', width: '17%', rot: -3, delay: 300, from: { x: -60, y: 30, r: -11 }, depth: 22 },
  // Inner left — reel
  { left: '19.4%', top: '11%', width: '18%', rot: -1.5, delay: 130, from: { x: -70, y: 45, r: -8 }, depth: 15 },
  // Hero reel, dead centre
  { left: '50%', top: '4%', width: '21.5%', rot: 0, centre: true, delay: 0, from: { x: 0, y: 60, r: 3 }, depth: 26 },
  // Inner right — reel
  { left: '62.6%', top: '11%', width: '18%', rot: 1.5, delay: 200, from: { x: 70, y: 45, r: 8 }, depth: 15 },
  // Outer right column — two photographs stacked
  { right: '0.2%', top: '6%', width: '17%', rot: 3, delay: 380, from: { x: 60, y: 30, r: 11 }, depth: 22 },
  { left: '0.8%', top: '57%', width: '15.5%', rot: 3.5, delay: 470, from: { x: -50, y: 45, r: 12 }, depth: 28 },
  { right: '0.8%', top: '57%', width: '15.5%', rot: -3.5, delay: 540, from: { x: 50, y: 45, r: -12 }, depth: 28 },
];

/** True once the viewport is wide enough for the absolute collage. */
const useIsWide = () => {
  const [isWide, setIsWide] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e) => setIsWide(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return isWide;
};

const Stars = ({ count = 5, className = 'text-secondary' }) => (
  <div className={`flex gap-[3px] ${className}`} aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l2.9 6.26 6.85.72-5.1 4.6 1.42 6.72L12 16.9l-6.07 3.4 1.42-6.72-5.1-4.6 6.85-.72L12 2z" />
      </svg>
    ))}
  </div>
);

const InstagramGlyph = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const altFor = (item) =>
  item.kind === 'review' ? `${item.name}'s Kasheeda piece` : item.caption;

/**
 * Lightbox — plays the reel (local mp4 if provided, otherwise Instagram's
 * embed player) or opens the photograph with its review. Everything happens
 * here; nothing sends the visitor to Instagram.
 */
const StoryLightbox = ({ item, onClose }) => {
  const closeRef = useRef(null);
  const videoRef = useRef(null);

  // Start the clip the moment the lightbox opens. Browsers allow sound here
  // because opening it was a click; if a stricter policy refuses, retry muted
  // rather than leaving the visitor on a frozen frame.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      video.muted = true;
      video.play().catch(() => {});
    });
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const isReel = item.kind === 'reel';

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={isReel ? item.caption : altFor(item)}
      onClick={onClose}
    >
      <div
        className={`lightbox-panel no-scrollbar ${isReel ? '' : 'lightbox-panel-wide'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="lightbox-close" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        {isReel ? (
          item.video ? (
            <video
              ref={videoRef}
              src={item.video}
              poster={item.cover}
              className="lightbox-frame"
              controls
              autoPlay
              loop
              playsInline
            />
          ) : (
            <iframe
              src={item.embed}
              title={item.caption}
              className="lightbox-frame"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              scrolling="no"
            />
          )
        ) : (
          <div className="flex flex-col sm:flex-row bg-surface-container-lowest">
            <div className="sm:w-1/2 bg-surface-container shrink-0">
              {/* contain, not cover — the full photograph matters here */}
              <img
                src={item.cover}
                alt={altFor(item)}
                className="lightbox-photo w-full h-full max-h-[70vh] object-contain"
              />
            </div>

            {item.kind === 'review' ? (
              <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                <span className="font-brand text-5xl leading-none text-primary/20" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed -mt-3">
                  {item.quote}
                </p>
                <div className="mt-6 pt-5 border-t border-outline-variant/60">
                  <p className="font-brand italic text-primary text-2xl leading-tight">{item.name}</p>
                  <span className="font-label-caps text-[10px] tracking-[0.18em] uppercase text-on-surface-variant/70">
                    {item.location}
                  </span>
                  <div className="mt-3">
                    <Stars count={item.rating} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-3">
                  {item.tag}
                </span>
                <p className="font-brand italic text-primary text-2xl leading-snug">
                  {item.caption}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed">
                  {item.story || 'A moment from our world, shared on Instagram.'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/** A single collage tile. */
const StoryCard = ({ item, onOpen }) => {
  const previewRef = useRef(null);
  const isReel = item.kind === 'reel';
  const isReview = item.kind === 'review';

  // With a local mp4 the card previews the reel silently on hover.
  const onEnter = () => previewRef.current?.play().catch(() => {});
  const onLeave = () => {
    const v = previewRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <button
      type="button"
      className="story-card"
      onClick={() => onOpen(item)}
      onMouseEnter={item.video ? onEnter : undefined}
      onMouseLeave={item.video ? onLeave : undefined}
      aria-label={
        isReel
          ? `Play reel: ${item.caption}`
          : isReview
            ? `Read ${item.name}'s review`
            : `Open photo: ${item.caption}`
      }
    >
      <div className="story-card-lift">
        {item.video ? (
          <video
            ref={previewRef}
            src={item.video}
            poster={item.cover}
            className="story-media"
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img src={item.cover} alt={altFor(item)} loading="lazy" className="story-media" />
        )}
        <div className="story-scrim" />

        <span className="story-badge">
          <InstagramGlyph />
        </span>

        {isReel && (
          <span className="story-play">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.5v13l11-6.5-11-6.5z" />
            </svg>
          </span>
        )}

        {isReview ? (
          <>
            <div className="story-caption story-caption-photo">
              <Stars count={item.rating} className="text-secondary-container mb-1" />
              <p className="font-brand italic text-white text-xl leading-tight">{item.name}</p>
              <span className="font-label-caps text-[9px] tracking-[0.18em] uppercase text-white/65">
                {item.location}
              </span>
            </div>

            {/* Covers the whole card on hover, so nothing peeks out below it */}
            <div className="story-quote">
              <span className="font-brand text-4xl leading-none text-white/25" aria-hidden="true">
                &ldquo;
              </span>
              <p className="font-body-md text-[13px] leading-snug text-white/95 -mt-2">
                {item.quote}
              </p>
              <div className="mt-auto pt-3">
                <p className="font-brand italic text-white text-lg leading-tight">{item.name}</p>
                <span className="font-label-caps text-[9px] tracking-[0.2em] uppercase text-rose-200">
                  Read review →
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="story-caption">
            <span className="font-label-caps text-[9px] tracking-[0.22em] uppercase text-rose-200/90">
              {item.tag}
            </span>
            <p className="font-body-md text-[12.5px] leading-snug text-white/95 mt-1">
              {item.caption}
            </p>
          </div>
        )}
      </div>
    </button>
  );
};

/**
 * CustomerStoriesSection
 * A one-screen collage of reels and photographs from @kasheeda.the.boutique.
 * Cards scatter in as the section scrolls into view and drift gently with the
 * scroll; clicking one opens a lightbox that plays or reads on our own site.
 */
export const CustomerStoriesSection = () => {
  const sectionRef = useRef(null);
  const isWide = useIsWide();
  const [inView, setInView] = useState(false);
  const [drift, setDrift] = useState(0); // -1 below the fold → 1 scrolled past
  const [active, setActive] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.2 }
    );
    observer.observe(section);

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = section.getBoundingClientRect();
        const centre = rect.top + rect.height / 2;
        const raw = 1 - centre / (window.innerHeight / 2);
        setDrift(Math.max(-1, Math.min(1, raw)));
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const closeLightbox = useCallback(() => setActive(null), []);

  // Order matches the POSITIONS table: photo, reel, hero reel, reel, then the
  // three remaining photographs in the outer columns.
  const [r0, r1, r2] = REVIEW_REELS;
  const [p0, p1, p2, p3] = REVIEW_PHOTOS;
  const tiles = [p0, r0, r1, r2, p1, p2, p3].filter(Boolean);

  return (
    <>
      <section
        ref={sectionRef}
        className="stories-section py-20 overflow-hidden"
        aria-labelledby="customer-stories-heading"
      >
        {/* ── Heading ── */}
        <div
          className="text-center px-margin-mobile mb-10 stories-fade"
          style={{ '--delay': '0ms', opacity: inView ? 1 : 0 }}
        >
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-2">
            Loved By You
          </span>
          <h2
            id="customer-stories-heading"
            className="font-brand text-headline-md text-primary font-light italic mb-4"
          >
            Kasheeda, Worn In Real Life
          </h2>
          <div className="w-16 h-[1px] bg-primary/30 mx-auto mb-5" />
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto leading-relaxed">
            Reels and photographs from our world and the women in it. Tap any
            card — everything opens right here.
          </p>
        </div>

        {/* ── Collage (desktop) ── */}
        {isWide ? (
          <div className="collage-stage px-margin-mobile">
            {tiles.map((item, i) => {
              const pos = POSITIONS[i];
              if (!pos) return null;
              return (
                <div
                  key={item.id}
                  className="collage-item"
                  style={{
                    left: pos.left,
                    right: pos.right,
                    top: pos.top,
                    width: pos.width,
                    aspectRatio: item.kind === 'reel' ? '9 / 16' : '4 / 5',
                    zIndex: 10 + i,
                    '--delay': `${pos.delay}ms`,
                    opacity: inView ? 1 : 0,
                    transform: [
                      pos.centre ? 'translateX(-50%)' : '',
                      inView
                        ? `translate3d(0, ${drift * pos.depth}px, 0)`
                        : `translate3d(${pos.from.x}px, ${pos.from.y}px, 0)`,
                      `rotate(${inView ? pos.rot : pos.from.r}deg)`,
                    ]
                      .filter(Boolean)
                      .join(' '),
                  }}
                >
                  <StoryCard item={item} onOpen={setActive} />
                </div>
              );
            })}

            {/* Handwritten note, centred in the gap under the hero */}
            <span
              className="collage-note absolute text-[40px] stories-fade"
              style={{
                left: '50%',
                bottom: '1%',
                '--delay': '680ms',
                opacity: inView ? 1 : 0,
                transform: 'translateX(-50%) rotate(-4deg)',
              }}
            >
              from our girls
            </span>
          </div>
        ) : (
          /* ── Mobile + tablet ──
             Reels become a swipeable rail with the next card peeking, and the
             photographs sit under it as a tilted two-column collage. */
          <div className="max-w-container-max mx-auto">
            <div className="stories-rail no-scrollbar">
              {REVIEW_REELS.map((item, i) => (
                <div
                  key={item.id}
                  className="stories-rail-item collage-item !relative"
                  style={{
                    '--delay': `${i * 110}ms`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(30px)',
                  }}
                >
                  <StoryCard item={item} onOpen={setActive} />
                </div>
              ))}
            </div>

            <div
              className="flex items-center justify-center gap-2 mt-4 stories-fade"
              style={{ '--delay': '380ms', opacity: inView ? 1 : 0 }}
            >
              <span className="h-px w-6 bg-primary/25" />
              <span className="font-label-caps text-[10px] tracking-[0.24em] uppercase text-on-surface-variant/70">
                Swipe for more reels
              </span>
              <span className="h-px w-6 bg-primary/25" />
            </div>

            <div className="px-margin-mobile grid grid-cols-2 gap-4 mt-8">
              {REVIEW_PHOTOS.map((item, i) => {
                const tilt = i % 2 ? 2.5 : -2.5;
                return (
                  <div
                    key={item.id}
                    className="collage-item !relative"
                    style={{
                      aspectRatio: '4 / 5',
                      marginTop: i % 2 ? '26px' : 0,
                      '--delay': `${420 + i * 110}ms`,
                      opacity: inView ? 1 : 0,
                      transform: inView
                        ? `rotate(${tilt}deg)`
                        : `translateY(30px) rotate(${tilt * 3}deg)`,
                    }}
                  >
                    <StoryCard item={item} onOpen={setActive} />
                  </div>
                );
              })}
            </div>

            <p
              className="collage-note text-center text-[24px] mt-10 stories-fade"
              style={{ '--delay': '760ms', opacity: inView ? 1 : 0 }}
            >
              from our girls
            </p>
          </div>
        )}

        {/* ── Follow CTA ── */}
        <div
          className="text-center mt-10 lg:mt-6 stories-fade"
          style={{ '--delay': '700ms', opacity: inView ? 1 : 0 }}
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-primary/25 text-primary font-label-caps text-label-caps uppercase tracking-widest px-8 py-4 hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300"
          >
            <InstagramGlyph size={17} />
            Follow @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </section>

      {active && <StoryLightbox item={active} onClose={closeLightbox} />}
    </>
  );
};
