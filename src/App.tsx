/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import EntryScreen from './components/EntryScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Spaces from './pages/Spaces';
import Materials from './pages/Materials';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import CategoryDetail from './pages/CategoryDetail';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [prevPage, setPrevPage] = useState('');

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;
    setPrevPage(currentPage);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'spaces':
        return <Spaces onNavigate={handleNavigate} />;
      case 'materials':
        return <Materials />;
      case 'partners':
        return <Partners />;
      case 'contact':
        return <Contact />;
      case 'residential':
      case 'commercial':
      case 'hotel':
      case 'bar-lounge':
      case 'workspace':
        return <CategoryDetail categoryId={currentPage} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-luxury-ivory text-luxury-charcoal selection:bg-luxury-gold/30 selection:text-luxury-charcoal">
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <EntryScreen key="entry" onEnter={() => setHasEntered(true)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
            
            <main>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                  {renderPage()}
                </motion.div>
              </AnimatePresence>
            </main>

            <Footer onNavigate={handleNavigate} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
