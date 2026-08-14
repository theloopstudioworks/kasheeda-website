// ─────────────────────────────────────────────────────────────────────────────
// CUSTOMER CARE PAGES
//
// Default copy for the four footer pages. Everything here is editable prose —
// no component changes are needed to reword a section.
//
// ⚠ PLACEHOLDERS: anything wrapped in [SQUARE BRACKETS] is a stand-in that must
//   be replaced with Kasheeda's real details before this goes live. The
//   timeframes, charges and policy windows below are reasonable defaults for an
//   Indian handloom boutique — confirm each one against how you actually trade.
//
// Section shapes:
//   { heading, body }                    — a paragraph
//   { heading, bullets: [...] }          — a list
//   { heading, table: { columns, rows } } — a table
// A section may combine body + bullets, or body + table.
// ─────────────────────────────────────────────────────────────────────────────

export const INFO_PAGES = {
  shipping: {
    label: 'Shipping & Returns',
    eyebrow: 'Customer Care',
    title: 'Shipping & Returns',
    intro:
      'Every Kasheeda piece is checked by hand, wrapped in cotton muslin and dispatched from our boutique in Dehradun. Here is exactly what to expect once your order is confirmed.',
    sections: [
      {
        heading: 'Dispatch Timelines',
        body: 'Ready-to-ship pieces leave our studio within 2–3 working days of payment confirmation. Made-to-order and custom-tailored garments are crafted individually, so please allow longer.',
        table: {
          columns: ['Order type', 'Dispatch window'],
          rows: [
            ['In-stock sarees and unstitched suit sets', '2–3 working days'],
            ['Blouse stitching add-on', '10–14 working days'],
            ['Made-to-order lehengas and bridal wear', '4–8 weeks'],
            ['Bespoke / custom commissions', 'Confirmed at time of order'],
          ],
        },
      },
      {
        heading: 'Delivery & Charges',
        bullets: [
          'Complimentary insured shipping across India on all orders.',
          'Metro cities: 2–4 working days after dispatch. Other locations: 4–7 working days.',
          'International shipping is available to [LIST COUNTRIES] — charges are quoted at checkout and calculated by weight and destination.',
          'Customs duties and import taxes on international orders are borne by the customer and are not included in the price shown.',
          'A tracking link is sent by email and WhatsApp as soon as your parcel is collected.',
        ],
      },
      {
        heading: 'Returns & Exchanges',
        body: 'We want you to love what you receive. If a piece is not right, write to us within 7 days of delivery and we will guide you through the return.',
        bullets: [
          'Items must be unworn and unwashed, with all original tags, packaging and the authenticity card intact.',
          'Raise a request by email or WhatsApp with your order number and a photograph of the piece.',
          'Approved returns are collected by our courier partner at no cost to you within India.',
          'Refunds are issued to the original payment method within 7–10 working days of the item reaching us and passing inspection.',
          'Exchanges for a different colourway or size are subject to availability.',
        ],
      },
      {
        heading: 'What We Cannot Accept',
        body: 'Because each garment is handmade in small numbers, a few categories are final sale:',
        bullets: [
          'Custom-tailored, altered or made-to-measure pieces.',
          'Stitched blouses and any garment cut to your measurements.',
          'Unstitched fabric that has been cut, washed or tailored.',
          'Items returned without tags, or showing signs of wear, perfume, stains or damage.',
          'Sale and clearance pieces, unless they arrived faulty.',
        ],
      },
      {
        heading: 'Damaged or Incorrect Orders',
        body: 'If your parcel arrives damaged or contains the wrong item, contact us within 48 hours of delivery with photographs of the packaging and the garment. We will arrange a replacement or a full refund at our cost, including shipping.',
      },
      {
        heading: 'A Note on Handloom',
        body: 'Slight irregularities in weave, minor colour variation between the photograph and the fabric, and small differences in motif placement are inherent to hand-woven and hand-block-printed textiles. These are marks of authenticity rather than defects, and are not grounds for return.',
      },
    ],
  },

  'size-guide': {
    label: 'Bespoke Size Guide',
    eyebrow: 'Customer Care',
    title: 'Bespoke Size Guide',
    intro:
      'Most of what we make is either unstitched or tailored to you. Take your measurements over a well-fitting garment, keep the tape snug but not tight, and share the numbers with us — we will do the rest.',
    sections: [
      {
        heading: 'How to Measure',
        bullets: [
          'Bust — around the fullest part of the chest, tape level under the arms.',
          'Waist — around the narrowest part of the torso, usually just above the navel.',
          'Hips — around the fullest part, roughly 20 cm below the waist.',
          'Shoulder — from the tip of one shoulder bone across the back to the other.',
          'Sleeve length — from the shoulder tip down to where you want the sleeve to end.',
          'Blouse length — from the shoulder tip to the desired hem at the front.',
          'Kurta / bottom length — from the shoulder tip or natural waist down to the desired hem, measured while wearing your intended heel height.',
        ],
      },
      {
        heading: 'Blouse Size Chart',
        body: 'Standard sizing for stitched blouses. If two measurements fall in different sizes, choose the larger and tell us — we will adjust.',
        table: {
          columns: ['Size', 'Bust (in)', 'Waist (in)', 'Shoulder (in)'],
          rows: [
            ['XS', '32', '26', '13.5'],
            ['S', '34', '28', '14'],
            ['M', '36', '30', '14.5'],
            ['L', '38', '32', '15'],
            ['XL', '40', '34', '15.5'],
            ['XXL', '42', '36', '16'],
          ],
        },
      },
      {
        heading: 'Saree Dimensions',
        body: 'Unless a product page states otherwise, our sarees ship in these standard lengths.',
        table: {
          columns: ['Component', 'Measurement'],
          rows: [
            ['Saree length', '5.5 metres'],
            ['Saree width', '44–47 inches'],
            ['Unstitched blouse piece', '0.8 metres'],
          ],
        },
      },
      {
        heading: 'Unstitched Suit Sets',
        body: 'Our Maheshwari cotton silk suit sets are supplied as three uncut pieces, ready for your tailor.',
        table: {
          columns: ['Piece', 'Length'],
          rows: [
            ['Top / kurta fabric', '2.5 metres'],
            ['Bottom fabric', '2.5 metres'],
            ['Dupatta', '2.25 metres'],
          ],
        },
      },
      {
        heading: 'Bespoke Tailoring',
        body: 'Prefer a piece cut to your exact measurements? Share your numbers over WhatsApp and we will confirm the timeline and any tailoring charge before we begin. Custom-tailored garments cannot be returned, so we will always confirm every measurement with you in writing first.',
      },
      {
        heading: 'Still Unsure?',
        body: 'Send us a message with your usual size in a brand you wear often and we will translate it. It is far better to ask than to guess.',
      },
    ],
  },

  contact: {
    label: 'Boutique Contact',
    eyebrow: 'Customer Care',
    title: 'Boutique Contact',
    intro:
      'We are a small team and we answer every message ourselves. Whether it is a question about a weave, a sizing query or a bespoke commission, we would love to hear from you.',
    sections: [
      {
        heading: 'Reach Us',
        bullets: [
          'WhatsApp — +91 82720 37228 (fastest for order and sizing questions)',
          'Instagram — @kasheeda.the.boutique',
          'Email — [hello@kasheeda.com]',
          'Orders & after-sales — [orders@kasheeda.com]',
        ],
      },
      {
        heading: 'Visit the Boutique',
        body: 'Appointments are recommended so we can set aside time and pull pieces for you.',
        bullets: [
          'Kasheeda — The Boutique',
          'Phase 2, 234, Vasant Vihar',
          'Dehradun, Uttarakhand 248006',
          'Monday to Saturday, [11:00 AM – 7:00 PM]',
          'Sunday — by appointment only',
        ],
      },
      {
        heading: 'Response Times',
        body: 'We reply to WhatsApp messages within a few hours during business days, and to email within 24–48 hours. Messages received on Sundays and public holidays are answered the next working day.',
      },
      {
        heading: 'Bespoke & Bridal Consultations',
        body: 'Bridal and custom commissions begin with a consultation, in person or over video call, where we discuss fabric, colour, embroidery and timeline. Please allow 4–8 weeks for a bridal piece, and reach out earlier in your planning if the date is fixed.',
      },
      {
        heading: 'Wholesale & Stockists',
        body: 'For wholesale enquiries, press features or stockist partnerships, write to [partnerships@kasheeda.com] with a short note about your business.',
      },
    ],
  },

  privacy: {
    label: 'Privacy Policy',
    eyebrow: 'Customer Care',
    title: 'Privacy Policy',
    intro:
      'This policy explains what we collect when you shop with Kasheeda, why we collect it, and the choices you have. Last updated [DD MONTH YYYY].',
    sections: [
      {
        heading: 'What We Collect',
        bullets: [
          'Details you give us — name, phone number, email, shipping and billing address, and any measurements you share for tailoring.',
          'Order information — the items you buy, order value, and correspondence about your order.',
          'Technical data — IP address, browser and device type, and pages visited, gathered to keep the site working and secure.',
          'Communications — messages you send us by email, WhatsApp or the contact form.',
        ],
      },
      {
        heading: 'How We Use It',
        bullets: [
          'To process, tailor, pack and deliver your order.',
          'To answer your questions and provide after-sales support.',
          'To send order updates and delivery notifications.',
          'To send occasional collection announcements, only if you have opted in — you can unsubscribe at any time.',
          'To improve our products, service and website.',
          'To meet our legal, tax and accounting obligations.',
        ],
      },
      {
        heading: 'Payment Information',
        body: 'We do not collect or store your card, UPI or net-banking details. Payments are handled entirely by our payment provider, [PAYMENT PROVIDER], on their own secure infrastructure.',
      },
      {
        heading: 'Who We Share It With',
        body: 'We do not sell your personal data. We share only what is necessary, and only with:',
        bullets: [
          'Courier and logistics partners, to deliver your order.',
          'Our payment provider, to take payment.',
          'Service providers who host the site or send our email, bound by confidentiality obligations.',
          'Authorities, where we are legally required to disclose information.',
        ],
      },
      {
        heading: 'Cookies',
        body: 'We use a small number of cookies to keep your shopping bag between visits and to understand how the site is used. You can block or delete cookies in your browser settings, though parts of the site may stop working properly if you do.',
      },
      {
        heading: 'How Long We Keep It',
        body: 'Order and invoice records are retained for as long as tax and accounting law requires. Marketing contact details are kept until you unsubscribe. Anything we no longer need is deleted or anonymised.',
      },
      {
        heading: 'Your Rights',
        body: 'You can ask us to show you the personal data we hold about you, correct anything inaccurate, delete it where we are not legally required to keep it, or stop sending you marketing. Write to [privacy@kasheeda.com] and we will respond within 30 days.',
      },
      {
        heading: 'Security',
        body: 'The site is served over an encrypted connection and access to customer records is limited to team members who need it. No system is perfectly secure, but we take reasonable steps to protect your information and will tell you promptly if a breach affects you.',
      },
      {
        heading: "Children's Privacy",
        body: 'Our store is not directed at children under 18, and we do not knowingly collect their personal data.',
      },
      {
        heading: 'Changes to This Policy',
        body: 'If we update this policy we will revise the date above. Material changes will be announced on this page.',
      },
      {
        heading: 'Contact',
        body: 'Questions about this policy can be sent to [privacy@kasheeda.com] or to Kasheeda — The Boutique, Phase 2, 234, Vasant Vihar, Dehradun, Uttarakhand 248006.',
      },
    ],
    disclaimer:
      'This is a starting template, not legal advice. Please have it reviewed against the Digital Personal Data Protection Act, 2023 and any other law that applies to where you sell before publishing.',
  },
};

export const INFO_PAGE_KEYS = Object.keys(INFO_PAGES);
