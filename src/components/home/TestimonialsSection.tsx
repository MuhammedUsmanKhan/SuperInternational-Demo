import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TestimonialItem {
  id: number;
  brand: string;
  rating: string;
  quote: string;
  avatar: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    brand: 'Hemani',
    rating: '\u2B50\u2B50\u2B50\u2B50\u2B50',
    quote:
      '\u201CWorking with Super International Pvt. Ltd. has been a seamless experience. Their commitment to quality, professionalism, and customer satisfaction aligns perfectly with our brand values. We appreciate their efficient service and look forward to a long-term partnership!\u201D',
    avatar: 'https://noorenterprises.com.pk/wp-content/uploads/2023/03/cl4.png',
  },
  {
    id: 2,
    brand: 'Unilever',
    rating: '\u2B50\u2B50\u2B50\u2B50\u2B50',
    quote:
      '\u201CSuper International Pvt. Ltd. has been a reliable partner in delivering high-quality products with exceptional service. Their dedication to maintaining top-notch standards and ensuring timely delivery makes them stand out in the industry.\u201D',
    avatar: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/unilever-vector-logo.png',
  },
  {
    id: 3,
    brand: 'Olivia',
    rating: '\u2B50\u2B50\u2B50\u2B50\u2B50',
    quote:
      '\u201CSuper International Pvt. Ltd. has been a reliable partner in delivering high-quality products with exceptional service. Their dedication to maintaining top-notch standards and ensuring timely delivery makes them stand out in the industry.\u201D',
    avatar: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/21-removebg-preview.png',
  },
];

const FLOATING_CIRCLES = [
  {
    id: 1,
    src: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/unilever-vector-logo.png',
    alt: 'Unilever',
    style: {
      width: '100px',
      height: '100px',
      top: '25px',
      right: '180px',
      padding: '18px',
    },
  },
  {
    id: 2,
    src: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/21-removebg-preview.png',
    alt: 'Olivia',
    style: {
      width: '75px',
      height: '75px',
      top: '120px',
      right: '410px',
      padding: '12px',
    },
  },
  {
    id: 3,
    src: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/logo-1.png',
    alt: 'Hemani',
    style: {
      width: '75px',
      height: '75px',
      top: '180px',
      right: '150px',
      padding: '12px',
    },
  },
  {
    id: 4,
    src: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/36-removebg-preview.png',
    alt: 'Parley',
    style: {
      width: '90px',
      height: '90px',
      top: '230px',
      right: '290px',
      padding: '12px',
    },
  },
  {
    id: 5,
    src: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/39-removebg-preview.png',
    alt: 'Conatural',
    style: {
      width: '75px',
      height: '75px',
      top: '330px',
      right: '450px',
      padding: '10px',
    },
  },
  {
    id: 6,
    src: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/t6.png',
    alt: 'Golden Pearl',
    style: {
      width: '130px',
      height: '130px',
      top: '350px',
      right: '170px',
      padding: '16px',
    },
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonial-sec"
      className="testimonial-sec relative w-full lg:h-[575px] min-h-[575px] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(90deg, #fdf6ee 0%, #f0f4f8 50%)' }}
    >
      {/* Animated gold particles background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#d09554]/10 animate-pulse"
            style={{
              width: `${20 + i * 12}px`,
              height: `${20 + i * 12}px`,
              top: `${10 + i * 15}%`,
              left: `${5 + i * 18}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-0 right-0 bottom-0 pointer-events-none z-0 overflow-hidden w-full md:w-[58%] lg:w-[56%]">
        <svg
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          className="w-full h-full block absolute inset-0"
        >
          <defs>
            <linearGradient id="testimonialWaveGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#234d77" />
              <stop offset="35%" stopColor="#1a3d5e" />
              <stop offset="50%" stopColor="#d09554" stopOpacity="0.15" />
              <stop offset="65%" stopColor="#1a3d5e" />
              <stop offset="100%" stopColor="#173554" />
            </linearGradient>
          </defs>
          <path
            d="M 120 0 C 100 90, 0 180, 0 300 C 0 420, 130 510, 190 600 L 1000 600 L 1000 0 Z"
            fill="#1a3d5e"
          />
          <path
            d="M 120 0 C 100 90, 0 180, 0 300 C 0 420, 130 510, 190 600 L 1000 600 L 1000 0 Z"
            fill="url(#testimonialWaveGrad)"
          />
        </svg>

        {/* Subtle radial depth gradient replacing the purple background image */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background: 'radial-gradient(ellipse 80% 70% at 70% 50%, rgba(35,77,119,0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full items-center min-h-[575px]">
          
          <div className="hidden md:block md:col-span-6 relative h-[575px] w-full">
            <div className="testimonial-imgs relative w-full h-full">
              <ul className="list-unstyled relative w-full h-full m-0 p-0">
                {FLOATING_CIRCLES.map((bubble) => (
                  <li
                    key={bubble.id}
                    className="absolute rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110"
                    style={{
                      ...bubble.style,
                      display: 'flex',
                      background: 'rgba(255,255,255,0.65)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255,255,255,0.5)',
                      boxShadow: '0 8px 32px rgba(35,77,119,0.1), inset 0 1px 0 rgba(255,255,255,0.6)',
                    }}
                  >
                    <a href="#clients-section" aria-label="testimonial" className="w-full h-full flex items-center justify-center">
                      <img
                        src={bubble.src}
                        alt={bubble.alt}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex items-center justify-center md:justify-start py-12 md:py-0 px-6 sm:px-10 lg:pl-16 lg:pr-12">
            <div className="w-full max-w-[520px] text-white">
              
              {/* Gold accent line */}
              <div className="w-16 h-[3px] bg-gradient-to-r from-[#d09554] to-[#e8c493] rounded-full mb-5" />
              
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2 leading-tight">
                Trusted by Leading Brands
              </h3>
              <p className="text-base sm:text-lg font-normal text-white/60 mb-6">
                Hear from our valued partners worldwide
              </p>

              {/* Testimonial counter */}
              <div className="flex items-center gap-2 mb-5">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25 }}
                    className="text-sm font-bold text-[#d09554] tabular-nums"
                  >
                    0{currentIndex + 1}
                  </motion.span>
                </AnimatePresence>
                <span className="text-sm text-white/30">/</span>
                <span className="text-sm text-white/30">0{TESTIMONIALS.length}</span>
              </div>

              {/* Glass testimonial card */}
              <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-7 min-h-[220px] relative overflow-hidden">
                {/* Gold left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#d09554] via-[#d09554]/60 to-transparent rounded-full" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="space-y-5"
                  >
                    {/* Quote text (hero content) */}
                    <p className="text-[15px] sm:text-[16px] italic leading-relaxed text-white/85 font-light pl-4">
                      {current.quote}
                    </p>

                    {/* Signature row */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ring-2 ring-[#d09554]/40 shadow-[0_0_16px_rgba(208,149,84,0.15)] shrink-0">
                          <img
                            src={current.avatar}
                            alt={current.brand}
                            className="w-10 h-10 object-contain"
                            onError={(e) => {
                              (e.target as HTMLElement).style.opacity = '0.5';
                            }}
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-sm sm:text-base uppercase text-white tracking-wider m-0 leading-tight truncate">
                            {current.brand}
                          </p>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-3.5 h-3.5 text-[#d09554]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination dots */}
              <div className="flex items-center gap-2.5 mt-6">
                {TESTIMONIALS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      currentIndex === idx
                        ? 'w-8 h-2.5 bg-[#d09554] shadow-[0_0_8px_rgba(208,149,84,0.4)]'
                        : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
