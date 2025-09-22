'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiPython, SiTensorflow, SiPytorch, SiJupyter, SiOpenai, 
  SiDocker, SiAmazonaws, SiGit, SiMongodb, SiPostgresql, 
  SiRedis, SiKubernetes, SiGooglecloud, SiMicrosoftazure,
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Python', icon: SiPython, level: 95, color: '#3776AB' },
        { name: 'TensorFlow', icon: SiTensorflow, level: 90, color: '#FF6F00' },
        { name: 'PyTorch', icon: SiPytorch, level: 88, color: '#EE4C2C' },
        { name: 'OpenAI APIs', icon: SiOpenai, level: 92, color: '#412991' },
        { name: 'Jupyter', icon: SiJupyter, level: 85, color: '#F37626' },
      ]
    },
    {
      title: 'Gen AI & LLMs',
      skills: [
        { name: 'LangChain', icon: SiPython, level: 90, color: '#1C3C3C' },
        { name: 'Hugging Face', icon: SiPython, level: 88, color: '#FFD21E' },
        { name: 'Vector DBs', icon: SiMongodb, level: 85, color: '#00ED64' },
        { name: 'RAG Systems', icon: SiOpenai, level: 87, color: '#10A37F' },
      ]
    },
    {
      title: 'Cloud & MLOps',
      skills: [
        { name: 'AWS', icon: SiAmazonaws, level: 85, color: '#FF9900' },
        { name: 'Google Cloud', icon: SiGooglecloud, level: 80, color: '#4285F4' },
        { name: 'Azure', icon: SiMicrosoftazure, level: 75, color: '#0078D4' },
        { name: 'Docker', icon: SiDocker, level: 88, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, level: 78, color: '#326CE5' },
      ]
    },
    {
      title: 'Data & Development',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 82, color: '#336791' },
        { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248' },
        { name: 'Git', icon: SiGit, level: 90, color: '#F05032' },
        { name: 'React', icon: SiReact, level: 80, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, level: 78, color: '#3178C6' },
      ]
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  }

  return (
    <section id="skills" className="section-padding bg-dark-800">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary-400 to-primary-600 rounded-full" />
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              className="p-2 rounded-lg bg-dark-700 group-hover:bg-dark-600 transition-colors"
                            >
                              <div className="text-2xl lg:text-3xl mb-2 lg:mb-3 group-hover:scale-110 transition-transform">
                                <IconComponent 
                                  className="w-6 h-6" 
                                  style={{ color: skill.color }}
                                />
                              </div>
                            </motion.div>
                            <span className="text-white font-medium">{skill.name}</span>
                          </div>
                          <span className="text-primary-400 font-semibold">{skill.level}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-2 bg-dark-700 rounded-full overflow-hidden">
                          <motion.div
                            variants={progressVariants}
                            custom={skill.level}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})`
                            }}
                          />
                          
                          {/* Animated shine effect */}
                          <motion.div
                            animate={{
                              x: [-100, 300],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: "easeInOut",
                            }}
                            className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              AI Tools & Frameworks I Work With
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'GPT-4', 'Claude', 'Gemini', 'BERT', 'Transformers', 
                'Fine-tuning', 'Prompt Engineering', 'MLflow', 'Weights & Biases', 'Streamlit',
                'FastAPI', 'Flask', 'Pandas', 'NumPy', 'Scikit-learn'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-full text-primary-300 text-sm font-medium hover:border-primary-400/40 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
              {[
                { name: 'AWS Machine Learning Specialty', issuer: 'Amazon Web Services', year: '2023' },
                { name: 'TensorFlow Developer Certificate', issuer: 'Google', year: '2023' },
                { name: 'Deep Learning Specialization', issuer: 'Coursera', year: '2022' },
              ].map((cert, index) => (
                <motion.div
                  key={cert.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass p-3 lg:p-4 rounded-xl text-center group hover:bg-dark-700/50 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                  <p className="text-primary-400 mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
