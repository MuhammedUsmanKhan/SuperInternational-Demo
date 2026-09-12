import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize,
  Film
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import StatCards from './StatCards';

interface WelcomeSectionProps {
  onOpenQuoteModal?: (prefill?: string) => void;
}

export const WELCOME_MACHINES = [
  {
    id: 1,
    title: 'Blow Moulding',
    fullName: 'Blow Moulding Machine',
    tag: 'Extrusion Blow',
    src: '/Blow-moulding.jpg',
    description: 'High-speed automated continuous extrusion for pharmaceutical, cosmetic, and chemical bottles.',
  },
  {
    id: 2,
    title: 'Injection Blow Moulding',
    fullName: 'Injection Blow Moulding (IBM)',
    tag: 'Pharma Precision',
    src: '/injection-blow-moulding.jpg',
    description: 'Seamless container molding with zero flash, calibrated neck threading, and uniform wall thickness.',
  },
  {
    id: 3,
    title: 'Injection Moulding Machine',
    fullName: 'Injection Moulding Machine',
    tag: 'High-Tonnage Moulding',
    src: '/injection-moulding-machine.jpg',
    description: 'Heavy-duty robotic injection molding for double-wall cosmetic jars, luxury caps, and closures.',
  },
  {
    id: 4,
    title: 'Accume Forming Machine',
    fullName: 'Accume Forming Machine',
    tag: 'Thermoforming / Vacuum',
    src: '/Accume-forming-machine.jpg',
    description: 'Specialized vacuum forming for medical blister trays, ampoule holders, and custom product inserts.',
  },
  {
    id: 5,
    title: 'CNC Center',
    fullName: 'CNC Machining Center & Toolroom',
    tag: 'In-House Tooling',
    src: '/cnc-center.jpg',
    description: 'High-precision 3-axis & 5-axis CNC mold cutting, EDM wire machining, and rapid tooling prototyping.',
  },
  {
    id: 6,
    title: 'Printing Machine',
    fullName: 'High-Precision Printing Machine',
    tag: 'Surface Decoration',
    src: '/printing-machine.jpg',
    description: 'Multicolor automatic screen printing, foil hot-stamping, and in-mold labeling (IML) application.',
  },
];

