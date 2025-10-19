'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    content: "Attic Studio ha trasformato la nostra idea in un gioco straordinario. La loro expertise tecnica e creatività sono impareggiabili.",
    author: "Alessandro Conti",
    role: "CEO, TechGame Studios",
    company: "TechGame Studios",
    rating: 5,
    avatar: "/images/avatar1.jpg"
  },
  {
    id: 2,
    content: "Il corso di Unity è stato illuminante. Ho imparato più in 40 ore che in anni di tentativi autodidattici. Consigliatissimo!",
    author: "Giulia Marchetti",
    role: "Indie Game Developer",
    company: "Freelance",
    rating: 5,
    avatar: "/images/avatar2.jpg"
  },
  {
    id: 3,
    content: "Collaborare con Attic Studio è stata un'esperienza fantastica. Hanno portato innovazione e professionalità in ogni fase del progetto.",
    author: "Roberto Ferrari",
    role: "Product Manager",
    company: "Digital Dreams",
    rating: 5,
    avatar: "/images/avatar3.jpg"
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-background-secondary via-background-primary to-background-tertiary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            Cosa Dicono di <span className="gradient-text">Noi</span>
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Le parole dei nostri clienti e studenti sono la nostra migliore presentazione
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-background-tertiary border border-neutral-800/50 rounded-2xl p-8 md:p-12 shadow-xl shadow-accent-cyan/10"
              >
                {/* Quote Icon */}
                <div className="text-6xl text-accent-cyan/30 mb-6">"</div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
                  {testimonials[activeIndex].content}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-accent-yellow text-2xl"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-accent-cyan/30">
                    {testimonials[activeIndex].author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary text-lg">
                      {testimonials[activeIndex].author}
                    </p>
                    <p className="text-text-muted">
                      {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 bg-background-tertiary border border-neutral-800 rounded-full shadow-lg flex items-center justify-center hover:bg-accent-cyan hover:text-background-primary hover:border-accent-cyan transition-all text-accent-cyan"
                aria-label="Previous testimonial"
              >
                ←
              </motion.button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-accent-cyan w-8'
                        : 'bg-neutral-700 hover:bg-neutral-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 bg-background-tertiary border border-neutral-800 rounded-full shadow-lg flex items-center justify-center hover:bg-accent-cyan hover:text-background-primary hover:border-accent-cyan transition-all text-accent-cyan"
                aria-label="Next testimonial"
              >
                →
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}