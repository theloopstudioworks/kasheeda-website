import React, { useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/common/ProductCard';
import { PRODUCTS } from '../data/products';

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
      <section className="relative w-full h-[80vh] min-h-[600px] max-h-[920px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC654Uo3BSBc0I1_k98PfcurysyjJYgxipYdTi5lozbNteyVWpJz1269x-dizznKqoK3c211kiILrfLdvZhAypjuOr6uH3UtKBEMyzMBRUJ_Qiu-Y91HhzTeXHeJm_AuBE17GmaqRcRDmB6dytDqoM_zD1nqGGQe8KJRDe28XFA5ZRrrnxrG6Q5c4YPI_-W3TVanTQ14BYPmbaUFAncGTuZaJB0pkNBjN9XgB3zqZN41oBroMJGAf9iOANKufzyMnvT0x3DBUKGrkrd"
            alt="Kasheeda Ethnic Luxury"
            className="w-full h-full object-cover object-top filter brightness-[0.88]"
          />
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        <div className="relative z-10 text-center px-margin-mobile flex flex-col items-center reveal-up">
          <span className="font-label-caps text-label-caps text-on-primary uppercase tracking-[0.25em] mb-4 opacity-90">
            Handcrafted Heritage
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary drop-shadow-md mb-6 max-w-3xl leading-tight">
            The Art of Contemporary Heritage
          </h1>
          <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-on-primary/90 mb-8 max-w-xl mx-auto leading-relaxed">
            Discover our latest collection where traditional Indian craftsmanship meets modern minimalist elegance.
          </p>
          <button
            onClick={() => navigateTo('catalog', 'All')}
            className="inline-block bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary/90 transition-colors duration-300 tracking-widest uppercase shadow-lg hover:shadow-xl"
          >
            Explore Collection
          </button>
        </div>
      </section>

      {/* Featured Categories (Bento Grid) */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16 reveal-up">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-2">
            Explore Categories
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mb-4">
            Curated Elegance
          </h2>
          <div className="w-16 h-[1px] bg-outline mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-[420px]">
          {/* Category 1: Sarees (Tall Card) */}
          <div
            onClick={() => navigateTo('catalog', 'Sarees')}
            className="group relative overflow-hidden block md:row-span-2 cursor-pointer reveal-up rounded-sm shadow-sm"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATdaSeQhSqd0GoLb-NT8kGIfZNHIawMH85-XTwBl6z5QMMLEmOOEgdzPzMJ1AMYLlTL9C25vTGhKlJDFZlR1VVi_P_caXu1t8aEFU8Twdi3f0t7tR7vstV0EVenF9NstfdGHiir7SMC7z4bg0SMScxeiYEspZ3R2NlnGBZJ2LnT_STt2jQO42xbNazxDRHddJ9geXEA8ZBVKck07j-7-LrlCrLvmXdcC6zvuZIq2C24Co48A8ePoKDtFgpAGIPDEopnlQddLBAPwBY"
              alt="Sarees Category"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent flex flex-col justify-end p-8">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-2">
                Category
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                Sarees
              </h3>
              <span className="font-label-caps text-xs text-on-surface-variant/80 mt-1 underline">
                Discover Heritage Sarees →
              </span>
            </div>
          </div>

          {/* Category 2: Lehengas */}
          <div
            onClick={() => navigateTo('catalog', 'Lehengas')}
            className="group relative overflow-hidden block md:col-span-2 cursor-pointer reveal-up rounded-sm shadow-sm"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBbXp0lj8Mm1BkK8kkUg2Q12u0ks85kgqe8Mw33cX23mpoYe3Gvq1A6JeeTGDLzYlxkDEqMjBQeeH7vtv0Upt3dxQPGE-txubkaic-os56Y0kkldlZ_mQW23Qs7CfDchzb-5u1SWrBjCsyWkZkyczG_ru8uHAcore2Z64ycgqLBYO9EHq52tnWXzG55XvunSWoOkE5TPbHH0tIUNiNHxKeAyR-5usrwTrmAwgKdi_eaHevxuPCteCLQdu-p7v1yyydkYd_fBgKqZif"
              alt="Lehengas Category"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent flex flex-col justify-end p-8">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-2">
                Category
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                Lehengas
              </h3>
              <span className="font-label-caps text-xs text-on-surface-variant/80 mt-1 underline">
                Explore Bridal & Festive Lehengas →
              </span>
            </div>
          </div>

          {/* Category 3: Kurtas */}
          <div
            onClick={() => navigateTo('catalog', 'Kurtas')}
            className="group relative overflow-hidden block md:col-span-2 cursor-pointer reveal-up rounded-sm shadow-sm"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRHKbf4aum9FxDXEPtN44EicA98c3jQiJFWP8ADuyzL0MY_cWyLVY5wVzICqsLJqR9xIR8NBMMMrY8mXpjDUGGEg76CeRuIkCJrfi3oAUQO_Y-xpMgjqNMFMlPKPM1YRp4PI8J_fl_6Hzf84qtTuM2UgSdK-HR-QaOMFXsh4DPPQ2ndS2Jn2jtbiIAjma9fLprhvDobQLJHGW8WDk_oXTLaojlffe0Ni6_NuXp4rZoArpfON7yLXhE0kbnhIS6Et-uBizEUaDOqa4B"
              alt="Kurtas Category"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent flex flex-col justify-end p-8">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-2">
                Category
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                Kurtas
              </h3>
              <span className="font-label-caps text-xs text-on-surface-variant/80 mt-1 underline">
                View Handspun Minimalist Kurtas →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/30 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto text-center reveal-up">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-3">
            Our Brand Philosophy
          </span>
          <h2 className="font-headline-md text-3xl md:text-4xl text-primary mb-6 leading-snug">
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
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-1">
              Curated Selection
            </span>
            <h2 className="font-headline-md text-headline-md text-primary">
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
