const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');

// replace useEffect scroll listener with framer motion hook if not present
if (!content.includes('useScroll')) {
  content = content.replace(/import \{ motion, AnimatePresence \} from 'motion\/react';/, "import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';");
}

// remove isAtTop state
content = content.replace(/const \[isAtTop, setIsAtTop\] = useState\(true\);\n/, "");

// remove the scroll event listener inside useEffect
content = content.replace(/  useEffect\(\(\) => \{\n    const handleScroll = \(\) => \{\n      const atTop = window\.scrollY <= 40;\n      setIsAtTop\(prev => prev !== atTop \? atTop : prev\);\n    \};\n    window\.addEventListener\('scroll', handleScroll, \{ passive: true \}\);\n    handleScroll\(\);\n    return \(\) => window\.removeEventListener\('scroll', handleScroll\);\n  \}, \[\]\);\n/, "");

content = content.replace(/const isScrolledOrOpen = !isAtTop \|\| isOpen;/, "");

// Use framer motion values for the header background
content = content.replace(/  const navigate = useNavigate\(\);\n/, `  const navigate = useNavigate();\n  const { scrollY } = useScroll();\n  const headerBg = useTransform(scrollY, [0, 40], ['rgba(32, 24, 20, 0.18)', 'rgba(32, 24, 20, 0.6)']);\n  const activeHeaderBg = isOpen ? 'rgba(32, 24, 20, 0.95)' : headerBg;\n`);

// apply motion values
content = content.replace(/backgroundColor: isScrolledOrOpen \? 'rgba\(32, 24, 20, 0\.6\)' : 'rgba\(32, 24, 20, 0\.18\)',/g, "backgroundColor: activeHeaderBg,");

fs.writeFileSync('src/components/Header.tsx', content);
