import React from 'react';
import {
  ShieldCheck,
  Cpu,
  Truck,
  Compass,
  Sparkles,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US_FEATURES } from '../../data/mockData';

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#234d77]" />,
    Cpu: <Cpu className="w-6 h-6 text-[#234d77]" />,
    Truck: <Truck className="w-6 h-6 text-[#234d77]" />,
    Compass: <Compass className="w-6 h-6 text-[#234d77]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#234d77]" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-[#234d77]" />,
  };

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-[#f8fafc] text-[#222222] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-[#234d77] bg-[#f0f4f8] px-3.5 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222222] tracking-tight">
            Engineered for Precision & Reliability
          </h2>
          <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
            Super International is trusted by top cosmetic exporters and multinational brands across Pakistan for premium quality packaging.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-7 bg-white border border-[#dce6f0] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#f0f4f8] flex items-center justify-center shadow-xs">
                    {iconMap[feat.icon]}
                  </div>
                  {feat.metric && (
                    <div className="text-right">
                      <span className="text-2xl font-black text-[#234d77]">
                        {feat.metric}
                      </span>
                      <span className="block text-[10px] uppercase font-bold text-gray-400">
                        {feat.metricLabel}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-[#234d77] uppercase tracking-wider">
                    {feat.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-[#222222]">
                    {feat.title}
                  </h3>
                </div>

                <p className="text-sm text-[#666666] leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-[#234d77] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#234d77]" />
                <span>Internationally Certified Quality</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


