import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { AboutPage } from './components/AboutPage';
import { AboutDetailPage } from './components/AboutDetailPage';
import { ResumePage } from './components/ResumePage';
import { ProjectsPage } from './components/ProjectsPage';
import { FreshContactPage } from './components/FreshContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Scroll to top immediately when changing pages
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <AboutPage />;
      case 'about':
        return <AboutDetailPage />;
      case 'resume':
        return <ResumePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <FreshContactPage />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          onAnimationComplete={() => window.scrollTo(0, 0)}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="border-t bg-background/80 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">Made with ❤️ by Malaika Nazir</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}