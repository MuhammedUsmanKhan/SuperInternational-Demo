import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Gauge,
  Factory
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WelcomeSectionProps {
  onOpenQuoteModal?: (prefill?: string) => void;
}

const WELCOME_MACHINES = [
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % WELCOME_MACHINES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? WELCOME_MACHINES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % WELCOME_MACHINES.length);
  };

  const currentMachine = WELCOME_MACHINES[currentSlide];

  return (
    <section 
      id="welcome-section" 
      className="py-18 sm:py-24 bg-gradient-to-b from-white via-[#fbfcfe] to-[#f4f7fa] text-[#222222] relative overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#d09554]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#234d77]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173554] tracking-tight leading-tight">
                Welcome to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#234d77] via-[#173554] to-[#d09554]">
                  Super International
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed font-normal">
                Super International Pvt Ltd stands as one of Pakistan's finest plastic packaging manufacturers, setting the industry benchmark for uncompromised quality and technical innovation. Globally recognized for excellence, we deliver world-class packaging solutions that strictly comply with World Health Organization (WHO) certifications, making us a trusted partner across international markets. Every product we design is crafted with precision and engineered to meet the highest performance standards—because at Super International, our products define quality only.
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
                  <div className="text-xs sm:text-sm font-bold text-[#173554]">Automated Cleanrooms</div>
                  <p className="text-[11px] sm:text-xs text-[#666666] mt-0.5 leading-snug">Dust-free medical grade cosmetic &amp; pharma bottling.</p>
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
          {/* Right Column: Modern Interactive Machine Carousel with Exact Name Badges */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 space-y-4"
          >
            {/* Main Stage Frame */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(23,53,84,0.25)] border-4 border-white bg-slate-900 aspect-[16/11] group select-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Image Transition Viewport */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMachine.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
                  className="w-full h-full relative"
                >
                  <img
                    src={currentMachine.src}
                    alt={currentMachine.fullName}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />

                  {/* High-End Ambient Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* TOP EMBLEM: Machine Category Tag & Index Counter */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-2 shadow-md">
                  <Factory className="w-3.5 h-3.5 text-[#d09554]" />
                  <span className="text-[#fcd34d] uppercase tracking-wider text-[11px]">{currentMachine.tag}</span>
                </div>

                <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold shadow-md">
                  0{currentMachine.id} / 0{WELCOME_MACHINES.length}
                </div>
              </div>

              {/* BOTTOM STRIP: Exact Machine Name & Description Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`desc-${currentMachine.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="p-4 sm:p-5 rounded-2xl bg-[#0c1d2e]/85 backdrop-blur-xl border border-white/15 shadow-2xl space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-[#d09554] shrink-0" />
                      <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                        {currentMachine.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                      {currentMachine.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Previous Machine"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Next Machine"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Interactive Machine Selection Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1">
              {WELCOME_MACHINES.map((machine, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={machine.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-[#234d77] text-white shadow-md scale-102 ring-2 ring-[#d09554]'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80 hover:text-slate-900'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#d09554]' : 'bg-slate-400'}`} />
                    <span>{machine.title}</span>
                  </button>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

