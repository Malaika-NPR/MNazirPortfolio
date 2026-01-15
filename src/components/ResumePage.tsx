import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, Calendar, ExternalLink, GraduationCap, Code, Database, Wrench, FolderOpen } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import resumeHeroBackground from 'figma:asset/ff2b0bfb7de105f532f3ef88445ae69165ae6c47.png';

export function ResumePage() {
  const skills = {
    languages: ['Python', 'R', 'SQL', 'Java', 'Scheme'],
    tools: ['Git', 'GitHub', 'Jupyter', 'Tableau', 'Visual Studio Code', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow']
  };

  const coursework = [
    'Data Structures & Algorithms',
    'Principles and Techniques of Data Science',
    'Probability Theory and Statistics',
    'Data Mining',
    'Artificial Intelligence',
    'Data Engineering',
    'Machine Learning',
    'Computational Modeling'
  ];

  const experiences = [
    {
      title: 'Data Engineering Intern',
      company: 'UC Berkeley, Intellectual Property and Industry Research Alliances',
      location: 'Berkeley, CA',
      period: 'January 2025 – Present',
      achievements: [
        'Migrated legacy research disclosure webforms from Drupal to Salesforce using Java and HTML, reducing processing time by 20% and improving faculty and industry collaboration workflows.',
        'Developed and maintained Salesforce dashboards to track and protect IP licensing and commercialization data across 1,000+ active disclosures and startups.'
      ]
    },
    {
      title: 'Product Development Intern',
      company: 'Empower Sleep',
      location: 'Remote',
      period: 'January 2025 – May 2025',
      achievements: [
        'Built a personalized sleep health assessment system using large language models (LLMs) and machine learning to generate structured risk profiles, increasing clinical intake by 20%.',
        'Collaborated with clinicians to define and weight risk domains, and developed a dashboard to deliver insights to providers.'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Augene Beauty',
      location: 'Los Angeles, CA',
      period: 'May 2024 – August 2024',
      achievements: [
        'Developed a prototype predictive platform that modeled and visualized microbiome data with Python pipelines to generate personalized skincare recommendations, supporting product development.',
        'Analyzed customer behavior data to identify product development opportunities and optimize marketing strategies.'
      ]
    },
    {
      title: 'Medical Robotics Intern',
      company: 'Flux Robotics',
      location: 'San Francisco, CA',
      period: 'May 2024 – November 2024',
      achievements: [
        'Developed an image calibration strategy for an AI-driven robotic arm, integrating fluoroscopy images with 3D CT scans to enhance surgical precision and efficiency.',
        'Led cross-functional research with engineers and surgeons, delivering a comprehensive report on calibration methodologies that reduced procedural complexity by 45%.'
      ]
    },
    {
      title: 'Branding Strategy & Business Analytics Intern',
      company: 'Beats By Dre',
      location: 'Culver City, CA',
      period: 'August 2023 – November 2023',
      achievements: [
        'Recruited over 100 Gen Z participants and assessed the effectiveness of social media strategies through surveys, interviews, and multiple feedback sessions.',
        'Conducted data wrangling and statistical analysis in R and Excel to perform competitor benchmarking and uncover consumer trends and sentiment.',
        'Delivered strategic recommendations based on research insights and data analysis guiding product and branding decisions.'
      ]
    }
  ];

  const projects = [
    {
      title: 'Iowa Gambling Task Reinforcement Learning Model (Python)',
      description: 'Simulated decision-making uncertainty behavior under uncertainty using reinforcement learning and softmax choice functions to compare calm vs impulsive player strategies. Tuned learning parameters (α, λ, θ) to test hypotheses about anxiety\'s influence on risk-taking and visualized model predictions against experimental data.'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Resume Hero Section */}
      <div className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={resumeHeroBackground} 
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
            Resume
          </motion.h1>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-gradient-to-br from-orange-100 via-orange-50 to-orange-100" />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <div className="pt-16 pb-12">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <h1 className="text-4xl lg:text-5xl text-primary font-serif">Malaika Nazir</h1>
              
              <div className="flex flex-wrap justify-center gap-6 text-muted-foreground font-serif">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:malaikanazir840@gmail.com" className="hover:text-primary transition-colors">
                    malaikanazir840@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span>916-840-4942</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <a 
                    href="https://www.linkedin.com/in/malaikanazir" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    LinkedIn
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-6 bg-card/90 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                </div>
                <h2 className="text-2xl font-serif">Education</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                  <div>
                    <h3 className="text-lg font-medium font-serif">University of California, Berkeley</h3>
                    <p className="text-primary font-serif">B.A. in Data Science, Cognitive Science</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground font-serif">
                    <MapPin className="w-4 h-4" />
                    <span>Berkeley, CA</span>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-3 font-serif">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course, index) => (
                      <Badge key={index} variant="secondary" className="text-xs font-serif">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 bg-card/90 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Code className="w-5 h-5 text-green-500" />
                </div>
                <h2 className="text-2xl font-serif">Technical Skills</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-4 h-4 text-blue-500" />
                    <h3 className="font-medium font-serif">Languages:</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((lang, index) => (
                      <Badge key={index} className="bg-blue-500/10 text-blue-700 hover:bg-blue-500/20 font-serif">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="w-4 h-4 text-purple-500" />
                    <h3 className="font-medium font-serif">Tools & Libraries:</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool, index) => (
                      <Badge key={index} className="bg-purple-500/10 text-purple-700 hover:bg-purple-500/20 font-serif">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Experience */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-6 bg-card/90 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-orange-500" />
                </div>
                <h2 className="text-2xl font-serif">Professional Experience</h2>
              </div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {index > 0 && <Separator className="mb-8" />}
                    
                    <div className="space-y-3">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                        <div>
                          <h3 className="text-lg font-medium text-primary font-serif">{exp.title}</h3>
                          <p className="font-medium font-serif">{exp.company}</p>
                        </div>
                        <div className="flex flex-col lg:items-end gap-1 text-muted-foreground text-sm font-serif">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 ml-4">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm leading-relaxed font-serif">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.section>

          {/* Projects */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-6 bg-card/90 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <FolderOpen className="w-5 h-5 text-red-500" />
                </div>
                <h2 className="text-2xl font-serif">Projects</h2>
              </div>
              
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-medium text-primary font-serif">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground font-serif">{project.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}