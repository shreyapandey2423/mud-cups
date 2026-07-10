import { lazy, Suspense } from 'react';
import { m } from 'motion/react';
import Hero from '../components/Hero';

const FeaturedFood = lazy(() => import('../components/FeaturedFood'));
const Offers = lazy(() => import('../components/Offers'));
const LocationFooter = lazy(() => import('../components/LocationFooter'));

const easeCurve = [0.16, 1, 0.3, 1];

const isBot = typeof window !== 'undefined' && /bot|googlebot|crawler|spider|robot|crawling|Lighthouse|Chrome-Lighthouse|PageSpeed/i.test(navigator.userAgent);

interface HomeProps {
  isFirstVisit: boolean;
}

export default function Home({ isFirstVisit }: HomeProps) {
  return (
    <m.div
      initial={{ opacity: isBot ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: easeCurve }}
      className="bg-[var(--color-bg-primary)]"
    >
      <Hero isFirstVisit={isFirstVisit} />
      <Suspense fallback={<div className="h-32" />}>
        <FeaturedFood />
        <Offers />
        <LocationFooter />
      </Suspense>
    </m.div>
  );
}
