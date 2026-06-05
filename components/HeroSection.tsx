'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/**
 * HeroSection Component
 * High-impact, mobile-first responsive design.
 */
const HeroSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const colors = {
    cardBackground: '#000000',
    accentRed: '#FF2200',
    textSecondary: 'rgba(255,255,255,0.55)',
    textMetadata: 'rgba(255,255,255,0.45)',
    borderTag: 'rgba(255,255,255,0.60)',
    borderCTA: 'rgba(255,255,255,0.85)',
  };

  const navLinks = [
    { name: 'À PROPOS', href: '#about' },
    { name: 'MUSIC', href: '#music' },
    { name: 'SHOP', href: '#shop' },
    { name: 'ÉVÉNEMENT', href: '#concerts' },
  ];

  return (
    <section className="relative w-full h-[100dvh] bg-black overflow-hidden flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1400px] h-full px-4 md:px-8 flex flex-col"
      >
        <div className="relative w-full h-full bg-black overflow-hidden border-b border-white/10">
          
          {/* Desktop Navigation */}
          <nav className="absolute top-0 left-0 w-full h-[80px] hidden md:flex justify-between items-center px-[32px] z-20">
            <div className="flex items-center gap-[16px] text-[11px] font-normal tracking-[0.12em] text-white uppercase">
              <a href="#about" className="hover:text-white/70 transition-colors">À PROPOS</a>
              <span style={{ color: colors.accentRed }}>•</span>
              <a href="#music" className="hover:text-white/70 transition-colors">MUSIC</a>
            </div>

            <div className="flex items-center justify-center">
               <img 
                 src="/Image/DFG.jpg" 
                 alt="DFG Logo" 
                 className="h-[30px] w-auto object-contain brightness-110"
               />
            </div>

            <div className="flex items-center gap-[16px] text-[11px] font-normal tracking-[0.12em] text-white uppercase">
              <a href="#shop" className="hover:text-white/70 transition-colors">SHOP</a>
              <span style={{ color: colors.accentRed }}>•</span>
              <a href="#concerts" className="hover:text-white/70 transition-colors">ÉVÉNEMENT</a>
            </div>
          </nav>

          {/* Mobile Navigation Header */}
          <div className="absolute top-0 left-0 w-full h-[60px] md:hidden flex justify-between items-center px-6 z-50">
            <img 
              src="/Image/DFG.jpg" 
              alt="DFG Logo" 
              className="h-[20px] w-auto object-contain"
            />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -mr-2 text-white focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Fullscreen Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center md:hidden"
              >
                <div className="flex flex-col items-center gap-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-bold tracking-[0.2em] text-white hover:text-[#FF2200] transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="absolute bottom-12 text-[10px] tracking-[0.3em] text-white/30 uppercase">
                  DFG_COLLECTIF \\ 2026
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hero Logo (Metallic Logo) */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none px-6 md:px-10"
          >
            <img 
              src="/Image/logo-metal.png" 
              alt="Metallic Logo"
              className="w-full max-h-[50%] md:max-h-[70%] object-contain"
            />
          </motion.div>

          {/* Bottom Section */}
          <div className="absolute bottom-[30px] md:bottom-[40px] left-6 md:left-[32px] right-6 md:right-[32px] flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-0 z-20">
            {/* Left Info / CTA */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col items-center md:items-start gap-4 md:gap-[24px] w-full md:w-auto"
            >
              <div className="flex flex-col items-center md:items-start gap-3">
                <div 
                  className="flex items-center gap-[4px] px-[12px] py-[5px] rounded-full border text-[10px] font-normal tracking-[0.08em] text-white uppercase"
                  style={{ borderColor: colors.borderTag }}
                >
                  <span style={{ color: colors.accentRed }}>•</span>
                  DFG_COLLECTIF
                </div>

                <a 
                  href="https://open.spotify.com/artist/6eCjfb7NwT8soKEZoJMaU1?si=AapVWf_aTQmmZFwfE25m0Q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'black' }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-[4px] px-5 py-2.5 rounded-full border text-[11px] font-normal tracking-[0.1em] text-white uppercase transition-colors duration-200"
                    style={{ borderColor: colors.borderCTA }}
                  >
                    STREAM MAINTENANT →
                  </motion.button>
                </a>
              </div>

              <div 
                className="text-[10px] font-normal tracking-[0.15em] uppercase"
                style={{ color: colors.textMetadata }}
              >
                06 - 05 &nbsp;\\&nbsp; 26
              </div>
            </motion.div>

            {/* Right Description */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col items-center md:items-end gap-4 md:gap-[24px] max-w-[400px] w-full"
            >
              <p 
                className="text-[10px] md:text-[10.5px] font-normal tracking-[0.06em] leading-[1.7] uppercase text-center md:text-right"
                style={{ color: colors.textSecondary }}
              >
                DES MÉLODIES FROIDES COUPÉES PAR DES KICKS VIOLENTS.<br className="hidden md:block" />
                VD FUSIONNE LA LANGUE DE MOLIÈRE ET L'ÂME DU DIOULA<br className="hidden md:block" />
                POUR FORGER UNE NOUVELLE ÈRE SONORE AVEC LE DFG
              </p>

              <div className="w-full flex justify-center md:justify-end">
                <span 
                  className="text-[10px] font-normal tracking-[0.15em] uppercase"
                  style={{ color: colors.textMetadata }}
                >
                  2026
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;


export default HeroSection;
