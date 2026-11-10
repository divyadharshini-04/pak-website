import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Search, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { CATEGORIES, PRODUCTS_CATALOGUE } from '../data/products';
import { getWhatsAppLink } from '../data/businessInfo';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
    if (id === 'all') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat: id });
    }
  };

  const filteredItems = PRODUCTS_CATALOGUE.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 text-zinc-900 min-h-screen py-8 sm:py-10 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full">
            Visual Catalogue
          </span>
          <h1 className="text-2xl min-[400px]:text-3xl sm:text-4xl font-black text-zinc-900 mt-2">
            Available Products & Rental Items
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-lg mx-auto">
            Browse our complete range of hardware materials, cooking vessels, and event rental supplies. Contact us directly to check availability.
          </p>
        </div>

        {/* Category Navigation Bar & Search - Sticky & Touch-scrollable */}
        <div className="sticky top-16 sm:top-20 z-30 bg-white p-2.5 sm:p-3 rounded-2xl shadow-md border-2 border-zinc-200 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3">
            
            {/* Category Filter Pills (Horizontally Scrollable) */}
            <div className="flex items-center overflow-x-auto no-scrollbar touch-scroll-x space-x-1.5 sm:space-x-2 w-full sm:w-auto py-1 px-0.5">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all flex-shrink-0 ${
                      isActive
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Responsive Search Input */}
            <div className="relative w-full sm:w-60 md:w-72 flex-shrink-0">
              <input
                type="text"
                placeholder="Search item name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-600 bg-slate-50"
              />
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-4 flex items-center justify-between text-xs text-zinc-600 font-medium px-1">
          <span>Showing <strong>{filteredItems.length}</strong> items</span>
          <span className="hidden sm:inline">Tap <strong>Enquire</strong> to send item name via WhatsApp</span>
        </div>

        {/* =========================================================================
            RESPONSIVE PHOTOGRAPH GRID:
            - 1 column on very narrow screens (< 360px)
            - 2 columns on normal mobile screens (360px - 639px)
            - 3 columns on tablets (640px - 1023px)
            - 4 columns on laptops/desktops (1024px+)
            ========================================================================= */}
        <motion.div
          layout
          className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border-2 border-zinc-200 hover:border-red-600 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                {/* Large Realistic Photograph with Consistent Aspect Ratio */}
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-zinc-900/85 text-yellow-300 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded capitalize shadow">
                    {item.category}
                  </div>
                </div>

                {/* Product Name & Direct WhatsApp Button Only */}
                <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow">
                  <h3 className="font-bold text-xs min-[400px]:text-sm sm:text-base text-zinc-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-2 min-h-[2.25rem] sm:min-h-[2.5rem] text-left">
                    {item.name}
                  </h3>

                  <div className="mt-3 pt-2.5 border-t border-zinc-100 flex items-center justify-between gap-1.5">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700 flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                      <span>Available</span>
                    </span>

                    <a
                      href={getWhatsAppLink('item', item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-[10px] sm:text-xs flex items-center space-x-1 shadow-sm transition-all flex-shrink-0"
                    >
                      <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-zinc-300 mt-6">
            <p className="text-zinc-600 text-sm font-semibold">
              No items found matching "{searchTerm}".
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
