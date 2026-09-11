import React from 'react';
import { motion } from 'motion/react';
import type { SlideData3D } from '../../types';

interface HeroSlide3DProps {
  slide: SlideData3D;
}

export const HeroSlide3D: React.FC<HeroSlide3DProps> = ({ slide }) => {
  return (
    <div
      className="w-full h-full relative overflow-hidden flex items-center justify-center mx-auto select-none bg-gradient-to-b from-[#0e2238] via-[#122b46] to-[#0a192c]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
        className="w-full h-full relative z-10"
      >
        <img
          src={slide.image}
          alt={slide.category}
          className="w-full h-full object-cover object-right sm:object-[88%_center] lg:object-right select-none"
          loading="eager"
          onError={(e) => {
            (e.target as HTMLImageElement).style.opacity = '0.3';
          }}
        />
      </motion.div>
    </div>
  );
};


