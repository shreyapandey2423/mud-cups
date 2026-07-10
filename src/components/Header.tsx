import React, { useState } from 'react';
import { m, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, Instagram, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { id: 'menu', label: 'Tasting Journal', path: '/menu' },
  { id: 'gallery', label: 'Atmosphere', path: '/gallery' },
  { id: 'visit-us', label: 'Visit', path: '/visit-us' }
];

const easeCurve = [0.16, 1, 0.3, 1];

const isBot = typeof window !== 'undefined' && /bot|googlebot|crawler|spider|robot|crawling|Lighthouse|Chrome-Lighthouse|PageSpeed/i.test(navigator.userAgent);

const Header = function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 50) {
      setIsScrolled(true);
      if (latest > previous && latest > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    } else {
      setIsScrolled(false);
      setIsHidden(false);
    }
  });

  const headerBg = isScrolled || !isHome 
    ? 'bg-[#F9F8F6]/80 backdrop-blur-xl shadow-[0_4px_30px_rgb(0,0,0,0.03)] border border-[#E8E4D9]/50' 
    : 'bg-transparent border border-transparent';
  
  const textColor = (isScrolled || !isHome || isOpen) ? 'text-[#2C2724]' : 'text-[#EBE6DC]';

  return (
    <>
      <m.header
        initial={{ y: isBot ? 0 : -100 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.9, ease: easeCurve }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-8 pt-6 lg:pt-8 pointer-events-none"
      >
        <div 
          className={`pointer-events-auto flex items-center justify-between transition-all duration-[900ms] ease-[0.16,1,0.3,1] ${headerBg} ${isScrolled ? 'w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-5xl h-20 px-8 rounded-[24px]' : 'w-full max-w-[90rem] h-24 px-2 sm:px-4 lg:px-16 rounded-[8px]'}`}
        >
          <Link to="/" aria-label="Mud Cups Home" className={`flex flex-col relative z-50 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C7668] focus-visible:ring-offset-2 ${textColor} transition-colors duration-[900ms] p-2`}>
            <span className="font-serif text-[1.75rem] lg:text-[2rem] tracking-tight leading-none transition-all duration-[900ms] ease-[0.16,1,0.3,1] group-hover:scale-[1.02] group-hover:-rotate-1 origin-center">
              Mud Cups
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-12 relative z-50">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`font-sans text-[0.65rem] uppercase tracking-[0.25em] font-medium ${textColor} opacity-70 hover:opacity-100 transition-opacity duration-[700ms] ease-[0.16,1,0.3,1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C7668] focus-visible:ring-offset-2 relative group py-2 px-1`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-current transition-all duration-[700ms] ease-[0.16,1,0.3,1] ${location.pathname === item.path ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`} />
              </Link>
            ))}
            
            <div className={`w-[1px] h-4 transition-colors duration-[900ms] ${isScrolled || !isHome ? 'bg-[#DED9D1]' : 'bg-white/20'}`} />
            
            <a href="https://instagram.com" aria-label="Mud Cups Instagram" target="_blank" rel="noopener noreferrer" className={`opacity-70 hover:opacity-100 transition-opacity duration-[700ms] ${textColor} p-2 hover:scale-[1.05] ease-[0.16,1,0.3,1]`}>
              <Instagram className="w-[18px] h-[18px] stroke-[1.2]" aria-hidden="true" />
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={`lg:hidden relative z-50 w-12 h-12 flex items-center justify-end focus:outline-none ${textColor} transition-colors duration-[900ms] hover:scale-[1.05] ease-[0.16,1,0.3,1]`}
          >
            {isOpen ? <X className="w-6 h-6 stroke-[1]" aria-hidden="true" /> : <Menu className="w-6 h-6 stroke-[1]" aria-hidden="true" />}
          </button>
        </div>
      </m.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 1.2, ease: easeCurve }}
            className="fixed inset-0 z-40 bg-[#F9F8F6] flex flex-col justify-center px-8 sm:px-16"
          >
            <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply" style={{ backgroundImage: 'url("/images/noise.svg")', backgroundSize: '150px' }} />
            
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-12 relative z-10">
              {navItems.map((item, i) => (
                <m.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 1, ease: easeCurve }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="group inline-flex flex-col focus:outline-none"
                  >
                    <span className="font-serif text-[clamp(2.5rem,8vw,5rem)] text-[#2C2724] leading-none tracking-tight transition-transform duration-[700ms] ease-[0.16,1,0.3,1] group-hover:translate-x-4">
                      {item.label}
                    </span>
                  </Link>
                </m.div>
              ))}

              <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: easeCurve }}
                className="pt-12 mt-12 border-t border-[#E8E4D9] flex flex-col space-y-8"
              >
                <div className="flex flex-col space-y-4">
                  <span className="font-sans text-[0.65rem] tracking-[0.25em] text-[#7A736E] uppercase">Visit Us</span>
                  <a href="https://maps.google.com/?q=Mud+cups+Ananth+Nagar+Bengaluru" className="flex items-center gap-4 text-[#2C2724] group w-max" target="_blank" rel="noopener noreferrer" aria-label="Get Directions on Google Maps">
                    <MapPin className="w-5 h-5 stroke-[1.2]" aria-hidden="true" />
                    <span className="font-serif text-xl italic transition-transform duration-[700ms] group-hover:translate-x-2">Electronic City, Bengaluru</span>
                  </a>
                </div>
                <div className="flex gap-8">
                  <a href="https://instagram.com" className="flex items-center gap-3 text-[#2C2724] group w-max" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                    <Instagram className="w-5 h-5 stroke-[1.2]" aria-hidden="true" />
                    <span className="font-sans text-xs tracking-widest uppercase transition-transform duration-[700ms] group-hover:translate-x-2">Instagram</span>
                  </a>
                </div>
              </m.div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(Header);
