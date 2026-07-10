import { m } from 'motion/react';
import { categories } from '../data/menu';

const easeCurve = [0.16, 1, 0.3, 1];

export default function MenuSection() {
  return (
    <section className="py-32 lg:py-48 bg-[var(--color-bg-primary)]">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <m.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.4, ease: easeCurve }}
            className="lg:col-span-4"
          >
            <div className="sticky top-48 space-y-12">
              <span className="font-sans text-[0.65rem] tracking-[0.25em] text-[#7A736E] uppercase">The Menu</span>
              <h2 className="font-serif text-[clamp(3.5rem,6vw,5rem)] text-[#2C2724] leading-[1.05] tracking-tight">
                A tasting <br /> journal.
              </h2>
              <div className="w-[1px] h-16 bg-[#DED9D1]" />
              <p className="font-serif text-xl text-[#5C5550] leading-relaxed">
                Each item on this list is a study in patience. From the clay in the tandoor to the slow reduction of milk, we prioritize flavor over speed. 
              </p>
            </div>
          </m.div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-48">
            {categories.map((category, idx) => (
              <m.div 
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.4, ease: easeCurve, delay: idx * 0.1 }}
                className="space-y-16"
              >
                <div className="flex items-center space-x-8">
                  <h3 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-[#2C2724] tracking-tight">{category.name}</h3>
                  <div className="flex-1 h-[1px] bg-[#E8E4D9]" />
                </div>
                
                <div className="space-y-12">
                  {category.items.map((item) => (
                    <div key={item.id} className="group flex flex-col sm:flex-row sm:items-baseline justify-between space-y-4 sm:space-y-0 -mx-6 p-6 rounded-[4px] transition-all duration-[800ms] ease-[0.16,1,0.3,1] hover:bg-[#FDFCFB] hover:shadow-[0_12px_40px_rgb(0,0,0,0.03)] hover:-translate-y-[1px]">
                      <div className="flex flex-col">
                        <div className="flex items-center space-x-4">
                          <span className="font-serif text-[#2C2724] text-xl md:text-2xl tracking-tight transition-colors duration-[800ms] group-hover:text-[#110C09]">
                            {item.name}
                          </span>
                          {item.isChefPick && (
                            <span className="font-sans text-[0.55rem] tracking-[0.2em] uppercase text-[#8C7668] border border-[#8C7668]/30 px-2 py-1 rounded-[2px]">
                              Signature
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <span className="font-serif italic text-[#7A736E] text-base md:text-lg mt-3 max-w-lg leading-relaxed">
                            {item.description}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-8 shrink-0 sm:ml-8">
                        {item.priceR && (
                          <div className="flex flex-col items-end">
                            <span className="font-sans text-[0.55rem] tracking-[0.2em] uppercase text-[#7A736E] mb-2">Reg</span>
                            <span className="font-serif text-lg text-[#2C2724]">₹{item.priceR}</span>
                          </div>
                        )}
                        {item.priceL && (
                          <div className="flex flex-col items-end">
                            <span className="font-sans text-[0.55rem] tracking-[0.2em] uppercase text-[#7A736E] mb-2">Lrg</span>
                            <span className="font-serif text-lg text-[#2C2724]">₹{item.priceL}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
