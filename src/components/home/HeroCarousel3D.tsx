import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { SlideData3D } from '../../types';
import { HeroSlide3D } from './HeroSlide3D';
import { PaginationDots3D } from './PaginationDots3D';
import { CarouselControls3D } from './CarouselControls3D';

interface HeroCarousel3DProps {
  slides: SlideData3D[];
  autoplayDuration?: number;
  onOpenQuoteModal?: (productName?: string) => void;
  className?: string;
}

export default function HeroCarousel3D({
  slides,
  autoplayDuration = 5500,
  onOpenQuoteModal,
  className = '',
}: HeroCarousel3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Touch tracking for swipe gestures
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);
  const touchDeltaY = useRef<number>(0);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback(
    (targetIndex: number) => {
      if (targetIndex === currentIndex) return;
      setDirection(targetIndex > currentIndex ? 1 : -1);
      setCurrentIndex(targetIndex);
    },
    [currentIndex]
  );

  // Autoplay
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

  // 3D Circular motion variants (exactly as modern-hero-banner)
  const slideVariants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? 55 : -55,
      z: -280,
      x: dir > 0 ? 160 : -160,
      opacity: 0,
      scale: 0.88,
    }),
    center: {
      rotateY: 0,
      z: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -55 : 55,
      z: -280,
      x: dir > 0 ? -160 : 160,
      opacity: 0,
      scale: 0.88,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const activeSlide = slides[currentIndex];

  return (
    <section
      id="hero-carousel-3d"
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
      className={`relative w-full overflow-hidden bg-gradient-to-b ${getThemeBackground()} transition-colors duration-700 outline-none focus-visible:ring-2 focus-visible:ring-[#d09554] ${className}`}
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
      <div
        className="relative w-full"
        style={{ perspective: '1200px' }}
      >
        {/* Slide Stage with 3D support */}
        <div
          className="relative w-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeSlide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <HeroSlide3D slide={activeSlide} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Carousel Controls */}
        <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-0 right-0 flex flex-col items-center gap-1.5 sm:gap-2.5 z-30 pointer-events-none">
          {/* Pagination Dots - Centered */}
          <div className="pointer-events-auto transform scale-[0.78] sm:scale-90 md:scale-100 origin-bottom">
            <PaginationDots3D
              slides={slides}
              currentIndex={currentIndex}
              onSelect={goToSlide}
              autoplayDuration={autoplayDuration}
              isPlaying={isPlaying && !isHovered}
            />
          </div>

          {/* Controls - Centered */}
          <div className="pointer-events-auto transform scale-[0.78] sm:scale-90 md:scale-100 origin-bottom">
            <CarouselControls3D
              onPrev={goToPrev}
              onNext={goToNext}
              isPlaying={isPlaying}
              onTogglePlay={() => setIsPlaying((prev) => !prev)}
              currentIndex={currentIndex}
              totalSlides={slides.length}
              category={activeSlide.category}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
