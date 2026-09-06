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
    badge: { text: 'Premium Quality', icon: 'sparkles' },
    title: 'Elevate Your Brand with Premium Cosmetic Packaging',
    highlightText: 'Premium Cosmetic',
    description:
      'High-quality acrylic jars, bottles, and containers crafted for luxury beauty brands. From skincare to color cosmetics, our precision-molded packaging delivers exceptional shelf presence and product protection.',
    primaryButton: { text: 'Explore Cosmetics', href: '#our-products-sec' },
    secondaryButton: { text: 'Request Quote', href: '#contact-quote' },
    image: '/Cosmetics.png',
    theme: 'indigo-blue',
    trustSignals: [
      { text: 'ISO 9001:2015 Certified' },
      { text: 'Food-Grade Materials' },
      { text: '40+ Years Experience' },
    ],
    metrics: [
      { value: '500+', label: 'Cosmetic SKUs Manufactured' },
      { value: '99.7%', label: 'Quality Assurance Rate' },
      { value: '35+', label: 'Countries Exported' },
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
    primaryButton: { text: 'View Pharma Line', href: '#our-products-sec' },
    secondaryButton: { text: 'Contact Us', href: '#contact-quote' },
    image: '/PHARMACEUTICAL (3).png',
    theme: 'emerald-teal',
    trustSignals: [
      { text: 'GMP Certified Facility' },
      { text: 'WHO Standards Compliance' },
      { text: 'Tamper-Evident Seals' },
    ],
    metrics: [
      { value: '200+', label: 'Pharma SKUs' },
      { value: '100%', label: 'Leak-Tested' },
      { value: '24hr', label: 'Cleanroom Production' },
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
    primaryButton: { text: 'Discover Herbals', href: '#our-products-sec' },
    secondaryButton: { text: 'Get Started', href: '#contact-quote' },
    image: '/Herbals (1).png',
    theme: 'amber-gold',
    trustSignals: [
      { text: 'Eco-Friendly Materials' },
      { text: 'Organic Certified Options' },
      { text: 'Sustainable Manufacturing' },
    ],
    metrics: [
      { value: '150+', label: 'Herbal Product Lines' },
      { value: '30%', label: 'Recycled Content Options' },
      { value: '100%', label: 'Food-Grade Safe' },
    ],
  },
  {
    id: 4,
    category: 'Cold Chain',
    badge: { text: 'Temperature Rated', icon: 'rocket' },
    title: 'Cold Chain Logistics Packaging Solutions',
    highlightText: 'Cold Chain',
    description:
      'Temperature-resistant containers engineered for cold storage and transport. From vaccine carriers to frozen food packaging, our solutions maintain product integrity across the supply chain.',
    primaryButton: { text: 'See Cold Chain', href: '#our-products-sec' },
    secondaryButton: { text: 'Inquire Now', href: '#contact-quote' },
    image: '/Cold Chain (1).png',
    theme: 'cyan-violet',
    trustSignals: [
      { text: 'Temperature Range: -40°C to 120°C' },
      { text: 'Export Quality Certified' },
      { text: 'Insulated Options Available' },
    ],
    metrics: [
      { value: '80+', label: 'Cold Chain SKUs' },
      { value: '-40°C', label: 'Min Temperature Rating' },
      { value: '99.5%', label: 'Integrity Rate' },
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
