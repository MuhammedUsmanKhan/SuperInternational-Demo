import React from 'react';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

interface CategoriesSectionProps {
  onSelectCategory?: (category: string) => void;
  onOpenQuoteModal?: (categoryName?: string) => void;
}

const CATEGORIES_ROW_1 = [
  {
    id: 1,
    name: 'Jars',
    slug: 'jars',
    image: '/jars.jpeg',
  },
  {
    id: 2,
    name: 'Bottles',
    slug: 'bottles',
    image: '/bottles.jpeg',
  },
  {
    id: 3,
    name: 'Applicators',
    slug: 'applicators',
    image: '/applicators.jpeg',
  },
  {
    id: 4,
    name: 'PVC Trays',
    slug: 'pvc-trays',
    image: '/PVC-Trays.jpeg',
  },
];

const CATEGORIES_ROW_2 = [
  {
    id: 5,
    name: 'Measuring Cups & Spoons',
    slug: 'measuring-cups-and-spoons',
    image: '/measuring-cups-and-spoons.jpeg',
  },
  {
    id: 6,
    name: 'Vaccine Carriers',
    slug: 'vaccine-carriers',
    image: '/vaccine-carriers.jpeg',
  },
  {
    id: 7,
    name: 'Ice Packs',
    slug: 'ice-packs',
    image: '/ice-packs.jpeg',
  },
  {
    id: 8,
    name: 'Others',
    slug: 'others',
    image: '/others.jpeg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function CategoriesSection({
  onSelectCategory,
  onOpenQuoteModal,
}: CategoriesSectionProps) {
  const { isLight } = useTheme();

  const handleCategoryClick = (categoryName: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryName);
    }
    const target = document.getElementById('our-products-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderCard = (cat: { id: number; name: string; slug: string; image: string }) => (
    <motion.div
      key={cat.slug}
      variants={cardVariants}
      onClick={() => handleCategoryClick(cat.name)}
      className={`group relative rounded-2xl sm:rounded-3xl ${
        isLight
          ? 'bg-white/95 border-t-2 border-t-[#d09554] border-x border-b border-[#d09554]/25 hover:border-t-[#e8c493] shadow-[0_10px_28px_rgba(208,149,84,0.1)] hover:shadow-[0_24px_48px_-12px_rgba(208,149,84,0.25)]'
          : 'bg-[#0d1f33] border border-white/15 hover:border-[#d09554]/80 shadow-md hover:shadow-[0_22px_44px_-14px_rgba(208,149,84,0.3)]'
      } hover:-translate-y-1.5 hover:scale-102 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex flex-col h-full cursor-pointer`}
    >
      {/* Top Image Showcase */}
      <div className={`relative aspect-[4/3] w-full shrink-0 overflow-hidden ${isLight ? 'bg-[#f5ede2]' : 'bg-[#0a1827]'}`}>
        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          loading="lazy"
        />

        {/* Ambient Subtle Image Gradient */}
        <div className={`absolute inset-0 ${
          isLight
            ? 'bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-60 group-hover:opacity-30'
            : 'bg-gradient-to-t from-[#0d1f33] via-black/20 to-transparent opacity-60 group-hover:opacity-40'
        } transition-opacity duration-500 ease-out`} />
      </div>

      {/* Bottom Content Area with Signature Diagonal Gold Hover Effect */}
      <div className={`relative flex-1 p-5 sm:p-6 ${
        isLight ? 'bg-white border-t border-[#d09554]/20' : 'bg-[#0c1c2e] border-t border-white/10'
      } overflow-hidden flex items-center justify-between gap-4`}>
        
        {/* The Diagonal Gold Hover Ribbon / Fill */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#b8833f] via-[#d09554] to-[#deb075] -translate-x-[115%] -skew-x-12 group-hover:translate-x-0 group-hover:skew-x-0 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-0"
        />

        {/* Category Name */}
        <h3 className={`relative z-10 text-base sm:text-lg lg:text-xl font-bold ${
          isLight ? 'text-[#173554]' : 'text-white'
        } group-hover:text-black transition-colors duration-500 tracking-tight drop-shadow-xs`}>
          {cat.name}
        </h3>

        {/* Navigation Action Button */}
        <div className={`relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full ${
          isLight ? 'bg-[#faf5ec] text-[#173554] border border-[#d09554]/30' : 'bg-white/10 text-white'
        } group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all duration-500 shadow-xs group-hover:shadow-md shrink-0 group-hover:translate-x-1`}>
          <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-500 group-hover:scale-110" />
        </div>

      </div>
    </motion.div>
  );

  return (
    <section
      id="categories-section"
      className={`py-12 sm:py-16 ${
        isLight
          ? 'bg-gradient-to-br from-[#faf5ec] via-[#f1eae0] to-[#e6dac6] text-slate-800 border-y border-[#d09554]/25'
          : 'bg-[#06121d] text-white border-y border-white/10'
      } relative isolate overflow-hidden transition-colors duration-500`}
    >
      {/* Top Shimmer Hairline Divider */}
      <div className="absolute top-0 left-0 right-0 shimmer-hairline pointer-events-none z-20" />

      {/* Architectural CAD Technical Blueprint Grid & Micro-Dot Matrix */}
      <div className={`absolute inset-0 pointer-events-none z-0 ${isLight ? 'bg-blueprint-atelier-light opacity-85' : 'bg-cad-grid-dark opacity-80'}`} />

      {/* Atmospheric Diagonal Studio Auroras (Active exclusively in Light Mode) */}
      {isLight && (
        <>
          <div className="absolute -top-28 -left-28 w-[620px] h-[620px] bg-[#d09554]/16 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute -bottom-28 -right-28 w-[680px] h-[680px] bg-[#e8c493]/24 rounded-full blur-3xl pointer-events-none z-0" />
        </>
      )}




      {/* Bottom Shimmer Hairline Divider */}
      <div className="absolute bottom-0 left-0 right-0 shimmer-hairline pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${
            isLight
              ? 'bg-[#d09554]/12 border border-[#d09554]/30 text-[#8d561d]'
              : 'bg-white/10 border border-white/20 text-[#f5d5a8]'
          } text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-md`}>
            <Layers className="w-3.5 h-3.5 text-[#d09554]" />
            <span>Product Sectors &amp; Capabilities</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${isLight ? 'text-[#173554]' : 'text-white'} tracking-tight leading-tight`}>
            Explore Our Specialized <br className="hidden sm:inline" />
            <span className={isLight ? "text-transparent bg-clip-text bg-gradient-to-r from-[#173554] via-[#b87c3a] to-[#d09554]" : "text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f6d8b0] to-[#d09554]"}>
              Packaging Categories
            </span>
          </h2>

          <p className={`text-sm sm:text-base ${isLight ? 'text-slate-600' : 'text-slate-300'} leading-relaxed max-w-2xl mx-auto font-normal`}>
            Precision-engineered containers, dispensing systems, and cold-chain carriers crafted to international quality standards.
          </p>
        </motion.div>

        {/* 4 + 4 Layout Across 2 Balanced Rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-6"
        >
          {/* Row 1: 4 Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES_ROW_1.map((cat) => renderCard(cat))}
          </div>

          {/* Row 2: 4 Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES_ROW_2.map((cat) => renderCard(cat))}
          </div>
        </motion.div>

        {/* Bottom Catalog Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 sm:mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#our-products-section"
            className="btn-premium-primary px-8 py-3.5 rounded-full bg-[#234d77] text-white text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2 border border-white/20"
          >
            <span className="relative z-10">View Complete Product Catalog</span>
            <ArrowRight className="w-4 h-4 relative z-10" />
          </a>

          <button
            onClick={() => onOpenQuoteModal && onOpenQuoteModal('Custom Category Packaging')}
            className={`px-8 py-3.5 rounded-full ${
              isLight
                ? 'bg-white hover:bg-[#faf5ec] text-[#173554] border border-[#d09554]/30 shadow-xs'
                : 'bg-white/10 hover:bg-white/15 text-white hover:text-[#f5d5a8] border border-white/20 hover:border-[#d09554]/50 backdrop-blur-md shadow-xs'
            } text-xs sm:text-sm font-bold transition-all cursor-pointer`}
          >
            <span className="relative z-10">Request Custom Mold Inquiries</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
