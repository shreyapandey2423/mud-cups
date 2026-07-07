const fs = require('fs');
let content = fs.readFileSync('src/components/MenuSection.tsx', 'utf8');

content = content.replace(
  /<motion\.div\n\s*key=\{item\.id\}\n\s*initial=\{\{ opacity: 0 \}\}\n\s*whileInView=\{\{ opacity: 1 \}\}\n\s*viewport=\{\{ once: true \}\}\n\s*transition=\{\{ duration: 0\.4, delay: index \* 0\.02 \}\}/g,
  '<div key={item.id}'
);

content = content.replace(
  /<\/div>\n\s*<\/motion\.div>\n\s*\)\)}/g,
  '</div>\n                      </div>\n                    ))}'
);

fs.writeFileSync('src/components/MenuSection.tsx', content);
