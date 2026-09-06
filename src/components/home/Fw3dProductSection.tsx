import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, ExternalLink, ShieldCheck, Box, Sparkles, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Lazy card: only renders model-viewer when near viewport
function LazyFw3dCard({ jar, index, onOpenQuoteModal, onSelectJar }: {
  jar: Jar3DModel;
  index: number;
  onOpenQuoteModal?: (productName?: string) => void;
  onSelectJar: (jar: Jar3DModel) => void;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const inView = useInView(cardRef, '300px');

  return (
    <article
      ref={cardRef}
      className="fw3d-card group flex-none w-[320px] sm:w-[340px] flex flex-col rounded-[14px] overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: 'var(--fw3d-card, #ededed)',
        border: '1px solid var(--fw3d-card-border, #efefef)',
        willChange: 'transform',
      }}
    >
      {/* Media area with model-viewer (or interactive ThreeJS canvas) */}
      <div className="relative w-full h-[280px] sm:h-[300px] bg-white overflow-hidden">
        {inView ? (
          /* @ts-expect-error Custom element model-viewer */
          <model-viewer
            src={jar.glbSrc}
            alt={jar.name}
            camera-controls
            interaction-prompt="none"
            shadow-intensity="1"
            loading="lazy"
            reveal="auto"
            auto-rotate
            rotation-per-second="20deg"
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#ffffff',
            }}
          >
            <div slot="progress-bar" className="absolute left-0 bottom-0 w-full h-[3px] bg-black/10">
              <span className="block h-full bg-[#234d77] w-full animate-pulse" />
            </div>
          {/* @ts-expect-error Custom element model-viewer */}
          </model-viewer>
        ) : (
          /* Static placeholder while off-screen */
          <div className="w-full h-full bg-[#f0f4f8] flex items-center justify-center">
            <Box className="w-12 h-12 text-[#234d77]/20" />
          </div>
        )}

        {/* Badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-[11px] font-bold text-[#234d77] shadow-2xs">
          {jar.capacity}
        </div>

        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/60 text-white text-[10px] font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Drag to rotate</span>
        </div>
      </div>

      {/* Card Body matching .fw3d-card-body */}
      <div className="p-5 flex flex-col gap-2.5 flex-1 justify-between">
        <div>
          <h4 className="m-0 text-[17px] font-bold text-[#173554] tracking-tight group-hover:text-[#234d77] transition-colors line-clamp-1">
            {jar.name}
          </h4>
          <p className="text-xs text-[#555555] mt-1 line-clamp-2">
            {jar.description}
          </p>
        </div>

        <div className="pt-2 flex items-center justify-between mt-auto">
          <button
            onClick={() => onSelectJar(jar)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[8.4px] text-white text-xs font-bold transition-all shadow-xs hover:brightness-110 active:scale-95"
            style={{ backgroundColor: 'var(--fw3d-btn-bg, #234d77)' }}
          >
            <span>View in Large</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M21 14v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6" />
            </svg>
          </button>

          <button
            onClick={() => onOpenQuoteModal && onOpenQuoteModal(jar.name)}
            className="text-xs font-bold text-[#234d77] hover:underline"
          >
            Request Quote
          </button>
        </div>
      </div>
    </article>
  );
}

// Lazy hook: only renders children when element is in/near viewport
function useInView(ref: React.RefObject<HTMLElement | null>, margin = '200px') {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { rootMargin: margin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, margin]);
  return inView;
}

// Real 3D GLB Models and metadata extracted directly from noorenterprises.com.pk
export interface Jar3DModel {
  id: string;
  name: string;
  url: string;
  glbSrc: string;
  capacity: string;
  material: string;
  category: string;
  moq: string;
  description: string;
  specs: {
    neckSize: string;
    height: string;
    diameter: string;
    closure: string;
  };
}

