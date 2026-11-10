import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CinematicIntro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check session storage to avoid annoyance on every route change
    const hasSeenIntro = sessionStorage.getItem('pak_intro_seen');
    if (hasSeenIntro) {
      setShowIntro(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem('pak_intro_seen', 'true');
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!showIntro) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-pak-navy-dark text-pak-cream pointer-events-auto"
        onClick={() => setShowIntro(false)}
      >
        <div className="relative text-center px-4 max-w-lg">
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pak-gold/20 rounded-full blur-3xl pointer-events-none" />

          {/* Letter Reveal Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center space-x-3 text-6xl sm:text-7xl md:text-8xl font-serif font-black tracking-[0.25em]"
          >
            <span className="text-pak-cream">P</span>
            <span className="text-pak-gold font-normal">.</span>
            <span className="text-pak-cream">A</span>
            <span className="text-pak-gold font-normal">.</span>
            <span className="text-pak-cream">K</span>
            <span className="text-pak-gold font-normal">.</span>
          </motion.div>

          {/* Expanding Gold Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            className="h-[1.5px] bg-gradient-to-r from-transparent via-pak-gold to-transparent my-4 w-48 sm:w-64 mx-auto"
          />

          {/* Tagline Reveal */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="font-playfair italic text-pak-gold text-base sm:text-lg"
          >
            "Your Everyday Essentials. Your Special Occasion Partner."
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.3em] text-pak-cream/60 mt-3 font-sans-dm"
          >
            Sirkazhi • Tamil Nadu
          </motion.p>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.5 }}
            className="text-[9px] uppercase tracking-widest text-pak-cream/40 block mt-6"
          >
            Click anywhere to enter
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
