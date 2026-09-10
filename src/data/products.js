// ─────────────────────────────────────────────────────────────────────────────
// KASHEEDA PRODUCT CATALOG
//
// To add a product, copy any object below and change the fields.
// Required: id, title, category, fabric, price, priceFormatted, color, colorHex,
//           occasion, isNew, description, images.main, details
// Optional: images.detail / .drape / .full,
//           colorOptions -> [{ name, hex, title?, images? }]; the entries after
//           the first may carry their own title/images for that colour variant
//
// id       -> must be unique (used as React key, cart identity, wishlist id)
// category -> must be one of CATEGORIES below (except "All")
// fabric   -> free text; the Fabric filter builds itself from these values
// occasion -> must be one of OCCASIONS below
// price    -> plain number (used by filter + sort + cart total)
// images   -> paths are relative to /public, e.g. "/sarees/my-saree.png"
// ─────────────────────────────────────────────────────────────────────────────

export const PRODUCTS = [
  // ── SAREES ─────────────────────────────────────────────────────────────────
  {
    id: "khaddi-chiffon-banarasi",
    title: "Crimson Khaddi Chiffon Banarasi Saree",
    category: "Sarees",
    fabric: "Khaddi Chiffon Banarasi",
    price: 7499,
    priceFormatted: "₹7,499",
    color: "Crimson Red",
    colorHex: "#d80f3f",
    occasion: "Wedding",
    isNew: true,
    description:
      "A true Banarasi khaddi georgette in deep crimson, woven on the handloom with fine silver zari buta scattered across the body. The wide floral zari border and pallu give it the weight of an occasion saree while the khaddi chiffon keeps the drape feather-soft.",
    images: {
      main: "/sarees/crimson-khaddi-chiffon-banarasi-7499-1.jpg",
      detail: "/sarees/crimson-khaddi-chiffon-banarasi-7499-2.jpg",
      drape: "/sarees/crimson-khaddi-chiffon-banarasi-7499-3.jpg"
    },
    details: [
      "Pure Khaddi Georgette (Banarasi handloom)",
      "Real silver zari buta and broad border weave",
      "Includes matching unstitched blouse piece",
      "Dry clean only",
      "Handwoven in Banarasi, Uttar Pradesh"
    ]
  },
  {
    id: "green-mango-silk",
    title: "Royal Blue Green Mango Silk Saree",
    category: "Sarees",
    fabric: "Green Mango Silk",
    price: 5500,
    priceFormatted: "₹5,500",
    color: "Royal Blue",
    colorHex: "#1c3560",
    occasion: "Wedding",
    isNew: false,
    description:
      "Deep royal blue raw silk carrying large meenakari floral buta in antique gold. The contrast bottle-green pallu is filled edge to edge with a dense gold brocade vine, making this the kind of saree that reads formal from across the room.",
    images: { main: "/sarees/green-mango-silk-5500.png" },
    details: [
      "Raw silk with soft slub texture",
      "Antique gold zari with meenakari colour accents",
      "Contrast bottle green brocade pallu and border",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "chiniya-silk",
    title: "Red Lotus Chiniya Silk Saree",
    category: "Sarees",
    fabric: "Chiniya Silk",
    price: 5500,
    priceFormatted: "₹5,500",
    color: "Rani Red",
    colorHex: "#a81c28",
    occasion: "Wedding",
    isNew: false,
    description:
      "Classic temple-red chiniya silk with ivory and gold lotus buti placed across the body. The bottle-green contrast border with its gold brocade band is the traditional pairing — festive without being heavy.",
    images: { main: "/sarees/chiniya-silk-5500.png" },
    details: [
      "Pure Chiniya (raw) silk",
      "Ivory and gold lotus buti weave",
      "Contrast bottle green zari border",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "khaddi-chiffon-banarasi-2",
    title: "Magenta Khaddi Chiffon Banarasi Saree",
    category: "Sarees",
    fabric: "Khaddi Chiffon Banarasi",
    price: 7499,
    priceFormatted: "₹7,499",
    color: "Magenta Pink",
    colorHex: "#b5127a",
    occasion: "Wedding",
    isNew: true,
    description:
      "A rich magenta khaddi georgette lit up by silver zari paisley along the border and pallu. The colour sits between rani pink and purple, which makes it unusually easy to pair with both silver and gold jewellery.",
    images: {
      main: "/sarees/magenta-khaddi-chiffon-banarasi-7499-1.jpg",
      detail: "/sarees/magenta-khaddi-chiffon-banarasi-7499-2.jpg",
      drape: "/sarees/magenta-khaddi-chiffon-banarasi-7499-3.jpg"
    },
    details: [
      "Pure Khaddi Georgette (Banarasi handloom)",
      "Silver zari paisley border and pallu",
      "Includes matching unstitched blouse piece",
      "Dry clean only",
      "Handwoven in Banarasi, Uttar Pradesh"
    ]
  },
  {
    id: "khaddi-chiffon-banarasi-3",
    title: "Orange & Red Khaddi Chiffon Banarasi Saree",
    category: "Sarees",
    fabric: "Khaddi Chiffon Banarasi",
    price: 6999,
    priceFormatted: "₹6,999",
    color: "Sunset Orange",
    colorHex: "#ee4a1c",
    occasion: "Wedding",
    isNew: true,
    description:
      "A bright sunset orange body running into a deep red pallu, joined by fine silver zari floral buta. The two-tone Banarasi khaddi is a haldi and mehandi favourite because the colour shift photographs beautifully in daylight.",
    images: {
      main: "/sarees/orange-rani-khaddi-chiffon-banarasi-6999-1.jpg",
      detail: "/sarees/orange-rani-khaddi-chiffon-banarasi-6999-2.jpg",
      drape: "/sarees/orange-rani-khaddi-chiffon-banarasi-6999-3.jpg"
    },
    details: [
      "Pure Khaddi Georgette (Banarasi handloom)",
      "Two-tone orange body with red pallu",
      "Silver zari buta and paisley border",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "khaddi-chiffon-banarasi-4",
    title: "Rani Pink & Peacock Khaddi Chiffon Banarasi Saree",
    category: "Sarees",
    fabric: "Khaddi Chiffon Banarasi",
    price: 6999,
    priceFormatted: "₹6,999",
    color: "Rani Pink",
    colorHex: "#d10a6d",
    occasion: "Wedding",
    isNew: true,
    description:
      "Rani pink khaddi georgette meeting a peacock blue pallu — one of the most enduring Banarasi colour pairings. Silver zari buta cover the body and a broad woven paisley border finishes both ends.",
    images: { main: "/sarees/khaddi-chiffon-banarasi-6999-2.png" },
    details: [
      "Pure Khaddi Georgette (Banarasi handloom)",
      "Rani pink body with peacock blue pallu",
      "Silver zari buta with paisley border weave",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "khaddi-chiffon-banarasi-5",
    title: "Mehandi & Red Khaddi Chiffon Banarasi Saree",
    category: "Sarees",
    fabric: "Khaddi Chiffon Banarasi",
    price: 6999,
    priceFormatted: "₹6,999",
    color: "Mehandi Yellow",
    colorHex: "#b5a80a",
    occasion: "Wedding",
    isNew: true,
    description:
      "A mehandi-green olive body with a red pallu and border, carried on soft khaddi georgette. Silver zari buta sit lightly across the drape, keeping the contrast crisp rather than loud.",
    images: { main: "/sarees/khaddi-chiffon-banarasi-6999-3.png" },
    details: [
      "Pure Khaddi Georgette (Banarasi handloom)",
      "Mehandi body with contrast red pallu",
      "Silver zari buta and woven border",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "khaddi-chiffon-banarasi-6",
    title: "Red & Ivory Khaddi Chiffon Banarasi Saree",
    category: "Sarees",
    fabric: "Khaddi Chiffon Banarasi",
    price: 6999,
    priceFormatted: "₹6,999",
    color: "Red & Ivory",
    colorHex: "#cf0f3d",
    occasion: "Wedding",
    isNew: true,
    description:
      "Deep red khaddi georgette running into an ivory tissue pallu edged in silver zari. The restraint of the ivory half makes this an easy choice for a daytime wedding ceremony or a reception where you want colour without heaviness.",
    images: { main: "/sarees/khaddi-chiffon-banarasi-6999-4.png" },
    details: [
      "Pure Khaddi Georgette with tissue pallu",
      "Silver zari buta and scalloped border",
      "Ivory and red two-tone drape",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "khaddi-chiffon-banarasi-7",
    title: "Red & Royal Blue Khaddi Chiffon Banarasi Saree",
    category: "Sarees",
    fabric: "Khaddi Chiffon Banarasi",
    price: 6999,
    priceFormatted: "₹6,999",
    color: "Cherry Red",
    colorHex: "#d20b3a",
    occasion: "Wedding",
    isNew: true,
    description:
      "Cherry red khaddi georgette with a royal blue pallu and border, tied together by silver zari buta. A strong, classic bridal-adjacent combination that suits both silver and kundan jewellery.",
    images: { main: "/sarees/khaddi-chiffon-banarasi-6999-5.png" },
    details: [
      "Pure Khaddi Georgette (Banarasi handloom)",
      "Red body with royal blue contrast pallu",
      "Silver zari buta and broad woven border",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "khaddi-chiffon-banarasi-8",
    title: "Haldi Ombré Khaddi Chiffon Banarasi Saree",
    category: "Sarees",
    fabric: "Khaddi Chiffon Banarasi",
    price: 6999,
    priceFormatted: "₹6,999",
    color: "Haldi Ombré",
    colorHex: "#f2a01c",
    occasion: "Wedding",
    isNew: true,
    description:
      "An ombré that moves from ivory through turmeric yellow into deep orange, with silver zari buta running the length of the drape. Made for haldi mornings, and equally at home at a daytime sangeet.",
    images: { main: "/sarees/khaddi-chiffon-banarasi-6999-6.png" },
    details: [
      "Pure Khaddi Georgette with shaded dyeing",
      "Ivory to marigold to orange ombré",
      "Silver zari buta and woven border",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "chiffon",
    title: "Rani Ombré Rose Chiffon Saree",
    category: "Sarees",
    fabric: "Chiffon",
    price: 7000,
    priceFormatted: "₹7,000",
    color: "Rani Ombré",
    colorHex: "#e8134f",
    occasion: "Wedding",
    isNew: true,
    description:
      "Sheer chiffon shaded from scarlet into rani pink, finished with a scalloped border of hand-embroidered gold roses. Small rose buta repeat across the body so the saree holds its detail even when draped simply.",
    images: { main: "/sarees/chiffon-7000.png" },
    details: [
      "Featherweight pure chiffon",
      "Shaded red to rani pink dyeing",
      "Hand-embroidered gold rose border with scalloped edge",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "mutka-silk",
    title: "Orange Tissue Mutka Silk Saree",
    category: "Sarees",
    fabric: "Mutka Silk",
    price: 7000,
    priceFormatted: "₹7,000",
    color: "Orange",
    colorHex: "#c85a17",
    occasion: "Wedding",
    isNew: false,
    description:
      "Orange mutka silk shot through with a broad molten-gold tissue band and fine orange stripes. The frayed handloom fringe is left raw on purpose — it is the mark of a genuine tissue weave.",
    images: { main: "/sarees/matka-silk-7000.png" },
    details: [
      "Handwoven Mutka silk with tissue zari",
      "Wide antique gold tissue band",
      "Raw frayed handloom fringe",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "tissue-linen-silk",
    title: "Dusty Peach Sitara Tissue Linen Silk Saree",
    category: "Sarees",
    fabric: "Tissue Linen Silk",
    price: 6000,
    priceFormatted: "₹6,000",
    color: "Dusty Peach",
    colorHex: "#d99277",
    occasion: "Wedding",
    isNew: true,
    description:
      "Dusty peach linen silk scattered all over with tiny gold sitara sequins, so the whole drape catches light rather than one border. The tasselled selvedge and soft linen body make it comfortable for long events.",
    images: { main: "/sarees/tissue-linen-silk-6000.png" },
    details: [
      "Tissue linen silk blend",
      "All-over hand-sewn gold sitara sequin buti",
      "Twisted tassel edging on pallu",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "ho-silk",
    title: "Silver Grey Zardozi Silk Saree",
    category: "Sarees",
    fabric: "H.O. Silk",
    price: 5500,
    priceFormatted: "₹5,500",
    color: "Silver Grey",
    colorHex: "#949a9c",
    occasion: "Wedding",
    isNew: false,
    description:
      "A liquid tissue silk with a trailing vine of gold and ivory zardozi flowers worked along the border. Available in silver grey and ivory beige — understated in colour, generous in handwork, a good cocktail or reception saree.",
    colorOptions: [
      { name: "Silver Grey", hex: "#949a9c" },
      {
        name: "Ivory Beige",
        hex: "#e6d4b8",
        title: "Ivory Beige Zardozi Silk Saree",
        images: {
          main: "/sarees/ivory-beige-zardozi-silk-5500-1.jpg",
          detail: "/sarees/ivory-beige-zardozi-silk-5500-2.jpg",
          drape: "/sarees/ivory-beige-zardozi-silk-5500-3.jpg"
        }
      }
    ],
    images: {
      main: "/sarees/silver-grey-zardozi-silk-5500-1.jpg",
      detail: "/sarees/silver-grey-zardozi-silk-5500-2.jpg",
      drape: "/sarees/silver-grey-zardozi-silk-5500-3.jpg"
    },
    details: [
      "Lustrous tissue silk",
      "Hand zardozi floral vine with sequin fill",
      "Scattered buti on body",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "green-mango-silk-2",
    title: "Olive Gold Green Mango Silk Saree",
    category: "Sarees",
    fabric: "Green Mango Silk",
    price: 5500,
    priceFormatted: "₹5,500",
    color: "Olive Gold",
    colorHex: "#8b8158",
    occasion: "Wedding",
    isNew: false,
    description:
      "An unusual olive-gold tissue body carrying large meenakari buta, set against a wine purple border and pallu. The muted body with a jewel-toned border is a quieter way to wear a formal silk.",
    images: { main: "/sarees/green-mango-silk-5500-2.png" },
    details: [
      "Tissue silk with gold shot texture",
      "Meenakari buta in soft pastels and gold",
      "Contrast wine purple brocade border",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "gajji-silk",
    title: "Ajrakh Mandala Gajji Silk Saree",
    category: "Sarees",
    fabric: "Gajji Silk",
    price: 5000,
    priceFormatted: "₹5,000",
    color: "Ajrakh Red",
    colorHex: "#b0202a",
    occasion: "Festive",
    isNew: false,
    description:
      "Glossy gajji silk hand block-printed in madder red with large ajrakh mandalas across the body and a dense geometric border. Natural-dye ajrakh on satin-finish silk gives an unusual mix of matte print and shine.",
    images: {
      main: "/sarees/ajrakh-mandala-gajji-silk-5000-1.jpg",
      detail: "/sarees/ajrakh-mandala-gajji-silk-5000-2.jpg",
      drape: "/sarees/ajrakh-mandala-gajji-silk-5000-3.jpg"
    },
    details: [
      "Pure Gajji silk with satin finish",
      "Hand block-printed natural-dye Ajrakh",
      "Multicolour tassel edging",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "chiffon-2",
    title: "Terracotta Kundan Chiffon Saree",
    category: "Sarees",
    fabric: "Chiffon",
    price: 5000,
    priceFormatted: "₹5,000",
    color: "Terracotta Rust",
    colorHex: "#c2643f",
    occasion: "Festive",
    isNew: true,
    description:
      "Soft terracotta chiffon with Gotta Patti work and gold starburst buta placed sparingly across the drape. The warm earthy rust reads beautifully in evening light and against gold jewellery.",
    images: { main: "/sarees/chiffon-5000.png" },
    details: [
      "Pure chiffon with fine crush texture",
      "Hand-set kundan and gold thread starburst buta",
      "Lightweight, easy-drape fall",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "chiffon-3",
    title: "Marigold Silver-Leaf Chiffon Saree",
    category: "Sarees",
    fabric: "Chiffon",
    price: 5000,
    priceFormatted: "₹5,000",
    color: "Marigold Mustard",
    colorHex: "#e0930d",
    occasion: "Festive",
    isNew: true,
    description:
      "Marigold mustard chiffon dotted with small silver leaf buti and finished with a delicately ruffled edge. Bright without being heavy — a natural pick for daytime pujas and haldi functions.",
    images: {
      main: "/sarees/marigold-silver-leaf-chiffon-5000-1.jpg",
      detail: "/sarees/marigold-silver-leaf-chiffon-5000-2.jpg",
      drape: "/sarees/marigold-silver-leaf-chiffon-5000-3.jpg"
    },
    details: [
      "Pure chiffon",
      "Hand-embroidered silver leaf buti",
      "Ruffled selvedge finish",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "chiffon-4",
    title: "Scarlet Bloom Chiffon Saree",
    category: "Sarees",
    fabric: "Chiffon",
    price: 5000,
    priceFormatted: "₹5,000",
    color: "Scarlet Red",
    colorHex: "#e0102b",
    occasion: "Festive",
    isNew: true,
    description:
      "Clear scarlet chiffon carrying gold and ivory zardozi bloom motifs scattered across the body. A simple silhouette that lets the colour do the work, with just enough handwork to keep it festive.",
    images: { main: "/sarees/chiffon-5000-3.png" },
    details: [
      "Pure chiffon",
      "Hand-embroidered zardozi bloom buta",
      "Lightweight fluid drape",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "chiffon-5",
    title: "Ice Blue Peacock Chiffon Saree",
    category: "Sarees",
    fabric: "Chiffon",
    price: 5000,
    priceFormatted: "₹5,000",
    color: "Ice Blue",
    colorHex: "#d3e1e0",
    occasion: "Festive",
    isNew: true,
    description:
      "A pale ice-blue chiffon with a single hand-worked gold and enamel peacock motif on the pallu and tiny gold buti on the body. Minimal by design — the kind of saree that works for a morning ceremony or a quiet evening.",
    images: {
      main: "/sarees/ice-blue-peacock-chiffon-5000-1.jpg",
      detail: "/sarees/ice-blue-peacock-chiffon-5000-2.jpg",
      drape: "/sarees/ice-blue-peacock-chiffon-5000-3.jpg",
      full: "/sarees/ice-blue-peacock-chiffon-5000-4.jpg"
    },
    details: [
      "Pure chiffon in pale ice blue",
      "Hand zardozi peacock motif with enamel detail",
      "Fine gold buti scattered on body",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "chiffon-6",
    title: "Dusty Rose Gota Chiffon Saree",
    category: "Sarees",
    fabric: "Chiffon",
    price: 4500,
    priceFormatted: "₹4,500",
    color: "Dusty Rose",
    colorHex: "#d4707f",
    occasion: "Festive",
    isNew: false,
    description:
      "Dusty rose tissue chiffon with a corner spray of gold gota and zardozi leaves climbing the pallu. A single flower buta sits on the body, keeping the design asymmetric and modern.",
    images: { main: "/sarees/chiffon-4500.png" },
    details: [
      "Tissue chiffon with soft crush",
      "Hand gota-patti and zardozi leaf spray",
      "Contrast maroon piped edge",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "dola-silk",
    title: "Black Gajraj Dola Silk Saree",
    category: "Sarees",
    fabric: "Dola Silk",
    price: 4500,
    priceFormatted: "₹4,500",
    color: "Black",
    colorHex: "#191712",
    occasion: "Festive",
    isNew: false,
    description:
      "Black dola silk printed with fine ajrakh buti all over and finished with a gold elephant-and-lotus border along the pallu. The gajraj motif is a traditional Banarasi border reworked here in print.",
    images: { main: "/sarees/dola-silk-4500.png" },
    details: [
      "Dola silk with soft satin fall",
      "All-over printed buti with gold gajraj border",
      "Lightweight, holds pleats well",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "modal-silk",
    title: "Madder Red Ajrakh Modal Silk Saree",
    category: "Sarees",
    fabric: "Modal Silk",
    price: 4500,
    priceFormatted: "₹4,500",
    color: "Madder Red",
    colorHex: "#a1201f",
    occasion: "Festive",
    isNew: false,
    description:
      "Madder red modal silk hand block-printed with tall indigo cypress buta and a fine floral border. Ajrakh on modal is the best of both — natural dye depth with a fluid, cool-to-wear drape.",
    images: {
      main: "/sarees/madder-red-ajrakh-modal-silk-4500-1.jpg",
      detail: "/sarees/madder-red-ajrakh-modal-silk-4500-2.jpg",
      drape: "/sarees/madder-red-ajrakh-modal-silk-4500-3.jpg"
    },
    details: [
      "Modal silk, natural-dye Ajrakh hand block print",
      "Cypress buta with indigo and madder palette",
      "Soft breathable drape",
      "Blouse piece included",
      "Dry clean recommended"
    ]
  },
  {
    id: "modal-silk-2",
    title: "Black Mahi Ajrakh Modal Silk Saree",
    category: "Sarees",
    fabric: "Modal Silk",
    price: 4500,
    priceFormatted: "₹4,500",
    color: "Ajrakh Black",
    colorHex: "#211d1c",
    occasion: "Festive",
    isNew: false,
    description:
      "Black modal silk covered in the fish-scale mahi pattern in teal and rust, opening into a triple mandala border on the pallu. Teal and rust tassels finish the edge.",
    images: { main: "/sarees/modal-silk-4500-2.png" },
    details: [
      "Modal silk, natural-dye Ajrakh hand block print",
      "Mahi (fish-scale) body with mandala pallu",
      "Hand-knotted contrast tassels",
      "Blouse piece included",
      "Dry clean recommended"
    ]
  },
  {
    id: "modal-silk-3",
    title: "Deep Teal Mandala Modal Silk Saree",
    category: "Sarees",
    fabric: "Modal Silk",
    price: 4500,
    priceFormatted: "₹4,500",
    color: "Deep Teal",
    colorHex: "#14403f",
    occasion: "Festive",
    isNew: false,
    description:
      "Deep teal modal silk with a wide printed mandala panel down the pallu and small buti across the body. Mustard and red tassels lift the otherwise dark, forest-toned palette.",
    images: { main: "/sarees/modal-silk-4500-3.png" },
    details: [
      "Modal silk, natural-dye Ajrakh hand block print",
      "Mandala pallu panel with fine body buti",
      "Beaded tassel edging",
      "Blouse piece included",
      "Dry clean recommended"
    ]
  },
  {
    id: "modal-silk-4",
    title: "Indigo Sitara Ajrakh Modal Silk Saree",
    category: "Sarees",
    fabric: "Modal Silk",
    price: 4500,
    priceFormatted: "₹4,500",
    color: "Indigo Blue",
    colorHex: "#2f5273",
    occasion: "Festive",
    isNew: false,
    description:
      "Indigo modal silk printed with eight-point sitara stars and floral rounds in madder and cream, closed by a black border with a fine gold zari line. Classic Kutch ajrakh colouring on a modern fabric.",
    images: { main: "/sarees/modal-silk-4500-4.png" },
    details: [
      "Modal silk, natural-dye Ajrakh hand block print",
      "Sitara star and floral round motifs",
      "Black border with gold zari line",
      "Blouse piece included",
      "Dry clean recommended"
    ]
  },
  {
    id: "modal-silk-5",
    title: "Charcoal Ajrakh Border Modal Silk Saree",
    category: "Sarees",
    fabric: "Modal Silk",
    price: 4000,
    priceFormatted: "₹4,000",
    color: "Charcoal Black",
    colorHex: "#33302c",
    occasion: "Festive",
    isNew: false,
    description:
      "A plain charcoal modal silk body with all the detail concentrated in a printed ajrakh band across the pallu. Cream and red tassels run down the selvedge. Easy, modern, and very wearable.",
    images: { main: "/sarees/modal-silk-4000.png" },
    details: [
      "Modal silk with plain body",
      "Printed Ajrakh pallu band in teal and rust",
      "Contrast tassel selvedge",
      "Blouse piece included",
      "Dry clean recommended"
    ]
  },
  {
    id: "chiniya-silk-2",
    title: "Wine Plum Chiniya Silk Saree",
    category: "Sarees",
    fabric: "Chiniya Silk",
    price: 3999,
    priceFormatted: "₹3,999",
    color: "Wine Plum",
    colorHex: "#5c2b3c",
    occasion: "Festive",
    isNew: false,
    description:
      "Deep wine plum chiniya silk with small gold buti on the body and a rose-gold brocade pallu. The muted rose-gold zari against plum is softer than yellow gold and suits winter evenings.",
    images: { main: "/sarees/chiniya-silk-3999.png" },
    details: [
      "Pure Chiniya (raw) silk",
      "Rose gold zari brocade pallu",
      "Fine gold buti across body",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "chiniya-silk-3",
    title: "Burnt Orange Chiniya Silk Saree",
    category: "Sarees",
    fabric: "Chiniya Silk",
    price: 3999,
    priceFormatted: "₹3,999",
    color: "Burnt Orange",
    colorHex: "#d1651f",
    occasion: "Festive",
    isNew: false,
    description:
      "Burnt orange chiniya silk with gold lotus buti and a deep navy blue border carrying a dense gold brocade vine. The orange-navy contrast is bold and reads as traditional rather than trendy.",
    images: { main: "/sarees/chiniya-silk-3999-2.png" },
    details: [
      "Pure Chiniya (raw) silk",
      "Contrast navy blue zari border and pallu",
      "Gold lotus buti weave",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "chiniya-silk-4",
    title: "Maroon Antique Zari Chiniya Silk Saree",
    category: "Sarees",
    fabric: "Chiniya Silk",
    price: 3999,
    priceFormatted: "₹3,999",
    color: "Maroon Red",
    colorHex: "#8e1f24",
    occasion: "Festive",
    isNew: false,
    description:
      "Maroon chiniya silk with gold buti across the body and a wide antique gold zari border at the hem. Simple, traditional and reliable — the saree you reach for when you are not sure what the occasion calls for.",
    images: { main: "/sarees/chiniya-silk-3999-3.png" },
    details: [
      "Pure Chiniya (raw) silk",
      "Wide antique gold zari border",
      "Fine gold buti across body",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "ho-silk-2",
    title: "Marigold Kundan Silk Saree",
    category: "Sarees",
    fabric: "H.O. Silk",
    price: 3800,
    priceFormatted: "₹3,800",
    color: "Marigold Yellow",
    colorHex: "#e8a70a",
    occasion: "Festive",
    isNew: false,
    description:
      "A glossy marigold satin silk edged with a scalloped kundan and pearl border, with matching paisley buti on the body. Built for haldi and mehandi mornings where yellow is the point.",
    images: { main: "/sarees/ho-silk-3800.png" },
    details: [
      "Satin-finish silk",
      "Hand-set kundan and pearl scalloped border",
      "Matching paisley buti",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "kupada",
    title: "Marigold Gota Kupada Silk Saree",
    category: "Sarees",
    fabric: "Kupada Silk",
    price: 3800,
    priceFormatted: "₹3,800",
    color: "Marigold Yellow",
    colorHex: "#e3a800",
    occasion: "Festive",
    isNew: false,
    description:
      "Deep marigold kupada silk with a scalloped border of gota leaves outlined in pearl, and a single leaf spray on the body. The high sheen of kupada makes the gold work read even brighter.",
    images: { main: "/sarees/kupada-3800.png" },
    details: [
      "Kupada silk with high satin sheen",
      "Hand gota leaf and pearl scalloped border",
      "Leaf spray buta on body",
      "Blouse piece included",
      "Dry clean only"
    ]
  },
  {
    id: "banarasi-cotton",
    title: "Parrot Green Banarasi Cotton Saree",
    category: "Sarees",
    fabric: "Banarasi Cotton",
    price: 2499,
    priceFormatted: "₹2,499",
    color: "Parrot Green",
    colorHex: "#2f9e63",
    occasion: "Festive",
    isNew: false,
    description:
      "Parrot green Banarasi cotton with gold zari floral buta and a wide woven border running down the length. Multicolour tassels at the pallu keep it cheerful. Light enough for all-day wear.",
    images: { main: "/sarees/banarasi-cotton-2499.png" },
    details: [
      "Banarasi cotton-silk blend",
      "Gold zari floral buta and lattice border",
      "Multicolour hand-knotted tassels",
      "Blouse piece included",
      "Dry clean recommended"
    ]
  },
  {
    id: "banarasi-cotton-2",
    title: "Coral Rose Banarasi Cotton Saree",
    category: "Sarees",
    fabric: "Banarasi Cotton",
    price: 2499,
    priceFormatted: "₹2,499",
    color: "Coral Rose",
    colorHex: "#e07f89",
    occasion: "Festive",
    isNew: false,
    description:
      "Coral rose Banarasi cotton woven with a tonal gold jaal covering the entire body — no separate border, just one continuous pattern. Soft, self-toned and easy to accessorise.",
    images: { main: "/sarees/banarasi-cotton-2499-2.png" },
    details: [
      "Banarasi cotton-silk blend",
      "All-over tonal gold jaal weave",
      "Coral and gold tassel selvedge",
      "Blouse piece included",
      "Dry clean recommended"
    ]
  },
  {
    id: "cotton-jamdani",
    title: "Black Jamdani Cotton Saree",
    category: "Sarees",
    fabric: "Cotton Jamdani",
    price: 2499,
    priceFormatted: "₹2,499",
    color: "Black",
    colorHex: "#1b1a1f",
    occasion: "Daily Wear",
    isNew: false,
    description:
      "Black handloom cotton with pink and mustard jamdani buti woven in by hand, closing on a mustard temple-motif border. Jamdani is added thread by thread on the loom, so no two pieces line up exactly.",
    images: { main: "/sarees/cotton-jamdani-2499.png" },
    details: [
      "Handloom cotton with hand-woven Jamdani buti",
      "Mustard temple-motif border",
      "Breathable everyday drape",
      "Blouse piece included",
      "Gentle hand wash separately"
    ]
  },
  {
    id: "maheshwari-cotton",
    title: "Black & Red Maheshwari Cotton Saree",
    category: "Sarees",
    fabric: "Maheshwari Cotton",
    price: 2499,
    priceFormatted: "₹2,499",
    color: "Jet Black",
    colorHex: "#1a1718",
    occasion: "Daily Wear",
    isNew: false,
    description:
      "Black Maheshwari cotton with a madder red panel carrying tall leaf buta in cream and black, framed by a gold zari zigzag band. Traditional Maheshwar block printing on a crisp cotton base.",
    images: { main: "/sarees/maheshwari-cotton-2499.png" },
    details: [
      "Maheshwari handloom cotton",
      "Hand block-printed leaf buta panel",
      "Gold zari zigzag border",
      "Blouse piece included",
      "Gentle hand wash separately"
    ]
  },
  {
    id: "mangalgiri",
    title: "Taupe & Rani Mangalgiri Cotton Saree",
    category: "Sarees",
    fabric: "Mangalgiri Cotton",
    price: 2499,
    priceFormatted: "₹2,499",
    color: "Taupe Grey",
    colorHex: "#7a6f68",
    occasion: "Daily Wear",
    isNew: false,
    description:
      "Soft taupe-grey Mangalgiri handloom cotton with rani pink and gold zari bands at both ends. Pink tassels finish the pallu. Crisp when new and softer with every wash — a genuine everyday saree.",
    images: { main: "/sarees/mangalgiri-2499.png" },
    details: [
      "Mangalgiri handloom cotton",
      "Rani pink and gold zari striped border",
      "Hand-knotted pink tassels",
      "Blouse piece included",
      "Gentle hand wash separately"
    ]
  },
  {
    id: "maheshwari-cotton-2",
    title: "Ivory & Maroon Stripe Maheshwari Saree",
    category: "Sarees",
    fabric: "Maheshwari Cotton",
    price: 2399,
    priceFormatted: "₹2,399",
    color: "Ivory Beige",
    colorHex: "#e6d9b8",
    occasion: "Daily Wear",
    isNew: false,
    description:
      "Ivory Maheshwari cotton with fine maroon stripes that widen towards the hem, finished with a black and cream scroll border and a red-gold zari band. Quietly graphic and very easy to wear.",
    images: { main: "/sarees/maheshwari-cotton-2399.png" },
    details: [
      "Maheshwari handloom cotton",
      "Hand block-printed stripe and scroll border",
      "Red and gold zari band at hem",
      "Blouse piece included",
      "Gentle hand wash separately"
    ]
  },
  {
    id: "maheshwari-cotton-3",
    title: "Red Lotus Maheshwari Cotton Saree",
    category: "Sarees",
    fabric: "Maheshwari Cotton",
    price: 2399,
    priceFormatted: "₹2,399",
    color: "Deep Red",
    colorHex: "#a8281c",
    occasion: "Festive",
    isNew: false,
    description:
      "Deep red Maheshwari cotton block-printed with cream lotus buta standing in rows, framed by black and gold borders and a contrasting beige pallu. Festive enough for a puja, light enough for a long day.",
    images: { main: "/sarees/maheshwari-cotton-2399-2.png" },
    details: [
      "Maheshwari handloom cotton",
      "Hand block-printed lotus buta",
      "Black and gold twin borders with beige pallu",
      "Blouse piece included",
      "Gentle hand wash separately"
    ]
  },
  {
    id: "chanderi-cotton",
    title: "Indigo Dabu Chanderi Cotton Saree",
    category: "Sarees",
    fabric: "Chanderi Cotton",
    price: 2199,
    priceFormatted: "₹2,199",
    color: "Indigo Blue",
    colorHex: "#17527c",
    occasion: "Daily Wear",
    isNew: false,
    description:
      "Indigo Chanderi cotton resist-printed in the dabu technique, so the ivory motifs come from mud-resist rather than white ink. A slim gold zari border runs the full length.",
    images: { main: "/sarees/chanderi-cotton-2199.png" },
    details: [
      "Chanderi cotton with light sheen",
      "Hand Dabu mud-resist indigo print",
      "Fine gold zari border",
      "Blouse piece included",
      "Gentle hand wash separately"
    ]
  },
  {
    id: "tissue-linen",
    title: "Bronze Tissue Linen Saree",
    category: "Sarees",
    fabric: "Tissue Linen",
    price: 2100,
    priceFormatted: "₹2,100",
    color: "Bronze Brown",
    colorHex: "#8a5f2b",
    occasion: "Festive",
    isNew: false,
    description:
      "A warm bronze tissue linen with self-textured surface and a fine gold zari edge. Ochre and grey tassels run down the selvedge. Plain, tonal and quietly rich.",
    images: { main: "/sarees/tissue-linen-2100.png" },
    details: [
      "Tissue linen with self texture",
      "Fine gold zari selvedge",
      "Hand-knotted ochre tassels",
      "Blouse piece included",
      "Dry clean recommended"
    ]
  },
  {
    id: "kota-doria",
    title: "Rust Block Print Kota Doria Saree",
    category: "Sarees",
    fabric: "Kota Doria",
    price: 1900,
    priceFormatted: "₹1,900",
    color: "Rust Brown",
    colorHex: "#a06a2a",
    occasion: "Daily Wear",
    isNew: false,
    description:
      "Rust caramel Kota Doria layered with bands of black and ivory leaf and diamond block prints, with teal accents and a gold zari stripe. The open Kota square weave keeps it airy in summer.",
    images: { main: "/sarees/kota-doria-1900.png" },
    details: [
      "Kota Doria handloom with square 'khat' weave",
      "Hand block-printed banded design",
      "Gold zari stripe accent",
      "Blouse piece included",
      "Gentle hand wash separately"
    ]
  },
  {
    id: "kota-doria-2",
    title: "Teal Leaf Kota Doria Saree",
    category: "Sarees",
    fabric: "Kota Doria",
    price: 1900,
    priceFormatted: "₹1,900",
    color: "Teal Blue",
    colorHex: "#35636f",
    occasion: "Daily Wear",
    isNew: false,
    description:
      "Teal blue Kota Doria printed with rows of large ivory leaf buta, finished with a mustard and gold zari border. Sheer, light and one of the coolest sarees you can wear through a hot afternoon.",
    images: { main: "/sarees/kota-doria-1900-2.png" },
    details: [
      "Kota Doria handloom with square 'khat' weave",
      "Hand block-printed leaf buta",
      "Mustard and gold zari border",
      "Blouse piece included",
      "Gentle hand wash separately"
    ]
  },
  {
    id: "kota-doria-3",
    title: "Mustard Kalamkari Kota Doria Saree",
    category: "Sarees",
    fabric: "Kota Doria",
    price: 1899,
    priceFormatted: "₹1,899",
    color: "Mustard Ochre",
    colorHex: "#c9930f",
    occasion: "Daily Wear",
    isNew: false,
    description:
      "Mustard ochre Kota Doria covered in a flowing kalamkari floral vine in grey and maroon, with a plain gold zari edge. The all-over print means it needs no jewellery to look complete.",
    images: { main: "/sarees/kota-doria-1899.png" },
    details: [
      "Kota Doria handloom with square 'khat' weave",
      "All-over Kalamkari-style floral print",
      "Gold zari border",
      "Blouse piece included",
      "Gentle hand wash separately"
    ]
  },
  {
    id: "cotton-saree",
    title: "Teal & Navy Colourblock Cotton Saree",
    category: "Sarees",
    fabric: "Handloom Cotton",
    price: 1800,
    priceFormatted: "₹1,800",
    color: "Teal Green",
    colorHex: "#10807f",
    occasion: "Daily Wear",
    isNew: false,
    description:
      "A clean colour-block of teal green against navy blue, joined by an antique gold zari floral border down one edge. No print, no fuss — just two strong colours and one good border.",
    images: { main: "/sarees/cotton-saree-1800.png" },
    details: [
      "Handloom cotton",
      "Teal and navy colour-block body",
      "Antique gold zari floral border",
      "Blouse piece included",
      "Gentle hand wash separately"
    ]
  },
  {
    id: "mul-cotton",
    title: "Black Gold Stripe Mul Cotton Saree",
    category: "Sarees",
    fabric: "Mul Cotton",
    price: 1499,
    priceFormatted: "₹1,499",
    color: "Black",
    colorHex: "#1f1d1a",
    occasion: "Daily Wear",
    isNew: false,
    description:
      "Black mul cotton with fine gold zari stripes running across the width and matching black tassels at the pallu. Mul is the softest of the cotton weaves, so this only gets better with wear.",
    images: { main: "/sarees/mul-cotton-1499.png" },
    details: [
      "Pure Mul cotton — soft, breathable weave",
      "Fine gold zari horizontal stripes",
      "Hand-knotted black tassels",
      "Blouse piece included",
      "Gentle hand wash separately"
    ]
  },
  {
    id: "cotton-saree-2",
    title: "Teal Ajrakh Handloom Cotton Saree",
    category: "Sarees",
    fabric: "Handloom Cotton",
    price: 999,
    priceFormatted: "₹999",
    color: "Teal Blue",
    colorHex: "#2a5f6b",
    occasion: "Daily Wear",
    isNew: false,
    description:
      "Plain teal blue handloom cotton with all the pattern held in the pallu — a madder red ajrakh print in bands of paisley and geometry, edged with a slim gold zari line.",
    images: { main: "/sarees/cotton-saree-999.png" },
    details: [
      "Handloom cotton",
      "Ajrakh-style printed pallu in madder and indigo",
      "Fine gold zari edge",
      "Blouse piece included",
      "Gentle hand wash separately"
    ]
  },
  {
    id: "cotton-saree-3",
    title: "Classic Black Handloom Cotton Saree",
    category: "Sarees",
    fabric: "Handloom Cotton",
    price: 999,
    priceFormatted: "₹999",
    color: "Black",
    colorHex: "#1a1a1c",
    occasion: "Daily Wear",
    isNew: false,
    description:
      "Plain black handloom cotton with a single gold zari selvedge. The most useful saree in a wardrobe — it takes any blouse, any jewellery, and any occasion you dress it up for.",
    images: { main: "/sarees/cotton-saree-999-2.png" },
    details: [
      "Handloom cotton, plain weave",
      "Gold zari selvedge on both edges",
      "Blouse piece included",
      "Gentle hand wash separately",
      "Iron on medium heat"
    ]
  },

  // ── SUITS (unstitched 3-piece sets) ────────────────────────────────────────
  {
    id: "maheshwari-cotton-silk-lilac",
    title: "Lilac Mughal Buta Maheshwari Suit Set",
    category: "Suits",
    fabric: "Maheshwari Cotton Silk",
    price: 2599,
    priceFormatted: "₹2,599",
    color: "Lilac Purple",
    colorHex: "#a284c4",
    occasion: "Daily Wear",
    isNew: true,
    description:
      "An unstitched three-piece set in lilac Maheshwari cotton silk. The dupatta carries large purple Mughal buta with a zari-striped border, paired with a fine grid-print top piece and a striped bottom.",
    images: { main: "/suits/maheshwari-cotton-silk-lilac-2599.png" },
    details: [
      "Unstitched 3-piece set: dupatta, top and bottom",
      "Maheshwari cotton silk with hand block print",
      "Gold zari striped dupatta border",
      "Approx. 2.5m top, 2.5m bottom, 2.25m dupatta",
      "Gentle hand wash separately for first wash"
    ]
  },
  {
    id: "maheshwari-cotton-silk-blue-marigold",
    title: "Blue Marigold Maheshwari Suit Set",
    category: "Suits",
    fabric: "Maheshwari Cotton Silk",
    price: 2599,
    priceFormatted: "₹2,599",
    color: "Marigold Blue",
    colorHex: "#2e9ac4",
    occasion: "Daily Wear",
    isNew: true,
    description:
      "Ivory Maheshwari cotton silk block-printed with blue marigold sprigs and green foliage, bordered in teal and gold zari. Comes with a matching printed top piece and a blue vine-print bottom.",
    images: { main: "/suits/maheshwari-cotton-silk-blue-marigold-2599.png" },
    details: [
      "Unstitched 3-piece set: dupatta, top and bottom",
      "Maheshwari cotton silk with hand block print",
      "Teal and gold zari dupatta border",
      "Approx. 2.5m top, 2.5m bottom, 2.25m dupatta",
      "Gentle hand wash separately for first wash"
    ]
  },
  {
    id: "maheshwari-cotton-silk-powder-blue",
    title: "Powder Blue Floral Maheshwari Suit Set",
    category: "Suits",
    fabric: "Maheshwari Cotton Silk",
    price: 2599,
    priceFormatted: "₹2,599",
    color: "Powder Blue",
    colorHex: "#7a9cc6",
    occasion: "Daily Wear",
    isNew: false,
    description:
      "Ivory Maheshwari cotton silk printed with cornflower blue floral sprays and a gold zari herringbone border. The set is completed by a dense blue vine top piece and a clover-print bottom.",
    images: { main: "/suits/maheshwari-cotton-silk-powder-blue-2599.png" },
    details: [
      "Unstitched 3-piece set: dupatta, top and bottom",
      "Maheshwari cotton silk with hand block print",
      "Gold zari herringbone dupatta border",
      "Approx. 2.5m top, 2.5m bottom, 2.25m dupatta",
      "Gentle hand wash separately for first wash"
    ]
  },
  {
    id: "maheshwari-cotton-silk-turquoise",
    title: "Turquoise Cypress Maheshwari Suit Set",
    category: "Suits",
    fabric: "Maheshwari Cotton Silk",
    price: 2599,
    priceFormatted: "₹2,599",
    color: "Turquoise",
    colorHex: "#4cb5c9",
    occasion: "Daily Wear",
    isNew: false,
    description:
      "Ivory Maheshwari cotton silk with teal cypress buta and a wide turquoise and gold zari border on the dupatta. Paired with a floral jaal top piece and a plain turquoise bottom for balance.",
    images: { main: "/suits/maheshwari-cotton-silk-turquoise-2599.png" },
    details: [
      "Unstitched 3-piece set: dupatta, top and bottom",
      "Maheshwari cotton silk with hand block print",
      "Turquoise and gold zari dupatta border",
      "Approx. 2.5m top, 2.5m bottom, 2.25m dupatta",
      "Gentle hand wash separately for first wash"
    ]
  },
  {
    id: "maheshwari-cotton-silk-indigo-leaf",
    title: "Indigo Leaf Maheshwari Suit Set",
    category: "Suits",
    fabric: "Maheshwari Cotton Silk",
    price: 2599,
    priceFormatted: "₹2,599",
    color: "Dusty Blue",
    colorHex: "#6d8fb5",
    occasion: "Daily Wear",
    isNew: false,
    description:
      "Beige Maheshwari cotton silk printed with large indigo peepal leaves and small flower sprigs, closed by a slate blue and gold zari border. The set includes a striped top piece and a dotted bottom.",
    images: { main: "/suits/maheshwari-cotton-silk-indigo-leaf-2599.png" },
    details: [
      "Unstitched 3-piece set: dupatta, top and bottom",
      "Maheshwari cotton silk with hand block print",
      "Slate blue and gold zari dupatta border",
      "Approx. 2.5m top, 2.5m bottom, 2.25m dupatta",
      "Gentle hand wash separately for first wash"
    ]
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FILTER DATA
// CATEGORIES drives the catalog tabs, header nav and mobile menu.
// FABRICS / COLORS are derived from PRODUCTS, so a new fabric or colour shows
// up in the sidebar automatically — you never have to edit a list by hand.
// ─────────────────────────────────────────────────────────────────────────────

export const CATEGORIES = ["All", "Sarees", "Suits"];

export const OCCASIONS = ["Bridal", "Wedding", "Sangeet", "Festive", "Daily Wear"];

export const PRICE_RANGES = [
  { id: "under-2k", label: "Under ₹2,000", min: 0, max: 1999 },
  { id: "2k-5k", label: "₹2,000 - ₹5,000", min: 2000, max: 5000 },
  { id: "5k-10k", label: "₹5,000 - ₹10,000", min: 5001, max: 10000 },
  { id: "above-10k", label: "Above ₹10,000", min: 10001, max: 99999999 }
];

/** Fabrics available in a category, sorted alphabetically. */
export const getFabricsForCategory = (category) => {
  const list = PRODUCTS.filter(
    (p) => category === "All" || p.category === category
  ).map((p) => p.fabric);
  return [...new Set(list)].filter(Boolean).sort();
};

/** Colour swatches available in a category, de-duplicated by colour name. */
/** Main first, then every other photo on the images object, de-duplicated. */
export const imageUrls = (images) => [
  ...new Set([images.main, ...Object.values(images)].filter(Boolean)),
];

/** Every colour a product is offered in — single-colour products have one. */
export const productColors = (p) =>
  p.colorOptions ?? [{ name: p.color, hex: p.colorHex }];

export const getColorsForCategory = (category) => {
  const seen = new Map();
  PRODUCTS.filter((p) => category === "All" || p.category === category).forEach(
    (p) => {
      productColors(p).forEach((c) => {
        if (!seen.has(c.name)) seen.set(c.name, { name: c.name, hex: c.hex });
      });
    }
  );
  return [...seen.values()].sort((a, b) => a.name.localeCompare(b.name));
};

/** How many products sit in each fabric bucket (used for the chip counts). */
export const getFabricCount = (category, fabric) =>
  PRODUCTS.filter(
    (p) => (category === "All" || p.category === category) && p.fabric === fabric
  ).length;
