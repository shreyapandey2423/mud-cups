import MudCupsLogo from './MudCupsLogo';
import { motion } from 'motion/react';

import { ArrowRight } from 'lucide-react';
const swiggyLogo = '/images/swiggy.svg';
const zomatoLogo = '/images/zomato.svg';

export default function Offers() {
  return (
    <section
      id="offers"
      className="scroll-mt-24 bg-[#EFE6D8] py-24 lg:py-32 relative border-b border-[#DDD2C2]/40 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,253,249,0.4)_0%,transparent_70%)] rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3 will-change-transform translate-z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Offers Layout - Asymmetrical */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center max-w-[1100px] mx-auto">

          {/* Left Column: Intro & Dine-In Perk */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 text-left space-y-16"
          >
            <div className="space-y-6">
              <span className="text-[11px] font-bold font-mono uppercase tracking-[0.25em] text-[#8B6B4D] flex items-center space-x-3 opacity-90">
                <MudCupsLogo interactive={false} size={14} className="text-[#8B6B4D]" />
                <span>Seasonal Perks</span>
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-[44px] font-semibold text-[#2D241F] tracking-tight leading-[1.12]">
                Exclusive<br />Offers
              </h2>
              <div className="h-[1px] w-16 bg-[#D4C4B4]/60 my-8" />
              <p className="text-[#6A5A4D] text-lg font-normal leading-[1.8] max-w-sm">
                Experience our fresh traditional chai and gourmet menu items with exclusive privileges.
              </p>
            </div>

            {/* Dine-In Perks - Plain Typography */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold font-mono text-[#8B6B4D] uppercase tracking-widest bg-[#FFFDF9]/60 px-4 py-1.5 rounded-full border border-[#D4C4B4]/40 w-fit backdrop-blur-sm will-change-transform translate-z-0">
                Dine-In Benefit
              </span>
              <h3 className="text-2xl font-semibold text-[#2D241F] tracking-tight">
                Authentic Clay-baked Gifting
              </h3>
              <p className="text-base text-[#6A5A4D]/90 font-normal leading-[1.9] max-w-sm">
                Receive a handcrafted biodegradable clay cup with every premium tea and coffee purchase to carry home. Relish the organic clay fragrance (Sondhi Khushboo) with every slow sip.
              </p>
              <p className="text-[11px] font-mono font-semibold text-[#8B6B4D] uppercase tracking-widest pt-4 opacity-80">
                Ongoing Privilege • No Coupon Required
              </p>
            </div>
          </motion.div>

          {/* Right Column: Online Order Featured Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 w-full relative"
          >
            <div className="bg-[#FFFDF9] border border-[#D4C4B4]/40 p-10 sm:p-14 lg:p-16 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(45,36,31,0.08)] relative overflow-hidden group ring-1 ring-white/50">
              {/* Decorative Background Accent */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-[radial-gradient(circle_at_center,#EFE6D8_0%,transparent_70%)] rounded-full blur-3xl opacity-50 pointer-events-none will-change-transform translate-z-0 transition-opacity duration-1000 group-hover:opacity-100" />

              <div className="relative z-10 space-y-12 text-left">
                <div className="space-y-6">
                  <span className="text-[10px] font-bold font-mono text-[#8B6B4D] uppercase tracking-[0.2em] bg-[#F7F2EB]/80 backdrop-blur-sm will-change-transform translate-z-0 px-4 py-1.5 rounded-full border border-[#D4C4B4]/40 flex items-center w-fit shadow-sm">
                    Online Order
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-semibold text-[#2D241F] tracking-tight leading-[1.12]">
                    Order Your<br />Favorites
                  </h3>
                  <div className="h-[1px] w-16 bg-[#D4C4B4]/60 my-6" />
                  <p className="text-lg text-[#6A5A4D] font-normal leading-[1.8] max-w-md">
                    Order directly from your preferred delivery partner.
                  </p>
                </div>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Swiggy Card */}
                  <a
                    href="https://www.swiggy.com/restaurants/mud-cups-electronic-city-bangalore-1218505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start bg-[#F7F2EB]/50 backdrop-blur-sm will-change-transform translate-z-0 border border-[#D4C4B4]/40 p-8 rounded-3xl transition-all duration-500 hover:bg-[#FFFDF9] hover:shadow-[0_12px_40px_-10px_rgba(45,36,31,0.08)] hover:-translate-y-1 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFDF9]"
                  >
                    {/* Swiggy Logo */}
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-[#D4C4B4]/30 flex items-center justify-center mb-6 p-2.5 transition-transform duration-500 group-hover/btn:scale-105">
                      <img src={swiggyLogo} alt="Swiggy" className="w-full h-auto" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                      <span className="hidden font-bold text-[#FC8019] text-sm tracking-tight">SWIGGY</span>
                    </div>
                    <h4 className="text-xl font-semibold text-[#2D241F] tracking-tight mb-2">Swiggy</h4>
                    <p className="text-sm text-[#6A5A4D]/80 font-normal mb-8">Fast Delivery</p>
                    <div className="mt-auto flex items-center space-x-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B6B4D] group-hover/btn:text-[#2D241F] transition-colors">
                      <span>Order on Swiggy</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover/btn:translate-x-1.5" />
                    </div>
                  </a>

                  {/* Zomato Card */}
                  <a
                    href="https://www.zomato.com/bangalore/mud-cups-10-electronic-city-bangalore/order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start bg-[#F7F2EB]/50 backdrop-blur-sm will-change-transform translate-z-0 border border-[#D4C4B4]/40 p-8 rounded-3xl transition-all duration-500 hover:bg-[#FFFDF9] hover:shadow-[0_12px_40px_-10px_rgba(45,36,31,0.08)] hover:-translate-y-1 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFDF9]"
                  >
                    {/* Zomato Logo */}
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-[#D4C4B4]/30 flex items-center justify-center mb-6 p-2.5 transition-transform duration-500 group-hover/btn:scale-105">
                      <img src={zomatoLogo} alt="Zomato" className="w-full h-auto" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                      <span className="hidden font-bold text-[#E23744] text-sm tracking-tight font-serif italic">Zomato</span>
                    </div>
                    <h4 className="text-xl font-semibold text-[#2D241F] tracking-tight mb-2">Zomato</h4>
                    <p className="text-sm text-[#6A5A4D]/80 font-normal mb-8">Order Online</p>
                    <div className="mt-auto flex items-center space-x-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B6B4D] group-hover/btn:text-[#2D241F] transition-colors">
                      <span>Order on Zomato</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover/btn:translate-x-1.5" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
