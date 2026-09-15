import React, { useState } from 'react';
import { Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

interface ClientItem {
  id: number;
  name: string;
  category: string;
  image: string;
}

const CLIENT_ITEMS_ROW_1: ClientItem[] = [
  {
    id: 1,
    name: 'Unilever',
    category: 'Global FMCG Leader',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/unilever-vector-logo.png',
  },
  {
    id: 2,
    name: 'Olivia Cosmetics',
    category: 'Skincare & Beauty',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/21-removebg-preview.png',
  },
  {
    id: 3,
    name: "L'Oréal",
    category: 'Prestige Beauty',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/Loreal-logo.png',
  },
  {
    id: 4,
    name: 'Parley Cosmetics',
    category: 'Cosmetic Formulations',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/cropped-Parley-Logo-v1-2.png',
  },
  {
    id: 5,
    name: 'Hilal Foods',
    category: 'Confectionery & Food',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/hilal-foods-logo.png',
  },
  {
    id: 6,
    name: 'Forvil Cosmetics',
    category: 'Haircare & Beauty',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/10-removebg-preview.png',
  },
  {
    id: 7,
    name: 'Medora of London',
    category: 'Color Cosmetics',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/27-removebg-preview.png',
  },
  {
    id: 8,
    name: 'Conatural',
    category: 'Organic Skincare',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/conatural_new_logo.png',
  },
  {
    id: 9,
    name: 'Bio-Cos International',
    category: 'Dermacare Leader',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/39-removebg-preview.png',
  },
];

const CLIENT_ITEMS_ROW_2: ClientItem[] = [
  {
    id: 10,
    name: 'Hemani Herbals',
    category: 'Herbal & Wellness',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/logo-1.png',
  },
  {
    id: 11,
    name: 'Saeed Ghani',
    category: 'Natural Personal Care',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/34-removebg-preview.png',
  },
  {
    id: 12,
    name: 'Golden Pearl',
    category: 'Cosmetic Solutions',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/07/t6.png',
  },
  {
    id: 13,
    name: 'Alupak',
    category: 'Pharma Packaging',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/Alupak.png',
  },
  {
    id: 14,
    name: 'ALC Group',
    category: 'Industrial Logistics',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/ALCLOGO.png',
  },
  {
    id: 15,
    name: 'United Tubes',
    category: 'Dispensing Systems',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/United-Tubes-Logo.png',
  },
  {
    id: 16,
    name: 'Dawood Corporation',
    category: 'Enterprise FMCG',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/Dawood_Corporation_Logo.png',
  },
  {
    id: 17,
    name: 'Roomi',
    category: 'Healthcare & Pharma',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/roomi-logo-1.png',
  },
  {
    id: 18,
    name: 'Swiss Image Partner',
    category: 'Alpine Cosmetics',
    image: 'https://noorenterprises.com.pk/wp-content/uploads/2023/08/4-removebg-preview.png',
  },
];

function ClientCard({ client }: { client: ClientItem }) {
  const { isLight } = useTheme();
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`group relative w-48 sm:w-56 h-24 sm:h-28 rounded-2xl ${
      isLight
        ? 'bg-white hover:bg-[#faf6f0] border border-[#d09554]/25 hover:border-[#d09554] shadow-[0_4px_16px_rgba(208,149,84,0.08)] hover:shadow-[0_12px_28px_rgba(208,149,84,0.18)]'
        : 'bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-[#d09554]/60 shadow-md hover:shadow-[0_16px_32px_-10px_rgba(0,0,0,0.5)]'
    } hover:-translate-y-1 transition-all duration-400 flex flex-col items-center justify-center p-4 cursor-pointer overflow-hidden shrink-0 select-none backdrop-blur-md`}>
      {/* Subtle Hover Backlight */}
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${
        isLight ? 'via-[#d09554]/5 to-[#d09554]/15' : 'via-white/[0.03] to-[#d09554]/10'
      } opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none`} />

      {/* Brand Logo or Fallback Typography */}
      {!imageError ? (
        <img
          src={client.image}
          alt={client.name}
          loading="lazy"
          onError={() => setImageError(true)}
          className={`max-h-10 sm:max-h-12 max-w-[130px] sm:max-w-[150px] object-contain ${
            isLight
              ? 'opacity-85 group-hover:opacity-100 group-hover:scale-105'
              : 'filter brightness-0 invert opacity-75 group-hover:opacity-100 group-hover:scale-105'
          } transition-all duration-400 ease-out`}
        />
      ) : (
        <span className={`text-sm font-bold ${
          isLight ? 'text-[#173554] group-hover:text-[#b87c3a]' : 'text-white group-hover:text-[#f5d5a8]'
        } transition-colors text-center`}>
          {client.name}
        </span>
      )}

      {/* Bottom Brand Hairline Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-[#d09554] to-transparent transition-all duration-400" />
    </div>
  );
}

export default function OurClientsSection() {
  const { isLight } = useTheme();
  const [isPaused, setIsPaused] = useState(false);

  // Triple the arrays for seamless continuous looping
  const marqueeRow1 = [...CLIENT_ITEMS_ROW_1, ...CLIENT_ITEMS_ROW_1, ...CLIENT_ITEMS_ROW_1];
  const marqueeRow2 = [...CLIENT_ITEMS_ROW_2, ...CLIENT_ITEMS_ROW_2, ...CLIENT_ITEMS_ROW_2];

  return (
    <section
      id="clients-section"
      className={`py-10 sm:py-14 ${
        isLight
          ? 'bg-gradient-to-br from-[#faf5ec] via-[#f1eae0] to-[#e6dac6] text-slate-800 border-y border-[#d09554]/25'
          : 'bg-[#06121d] text-white border-y border-white/10'
      } relative overflow-hidden transition-colors duration-500`}
    >
      {/* Top Shimmer Hairline Divider */}
      <div className="absolute top-0 left-0 right-0 shimmer-hairline pointer-events-none" />

      {/* Architectural CAD Technical Grid */}
      <div className={`absolute inset-0 pointer-events-none -z-10 ${isLight ? 'bg-cad-grid-light opacity-50' : 'bg-cad-grid-dark opacity-75'}`} />

      {/* Atmospheric Diagonal Studio Auroras (Active exclusively in Light Mode) */}
      {isLight && (
        <>
          <div className="absolute -top-28 -left-28 w-[620px] h-[620px] bg-[#d09554]/16 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute -bottom-28 -right-28 w-[680px] h-[680px] bg-[#e8c493]/24 rounded-full blur-3xl pointer-events-none -z-10" />
        </>
      )}



      {/* Bottom Shimmer Hairline Divider */}
      <div className="absolute bottom-0 left-0 right-0 shimmer-hairline pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${
            isLight
              ? 'bg-[#d09554]/12 border border-[#d09554]/30 text-[#8d561d]'
              : 'bg-white/10 border border-white/20 text-[#f5d5a8]'
          } text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-md`}>
            <Sparkles className="w-3.5 h-3.5 text-[#d09554]" />
            <span>Valuable Brand Partnerships</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${isLight ? 'text-[#173554]' : 'text-white'} tracking-tight leading-tight`}>
            Trusted by Pakistan&apos;s &amp; Global <br className="hidden sm:inline" />
            <span className={isLight ? "text-transparent bg-clip-text bg-gradient-to-r from-[#173554] via-[#b87c3a] to-[#d09554]" : "text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f6d8b0] to-[#d09554]"}>
              FMCG &amp; Pharma Leaders
            </span>
          </h2>

          <p className={`text-sm sm:text-base ${isLight ? 'text-slate-600' : 'text-slate-300'} leading-relaxed max-w-2xl mx-auto font-normal`}>
            For over four decades, leading multinational brands have relied on Super International for zero-defect precision tooling, high-barrier bottles, and custom cosmetic jars.
          </p>
        </motion.div>

      </div>

      {/* Dual-Row Continuous Infinite Marquee with Hover Pause */}
      <div
        className="relative w-full overflow-hidden space-y-4 sm:space-y-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge Gradient Mask Overlays for Smooth Horizon Fade */}
        <div className={`absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r ${
          isLight ? 'from-[#fbf8f3] via-[#fbf8f3]/80' : 'from-[#081523] via-[#081523]/80'
        } to-transparent z-10 pointer-events-none`} />
        <div className={`absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l ${
          isLight ? 'from-[#fbf8f3] via-[#fbf8f3]/80' : 'from-[#081523] via-[#081523]/80'
        } to-transparent z-10 pointer-events-none`} />

        {/* Marquee Row 1: Leftward Float */}
        <div className="flex w-fit animate-marquee gap-4 sm:gap-6" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          {marqueeRow1.map((client, index) => (
            <ClientCard key={`row1-${client.id}-${index}`} client={client} />
          ))}
        </div>

        {/* Marquee Row 2: Rightward Float */}
        <div className="flex w-fit animate-marquee-reverse gap-4 sm:gap-6" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          {marqueeRow2.map((client, index) => (
            <ClientCard key={`row2-${client.id}-${index}`} client={client} />
          ))}
        </div>
      </div>

      {/* Bottom Assurance Badges */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`pt-6 border-t ${isLight ? 'border-[#d09554]/20 text-slate-700' : 'border-white/10 text-slate-300'} flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium`}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#d09554]" />
            <span>100% On-Time Batch Dispatch SLA</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#d09554]" />
            <span>Full Spectral Certificate of Analysis per Polymer Lot</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#d09554]" />
            <span>NDA &amp; IP Protection for Proprietary Custom Molds</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
