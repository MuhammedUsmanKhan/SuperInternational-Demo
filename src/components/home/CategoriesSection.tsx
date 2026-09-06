import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CategoriesSectionProps {
  onSelectCategory?: (category: string) => void;
  onOpenQuoteModal?: (categoryName?: string) => void;
}

const CATEGORIES_SERVED = [
  {
    name: 'Acrylic Jar',
    slug: 'acrylic-jar',
    count: '24 Models',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Aerosol Caps',
    slug: 'aerosol-caps',
    count: '16 Styles',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Beauty Jars',
    slug: 'beauty-jars',
    count: '38 Sizes',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Big Jars',
    slug: 'big-jars',
    count: '12 Volumes',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Bowl & Tubs',
    slug: 'bowl',
    count: '18 Variants',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Conditioner',
    slug: 'conditioner',
    count: '20 Designs',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Developer Bottle',
    slug: 'developer-bottle',
    count: '15 Capacities',
    image: 'https://images.unsplash.com/photo-1608248597359-0091807d7c6e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Flip Top Caps',
    slug: 'flip-top-caps',
    count: '32 Variations',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
  },
];

export default function CategoriesSection({
  onSelectCategory,
  onOpenQuoteModal,
}: CategoriesSectionProps) {
  return (
    <section id="categories-section" className="py-16 sm:py-24 bg-[#f8fafc] text-[#222222] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-[#234d77] bg-[#f0f4f8] px-3.5 py-1.5 rounded-full">
            Product Sectors
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222] tracking-tight">
            Categories we serve
          </h2>
          <p className="text-xs sm:text-sm text-[#666666]">
            Engineered packaging solutions customized for every cosmetic, personal care, and industrial category.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES_SERVED.map((cat, idx) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-white border border-[#dce6f0] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
              onClick={() => {
                if (onSelectCategory) onSelectCategory(cat.name);
                const target = document.getElementById('our-products-section');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="relative aspect-[4/3] bg-[#f0f4f8] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-md">
                  {cat.count}
                </span>
              </div>

              <div className="p-4 flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-bold text-[#222222] group-hover:text-[#234d77] transition-colors">
                  {cat.name}
                </h3>
                <div className="w-7 h-7 rounded-full bg-[#f0f4f8] text-[#234d77] group-hover:bg-[#234d77] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#our-products-section"
            className="px-8 py-3.5 rounded-full bg-[#d09554] hover:bg-[#b8833f] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            <span>See all categories</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
