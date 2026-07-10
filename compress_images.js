import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imgDir = path.join(process.cwd(), 'public/images');
const files = fs.readdirSync(imgDir).filter(f => f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.png'));

for (const file of files) {
  const filePath = path.join(imgDir, file);
  const tmpPath = filePath + '.tmp.webp';
  
  sharp(filePath)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(tmpPath)
    .then(() => {
      fs.renameSync(tmpPath, filePath);
      console.log(`Compressed ${file}`);
    })
    .catch(err => console.error(`Error with ${file}:`, err));
}
