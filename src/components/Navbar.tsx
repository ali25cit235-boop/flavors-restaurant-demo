import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Spotlight', href: '#spotlight' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Find Us', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
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

  return (
    <>
      {/* Top Bar Navigation */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD8]'
            : 'bg-[#FDFBF7]/85 backdrop-blur-xs border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-2xl sm:text-3xl font-serif font-bold tracking-wider text-[#1C1917] hover:text-[#631526] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#631526]"
            >
              {RESTAURANT_DATA.name}
            </a>

            {/* Zone 2: 4-6 clean text navigation links with smooth hover underline */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#44403C]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredNav(link.href)}
                  onMouseLeave={() => setHoveredNav(null)}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative py-1 transition-colors hover:text-[#631526]"
                >
                  <span>{link.label}</span>
                  {hoveredNav === link.href && (
                    <motion.div
                      layoutId="navHoverUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#631526]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="#menu"
                onClick={(e) => handleNavClick(e, '#menu')}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#631526] hover:bg-[#631526]/5 rounded-sm transition-colors whitespace-nowrap"
              >
                View Menu
              </a>
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#631526] hover:bg-[#4E0E1C] rounded-sm transition-all shadow-xs whitespace-nowrap cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#631526]"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Reserve Table</span>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                type="button"
                onClick={onOpenReservation}
                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#631526] rounded-sm"
              >
                Reserve
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                className="p-2 text-[#1C1917] hover:text-[#631526] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#631526]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex flex-col">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="relative ml-auto w-full max-w-xs h-full bg-[#FDFBF7] shadow-2xl flex flex-col p-6 z-10 border-l border-[#E8DFD8]"
            >
              <div className="flex items-center justify-between pb-6 border-b border-[#E8DFD8]">
                <span className="text-2xl font-serif font-bold text-[#631526]">
                  {RESTAURANT_DATA.name}
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#44403C] hover:text-[#631526]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col py-6 space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-lg font-serif text-[#1C1917] hover:text-[#631526] transition-colors py-1"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-[#E8DFD8] flex flex-col space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#631526] hover:bg-[#4E0E1C] rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Reserve a Table</span>
                </button>
                <p className="text-xs text-center text-[#78716C]">
                  {RESTAURANT_DATA.contact.address}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
