import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'motion/react';

export default function TourVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const prefersReducedMotion = useReducedMotion();

  // Track scroll position of the TourVideo section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 90%', 'center center'],
  });

  // Smooth cinematic spring interpolation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    mass: 0.6,
  });

  // Scroll-based growth transformations
  const dynamicScale = useTransform(smoothProgress, [0, 1], [0.86, 1]);
  const dynamicOpacity = useTransform(smoothProgress, [0, 0.4], [0.55, 1]);
  const dynamicY = useTransform(smoothProgress, [0, 1], [40, 0]);

  // Autoplay and pause on viewport visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => {
              setIsPlaying(true);
            }).catch(() => {
              // Autoplay with muted fallback if blocked
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
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
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
        (video as any).webkitEnterFullscreen(); // iOS Safari native player
      }
    }
  };

  return (
    <section
      id="tour-video-section"
      ref={containerRef}
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#f2f6fa] to-white text-[#222222] relative overflow-hidden"
    >
      {/* Subtle ambient lighting effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#234d77]/10 to-[#649dcf]/15 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3.5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f4f8] border border-[#dce6f0] text-[#234d77] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#649dcf]" />
            <span>3P Pakistan Expo &bull; Industry Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222] tracking-tight leading-tight">
            Pioneering Pakistan's <br className="hidden sm:inline" />
            <span className="text-[#234d77]">Packaging Innovation</span>
          </h2>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-2xl mx-auto font-normal">
            Watch Super International at the 3P Pakistan International Expo — showcasing high-precision blow molding, WHO-compliant cleanroom standards, and cutting-edge packaging design.
          </p>
        </motion.div>

        {/* Scroll-Animated Video Wrapper */}
        <div className="w-full flex justify-center items-center">
          <motion.div
            ref={videoWrapperRef}
            style={
              prefersReducedMotion
                ? {}
                : {
                    scale: dynamicScale,
                    opacity: dynamicOpacity,
                    y: dynamicY,
                  }
            }
            className="relative w-full max-w-6xl xl:max-w-7xl rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-2 sm:border-4 border-white/90 aspect-video group"
          >
            {/* The Provided Video Asset */}
            <video
              ref={videoRef}
              src="/SUPER INTERNATIONAL 3P 25 EXPO.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="auto"
              onPlaying={() => setIsLoaded(true)}
              onClick={togglePlay}
              className={`w-full h-full object-cover transition-opacity duration-700 cursor-pointer ${
                isLoaded ? 'opacity-100' : 'opacity-85'
              }`}
            />

            {/* Subtle Gradient Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

            {/* Top Info Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#649dcf] animate-pulse" />
              <span>Super International Pvt Ltd &bull; 3P Expo</span>
            </div>

            {/* Bottom Left Description */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 hidden sm:block max-w-md text-white pointer-events-none">
              <div className="text-base sm:text-lg font-bold drop-shadow-md">
                3P Pakistan International Expo
              </div>
              <div className="text-xs text-gray-300 drop-shadow-xs">
                Plastic, Packaging &amp; Print Exhibition &bull; Karachi Expo Centre
              </div>
            </div>

            {/* Interactive Control Floating Pill */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2 sm:gap-3">
              
              {/* Play / Pause Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                onClick={togglePlay}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/65 hover:bg-[#234d77] text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all shadow-xl cursor-pointer"
                aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                )}
              </motion.button>

              {/* Sound Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                onClick={toggleSound}
                className={`h-10 sm:h-12 px-3.5 sm:px-4 rounded-full backdrop-blur-md border flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all shadow-xl cursor-pointer ${
                  isMuted
                    ? 'bg-black/65 hover:bg-black/85 text-white border-white/25'
                    : 'bg-[#234d77] hover:bg-[#1a3d5e] text-white border-white/35'
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
                    <Volume2 className="w-4 h-4 text-white" />
                    <span className="hidden sm:inline">Muted</span>
                  </>
                )}
              </motion.button>

              {/* Fullscreen Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                onClick={toggleFullScreen}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/65 hover:bg-black/85 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all shadow-xl cursor-pointer"
                aria-label="Toggle Fullscreen"
              >
                <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