export default function WelcomeSection({ onOpenQuoteModal }: WelcomeSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  // Smooth auto-play on scroll visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {
                // Browser auto-play policy fallback
                video.muted = true;
                setIsMuted(true);
                video.play().catch(() => {});
              });
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (videoWrapperRef.current) {
      observer.observe(videoWrapperRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const toggleFullScreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      if (video.requestFullscreen) {
        video.requestFullscreen().catch(() => {});
      } else if ((video as any).webkitRequestFullscreen) {
        (video as any).webkitRequestFullscreen();
      } else if ((video as any).webkitEnterFullscreen) {
        (video as any).webkitEnterFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  return (
    <section 
      id="welcome-section" 
      className="py-12 sm:py-16 bg-gradient-to-b from-[#fbfcfe] via-[#f4f7fa] to-[#edf3f8] text-[#222222] relative overflow-hidden"
    >
      {/* Precision Blueprint Dot Matrix Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 -z-10" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(35, 77, 119, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient background glow accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#d09554]/6 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#234d77]/6 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ========================================================================= */}
          {/* Left Column: 40+ Experience, Heading, Story, Highlights                   */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* 40+ Experience Badge with Golden Pedestal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 sm:gap-5"
            >
              <div className="relative flex items-center justify-center shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-[#fbf7f0] to-[#f5ebd9] border border-[#d09554]/50 flex flex-col items-center justify-center text-center shadow-[0_10px_25px_rgba(208,149,84,0.18)]">
                  <span className="text-2xl sm:text-3xl font-black text-[#173554] leading-none tracking-tight">
                    40+
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#b8833f] mt-1">
                    Years Exp.
                  </span>
                </div>
                {/* Subtle top gold accent glow */}
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#d09554] animate-ping opacity-70" />
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#d09554]" />
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fcf6ec] border border-[#ecd4b4] text-[#b8833f] text-xs font-bold uppercase tracking-wider shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#d09554]" />
                  <span>Since 1983 in Pakistan</span>
                </div>
                <div className="text-sm sm:text-base font-extrabold text-[#173554] tracking-tight">
                  Pioneering Industrial &amp; Medical Packaging
                </div>
              </div>
            </motion.div>

            {/* Main Welcome Heading & Exact Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3.5"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#173554] leading-[1.18]">
                Welcome To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#234d77] via-[#173554] to-[#d09554]">Super International</span>
              </h2>

              <p className="text-base sm:text-[17px] text-[#444444] leading-relaxed font-normal">
                Super International is a premier plastic injection and blow molding packaging manufacturing company in Karachi, Pakistan.
              </p>

              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                With four decades of specialized tooling and manufacturing excellence, we engineer high-precision plastic jars, pharmaceutical bottles, precision caps, closures, and custom medical trays trusted by Pakistan&apos;s leading pharmaceutical, cosmetics, and FMCG brands.
              </p>
            </motion.div>

            {/* Value Highlights Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1"
            >
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3 hover:border-[#234d77]/40 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#234d77]/10 text-[#234d77] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#173554]">ISO 9001:2015 &amp; GMP</div>
                  <p className="text-[11px] sm:text-xs text-[#666666] mt-0.5 leading-snug">Cleanroom medical and food-grade safety standards.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3 hover:border-[#d09554]/50 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#d09554]/15 text-[#b8833f] flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#173554]">In-House Tooling</div>
                  <p className="text-[11px] sm:text-xs text-[#666666] mt-0.5 leading-snug">Rapid mold prototyping, CAD/CAM CNC machining.</p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pt-2 flex flex-wrap items-center gap-3.5"
            >
              <button
                onClick={() => onOpenQuoteModal && onOpenQuoteModal('Factory Inquiry')}
                className="btn-premium-primary px-6 sm:px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#d09554] via-[#dc9f5e] to-[#d09554] text-[#173554] text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_8px_20px_rgba(208,149,84,0.3)] active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-white/25"
              >
                <span className="relative z-10">Inquire With Our Engineers</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
              </button>

              <a
                href="#categories-section"
                className="btn-premium-secondary px-6 py-3.5 rounded-2xl bg-white text-[#173554] text-xs sm:text-sm font-bold border border-slate-200/90 shadow-2xs transition-all flex items-center gap-1.5"
              >
                <span className="relative z-10">View Packaging Range</span>
              </a>
            </motion.div>

          </div>

          {/* ========================================================================= */}
          {/* Right Column: Premium Company Introduction Video Card                     */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div
              ref={videoWrapperRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative rounded-3xl sm:rounded-[32px] overflow-hidden shadow-[0_24px_60px_-15px_rgba(23,53,84,0.35)] border-4 border-white bg-[#0b1b2b] aspect-[16/10] sm:aspect-[16/10.5] group select-none"
            >
              {/* HTML5 High-Performance Video Element */}
              <video
                ref={videoRef}
                src="/SuperInternational-introduction.mp4"
                playsInline
                loop
                muted={isMuted}
                autoPlay
                preload="metadata"
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                className="w-full h-full object-cover object-center cursor-pointer transition-transform duration-700 group-hover:scale-[1.01]"
              />

              {/* Ambient Dark-Glass Vignette Overlay */}
              <div 
                onClick={togglePlay}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-auto cursor-pointer" 
              />

              {/* Top Floating Badge: Corporate Overview */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-full bg-[#0c1e30]/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-2 shadow-lg">
                  <Film className="w-3.5 h-3.5 text-[#d09554]" />
                  <span className="text-[#fcd34d] uppercase tracking-wider text-[11px]">Corporate Introduction</span>
                </div>

                <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-semibold shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Factory Tour</span>
                </div>
              </div>

              {/* Central Glowing Glass Play/Pause Indicator (Fades out when playing, appears on pause/hover) */}
              <AnimatePresence>
                {(!isPlaying || isHovered) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.2 }}
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                  >
                    <button
                      type="button"
                      aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-white flex items-center justify-center shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto cursor-pointer group/btn"
                    >
                      {isPlaying ? (
                        <Pause className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white" />
                      ) : (
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1" />
                      )}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Interactive Glass Controls Strip */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-3 pointer-events-none">
                <div className="flex items-center gap-2 pointer-events-auto">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    className="w-9 h-9 rounded-full bg-black/60 hover:bg-[#d09554] backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer hover:scale-105"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>

                  {/* Sound Toggle Button */}
                  <button
                    onClick={toggleSound}
                    className="w-9 h-9 rounded-full bg-black/60 hover:bg-[#d09554] backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer hover:scale-105"
                    aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Right Fullscreen Button */}
                <div className="pointer-events-auto">
                  <button
                    onClick={toggleFullScreen}
                    className="w-9 h-9 rounded-full bg-black/60 hover:bg-[#d09554] backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer hover:scale-105"
                    aria-label="Fullscreen"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bottom Video Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden pointer-events-none z-30">
                <div 
                  className="h-full bg-gradient-to-r from-[#d09554] to-[#fcd34d] transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* STATS CARDS (Manufacturing Excellence, Units, Certifications, Export)    */}
        {/* ========================================================================= */}
        <StatCards className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-slate-200/80" />

      </div>
    </section>
  );
}
