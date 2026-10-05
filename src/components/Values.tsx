import React from 'react';
import { ChefHat, Flame, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';

export const Values: React.FC = () => {
  const icons = [ChefHat, Flame, Users, Sparkles];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: idx * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF6F0] border-b border-[#EBE1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#631526]">
            The Dining Standard
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C1917] tracking-tight [text-wrap:balance]">
            Crafted for Memorable Evenings & Genuine Fellowship
          </h2>
          <p className="mt-3 text-base text-[#57534E] font-sans [text-wrap:pretty]">
            We shape our kitchen and dining room around four simple commitments that make every visit feel like time well spent.
          </p>
        </motion.div>

        {/* Values Presentation: Refined Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESTAURANT_DATA.values.map((val, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div 
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="relative p-6 sm:p-7 bg-[#FDFBF7] rounded-md border border-[#E7DCD2] hover:border-[#631526]/40 transition-shadow duration-300 hover:shadow-lg flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Clean unboxed indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 rounded-sm bg-[#631526]/8 text-[#631526] flex items-center justify-center transition-colors group-hover:bg-[#631526] group-hover:text-white"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A89F91]">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-wider text-[#631526] font-semibold block mb-1">
                    {val.badge}
                  </span>

                  <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2 leading-snug">
                    {val.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0E6DC] text-[11px] text-[#8C7E74] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  <span>FLAVORS Hospitality Core</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
