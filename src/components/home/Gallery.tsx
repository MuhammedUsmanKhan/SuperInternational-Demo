import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../../data/mockData';
import { GalleryItem } from '../../types';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white text-[#222222] relative overflow-hidden">
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
              Production Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222] tracking-tight mt-3">
              Plant & Product Gallery
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#666666] font-normal leading-relaxed">
            Take a look inside our precision tooling workshops, automated cleanrooms, and finished cosmetic packaging.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#f9f5fc] border border-gray-200 shadow-xs hover:shadow-lg transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#cf9ac3]">
                  {item.category}
                </span>
                <h3 className="text-base font-bold mt-1">
                  {item.title}
                </h3>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/90">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Image</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
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
              className="relative max-w-4xl w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xl"
            >
              <div className="p-4 flex items-center justify-between border-b border-gray-100">
                <div>
                  <span className="text-xs font-bold text-[#234d77] uppercase">
                    {selectedItem.category}
                  </span>
                  <div className="text-base font-bold text-[#222222]">
                    {selectedItem.title}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1.5 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative aspect-[16/10] bg-black">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


