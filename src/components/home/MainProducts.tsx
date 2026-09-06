import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { MAIN_PRODUCTS } from '../../data/mockData';
import { ProductItem } from '../../types';

interface MainProductsProps {
  onSelectProduct?: (product: ProductItem) => void;
  onOpenQuoteModal?: () => void;
}

export default function MainProducts({
  onSelectProduct,
  onOpenQuoteModal,
}: MainProductsProps) {
  return (
    <section id="main-products" className="py-16 sm:py-24 bg-white text-[#222222] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-[#234d77] bg-[#f0f4f8] px-3.5 py-1.5 rounded-full">
            Comprehensive Range
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222] tracking-tight">
            Our Primary Product Range
          </h2>
          <p className="text-sm sm:text-base text-[#666666] font-normal leading-relaxed">
            From cosmetic jars to shampoo bottles and cleaning chemical containers, Super International manufactures packaging to satisfy high-volume production requirements.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MAIN_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              onClick={() => onSelectProduct && onSelectProduct(prod)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#234d77] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] bg-[#f8fafc] overflow-hidden p-4 flex items-center justify-center">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 text-gray-700 flex items-center justify-center shadow-xs group-hover:bg-[#234d77] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="text-[11px] font-bold text-[#234d77] uppercase tracking-wider">
                    {prod.category} • {prod.volume}
                  </div>
                  <h3 className="text-xl font-bold text-[#222222] group-hover:text-[#234d77] transition-colors leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">
                    {prod.description}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-[#f8fafc] border-t border-gray-100 flex items-center justify-between text-xs text-[#666666]">
                <span className="font-semibold text-gray-700">{prod.material}</span>
                <span className="text-[#234d77] font-bold group-hover:underline">
                  View Specifications →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Mold Tooling */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#234d77] to-[#1a3d5e] text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need a Custom Mold or Bespoke Geometry?
            </h3>
            <p className="text-xs sm:text-sm text-purple-100 max-w-xl font-normal">
              Our in-house toolroom designs custom steel and precision molds with micron-level accuracy tailored to your brand's unique needs.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-3.5 rounded-full bg-white text-[#234d77] hover:bg-gray-100 font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
          >
            Request Custom Consultation
          </button>
        </div>

      </div>
    </section>
  );
}

