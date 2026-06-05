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
    type: "FULL PASS\nTICKET",
  },
  {
    id: 2,
    name: "SUMMER FEST 2023",
    location: "SPECIAL REGION OF\nYOGYAKARTA,\nINDONESIA",
    date: "THRUSDAY, 26 \\\\ 09 \\\\ 2023",
    time: "8:00 PM",
    type: "FULL PASS\nTICKET",
  }
];

const Barcode: React.FC = () => {
  // Generate random bars for the barcode
  const bars = Array.from({ length: 24 }).map((_, i) => ({
    width: Math.floor(Math.random() * 3) + 1,
    gap: Math.floor(Math.random() * 2) + 1,
  }));

  return (
    <div className="flex flex-row items-center justify-center h-20 px-3">
      {bars.map((bar, i) => (
        <div
          key={i}
          style={{
            width: `${bar.width}px`,
            marginRight: `${bar.gap}px`,
          }}
          className="h-full bg-white"
        />
      ))}
    </div>
  );
};

const ConcertScheduleSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#000000] text-[#FFFFFF] font-sans px-8 py-12 flex flex-col">
      {/* HEADER DE SECTION */}
      <div className="relative mb-10">
        <div className="flex flex-col">
          <div className="flex items-start gap-[10px]">
            <span className="text-[#FF2200] text-[8px] mt-[14px]">●</span>
            <div className="flex flex-col">
              <h2 className="text-[64px] font-[800] tracking-[-0.02em] uppercase text-white/25 leading-[0.92]">
                CONCERT
              </h2>
              <h2 className="text-[64px] font-[800] tracking-[-0.02em] uppercase text-white/25 leading-[0.92]">
                SCHEDULE
              </h2>
            </div>
          </div>
        </div>

        {/* Année + filtre (top-right) */}
        <div className="absolute top-0 right-0 flex flex-col items-end">
          <span className="text-[64px] font-[800] tracking-[-0.02em] text-white/25 leading-[0.92]">
            2023
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-2 cursor-pointer hover:text-white transition-colors duration-200">
            LATEST ↓
          </span>
        </div>
      </div>

      {/* LISTE TICKETS */}
      <div className="flex flex-col">
        {events.map((event, index) => (
          <div key={event.id} className="relative">
            {/* Ticket Card */}
            <div className="grid grid-cols-[58%_8%_34%] border border-white/18 rounded-[2px] relative overflow-visible min-h-[160px]">
              {/* COLONNE 1 — INFOS ÉVÉNEMENT */}
              <div className="flex flex-col justify-between p-7 pr-6">
                <div>
                  <h3 className="text-[15px] font-[600] tracking-[0.08em] uppercase text-white mb-3">
                    {event.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.1em] leading-[1.7] text-white/45 whitespace-pre-line">
                    {event.location}
                  </p>
                </div>

                <div className="flex flex-row items-center gap-3 mt-auto pt-5">
                  <span className="text-[10px] uppercase tracking-[0.12em] text-white/55">
                    {event.date}
                  </span>
                  <span className="text-[#FF2200] text-[5px]">●</span>
                  <span className="text-[10px] uppercase tracking-[0.12em] text-white/55">
                    {event.time}
                  </span>
                </div>
              </div>

              {/* COLONNE 2 — BARCODE */}
              <div className="relative flex items-center justify-center border-l border-dashed border-white/20">
                <Barcode />
              </div>

              {/* COLONNE 3 — TICKET TYPE + CTA */}
              <div className="flex flex-col justify-between items-end p-7 border-l border-white/12">
                <div className="text-right">
                  {event.type.split('\n').map((line, i) => (
                    <p key={i} className="text-[11px] uppercase tracking-[0.15em] text-white/70">
                      {line}
                    </p>
                  ))}
                </div>

                <motion.button
                  whileHover={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                  transition={{ duration: 0.2 }}
                  className="border border-white/80 rounded-full px-4 py-[7px] text-[10px] uppercase tracking-[0.1em] text-white bg-transparent whitespace-nowrap mt-auto"
                >
                  BUY NOW →
                </motion.button>
              </div>

              {/* Cercles de découpe (uniquement au milieu des tickets ou en haut/bas de la zone barcode) */}
              {/* On place les cercles sur la ligne de séparation droite du barcode (border-left de col 3) */}
              <div className="absolute top-0 right-[34%] -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-black border border-white/18 rounded-full z-10" />
              <div className="absolute bottom-0 right-[34%] translate-y-1/2 translate-x-1/2 w-4 h-4 bg-black border border-white/18 rounded-full z-10" />
            </div>
            
            {/* Margin between tickets is 0 as per prompt, they touch */}
            {index !== events.length - 1 && <div className="h-0" />}
          </div>
        ))}
      </div>

      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/helvetica-neue-9');
        
        body {
          font-family: 'Helvetica Neue', sans-serif;
          margin: 0;
          background-color: #000;
        }
      `}</style>
    </section>
  );
};

export default ConcertScheduleSection;
