import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import LocationFooter from '../components/LocationFooter';

export default function VisitUsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="bg-[#F7F2EB] min-h-[100dvh]"
    >
      <PageHero 
        accent="LOCATION"
        title="Find Mud Cups"
        description="Step into our quiet, warm, Scandinavian-inspired café environment in Electronic City."
      />
      <LocationFooter hideFooter={true} />
    </motion.div>
  );
}
