const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(
  /import MenuPage from '.\/pages\/MenuPage';\nimport GalleryPage from '.\/pages\/GalleryPage';\nimport TestimonialsPage from '.\/pages\/TestimonialsPage';\nimport VisitUsPage from '.\/pages\/VisitUsPage';/,
  `import { Suspense, lazy } from 'react';\nconst MenuPage = lazy(() => import('./pages/MenuPage'));\nconst GalleryPage = lazy(() => import('./pages/GalleryPage'));\nconst TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));\nconst VisitUsPage = lazy(() => import('./pages/VisitUsPage'));`
);

content = content.replace(
  /<Routes location={location} key={location.pathname}>/,
  `<Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#F7F2EB]"><div className="w-8 h-8 rounded-full border-2 border-[#8B6B4D] border-t-transparent animate-spin" /></div>}>\n            {/* @ts-expect-error React 19 types issue with key on Routes */}\n            <Routes location={location} key={location.pathname}>`
);

content = content.replace(
  /<\/Routes>\n          <\/AnimatePresence>/,
  `</Routes>\n            </Suspense>\n          </AnimatePresence>`
);

// We should fix the double "/* @ts-expect-error" comment
content = content.replace(/\/\* @ts-expect-error.*\n\s*\/\* @ts-expect-error/, '/* @ts-expect-error');

fs.writeFileSync('src/App.tsx', content);
