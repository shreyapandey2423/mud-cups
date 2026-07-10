import { m } from 'motion/react';
import { Link } from 'react-router-dom';

const easeCurve = [0.16, 1, 0.3, 1];

interface HeroProps {
  isFirstVisit: boolean;
}

export default function Hero({ isFirstVisit }: HeroProps) {
  const isBot = typeof window !== 'undefined' && /bot|googlebot|crawler|spider|robot|crawling|Lighthouse|Chrome-Lighthouse|PageSpeed/i.test(navigator.userAgent);
  const initialDelay = isBot ? 0 : (isFirstVisit ? 1.5 : 0);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#110C09] flex items-center justify-center">
      
      {/* Background Image - Magazine Photography */}
      <m.div
        initial={{ scale: 1.05, opacity: isBot ? 1 : 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: easeCurve, delay: initialDelay }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/hero.webp"
          alt="Mud Cups Atmosphere"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center opacity-75 sepia-[0.05] contrast-[1.02]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Soft vignette and warm light overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(17,12,9,0.7)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#110C09]/40 via-transparent to-[#110C09]/90" />
        
        {/* Film grain / Paper texture overlay */}
        <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.35]" style={{ backgroundImage: 'url("/images/noise.svg")', backgroundSize: '150px' }} />
      </m.div>

      {/* Floating Particles / Ambient Glow */}
      <m.div 
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(215,160,110,0.15)_0%,transparent_60%)] mix-blend-screen"
      />

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-24 flex flex-col items-center text-center">
        <m.div
          initial={{ opacity: isBot ? 1 : 0, y: isBot ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeCurve, delay: initialDelay + 0.4 }}
          className="mb-8"
        >
          <span className="font-sans text-[0.65rem] tracking-[0.25em] text-[#DED9D1] uppercase">An Evening Awaits</span>
        </m.div>
        
        <m.h1
          initial={{ opacity: isBot ? 1 : 0, y: isBot ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: easeCurve, delay: initialDelay + 0.6 }}
          className="text-[clamp(4.5rem,12vw,10rem)] font-serif text-[#FDFCFB] mb-10 leading-[0.9] tracking-tighter"
        >
          Where time <br className="hidden sm:block" /> slows down.
        </m.h1>

        <m.p
          initial={{ opacity: isBot ? 1 : 0, y: isBot ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: easeCurve, delay: initialDelay + 0.8 }}
          className="font-serif italic text-xl lg:text-2xl text-[#EBE6DC] mb-16 max-w-2xl text-center mx-auto"
        >
          Handcrafted clay cups, deeply roasted coffee, and the subtle scent of woodsmoke. A sanctuary for meaningful conversations.
        </m.p>

        <m.div
          initial={{ opacity: isBot ? 1 : 0, y: isBot ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: easeCurve, delay: initialDelay + 1.0 }}
        >
          <Link to="/menu" className="font-sans text-[0.65rem] uppercase tracking-[0.2em] font-medium text-[#FDFCFB] border-b border-[#FDFCFB]/30 pb-2 hover:border-[#FDFCFB] transition-colors duration-[600ms] ease-[0.16,1,0.3,1] px-2 py-3 hover:bg-[#FDFCFB]/5 rounded-sm">
            Explore the Menu
          </Link>
        </m.div>
      </div>

      {/* Elegant scroll indicator */}
      <m.div 
        initial={{ opacity: isBot ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: easeCurve, delay: initialDelay + 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
      >
        <div className="w-[1px] h-16 bg-[#EBE6DC]/20 relative overflow-hidden">
          <m.div 
            className="w-full h-1/2 bg-[#FDFCFB] absolute top-0"
            animate={{ y: ['-100%', '300%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </m.div>
    </section>
  );
}
