import React from 'react';
import { motion } from 'motion/react';
import type { SlideData3D } from '../../types';

interface HeroSlide3DProps {
  slide: SlideData3D;
}

export const HeroSlide3D: React.FC<HeroSlide3DProps> = ({ slide }) => {
  return (
    <div
      className="w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]"
      style={{ background: 'linear-gradient(135deg, #173554 0%, #234d77 40%, #1a3d5e 100%)' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full"
      >
        <img
          src={slide.image}
          alt={slide.category}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.opacity = '0.3';
          }}
        />
      </motion.div>
    </div>
  );
};
