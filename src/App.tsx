/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import TopVideoBanner from './components/home/TopVideoBanner';
import HeroCarousel3D from './components/home/HeroCarousel3D';
import BannerSection from './components/home/BannerSection';
import WelcomeSection from './components/home/WelcomeSection';
import Fw3dProductSection from './components/home/Fw3dProductSection';
import OurProductsSection from './components/home/OurProductsSection';
import DurabilitySection from './components/home/DurabilitySection';
import CategoriesSection from './components/home/CategoriesSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import ReelsGallerySection from './components/home/ReelsGallerySection';
import OurClientsSection from './components/home/OurClientsSection';
import ProductSpecModal from './components/modals/ProductSpecModal';
import QuoteModal from './components/modals/QuoteModal';
import { ProductItem, SlideData3D } from './types';

const HERO_SLIDES_3D: SlideData3D[] = [
  {
    id: 1,
    category: 'Cosmetics',
    badge: { text: 'Prestige Quality', icon: 'sparkles' },
    title: 'Elevate Your Brand with Premium Cosmetic Packaging',
    highlightText: 'Premium Cosmetic',
    description:
      'High-quality acrylic jars, bottles, and containers crafted for luxury beauty brands. From skincare to color cosmetics, our precision-molded packaging delivers exceptional shelf presence and product protection.',
    primaryButton: { text: 'Explore Cosmetics', href: '#our-products-section' },
    secondaryButton: { text: 'Request Quote', href: '#contact-quote' },
    image: '/Cosmetics.webp',
    theme: 'indigo-blue',
    trustSignals: [
      { text: 'ISO 9001:2015 Certified' },
      { text: 'Food-Grade Materials' },
      { text: '40+ Years Experience' },
    ],
    metrics: [
      { value: '500+', label: 'Cosmetic SKUs' },
      { value: '99.7%', label: 'QA Acceptance Rate' },
      { value: '35+', label: 'Countries Exported' },
    ],
    hotspots: [
      {
        id: 'cos-1',
        x: 63,
        y: 45,
        title: 'Precision Electroplated Closure',
        subtitle: 'Hermetic Cap System',
        detail: 'Micro-ribbed double-wall acrylic cap with mirror gold electroplating and anti-evaporation silicone seal ring.',
        badge: 'Zero Evaporation',
        metric: '58/400 Thread',
      },
      {
        id: 'cos-2',
        x: 75,
        y: 54,
        title: 'PMMA Heavy-Wall Acrylic',
        subtitle: 'Crystal Optical Clarity',
        detail: 'Glass-like refractive brilliance with shatterproof durability. Dual-wall structure shields active cosmetic formulations.',
        badge: 'European Grade',
        metric: '±0.02mm Wall',
      },
      {
        id: 'cos-3',
        x: 88,
        y: 42,
        title: 'Micro-Dropper Serum Actuator',
        subtitle: 'Dosage Precision',
        detail: 'Calibrated dosage delivery mechanism engineered for high-viscosity anti-aging serums and essential oils.',
        badge: 'Calibrated Orifice',
        metric: '0.15ml / Stroke',
      },
    ],
  },
  {
    id: 2,
    category: 'Pharmaceutical',
    badge: { text: 'GMP Certified', icon: 'shield' },
    title: 'Pharmaceutical Grade Containers for Healthcare',
    highlightText: 'Pharmaceutical Grade',
    description:
      'ISO-certified medical-grade packaging for pharmaceutical and healthcare products. Our cleanroom-manufactured containers meet WHO standards and GMP requirements for safe medicine storage.',
    primaryButton: { text: 'View Pharma Line', href: '#our-products-section' },
    secondaryButton: { text: 'Contact Us', href: '#contact-quote' },
    image: '/pharmaceutical.webp',
    theme: 'emerald-teal',
    trustSignals: [
      { text: 'GMP Certified Facility' },
      { text: 'WHO Standards Compliance' },
      { text: 'Tamper-Evident Seals' },
    ],
    metrics: [
      { value: '200+', label: 'Pharma SKUs' },
      { value: '100%', label: 'Pressure Leak-Tested' },
      { value: 'ISO 8', label: 'Cleanroom Class' },
    ],
    hotspots: [
      {
        id: 'pharma-1',
        x: 54,
        y: 56,
        title: 'Sterile Micro-Dropper Tip',
        subtitle: 'Ophthalmic Grade',
        detail: 'Class 100,000 cleanroom molded nozzle with tamper-evident tear collar and precise 45-microliter drop dispensing.',
        badge: 'USP Class VI',
        metric: '45µl Accuracy',
      },
      {
        id: 'pharma-2',
        x: 66,
        y: 48,
        title: 'High-Clarity PET Medicine Bottle',
        subtitle: 'WHO GMP Compliant',
        detail: 'Virgin medical-grade polymer resin with in-mold volume graduations and acoustic induction seal compatibility.',
        badge: 'WHO Standards',
        metric: '100% Virgin Resin',
      },
      {
        id: 'pharma-3',
        x: 80,
        y: 44,
        title: 'Induction Heat-Sealed HDPE Jar',
        subtitle: 'Moisture Barrier Shell',
        detail: 'High-density fluorinated polyethylene engineered to prevent oxidation, chemical leaching, and moisture permeation.',
        badge: 'Hermetic Seal',
        metric: 'Zero Permeation',
      },
      {
        id: 'pharma-4',
        x: 93,
        y: 52,
        title: 'Ergonomic Nasal Spray System',
        subtitle: 'Micro-Atomization',
        detail: 'Ultra-fine plume dispersion actuator for decongestant and saline formulations with anti-clog ball valve mechanism.',
        badge: 'Even Dispersion',
        metric: '50µm Plume',
      },
    ],
  },
  {
    id: 3,
    category: 'Herbals',
    badge: { text: 'Eco-Friendly', icon: 'flame' },
    title: 'Natural Herbal Packaging for Organic Products',
    highlightText: 'Natural Herbal',
    description:
      'Eco-friendly packaging solutions designed for herbal and organic product lines. Sustainable materials and earth-conscious designs that reflect your brand\'s commitment to nature.',
    primaryButton: { text: 'Discover Herbals', href: '#our-products-section' },
    secondaryButton: { text: 'Get Started', href: '#contact-quote' },
    image: '/herbals.webp',
    theme: 'amber-gold',
    trustSignals: [
      { text: 'Eco-Friendly Materials' },
      { text: 'Organic Certified Options' },
      { text: 'Sustainable Manufacturing' },
    ],
    metrics: [
      { value: '150+', label: 'Herbal Lines' },
      { value: '30%', label: 'PCR Options' },
      { value: '100%', label: 'BPA & Phthalate Free' },
    ],
    hotspots: [
      {
        id: 'herb-1',
        x: 68,
        y: 54,
        title: 'Recyclable Polypropylene Cap',
        subtitle: 'Sustainable Closure',
        detail: 'Zero-waste molding process with organic pigment compounding and integrated liner-free sealing bead.',
        badge: '100% Recyclable',
        metric: 'PCR-Ready',
      },
      {
        id: 'herb-2',
        x: 78,
        y: 47,
        title: 'UV-Barrier Herbal Bottle',
        subtitle: 'Botanical Protection',
        detail: 'Specialized amber/opaque pigmentation filtering 99.4% of destructive UV rays to maintain botanical potency.',
        badge: 'UV Defense',
        metric: '99.4% UV Block',
      },
      {
        id: 'herb-3',
        x: 90,
        y: 64,
        title: 'Wide-Mouth Botanical Ointment Jar',
        subtitle: 'Salves & Balms',
        detail: 'Chemical-resistant inner core engineered specifically for high-oil herbal salves, essential balms, and pastes.',
        badge: 'Oil Resistant',
        metric: 'Class-A Seal',
      },
    ],
  },
  {
    id: 4,
    category: 'Cold Chain',
    badge: { text: 'Cryogenic Rated', icon: 'rocket' },
    title: 'Cold Chain Logistics Packaging Solutions',
    highlightText: 'Cold Chain',
    description:
      'Temperature-resistant containers engineered for cold storage and transport. From vaccine carriers to frozen food packaging, our solutions maintain product integrity across the supply chain.',
    primaryButton: { text: 'See Cold Chain', href: '#our-products-section' },
    secondaryButton: { text: 'Inquire Now', href: '#contact-quote' },
    image: '/cold-chain.webp',
    theme: 'cyan-violet',
    trustSignals: [
      { text: 'Temperature: -40°C to 120°C' },
      { text: 'Export Quality Certified' },
      { text: 'Insulated Options Available' },
    ],
    metrics: [
      { value: '-40°C', label: 'Min Temp Rating' },
      { value: '99.8%', label: 'Thermal Integrity' },
      { value: '80+', label: 'Cold Chain SKUs' },
    ],
    hotspots: [
      {
        id: 'cold-1',
        x: 62,
        y: 46,
        title: 'Cryogenic Gasketed Neck',
        subtitle: 'Sub-Zero Resilience',
        detail: 'Specially cross-linked elastomeric seals that maintain flexibility and airtight hermetic hold down to -40°C.',
        badge: '-40°C Rated',
        metric: 'Zero Brittleness',
      },
      {
        id: 'cold-2',
        x: 75,
        y: 52,
        title: 'Multi-Layer High Barrier Wall',
        subtitle: 'Thermal Insulation',
        detail: 'Co-extruded barrier polymers minimizing moisture vapor and oxygen transfer during frozen transit.',
        badge: 'Co-Extrusion',
        metric: '<0.05 WVTR',
      },
      {
        id: 'cold-3',
        x: 88,
        y: 48,
        title: 'Impact-Modified Drop Base',
        subtitle: 'Logistics Durability',
        detail: 'Reinforced radial base geometry engineered to absorb freight vibration and high-impact drops in sub-zero freezers.',
        badge: 'Drop Tested',
        metric: '2m Drop Safe',
      },
    ],
  },
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<string | undefined>(undefined);

  const handleOpenQuote = (productName?: string) => {
    setQuotePrefill(productName);
    setIsQuoteModalOpen(true);
  };

  const handleSelectCategory = (categoryName: string) => {
    const target = document.getElementById('our-products-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] selection:bg-[#dce6f0] selection:text-[#234d77] overflow-x-hidden font-sans">
      {/* 1. Header Navigation with Overlapping Centered Emblem */}
      <Header onOpenQuoteModal={() => handleOpenQuote()} />

      <main>
        {/* 2. 3D Circular Hero Banner (replaces TopVideoBanner) */}
        <HeroCarousel3D
          slides={HERO_SLIDES_3D}
          onOpenQuoteModal={(name) => handleOpenQuote(name)}
        />

        {/* 3. Banner Section: Gradient Swiper */}
        <BannerSection
          onOpenQuoteModal={(name) => handleOpenQuote(name)}
        />

        {/* 4. Welcome Section: 40+ Years Badge, Story, & Plant Video Modal */}
        <WelcomeSection onOpenQuoteModal={() => handleOpenQuote('General Inquiry')} />

        {/* 5. Advanced Technology / IML & 2 Color Products + 3D Jar Product Model Slider */}
        <Fw3dProductSection onOpenQuoteModal={(name) => handleOpenQuote(name)} />

        {/* 6. Our Products Section: Full Packaging Catalog */}
        <OurProductsSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenQuoteModal={(name) => handleOpenQuote(name)}
        />

        {/* 7. Durability Section: 6 Engineering & Quality Pillars */}
        <DurabilitySection />

        {/* 8. Categories Section: Categories We Serve */}
        <CategoriesSection
          onSelectCategory={handleSelectCategory}
          onOpenQuoteModal={(cat) => handleOpenQuote(cat)}
        />

        {/* 9. Testimonials Section: Client Reviews */}
        <TestimonialsSection />

        {/* 10. Reels Gallery Section: Video Showcase */}
        <ReelsGallerySection />

        {/* 11. Our Clients Section: Marquee Network */}
        <OurClientsSection />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProductSpecModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(productName) => handleOpenQuote(productName)}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        prefillProduct={quotePrefill}
      />
    </div>
  );
}
