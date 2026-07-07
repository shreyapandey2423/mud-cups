const fs = require('fs');
let content = fs.readFileSync('src/components/MenuSection.tsx', 'utf8');

// replace useEffect scroll listener with framer motion hook
if (!content.includes('useScroll')) {
  content = content.replace(/import \{ motion \} from 'motion\/react';/, "import { motion, useScroll, useTransform } from 'motion/react';");
}

// remove isScrolled state
content = content.replace(/const \[isScrolled, setIsScrolled\] = useState\(false\);\n/, "");

// remove the scroll event listener inside useEffect
content = content.replace(/  useEffect\(\(\) => \{\n    const handleScroll = \(\) => \{\n      const scrolled = window\.scrollY > 250;\n      setIsScrolled\(prev => prev !== scrolled \? scrolled : prev\);\n    \};\n    window\.addEventListener\('scroll', handleScroll, \{ passive: true \}\);\n    return \(\) => window\.removeEventListener\('scroll', handleScroll\);\n  \}, \[\]\);\n/, "");

// Apply useScroll and useTransform
content = content.replace(/  const deferredSearchQuery = useDeferredValue\(searchQuery\);\n/, `  const deferredSearchQuery = useDeferredValue(searchQuery);\n  const { scrollY } = useScroll();\n  const stickyPt = useTransform(scrollY, [0, 250], ['0.5rem', '1rem']);\n  const stickyPb = useTransform(scrollY, [0, 250], ['1.5rem', '1rem']);\n  const stickyBg = useTransform(scrollY, [0, 250], ['rgba(247, 242, 235, 0)', 'rgba(247, 242, 235, 0.8)']);\n  const stickyShadow = useTransform(scrollY, [0, 250], ['0 4px 32px -12px rgba(45,36,31,0)', '0 4px 32px -12px rgba(45,36,31,0.08)']);\n  const stickyBorder = useTransform(scrollY, [0, 250], ['rgba(212, 196, 180, 0)', 'rgba(212, 196, 180, 0.4)']);\n`);

content = content.replace(
  "<div className={`sticky top-0 z-40 transition duration-500 backdrop-blur-xl will-change-transform translate-z-0 ${isScrolled ? 'pt-4 pb-4 bg-[#F7F2EB]/80 shadow-[0_4px_32px_-12px_rgba(45,36,31,0.08)] border-b border-[#D4C4B4]/40' : 'pt-2 pb-6 border-b border-transparent'} -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 mb-4`}>",
  '<motion.div style={{ paddingTop: stickyPt, paddingBottom: stickyPb, backgroundColor: stickyBg, boxShadow: stickyShadow, borderBottomColor: stickyBorder }} className="sticky top-0 z-40 backdrop-blur-xl will-change-transform translate-z-0 border-b -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 mb-4">'
);

content = content.replace(
  "</div>\n        {filteredMenu.map", 
  "</motion.div>\n        {filteredMenu.map"
);

content = content.replace(
  "<div className={`relative w-full shrink-0 group transition duration-300 ${isScrolled ? 'md:w-[380px] lg:w-[440px]' : 'md:w-[420px] lg:w-[480px]'}`}>", 
  '<div className="relative w-full md:w-[380px] lg:w-[440px] shrink-0 group">'
);

content = content.replace(
  "className={`w-full pl-10 pr-4 bg-[#FCF9F2] border border-[#DDD2C2]/50 text-[#2D241F] placeholder-[#6A5A4D]/50 text-[14px] font-medium focus:outline-none focus:border-[#8B6B4D]/40 focus:ring-4 focus:ring-[#8B6B4D]/5 transition duration-300 rounded-[24px] shadow-[0_1px_2px_rgba(45,36,31,0.01)] ${isScrolled ? 'h-[38px]' : 'h-[42px]'}`}",
  'className="w-full h-[40px] pl-10 pr-4 bg-[#FCF9F2] border border-[#DDD2C2]/50 text-[#2D241F] placeholder-[#6A5A4D]/50 text-[14px] font-medium focus:outline-none focus:border-[#8B6B4D]/40 focus:ring-4 focus:ring-[#8B6B4D]/5 transition duration-300 rounded-[24px] shadow-[0_1px_2px_rgba(45,36,31,0.01)]"'
);

fs.writeFileSync('src/components/MenuSection.tsx', content);
