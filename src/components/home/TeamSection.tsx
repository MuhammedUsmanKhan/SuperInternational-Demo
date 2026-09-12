import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Linkedin, Mail, ArrowUpRight, Award, ShieldCheck, Cpu, Briefcase } from 'lucide-react';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: 'Executive' | 'Engineering' | 'Quality' | 'Operations';
  badge: string;
  badgeIcon: 'award' | 'shield' | 'cpu' | 'briefcase';
  experience: string;
  intro: string;
  image: string;
  linkedinUrl?: string;
  email?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Muhammad Usman Khan',
    role: 'Chief Executive Officer',
    department: 'Executive',
    badge: 'Executive Board',
    badgeIcon: 'award',
    experience: '40+ Years Industry Pioneer',
    intro: 'Spearheading four decades of industrial plastic molding excellence, strategic capacity expansion, and establishing premier packaging export standards across 26+ countries.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    linkedinUrl: 'https://linkedin.com',
    email: 'ceo@superinternational.com.pk',
  },
  {
    id: 2,
    name: 'Engr. Tariq Mehmood',
    role: 'Head of Tooling & Mold R&D',
    department: 'Engineering',
    badge: 'CAD/CAM & Precision Tooling',
    badgeIcon: 'cpu',
    experience: '22+ Years Tooling Lead',
    intro: 'Masterminding high-precision European injection blow molding systems, multi-cavity hot runner molds, and ultra-durable customized polymer packaging architectures.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    linkedinUrl: 'https://linkedin.com',
    email: 'tooling@superinternational.com.pk',
  },
  {
    id: 3,
    name: 'Dr. Ayesha Siddiqui',
    role: 'Director of QA & Cleanroom Compliance',
    department: 'Quality',
    badge: 'WHO GMP & ISO 9001:2015',
    badgeIcon: 'shield',
    experience: '16+ Years Medical QA',
    intro: 'Enforcing 100% zero-defect inspection protocols, medical-grade resin purity verifications, and cleanroom packaging conformity for Pakistan’s leading pharmaceutical brands.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    linkedinUrl: 'https://linkedin.com',
    email: 'qa@superinternational.com.pk',
  },
  {
    id: 4,
    name: 'Kamran Farooq',
    role: 'VP of Global Operations & Supply Chain',
    department: 'Operations',
    badge: 'Supply Chain Logistics',
    badgeIcon: 'briefcase',
    experience: '18+ Years Plant Ops',
    intro: 'Orchestrating daily production throughput exceeding 500,000 units, temperature-rated cold chain logistics, and resilient end-to-end fulfillment for multinational FMCG giants.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    linkedinUrl: 'https://linkedin.com',
    email: 'operations@superinternational.com.pk',
  },
];

