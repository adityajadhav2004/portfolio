"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">ADITYA — The Developer</h3>
          <p className="text-lg font-light text-gray-400 mb-4">Built with logic. Driven by clarity.</p>
          <p className="text-sm text-gray-500">© 2025 Aditya Jadhav</p>
        </motion.div>
      </div>
    </footer>
  )
}
