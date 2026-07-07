import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import Testimonials from '../components/Testimonials';

export default function TestimonialsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="bg-[#F7F2EB] min-h-screen"
    >
      <PageHero 
        accent="COMMUNITY"
        title="Guest Experiences"
        description="Real stories, genuine experiences, and honest reviews from our guests."
      />
      <Testimonials />
    </motion.div>
  );
}
