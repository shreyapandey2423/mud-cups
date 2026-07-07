const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

content = content.replace(/bg-\[#FFFDF9\]\/90 backdrop-blur-md will-change-transform translate-z-0/g, "bg-[#FFFDF9]");

fs.writeFileSync('src/components/Hero.tsx', content);
