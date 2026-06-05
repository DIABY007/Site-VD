import React from 'react';
import Image from 'next/image';

/**
 * HeroSection Component
 * Reproduces the Destroy Lonely "IF LOOKS COULD KILL" hero section.
 * Adheres strictly to design.json and visual specifications.
 */
const HeroSection: React.FC = () => {
  // Design Tokens (based on design.json)
  const colors = {
    pageFrame: '#1A1A1A',
    cardBackground: '#000000',
    textPrimary: '#FFFFFF',
    textSecondary: 'rgba(255,255,255,0.55)',
    textMetadata: 'rgba(255,255,255,0.45)',
    accentRed: '#FF2200',
    borderTag: 'rgba(255,255,255,0.60)',
    borderCTA: 'rgba(255,255,255,0.85)',
  };

  const fonts = {
    primary: "'Helvetica Neue', sans-serif",
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen p-4 sm:p-8"
      style={{ backgroundColor: colors.pageFrame, fontFamily: fonts.primary }}
    >
      {/* Card Container */}
      <div 
        className="relative w-full max-w-[1440px] aspect-[16/10] bg-black rounded-[16px] overflow-hidden shadow-2xl"
        style={{ backgroundColor: colors.cardBackground }}
      >
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 w-full h-[56px] flex justify-between items-center px-[32px] z-20">
          {/* Left: ABOUT • MUSIC */}
          <div className="flex items-center gap-[16px] text-[11px] font-normal tracking-[0.12em] text-white uppercase">
            <span>ABOUT</span>
            <span style={{ color: colors.accentRed }}>•</span>
            <span>MUSIC</span>
          </div>

          {/* Center: DESTROY / LONELY */}
          <div className="text-center leading-tight">
            <h1 className="text-[13px] font-normal tracking-[0.25em] text-white uppercase flex flex-col items-center">
              <span>DESTROY</span>
              <span>LONELY</span>
            </h1>
          </div>

          {/* Right: SHOP • TOUR */}
          <div className="flex items-center gap-[16px] text-[11px] font-normal tracking-[0.12em] text-white uppercase">
            <span>SHOP</span>
            <span style={{ color: colors.accentRed }}>•</span>
            <span>TOUR</span>
          </div>
        </nav>

        {/* Hero Logo (Metallic Logo) */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94%] pointer-events-none">
          <img 
            src="/Image/logo-metal.png" 
            alt="Destroy Lonely Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-[28px] left-[32px] right-[32px] flex justify-between items-end z-20">
          
          {/* Bottom Left: Cluster + Date */}
          <div className="flex flex-col items-start gap-[24px]">
            {/* Cluster (Tag + CTA) */}
            <div className="flex flex-col items-start gap-[8px]">
              {/* Tag Pill */}
              <div 
                className="flex items-center gap-[4px] px-[12px] py-[5px] rounded-full border text-[10px] font-normal tracking-[0.08em] text-white uppercase"
                style={{ borderColor: colors.borderTag }}
              >
                <span style={{ color: colors.accentRed }}>•</span>
                IFLOOKSCOULDKILL
              </div>

              {/* CTA Pill */}
              <button 
                className="group flex items-center gap-[4px] px-[14px] py-[6px] rounded-full border text-[11px] font-normal tracking-[0.1em] text-white uppercase transition-all duration-200 ease-in-out hover:bg-white hover:text-black"
                style={{ borderColor: colors.borderCTA }}
              >
                STREAM NOW →
              </button>
            </div>

            {/* Date Metadata */}
            <div 
              className="text-[10px] font-normal tracking-[0.15em] uppercase"
              style={{ color: colors.textMetadata }}
            >
              03 - 05 &nbsp;\\&nbsp; 23
            </div>
          </div>

          {/* Bottom Right: Descriptor + Year */}
          <div className="flex flex-col items-center gap-[24px] max-w-[220px]">
            {/* Descriptor Text */}
            <p 
              className="text-[10.5px] font-normal tracking-[0.06em] leading-[1.7] uppercase text-center"
              style={{ color: colors.textSecondary }}
            >
              IF LOOKS COULD KILL IS COMPILED OF<br />
              SONGS FLOATING OVER HAZY ELECTRIC<br />
              GUITAR LINES WITH BLENDS OF<br />
              SURREALISTIC MELODIES
            </p>

            {/* Year Metadata */}
            <div className="w-full flex justify-end">
              <span 
                className="text-[10px] font-normal tracking-[0.15em] uppercase"
                style={{ color: colors.textMetadata }}
              >
                2023
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
