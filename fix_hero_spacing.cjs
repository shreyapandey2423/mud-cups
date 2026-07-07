const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Remove py-16 sm:py-32 from section
content = content.replace(
  /className="scroll-mt-24 relative min-h-\[90vh\] sm:min-h-screen flex items-center justify-center overflow-hidden bg-\[#2D241F\] py-16 sm:py-32"/,
  'className="scroll-mt-24 relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#2D241F]"'
);

// Remove pt-12 pb-12 sm:pt-20 from content wrapper
content = content.replace(
  /className="scroll-mt-24 relative z-10 max-w-\[800px\] mx-auto px-6 text-center flex flex-col items-center justify-center pt-12 pb-12 sm:pt-20"/,
  'className="relative z-10 max-w-[800px] mx-auto px-6 text-center flex flex-col items-center justify-center"'
);

fs.writeFileSync('src/components/Hero.tsx', content);
