import { m } from 'motion/react';
import { MapPin, Phone, Instagram, Navigation } from 'lucide-react';
import { useState } from 'react';

interface LocationFooterProps {
  hideLocation?: boolean;
}

const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1945.1917637845778!2d77.6749977!3d12.8251213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6de42767eb2d%3A0xc3419e1c313a436a!2sMud%20cups!5e0!3m2!1sen!2sus!4v1714488319694!5m2!1sen!2sus";

const easeCurve = [0.16, 1, 0.3, 1];

export default function LocationFooter({ hideLocation = false }: LocationFooterProps) {
  const [loadIframe, setLoadIframe] = useState(false);

  if (hideLocation) return null;

  return (
    <div className="bg-[var(--color-bg-primary)] relative">
      <section id="location" aria-labelledby="location-heading" className="py-24 lg:py-32 relative z-20">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
            
            <m.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.6, ease: easeCurve }}
              className="lg:col-span-5 space-y-20 lg:space-y-24 pt-8"
            >
              <div className="space-y-12">
                <span className="font-sans text-[0.65rem] tracking-[0.25em] text-[var(--color-text-secondary)] uppercase">
                  Visit Us
                </span>
                
                <div className="space-y-6">
                  <h2 id="location-heading" className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-[var(--color-text-primary)]">
                    Your neighborhood retreat.
                  </h2>
                  <p className="font-serif text-xl text-[var(--color-text-secondary)] italic">
                    Just a few minutes away from your next favourite conversation.
                  </p>
                </div>
              </div>

              <div className="space-y-16">
                
                {/* Location */}
                <div className="flex gap-6 group">
                  <MapPin className="w-5 h-5 mt-1 text-[var(--color-text-secondary)] stroke-[1.5]" aria-hidden="true" />
                  <div className="space-y-6">
                    <address className="font-serif text-xl text-[var(--color-text-primary)] leading-relaxed not-italic">
                      Ananth Nagar Phase 1, Phase 2<br />
                      Kammasandra, Electronic City<br />
                      Bengaluru, Karnataka 560100
                    </address>
                    <a 
                      href="https://maps.google.com/?q=Mud+cups+Ananth+Nagar+Bengaluru" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Get Directions to Mud Cups on Google Maps"
                      className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-text-primary)] border-b border-[var(--color-text-primary)]/20 pb-2 hover:border-[var(--color-text-primary)] transition-colors duration-500"
                    >
                      <span>Get Directions</span>
                      <Navigation className="w-3 h-3 transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="pl-11 space-y-8">
                  <h3 className="font-sans text-[0.65rem] tracking-[0.25em] text-[var(--color-text-secondary)] uppercase">Hours</h3>
                  <div className="space-y-4 max-w-[280px]">
                    <div className="flex items-end justify-between border-b border-[var(--color-border-light)] pb-4">
                      <span className="font-serif italic text-[1.35rem] text-[var(--color-text-primary)] leading-none">Monday – Sunday</span>
                      <span className="font-sans text-xs font-medium text-[var(--color-text-secondary)] tracking-widest uppercase">3 PM – 11 PM</span>
                    </div>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="pl-11 pt-8 space-y-6">
                  <h3 className="font-sans text-[0.65rem] tracking-[0.25em] text-[var(--color-text-secondary)] uppercase">Contact</h3>
                  <div className="flex flex-col gap-4">
                    <a 
                      href="tel:+918105457694" 
                      aria-label="Call Mud Cups at +91 81054 57694"
                      className="group flex items-center justify-between py-4 border-b border-[var(--color-border-light)] hover:border-[var(--color-text-primary)] transition-colors duration-500"
                    >
                      <span className="font-serif text-xl text-[var(--color-text-primary)]">+91 81054 57694</span>
                      <Phone className="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-500" aria-hidden="true" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Follow Mud Cups on Instagram"
                      className="group flex items-center justify-between py-4 border-b border-[var(--color-border-light)] hover:border-[var(--color-text-primary)] transition-colors duration-500"
                    >
                      <span className="font-serif text-xl text-[var(--color-text-primary)]">Follow on Instagram</span>
                      <Instagram className="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-500" aria-hidden="true" />
                    </a>
                  </div>
                </div>

              </div>
            </m.div>

            <m.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "20%" }}
              onViewportEnter={() => setLoadIframe(true)}
              transition={{ duration: 1.8, ease: easeCurve }}
              className="lg:col-span-7 h-full flex flex-col justify-center"
            >
              <div className="w-full aspect-[4/5] lg:aspect-auto lg:h-[85vh] relative group overflow-hidden rounded-[8px] shadow-[0_20px_40px_rgb(0,0,0,0.08)] bg-[#E8E4D9]">
                {loadIframe ? (
                  <iframe 
                    src={GOOGLE_MAPS_EMBED_URL}
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mud Cups Location Map on Google Maps"
                    className="absolute inset-0 w-full h-full object-cover sepia-[0.3] contrast-[1.05] grayscale-[0.2] transition-all duration-[1.5s] ease-[0.16,1,0.3,1] opacity-90 group-hover:sepia-[0.1] group-hover:grayscale-0 group-hover:opacity-100"
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-[var(--color-text-secondary)] opacity-50">
                    <MapPin className="w-8 h-8 mb-4 stroke-[1.2]" aria-hidden="true" />
                    <span className="font-sans text-xs uppercase tracking-[0.2em]">Loading Map...</span>
                  </div>
                )}
                <div className="absolute inset-0 border border-black/5 rounded-[8px] pointer-events-none" />
              </div>
              <m.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: easeCurve }}
                className="mt-16 text-center lg:text-right"
              >
                <p className="font-serif italic text-2xl lg:text-4xl text-[var(--color-text-primary)]">
                  The kettle is already on.
                </p>
              </m.div>
            </m.div>

          </div>
        </div>
      </section>
    </div>
  );
}
