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

const ShopSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#000000] text-[#FFFFFF] font-sans px-8 py-12 flex flex-col">
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
            className={`grid grid-cols-[28%_12%_30%_30%] gap-0 py-8 ${
              index !== products.length - 1 ? 'border-b border-white/10' : ''
            } items-stretch`}
          >
            {/* COLONNE 1 — NOM + PRIX + SHIPS */}
            <div className="flex flex-col h-full">
              <h3 className="text-[13px] font-[500] tracking-[0.08em] uppercase mb-[10px]">
                {product.name}
              </h3>
              <span className="text-[13px] font-[600] tracking-[0.05em] uppercase mb-auto">
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
              <div className="text-right mb-auto">
                {product.tags.map((tag, i) => (
                  <p key={i} className="text-white/40 text-[9px] uppercase tracking-[0.1em] leading-[1.9]">
                    {tag}
                  </p>
                ))}
              </div>
              
              <motion.button
                whileHover={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                transition={{ duration: 0.2 }}
                className="border border-white/75 rounded-full px-[14px] py-[6px] text-[9px] uppercase tracking-[0.12em] text-white bg-transparent align-self-end whitespace-nowrap"
              >
                BUY NOW →
              </motion.button>
            </div>

            {/* COLONNE 3 — IMAGE PRODUIT */}
            <div className="px-4">
              <div className="w-full h-[220px] bg-[#0A0A0A] relative overflow-hidden flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={220}
                  height={220}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            {/* COLONNE 4 — ESPACE NÉGATIF / DESCRIPTION */}
            <div className="pl-4 flex flex-col justify-start">
              {product.description && (
                <>
                  <p className="text-white/50 text-[10px] uppercase tracking-[0.05em] leading-[1.8] max-w-[280px]">
                    {product.description}
                  </p>
                  {product.note && (
                    <p className="text-white/35 text-[8px] uppercase tracking-[0.1em] mt-2 whitespace-pre-line">
                      {product.note}
                    </p>
                  )}
                </>
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

export default ShopSection;
