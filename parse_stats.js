import fs from 'fs';
const html = fs.readFileSync('stats.html', 'utf8');
let openBraces = 0;
let jsonStr = '';
for(let i=0; i<html.length; i++) {
   const sub = html.substring(i);
   if (sub.startsWith('{"version":2,"tree"')) {
      let count = 0;
      for(let j=0; j<sub.length; j++) {
         if(sub[j] === '{') count++;
         if(sub[j] === '}') count--;
         jsonStr += sub[j];
         if(count === 0 && j > 10) break;
      }
      break;
   }
}
const data = JSON.parse(jsonStr);
const leaves = [];
function traverse(node, path) {
  if (node.children) {
    node.children.forEach(c => traverse(c, path + '/' + node.name));
  } else {
    leaves.push({...node, path: path + '/' + node.name});
  }
}
traverse(data.tree, '');
leaves.sort((a,b) => (b.size || 0) - (a.size || 0));
for(let i=0; i<30; i++) {
   if(leaves[i]) console.log(Math.round((leaves[i].size||0)/1024), "KB", leaves[i].path);
}
