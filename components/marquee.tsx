"use client"

import { motion } from "framer-motion"

interface MarqueeProps {
  text: string
  speed?: number
}

export function Marquee({ text, speed = 50 }: MarqueeProps) {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-gray-200 dark:border-gray-800 py-4">
      <motion.div
        className="inline-block text-2xl md:text-3xl font-light"
        animate={{ x: [0, "-100%"] }}
        transition={{
          duration: speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 0,
        }}
      >
        {text.repeat(10)}
      </motion.div>
    </div>
  )
}
