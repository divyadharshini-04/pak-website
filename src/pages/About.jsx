import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowDown, MapPin, Store, Wrench, Utensils, Sparkles, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/businessInfo';

export default function About() {
  const { gen1, gen2, gen3 } = BUSINESS_INFO.legacy;

  return (
    <div className="bg-slate-50 text-zinc-900 min-h-screen py-10 sm:py-12 w-full max-w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            HEADER & LEGACY SUMMARY
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-widest mb-3">
            <HeartHandshake className="w-4 h-4" />
            <span>Our Family Heritage</span>
          </div>

          <h1 className="text-2xl min-[400px]:text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
            Three Generations. One Family Legacy.
          </h1>

          <p className="text-xs min-[400px]:text-sm sm:text-base text-zinc-700 font-medium mt-4 italic bg-white p-3.5 sm:p-4 rounded-2xl border-2 border-amber-200 shadow-sm max-w-2xl mx-auto">
            "{BUSINESS_INFO.legacy.story}"
          </p>

          {/* Meaning of P.A.K. Badge */}
          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 bg-blue-950 text-yellow-300 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-md border-2 border-yellow-400">
            <span className="bg-red-600 text-white px-2 py-0.5 rounded font-black text-xs sm:text-sm">P.A.K.</span>
            <span>Perumalswami • Assaithambi • Karthikeyan</span>
          </div>
        </div>

        {/* Distinct Locations Callout Banner */}
        <div className="mb-10 sm:mb-12 bg-white rounded-2xl border-2 border-zinc-200 p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold flex-shrink-0">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 block">
                Original Family Grocery Shop
              </span>
              <span className="text-xs sm:text-sm font-bold text-zinc-900 flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span>Alakudi, Tamil Nadu</span>
              </span>
            </div>
          </div>

          <span className="hidden sm:inline text-zinc-300 font-bold">|</span>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold flex-shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-blue-900 block">
                P.A.K. Electricals & Event Rentals
              </span>
              <span className="text-xs sm:text-sm font-bold text-zinc-900 flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                <span>Main Road, Kothandapuram, Sirkazhi Taluk</span>
              </span>
            </div>
          </div>
        </div>


        {/* =========================================================================
            GENERATION 1 – PERUMALSWAMI NADAR (ALAKUDI)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl sm:rounded-3xl border-2 border-amber-300 p-4 sm:p-6 md:p-8 shadow-md relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-amber-100">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-xs sm:text-sm flex-shrink-0">
                01
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 block">
                  The Beginning • Alakudi
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-zinc-900">
                  Generation 1 – {gen1.name}
                </h2>
              </div>
            </div>
            <span className="self-start sm:self-auto text-xs bg-amber-100 text-amber-900 px-3 py-1 rounded-full font-bold flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-amber-700 flex-shrink-0" />
              <span>Alakudi, Tamil Nadu</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Visual: Traditional Alakudi Village Grocery Shop */}
            <div className="md:col-span-5 space-y-2">
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-amber-300 aspect-[4/3] bg-zinc-100 max-w-sm mx-auto md:max-w-none">
                <img
                  src={gen1.image}
                  alt="Traditional Alakudi Village Grocery Shop"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[11px] text-center text-zinc-600 font-medium italic">
                Visual representation: A traditional Alakudi village grocery shop representing the business started by Perumalswami Nadar.
              </p>
            </div>

            {/* Narrative */}
            <div className="md:col-span-7 space-y-3 text-center sm:text-left">
              <h3 className="text-base sm:text-xl font-bold text-zinc-900">
                Where It All Began in Alakudi
              </h3>
              <p className="text-xs sm:text-base text-zinc-700 leading-relaxed font-medium">
                "The journey began with <strong>Perumalswami Nadar</strong>, who started the family's grocery business in <strong>Alakudi, Tamil Nadu</strong>."
              </p>
              <div className="p-3 sm:p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 font-medium text-left">
                Built on genuine neighborhood relationships, daily essentials, and lifelong trust within the Alakudi village community.
              </div>
            </div>
          </div>
        </motion.div>


        {/* =========================================================================
            ANIMATED CONNECTING TIMELINE STEP (GEN 1 -> GEN 2)
            ========================================================================= */}
        <div className="my-4 sm:my-6 flex flex-col items-center">
          <div className="w-1 h-6 sm:h-8 bg-amber-400 rounded-full" />
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-500 text-white flex items-center justify-center shadow font-bold text-xs">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
          <div className="w-1 h-6 sm:h-8 bg-amber-400 rounded-full" />
        </div>


        {/* =========================================================================
            GENERATION 2 – ASSAITHAMBI NADAR & KUMARI (ALAKUDI)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl sm:rounded-3xl border-2 border-emerald-400 p-4 sm:p-6 md:p-8 shadow-md relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-emerald-100">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-xs sm:text-sm flex-shrink-0">
                02
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 block">
                  Carrying the Tradition • Alakudi
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-zinc-900">
                  Generation 2 – {gen2.name}
                </h2>
              </div>
            </div>
            <span className="self-start sm:self-auto text-xs bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full font-bold flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-emerald-700 flex-shrink-0" />
              <span>Alakudi Grocery Shop</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Visual: Actual Photograph of Assaithambi Nadar and Kumari (Aspect Ratio Preserved) */}
            <div className="md:col-span-5 space-y-2">
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-emerald-400 aspect-[3/4] bg-zinc-100 max-w-xs mx-auto md:max-w-none">
                <img
                  src={gen2.photo}
                  alt={gen2.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <p className="text-[11px] text-center text-emerald-900 font-bold">
                Assaithambi Nadar & Kumari — Continuing the family grocery shop in Alakudi
              </p>
            </div>

            {/* Narrative */}
            <div className="md:col-span-7 space-y-3 text-center sm:text-left">
              <h3 className="text-base sm:text-xl font-bold text-zinc-900">
                Continuing the Family Business in Alakudi
              </h3>
              <p className="text-xs sm:text-base text-zinc-700 leading-relaxed font-medium">
                "Continuing his father's journey, <strong>Assaithambi Nadar and his wife Kumari</strong> carried forward and continue to run the family grocery shop in <strong>Alakudi, Tamil Nadu</strong>."
              </p>
              <div className="p-3 sm:p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 font-medium text-left">
                Preserving decades of family tradition and personal service that customers in Alakudi continue to cherish.
              </div>
            </div>
          </div>
        </motion.div>


        {/* =========================================================================
            ANIMATED CONNECTING TIMELINE STEP (GEN 2 -> GEN 3)
            ========================================================================= */}
        <div className="my-4 sm:my-6 flex flex-col items-center">
          <div className="w-1 h-6 sm:h-8 bg-emerald-500 rounded-full" />
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-900 text-yellow-300 flex items-center justify-center shadow font-bold text-xs border border-yellow-300">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
          <div className="w-1 h-6 sm:h-8 bg-blue-900 rounded-full" />
        </div>


        {/* =========================================================================
            GENERATION 3 – A. KARTHIKEYAN (P.A.K. IN KOTHANDAPURAM, SIRKAZHI)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl sm:rounded-3xl border-4 border-blue-900 p-4 sm:p-6 md:p-8 shadow-xl relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-blue-100">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-900 text-yellow-300 flex items-center justify-center font-black text-xs sm:text-sm flex-shrink-0">
                03
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-900 block">
                  Business Expansion • Kothandapuram, Sirkazhi
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-zinc-900">
                  Generation 3 – {gen3.name}
                </h2>
              </div>
            </div>
            <span className="self-start sm:self-auto text-xs bg-red-600 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-white flex-shrink-0" />
              <span>Main Road, Kothandapuram</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Visual: Actual Photograph of A. Karthikeyan (Dignified Portrait) */}
            <div className="md:col-span-5 space-y-2">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-blue-900 aspect-[3/4] bg-zinc-100 max-w-xs mx-auto md:max-w-none">
                <img
                  src={gen3.photo}
                  alt={gen3.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-[11px] text-center text-blue-950 font-bold">
                A. Karthikeyan — Proprietor, P.A.K. Electricals & Hardwares
              </p>
            </div>

            {/* Narrative & 3 Business Divisions at Kothandapuram */}
            <div className="md:col-span-7 space-y-4 text-center sm:text-left">
              <h3 className="text-base sm:text-xl font-bold text-zinc-900">
                Establishing P.A.K. on Main Road, Kothandapuram
              </h3>
              
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
                "Taking the family business forward, <strong>A. Karthikeyan</strong> expanded it into three business divisions under <strong>P.A.K.</strong> at Main Road, Kothandapuram, Sirkazhi Taluk:"
              </p>

              {/* Three Expanded Divisions Cards */}
              <div className="space-y-2 pt-1 text-left">
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 flex items-start space-x-2.5">
                  <Wrench className="w-4 h-4 text-blue-900 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-blue-950 font-bold block">1. Electricals & Hardwares</strong>
                    <span className="text-zinc-600">Wires, cables, switches, PVC pipes, water pumps, water tanks and hardware.</span>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 flex items-start space-x-2.5">
                  <Utensils className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-blue-950 font-bold block">2. Cooking Vessel Rentals</strong>
                    <span className="text-zinc-600">Commercial stainless steel cauldrons, biryani deghas and catering essentials.</span>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 flex items-start space-x-2.5">
                  <Sparkles className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-blue-950 font-bold block">3. Marriage & Funeral Decoration Rentals</strong>
                    <span className="text-zinc-600">Pandhals, chairs, traditional radio sets, stage decor and sound & light.</span>
                  </div>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
                <a
                  href={BUSINESS_INFO.phones.primary.callUrl}
                  className="px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {gen3.name}</span>
                </a>

                <a
                  href={getWhatsAppLink('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Message</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
