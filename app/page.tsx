'use client'

import Navigation from '@/components/Navigation'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Freelance from '@/components/sections/Freelance'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <Navigation />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Freelance />
      <Contact />
    </main>
  )
}
