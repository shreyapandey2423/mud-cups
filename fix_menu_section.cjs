const fs = require('fs');

let content = fs.readFileSync('src/components/MenuSection.tsx', 'utf8');

const startTag = '{/* Menu Listings Container */}';
const endTag = '</motion.div>\n    </section>';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex === -1 || endIndex === -1) {
  console.log("Could not find boundaries");
  process.exit(1);
}

let before = content.substring(0, startIndex);
let middle = content.substring(startIndex, endIndex);
let after = content.substring(endIndex);

// replace the middle part with useMemo
const newMiddle = `{useMemo(() => (
        <>
        ${middle}
        </>
      ), [filteredMenu, searchQuery, activeFilter])}\n      `;

fs.writeFileSync('src/components/MenuSection.tsx', before + newMiddle + after);
