import { motion } from 'motion/react';
import {
  Mail,
  Linkedin,
  MapPin,
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
      location: 'Berkeley, CA',
      period: 'January 2025 – Present',
      achievements: [
        'Designed a standardized data collection workflow to extract, clean, and validate startup founder data, producing a structured dataset of 400+ UC Berkeley spin-offs used for commercialization analysis.',
        'Migrated 1,000+ research disclosure webforms from Drupal to Salesforce by mapping fields and defining structured inputs, reducing processing time by 30% and improving data quality for downstream reporting.'
      ]
    },
    {
      title: 'Product Development Intern',
      company: 'Empower Sleep',
      location: 'Remote',
      period: 'January 2025 – May 2025',
      achievements: [
        'Built a machine learning–assisted sleep risk assessment system that generated patient risk profiles, reducing clinical intake time by 25% by accelerating identification of high-risk cases.',
        'Partnered with clinicians to define and weight screening criteria and developed a dashboard to surface high-risk patients and actionable insights for providers.'
      ]
    },
    {
      title: 'Medical Robotics Intern',
      company: 'Flux Robotics',
      location: 'San Francisco, CA',
      period: 'May 2024 – September 2024',
      achievements: [
        'Developed a calibration framework for an AI-powered surgical robotic system operating under constrained operating-room conditions to align patient anatomy with robotic workflows during surgery.',
        'Led cross-functional research with engineers and surgeons, delivering a comprehensive report on calibration methodologies that reduced procedural complexity by 45%.'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Augene Beauty',
      location: 'Los Angeles, CA',
      period: 'May 2024 – August 2024',
      achievements: [
        'Developed a microbiome modeling pipeline using QIIME2 and Python to transform raw sequencing data into engineered taxa-abundance features and trained ML classifiers to support personalized skincare recommendations.',
        'Ran sentiment analysis on 200+ product reviews and user feedback to evaluate recommendation alignment with customer-reported concerns and conducted a literature review to guide labeling and interpretation.'
      ]
    },
    {
      title: 'Research Assistant',
      company: 'Bishop Lab',
      location: 'Berkeley, CA',
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

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl text-white font-serif"
          >
            Resume
          </motion.h1>
        </div>
      </div>

      <div className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl text-primary font-serif">Malaika Nazir</h1>
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground font-serif">
              <a href="mailto:malaikanazir840@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                malaikanazir840@gmail.com
              </a>
              <span>916-840-4942</span>
              <a
                href="https://www.linkedin.com/in/malaikanazir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Education */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <h2 className="text-2xl font-serif">Education</h2>
            </div>
            <h3 className="font-medium font-serif">University of California, Berkeley</h3>
            <p className="text-primary font-serif">B.A. in Data Science, Cognitive Science</p>
            <Separator className="my-4" />
            <div className="flex flex-wrap gap-2">
              {coursework.map((c, i) => (
                <Badge key={i} variant="secondary" className="font-serif text-xs">
                  {c}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-6">
            <h2 className="text-2xl font-serif mb-4">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium font-serif mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((l, i) => (
                    <Badge key={i}>{l}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium font-serif mb-2">Tools & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((t, i) => (
                    <Badge key={i}>{t}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Experience */}
          <Card className="p-6">
            <h2 className="text-2xl font-serif mb-6">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <div key={i}>
                  {i > 0 && <Separator className="my-6" />}
                  <div className="flex justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="font-medium text-primary font-serif">{exp.title}</h3>
                      <p className="font-serif">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground font-serif">
                      <div>{exp.location}</div>
                      <div>{exp.period}</div>
                    </div>
                  </div>
                  <ul className="mt-3 ml-4 space-y-2">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="text-sm font-serif">
                        • {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          {/* Projects */}
          <Card className="p-6">
            <h2 className="text-2xl font-serif mb-4">Projects</h2>
            {projects.map((p, i) => (
              <div key={i}>
                <h3 className="font-medium text-primary font-serif">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-serif mt-2">
                  {p.description}
                </p>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
