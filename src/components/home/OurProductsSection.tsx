import React, { useState } from 'react';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_PRODUCTS } from '../../data/mockData';
import { ProductItem } from '../../types/index';

interface OurProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

const CATEGORIES = [
  'All Products',
  'Acrylic Jar',
  'Aerosol Caps',
  'Beauty Jars',
  'Big Jars',
  'Developer Bottle',
  'Flip Top Caps',
  'Lotion Bottle',
  'PET Bottles',
];

export default function OurProductsSection({
  onSelectProduct,
  onOpenQuoteModal,
}: OurProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    if (selectedCategory === 'All Products') return true;
    return (
      product.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      product.name.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  });

  return (
    <section id="our-products-sec" className="our-products-sec py-16 sm:py-24 bg-white text-[#222222] relative overflow-hidden">
      <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0f4f8] text-[#234d77] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#649dcf]" />
            <span>Manufacturing Catalog</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173554] tracking-tight leading-tight">
            Our Complete <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#234d77] via-[#173554] to-[#d09554]">
              Packaging Products Catalog
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-2xl mx-auto">
            Super International Pvt. Ltd. specializes in manufacturing premium plastic packaging solutions: acrylic jars, aerosol caps, beauty jars, developer bottles, flip top caps, HDPE tubes, lotion bottles, and PET containers.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#234d77] text-white shadow-xs scale-105'
                  : 'bg-[#f0f4f8] text-[#555555] hover:bg-[#dce6f0] border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, delay: idx * 0.02 }}
                style={{ willChange: 'transform' }}
                className="our-products-box flex flex-col justify-between group mb-6"
              >
                <div
                  onClick={() => onSelectProduct(product)}
                  className="our-products-box-a cursor-pointer bg-[#f8fafc] border border-[#dce6f0] shadow-xs group-hover:shadow-md transition-shadow"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-[20px] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-bold text-[#234d77] shadow-xs">
                    {product.capacity || product.volume}
                  </div>

                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-white text-base sm:text-lg font-bold tracking-tight mb-2 drop-shadow-md">
                      {product.name}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-[#234d77] text-xs font-bold shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Specs</span>
                    </span>
                  </div>
                </div>

                <div className="our-products-item flex items-center justify-between mt-3 px-1">
                  <div className="pr-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="text-left text-sm sm:text-base font-bold text-[#173554] hover:text-[#234d77] transition-colors line-clamp-1 block"
                    >
                      {product.name}
                    </button>
                    <span className="text-[11px] text-[#777777] block mt-0.5">
                      MOQ: {product.moq || '5,000 Pcs'} &bull; <span className="text-[#234d77]">{product.category}</span>
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenQuoteModal(product.name)}
                    className="w-8 h-8 rounded-full bg-[#f0f4f8] text-[#234d77] hover:bg-[#234d77] hover:text-white flex items-center justify-center shrink-0 shadow-xs transition-colors"
                    aria-label={`Get quote for ${product.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onOpenQuoteModal('Custom Mold Consultation')}
            className="px-8 py-3.5 rounded-full text-white text-sm font-bold shadow-md hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2"
            style={{ backgroundColor: '#d09554' }}
          >
            <span>Need Custom Tooling or Private Label Packaging?</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
