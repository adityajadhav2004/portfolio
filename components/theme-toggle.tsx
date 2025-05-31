"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-context"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-40 w-16 h-8 bg-gray-200 dark:bg-gray-800 rounded-full p-1 transition-colors duration-500"
      data-cursor-hover
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-6 h-6 bg-black dark:bg-white rounded-full shadow-lg flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 0 : 32,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.span
          className="text-xs"
          animate={{
            rotate: theme === "dark" ? 0 : 180,
          }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </motion.span>
      </motion.div>
    </motion.button>
  )
}
