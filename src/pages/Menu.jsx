import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Search, Sparkles, CheckCircle2, ShieldCheck, Tag, Info } from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data/products';
import { getWhatsAppLink } from '../data/businessInfo';
import Lightbox from '../components/Lightbox';

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItemForModal, setActiveItemForModal] = useState(null);

  // Sync category if URL query changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-pak-cream-light min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-pak-navy-dark text-pak-cream pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-pak-gold/25 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pak-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-pak-gold/30 bg-pak-navy/70 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-pak-gold" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-pak-gold font-semibold">
              Comprehensive Catalogue
            </span>
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Products & Rental Inventory
          </h1>
          <p className="mt-4 text-sm sm:text-base text-pak-cream/70 max-w-2xl mx-auto font-sans-dm">
            Browse our complete selection of certified hardware materials, high-capacity feast vessels, and complete celebration equipment. Direct enquiry via WhatsApp.
          </p>

          {/* Transparency Disclaimer Banner */}
          <div className="mt-8 max-w-xl mx-auto bg-pak-navy/80 border border-pak-gold/30 rounded-xl p-3 flex items-center justify-center space-x-2 text-xs text-pak-gold font-sans-dm">
            <Info className="w-4 h-4 flex-shrink-0" />
            <span>Showcase & enquiry only. Direct enquiry links connect to proprietor A. Karthikeyan.</span>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-6 bg-white border-b border-pak-navy/10 sticky top-[69px] z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex items-center overflow-x-auto no-scrollbar space-x-2 py-1">
              {PRODUCT_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? 'bg-pak-navy text-pak-gold shadow-md scale-105 border border-pak-gold/40'
                        : 'bg-pak-cream-light/70 text-pak-charcoal/70 hover:bg-pak-gold/15 hover:text-pak-navy'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search products or rentals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full border border-pak-gold/30 text-xs text-pak-navy placeholder-pak-charcoal/40 bg-pak-cream-light/50 focus:outline-none focus:border-pak-gold focus:ring-1 focus:ring-pak-gold"
              />
              <Search className="w-4 h-4 text-pak-gold absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

          </div>
        </div>
      </section>

      {/* Catalogue Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProducts.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white rounded-3xl overflow-hidden border border-pak-gold/25 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Card Image */}
                  <div 
                    className="relative h-60 overflow-hidden cursor-pointer"
                    onClick={() => setActiveItemForModal(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pak-navy-dark/70 via-transparent to-transparent opacity-80" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-pak-navy/85 backdrop-blur-md text-pak-gold text-[10px] font-bold uppercase tracking-wider border border-pak-gold/30">
                        {item.categoryName}
                      </span>
                    </div>

                    {/* Rental vs Sale pill */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider ${
                        item.isRental 
                          ? 'bg-amber-500/90 text-white' 
                          : 'bg-emerald-600/90 text-white'
                      }`}>
                        {item.isRental ? "Rental Service" : "Hardware Product"}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-xs font-serif italic text-pak-cream/90">
                        "{item.tagline}"
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 
                        onClick={() => setActiveItemForModal(item)}
                        className="font-playfair text-xl font-bold text-pak-navy group-hover:text-pak-gold transition-colors cursor-pointer mb-2"
                      >
                        {item.name}
                      </h3>
                      
                      <p className="text-xs text-pak-charcoal/70 leading-relaxed font-sans-dm mb-4">
                        {item.description}
                      </p>

                      {/* Specs */}
                      <div className="space-y-1.5 mb-6">
                        {item.specs.map((spec, i) => (
                          <div key={i} className="flex items-center space-x-2 text-[11px] text-pak-charcoal/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-pak-gold flex-shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-pak-navy/10 flex items-center justify-between">
                      <button
                        onClick={() => setActiveItemForModal(item)}
                        className="text-xs font-bold uppercase tracking-wider text-pak-navy hover:text-pak-gold transition-colors"
                      >
                        View Details
                      </button>

                      <a
                        href={getWhatsAppLink('item', { name: item.name, category: item.categoryName })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-emerald-600/20 transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24 bg-white rounded-3xl border border-pak-gold/20 p-8 max-w-lg mx-auto">
              <p className="text-base font-playfair font-bold text-pak-navy">No items matching "{searchQuery}"</p>
              <p className="text-xs text-pak-charcoal/60 mt-2">Try clearing your search keyword or switching categories.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-4 px-5 py-2 rounded-full bg-pak-navy text-pak-gold text-xs font-bold uppercase tracking-wider"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Modal Lightbox for item details */}
      <Lightbox
        isOpen={activeItemForModal !== null}
        item={activeItemForModal}
        onClose={() => setActiveItemForModal(null)}
      />

    </div>
  );
}
