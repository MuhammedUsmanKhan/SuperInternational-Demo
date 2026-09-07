import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Box, Sparkles, ExternalLink, ShieldCheck, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
    id: 'lotion-bottle-opt',
    name: 'Ergonomic Lotion Bottle',
    url: '#',
    glbSrc: '/lotion-bottle-optimized.glb',
    capacity: '250ml / 400ml',
    material: 'Multi-Layer HDPE / PCR',
    category: 'Bottles & Dispensers',
    moq: '5,000 Pcs',
    description: 'Precision blow-molded ergonomic lotion container with high-barrier chemical resistance, smooth pump closure threading, and comfortable grip profile.',
    specs: {
      neckSize: '28/410',
      height: '185mm',
      diameter: '58mm',
      closure: 'Lotion Dispenser Pump / Disc Top',
    },
  },
  {
    id: 'disinfectant-bottle-opt',
    name: 'Disinfectant & Sanitizer Bottle',
    url: '#',
    glbSrc: '/disinfectant-bottle-optimized.glb',
    capacity: '500ml / 1000ml',
    material: 'Chemical-Resistant HDPE',
    category: 'Pharma & Hygiene',
    moq: '5,000 Pcs',
    description: 'Heavy-duty industrial and medical disinfectant container engineered for leak-proof storage of sanitizers, antiseptics, and laboratory reagents.',
    specs: {
      neckSize: '28mm Tamper-Evident',
      height: '210mm',
      diameter: '68mm',
      closure: 'Flip-Top / Trigger Spray / Seal Cap',
    },
  },
  {
    id: 'husk-jar-opt',
    name: 'Husk Wide-Mouth Jar',
    url: '#',
    glbSrc: '/husk-jar-optimized.glb',
    capacity: '100g / 200g / 500g',
    material: 'Virgin Polypropylene (PP)',
    category: 'Cosmetic & Pharma Jars',
    moq: '3,000 Pcs',
    description: 'Double-wall wide mouth container with airtight induction seal liner and precision ribbed screw cap for nutraceutical, herbal, and cosmetic packaging.',
    specs: {
      neckSize: '70/400',
      height: '82mm',
      diameter: '76mm',
      closure: 'Wide-Mouth Ribbed Cap with Liner',
    },
  },
];

// Lazy in-view hook
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

// Minimal, Ultra-Modern 3D Product Card (View Large Only)
function Modern3DCard({
  jar,
  onSelectJar,
}: {
  jar: Jar3DModel;
  onSelectJar: (jar: Jar3DModel) => void;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const inView = useInView(cardRef, '300px');

  return (
    <article
      ref={cardRef}
      className="group flex-none w-[300px] sm:w-[330px] lg:w-[350px] flex flex-col rounded-3xl bg-gradient-to-b from-white via-[#fbfcfe] to-[#f4f7fa] border border-slate-200/90 hover:border-[#234d77]/40 shadow-sm hover:shadow-[0_24px_50px_-15px_rgba(35,77,119,0.22)] hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer"
    >
      {/* 3D Model Viewport Area */}
      <div className="relative w-full h-[310px] sm:h-[330px] bg-gradient-to-b from-slate-50/60 to-slate-100/50 flex items-center justify-center overflow-hidden">
        
        {/* Soft Ambient Radial Pedestal */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(100,157,207,0.18)_0%,transparent_65%)] pointer-events-none" />
        
        {/* Grounding Disc Shadow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-44 h-8 bg-black/10 rounded-full blur-md pointer-events-none group-hover:scale-110 transition-transform duration-500" />

        {/* 360 Indicator Pill */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-[#234d77] text-[11px] font-bold flex items-center gap-1.5 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#d09554]" />
          <span>360° 3D Model</span>
        </div>

        {/* Drag Hint on Hover */}
        <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Drag to rotate
        </div>

        {inView ? (
          /* @ts-expect-error Custom element model-viewer */
          <model-viewer
            src={jar.glbSrc}
            alt={jar.name}
            camera-controls
            interaction-prompt="none"
            shadow-intensity="1.2"
            shadow-softness="0.5"
            loading="lazy"
            reveal="auto"
            auto-rotate
            rotation-per-second="20deg"
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'transparent',
            }}
          >
            <div slot="progress-bar" className="absolute left-0 bottom-0 w-full h-[3px] bg-black/10">
              <span className="block h-full bg-[#234d77] w-full animate-pulse" />
            </div>
          {/* @ts-expect-error Custom element model-viewer */}
          </model-viewer>
        ) : (
          <div className="w-full h-full bg-[#f0f4f8] flex items-center justify-center">
            <Box className="w-12 h-12 text-[#234d77]/20" />
          </div>
        )}
      </div>

      {/* Card Action Footer: View Large Button Only */}
      <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-center">
        <button
          onClick={() => onSelectJar(jar)}
          className="btn-premium-primary w-full py-3 sm:py-3.5 px-5 rounded-2xl bg-[#234d77] text-white text-xs sm:text-sm font-bold shadow-md active:scale-98 transition-all flex items-center justify-center gap-2 group/btn cursor-pointer border border-white/20"
        >
          <Maximize2 className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110 relative z-10" />
          <span className="relative z-10">View Large</span>
        </button>
      </div>
    </article>
  );
}

