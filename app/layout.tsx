import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VISHNU - Gen AI Developer Portfolio',
  description: 'Professional portfolio showcasing my work, experience, and skills in Generative AI, Machine Learning, and AI Development.',
  keywords: 'portfolio, gen ai developer, machine learning, artificial intelligence, python, llm, gpt, ai engineer',
  authors: [{ name: 'VISHNU' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
