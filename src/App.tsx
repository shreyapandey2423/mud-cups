import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';

const Home = lazy(() => import('./pages/Home'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const VisitUsPage = lazy(() => import('./pages/VisitUsPage'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function MainApp() {
  const [isFirstVisit] = useState(() => {
    if (typeof window !== 'undefined') {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
      }
      
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion) return false;
      const seen = localStorage.getItem('mudcups_loader_seen');
      if (!seen) {
        localStorage.setItem('mudcups_loader_seen', 'true');
        return true;
      }
      return false;
    }
    return false;
  });

  const [loaderState, setLoaderState] = useState<'holding' | 'moving' | 'done'>(
    isFirstVisit ? 'holding' : 'done'
  );

  const location = useLocation();

  useEffect(() => {
    if (loaderState === 'done') {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loaderState]);

  return (
    <div className={`min-h-screen bg-[#F7F2EB] text-[#2D241F] overflow-x-hidden font-sans antialiased selection:bg-[#8B6B4D]/10 selection:text-[#8B6B4D] ${
      loaderState !== 'done' ? 'h-screen overflow-hidden' : ''
    }`}>
      <ScrollToTop />
      
      <AnimatePresence>
        {loaderState !== 'done' && (
          <Loader 
            isMoving={loaderState === 'moving'} 
            onHoldComplete={() => setLoaderState('moving')} 
            onMoveComplete={() => setLoaderState('done')} 
          />
        )}
      </AnimatePresence>
            
      <Header isFirstVisit={isFirstVisit} />
            
      <main>
        <Suspense fallback={<Loader isLoading={true} />}>
          <AnimatePresence mode="wait">
            {/* @ts-expect-error React 19 types issue with key on Routes */}
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home isFirstVisit={isFirstVisit} />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/visit-us" element={<VisitUsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
          
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}
