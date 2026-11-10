import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Reset scroll on navigation
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  // Monitor scroll for progress circle
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;

      setScrollProgress(Number(scroll));
      setShowScrollTop(totalScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-pak-navy text-pak-gold flex items-center justify-center shadow-xl border border-pak-gold/40 hover:bg-pak-navy-dark transition-colors focus:outline-none"
          aria-label="Scroll back to top"
        >
          {/* Circular SVG progress ring */}
          <svg className="absolute w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="rgba(216, 139, 56, 0.2)"
              strokeWidth="2.5"
              fill="none"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="#D88B38"
              strokeWidth="2.5"
              strokeDasharray="125.6"
              strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <ArrowUp className="w-4 h-4 text-pak-gold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
