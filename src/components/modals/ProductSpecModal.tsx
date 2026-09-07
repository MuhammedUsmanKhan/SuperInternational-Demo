import React from 'react';
import { X, ShieldCheck, ArrowRight } from 'lucide-react';
import { ProductItem } from '../../types';

interface ProductSpecModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuote: (productName?: string) => void;
}

export default function ProductSpecModal({
  product,
  onClose,
  onRequestQuote,
}: ProductSpecModalProps) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl border border-gray-100 shadow-2xl overflow-hidden text-[#222222] my-auto max-h-[92vh] sm:max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Header */}
        <div className="sticky top-0 z-20 px-5 sm:px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white/95 sm:bg-[#f8fafc]/95 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#234d77]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#234d77]">
              Technical Specification Sheet
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-8 space-y-6 overflow-y-auto overscroll-contain">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5 relative aspect-square rounded-2xl overflow-hidden bg-[#f8fafc] border border-gray-100 p-4 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain rounded-xl"
              />
              {product.tag && (
                <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-white/90 text-[10px] font-bold text-[#234d77] border border-gray-100 shadow-xs">
                  {product.tag}
                </div>
              )}
            </div>

            <div className="sm:col-span-7 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#234d77]">
                {product.category}
              </div>
              <h3 className="text-2xl font-bold text-[#222222]">
                {product.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#dce6f0] space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#234d77]">
              Resin & Dimensional Matrix
            </h4>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-gray-500 block">Volume / Weight:</span>
                <span className="font-bold text-[#222222]">{product.volume}</span>
              </div>
              <div>
                <span className="text-gray-500 block">Base Polymer:</span>
                <span className="font-bold text-[#222222]">{product.material}</span>
              </div>
              {product.neckSize && (
                <div>
                  <span className="text-gray-500 block">Neck Thread Finish:</span>
                  <span className="font-bold text-[#222222]">{product.neckSize}</span>
                </div>
              )}
              {product.specs?.height && (
                <div>
                  <span className="text-gray-500 block">Total Height:</span>
                  <span className="font-bold text-[#222222]">{product.specs.height}</span>
                </div>
              )}
              {product.specs?.diameter && (
                <div>
                  <span className="text-gray-500 block">Outer Diameter:</span>
                  <span className="font-bold text-[#222222]">{product.specs.diameter}</span>
                </div>
              )}
              {product.specs?.finish && (
                <div>
                  <span className="text-gray-500 block">Surface Treatment:</span>
                  <span className="font-bold text-[#234d77]">{product.specs.finish}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#234d77] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#234d77]" />
            <span>Tested for 24-hour vacuum leak seal &amp; drop resistance (1.5m drop standard)</span>
          </div>
        </div>

        <div className="p-4 sm:p-6 border-t border-gray-100 bg-[#f8fafc] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-100"
          >
            Close Window
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestQuote(product.name);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#d09554] hover:bg-[#b8833f] text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5"
          >
            <span>Request Sample or Mold Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
