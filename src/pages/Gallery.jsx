import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, MessageCircle, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';
import { getWhatsAppLink } from '../data/businessInfo';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const activePhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhotoIndex]);

  const handleNext = () => {
    if (selectedPhotoIndex !== null && selectedPhotoIndex < filteredPhotos.length - 1) {
      setSelectedPhotoIndex(selectedPhotoIndex + 1);
    } else {
      setSelectedPhotoIndex(0);
    }
  };

  const handlePrev = () => {
    if (selectedPhotoIndex !== null && selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    } else {
      setSelectedPhotoIndex(filteredPhotos.length - 1);
    }
  };

  return (
    <div className="bg-slate-50 text-zinc-900 min-h-screen py-8 sm:py-10 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full">
            Real Photos
          </span>
          <h1 className="text-2xl min-[400px]:text-3xl sm:text-4xl font-black text-zinc-900 mt-2">
            P.A.K. Photo Gallery
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-lg mx-auto">
            Real photographs of our hardware store, family grocery roots, large cooking vessel rentals, and South Indian marriage & funeral pandhal setups.
          </p>
        </div>

        {/* Category Filters (Touch-scrollable) */}
        <div className="flex items-center overflow-x-auto no-scrollbar touch-scroll-x justify-start sm:justify-center space-x-1.5 sm:space-x-2 pb-6 px-1">
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all flex-shrink-0 ${
                  isActive
                    ? 'bg-blue-950 text-yellow-300 shadow-md'
                    : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            RESPONSIVE PHOTO GRID:
            - 1 column on narrow screens (< 360px)
            - 2 columns on normal mobile (360px - 639px)
            - 3 columns on tablets (640px - 1023px)
            - 4 columns on desktops (1024px+)
            ========================================================================= */}
        <motion.div 
          layout 
          className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedPhotoIndex(idx)}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border-2 border-zinc-200 hover:border-red-600 shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-zinc-900/85 text-yellow-300 font-bold text-[9px] sm:text-[10px] px-2 py-0.5 rounded shadow">
                    {photo.tag}
                  </div>
                  <div className="absolute bottom-2 right-2 p-1.5 rounded-full bg-white/90 text-zinc-900 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity shadow">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 bg-white">
                  <h3 className="font-bold text-xs sm:text-sm text-zinc-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                    {photo.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* =========================================================================
          LIGHTBOX MODAL – PERFECTLY CENTERED, RESPONSIVE & MOBILE-FRIENDLY
          ========================================================================= */}
      <AnimatePresence>
        {activePhoto && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-3 sm:p-6 backdrop-blur-sm"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl flex flex-col my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button (min 44x44px touch area) */}
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute top-2.5 right-2.5 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-black/70 hover:bg-red-600 text-white transition-colors"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev & Next navigation buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-black/70 hover:bg-yellow-400 hover:text-zinc-950 text-white transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-black/70 hover:bg-yellow-400 hover:text-zinc-950 text-white transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Photo Display Area */}
              <div className="flex items-center justify-center bg-black min-h-[240px] max-h-[65vh] p-2 overflow-hidden">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-[62vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>

              {/* Lightbox Footer Info */}
              <div className="p-3 sm:p-4 bg-zinc-900 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-white">
                <div>
                  <span className="text-[10px] uppercase font-bold text-yellow-400 tracking-wider">
                    {activePhoto.tag}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {activePhoto.title}
                  </h4>
                </div>

                <a
                  href={getWhatsAppLink('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center space-x-1.5 flex-shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
