---
name: Ethnic Luxury
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d4'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ed'
  surface-container: '#f5ece7'
  surface-container-high: '#efe6e2'
  surface-container-highest: '#e9e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#584141'
  inverse-surface: '#34302c'
  inverse-on-surface: '#f8efea'
  outline: '#8c7071'
  outline-variant: '#e0bfbf'
  surface-tint: '#af2b3e'
  primary: '#570013'
  on-primary: '#ffffff'
  primary-container: '#800020'
  on-primary-container: '#ff828a'
  inverse-primary: '#ffb3b5'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#272725'
  on-tertiary: '#ffffff'
  tertiary-container: '#3d3d3b'
  on-tertiary-container: '#a9a8a4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b5'
  on-primary-fixed: '#40000b'
  on-primary-fixed-variant: '#8e0f28'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e4e2de'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#474744'
  background: '#fff8f5'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system is built upon the concept of "Contemporary Heritage." It targets a discerning clientele that values the intersection of traditional Indian craftsmanship and modern minimalist aesthetics. The emotional response should be one of quiet confidence, warmth, and exclusivity. 

The visual style is a blend of **Minimalism** and **Tactile Luxury**. We use generous whitespace to allow high-quality product photography to breathe, reminiscent of a high-end physical boutique. Sophistication is achieved not through complexity, but through the precise application of rich textures, delicate gold accents, and a restrained color palette that evokes the feel of raw silk and hand-woven fabrics.

## Colors

The palette is anchored by **Deep Maroon**, representing the depth of tradition and regal elegance. This is used sparingly for key interactions and primary brand moments. **Antique Gold** serves as our accent color, used for delicate borders, icons, and subtle dividers to evoke a sense of craftsmanship and value. 

The primary surface is **Cream (#FDFBF7)**, which provides a warmer, more organic feel than pure white, mimicking the natural hue of unbleached cotton or silk. Text is rendered in a **Warm Charcoal**, ensuring high readability while maintaining a softer contrast than pure black.

## Typography

The typographic hierarchy relies on a high-contrast pairing. **Playfair Display** is used for all headlines and display text, lending a rhythmic, editorial quality to the interface. Its delicate serifs and variable stroke widths mirror the intricacy of ethnic embroidery.

**Source Sans 3** is utilized for body copy and functional labels. Its clean, neutral character ensures that product descriptions are highly legible across all devices. We use an uppercase label style with generous letter spacing for secondary navigation and categories to reinforce the premium, "label-esque" feel of luxury fashion.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain a curated, cinematic feel, while transitioning to a flexible fluid model for mobile devices. On desktop, content is centered within a 12-column grid to create "breathable" side margins that emphasize the boutique aesthetic.

Spacing follows an 8px scale. To achieve the "premium" feel, we prioritize **generous vertical padding** (64px+) between sections, preventing the interface from feeling cluttered or transactional. Horizontal margins are kept wide on desktop (64px) to frame the content as if it were in a gallery.

## Elevation & Depth

In this design system, depth is achieved through **Tonal Layering** and **Low-contrast Outlines** rather than heavy shadows. We want the UI to feel flat and structured, like high-quality paper.

- **Surfaces:** All main content sits on the Cream base. Modal windows or "quick view" cards use a subtle white surface with a very soft, high-diffusion shadow (0px 4px 20px, 5% opacity) to suggest a gentle lift.
- **Borders:** Instead of shadows, we use 1px Antique Gold borders for cards and inputs to define boundaries. This creates a more sophisticated, "crafted" appearance.
- **Glass:** A light backdrop blur (8px) is reserved exclusively for the top navigation bar to maintain context while scrolling through vibrant imagery.

## Shapes

We use **Soft** roundedness (0.25rem/4px) for most UI elements. This provides a subtle "human" touch to the interface while maintaining the architectural structure expected of a high-end brand. 

Avoid fully rounded "pill" shapes for primary actions; instead, use slightly softened rectangles to convey a sense of formal elegance. The exception is reserved for high-activity items like "New" or "Sale" badges, which may utilize a slightly higher radius for distinction.

## Components

### Buttons
- **Primary:** Deep Maroon background with White text. Rectangular with minimal rounding.
- **Secondary:** Antique Gold border (1px) with Deep Maroon text and transparent background.
- **WhatsApp CTA:** A specialized button featuring the WhatsApp icon, using a sophisticated forest green (#25D366) but styled with the same typography and padding as our primary buttons to ensure it feels integrated, not intrusive.

### Product Cards
Cards are borderless with the Cream background. The image should occupy 80% of the card area. Product titles in Playfair Display (Headline-sm) are followed by the price in Source Sans 3. A "Quick Add" or "Enquire" link should appear on hover to keep the static view clean.

### Navigation Bar
A minimalist, centered logo with a top-aligned navigation menu. Use `label-caps` for menu items. The bar should be sticky with a subtle cream-tinted translucent background and a 1px Antique Gold bottom border.

### Input Fields
Inputs should be "ghost" style—only a bottom border in Antique Gold or a very light gray. Floating labels in `label-caps` move above the line when active. 

### Chips/Filters
Use the Antique Gold for selection states. Chips should be outlined and use `label-caps` to distinguish them from standard body text.