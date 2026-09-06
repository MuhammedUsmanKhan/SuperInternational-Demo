import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Sparkles, ShieldCheck, Cpu, ArrowUpRight, X, Layers, CheckCircle2 } from 'lucide-react';
import type { SlideData3D, Hotspot3D } from '../../types';

interface HeroSlide3DProps {
  slide: SlideData3D;
  onOpenQuoteModal?: (productName?: string) => void;
}

export const HeroSlide3D: React.FC<HeroSlide3DProps> = ({ slide, onOpenQuoteModal }) => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot3D | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt / parallax physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);
  const translateX = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);
  const translateY = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full relative overflow-hidden flex items-center justify-center aspect-[16/9] max-h-[820px] mx-auto select-none group"
      style={{
        background: 'linear-gradient(135deg, #0d2135 0%, #173554 45%, #0c1d2e 100%)',
        perspective: '1400px',
      }}
    >
      {/* 3D Motion Stage */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Main Banner Image with subtle parallax */}
        <motion.div
          style={{ x: translateX, y: translateY }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <img
            src={slide.image}
            alt={slide.category}
            className="w-full h-full object-contain sm:object-cover object-center pointer-events-none"
            loading="eager"
            onError={(e) => {
              (e.target as HTMLImageElement).style.opacity = '0.3';
            }}
          />
        </motion.div>

        {/* Ambient Industrial Grid & Vignette Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-black/10"
        />

        {/* Top-Right Live Engineering HUD Badge */}
        <div className="absolute top-3 sm:top-5 right-3 sm:right-6 z-20 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10273d]/80 backdrop-blur-md border border-white/15 text-white shadow-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d09554] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d09554]" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-white/90">
              {slide.trustSignals?.[0]?.text || 'ISO 9001:2015 Certified'}
            </span>
            <span className="hidden md:inline-block text-white/30">•</span>
            <span className="hidden md:inline-block text-[11px] font-medium text-[#d09554]">
              ±0.02mm CNC Tolerance
            </span>
          </motion.div>
        </div>

        {/* Interactive Hotspot Beacon Pins */}
        {slide.hotspots && slide.hotspots.length > 0 && (
          <div className="absolute inset-0 z-20 pointer-events-none">
            {slide.hotspots.map((hotspot, idx) => {
              const isSelected = activeHotspot?.id === hotspot.id;

              return (
                <div
                  key={hotspot.id}
                  className="absolute pointer-events-auto"
                  style={{
                    left: `${hotspot.x}%`,
                    top: `${hotspot.y}%`,
                    transform: 'translate(-50%, -50%) translateZ(35px)',
                  }}
                >
                  {/* Glowing Hotspot Button */}
                  <motion.button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(isSelected ? null : hotspot);
                    }}
                    onMouseEnter={() => setActiveHotspot(hotspot)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Inspect ${hotspot.title}`}
                    className="relative group/pin flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d09554]"
                  >
                    {/* Outer Pulsing Ping Ring */}
                    <span className="absolute -inset-1 rounded-full bg-[#d09554]/30 animate-ping opacity-75" />

                    {/* Outer Glow Halo */}
                    <span className="absolute inset-0 rounded-full bg-[#d09554]/40 blur-xs transition-opacity group-hover/pin:bg-[#d09554]/70" />

                    {/* Core Button Circle */}
                    <span
                      className={`relative z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white border transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#d09554] border-white shadow-[0_0_15px_rgba(208,149,84,0.8)]'
                          : 'bg-[#173554]/90 hover:bg-[#d09554] border-white/40 shadow-md backdrop-blur-md'
                      }`}
                    >
                      <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white animate-pulse" />
                    </span>

                    {/* Micro Number Badge */}
                    <span className="absolute -top-1 -right-1 z-20 w-3.5 h-3.5 bg-black/80 text-[#d09554] text-[8px] font-bold rounded-full flex items-center justify-center border border-white/20">
                      {idx + 1}
                    </span>
                  </motion.button>

                  {/* Hotspot Spec Popup Tooltip Card */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.92 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className={`absolute z-40 w-64 sm:w-72 p-3.5 rounded-2xl bg-[#0c1d2e]/95 backdrop-blur-xl border border-white/20 text-white shadow-[0_20px_40px_rgba(0,0,0,0.45)] ${
                          hotspot.x > 70 ? 'right-0 sm:right-auto sm:-left-36' : 'left-0 sm:-left-12'
                        } ${hotspot.y > 60 ? 'bottom-full mb-3' : 'top-full mt-3'}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-1.5">
                            {hotspot.badge && (
                              <span className="px-2 py-0.5 rounded-md bg-[#d09554]/20 border border-[#d09554]/40 text-[#e8c493] text-[10px] font-bold uppercase tracking-wider">
                                {hotspot.badge}
                              </span>
                            )}
                            {hotspot.metric && (
                              <span className="px-1.5 py-0.5 rounded-md bg-white/10 text-white/80 text-[10px] font-mono font-medium">
                                {hotspot.metric}
                              </span>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveHotspot(null)}
                            className="p-1 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Title & Subtitle */}
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                          {hotspot.title}
                        </h4>
                        {hotspot.subtitle && (
                          <p className="text-[11px] text-[#649dcf] font-medium mb-1">
                            {hotspot.subtitle}
                          </p>
                        )}

                        {/* Description */}
                        <p className="text-[11px] text-white/75 leading-relaxed mb-2.5">
                          {hotspot.detail}
                        </p>

                        {/* Action CTA inside Hotspot */}
                        <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>100% Quality Inspected</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setActiveHotspot(null);
                              onOpenQuoteModal?.(`${slide.category} - ${hotspot.title}`);
                            }}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#d09554] hover:bg-[#e0a462] text-black font-bold text-[10px] transition-all shadow-md active:scale-95"
                          >
                            <span>Inquire Spec</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Left Hotspot Inspector Status */}
        <div className="absolute bottom-2 sm:bottom-4 left-3 sm:left-6 z-20 pointer-events-none hidden sm:flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/80 text-[10px] font-medium flex items-center gap-1.5 shadow-lg">
            <Layers className="w-3 h-3 text-[#d09554]" />
            <span>Interactive Industrial Spec Viewer &bull; {slide.hotspots?.length || 3} Points</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
