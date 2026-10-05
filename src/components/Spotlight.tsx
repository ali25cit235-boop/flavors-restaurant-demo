import React, { useState } from 'react';
import { Flame, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';

interface SpotlightProps {
  onOpenReservation: () => void;
}

export const Spotlight: React.FC<SpotlightProps> = ({ onOpenReservation }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const spotlightImg = "/images/spotlight_signature_dish.jpg";

  const tastingNotes = [
    { title: "Hardwood Sear", note: "Charred over natural fruitwood lump charcoal for caramelized crust" },
    { title: "Cultured Herb Butter", note: "Hand-whipped with rosemary, thyme, confit garlic, and cracked pepper" },
    { title: "28-Day Dry Aging", note: "Intense depth of flavor, tender texture, and clean finish" }
  ];

  return (
    <section id="spotlight" className="py-20 md:py-28 bg-[#1C1917] text-[#FDFBF7] relative overflow-hidden">
      
      {/* Subtle atmospheric ambient glow with breathing animation */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#631526] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column: Large Signature Plate Photography with Reveal */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-7 relative"
          >
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              
              {/* Subtle Gold Hairline Frame with gentle floating drift */}
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-3 sm:-inset-4 border border-[#C5A880]/25 rounded-2xl pointer-events-none -z-10 translate-x-3 translate-y-3"
                aria-hidden="true" 
              />

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#292524] shadow-2xl group">
                {!imgLoaded && !imgError && (
                  <div className="absolute inset-0 bg-[#292524] animate-pulse flex items-center justify-center">
                    <span className="text-xs uppercase tracking-widest text-[#A89F91]">Loading culinary spotlight...</span>
                  </div>
                )}
                {imgError ? (
                  <div className="absolute inset-0 bg-[#292524] p-8 flex flex-col justify-center text-center">
                    <h3 className="font-serif text-2xl font-bold mb-2">Prime Dry-Aged Ribeye</h3>
                    <p className="text-xs text-[#C5A880]">Flame-seared over glowing embers with cultured herb butter.</p>
                  </div>
                ) : (
                  <img
                    src={spotlightImg}
                    alt="Close up of flame-seared prime beef ribeye sliced with rosemary herb butter and sea salt"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgError(true)}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      imgLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}

                {/* Overlaid Badge with gentle float */}
                <motion.div 
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 left-4 bg-[#1C1917]/90 backdrop-blur-xs border border-[#C5A880]/30 px-3.5 py-1.5 rounded-xs flex items-center gap-2 shadow-sm"
                >
                  <Flame className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#EAE0D6]">
                    Chef's Hearth Cut
                  </span>
                </motion.div>

                <div className="absolute bottom-4 right-4 bg-[#631526]/90 backdrop-blur-xs px-3.5 py-1.5 rounded-xs">
                  <span className="text-xs font-serif font-bold text-white tabular-nums">
                    Demo Showcase Item
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Text Column: Dish Story & Tasting Notes with Staggered Fade-in */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 space-y-6"
          >
            
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
                Culinary Spotlight
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FDFBF7] tracking-tight leading-tight [text-wrap:balance]">
                Flame-Seared Prime Ribeye
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#D6C7BA] leading-relaxed font-sans">
              Hand-cut and trimmed in-house, seared at blistering temperatures to lock in richness, and finished with cultured compound butter infused with freshly plucked garden herbs.
            </p>

            {/* Tasting Notes Breakdown */}
            <div className="space-y-4 pt-2 border-t border-[#44403C]">
              {tastingNotes.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FDFBF7] font-serif">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#A89F91] mt-0.5 font-sans">
                      {item.note}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onOpenReservation}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white bg-[#631526] hover:bg-[#7D1B30] transition-all rounded-xs shadow-md flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C5A880]"
              >
                <span>Reserve for Dinner</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#menu"
                className="px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#D6C7BA] hover:text-white border border-[#44403C] hover:border-[#C5A880]/50 transition-all rounded-xs text-center"
              >
                Full Menu Details
              </motion.a>
            </div>

            <p className="text-[11px] text-[#78716C] italic">
              * Sample culinary feature. Cuts and seasonal preparations will vary according to final menu curation.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
