import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CATEGORIES_WE_SERVE } from '../../data/mockData';
import { ProductCategory } from '../../types';

interface CategoriesProps {
  onSelectCategory?: (category: ProductCategory) => void;
  onOpenQuoteModal?: () => void;
}

export default function Categories({
  onSelectCategory,
  onOpenQuoteModal,
}: CategoriesProps) {
  return (
    <section id="categories" className="py-16 sm:py-24 bg-white text-[#222222] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#234d77] bg-[#f0f4f8] px-3.5 py-1.5 rounded-full">
              Industry Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222] tracking-tight mt-3">
              Categories We Serve
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#666666] font-normal leading-relaxed">
            From cosmetic containers to industrial chemical packaging, explore our specialized plastic manufacturing divisions.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES_WE_SERVE.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectCategory && onSelectCategory(cat)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-[#234d77] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] bg-[#f9f5fc] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-bold text-[#234d77] shadow-xs">
                    {cat.count}+ Models
                  </div>
                </div>

                <div className="p-5 space-y-1.5">
                  <h3 className="text-lg font-bold text-[#222222] group-hover:text-[#234d77] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#666666] line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="px-5 py-3.5 bg-[#f8fafc] border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#234d77] group-hover:text-[#1a3d5e] transition-colors">
                <span>View Products</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


