import React from 'react';
import { motion } from 'motion/react';
import { ProductItem } from '../../types';

interface FeaturedProductsProps {
  onSelectProduct?: (product: ProductItem) => void;
  onOpenQuoteModal?: () => void;
}

export default function FeaturedProducts({
  onSelectProduct,
  onOpenQuoteModal,
}: FeaturedProductsProps) {
  return (
    <section id="featured-products" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Light lavender card matching screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl bg-[#f0f4f8] p-8 sm:p-10 md:p-14 border border-[#dce6f0] shadow-xs"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Title & Text matching screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222] tracking-tight leading-[1.15]">
              IML & 2 color Products
            </h2>

            <p className="text-[15px] sm:text-base text-[#555555] leading-relaxed font-normal">
              Discover our high-quality In-Mold Label (IML) products designed for superior durability, vibrant branding,
              and long-lasting performance. From food containers to custom packaging solutions, we deliver precision-engineered
              products that combine functionality with exceptional visual appeal.
            </p>

            <div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#our-products"
                className="inline-block bg-[#234d77] hover:bg-[#1a3d5e] text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-colors shadow-md"
              >
                Explore Products
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Visual of IML Jars matching screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-6 flex items-center justify-center relative"
          >
            {/* Circular soft lavender halo */}
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#dce6f0]/80 absolute -z-0 blur-xs" />

            <div className="relative z-10 w-full max-w-md">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-lg border border-white/80 bg-white/60 backdrop-blur-xs p-4 flex items-center justify-center"
              >
                <img
                  src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=85"
                  alt="Super International IML Yellow Rose Cosmetic Cream Jars"
                  className="w-full h-72 sm:h-80 object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-gray-100 flex items-center justify-between text-xs font-semibold text-[#222222]">
                  <span>Triple Action Dark Spot IML Jar</span>
                  <span className="text-[#234d77] bg-[#f0f4f8] px-2.5 py-1 rounded-full font-bold text-[11px]">
                    2-Color IML
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}


