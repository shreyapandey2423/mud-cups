import { m } from 'motion/react';
import { Link } from 'react-router-dom';

const easeCurve = [0.16, 1, 0.3, 1];

export default function FeaturedFood() {
  return (
    <section className="section-editorial relative z-10 bg-[var(--color-bg-primary)]">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Chapter 1: The Warmth */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32 lg:mb-64">
          <m.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.4, ease: easeCurve }}
            className="lg:col-span-4 lg:col-start-2 z-10 order-2 lg:order-1"
          >
            <span className="font-sans text-[0.65rem] tracking-[0.25em] text-[#7A736E] uppercase mb-8 lg:mb-12 block">The Warmth</span>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-[#2C2724] leading-[1.05] tracking-tight mb-8 lg:mb-12">
              A quiet <br className="hidden lg:block"/> escape.
            </h2>
            <p className="font-serif text-lg lg:text-xl text-[#5C5550] leading-relaxed mb-12 lg:mb-16">
              Beyond the glass, the city moves fast. Inside, the light is golden, the air smells of roasted beans, and conversation hums at its own unhurried pace. This is your space to exhale.
            </p>
            <Link to="/visit-us" className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase text-[#2C2724] border-b border-[#2C2724]/20 pb-2 hover:border-[#2C2724] transition-colors duration-[600ms] group">
              Find the Door
            </Link>
          </m.div>
          
          <m.div 
            initial={{ opacity: 0, y: 40, scale: 1.02 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.6, ease: easeCurve }}
            className="lg:col-span-6 lg:col-start-7 image-container aspect-[3/4] lg:aspect-[4/5] order-1 lg:order-2 rounded-[4px] overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-[900ms] ease-[0.16,1,0.3,1]"
          >
            <div className="absolute inset-0 bg-[#E8E4D9]/10 mix-blend-overlay z-10 pointer-events-none" />
            <img src="/images/gallery3.webp" alt="Cafe atmosphere" width={800} height={1000} className="w-full h-full object-cover transition-transform duration-[1000ms] ease-[0.16,1,0.3,1] group-hover:scale-[1.02] sepia-[0.05] contrast-[1.02]" loading="lazy" decoding="async" />
          </m.div>
        </div>

        <div className="w-[1px] h-24 bg-[#DED9D1] mx-auto mb-32 lg:mb-64 opacity-50" />

        {/* Chapter 2: The Clay (Overlapping layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 items-center mb-32 lg:mb-64">
          <m.div 
            initial={{ opacity: 0, y: 40, scale: 1.02 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.6, ease: easeCurve }}
            className="lg:col-span-8 image-container aspect-[4/3] lg:aspect-[16/10] z-0 rounded-[4px] overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-[900ms] ease-[0.16,1,0.3,1]"
          >
            <div className="absolute inset-0 bg-[#E8E4D9]/10 mix-blend-overlay z-10 pointer-events-none" />
            <img src="/images/tandoori-chai.webp" alt="Tandoori Chai" width={1200} height={750} className="w-full h-full object-cover transition-transform duration-[1000ms] ease-[0.16,1,0.3,1] group-hover:scale-[1.02] sepia-[0.05] contrast-[1.02]" loading="lazy" decoding="async" />
          </m.div>
          
          <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.4, ease: easeCurve, delay: 0.1 }}
            className="lg:col-span-5 lg:-ml-32 z-10 bg-[#FDFCFB]/95 backdrop-blur-md p-12 lg:p-16 rounded-[4px] shadow-[0_20px_40px_rgb(0,0,0,0.06)] -mt-16 lg:mt-24 relative border border-[#E8E4D9]/50 hover:-translate-y-1 transition-transform duration-[900ms] ease-[0.16,1,0.3,1]"
          >
            <span className="font-sans text-[0.65rem] tracking-[0.25em] text-[#7A736E] uppercase mb-8 block">The Clay Ritual</span>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-[#2C2724] leading-[1.05] tracking-tight mb-8">
              Earth meets <br/> fire.
            </h2>
            <p className="font-serif text-lg text-[#5C5550] leading-relaxed mb-12">
              Hand-thrown clay cups, baked in the tandoor until glowing hot. As the spiced chai pours in, it bubbles, smokes, and absorbs the raw, earthy essence of the soil. A taste that cannot be replicated by metal or porcelain.
            </p>
            <Link to="/menu" className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase text-[#2C2724] border-b border-[#2C2724]/20 pb-2 hover:border-[#2C2724] transition-colors duration-[600ms] group">
              Explore the Menu
            </Link>
          </m.div>
        </div>

        <div className="w-[1px] h-24 bg-[#DED9D1] mx-auto mb-32 lg:mb-64 opacity-50" />

        {/* Chapter 3: The Conversation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <m.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.4, ease: easeCurve }}
            className="lg:col-span-4 lg:col-start-8 lg:order-2 z-10"
          >
            <span className="font-sans text-[0.65rem] tracking-[0.25em] text-[#7A736E] uppercase mb-8 lg:mb-12 block">The Memories</span>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-[#2C2724] leading-[1.05] tracking-tight mb-8 lg:mb-12">
              Stay a little <br className="hidden lg:block"/> longer.
            </h2>
            <p className="font-serif text-lg lg:text-xl text-[#5C5550] leading-relaxed mb-12 lg:mb-16">
              Every scratched table holds a story. Every empty cup signifies a moment shared. We don't just serve food; we hold space for the chapters of your life that unfold over a warm table.
            </p>
            <Link to="/gallery" className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase text-[#2C2724] border-b border-[#2C2724]/20 pb-2 hover:border-[#2C2724] transition-colors duration-[600ms] group">
              View the Journal
            </Link>
          </m.div>
          
          <m.div 
            initial={{ opacity: 0, y: 40, scale: 1.02 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.6, ease: easeCurve }}
            className="lg:col-span-6 lg:col-start-1 lg:order-1 image-container aspect-square lg:aspect-[4/5] rounded-[4px] overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-[900ms] ease-[0.16,1,0.3,1]"
          >
            <div className="absolute inset-0 bg-[#E8E4D9]/10 mix-blend-overlay z-10 pointer-events-none" />
            <img src="/images/gallery8.webp" alt="Empty cups on table" width={800} height={1000} className="w-full h-full object-cover transition-transform duration-[1000ms] ease-[0.16,1,0.3,1] group-hover:scale-[1.02] sepia-[0.05] contrast-[1.02]" loading="lazy" decoding="async" />
          </m.div>
        </div>

      </div>
    </section>
  );
}
