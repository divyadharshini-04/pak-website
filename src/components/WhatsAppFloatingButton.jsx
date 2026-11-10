import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/businessInfo';

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    { label: "Hardware & Electricals", type: "hardware", desc: "Wires, Pipes, Pumps, Switches" },
    { label: "Cooking Vessel Rentals", type: "vessels", desc: "Biryani Deghas & Commercial Pots" },
    { label: "Pandhal & Chairs", type: "decoration", desc: "Marriage & Funeral Pandhals" },
    { label: "Sound & Lighting", type: "decoration", desc: "Horns, Amplifiers, Serial Lights" }
  ];

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Quick Action Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            className="mb-3 w-[calc(100vw-1.5rem)] max-w-xs sm:w-80 bg-white rounded-2xl shadow-2xl border-2 border-emerald-500 overflow-hidden text-zinc-900"
          >
            {/* Header */}
            <div className="bg-emerald-700 p-3 sm:p-3.5 text-white flex justify-between items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-yellow-300 block">
                  Quick WhatsApp Desk
                </span>
                <h4 className="text-sm font-black">P.A.K. Kothandapuram</h4>
                <p className="text-[11px] text-emerald-100">Proprietor: {BUSINESS_INFO.owner.name}</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-md text-white/80 hover:text-white hover:bg-emerald-800"
                aria-label="Close WhatsApp Desk"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick buttons */}
            <div className="p-2.5 sm:p-3 space-y-1.5 bg-slate-50">
              <p className="text-[10px] font-bold uppercase text-zinc-500 px-1">Select Enquiry Type:</p>
              {quickOptions.map((opt, i) => (
                <a
                  key={i}
                  href={getWhatsAppLink(opt.type)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-white hover:bg-emerald-50 border border-zinc-200 hover:border-emerald-500 transition-all group"
                >
                  <div>
                    <p className="text-xs font-bold text-zinc-900 group-hover:text-emerald-700">{opt.label}</p>
                    <p className="text-[10px] text-zinc-500">{opt.desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </a>
              ))}
            </div>

            {/* Direct Call Quick Bar */}
            <div className="p-2.5 bg-zinc-100 border-t border-zinc-200 flex items-center justify-between text-xs">
              <span className="text-[11px] text-zinc-600 font-medium">Or call directly:</span>
              <a
                href={BUSINESS_INFO.phones.primary.callUrl}
                className="font-bold text-blue-900 hover:text-red-600 flex items-center space-x-1"
              >
                <Phone className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                <span>{BUSINESS_INFO.phones.primary.display}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pill Button (min 44px height) */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-xl border-2 border-white transition-all font-bold text-xs uppercase tracking-wider min-h-[44px]"
        aria-label="WhatsApp Enquiry"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600 flex-shrink-0" />
        <span>{isOpen ? 'Close' : 'WhatsApp'}</span>
      </motion.button>
    </div>
  );
}
