const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Replace everything inside the background system
const bgSystemRegex = /\{\/\* 1\. LAYERED BACKGROUND SYSTEM \([^)]+\) \*\/\}([\s\S]*?)\{\/\* 2\. HERO CONTENT AREA \*\/\}/m;

const newBgSystem = `{/* 1. LAYERED BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#2D241F]">
        <img
          src="/images/hero.jpg"
          alt="Mud Cups Café"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,.28), rgba(0,0,0,.18), rgba(0,0,0,.38))' }} 
        />
      </div>

      {/* 2. HERO CONTENT AREA */}`;

content = content.replace(bgSystemRegex, newBgSystem);

// Replace Badge
content = content.replace(
  /className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-\[#FFFDF9\] border border-\[#FFFDF9\]\/20 text-\[10px\] sm:text-\[11px\] font-bold font-mono uppercase tracking-\[0\.2em\] text-\[#8B6B4D\] shadow-\[0_4px_16px_rgba\(0,0,0,0\.25\)\]"/,
  'className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-[#D4AF37] shadow-sm"'
);

// Replace Heading
content = content.replace(
  /className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-\[#FFFDF9\] tracking-tight leading-\[1\.1\] font-sans max-w-\[600px\] mx-auto mb-6 sm:mb-8 drop-shadow-\[0_4px_24px_rgba\(26,20,18,0\.7\)\]"/,
  'className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] font-sans max-w-[650px] mx-auto mb-6 text-center drop-shadow-md"'
);

// Replace Description
content = content.replace(
  /className="text-base sm:text-lg text-\[#F7F2EB\] leading-\[2\.35\] font-normal max-w-\[500px\] mx-auto drop-shadow-\[0_2px_16px_rgba\(26,20,18,0\.8\)\]"/,
  'className="text-base sm:text-lg text-white/95 leading-[1.8] font-normal max-w-[560px] mx-auto text-center"'
);

fs.writeFileSync('src/components/Hero.tsx', content);
