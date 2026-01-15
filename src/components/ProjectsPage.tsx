import { motion } from 'motion/react';
import { Brain, Code, Database, Gamepad2, FileText, Home, Puzzle, Shield, Cat, Lightbulb, Mail, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import auraGradient1 from 'figma:asset/ff2b0bfb7de105f532f3ef88445ae69165ae6c47.png';
import auraGradient2 from 'figma:asset/f5d83ee1e2186978cef0daa48b3e9024045a67bb.png';
import mindMapImage from 'figma:asset/82bb56b492e6733713d9920df5d5e22b27c93ca0.png';
import iowaGamblingImage from 'figma:asset/4002aa4cb8f6a348612444602ce2d55ff1711950.png';
import projectsHeroBackground from 'figma:asset/ff2b0bfb7de105f532f3ef88445ae69165ae6c47.png';

import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function ProjectsPage() {
  const featuredProjects = [
    {
      id: 'mindmap',
      title: 'MindMap - Fung Fellowship Final Project',
      emoji: '🧠',
      technologies: ['Python', 'UI/UX', 'Web Design'],
      description: 'MindMap is a map-based journaling platform designed for Berkeley students to track their emotions and experiences at different campus locations. By visualizing significant moments, the platform promotes self-affirmation, stress management, and emotional awareness, helping students gain deeper insights into their well-being.',
      category: 'Health Tech',
      image: mindMapImage,
      imageAlt: 'MindMap platform interface showing brain logo and emotional mapping features'
    },
    {
      id: 'gambling-task',
      title: 'Iowa Gambling Task Reinforcement Learning Model',
      emoji: '🎯',
      technologies: ['Python', 'Machine Learning', 'Data Visualization'],
      description: 'Simulated decision-making behavior under uncertainty using reinforcement learning and softmax choice functions to compare calm vs impulsive player strategies. Tuned learning parameters (α, λ, θ) to test hypotheses about anxiety\'s influence on risk-taking and visualized model predictions against experimental data.',
      category: 'Cognitive Science',
      image: iowaGamblingImage,
      imageAlt: 'Data visualization showing deck choices and cumulative rewards comparison between calm and impulsive players'
    }
  ];

  const otherProjects = [
    {
      title: 'Housing',
      emoji: '🏡',
      technologies: ['Python'],
      description: 'The Housing project involves analyzing housing data to predict sale prices using exploratory data analysis, feature engineering, and regression models. It emphasizes understanding data-driven decision-making in real estate markets.',
      icon: Home,
      category: 'Data Science'
    },
    {
      title: 'Text Analysis of Bloomberg Articles',
      emoji: '📰',
      technologies: ['Python', 'NLP'],
      description: 'This project focuses on natural language processing techniques like tokenization, sentiment analysis, and topic modeling to extract insights from Bloomberg News articles, exploring trends and sentiment in financial reporting.',
      icon: FileText,
      category: 'NLP'
    },
    {
      title: 'Build Your Own World',
      emoji: '🌍',
      technologies: ['Java'],
      description: 'This project challenges students to design and implement a procedurally generated 2D world. It involves using object-oriented programming, randomization, and game development principles to create a unique and interactive virtual environment.',
      icon: Gamepad2,
      category: 'Game Development'
    },
    {
      title: 'Ngordnet',
      emoji: '📊',
      technologies: ['Java'],
      description: 'Ngordnet combines word frequency analysis with WordNet\'s hierarchical relationships to explore the evolution and context of language over time. It focuses integrating data structures like graphs and maps for analyzing trends in N-grams.',
      icon: TrendingUp,
      category: 'Data Structures'
    },
    {
      title: '2048',
      emoji: '🎲',
      technologies: ['Java'],
      description: 'In this project, the core logic for the popular sliding-tile puzzle game 2048 is implemented. The goal is to combine numbered tiles on a grid to create a tile with the number 2048.',
      icon: Puzzle,
      category: 'Game Development'
    },
    {
      title: 'Wordnet',
      emoji: '📚',
      technologies: ['Java'],
      description: 'Wordnet explores the relationships between words, particularly focusing on is-a (hypernym-hyponym) relationships. It also involves analyzing the frequency and usage patterns of words in printed English works.',
      icon: Database,
      category: 'Data Structures'
    },
    {
      title: 'Ants vs. Bees',
      emoji: '🐜🐝',
      technologies: ['Python'],
      description: 'Ants vs. Bees is a strategy-based game similar to Plants vs. Zombies, where players control ants to defend their colony from invading bees. The project focuses on game design, AI for enemies, and player strategies.',
      icon: Shield,
      category: 'Game Development'
    },
    {
      title: 'Cats',
      emoji: '🐱',
      technologies: ['Python'],
      description: 'Cats is a project that measures typing speed and accuracy. It involves creating a program that tests how quickly and correctly users can type, with additional features for correcting typing errors.',
      icon: Cat,
      category: 'Applications'
    },
    {
      title: 'Deque',
      emoji: '🔄',
      technologies: ['Java'],
      description: 'Deque is a data structure project where both linked list and array implementations of a Double Ended Queue (Deque) are built, allowing insertion and removal of elements from both ends.',
      icon: Code,
      category: 'Data Structures'
    },
    {
      title: 'Scheme Interpreter',
      emoji: '🧠',
      technologies: ['Python'],
      description: 'Scheme Interpreter is a project where a subset of the Scheme programming language is implemented. The project involves parsing, evaluating expressions, and managing memory for the interpreter.',
      icon: Brain,
      category: 'Programming Languages'
    },
    {
      title: 'Spam vs. Ham',
      emoji: '📧',
      technologies: ['Python', 'Machine Learning'],
      description: 'Spam vs. Ham is a machine learning project focused on classifying emails as spam or legitimate (ham). The goal is to build a classifier that can accurately distinguish between the two based on text content.',
      icon: Mail,
      category: 'Machine Learning'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Projects Hero Section */}
      <div className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={projectsHeroBackground} 
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
            Projects
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



          {/* Featured Projects */}
          <section className="space-y-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl flex items-center gap-2 font-serif"
            >
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              Featured Projects
            </motion.h2>

            <div className="space-y-16">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="overflow-hidden bg-card/95 backdrop-blur-sm border-2 border-primary/10">
                    <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                      {/* Project Information */}
                      <div className={`p-8 space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{project.emoji}</span>
                            <Badge variant="secondary" className="text-xs">
                              {project.category}
                            </Badge>
                          </div>
                          <h3 className="text-2xl text-primary font-serif">
                            {project.title}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} className="bg-blue-500/10 text-blue-700 hover:bg-blue-500/20">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed font-serif">
                          {project.description}
                        </p>
                      </div>

                      {/* Project Image */}
                      <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                          className={`relative overflow-hidden rounded-none lg:rounded-2xl h-full ${
                            project.id === 'gambling-task' ? 'min-h-[250px]' : 'min-h-[300px]'
                          }`}
                        >
                          <img
                            src={project.image}
                            alt={project.imageAlt}
                            className={`w-full h-full transition-transform duration-500 ${
                              project.id === 'gambling-task' 
                                ? 'object-contain bg-white hover:scale-102' 
                                : 'object-cover hover:scale-105'
                            }`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                        </motion.div>
                        
                        {/* Floating decorative element */}
                        <motion.div
                          animate={{ 
                            y: [0, -8, 0],
                            x: [0, 4, 0]
                          }}
                          transition={{ 
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 2
                          }}
                          className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-20 h-20 bg-gradient-to-br ${
                            project.category === 'Health Tech' 
                              ? 'from-green-400 to-blue-500' 
                              : 'from-purple-400 to-pink-500'
                          } rounded-full opacity-20 blur-sm`}
                        />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Additional Projects */}
          <section className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl flex items-center gap-2 font-serif"
            >
              <Code className="w-6 h-6 text-blue-500" />
              Additional Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="p-6 h-full bg-card/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{project.emoji}</span>
                            <div className="p-3 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {project.category}
                          </Badge>
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="font-medium text-primary group-hover:text-primary/80 transition-colors font-serif">
                            {project.title}
                          </h3>
                          
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          
                          <p className="text-sm text-muted-foreground leading-relaxed font-serif">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Project Statistics */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-medium text-primary">13+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-medium text-primary">6</div>
                <div className="text-sm text-muted-foreground">Programming Languages</div>
              </div>
              <div>
                <div className="text-2xl font-medium text-primary">8</div>
                <div className="text-sm text-muted-foreground">Technology Areas</div>
              </div>
              <div>
                <div className="text-2xl font-medium text-primary">2</div>
                <div className="text-sm text-muted-foreground">Featured Research Projects</div>
              </div>
            </div>
          </motion.section>

          </div>
        </div>
      </div>
    </div>
  );
}