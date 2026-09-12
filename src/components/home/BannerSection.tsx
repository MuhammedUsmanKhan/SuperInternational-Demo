import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BannerSectionProps {
  onOpenQuoteModal?: (productName?: string) => void;
}

const BANNER_SLIDES = [
  {
    id: 1,
    heading: 'Winter Packaging Solutions For Brands',
    description:
      'Get your products winter ready with premium bottles and jars designed for seasonal food and cosmetic packaging. Super International Pvt. Ltd. provides high quality PET and HDPE containers, elegant winter edition jars, and custom designs that help your brand stand out during the festive season. From frosted winter bottles to premium matte jars, our packaging is crafted to support hygiene, durability, and premium shelf presence.',
    buttonText: 'Contact Us',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/3.png',
    fallbackImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    heading: 'Leading Exporters of Pakistan',
    description:
      'Super International Pvt. Ltd. durability and quality is appreciated by leading exporters of Pakistan who now prefer to use our high-precision plastic jars, bottles, and caps for demanding worldwide retail markets.',
    buttonText: 'Contact Us',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/ress.png',
    fallbackImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    heading: 'Custom Plastic Manufacturing',
    description:
      'From 3D mold engineering to final multi-cavity injection blow molding, Super International Pvt. Ltd. translates brand vision into high-performance packaging with zero-defect consistency.',
    buttonText: 'Contact Us',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/shanijahil.png',
    fallbackImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    heading: 'Affordable High Quality Plastic',
    description:
      'Offering competitive, factory-direct volume pricing with certified medical, food, and cosmetic grade virgin resins and sustainable PCR options.',
    buttonText: 'Contact Us',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/6.png',
    fallbackImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    heading: 'Certified Excellence 2025.',
    description:
      'Certified under ISO 9001:2015 quality standards with 100% optical leak testing, tamper-evident neck finishes, and automated cleanroom production lines.',
    buttonText: 'Contact Us',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/png-bunches-1-scaled.png',
    fallbackImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    heading: 'No. 1 Plastic Manufacturer.',
    description:
      'Established in 1983 in Karachi, Super International Pvt. Ltd. has powered packaging for top FMCG brands including Unilever, Hemani, and Olivia with 40+ years of manufacturing leadership.',
    buttonText: 'Contact Us',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/7.png',
    fallbackImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
  },
];

export default function BannerSection({ onOpenQuoteModal }: BannerSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = BANNER_SLIDES[currentSlide];

  return (
    <section className="banner-sec py-4 sm:py-6 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          className="main-banner-box relative rounded-[20px] sm:rounded-[28px] p-6 sm:p-10 lg:p-14 overflow-hidden border border-[#dce6f0]"
          style={{
            background: 'radial-gradient(83.94% 318.36% at 95.74% 17.18%, #dce6f0 7.19%, #f0f4f8 100%)',
          }}
        >
          <div
            className="content-bg-circle w-36 h-36 rounded-full absolute -top-10 -left-10 pointer-events-none"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.45)' }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-4 sm:space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#234d77]/20 text-[#234d77] text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#649dcf]" />
                    <span>Super International Pvt. Ltd.</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173554] tracking-tight leading-[1.14]">
                    {slide.heading}
                  </h1>

                  <p className="text-sm sm:text-base text-[#444444] leading-relaxed max-w-2xl font-normal">
                    {slide.description}
                  </p>

                  <div className="pt-3 flex items-center gap-4">
                    <button
                      onClick={() => onOpenQuoteModal && onOpenQuoteModal(slide.heading)}
                      className="px-8 py-3.5 rounded-full text-white text-sm font-bold shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                      style={{ backgroundColor: '#234d77' }}
                    >
                      <span>{slide.buttonText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Dots and Arrows */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/60">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? BANNER_SLIDES.length - 1 : prev - 1))}
                  className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#173554] flex items-center justify-center shadow-xs hover:shadow-sm transition-all"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2">
                  {BANNER_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentSlide ? 'w-8 bg-[#234d77]' : 'w-2.5 bg-[#234d77]/30 hover:bg-[#234d77]/60'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length)}
                  className="w-10 h-10 rounded-full bg-[#d09554] hover:bg-[#b8833f] text-white flex items-center justify-center shadow-xs hover:shadow-sm transition-all"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Column: Hero Showcase Image */}
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center"
                >
                  <div
                    className="absolute inset-4 rounded-3xl -z-10 blur-xl opacity-60"
                    style={{ background: 'radial-gradient(circle, #649dcf 0%, rgba(220, 230, 240, 0) 70%)' }}
                  />

                  <img
                    src={slide.image}
                    alt={slide.heading}
                    className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = slide.fallbackImage;
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
