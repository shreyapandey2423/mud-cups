const fs = require('fs');
let content = fs.readFileSync('src/components/MenuSection.tsx', 'utf8');

// I replaced `</div>\n        {filteredMenu.map` with `</motion.div>\n        {filteredMenu.map` but it was not found, so it didn't do anything. Wait, maybe it did! Let's check where `</motion.div>` is.

content = content.replace(
  /<\/div>\n\s*\{\/\* Spacer before content \*\/\}/g,
  '</motion.div>\n        {/* Spacer before content */}'
);

fs.writeFileSync('src/components/MenuSection.tsx', content);
