import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
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
      className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-start">
            <motion.a
              href="#"
              whileHover={{ y: -1 }}
              className="text-[15px] font-semibold text-[#234d77] relative py-1"
            >
              Home
              <motion.span
                layoutId="nav-underline"
                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#234d77] rounded-full"
              />
            </motion.a>

            <div
              className="relative"
              onMouseEnter={() => setProductDropdownOpen(true)}
              onMouseLeave={() => setProductDropdownOpen(false)}
            >
              <a
                href="#our-products"
                className="text-[15px] font-medium text-[#444444] hover:text-[#234d77] transition-colors flex items-center gap-1 py-1"
              >
                <span>Product</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
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
                    className="absolute top-full left-0 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-50"
                  >
                    {[
                      'Acrylic Jars',
                      'Aerosol Caps',
                      'Beauty Jars',
                      'Big Jars & Containers',
                      'Extrusion Blow Bottles',
                      'Developer & Shampoo Bottles',
                    ].map((item) => (
                      <a
                        key={item}
                        href="#categories"
                        className="block px-4 py-2.5 text-sm text-[#333333] hover:bg-[#f0f4f8] hover:text-[#234d77] transition-colors font-medium"
                      >
                        {item}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              href="#about-section"
              whileHover={{ y: -1 }}
              className="text-[15px] font-medium text-[#444444] hover:text-[#234d77] transition-colors"
            >
              About Us
            </motion.a>

            <motion.a
              href="#featured-products"
              whileHover={{ y: -1 }}
              className="text-[15px] font-medium text-[#444444] hover:text-[#234d77] transition-colors"
            >
              Blogs
            </motion.a>
          </nav>

          {/* Center Logo: Super International Circular Emblem Overlapping Section Below */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/4 sm:-translate-y-1/3 z-50">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group block relative focus:outline-none"
              aria-label="Super International Pvt. Ltd. Homepage"
            >
              {/* Outer circular badge frame with 10px white border */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white p-1 shadow-xl border-[8px] sm:border-[10px] border-white flex items-center justify-center transition-shadow hover:shadow-[0_15px_30px_rgba(35,77,119,0.25)]">
                <img
                  src="https://noorenterprises.com.pk/wp-content/uploads/2023/03/logo.png"
                  alt="Super International Pvt. Ltd."
                  className="w-full h-full object-contain rounded-full"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback container if remote image fails */}
                <div
                  style={{ display: 'none' }}
                  className="w-full h-full rounded-full bg-gradient-to-br from-[#234d77] via-[#1a3d5e] to-[#173554] flex-col items-center justify-center text-white"
                >
                  <span className="text-[10px] sm:text-xs font-black tracking-widest leading-none">SUPER</span>
                  <span className="text-[6px] sm:text-[7px] tracking-widest opacity-90 mt-0.5">INTERNATIONAL</span>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-end">
            <motion.a
              href="#modern-technology"
              whileHover={{ y: -1 }}
              className="text-[15px] font-medium text-[#444444] hover:text-[#234d77] transition-colors"
            >
              Modern Technology
            </motion.a>

            <motion.a
              href="#clients"
              whileHover={{ y: -1 }}
              className="text-[15px] font-medium text-[#444444] hover:text-[#234d77] transition-colors"
            >
              Clients
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -1 }}
              className="text-[15px] font-medium text-[#444444] hover:text-[#234d77] transition-colors"
            >
              Contact
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenQuoteModal}
              className="ml-2 px-4 py-2 rounded-full bg-[#d09554] hover:bg-[#b8833f] text-white text-xs font-bold shadow-xs transition-colors"
            >
              Get Quote
            </motion.button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 rounded-full bg-[#d09554] text-white text-xs font-semibold shadow-xs"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#234d77] hover:bg-gray-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-3 shadow-xl overflow-hidden"
          >
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#234d77] font-bold py-1.5"
            >
              Home
            </a>
            <a
              href="#our-products"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#444444] hover:text-[#234d77] font-medium py-1.5"
            >
              Product
            </a>
            <a
              href="#about-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#444444] hover:text-[#234d77] font-medium py-1.5"
            >
              About Us
            </a>
            <a
              href="#featured-products"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#444444] hover:text-[#234d77] font-medium py-1.5"
            >
              Blogs
            </a>
            <a
              href="#modern-technology"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#444444] hover:text-[#234d77] font-medium py-1.5"
            >
              Modern Technology
            </a>
            <a
              href="#clients"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#444444] hover:text-[#234d77] font-medium py-1.5"
            >
              Clients
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#444444] hover:text-[#234d77] font-medium py-1.5"
            >
              Contact
            </a>
            <div className="pt-3 border-t border-gray-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                }}
                className="w-full py-2.5 rounded-full bg-[#234d77] text-white font-bold text-center text-sm shadow-xs"
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
