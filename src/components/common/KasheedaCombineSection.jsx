import React, { useEffect, useRef, useState } from 'react';
import { Wordmark } from './Wordmark';

/**
 * KasheedaCombineSection
 * On scroll, 3 scattered cards animate and "combine" to form the Kasheeda name
 * with the taglines: Hand Picked · In House Design · Crafted With Love
 */
export const KasheedaCombineSection = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 = scattered, 1 = combined
  const [isCombined, setIsCombined] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const sectionH = section.offsetHeight;

      // Tuning knobs for when the cards merge.
      //   START — begins as soon as the section top is this far down the
      //           viewport, so the merge is well under way while the stage is
      //           still low on screen rather than pinned under the header.
      //   END   — finishes just as the section top reaches the viewport top.
      // Raise START / shrink END to combine even earlier.
      const start = windowH * 0.5;
      const end = -sectionH * 0.1;

      // rect.top goes from +windowH (not in view) to negative (scrolled past)
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped);
      setIsCombined(clamped > 0.88);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ─── Card definitions ────────────────────────────────────────────────────
  // Each card has: scattered position (% from center), combined position, label, icon
  const cards = [
    {
      id: 1,
      variant: 'kcard-1',
      // Scattered: left side, slightly above center
      scatterX: -42,    // vw units from center
      scatterY: -8,     // vh units from center
      scatterRotate: -12,
      // Combined: center
      combinedX: 0,
      combinedY: 0,
      combinedRotate: 0,
      label: 'Hand Picked',
      icon: '✦',
      description: 'Every piece selected with intention — no mass production, only the finest.',
      textColor: 'text-white',
      subColor: 'text-rose-200',
    },
    {
      id: 2,
      variant: 'kcard-2',
      scatterX: 44,
      scatterY: -14,
      scatterRotate: 10,
      combinedX: 0,
      combinedY: 0,
      combinedRotate: 0,
      label: 'In House Design',
      icon: '✿',
      description: 'Original silhouettes born in our studio — never replicated, always artisanal.',
      textColor: 'text-primary',
      subColor: 'text-on-surface-variant',
    },
    {
      id: 3,
      variant: 'kcard-3',
      scatterX: 0,
      scatterY: 28,
      scatterRotate: 4,
      combinedX: 0,
      combinedY: 0,
      combinedRotate: 0,
      label: 'Crafted With Love',
      icon: '♡',
      description: 'Each stitch carries the warmth of our makers — passed down through generations.',
      textColor: 'text-white',
      subColor: 'text-red-200',
    },
  ];

  // easing function for smooth interpolation
  const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  const p = ease(Math.min(progress * 1.1, 1)); // slightly overshoot for snap feel

  // Card size: gets slightly bigger when combined
  const baseW = 280;
  const baseH = 340;

  // The site header is sticky and floats over the top of this stage, so the
  // whole card composition is nudged down to stay clear of it.
  const HEADER_OFFSET = 30;

  return (
    <section
      ref={sectionRef}
      className="combine-section"
    >
      {/* ── Sticky card stage ── */}
      <div
        className="sticky top-0 w-full flex items-center justify-center overflow-hidden"
        style={{ height: '100vh' }}
      >
        {/* ── Section header ── */}
        <div
          className="absolute top-0 left-0 right-0 text-center px-4 pt-28 z-20"
          style={{
            opacity: Math.max(0, 1 - progress * 3),
            transform: `translateY(${-progress * 20}px)`,
            pointerEvents: 'none',
          }}
        >
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-3">
            Our Promise
          </span>
          <h2 className="font-brand text-4xl md:text-5xl text-primary font-light italic">
            The Kasheeda Way
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md mt-3 max-w-md mx-auto">
            Scroll to see how our three pillars unite into one name
          </p>
          {/* Scroll indicator arrow */}
          <div
            className="mt-6 flex flex-col items-center gap-1"
            style={{ opacity: Math.max(0, 1 - progress * 5) }}
          >
            <span className="text-primary/50 text-xs font-label-caps tracking-widest uppercase">Scroll</span>
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="text-primary/40">
              <path d="M10 2v16M4 14l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Background decorative circle (blooms when combined) */}
        <div
          style={{
            position: 'absolute',
            width: `${p * 90 + 10}vmin`,
            height: `${p * 90 + 10}vmin`,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(196,18,48,${p * 0.08}) 0%, transparent 70%)`,
            transition: 'width 0.1s, height 0.1s',
            pointerEvents: 'none',
          }}
        />

        {/* ── Cards ── */}
        {cards.map((card, i) => {
          const scatterX = card.scatterX; // vw
          const scatterY = card.scatterY; // vh
          const scatterR = card.scatterRotate; // deg

          const tx = scatterX * (1 - p); // lerp to 0
          const ty = scatterY * (1 - p);
          const rot = scatterR * (1 - p);

          const zIndex = isCombined ? 30 - i : 10 + i;
          const opacityCard = isCombined ? (i === 0 ? 1 : 0) : 1;

          // Float animation classes only when scattered
          const floatClass = !isCombined ? `floating-${card.id}` : '';
          const cssRotVar = `${rot}deg`;

          return (
            <div
              key={card.id}
              className={`kcard ${card.variant} ${floatClass}`}
              style={{
                width: `${baseW + p * 60}px`,
                height: `${baseH + p * 80}px`,
                left: `calc(50% + ${tx}vw - ${(baseW + p * 60) / 2}px)`,
                top: `calc(50% + ${ty}vh - ${(baseH + p * 80) / 2}px + ${HEADER_OFFSET}px)`,
                transform: `rotate(${cssRotVar})`,
                '--rot': cssRotVar,
                zIndex,
                opacity: opacityCard,
                transition: isCombined
                  ? 'opacity 0.4s ease, left 0.05s linear, top 0.05s linear'
                  : 'left 0.05s linear, top 0.05s linear, opacity 0.4s ease',
                boxShadow: isCombined
                  ? '0 32px 80px rgba(139, 0, 0, 0.55), 0 4px 16px rgba(0,0,0,0.25)'
                  : undefined,
              }}
            >
              <div className="kcard-inner">
                <span
                  className="kcard-number"
                  style={{ color: card.id === 2 ? '#8B0000' : '#ffffff' }}
                >
                  0{card.id}
                </span>

                {/* Show brand name when combined (card 1) */}
                {card.id === 1 && (
                  <div
                    style={{
                      opacity: isCombined ? 1 : 0,
                      transform: isCombined ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(10px)',
                      transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <Wordmark
                      variant="light"
                      className="w-[72%] h-auto drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]"
                    />
                    <span className="combine-sub-text text-rose-200 tracking-[0.3em]">
                      THE BOUTIQUE
                    </span>
                    {/* Three pillars as tiny badges */}
                    <div className="flex flex-col gap-2 mt-2">
                      {['Hand Picked', 'In House Design', 'Crafted With Love'].map((pill) => (
                        <span
                          key={pill}
                          className="text-white/80 font-label-caps text-[10px] tracking-[0.2em] uppercase border border-white/20 px-3 py-1 rounded-full"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Show card content when scattered */}
                <div
                  style={{
                    opacity: isCombined ? 0 : 1,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '2.5rem',
                      lineHeight: 1,
                      color: card.id === 2 ? '#C41230' : 'rgba(255,255,255,0.85)',
                    }}
                  >
                    {card.icon}
                  </span>
                  <h3
                    className={`font-brand font-light italic ${card.textColor}`}
                    style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', lineHeight: 1.2 }}
                  >
                    {card.label}
                  </h3>
                  <div
                    style={{
                      width: '32px',
                      height: '1px',
                      background: card.id === 2 ? '#C41230' : 'rgba(255,255,255,0.4)',
                    }}
                  />
                  <p
                    className={`${card.subColor} font-body-md text-sm leading-relaxed text-center max-w-[180px]`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* ── Scattered state: labels below cards ── */}
        <div
          className="absolute bottom-16 left-0 right-0 flex justify-center gap-8 px-4"
          style={{
            opacity: Math.max(0, 1 - progress * 4),
            pointerEvents: 'none',
          }}
        >
          {cards.map((card) => (
            <div key={card.id} className="text-center">
              <span className="font-label-caps text-[10px] text-on-surface-variant/70 tracking-widest uppercase">
                {card.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Combined state: bottom tagline ── */}
        <div
          className="absolute bottom-16 left-0 right-0 text-center"
          style={{
            opacity: isCombined ? 1 : 0,
            transform: isCombined ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s',
            pointerEvents: 'none',
          }}
        >
          <p className="font-brand italic text-primary text-xl font-light">
            "Where every thread tells a story"
          </p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="h-px w-12 bg-primary/30" />
            <span className="shimmer-text font-label-caps text-[11px] tracking-[0.3em] uppercase">
              Hand Picked · In House Design · Crafted With Love
            </span>
            <div className="h-px w-12 bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};
