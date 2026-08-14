import React, { useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/common/ProductCard';
import { PRODUCTS } from '../data/products';
import { KasheedaCombineSection } from '../components/common/KasheedaCombineSection';
import { Wordmark } from '../components/common/Wordmark';

// Bento grid tiles. `span` controls the tile size within the 3-column grid.
const CATEGORY_CARDS = [
  {
    category: 'Sarees',
    label: 'Sarees',
    cta: 'Discover Heritage Sarees',
    span: 'md:row-span-2',
    image: '/sarees/khaddi-chiffon-banarasi-6999.png',
  },
  {
    category: 'Suits',
    label: 'Suits',
    cta: 'Shop Unstitched Suit Sets',
    span: 'md:col-span-2',
    image: '/suits/maheshwari-cotton-silk-turquoise-2599.png',
  },
  {
    category: 'Lehengas',
    label: 'Lehengas',
    cta: 'Explore Bridal & Festive Lehengas',
    span: '',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBbXp0lj8Mm1BkK8kkUg2Q12u0ks85kgqe8Mw33cX23mpoYe3Gvq1A6JeeTGDLzYlxkDEqMjBQeeH7vtv0Upt3dxQPGE-txubkaic-os56Y0kkldlZ_mQW23Qs7CfDchzb-5u1SWrBjCsyWkZkyczG_ru8uHAcore2Z64ycgqLBYO9EHq52tnWXzG55XvunSWoOkE5TPbHH0tIUNiNHxKeAyR-5usrwTrmAwgKdi_eaHevxuPCteCLQdu-p7v1yyydkYd_fBgKqZif',
  },
  {
    category: 'Kurtas',
    label: 'Kurtas',
    cta: 'View Handspun Minimalist Kurtas',
    span: '',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDRHKbf4aum9FxDXEPtN44EicA98c3jQiJFWP8ADuyzL0MY_cWyLVY5wVzICqsLJqR9xIR8NBMMMrY8mXpjDUGGEg76CeRuIkCJrfi3oAUQO_Y-xpMgjqNMFMlPKPM1YRp4PI8J_fl_6Hzf84qtTuM2UgSdK-HR-QaOMFXsh4DPPQ2ndS2Jn2jtbiIAjma9fLprhvDobQLJHGW8WDk_oXTLaojlffe0Ni6_NuXp4rZoArpfON7yLXhE0kbnhIS6Et-uBizEUaDOqa4B',
  },
];

export const HomePage = () => {
  const { navigateTo } = useShop();

  useEffect(() => {
    // Reveal animation on scroll
    const reveals = document.querySelectorAll('.reveal-up');
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 80) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // initial trigger
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] max-h-[960px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC654Uo3BSBc0I1_k98PfcurysyjJYgxipYdTi5lozbNteyVWpJz1269x-dizznKqoK3c211kiILrfLdvZhAypjuOr6uH3UtKBEMyzMBRUJ_Qiu-Y91HhzTeXHeJm_AuBE17GmaqRcRDmB6dytDqoM_zD1nqGGQe8KJRDe28XFA5ZRrrnxrG6Q5c4YPI_-W3TVanTQ14BYPmbaUFAncGTuZaJB0pkNBjN9XgB3zqZN41oBroMJGAf9iOANKufzyMnvT0x3DBUKGrkrd"
            alt="Kasheeda Ethnic Luxury"
            className="w-full h-full object-cover object-top filter brightness-[0.82]"
          />
          {/* Deep crimson gradient overlay matching the logo palette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/20 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-margin-mobile flex flex-col items-center reveal-up">
          <span className="font-label-caps text-label-caps text-white/80 uppercase tracking-[0.35em] mb-5">
            Handcrafted Heritage
          </span>
          {/* Brand wordmark */}
          <h1 className="mb-4">
            <Wordmark
              variant="light"
              className="w-[min(82vw,620px)] h-auto drop-shadow-lg"
            />
          </h1>
          <p className="font-brand italic text-white/90 text-xl md:text-2xl font-light mb-3 tracking-wide">
            The Boutique
          </p>
          <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-white/80 mb-10 max-w-lg mx-auto leading-relaxed">
            Discover our latest collection where traditional Indian craftsmanship meets modern minimalist elegance.
          </p>
          <button
            onClick={() => navigateTo('catalog', 'All')}
            className="inline-block bg-primary text-on-primary font-label-caps text-label-caps px-10 py-4 hover:bg-primary-container transition-all duration-300 tracking-widest uppercase shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore Collection
          </button>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/70 animate-pulse" />
        </div>
      </section>

      {/* ── KASHEEDA CARD COMBINE SECTION ── */}
      <KasheedaCombineSection />

      {/* Featured Categories (Bento Grid) */}
      <section className="py-24 px-margin-mobile max-w-container-max mx-auto">
        <div className="text-center mb-16 reveal-up">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-2">
            Explore Categories
          </span>
          <h2 className="font-brand text-headline-md text-primary font-light italic mb-4">
            Curated Elegance
          </h2>
          <div className="w-16 h-[1px] bg-primary/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-[420px]">
          {CATEGORY_CARDS.map((cat) => (
            <div
              key={cat.category}
              onClick={() => navigateTo('catalog', cat.category)}
              className={`group relative overflow-hidden block cursor-pointer reveal-up shadow-sm hover:shadow-xl transition-shadow duration-300 ${cat.span}`}
            >
              <img
                src={cat.image}
                alt={`${cat.label} Category`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0a]/90 via-[#1a0a0a]/20 to-transparent flex flex-col justify-end p-8">
                <span className="font-label-caps text-label-caps text-accent-rose tracking-widest uppercase mb-2">
                  Category
                </span>
                <h3 className="font-brand text-headline-sm text-white font-light italic group-hover:text-rose-200 transition-colors">
                  {cat.label}
                </h3>
                <span className="font-label-caps text-xs text-white/70 mt-1 group-hover:text-white/90 transition-colors">
                  {cat.cta} →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/30 px-margin-mobile">
        <div className="max-w-4xl mx-auto text-center reveal-up">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-3">
            Our Brand Philosophy
          </span>
          <h2 className="font-brand text-3xl md:text-4xl text-primary font-light italic mb-6 leading-snug">
            "Contemporary Heritage rooted in meticulous handloom traditions."
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-8">
            Every Kasheeda creation is a dialogue between legacy Indian textiles and refined modern silhouette aesthetics. Crafted over months by master weavers in Varanasi and Rajasthan.
          </p>
          <div className="flex flex-wrap justify-center gap-8 border-t border-outline-variant/40 pt-8 mt-8 text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">weaving</span>
              <span className="font-label-caps text-xs">100% Handcrafted Zari</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">eco</span>
              <span className="font-label-caps text-xs">Natural Raw Silk Fabrics</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">verified</span>
              <span className="font-label-caps text-xs">Authentic Artisanal Seal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-24 px-margin-mobile max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-1">
              Curated Selection
            </span>
            <h2 className="font-brand text-headline-md text-primary font-light italic">
              Featured Heirloom Pieces
            </h2>
          </div>
          <button
            onClick={() => navigateTo('catalog', 'All')}
            className="font-label-caps text-label-caps text-primary underline hover:text-secondary transition-colors"
          >
            View All Catalog →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
