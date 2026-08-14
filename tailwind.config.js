/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Kasheeda Deep Crimson Palette — inspired by the watercolor red logo
        "surface": "#fdf6f6",
        "surface-dim": "#e8d6d6",
        "surface-bright": "#fdf6f6",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#faeaea",
        "surface-container": "#f5e0e0",
        "surface-container-high": "#edd4d4",
        "surface-container-highest": "#e5c8c8",
        "on-surface": "#1a0a0a",
        "on-surface-variant": "#5c3333",
        "inverse-surface": "#2d1010",
        "inverse-on-surface": "#faeaea",
        "outline": "#9e5a5a",
        "outline-variant": "#e8c0c0",
        "surface-tint": "#c0152a",
        // Primary: Deep rich crimson (from logo)
        "primary": "#8B0000",
        "on-primary": "#ffffff",
        "primary-container": "#b51420",
        "on-primary-container": "#ffd7d9",
        "inverse-primary": "#ffb3b5",
        // Secondary: Warm gold / antique
        "secondary": "#8B6914",
        "on-secondary": "#ffffff",
        "secondary-container": "#f7d98b",
        "on-secondary-container": "#7a5c10",
        // Tertiary: Deep charcoal
        "tertiary": "#1f1f1f",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#383838",
        "on-tertiary-container": "#c8c8c8",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "background": "#fdf6f6",
        "on-background": "#1a0a0a",
        "surface-variant": "#e8d6d6",
        // Accent red for the cards
        "accent-red": "#C41230",
        "accent-rose": "#e8636b",
        "accent-cream": "#fdf6f2",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "sm": "0.125rem",
        "md": "0.375rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "9999px"
      },
      spacing: {
        "base": "8px",
        "container-max": "1280px",
        "gutter": "24px",
        "margin-desktop": "64px",
        "margin-mobile": "20px"
      },
      fontFamily: {
        "script": ["'Great Vibes'", "cursive"],
        "brand": ["'Cormorant Garamond'", "serif"],
        "display-lg": ["'Cormorant Garamond'", "serif"],
        "display-lg-mobile": ["'Cormorant Garamond'", "serif"],
        "headline-md": ["'Cormorant Garamond'", "serif"],
        "headline-sm": ["'Cormorant Garamond'", "serif"],
        "body-lg": ["'Source Sans 3'", "sans-serif"],
        "body-md": ["'Source Sans 3'", "sans-serif"],
        "label-caps": ["'Source Sans 3'", "sans-serif"]
      },
      fontSize: {
        // Header action icons (search / wishlist / bag / hamburger)
        icon: ["1.5rem", { lineHeight: "1" }],
        "display-lg-mobile": ["42px", { lineHeight: "1.15", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "display-lg": ["60px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-md": ["36px", { lineHeight: "1.25", fontWeight: "500" }],
        "headline-sm": ["26px", { lineHeight: "1.4", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "600" }]
      },
      keyframes: {
        'card-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'card-float': 'card-float 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
