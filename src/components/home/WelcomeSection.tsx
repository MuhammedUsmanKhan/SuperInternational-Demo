import React, { useState } from 'react';
import { Play, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WelcomeSectionProps {
  onOpenQuoteModal?: () => void;
}

export default function WelcomeSection({ onOpenQuoteModal }: WelcomeSectionProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="welcome-section" className="py-16 sm:py-24 bg-white text-[#222222] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: 40+ Experience, Heading, Story */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 40+ Experience Badge + Curved Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#f0f4f8] border-2 border-[#dce6f0] flex flex-col items-center justify-center text-center shadow-inner">
                  <span className="text-2xl sm:text-3xl font-black text-[#234d77] leading-none">
                    40+
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#666666] mt-0.5">
                    Years Exp.
                  </span>
                </div>
              </div>

              <div className="space-y-0.5">
                <span className="text-xs font-bold tracking-widest uppercase text-[#234d77] bg-[#f0f4f8] px-3 py-1 rounded-full">
                  Since 1983
                </span>
                <div className="text-sm font-bold text-[#222222] pt-1">
                  Pioneering Packaging Excellence in Pakistan
                </div>
              </div>
            </motion.div>

            {/* Main Welcome Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222] tracking-tight leading-tight">
                Welcome to <br />
                <span className="text-[#234d77]">Super International</span>
              </h2>

              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                Super International Pvt. Ltd. is a leading cosmetic container manufacturer and plastic jar manufacturer in Karachi, offering high-quality Harpic bottles, matte round jars, and shampoo bottles and much more. Our durable packaging solutions ensure sustainability and innovation across cosmetics, personal care, household essentials, and pharmaceutical industries.
              </p>
            </motion.div>

            {/* Value Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            >
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#234d77] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#222222]">Automated Cleanrooms</div>
                  <p className="text-xs text-[#666666]">Dust-free medical grade cosmetic bottling.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#234d77] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#222222]">In-House Tooling</div>
                  <p className="text-xs text-[#666666]">Rapid mold customization &amp; prototyping.</p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pt-3 flex items-center gap-4"
            >
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-full bg-[#d09554] hover:bg-[#b8833f] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                Inquire With Our Engineers
              </button>
              <a
                href="#our-products-section"
                className="px-6 py-3 rounded-full bg-[#f0f4f8] hover:bg-[#dce6f0] text-[#234d77] text-xs sm:text-sm font-bold transition-all"
              >
                View Catalog
              </a>
            </motion.div>

          </div>

          {/* Right Column: Factory / Plant Video Card with Play Trigger */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-[16/10] group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85"
                alt="Super International Pvt. Ltd. Manufacturing Facility"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-6 sm:p-8">
                
                {/* Top Badge */}
                <div className="self-start px-3 py-1.5 rounded-full bg-black/60 border border-white/20 text-white text-xs font-semibold backdrop-blur-md">
                  Corporate Video &bull; Watch Inside
                </div>

                {/* Center Play Button */}
                <div className="self-center">
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsVideoModalOpen(true)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#234d77] hover:bg-[#1a3d5e] text-white flex items-center justify-center shadow-2xl transition-all cursor-pointer relative"
                    aria-label="Play Corporate Video"
                  >
                    <span className="absolute inset-0 rounded-full bg-[#234d77] animate-ping opacity-30 pointer-events-none" />
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                  </motion.button>
                </div>

                {/* Bottom Details */}
                <div className="text-white space-y-1">
                  <div className="text-base sm:text-lg font-bold">
                    Inside Our Karachi Plant
                  </div>
                  <div className="text-xs text-gray-300">
                    Tour our cleanrooms, blow-molding cells, and IML decoration lines.
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="p-4 bg-gray-900 flex items-center justify-between text-white border-b border-gray-800">
                <span className="text-sm font-bold">Super International Pvt. Ltd. Facility Tour</span>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/F_4K-e_P_fI?autoplay=1"
                  title="Super International Pvt. Ltd. Corporate Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
