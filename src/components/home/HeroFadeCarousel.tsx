import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { SlideData3D } from '../../types';
import { HeroSlide3D } from './HeroSlide3D';

interface HeroFadeCarouselProps {
  slides: SlideData3D[];
  autoplayDuration?: number;
  onOpenQuoteModal?: (productName?: string) => void;
  className?: string;
}

export default function HeroFadeCarousel({
  slides,
  autoplayDuration = 3200,
  onOpenQuoteModal,
  className = '',
}: HeroFadeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState<number>(96);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.getElementById('main-header');
      if (navbar) {
        const height = navbar.getBoundingClientRect().height;
        if (height > 0) {
          setNavbarHeight(height);
        }
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);

    let observer: ResizeObserver | null = null;
    const navbar = document.getElementById('main-header');
    if (navbar && typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(updateNavbarHeight);
      observer.observe(navbar);
    }

    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
      if (observer) observer.disconnect();
    };
  }, []);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Touch tracking for swipe gestures
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);
  const touchDeltaY = useRef<number>(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((targetIndex: number) => {
    setCurrentIndex(targetIndex);
  }, []);

  // Autoplay loop
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (isPlaying && !isHovered) {
      timerRef.current = setInterval(() => {
        goToNext();
      }, autoplayDuration);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPlaying, isHovered, currentIndex, autoplayDuration, goToNext]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrev();
    } else if (e.key === ' ') {
      e.preventDefault();
      setIsPlaying((prev) => !prev);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchDeltaX.current = 0;
    touchDeltaY.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    touchDeltaY.current = e.touches[0].clientY - touchStartY.current;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;
    const swipeThreshold = 45;

    if (touchDeltaX.current < -swipeThreshold) {
      goToNext();
    } else if (touchDeltaX.current > swipeThreshold) {
      goToPrev();
    }

    touchStartX.current = null;
    touchStartY.current = null;
    touchDeltaX.current = 0;
    touchDeltaY.current = 0;
  };

  // Theme background gradient
  const getThemeBackground = () => {
    const activeSlide = slides[currentIndex];
    switch (activeSlide.theme) {
      case 'amber-gold':
        return 'from-[#d09554]/8 via-[#f0f4f8] to-[#f8fafc]';
      case 'emerald-teal':
        return 'from-[#234d77]/8 via-[#f0f4f8] to-[#f8fafc]';
      case 'cyan-violet':
        return 'from-[#649dcf]/8 via-[#f0f4f8] to-[#f8fafc]';
      case 'indigo-blue':
      default:
        return 'from-[#234d77]/8 via-[#f0f4f8] to-[#f8fafc]';
    }
  };

  // Ultra-smooth Cross-Fade motion variants
  const fadeVariants = {
    enter: {
      opacity: 0,
      scale: 1.012,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
        scale: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
      },
    },
    exit: {
      opacity: 0,
      scale: 0.992,
      transition: {
        opacity: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
        scale: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      },
    },
  };

  const activeSlide = slides[currentIndex];

  return (
    <section
      id="hero-fade-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Industry Packaging Solutions"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        height: `calc(100vh - ${navbarHeight}px)`,
        minHeight: `calc(100vh - ${navbarHeight}px)`,
        maxHeight: `calc(100vh - ${navbarHeight}px)`,
      }}
      className={`relative w-full overflow-hidden bg-gradient-to-b ${getThemeBackground()} transition-colors duration-700 outline-none focus-visible:ring-2 focus-visible:ring-[#d09554] flex flex-col justify-between ${className}`}
    >
      {/* Background Ambient Dot Matrix & Mesh Glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(rgba(35, 77, 119, 0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-gradient-to-r from-[#234d77]/10 via-[#d09554]/8 to-[#234d77]/10 blur-[120px] rounded-full" />
      </div>

      {/* Screen Reader Live Announcement */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Slide {currentIndex + 1} of {slides.length}: {activeSlide.category}
      </div>

      {/* Main Slide Stage Area */}
      <div className="relative w-full h-full flex-1 overflow-hidden">
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full absolute inset-0"
            >
              <HeroSlide3D slide={activeSlide} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Minimalist Category Indicator (Shown on small screens) */}
        <div className="absolute bottom-5 left-0 right-0 flex sm:hidden justify-center items-center z-30 pointer-events-none px-4">
          <div className="pointer-events-auto flex items-center gap-2 bg-[#0c1e30]/90 backdrop-blur-xl border border-white/15 px-3 py-1.5 rounded-full shadow-lg">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${slide.category}`}
                  className="p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d09554] cursor-pointer"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-6 bg-[#d09554] shadow-[0_0_8px_rgba(208,149,84,0.6)]'
                        : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Tablet & Desktop Full Pill Category Navigation Bar (Hidden on mobile <640px) */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 right-0 hidden sm:flex justify-center items-center z-30 pointer-events-none px-4">
          <nav
            aria-label="Category Slides"
            className="pointer-events-auto max-w-full overflow-x-auto no-scrollbar flex items-center p-1.5 sm:p-2 bg-[#0c1e30]/85 sm:bg-[#0c1e30]/90 backdrop-blur-xl border border-white/15 rounded-full shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center gap-1 sm:gap-2">
              {slides.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={`relative flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-[13px] font-bold tracking-wider uppercase transition-all duration-300 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d09554] cursor-pointer ${
                      isActive
                        ? 'bg-[#d09554] text-[#0c1e30] shadow-[0_2px_12px_rgba(208,149,84,0.4)] scale-[1.02]'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {/* Active/Inactive Dot Indicator */}
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                        isActive ? 'bg-[#0c1e30]' : 'bg-white/40'
                      }`}
                    />
                    <span>{slide.category}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