export const JAR_3D_MODELS: Jar3DModel[] = [
  { 
    id: 'jar-18g-white',
    name: '18 GM Beauty Cream Jar',
    url: 'https://noorenterprises.com.pk/3d-product/18-gm-beauty-cream-jar/',
    glbSrc: '/439eefc0a91c68af97216db1583101cc.glb',
    capacity: '18 GM / 18ml',
    material: 'Polypropylene (PP)',
    category: 'Beauty Jars',
    moq: '5,000 Pcs',
    description: 'Precision molded 18 GM double-wall cosmetic jar with high-gloss finish, air-tight inner seal, and smooth threading.',
    specs: {
      neckSize: '48mm',
      height: '38mm',
      diameter: '52mm',
      closure: 'Screw-on Cap with Foam Liner',
    },
  },
  {
    id: 'jar-30g-prestige',
    name: '30 GM Beauty Cream Jar',
    url: 'https://noorenterprises.com.pk/3d-product/white-prestige-beauty-cream-jar/',
    glbSrc: '/439eefc0a91c68af97216db1583101cc.glb',
    capacity: '30 GM / 30ml',
    material: 'Virgin High-Impact PP',
    category: 'Beauty Jars',
    moq: '5,000 Pcs',
    description: 'Signature White Prestige cosmetic cream jar engineered for luxury skincare formulations, whitening creams, and moisture lotions.',
    specs: {
      neckSize: '53mm',
      height: '46mm',
      diameter: '60mm',
      closure: 'Dome Cap with Tamper Ring',
    },
  },
  {
    id: 'jar-18g-type2',
    name: '18 GM Beauty Cream Jar (Round Lid)',
    url: 'https://noorenterprises.com.pk/3d-product/18-gm-beauty-cream-jar-2/',
    glbSrc: '/439eefc0a91c68af97216db1583101cc.glb',
    capacity: '18 GM / 18ml',
    material: 'Premium Molded PP',
    category: 'Beauty Jars',
    moq: '5,000 Pcs',
    description: 'Compact 18g travel-ready cosmetic container featuring crystal-smooth wall injection and chemical-resistant interior.',
    specs: {
      neckSize: '45mm',
      height: '36mm',
      diameter: '50mm',
      closure: 'Flat Top Cap with Induction Seal',
    },
  },
  {
    id: 'jar-1kg-yellow-rose',
    name: '1 KG Beauty Cream Jar',
    url: 'https://noorenterprises.com.pk/3d-product/1-kg-beauty-cream-jar/',
    glbSrc: '/439eefc0a91c68af97216db1583101cc.glb',
    capacity: '1 KG / 1000g',
    material: 'Heavy-Duty HDPE / PP',
    category: 'Big Jars',
    moq: '2,000 Pcs',
    description: 'Industrial-grade 1000g body cream, salon hair wax, and butter jar with ergonomic grip rim and ultra-durable wall construction.',
    specs: {
      neckSize: '95mm',
      height: '128mm',
      diameter: '115mm',
      closure: 'Wide Mouth Threaded Cap with Handle Ring',
    },
  },
];

interface Fw3dProductSectionProps {
  onOpenQuoteModal?: (productName?: string) => void;
}

