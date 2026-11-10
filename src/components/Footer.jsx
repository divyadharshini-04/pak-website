import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Clock, Instagram, ArrowRight, ShieldCheck } from 'lucide-react';
import PAKLogo from './PAKLogo';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/businessInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white border-t-4 border-red-600 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-zinc-800">
          
          {/* Col 1: Brand Wordmark & Location */}
          <div className="space-y-4">
            <PAKLogo variant="light" size="md" showSubtitle={true} />
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              Village-based family business providing certified electrical materials, plumbing supplies, commercial cooking vessels, marriage & funeral pandhal decoration, chairs, and sound & light services.
            </p>
            <div className="flex items-center space-x-2 text-xs text-yellow-400 font-bold">
              <ShieldCheck className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <span>Proprietor: {BUSINESS_INFO.owner.name}</span>
            </div>
          </div>

          {/* Col 2: Four Core Departments */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-yellow-400 border-b border-zinc-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-300">
              <li>
                <Link to="/products?cat=electronics" className="hover:text-yellow-400 flex items-center space-x-1.5 transition-colors py-0.5">
                  <ArrowRight className="w-3 h-3 text-red-500 flex-shrink-0" />
                  <span>Hardware & Electricals</span>
                </Link>
              </li>
              <li>
                <Link to="/products?cat=vessels" className="hover:text-yellow-400 flex items-center space-x-1.5 transition-colors py-0.5">
                  <ArrowRight className="w-3 h-3 text-red-500 flex-shrink-0" />
                  <span>Large Cooking Vessel Rentals</span>
                </Link>
              </li>
              <li>
                <Link to="/products?cat=decoration" className="hover:text-yellow-400 flex items-center space-x-1.5 transition-colors py-0.5">
                  <ArrowRight className="w-3 h-3 text-red-500 flex-shrink-0" />
                  <span>Marriage & Funeral Pandhal Decor</span>
                </Link>
              </li>
              <li>
                <Link to="/products?cat=chairs" className="hover:text-yellow-400 flex items-center space-x-1.5 transition-colors py-0.5">
                  <ArrowRight className="w-3 h-3 text-red-500 flex-shrink-0" />
                  <span>Event Chairs & Sound Systems</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400 flex items-center space-x-1.5 transition-colors py-0.5">
                  <ArrowRight className="w-3 h-3 text-red-500 flex-shrink-0" />
                  <span>Family Grocery Store (Alakudi)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Page Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-yellow-400 border-b border-zinc-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-300">
              <li>
                <Link to="/" className="hover:text-yellow-400 transition-colors block py-0.5">Home Page</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400 transition-colors block py-0.5">About Our Family Business</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-yellow-400 transition-colors block py-0.5">Product & Rental Catalogue</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-yellow-400 transition-colors block py-0.5">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400 transition-colors block py-0.5">Contact & Shop Location</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Phone */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-yellow-400 border-b border-zinc-800 pb-2">
              Direct Contact
            </h4>
            
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location.fullAddress}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>7:00 AM – 9:30 PM (All 7 Days)</span>
              </div>

              <div className="pt-2 space-y-1.5">
                <a
                  href={BUSINESS_INFO.phones.primary.callUrl}
                  className="flex items-center space-x-2 font-bold text-white hover:text-yellow-400 transition-colors py-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Call: {BUSINESS_INFO.phones.primary.display}</span>
                </a>

                <a
                  href={BUSINESS_INFO.phones.secondary.callUrl}
                  className="flex items-center space-x-2 font-bold text-white hover:text-yellow-400 transition-colors py-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Call: {BUSINESS_INFO.phones.secondary.display}</span>
                </a>
              </div>

              <div className="pt-2 flex items-center space-x-2">
                <a
                  href={getWhatsAppLink('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
                  title="Instagram"
                  aria-label="Instagram profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-2 text-center sm:text-left">
          <p>© {currentYear} P.A.K. Electricals & Hardwares. All rights reserved.</p>
          <p className="font-semibold text-yellow-400">
            Main Road, Kothandapuram, Sirkazhi Taluk, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
