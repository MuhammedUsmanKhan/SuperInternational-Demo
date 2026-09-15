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
import { useTheme } from '../../context/ThemeContext';

interface FooterProps {
  onOpenQuoteModal?: () => void;
}

export default function Footer({ onOpenQuoteModal }: FooterProps) {
  const { isLight } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className={`relative pt-16 sm:pt-20 pb-10 ${
        isLight
          ? 'bg-gradient-to-b from-[#faf5ec] via-[#f1eae0] to-[#ebe1d0] text-slate-800'
          : 'bg-gradient-to-b from-[#11263d] via-[#173554] to-[#0c1c2e] text-white'
      } overflow-hidden transition-colors duration-500`}
    >
      {/* ========================================================================= */}
      {/* AMBIENT BACKGROUND GLOW & GEOMETRIC ACCENTS                               */}
      {/* ========================================================================= */}
      {/* Top Gold Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#d09554] to-transparent z-10 opacity-80" />

      {/* Ambient Radial Golden Orbs (Light Mode Only) */}
      {isLight && (
        <>
          <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#d09554]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#e8c493]/25 rounded-full blur-[120px] pointer-events-none" />
        </>
      )}

      {/* Subtle Dot Matrix / Blueprint Texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className={`absolute inset-0 ${
            isLight ? 'bg-blueprint-atelier-light opacity-60' : 'opacity-[0.035]'
          }`}
          style={!isLight ? {
            backgroundImage: 'radial-gradient(circle, #d09554 1.2px, transparent 1.2px)',
            backgroundSize: '28px 28px',
          } : undefined}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. TOP PRE-FOOTER INTERACTIVE CTA BANNER                                  */}
        {/* ========================================================================= */}
        <div className="mb-14 sm:mb-18">
          <div className={`relative rounded-3xl p-6 sm:p-8 md:p-10 ${
            isLight
              ? 'bg-white/95 backdrop-blur-xl border-t-2 border-t-[#d09554] border-x border-b border-[#d09554]/25 shadow-[0_20px_50px_rgba(208,149,84,0.14)]'
              : 'bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.08] backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.25)]'
          } overflow-hidden`}>
            {/* Top decorative gold shimmer beam */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d09554]/80 to-transparent" />
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10 text-center lg:text-left">
              <div className="max-w-2xl space-y-2">
                <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full ${
                  isLight
                    ? 'bg-[#d09554]/15 border border-[#d09554]/30 text-[#8d561d]'
                    : 'bg-[#d09554]/20 border border-[#d09554]/40 text-[#f5d5a8]'
                } text-xs font-bold uppercase tracking-wider`}>
                  <Sparkles className="w-3.5 h-3.5 text-[#d09554]" />
                  <span>Custom Moulding &amp; Bulk Orders</span>
                </div>
                <h3 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold ${isLight ? 'text-[#173554]' : 'text-white'} tracking-tight leading-tight`}>
                  Have a packaging concept or custom mould requirement?
                </h3>
                <p className={`text-sm sm:text-base ${isLight ? 'text-slate-600' : 'text-white/70'} font-normal`}>
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
                  className={`px-6 py-3.5 rounded-2xl ${
                    isLight
                      ? 'bg-white hover:bg-[#faf5ec] text-[#173554] border border-[#d09554]/30 shadow-xs'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-[#d09554]/60'
                  } backdrop-blur-md transition-all duration-300 flex items-center gap-2 font-bold text-sm`}
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
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b ${isLight ? 'border-[#d09554]/20' : 'border-white/10'}`}>
          
          {/* ----------------------------------------------------------------------- */}
          {/* Col 1: Brand Identity Card with Official Company Logo                    */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo Emblem Pedestal */}
            <div className={`inline-block p-4 sm:p-5 bg-white rounded-2xl sm:rounded-3xl border ${isLight ? 'border-[#d09554]/30 shadow-[0_12px_32px_rgba(208,149,84,0.12)]' : 'border-white/90 shadow-[0_14px_35px_rgba(0,0,0,0.25)]'} relative group`}>
              <div className="absolute -top-px left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#d09554] to-transparent opacity-80" />
              <img
                src="/super-logo.png"
                alt="Super International Pvt. Ltd."
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-white/75'} leading-relaxed font-normal`}>
              Super International Pvt. Ltd. is Pakistan’s leading ISO 9001:2015 certified manufacturer of high-precision pharmaceutical containers, cosmetic jars, cold chain vaccine carriers, and custom blow-moulded packaging.
            </p>

            {/* Trust highlights */}
            <div className="space-y-2">
              <div className={`flex items-center gap-2.5 text-xs ${isLight ? 'text-slate-700' : 'text-white/90'} font-semibold`}>
                <CheckCircle2 className="w-4 h-4 text-[#d09554] shrink-0" />
                <span>40+ Years of Manufacturing Excellence</span>
              </div>
              <div className={`flex items-center gap-2.5 text-xs ${isLight ? 'text-slate-700' : 'text-white/90'} font-semibold`}>
                <CheckCircle2 className="w-4 h-4 text-[#d09554] shrink-0" />
                <span>100% Virgin Food-Grade &amp; Medical Polymers</span>
              </div>
            </div>

            {/* Social Media Pill Strip */}
            <div className="pt-2">
              <span className={`block text-[11px] uppercase font-bold tracking-widest ${isLight ? 'text-[#8d561d]' : 'text-[#d09554]'} mb-3`}>
                Connect With Us
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  {
                    name: 'WhatsApp',
                    href: 'https://wa.me/923360875171?text=Hello%20Super%20International,%20I%20would%20like%20to%20inquire%20about%20packaging%20products.',
                    title: 'Chat on WhatsApp',
                    ariaLabel: 'WhatsApp Direct',
                    colorClasses: 'bg-[#25D366]/15 hover:bg-[#25D366] border border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] hover:text-white shadow-[0_2px_8px_rgba(37,211,102,0.2)] hover:shadow-[0_0_14px_rgba(37,211,102,0.6)]',
                    icon: (
                      <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Facebook',
                    href: 'https://www.facebook.com/profile.php?id=61567119799298',
                    title: 'Facebook Page',
                    ariaLabel: 'Facebook Page',
                    colorClasses: 'bg-[#1877F2]/15 hover:bg-[#1877F2] border border-[#1877F2]/40 hover:border-[#1877F2] text-[#1877F2] hover:text-white shadow-[0_2px_8px_rgba(24,119,242,0.2)] hover:shadow-[0_0_14px_rgba(24,119,242,0.6)]',
                    icon: (
                      <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Instagram',
                    href: 'https://www.instagram.com/superinternationalpak/',
                    title: 'Instagram Profile',
                    ariaLabel: 'Instagram Profile',
                    colorClasses: 'bg-[#E1306C]/15 hover:bg-gradient-to-tr hover:from-[#fd5949] hover:via-[#d6249f] hover:to-[#285AEB] border border-[#E1306C]/40 hover:border-transparent text-[#E1306C] hover:text-white shadow-[0_2px_8px_rgba(225,48,108,0.2)] hover:shadow-[0_0_14px_rgba(225,48,108,0.6)]',
                    icon: (
                      <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'LinkedIn',
                    href: 'https://pk.linkedin.com/company/super-international-pakistan',
                    title: 'LinkedIn',
                    ariaLabel: 'LinkedIn',
                    colorClasses: 'bg-[#0A66C2]/15 hover:bg-[#0A66C2] border border-[#0A66C2]/40 hover:border-[#0A66C2] text-[#0A66C2] hover:text-white shadow-[0_2px_8px_rgba(10,102,194,0.2)] hover:shadow-[0_0_14px_rgba(10,102,194,0.6)]',
                    icon: (
                      <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'YouTube',
                    href: 'https://www.youtube.com/@Super_International_pak',
                    title: 'Watch on YouTube',
                    ariaLabel: 'YouTube Channel',
                    colorClasses: 'bg-[#FF0000]/15 hover:bg-[#FF0000] border border-[#FF0000]/40 hover:border-[#FF0000] text-[#FF0000] hover:text-white shadow-[0_2px_8px_rgba(255,0,0,0.2)] hover:shadow-[0_0_14px_rgba(255,0,0,0.6)]',
                    icon: (
                      <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'X',
                    href: 'https://x.com/Super_Intl_Pak',
                    title: 'Follow on X',
                    ariaLabel: 'X (formerly Twitter)',
                    colorClasses: isLight
                      ? 'bg-black/10 hover:bg-black border border-black/30 hover:border-black text-black hover:text-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:shadow-[0_0_14px_rgba(0,0,0,0.4)]'
                      : 'bg-white/10 hover:bg-white border border-white/30 hover:border-white text-white hover:text-black shadow-[0_2px_8px_rgba(255,255,255,0.15)] hover:shadow-[0_0_14px_rgba(255,255,255,0.4)]',
                    icon: (
                      <svg className="w-3.5 h-3.5 fill-current transition-colors" viewBox="0 0 24 24">
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
                    title={social.title}
                    aria-label={social.ariaLabel}
                    className={`w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-115 cursor-pointer group ${social.colorClasses}`}
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
              <h4 className={`text-base font-extrabold uppercase tracking-wider ${isLight ? 'text-[#173554]' : 'text-white'}`}>
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
                    className={`${isLight ? 'text-slate-600 hover:text-[#d09554]' : 'text-white/70 hover:text-[#d09554]'} transition-colors duration-200 flex items-center gap-1.5 group`}
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
              <h4 className={`text-base font-extrabold uppercase tracking-wider ${isLight ? 'text-[#173554]' : 'text-white'}`}>
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
                <li key={idx} className={`flex items-center gap-2 ${isLight ? 'text-slate-600' : 'text-white/70'}`}>
                  <Layers className="w-3.5 h-3.5 text-[#d09554] shrink-0" />
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
              <h4 className={`text-base font-extrabold uppercase tracking-wider ${isLight ? 'text-[#173554]' : 'text-white'}`}>
                Factory &amp; Inquiries
              </h4>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              {/* Phone */}
              <div className={`flex items-start gap-3 p-3 rounded-2xl ${
                isLight ? 'bg-white border border-[#d09554]/25 hover:border-[#d09554] shadow-2xs' : 'bg-white/[0.04] border border-white/10 hover:border-[#d09554]/40'
              } transition-colors`}>
                <div className={`w-8 h-8 rounded-xl ${isLight ? 'bg-[#faf5ec] text-[#b87c3a] border border-[#d09554]/20' : 'bg-[#234d77] text-[#d09554] ring-1 ring-[#d09554]/30'} flex items-center justify-center shrink-0`}>
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className={`block text-[10px] uppercase font-bold ${isLight ? 'text-slate-500' : 'text-white/40'} tracking-wider`}>Direct Hotline</span>
                  <a
                    href="tel:+923360875171"
                    className={`${isLight ? 'text-[#173554]' : 'text-white'} hover:text-[#d09554] font-bold transition-colors`}
                  >
                    +92 336 0875171
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className={`flex items-start gap-3 p-3 rounded-2xl ${
                isLight ? 'bg-white border border-[#d09554]/25 hover:border-[#d09554] shadow-2xs' : 'bg-white/[0.04] border border-white/10 hover:border-[#d09554]/40'
              } transition-colors`}>
                <div className={`w-8 h-8 rounded-xl ${isLight ? 'bg-[#faf5ec] text-[#b87c3a] border border-[#d09554]/20' : 'bg-[#234d77] text-[#d09554] ring-1 ring-[#d09554]/30'} flex items-center justify-center shrink-0`}>
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className={`block text-[10px] uppercase font-bold ${isLight ? 'text-slate-500' : 'text-white/40'} tracking-wider`}>Official Email</span>
                  <a
                    href="mailto:info@superinternational.pk"
                    className={`${isLight ? 'text-[#173554]' : 'text-white'} hover:text-[#d09554] font-semibold transition-colors block truncate`}
                  >
                    info@superinternational.pk
                  </a>
                  <a
                    href="mailto:waqarali@superinternational.pk"
                    className={`${isLight ? 'text-slate-500' : 'text-white/60'} hover:text-[#d09554] text-xs transition-colors block truncate mt-0.5`}
                  >
                    waqarali@superinternational.pk
                  </a>
                </div>
              </div>

              {/* Plant Location */}
              <div className={`flex items-start gap-3 p-3 rounded-2xl ${
                isLight ? 'bg-white border border-[#d09554]/25 hover:border-[#d09554] shadow-2xs' : 'bg-white/[0.04] border border-white/10 hover:border-[#d09554]/40'
              } transition-colors`}>
                <div className={`w-8 h-8 rounded-xl ${isLight ? 'bg-[#faf5ec] text-[#b87c3a] border border-[#d09554]/20' : 'bg-[#234d77] text-[#d09554] ring-1 ring-[#d09554]/30'} flex items-center justify-center shrink-0`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className={`block text-[10px] uppercase font-bold ${isLight ? 'text-slate-500' : 'text-white/40'} tracking-wider`}>Manufacturing Plant</span>
                  <p className={`${isLight ? 'text-slate-700' : 'text-white/80'} text-xs font-medium leading-relaxed`}>
                    CP-40 Sector 6-D North Karachi, Industrial Area, Karachi, Pakistan.
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className={`flex items-center gap-2 text-xs ${isLight ? 'text-slate-500' : 'text-white/50'} pt-1`}>
                <Clock className="w-3.5 h-3.5 text-[#d09554]" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM PKT</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. QUALITY ASSURANCE TRUST STRIP                                          */}
        {/* ========================================================================= */}
        <div className={`py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b ${isLight ? 'border-[#d09554]/20 text-slate-600' : 'border-white/10 text-white/60'} text-xs`}>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            <div className={`flex items-center gap-2 ${isLight ? 'text-[#8d561d]' : 'text-[#f5d5a8]'}`}>
              <ShieldCheck className="w-4 h-4 text-[#d09554]" />
              <span className="font-bold">ISO 9001:2015 Certified Management</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className={`w-4 h-4 ${isLight ? 'text-[#173554]' : 'text-[#649dcf]'}`} />
              <span>Clean-Room Controlled Molding</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d09554]" />
              <span>100% In-House Tooling &amp; Mold Workshop</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className={`px-4 py-2 rounded-xl ${
              isLight
                ? 'bg-white hover:bg-[#faf5ec] border border-[#d09554]/30 text-[#173554] hover:text-[#d09554] shadow-xs'
                : 'bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white'
            } flex items-center gap-2 transition-all cursor-pointer group shrink-0`}
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
          <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-white/45'} font-normal tracking-wide`}>
            © {new Date().getFullYear()} <span className={`${isLight ? 'text-[#173554]' : 'text-white/80'} font-semibold`}>Super International Pvt. Ltd.</span> All Rights Reserved.
          </p>

          <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-white/45'}`}>
            Designed &amp; Developed by{' '}
            <a
              href="https://ziczacsolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d09554] hover:text-[#b87c3a] font-semibold transition-colors underline"
            >
              NextGenBytes
            </a>
            , Managed by{' '}
            <a
              href="https://kodexacore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d09554] hover:text-[#b87c3a] font-semibold transition-colors underline"
            >
              Muhammad Usman Khan
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
