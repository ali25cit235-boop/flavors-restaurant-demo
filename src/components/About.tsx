import React, { useState } from 'react';
import { Sparkles, Utensils, HeartHandshake, Wine } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';

export const About: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const ambianceImg = "/src/assets/images/about_restaurant_ambiance_1791163128353.jpg";

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF6F0] border-y border-[#EBE1D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dining Room Photography with Scroll Reveal */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative">
              {/* Architectural Frame Offset with subtle drift */}
              <motion.div 
                whileHover={{ x: -2, y: -2 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full border border-[#631526]/20 rounded-xl pointer-events-none" 
                aria-hidden="true"
              />

              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#E8DFD5] shadow-xl group">
                {!imgLoaded && !imgError && (
                  <div className="absolute inset-0 bg-[#E8DFD5] animate-pulse flex items-center justify-center">
                    <span className="text-xs uppercase tracking-wider text-[#9C9184]">Dining room view</span>
                  </div>
                )}
                {imgError ? (
                  <div className="absolute inset-0 bg-[#382D2A] p-8 flex flex-col justify-center text-white">
                    <h3 className="font-serif text-xl font-bold mb-2">The Dining Room</h3>
                    <p className="text-xs text-[#E6DBD1]">Warm amber lighting, thoughtful acoustics, and unhurried hospitality designed for meaningful connection.</p>
                  </div>
                ) : (
                  <img
                    src={ambianceImg}
                    alt="Intimate dining atmosphere at FLAVORS with warm pendant lighting and elegant wooden tables"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgError(true)}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      imgLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}

                {/* Subtle overlay card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute bottom-4 left-4 right-4 bg-[#FDFBF7]/95 backdrop-blur-xs p-4 rounded-sm border border-[#E8DFD8] shadow-md flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#631526] font-semibold block">
                      The FLAVORS Atmosphere
                    </span>
                    <span className="text-sm font-serif text-[#1C1917]">
                      Designed for Comfort & Conversation
                    </span>
                  </div>
                  <Wine className="w-5 h-5 text-[#C5A880]" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Philosophy with Staggered Scroll Reveal */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-6 order-1 lg:order-2 space-y-6"
          >
            
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#631526]">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C1917] tracking-tight leading-tight [text-wrap:balance]">
                A Gathering Place for Honest Taste & Warm Hospitality
              </h2>
            </div>

            <p className="text-base text-[#57534E] leading-relaxed font-sans">
              At {RESTAURANT_DATA.name}, we believe dining is at its best when it is unpretentious, deeply flavorful, and shared with good company. Great meals have a quiet way of turning ordinary evenings into cherished memories.
            </p>

            <p className="text-base text-[#57534E] leading-relaxed font-sans">
              Every dish on our menu reflects a commitment to quality ingredients, balanced seasoning, and disciplined technique. Whether you arrive for a quick handheld bite, an artisanal stone-baked pizza with friends, or a slow multi-course dinner over wine, our kitchen is dedicated to ensuring you taste the difference in every single forkful.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E5DCD2]">
              <motion.div 
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3 p-2 rounded-xs"
              >
                <div className="p-2 rounded-xs bg-[#631526]/8 text-[#631526] shrink-0 mt-0.5">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-sm text-[#1C1917]">Thoughtful Craft</h4>
                  <p className="text-xs text-[#78716C] mt-0.5">Simmered sauces, balanced rubs, and ingredients chosen with care.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3 p-2 rounded-xs"
              >
                <div className="p-2 rounded-xs bg-[#631526]/8 text-[#631526] shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-sm text-[#1C1917]">Genuine Welcome</h4>
                  <p className="text-xs text-[#78716C] mt-0.5">Unhurried service that prioritizes your comfort from arrival to dessert.</p>
                </div>
              </motion.div>
            </div>

            {/* Quiet concept note */}
            <p className="text-xs text-[#8C7E74] italic">
              * Concept presentation demo: specific restaurant background and history will be customized to the establishment upon final onboarding.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
