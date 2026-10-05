import React, { useState } from 'react';
import { MapPin, Clock, Phone, MessageSquare, ExternalLink, Navigation, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';

interface ContactProps {
  onOpenReservation: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenReservation }) => {
  const [directionsModalOpen, setDirectionsModalOpen] = useState(false);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);

  // Quick inquiry form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleDirectionsClick = () => {
    setDirectionsModalOpen(true);
  };

  const handleWhatsAppClick = () => {
    setWhatsAppModalOpen(true);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#631526]">
            Visit & Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C1917] tracking-tight [text-wrap:balance]">
            Join Us at the Table
          </h2>
          <p className="text-base text-[#57534E] font-sans [text-wrap:pretty]">
            Whether you are planning a relaxed weeknight dinner or a weekend celebration, we look forward to welcoming you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 bg-[#FDFBF7] rounded-md border border-[#E8DFD5] shadow-xs"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xs bg-[#631526]/10 text-[#631526] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#1C1917]">
                    Location & Venue
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#631526] mt-1">
                    {RESTAURANT_DATA.contact.address}
                  </p>
                  <p className="text-xs text-[#57534E] mt-1">
                    Placeholder location: Kamalia, Pakistan
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleDirectionsClick}
                    className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#631526] hover:text-[#4A0E1C] transition-colors cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions Preview</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Opening Hours Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 bg-[#FDFBF7] rounded-md border border-[#E8DFD5] shadow-xs"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xs bg-[#631526]/10 text-[#631526] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif font-bold text-base text-[#1C1917]">
                    Opening Hours
                  </h3>
                  <div className="text-xs text-[#57534E] space-y-1">
                    <p className="font-medium text-[#1C1917]">
                      {RESTAURANT_DATA.contact.openingHours.weekdays}
                    </p>
                    <p className="font-medium text-[#1C1917]">
                      {RESTAURANT_DATA.contact.openingHours.weekends}
                    </p>
                    <p className="text-[#8C7E74] italic">
                      {RESTAURANT_DATA.contact.openingHours.closedDay}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone & Direct Inquiries */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 bg-[#FDFBF7] rounded-md border border-[#E8DFD5] shadow-xs"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xs bg-[#631526]/10 text-[#631526] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-base text-[#1C1917]">
                    Telephone & Inquiries
                  </h3>
                  <p className="text-xs font-medium text-[#631526]">
                    {RESTAURANT_DATA.contact.phone}
                  </p>
                  <p className="text-xs text-[#57534E]">
                    Demo contact: {RESTAURANT_DATA.contact.email}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 font-semibold text-xs rounded-xs transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Contact on WhatsApp</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={onOpenReservation}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#631526] text-white hover:bg-[#4E0E1C] font-semibold text-xs rounded-xs transition-colors cursor-pointer"
                    >
                      <span>Reserve Table</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Map Representation & Quick Message */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Visual Map Representation with Floating Animated Pin */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-lg overflow-hidden border border-[#E5DCD0] shadow-sm bg-[#EFE8DE] min-h-[260px] flex flex-col justify-between p-6"
            >
              
              {/* Map background pattern */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#631526 1px, transparent 1px), radial-gradient(#631526 1px, #EFE8DE 1px)`,
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0, 12px 12px'
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#631526]">
                    Interactive Map Canvas
                  </span>
                  <h4 className="font-serif font-bold text-lg text-[#1C1917]">
                    {RESTAURANT_DATA.name} Bistro & Dining
                  </h4>
                </div>

                {/* Floating Pin with gentle bounce */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="p-2.5 rounded-full bg-white shadow-lg text-[#631526] relative"
                >
                  <MapPin className="w-5 h-5 fill-current" />
                  <span className="absolute inset-0 rounded-full bg-[#631526]/20 animate-ping" />
                </motion.div>
              </div>

              <div className="relative z-10 bg-white/95 backdrop-blur-xs p-4 rounded-md border border-[#E8DFD5] shadow-md max-w-sm mt-8">
                <p className="text-xs font-semibold text-[#1C1917]">
                  Venue Location
                </p>
                <p className="text-xs text-[#78716C] mt-0.5">
                  {RESTAURANT_DATA.contact.address}
                </p>
                <div className="mt-2 pt-2 border-t border-[#F0E8DF] flex items-center justify-between text-[11px]">
                  <span className="text-[#8C7E74]">Valet & street parking</span>
                  <button 
                    type="button" 
                    onClick={handleDirectionsClick}
                    className="text-[#631526] font-semibold hover:underline cursor-pointer"
                  >
                    View Map Info &rarr;
                  </button>
                </div>
              </div>

            </motion.div>

            {/* Quick General Inquiry Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="p-6 sm:p-8 bg-[#FDFBF7] rounded-lg border border-[#E8DFD5] shadow-xs"
            >
              <h3 className="font-serif font-bold text-xl text-[#1C1917] mb-1">
                Send an Inquiry
              </h3>
              <p className="text-xs text-[#78716C] mb-6">
                Have questions about private dining, menu dietary accommodations, or special requests? Drop us a note below.
              </p>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-6 bg-[#F4F9F4] border border-[#CDE5CD] rounded-md text-center space-y-2"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 15 }}
                    >
                      <CheckCircle2 className="w-8 h-8 text-[#2E7D32] mx-auto" />
                    </motion.div>
                    <h4 className="font-serif font-bold text-base text-[#1B5E20]">
                      Inquiry Received (Demo Preview)
                    </h4>
                    <p className="text-xs text-[#2E7D32] max-w-md mx-auto">
                      Thank you, {formData.name}! This is a demonstration of the client inquiry workflow. In production, this form routes instantly to the restaurant management team.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="mt-2 text-xs font-semibold text-[#1B5E20] hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="inquiry-name" className="block text-xs font-medium text-[#44403C] mb-1">
                          Your Name *
                        </label>
                        <input
                          id="inquiry-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full px-3.5 py-2.5 text-xs bg-white rounded-xs border border-[#D6C7BA] focus:outline-hidden focus:ring-2 focus:ring-[#631526] focus:border-transparent text-[#1C1917]"
                        />
                      </div>
                      <div>
                        <label htmlFor="inquiry-email" className="block text-xs font-medium text-[#44403C] mb-1">
                          Email Address *
                        </label>
                        <input
                          id="inquiry-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full px-3.5 py-2.5 text-xs bg-white rounded-xs border border-[#D6C7BA] focus:outline-hidden focus:ring-2 focus:ring-[#631526] focus:border-transparent text-[#1C1917]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiry-message" className="block text-xs font-medium text-[#44403C] mb-1">
                        Message / Request *
                      </label>
                      <textarea
                        id="inquiry-message"
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Inquiring about booking an intimate group dinner for 8 guests next Thursday..."
                        className="w-full px-3.5 py-2.5 text-xs bg-white rounded-xs border border-[#D6C7BA] focus:outline-hidden focus:ring-2 focus:ring-[#631526] focus:border-transparent text-[#1C1917]"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[11px] text-[#8C7E74] italic">
                        * All fields required for demo inquiry
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#631526] hover:bg-[#4E0E1C] active:scale-[0.98] rounded-xs transition-all cursor-pointer shadow-xs"
                      >
                        Send Inquiry
                      </motion.button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Directions Informative Modal with AnimatePresence */}
      <AnimatePresence>
        {directionsModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setDirectionsModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.94, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-[#FDFBF7] rounded-lg p-6 max-w-md w-full shadow-2xl border border-[#E8DFD8] space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E8DFD8]">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-[#631526]" />
                  <h4 className="font-serif font-bold text-lg text-[#1C1917]">
                    Navigation & Directions
                  </h4>
                </div>
                <button 
                  type="button"
                  onClick={() => setDirectionsModalOpen(false)}
                  className="text-[#78716C] hover:text-[#1C1917] text-lg font-bold"
                >
                  &times;
                </button>
              </div>

              <div className="space-y-3 text-xs text-[#57534E]">
                <p>
                  <strong>Pending Location Confirmation:</strong> The exact physical address for {RESTAURANT_DATA.name} will be updated once verified by the establishment owner.
                </p>
                <div className="p-3 bg-[#F5EFEB] rounded-xs border border-[#E5DDD2]">
                  <p className="font-semibold text-[#1C1917]">Demo Search Target:</p>
                  <p className="text-[#631526] mt-0.5">{RESTAURANT_DATA.contact.googleMapsSearchQuery}</p>
                  <p className="text-[11px] text-[#78716C] mt-1">{RESTAURANT_DATA.contact.fullAddressDemo}</p>
                </div>
                <p className="text-[11px] text-[#78716C]">
                  When live, this button automatically triggers Google Maps directions to the exact GPS coordinates.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8DFD8] flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setDirectionsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#57534E] hover:bg-[#EAE0D5] rounded-xs transition-colors"
                >
                  Close
                </button>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Flavourz restaurant, Kamalia, Pakistan')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#631526] hover:bg-[#4E0E1C] rounded-xs transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Search in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Informative Modal with AnimatePresence */}
      <AnimatePresence>
        {whatsAppModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setWhatsAppModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.94, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-[#FDFBF7] rounded-lg p-6 max-w-md w-full shadow-2xl border border-[#E8DFD8] space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E8DFD8]">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  <h4 className="font-serif font-bold text-lg text-[#1C1917]">
                    WhatsApp Direct Chat
                  </h4>
                </div>
                <button 
                  type="button"
                  onClick={() => setWhatsAppModalOpen(false)}
                  className="text-[#78716C] hover:text-[#1C1917] text-lg font-bold"
                >
                  &times;
                </button>
              </div>

              <div className="space-y-3 text-xs text-[#57534E]">
                <p>
                  <strong>Pending Verified WhatsApp Number:</strong> As this is a concept demo, the restaurant's official WhatsApp business number has not yet been connected.
                </p>
                <div className="p-3 bg-[#F0FDF4] rounded-xs border border-[#BBF7D0]">
                  <p className="font-semibold text-[#166534]">Status: Ready for Integration</p>
                  <p className="text-[11px] text-[#15803D] mt-1">
                    Once the client supplies their verified phone number in <code>src/data/restaurant.ts</code>, this button will immediately launch a WhatsApp chat with a custom welcome greeting.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E8DFD8] flex justify-end">
                <button
                  type="button"
                  onClick={() => setWhatsAppModalOpen(false)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#128C7E] hover:bg-[#075E54] rounded-xs transition-colors"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
