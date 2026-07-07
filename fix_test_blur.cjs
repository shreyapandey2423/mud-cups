const fs = require('fs');
let content = fs.readFileSync('src/components/Testimonials.tsx', 'utf8');

content = content.replace("bg-[#F7F2EB]/60 px-3 py-1.5 rounded-full border border-[#D4C4B4]/40 backdrop-blur-sm will-change-transform translate-z-0", "bg-[#F7F2EB] px-3 py-1.5 rounded-full border border-[#D4C4B4]/40");

fs.writeFileSync('src/components/Testimonials.tsx', content);
