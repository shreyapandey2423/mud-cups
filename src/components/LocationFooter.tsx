import { Link } from "react-router-dom";
import { GOOGLE_MAPS_EMBED_URL } from '../config/constants';


import { MapPin, Clock, Instagram, Phone, Globe, Mail, Car, Coffee } from 'lucide-react';
import MudCupsLogo from './MudCupsLogo';
import { motion } from 'motion/react';

interface LocationFooterProps {
  hideFooter?: boolean;
}

export default function LocationFooter({ hideFooter = false }: LocationFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#EFE6D8] border-t border-[#DDD2C2]/50 text-[#2D241F] font-sans overflow-hidden">
      
      {/* 1. Contact / Destination Section */}
      <section id="location" className="scroll-mt-24 py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start max-w-6xl mx-auto">
            
            {/* Left Column: Details */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex flex-col space-y-12"
            >
              {/* Heading & Intro */}
              <div className="space-y-6">
                <span className="text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D]">
                  Visit Us
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold text-[#2D241F] tracking-tight leading-[1.1]">
                  The Bangalore<br />Space.
                </h2>
                <p className="text-[#6A5A4D] text-[15px] font-normal leading-[1.8] max-w-md pt-2">
                  Whether you're stopping by for a quick chai, catching up with friends, or enjoying an evening snack, we'd love to welcome you to Mud Cups.
                </p>
              </div>

              {/* Logical Group: Address & Hours */}
              <div className="space-y-8 pt-6 border-t border-[#DDD2C2]/40">
                
                {/* Address */}
                <div>
                  <h3 className="text-[11px] font-bold uppercase text-[#2D241F] tracking-[0.2em] font-mono mb-3">
                    Location
                  </h3>
                  <p className="text-[15px] text-[#6A5A4D] font-normal leading-[1.8]">
                    Survey 61/14, Kammasandra,<br />
                    Near Jockey Showroom, Ananthnagar Main Road,<br />
                    Electronic City, Bangalore, Karnataka 560100
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="text-[11px] font-bold uppercase text-[#2D241F] tracking-[0.2em] font-mono mb-3">
                    Opening Hours
                  </h3>
                  <p className="text-[15px] text-[#6A5A4D] font-normal leading-[1.8]">
                    Monday – Sunday<br />
                    10:00 AM – 11:00 PM
                  </p>
                </div>
              </div>

              {/* Logical Group: Contact */}
              <div className="space-y-8 pt-6 border-t border-[#DDD2C2]/40">
                <div>
                  <h3 className="text-[11px] font-bold uppercase text-[#2D241F] tracking-[0.2em] font-mono mb-4">
                    Call Us
                  </h3>
                  <div className="flex flex-col space-y-2">
                    <a href="tel:+918105457694" aria-label="Call Mud Cups at +91 81054 57694" className="flex items-center space-x-3 text-[15px] text-[#6A5A4D] hover:text-[#8B6B4D] transition-colors group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFE6D8] rounded-[4px]">
                      <Phone className="w-4 h-4 text-[#8B6B4D]" />
                      <span className="relative">
                        +91 81054 57694
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#8B6B4D] transition-all duration-[180ms] ease-out group-hover:w-full" />
                      </span>
                    </a>
                    <a href="tel:+918105003387" aria-label="Call Mud Cups at +91 81050 03387" className="flex items-center space-x-3 text-[15px] text-[#6A5A4D] hover:text-[#8B6B4D] transition-colors group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFE6D8] rounded-[4px]">
                      <Phone className="w-4 h-4 text-[#8B6B4D]" />
                      <span className="relative">
                        +91 81050 03387
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#8B6B4D] transition-all duration-[180ms] ease-out group-hover:w-full" />
                      </span>
                    </a>
                  </div>
                </div>

                {/* Connect With Us */}
                <div>
                  <h3 className="text-[11px] font-bold uppercase text-[#2D241F] tracking-[0.2em] font-mono mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex flex-col space-y-2">
                    <a
                      href="https://www.instagram.com/mud_cups_ananthnagar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Mud Cups on Instagram"
                      className="group flex items-center space-x-4 p-3 -ml-3 rounded-[12px] hover:bg-[#F7F2EB]/50 border border-transparent hover:border-[#DDD2C2]/40 hover:translate-x-[3px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFE6D8] transition-all duration-[180ms] ease-out cursor-pointer w-full max-w-[320px]"
                    >
                      <Instagram className="w-[18px] h-[18px] stroke-[1.5] text-[#6A5A4D] group-hover:text-[#8B6B4D] transition-colors duration-[180ms] ease-out shrink-0" />
                      <span className="text-[14px] font-medium text-[#2D241F] group-hover:text-[#8B6B4D] transition-colors duration-[180ms] ease-out inline-block">
                        @mud_cups_ananthnagar
                      </span>
                    </a>

                    <a
                      href="https://mudcups.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Mud Cups Website"
                      className="group flex items-center space-x-4 p-3 -ml-3 rounded-[12px] hover:bg-[#F7F2EB]/50 border border-transparent hover:border-[#DDD2C2]/40 hover:translate-x-[3px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFE6D8] transition-all duration-[180ms] ease-out cursor-pointer w-full max-w-[320px]"
                    >
                      <Globe className="w-[18px] h-[18px] stroke-[1.5] text-[#6A5A4D] group-hover:text-[#8B6B4D] transition-colors duration-[180ms] ease-out shrink-0" />
                      <span className="text-[14px] font-medium text-[#2D241F] group-hover:text-[#8B6B4D] transition-colors duration-[180ms] ease-out inline-block">
                        mudcups.in
                      </span>
                    </a>

                    <a
                      href="mailto:mudcupsofficial@gmail.com?subject=Inquiry%20from%20Mud%20Cups%20Website"
                      aria-label="Send an email to Mud Cups"
                      className="group flex items-center space-x-4 p-3 -ml-3 rounded-[12px] hover:bg-[#F7F2EB]/50 border border-transparent hover:border-[#DDD2C2]/40 hover:translate-x-[3px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFE6D8] transition-all duration-[180ms] ease-out cursor-pointer w-full max-w-[320px]"
                    >
                      <Mail className="w-[18px] h-[18px] stroke-[1.5] text-[#6A5A4D] group-hover:text-[#8B6B4D] transition-colors duration-[180ms] ease-out shrink-0" />
                      <span className="text-[14px] font-medium text-[#2D241F] group-hover:text-[#8B6B4D] transition-colors duration-[180ms] ease-out inline-block">
                        mudcupsofficial@gmail.com
                      </span>
                    </a>
                  </div>

                  {/* Follow Our Journey */}
                  <div className="mt-6 sm:mt-7 pt-1">
                    <h3 className="text-[11px] font-bold uppercase text-[#8B6B4D] tracking-[0.2em] font-mono mb-2">
                      Follow Our Journey
                    </h3>
                    <p className="text-[13.5px] text-[#6A5A4D] font-normal leading-[1.6] max-w-[320px] mb-5">
                      Stay updated with our latest food, special drinks, café moments, and everyday vibes.
                    </p>
                    
                    <a
                      href="https://www.instagram.com/mud_cups_ananthnagar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Mud Cups Ananthnagar on Instagram" className="group flex items-center space-x-4 p-5 bg-[#FFFDF9] border border-[#DDD2C2]/40 rounded-[16px] shadow-[0_2px_12px_rgba(45,36,31,0.02)] hover:shadow-[0_8px_24px_rgba(45,36,31,0.05)] transition-all duration-[180ms] ease-out cursor-pointer w-full max-w-[380px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFE6D8]"
                    >
                      <Instagram className="w-[22px] h-[22px] stroke-[1.5] text-[#6A5A4D] group-hover:text-[#8B6B4D] transition-colors duration-[180ms] shrink-0" />
                      <div className="flex flex-col space-y-0.5 transform transition-transform duration-[180ms] ease-out group-hover:translate-x-[3px]">
                        <span className="text-[15px] font-medium text-[#2D241F] group-hover:text-[#8B6B4D] transition-colors duration-[180ms]">
                          @mud_cups_ananthnagar
                        </span>
                        <span className="text-[12px] text-[#6A5A4D] font-normal">
                          Official Mud Cups Ananthnagar Instagram
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>



            </motion.div>

            {/* Right Column: Premium Map & Info Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Map */}
              <div className="w-full aspect-square sm:aspect-[4/3] rounded-[24px] overflow-hidden border border-[#DDD2C2]/50 bg-[#FFFDF9] shadow-[0_8px_32px_rgba(45,36,31,0.04)] relative group">
                <iframe 
                  src={GOOGLE_MAPS_EMBED_URL}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mud Cups Location Map"
                  className="w-full h-full object-cover transition-all duration-700 ease-[0.22,1,0.36,1] grayscale-0 group-hover:grayscale-0"
                ></iframe>
              </div>

              {/* Quick Info Card */}
              <div className="bg-[#FFFDF9] border border-[#DDD2C2]/40 rounded-[20px] p-6 sm:p-8 shadow-[0_4px_16px_rgba(45,36,31,0.02)]">
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#F7F2EB] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#8B6B4D]" />
                    </div>
                    <span className="text-[13px] font-medium text-[#2D241F]">Bangalore</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#F7F2EB] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#8B6B4D]" />
                    </div>
                    <span className="text-[13px] font-medium text-[#2D241F]">Open Daily</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#F7F2EB] flex items-center justify-center shrink-0">
                      <Car className="w-4 h-4 text-[#8B6B4D]" />
                    </div>
                    <span className="text-[13px] font-medium text-[#2D241F]">Limited Parking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#F7F2EB] flex items-center justify-center shrink-0">
                      <Coffee className="w-4 h-4 text-[#8B6B4D]" />
                    </div>
                    <span className="text-[13px] font-medium text-[#2D241F]">Indoor & Outdoor</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Minimal Redesigned Footer */}
      {!hideFooter && (
        <div
          id="contact"
          className="border-t border-[#D4C4B4]/40 pt-20 pb-16 bg-[#F7F2EB] relative z-10"
        >
          {/* Subtle ambient light */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle_at_top,rgba(255,253,249,0.3)_0%,transparent_70%)] rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-16 relative z-10">
            
            {/* Footer Logo & Brand info */}
            <div className="space-y-8 max-w-sm">
              <div className="flex items-center space-x-6">
                <MudCupsLogo interactive={false} size={56} className="drop-shadow-sm" />
                <div>
                  <span className="text-3xl font-semibold tracking-tight text-[#2D241F] block font-sans">
                    Mud Cups
                  </span>
                  <span className="text-[11px] font-bold text-[#8B6B4D] tracking-[0.25em] uppercase block font-mono mt-1.5 opacity-90">
                    Reviving Traditional Taste
                  </span>
                </div>
              </div>
              <p className="text-[15px] text-[#6A5A4D] font-normal leading-[1.9]">
                Where smoky Tandoori Chai meets chilled conversations and cozy vibes. Handcrafted with love in Electronic City, Bangalore.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end space-y-12 md:space-y-16">
              {/* Minimal Links */}
              <nav aria-label="Footer Navigation" className="flex flex-wrap gap-8">
                 <Link to="/menu" aria-label="View Menu" className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2D241F] hover:text-[#8B6B4D] transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2EB] rounded-[2px] px-1">
                   Menu
                   <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-[#8B6B4D] transition-all duration-300 ease-[0.22,1,0.36,1] group-hover:w-full opacity-60" />
                 </Link>
                 <Link to="/visit-us" aria-label="Visit Us Location Information" className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2D241F] hover:text-[#8B6B4D] transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2EB] rounded-[2px] px-1">
                   Visit Us
                   <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-[#8B6B4D] transition-all duration-300 ease-[0.22,1,0.36,1] group-hover:w-full opacity-60" />
                 </Link>
                 <a href="https://www.instagram.com/mud_cups_ananthnagar/" target="_blank" rel="noopener noreferrer" aria-label="Follow Mud Cups on Instagram" className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2D241F] hover:text-[#8B6B4D] transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2EB] rounded-[2px] px-1">
                   Instagram
                   <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-[#8B6B4D] transition-all duration-300 ease-[0.22,1,0.36,1] group-hover:w-full opacity-60" />
                 </a>
              </nav>

              {/* Minimal Copyright */}
              <p className="text-[11px] text-[#6A5A4D] font-mono tracking-[0.2em] uppercase opacity-80">
                © {currentYear} Mud Cups. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
