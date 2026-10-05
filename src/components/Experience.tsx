import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';

export const Experience: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#F5EFEB] border-y border-[#E6DDD3] relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Floating Quote Icon with Breathing Motion */}
        <motion.div 
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#631526]/10 text-[#631526] mb-6 shadow-xs"
        >
          <Quote className="w-5 h-5 rotate-180" />
        </motion.div>

        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="block text-xs font-semibold uppercase tracking-widest text-[#631526] mb-4"
        >
          The FLAVORS Experience
        </motion.span>

        {/* Brand Dining Quote */}
        <motion.blockquote 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1C1917] leading-snug tracking-tight italic [text-wrap:balance]"
        >
          “A table filled with shared laughter, vibrant dishes passed from hand to hand, and honest flavors that linger in memory long after the evening ends.”
        </motion.blockquote>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 pt-6 border-t border-[#DFD5C9] inline-flex flex-col items-center"
        >
          <span className="font-serif font-bold text-sm tracking-wide text-[#1C1917]">
            {RESTAURANT_DATA.name} Culinary House
          </span>
          <span className="text-xs text-[#78716C] mt-0.5">
            Good Food · Beautiful Moments · Taste the Difference
          </span>
        </motion.div>

        {/* Concept note */}
        <p className="mt-6 text-[11px] text-[#8C7E74] max-w-md mx-auto italic">
          * Brand philosophy preview. Customer accolades and guest reviews will be integrated once official feedback is collected.
        </p>

      </div>
    </section>
  );
};
