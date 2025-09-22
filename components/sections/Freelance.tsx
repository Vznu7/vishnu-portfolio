'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiSend, FiCheck, FiAlertCircle, FiDollarSign, FiClock, FiUsers } from 'react-icons/fi'

const Freelance = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectIdea: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', projectIdea: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    {
      icon: FiDollarSign,
      title: 'AI Consulting',
      description: 'Strategic AI implementation guidance and feasibility analysis for your business needs'
    },
    {
      icon: FiClock,
      title: 'Rapid Prototyping',
      description: 'Quick AI proof-of-concepts and MVPs to validate your ideas'
    },
    {
      icon: FiUsers,
      title: 'End-to-End Development',
      description: 'Complete AI solution development from concept to production deployment'
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
    <section id="freelance" className="section-padding bg-dark-900">
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
              Freelance <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to transform your business with AI? Let's discuss your next AI project and build intelligent solutions together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Services & Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">AI Services I Offer</h3>
                <div className="space-y-6">
                  {services.map((service, index) => {
                    const IconComponent = service.icon
                    return (
                      <motion.div
                        key={service.title}
                        whileHover={{ x: 10 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-dark-800/50 hover:bg-dark-800 transition-colors"
                      >
                        <div className="p-3 bg-primary-500/20 rounded-lg">
                          <IconComponent className="w-6 h-6 text-primary-400" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                          <p className="text-gray-400">{service.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Expertise Areas */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">AI Expertise Areas</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'LLM Integration',
                    'RAG Systems',
                    'Chatbot Development',
                    'AI Model Fine-tuning',
                    'Computer Vision',
                    'NLP Solutions',
                    'MLOps & Deployment',
                    'AI API Development'
                  ].map((area, index) => (
                    <motion.div
                      key={area}
                      whileHover={{ scale: 1.05 }}
                      className="p-3 bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-lg text-center text-primary-300 font-medium"
                    >
                      {area}
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass p-8 rounded-xl">
                <h3 className="text-3xl font-bold text-white mb-6">Start Your Project</h3>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400"
                  >
                    <FiCheck className="w-5 h-5" />
                    <span>Thank you! I'll get back to you within 24 hours.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400"
                  >
                    <FiAlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again or email me directly.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>


                  <div>
                    <label htmlFor="projectIdea" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Idea *
                    </label>
                    <textarea
                      id="projectIdea"
                      name="projectIdea"
                      value={formData.projectIdea}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                      placeholder="Tell me about your AI project idea, use case, data requirements, timeline, and budget..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        Send Project Details
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-700 text-center">
                  <p className="text-gray-400 text-sm">
                    Prefer email? Reach me directly at{' '}
                    <a href="mailto:your.email@example.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                      your.email@example.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Freelance
