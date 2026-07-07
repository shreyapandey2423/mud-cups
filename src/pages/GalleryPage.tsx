import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
const gallery001 = '/images/gallery1.jpg';
const gallery002 = '/images/gallery2.jpg';
const gallery003 = '/images/gallery3.jpg';
const gallery004 = '/images/gallery4.jpg';
const gallery005 = '/images/gallery5.jpg';
const gallery006 = '/images/gallery6.jpg';
const gallery007 = '/images/gallery7.jpg';
const gallery008 = '/images/gallery8.jpg';
const gallery009 = '/images/gallery9.jpg';

const originalImages = [
  { src: gallery001 },
  { src: gallery002 },
  { src: gallery003 },
  { src: gallery004 },
  { src: gallery005 },
  { src: gallery006 },
  { src: gallery007 },
  { src: gallery008 },
  { src: gallery009 },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % originalImages.length);
    }
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + originalImages.length) % originalImages.length);
    }
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

  const isPaused = isHovered || selectedIndex !== null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="bg-[#F7F2EB] min-h-screen relative overflow-hidden"
    >
      {/* Extremely subtle radial texture/grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'url("/images/noise.svg")' }}></div>

      <PageHero 
        accent="GALLERY"
        title="Experience Mud Cups"
        description="A glimpse into our ambience, handcrafted spaces, and unforgettable moments."
      />

      <section className="py-20 lg:py-28 relative max-w-[1700px] mx-auto w-full px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="overflow-hidden w-full">
          <div 
            className="flex w-max"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
          {/* We animate from -50% to 0 for left-to-right motion */}
          <div 
            className="flex items-center will-change-transform"
            style={{
              animation: 'marqueeLeftToRight 50s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
              transform: 'translate3d(-50%, 0, 0)' // initial state for the keyframe
            }}
          >
            {/* First Set */}
            <div className="flex gap-[24px] pr-[24px] items-center">
              {originalImages.map((image, index) => (
                <div
                  key={`first-${index}`}
                  onClick={() => setSelectedIndex(index)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedIndex(index); }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View Gallery Image ${index + 1}`}
                  className="relative flex-shrink-0 cursor-zoom-in rounded-[20px] overflow-hidden bg-[#EFE6D8] shadow-[0_4px_16px_rgba(45,36,31,0.06)] group transition duration-300 ease-out hover:shadow-[0_12px_32px_rgba(45,36,31,0.1)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2EB] w-[340px] h-[225px] md:w-[460px] md:h-[305px] lg:w-[560px] lg:h-[375px]"
                >
                  <img 
                    src={image.src} 
                    alt={`Mud Cups Atmosphere ${index + 1}`}
                    className="w-full h-full object-cover object-center transform-gpu transition duration-300 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
                    loading="lazy" decoding="async"
                  />
                </div>
              ))}
            </div>

            {/* Second Set */}
            <div className="flex gap-[24px] pr-[24px] items-center">
              {originalImages.map((image, index) => (
                <div
                  key={`second-${index}`}
                  onClick={() => setSelectedIndex(index)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedIndex(index); }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View Gallery Image ${index + 1}`}
                  className="relative flex-shrink-0 cursor-zoom-in rounded-[20px] overflow-hidden bg-[#EFE6D8] shadow-[0_4px_16px_rgba(45,36,31,0.06)] group transition duration-300 ease-out hover:shadow-[0_12px_32px_rgba(45,36,31,0.1)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2EB] w-[340px] h-[225px] md:w-[460px] md:h-[305px] lg:w-[560px] lg:h-[375px]"
                >
                  <img 
                    src={image.src} 
                    alt={`Mud Cups Atmosphere ${index + 1}`}
                    className="w-full h-full object-cover object-center transform-gpu transition duration-300 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
                    loading="lazy" decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog" aria-modal="true" aria-label="Image lightbox" className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1512]/90 backdrop-blur-lg"
            onClick={handleClose}
          >
            {/* Navigation Buttons */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6 stroke-[1.5]" />
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>

            {/* Selected Image */}
            <div className="relative w-full max-w-5xl max-h-[85vh] px-4 sm:px-16 flex items-center justify-center outline-none" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  src={originalImages[selectedIndex].src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_24px_64px_rgba(0,0,0,0.4)]"
                  alt="Gallery preview"
                />
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
