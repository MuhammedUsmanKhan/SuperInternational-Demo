import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Sparkles, 
  Calendar, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  Film,
  CheckCircle2,
  Tv
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

export interface EventVideoItem {
  id: number;
  title: string;
  subtitle: string;
  eventTag: string;
  venue: string;
  year: string;
  description: string;
  src: string;
  highlights: string[];
}

export const EXPO_EVENTS: EventVideoItem[] = [
  {
    id: 1,
    title: '3P Pakistan International Expo',
    subtitle: 'Plastic, Packaging & Print Exhibition',
    eventTag: '3P Expo 2025',
    venue: 'Karachi Expo Centre',
    year: 'Official Exhibition',
    description: 'Watch Super International live at the 3P Pakistan International Expo — showcasing high-precision blow molding, WHO-compliant cleanroom standards, and cutting-edge packaging design.',
    src: '/SUPER INTERNATIONAL 3P 25 EXPO.mp4',
    highlights: ['Extrusion Blow Molding', 'Cleanroom Standards', 'Live Exhibition Booth'],
  },
  {
    id: 2,
    title: 'Corporate Plant & Cleanroom Tour',
    subtitle: 'Automated Tooling & Manufacturing Facility',
    eventTag: 'Facility Tour',
    venue: 'North Karachi Industrial Area',
    year: 'Factory Showcase',
    description: 'Take a direct inside tour of Super International’s automated cleanroom facilities, robotic injection molding lines, and high-speed multi-cavity toolrooms.',
    src: '/SuperInternational-introduction.mp4',
    highlights: ['Robotic Injection', 'Quality Assurance Lab', 'GMP Pharma Production'],
  },
];

