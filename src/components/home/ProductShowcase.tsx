import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SHOWCASE_PRODUCTS } from '../../data/mockData';
import { ProductItem } from '../../types';

interface ProductShowcaseProps {
  onSelectProduct?: (product: ProductItem) => void;
  onOpenQuoteModal?: () => void;
}

export default function ProductShowcase({
  onSelectProduct,
  onOpenQuoteModal,
}: ProductShowcaseProps) {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % SHOWCASE_PRODUCTS.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + SHOWCASE_PRODUCTS.length) % SHOWCASE_PRODUCTS.length);
  };

  return (
    <section id="our-products" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header with Title and Carousel navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-10"
      >
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
            Our Products
          </h2>
          <p className="text-sm text-[#666666] mt-1 font-normal">
            Precision manufactured cosmetic containers, matte jars, and bottles.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#234d77] hover:text-[#234d77] flex items-center justify-center text-gray-600 transition-colors"
            aria-label="Previous Products"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-[#234d77] hover:bg-[#1a3d5e] text-white flex items-center justify-center transition-colors shadow-sm"
            aria-label="Next Products"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* Products Grid / Carousel matching Super International showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SHOWCASE_PRODUCTS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 p-5 flex flex-col justify-between"
          >
            <div>
              {/* Product Image Container with soft lavender background */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#f8fafc] border border-gray-100 mb-4 p-4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {item.tag && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-bold text-[#234d77] border border-gray-100 shadow-xs">
                    {item.tag}
                  </span>
                )}

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onSelectProduct && onSelectProduct(item)}
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#234d77] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-[#1a3d5e]"
                  title="Quick View"
                >
                  <Eye className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Category & Title */}
              <div className="text-xs font-semibold text-[#234d77] uppercase tracking-wider mb-1">
                {item.category} • {item.volume}
              </div>
              <h3 className="text-lg font-bold text-[#222222] group-hover:text-[#234d77] transition-colors leading-snug">
                {item.name}
              </h3>
              <p className="text-xs text-[#666666] mt-2 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
              <motion.button
                whileHover={{ x: 2 }}
                onClick={() => onSelectProduct && onSelectProduct(item)}
                className="text-xs font-bold text-[#234d77] hover:underline flex items-center gap-1"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenQuoteModal}
                className="px-4 py-2 rounded-full bg-[#f0f4f8] hover:bg-[#234d77] text-xs font-semibold text-[#234d77] hover:text-white transition-all"
              >
                Inquire
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


