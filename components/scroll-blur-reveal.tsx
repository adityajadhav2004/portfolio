"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface ScrollBlurRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function ScrollBlurReveal({ children, delay = 0, className = "" }: ScrollBlurRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        filter: "blur(10px)",
        y: 50,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}
