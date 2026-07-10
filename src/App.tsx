import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, LazyMotion, domAnimation } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';

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
      
      const isBot = /bot|googlebot|crawler|spider|robot|crawling|Lighthouse|Chrome-Lighthouse|PageSpeed/i.test(navigator.userAgent);
      if (isBot) return false;

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
    <LazyMotion features={domAnimation} strict>
    <div className={`min-h-[100dvh] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] overflow-x-hidden font-sans antialiased selection:bg-[#B25A38]/10 selection:text-[var(--color-accent)] ${
      loaderState !== 'done' ? 'h-[100dvh] overflow-hidden' : ''
    }`}>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] rounded-[4px] font-sans text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] shadow-md"
      >
        Skip to main content
      </a>
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
      
      <Header />
      
      <main id="main-content">
        <Suspense fallback={<div className="min-h-[100dvh] flex items-center justify-center bg-[var(--color-bg-primary)]"><div className="w-8 h-8 rounded-full border-2 border-[var(--color-accent)] border-t-transparent animate-spin"></div></div>}>
          <AnimatePresence mode="wait">
            {/* @ts-ignore */}
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
    </LazyMotion>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}