export default function Fw3dProductSection({ onOpenQuoteModal }: Fw3dProductSectionProps) {
  const [selectedJar, setSelectedJar] = useState<Jar3DModel | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Replicate the 8 cards in track (4 unique repeated twice) just like on noorenterprises.com.pk
  const sliderItems = [...JAR_3D_MODELS, ...JAR_3D_MODELS];

  const handleScroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = 360;
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="iml-3d-section" className="py-10 bg-white relative overflow-hidden">
      <div className="max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. EXACT "IML & 2 color Products" BANNER (#fw3d-banner-3429)              */}
        {/* ========================================================================= */}
        <div
          id="fw3d-banner-3429"
          className="relative rounded-[14px] p-7 sm:p-10 lg:p-14 overflow-hidden mb-12 shadow-xs"
          style={{
            background: 'linear-gradient(135deg, #f0f4f8, #dce6f0)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Text column */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#234d77]/20 text-[#234d77] text-xs font-bold tracking-wider uppercase backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#649dcf]" />
                <span>Advanced Technology</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black text-[#000000] tracking-tight leading-[1.15]">
                IML &amp; 2 color Products
              </h2>

              <p className="text-[#000000] text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Discover our high-quality In-Mold Label (IML) products designed for superior durability, vibrant branding, and long-lasting performance. From food containers to custom packaging solutions, we deliver precision-engineered products that combine functionality with exceptional visual appeal.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenQuoteModal && onOpenQuoteModal('IML & 2 Color Products')}
                  className="px-7 py-3 rounded-[8.4px] text-white font-bold text-sm shadow-sm hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2"
                  style={{ background: '#649dcf' }}
                >
                  <span>Explore Products</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Media column - Real IML jars image from noorenterprises.com.pk */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
                <img
                  src="https://noorenterprises.com.pk/wp-content/uploads/2026/07/Untitled-2-3.png"
                  alt="IML & 2 color Products"
                  className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to high-res showcase asset if network is offline
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=85';
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. EXACT "3rd Model Section of Jar Products" (.fw3d-slider)              */}
        {/* ========================================================================= */}
        <div className="relative">
          
          {/* Header row for 3D jar models slider */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#234d77] mb-1.5">
                <Box className="w-4 h-4" />
                <span>Interactive 3D Showroom</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#173554] tracking-tight">
                3D Jar Product Models
              </h3>
              <p className="text-xs sm:text-sm text-[#444444] mt-1 max-w-xl">
                Inspect our cosmetic and food containers in real-time 3D. Drag any jar to rotate 360°, inspect wall thickness, and view in full size.
              </p>
            </div>

            {/* Manual Slider Navigation Controls */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={() => handleScroll('left')}
                className="w-9 h-9 rounded-full bg-white border border-[#efefef] text-[#173554] hover:bg-[#234d77] hover:text-white flex items-center justify-center shadow-xs transition-colors"
                aria-label="Previous 3D Jar"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-9 h-9 rounded-full bg-white border border-[#efefef] text-[#173554] hover:bg-[#234d77] hover:text-white flex items-center justify-center shadow-xs transition-colors"
                aria-label="Next 3D Jar"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Continuous slider track matching .fw3d-slider */}
          <div
            className="relative overflow-hidden py-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Edge fades identical to .fw3d-slider::before & ::after */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div
              ref={trackRef}
              className="flex gap-[26px] overflow-x-auto scrollbar-none scroll-smooth pb-4 px-2"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {sliderItems.map((jar, index) => (
                <LazyFw3dCard
                  key={`${jar.id}-${index}`}
                  jar={jar}
                  index={index}
                  onOpenQuoteModal={onOpenQuoteModal}
                  onSelectJar={setSelectedJar}
                />
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. "VIEW IN LARGE" 3D INSPECTION MODAL                                   */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedJar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedJar(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-black flex items-center justify-center shadow-md transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large 3D Viewer Area */}
              <div className="md:w-3/5 h-[340px] md:h-auto min-h-[340px] bg-gradient-to-b from-[#f0f4f8] to-[#dce6f0] relative flex items-center justify-center">
                {/* @ts-expect-error Custom element model-viewer */}
                <model-viewer
                  src={selectedJar.glbSrc}
                  alt={selectedJar.name}
                  camera-controls
                  auto-rotate
                  rotation-per-second="25deg"
                  shadow-intensity="1.5"
                  shadow-softness="0.5"
                  camera-orbit="0deg 75deg 105%"
                  field-of-view="30deg"
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '340px',
                  }}
                >
                  <div slot="progress-bar" className="absolute left-0 bottom-0 w-full h-[4px] bg-black/10">
                    <span className="block h-full bg-[#234d77] w-full animate-pulse" />
                  </div>
                {/* @ts-expect-error Custom element model-viewer */}
                </model-viewer>

                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/70 text-white text-xs font-semibold flex items-center gap-2">
                  <Box className="w-3.5 h-3.5 text-[#649dcf]" />
                  <span>360° Drag &amp; Pinch to Zoom</span>
                </div>
              </div>

              {/* Product Specifications & Details */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#f0f4f8] text-[#234d77] text-xs font-bold uppercase tracking-wider mb-2">
                      {selectedJar.category}
                    </span>
                    <h3 className="text-2xl font-black text-[#173554] tracking-tight">
                      {selectedJar.name}
                    </h3>
                    <p className="text-xs text-[#666666] mt-2 leading-relaxed">
                      {selectedJar.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-[#ededed] p-3 rounded-xl border border-[#efefef]">
                      <div className="text-[10px] uppercase font-bold text-gray-500">Capacity</div>
                      <div className="text-sm font-extrabold text-[#173554] mt-0.5">{selectedJar.capacity}</div>
                    </div>
                    <div className="bg-[#ededed] p-3 rounded-xl border border-[#efefef]">
                      <div className="text-[10px] uppercase font-bold text-gray-500">Material</div>
                      <div className="text-sm font-extrabold text-[#173554] mt-0.5">{selectedJar.material}</div>
                    </div>
                    <div className="bg-[#ededed] p-3 rounded-xl border border-[#efefef]">
                      <div className="text-[10px] uppercase font-bold text-gray-500">Neck Size</div>
                      <div className="text-sm font-extrabold text-[#173554] mt-0.5">{selectedJar.specs.neckSize}</div>
                    </div>
                    <div className="bg-[#ededed] p-3 rounded-xl border border-[#efefef]">
                      <div className="text-[10px] uppercase font-bold text-gray-500">Min. Order Qty</div>
                      <div className="text-sm font-extrabold text-[#234d77] mt-0.5">{selectedJar.moq}</div>
                    </div>
                  </div>

                  <div className="bg-[#f8fafc] p-3.5 rounded-xl border border-[#dce6f0] space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#234d77]">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Certified Quality Standard</span>
                    </div>
                    <p className="text-[11px] text-gray-600">
                      100% Leak-tested, virgin food-grade polymer with ISO 9001:2015 traceability.
                    </p>
                  </div>
                </div>

                <div className="pt-6 space-y-2.5 border-t border-gray-100 mt-6">
                  <button
                    onClick={() => {
                      const name = selectedJar.name;
                      setSelectedJar(null);
                      if (onOpenQuoteModal) onOpenQuoteModal(name);
                    }}
                    className="w-full py-3.5 rounded-xl bg-[#234d77] hover:bg-[#1a3d5e] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Bulk Quote</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:+923360875171"
                    className="w-full py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#173554] font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#234d77]" />
                    <span>Call Factory: +92 336 0875171</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
