const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');

// Replace className on outer wrapper to include h-[80px]
content = content.replace(
  /className=\{`fixed top-0 left-0 right-0 z-50 \$\{/g,
  'className={`fixed top-0 left-0 right-0 z-50 h-[80px] ${'
);

// Remove py padding from inner container to enforce exact height, and add h-full
content = content.replace(
  /className="relative z-10 flex items-center justify-between px-6 py-4 md:px-10 md:py-5 max-w-\[1700px\] mx-auto transition-all duration-700"/g,
  'className="relative z-10 flex items-center justify-between h-full px-6 md:px-10 max-w-[1700px] mx-auto transition-all duration-700"'
);

fs.writeFileSync('src/components/Header.tsx', content);
