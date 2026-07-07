import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import MenuSection from '../components/MenuSection';

export default function MenuPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="bg-[#F7F2EB] min-h-screen"
    >
      <PageHero 
        accent="DRINKS & BITES"
        title="Explore Our Menu"
        description="From our crispy rolls to piping hot maggi bowls and freshly assembled pasta dishes, we source real ingredients daily."
      />
      
      {/* 
        MenuSection has its own background styling, 
        we can wrap it or just render it. It currently has py-20 
      */}
      <MenuSection />
    </motion.div>
  );
}
