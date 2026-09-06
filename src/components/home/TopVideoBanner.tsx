import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { motion } from 'motion/react';

export default function TopVideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const videoSrc = 'https://noorenterprises.com.pk/wp-content/uploads/2026/08/Final-Video-With-Description-1.mp4';
  const fallbackVideo = 'https://assets.mixkit.co/videos/preview/mixkit-automated-machine-in-a-factory-42861-large.mp4';

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, []);

  return (
    <section id="topBannerVideo" className="w-full px-3 sm:px-5 lg:px-8 pb-8 pt-4 bg-white relative">
      <div className="max-w-[1740px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-[0_10px_35px_rgba(0,0,0,0.12)] aspect-video max-h-[720px]"
        >
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            onPlaying={() => setIsLoaded(true)}
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== fallbackVideo) {
                target.src = fallbackVideo;
                target.load();
                target.play().catch(() => {});
              }
            }}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-90'
            }`}
          />

          {/* Video Control Buttons */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2.5">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-colors shadow-lg cursor-pointer"
              aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleSound}
              id="videoSoundToggle"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-colors shadow-lg cursor-pointer text-base"
              aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </motion.button>
          </div>

          {/* Plant identifier badge */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white/90 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#234d77] animate-pulse" />
            <span>Automated Production Facility &bull; Super International Pvt. Ltd.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
