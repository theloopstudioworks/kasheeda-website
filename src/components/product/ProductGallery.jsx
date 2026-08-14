import React, { useState, useEffect, useMemo } from 'react';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

export const ProductGallery = ({ images, title }) => {
  // Only list views that actually exist, so a single-image product doesn't
  // render the same thumbnail four times.
  const imageList = useMemo(
    () =>
      [
        { label: 'Main View', url: images.main },
        { label: 'Embroidery Detail', url: images.detail },
        { label: 'Drape View', url: images.drape },
        { label: 'Full View', url: images.full },
      ].filter((img) => Boolean(img.url)),
    [images]
  );

  const [activeImage, setActiveImage] = useState(images.main);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useBodyScrollLock(isVideoModalOpen);

  // Navigating between products (e.g. from "You May Also Admire") swaps the
  // props without remounting, so reset the active image whenever it changes.
  useEffect(() => {
    setActiveImage(images.main);
  }, [images]);

  return (
    <section className="lg:col-span-7 flex flex-col gap-base">
      {/* Main Active Image */}
      <div className="w-full relative aspect-[3/4] bg-surface-container-low group overflow-hidden rounded-sm">
        <img
          src={activeImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Thumbnails Grid */}
      <div
        className={`grid grid-cols-4 gap-base mt-2 ${
          imageList.length < 2 ? 'hidden' : ''
        }`}
      >
        {imageList.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setActiveImage(img.url)}
            className={`aspect-[3/4] bg-surface-container-low cursor-pointer border relative overflow-hidden rounded-sm transition-all ${
              activeImage === img.url
                ? 'border-primary opacity-100 ring-1 ring-primary'
                : 'border-outline-variant/50 opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={img.url}
              alt={`${title} - ${img.label}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Video Modal Trigger Card / Video Feature */}
      <div
        onClick={() => setIsVideoModalOpen(true)}
        className="mt-2 p-4 bg-surface-container-low border border-outline-variant/30 rounded flex items-center justify-between cursor-pointer hover:bg-surface-container transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-2xl">
            play_circle
          </span>
          <div>
            <h4 className="font-headline-sm text-sm text-primary">
              Craftsmanship Video Showcase
            </h4>
            <p className="font-body-md text-xs text-on-surface-variant">
              Watch master artisans hand-weaving Zari embroidery in real time
            </p>
          </div>
        </div>
        <span className="font-label-caps text-xs text-primary underline">Watch</span>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-surface border border-secondary p-6 rounded max-w-xl w-full relative">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 text-primary"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-headline-sm text-lg text-primary mb-4">
              Hand-loom Artistry: {title}
            </h3>
            <div className="aspect-video bg-black rounded flex items-center justify-center text-white">
              <div className="text-center p-6">
                <span className="material-symbols-outlined text-5xl text-secondary mb-2">
                  movie
                </span>
                <p className="font-headline-sm text-base">
                  Boutique Artisanal Crafting Video
                </p>
                <p className="font-body-md text-xs text-white/70 mt-1">
                  120 hours of intricate Kadwa weaving and gold thread work.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
