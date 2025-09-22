'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      id: 1,
      title: 'Senior Gen AI Developer',
      company: 'AI Innovations Corp',
      location: 'Bangalore, India',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Led development of enterprise AI solutions using Large Language Models and generative AI. Built RAG systems, fine-tuned models, and deployed AI applications at scale.',
      technologies: ['Python', 'OpenAI GPT-4', 'LangChain', 'Vector DBs', 'AWS'],
      achievements: [
        'Deployed 15+ AI models in production serving 100K+ users',
        'Built RAG system improving query accuracy by 85%',
        'Led AI team of 6 engineers and data scientists'
      ]
    },
    {
      id: 2,
      title: 'Machine Learning Engineer',
      company: 'DataTech Solutions',
      location: 'Mumbai, India',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Developed and deployed ML models for various business use cases. Worked on NLP, computer vision, and recommendation systems using TensorFlow and PyTorch.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes'],
      achievements: [
        'Built recommendation system increasing user engagement by 40%',
        'Deployed 20+ ML models using MLOps best practices',
        'Reduced model inference time by 60% through optimization'
      ]
    },
    {
      id: 3,
      title: 'AI Research Intern',
      company: 'TechStart AI',
      location: 'Remote',
      period: '2020 - 2021',
      type: 'Internship',
      description: 'Researched and implemented deep learning models for NLP tasks. Contributed to open-source AI projects and published research on transformer architectures.',
      technologies: ['Python', 'TensorFlow', 'Hugging Face', 'Jupyter', 'Git'],
      achievements: [
        'Published 2 research papers on transformer models',
        'Contributed to 5+ open-source AI libraries',
        'Built chatbot achieving 92% user satisfaction'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="section-padding bg-dark-800">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My professional journey and the experiences that shaped my career
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-primary-600 hidden lg:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-800 hidden lg:block" />

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="lg:ml-20 glass p-8 rounded-xl card-hover"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FiBriefcase className="w-5 h-5 text-primary-400" />
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.type === 'Full-time' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        
                        <h4 className="text-xl text-primary-400 font-semibold mb-4">
                          {exp.company}
                        </h4>
                        
                        <div className="flex flex-col sm:flex-row gap-4 text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <FiCalendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiMapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-white mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
