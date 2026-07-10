import { m } from 'motion/react';
import { useState, useEffect } from 'react';

interface LoaderProps {
  isMoving?: boolean;
  onHoldComplete?: () => void;
  onMoveComplete?: () => void;
}

const words = ["Warmth.", "Smoke.", "Clay.", "Mud Cups."];
const easeCurve = [0.16, 1, 0.3, 1];

export default function Loader({ isMoving, onHoldComplete, onMoveComplete }: LoaderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isMoving) return;
    
    let timeoutId: NodeJS.Timeout;
    
    if (index < words.length - 1) {
      timeoutId = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 900);
    } else {
      timeoutId = setTimeout(() => {
        onHoldComplete?.();
      }, 1600);
    }
    
    return () => clearTimeout(timeoutId);
  }, [index, isMoving, onHoldComplete]);

  return (
    <m.div
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 1.4, ease: easeCurve }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-bg-primary)] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'url("/images/noise.svg")', backgroundSize: '150px' }} />
      
      {!isMoving && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="overflow-hidden">
            <m.h1 
              key={index}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 1.2, ease: easeCurve }}
              className={`text-display-3 text-[var(--color-text-primary)] ${index === words.length - 1 ? 'italic font-[family:var(--font-serif-italic)] opacity-90' : 'opacity-40'}`}
            >
              {words[index]}
            </m.h1>
          </div>
        </div>
      )}
      
      {isMoving && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          onAnimationComplete={() => setTimeout(() => onMoveComplete?.(), 100)}
        />
      )}
    </m.div>
  );
}
