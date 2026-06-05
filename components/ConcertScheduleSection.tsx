'use client';

import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    name: "BOBO AMBIANCE",
    location: "BOBO-DIOULASSO,\nSECTEUR 24",
    date: "VENDREDI, 26 \\\\ 09 \\\\ 2023",
    time: "20:00",
    typeLines: ["PASS COMPLET", "TICKET"],
  },
  {
    id: 2,
    name: "AFRO TRAP",
    location: "BOBO-DIOULASSO,\nMAISON DE LA CULTURE",
    date: "JEUDI, 26 \\\\ 09 \\\\ 2023",
    time: "20:00",
    typeLines: ["PASS COMPLET", "TICKET"],
  }
];

/**
 * Barcode Component
 * Set to h-full to match the height of its flex parent.
 */
const Barcode: React.FC = () => {
  return (
    <div 
      className="w-[20px] h-full"
      style={{
        background: `repeating-linear-gradient(
          to bottom,
          #fff,
          #fff 2px,
          transparent 2px,
          transparent 4px
        )`
      }}
    />
  );
};

/**
 * ConcertScheduleSection Component
 * Reproduces the concert tour list.
 * Optimized: Barcode and Divider are perfectly parallel and identical in height.
 */
const ConcertScheduleSection: React.FC = () => {
  const whatsappNumber = "22674855416";
  const getWhatsAppLink = (eventName: string) => {
    const message = encodeURIComponent(`Bonjour, je souhaite acheter un ticket pour l'évènement : ${eventName}`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section id="concerts" className="relative w-full bg-[#000000] text-[#FFFFFF] font-sans px-8 py-20 flex flex-col items-center overflow-hidden">
      {/* Standardized 1400px Centered Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1400px] flex flex-col"
      >
        
        {/* HEADER DE SECTION */}
        <div className="relative mb-12 flex justify-between items-end">
          <div className="flex flex-col">
            <div className="flex items-start gap-4">
              <span className="text-[#FF2200] text-[10px] mt-[26px]">●</span>
              <div className="flex flex-col uppercase leading-[0.85]">
                <h2 className="text-[3.5rem] font-[800] tracking-[-0.02em] text-white">
                  CALENDRIER
                </h2>
                <h2 className="text-[3.5rem] font-[800] tracking-[-0.02em] text-white/40">
                  DES CONCERTS
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end leading-[0.85]">
            <span className="text-[3.5rem] font-[800] tracking-[-0.02em] text-white/50">
              2025
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-3 cursor-pointer hover:text-white transition-colors duration-200">
              PLUS RÉCENTS ↓
            </span>
          </div>
        </div>

        {/* LISTE TICKETS */}
        <div className="flex flex-col relative w-full gap-[20px]">
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex relative overflow-hidden bg-[#0A0A0A] min-h-[180px] rounded-[2px]"
            >
              <div className="absolute inset-0 border border-white/30 rounded-[2px] z-10 pointer-events-none" />

              {/* CONTENU PRINCIPAL (Flex Row sur Desktop, Column sur Mobile) */}
              <div className="flex flex-col md:flex-row w-full items-stretch relative z-20">
                
                {/* GAUCHE - INFOS (65% environ sur desktop) */}
                <div className="flex flex-grow flex-col justify-between uppercase px-8 md:px-12 py-8 md:py-10 text-center md:text-left">
                  <div>
                    <h3 className="text-[1.2rem] md:text-[1.5rem] font-[600] tracking-[0.05em] text-white mb-3">
                      {event.name}
                    </h3>
                    <p className="text-[0.85rem] md:text-[0.95rem] tracking-[0.05em] leading-[1.4] text-[#a0a0a0] whitespace-pre-line">
                      {event.location}
                    </p>
                  </div>

                  <div className="flex flex-row items-center justify-center md:justify-start gap-[12px] mt-6 md:mt-8">
                    <span className="text-[0.85rem] md:text-[0.95rem] tracking-[0.05em] text-[#a0a0a0]">
                      {event.date}
                    </span>
                    <span className="text-[#ff3333] text-[6px] leading-none">●</span>
                    <span className="text-[0.85rem] md:text-[0.95rem] tracking-[0.05em] text-[#a0a0a0]">
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* CENTRE - BARCODE (Caché sur mobile pour gagner de la place) */}
                <div className="hidden md:flex items-stretch py-10 pr-10">
                   <Barcode />
                </div>

                {/* DIVIDER & NOTCHES (Horizontal sur Mobile, Vertical sur Desktop) */}
                <div className="relative w-full h-px md:w-px md:h-auto self-stretch flex flex-row md:flex-col justify-between items-center flex-shrink-0">
                    <div className="absolute inset-x-0 top-0 md:inset-y-0 md:left-0 border-t md:border-t-0 md:border-l border-dashed border-white/40 w-full md:w-auto h-px md:h-auto" />
                    <div className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] rounded-full bg-black border border-white/30 z-50 -ml-2.5 md:-ml-[14px] flex-shrink-0 hidden md:flex" />
                    <div className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] rounded-full bg-black border border-white/30 z-50 -mr-2.5 md:-mb-3.5 md:-ml-[14px] flex-shrink-0 hidden md:flex" />
                </div>

                {/* DROITE - TICKET TYPE + CTA (30% environ sur desktop) */}
                <div className="flex w-full md:w-[30%] flex-col justify-center items-center px-8 md:px-12 py-8 md:py-10 gap-6 md:gap-8">
                  <div className="text-center uppercase">
                    {event.typeLines.map((line, i) => (
                      <p key={i} className="text-[0.75rem] md:text-[0.85rem] tracking-[0.05em] text-[#a0a0a0] leading-tight">
                        {line}
                      </p>
                    ))}
                  </div>

                  <a 
                    href={getWhatsAppLink(event.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'black' }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto border border-white/40 rounded-full px-8 py-3 text-[0.8rem] md:text-[0.85rem] uppercase tracking-[0.1em] text-white bg-transparent whitespace-nowrap transition-colors duration-200 min-h-[44px]"
                    >
                      ACHETER →
                    </motion.button>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ConcertScheduleSection;
