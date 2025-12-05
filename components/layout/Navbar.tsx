import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('#hero')}>
            <h1 className={`font-serif text-2xl font-bold tracking-tight transition-colors ${scrolled ? 'text-stone-900' : 'text-stone-900 lg:text-white'}`}>
              Rare Moments
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-gold-500 ${
                  scrolled ? 'text-stone-600' : 'text-stone-800 lg:text-white/90'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                scrolled 
                  ? 'bg-stone-900 text-white hover:bg-stone-800' 
                  : 'bg-white text-stone-900 hover:bg-stone-100'
              }`}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-stone-800' : 'text-stone-800'}`} // Always dark on mobile if bg is light/transparent but usually text needs contrast.
              // Actually for mobile, hero text is often dark overlay. But here the nav might be on top of image.
              // Let's force dark text on mobile toggle for visibility unless we are strict about overlay.
              // Simple fix: use logic.
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} className={scrolled ? 'text-stone-900' : 'text-stone-900 lg:text-white'} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-stone-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-stone-600 hover:text-gold-600 hover:bg-stone-50 rounded-md"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4">
                 <button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-stone-900 text-white px-3 py-3 rounded-md text-center font-medium"
                >
                  Book a Session
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
