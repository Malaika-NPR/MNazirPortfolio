import { motion } from 'motion/react';
import heroBackground from 'figma:asset/1061c5f3492c18e97cc59c7e0fa4eb1d87baa30e.png';

export function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-8 px-8 md:px-12 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white font-serif"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            Malaika Nazir
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-serif" style={{ fontFamily: 'Times New Roman, serif' }}>
                UC Berkeley Student
              </p>
              <span className="text-xl md:text-2xl lg:text-3xl text-white/70">|</span>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-serif" style={{ fontFamily: 'Times New Roman, serif' }}>
                Data Science & Cognitive Science
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-serif" style={{ fontFamily: 'Times New Roman, serif' }}>
                Aspiring Biotech Innovator
              </p>
              <span className="text-xl md:text-2xl lg:text-3xl text-white/70">+</span>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-serif" style={{ fontFamily: 'Times New Roman, serif' }}>
                Many Side Quests
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}