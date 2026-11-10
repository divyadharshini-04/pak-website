import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Instagram, Send, Navigation, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/businessInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Hardware & Electricals',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.name.trim()) errors.name = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.length < 10) errors.phone = 'Please enter a valid 10-digit phone number';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Build WhatsApp message
    const text = `*New Website Enquiry - P.A.K.*%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Message:* ${encodeURIComponent(formData.message || 'I would like to enquire about your products and services.')}`;
    const url = `https://wa.me/${BUSINESS_INFO.phones.primary.raw}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-slate-50 text-zinc-900 min-h-screen py-8 sm:py-10 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full">
            Contact & Location
          </span>
          <h1 className="text-2xl min-[400px]:text-3xl sm:text-4xl font-black text-zinc-900 mt-2">
            Get in Touch with P.A.K.
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-lg mx-auto">
            Connect directly with proprietor A. Karthikeyan for hardware enquiries, vessel rentals, pandhal decoration, or visiting our shop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-10 sm:mb-12">
          
          {/* Left Column: Direct Phone & Shop Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-zinc-200 shadow-sm space-y-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-red-600 block">
                  Shop Owner
                </span>
                <h3 className="text-xl font-black text-zinc-900">
                  {BUSINESS_INFO.owner.name}
                </h3>
                <p className="text-xs font-bold text-zinc-600">{BUSINESS_INFO.owner.designation}</p>
              </div>

              {/* Direct Calling & WhatsApp Cards with 44px+ tap targets */}
              <div className="space-y-2.5 pt-1">
                {/* Primary */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] font-black uppercase text-blue-900 block truncate">
                      Primary Contact
                    </span>
                    <span className="text-sm min-[400px]:text-base font-black text-zinc-900 font-mono">
                      {BUSINESS_INFO.phones.primary.display}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 flex-shrink-0">
                    <a
                      href={BUSINESS_INFO.phones.primary.callUrl}
                      className="w-11 h-11 flex items-center justify-center rounded-lg bg-blue-900 text-yellow-300 hover:bg-blue-800 active:bg-blue-950"
                      title="Call Now"
                      aria-label="Call primary contact"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={BUSINESS_INFO.phones.primary.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 active:bg-emerald-700"
                      title="WhatsApp"
                      aria-label="WhatsApp primary contact"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Secondary */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-100 border border-zinc-200 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] font-black uppercase text-zinc-600 block truncate">
                      Secondary Contact
                    </span>
                    <span className="text-sm min-[400px]:text-base font-black text-zinc-900 font-mono">
                      {BUSINESS_INFO.phones.secondary.display}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 flex-shrink-0">
                    <a
                      href={BUSINESS_INFO.phones.secondary.callUrl}
                      className="w-11 h-11 flex items-center justify-center rounded-lg bg-blue-900 text-yellow-300 hover:bg-blue-800 active:bg-blue-950"
                      title="Call Now"
                      aria-label="Call secondary contact"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={BUSINESS_INFO.phones.secondary.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 active:bg-emerald-700"
                      title="WhatsApp"
                      aria-label="WhatsApp secondary contact"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-zinc-200 flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-700">
                  <strong className="block text-zinc-900 font-bold">Shop Address</strong>
                  <span>{BUSINESS_INFO.location.fullAddress}</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-zinc-200 flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div className="text-xs text-zinc-700">
                  <strong className="block text-zinc-900 font-bold">Opening Hours</strong>
                  <span>{BUSINESS_INFO.hours}</span>
                </div>
              </div>

              {/* Instagram */}
              <div className="pt-1 flex items-center justify-between p-3 rounded-xl bg-pink-50 border border-pink-200">
                <div className="flex items-center space-x-2 text-xs font-bold text-pink-900">
                  <Instagram className="w-4 h-4 text-pink-600 flex-shrink-0" />
                  <span>Instagram</span>
                </div>
                <a
                  href={BUSINESS_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold transition-colors"
                >
                  View Profile
                </a>
              </div>

            </div>

          </div>


          {/* Right Column: Simple Direct Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-zinc-200 shadow-sm">
              <span className="text-[11px] font-black uppercase tracking-wider text-red-600 block mb-1">
                Quick Message
              </span>
              <h3 className="text-xl font-black text-zinc-900 mb-1">
                Send Enquiry via WhatsApp
              </h3>
              <p className="text-xs text-zinc-600 mb-5">
                Fill this simple form to open a direct WhatsApp chat with A. Karthikeyan.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-900 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-base sm:text-xs text-zinc-900 focus:outline-none focus:border-red-600 bg-slate-50"
                  />
                  {formErrors.name && <p className="text-[11px] text-red-600 mt-1 font-semibold">{formErrors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-900 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-base sm:text-xs text-zinc-900 focus:outline-none focus:border-red-600 bg-slate-50"
                  />
                  {formErrors.phone && <p className="text-[11px] text-red-600 mt-1 font-semibold">{formErrors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-900 mb-1">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-base sm:text-xs text-zinc-900 focus:outline-none focus:border-red-600 bg-slate-50"
                  >
                    <option value="Hardware & Electricals">Hardware & Electricals</option>
                    <option value="Cooking Vessel Rentals">Cooking Vessel Rentals</option>
                    <option value="Marriage Pandhal Decoration">Marriage Pandhal Decoration</option>
                    <option value="Death Ceremony Pandhal">Death Ceremony Pandhal</option>
                    <option value="Chairs & Seating">Chairs & Seating</option>
                    <option value="Sound & Light Rentals">Sound & Light Rentals</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-900 mb-1">
                    Requirement Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    placeholder="Tell us what you need (e.g. 5 large biryani vessels for Sunday function / 2.5mm copper wire)..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-base sm:text-xs text-zinc-900 focus:outline-none focus:border-red-600 bg-slate-50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message on WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* =========================================================================
            GOOGLE MAPS EMBED & GET DIRECTIONS BUTTON
            ========================================================================= */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-zinc-200 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-4 border-b border-zinc-200 gap-3">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-red-600 block">
                Shop Location
              </span>
              <h3 className="text-lg sm:text-xl font-black text-zinc-900">
                Main Road, Kothandapuram, Sirkazhi Taluk
              </h3>
            </div>

            <a
              href={BUSINESS_INFO.location.googleMapsDirectionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-yellow-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow transition-colors"
            >
              <Navigation className="w-4 h-4 text-red-400" />
              <span>Get Directions (Google Maps)</span>
            </a>
          </div>

          <div className="rounded-xl overflow-hidden h-72 sm:h-80 md:h-96 border border-zinc-300 w-full max-w-full">
            <iframe
              title="PAK Shop Location"
              src={BUSINESS_INFO.location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
