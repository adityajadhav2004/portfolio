"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const phases = [
  {
    number: "01",
    title: "Strategy",
    description: "Understand business, define goals, design systems.",
  },
  {
    number: "02",
    title: "Development",
    description: "Craft clean, modular code. Iterate. Share updates.",
  },
  {
    number: "03",
    title: "Launch",
    description: "Polish. Deploy. Deliver impact.",
  },
]

export function Approach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Approach
        </motion.h2>

        <div className="space-y-16 md:space-y-24">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row md:items-start gap-8"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <div className="text-6xl md:text-8xl font-bold text-gray-800 md:w-32 flex-shrink-0">{phase.number}</div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{phase.title}</h3>
                <p className="text-xl md:text-2xl font-light text-gray-400">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
