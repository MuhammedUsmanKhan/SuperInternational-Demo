import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Star,
  Award,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface VideoTestimonial {
  id: number;
  clientName: string;
  designation: string;
  company: string;
  industry: string;
  brandLogo: string;
  avatar: string;
  videoSrc: string;
  duration: string;
  rating: number;
  highlight: string;
  takeaway: string;
  metrics: { label: string; value: string }[];
  contractType: string;
}

const CLIENT_VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 1,
    clientName: 'Mustafa Hemani',
    designation: 'Chief Executive Officer',
    company: 'Hemani Herbal & Beauty Group',
    industry: 'Cosmetics & Luxury Skincare',
    brandLogo: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/logo-1.png',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    videoSrc: '/SuperInternational-introduction.mp4',
    duration: '2:40 Min',
    rating: 5,
    highlight: 'Flawless Luxury Gold Hot-Stamping & Hermetic Integrity',
    takeaway:
      'Super International engineered our double-wall cosmetic jars with micron-level acoustic seals and precision hot-stamping. Their packaging consistency across millions of units has been fundamental to our brand’s export expansion into 35+ countries.',
    metrics: [
      { label: 'Partnership', value: '12+ Years' },
      { label: 'Quality Pass Rate', value: '99.8%' },
      { label: 'Export Markets', value: '35+ Countries' },
    ],
    contractType: 'Enterprise Contract &bull; Custom Molds',
  },
  {
    id: 2,
    clientName: 'Tariq Al-Mansoor',
    designation: 'VP of Global Supply Chain',
    company: 'Unilever FMCG Division',
    industry: 'Global FMCG & Personal Care',
    brandLogo: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/unilever-vector-logo.png',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    videoSrc: '/SUPER INTERNATIONAL 3P 25 EXPO.mp4',
    duration: '3:15 Min',
    rating: 5,
    highlight: '98% Reduction in Automated High-Speed Filling Downtime',
    takeaway:
      'In high-speed robotic bottling, bottle neck tolerances make or break production efficiency. Super International’s automated blow-molding eliminated variance and reduced filling-line stoppage by 98% across 14 million bottles shipped annually.',
    metrics: [
      { label: 'Annual Throughput', value: '14M+ Units' },
      { label: 'Downtime Reduced', value: '98%' },
      { label: 'On-Time Delivery', value: '99.9%' },
    ],
    contractType: 'High-Volume Production &bull; Certified HDPE',
  },
  {
    id: 3,
    clientName: 'Ayesha Tariq',
    designation: 'Head of Brand Aesthetics',
    company: 'Olivia Cosmetics International',
    industry: 'Beauty & Skincare Formulations',
    brandLogo: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/21-removebg-preview.png',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    videoSrc: '/SuperInternational-introduction.mp4',
    duration: '2:10 Min',
    rating: 5,
    highlight: 'Prestige Editorial Heft & Bespoke Double-Wall Acrylic Jars',
    takeaway:
      'The bespoke luxury jars crafted by Super International gave our premium skincare collection the exact tactile heft and pristine clarity of European packaging houses at a remarkably fast local development cycle.',
    metrics: [
      { label: 'Custom SKUs', value: '50+ Molds' },
      { label: 'Leakage Rate', value: '0.00%' },
      { label: 'Finish', value: 'Silk Gold Foil' },
    ],
    contractType: 'Exclusive Tooling &bull; Luxury Line',
  },
  {
    id: 4,
    clientName: 'Dr. Farhan Roomi',
    designation: 'Director of Quality Assurance',
    company: 'Roomi Group Pharmaceuticals',
    industry: 'Pharmaceuticals & Healthcare',
    brandLogo: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/roomi-logo-1.png',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    videoSrc: '/SUPER INTERNATIONAL 3P 25 EXPO.mp4',
    duration: '3:00 Min',
    rating: 5,
    highlight: 'Strict WHO GMP Cleanroom Compliance & Certified Virgin Polymers',
    takeaway:
      'Super International strictly satisfies WHO GMP standards. Their ISO-certified cleanroom injection lines and 100% virgin medical-grade polymers provide the chemical inertness and tamper evidence critical for our syrup and tablet lines.',
    metrics: [
      { label: 'Cleanroom Standard', value: 'Class 100k' },
      { label: 'Leak Tested', value: '100% Batch' },
      { label: 'Compliance', value: 'WHO / ISO' },
    ],
    contractType: 'Medical-Grade Compliance &bull; Tamper Seals',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);

  const activeTestimonial = CLIENT_VIDEO_TESTIMONIALS[activeIndex];
  const total = CLIENT_VIDEO_TESTIMONIALS.length;

  // Auto-play when scrolled into view (with audio muted for browser policy)
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
      { threshold: 0.3 }
    );

    if (videoWrapperRef.current) {
      observer.observe(videoWrapperRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [activeIndex]);

  const handleSelectClient = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setProgress(0);
  };

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
      id="testimonials-section"
      className="py-12 sm:py-16 bg-gradient-to-b from-[#081422] via-[#0d2136] to-[#081422] text-white relative overflow-hidden border-y border-white/10"
    >
      {/* Technical Blueprint Dot Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 -z-10" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(208, 149, 84, 0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient background lighting effects */}
      <div className="absolute top-1/3 left-1/4 w-[750px] h-[500px] bg-[#234d77]/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[750px] h-[500px] bg-[#d09554]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER (Matching Exact Metallic Gradient & Pill Badge)         */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#f5d5a8] text-xs font-bold uppercase tracking-wider shadow-2xs backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#d09554]" />
            <span>Authentic Client Experiences &bull; Video Endorsements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            What Industry Leaders Say <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f6d8b0] to-[#d09554]">
              About Our Manufacturing Quality
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Hear directly from CEOs, supply chain directors, and quality heads about how Super International’s zero-defect tooling and cleanroom packaging power their global supply chains.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. MAIN FEATURED CLIENT VIDEO STAGE (Two-Column Masterpiece)              */}
        {/* ========================================================================= */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#0c1c2e] border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Left Column: High-End Video Player */}
              <div
                ref={videoWrapperRef}
                className="lg:col-span-7 relative bg-[#091522] min-h-[320px] sm:min-h-[420px] lg:min-h-[490px] flex items-center justify-center overflow-hidden group"
              >
                <video
                  ref={videoRef}
                  key={activeTestimonial.videoSrc}
                  src={activeTestimonial.videoSrc}
                  loop
                  playsInline
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-cover object-center"
                />

                {/* Top Video Status Overlay */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Client Video Testimonial</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-medium shadow-xs">
                    <Clock className="w-3 h-3 text-[#d09554]" />
                    <span>{activeTestimonial.duration}</span>
                  </div>
                </div>

                {/* Center Big Glassmorphism Play Button on Hover/Paused */}
                <button
                  onClick={togglePlay}
                  className={`absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform cursor-pointer ${
                    isPlaying ? 'opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100' : 'opacity-100 scale-100'
                  }`}
                  aria-label={isPlaying ? 'Pause Testimonial Video' : 'Play Testimonial Video'}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white" />
                  ) : (
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-[#d09554] ml-1" />
                  )}
                </button>

                {/* Bottom Video Controls Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 sm:p-5 flex flex-col gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Progress Line */}
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#234d77] to-[#d09554] transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-white text-xs pt-1">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="hover:text-[#d09554] transition-colors cursor-pointer"
                        aria-label="Toggle Play"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={toggleSound}
                        className="hover:text-[#d09554] transition-colors flex items-center gap-1.5 cursor-pointer"
                        aria-label="Toggle Sound"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                        <span className="text-[11px]">{isMuted ? 'Unmute' : 'Muted'}</span>
                      </button>
                    </div>

                    <button
                      onClick={toggleFullScreen}
                      className="hover:text-[#d09554] transition-colors cursor-pointer"
                      aria-label="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Executive Partner Dossier */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#0c1c2e] text-white border-t lg:border-t-0 lg:border-l border-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-5"
                  >
                    {/* Top Ratings & Verified Tag */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                      <div className="flex items-center gap-1.5 bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#d09554] text-[#d09554]" />
                        ))}
                        <span className="text-[11px] font-bold text-[#f5d5a8] ml-1">5.0 Verified Video Case</span>
                      </div>

                      <div className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-white/10 px-2.5 py-1 rounded-full">
                        <CheckCircle className="w-3 h-3 text-[#d09554]" />
                        <span>{activeTestimonial.industry}</span>
                      </div>
                    </div>

                    {/* Partner Header with Logo & Avatar */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-white border border-white/20 shadow-xs shrink-0">
                        <img
                          src={activeTestimonial.avatar}
                          alt={activeTestimonial.clientName}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="space-y-0.5">
                        <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                          {activeTestimonial.clientName}
                        </h3>
                        <div className="text-xs font-bold text-[#d09554] uppercase tracking-wider">
                          {activeTestimonial.designation}
                        </div>
                        <div className="text-xs font-medium text-slate-300">
                          {activeTestimonial.company}
                        </div>
                      </div>
                    </div>

                    {/* Headline Highlight */}
                    <div className="text-base sm:text-lg font-black text-white leading-snug tracking-tight">
                      &ldquo;{activeTestimonial.highlight}&rdquo;
                    </div>

                    {/* Video Takeaway Summary */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {activeTestimonial.takeaway}
                    </p>

                    {/* Key Verification Metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {activeTestimonial.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-center"
                        >
                          <div className="text-xs sm:text-sm font-black text-[#d09554]">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-slate-300 font-semibold mt-0.5 leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Navigator & Slide Switcher */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    <span>0{activeIndex + 1}</span>
                    <span className="text-white/30 mx-1.5">/</span>
                    <span>0{total}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#d09554] hover:text-black text-white flex items-center justify-center shadow-2xs transition-all cursor-pointer"
                      aria-label="Previous Video Case"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#d09554] hover:text-black text-white flex items-center justify-center shadow-2xs transition-all cursor-pointer"
                      aria-label="Next Video Case"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 3. INTERACTIVE CLIENT VIDEO SELECTOR REELS                                 */}
        {/* ========================================================================= */}
        <div className="mt-8 sm:mt-10 w-full">
          <div className="text-xs font-bold text-[#f5d5a8] uppercase tracking-wider mb-4 flex items-center gap-2">
            <Award className="w-4 h-4 text-[#d09554]" />
            <span>Select Enterprise Video Case:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CLIENT_VIDEO_TESTIMONIALS.map((client, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={client.id}
                  onClick={() => handleSelectClient(idx)}
                  className={`relative p-4 rounded-2xl transition-all duration-300 cursor-pointer border flex items-center gap-3.5 ${
                    isActive
                      ? 'bg-gradient-to-br from-[#173554] to-[#0c1e30] text-white border-[#d09554] shadow-lg shadow-[#d09554]/25 scale-102 ring-2 ring-[#d09554]/30'
                      : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border-white/15 shadow-2xs hover:border-[#d09554]/60'
                  }`}
                >
                  {/* Thumbnail Avatar with Play Icon Overlay */}
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/20">
                    <img
                      src={client.avatar}
                      alt={client.clientName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play
                        className={`w-4 h-4 fill-current ${
                          isActive ? 'text-[#d09554]' : 'text-white'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="overflow-hidden min-w-0 flex-1">
                    <div className="text-xs font-black truncate tracking-tight text-white">
                      {client.clientName}
                    </div>
                    <div
                      className={`text-[11px] truncate ${
                        isActive ? 'text-[#d09554]' : 'text-slate-300'
                      }`}
                    >
                      {client.company}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {client.duration}
                    </div>
                  </div>

                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#d09554] shadow-[0_0_8px_#d09554] shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
