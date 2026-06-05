'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * AlbumInfoSection Component
 * Reproduces the album metadata and track info.
 * Optimized for natural flow with scroll animations.
 */
const AlbumInfoSection: React.FC = () => {
  return (
    <section id="music" className="relative w-full bg-[#000000] text-[#FFFFFF] font-sans px-8 py-20 flex flex-col items-center overflow-hidden">
      {/* Standardized 1400px Centered Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1400px] flex flex-col"
      >
        
        <div className="grid grid-cols-[45%_55%] gap-12 items-start mb-16">
          {/* COLONNE GAUCHE */}
          <div className="relative flex flex-col items-center">
            <div className="absolute top-0 left-0 flex items-center">
              <span className="text-[#FF2200] text-[6px] mr-2 leading-none">●</span>
              <span className="text-[11px] uppercase tracking-[0.2em] font-normal">ALBUM</span>
            </div>

            <div className="relative mt-12 w-full max-w-[320px]">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="aspect-square relative overflow-hidden border border-white/10"
              >
                <Image
                  src="/Image/Cover.jpg"
                  alt="Cover"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </motion.div>

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-14 border border-white/80 bg-black py-[3px] px-[5px] text-center flex flex-col items-center justify-center pointer-events-none z-10">
                <span className="text-[5px] leading-tight font-bold tracking-[0.05em]">PARENTAL</span>
                <span className="text-[5px] leading-tight font-bold tracking-[0.05em]">ADVISORY</span>
                <span className="text-[4px] leading-tight font-bold tracking-[0.02em] mt-[1px]">EXPLICIT CONTENT</span>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE — MÉTADONNÉES */}
          <div className="flex flex-col pt-12">
            <div className="flex flex-col gap-10">
              <div className="flex flex-row gap-12">
                <div className="flex flex-col min-w-[120px]">
                  <span className="text-white/40 text-[10px] uppercase tracking-[0.15em]">RELEASED</span>
                  <span className="text-white/70 text-[11px] uppercase tracking-[0.12em] mt-1.5">05 MAY 2023</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-[#FF2200] text-[6px] mr-2 leading-none">●</span>
                    <span className="text-white text-[11px] uppercase tracking-[0.15em] font-semibold">PROJECT</span>
                  </div>
                  <span className="text-white/50 text-[11px] uppercase tracking-[0.15em] mt-1 ml-3.5">DESCRIPTIONS</span>
                </div>
              </div>

              <p className="text-white/55 text-[11px] uppercase tracking-[0.05em] leading-[1.8]">
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

            <div className="w-full h-px bg-white/10 my-10" />

            <div className="flex flex-col gap-8">
              <div className="flex flex-row items-baseline">
                <span className="w-[140px] text-white/45 text-[11px] uppercase tracking-[0.15em]">GENRE</span>
                <span className="text-white/75 text-[11px] uppercase tracking-[0.12em]">HIP-HOP/RAP</span>
              </div>
              <div className="flex flex-row items-baseline">
                <span className="w-[140px] text-white/45 text-[11px] uppercase tracking-[0.15em]">CONTENT</span>
                <span className="text-white/75 text-[11px] uppercase tracking-[0.12em]">EXPLICIT</span>
              </div>
              <div className="flex flex-row items-baseline">
                <span className="w-[140px] text-white/45 text-[11px] uppercase tracking-[0.15em]">FEATURES</span>
                <span className="text-white/75 text-[11px] uppercase tracking-[0.12em]">KEN CARSON</span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER DE SECTION */}
        <div className="flex flex-col">
          <div className="w-full h-px bg-white/10" />
          <div className="flex flex-row justify-between items-end pt-8">
            <div className="flex flex-col gap-1">
              <span className="text-white/70 text-[11px] uppercase tracking-[0.15em] leading-tight">
                DESTROY<br />LONELY
              </span>
              <span className="text-white/40 text-[10px] uppercase tracking-[0.15em]">
                IF LOOKS COULD KILL
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-white/70 text-[12px] font-semibold">26</span>
              <span className="text-white/35 text-[9px] uppercase tracking-[0.2em] mt-0.5">TRACKS</span>
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'black' }}
                whileTap={{ scale: 0.95 }}
                className="border-[1.5px] border-white/85 rounded-full px-[24px] py-[8px] text-[10px] uppercase tracking-[0.12em] text-white bg-transparent transition-colors duration-200"
              >
                STREAM NOW →
              </motion.button>
            </div>

            <div className="text-white/30 text-[9px] uppercase tracking-[0.1em] text-right">
              ® 2023 OPIUM<br />INTERSCOPE
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <span className="text-white/20 text-[24px] font-light">+</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AlbumInfoSection;
