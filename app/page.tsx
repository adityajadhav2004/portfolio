"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { ThemeProvider } from "@/components/theme-context"
import { CustomCursor } from "@/components/custom-cursor"
import { LoadingScreen } from "@/components/loading-screen"
import { Hero } from "@/components/hero"
import { DonDraperMarquee } from "@/components/don-draper-marquee"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { TechStack } from "@/components/tech-stack"
import { Approach } from "@/components/approach"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { Seo } from "@/components/seo"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <Seo />
      <div className="bg-white dark:bg-black text-black dark:text-white overflow-x-hidden transition-colors duration-700">
        <CustomCursor />
        <ThemeToggle />

        <AnimatePresence mode="wait">{isLoading && <LoadingScreen />}</AnimatePresence>

        {!isLoading && (
          <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
            <Hero />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
              <DonDraperMarquee />
            </motion.div>
            <About />
            <Projects />
            <Testimonials />
            <TechStack />
            <Approach />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </div>
    </ThemeProvider>
  )
}
