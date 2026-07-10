import React from "react";
import { Link } from "react-router-dom";
import { m } from 'motion/react';
import { Instagram, MapPin, Phone, MessageCircle } from 'lucide-react';

const easeCurve = [0.16, 1, 0.3, 1];

const Footer = function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#110B08] overflow-hidden relative border-t border-[#2C1E16]">
      <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-overlay" style={{ backgroundImage: 'url("/images/noise.svg")', backgroundSize: '150px' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0604] to-transparent opacity-80" />
      
      <m.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.8, ease: easeCurve }}
        className="pt-48 pb-12 lg:pt-64 lg:pb-16 relative z-10 max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-24 flex flex-col"
      >
        
        {/* Massive Typography */}
        <div className="flex flex-col mb-48 lg:mb-64 w-full">
          <h2 className="text-[clamp(3.5rem,10vw,12rem)] font-serif tracking-tighter text-[#EBE6DC] leading-[0.9] opacity-90 select-none">
            The evening <br /> is still young.
          </h2>
        </div>
        
        <div className="w-full flex flex-col gap-16">
          <div className="w-full h-[1px] bg-[#2C1E16]" />

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 lg:gap-0">
            
            {/* Links */}
            <nav aria-label="Footer Navigation" className="flex flex-col sm:flex-row gap-16 sm:gap-32">
              <div className="flex flex-col space-y-6">
                <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-[#8C7668]">Explore</span>
                <div className="flex flex-col space-y-4">
                  <Link to="/menu" className="font-serif text-xl text-[#DED9D1] hover:text-white transition-colors duration-[700ms]">Tasting Journal</Link>
                  <Link to="/gallery" className="font-serif text-xl text-[#DED9D1] hover:text-white transition-colors duration-[700ms]">Atmosphere</Link>
                  <Link to="/visit-us" className="font-serif text-xl text-[#DED9D1] hover:text-white transition-colors duration-[700ms]">Find Us</Link>
                </div>
              </div>

              <div className="flex flex-col space-y-6">
                <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-[#8C7668]">Connect</span>
                <div className="flex flex-col space-y-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="group flex items-center gap-4 text-[#DED9D1] hover:text-white transition-colors duration-[700ms]">
                    <Instagram className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
                    <span className="font-serif text-xl">Instagram</span>
                  </a>
                  <a href="https://maps.google.com/?q=Mud+cups+Ananth+Nagar+Bengaluru" target="_blank" rel="noopener noreferrer" aria-label="Get Directions on Google Maps" className="group flex items-center gap-4 text-[#DED9D1] hover:text-white transition-colors duration-[700ms]">
                    <MapPin className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
                    <span className="font-serif text-xl">Directions</span>
                  </a>
                  <a href="tel:+918105457694" aria-label="Call Mud Cups" className="group flex items-center gap-4 text-[#DED9D1] hover:text-white transition-colors duration-[700ms]">
                    <Phone className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
                    <span className="font-serif text-xl">Call Us</span>
                  </a>
                  <a href="https://wa.me/918105457694" target="_blank" rel="noopener noreferrer" aria-label="Message Mud Cups on WhatsApp" className="group flex items-center gap-4 text-[#DED9D1] hover:text-white transition-colors duration-[700ms]">
                    <MessageCircle className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
                    <span className="font-serif text-xl">WhatsApp</span>
                  </a>
                </div>
              </div>
            </nav>

            {/* Signature & Copyright */}
            <div className="flex flex-col lg:items-end gap-8 text-left lg:text-right">
              <span className="font-serif italic text-2xl text-[#8C7668]">
                Crafted with warmth.
              </span>
              <div className="flex flex-col gap-2 font-sans text-[0.55rem] uppercase tracking-[0.25em] text-[#6B5A4E]">
                <span>© {currentYear} Mud Cups</span>
                <span>Electronic City, Bengaluru</span>
              </div>
            </div>
          </div>
        </div>

      </m.div>
    </footer>
  );
};

export default React.memo(Footer);
