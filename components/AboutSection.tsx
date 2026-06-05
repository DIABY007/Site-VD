"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

/**
 * AboutSection Component
 * Reproduces the Editorial/Brutalist "WHO IS THE VD?" section.
 * Features asymmetric grid, overlapping text, and animated ticker.
 */
const AboutSection: React.FC = () => {
  const colors = {
    background: '#000000',
    accentRed: '#FF2200',
    textMuted: 'rgba(255,255,255,0.35)',
    textMetadata: 'rgba(255,255,255,0.45)',
    textBio: 'rgba(255,255,255,0.70)',
    tickerText: 'rgba(255,255,255,0.08)',
    plusColor: 'rgba(255,255,255,0.20)',
    white: '#FFFFFF',
  };

  return (
    <section id="about" className="relative w-full bg-black overflow-hidden flex flex-col items-center py-24">
      
      {/* Decorative Crosshairs in corners */}
      <div className="absolute top-8 left-8 text-xl font-light pointer-events-none" style={{ color: colors.plusColor }}>+</div>
      <div className="absolute top-8 right-8 text-xl font-light pointer-events-none" style={{ color: colors.plusColor }}>+</div>
      <div className="absolute bottom-8 left-8 text-xl font-light pointer-events-none" style={{ color: colors.plusColor }}>+</div>
      <div className="absolute bottom-8 right-8 text-xl font-light pointer-events-none" style={{ color: colors.plusColor }}>+</div>

      {/* Standardized 1400px Centered Container */}
      <div className="w-full max-w-[1400px] relative px-6 md:px-8 flex flex-col">
        
        {/* Main Editorial Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.5fr_1fr] gap-12 lg:gap-12 items-center mb-20 relative">
          
          {/* COLUMN 1: LEFT TITLES */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-20 order-2 lg:order-1 w-full">
            <div className="relative mb-6">
              <span className="hidden lg:block absolute -left-4 top-2 text-[#FF2200] text-[10px]">●</span>
              <h2 className="text-[2rem] md:text-[2.5rem] font-light tracking-tight text-white/80 leading-none uppercase">
                QUI EST<br />
                LE —
              </h2>
            </div>
            
            <p className="text-[0.7rem] md:text-[0.75rem] tracking-[0.2em] text-white/40 uppercase mb-8">
              ORIGINAIRE DE BOBO-DIOULASSO
            </p>

            <a 
              href="https://www.instagram.com/vd__officiel/?utm_source=ig_web_button_share_sheet" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'black' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-2.5 border border-white/40 rounded-full text-[10px] font-normal tracking-[0.1em] uppercase text-white transition-colors duration-200 min-h-[44px]"
              >
                <Instagram size={14} />
                INSTAGRAM →
              </motion.button>
            </a>
          </div>

          {/* COLUMN 2: CENTER IMAGE & OVERLAPPING TEXT */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 w-full">
             {/* THE OVERLAP TEXT (VD?) */}
             <motion.h3 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="absolute -left-[10%] lg:left-[-20%] top-[40%] text-[5rem] md:text-[6rem] lg:text-[8rem] font-[900] tracking-[-0.05em] text-white z-30 uppercase pointer-events-none"
               style={{ textShadow: '0 0 40px rgba(0,0,0,0.5)' }}
             >
               VD?
             </motion.h3>

             {/* IMAGE CONTAINER */}
             <div className="relative bg-white p-[8px] md:p-[10px] aspect-[3/4] w-full max-w-[280px] md:max-w-[380px] shadow-2xl z-10">
                <div className="relative w-full h-full overflow-hidden bg-gray-200">
                  <img 
                    src="/Image/Artist.png" 
                    alt="Artist VD"
                    className="w-full h-full object-cover grayscale brightness-90 hover:brightness-100 transition-all duration-500"
                  />
                </div>
                {/* Metadata on photo container */}
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-[8px] md:text-[9px] font-bold tracking-widest uppercase text-black/40">
                  EP \\ 2025
                </div>
             </div>
          </div>

          {/* COLUMN 3: RIGHT BIO PARAGRAPHS */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right z-20 order-3 w-full">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[0.8rem] md:text-[0.85rem] font-normal tracking-[0.05em] leading-[1.6] text-white/70 uppercase max-w-[500px]"
            >
              L'ARTISTE VD, PILIER DU COLLECTIF DFG, DÉLIVRE UNE DRILL SOMBRE ET PERCUTANTE, FUSIONNANT LE FRANÇAIS ET LE DIOULA SUR DES PRODS EXPLOSIVES.
            </motion.p>
            
            <div className="my-6 lg:my-8 text-white/20 text-lg font-light">\\</div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[0.8rem] md:text-[0.85rem] font-normal tracking-[0.05em] leading-[1.6] text-white/60 uppercase max-w-[500px]"
            >
              ACTIF SUR LA SCÈNE DEPUIS 10 ANS, IL A FORGÉ UNE IDENTITÉ SONORE BRUTE ET AUTHENTIQUE. PRODUIT PAR STAR HOUSE AGENCY, VD A FRAPPÉ FORT AVEC LA SORTIE DE SON DERNIER EP EN 2025. L'INTÉGRALITÉ DE SON CATALOGUE EST DÉSORMAIS DISPONIBLE SUR TOUTES LES PLATEFORMES DE STREAMING.
            </motion.p>
          </div>

        </div>

        {/* TICKER SECTION */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 overflow-hidden">
          {/* Static Labels */}
          <div className="flex justify-center gap-6 md:gap-12 mb-4 text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-white/30 uppercase">
            <span>DERNIER ALBUM</span>
            <span>SORTIE EN</span>
            <span>2025</span>
          </div>

          {/* Animated Scrolling Ticker */}
          <div className="relative overflow-hidden whitespace-nowrap py-3 md:py-4 border-y border-white/10 bg-white/5">
            <motion.div 
              className="inline-block"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[1, 2].map((i) => (
                <span 
                  key={i} 
                  className="text-[40px] md:text-[70px] lg:text-[100px] font-[950] tracking-[-0.02em] uppercase px-4 md:px-8" 
                  style={{ 
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(255,255,255,0.15)'
                  }}
                >
                  ÉCOUTEZ VD SUR TOUTES LES PLATEFORMES MAINTENANT • ÉCOUTEZ VD SUR TOUTES LES PLATEFORMES MAINTENANT •
                </span>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
