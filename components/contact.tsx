"use client"

import { ScrollBlurReveal } from "@/components/scroll-blur-reveal"
import { motion } from "framer-motion"
import { useRef } from "react"

export function Contact() {
  const ref = useRef(null)

  const copyEmail = () => {
    navigator.clipboard.writeText("adityajadhav052004@gmail.com")
  }

  return (
    <section ref={ref} className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto w-full text-center">
        <ScrollBlurReveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
            Ready to build something exceptional?
          </h2>
        </ScrollBlurReveal>

        <ScrollBlurReveal delay={0.3}>
          <div className="space-y-8">
            <button
              onClick={copyEmail}
              className="text-xl md:text-2xl font-light border-b border-current pb-2 hover:opacity-70 transition-opacity"
              data-cursor-hover
            >
              📧 Copy My Email → adityajadhav052004@gmail.com
            </button>

            <div>
              <motion.button
                className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-lg md:text-xl font-bold hover:opacity-80 transition-opacity"
                data-cursor-hover
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together →
              </motion.button>
            </div>
          </div>
        </ScrollBlurReveal>
      </div>
    </section>
  )
}
