const fs = require('fs');
let content = fs.readFileSync('src/components/MenuSection.tsx', 'utf8');

content = content.replace(/bg-\[#FCF9F2\]\/60 backdrop-blur-sm will-change-transform translate-z-0/g, "bg-[#FFFDF9]");

fs.writeFileSync('src/components/MenuSection.tsx', content);
