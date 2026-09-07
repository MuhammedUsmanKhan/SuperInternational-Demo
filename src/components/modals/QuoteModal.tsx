import React, { useState } from 'react';
import { X, CheckCircle2, Send, Phone, Mail, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillProduct?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  prefillProduct,
}: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'Cosmetic Acrylic Jars',
    quantity: '50,000 - 100,000 units',
    notes: prefillProduct ? `Interested in: ${prefillProduct}` : '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden text-[#222222]">
        
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#f8fafc]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#f0f4f8] flex items-center justify-center text-[#234d77]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#222222]">
                Request Quotation
              </h3>
              <p className="text-xs text-[#777777]">
                Get factory-direct pricing and mold specifications
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-[#f0f4f8] text-[#234d77] mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-[#222222]">
                Inquiry Received!
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-[#222222]">{formData.name || 'valued partner'}</span>. Our engineering sales team will review your parameters and respond within 12 business hours.
              </p>
              <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#dce6f0] text-xs text-left max-w-sm mx-auto space-y-1.5">
                <div className="text-[#234d77] font-bold">Priority Direct Hotline:</div>
                <div className="text-[#444444] flex items-center gap-2 font-mono">
                  <Phone className="w-3.5 h-3.5 text-[#234d77]" />
                  <span>+92 336 0875171</span>
                </div>
                <div className="text-[#444444] flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#234d77]" />
                  <span>info@superinternational.pk</span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#234d77] hover:bg-[#1a3d5e] text-white font-semibold text-xs shadow-md transition-colors"
              >
                Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#444444] mb-1 font-bold uppercase tracking-wider text-[10px]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#222222] focus:bg-white focus:outline-none focus:border-[#234d77]"
                  />
                </div>
                <div>
                  <label className="block text-[#444444] mb-1 font-bold uppercase tracking-wider text-[10px]">
                    Company / Brand *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Prestige Cosmetics Ltd"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#222222] focus:bg-white focus:outline-none focus:border-[#234d77]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#444444] mb-1 font-bold uppercase tracking-wider text-[10px]">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#222222] focus:bg-white focus:outline-none focus:border-[#234d77]"
                  />
                </div>
                <div>
                  <label className="block text-[#444444] mb-1 font-bold uppercase tracking-wider text-[10px]">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 300 1234567"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#222222] focus:bg-white focus:outline-none focus:border-[#234d77]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#444444] mb-1 font-bold uppercase tracking-wider text-[10px]">
                    Product Discipline
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#222222] focus:bg-white focus:outline-none focus:border-[#234d77]"
                  >
                    <option>Cosmetic Acrylic Jars</option>
                    <option>Blow Molding Shampoo Bottles</option>
                    <option>In-Mold Labeling (IML) Series</option>
                    <option>Aerosol &amp; Lotion Closures</option>
                    <option>Pharmaceutical Amber PET</option>
                    <option>Custom CNC Toolroom Mold Development</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#444444] mb-1 font-bold uppercase tracking-wider text-[10px]">
                    Projected Order Volume
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#222222] focus:bg-white focus:outline-none focus:border-[#234d77]"
                  >
                    <option>Prototype Sample Batch (1,000 - 5,000)</option>
                    <option>25,000 - 50,000 units</option>
                    <option>50,000 - 100,000 units</option>
                    <option>250,000 - 1,000,000+ units</option>
                    <option>Full Container Load (FCL Export)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#444444] mb-1 font-bold uppercase tracking-wider text-[10px]">
                  Specifications / Custom Resins / Mold Details
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details such as target volume, neck finish, wall thickness, or target launch date..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#222222] focus:bg-white focus:outline-none focus:border-[#234d77]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs text-gray-500 hover:text-black font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-premium-primary px-6 py-2.5 rounded-full bg-[#234d77] text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5 cursor-pointer border border-white/20"
                >
                  <Send className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10">Send Request</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