const FILTER_TABS = [
  { label: 'All Leadership', value: 'ALL' },
  { label: 'Executive Board', value: 'Executive' },
  { label: 'Engineering & Tooling', value: 'Engineering' },
  { label: 'Quality Assurance', value: 'Quality' },
  { label: 'Operations & Supply', value: 'Operations' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

interface TeamSectionProps {
  onOpenQuoteModal?: (subject?: string) => void;
}

export default function TeamSection({ onOpenQuoteModal }: TeamSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filteredMembers = TEAM_MEMBERS.filter((member) => {
    if (selectedFilter === 'ALL') return true;
    return member.department === selectedFilter;
  });

  const getBadgeIcon = (type: TeamMember['badgeIcon']) => {
    switch (type) {
      case 'award':
        return <Award className="w-3.5 h-3.5 text-[#d09554]" />;
      case 'shield':
        return <ShieldCheck className="w-3.5 h-3.5 text-[#649dcf]" />;
      case 'cpu':
        return <Cpu className="w-3.5 h-3.5 text-[#d09554]" />;
      case 'briefcase':
        return <Briefcase className="w-3.5 h-3.5 text-[#649dcf]" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#d09554]" />;
    }
  };

  return (
    <section
      id="team-section"
      className="py-18 sm:py-26 bg-gradient-to-b from-white via-[#f6f9fc] to-white text-[#222222] relative overflow-hidden"
    >
      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[950px] h-[450px] bg-gradient-to-r from-[#234d77]/6 via-[#d09554]/8 to-[#649dcf]/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#d09554]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER (Matching Exact Brand Badge + Metallic Gradient Title)  */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3.5"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f4f8] border border-[#dce6f0] text-[#173554] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#d09554]" />
            <span>Executive Leadership &bull; Packaging Mastery</span>
          </div>

          {/* Main Metallic Gradient Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173554] tracking-tight leading-tight">
            Visionary Minds Powering <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#234d77] via-[#173554] to-[#d09554]">
              Four Decades of Packaging Excellence
            </span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-2xl mx-auto font-normal">
            Meet the seasoned directors, precision engineers, and quality specialists driving advanced cleanroom production, European mold tooling, and dependable global fulfillment.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  selectedFilter === tab.value
                    ? 'bg-[#173554] text-white shadow-md scale-102'
                    : 'bg-white text-[#555555] hover:text-[#173554] hover:bg-[#f0f4f8] border border-slate-200/80 shadow-2xs'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. TEAM CARDS GRID (With Rich Hover Lift, Info Slide-Up & Glass Effects)   */}
        {/* ========================================================================= */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
                className="group relative rounded-3xl overflow-hidden bg-[#0c1b2c] border border-slate-200/90 hover:border-[#d09554]/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_-12px_rgba(208,149,84,0.25)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-end min-h-[440px] sm:min-h-[470px] cursor-pointer"
              >
                {/* 1. Background Image with Dynamic Zoom on Hover */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top sm:object-center group-hover:scale-108 group-hover:brightness-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    loading="lazy"
                  />
                  {/* Base Gradient Overlay for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081320] via-[#081320]/75 via-45% to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                  
                  {/* Subtle Top Gradient Vignette */}
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
                </div>

                {/* 2. Top Department Badge & Experience Pill */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-xs">
                    {getBadgeIcon(member.badgeIcon)}
                    <span>{member.badge}</span>
                  </div>

                  <div className="w-2.5 h-2.5 rounded-full bg-[#d09554] shadow-[0_0_8px_#d09554]" />
                </div>

                {/* 3. Bottom Content Block (With Animated Hover Expansion) */}
                <div className="relative z-10 p-5 sm:p-6 text-white flex flex-col justify-end">
                  
                  {/* Designation Subtitle in Brand Gold */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#d09554] mb-1 drop-shadow-xs">
                    <span>{member.role}</span>
                  </div>

                  {/* Member Full Name */}
                  <h3 className="text-xl sm:text-[22px] font-black tracking-tight text-white group-hover:text-white leading-snug">
                    {member.name}
                  </h3>

                  {/* Experience Tag Line */}
                  <div className="text-[12px] font-semibold text-slate-300/90 mt-0.5">
                    {member.experience}
                  </div>

                  {/* ================================================================= */}
                  {/* 4. HOVER REVEAL: 2 to 3 Lines Intro + Social Contacts             */}
                  {/* ================================================================= */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
                    
                    {/* Divider Line */}
                    <div className="w-full h-px bg-white/15 my-3" />

                    {/* 2-3 Lines Intro */}
                    <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-normal">
                      {member.intro}
                    </p>

                    {/* Action & Contact Strip */}
                    <div className="flex items-center justify-between pt-3.5 mt-1">
                      <div className="flex items-center gap-2">
                        {member.linkedinUrl && (
                          <a
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#d09554] text-white flex items-center justify-center transition-colors duration-300 shadow-2xs"
                            aria-label={`${member.name} LinkedIn`}
                          >
                            <Linkedin className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#234d77] text-white flex items-center justify-center transition-colors duration-300 shadow-2xs"
                            aria-label={`Email ${member.name}`}
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenQuoteModal) onOpenQuoteModal(`Consultation with ${member.name}`);
                        }}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 hover:bg-[#d09554] text-white text-[11px] font-bold transition-all duration-300 cursor-pointer"
                      >
                        <span>Connect</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>

                </div>

                {/* 5. Bottom Golden Line Accent (Expands smoothly on hover) */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#d09554] via-[#f5d5a6] to-[#d09554] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM ENTERPRISE TRUST STRIP                                          */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 sm:mt-18 rounded-2xl bg-gradient-to-r from-[#f0f4f8] via-white to-[#f0f4f8] border border-[#dce6f0] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#173554] text-[#d09554] flex items-center justify-center shrink-0 shadow-sm hidden sm:flex">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-[#173554] tracking-tight">
                Want to collaborate directly with our engineering &amp; tooling leadership?
              </h4>
              <p className="text-xs sm:text-sm text-[#555555] mt-0.5">
                Schedule a technical consultation for custom molds, OEM bottle design, or cleanroom volume contracts.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenQuoteModal && onOpenQuoteModal('Executive Tooling Consultation')}
            className="px-6 py-3 rounded-full bg-[#173554] hover:bg-[#234d77] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Consult Leadership Team</span>
            <ArrowUpRight className="w-4 h-4 text-[#d09554]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}

