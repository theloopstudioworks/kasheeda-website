import React from 'react';
import { useShop } from '../context/ShopContext';
import { INFO_PAGES } from '../data/infoPages';

/**
 * Renders any of the Customer Care pages from src/data/infoPages.js.
 * Which one is shown is driven by `infoPageKey` on the shop context.
 */
export const InfoPage = () => {
  const { infoPageKey, openInfoPage, navigateTo } = useShop();

  const page = INFO_PAGES[infoPageKey] || INFO_PAGES.shipping;
  const otherPages = Object.entries(INFO_PAGES).filter(
    ([key]) => key !== infoPageKey
  );

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile py-12 md:py-20 flex-grow">
      <header className="mb-14 text-center max-w-2xl mx-auto">
        <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-2">
          {page.eyebrow}
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
          {page.title}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          {page.intro}
        </p>
      </header>

      <article className="max-w-3xl mx-auto space-y-12">
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-headline-sm text-xl text-primary mb-4 pb-2 border-b border-outline-variant/30">
              {section.heading}
            </h2>

            {section.body && (
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                {section.body}
              </p>
            )}

            {section.bullets && (
              <ul className="space-y-2.5">
                {section.bullets.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 font-body-md text-body-md text-on-surface-variant leading-relaxed"
                  >
                    <span className="text-secondary mt-[2px] shrink-0">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.table && (
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      {section.table.columns.map((col) => (
                        <th
                          key={col}
                          className="font-label-caps text-label-caps text-primary uppercase tracking-wider py-3 pr-6 border-b border-outline-variant/40 whitespace-nowrap"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row) => (
                      <tr key={row.join('|')}>
                        {row.map((cell) => (
                          <td
                            key={cell}
                            className="font-body-md text-body-md text-on-surface-variant py-3 pr-6 border-b border-outline-variant/20 align-top"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        {page.disclaimer && (
          <p className="font-body-md text-sm text-on-surface-variant/70 italic border-l-2 border-secondary/40 pl-4">
            {page.disclaimer}
          </p>
        )}
      </article>

      {/* Jump between the Customer Care pages */}
      <nav className="mt-20 pt-10 border-t border-outline-variant/30 max-w-3xl mx-auto">
        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">
          More Customer Care
        </span>
        <div className="flex flex-wrap gap-3">
          {otherPages.map(([key, other]) => (
            <button
              key={key}
              onClick={() => openInfoPage(key)}
              className="px-4 py-2 border border-outline-variant/60 rounded-full font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
            >
              {other.label}
            </button>
          ))}
          <button
            onClick={() => navigateTo('catalog', 'All')}
            className="px-4 py-2 border border-primary bg-primary text-on-primary rounded-full font-label-caps text-label-caps uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </nav>
    </main>
  );
};
