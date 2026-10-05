import React, { useState } from 'react';
import { ArrowUp, Instagram, Facebook, Globe, Sparkles } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurant';

export const Footer: React.FC = () => {
  const [socialModalNotice, setSocialModalNotice] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#about' },
    { label: 'Signature Menu', href: '#menu' },
    { label: 'Spotlight Dish', href: '#spotlight' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Find Us & Hours', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1917] text-[#FAF7F2] pt-16 pb-12 border-t border-[#38332E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#38332E]">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-3xl font-bold tracking-wider text-[#FDFBF7] block">
              {RESTAURANT_DATA.name}
            </span>
            <p className="text-xs uppercase tracking-widest text-[#C5A880] font-medium">
              {RESTAURANT_DATA.tagline}
            </p>
            <p className="text-xs text-[#A89F91] leading-relaxed max-w-sm font-sans">
              {RESTAURANT_DATA.description}
            </p>

            {/* Social channels (with demo handling) */}
            <div className="flex items-center space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setSocialModalNotice('Instagram profile')}
                className="w-8 h-8 rounded-full bg-[#292524] hover:bg-[#631526] text-[#D6C7BA] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Instagram demo"
              >
                <Instagram className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setSocialModalNotice('Facebook page')}
                className="w-8 h-8 rounded-full bg-[#292524] hover:bg-[#631526] text-[#D6C7BA] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Facebook demo"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setSocialModalNotice('TripAdvisor listing')}
                className="w-8 h-8 rounded-full bg-[#292524] hover:bg-[#631526] text-[#D6C7BA] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="TripAdvisor demo"
              >
                <Globe className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm tracking-wide text-[#FDFBF7] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A89F91]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#C5A880] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Hours & Contact Placeholders */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-serif font-bold text-sm tracking-wide text-[#FDFBF7] uppercase">
              Operating Schedule & Address
            </h4>
            <div className="text-xs text-[#A89F91] space-y-2">
              <p>
                <strong className="text-[#D6C7BA]">Location:</strong> {RESTAURANT_DATA.contact.address}
              </p>
              <p>
                <strong className="text-[#D6C7BA]">Telephone:</strong> {RESTAURANT_DATA.contact.phone}
              </p>
              <p>
                <strong className="text-[#D6C7BA]">Dining Hours:</strong> {RESTAURANT_DATA.contact.openingHours.weekdays}
              </p>
              <p className="text-[11px] text-[#78716C] italic pt-1">
                * Official address and reservations line will be updated upon client deployment.
              </p>
            </div>
          </div>

        </div>

        {/* Sample Design Notice by Ali Web Studio */}
        <div className="py-4 border-b border-[#38332E] text-center">
          <p className="text-xs text-[#C5A880] font-medium tracking-wide">
            Sample design concept by Ali Web Studio. Menu items, prices, hours, photos and contact details are placeholders only.
          </p>
        </div>

        {/* Bottom bar with dynamic year and concept disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>&copy; {currentYear} Flavourz. All rights reserved.</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1 text-[#A89F91]">
              <Sparkles className="w-3 h-3 text-[#C5A880]" />
              <span>Sample concept for presentation · Kamalia, Pakistan</span>
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#292524] hover:bg-[#38332E] text-[#D6C7BA] hover:text-white rounded-xs transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Social Demo Toast/Modal */}
      {socialModalNotice && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSocialModalNotice(null)}
        >
          <div 
            className="bg-[#292524] text-white rounded-lg p-6 max-w-sm w-full shadow-2xl border border-[#44403C] space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="font-serif font-bold text-base text-[#FDFBF7]">
              Social Media Integration
            </h4>
            <p className="text-xs text-[#D6C7BA] leading-relaxed">
              Official {socialModalNotice} is reserved for when the restaurant owner links their active social handles in <code>src/data/restaurant.ts</code>.
            </p>
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSocialModalNotice(null)}
                className="px-4 py-1.5 bg-[#631526] hover:bg-[#7D1B30] text-xs font-semibold rounded-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