export default function TourVideo() {
  const { isLight } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const eventSliderRef = useRef<HTMLDivElement>(null);

  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const currentEvent = EXPO_EVENTS[activeEventIndex];

  // Autoplay and pause on viewport visibility
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
      { threshold: 0.2 }
    );

    if (videoWrapperRef.current) {
      observer.observe(videoWrapperRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [activeEventIndex]);

  // When switching event, load and play new video
  const handleSelectEvent = (idx: number) => {
    if (idx === activeEventIndex) return;
    setActiveEventIndex(idx);
    setIsLoaded(false);
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

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!eventSliderRef.current) return;
    const scrollAmount = direction === 'left' ? -320 : 320;
    eventSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      id="tour-video-section"
      ref={containerRef}
      className={`py-12 sm:py-16 ${
        isLight
          ? 'bg-gradient-to-br from-[#faf7f2] via-[#f1eae0] to-[#e8ddcc] text-slate-800 border-y border-[#d09554]/25'
          : 'bg-[#06121d] text-white border-y border-white/10'
      } relative overflow-hidden transition-colors duration-500`}
    >
      {/* Top Shimmer Hairline Divider */}
      <div className="absolute top-0 left-0 right-0 shimmer-hairline pointer-events-none" />

      {/* Architectural CAD Technical Blueprint Grid & Micro-Dot Matrix */}
      <div className={`absolute inset-0 pointer-events-none -z-10 ${isLight ? 'bg-blueprint-atelier-light opacity-80' : 'bg-cad-grid-dark opacity-80'}`} />

      {/* Atmospheric Diagonal Studio Auroras (Active exclusively in Light Mode) */}
      {isLight && (
        <>
          <div className="absolute -top-28 -left-28 w-[620px] h-[620px] bg-[#d09554]/16 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute -bottom-28 -right-28 w-[680px] h-[680px] bg-[#e8c493]/24 rounded-full blur-3xl pointer-events-none -z-10" />
        </>
      )}


      {/* Bottom Shimmer Hairline Divider */}
      <div className="absolute bottom-0 left-0 right-0 shimmer-hairline pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER: HIGHLIGHTING INDUSTRY EXPOS & EVENTS                  */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3"
        >
          {/* Top Event Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${
            isLight
              ? 'bg-[#d09554]/12 border border-[#d09554]/30 text-[#8d561d]'
              : 'bg-white/10 border border-white/20 text-[#f5d5a8]'
          } text-xs font-bold uppercase tracking-wider shadow-2xs backdrop-blur-md`}>
            <Sparkles className="w-3.5 h-3.5 text-[#d09554]" />
            <span>Industry Expos &bull; Corporate Events Showcase</span>
          </div>

          {/* Section Main Heading */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${isLight ? 'text-[#173554]' : 'text-white'} tracking-tight leading-tight`}>
            Pioneering Pakistan&apos;s <br className="hidden sm:inline" />
            <span className={isLight ? "text-transparent bg-clip-text bg-gradient-to-r from-[#173554] via-[#b87c3a] to-[#d09554]" : "text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f6d8b0] to-[#d09554]"}>
              Packaging Innovation Across Global Expos
            </span>
          </h2>

          <p className={`text-sm sm:text-base ${isLight ? 'text-slate-600' : 'text-slate-300'} leading-relaxed max-w-2xl mx-auto font-normal`}>
            Watch Super International live at premier industrial exhibitions, international trade expos, and specialized technical conferences across Pakistan and global markets.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. MAIN ACTIVE FEATURED EVENT VIDEO PLAYER STAGE (Frosted Glassmorphic)   */}
        {/* ========================================================================= */}
        <div className="w-full flex justify-center items-center">
          <div className={`w-full p-2.5 sm:p-4 rounded-3xl sm:rounded-[40px] ${
            isLight
              ? 'bg-white/95 backdrop-blur-xl border-t-2 border-t-[#d09554] border-x border-b border-[#d09554]/30 shadow-[0_30px_70px_rgba(208,149,84,0.18)]'
              : 'bg-white/[0.08] backdrop-blur-xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.5)]'
          }`}>
            <motion.div
              ref={videoWrapperRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#071320] shadow-[0_24px_60px_rgba(0,0,0,0.5)] border border-white/20 hover:border-[#d09554]/60 transition-colors duration-500 aspect-video group select-none"
            >
              {/* HTML5 Video Element */}
              <video
                key={currentEvent.src}
                ref={videoRef}
                src={currentEvent.src}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="auto"
                onTimeUpdate={handleTimeUpdate}
                onPlaying={() => setIsLoaded(true)}
                onClick={togglePlay}
                className={`w-full h-full object-cover cursor-pointer transition-opacity duration-500 ${
                  isLoaded ? 'opacity-100' : 'opacity-90'
                }`}
              />

              {/* Gradient Overlays for Readability */}
              <div 
                onClick={togglePlay}
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-auto cursor-pointer transition-opacity duration-300 group-hover:opacity-95" 
              />

              {/* Top Left Event Info Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#d09554] animate-pulse" />
                <span>{currentEvent.eventTag}</span>
                <span className="text-white/40">&bull;</span>
                <span className="text-white/80">{currentEvent.venue}</span>
              </div>

              {/* Top Right Live Indicator */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white text-xs font-mono font-medium pointer-events-none">
                <Film className="w-3.5 h-3.5 text-[#d09554]" />
                <span>Event {activeEventIndex + 1} of {EXPO_EVENTS.length}</span>
              </div>

              {/* Central Glowing Glass Play/Pause Indicator */}
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
                      aria-label={isPlaying ? 'Pause Event Video' : 'Play Event Video'}
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

              {/* Bottom Left Active Event Description & Highlight Pills */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 max-w-md lg:max-w-lg text-white pointer-events-none space-y-1.5">
                <div className="text-base sm:text-xl font-black drop-shadow-md tracking-tight">
                  {currentEvent.title}
                </div>
                <div className="text-xs sm:text-sm text-gray-200 drop-shadow-xs line-clamp-2">
                  {currentEvent.description}
                </div>
                <div className="hidden sm:flex flex-wrap items-center gap-1.5 pt-1">
                  {currentEvent.highlights.map((tag, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[10px] font-bold text-white tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Right Interactive Controls */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2 sm:gap-3 pointer-events-auto">
                {/* Play / Pause */}
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={togglePlay}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/65 hover:bg-[#d09554] text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all shadow-xl cursor-pointer"
                  aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                >
                  {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />}
                </motion.button>

                {/* Mute / Unmute */}
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={toggleSound}
                  className={`h-10 sm:h-11 px-3.5 sm:px-4 rounded-full backdrop-blur-md border flex items-center gap-2 text-xs font-bold transition-all shadow-xl cursor-pointer ${
                    isMuted
                      ? 'bg-black/65 hover:bg-black/85 text-white border-white/25'
                      : 'bg-[#d09554] hover:bg-[#e2aa6c] text-black border-white/35 font-extrabold'
                  }`}
                  aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-4 h-4 text-gray-300" />
                      <span className="hidden sm:inline">Unmute</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-black" />
                      <span className="hidden sm:inline">Sound On</span>
                    </>
                  )}
                </motion.button>

                {/* Fullscreen */}
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={toggleFullScreen}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/65 hover:bg-[#d09554] text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all shadow-xl cursor-pointer"
                  aria-label="Toggle Fullscreen"
                >
                  <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>

              {/* Bottom Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden pointer-events-none z-30">
                <div 
                  className="h-full bg-gradient-to-r from-[#d09554] via-[#e2aa6c] to-[#fcd34d] transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. INTERACTIVE MULTI-EVENT SELECTOR SLIDER CARDS                         */}
        {/* ========================================================================= */}
        <div className="mt-8 sm:mt-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Tv className="w-4 h-4 text-[#d09554]" />
              <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-wider ${isLight ? 'text-[#173554]' : 'text-[#f5d5a8]'}`}>
                Select Event Video To Watch ({EXPO_EVENTS.length} Available)
              </span>
            </div>

            {/* Slider Nav Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollSlider('left')}
                className={`w-8 h-8 rounded-full ${
                  isLight
                    ? 'bg-white hover:bg-[#faf5ec] text-[#173554] border border-[#d09554]/30 shadow-xs'
                    : 'bg-white/10 border border-white/20 hover:bg-white/20 text-white shadow-xs'
                } flex items-center justify-center transition-colors cursor-pointer`}
                aria-label="Previous Events"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollSlider('right')}
                className={`w-8 h-8 rounded-full ${
                  isLight
                    ? 'bg-white hover:bg-[#faf5ec] text-[#173554] border border-[#d09554]/30 shadow-xs'
                    : 'bg-white/10 border border-white/20 hover:bg-white/20 text-white shadow-xs'
                } flex items-center justify-center transition-colors cursor-pointer`}
                aria-label="Next Events"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Event Cards Row */}
          <div
            ref={eventSliderRef}
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-3 pt-1"
          >
            {EXPO_EVENTS.map((event, idx) => {
              const isActive = idx === activeEventIndex;
              return (
                <motion.div
                  key={event.id}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelectEvent(idx)}
                  className={`min-w-[280px] sm:min-w-[340px] max-w-[360px] p-4 sm:p-5 rounded-2xl sm:rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between select-none relative ${
                    isActive
                      ? isLight
                        ? 'bg-white text-slate-800 shadow-[0_14px_36px_rgba(208,149,84,0.22)] border-2 border-[#d09554] ring-4 ring-[#d09554]/20'
                        : 'bg-gradient-to-br from-[#173554] to-[#0c1e30] text-white shadow-[0_12px_32px_rgba(208,149,84,0.3)] border-2 border-[#d09554] ring-4 ring-[#d09554]/25'
                      : isLight
                      ? 'bg-white/95 hover:bg-white text-slate-800 border-t-2 border-t-[#d09554] border-x border-b border-[#d09554]/25 shadow-[0_8px_24px_rgba(208,149,84,0.08)] hover:border-t-[#e8c493] hover:shadow-[0_16px_36px_rgba(208,149,84,0.18)]'
                      : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 shadow-sm hover:border-[#d09554]/70'
                  }`}
                >
                  {/* Top Bar: Event Badge & Active Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                      isActive
                        ? isLight
                          ? 'bg-[#d09554] text-white shadow-2xs'
                          : 'bg-[#d09554] text-black'
                        : isLight
                        ? 'bg-[#faf5ec] text-[#8d561d] border border-[#d09554]/30'
                        : 'bg-white/15 text-[#f5d5a8]'
                    }`}>
                      {event.eventTag}
                    </span>

                    {isActive ? (
                      <span className={`flex items-center gap-1.5 text-[11px] font-bold ${isLight ? 'text-[#b87c3a]' : 'text-[#fcd34d]'}`}>
                        <span className="w-2 h-2 rounded-full bg-[#d09554] animate-ping" />
                        Now Playing
                      </span>
                    ) : (
                      <span className={`text-[11px] font-medium ${isLight ? 'text-slate-500' : 'text-slate-300'}`}>
                        {event.year}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1 mb-3">
                    <h3 className={`text-base sm:text-lg font-black tracking-tight leading-snug ${
                      isActive
                        ? isLight
                          ? 'text-[#173554]'
                          : 'text-white'
                        : isLight
                        ? 'text-[#173554]'
                        : 'text-white'
                    }`}>
                      {event.title}
                    </h3>
                    <p className={`text-xs ${
                      isActive
                        ? isLight
                          ? 'text-slate-600'
                          : 'text-gray-200'
                        : isLight
                        ? 'text-slate-600'
                        : 'text-slate-300'
                    }`}>
                      {event.subtitle}
                    </p>
                  </div>

                  {/* Bottom Location and Play Indicator */}
                  <div className={`pt-3 border-t flex items-center justify-between text-xs ${
                    isActive
                      ? isLight
                        ? 'border-[#d09554]/20 text-slate-700'
                        : 'border-white/20 text-gray-200'
                      : isLight
                      ? 'border-[#d09554]/15 text-slate-600'
                      : 'border-white/10 text-slate-300'
                  }`}>
                    <div className="flex items-center gap-1.5 truncate">
                      <MapPin className={`w-3.5 h-3.5 shrink-0 ${
                        isActive
                          ? isLight
                            ? 'text-[#d09554]'
                            : 'text-[#d09554]'
                          : isLight
                          ? 'text-[#b87c3a]'
                          : 'text-slate-400'
                      }`} />
                      <span className="truncate">{event.venue}</span>
                    </div>

                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ml-2 transition-transform duration-200 ${
                      isActive
                        ? isLight
                          ? 'bg-[#d09554] text-white scale-105 shadow-xs'
                          : 'bg-[#d09554] text-black scale-105'
                        : isLight
                        ? 'bg-[#faf5ec] text-[#173554] border border-[#d09554]/30'
                        : 'bg-white/15 text-white'
                    }`}>
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Upcoming Event Teaser Card */}
            <div className={`min-w-[260px] sm:min-w-[290px] p-4 sm:p-5 rounded-2xl sm:rounded-3xl ${
              isLight
                ? 'bg-white/60 border border-dashed border-[#d09554]/40 text-slate-600'
                : 'bg-white/[0.04] border border-dashed border-white/20 text-slate-300'
            } flex flex-col justify-center items-center text-center p-6 space-y-2 shrink-0`}>
              <Calendar className="w-8 h-8 text-[#d09554]" />
              <div className={`text-sm font-bold ${isLight ? 'text-[#173554]' : 'text-white'}`}>More Expos Coming Soon</div>
              <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'} max-w-[200px]`}>
                New footage from upcoming international packaging trade fairs will be added here.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

