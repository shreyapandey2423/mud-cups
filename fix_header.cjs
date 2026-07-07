const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');

// Replace handleScroll threshold to 40
content = content.replace(/window\.scrollY <= 15/, 'window.scrollY <= 40');

// We want to remove the logic that switches text colors based on `isScrolledOrOpen`
// because the user provided a single set of light colors for the navigation.

fs.writeFileSync('src/components/Header2.tsx', content);
