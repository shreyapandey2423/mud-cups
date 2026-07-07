const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');

// Replace width animation with scale-x
content = content.replace(
  /className=\{`absolute bottom-1 left-1\/2 -translate-x-1\/2 h-\[1px\] transition-all duration-500 ease-\[0\.22,1,0\.36,1\] bg-\[#F5E6D3\] shadow-\[0_1px_4px_rgba\(0,0,0,0\.5\)\] \$\{\n\s*isActive \? 'w-full' : 'w-0 group-hover:w-1\/2'\n\s*\}\`\}/g,
  "className={`absolute bottom-1 left-0 w-full h-[1px] transition-transform duration-500 origin-center ease-[0.22,1,0.36,1] bg-[#F5E6D3] shadow-[0_1px_4px_rgba(0,0,0,0.5)] ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}"
);

fs.writeFileSync('src/components/Header.tsx', content);
