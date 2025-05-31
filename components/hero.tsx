"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Marquee } from "@/components/marquee"
import { useRef } from "react"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      <motion.div className="max-w-7xl mx-auto w-full" style={{ y, opacity }}>
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8"
          initial={{
            opacity: 0,
            filter: "blur(20px)",
            y: 100,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          ADITYA JADHAV
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl font-light mb-16 max-w-2xl"
          initial={{
            opacity: 0,
            filter: "blur(15px)",
            y: 50,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Builder. Strategist. Developer.
        </motion.p>

        <motion.div
          className="mb-16"
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Marquee text="▸ I BUILD BRANDS ▸ I CODE SYSTEMS ▸ I CREATE IMPACT ▸" />
        </motion.div>

        <motion.button
          onClick={scrollToWork}
          className="group text-lg md:text-xl font-light border-b border-current pb-2 hover:opacity-70 transition-opacity"
          initial={{
            opacity: 0,
            filter: "blur(8px)",
            y: 30,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          data-cursor-hover
          whileHover={{ x: 10 }}
        >
          Show My Work →
        </motion.button>
      </motion.div>
    </section>
  )
}
