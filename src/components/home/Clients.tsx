import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { CLIENT_PARTNERS } from '../../data/mockData';

export default function Clients() {
  return (
    <section id="clients" className="py-16 sm:py-20 bg-[#f8fafc] text-[#222222] border-t border-[#dce6f0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-[#234d77] bg-[#f0f4f8] px-3.5 py-1.5 rounded-full">
            Valuable Brand Partnerships
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222222] tracking-tight">
            Trusted by Global & National FMCG Leaders
          </h2>
          <p className="text-xs sm:text-sm text-[#666666]">
            Providing tier-one mold tooling and high-volume container contract manufacturing for over 40 years.
          </p>
        </motion.div>

        {/* Partners Editorial Badge Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {CLIENT_PARTNERS.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, borderColor: '#234d77' }}
              className="p-5 rounded-2xl bg-white border border-[#dce6f0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center space-y-1.5 group cursor-default"
            >
              <div className="text-base sm:text-lg font-bold tracking-wider text-[#222222] group-hover:text-[#234d77] transition-colors">
                {client.logoText}
              </div>
              <div className="text-[10px] text-[#777777] font-medium leading-tight">
                {client.category}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-[#dce6f0] flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-[#555555]"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#234d77]" />
            <span>100% On-Time Export Dispatch SLA</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#234d77]" />
            <span>Full Spectral Certificate of Analysis per Resin Lot</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#234d77]" />
            <span>Non-Disclosure Agreements (NDA) for Proprietary Molds</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


