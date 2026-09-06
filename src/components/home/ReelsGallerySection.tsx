import React, { useState } from 'react';
import { Play, ArrowRight, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ReelItem {
  id: number;
  title: string;
  category: string;
  videoUrl: string;
  posterUrl: string;
  views: string;
}

const REELS_DATA: ReelItem[] = [
  {
    id: 1,
    title: 'High-Precision Beauty Jar Injection Molding',
    category: 'Cosmetic Packaging',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-automated-machine-in-a-factory-42861-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    views: '18.4K',
  },
  {
    id: 2,
    title: 'Automated 2-Color IML Jar Decorating',
    category: 'IML Technology',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-an-industrial-machine-working-42863-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    views: '24.2K',
  },
  {
    id: 3,
    title: 'Cleanroom Shampoo & Developer Bottle Blow-Molding',
    category: 'Extrusion Blow',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-factory-worker-checking-metal-parts-42862-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    views: '31.1K',
  },
  {
    id: 4,
    title: 'Aerosol Caps & Flip-Top Closures Stress Testing',
    category: 'Quality Assurance',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-automated-machine-in-a-factory-42861-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    views: '15.9K',
  },
];

export default function ReelsGallerySection() {
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REELS_DATA.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % REELS_DATA.length);
  };

  return (
    <section id="reels-section" className="py-16 sm:py-24 bg-[#f8fafc] text-[#222222] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-3"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[#234d77] bg-[#f0f4f8] px-3.5 py-1.5 rounded-full">
              Behind the Scenes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222] tracking-tight">
              Reels Gallery Of Plastic Products
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-3xl">
              Welcome to the Reels Gallery at Super International Pvt. Ltd.! Discover our wide range of high quality plastic products, including custom plastic packaging, cosmetic containers, and eco friendly solutions. Designed for durability and innovation, our products are tailored to meet your every packaging need. Explore now to experience the expertise of Pakistan&apos;s leading plastic packaging manufacturer!
            </p>
          </motion.div>

          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#234d77] text-[#222222] hover:text-white flex items-center justify-center shadow-xs transition-colors"
              aria-label="Previous Reel"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-[#234d77] hover:bg-[#1a3d5e] text-white flex items-center justify-center shadow-xs transition-colors"
              aria-label="Next Reel"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveReel(REELS_DATA[0])}
              className="px-5 py-2.5 rounded-full bg-white border border-[#dce6f0] text-[#234d77] text-xs font-bold hover:bg-[#f0f4f8] transition-colors flex items-center gap-1.5"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REELS_DATA.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              onClick={() => setActiveReel(reel)}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[9/16] bg-black"
            >
              <img
                src={reel.posterUrl}
                alt={reel.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 p-5 flex flex-col justify-between">
                
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white border border-white/20">
                    {reel.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
                    <Eye className="w-3 h-3 text-[#d09554]" />
                    <span>{reel.views}</span>
                  </div>
                </div>

                <div className="self-center">
                  <div className="w-14 h-14 rounded-full bg-[#234d77]/90 group-hover:bg-[#234d77] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-white group-hover:text-[#d09554] transition-colors line-clamp-2 leading-snug">
                    {reel.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#dce6f0]">
                    <span>Tap to watch production</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveReel(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-[9/16]"
            >
              <video
                src={activeReel.videoUrl}
                poster={activeReel.posterUrl}
                autoPlay
                controls
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              <button
                onClick={() => setActiveReel(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md text-white text-xs pointer-events-none">
                <div className="font-bold">{activeReel.title}</div>
                <div className="text-[10px] text-gray-300">{activeReel.category}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
