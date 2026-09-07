import React, { useState } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
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
      className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-xl border-b border-gray-100/90 shadow-[0_4px_24px_rgba(0,0,0,0.035)] transition-all"
    >
      {/* ======================================================== */}
      {/* TOP MINI UTILITY CONTACT & SOCIAL BAR (0% Overlap)       */}
      {/* ======================================================== */}
      <div className="bg-[#0e2238] border-b border-white/10 text-white text-[11px] sm:text-[12px] py-1.5 px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="max-w-[1640px] mx-auto flex items-center justify-between gap-4">
          
          {/* Left Contact Items */}
          <div className="flex items-center gap-3.5 sm:gap-5 text-white/80">
            <a
              href="tel:+923360875171"
              className="flex items-center gap-1.5 hover:text-[#d09554] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#d09554]" />
              <span>+92 336 0875171</span>
            </a>

            <a
              href="mailto:info@superinternational.pk"
              className="hidden md:flex items-center gap-1.5 hover:text-[#d09554] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#d09554]" />
              <span>info@superinternational.pk</span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5 text-white/60">
              <MapPin className="w-3.5 h-3.5 text-[#d09554]" />
              <span>North Karachi Industrial Area</span>
            </div>
          </div>

          {/* Right Social Media Channels */}
          <div className="flex items-center gap-2.5">
            <span className="hidden sm:inline text-[11px] font-bold text-white/60 uppercase tracking-wider">
              Connect:
            </span>

            <div className="flex items-center gap-1.5">
              {/* WhatsApp */}
              <a
                href="https://wa.me/923360875171?text=Hello%20Super%20International,%20I%20would%20like%20to%20inquire%20about%20packaging%20products."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direct"
                className="w-6 h-6 rounded-full bg-[#25D366] hover:scale-115 text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61567119799298"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-6 h-6 rounded-full bg-[#1877F2] hover:scale-115 text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/superinternationalpak/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-6 h-6 rounded-full hover:scale-115 text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
                style={{
                  background:
                    'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                }}
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Super_International_pak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="w-6 h-6 rounded-full bg-[#FF0000] hover:scale-115 text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://pk.linkedin.com/company/super-international-pakistan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Page"
                className="w-6 h-6 rounded-full bg-[#0A66C2] hover:scale-115 text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://x.com/Super_Intl_Pak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-6 h-6 rounded-full bg-[#1f2937] hover:bg-black hover:scale-115 text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

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
          {/* ======================================================== */}
          {/* RIGHT ACTION BUTTON: REQUEST QUOTE CTA                   */}
          {/* ======================================================== */}
          <div className="hidden md:flex items-center gap-4">
            {/* Request Quote Action CTA Button with Premium Dual-Beam & Moving Border Effect */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenQuoteModal}
              className="btn-premium-shine relative inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#d09554] via-[#e2aa6c] to-[#d09554] hover:from-[#e2aa6c] hover:to-[#c48a4c] text-black font-extrabold text-xs sm:text-sm tracking-wide shadow-[0_3px_16px_rgba(208,149,84,0.35)] hover:shadow-[0_6px_22px_rgba(208,149,84,0.45)] transition-all cursor-pointer shrink-0 border border-white/25"
            >
              {/* Dual 45-degree converging soft white shine beams meeting near center */}
              <div className="shine-layer" aria-hidden="true">
                <span className="shine-beam-left" />
                <span className="shine-beam-right" />
              </div>

              <span className="relative z-10">Request Quote</span>
              <ArrowUpRight className="w-4 h-4 relative z-10" />
            </motion.button>
          </div>

          {/* ======================================================== */}
          {/* MOBILE MENU CONTROLS                                    */}
          {/* ======================================================== */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2 rounded-full bg-[#d09554] text-black text-xs font-bold shadow-xs cursor-pointer"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-700 hover:text-[#234d77] hover:bg-gray-100 transition-colors cursor-pointer"
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
            className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4 shadow-2xl overflow-hidden"
          >
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#234d77] font-bold py-1 text-base"
            >
              Home
            </a>
            <a
              href="#categories-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#444444] hover:text-[#234d77] font-medium py-1 text-base"
            >
              Packaging Categories
            </a>
            <a
              href="#welcome-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#444444] hover:text-[#234d77] font-medium py-1 text-base"
            >
              About Us
            </a>
            <a
              href="#featured-products-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#444444] hover:text-[#234d77] font-medium py-1 text-base"
            >
              3D Models
            </a>
            <a
              href="#clients-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#444444] hover:text-[#234d77] font-medium py-1 text-base"
            >
              Clients
            </a>
            <a
              href="#testimonials-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#444444] hover:text-[#234d77] font-medium py-1 text-base"
            >
              Testimonials
            </a>

            {/* Mobile Social Media Pill Container */}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Connect With Us</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/923360875171"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.476-.15-.677.15-.201.3-.777.978-.952 1.178-.176.201-.351.226-.652.076-.301-.15-1.272-.469-2.423-1.496-.897-.8-1.503-1.788-1.678-2.089-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.176.201-.301.301-.502.101-.201.05-.376-.025-.526-.075-.151-.677-1.632-.928-2.234-.244-.587-.493-.507-.677-.517l-.577-.01c-.201 0-.527.075-.802.376s-1.053 1.029-1.053 2.509 1.078 2.91 1.229 3.111c.15.201 2.12 3.238 5.136 4.542.717.311 1.277.496 1.714.635.72.229 1.375.197 1.893.12.577-.087 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.076-.126-.276-.201-.577-.351zM12.04 2C6.527 2 2.04 6.488 2.04 12c0 1.93.55 3.731 1.503 5.257L2 22l4.877-1.503C8.328 21.37 10.129 22 12.04 22c5.513 0 10-4.488 10-10S17.553 2 12.04 2z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61567119799298"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/superinternationalpak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                  }}
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@Super_International_pak"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://pk.linkedin.com/company/super-international-pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/Super_Intl_Pak"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-8 h-8 rounded-full bg-[#1f2937] flex items-center justify-center text-white"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
            
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
