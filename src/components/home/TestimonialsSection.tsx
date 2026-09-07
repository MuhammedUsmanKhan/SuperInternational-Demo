import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles, Building2, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ExecutiveTestimonial {
  id: number;
  clientName: string;
  designation: string;
  company: string;
  brandLogo: string;
  rating: number;
  highlight: string;
  quote: string;
  industry: string;
}

const TESTIMONIALS_DATA: ExecutiveTestimonial[] = [
  {
    id: 1,
    clientName: 'Mustafa Hemani',
    designation: 'Chief Executive Officer',
    company: 'Hemani Herbal & Beauty Group',
    brandLogo: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/logo-1.png',
    rating: 5,
    highlight: 'Flawless Luxury Gold Hot-Stamping & Hermetic Integrity',
    quote:
      'Working with Super International Pvt Ltd has been an extraordinary milestone for our worldwide cosmetic range. Their commitment to micron-level tolerance, leak-proof acoustic seals, and flawless luxury gold hot-stamping sets them apart as the preeminent packaging manufacturer in the region.',
    industry: 'Cosmetics & Wellness',
  },
  {
    id: 2,
    clientName: 'Tariq Al-Mansoor',
    designation: 'VP of Global Supply Chain',
    company: 'Unilever FMCG Division',
    brandLogo: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/unilever-vector-logo.png',
    rating: 5,
    highlight: '98% Reduction in Automated Filling Line Downtime',
    quote:
      'In high-speed personal care manufacturing, bottle deformities and wall thickness inconsistencies can halt our automated filling lines. Super International’s precision blow-molding reduced our filling-line downtime by 98% across 14 million units shipped annually.',
    industry: 'Global FMCG Leader',
  },
  {
    id: 3,
    clientName: 'Ayesha Tariq',
    designation: 'Head of Brand Aesthetics',
    company: 'Olivia Cosmetics International',
    brandLogo: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/21-removebg-preview.png',
    rating: 5,
    highlight: 'Prestige Editorial Heft & Luxury Acrylic Finish',
    quote:
      'The bespoke double-wall acrylic jars crafted by Super International gave our prestige skincare line the exact editorial elegance and tactile heft of high-end European packaging houses at a significantly more agile production schedule.',
    industry: 'Skincare & Cosmetics',
  },
  {
    id: 4,
    clientName: 'Dr. Farhan Roomi',
    designation: 'Director of Quality Assurance',
    company: 'Roomi Group Pharmaceuticals',
    brandLogo: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/roomi-logo-1.png',
    rating: 5,
    highlight: 'Strict WHO Compliance & Zero-Contamination Cleanrooms',
    quote:
      'Super International strictly complies with WHO and ISO standards. Their cleanroom blow-molding and certified virgin polymers give our medical syrups and tablet containers the chemical inertness and tamper evidence our healthcare products demand.',
    industry: 'Pharmaceuticals & Health',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = TESTIMONIALS_DATA.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex]);

  const activeTestimonial = TESTIMONIALS_DATA[activeIndex];

  return (
    <section
      id="testimonials-section"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f4f7fa] text-[#222222] relative overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#234d77]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-[#d09554]/6 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3.5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f4f8] border border-[#dce6f0] text-[#234d77] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#d09554]" />
            <span>Executive Endorsements &bull; Client Trust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222] tracking-tight leading-tight">
            What Industry Leaders Say <br className="hidden sm:inline" />
            <span className="text-[#234d77]">About Our Quality</span>
          </h2>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-2xl mx-auto font-normal">
            From multinational FMCG giants to premier pharmaceutical brands, discover why leading enterprises trust Super International as their primary packaging manufacturer.
          </p>
        </motion.div>

        {/* Featured Interactive Testimonial Card */}
        <div
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(35,77,119,0.14)] p-6 sm:p-10 md:p-14 overflow-hidden">
            
            {/* Ambient Watermark Quote Icon */}
            <div className="absolute top-6 right-8 sm:top-10 sm:right-12 pointer-events-none text-[#234d77]/8 select-none">
              <Quote className="w-28 h-28 sm:w-36 sm:h-36" />
            </div>

            {/* Top Rating & Highlight Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 relative z-10">
              <div className="flex items-center gap-1.5 bg-[#fef8ee] border border-[#faecd8] px-3.5 py-1.5 rounded-full">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d09554] text-[#d09554]" />
                ))}
                <span className="text-xs font-bold text-[#b8833f] ml-1">5.0 Verified Client</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0f4f8] text-[#234d77] text-xs font-bold">
                <CheckCircle className="w-3.5 h-3.5 text-[#234d77]" />
                <span>{activeTestimonial.industry}</span>
              </div>
            </div>

            {/* Testimonial Highlight Title & Quote Body */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 sm:space-y-6 relative z-10"
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#173554] leading-snug tracking-tight">
                  &ldquo;{activeTestimonial.highlight}&rdquo;
                </div>

                <p className="text-sm sm:text-base md:text-lg text-[#4b5563] leading-relaxed font-normal">
                  {activeTestimonial.quote}
                </p>

                {/* Author & Brand Details */}
                <div className="pt-6 sm:pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Brand Logo Avatar */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center p-2.5 shrink-0">
                      <img
                        src={activeTestimonial.brandLogo}
                        alt={activeTestimonial.company}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>

                    <div className="space-y-0.5">
                      <div className="text-base sm:text-lg font-bold text-[#1f2937]">
                        {activeTestimonial.clientName}
                      </div>
                      <div className="text-xs sm:text-sm text-[#234d77] font-semibold">
                        {activeTestimonial.designation} &bull; <span className="text-[#6b7280]">{activeTestimonial.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Slide Indicators */}
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    {TESTIMONIALS_DATA.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-2.5 rounded-full transition-all duration-400 cursor-pointer ${
                          idx === activeIndex
                            ? 'w-8 bg-[#234d77]'
                            : 'w-2.5 bg-[#234d77]/25 hover:bg-[#234d77]/50'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Navigation Controls Bar */}
          <div className="mt-8 flex items-center justify-between px-2">
            <div className="text-xs font-bold text-[#6b7280] uppercase tracking-wider">
              <span>0{activeIndex + 1}</span>
              <span className="text-slate-300 mx-1.5">/</span>
              <span>0{total}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 text-[#173554] hover:bg-[#234d77] hover:text-white hover:border-[#234d77] flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 text-[#173554] hover:bg-[#234d77] hover:text-white hover:border-[#234d77] flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
