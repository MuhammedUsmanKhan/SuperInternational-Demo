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
          {/* RIGHT ACTION BUTTONS & SOCIAL PILL BAR                  */}
          {/* ======================================================== */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Social Media Pill Container */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#f0f4f8] border border-slate-200/90 shadow-inner">
              {/* WhatsApp */}
              <a
                href="https://wa.me/923360875171"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xs hover:scale-115 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.476-.15-.677.15-.201.3-.777.978-.952 1.178-.176.201-.351.226-.652.076-.301-.15-1.272-.469-2.423-1.496-.897-.8-1.503-1.788-1.678-2.089-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.176.201-.301.301-.502.101-.201.05-.376-.025-.526-.075-.151-.677-1.632-.928-2.234-.244-.587-.493-.507-.677-.517l-.577-.01c-.201 0-.527.075-.802.376s-1.053 1.029-1.053 2.509 1.078 2.91 1.229 3.111c.15.201 2.12 3.238 5.136 4.542.717.311 1.277.496 1.714.635.72.229 1.375.197 1.893.12.577-.087 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.076-.126-.276-.201-.577-.351zM12.04 2C6.527 2 2.04 6.488 2.04 12c0 1.93.55 3.731 1.503 5.257L2 22l4.877-1.503C8.328 21.37 10.129 22 12.04 22c5.513 0 10-4.488 10-10S17.553 2 12.04 2z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-xs hover:scale-115 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white shadow-xs hover:scale-115 hover:shadow-md transition-all duration-300 cursor-pointer"
                style={{
                  background:
                    'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                }}
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-xs hover:scale-115 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white shadow-xs hover:scale-115 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white shadow-xs hover:scale-115 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>

            {/* Request Quote Action CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#d09554] via-[#e2aa6c] to-[#d09554] hover:from-[#e2aa6c] hover:to-[#c48a4c] text-black font-extrabold text-xs sm:text-sm tracking-wide shadow-[0_3px_16px_rgba(208,149,84,0.35)] transition-all cursor-pointer shrink-0"
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
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Connect With Us</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/923360875171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.476-.15-.677.15-.201.3-.777.978-.952 1.178-.176.201-.351.226-.652.076-.301-.15-1.272-.469-2.423-1.496-.897-.8-1.503-1.788-1.678-2.089-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.176.201-.301.301-.502.101-.201.05-.376-.025-.526-.075-.151-.677-1.632-.928-2.234-.244-.587-.493-.507-.677-.517l-.577-.01c-.201 0-.527.075-.802.376s-1.053 1.029-1.053 2.509 1.078 2.91 1.229 3.111c.15.201 2.12 3.238 5.136 4.542.717.311 1.277.496 1.714.635.72.229 1.375.197 1.893.12.577-.087 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.076-.126-.276-.201-.577-.351zM12.04 2C6.527 2 2.04 6.488 2.04 12c0 1.93.55 3.731 1.503 5.257L2 22l4.877-1.503C8.328 21.37 10.129 22 12.04 22c5.513 0 10-4.488 10-10S17.553 2 12.04 2z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-[#1877F2] flex items-center justify-center text-white"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                  }}
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-[#FF0000] flex items-center justify-center text-white"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
