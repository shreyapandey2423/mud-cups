import React from "react";
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { useRef, useState } from 'react';

interface HeroProps {
  isFirstVisit?: boolean;
}

const easeCurve = [0.22, 1, 0.36, 1];

const Hero = function Hero({ isFirstVisit = false }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [initialIntro] = useState(isFirstVisit);
  const introDelay = initialIntro ? 2.35 : 0;
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleScrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="scroll-mt-24 relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#2D241F] py-16 sm:py-32"
    >
      {/* 1. LAYERED BACKGROUND SYSTEM (DEPTH & LIGHTING) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#2D241F]">
        {/* Restored Original AI Hero Image with Color Grading and Responsive Optimization */}
        <img
          src="/images/hero.jpg"
          alt="Mud Cups Café"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90 contrast-[1.08] brightness-[0.92] saturate-[1.1] sepia-[0.1]"
        />
        
        {/* Cinematic Multi-layer Gradient Overlay (Responsively tuned for readability) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1412]/60 via-[#2D241F]/20 to-[#1A1412]/90 sm:from-[#2D241F]/30 sm:via-[#4A3B32]/10 sm:to-[#1A1412]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1412]/50 via-transparent to-[#1A1412]/50 sm:from-[#1A1412]/40 sm:via-transparent sm:to-[#1A1412]/40" />
        
        {/* Mobile-specific bottom gradient to ensure text readability against busy areas */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#1A1412] via-[#1A1412]/70 to-transparent sm:hidden" />
        
        {/* Elegant light bloom (Top Left - Warm sunlight entering) */}
        <motion.div 
          animate={{ opacity: [0.3, 0.45, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(229,213,197,0.8)_0%,transparent_70%)] opacity-40 mix-blend-overlay pointer-events-none will-change-transform" 
          style={{ transform: 'translateZ(0)' }}
        />

        {/* Elegant light bloom (Bottom Right - Ambient café warmth) */}
        <motion.div 
          animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,196,180,0.6)_0%,transparent_70%)] opacity-30 mix-blend-overlay pointer-events-none will-change-transform" 
          style={{ transform: 'translateZ(0)' }}
        />
        
        {/* Soft drifting steam effect (Bottom to Top) */}
        
        

        {/* Cinematic Noise & Vignette */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] mix-blend-overlay" 
             style={{ backgroundImage: 'url("/images/noise.svg")', backgroundSize: '150px' }} />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(45,36,31,0.08)_100%)]" />
      </div>

      {/* 2. HERO CONTENT AREA */}
      <motion.div 
        style={{ y: contentY, opacity }}
        className="scroll-mt-24 relative z-10 max-w-[800px] mx-auto px-6 text-center flex flex-col items-center justify-center pt-12 pb-12 sm:pt-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: introDelay + 0.0, ease: easeCurve }}
          className="mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md will-change-transform translate-z-0 border border-[#FFFDF9]/20 text-[10px] sm:text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#8B6B4D] shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
            <Sparkles className="w-3 h-3 text-[#B99872]" />
            <span>Reviving Traditional Taste</span>
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: introDelay + 0.05, ease: easeCurve }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#FFFDF9] tracking-tight leading-[1.1] font-sans max-w-[600px] mx-auto mb-6 sm:mb-8 drop-shadow-[0_4px_24px_rgba(26,20,18,0.7)]"
        >
          Not Your Average<br />Chai Stop.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: introDelay + 0.10, ease: easeCurve }}
          className="text-base sm:text-lg text-[#F7F2EB] leading-[2.35] font-normal max-w-[500px] mx-auto drop-shadow-[0_2px_16px_rgba(26,20,18,0.8)]"
        >
          Mud Cups—where smoky Tandoori Chai meets toasty bites, chilled conversations, and cozy vibes.
        </motion.p>
      </motion.div>

      {/* Down arrow scroll helper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: introDelay + 0.15 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <button
          type="button"
          onClick={handleScrollToMenu}
          className="text-[#FFFDF9]/70 hover:text-[#FFFDF9] transition cursor-pointer p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1412] rounded-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
          aria-label="Scroll to Menu"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
export default React.memo(Hero);
