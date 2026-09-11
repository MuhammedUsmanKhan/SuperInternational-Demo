import React from 'react';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

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
    name: 'Vaccine Carriers',
    slug: 'vaccine-carriers',
    image: '/vaccine-carriers.jpeg',
  },
  {
    id: 6,
    name: 'Ice Packs',
    slug: 'ice-packs',
    image: '/ice-packs.jpeg',
  },
  {
    id: 7,
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
      className="group relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-[#d09554]/60 shadow-sm hover:shadow-[0_22px_44px_-14px_rgba(208,149,84,0.25)] hover:-translate-y-1.5 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex flex-col justify-between cursor-pointer"
    >
      {/* Top Image Showcase */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          loading="lazy"
        />

        {/* Ambient Subtle Image Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-20 group-hover:opacity-35 transition-opacity duration-600 ease-out" />
      </div>

      {/* Bottom Content Area with Signature Diagonal Gold Hover Effect */}
      <div className="relative p-5 sm:p-6 bg-white overflow-hidden flex items-center justify-between gap-4 border-t border-slate-100">
        
        {/* The Diagonal Gold Hover Ribbon / Fill */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#b8833f] via-[#d09554] to-[#deb075] -translate-x-[115%] -skew-x-12 group-hover:translate-x-0 group-hover:skew-x-0 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-0"
        />

        {/* Category Name */}
        <h3 className="relative z-10 text-base sm:text-lg lg:text-xl font-bold text-[#1f2937] group-hover:text-white transition-colors duration-500 tracking-tight drop-shadow-xs">
          {cat.name}
        </h3>

        {/* Navigation Action Button */}
        <div className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f0f4f8] text-[#234d77] group-hover:bg-[#1a3d5e] group-hover:text-white flex items-center justify-center transition-all duration-500 shadow-xs group-hover:shadow-md shrink-0 group-hover:translate-x-1">
          <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-500 group-hover:scale-110" />
        </div>

      </div>
    </motion.div>
  );

  return (
    <section
      id="categories-section"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] text-[#222222] relative overflow-hidden"
    >
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#234d77]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#d09554]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3.5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f4f8] border border-[#dce6f0] text-[#234d77] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#649dcf]" />
            <span>Product Sectors &amp; Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173554] tracking-tight leading-tight">
            Explore Our Specialized <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#234d77] via-[#173554] to-[#d09554]">
              Packaging Categories
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-2xl mx-auto font-normal">
            Precision-engineered containers, dispensing systems, and cold-chain carriers crafted to international quality standards.
          </p>
        </motion.div>

        {/* 4 + 3 Layout with Perfectly Centered Second Row */}
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

          {/* Row 2: 3 Categories Perfectly Centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-3/4 mx-auto">
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
            className="btn-premium-secondary px-8 py-3.5 rounded-full bg-[#f0f4f8] text-[#234d77] text-xs sm:text-sm font-bold transition-all cursor-pointer border border-[#234d77]/20"
          >
            <span className="relative z-10">Request Custom Mold Inquiries</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
