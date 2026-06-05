'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AlbumInfoSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#000000] text-[#FFFFFF] font-sans px-8 pt-12 pb-8 flex flex-col min-h-screen">
      <div className="grid grid-cols-[45%_55%] gap-0 flex-grow">
        {/* COLONNE GAUCHE */}
        <div className="relative flex flex-col items-center pt-0">
          {/* Header label */}
          <div className="absolute top-0 left-0 flex items-center">
            <span className="text-[#FF2200] text-[6px] mr-2 leading-none">●</span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-normal">ALBUM</span>
          </div>

          {/* Zone cover album */}
          <div className="relative mt-auto mb-auto w-[280px]">
            <div className="aspect-square relative overflow-hidden">
              <Image
                src="/Image/Cover.jpg"
                alt="Cover"
                width={280}
                height={280}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Badge PARENTAL ADVISORY (CSS version) */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 border border-white/80 bg-black py-[3px] px-[5px] text-center flex flex-col items-center justify-center pointer-events-none">
              <span className="text-[4px] leading-tight font-bold tracking-[0.05em]">PARENTAL</span>
              <span className="text-[4px] leading-tight font-bold tracking-[0.05em]">ADVISORY</span>
              <span className="text-[3px] leading-tight font-bold tracking-[0.02em] mt-[1px]">EXPLICIT CONTENT</span>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE — MÉTADONNÉES */}
        <div className="flex flex-col">
          {/* Bloc Released & Descriptions */}
          <div className="flex flex-row gap-10">
            {/* Released */}
            <div className="flex flex-col min-w-[120px]">
              <span className="text-white/40 text-[10px] uppercase tracking-[0.15em]">RELEASED</span>
              <span className="text-white/70 text-[11px] uppercase tracking-[0.12em] mt-1.5">05 MAY 2023</span>
            </div>

            {/* Project Descriptions */}
            <div className="flex flex-row gap-10">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-[#FF2200] text-[6px] mr-2 leading-none">●</span>
                  <span className="text-white text-[11px] uppercase tracking-[0.15em] font-semibold">PROJECT</span>
                </div>
                <span className="text-white/50 text-[11px] uppercase tracking-[0.15em] mt-1 ml-3.5">DESCRIPTIONS</span>
              </div>

              <p className="text-white/55 text-[10px] uppercase tracking-[0.05em] leading-[1.9] max-w-[340px]">
                "IF LOOKS COULD KILL" IS A FIGURE OF SPEECH 
                THAT IMPLIES THAT SOMEONE'S GAZE OR EXPRESSION IS SO 
                INTENSE AND HOSTILE THAT IT COULD CAUSE HARM OR EVEN 
                DEATH TO THE RECIPIENT. IT IS OFTEN USED TO DESCRIBE A 
                SITUATION WHERE SOMEONE IS GLARING AT ANOTHER PERSON 
                WITH SUCH INTENSITY THAT IT FEELS LIKE THEY'RE BEING 
                THREATENED OR ATTACKED, EVEN THOUGH NO PHYSICAL HARM 
                IS DONE.
              </p>
            </div>
          </div>

          {/* Séparateur horizontal */}
          <div className="w-full h-px bg-white/10 my-8" />

          {/* Grille métadonnées (3 lignes) */}
          <div className="flex flex-col gap-7">
            {/* GENRE */}
            <div className="flex flex-row items-baseline">
              <span className="w-[120px] text-white/45 text-[11px] uppercase tracking-[0.15em]">GENRE</span>
              <span className="text-white/75 text-[11px] uppercase tracking-[0.12em]">HIP-HOP/RAP</span>
            </div>
            {/* CONTENT */}
            <div className="flex flex-row items-baseline">
              <span className="w-[120px] text-white/45 text-[11px] uppercase tracking-[0.15em]">CONTENT</span>
              <span className="text-white/75 text-[11px] uppercase tracking-[0.12em]">EXPLICIT</span>
            </div>
            {/* FEATURES */}
            <div className="flex flex-row items-baseline">
              <span className="w-[120px] text-white/45 text-[11px] uppercase tracking-[0.15em]">FEATURES</span>
              <span className="text-white/75 text-[11px] uppercase tracking-[0.12em]">KEN CARSON</span>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER DE SECTION */}
      <div className="mt-12 flex flex-col">
        {/* Séparateur */}
        <div className="w-full h-px bg-white/10" />

        {/* Barre footer */}
        <div className="flex flex-row justify-between items-end pt-5">
          {/* Zone gauche */}
          <div className="flex flex-col gap-1">
            <span className="text-white/70 text-[11px] uppercase tracking-[0.15em] leading-tight">
              DESTROY<br />LONELY
            </span>
            <span className="text-white/40 text-[10px] uppercase tracking-[0.15em]">
              IF LOOKS COULD KILL
            </span>
          </div>

          {/* Zone centre */}
          <div className="flex flex-col items-center">
            <span className="text-white/70 text-[11px]">26</span>
            <span className="text-white/35 text-[9px] uppercase tracking-[0.2em] mt-0.5">TRACKS</span>
          </div>

          {/* Zone centre-droite */}
          <div>
            <motion.button
              whileHover={{ backgroundColor: '#FFFFFF', color: '#000000' }}
              transition={{ duration: 0.2 }}
              className="border-[1.5px] border-white/85 rounded-full px-[18px] py-[8px] text-[10px] uppercase tracking-[0.12em] text-white bg-transparent"
            >
              STREAM NOW →
            </motion.button>
          </div>

          {/* Zone droite */}
          <div className="text-white/30 text-[9px] uppercase tracking-[0.1em]">
            ® 2023 OPIUM/INTERSCOPE
          </div>
        </div>

        {/* Croix déco footer */}
        <div className="mt-6 flex justify-center">
          <span className="text-white/20 text-[18px] font-light">+</span>
        </div>
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

export default AlbumInfoSection;
