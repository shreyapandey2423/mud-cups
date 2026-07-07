import React from "react";
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MudCupsLogo from './MudCupsLogo';

interface HeaderProps {
  isFirstVisit?: boolean;
  
}

const allNavItems = [
  { label: 'Home', path: '/#hero', id: 'hero' },
  { label: 'About', path: '/#about', id: 'about' },
  { label: 'Experience', path: '/#offers', id: 'offers' },
  { label: 'Menu', path: '/menu', id: 'menu' },
  { label: 'Gallery', path: '/gallery', id: 'gallery' },
  { label: 'Testimonials', path: '/testimonials', id: 'testimonials' },
  { label: 'Visit Us', path: '/visit-us', id: 'location' }
];

const Header = function Header({ isFirstVisit }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialIntro] = useState(isFirstVisit);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY <= 15;
      setIsAtTop(prev => prev !== atTop ? atTop : prev);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return;
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let newActive = null;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          newActive = entry.target.id;
        }
      });
      if (newActive) {
        setActiveSection(newActive);
      }
    };
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    ['hero', 'about', 'offers'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavClick = (path: string, id: string) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(path);
      }
    } else {
      navigate(path);
    }
  };

  const getIsActive = (item: any) => {
    if (item.path.startsWith('/#')) {
      return location.pathname === '/' && activeSection === item.id;
    }
    return location.pathname === item.path;
  };

  const isScrolledOrOpen = !isAtTop || isOpen;

  const animVariants = {
    active: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <>
      <motion.header
        id="header-nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: initialIntro ? 2.35 : 0, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          isFirstVisit ? 'pointer-events-none' : ''
        }`}
      >
        <div 
          className={`absolute inset-0 transition-opacity duration-700 pointer-events-none will-change-transform translate-z-0 ${isScrolledOrOpen ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundColor: 'rgba(247, 242, 235, 0.98)',
            boxShadow: '0 10px 40px -10px rgba(45, 36, 31, 0.12)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(212, 196, 180, 0.5)'
          }}
        />
        <motion.div 
          animate="active"
          variants={animVariants}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 h-[72px] flex items-center justify-between">
            <Link
              to="/#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('/#hero', 'hero'); }}
              className="flex items-center space-x-3 group cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-[4px] py-1 pr-1"
              id="btn-logo-home"
            >
              <div className="relative group-hover:scale-105 transition-transform duration-500 ease-out">
                {/* Subtle warm glow behind the logo */}
                <div className="absolute inset-0 rounded-full blur-xl scale-125 transition duration-1000 bg-transparent" />
                <MudCupsLogo 
                  layoutId="mud-cups-main-logo" 
                  interactive={false} 
                  className={`relative z-10 h-10 w-10 md:h-[44px] md:w-[44px] lg:h-12 lg:w-12 transition duration-1000 ${
                    isScrolledOrOpen ? '' : 'drop-shadow-[0_2px_12px_rgba(45,36,31,0.7)] brightness-105 contrast-105'
                  }`} 
                />
              </div>
              <div className="flex flex-col relative z-10">
                <span className={`text-sm font-black tracking-[0.2em] uppercase leading-none font-sans transition duration-1000 [text-rendering:optimizeLegibility] ${
                  isScrolledOrOpen ? 'text-[#2D241F]' : 'text-[#F7F2EB] drop-shadow-[0_2px_8px_rgba(26,20,18,0.9)]'
                }`}>
                  MUD CUPS
                </span>
                <span className={`text-[8px] font-semibold tracking-[0.1em] mt-0.5 leading-none font-mono transition duration-1000 ${
                  isScrolledOrOpen ? 'text-[#6A5A4D]' : 'text-[#D4C4B4] drop-shadow-[0_1px_4px_rgba(26,20,18,0.9)]'
                }`}>
                  REVIVING TRADITIONAL TASTE
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-[34px]">
              <nav aria-label="Primary Navigation" className="flex items-center space-x-[34px]">
                {allNavItems.map((item) => {
                  const isActive = getIsActive(item);
                  const baseColor = isScrolledOrOpen ? 'text-[#6A5A4D]' : 'text-[#EFE6D8] drop-shadow-[0_2px_4px_rgba(26,20,18,0.9)]';
                  const hoverColor = isScrolledOrOpen ? 'hover:text-[#2D241F]' : 'hover:text-[#FFFDF9]';
                  const activeColor = isScrolledOrOpen ? 'text-[#8B6B4D]' : 'text-[#FFFDF9] drop-shadow-[0_2px_4px_rgba(26,20,18,0.9)]';
                  const underlineColor = isScrolledOrOpen ? 'bg-[#8B6B4D]' : 'bg-[#D4C4B4] shadow-[0_1px_2px_rgba(26,20,18,0.8)]';

                  return (
                    <a
                      key={item.id}
                      href={item.path}
                      onClick={(e) => { e.preventDefault(); handleNavClick(item.path, item.id); }}
                      className={`text-[12px] uppercase tracking-[0.2em] transition duration-500 cursor-pointer relative py-2 px-1 rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent group ${
                        isActive ? `font-semibold ${activeColor}` : `font-medium ${baseColor} ${hoverColor}`
                      }`}
                    >
                      {item.label}
                      <span 
                        className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[1px] transition duration-500 ease-[0.22,1,0.36,1] ${underlineColor} ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-1/2'
                        }`} 
                      />
                    </a>
                  );
                })}
              </nav>

              <div className={`w-[1px] h-4 ml-2 transition duration-1000 ${isScrolledOrOpen ? 'bg-[#DDD2C2]/60' : 'bg-[#D4C4B4]/40'}`} />

              <a
                href="https://www.instagram.com/mud_cups_ananthnagar/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition duration-500 hover:scale-[1.1] ml-2 p-1.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                  isScrolledOrOpen ? 'text-[#6A5A4D] hover:text-[#8B6B4D] hover:bg-[#F7F2EB]' : 'text-[#EFE6D8] hover:text-[#FFFDF9] hover:bg-[#FFFDF9]/10 drop-shadow-[0_2px_4px_rgba(26,20,18,0.8)]'
                }`}
                aria-label="Instagram"
              >
                <Instagram className="w-[18px] h-[18px] stroke-[1.5]" />
              </a>
            </div>

            <div className="flex lg:hidden items-center space-x-3">
              <a
                href="https://www.instagram.com/mud_cups_ananthnagar/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition duration-500 hover:scale-[1.1] p-1.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                  isScrolledOrOpen ? 'text-[#6A5A4D] hover:text-[#8B6B4D] hover:bg-[#F7F2EB]' : 'text-[#EFE6D8] hover:text-[#FFFDF9] hover:bg-[#FFFDF9]/10 drop-shadow-[0_2px_4px_rgba(26,20,18,0.8)]'
                }`}
                aria-label="Instagram"
              >
                <Instagram className="w-[20px] h-[20px] stroke-[1.5]" />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-10 h-10 flex items-center justify-center transition duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full ${
                  isScrolledOrOpen ? 'text-[#2D241F] hover:bg-[#F7F2EB]' : 'text-[#EFE6D8] hover:text-[#FFFDF9] hover:bg-[#FFFDF9]/10 drop-shadow-[0_2px_4px_rgba(26,20,18,0.8)]'
                }`}
                aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-navigation"
                id="btn-mobile-toggle"
              >
                {isOpen ? <X className="w-5 h-5 stroke-[1.5]" /> : <Menu className="w-5 h-5 stroke-[1.5]" />}
              </button>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-40 bg-[#F7F2EB] flex flex-col justify-center px-10 pt-20 pb-10"
            >
              <nav id="mobile-navigation" className="flex flex-col space-y-6 max-h-[80vh] overflow-y-auto no-scrollbar" aria-label="Mobile Navigation">
                <AnimatePresence mode="popLayout">
                  {allNavItems.map((item, index) => {
                    const isActive = getIsActive(item);
                    return (
                      <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: index * 0.05, duration: 0.22, ease: 'easeOut' }}
                        key={item.id}
                        href={item.path}
                        onClick={(e) => { e.preventDefault(); handleNavClick(item.path, item.id); }}
                        className={`text-left text-2xl font-semibold uppercase tracking-[0.2em] transition cursor-pointer w-full flex items-center space-x-4 px-2 py-1 rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F2EB] ${
                          isActive ? 'text-[#8B6B4D]' : 'text-[#2D241F]'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="w-12 h-[2px] bg-[#8B6B4D]" />}
                      </motion.a>
                    );
                  })}
                </AnimatePresence>
              </nav>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-auto pt-10 border-t border-[#DDD2C2]/40"
              >
                <div className="flex flex-col">
                  <MudCupsLogo interactive={false} className="w-10 h-10 mb-4" />
                  <span className="text-sm font-black tracking-[0.2em] uppercase leading-none font-sans text-[#2D241F]">
                    MUD CUPS
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.1em] mt-1.5 leading-none font-mono text-[#6A5A4D]">
                    REVIVING TRADITIONAL TASTE
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
export default React.memo(Header);
