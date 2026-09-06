import React, { useState } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  return (
    <header
      id="main-header"
      className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100/90 shadow-[0_4px_24px_rgba(0,0,0,0.035)] transition-all"
    >
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-22 sm:h-24">
          
          {/* ======================================================== */}
          {/* BRAND LOGO OVERLAPPING PEDESTAL (Left Overlap Design)   */}
          {/* ======================================================== */}
          <div className="relative flex items-center h-full">
            {/* The Floating Overlapping Brand Card */}
            <motion.a
              href="#"
              whileHover={{ y: 2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="absolute left-0 top-1/2 translate-y-[-22%] sm:translate-y-[-16%] md:translate-y-[-14%] z-50 flex items-center justify-center p-3 sm:p-4 md:p-4.5 bg-white/98 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-slate-100/90 shadow-[0_14px_36px_rgba(35,77,119,0.14),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_46px_rgba(35,77,119,0.22)] hover:border-[#d09554]/45 transition-all duration-300 focus:outline-none group select-none"
              aria-label="Super International Pvt. Ltd. Homepage"
            >
              {/* Subtle top gold accent on hover */}
              <div className="absolute -top-px left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#d09554]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Large, Prominent, High-Resolution Logo */}
              <div className="relative h-12 sm:h-14 md:h-16 flex items-center justify-center">
                <img
                  src="/super-logo.png"
                  alt="Super International Pvt. Ltd."
                  className="h-full w-auto max-w-[210px] sm:max-w-[270px] md:max-w-[320px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback container if image fails */}
                <div
                  style={{ display: 'none' }}
                  className="h-11 px-4 rounded-xl bg-gradient-to-r from-[#234d77] to-[#173554] flex items-center justify-center text-white"
                >
                  <span className="text-xs font-black tracking-widest leading-none">SUPER INTERNATIONAL</span>
                </div>
              </div>
            </motion.a>

            {/* Spacer block reserving breathing room for navigation */}
            <div className="w-[220px] sm:w-[280px] md:w-[335px] h-1 flex-shrink-0" />
          </div>

          {/* ======================================================== */}
          {/* NAVIGATION LINKS (Desktop - Spacious & Refined)          */}
          {/* ======================================================== */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <motion.a
              href="#"
              whileHover={{ y: -1 }}
              className="text-[15px] lg:text-[16px] font-bold text-[#234d77] relative py-1"
            >
              Home
              <motion.span
                layoutId="nav-underline"
                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#234d77] rounded-full"
              />
            </motion.a>

            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductDropdownOpen(true)}
              onMouseLeave={() => setProductDropdownOpen(false)}
            >
              <a
                href="#our-products-section"
                className="text-[15px] lg:text-[16px] font-medium text-[#374151] hover:text-[#234d77] transition-colors flex items-center gap-1.5 py-1"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    productDropdownOpen ? 'rotate-180 text-[#234d77]' : ''
                  }`}
                />
              </a>

              <AnimatePresence>
                {productDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full -left-4 w-76 bg-white border border-gray-100 rounded-2xl shadow-2xl py-2 z-50 overflow-hidden"
                  >
                    <div className="px-4 py-2.5 border-b border-gray-50 bg-slate-50/70">
                      <span className="text-[11px] font-mono uppercase font-bold text-[#d09554] tracking-wider">
                        Packaging Divisions
                      </span>
                    </div>
                    {[
                      { name: 'Cosmetic Acrylic Jars', tag: 'Luxury' },
                      { name: 'Pharmaceutical Containers', tag: 'GMP' },
                      { name: 'Extrusion Blow Bottles', tag: 'Precision' },
                      { name: 'Aerosol & Pump Caps', tag: 'Actuators' },
                      { name: 'IML Dual-Color Packaging', tag: 'Advanced' },
                    ].map((item) => (
                      <a
                        key={item.name}
                        href="#our-products-section"
                        className="flex items-center justify-between px-4 py-3 text-sm text-[#333333] hover:bg-[#f0f4f8] hover:text-[#234d77] transition-colors font-medium group/item"
                      >
                        <span>{item.name}</span>
                        <span className="text-[11px] font-mono text-gray-400 group-hover/item:text-[#d09554] transition-colors">
                          {item.tag}
                        </span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              href="#welcome-section"
              whileHover={{ y: -1 }}
              className="text-[15px] lg:text-[16px] font-medium text-[#374151] hover:text-[#234d77] transition-colors"
            >
              About Us
            </motion.a>

            <motion.a
              href="#durability-sec"
              whileHover={{ y: -1 }}
              className="text-[15px] lg:text-[16px] font-medium text-[#374151] hover:text-[#234d77] transition-colors"
            >
              Quality &amp; Standards
            </motion.a>

            <motion.a
              href="#clients-section"
              whileHover={{ y: -1 }}
              className="text-[15px] lg:text-[16px] font-medium text-[#374151] hover:text-[#234d77] transition-colors"
            >
              Clients
            </motion.a>
          </nav>

          {/* ======================================================== */}
          {/* RIGHT ACTION BUTTONS (Polished, Generous Padding)       */}
          {/* ======================================================== */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#d09554] via-[#e2aa6c] to-[#d09554] hover:from-[#e2aa6c] hover:to-[#c48a4c] text-black font-extrabold text-xs sm:text-sm tracking-wide shadow-[0_3px_16px_rgba(208,149,84,0.35)] transition-all cursor-pointer"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* ======================================================== */}
          {/* MOBILE MENU CONTROLS                                    */}
          {/* ======================================================== */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2 rounded-full bg-[#d09554] text-black text-xs font-bold shadow-xs"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-700 hover:text-[#234d77] hover:bg-gray-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MOBILE MENU DRAWER                                      */}
      {/* ======================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-3.5 shadow-2xl overflow-hidden"
          >
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#234d77] font-bold py-1.5 text-base"
            >
              Home
            </a>
            <a
              href="#our-products-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#444444] hover:text-[#234d77] font-medium py-1.5 text-base"
            >
              Products Catalog
            </a>
            <a
              href="#welcome-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#444444] hover:text-[#234d77] font-medium py-1.5 text-base"
            >
              About Us
            </a>
            <a
              href="#durability-sec"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#444444] hover:text-[#234d77] font-medium py-1.5 text-base"
            >
              Quality &amp; Standards
            </a>
            <a
              href="#clients-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#444444] hover:text-[#234d77] font-medium py-1.5 text-base"
            >
              Clients
            </a>
            <div className="pt-3 border-t border-gray-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#d09554] to-[#dfa565] text-black font-bold text-center text-sm shadow-md"
              >
                Get Instant Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
