"use client"

import { ScrollBlurReveal } from "@/components/scroll-blur-reveal"
import { useRef } from "react"

const testimonials = [
  {
    quote: "Aditya helped me build my own brand and gain audience for my work.",
    author: "Amit Gupta",
    company: "Founder @ Amit RG",
  },
  {
    quote: "From zero traction to fully booked classes — his work speaks for itself.",
    author: "Ramdas Keluskar",
    company: "Founder @ Ramdas Keluskar Fitness",

  },
  {
    quote: "Working with Aditya is working with clarity, passion, and precision.",
    author: "Comic Nuts",
    company: "Founder @ Comcics Nuts Store",
  },
]

export function Testimonials() {
  const ref = useRef(null)

  return (
    <section ref={ref} className="min-h-screen px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <ScrollBlurReveal>
          <h2 className="text-4xl md:text-6xl font-bold mb-16">Signal from the Network</h2>
        </ScrollBlurReveal>

        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <ScrollBlurReveal key={index} delay={index * 0.3}>
              <div className="max-w-4xl">
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-lg md:text-xl text-gray-400 not-italic">
                  – {testimonial.author}
                  {testimonial.company && `, ${testimonial.company}`}
                </cite>
              </div>
            </ScrollBlurReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
