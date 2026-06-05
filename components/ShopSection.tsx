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
 * Reproduces the merchandise shop section.
 * Optimized for natural flow with scroll animations.
 * Product image enlarged and centered.
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
              className={`grid grid-cols-[20%_15%_45%_20%] gap-0 py-12 ${
                index !== products.length - 1 ? 'border-b border-white/10' : ''
              } items-center`}
            >
              {/* COLONNE 1 — NOM + PRIX + SHIPS */}
              <div className="flex flex-col h-full uppercase justify-between">
                <div>
                  <h3 className="text-[16px] font-[600] tracking-[0.08em] mb-[10px] text-white">
                    {product.name}
                  </h3>
                  <span className="text-[16px] font-[700] tracking-[0.05em] text-white">
                    {product.price}
                  </span>
                </div>
                
                <div className="mt-8">
                  <p className="text-white/35 text-[9px] uppercase tracking-[0.15em] leading-none">
                    SHIPS ON
                  </p>
                  <p className="text-white/55 text-[9px] uppercase tracking-[0.12em] mt-1 whitespace-pre-line">
                    {product.shipsOn}
                  </p>
                </div>
              </div>

              {/* COLONNE 2 — TAGS + BUY NOW */}
              <div className="flex flex-col items-start h-full justify-between px-4">
                <div className="text-left uppercase">
                  {product.tags.map((tag, i) => (
                    <p key={i} className="text-white/40 text-[10px] uppercase tracking-[0.1em] leading-[1.9]">
                      {tag}
                    </p>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'black' }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/75 rounded-full px-[24px] py-[10px] text-[10px] uppercase tracking-[0.12em] text-white bg-transparent whitespace-nowrap transition-colors duration-200 mt-8"
                >
                  BUY NOW →
                </motion.button>
              </div>

              {/* COLONNE 3 — IMAGE PRODUIT (Centrée et agrandie) */}
              <div className="px-12 flex justify-center items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-full max-w-[480px] aspect-square bg-[#0A0A0A] relative overflow-hidden flex items-center justify-center border border-white/10 rounded-[4px]"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={480}
                    height={480}
                    className="object-contain w-full h-full p-8"
                  />
                </motion.div>
              </div>

              {/* COLONNE 4 — DESCRIPTION */}
              <div className="pl-8 flex flex-col justify-center uppercase">
                {product.description && (
                  <>
                    <p className="text-white/50 text-[11px] tracking-[0.05em] leading-[1.8]">
                      {product.description}
                    </p>
                    {product.note && (
                      <p className="text-white/35 text-[9px] tracking-[0.1em] mt-2 whitespace-pre-line">
                        {product.note}
                      </p>
                    )}
                  </>
                )}
                {!product.description && (
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
    </section>
  );
};

export default ShopSection;
