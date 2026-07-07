const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Stop infinite animations on the blobs
content = content.replace(
  /animate={{ opacity: \[0\.3, 0\.45, 0\.3\], scale: \[1, 1\.05, 1\] }}\n\s*transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}/g,
  `initial={{ opacity: 0.3, scale: 1 }}\n          animate={{ opacity: 0.45, scale: 1.05 }}\n          transition={{ duration: 12, ease: "easeOut", once: true }}`
);

content = content.replace(
  /animate={{ opacity: \[0\.2, 0\.35, 0\.2\], scale: \[1, 1\.1, 1\] }}\n\s*transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}/g,
  `initial={{ opacity: 0.2, scale: 1 }}\n          animate={{ opacity: 0.35, scale: 1.1 }}\n          transition={{ duration: 15, ease: "easeOut", delay: 2, once: true }}`
);

content = content.replace(
  /initial={{ scale: 1 }}\n\s*animate={{ scale: 1\.05 }}\n\s*transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}/g,
  `initial={{ scale: 1 }}\n          animate={{ scale: 1.05 }}\n          transition={{ duration: 25, ease: "easeOut" }}`
);

fs.writeFileSync('src/components/Hero.tsx', content);
