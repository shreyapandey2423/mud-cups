import { motion } from 'motion/react';
import Hero from '../components/Hero';
import FeaturedFood from '../components/FeaturedFood';
import Offers from '../components/Offers';

interface HomeProps {
  isFirstVisit: boolean;
}

export default function Home({ isFirstVisit }: HomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero isFirstVisit={isFirstVisit} />
      <FeaturedFood />
      <Offers />
    </motion.div>
  );
}
