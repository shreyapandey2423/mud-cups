import { m } from 'motion/react';
import PageHero from '../components/PageHero';
import LocationFooter from '../components/LocationFooter';

const isBot = typeof window !== 'undefined' && /bot|googlebot|crawler|spider|robot|crawling|Lighthouse|Chrome-Lighthouse|PageSpeed/i.test(navigator.userAgent);

export default function VisitUsPage() {
  return (
    <m.div
      initial={{ opacity: isBot ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[var(--color-bg-primary)] min-h-[100dvh] relative"
    >
      <PageHero 
        accent="LOCATION"
        title="Find Mud Cups"
        description="Step away from the noise. We are located in the heart of Electronic City, ready to pour you a fresh cup."
      />
      <div className="-mt-16 lg:-mt-24">
        <LocationFooter hideLocation={false} />
      </div>
    </m.div>
  );
}
