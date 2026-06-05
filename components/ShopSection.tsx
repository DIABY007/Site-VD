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
    name: "T-SHIRT DFG",
    price: "5000 FCFA",
    shipsOn: "4 JOURS",
    tags: ["ARTICLES,", "OFFICIEL", "STICKER,", "BOX"],
    image: "/Image/Merch.jpg",
  }
];

/**
 * ShopSection Component
 * Reproduced and personalized for VD Shop.
 * Linked to WhatsApp for direct purchase.
 */
const ShopSection: React.FC = () => {
  const whatsappNumber = "22674855416"; // Assuming Burkina Faso code +226 based on Bobo-Dioulasso context
  const getWhatsAppLink = (productName: string) => {
    const message = encodeURIComponent(`Bonjour, je souhaite commander l'article : ${productName}`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section id="shop" className="relative w-full bg-[#000000] text-[#FFFFFF] font-sans px-8 py-20 flex flex-col items-center overflow-hidden">
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
            VOIR TOUS LES ARTICLES
          </a>
        </div>

        {/* Séparateur post-header */}
        <div className="w-full h-px bg-white/15 mt-5" />

        {/* LISTE PRODUITS */}
        <div className="flex flex-col">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`flex flex-col lg:grid lg:grid-cols-[30%_15%_40%_15%] gap-8 lg:gap-0 py-10 md:py-12 ${
                index !== products.length - 1 ? 'border-b border-white/10' : ''
              } items-stretch`}
            >
              {/* COLONNE 1 — NOM + PRIX + EXPÉDITION */}
              <div className="flex flex-col h-full uppercase text-center lg:text-left">
                <h3 className="text-[13px] md:text-[14px] font-[600] tracking-[0.08em] mb-[8px] md:mb-[10px] text-white">
                  {product.name}
                </h3>
                <span className="text-[13px] md:text-[14px] font-[700] tracking-[0.05em] mb-4 md:mb-auto text-white">
                  {product.price}
                </span>
                
                <div className="mt-auto hidden lg:block">
                  <p className="text-white/35 text-[9px] uppercase tracking-[0.15em] leading-none">
                    LIVRAISON EN
                  </p>
                  <p className="text-white/55 text-[9px] uppercase tracking-[0.12em] mt-1 whitespace-pre-line">
                    {product.shipsOn}
                  </p>
                </div>
              </div>

              {/* COLONNE 3 (MOBILE ORDER) — IMAGE PRODUIT */}
              <div className="lg:pl-16 lg:pr-8 flex justify-center items-center order-first lg:order-none">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-[200px] md:h-[240px] max-w-[200px] md:max-w-[240px] bg-[#0A0A0A] relative overflow-hidden flex items-center justify-center border border-white/10 rounded-[2px]"
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

              {/* COLONNE 4 (MOBILE ORDER) — DESCRIPTION / ÉDITION LIMITÉE */}
              <div className="lg:pl-4 flex flex-col justify-center lg:justify-start uppercase text-center lg:text-right">
                {product.description ? (
                  <>
                    <p className="text-white/50 text-[10px] md:text-[11px] tracking-[0.05em] leading-[1.8] max-w-[280px] mx-auto lg:ml-auto">
                      {product.description}
                    </p>
                    {product.note && (
                      <p className="text-white/35 text-[9px] tracking-[0.1em] mt-2 whitespace-pre-line">
                        {product.note}
                      </p>
                    )}
                  </>
                ) : (
                    <p className="text-white/30 text-[9px] md:text-[10px] tracking-[0.2em] leading-relaxed">
                        ÉDITION LIMITÉE<br />
                        ARTICLE COLLECTOR<br />
                        \\\ 2025
                    </p>
                )}
              </div>

              {/* COLONNE 2 — TAGS + ACHETER */}
              <div className="flex flex-col items-center lg:items-end h-full gap-6 lg:gap-0">
                <div className="text-center lg:text-right mb-auto uppercase hidden lg:block">
                  {product.tags.map((tag, i) => (
                    <p key={i} className="text-white/40 text-[9px] uppercase tracking-[0.1em] leading-[1.9]">
                      {tag}
                    </p>
                  ))}
                </div>
                
                <a 
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-auto"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'black' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full lg:w-auto border border-white/75 rounded-full px-8 lg:px-[18px] py-3 lg:py-[8px] text-[10px] lg:text-[9px] uppercase tracking-[0.12em] text-white bg-transparent whitespace-nowrap transition-colors duration-200 min-h-[44px]"
                  >
                    ACHETER →
                  </motion.button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ShopSection;
