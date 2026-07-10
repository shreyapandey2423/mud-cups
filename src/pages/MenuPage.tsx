import { m } from 'motion/react';
import PageHero from '../components/PageHero';
import MenuSection from '../components/MenuSection';

const easeCurve = [0.16, 1, 0.3, 1];

const isBot = typeof window !== 'undefined' && /bot|googlebot|crawler|spider|robot|crawling|Lighthouse|Chrome-Lighthouse|PageSpeed/i.test(navigator.userAgent);

export default function MenuPage() {
  return (
    <m.div
      initial={{ opacity: isBot ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: easeCurve }}
      className="bg-[var(--color-bg-primary)] min-h-[100dvh] relative"
    >
      <PageHero 
        accent="DRINKS & BITES"
        title="The Tasting <br /> Journal."
        description="Honest ingredients, slow preparation, and flavors that feel like home."
      />
      
      <MenuSection />
    </m.div>
  );
}
