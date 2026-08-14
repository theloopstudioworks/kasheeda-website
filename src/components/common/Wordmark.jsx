import React from 'react';
import redWordmark from '../../assets/kasheeda-wordmark-red.png';
import blackWordmark from '../../assets/kasheeda-wordmark-black.png';

/**
 * The Kasheeda brand wordmark.
 *
 * variant="red"   — red artwork, for light surfaces (header, footer).
 * variant="light" — the black artwork forced to white, for photography and the
 *                   crimson cards. The source art is solid black, so
 *                   brightness(0) flattens any anti-aliasing to black and
 *                   invert(1) turns it white, leaving transparency intact.
 */
export const Wordmark = ({ variant = 'red', className = '', style }) => (
  <img
    src={variant === 'light' ? blackWordmark : redWordmark}
    alt="Kasheeda"
    draggable="false"
    className={`${variant === 'light' ? 'brightness-0 invert' : ''} ${className}`}
    style={style}
  />
);
