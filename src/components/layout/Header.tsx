import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight, Search, Phone, Mail, MapPin, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';
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
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
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
      {/* 1. TOP ULTRA-MODERN UTILITY STRIP (Option B: Dynamic Micro-Ticker)         */}
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

          {/* Right Sleek Translucent Social Media Pills */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <span className="hidden sm:inline-block text-[10px] font-bold text-white/50 uppercase tracking-widest mr-0.5">
              Connect
            </span>

            <div className="flex items-center gap-1.5">
              {/* WhatsApp */}
              <a
                href="https://wa.me/923360875171?text=Hello%20Super%20International,%20I%20would%20like%20to%20inquire%20about%20packaging%20products."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direct"
                title="Chat on WhatsApp"
                className="w-6.5 h-6.5 rounded-full bg-white/[0.06] hover:bg-[#25D366] border border-white/10 hover:border-[#25D366] text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs cursor-pointer group"
              >
                <svg className="w-3.5 h-3.5 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61567119799298"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                title="Facebook"
                className="w-6.5 h-6.5 rounded-full bg-white/[0.06] hover:bg-[#1877F2] border border-white/10 hover:border-[#1877F2] text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs cursor-pointer group"
              >
                <svg className="w-3.5 h-3.5 fill-current transition-colors" viewBox="0 0 24 24">
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
                className="w-6.5 h-6.5 rounded-full bg-white/[0.06] hover:bg-gradient-to-tr hover:from-[#fd5949] hover:via-[#d6249f] hover:to-[#285AEB] border border-white/10 hover:border-pink-500 text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs cursor-pointer group"
              >
                <svg className="w-3.5 h-3.5 fill-current transition-colors" viewBox="0 0 24 24">
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
                className="w-6.5 h-6.5 rounded-full bg-white/[0.06] hover:bg-[#0A66C2] border border-white/10 hover:border-[#0A66C2] text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs cursor-pointer group"
              >
                <svg className="w-3.5 h-3.5 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. FLOATING GLASS ISLAND NAVBAR CONTAINER (Overlapping Directly Over Hero)*/}
      {/* ========================================================================= */}
      <div className="absolute top-full left-0 right-0 w-full px-3 sm:px-6 md:px-8 pt-3 sm:pt-4 pointer-events-none">
        <div className="max-w-[1440px] mx-auto pointer-events-auto">
          <nav
            aria-label="Main Navigation"
            className="relative flex items-center justify-between px-4 sm:px-6 md:px-7 h-16 sm:h-18 bg-white/85 hover:bg-white/95 backdrop-blur-2xl border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.14)] rounded-2xl sm:rounded-3xl transition-all duration-300"
          >
            {/* Top Subtle Glass Highlight */}
            <div className="absolute -top-px left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#d09554]/60 to-transparent pointer-events-none" />

            {/* ------------------------------------------------------------------- */}
            {/* LEFT: BRAND LOGO (Full Color Official Logo)                         */}
            {/* ------------------------------------------------------------------- */}
            <a
              href="#"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none select-none shrink-0"
              aria-label="Super International Homepage"
            >
              <div className="h-10 sm:h-11 md:h-12 flex items-center justify-center">
                <img
                  src="/super-logo.png"
                  alt="Super International"
                  className="h-full w-auto max-w-[180px] sm:max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div
                  style={{ display: 'none' }}
                  className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#234d77] to-[#173554] items-center justify-center text-white font-black text-xs"
                >
                  SUPER INTERNATIONAL
                </div>
              </div>
            </a>

            {/* ------------------------------------------------------------------- */}
            {/* CENTER: DESKTOP ORIGINAL NAVIGATION LINKS (Direct clean links)       */}
            {/* ------------------------------------------------------------------- */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] xl:text-[15px] font-semibold text-[#374151]">
              {/* Home */}
              <a
                href="#"
                className="text-[#234d77] font-bold py-1 relative group"
              >
                <span>Home</span>
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#234d77] rounded-full" />
              </a>

              {/* Products (Direct Link on Desktop - No Dropdown) */}
              <a
                href="#our-products-section"
                className="hover:text-[#234d77] transition-colors duration-200 py-1 relative group"
              >
                <span>Products</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d09554] transition-all duration-300 group-hover:w-full" />
              </a>

              {/* About Us */}
              <a
                href="#welcome-section"
                className="hover:text-[#234d77] transition-colors duration-200 py-1 relative group"
              >
                <span>About Us</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d09554] transition-all duration-300 group-hover:w-full" />
              </a>

              {/* Quality & Standards */}
              <a
                href="#durability-sec"
                className="hover:text-[#234d77] transition-colors duration-200 py-1 relative group"
              >
                <span>Quality &amp; Standards</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d09554] transition-all duration-300 group-hover:w-full" />
              </a>

              {/* Clients */}
              <a
                href="#clients-section"
                className="hover:text-[#234d77] transition-colors duration-200 py-1 relative group"
              >
                <span>Clients</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d09554] transition-all duration-300 group-hover:w-full" />
              </a>
            </div>

            {/* ------------------------------------------------------------------- */}
            {/* RIGHT: ACTION CONTROLS & GOLD SHINE CTA BUTTON                      */}
            {/* ------------------------------------------------------------------- */}
            <div className="flex items-center gap-2.5 sm:gap-4 md:gap-5">
              {/* Request Quote Button with Moving Border & Dual 45° White Shine Beams */}
              <button
                onClick={onOpenQuoteModal}
                className="btn-premium-shine relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#d09554] via-[#e2aa6c] to-[#d09554] hover:from-[#e2aa6c] hover:to-[#c48a4c] text-[#173554] font-black text-xs sm:text-sm tracking-wide shadow-[0_4px_18px_rgba(208,149,84,0.35)] transition-all cursor-pointer shrink-0 border border-white/40"
              >
                {/* Dual 45-degree converging soft white shine beams meeting near center */}
                <div className="shine-layer" aria-hidden="true">
                  <span className="shine-beam-left" />
                  <span className="shine-beam-right" />
                </div>

                <span className="relative z-10">Request Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 text-[#173554]" />
              </button>

              {/* Search Icon */}
              <a
                href="#our-products-section"
                aria-label="Search Catalog"
                className="hidden md:flex items-center justify-center text-gray-500 hover:text-[#234d77] transition-colors p-1"
              >
                <Search className="w-4.5 h-4.5" />
              </a>

              {/* Hamburger Menu Toggle Button (Visible on mobile/tablet) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-gray-700 hover:text-[#234d77] hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <div className="flex flex-col gap-1.5 w-5">
                    <span className="block h-0.5 w-full bg-current rounded-full" />
                    <span className="block h-0.5 w-full bg-current rounded-full" />
                  </div>
                )}
              </button>
            </div>

          </nav>

          {/* ========================================================================= */}
          {/* 3. MOBILE MENU DROPDOWN (Slides Downwards Smoothly Above Hero Carousel)  */}
          {/* ========================================================================= */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-2 w-full z-[120] bg-white/95 backdrop-blur-2xl border border-gray-200/90 rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] text-[#222222] space-y-3 pointer-events-auto"
              >
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#234d77] font-bold py-1.5 text-base border-b border-gray-100"
                >
                  Home
                </a>

                {/* Mobile Products with Sub-Divisions Dropdown */}
                <div className="py-1 border-b border-gray-100">
                  <button
                    onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                    className="w-full flex items-center justify-between text-[#444444] font-medium py-1.5 text-base cursor-pointer"
                  >
                    <span>Products &amp; Divisions</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        productDropdownOpen ? 'rotate-180 text-[#234d77]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {productDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-3 py-2 space-y-2 overflow-hidden"
                      >
                        {[
                          { name: 'Cosmetic Acrylic Jars', href: '#our-products-section' },
                          { name: 'Pharmaceutical Bottles', href: '#our-products-section' },
                          { name: 'Extrusion Blow Moulding', href: '#our-products-section' },
                          { name: 'Aerosol Caps & Pumps', href: '#our-products-section' },
                          { name: 'IML Dual-Color Packaging', href: '#our-products-section' },
                        ].map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setProductDropdownOpen(false);
                            }}
                            className="block text-sm text-gray-600 hover:text-[#234d77] py-1"
                          >
                            • {sub.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="#welcome-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#444444] hover:text-[#234d77] font-medium py-1.5 text-base border-b border-gray-100"
                >
                  About Us
                </a>
                <a
                  href="#durability-sec"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#444444] hover:text-[#234d77] font-medium py-1.5 text-base border-b border-gray-100"
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

                {/* Mobile Direct Quote Button */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenQuoteModal) onOpenQuoteModal();
                    }}
                    className="w-full py-3 rounded-full bg-gradient-to-r from-[#d09554] via-[#e2aa6c] to-[#d09554] text-[#173554] font-black text-center text-sm shadow-md cursor-pointer"
                  >
                    Request Instant Quote
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
