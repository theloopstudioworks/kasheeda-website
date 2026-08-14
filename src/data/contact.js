// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR KASHEEDA'S CONTACT DETAILS
// Change the number, address or social links here and every screen follows.
// ─────────────────────────────────────────────────────────────────────────────

/** Display form, e.g. for the contact page. */
export const WHATSAPP_NUMBER_DISPLAY = '+91 82720 37228';

/** wa.me form: country code + number, digits only, no +, spaces or dashes. */
export const WHATSAPP_NUMBER = '918272037228';

/** Builds a wa.me deep link. `text` is pre-encoded by the caller. */
export const whatsappLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

export const BOUTIQUE_ADDRESS = {
  line1: 'Phase 2, 234, Vasant Vihar',
  line2: 'Dehradun, Uttarakhand 248006',
  city: 'Dehradun',
  /** Google Maps search link for the boutique. */
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=234%2C+Vasant+Vihar+Phase+2%2C+Raj+Vihar%2C+Balliwala%2C+Dehradun%2C+Uttarakhand+248006',
};

export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/kasheeda.the.boutique/',
  },
];
