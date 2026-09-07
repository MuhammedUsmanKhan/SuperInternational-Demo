import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import type { SlideData3D } from '../../types';
import { HeroSlide3D } from './HeroSlide3D';

interface HeroScrollStoryProps {
  slides: SlideData3D[];
  onOpenQuoteModal?: (productName?: string) => void;
}

export default function HeroScrollStory({ slides, onOpenQuoteModal }: HeroScrollStoryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [navbarHeight, setNavbarHeight] = useState<number>(96);
  const isAnimatingRef = useRef(false);
  const lastTransitionTimeRef = useRef<number>(0);
  const isWheelIdleRef = useRef<boolean>(true);
  const wheelIdleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const touchStartY = useRef<number | null>(null);

  // Dynamically calculate navbar height for pixel-perfect 100vh viewport fit on desktop
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.getElementById('main-header');
      if (navbar) {
        const height = navbar.getBoundingClientRect().height;
        if (height > 0) {
          setNavbarHeight(height);
          document.documentElement.style.setProperty('--navbar-height', `${height}px`);
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

  const total = slides.length;
  const ANIMATION_DURATION = 650; // ms
  const COOLDOWN_LOCK = 850; // ms to swallow all momentum inertia

  const goToNext = useCallback(() => {
    const now = Date.now();
    if (isAnimatingRef.current || now - lastTransitionTimeRef.current < COOLDOWN_LOCK) {
      return false;
    }

    if (currentIndex < total - 1) {
      isAnimatingRef.current = true;
      lastTransitionTimeRef.current = now;
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);

      setTimeout(() => {
        isAnimatingRef.current = false;
      }, ANIMATION_DURATION);
      return true;
    }
    return false;
  }, [currentIndex, total]);

  const goToPrev = useCallback(() => {
    const now = Date.now();
    if (isAnimatingRef.current || now - lastTransitionTimeRef.current < COOLDOWN_LOCK) {
      return false;
    }

    if (currentIndex > 0) {
      isAnimatingRef.current = true;
      lastTransitionTimeRef.current = now;
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);

      setTimeout(() => {
        isAnimatingRef.current = false;
      }, ANIMATION_DURATION);
      return true;
    }
    return false;
  }, [currentIndex]);

  const goToSlide = useCallback((targetIndex: number) => {
    const now = Date.now();
    if (targetIndex === currentIndex || isAnimatingRef.current || now - lastTransitionTimeRef.current < COOLDOWN_LOCK) {
      return;
    }

    isAnimatingRef.current = true;
    lastTransitionTimeRef.current = now;
    setDirection(targetIndex > currentIndex ? 1 : -1);
    setCurrentIndex(targetIndex);

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, ANIMATION_DURATION);
  }, [currentIndex]);

  // Window Wheel Listener: One Scroll Gesture = Exactly One Slide
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Reset wheel idle timer (detects when user lifts fingers / momentum ends)
      if (wheelIdleTimerRef.current) {
        clearTimeout(wheelIdleTimerRef.current);
      }
      wheelIdleTimerRef.current = setTimeout(() => {
        isWheelIdleRef.current = true;
      }, 140);

      // Only engage the carousel lock when page is at the very top
      if (scrollY <= 8) {
        if (e.deltaY > 0) {
          // DOWNWARD SCROLL
          if (currentIndex < total - 1) {
            // STRICT PREVENT DEFAULT: Screen NEVER moves downward
            e.preventDefault();

            const now = Date.now();
            const timeSinceLast = now - lastTransitionTimeRef.current;

            // Only allow transition if cooldown has passed AND user made intentional gesture
            if (
              !isAnimatingRef.current &&
              timeSinceLast >= COOLDOWN_LOCK &&
              isWheelIdleRef.current &&
              Math.abs(e.deltaY) >= 15
            ) {
              isWheelIdleRef.current = false;
              goToNext();
            }
          }
          // On last slide (currentIndex === total - 1), let natural scroll proceed to next section
        } else if (e.deltaY < 0) {
          // UPWARD SCROLL
          if (currentIndex > 0) {
            // STRICT PREVENT DEFAULT: Screen stays locked at top
            e.preventDefault();

            const now = Date.now();
            const timeSinceLast = now - lastTransitionTimeRef.current;

            // Only allow transition if cooldown has passed AND user made intentional gesture
            if (
              !isAnimatingRef.current &&
              timeSinceLast >= COOLDOWN_LOCK &&
              isWheelIdleRef.current &&
              Math.abs(e.deltaY) >= 15
            ) {
              isWheelIdleRef.current = false;
              goToPrev();
            }
          }
          // On first slide (currentIndex === 0), let natural upward scroll proceed
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (wheelIdleTimerRef.current) {
        clearTimeout(wheelIdleTimerRef.current);
      }
    };
  }, [currentIndex, total, goToNext, goToPrev]);

  // Mobile Touch Gestures: Strict Single-Swipe Advancement
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const deltaY = touchStartY.current - e.touches[0].clientY;

      if (scrollY <= 8) {
        if (deltaY > 0 && currentIndex < total - 1) {
          if (e.cancelable) e.preventDefault();
        } else if (deltaY < 0 && currentIndex > 0) {
          if (e.cancelable) e.preventDefault();
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;

      if (scrollY <= 8) {
        if (deltaY > 35 && currentIndex < total - 1) {
          goToNext();
        } else if (deltaY < -35 && currentIndex > 0) {
          goToPrev();
        }
      }
      touchStartY.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, total, goToNext, goToPrev]);

  const scrollToNextSection = () => {
    if (currentIndex < total - 1) {
      goToNext();
    } else {
      const target =
        document.getElementById('banner-section') ||
        document.getElementById('welcome-section') ||
        document.getElementById('our-products-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // 3D slide transition animation in both directions
  const slideVariants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? 45 : -45,
      z: -180,
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      rotateY: 0,
      z: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -45 : 45,
      z: -180,
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.92,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const activeSlide = slides[currentIndex];

  return (
    <section
      ref={heroRef}
      id="hero-scroll-story"
      className="relative w-full overflow-hidden select-none bg-[#0c1d2e] flex flex-col justify-between"
      style={{
        height: `calc(100vh - ${navbarHeight}px)`,
        minHeight: `calc(100vh - ${navbarHeight}px)`,
        maxHeight: `calc(100vh - ${navbarHeight}px)`,
        touchAction: 'none',
      }}
    >
      {/* Ambient Backdrop Glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(rgba(100, 157, 207, 0.4) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#234d77]/20 via-[#d09554]/15 to-[#234d77]/20 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* 3D Banner Stage */}
      <div
        className="relative w-full h-full flex-1 overflow-hidden"
        style={{ perspective: '1400px' }}
      >
        <div
          className="relative w-full h-full"
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
              className="w-full h-full"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <HeroSlide3D
                slide={activeSlide}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Bottom Milestone Indicators - Hidden on mobile for clean full-bleed banner display */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-0 right-0 hidden sm:flex flex-col items-center gap-1.5 sm:gap-2 z-30 pointer-events-none">
          
          {/* Milestone Category Buttons */}
          <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0c1d2e]/90 backdrop-blur-2xl border border-white/20 shadow-2xl scale-95 md:scale-100">
            {slides.map((slide, idx) => {
              const isActive = currentIndex === idx;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`group flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                    isActive
                      ? 'bg-[#d09554] text-black shadow-md font-bold'
                      : 'text-white/70 hover:text-white hover:bg-white/10 font-medium'
                  }`}
                  aria-label={`Go to ${slide.category}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive ? 'bg-black' : 'bg-white/40 group-hover:bg-white'
                    }`}
                  />
                  <span className="text-xs sm:text-[13px] uppercase tracking-wider">
                    {slide.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Scroll Cue Button */}
          <button
            type="button"
            onClick={scrollToNextSection}
            className="pointer-events-auto flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-white/70 hover:text-white transition-colors uppercase tracking-widest pt-0.5 group cursor-pointer"
          >
            <span>
              {currentIndex < total - 1
                ? `Scroll down to advance banner (${currentIndex + 1}/${total})`
                : 'Scroll down to explore website ↓'}
            </span>
            <ChevronDown className="w-4 h-4 text-[#d09554] animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
}
