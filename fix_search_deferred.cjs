const fs = require('fs');
let content = fs.readFileSync('src/components/MenuSection.tsx', 'utf8');

// Add useDeferredValue import if not present
if (!content.includes('useDeferredValue')) {
  content = content.replace(/import \{ useState, useEffect, useMemo \} from 'react';/, "import { useState, useEffect, useMemo, useDeferredValue } from 'react';");
}

// Add deferredSearchQuery
content = content.replace(/const \[searchQuery, setSearchQuery\] = useState<string>\(''\);/, "const [searchQuery, setSearchQuery] = useState<string>('');\n  const deferredSearchQuery = useDeferredValue(searchQuery);");

// Use deferredSearchQuery inside useMemo
content = content.replace(/searchQuery\.toLowerCase\(\)/g, "deferredSearchQuery.toLowerCase()");
content = content.replace(/, \[searchQuery, activeFilter\]\);/, ", [deferredSearchQuery, activeFilter]);");

fs.writeFileSync('src/components/MenuSection.tsx', content);
