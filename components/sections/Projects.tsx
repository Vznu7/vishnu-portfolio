'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiCode, FiStar } from 'react-icons/fi'
import Image from 'next/image'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Document Assistant',
      description: 'An intelligent document processing system using RAG architecture with GPT-4, enabling natural language queries over large document collections.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      technologies: ['Python', 'LangChain', 'OpenAI GPT-4', 'Pinecone', 'Streamlit'],
      githubUrl: 'https://github.com/vishnu/ai-document-assistant',
      liveUrl: 'https://ai-docs-assistant.streamlit.app',
      featured: true,
      stats: { stars: 245, forks: 89 }
    },
    {
      id: 2,
      title: 'Multi-Modal AI Chatbot',
      description: 'Advanced chatbot supporting text, image, and voice inputs using GPT-4V, Whisper, and custom fine-tuned models for domain-specific tasks.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      technologies: ['Python', 'OpenAI APIs', 'Whisper', 'FastAPI', 'React'],
      githubUrl: 'https://github.com/vishnu/multimodal-chatbot',
      liveUrl: 'https://multimodal-ai-chat.vercel.app',
      featured: true,
      stats: { stars: 189, forks: 67 }
    },
    {
      id: 3,
      title: 'Code Generation AI',
      description: 'AI-powered code generation tool that converts natural language descriptions into production-ready code across multiple programming languages.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      technologies: ['Python', 'CodeT5', 'Transformers', 'FastAPI', 'Docker'],
      githubUrl: 'https://github.com/vishnu/ai-code-generator',
      liveUrl: 'https://ai-code-gen.herokuapp.com',
      featured: false,
      stats: { stars: 156, forks: 43 }
    },
    {
      id: 4,
      title: 'Sentiment Analysis Dashboard',
      description: 'Real-time sentiment analysis platform for social media monitoring using BERT and custom NLP models with interactive visualizations.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Python', 'BERT', 'TensorFlow', 'Plotly', 'MongoDB'],
      githubUrl: 'https://github.com/vishnu/sentiment-dashboard',
      liveUrl: 'https://sentiment-ai-dashboard.vercel.app',
      featured: false,
      stats: { stars: 134, forks: 52 }
    },
    {
      id: 5,
      title: 'AI Image Generator',
      description: 'Custom image generation platform using Stable Diffusion with fine-tuned models, prompt optimization, and style transfer capabilities.',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop',
      technologies: ['Python', 'Stable Diffusion', 'PyTorch', 'Gradio', 'AWS'],
      githubUrl: 'https://github.com/vishnu/ai-image-generator',
      liveUrl: 'https://ai-image-gen.gradio.app',
      featured: false,
      stats: { stars: 298, forks: 112 }
    },
    {
      id: 6,
      title: 'Smart Learning Platform',
      description: 'AI-enhanced learning management system with personalized content recommendations, automated grading, and intelligent tutoring.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com/vishnu/smart-learning-platform',
      liveUrl: 'https://smart-learn-ai.vercel.app',
      featured: true,
      stats: { stars: 387, forks: 156 }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="section-padding bg-dark-900">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and passion for development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass rounded-xl overflow-hidden card-hover group mx-auto max-w-sm md:max-w-none"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent opacity-60" />
                  
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark-900/80">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
                    >
                      <FiGithub className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-primary-500/20 backdrop-blur-md rounded-full text-primary-400 hover:bg-primary-500/30 transition-colors"
                    >
                      <FiExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 lg:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors text-center md:text-left">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <FiStar className="w-4 h-4" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiCode className="w-4 h-4" />
                        <span>{project.stats.forks}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 line-clamp-3 text-center md:text-left text-sm lg:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-500/10 text-primary-300 rounded text-xs font-medium border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <FiGithub className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="https://github.com/Vznu7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FiGithub className="w-5 h-5" />
              View More Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
