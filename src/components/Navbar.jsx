import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Phone, MessageCircle, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import PAKLogo from './PAKLogo';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/businessInfo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <>
      {/* Top Banner Bar - Indian Shop Style with Responsive Wrapping */}
      <div className="bg-zinc-900 text-yellow-300 text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-yellow-500/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2">
          <div className="flex items-center space-x-1.5 font-medium text-white text-[11px] sm:text-xs text-center sm:text-left">
            <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
            <span className="truncate max-w-[280px] sm:max-w-none">
              Main Road, Kothandapuram, Sirkazhi Taluk
            </span>
          </div>

          <div className="flex items-center space-x-3 text-[11px] sm:text-xs">
            <a 
              href={BUSINESS_INFO.phones.primary.callUrl}
              className="flex items-center space-x-1 text-yellow-300 hover:text-white font-bold transition-colors"
            >
              <Phone className="w-3 h-3 text-red-400 flex-shrink-0" />
              <span>Call: {BUSINESS_INFO.phones.primary.display}</span>
            </a>

            <span className="text-zinc-600 hidden min-[400px]:inline">|</span>

            <a 
              href={getWhatsAppLink('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <MessageCircle className="w-3 h-3 flex-shrink-0" />
              <span className="hidden min-[450px]:inline">WhatsApp Enquiry</span>
              <span className="min-[450px]:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-blue-950 text-white shadow-lg border-b-2 border-red-600">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo Aligned on Left */}
            <div className="flex-shrink-0 py-1 max-w-[calc(100%-96px)] sm:max-w-none">
              <PAKLogo variant="light" size="md" showSubtitle={false} />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-md text-xs xl:text-sm font-bold tracking-wider transition-all ${
                      isActive
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'text-zinc-200 hover:bg-blue-900 hover:text-yellow-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Call & WhatsApp Buttons on Tablet / Desktop */}
            <div className="hidden sm:flex items-center space-x-2 lg:space-x-3">
              <a
                href={BUSINESS_INFO.phones.primary.callUrl}
                className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-blue-800 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider border border-blue-400/30 transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                <span>Call Now</span>
              </a>

              <a
                href={getWhatsAppLink('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Actions: Call Button & Hamburger Menu (min 44px tap targets) */}
            <div className="flex lg:hidden items-center space-x-1.5">
              <a
                href={BUSINESS_INFO.phones.primary.callUrl}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-600 text-white active:bg-red-700 shadow"
                title="Call now"
                aria-label="Call business"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-900 text-white hover:text-yellow-300 active:bg-blue-800 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-blue-950 border-b-4 border-red-600 text-white z-40 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-sm font-bold tracking-wider transition-colors ${
                      isActive
                        ? 'bg-red-600 text-white'
                        : 'text-zinc-200 hover:bg-blue-900 hover:text-yellow-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-3 border-t border-blue-900 space-y-2">
                <a
                  href={BUSINESS_INFO.phones.primary.callUrl}
                  className="flex items-center justify-center space-x-2 w-full min-h-[44px] py-3 rounded-lg bg-blue-900 text-white text-xs font-bold uppercase tracking-wider active:bg-blue-800"
                >
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <span>Call: {BUSINESS_INFO.phones.primary.display}</span>
                </a>
                <a
                  href={getWhatsAppLink('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full min-h-[44px] py-3 rounded-lg bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider active:bg-emerald-700"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
