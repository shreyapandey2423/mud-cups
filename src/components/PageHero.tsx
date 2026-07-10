import { m } from 'motion/react';

const easeCurve = [0.16, 1, 0.3, 1];

const isBot = typeof window !== 'undefined' && /bot|googlebot|crawler|spider|robot|crawling|Lighthouse|Chrome-Lighthouse|PageSpeed/i.test(navigator.userAgent);

interface PageHeroProps {
  accent: string;
  title: string;
  description: string;
}

export default function PageHero({ accent, title, description }: PageHeroProps) {
  return (
    <section className="pt-48 lg:pt-64 pb-16 lg:pb-32 px-6 sm:px-12 lg:px-24 max-w-[90rem] mx-auto bg-[var(--color-bg-primary)]">
      <div className="max-w-4xl relative z-10">
        <m.div
          initial={{ opacity: isBot ? 1 : 0, y: isBot ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: easeCurve }}
        >
          <span className="label-editorial mb-12">{accent}</span>
          <h1 className="text-display-2 mb-12">
            {title.split('<br />').map((line, i) => (
              <span key={i} className="block">{line}</span>
            )) || title}
          </h1>
          <div className="divider-hairline-left w-32 mb-12 opacity-50" />
          <p className="body-editorial text-lg lg:text-xl">
            {description}
          </p>
        </m.div>
      </div>
    </section>
  );
}
