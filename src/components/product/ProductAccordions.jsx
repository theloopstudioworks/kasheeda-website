import React, { useState } from 'react';

export const ProductAccordions = ({ details }) => {
  const [openSection, setOpenSection] = useState('details');

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="flex flex-col mt-6">
      {/* Details & Care */}
      <div className="border-t border-outline-variant/30 py-4">
        <button
          onClick={() => toggleSection('details')}
          className="w-full flex justify-between items-center text-left group"
        >
          <span className="font-label-caps text-label-caps text-on-background group-hover:text-primary transition-colors uppercase tracking-widest font-semibold">
            Details & Care
          </span>
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
            {openSection === 'details' ? 'remove' : 'add'}
          </span>
        </button>
        {openSection === 'details' && (
          <div className="pt-4 pb-2 font-body-md text-sm text-on-surface-variant space-y-2 animate-fadeIn">
            <ul className="list-disc pl-5 space-y-1.5">
              {details ? (
                details.map((item, idx) => <li key={idx}>{item}</li>)
              ) : (
                <>
                  <li>Handwoven in Varanasi by master artisans</li>
                  <li>100% Pure Mulberry Silk</li>
                  <li>Antique Gold metallic Zari embroidery</li>
                  <li>Dry clean only to maintain sheen and threadwork integrity</li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Size & Fit Guide */}
      <div className="border-t border-outline-variant/30 py-4">
        <button
          onClick={() => toggleSection('size')}
          className="w-full flex justify-between items-center text-left group"
        >
          <span className="font-label-caps text-label-caps text-on-background group-hover:text-primary transition-colors uppercase tracking-widest font-semibold">
            Size & Fit Guide
          </span>
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
            {openSection === 'size' ? 'remove' : 'add'}
          </span>
        </button>
        {openSection === 'size' && (
          <div className="pt-4 pb-2 font-body-md text-sm text-on-surface-variant leading-relaxed space-y-2 animate-fadeIn">
            <p>
              Standard unstitched garments come with ample fabric margin for custom fitting.
            </p>
            <p>
              Our Master Tailors offer complimentary virtual consultations for custom made-to-measure tailoring across India and abroad.
            </p>
          </div>
        )}
      </div>

      {/* Shipping & Returns */}
      <div className="border-t border-b border-outline-variant/30 py-4">
        <button
          onClick={() => toggleSection('shipping')}
          className="w-full flex justify-between items-center text-left group"
        >
          <span className="font-label-caps text-label-caps text-on-background group-hover:text-primary transition-colors uppercase tracking-widest font-semibold">
            Shipping & Returns
          </span>
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
            {openSection === 'shipping' ? 'remove' : 'add'}
          </span>
        </button>
        {openSection === 'shipping' && (
          <div className="pt-4 pb-2 font-body-md text-sm text-on-surface-variant leading-relaxed space-y-2 animate-fadeIn">
            <p>
              <strong>Complimentary Shipping:</strong> All orders include complimentary insured courier delivery worldwide.
            </p>
            <p>
              <strong>Delivery Timeline:</strong> Domestic orders arrive within 4-7 business days. International orders arrive within 7-10 business days.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
