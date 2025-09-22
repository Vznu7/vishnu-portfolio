'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/Vznu7',
      color: '#333',
      hoverColor: '#24292e'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/vishnu-vznu',
      color: '#0077B5',
      hoverColor: '#005885'
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:vishnuvishnu49373@gmail.com',
      color: '#EA4335',
      hoverColor: '#d33b2c'
    }
  ]

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'vishnuvishnu49373@gmail.com',
      link: 'mailto:vishnuvishnu49373@gmail.com'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu',
      link: null
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
    <footer id="contact" className="section-padding bg-dark-900 border-t border-gray-800">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
            {/* Brand & Description */}
            <motion.div variants={itemVariants} className="lg:col-span-1 text-center lg:text-left">
              <motion.h3 
                className="text-3xl font-bold gradient-text mb-4"
                whileHover={{ scale: 1.05 }}
              >
                VISHNU
              </motion.h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Gen AI Developer passionate about building intelligent systems 
                that transform how people interact with technology. Always excited to work on 
                innovative AI projects and collaborate with forward-thinking teams.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        backgroundColor: social.hoverColor 
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-dark-800 rounded-lg text-gray-400 hover:text-white transition-colors border border-gray-700 hover:border-primary-500"
                      style={{
                        '--hover-color': social.color
                      } as React.CSSProperties}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1 text-center lg:text-left">
              <h4 className="text-2xl font-bold text-white mb-6">Get In Touch</h4>
              <div className="space-y-3 lg:space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={info.label}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-center lg:justify-start gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      <div className="p-2 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors">
                        <IconComponent className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{info.label}</div>
                        <div className="text-white font-medium">{info.value}</div>
                      </div>
                    </motion.div>
                  )

                  return info.link ? (
                    <a key={info.label} href={info.link} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>
                      {content}
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-1 text-center lg:text-left">
              <h4 className="text-2xl font-bold text-white mb-6">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Freelance', href: '#freelance' },
                  { name: 'Resume', href: '/resume.pdf', download: true }
                ].map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    download={link.download}
                    whileHover={{ x: 5, color: '#0ea5e9' }}
                    className="text-gray-400 hover:text-primary-400 transition-colors py-2"
                    onClick={!link.download ? (e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    } : undefined}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                <FiArrowUp className="w-4 h-4" />
                Back to Top
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            variants={itemVariants}
            className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2024 VISHNU. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <motion.a
                href="/privacy"
                whileHover={{ color: '#0ea5e9' }}
                className="hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="/terms"
                whileHover={{ color: '#0ea5e9' }}
                className="hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-primary-400 to-transparent opacity-50" />
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(14, 165, 233, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
    </footer>
  )
}

export default Contact
