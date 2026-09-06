import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="main-footer"
      className="relative pt-16 pb-8 overflow-hidden"
      style={{ backgroundColor: '#173554' }}
    >
      {/* Animated dot grid pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, #d09554 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Gold gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d09554]/60 to-transparent z-10" />

      <div className="relative z-10 max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-12">
          
          {/* Col 1: Product Showcase Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="footer-img max-w-sm sm:max-w-md w-full relative">
              <img
                src="https://noorenterprises.com.pk/wp-content/uploads/2023/08/pic.png"
                alt="Super International Pvt. Ltd. Plastic Packaging Containers"
                className="w-full h-auto object-contain drop-shadow-lg relative z-10"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80';
                }}
              />
              {/* Subtle gold glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#d09554]/8 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <div className="footer-links">
              <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-0 list-none p-0 m-0">
                <li className="footer-link-item">
                  <a href="#">Home</a>
                </li>
                <li className="footer-link-item">
                  <a href="#clients-section">Clients</a>
                </li>
                <li className="footer-link-item">
                  <a href="#durability-section">Quality</a>
                </li>
                <li className="footer-link-item">
                  <a href="#iml-3d-section">Modern Technology</a>
                </li>
                <li className="footer-link-item">
                  <a href="#our-products-sec">Product</a>
                </li>
                <li className="footer-link-item">
                  <a href="#welcome-section">About Us</a>
                </li>
                <li className="footer-link-item">
                  <a href="#contact-quote">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Contact Info */}
          <div className="lg:col-span-3">
            <div className="footer-links">
              <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-6">
                Contact Info
              </h4>
              <ul className="space-y-4 list-none p-0 m-0 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#234d77] text-[#d09554] flex items-center justify-center shrink-0 mt-0.5 ring-1 ring-[#d09554]/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-white/40">Direct Call</span>
                    <a
                      href="tel:+923360875171"
                      className="text-white hover:text-[#d09554] font-semibold transition-colors"
                    >
                      +92 336 0875171
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#234d77] text-[#d09554] flex items-center justify-center shrink-0 mt-0.5 ring-1 ring-[#d09554]/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-white/40">Email Inquiry</span>
                    <a
                      href="mailto:info@superinternational.pk"
                      className="text-white hover:text-[#d09554] font-semibold transition-colors block"
                    >
                      info@superinternational.pk
                    </a>
                    <a
                      href="mailto:waqarali@superinternational.pk"
                      className="text-white/60 hover:text-[#d09554] text-xs transition-colors block mt-0.5"
                    >
                      waqarali@superinternational.pk
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#234d77] text-[#d09554] flex items-center justify-center shrink-0 mt-0.5 ring-1 ring-[#d09554]/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-white/40">Plant Location</span>
                    <p className="text-white/80 text-xs sm:text-sm font-medium leading-snug">
                      CP-40 Sector 6-D North Karachi, Industrial Area, Karachi, Pakistan.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: ISO 9001 Certificate Image */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="footer-certificate-image text-center lg:text-right">
              <div className="relative inline-block">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 inline-block">
                  <img
                    src="https://noorenterprises.com.pk/wp-content/uploads/2023/08/iso_9001.png"
                    alt="ISO 9001:2015 Certified Manufacturer"
                    className="max-h-36 sm:max-h-44 w-auto object-contain mx-auto drop-shadow-[0_0_20px_rgba(208,149,84,0.15)]"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                {/* Gold glow behind certificate */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#d09554]/5 rounded-full blur-3xl pointer-events-none" />
              </div>
              <p className="text-[11px] text-[#d09554] font-bold uppercase tracking-wider mt-3">
                Certified Quality Management
              </p>
            </div>
          </div>

        </div>

        {/* Footer Copyright Row */}
        <div className="footer-copyright pt-8 border-t border-white/10 text-center relative">
          {/* Gold gradient line above copyright */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#d09554]/40 to-transparent" />
          <h6 className="text-xs sm:text-sm text-white/40 font-normal tracking-wide">
            2026 &copy; Super International Pvt. Ltd. All Rights Reserved. Design and Developed by{' '}
            <a
              href="https://ziczacsolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d09554] hover:text-[#e8c493] underline font-semibold transition-colors"
            >
              NextGenBytes
            </a>
            , Managed By{' '}
            <a
              href="https://kodexacore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d09554] hover:text-[#e8c493] underline font-semibold transition-colors"
            >
              Muhammad Usman Khan
            </a>
          </h6>
        </div>

      </div>
    </footer>
  );
}
