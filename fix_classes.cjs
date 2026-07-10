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

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Fix font-serif duplicates and conflicts
    content = content.replace(/font-serif tracking-normal/g, 'font-serif');
    content = content.replace(/font-sans(.*?)(font-serif)/g, '$1$2');
    content = content.replace(/(font-serif)(.*?)font-sans/g, '$1$2');
    content = content.replace(/font-serif font-serif/g, 'font-serif');
    content = content.replace(/tracking-tight/g, 'tracking-normal'); // Serif looks better normal
    
    // Fix font-mono tracking-widest text-[0.8em] mess
    content = content.replace(/font-sans uppercase tracking-widest text-\[0.8em\] uppercase tracking-\[0.2em\]/g, 'font-sans uppercase tracking-widest text-xs font-semibold');
    content = content.replace(/font-sans uppercase tracking-widest text-\[0.8em\]/g, 'font-sans uppercase tracking-widest text-xs font-semibold');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
