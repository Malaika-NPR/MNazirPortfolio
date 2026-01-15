import { useState } from 'react';
import { motion } from 'motion/react';
import logo from 'figma:asset/d21fbc597b72fe8c22b8309c76066ef0b58635fc.png';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const pages = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'resume', label: 'RESUME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
    { id: 'linkedin', label: 'LINKEDIN' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b h-[72px]">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="cursor-pointer"
          onClick={() => onPageChange('about')}
        >
          <img 
            src={logo} 
            alt="Malaika Nazir Logo" 
            className="h-16 w-auto"
          />
        </motion.div>
        
        <div className="flex items-center gap-1">
          {pages.map((page, index) => (
            <motion.button
              key={`${page.id}-${index}`}
              onClick={() => {
                if (page.id === 'linkedin') {
                  window.open('https://www.linkedin.com/in/malaikanazir', '_blank');
                } else {
                  onPageChange(page.id);
                }
              }}
              className={`relative px-4 py-2 rounded-lg transition-colors ${
                currentPage === page.id 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentPage === page.id && page.id !== 'linkedin' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-accent rounded-lg"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 text-sm font-medium">{page.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
}