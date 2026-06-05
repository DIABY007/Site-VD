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
      <div className="flex flex-col relative w-full gap-[20px]">
        {events.map((event, index) => (
          <div key={event.id} className="ticket-card">
            {/* GAUCHE — INFOS + BARCODE */}
            <div className="flex flex-grow items-stretch">
              {/* INFOS ÉVÉNEMENT */}
              <div className="flex flex-col justify-between p-7 flex-grow">
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

              {/* BARCODE */}
              <div className="flex items-center justify-center px-4">
                <Barcode />
              </div>
            </div>

            {/* DIVIDER — La ligne de séparation avec les encoches */}
            <div className="divider"></div>

            {/* DROITE — TICKET TYPE + CTA */}
            <div className="flex flex-col justify-between items-end p-7 w-[28%] shrink-0">
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

        /* LOGIQUE CSS POUR LE TICKET */
        .ticket-card {
          display: flex;
          position: relative;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.3);
          min-height: 160px;
          border-radius: 2px;
        }

        .divider {
          position: relative;
          width: 1px;
          border-left: 1px dashed rgba(255, 255, 255, 0.4);
          height: 100%;
          align-self: stretch;
        }

        /* Les encoches (L'illusion d'optique par débordement) */
        .divider::before,
        .divider::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #000;
          border: 1px solid rgba(255, 255, 255, 0.3);
          left: -1px; /* Centré sur la bordure gauche dashed */
          transform: translateX(-50%);
          z-index: 10;
        }

        .divider::before {
          top: -12px;
        }

        .divider::after {
          bottom: -12px;
        }
      `}</style>
    </section>
  );
};

export default ConcertScheduleSection;
