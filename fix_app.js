import fs from 'fs';
const text = fs.readFileSync('src/App.tsx', 'utf8');
const fixed = text.replace(/export default function App\(\) \{[\s\S]*?\}\n/, `export default function App() {\n  return (\n    <BrowserRouter>\n      <MainApp />\n    </BrowserRouter>\n  );\n}\n`);
fs.writeFileSync('src/App.tsx', fixed);
