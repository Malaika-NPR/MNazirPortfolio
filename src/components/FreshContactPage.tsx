import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import auraGradient1 from 'figma:asset/ff2b0bfb7de105f532f3ef88445ae69165ae6c47.png';
import auraGradient2 from 'figma:asset/f5d83ee1e2186978cef0daa48b3e9024045a67bb.png';
import contactHeroBackground from 'figma:asset/ff2b0bfb7de105f532f3ef88445ae69165ae6c47.png';

export function FreshContactPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Contact Hero Section */}
      <div className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={contactHeroBackground} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white font-serif text-center"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            Contact
          </motion.h1>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="relative overflow-hidden">
        {/* Colorful Aura Backgrounds */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-96 h-96 opacity-30">
            <img src={auraGradient1} alt="" className="w-full h-full object-cover blur-3xl" />
          </div>
          <div className="absolute bottom-20 right-20 w-80 h-80 opacity-25">
            <img src={auraGradient2} alt="" className="w-full h-full object-cover blur-3xl" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 opacity-20">
            <img src={auraGradient1} alt="" className="w-full h-full object-cover blur-3xl" />
          </div>
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="relative z-10 pt-16 pb-12">
          <div className="max-w-4xl mx-auto px-6 space-y-16">

            {/* Contact Information Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl text-primary font-serif">Let's Connect</h2>
                <p className="text-muted-foreground text-lg font-serif max-w-2xl mx-auto">
                  Interested in discussing opportunities in data science, cognitive science, and biotech innovation? Let's connect and explore how we can collaborate.
                </p>
              </div>

            {/* Contact Actions - Horizontal Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            >
              <a 
                href="mailto:malaikanazir840@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-serif text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                </svg>
                malaikanazir840@gmail.com
              </a>
              
              <a 
                href="https://linkedin.com/in/malaikanazir"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 font-serif text-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </motion.div>
          </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}