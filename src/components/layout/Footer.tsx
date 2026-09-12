import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUp, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  ChevronRight, 
  MessageCircle, 
  Layers,
  CheckCircle2
} from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal?: () => void;
}

export default function Footer({ onOpenQuoteModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="relative pt-16 sm:pt-20 pb-10 bg-gradient-to-b from-[#11263d] via-[#173554] to-[#0c1c2e] text-white overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* AMBIENT BACKGROUND GLOW & GEOMETRIC ACCENTS                               */}
      {/* ========================================================================= */}
      {/* Top Gold Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#d09554] to-transparent z-10 opacity-80" />

      {/* Ambient Radial Golden Orbs */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#d09554]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#234d77]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#649dcf]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Dot Matrix Texture */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #d09554 1.2px, transparent 1.2px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. TOP PRE-FOOTER INTERACTIVE CTA BANNER                                  */}
        {/* ========================================================================= */}
        <div className="mb-14 sm:mb-18">
          <div className="relative rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.08] backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden">
            {/* Top decorative gold shimmer beam */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d09554]/80 to-transparent" />
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10 text-center lg:text-left">
              <div className="max-w-2xl space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d09554]/20 border border-[#d09554]/40 text-[#f5d5a8] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#d09554]" />
                  <span>Custom Moulding &amp; Bulk Orders</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Have a packaging concept or custom mould requirement?
                </h3>
                <p className="text-sm sm:text-base text-white/70 font-normal">
                  Our in-house CNC toolroom and engineers turn your blueprints into high-precision polymer containers in record time.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
                <button
                  onClick={onOpenQuoteModal}
                  className="btn-premium-shine relative px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#d09554] via-[#e2ab6f] to-[#d09554] text-[#173554] font-black text-sm uppercase tracking-wider shadow-[0_10px_25px_rgba(208,149,84,0.35)] hover:shadow-[0_14px_35px_rgba(208,149,84,0.5)] hover:brightness-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer border border-white/30"
                >
                  {/* Dual 45-degree converging soft white shine beams meeting near center */}
                  <div className="shine-layer" aria-hidden="true">
                    <span className="shine-beam-left" />
                    <span className="shine-beam-right" />
                  </div>

                  <span className="relative z-10">Request Bulk Quote</span>
                  <ChevronRight className="w-4 h-4 relative z-10" />
                </button>
                <a
                  href="https://wa.me/923360875171?text=Hello%20Super%20International,%20I%20would%20like%20to%20inquire%20about%20packaging%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 hover:border-[#d09554]/60 backdrop-blur-md transition-all duration-300 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN FOOTER CONTENT GRID                                               */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* ----------------------------------------------------------------------- */}
          {/* Col 1: Brand Identity Card with Official Company Logo                    */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo Emblem Pedestal */}
            <div className="inline-block p-4 sm:p-5 bg-white rounded-2xl sm:rounded-3xl border border-white/90 shadow-[0_14px_35px_rgba(0,0,0,0.25)] relative group">
              <div className="absolute -top-px left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#d09554] to-transparent opacity-80" />
              <img
                src="/super-logo.png"
                alt="Super International Pvt. Ltd."
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            <p className="text-sm text-white/75 leading-relaxed font-normal">
              Super International Pvt. Ltd. is Pakistan’s leading ISO 9001:2015 certified manufacturer of high-precision pharmaceutical containers, cosmetic jars, cold chain vaccine carriers, and custom blow-moulded packaging.
            </p>

            {/* Trust highlights */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-xs text-white/90 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#d09554] shrink-0" />
                <span>40+ Years of Manufacturing Excellence</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/90 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#d09554] shrink-0" />
                <span>100% Virgin Food-Grade &amp; Medical Polymers</span>
              </div>
            </div>

            {/* Social Media Pill Strip */}
            <div className="pt-2">
              <span className="block text-[11px] uppercase font-bold tracking-widest text-[#d09554] mb-3">
                Connect With Us
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  {
                    name: 'WhatsApp',
                    href: 'https://wa.me/923360875171?text=Hello%20Super%20International,%20I%20would%20like%20to%20inquire%20about%20packaging%20products.',
                    icon: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Facebook',
                    href: 'https://www.facebook.com/profile.php?id=61567119799298',
                    icon: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Instagram',
                    href: 'https://www.instagram.com/superinternationalpak/',
                    icon: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'YouTube',
                    href: 'https://www.youtube.com/@Super_International_pak',
                    icon: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'LinkedIn',
                    href: 'https://pk.linkedin.com/company/super-international-pakistan',
                    icon: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'X',
                    href: 'https://x.com/Super_Intl_Pak',
                    icon: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Super International on ${social.name}`}
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#d09554]/60 text-white/80 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-xs"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* Col 2: Navigation & Sections                                            */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d09554]" />
              <h4 className="text-base font-extrabold uppercase tracking-wider text-white">
                Explore
              </h4>
            </div>

            <ul className="space-y-2.5 list-none p-0 m-0 text-sm">
              {[
                { label: 'Company Overview', href: '#welcome-section' },
                { label: 'Factory Tour Video', href: '#tour-video-section' },
                { label: 'Product Categories', href: '#categories-section' },
                { label: 'Interactive 3D Models', href: '#featured-products-section' },
                { label: 'Client Portfolio', href: '#clients-section' },
                { label: 'Testimonials', href: '#testimonials-section' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#d09554] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#d09554]/60 group-hover:text-[#d09554] group-hover:translate-x-1 transition-all" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* Col 3: Key Packaging Categories                                         */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d09554]" />
              <h4 className="text-base font-extrabold uppercase tracking-wider text-white">
                Packaging Lines
              </h4>
            </div>

            <ul className="space-y-2.5 list-none p-0 m-0 text-sm">
              {[
                'Cosmetic & Skincare Jars',
                'Pharmaceutical Bottles & Droppers',
                'Vaccine Carriers & Cold-Chain Packs',
                'Shampoo & Lotion Dispenser Bottles',
                'Precision Applicators & Closures',
                'Medical Grade PVC Blister Trays',
              ].map((cat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-white/70">
                  <Layers className="w-3.5 h-3.5 text-[#649dcf]/70 shrink-0" />
                  <span className="text-xs sm:text-sm">{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* Col 4: Contact & Factory Operations                                     */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d09554]" />
              <h4 className="text-base font-extrabold uppercase tracking-wider text-white">
                Factory &amp; Inquiries
              </h4>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              {/* Phone */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#d09554]/40 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#234d77] text-[#d09554] flex items-center justify-center shrink-0 ring-1 ring-[#d09554]/30">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-white/40 tracking-wider">Direct Hotline</span>
                  <a
                    href="tel:+923360875171"
                    className="text-white hover:text-[#d09554] font-bold transition-colors"
                  >
                    +92 336 0875171
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#d09554]/40 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#234d77] text-[#d09554] flex items-center justify-center shrink-0 ring-1 ring-[#d09554]/30">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] uppercase font-bold text-white/40 tracking-wider">Official Email</span>
                  <a
                    href="mailto:info@superinternational.pk"
                    className="text-white hover:text-[#d09554] font-semibold transition-colors block truncate"
                  >
                    info@superinternational.pk
                  </a>
                  <a
                    href="mailto:waqarali@superinternational.pk"
                    className="text-white/60 hover:text-[#d09554] text-xs transition-colors block truncate mt-0.5"
                  >
                    waqarali@superinternational.pk
                  </a>
                </div>
              </div>

              {/* Plant Location */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#d09554]/40 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#234d77] text-[#d09554] flex items-center justify-center shrink-0 ring-1 ring-[#d09554]/30">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-white/40 tracking-wider">Manufacturing Plant</span>
                  <p className="text-white/80 text-xs font-medium leading-relaxed">
                    CP-40 Sector 6-D North Karachi, Industrial Area, Karachi, Pakistan.
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-center gap-2 text-xs text-white/50 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#d09554]" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM PKT</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. QUALITY ASSURANCE TRUST STRIP                                          */}
        {/* ========================================================================= */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 text-xs text-white/60">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            <div className="flex items-center gap-2 text-[#f5d5a8]">
              <ShieldCheck className="w-4 h-4 text-[#d09554]" />
              <span className="font-bold">ISO 9001:2015 Certified Management</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#649dcf]" />
              <span>Clean-Room Controlled Molding</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d09554]" />
              <span>100% In-House Tooling &amp; Mold Workshop</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white flex items-center gap-2 transition-all cursor-pointer group shrink-0"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[#d09554] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* ========================================================================= */}
        {/* 4. FOOTER COPYRIGHT & CREDITS ROW                                         */}
        {/* ========================================================================= */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-white/45 font-normal tracking-wide">
            © {new Date().getFullYear()} <span className="text-white/80 font-semibold">Super International Pvt. Ltd.</span> All Rights Reserved.
          </p>

          <p className="text-xs text-white/45">
            Designed &amp; Developed by{' '}
            <a
              href="https://ziczacsolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d09554] hover:text-[#f5d5a8] font-semibold transition-colors underline"
            >
              NextGenBytes
            </a>
            , Managed by{' '}
            <a
              href="https://kodexacore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d09554] hover:text-[#f5d5a8] font-semibold transition-colors underline"
            >
              Muhammad Usman Khan
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
