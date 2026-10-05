import React, { useEffect } from 'react';
import { X, Sparkles, CalendarCheck, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuItem } from '../data/restaurant';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose, onOpenReservation }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && dish) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dish, onClose]);

  useEffect(() => {
    if (dish) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [dish]);

  return (
    <AnimatePresence>
      {dish && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dish-detail-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/65 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-[#FDFBF7] rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E8DFD8] relative my-8 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Dish Image */}
            <div className="relative aspect-[16/9] w-full bg-[#EFE9DF] overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
              
              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#E6D5C3] font-semibold block">
                    {dish.category} {dish.highlight ? `· ${dish.highlight}` : ''}
                  </span>
                  <h3 id="dish-detail-title" className="font-serif text-2xl sm:text-3xl font-bold mt-0.5">
                    {dish.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xl sm:text-2xl font-serif font-bold text-white tabular-nums">
                    {dish.price}
                  </span>
                  {dish.isDemoPrice && (
                    <span className="block text-[10px] text-[#E6D5C3] italic">
                      demo price
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Dish Description & Ingredients */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#631526] mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Culinary Profile</span>
                </h4>
                <p className="text-sm text-[#44403C] leading-relaxed">
                  {dish.description}
                </p>
              </div>

              {/* Key Ingredients */}
              {dish.ingredients && dish.ingredients.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-2 flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-[#631526]" />
                    <span>Featured Ingredients & Preparation</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#57534E]">
                    {dish.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Dietary Considerations */}
              {dish.dietary && dish.dietary.length > 0 && (
                <div className="pt-3 border-t border-[#E8DFD5] flex items-center gap-2 text-xs text-[#78716C]">
                  <span className="font-semibold text-[#1C1917]">Dietary & Craft:</span>
                  <span>{dish.dietary.join(' · ')}</span>
                </div>
              )}

              {/* Notice & CTA */}
              <div className="pt-4 border-t border-[#E8DFD5] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-[#8C7E74] italic">
                  * Sample recipe profile for client presentation.
                </span>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-[#57534E] hover:bg-[#EAE0D5] rounded-xs transition-colors cursor-pointer"
                  >
                    Back to Menu
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenReservation();
                    }}
                    className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#631526] hover:bg-[#4E0E1C] rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Reserve Table</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
