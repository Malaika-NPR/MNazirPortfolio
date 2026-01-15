import { motion } from 'motion/react';
import {
  Mail,
  Linkedin,
  Calendar,
  ExternalLink,
  GraduationCap,
  Code,
  Database,
  Wrench,
  FolderOpen
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import resumeHeroBackground from 'figma:asset/ff2b0bfb7de105f532f3ef88445ae69165ae6c47.png';

export function ResumePage() {
  const skills = {
    languages: ['Python', 'SQL', 'R', 'Java', 'JavaScript'],
    tools: [
      'Git',
      'GitHub',
      'Jupyter',
      'Tableau',
      'Salesforce',
      'Visual Studio Code',
      'PyTorch',
      'TensorFlow',
      'SciPy',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Seaborn'
    ]
  };

  const coursework = [
    'Data Structures & Algorithms',
    'Principles and Techniques of Data Science',
    'Probability Theory and Statistics',
    'Data Mining',
    'Artificial Intelligence',
    'Data Engineering',
    'Machine Learning',
    'Advanced Business Analytics'
  ];

  const experiences = [
    {
      title: 'Data Engineering Intern',
      company: 'UC Berkeley, Intellectual Property and Industry Research Alliances',
      period: 'January 2025 – Present',
      achievements: [
        'Designed a standardized data collection workflow to extract, clean, and validate startup founder data, producing a structured dataset of 400+ UC Berkeley spin-offs used for commercialization analysis.',
        'Migrated 1,000+ research disclosure webforms from Drupal to Salesforce by mapping fields and defining structured inputs, reducing processing time by 30% and improving data quality for downstream reporting.'
      ]
    },
    {
      title: 'Product Development Intern',
      company: 'Empower Sleep',
      period: 'January 2025 – May 2025',
      achievements: [
        'Built a machine learning–assisted sleep risk assessment system that generated patient risk profiles, reducing clinical intake time by 25% by accelerating identification of high-risk cases.',
        'Partnered with clinicians to define and weight screening criteria and developed a dashboard to surface high-risk patients and actionable insights for providers.'
      ]
    },
    {
      title: 'Medical Robotics Intern',
      company: 'Flux Robotics',
      period: 'May 2024 – September 2024',
      achievements: [
        'Developed a calibration framework for an AI-powered surgical robotic system operating under constrained operating-room conditions to align patient anatomy with robotic workflows during surgery.',
        'Led cross-functional research with engineers and surgeons, delivering a comprehensive report on calibration methodologies that reduced procedural complexity by 45%.'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Augene Beauty',
      period: 'May 2024 – August 2024',
      achievements: [
        'Developed a microbiome modeling pipeline using QIIME2 and Python to transform raw sequencing data into engineered taxa-abundance features and trained ML classifiers to support personalized skincare recommendations.',
        'Ran sentiment analysis on 200+ product reviews and user feedback to evaluate recommendation alignment with customer-reported concerns and conducted a literature review to guide labeling and interpretation.'
      ]
    },
    {
      title: 'Research Assistant',
      company: 'Bishop Lab',
      period: 'February 2024 – September 2024',
      achievements: [
        'Processed, validated, and derived signal metrics from wearable EEG sleep recordings across 100+ participants, producing analysis-ready datasets for a multi-site computational psychiatry study with Trinity College Dublin.'
      ]
    }
  ];

  const projects = [
    {
      title: 'Iowa Gambling Task – Cognitive Modeling (Python)',
      description:
        'Implemented and evaluated a reinforcement learning–based cognitive model of decision-making under uncertainty using the Iowa Gambling Task framework, applying parameterized learning dynamics and softmax choice functions to simulate behavioral strategies. Conducted parameter tuning (α, λ, θ) and model comparison to assess anxiety-related influences on risk-taking behavior, validating model predictions through behavioral visualization and sensitivity analysis.'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero */}
      <div className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={resumeHeroBackground} alt="" className="w-full h-full object-cover" />
        </div>

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

      <div className="relative overflow-hidden">
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

                <h3 className="text-lg font-medium font-serif">University of California, Berkeley</h3>
                <p className="text-primary font-serif mt-1">
                  B.A. in Data Science, Cognitive Science, Minor in Global Public Health
                </p>

                <Separator className="my-4" />

                <div className="flex flex-wrap gap-2">
                  {coursework.map((course, i) => (
                    <Badge key={i} variant="secondary" className="text-xs font-serif">
                      {course}
                    </Badge>
                  ))}
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
                      {skills.languages.map((lang, i) => (
                        <Badge
                          key={i}
                          className="bg-blue-500/10 text-blue-700 hover:bg-blue-500/20 font-serif"
                        >
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
                      {skills.tools.map((tool, i) => (
                        <Badge
                          key={i}
                          className="bg-purple-500/10 text-purple-700 hover:bg-purple-500/20 font-serif"
                        >
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
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      {i > 0 && <Separator className="mb-8" />}

                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                        <div>
                          <h3 className="text-lg font-medium text-primary font-serif">
                            {exp.title}
                          </h3>
                          <p className="font-medium font-serif mt-0.5">
                            {exp.company}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground text-sm font-serif">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 ml-4 mt-3">
                        {exp.achievements.map((a, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                            <span className="text-sm leading-relaxed font-serif">
                              {a}
                            </span>
                          </li>
                        ))}
                      </ul>
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
                  {projects.map((p, i) => (
                    <div key={i}>
                      <h3 className="font-medium text-primary font-serif">{p.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground font-serif mt-2">
                        {p.description}
                      </p>
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
