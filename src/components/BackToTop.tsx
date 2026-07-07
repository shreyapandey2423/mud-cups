import React from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useState } from 'react';

const BackToTop = function BackToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeVisible = latest > 600;
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
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center bg-[#8B6B4D]/90 backdrop-blur-sm will-change-transform translate-z-0 hover:bg-[#8B6B4D] text-[#FFFDF9] rounded-full shadow-[0_4px_20px_rgba(139,107,77,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(139,107,77,0.4)] transition duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8B6B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F2EB]"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
export default React.memo(BackToTop);
