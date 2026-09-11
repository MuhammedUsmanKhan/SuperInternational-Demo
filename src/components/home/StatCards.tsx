import React from 'react';
import { Factory, Award, ShieldCheck, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';

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
              className="group relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(35,77,119,0.12)] hover:border-[#d09554]/50 transition-all duration-300 flex items-start gap-4 select-none"
            >
              {/* Subtle top gold shimmer line on hover */}
              <div className="absolute -top-px left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#d09554]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon Container inside soft rounded square */}
              <div className="w-12 h-12 rounded-2xl bg-[#f0f4f8] group-hover:bg-[#eaf0f7] text-[#173554] flex items-center justify-center shrink-0 transition-colors duration-300 shadow-2xs">
                <Icon className="w-5.5 h-5.5 text-[#173554] group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Stat Typography */}
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-[#173554] tracking-tight leading-tight">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#1f2937] leading-tight">
                  {metric.label}
                </div>
                <div className="text-[11px] sm:text-xs text-[#64748b] leading-relaxed">
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
