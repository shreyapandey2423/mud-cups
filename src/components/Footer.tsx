import React from "react";
import { Link } from "react-router-dom";

import MudCupsLogo from './MudCupsLogo';

const Footer = function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#EFE6D8] border-t border-[#D4C4B4]/40 text-[#2D241F] font-sans overflow-hidden relative">
      {/* Subtle ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle_at_top,rgba(255,253,249,0.3)_0%,transparent_70%)] rounded-full  pointer-events-none" />

      {/* 2. Minimal Redesigned Footer */}
      <div
        id="contact"
        className="pt-20 pb-16 bg-[#F7F2EB] relative z-10"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          
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
               <Link to="/menu" aria-label="View Menu" className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2D241F] hover:text-[#8B6B4D] transition relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2EB] rounded-[2px] px-1">
                 Menu
                 <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-[#8B6B4D] transition duration-300 ease-[0.22,1,0.36,1] group-hover:w-full opacity-60" />
               </Link>
               <Link to="/visit-us" aria-label="Visit Us Location Information" className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2D241F] hover:text-[#8B6B4D] transition relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2EB] rounded-[2px] px-1">
                 Visit Us
                 <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-[#8B6B4D] transition duration-300 ease-[0.22,1,0.36,1] group-hover:w-full opacity-60" />
               </Link>
               <a href="https://www.instagram.com/mud_cups_ananthnagar/" target="_blank" rel="noopener noreferrer" aria-label="Follow Mud Cups on Instagram" className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2D241F] hover:text-[#8B6B4D] transition relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2EB] rounded-[2px] px-1">
                 Instagram
                 <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-[#8B6B4D] transition duration-300 ease-[0.22,1,0.36,1] group-hover:w-full opacity-60" />
               </a>
            </nav>
            {/* Minimal Copyright */}
            <p className="text-[11px] text-[#6A5A4D] font-mono tracking-[0.2em] uppercase opacity-80">
              © {currentYear} Mud Cups. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default React.memo(Footer);
