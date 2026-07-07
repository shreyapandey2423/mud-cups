const fs = require('fs');
let content = fs.readFileSync('src/index.css', 'utf8');

content = content.replace(/transform: translateX\(-50%\);/g, "transform: translate3d(-50%, 0, 0);");
content = content.replace(/transform: translateX\(0%\);/g, "transform: translate3d(0%, 0, 0);");

fs.writeFileSync('src/index.css', content);