interface Fw3dProductSectionProps {
  onOpenQuoteModal?: (productName?: string) => void;
}

export default function Fw3dProductSection({ onOpenQuoteModal }: Fw3dProductSectionProps) {
  const [selectedJar, setSelectedJar] = useState<Jar3DModel | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Replicate models for smooth continuous browsing
  const sliderItems = [...JAR_3D_MODELS, ...JAR_3D_MODELS];

  const handleScroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = 370;
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="featured-products-section"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] text-[#222222] relative overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#234d77]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#649dcf]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f4f8] border border-[#dce6f0] text-[#234d77] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Box className="w-3.5 h-3.5 text-[#649dcf]" />
              <span>Interactive 3D Showroom</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222] tracking-tight leading-tight">
              Featured 3D Packaging <br className="hidden sm:inline" />
              <span className="text-[#234d77]">Models</span>
            </h2>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
              Inspect our cosmetic and pharmaceutical containers in real-time 3D. Rotate 360° to view structural finishes, wall thickness, and threading details.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => handleScroll('left')}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-[#173554] hover:bg-[#234d77] hover:text-white hover:border-[#234d77] flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer"
              aria-label="Previous 3D Model"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-[#173554] hover:bg-[#234d77] hover:text-white hover:border-[#234d77] flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer"
              aria-label="Next 3D Model"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* 3D Showcase Horizontal Glide Track */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          {/* Edge Glow Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            className="flex gap-6 sm:gap-7 overflow-x-auto scrollbar-none scroll-smooth py-4 px-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {sliderItems.map((jar, index) => (
              <Modern3DCard
                key={`${jar.id}-${index}`}
                jar={jar}
                onSelectJar={setSelectedJar}
              />
            ))}
          </div>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* "VIEW LARGE" 3D INSPECTION STUDIO MODAL                                   */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedJar && (
          <div
            className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedJar(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row my-auto max-h-[92vh] sm:max-h-[90vh] border border-white/20"
            >
              {/* Prominent High-Visibility Close Button */}
              <button
                onClick={() => setSelectedJar(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 w-10 h-10 rounded-full bg-black/70 sm:bg-white/95 hover:bg-black/90 sm:hover:bg-white text-white sm:text-gray-800 shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer border border-white/30"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large 3D Interactive Canvas */}
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

                <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-2">
                  <Box className="w-3.5 h-3.5 text-[#649dcf]" />
                  <span>360° Drag &amp; Pinch to Zoom</span>
                </div>
              </div>

              {/* Product Specifications & Inquiry */}
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
                    <div className="bg-[#f4f7fa] p-3 rounded-xl border border-[#e2e8f0]">
                      <div className="text-[10px] uppercase font-bold text-gray-500">Capacity</div>
                      <div className="text-sm font-extrabold text-[#173554] mt-0.5">{selectedJar.capacity}</div>
                    </div>
                    <div className="bg-[#f4f7fa] p-3 rounded-xl border border-[#e2e8f0]">
                      <div className="text-[10px] uppercase font-bold text-gray-500">Material</div>
                      <div className="text-sm font-extrabold text-[#173554] mt-0.5">{selectedJar.material}</div>
                    </div>
                    <div className="bg-[#f4f7fa] p-3 rounded-xl border border-[#e2e8f0]">
                      <div className="text-[10px] uppercase font-bold text-gray-500">Neck Size</div>
                      <div className="text-sm font-extrabold text-[#173554] mt-0.5">{selectedJar.specs.neckSize}</div>
                    </div>
                    <div className="bg-[#f4f7fa] p-3 rounded-xl border border-[#e2e8f0]">
                      <div className="text-[10px] uppercase font-bold text-gray-500">Min. Order Qty</div>
                      <div className="text-sm font-extrabold text-[#234d77] mt-0.5">{selectedJar.moq}</div>
                    </div>
                  </div>

                  <div className="bg-[#f8fafc] p-3.5 rounded-xl border border-[#dce6f0] space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#234d77]">
                      <ShieldCheck className="w-4 h-4 text-[#234d77]" />
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
                    className="w-full py-3.5 rounded-xl bg-[#234d77] hover:bg-[#1a3d5e] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
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
