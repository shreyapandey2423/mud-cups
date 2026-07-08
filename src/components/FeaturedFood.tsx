import MudCupsLogo from './MudCupsLogo';
import { motion } from 'motion/react';
const featuredFoodImg = '/images/featured-food.webp';

export default function FeaturedFood() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#FFFDF9] py-20 sm:py-32 border-b border-[#DDD2C2]/40 relative overflow-hidden">
      {/* Subtle ambient light from left */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_left_center,rgba(247,242,235,0.7)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-5/12 space-y-8 text-left"
          >
            <span className="text-[11px] font-bold font-mono uppercase tracking-[0.25em] text-[#8B6B4D] flex items-center space-x-3 opacity-90">
              <MudCupsLogo interactive={false} size={14} className="text-[#8B6B4D]" />
              <span>CAFE SIGNATURES</span>
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[44px] font-semibold text-[#2D241F] tracking-tight leading-[1.12]">
              Freshly Made.<br />Served Hot.
            </h2>
            <p className="text-[#6A5A4D] text-lg sm:text-xl font-normal leading-[1.8] max-w-xl">
              Every plate is prepared fresh, every sip crafted with care.
            </p>
            <div className="h-[1px] w-16 bg-[#D4C4B4]/60 my-8" />
            <p className="text-base text-[#6A5A4D]/90 font-normal leading-[1.9] max-w-md">
              From our crispy rolls to piping hot maggi bowls and freshly assembled pasta dishes, we source real ingredients daily to elevate your neighborhood cafe experience.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-7/12 relative group"
          >
            {/* Decorative Offset Frame */}
            <motion.div 
              className="hidden lg:block absolute -top-8 -left-8 w-full h-full border border-[#D4C4B4]/40 rounded-[2rem] pointer-events-none transition-transform duration-1000 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2" 
            />

            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(45,36,31,0.15)] bg-[#F7F2EB] aspect-[4/5] sm:aspect-[3/4] z-10 ring-1 ring-white/50">
              <img
                src={featuredFoodImg}
                alt="Fresh Food & Drinks at Mud Cups"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-[1.05]"
                loading="lazy" decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
