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
  const barWidths = [2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 2, 3, 1, 1, 2, 3, 1, 2, 1, 3, 1, 2];
  const barGaps = [2, 3, 1, 2, 1, 3, 2, 1, 2, 1, 3, 1, 2, 3, 1, 2, 1, 2, 3, 1, 2, 1];

  return (
    <div className="flex flex-row items-center justify-center px-4 h-full">
      {barWidths.map((width, i) => (
        <div
          key={i}
          style={{
            width: `${width}px`,
            height: i % 2 === 0 ? '72px' : '52px',
            marginRight: `${barGaps[i]}px`,
          }}
          className="bg-white flex-shrink-0"
        />
      ))}
    </div>
  );
};

const ConcertScheduleSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#000000] text-[#FFFFFF] font-sans px-8 py-12 flex flex-col overflow-hidden">
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
      <div className="flex flex-col relative w-full">
        {events.map((event, index) => (
          <div key={event.id} className="w-full">
            {/* Ticket Card */}
            <div className="grid grid-cols-[62%_10%_28%] border border-white/18 rounded-[2px] relative min-h-[160px]">
              {/* COLONNE 1 — INFOS ÉVÉNEMENT */}
              <div className="flex flex-col justify-between p-7 pr-7">
                <div>
                  <h3 className="text-[15px] font-[600] tracking-[0.08em] uppercase text-white mb-3">
                    {event.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.1em] leading-[1.7] text-white/45 whitespace-pre-line">
                    {event.location}
                  </p>
                </div>

                <div className="flex flex-row items-center gap-[10px] mt-auto pt-5">
                  <span className="text-[10px] uppercase tracking-[0.12em] text-white/55">
                    {event.date}
                  </span>
                  <span className="text-[#FF2200] text-[5px] leading-none">●</span>
                  <span className="text-[10px] uppercase tracking-[0.12em] text-white/55">
                    {event.time}
                  </span>
                </div>
              </div>

              {/* COLONNE 2 — BARCODE */}
              <div className="relative flex items-center justify-center border-l border-r border-dashed border-white/25">
                <Barcode />
              </div>

              {/* COLONNE 3 — TICKET TYPE + CTA */}
              <div className="flex flex-col justify-between items-end p-7">
                <div className="text-right">
                  {event.typeLines.map((line, i) => (
                    <p key={i} className="text-[10px] uppercase tracking-[0.18em] text-white/70 leading-tight">
                      {line}
                    </p>
                  ))}
                </div>

                <motion.button
                  whileHover={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                  transition={{ duration: 0.2 }}
                  className="border border-white/80 rounded-full px-4 py-[7px] text-[10px] uppercase tracking-[0.1em] text-white bg-transparent whitespace-nowrap mt-auto self-end"
                >
                  BUY NOW →
                </motion.button>
              </div>

              {/* Cercle de découpe entre les 2 cards */}
              {/* Positionné au bas de la première card / haut de la deuxième */}
              {index === 0 && (
                <div 
                  style={{ left: 'calc(62% + 10%)', transform: 'translate(-50%, 50%)' }}
                  className="absolute bottom-0 w-5 h-5 bg-black border border-white/20 rounded-full z-20" 
                />
              )}
            </div>
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
