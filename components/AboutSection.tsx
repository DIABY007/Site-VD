"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * AboutSection Component
 * Reproduces the "WHO IS THE DESTROY LONELY?" section.
 */
const AboutSection: React.FC = () => {
  const colors = {
    background: '#000000',
    accentRed: '#FF2200',
    textMuted: 'rgba(255,255,255,0.25)',
    textMetadata: 'rgba(255,255,255,0.45)',
    textBio1: 'rgba(255,255,255,0.60)',
    textBio2: 'rgba(255,255,255,0.55)',
    borderSeparator: 'rgba(255,255,255,0.15)',
    tickerText: 'rgba(255,255,255,0.12)',
    plusColor: 'rgba(255,255,255,0.25)',
  };

  const fonts = {
    primary: "'Helvetica Neue', sans-serif",
  };

  return (
    <section 
      className="relative w-full bg-black overflow-hidden"
      style={{ fontFamily: fonts.primary }}
    >
      {/* Top Separator Line */}
      <div className="w-full h-[1px]" style={{ backgroundColor: colors.borderSeparator }} />

      {/* Decorative Crosses at corners */}
      <div className="absolute top-[24px] left-[24px] text-[16px] font-normal z-10" style={{ color: colors.plusColor }}>+</div>
      <div className="absolute top-[24px] right-[24px] text-[16px] font-normal z-10" style={{ color: colors.plusColor }}>+</div>
      <div className="absolute bottom-[24px] left-[24px] text-[16px] font-normal z-10" style={{ color: colors.plusColor }}>+</div>
      <div className="absolute bottom-[24px] right-[24px] text-[16px] font-normal z-10" style={{ color: colors.plusColor }}>+</div>

      <div className="max-w-[1440px] mx-auto px-[32px] py-[48px]">
        {/* Main Layout Grid */}
        <div className="grid grid-cols-[28%_24%_48%] gap-[32px] items-center mb-[64px]">
          
          {/* Column 1: Display Title + CTA */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-[8px] mb-[12px]">
               <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: colors.accentRed }}></span>
               <div className="flex flex-col leading-[0.95]">
                 <span className="text-[52px] font-[800] tracking-[-0.02em] uppercase" style={{ color: colors.textMuted }}>WHO IS</span>
                 <div className="flex items-center gap-2">
                   <span className="text-[52px] font-[800] tracking-[-0.02em] uppercase" style={{ color: colors.textMuted }}>THE</span>
                   <span className="text-[52px] font-[800] tracking-[-0.02em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>—</span>
                 </div>
                 <span className="text-[52px] font-[800] tracking-[-0.02em] uppercase ml-[40px]" style={{ color: colors.textMuted }}>DESTROY</span>
                 <span className="text-[52px] font-[800] tracking-[-0.02em] uppercase ml-[40px]" style={{ color: colors.textMuted }}>LONELY?</span>
               </div>
            </div>

            {/* Subtitle */}
            <div className="mt-[16px] flex flex-col text-[9px] font-normal tracking-[0.15em] uppercase" style={{ color: colors.textMetadata }}>
              <span>BOBBY WARDEL</span>
              <span>SANDIMANIE III</span>
            </div>

            {/* CTA */}
            <button 
              className="mt-[32px] px-[16px] py-[7px] border rounded-full text-[10px] font-normal tracking-[0.1em] uppercase text-white transition-all duration-200 hover:bg-white hover:text-black"
              style={{ borderColor: 'rgba(255,255,255,0.85)' }}
            >
              READ MORE →
            </button>
          </div>

          {/* Column 2: Artist Photo */}
          <div className="relative aspect-[3/4] bg-white overflow-hidden">
            <img 
              src="/Image/Artist.png" 
              alt="Destroy Lonely Artist"
              className="w-full h-full object-cover object-top grayscale"
            />
            {/* Metadata on photo */}
            <div className="absolute bottom-[10px] left-[12px] text-[8px] font-normal tracking-[0.1em] uppercase text-black/55">
              25 \\ 05 \\ 2023
            </div>
          </div>

          {/* Column 3: Bio Text */}
          <div className="flex flex-col items-center px-[20px]">
            <p className="text-[11px] font-normal tracking-[0.06em] leading-[1.8] uppercase text-center" style={{ color: colors.textBio1 }}>
              ATLANTA RAPPER DESTROY LONELY TYPICALLY<br />
              DELIVERS ERRATIC, SPEEDY RHYMES OVER<br />
              ATMOSPHERIC TRAP BEATS.
            </p>
            
            <div className="my-[20px] text-[14px] font-normal" style={{ color: 'rgba(255,255,255,0.3)' }}>
              \\
            </div>

            <p className="text-[11px] font-normal tracking-[0.06em] leading-[1.8] uppercase text-center" style={{ color: colors.textBio2 }}>
              HE'S RELEASED NUMEROUS MIXTAPES AND EPS<br />
              SINCE THE LATE 2010S, AND HIS 2019 SINGLE<br />
              "BANE" BECAME A VIRAL HIT TWO YEARS AFTER<br />
              IT FIRST APPEARED. AFTER SIGNING WITH<br />
              PLAYBOI CARTI'S OPIUM IMPRINT, HE ISSUED<br />
              THE MIXTAPE NO STYLIST IN 2022, FOLLOWED<br />
              BY HIS OFFICIAL FULL-LENGTH DEBUT,<br />
              IF LOOKS COULD KILL, IN 2023.
            </p>
          </div>
        </div>

        {/* Ticker Section */}
        <div className="w-full">
          {/* Ticker Metadata Bar */}
          <div className="flex justify-between items-center mb-[12px] px-[32px] text-[9px] font-normal tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
            <span>EASED</span>
            <span>ALBUM</span>
            <span>2023</span>
            <span>NEW RELEASED</span>
            <span>ALBUM</span>
            <span>2023</span>
            <span>NEW RELEASED</span>
          </div>

          {/* Scrolling Ticker */}
          <div className="relative overflow-hidden whitespace-nowrap py-2">
            {/* Decorative crosses in ticker area */}
            <div className="absolute left-[32px] top-1/2 -translate-y-1/2 text-[18px] font-normal" style={{ color: 'rgba(255,255,255,0.2)' }}>+</div>
            <div className="absolute right-[32px] top-1/2 -translate-y-1/2 text-[18px] font-normal" style={{ color: 'rgba(255,255,255,0.2)' }}>+</div>

            <motion.div 
              className="inline-block"
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              {[1, 2, 3].map((i) => (
                <span key={i} className="text-[72px] font-[900] tracking-[-0.02em] uppercase px-4" style={{ color: colors.tickerText }}>
                  STREAM IF LOOKS COULD KILL NOW <span className="mx-4 text-[12px] align-middle" style={{ color: colors.accentRed }}>•</span>
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
