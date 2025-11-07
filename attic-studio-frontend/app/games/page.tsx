'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaGamepad, FaRocket, FaArrowRight } from 'react-icons/fa'
import Button from '@/components/ui/Button'

export default function GamesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Mysterious Teaser */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Game Characters Image - Centered and Properly Sized */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <div className="relative mx-auto max-w-lg">
                <Image
                  src="/images/games/fatewalkers-characters.png"
                  alt="Fatewalkers Characters"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-2xl border border-neutral-800 shadow-2xl"
                  priority
                  unoptimized
                />
              </div>
            </motion.div>

            {/* Quote - Bold Italic */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-4"
            >
              <p className="text-2xl md:text-3xl text-text-primary font-bold italic">
                "What are you looking at? Keep walking."
              </p>
            </motion.div>

            {/* Subtitle - Italic */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-8"
            >
              <p className="text-lg md:text-xl text-text-secondary italic max-w-3xl mx-auto">
                The first glimpse of what we're building is hidden, but every path will be worth exploring.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 bg-background-tertiary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-text-secondary text-lg leading-relaxed">
                Yes, we're creating a self-funded original vertical slice.
              </p>

              <p className="text-text-secondary text-lg leading-relaxed">
                Every cent from our other activities goes into two things:
              </p>

              <div className="space-y-4 pl-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <p className="text-text-secondary text-lg leading-relaxed flex-1">
                    paying rent.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <p className="text-text-secondary text-lg leading-relaxed flex-1">
                    building a compelling demo that will make funding a little easier.
                  </p>
                </div>
              </div>

              <p className="text-text-secondary text-lg leading-relaxed pt-4">
                Stay tuned for updates, especially if you like replayable RPGs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-secondary/20 via-background-tertiary to-accent/20 rounded-2xl p-8 text-center border border-neutral-800 max-w-4xl mx-auto"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              Want to stay <span className="gradient-text">updated</span>?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Get in touch to learn more or follow our journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Contact Us
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  See What We Do
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
