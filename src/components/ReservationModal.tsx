import React, { useState, useEffect } from 'react';
import { X, CalendarCheck, Clock, Users, CheckCircle2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('19:30');
  const [seating, setSeating] = useState('dining-room');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitted(true);
  };

  const timeSlots = [
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reservation-title"
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
            className="bg-[#FDFBF7] rounded-lg max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E8DFD8] relative my-8 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-1 text-[#78716C] hover:text-[#1C1917] rounded-xs transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {isSubmitted ? (
              /* Confirmation State */
              <div className="text-center py-6 space-y-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="w-14 h-14 bg-[#EAF5EA] text-[#2E7D32] rounded-full flex items-center justify-center mx-auto"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>

                <span className="text-xs font-semibold uppercase tracking-widest text-[#631526]">
                  Reservation Request Demo
                </span>

                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                  Table Request Received
                </h3>

                <p className="text-xs text-[#57534E] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>! In this interactive website concept, table requests are validated and prepared for immediate SMS or email dispatch to the restaurant management platform.
                </p>

                <div className="bg-[#FAF6F0] p-4 rounded-sm border border-[#E8DFD5] text-left text-xs space-y-1.5 max-w-sm mx-auto">
                  <p><strong className="text-[#1C1917]">Party Size:</strong> {guests} Guests</p>
                  <p><strong className="text-[#1C1917]">Date & Time:</strong> {date} at {timeSlot}</p>
                  <p><strong className="text-[#1C1917]">Seating Area:</strong> {seating === 'dining-room' ? 'Main Dining Room' : seating === 'hearth' ? 'Hearth Bar' : 'Quiet Alcove'}</p>
                  <p><strong className="text-[#1C1917]">Contact:</strong> {email} {phone ? `· ${phone}` : ''}</p>
                  {specialRequests && (
                    <p><strong className="text-[#1C1917]">Notes:</strong> {specialRequests}</p>
                  )}
                </div>

                <div className="pt-4 flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#631526] hover:bg-[#4E0E1C] rounded-xs transition-colors cursor-pointer"
                  >
                    Close & Return
                  </motion.button>
                </div>
              </div>
            ) : (
              /* Reservation Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#631526] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Table Reservation Request</span>
                  </div>
                  <h3 id="reservation-title" className="font-serif text-2xl font-bold text-[#1C1917]">
                    Reserve Your Experience at {RESTAURANT_DATA.name}
                  </h3>
                  <p className="text-xs text-[#78716C] mt-1">
                    Concept booking simulator. Select your preferred date, party size, and atmosphere.
                  </p>
                </div>

                {/* Party Size & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#44403C] mb-1">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#631526]" />
                        <span>Number of Guests</span>
                      </span>
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white rounded-xs border border-[#D6C7BA] focus:outline-hidden focus:ring-2 focus:ring-[#631526] text-[#1C1917]"
                    >
                      <option value="1">1 Guest (Solo Dining)</option>
                      <option value="2">2 Guests (Couple / Pair)</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests (Standard Table)</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests (Party)</option>
                      <option value="8">8+ Guests (Large Gathering)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#44403C] mb-1">
                      <span className="flex items-center gap-1">
                        <CalendarCheck className="w-3.5 h-3.5 text-[#631526]" />
                        <span>Date</span>
                      </span>
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white rounded-xs border border-[#D6C7BA] focus:outline-hidden focus:ring-2 focus:ring-[#631526] text-[#1C1917]"
                    />
                  </div>
                </div>

                {/* Time Slot Picker */}
                <div>
                  <label className="block text-xs font-medium text-[#44403C] mb-1.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#631526]" />
                      <span>Preferred Time Slot</span>
                    </span>
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        key={slot}
                        type="button"
                        onClick={() => setTimeSlot(slot)}
                        className={`py-2 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                          timeSlot === slot
                            ? 'bg-[#631526] text-white shadow-xs'
                            : 'bg-[#F4ECE3] text-[#57534E] hover:bg-[#EAE0D4]'
                        }`}
                      >
                        {slot}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Seating preference */}
                <div>
                  <label className="block text-xs font-medium text-[#44403C] mb-1">
                    Seating Atmosphere
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setSeating('dining-room')}
                      className={`p-2 text-center rounded-xs border transition-colors cursor-pointer ${
                        seating === 'dining-room'
                          ? 'border-[#631526] bg-[#631526]/5 text-[#631526] font-semibold'
                          : 'border-[#D6C7BA] bg-white text-[#57534E]'
                      }`}
                    >
                      Main Dining Room
                    </button>
                    <button
                      type="button"
                      onClick={() => setSeating('hearth')}
                      className={`p-2 text-center rounded-xs border transition-colors cursor-pointer ${
                        seating === 'hearth'
                          ? 'border-[#631526] bg-[#631526]/5 text-[#631526] font-semibold'
                          : 'border-[#D6C7BA] bg-white text-[#57534E]'
                      }`}
                    >
                      Hearth & Bar
                    </button>
                    <button
                      type="button"
                      onClick={() => setSeating('quiet')}
                      className={`p-2 text-center rounded-xs border transition-colors cursor-pointer ${
                        seating === 'quiet'
                          ? 'border-[#631526] bg-[#631526]/5 text-[#631526] font-semibold'
                          : 'border-[#D6C7BA] bg-white text-[#57534E]'
                      }`}
                    >
                      Quiet Alcove
                    </button>
                  </div>
                </div>

                {/* Guest Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#44403C] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jordan Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white rounded-xs border border-[#D6C7BA] focus:outline-hidden focus:ring-2 focus:ring-[#631526] text-[#1C1917]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#44403C] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jordan@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white rounded-xs border border-[#D6C7BA] focus:outline-hidden focus:ring-2 focus:ring-[#631526] text-[#1C1917]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#44403C] mb-1">
                    Phone Number (Optional for SMS reminder)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white rounded-xs border border-[#D6C7BA] focus:outline-hidden focus:ring-2 focus:ring-[#631526] text-[#1C1917]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#44403C] mb-1">
                    Dietary Notes or Special Occasion
                  </label>
                  <input
                    type="text"
                    placeholder="E.g., Birthday celebration, gluten sensitivity, anniversary..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white rounded-xs border border-[#D6C7BA] focus:outline-hidden focus:ring-2 focus:ring-[#631526] text-[#1C1917]"
                  />
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-between border-t border-[#E8DFD8]">
                  <span className="text-[11px] text-[#8C7E74]">
                    Instant demo confirmation
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#631526] hover:bg-[#4E0E1C] active:scale-[0.98] rounded-xs transition-colors cursor-pointer shadow-xs"
                  >
                    Confirm Request
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
