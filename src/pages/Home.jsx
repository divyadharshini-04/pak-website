import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, CheckCircle, ShieldCheck, MapPin, Store, Utensils, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/businessInfo';
import { MAIN_SERVICES } from '../data/services';
import VillageRoadAnimation from '../components/VillageRoadAnimation';

export default function Home() {
  const primaryServices = MAIN_SERVICES.slice(0, 3);
  const groceryService = MAIN_SERVICES[3];

  return (
    <div className="bg-slate-50 text-zinc-900 overflow-hidden w-full max-w-full">
      
      {/* =========================================================================
          HERO SECTION – HARDWARE SHOP INSPIRED & WELCOMING
          ========================================================================= */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-center bg-zinc-900 text-white overflow-hidden py-12 sm:py-16">
        {/* Real Hardware Shop Background with Crisp Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={BUSINESS_INFO.family.hardwareShopPhoto}
            alt="P.A.K. Electricals & Hardwares Shop Interior"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/90 to-zinc-950/95" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="max-w-2xl space-y-4 sm:space-y-5 text-center sm:text-left">
            {/* Location Pill */}
            <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-red-600 text-yellow-300 font-bold text-xs uppercase tracking-wider shadow">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">Main Road, Kothandapuram • Sirkazhi</span>
            </div>

            {/* Bold Brand Name Title */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-center sm:justify-start gap-x-3 gap-y-1">
                <span className="text-3xl min-[400px]:text-4xl sm:text-6xl md:text-7xl font-black text-yellow-400 tracking-wider font-sans">
                  P.A.K.
                </span>
                <span className="text-lg min-[400px]:text-xl sm:text-3xl font-black text-white uppercase tracking-wider">
                  ELECTRICALS & HARDWARES
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-zinc-300 tracking-wider uppercase">
                Rental Vessels • Pandhal Decoration • Chairs • Sound & Light
              </p>
            </div>

            {/* Main Heading with Proper Line Break Handling */}
            <h1 className="text-2xl min-[400px]:text-3xl sm:text-5xl font-black text-white leading-tight">
              Everything You Need <br className="hidden sm:inline" />in One Place.
            </h1>

            {/* Short Introduction */}
            <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-medium leading-relaxed max-w-xl mx-auto sm:mx-0">
              Your trusted village hardware store and event rental partner in Kothandapuram, Sirkazhi. Serving our community with genuine products and complete celebration essentials.
            </p>

            {/* Action Buttons – Clean Mobile Stack / Tablet Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-2.5 sm:gap-3 max-w-md sm:max-w-none mx-auto sm:mx-0">
              <Link
                to="/products"
                className="px-5 py-3 rounded-lg bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-red-600/40 transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore Services & Items</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={BUSINESS_INFO.phones.primary.callUrl}
                className="px-4 py-3 rounded-lg bg-blue-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>Call: {BUSINESS_INFO.phones.primary.display}</span>
              </a>

              <a
                href={getWhatsAppLink('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Direct Proprietor Mention */}
            <div className="pt-1 flex items-center justify-center sm:justify-start space-x-2 text-xs text-yellow-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Proprietor: {BUSINESS_INFO.owner.name}</span>
            </div>
          </div>

          {/* Actual Shop Preview Card */}
          <div className="w-full max-w-xs sm:max-w-sm lg:w-80 flex-shrink-0 bg-white p-3 rounded-2xl shadow-2xl border-4 border-yellow-400 mx-auto lg:mx-0">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-zinc-100">
              <img
                src={BUSINESS_INFO.family.hardwareShopPhoto}
                alt="P.A.K. Shop Kothandapuram"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                Actual PAK Shop
              </span>
            </div>
            <div className="p-2.5 sm:p-3 text-zinc-900 text-center">
              <p className="font-black text-xs uppercase text-blue-950">Visit Our Shop on Main Road</p>
              <p className="text-[11px] text-zinc-600 mt-0.5">Open 7:00 AM to 9:30 PM (All 7 Days)</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          CREATIVE HOMEPAGE ANIMATION: PAK VEHICLE & TRACTOR DRIVING ON VILLAGE ROAD
          ========================================================================= */}
      <VillageRoadAnimation />


      {/* =========================================================================
          OUR SERVICES – 4 MAIN SECTIONS WITH LARGE REALISTIC PHOTOGRAPHS
          ========================================================================= */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full">
            Our Offerings
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 mt-3">
            Our Main Services
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-medium">
            Everything for building, domestic plumbing, and wedding or ceremony functions in Sirkazhi Taluk.
          </p>
        </div>

        {/* 3 Main Business Services Grid:
            1 col on small screens, 2 cols on tablets, 3 cols on desktops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {primaryServices.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden border-2 border-zinc-200 hover:border-blue-900 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Large Realistic Photograph */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-zinc-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-blue-950 text-yellow-300 font-mono font-bold text-xs px-2.5 py-1 rounded shadow">
                    {service.number}
                  </div>
                  {service.isActualPhoto && (
                    <div className="absolute top-3 right-3 bg-emerald-600 text-white font-bold text-[10px] px-2 py-0.5 rounded shadow">
                      Actual PAK Photo
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-6">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    {service.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-zinc-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 border-t border-zinc-100 pt-3 text-xs text-zinc-700">
                    {service.items.slice(0, 4).map((it, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span className="truncate">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 sm:p-6 pt-0 flex items-center justify-between gap-2">
                <Link
                  to={service.link}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-blue-900 hover:text-red-600 uppercase tracking-wider transition-colors"
                >
                  <span>View Items</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={getWhatsAppLink('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center space-x-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 04. GROCERY STORE – SMALL SEPARATE FAMILY BUSINESS HIGHLIGHT */}
        <div className="mt-10 sm:mt-12 bg-amber-50 rounded-2xl border-2 border-amber-300 p-4 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-5 rounded-xl overflow-hidden shadow-md border-2 border-amber-400 aspect-[4/3] bg-zinc-100">
              <img
                src={groceryService.image}
                alt="PAK Family Grocery Shop"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center space-x-1.5 bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">
                <Store className="w-3.5 h-3.5" />
                <span>Our Family Roots • Alakudi (04)</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-zinc-900">
                Original Family Grocery Store (Alakudi)
              </h3>

              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
                "Our family's business journey began in <strong>Alakudi, Tamil Nadu</strong>, where <strong>Perumalswami Nadar</strong> founded our grocery shop. Today, <strong>Assaithambi Nadar and Kumari</strong> continue to run the grocery business in Alakudi, while P.A.K. Electricals & Hardwares operates on Main Road, Kothandapuram."
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/about"
                  className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center space-x-1.5"
                >
                  <span>Read Family History</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <span className="text-xs text-amber-900 font-semibold">
                  Alakudi, Tamil Nadu
                </span>
              </div>
            </div>

          </div>
        </div>

      </section>


      {/* =========================================================================
          CALL TO ACTION – DIRECT VILLAGE CONTACT
          ========================================================================= */}
      <section className="bg-blue-950 text-white py-10 sm:py-12 border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-xl min-[400px]:text-2xl sm:text-4xl font-black">
            Need Hardware Materials or Event Rental Equipment?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
            Call proprietor A. Karthikeyan directly or send a message on WhatsApp. Quick delivery and honest rates for Sirkazhi and nearby areas.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md sm:max-w-none mx-auto">
            <a
              href={BUSINESS_INFO.phones.primary.callUrl}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg"
            >
              <Phone className="w-4 h-4 text-yellow-300" />
              <span>Call: {BUSINESS_INFO.phones.primary.display}</span>
            </a>

            <a
              href={getWhatsAppLink('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Message</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
