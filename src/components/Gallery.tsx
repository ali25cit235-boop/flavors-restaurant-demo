import React, { useState, useEffect } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';

export const Gallery: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const galleryItems = RESTAURANT_DATA.gallery;

  // Keyboard navigation & escape listener for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedItemIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedItemIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
      } else if (e.key === 'ArrowLeft') {
        setSelectedItemIndex((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, galleryItems.length]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedItemIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItemIndex]);

  const activeItem = selectedItemIndex !== null ? galleryItems[selectedItemIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#631526]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Visual Glimpse</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C1917] tracking-tight [text-wrap:balance]">
            From Kitchen to Table
          </h2>

          <p className="text-base text-[#57534E] font-sans [text-wrap:pretty]">
            A visual journey celebrating the colors, textures, and craft that define the Flavourz dining experience.
          </p>
        </motion.div>

        {/* Editorial Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item, idx) => {
            const isTall = idx === 0 || idx === 3;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                onClick={() => setSelectedItemIndex(idx)}
                className={`group relative rounded-lg overflow-hidden bg-[#EFE8DF] cursor-pointer shadow-xs hover:shadow-xl transition-shadow duration-300 ${
                  isTall ? 'sm:row-span-2 aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Hover Scrim Overlay with smooth slide-up info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C5A880]">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#EAE0D6] mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                  
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-[#C5A880]">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand view</span>
                  </div>
                </div>

                {/* Subtle static category tag for touch / mobile visibility */}
                <div className="sm:hidden absolute top-2 left-2 bg-[#1C1917]/70 text-white text-[10px] px-2 py-0.5 rounded-xs backdrop-blur-xs">
                  {item.title}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activeItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedItemIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItemIndex(null);
              }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Prev button */}
            <motion.button
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItemIndex((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Next button */}
            <motion.button
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItemIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Lightbox Content Container with Spring Physics */}
            <motion.div 
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="max-w-4xl w-full bg-[#1C1917] rounded-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto object-contain mx-auto"
                />
              </div>

              <div className="p-4 sm:p-6 bg-[#292524] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#44403C]">
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C5A880]">
                    {activeItem.category} · Photo {selectedItemIndex! + 1} of {galleryItems.length}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#FDFBF7] mt-0.5">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs text-[#D6C7BA] mt-1">
                    {activeItem.caption}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => setSelectedItemIndex(null)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#631526] hover:bg-[#7D1B30] rounded-xs transition-colors shrink-0 cursor-pointer"
                >
                  Close Preview
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
