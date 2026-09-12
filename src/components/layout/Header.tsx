import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

const TICKER_ITEMS = [
  {
    badge: 'Direct Manufacturer',
    text: 'Factory Wholesale Prices on Offset, Corrugated & Luxury Packaging',
  },
  {
    badge: 'ISO 9001:2015',
    text: 'Certified Quality Standards & High-Precision Print Finishing',
  },
  {
    badge: 'Fast Turnaround',
    text: 'Rapid Production & Direct Factory Dispatch Nationwide',
  },
  {
    badge: 'Custom Solutions',
    text: 'CMYK Offset, UV Coating, Foil Stamping, Embossing & Window Patching',
  },
];

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);

  // Rotate announcement ticker every 3.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % TICKER_ITEMS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <header
      id="main-header"
      className="sticky top-0 z-[100] w-full transition-all duration-300"
    >
      {/* ========================================================================= */}
      {/* 1. TOP ULTRA-MODERN UTILITY STRIP                                         */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-[#06121d] via-[#0e2238] to-[#081523] border-b border-white/[0.08] text-white text-[11px] sm:text-[12px] py-1.5 px-4 sm:px-6 lg:px-8 relative z-50 shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-md">
        {/* Subtle Ambient Gold Bottom Shimmer Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d09554]/50 to-transparent pointer-events-none" />

        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Left Direct Contact Quick-Chips */}
          <div className="flex items-center gap-2 text-white/80 shrink-0">
            {/* Phone */}
            <a
              href="tel:+923360875171"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#d09554]/60 transition-all duration-200 text-white group shrink-0 shadow-xs"
            >
              <span className="w-4 h-4 rounded-full bg-[#d09554]/20 flex items-center justify-center group-hover:bg-[#d09554] transition-colors duration-200">
                <Phone className="w-2.5 h-2.5 text-[#d09554] group-hover:text-[#0e2238] transition-colors" />
              </span>
              <span className="font-semibold tracking-tight text-[11px] sm:text-[12px] group-hover:text-[#d09554] transition-colors">
                +92 336 0875171
              </span>
            </a>

            {/* Email (hidden on smaller screens) */}
            <a
              href="mailto:info@superinternational.pk"
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#d09554]/40 transition-all duration-200 text-white/80 hover:text-white shrink-0"
            >
              <Mail className="w-3.5 h-3.5 text-[#d09554]" />
              <span className="text-[11px] sm:text-[12px]">info@superinternational.pk</span>
            </a>
          </div>

          {/* Center Dynamic Sliding Micro-Ticker (Visible on MD and larger) */}
          <div className="hidden md:flex items-center justify-center flex-1 max-w-xl mx-2 overflow-hidden h-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={tickerIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex items-center gap-2 text-center text-xs font-medium text-white/90 truncate cursor-default"
              >
                <span className="px-2 py-0.5 rounded-full bg-[#d09554]/15 border border-[#d09554]/30 text-[#d09554] text-[10px] font-bold uppercase tracking-wider shrink-0">
                  {TICKER_ITEMS[tickerIndex].badge}
                </span>
                <span className="truncate text-white/80 hover:text-white transition-colors">
                  {TICKER_ITEMS[tickerIndex].text}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Sleek Translucent Social Media Pills with Vibrant Brand Colors */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="hidden sm:inline-block text-[11px] font-extrabold text-white/70 uppercase tracking-wider mr-0.5">
              Connect:
            </span>

            <div className="flex items-center gap-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/923360875171?text=Hello%20Super%20International,%20I%20would%20like%20to%20inquire%20about%20packaging%20products."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direct"
                title="Chat on WhatsApp"
                className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] border border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-115 shadow-[0_2px_8px_rgba(37,211,102,0.2)] hover:shadow-[0_0_14px_rgba(37,211,102,0.6)] cursor-pointer group"
              >
                <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61567119799298"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                title="Facebook"
                className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full bg-[#1877F2]/15 hover:bg-[#1877F2] border border-[#1877F2]/40 hover:border-[#1877F2] text-[#1877F2] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-115 shadow-[0_2px_8px_rgba(24,119,242,0.2)] hover:shadow-[0_0_14px_rgba(24,119,242,0.6)] cursor-pointer group"
              >
                <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/superinternationalpak/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                title="Instagram"
                className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full bg-[#E1306C]/15 hover:bg-gradient-to-tr hover:from-[#fd5949] hover:via-[#d6249f] hover:to-[#285AEB] border border-[#E1306C]/40 hover:border-transparent text-[#E1306C] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-115 shadow-[0_2px_8px_rgba(225,48,108,0.2)] hover:shadow-[0_0_14px_rgba(225,48,108,0.6)] cursor-pointer group"
              >
                <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://pk.linkedin.com/company/super-international-pakistan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full bg-[#0A66C2]/15 hover:bg-[#0A66C2] border border-[#0A66C2]/40 hover:border-[#0A66C2] text-[#0A66C2] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-115 shadow-[0_2px_8px_rgba(10,102,194,0.2)] hover:shadow-[0_0_14px_rgba(10,102,194,0.6)] cursor-pointer group"
              >
                <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Super_International_pak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                title="Watch on YouTube"
                className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full bg-[#FF0000]/15 hover:bg-[#FF0000] border border-[#FF0000]/40 hover:border-[#FF0000] text-[#FF0000] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-115 shadow-[0_2px_8px_rgba(255,0,0,0.2)] hover:shadow-[0_0_14px_rgba(255,0,0,0.6)] cursor-pointer group"
              >
                <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. FLOATING SPLIT DUAL-ISLAND NAVBAR (Reference Capsule Design)            */}
      {/* ========================================================================= */}
      <div className="absolute top-full left-0 right-0 w-full px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4.5 pointer-events-none z-[120]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-3 pointer-events-auto">
          
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT CAPSULE: Brand Logo + Primary Navigation Links                     */}
          {/* ----------------------------------------------------------------------- */}
          <nav
            aria-label="Primary Navigation Capsule"
            className="flex items-center gap-1 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-[#0a192c]/85 hover:bg-[#0a192c]/95 backdrop-blur-2xl border border-white/15 shadow-[0_14px_35px_rgba(0,0,0,0.3)] transition-all duration-300"
          >
            {/* Brand Logo Pill - High Contrast, Crisp & Prominent */}
            <a
              href="#"
              className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white hover:bg-white/95 transition-all shrink-0 shadow-[0_4px_14px_rgba(0,0,0,0.2)] group border border-white/90"
              aria-label="Super International Homepage"
            >
              <img
                src="/super-logo.png"
                alt="Super International Pvt. Ltd."
                className="h-6.5 sm:h-7.5 md:h-8 w-auto max-w-[160px] sm:max-w-[195px] md:max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 sm:gap-1.5">
              <a
                href="#"
                className="text-[13px] lg:text-[14px] font-semibold text-white px-3.5 py-1.5 rounded-full hover:bg-white/10 hover:text-[#d09554] transition-all duration-200"
              >
                Home
              </a>

              <a
                href="#our-products-section"
                className="text-[13px] lg:text-[14px] font-medium text-white/80 hover:text-[#d09554] px-3.5 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                Products
              </a>

              <a
                href="#welcome-section"
                className="text-[13px] lg:text-[14px] font-medium text-white/80 hover:text-[#d09554] px-3.5 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                About Us
              </a>

              <a
                href="#durability-sec"
                className="text-[13px] lg:text-[14px] font-medium text-white/80 hover:text-[#d09554] px-3.5 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                Quality &amp; Standards
              </a>

              <a
                href="#team-section"
                className="text-[13px] lg:text-[14px] font-medium text-white/80 hover:text-[#d09554] px-3.5 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                Team
              </a>

              <a
                href="#clients-section"
                className="text-[13px] lg:text-[14px] font-medium text-white/80 hover:text-[#d09554] px-3.5 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                Clients
              </a>
            </div>
          </nav>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT CAPSULE: Standalone Contact / Request Quote Capsule + Mobile Nav  */}
          {/* ----------------------------------------------------------------------- */}
          <div className="flex items-center gap-2 px-1.5 py-1.5 sm:px-2 sm:py-2 rounded-full bg-[#0a192c]/85 hover:bg-[#0a192c]/95 backdrop-blur-2xl border border-white/15 shadow-[0_14px_35px_rgba(0,0,0,0.3)] transition-all duration-300 shrink-0">
            
            {/* Desktop & Mobile Request Quote Action Button with Dual-Beam Shine & Circular Arrow */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenQuoteModal}
              className="btn-premium-shine relative inline-flex items-center justify-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-gradient-to-r from-[#d09554] via-[#e2aa6c] to-[#d09554] hover:from-[#e2aa6c] hover:to-[#c48a4c] text-black font-extrabold text-xs sm:text-sm tracking-wide shadow-[0_3px_16px_rgba(208,149,84,0.35)] transition-all cursor-pointer border border-white/30 group"
            >
              {/* Dual 45-degree converging soft white shine beams meeting near center */}
              <div className="shine-layer" aria-hidden="true">
                <span className="shine-beam-left" />
                <span className="shine-beam-right" />
              </div>

              <span className="relative z-10 hidden sm:inline">Request Quote</span>
              <span className="relative z-10 sm:hidden">Quote</span>

              {/* Nested Circular Black Arrow Badge */}
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0e2238] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow-xs relative z-10">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d09554]" />
              </span>
            </motion.button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>

        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* MOBILE DOWNWARD SLIDING GLASS DRAWER (Positioned beneath capsules)      */}
        {/* ----------------------------------------------------------------------- */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="mt-2.5 w-full max-w-lg mx-auto bg-[#0a192c]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white overflow-hidden pointer-events-auto"
            >
              <div className="flex flex-col space-y-2">
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-2xl bg-white/10 text-[#d09554] font-bold text-sm flex items-center justify-between"
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-[#d09554]" />
                </a>

                <a
                  href="#our-products-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-2xl hover:bg-white/5 text-white/90 font-medium text-sm flex items-center justify-between transition-colors"
                >
                  <span>Products</span>
                  <ChevronRight className="w-4 h-4 text-white/40" />
                </a>

                <a
                  href="#welcome-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-2xl hover:bg-white/5 text-white/90 font-medium text-sm flex items-center justify-between transition-colors"
                >
                  <span>About Us</span>
                  <ChevronRight className="w-4 h-4 text-white/40" />
                </a>

                <a
                  href="#durability-sec"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-2xl hover:bg-white/5 text-white/90 font-medium text-sm flex items-center justify-between transition-colors"
                >
                  <span>Quality &amp; Standards</span>
                  <ChevronRight className="w-4 h-4 text-white/40" />
                </a>

                <a
                  href="#team-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-2xl hover:bg-white/5 text-white/90 font-medium text-sm flex items-center justify-between transition-colors"
                >
                  <span>Our Team</span>
                  <ChevronRight className="w-4 h-4 text-white/40" />
                </a>

                <a
                  href="#clients-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-2xl hover:bg-white/5 text-white/90 font-medium text-sm flex items-center justify-between transition-colors"
                >
                  <span>Clients</span>
                  <ChevronRight className="w-4 h-4 text-white/40" />
                </a>
              </div>

              {/* Direct Instant Quote Button */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenQuoteModal) onOpenQuoteModal();
                  }}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#d09554] to-[#e2aa6c] text-black font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Instant Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
