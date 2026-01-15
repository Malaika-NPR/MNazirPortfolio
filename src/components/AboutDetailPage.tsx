import { motion } from 'motion/react';
import { Heart, Users, Microscope, Sparkles, Plane, PenTool, Coffee as CoffeeIcon, Music2 } from 'lucide-react';
import berkeleyBanquet from 'figma:asset/7cab8293de54eb230bbeec23f77818f4c695c04b.png';
import dataScholarsGroup from 'figma:asset/1d2a574e9fda2dd69be30bae544248fcc6811aee.png';
import biotechLab from 'figma:asset/c5d46c70b087dab041a36afd9e5c349154be5e8c.png';
import fluxRobotics from 'figma:asset/bfe2948a70518be344e943898ad2338a5fca79fb.png';
import auraGradient1 from 'figma:asset/ff2b0bfb7de105f532f3ef88445ae69165ae6c47.png';
import auraGradient2 from 'figma:asset/f5d83ee1e2186978cef0daa48b3e9024045a67bb.png';
import malaikaPhoto from 'figma:asset/7b66dcced4fe0706d2872569ed67e366a5182681.png';
import aboutHeroBackground from 'figma:asset/ff2b0bfb7de105f532f3ef88445ae69165ae6c47.png';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useState } from 'react';
import { SideQuestModal } from './SideQuestModal';

export function AboutDetailPage() {
  const [showSideQuests, setShowSideQuests] = useState(false);
  const [modalQuest, setModalQuest] = useState<string | null>(null);

  const sideQuests = [
    {
      id: "travel",
      title: "Study Abroad + Travelling Europe",
      icon: Plane,
      description: "",
      color: "from-blue-400 to-indigo-500",
      hasDetail: true
    },
    {
      id: "writing",
      title: "Writing",
      icon: PenTool,
      description: "",
      color: "from-purple-400 to-pink-500",
      hasDetail: true
    },
    {
      id: "pottery",
      title: "Pottery",
      icon: Heart,
      description: "",
      color: "from-orange-400 to-red-500",
      hasDetail: true
    },
    {
      id: "caffeine",
      title: "Caffeine Fixes",
      icon: CoffeeIcon,
      description: "",
      color: "from-amber-400 to-orange-500",
      hasDetail: true
    },
    {
      id: "playlists",
      title: "Curating Playlists",
      icon: Music2,
      description: "",
      color: "from-green-400 to-teal-500",
      hasDetail: true
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* About Hero Section */}
      <div className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={aboutHeroBackground} 
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
            About
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
          
          {/* Personal Introduction with Photo */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            {/* Photo Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={malaikaPhoto}
                  alt="Malaika in the Swiss Alps with beautiful mountain backdrop"
                  className="w-full h-auto object-cover object-top"
                  style={{ objectPosition: "center 20%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              </div>
              
              {/* Floating decorative element */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-sm"
              />
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">👋</span>
                <h2 className="text-3xl text-primary font-serif">Hi, I'm Malaika</h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed font-serif text-lg">
                <p>
                  I'm a Data Science & Cognitive Science student at UC Berkeley, passionate about the intersection of technology, health, and human behavior. My work revolves around using data to drive meaningful impact-- whether that's through neurotechnology, precision health, or product innovation.
                </p>
                
                <p>
                  In the past I've worked on EEG research, built data-driven models, and explored how computational methods can enhance our understanding of cognitive processes.
                </p>
                
                <p>
                  When I'm not doing that, you can find me curating niche Spotify playlists, trying out new hobbies, and developing my bay area caffeine fix lists!
                </p>
              </div>

              {/* Side Quest Button */}
              <div className="mt-10">
                <Button
                  onClick={() => setShowSideQuests(!showSideQuests)}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 px-8 py-3 rounded-full font-serif text-lg"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  {showSideQuests ? 'Hide' : 'Explore'} Side Quests
                </Button>
              </div>
            </motion.div>
          </motion.section>

          {/* Side Quests Section */}
          {showSideQuests && (
            <motion.section
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl text-primary font-serif mb-4">Side Quests & Adventures</h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sideQuests.map((quest, index) => (
                  <motion.div
                    key={quest.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card 
                      className={`p-6 h-full transition-all duration-300 ${
                        quest.hasDetail 
                          ? 'hover:shadow-lg cursor-pointer hover:scale-[1.02]' 
                          : 'hover:shadow-lg'
                      }`}
                      onClick={() => quest.hasDetail && setModalQuest(quest.id)}
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${quest.color} flex items-center justify-center mb-4`}>
                        <quest.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg text-primary font-serif mb-3 flex items-center justify-between">
                        {quest.title}
                        {quest.hasDetail && (
                          <span className="text-xs text-muted-foreground">Click to explore</span>
                        )}
                      </h3>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Building with Data Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl text-primary font-serif">Building with Data: Learning, Collaborating, and Growing</h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed font-serif">
                Some of the best learning happens outside the classroom through collaboration! Whether it's debugging code for hours, tackling projects, or bouncing ideas off friends, I've found that growth happens when we challenge and support each other. I love diving into complex problems, optimizing solutions, and continuously learning along the way.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={biotechLab}
                  alt="Data collaboration and teamwork"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 blur-sm"
              />
            </motion.div>
          </motion.section>

          {/* UC Berkeley Community Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl text-primary font-serif">Building Community & Engagement in Tech at UC Berkeley</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed font-serif">
                <p>
                  Being involved at UC Berkeley has been instrumental in shaping my passions. Programs like Data Scholars, CS Scholars, and Women in Computing & Data Science have not only helped me grow but have also opened conversations to make this space more inclusive for others.
                </p>
                
                <p className="text-sm italic text-blue-600 font-serif">
                  (Photos from UC Berkeley EECS Department at the Data Scholars Banquet and the Data Scholars end of year celebration!)
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={berkeleyBanquet}
                    alt="UC Berkeley EECS Data Scholars Banquet"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 blur-sm"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={dataScholarsGroup}
                    alt="Data Scholars End of Year Celebration Group Photo"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    x: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-sm"
                />
              </motion.div>
            </div>
          </motion.section>

          {/* Biotech Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={fluxRobotics}
                  alt="Flux Robotics surgical technology innovation"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-15 blur-sm"
              />
            </motion.div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <Microscope className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl text-primary font-serif">Why Biotech? Using Technology for Life-Changing Impact</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed font-serif">
                <p>
                  My passion for biotechnology began at a young age, shaped by encounters with older patients struggling to access care. Researching healthcare inequities deepened my drive to create solutions.
                </p>
                
                <p>
                  At Flux Robotics, I worked with a startup integrating a robotic arm into surgical settings, an innovation aimed at making procedures more accessible. Seeing technology directly improve patient outcomes reinforced my commitment to leveraging biotech to bridge gaps and build a more equitable healthcare system.
                </p>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-medium text-green-700">Healthcare</div>
                  <div className="text-sm text-green-600">Equity Focus</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-medium text-blue-700">Innovation</div>
                  <div className="text-sm text-blue-600">Driven Solutions</div>
                </div>
              </div>
            </div>
          </motion.section>

          </div>
        </div>
      </div>

      {/* Side Quest Modal */}
      <SideQuestModal 
        questId={modalQuest} 
        isOpen={!!modalQuest} 
        onClose={() => setModalQuest(null)} 
      />
    </div>
  );
}