import React from 'react';
import { motion } from 'motion/react';
import type { SlideData3D } from '../../types';

interface PaginationDots3DProps {
  slides: SlideData3D[];
  currentIndex: number;
  onSelect: (index: number) => void;
  autoplayDuration: number;
  isPlaying: boolean;
}

export const PaginationDots3D: React.FC<PaginationDots3DProps> = ({
  slides,
  currentIndex,
  onSelect,
  autoplayDuration,
  isPlaying,
}) => {
  return (
    <nav
      aria-label="Carousel slide pagination"
      className="flex items-center gap-2 sm:gap-2.5 bg-[#173554]/85 backdrop-blur-xl border border-white/15 px-3.5 py-2 rounded-full shadow-lg"
    >
      {slides.map((slide, idx) => {
        const isActive = idx === currentIndex;

        return (
          <button
            key={slide.id}
            type="button"
            onClick={() => onSelect(idx)}
            aria-label={`Go to slide ${idx + 1}: ${slide.category}`}
            aria-current={isActive ? 'true' : 'false'}
            className="group relative flex items-center justify-center p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d09554] rounded-full"
          >
            <div
              className={`h-2.5 rounded-full transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? 'w-8 sm:w-10 bg-white/20'
                  : 'w-2.5 sm:w-3 bg-white/30 group-hover:bg-white/50'
              }`}
            >
              {isActive && (
                <motion.div
                  key={`progress-${currentIndex}-${isPlaying}`}
                  initial={{ width: '0%' }}
                  animate={{ width: isPlaying ? '100%' : '100%' }}
                  transition={{
                    duration: isPlaying ? autoplayDuration / 1000 : 0.2,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#d09554] via-[#e8c493] to-[#d09554] rounded-full"
                />
              )}
            </div>

            <span className="sr-only">
              Slide {idx + 1} of {slides.length}: {slide.category}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
