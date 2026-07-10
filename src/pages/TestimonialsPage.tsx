import { m } from 'motion/react';
import PageHero from '../components/PageHero';

const easeCurve = [0.16, 1, 0.3, 1];

const isBot = typeof window !== 'undefined' && /bot|googlebot|crawler|spider|robot|crawling|Lighthouse|Chrome-Lighthouse|PageSpeed/i.test(navigator.userAgent);

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'A hidden sanctuary in the city. The tandoori chai has a smokiness that lingers long after you leave. It is not just coffee or tea, it is a masterclass in slowness.',
    align: 'left'
  },
  {
    id: 2,
    name: 'Rahul K.',
    text: 'I found myself sitting here for three hours without checking my phone. The warmth of the clay cups translates directly to the atmosphere of the room.',
    align: 'right'
  },
  {
    id: 3,
    name: 'Priya D.',
    text: 'There is a specific kind of golden light that hits the tables here in the late afternoon. Pair that with their ginger tea, and you have perfection.',
    align: 'center'
  },
  {
    id: 4,
    name: 'James T.',
    text: 'It feels less like a café and more like a carefully curated living room where everyone happens to respect the quiet.',
    align: 'left'
  }
];

export default function TestimonialsPage() {
  return (
    <m.div
      initial={{ opacity: isBot ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: easeCurve }}
      className="bg-[#F9F8F6] min-h-[100dvh] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply" style={{ backgroundImage: 'url("/images/noise.svg")', backgroundSize: '150px' }} />
      
      <PageHero 
        accent="Echoes"
        title="Words from <br /> our guests."
        description="The stories, quiet moments, and reflections left behind by those who have spent an evening with us."
      />

      <section className="py-24 lg:py-40 max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col space-y-32 lg:space-y-48">
          {testimonials.map((t) => {
            const alignmentClass = 
              t.align === 'left' ? 'items-start text-left md:pr-48' : 
              t.align === 'right' ? 'items-end text-right md:pl-48' : 
              'items-center text-center px-0 md:px-24';

            return (
              <m.div 
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.8, ease: easeCurve }}
                className={`flex flex-col relative w-full ${alignmentClass}`}
              >
                <div className="relative max-w-4xl">
                  <div className={`absolute -top-12 lg:-top-20 font-serif text-[6rem] lg:text-[10rem] text-[#DED9D1] leading-none select-none z-0 ${t.align === 'left' ? '-left-8 lg:-left-16' : t.align === 'right' ? '-right-8 lg:-right-16' : 'left-1/2 -translate-x-1/2'}`}>
                    “
                  </div>
                  <p className="font-serif text-[clamp(1.75rem,4vw,3.5rem)] text-[#2C2724] leading-[1.3] z-10 relative tracking-tight">
                    {t.text}
                  </p>
                  <div className={`flex items-center mt-12 z-10 opacity-70 ${t.align === 'right' ? 'justify-end' : t.align === 'center' ? 'justify-center' : 'justify-start'}`}>
                    <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7A736E] font-medium">{t.name}</span>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>
      </section>

      {/* Community Section */}
      <section className="py-32 lg:py-48 bg-[#F2EFEB] relative z-10 border-t border-[#E8E4D9]">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-24">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.8, ease: easeCurve }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
          >
            <div className="lg:col-span-5 space-y-12">
              <span className="label-editorial text-[#7A736E]">Our Community</span>
              <h2 className="font-serif text-5xl lg:text-7xl text-[#2C2724] leading-[1.1] tracking-tight">
                Built on <br className="hidden lg:block"/> conversations.
              </h2>
              <div className="divider-hairline-left w-32 bg-[#DED9D1]" />
              <p className="font-serif text-xl text-[#5C5550] leading-relaxed">
                We designed this space for the people who fill it. From early morning readers and focused students, to old friends reconnecting over warm cups. 
                It's the quiet murmurs, the sudden laughter, and the shared silences that give Mud Cups its soul.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden shadow-[0_20px_40px_rgb(0,0,0,0.06)] group">
                <div className="absolute inset-0 bg-[#E8E4D9]/10 mix-blend-overlay z-10 pointer-events-none" />
                <img 
                  src="/images/gallery3.webp" 
                  alt="Community at Mud Cups"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async" 
                  className="w-full h-full object-cover sepia-[0.15] contrast-[1.05] saturate-[1.05] brightness-[1.02] transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </m.div>
        </div>
      </section>

    </m.div>
  );
}
