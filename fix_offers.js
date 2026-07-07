const fs = require('fs');
let content = fs.readFileSync('src/components/Offers.tsx', 'utf8');
content = content.replace(
  'rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3',
  'rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3 will-change-transform" style={{ transform: "translate3d(33.333333%, -33.333333%, 0)" }} />{/* '
);
// the replace above is slightly wrong because of the closing quote. let's just use sed.
