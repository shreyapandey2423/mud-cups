const fs = require('fs');
let content = fs.readFileSync('src/components/MenuSection.tsx', 'utf8');

// Replace `const getFilteredMenu = () => {` with `const filteredMenu = useMemo(() => {`
content = content.replace(
  /const getFilteredMenu = \(\) => {/,
  `const filteredMenu = useMemo(() => {`
);

// We need to find the end of the function to add `}, [searchQuery, activeFilter]);`
// We'll replace the exact return block
content = content.replace(
  /return result;\n  };/,
  `return result;\n  }, [searchQuery, activeFilter]);`
);

// We also need to replace the call `getFilteredMenu()` with `filteredMenu`
content = content.replace(
  /getFilteredMenu\(\)/g,
  `filteredMenu`
);

fs.writeFileSync('src/components/MenuSection.tsx', content);
