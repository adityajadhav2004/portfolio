"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const technologies = [
  "React",
  "Next.js",
  "Python",
  "Linux",
  "C",
  "Tailwind",
  "SEO",
  "SMM",
  "Java",
  "Branding",
  "UI/UX",
  "Full Stack",
  "Design Thinking",
]

export function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              className="text-xl md:text-2xl font-light hover:text-gray-400 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              data-cursor-hover
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
