'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiDownload, FiUser, FiCode, FiHeart } from 'react-icons/fi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Your_Name_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="section-padding bg-dark-900 min-h-screen flex items-center">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold"
                variants={itemVariants}
              >
                Hi, I'm{' '}
                <span className="gradient-text">VISHNU</span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl lg:text-3xl text-gray-300 font-light"
                variants={itemVariants}
              >
                Gen AI Developer & Machine Learning Engineer
              </motion.h2>
            </motion.div>

            <motion.p 
              className="text-lg text-gray-400 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Passionate Gen AI Developer from Coimbatore with 1+ years of experience 
              building intelligent systems using LLMs, RAG architectures, and cutting-edge 
              AI technologies. I transform complex business challenges into scalable 
              AI solutions that drive real impact.
            </motion.p>

            <motion.p 
              className="text-lg text-gray-400 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Specialized in Python, TensorFlow, PyTorch, and OpenAI APIs. When I'm not 
              fine-tuning models, I contribute to open-source AI projects and share 
              insights about the future of artificial intelligence.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 py-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">25+</div>
                <div className="text-gray-400 text-sm">AI Models Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">1+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">15+</div>
                <div className="text-gray-400 text-sm">AI Solutions Built</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleResumeDownload}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <FiDownload className="w-5 h-5" />
                Download Resume
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Let's Talk
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Visual Elements */}
          <motion.div 
            className="relative -mt-16 lg:-mt-20"
            variants={itemVariants}
          >
            <div className="relative z-10">
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1 overflow-hidden"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-800 flex items-center justify-center">
                  <img
                    src="/vznu.jpg"
                    alt="VISHNU - Gen AI Developer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log('Image failed to load from /vznu.jpg');
                      e.currentTarget.style.display = 'none';
                      // Show fallback icon
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                    onLoad={() => {
                      console.log('Image loaded successfully from /vznu.jpg');
                    }}
                  />
                  <FiUser className="w-32 h-32 text-primary-400" style={{display: 'none'}} />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 glass p-4 rounded-xl"
              >
                <FiCode className="w-8 h-8 text-primary-400" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 glass p-4 rounded-xl"
              >
                <FiHeart className="w-8 h-8 text-red-400" />
              </motion.div>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
