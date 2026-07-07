const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

content = content.replace(
  /<img\n\s*src="\/images\/hero\.jpg"\n\s*alt="Mud Cups Café"\n\s*fetchPriority="high"\n\s*loading="eager"\n\s*decoding="sync"\n\s*className="absolute inset-0 w-full h-full object-cover object-center opacity-90 contrast-\[1.08\] brightness-\[0.92\] saturate-\[1.1\] sepia-\[0.1\]"\n\s*\/>/g,
  `<motion.img
          src="/images/hero.jpg"
          alt="Mud Cups Café"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90 contrast-[1.08] brightness-[0.92] saturate-[1.1] sepia-[0.1] will-change-transform"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />`
);

fs.writeFileSync('src/components/Hero.tsx', content);
