import React, { useState, useEffect } from 'react';
import { CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Spotlight } from './components/Spotlight';
import { Values } from './components/Values';
import { Gallery } from './components/Gallery';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { DishDetailModal } from './components/DishDetailModal';
import { MenuItem } from './data/restaurant';

export default function App() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1C1917] flex flex-col font-sans selection:bg-[#631526]/15 selection:text-[#631526]">
      {/* Navigation Bar with slim dismissible Ali Web Studio banner */}
      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenReservation={() => setReservationOpen(true)} />
        <About />
        <Menu onSelectDish={(dish) => setSelectedDish(dish)} />
        <Spotlight onOpenReservation={() => setReservationOpen(true)} />
        <Values />
        <Gallery />
        <Experience />
        <Contact onOpenReservation={() => setReservationOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Reservation Pill on Scroll */}
      <AnimatePresence>
        {showFloatingButton && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-40 hidden sm:block"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => setReservationOpen(true)}
              className="flex items-center gap-2 px-5 py-3 bg-[#631526] text-white text-xs font-semibold uppercase tracking-widest rounded-full shadow-xl hover:bg-[#4E0E1C] transition-colors border border-white/20 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-[#C5A880]" />
              <span>Reserve Table</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reservation Interactive Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {/* Dish Detail Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onOpenReservation={() => setReservationOpen(true)}
      />
    </div>
  );
}
