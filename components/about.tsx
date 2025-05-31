"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollBlurReveal } from "@/components/scroll-blur-reveal"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  return (
    <section ref={ref} className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden">
      <motion.div className="max-w-7xl mx-auto w-full" style={{ y }}>
        <ScrollBlurReveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 max-w-4xl leading-tight">
            Transforming Concepts into Seamless User Experiences.
          </h2>
        </ScrollBlurReveal>

        <ScrollBlurReveal delay={0.3}>
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
              A tech enthusiast who blends logic with creativity to build brands that stand out. I help businesses grow
              with clarity, strategy, and clean code.
            </p>

            <motion.button
              className="group text-lg md:text-xl font-light border-b border-current pb-2 hover:opacity-70 transition-opacity"
              data-cursor-hover
              whileHover={{ x: 10 }}
            >
              Start a Project →
            </motion.button>
          </div>
        </ScrollBlurReveal>
      </motion.div>
    </section>
  )
}
