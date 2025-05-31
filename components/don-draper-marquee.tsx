"use client"

import { motion } from "framer-motion"

const donDraperQuotes = [
  "Success comes from standing out, not fitting in.",
  "Make it simple, but significant.",
  "Change is neither good nor bad, it simply is.",
  "You are the product. You feeling something. That's what sells.",
  "If you don't like what's being said, change the conversation.",
  "The day you sign a client is the day you start losing them.",
  "Advertising is based on one thing: happiness.",
  "People want to be told what to do so badly that they'll listen to anyone.",
  "You want some respect? Go out there and get it for yourself.",
  "The universe is indifferent.",
]

export function DonDraperMarquee() {
  const allQuotes = donDraperQuotes.join(" • ") + " • "

  return (
    <section className="py-8 border-y border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{
            x: [0, -2000],
          }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 0,
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 text-lg md:text-xl font-light text-gray-500 dark:text-gray-400">
              {allQuotes}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
