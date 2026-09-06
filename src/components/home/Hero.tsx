import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sliders, Box, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import HeroScene from '../three/HeroScene';
import { HERO_CONFIG } from '../../data/mockData';

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

const HERO_VIDEOS = [
  {
    id: 1,
    title: 'Extrusion Blow Molding Machines',
    tagline: 'Automated High-Speed Multi-Layer Production Lines',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-automated-machine-in-a-factory-42861-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=85',
  },
  {
    id: 2,
    title: 'High-Speed Precision Injection Systems',
    tagline: 'Multi-Cavity Pharmaceutical & Cosmetic Closures',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-an-industrial-machine-working-42863-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=85',
  },
];

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState<'video' | '3d'>('video');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 3D model configurations
  const [modelConfig, setModelConfig] = useState({
    modelPath: HERO_CONFIG.modelPath,
    scale: HERO_CONFIG.defaultScale,
    position: HERO_CONFIG.defaultPosition,
    rotation: HERO_CONFIG.defaultRotation,
    autoRotate: true,
  });
  const [show3DConfigPanel, setShow3DConfigPanel] = useState(false);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_VIDEOS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_VIDEOS.length - 1 ? 0 : prev + 1));
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const activeSlide = HERO_VIDEOS[currentSlide];

  return (
    <section id="hero-section" className="relative w-full overflow-hidden bg-[#120d1c] text-white">
      {viewMode === 'video' ? (
        /* Video Hero with overlapping logo support and motion animations */
        <div className="relative w-full h-[480px] sm:h-[540px] md:h-[600px] lg:h-[660px] overflow-hidden">
          
          {/* Background Video playing seamlessly */}
          <div className="absolute inset-0 w-full h-full">
            <video
              ref={videoRef}
              key={activeSlide.videoUrl}
              src={activeSlide.videoUrl}
              poster={activeSlide.posterUrl}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay for text readability while letting the machine motion shine through */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />
          </div>

          {/* Top subtle glow under the overlapping logo badge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-20 bg-[#234d77]/30 rounded-full blur-2xl pointer-events-none" />

          {/* Top Left Watermark / Factory Specimen Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-8 left-6 sm:left-12 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/15 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-white/90">
              Live Cleanroom Plant Feed • ISO 9001:2015
            </span>
          </motion.div>

          {/* Video Control Pills (Top Right) */}
          <div className="absolute top-8 right-6 sm:right-12 z-20 flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-colors"
              aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMute}
              className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-colors"
              aria-label={isMuted ? 'Unmute Video' : 'Mute Video'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('3d')}
              className="px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#234d77] text-xs font-bold shadow-md backdrop-blur-md flex items-center gap-1.5 transition-all"
            >
              <Box className="w-3.5 h-3.5" />
              <span>3D Specimen</span>
            </motion.button>
          </div>

          {/* Bottom Hero Content with Motion Entrance */}
          <div className="absolute bottom-10 left-6 sm:left-12 right-6 sm:right-12 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-2xl space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#234d77]/80 border border-white/20 backdrop-blur-xs text-[11px] font-bold tracking-widest uppercase text-white">
                <Sparkles className="w-3 h-3 text-[#ffdd57]" />
                <span>Manufacturing Excellence</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg leading-tight">
                {activeSlide.title}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-200 font-medium drop-shadow-md max-w-xl leading-relaxed">
                {activeSlide.tagline}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenQuoteModal}
                  className="px-6 py-3 rounded-full bg-[#234d77] hover:bg-[#1a3d5e] text-white font-bold text-xs sm:text-sm shadow-lg transition-colors"
                >
                  Request Plant Quotation
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="#our-products"
                  className="px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold text-xs sm:text-sm backdrop-blur-md border border-white/25 transition-colors"
                >
                  Explore Catalog
                </motion.a>
              </div>
            </motion.div>

            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-3 self-start md:self-end">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="w-12 h-12 rounded-full bg-black/60 hover:bg-[#234d77] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-colors shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                aria-label="Next Slide"
                className="w-12 h-12 rounded-full bg-black/60 hover:bg-[#234d77] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-colors shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

          </div>

          {/* Bottom Progress Bars */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {HERO_VIDEOS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-8 bg-[#234d77]' : 'w-2 bg-white/40'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      ) : (
        /* Interactive 3D Model Specimen View */
        <div className="relative w-full h-[540px] lg:h-[620px] bg-gradient-to-b from-[#173554] via-[#2a1b3d] to-[#173554] text-white">
          <HeroScene
            modelPath={modelConfig.modelPath}
            scale={modelConfig.scale}
            position={modelConfig.position}
            rotation={modelConfig.rotation}
            autoRotate={modelConfig.autoRotate}
            interactive={true}
          />

          <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setViewMode('video')}
              className="px-4 py-2 rounded-full bg-[#234d77] hover:bg-[#1a3d5e] text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Factory Video</span>
            </motion.button>
          </div>

          <button
            onClick={() => setShow3DConfigPanel(!show3DConfigPanel)}
            className="absolute top-6 right-6 z-20 px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-md border border-white/20"
          >
            <Sliders className="w-3.5 h-3.5 text-[#ffdd57]" />
            <span>3D Adjust</span>
          </button>

          {show3DConfigPanel && (
            <div className="absolute top-16 right-6 z-30 w-72 p-4 rounded-2xl bg-[#173554]/95 border border-[#234d77]/50 shadow-2xl backdrop-blur-xl text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-white font-semibold">
                <span>3D Model Transform</span>
                <button onClick={() => setShow3DConfigPanel(false)} className="text-gray-400 hover:text-white">✕</button>
              </div>
              <div>
                <label className="text-[11px] text-gray-300 flex justify-between">
                  <span>Scale Factor:</span>
                  <span className="font-mono text-[#ffdd57]">{modelConfig.scale.toFixed(2)}x</span>
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="3.5"
                  step="0.1"
                  value={modelConfig.scale}
                  onChange={(e) => setModelConfig({ ...modelConfig, scale: parseFloat(e.target.value) })}
                  className="w-full accent-[#234d77] mt-1"
                />
              </div>
              <div>
                <label className="text-[11px] text-gray-300 flex justify-between">
                  <span>Elevation Y:</span>
                  <span className="font-mono text-[#ffdd57]">{modelConfig.position[1].toFixed(2)}</span>
                </label>
                <input
                  type="range"
                  min="-1.5"
                  max="1.5"
                  step="0.05"
                  value={modelConfig.position[1]}
                  onChange={(e) =>
                    setModelConfig({
                      ...modelConfig,
                      position: [modelConfig.position[0], parseFloat(e.target.value), modelConfig.position[2]],
                    })
                  }
                  className="w-full accent-[#234d77] mt-1"
                />
              </div>
              <div className="flex items-center justify-between pt-1">
                <label className="text-[11px] text-gray-300">Auto Spin</label>
                <button
                  onClick={() => setModelConfig({ ...modelConfig, autoRotate: !modelConfig.autoRotate })}
                  className={`px-2.5 py-1 rounded text-[10px] font-semibold ${
                    modelConfig.autoRotate ? 'bg-[#234d77] text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  {modelConfig.autoRotate ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}


