import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-zinc-900 font-sans antialiased selection:bg-red-600 selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Scroll to top automatically on route changes */}
      <ScrollToTop />

      {/* Sticky Responsive Hardware-Style Navbar */}
      <Navbar />

      {/* Animated Route Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/menu" element={<Navigate to="/products" replace />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Quick WhatsApp Action */}
      <WhatsAppFloatingButton />

      {/* Solid Hardware-Style Footer */}
      <Footer />
    </div>
  );
}
