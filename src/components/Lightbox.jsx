import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { getWhatsAppLink } from '../data/businessInfo';

export default function Lightbox({ 
  isOpen, 
  item, 
  onClose, 
  onNext, 
  onPrev 
}) {
  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-4xl w-full max-h-[90vh] bg-pak-navy-dark rounded-2xl overflow-hidden border border-pak-gold/40 shadow-2xl flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:text-pak-gold hover:bg-black/90 transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Prev & Next */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 text-white hover:text-pak-gold hover:bg-black/90 transition-colors"
              aria-label="Previous item"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 text-white hover:text-pak-gold hover:bg-black/90 transition-colors md:right-[310px]"
              aria-label="Next item"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Image Display */}
          <div className="flex-1 flex items-center justify-center bg-black/40 min-h-[300px] md:min-h-[480px] p-2">
            <img
              src={item.image}
              alt={item.title || item.name}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
            />
          </div>

          {/* Sidebar Details */}
          <div className="w-full md:w-80 p-6 flex flex-col justify-between bg-pak-navy border-t md:border-t-0 md:border-l border-pak-gold/25 text-white">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pak-gold/20 text-pak-gold text-xs font-semibold tracking-wider uppercase border border-pak-gold/30">
                <Tag className="w-3 h-3" />
                <span>{item.tag || item.categoryName || "P.A.K. Showcase"}</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-pak-cream leading-snug">
                {item.title || item.name}
              </h3>

              <p className="text-sm text-pak-cream/70 leading-relaxed font-sans-dm">
                {item.subtitle || item.description}
              </p>

              {item.specs && item.specs.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-pak-gold mb-2">Specifications:</p>
                  <ul className="space-y-1 text-xs text-pak-cream/80">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-pak-gold" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Direct WhatsApp Enquiry Button */}
            <div className="pt-6">
              <a
                href={getWhatsAppLink('item', { name: item.title || item.name, category: item.tag || item.categoryName })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-emerald-600/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
