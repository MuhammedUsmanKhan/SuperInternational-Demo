import React from 'react';
import { Factory, Award, ShieldCheck, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

export interface StatMetric {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  detail: string;
}

export const DEFAULT_STAT_METRICS: StatMetric[] = [
  {
    icon: Factory,
    value: '40+ Years',
    label: 'Manufacturing Excellence',
    detail: 'Trusted contract partner since 1983',
  },
  {
    icon: Award,
    value: '180M+',
    label: 'Annual Units Molded',
    detail: 'High-speed automated production',
  },
  {
    icon: ShieldCheck,
    value: 'WHO & ISO',
    label: 'Certified Standards',
    detail: 'Cleanroom medical & food grade',
  },
  {
    icon: Globe2,
    value: '26+ Countries',
    label: 'Global Export Footprint',
    detail: 'Zero-defect delivery SLA',
  },
];

interface StatCardsProps {
  metrics?: StatMetric[];
  className?: string;
}

export default function StatCards({
  metrics = DEFAULT_STAT_METRICS,
  className = '',
}: StatCardsProps) {
  const { isLight } = useTheme();

  return (
    <div className={`w-full ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className={`group relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl ${
                isLight
                  ? 'bg-white/95 hover:bg-white backdrop-blur-xl border-t-2 border-t-[#d09554] border-x border-b border-[#d09554]/25 shadow-[0_10px_30px_rgba(208,149,84,0.1)] hover:shadow-[0_20px_45px_rgba(208,149,84,0.2)] hover:border-t-[#e8c493]'
                  : 'bg-white/[0.05] hover:bg-white/[0.09] backdrop-blur-xl border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.5)] hover:border-[#d09554]/50'
              } transition-all duration-300 flex items-start gap-4 select-none`}
            >
              {/* Subtle top gold shimmer line on hover */}
              <div className="absolute -top-px left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#d09554]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon Container inside soft rounded square */}
              <div className={`w-12 h-12 rounded-2xl ${
                isLight
                  ? 'bg-[#faf5ec] group-hover:bg-[#d09554]/20 text-[#b87c3a] border border-[#d09554]/20'
                  : 'bg-white/10 group-hover:bg-[#d09554]/20 text-[#f5d5a8]'
              } flex items-center justify-center shrink-0 transition-colors duration-300 shadow-2xs`}>
                <Icon className="w-5.5 h-5.5 text-[#d09554] group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Stat Typography */}
              <div className="space-y-1">
                <div className={`text-2xl sm:text-3xl font-black ${isLight ? 'text-[#173554]' : 'text-white'} tracking-tight leading-tight`}>
                  {metric.value}
                </div>
                <div className={`text-xs sm:text-sm font-bold ${isLight ? 'text-slate-800' : 'text-slate-200'} leading-tight`}>
                  {metric.label}
                </div>
                <div className={`text-[11px] sm:text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'} leading-relaxed`}>
                  {metric.detail}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
