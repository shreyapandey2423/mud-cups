import { motion } from 'motion/react';

interface PageHeroProps {
  accent: string;
  title: string;
  description: string;
}

export default function PageHero({ accent, title, description }: PageHeroProps) {
  return (
    <section className="bg-[#F7F2EB] pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-[#D4C4B4]/40 relative overflow-hidden">
      {/* Subtle top light bloom */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,rgba(255,253,249,0.7)_0%,transparent_70%)] pointer-events-none will-change-transform translate-z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] font-bold font-mono uppercase tracking-[0.25em] text-[#8B6B4D] mb-6 opacity-90"
        >
          {accent}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[#2D241F] tracking-tight leading-[1.12] mb-8"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#6A5A4D] text-lg font-normal leading-[1.8] max-w-xl mx-auto"
        >
          {description}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] w-20 bg-[#D4C4B4]/60 mt-10 origin-center"
        />
      </div>
    </section>
  );
}
