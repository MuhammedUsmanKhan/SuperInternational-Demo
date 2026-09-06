import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../../data/mockData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#f8fafc] text-[#222222] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-[#234d77] bg-[#f0f4f8] px-3.5 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222] tracking-tight">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-white border border-[#dce6f0] p-8 sm:p-12 lg:p-14 shadow-sm"
        >
          <div className="absolute top-6 right-8 text-[#f0f4f8] pointer-events-none">
            <Quote className="w-20 h-20" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 max-w-2xl mx-auto text-center space-y-6 min-h-[190px] flex flex-col justify-center"
            >
              <div className="flex items-center justify-center gap-1 text-[#ffb703]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-[#333333] leading-relaxed italic">
                "{current.quote}"
              </blockquote>

              <div className="pt-2">
                <div className="text-base font-bold text-[#222222]">
                  {current.clientName}
                </div>
                <div className="text-xs sm:text-sm text-[#777777]">
                  {current.designation} • <span className="text-[#234d77] font-semibold">{current.company}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-[#234d77] hover:text-[#234d77] flex items-center justify-center text-gray-600 transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-6 bg-[#234d77]' : 'w-2 bg-gray-200'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-10 h-10 rounded-full bg-[#234d77] hover:bg-[#1a3d5e] text-white flex items-center justify-center transition-colors shadow-xs"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


