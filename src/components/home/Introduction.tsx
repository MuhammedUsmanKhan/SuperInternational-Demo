import React from 'react';
import { motion } from 'motion/react';

interface IntroductionProps {
  onOpenQuoteModal?: () => void;
}

export default function Introduction({ onOpenQuoteModal }: IntroductionProps) {
  return (
    <section id="company-intro" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Enclosed in the light lavender rounded card matching screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="rounded-3xl bg-[#f0f4f8] p-8 sm:p-10 md:p-14 border border-[#dce6f0] shadow-xs"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column: Text Content matching screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222] tracking-tight leading-[1.15]">
              Leading exporters <br className="hidden sm:inline" />
              of Pakistan
            </h2>

            <p className="text-[15px] sm:text-base text-[#555555] leading-relaxed font-normal">
              Super International, a leading plastic manufacturer in Pakistan, offers premium cosmetic containers,
              matte round jars, shampoo bottles, and Harpic bottles. As a trusted plastic jar manufacturer in Karachi,
              we deliver internationally certified, award-winning packaging solutions, ensuring top quality for global
              brands seeking innovative, durable, and sustainable packaging.
            </p>

            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                id="intro-contact-btn"
                onClick={onOpenQuoteModal}
                className="bg-[#234d77] hover:bg-[#1a3d5e] text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-colors shadow-md"
              >
                Contact Us
              </motion.button>
            </div>

            {/* Carousel dash indicators matching screenshot */}
            <div className="flex items-center gap-2 pt-4">
              <span className="w-8 h-1.5 rounded-full bg-[#234d77]" />
              <span className="w-4 h-1.5 rounded-full bg-gray-300" />
              <span className="w-4 h-1.5 rounded-full bg-gray-300" />
              <span className="w-4 h-1.5 rounded-full bg-gray-300" />
              <span className="w-4 h-1.5 rounded-full bg-gray-300" />
              <span className="w-4 h-1.5 rounded-full bg-gray-300" />
            </div>
          </motion.div>

          {/* Right Column: Cosmetic Bottles & Jars on Wooden Shelf matching screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-6 flex items-center justify-center relative"
          >
            {/* Soft circular purple/lavender halo */}
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#dce6f0]/80 absolute -z-0 blur-xs" />

            <div className="relative z-10 w-full max-w-lg">
              {/* Product Shelf Visual Composition */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-lg border border-white/60 bg-white/40 backdrop-blur-xs p-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=85"
                  alt="Super International Assorted Cosmetic Containers and Bottles"
                  className="w-full h-72 sm:h-84 object-cover rounded-xl"
                  loading="lazy"
                />
                {/* Floating pill tags reminiscent of product lines */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-gray-100">
                  <div className="text-xs font-semibold text-[#222222]">
                    Cosmetic Containers & Jars
                  </div>
                  <span className="text-[11px] font-bold text-[#234d77] bg-[#f0f4f8] px-2.5 py-1 rounded-full">
                    Export Grade
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


