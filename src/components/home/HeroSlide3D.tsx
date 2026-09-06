import React from 'react';
import { motion } from 'motion/react';
import type { SlideData3D } from '../../types';

interface HeroSlide3DProps {
  slide: SlideData3D;
}

export const HeroSlide3D: React.FC<HeroSlide3DProps> = ({ slide }) => {
  return (
    <div
      className="w-full relative overflow-hidden flex items-center justify-center aspect-[16/9] max-h-[820px] mx-auto"
      style={{ background: 'linear-gradient(135deg, #10273d 0%, #173554 40%, #0c1d2e 100%)' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <img
          src={slide.image}
          alt={slide.category}
          className="w-full h-full object-contain sm:object-cover object-center select-none"
          loading="eager"
          onError={(e) => {
            (e.target as HTMLImageElement).style.opacity = '0.3';
          }}
        />
      </motion.div>
    </div>
  );
};
