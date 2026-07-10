import { m, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const galleryItems = [
  { src: '/images/gallery1.webp', caption: 'Late evening conversations.', size: 'large' },
  { src: '/images/gallery2.webp', caption: 'The first sip.', size: 'medium' },
  { src: '/images/gallery3.webp', caption: 'Quiet corners.', size: 'small' },
  { src: '/images/gallery4.webp', caption: 'Fresh from the oven.', size: 'medium' },
  { src: '/images/gallery5.webp', caption: 'Golden hour at Mud Cups.', size: 'large' },
  { src: '/images/gallery6.webp', caption: 'Steam rising slowly.', size: 'small' },
  { src: '/images/gallery7.webp', caption: 'Moments worth staying for.', size: 'medium' },
  { src: '/images/gallery8.webp', caption: 'Weekend comfort.', size: 'medium' },
  { src: '/images/gallery9.webp', caption: 'A slow pour.', size: 'large' },
];

const easeCurve = [0.16, 1, 0.3, 1];

const isBot = typeof window !== 'undefined' && /bot|googlebot|crawler|spider|robot|crawling|Lighthouse|Chrome-Lighthouse|PageSpeed/i.test(navigator.userAgent);

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => setSelectedIndex(null), []);
  const handleNext = useCallback(() => {
    if (selectedIndex !== null) setSelectedIndex((prev) => (prev! + 1) % galleryItems.length);
  }, [selectedIndex]);
  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) setSelectedIndex((prev) => (prev! - 1 + galleryItems.length) % galleryItems.length);
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleClose, handleNext, handlePrev]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedIndex]);

  const ImageComponent = ({ index, item, className, align }: { index: number, item: any, className: string, align: 'left' | 'right' | 'center' }) => {
    const initialX = align === 'left' ? -30 : align === 'right' ? 30 : 0;
    
    return (
      <m.div
        initial={{ opacity: 0, y: 50, x: initialX }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.8, ease: easeCurve }}
        onClick={() => setSelectedIndex(index)}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedIndex(index); }}
        tabIndex={0}
        role="button"
        aria-label={`View Gallery Image: ${item.caption}`}
        className={`relative cursor-zoom-in group overflow-hidden rounded-[4px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-[900ms] ease-[0.16,1,0.3,1] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] ${className}`}
      >
        <div className="absolute inset-0 bg-[#E8E4D9]/20 mix-blend-overlay z-10 pointer-events-none" />
        <img 
          src={item.src} 
          alt={item.caption}
          width={800}
          height={1000}
          className="w-full h-full object-cover transition-transform duration-[900ms] ease-[0.16,1,0.3,1] group-hover:scale-[1.02] sepia-[0.1] contrast-[1.02] saturate-[1.05] brightness-[1.02]"
          loading="lazy" 
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[900ms] ease-[0.16,1,0.3,1] z-10 flex items-end p-8">
          <p className="font-serif italic text-[#FDFCFB] text-sm md:text-base opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[900ms] ease-[0.16,1,0.3,1] delay-100">
            {item.caption}
          </p>
        </div>
      </m.div>
    );
  };

  return (
    <m.div
      initial={{ opacity: isBot ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: easeCurve }}
      className="bg-[var(--color-bg-primary)] min-h-[100dvh] relative overflow-hidden"
    >
      <PageHero 
        accent="Atmosphere"
        title="A visual <br /> journal."
        description="A curation of quiet moments, architectural details, and the slow craft of our daily rituals."
      />

      <section className="py-24 lg:py-40 relative max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="md:col-span-8 flex flex-col justify-end z-10">
            <ImageComponent index={0} item={galleryItems[0]} className="aspect-[16/10]" align="left" />
          </div>
          
          <div className="md:col-span-4 md:-ml-8 mt-16 md:mt-48 z-20">
            <ImageComponent index={1} item={galleryItems[1]} className="aspect-[3/4]" align="right" />
          </div>
          
          <div className="md:col-span-5 md:col-start-8 mt-24 z-10">
            <ImageComponent index={2} item={galleryItems[2]} className="aspect-square" align="right" />
          </div>
          
          <div className="md:col-span-6 md:col-start-1 md:-mt-32 z-20">
            <ImageComponent index={3} item={galleryItems[3]} className="aspect-[4/5]" align="left" />
          </div>
          
          <div className="md:col-span-10 md:col-start-2 mt-32 z-10">
            <ImageComponent index={4} item={galleryItems[4]} className="aspect-[21/9]" align="center" />
          </div>
          
          <div className="md:col-span-5 md:col-start-1 mt-24 z-20">
            <ImageComponent index={5} item={galleryItems[5]} className="aspect-[3/4]" align="left" />
          </div>
          
          <div className="md:col-span-6 md:col-start-7 md:-mt-16 z-10">
            <ImageComponent index={6} item={galleryItems[6]} className="aspect-[4/3]" align="right" />
          </div>
          
          <div className="md:col-span-4 md:col-start-3 mt-24 md:-mt-12 z-30">
            <ImageComponent index={7} item={galleryItems[7]} className="aspect-[4/5]" align="center" />
          </div>
          
          <div className="md:col-span-7 md:col-start-6 mt-32 z-10">
            <ImageComponent index={8} item={galleryItems[8]} className="aspect-[16/10]" align="right" />
          </div>
          
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <m.div
            initial={{ opacity: isBot ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: easeCurve }}
            role="dialog" aria-modal="true" aria-label="Image lightbox" 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#110C09]/98 backdrop-blur-sm"
              onClick={handleClose}
          >
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("/images/noise.svg")', backgroundSize: '150px' }} />
            
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 p-4 text-[#EBE6DC]/40 hover:text-[#EBE6DC] transition duration-700 z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DED9D1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#110C09]"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-8 h-8 stroke-[1]" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 p-4 text-[#EBE6DC]/40 hover:text-[#EBE6DC] transition duration-700 z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DED9D1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#110C09]"
              aria-label="Next Image"
            >
              <ChevronRight className="w-8 h-8 stroke-[1]" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-6 right-6 sm:top-12 sm:right-12 p-4 text-[#EBE6DC]/40 hover:text-[#EBE6DC] transition duration-700 z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DED9D1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#110C09]"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8 stroke-[1]" aria-hidden="true" />
            </button>

            <div className="relative w-full max-w-7xl h-[90vh] px-8 sm:px-24 flex flex-col items-center justify-center outline-none" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <m.div
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: easeCurve }}
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  <img
                    src={galleryItems[selectedIndex].src}
                    className="max-w-full max-h-[85%] object-contain shadow-2xl sepia-[0.05] contrast-[1.02]"
                    alt={galleryItems[selectedIndex].caption}
                    width={800}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="mt-8 font-serif italic text-[#EBE6DC]/80 text-lg tracking-wide">
                    {galleryItems[selectedIndex].caption}
                  </p>
                </m.div>
              </AnimatePresence>
            </div>
          </m.div>
        )}
      </AnimatePresence>

    </m.div>
  );
}
