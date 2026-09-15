import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';
import { Sparkles } from 'lucide-react';

interface WelcomeLoaderProps {
  onComplete?: () => void;
  minDuration?: number; // Minimum display duration in ms (default: 1300ms for elegant brand presence)
}

export default function WelcomeLoader({ onComplete, minDuration = 1300 }: WelcomeLoaderProps) {
  const { isLight } = useTheme();
  const [phase, setPhase] = useState<'loading' | 'revealing' | 'complete'>('loading');
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
    }

    // Lock body scroll while loader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Smooth simulated progress up to ready state
    const startTime = performance.now();
    const duration = minDuration;

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        // Transition to revealing phase
        setPhase('revealing');
      }
    }, 20);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = originalOverflow;
    };
  }, [minDuration]);

  // When animation finishes, unmount and notify parent
  const handleRevealComplete = () => {
    setPhase('complete');
    document.body.style.overflow = '';
    if (onComplete) {
      onComplete();
    }
  };

  if (phase === 'complete') {
    return null;
  }

  // Animation variants for the diagonal parting panels
  const panelEase = [0.76, 0, 0.24, 1] as const;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[99999] pointer-events-auto overflow-hidden select-none"
    >
      {/* ========================================================================= */}
      {/* 1. TOP-LEFT DIAGONAL PANEL (Splits & slides toward Top-Left corner)       */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={
          phase === 'revealing'
            ? prefersReducedMotion
              ? { opacity: 0 }
              : { x: '-105%', y: '-105%' }
            : { x: 0, y: 0 }
        }
        transition={{
          duration: prefersReducedMotion ? 0.4 : 1.15,
          ease: panelEase,
          delay: 0.12,
        }}
        onAnimationComplete={() => {
          if (phase === 'revealing') {
            handleRevealComplete();
          }
        }}
        className={`absolute inset-0 w-full h-full ${
          isLight ? 'bg-[#faf6f0]' : 'bg-[#06121d]'
        }`}
        style={{
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      >
        {/* Subtle CAD grid texture inside panel */}
        <div className={`absolute inset-0 pointer-events-none ${isLight ? 'bg-blueprint-atelier-light opacity-70' : 'bg-cad-grid-dark opacity-60'}`} />

        {/* Diagonal Glowing Gold Seam on the Hypotenuse (From Top-Right to Bottom-Left) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 49.6%, rgba(208, 149, 84, 0.95) 49.9%, rgba(232, 196, 147, 1) 50.1%, transparent 50.4%)',
            filter: isLight
              ? 'drop-shadow(0 0 6px rgba(208,149,84,0.4))'
              : 'drop-shadow(0 0 10px rgba(208,149,84,0.7))',
          }}
        />
      </motion.div>

      {/* ========================================================================= */}
      {/* 2. BOTTOM-RIGHT DIAGONAL PANEL (Splits & slides toward Bottom-Right corner) */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={
          phase === 'revealing'
            ? prefersReducedMotion
              ? { opacity: 0 }
              : { x: '105%', y: '105%' }
            : { x: 0, y: 0 }
        }
        transition={{
          duration: prefersReducedMotion ? 0.4 : 1.15,
          ease: panelEase,
          delay: 0.12,
        }}
        className={`absolute inset-0 w-full h-full ${
          isLight ? 'bg-[#faf6f0]' : 'bg-[#06121d]'
        }`}
        style={{
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
        }}
      >
        {/* Subtle CAD grid texture inside panel */}
        <div className={`absolute inset-0 pointer-events-none ${isLight ? 'bg-blueprint-atelier-light opacity-70' : 'bg-cad-grid-dark opacity-60'}`} />

        {/* Diagonal Glowing Gold Seam on the Hypotenuse (From Top-Right to Bottom-Left) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 49.6%, rgba(208, 149, 84, 0.95) 49.9%, rgba(232, 196, 147, 1) 50.1%, transparent 50.4%)',
            filter: isLight
              ? 'drop-shadow(0 0 6px rgba(208,149,84,0.4))'
              : 'drop-shadow(0 0 10px rgba(208,149,84,0.7))',
          }}
        />
      </motion.div>

      {/* ========================================================================= */}
      {/* 3. CENTER BRAND MEDALLION & PROGRESS PRESENTATION                         */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {phase === 'loading' && (
          <motion.div
            key="center-brand-intro"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92, y: -10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 z-20 pointer-events-none"
          >
            {/* Ambient Back Glow */}
            <div className={`absolute w-72 h-72 rounded-full ${
              isLight ? 'bg-[#d09554]/18' : 'bg-[#d09554]/15'
            } blur-3xl pointer-events-none`} />

            {/* Logo Emblem Pedestal */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`p-4 sm:p-5 rounded-3xl ${
                isLight
                  ? 'bg-white border-2 border-[#d09554]/40 shadow-[0_16px_40px_rgba(208,149,84,0.22)]'
                  : 'bg-[#0a1b2d] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-1 ring-[#d09554]/40'
              } relative flex items-center justify-center mb-6`}
            >
              {/* Gold Top Accent Line */}
              <div className="absolute -top-px left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#d09554] to-transparent" />
              <img
                src="/super-logo.png"
                alt="Super International"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </motion.div>

            {/* Brand Title & Headline */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center space-y-2 max-w-md"
            >
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${
                isLight
                  ? 'bg-[#d09554]/12 border border-[#d09554]/30 text-[#8d561d]'
                  : 'bg-white/10 border border-white/20 text-[#f5d5a8]'
              } text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-2xs backdrop-blur-md`}>
                <Sparkles className="w-3 h-3 text-[#d09554]" />
                <span>Pioneering Precision Molding Since 1983</span>
              </div>

              <h1 className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tight ${
                isLight ? 'text-[#173554]' : 'text-white'
              }`}>
                Super International
              </h1>

              <p className={`text-xs sm:text-sm font-medium ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              } tracking-wide`}>
                Industrial &bull; Pharmaceutical &bull; Cosmetic Packaging
              </p>
            </motion.div>

            {/* Linear Shimmer Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 w-56 sm:w-64 space-y-2"
            >
              <div className="flex items-center justify-between text-[10px] font-mono font-bold">
                <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>INITIALIZING</span>
                <span className={isLight ? 'text-[#b87c3a]' : 'text-[#f5d5a8]'}>{progress}%</span>
              </div>

              <div className={`h-1.5 w-full rounded-full overflow-hidden ${
                isLight ? 'bg-black/8' : 'bg-white/15'
              } relative`}>
                <motion.div
                  className="h-full bg-gradient-to-r from-[#b8833f] via-[#d09554] to-[#deb075] rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

