import React, { useState } from 'react';
import { Play, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AboutProps {
  onOpenQuoteModal?: () => void;
}

export default function About({ onOpenQuoteModal }: AboutProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section id="about-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Card: Magenta Container matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 rounded-3xl bg-[#234d77] text-white p-8 sm:p-10 md:p-12 relative overflow-hidden shadow-lg flex flex-col justify-between"
        >
          {/* Subtle background abstract circle */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#649dcf]/40 pointer-events-none" />

          <div>
            {/* 40+ Years Circular Badge matching screenshot */}
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="relative w-20 h-20 rounded-full border-2 border-dashed border-white/60 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="w-14 h-14 rounded-full bg-white text-[#234d77] flex items-center justify-center font-bold text-base shadow-sm"
                >
                  →
                </motion.div>
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-white/90 block">
                  40+ Years of Experience
                </span>
                <span className="text-[11px] text-white/75">
                  Trusted Manufacturing Since 1984
                </span>
              </div>
            </div>

            {/* Title matching screenshot */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Welcome to Super International Pvt. Ltd.
            </h2>

            {/* Paragraph matching screenshot word-for-word */}
            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal">
              Super International Pvt. Ltd. is a leading cosmetic container manufacturer and plastic jar manufacturer in Karachi,
              offering high-quality Harpic bottles, matte round jars, and shampoo bottles and much more. Our durable packaging
              solutions ensure sustainability and innovation across various industries. Explore our extensive product range on
              our Products page. For more information about our company, visit our About Us section. Contact us today to discover
              how our packaging solutions can meet your needs.
            </p>
          </div>

          <div className="pt-6">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#234d77] font-bold text-sm hover:bg-gray-100 transition-colors shadow-sm"
            >
              <span>Explore Packaging Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Right Card: YouTube Video Card matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-6 rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-black relative flex flex-col justify-between group min-h-[380px]"
        >
          {/* YouTube Top Bar Mockup */}
          <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1a3d5e] flex items-center justify-center font-bold text-xs">
                N
              </div>
              <div className="truncate max-w-xs sm:max-w-md">
                <div className="text-xs sm:text-sm font-semibold truncate">
                  Pakistan's Largest Plastic Product Manufacturer | Certified Compa...
                </div>
                <div className="text-[11px] text-gray-300">Super International</div>
              </div>
            </div>
            <button
              onClick={() => setVideoModalOpen(true)}
              className="text-xs text-gray-300 hover:text-white bg-black/40 px-2.5 py-1 rounded"
            >
              Share
            </button>
          </div>

          {/* Background Video Poster with Industrial Packaging Showcase */}
          <div className="relative w-full h-full min-h-[360px] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=85"
              alt="Super International Industrial Blow Molding Video"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-black/35" />

            {/* Text Overlay banner: "TOP NOTCH PLASTIC PACKAGING MANUFACTURERS IN PAKISTAN" */}
            <div className="absolute top-1/4 text-center px-4 z-10">
              <span className="inline-block px-3 py-1 rounded-md bg-[#234d77]/90 text-white font-mono text-xs uppercase tracking-wider mb-2">
                Factory Documentary
              </span>
              <div className="text-xl sm:text-2xl font-black text-white tracking-wide drop-shadow-md">
                TOP NOTCH PLASTIC PACKAGING MANUFACTURERS IN PAKISTAN
              </div>
            </div>

            {/* Red YouTube Play Button matching screenshot */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              id="about-youtube-play-btn"
              onClick={() => setVideoModalOpen(true)}
              className="relative z-20 w-18 h-12 rounded-2xl bg-[#ff0000] hover:bg-[#cc0000] text-white flex items-center justify-center shadow-2xl transition-all cursor-pointer"
              aria-label="Play YouTube Video"
            >
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </motion.button>

            {/* Bottom YouTube Badge */}
            <div className="absolute bottom-4 right-4 z-20">
              <button
                onClick={() => setVideoModalOpen(true)}
                className="text-xs font-semibold text-white/90 bg-black/60 hover:bg-black/80 px-3 py-1.5 rounded flex items-center gap-1.5 backdrop-blur-xs"
              >
                <span>Watch on YouTube</span>
              </button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Video Modal with embed */}
      <AnimatePresence>
        {videoModalOpen && (
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
              className="relative w-full max-w-4xl bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 bg-gray-900 border-b border-gray-800 text-white">
                <span className="font-semibold text-sm">
                  Super International — Facility Tour & Blow Molding Line
                </span>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video bg-black flex items-center justify-center relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Super International Manufacturing Facility"
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


