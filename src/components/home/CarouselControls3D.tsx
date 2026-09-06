import React from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface CarouselControls3DProps {
  onPrev: () => void;
  onNext: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  currentIndex: number;
  totalSlides: number;
  category: string;
}

export const CarouselControls3D: React.FC<CarouselControls3DProps> = ({
  onPrev,
  onNext,
  isPlaying,
  onTogglePlay,
  currentIndex,
  totalSlides,
  category,
}) => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 bg-[#173554]/85 backdrop-blur-xl border border-white/15 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full shadow-lg">
      {/* Slide Counter */}
      <div className="flex items-center gap-1.5 px-2 font-mono text-xs text-white/80 font-medium">
        <span className="text-[#d09554] font-bold">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <span className="text-white/40">/</span>
        <span className="text-white/60">
          {String(totalSlides).padStart(2, '0')}
        </span>
      </div>

      <div className="h-4 w-px bg-white/15" />

      {/* Autoplay Play/Pause Toggle */}
      <button
        type="button"
        onClick={onTogglePlay}
        aria-label={isPlaying ? 'Pause automatic slide rotation' : 'Resume automatic slide rotation'}
        title={isPlaying ? 'Pause Autoplay' : 'Resume Autoplay'}
        className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d09554]"
      >
        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
      </button>

      {/* Previous Button */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous slide"
        title="Previous Slide"
        className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d09554]"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        title="Next Slide"
        className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d09554]"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
