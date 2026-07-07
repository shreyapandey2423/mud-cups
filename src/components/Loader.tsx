import { motion } from 'motion/react';
import MudCupsLogo from './MudCupsLogo';

interface LoaderProps {
  isMoving?: boolean;
  onHoldComplete?: () => void;
  onMoveComplete?: () => void;
}

export default function Loader({ isMoving, onHoldComplete, onMoveComplete }: LoaderProps) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#F7F2EB]"
    >
      {!isMoving && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ 
              opacity: [0, 0, 1, 1], 
              scale: [0.98, 0.98, 1, 1] 
            }}
            transition={{ 
              duration: 1.45, 
              times: [0, 0.103, 0.586, 1],
              ease: ["linear", "easeOut", "linear"]
            }}
            onAnimationComplete={() => onHoldComplete?.()}
          >
            <MudCupsLogo layoutId="mud-cups-main-logo" interactive={false} className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]" />
          </motion.div>
        </div>
      )}
      
      {isMoving && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          onAnimationComplete={() => onMoveComplete?.()}
        />
      )}
    </motion.div>
  );
}
