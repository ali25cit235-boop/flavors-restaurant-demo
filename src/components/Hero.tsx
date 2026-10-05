import React, { useState } from 'react';
import { ArrowRight, MapPin, Sparkles, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const heroImageSrc = "/images/hero_gourmet_spread.jpg";

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FDFBF7]">
      {/* Subtle warm animated ambient glow */}
      <motion.div 
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[520px] bg-gradient-to-b from-[#EFE3D5]/50 via-[#FDFBF7]/0 to-transparent blur-3xl -z-10 pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & CTAs */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            
            {/* Quiet unboxed kicker text with subtle bounce/fade */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#631526]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880] animate-pulse" />
              <span>FLAVORS · Taste the Difference</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1C1917] tracking-tight leading-[1.12] [text-wrap:balance]">
              Good Food. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#631526]">Beautiful Moments.</span>
            </motion.h1>

            {/* Inviting Prose */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans [text-wrap:pretty]">
              {RESTAURANT_DATA.description}
            </motion.p>

            {/* Primary & Secondary Actions */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => handleScrollTo('menu')}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#631526] hover:bg-[#4E0E1C] transition-all rounded-xs shadow-md shadow-[#631526]/15 flex items-center justify-center gap-2 group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#631526]"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#1C1917] hover:text-[#631526] hover:bg-[#F3ECE5] border border-[#E7DCD2] transition-all rounded-xs flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#631526]"
              >
                <MapPin className="w-3.5 h-3.5 text-[#631526]" />
                <span>Find Us</span>
              </motion.button>
            </motion.div>

            {/* Unboxed Metadata & Notice */}
            <motion.div variants={itemVariants} className="pt-4 border-t border-[#EAE0D6] flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs text-[#78716C]">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Dinner & Lunch Service</span>
              </span>
              <span aria-hidden="true" className="text-[#D6C7BA]">·</span>
              <span>Artisanal Kitchen</span>
              <span aria-hidden="true" className="text-[#D6C7BA]">·</span>
              <span className="text-[#8C7E74] italic">Concept Showcase</span>
            </motion.div>

          </motion.div>

          {/* Right Column: Hero Food Photography with Reveal and Floating Drift */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative Warm Border Frame with float */}
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-3 sm:-inset-4 border border-[#C5A880]/30 rounded-2xl -z-10 translate-x-2 translate-y-2"
                aria-hidden="true" 
              />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-xl bg-[#EFE9DF] shadow-2xl aspect-[16/10] sm:aspect-[16/11]">
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 bg-[#EFE9DF] animate-pulse flex items-center justify-center">
                    <span className="text-xs uppercase tracking-widest text-[#A89F91]">Loading culinary preview...</span>
                  </div>
                )}
                
                {imageError ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4A0E1C] to-[#1C1917] flex flex-col items-center justify-center p-8 text-center text-white">
                    <span className="font-serif text-2xl font-bold mb-2">FLAVORS</span>
                    <p className="text-xs text-[#EAE0D6] max-w-xs">A celebratory spread of prime cuts, artisanal burgers, and fresh harvest sides.</p>
                  </div>
                ) : (
                  <img
                    src={heroImageSrc}
                    alt="Lavish gourmet dinner spread at FLAVORS featuring prime ribeye steak, handcrafted burger, roasted vegetables, and fine wine"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}

                {/* Subtle bottom vignette for depth */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                {/* Overlaid caption detail with floating entrance */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white text-xs"
                >
                  <div>
                    <span className="text-[#E6D5C3] font-medium tracking-wide block uppercase text-[10px]">
                      The Signature Experience
                    </span>
                    <span className="font-serif text-sm sm:text-base font-semibold">
                      Prime Seared Ribeye & Brioche Handhelds
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={onOpenReservation}
                    className="px-3 py-1.5 bg-white/90 hover:bg-white text-[#1C1917] font-semibold text-[11px] rounded-xs backdrop-blur-xs transition-colors shrink-0 cursor-pointer shadow-sm"
                  >
                    Book Table
                  </motion.button>
                </motion.div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

