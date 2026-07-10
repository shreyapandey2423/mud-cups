import React from "react";
import { m, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useState } from 'react';

const BackToTop = function BackToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeVisible = latest > 800;
    if (shouldBeVisible !== isVisible) {
      setIsVisible(shouldBeVisible);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center bg-[#2C2724] text-[#FDFCFB] rounded-full hover:bg-[#1A1614] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-[700ms] ease-[0.16,1,0.3,1] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C7668] focus-visible:ring-offset-2"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 stroke-[1.2]" aria-hidden="true" />
        </m.button>
      )}
    </AnimatePresence>
  );
}

export default React.memo(BackToTop);
