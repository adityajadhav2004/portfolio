"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollBlurReveal } from "@/components/scroll-blur-reveal"
import { useRef } from "react"
import Link from "next/link"

const projects = [
  {
    title: "SHIVA – AI Voice Assistant",
    description: "Smart Human Interface With Voice Assistance",
    tech: "Python • Voice AI • Machine Learning",
    link: "https://shiva-website.netlify.app/",
  },
  {
    title: "Solitication of Gravity",
    description: "3D Gravity simulator on different planets built in Three.js",
    tech: "Three.js • WebGL • React",
    link: "https://earthphysics.netlify.app/",
  },
  {
    title: "Fraud Ninja",
    description: "Interactive Gamified fraud awareness platform for everyone",
    tech: "React • Node.js • Gamification",
    link: "https://fraudninja.netlify.app/",
  },
]

export function Projects() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])

  return (
    <section id="projects" ref={ref} className="min-h-screen px-6 md:px-12 lg:px-24 py-24">
      <motion.div className="max-w-7xl mx-auto" style={{ y }}>
        <ScrollBlurReveal>
          <h2 className="text-4xl md:text-6xl font-bold mb-16">Selected Work</h2>
        </ScrollBlurReveal>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ScrollBlurReveal key={index} delay={index * 0.2}>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="group border border-gray-200 dark:border-gray-800 p-8 md:p-12 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 cursor-pointer"
                  data-cursor-hover
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:opacity-70 transition-opacity">
                        {project.title}
                      </h3>
                      <p className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <p className="text-sm md:text-base text-gray-500">{project.tech}</p>
                    </div>
                    <motion.div className="text-2xl" whileHover={{ x: 10 }}>
                      →
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </ScrollBlurReveal>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
