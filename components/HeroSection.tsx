'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * HeroSection Component
 * Personalized for DFG / VD.
 * Features updated navigation, descriptive text, and Spotify integration.
 */
const HeroSection: React.FC = () => {
  const colors = {
    cardBackground: '#000000',
    accentRed: '#FF2200',
    textSecondary: 'rgba(255,255,255,0.55)',
    textMetadata: 'rgba(255,255,255,0.45)',
    borderTag: 'rgba(255,255,255,0.60)',
    borderCTA: 'rgba(255,255,255,0.85)',
  };

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center">
      {/* Container sticky to top, no top padding */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1400px] h-full px-8 sm:px-4 flex flex-col"
      >
        {/* Card Container - h-full to occupy entire height, border-b only */}
        <div 
          className="relative w-full h-full bg-black overflow-hidden border-b border-white/10"
        >
          
          {/* Navigation */}
          <nav className="absolute top-0 left-0 w-full h-[80px] flex justify-between items-center px-[32px] z-20">
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

          {/* Hero Logo (Metallic Logo) */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none px-10"
          >
            <img 
              src="/Image/logo-metal.png" 
              alt="Metallic Logo"
              className="w-full max-h-[70%] object-contain"
            />
          </motion.div>

          {/* Bottom Section */}
          <div className="absolute bottom-[40px] left-[32px] right-[32px] flex justify-between items-end z-20">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col items-start gap-[24px]"
            >
              <div className="flex flex-col items-start gap-[8px]">
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
                    className="group flex items-center gap-[4px] px-[14px] py-[6px] rounded-full border text-[11px] font-normal tracking-[0.1em] text-white uppercase transition-colors duration-200"
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

            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col items-center gap-[24px] max-w-[400px]"
            >
              {/* Description Text Updated */}
              <p 
                className="text-[10.5px] font-normal tracking-[0.06em] leading-[1.7] uppercase text-center"
                style={{ color: colors.textSecondary }}
              >
                DES MÉLODIES FROIDES COUPÉES PAR DES KICKS VIOLENTS.<br />
                VD FUSIONNE LA LANGUE DE MOLIÈRE ET L'ÂME DU DIOULA<br />
                POUR FORGER UNE NOUVELLE ÈRE SONORE AVEC LE DFG
              </p>

              <div className="w-full flex justify-end">
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
