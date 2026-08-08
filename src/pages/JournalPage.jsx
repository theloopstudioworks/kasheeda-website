import React from 'react';
import { useShop } from '../context/ShopContext';

export const JournalPage = () => {
  const { navigateTo } = useShop();

  const articles = [
    {
      id: 1,
      title: 'The Kadwa Weaving Tradition of Varanasi',
      subtitle: 'Inside the 120-day artisanal process behind hand-loomed gold zari sarees.',
      date: 'OCTOBER 24, 2024',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSANeELjuU1rBXKpNAwgfZ4bkzQUGY6SMkZLaZlp-S2jbGZ34euII7kSApTjOsjlLUC0LzUBDvWWGls0pDtpQYhjSc3NoFVbDWk44DfgTFcI81ZBXJ61FUQ_R33v8bD52cq6guthY5lCjBW39sbxJniTOgepii55PPZoW9pY5u3KYt-B5uQwL1gP3dPorxXFB6dbby8NOJewif91glU--72IBHD6XutS8SNpWRzX8ntzS2mk74VFV2iF8jI1l0371RxcLUb7PwMMCB',
    },
    {
      id: 2,
      title: 'Modern Minimalist Aesthetics in Indian Couture',
      subtitle: 'How restrained color palettes and tactile raw silks elevate bridal wear.',
      date: 'SEPTEMBER 18, 2024',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBbXp0lj8Mm1BkK8kkUg2Q12u0ks85kgqe8Mw33cX23mpoYe3Gvq1A6JeeTGDLzYlxkDEqMjBQeeH7vtv0Upt3dxQPGE-txubkaic-os56Y0kkldlZ_mQW23Qs7CfDchzb-5u1SWrBjCsyWkZkyczG_ru8uHAcore2Z64ycgqLBYO9EHq52tnWXzG55XvunSWoOkE5TPbHH0tIUNiNHxKeAyR-5usrwTrmAwgKdi_eaHevxuPCteCLQdu-p7v1yyydkYd_fBgKqZif',
    },
    {
      id: 3,
      title: 'Preserving Heritage Craftsmanship for Future Generations',
      subtitle: 'Kasheeda’s commitment to sustainable artisan communities across India.',
      date: 'AUGUST 12, 2024',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRHKbf4aum9FxDXEPtN44EicA98c3jQiJFWP8ADuyzL0MY_cWyLVY5wVzICqsLJqR9xIR8NBMMMrY8mXpjDUGGEg76CeRuIkCJrfi3oAUQO_Y-xpMgjqNMFMlPKPM1YRp4PI8J_fl_6Hzf84qtTuM2UgSdK-HR-QaOMFXsh4DPPQ2ndS2Jn2jtbiIAjma9fLprhvDobQLJHGW8WDk_oXTLaojlffe0Ni6_NuXp4rZoArpfON7yLXhE0kbnhIS6Et-uBizEUaDOqa4B',
    },
  ];

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 flex-grow">
      <header className="mb-16 text-center max-w-2xl mx-auto">
        <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-2">
          Editorial Journal
        </span>
        <h1 className="font-display-lg text-display-lg text-primary mb-4">
          The Kasheeda Journal
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Stories of heritage textiles, master weavers, and the evolving language of contemporary Indian luxury.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {articles.map((art) => (
          <article
            key={art.id}
            className="group cursor-pointer flex flex-col justify-between bg-surface-container-low border border-outline-variant/30 rounded overflow-hidden shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <span className="font-label-caps text-[10px] text-secondary tracking-widest block mb-2 uppercase">
                  {art.date}
                </span>
                <h3 className="font-headline-sm text-lg text-primary mb-2 group-hover:text-secondary transition-colors">
                  {art.title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-4">
                  {art.subtitle}
                </p>
              </div>
              <span className="font-label-caps text-xs text-primary font-semibold underline">
                Read Story →
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* CTA Box */}
      <div className="mt-20 p-10 bg-primary text-on-primary rounded text-center max-w-3xl mx-auto">
        <h2 className="font-headline-md text-2xl text-on-primary mb-3">
          Explore Our Bespoke Heirloom Collections
        </h2>
        <p className="font-body-md text-on-primary/90 mb-6 max-w-lg mx-auto">
          Experience the tactile luxury of hand-embroidered silks and velvet lehengas crafted for modern royalty.
        </p>
        <button
          onClick={() => navigateTo('catalog', 'All')}
          className="px-8 py-3 bg-secondary text-on-secondary font-label-caps text-label-caps tracking-widest uppercase rounded hover:bg-secondary-fixed transition-colors"
        >
          View Full Catalog
        </button>
      </div>
    </main>
  );
};
