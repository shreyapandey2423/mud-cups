import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
const logoImg = '/images/mud-cups-logo.jpg';

interface MudCupsLogoProps {
  className?: string;
  size?: number; // Base size if needed, though we will rely on className for responsive sizes now
  interactive?: boolean; // We might want to disable interaction on the loading screen? The prompt says "Make the logo interactive. When the user clicks the logo..."
  layoutId?: string;
}

export default function MudCupsLogo({ className = '', size, interactive = true, layoutId }: MudCupsLogoProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleOpen = () => {
    if (interactive) setIsOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (interactive && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.img
            src={logoImg}
            alt="Mud Cups Logo Enlarged"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-[160px] md:w-[190px] lg:w-[220px] h-auto object-contain drop-shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.div
        layoutId={layoutId}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className={`relative shrink-0 flex items-center justify-center ${interactive ? 'cursor-pointer' : ''} ${className}`}
        style={size ? { height: size, width: size } : {}}
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        tabIndex={interactive ? 0 : -1}
        role={interactive ? 'button' : 'img'}
        aria-label="Mud Cups Logo"
      >
        <motion.img
          src={logoImg}
          alt="Mud Cups Logo"
          className="w-full h-full object-contain"
          whileHover={interactive ? { scale: 1.03 } : {}}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        />
      </motion.div>
      {typeof window !== 'undefined' && createPortal(modalContent, document.body)}
    </>
  );
}
