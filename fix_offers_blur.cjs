const fs = require('fs');
let content = fs.readFileSync('src/components/Offers.tsx', 'utf8');

content = content.replace(/bg-\[#FFFDF9\]\/60 px-4 py-1.5 rounded-full border border-\[#D4C4B4\]\/40 w-fit backdrop-blur-sm will-change-transform translate-z-0/g, "bg-[#FFFDF9] px-4 py-1.5 rounded-full border border-[#D4C4B4]/40 w-fit");
content = content.replace(/bg-\[#F7F2EB\]\/80 backdrop-blur-sm will-change-transform translate-z-0 px-4 py-1.5 rounded-full border border-\[#D4C4B4\]\/40/g, "bg-[#F7F2EB] px-4 py-1.5 rounded-full border border-[#D4C4B4]/40");
content = content.replace(/bg-\[#F7F2EB\]\/50 backdrop-blur-sm will-change-transform translate-z-0/g, "bg-[#F7F2EB]");

fs.writeFileSync('src/components/Offers.tsx', content);
