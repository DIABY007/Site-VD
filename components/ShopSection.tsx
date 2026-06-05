'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: string;
  shipsOn: string;
  tags: string[];
  image: string;
  description?: string;
  note?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "KILLA MASK",
    price: "$115.00",
    shipsOn: "4 DAYS",
    tags: ["ITEMS,", "OFFICIAL", "STICKER,", "BOX"],
    image: "/Image/Merch.jpg",
  }
];

/**
 * ShopSection Component
 * Restored to previous proportional layout with refined centering for the image.
 */
const ShopSection: React.FC = () => {
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
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="text-[#FF2200] text-[8px] leading-none">●</span>
            <h2 className="text-[52px] font-[800] tracking-[-0.02em] uppercase leading-none">
              SHOP
            </h2>
          </div>
          
          <a 
            href="#" 
            className="text-white/55 text-[10px] uppercase tracking-[0.15em] underline underline-offset-[3px] hover:text-white transition-colors duration-200"
          >
            SEE ALL ITEMS
          </a>
        </div>

        {/* Séparateur post-header */}
        <div className="w-full h-px bg-white/15 mt-5" />

        {/* LISTE PRODUITS */}
        <div className="flex flex-col">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`grid grid-cols-[28%_12%_30%_30%] gap-0 py-12 ${
                index !== products.length - 1 ? 'border-b border-white/10' : ''
              } items-stretch`}
            >
              {/* COLONNE 1 — NOM + PRIX + SHIPS */}
              <div className="flex flex-col h-full uppercase">
                <h3 className="text-[14px] font-[600] tracking-[0.08em] mb-[10px] text-white">
                  {product.name}
                </h3>
                <span className="text-[14px] font-[700] tracking-[0.05em] mb-auto text-white">
                  {product.price}
                </span>
                
                <div className="mt-auto">
                  <p className="text-white/35 text-[9px] uppercase tracking-[0.15em] leading-none">
                    SHIPS ON
                  </p>
                  <p className="text-white/55 text-[9px] uppercase tracking-[0.12em] mt-1 whitespace-pre-line">
                    {product.shipsOn}
                  </p>
                </div>
              </div>

              {/* COLONNE 2 — TAGS + BUY NOW */}
              <div className="flex flex-col items-end h-full">
                <div className="text-right mb-auto uppercase">
                  {product.tags.map((tag, i) => (
                    <p key={i} className="text-white/40 text-[9px] uppercase tracking-[0.1em] leading-[1.9]">
                      {tag}
                    </p>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'black' }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/75 rounded-full px-[18px] py-[8px] text-[9px] uppercase tracking-[0.12em] text-white bg-transparent whitespace-nowrap transition-colors duration-200"
                >
                  BUY NOW →
                </motion.button>
              </div>

              {/* COLONNE 3 — IMAGE PRODUIT (Centrée dans sa colonne) */}
              <div className="px-8 flex justify-center items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-[240px] bg-[#0A0A0A] relative overflow-hidden flex items-center justify-center border border-white/10 rounded-[2px]"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={240}
                    height={240}
                    className="object-contain w-full h-full p-4"
                  />
                </motion.div>
              </div>

              {/* COLONNE 4 — ESPACE NÉGATIF / DESCRIPTION */}
              <div className="pl-6 flex flex-col justify-start uppercase">
                {product.description ? (
                  <>
                    <p className="text-white/50 text-[11px] tracking-[0.05em] leading-[1.8] max-w-[280px]">
                      {product.description}
                    </p>
                    {product.note && (
                      <p className="text-white/35 text-[9px] tracking-[0.1em] mt-2 whitespace-pre-line">
                        {product.note}
                      </p>
                    )}
                  </>
                ) : (
                    <p className="text-white/30 text-[10px] tracking-[0.2em] leading-relaxed">
                        LIMITED EDITION<br />
                        COLLECTORS ITEM<br />
                        \\\ 2023
                    </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

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

export default ShopSection;
