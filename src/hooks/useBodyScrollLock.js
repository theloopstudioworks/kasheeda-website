import { useEffect } from 'react';

// Module-level so that overlapping overlays (e.g. quick view -> cart drawer)
// don't release the lock while another one is still open.
let lockCount = 0;
let savedOverflow = '';
let savedPaddingRight = '';

/**
 * Freezes background page scrolling while an overlay is open.
 * Safe to call unconditionally — pass `false` when the overlay is closed.
 */
export const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    if (!isLocked) return undefined;

    const { body } = document;

    if (lockCount === 0) {
      savedOverflow = body.style.overflow;
      savedPaddingRight = body.style.paddingRight;

      // Hiding the scrollbar widens the viewport and shifts the layout, so
      // replace its width with padding to keep the page still.
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        const current = parseFloat(window.getComputedStyle(body).paddingRight) || 0;
        body.style.paddingRight = `${current + scrollbarWidth}px`;
      }
      body.style.overflow = 'hidden';
    }
    lockCount += 1;

    return () => {
      lockCount -= 1;
      if (lockCount === 0) {
        body.style.overflow = savedOverflow;
        body.style.paddingRight = savedPaddingRight;
      }
    };
  }, [isLocked]);
};
