'use client';

import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    name: "ROLLING LOUD ROTTERDAM 2023",
    location: "ROTTERDAM AHOK,\nROTTERDAM",
    date: "FRIDAY, 26 \\\\ 09 \\\\ 2023",
    time: "8:00 PM",
    typeLines: ["FULL PASS", "TICKET"],
  },
  {
    id: 2,
    name: "SUMMER FEST 2023",
    location: "SPECIAL REGION OF\nYOGYAKARTA,\nINDONESIA",
    date: "THRUSDAY, 26 \\\\ 09 \\\\ 2023",
    time: "8:00 PM",
    typeLines: ["FULL PASS", "TICKET"],
  }
];

const Barcode: React.FC = () => {
  return (
    <div 
      className="w-[20px] h-[72px]"
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
 * Optimized for natural flow with scroll animations.
 */
const ConcertScheduleSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#000000] text-[#FFFFFF] font-sans px-8 py-20 flex flex-col items-center overflow-hidden">
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
                  CONCERT
                </h2>
                <h2 className="text-[3.5rem] font-[800] tracking-[-0.02em] text-white/40">
                  SCHEDULE
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end leading-[0.85]">
            <span className="text-[3.5rem] font-[800] tracking-[-0.02em] text-white/50">
              2023
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-3 cursor-pointer hover:text-white transition-colors duration-200">
              LATEST ↓
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
              className="flex relative overflow-hidden bg-[#0A0A0A] min-h-[160px] rounded-[2px]"
            >
              <div className="absolute inset-0 border border-white/30 rounded-[2px] z-10 pointer-events-none" />

              <div className="flex w-[70%] items-stretch relative z-20 px-10 py-8">
                <div className="flex flex-col flex-grow uppercase">
                  <div>
                    <h3 className="text-[1.25rem] font-[600] tracking-[0.05em] text-white mb-3">
                      {event.name}
                    </h3>
                    <p className="text-[0.85rem] tracking-[0.05em] leading-[1.4] text-[#a0a0a0] whitespace-pre-line">
                      {event.location}
                    </p>
                  </div>

                  <div className="flex flex-row items-center gap-[10px] mt-auto">
                    <span className="text-[0.85rem] tracking-[0.05em] text-[#a0a0a0]">
                      {event.date}
                    </span>
                    <span className="text-[#ff3333] text-[6px] leading-none">●</span>
                    <span className="text-[0.85rem] tracking-[0.05em] text-[#a0a0a0]">
                      {event.time}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center pl-6">
                  <Barcode />
                </div>
              </div>

              <div className="relative w-px self-stretch flex flex-col justify-between items-center flex-shrink-0 z-30">
                <div className="absolute inset-y-0 left-0 border-l border-dashed border-white/40" />
                <div className="w-[28px] h-[28px] rounded-full bg-black border border-white/30 z-50 -mt-3.5 -ml-[0.5px] flex-shrink-0" />
                <div className="w-[28px] h-[28px] rounded-full bg-black border border-white/30 z-50 -mb-3.5 -ml-[0.5px] flex-shrink-0" />
              </div>

              <div className="flex w-[30%] flex-col justify-center items-center px-10 py-8 relative z-20 gap-6">
                <div className="text-center uppercase">
                  {event.typeLines.map((line, i) => (
                    <p key={i} className="text-[0.75rem] tracking-[0.05em] text-[#a0a0a0] leading-tight">
                      {line}
                    </p>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'black' }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/40 rounded-full px-6 py-2 text-[0.75rem] uppercase tracking-[0.1em] text-white bg-transparent whitespace-nowrap transition-colors duration-200"
                >
                  BUY NOW →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ConcertScheduleSection;
