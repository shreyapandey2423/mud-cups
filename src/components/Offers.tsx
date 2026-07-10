import { m } from 'motion/react';

const easeCurve = [0.16, 1, 0.3, 1];

export default function Offers() {
  return (
    <section className="relative w-full overflow-hidden bg-[#110C09] text-[#EBE6DC] py-48 lg:py-64">
      {/* Background with heavy grain */}
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay" style={{ backgroundImage: 'url("/images/noise.svg")', backgroundSize: '150px' }} />
      
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.8, ease: easeCurve }}
          className="max-w-4xl flex flex-col items-center"
        >
          <span className="label-editorial text-[#EBE6DC] opacity-50 mb-16 lg:mb-24">The Craft</span>
          
          <h2 className="chef-note text-[clamp(1.8rem,4vw,3.5rem)] text-[#EBE6DC] opacity-90 leading-[1.4] mb-24">
            "It takes time to boil the milk perfectly. It takes patience to let the clay heat in the coals. We do not rush, because comfort cannot be hurried."
          </h2>
          
          <div className="w-[1px] h-32 bg-gradient-to-b from-[#EBE6DC]/30 to-transparent" />
        </m.div>
        
      </div>
    </section>
  );
}
