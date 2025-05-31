"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-8 text-white"
          initial={{
            opacity: 0,
            filter: "blur(20px)",
            y: 50,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          AJ
        </motion.h1>

        <motion.div
          className="w-64 h-1 bg-gray-800 mx-auto mb-4"
          initial={{
            opacity: 0,
            filter: "blur(5px)",
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        <motion.p
          className="text-lg font-light text-white"
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 1,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  )
}
