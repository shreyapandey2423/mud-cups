const fs = require('fs');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');

const replacements = {
  '#F7F2EB': '#F8F3EA',
  '#EFE6D8': '#EFE3D1',
  '#FFFDF9': '#FFF9F2',
  '#2D241F': '#2F2218',
  '#6A5A4D': '#66564A',
  '#8B6B4D': '#A65A2E',
  '#B99872': '#C98A4A',
  '#A67C52': '#C98A4A',
  '#5A4332': '#4B2E1E',
  '#DDD2C2': '#DCC8B2',
  '#D4C4B4': '#DCC8B2',
  'rounded-\\[16px\\]': 'rounded-[24px]',
  'rounded-\\[20px\\]': 'rounded-[24px]',
  'rounded-2xl': 'rounded-[24px]',
  'rounded-3xl': 'rounded-[24px]',
  'font-mono': 'font-sans uppercase tracking-widest text-[0.8em]', // replacing mono with clean sans
};

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace hex colors (case insensitive)
    for (const [key, value] of Object.entries(replacements)) {
        const regex = new RegExp(key, 'gi');
        content = content.replace(regex, value);
    }
    
    // Convert headings to font-serif
    content = content.replace(/text-4xl/g, 'text-4xl font-serif tracking-normal');
    content = content.replace(/text-5xl/g, 'text-5xl font-serif tracking-normal');
    content = content.replace(/text-6xl/g, 'text-6xl font-serif tracking-normal');
    content = content.replace(/text-7xl/g, 'text-7xl font-serif tracking-normal');
    content = content.replace(/text-3xl/g, 'text-3xl font-serif tracking-normal');
    
    // Make shadows soft
    content = content.replace(/shadow-\[0_.*?\]/g, 'shadow-[0_20px_50px_rgba(0,0,0,0.08)]');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
