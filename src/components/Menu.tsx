import React, { useState } from 'react';
import { Sparkles, Info, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RESTAURANT_DATA, MenuItem } from '../data/restaurant';

interface MenuProps {
  onSelectDish: (dish: MenuItem) => void;
}

export const Menu: React.FC<MenuProps> = ({ onSelectDish }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showAllItems, setShowAllItems] = useState(false);

  const filteredItems = RESTAURANT_DATA.menuItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const displayedItems = showAllItems ? filteredItems : filteredItems.slice(0, 8);

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#631526]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>The Culinary Collection</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C1917] tracking-tight [text-wrap:balance]">
            Crafted with Passion & Precision
          </h2>

          <p className="text-base text-[#57534E] font-sans [text-wrap:pretty]">
            Explore our curated culinary creations, highlighting fresh seasonal ingredients, wood-fired hearth specialties, and comforting classics reimagined.
          </p>

          {/* Mandatory Demo Disclaimer Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F6EFE8] border border-[#E7DCD0] rounded-xs text-xs text-[#786E65] text-left">
            <Info className="w-4 h-4 text-[#631526] shrink-0" />
            <span>
              <strong>Sample Menu Notice:</strong> Items, descriptions, and demo prices shown below are illustrative placeholders to be confirmed by the restaurant.
            </span>
          </div>
        </motion.div>

        {/* Category Filter Tabs with Sliding Active Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar"
        >
          {RESTAURANT_DATA.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setShowAllItems(false);
                }}
                className={`relative px-4 py-2.5 text-xs font-medium uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap cursor-pointer shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#631526] ${
                  isActive
                    ? 'text-white'
                    : 'text-[#57534E] hover:text-[#1C1917] bg-[#F4ECE3] hover:bg-[#EAE0D4]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#631526] rounded-xs -z-0 shadow-xs"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Animated Menu Cards Grid with Spring Physics Reordering */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, idx) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ 
                  duration: 0.45, 
                  delay: (idx % 6) * 0.05,
                  ease: [0.16, 1, 0.3, 1] as const
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onClick={() => onSelectDish(item)}
                className="group bg-[#FAF7F2] rounded-lg border border-[#EBE2D8] hover:border-[#631526]/35 overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col cursor-pointer"
              >
                {/* Dish Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE9DF]">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  
                  {item.highlight && (
                    <div className="absolute top-3 left-3 bg-[#1C1917]/85 text-[#FDFBF7] backdrop-blur-xs text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-xs shadow-xs">
                      {item.highlight}
                    </div>
                  )}

                  {/* Hover affordance with smooth fade */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-[#1C1917] text-xs font-semibold rounded-xs shadow-md"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Ingredients</span>
                    </motion.span>
                  </div>
                </div>

                {/* Dish Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Dietary metadata */}
                    <div className="flex items-center justify-between text-xs text-[#78716C] mb-1.5">
                      <span className="uppercase tracking-wider font-medium text-[11px] text-[#631526]">
                        {item.category}
                      </span>
                      {item.dietary && item.dietary.length > 0 && (
                        <span className="text-[11px] text-[#8C7E74]">
                          {item.dietary.join(' · ')}
                        </span>
                      )}
                    </div>

                    {/* Dish Name */}
                    <h3 className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#631526] transition-colors leading-snug">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs text-[#57534E] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Demo Indicator */}
                  <div className="mt-4 pt-3 border-t border-[#E8DFD5] flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif font-bold text-base text-[#1C1917] tabular-nums">
                        {item.price}
                      </span>
                      {item.isDemoPrice && (
                        <span className="text-[10px] text-[#8C7E74] italic">
                          (demo price)
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] text-[#631526] font-medium group-hover:underline">
                      Details & notes &rarr;
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Menu Expand Button with motion */}
        {filteredItems.length > 8 && (
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => setShowAllItems(!showAllItems)}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#631526] border border-[#631526]/30 hover:bg-[#631526]/5 rounded-xs transition-colors cursor-pointer"
            >
              {showAllItems ? 'Show Less Dishes' : `View Full Menu (${filteredItems.length} Dishes)`}
            </motion.button>
          </div>
        )}

      </div>
    </section>
  );
};
