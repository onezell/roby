/**
 * Level Design Online Course - Premium Course Offering
 *
 * This page showcases our Level Design course offering.
 * The course can be enabled/disabled by commenting/uncommenting the
 * navigation link in the Header component and the link in courses/page.tsx
 */

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGraduationCap, FaCalendar, FaClock, FaEuroSign, FaUsers, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import Button from '@/components/ui/Button'

export default function LevelDesignCoursePage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-full text-secondary text-sm font-semibold">
                One Time Offer
              </span>
            </motion.div>

            <h1 className="heading-hero mb-6 text-text-primary">
              <span className="gradient-text">Level Design</span> Online Course
            </h1>

            <p className="text-2xl text-text-secondary mb-4 leading-relaxed font-semibold">
              Build your first great level and make your portfolio shine
            </p>

            <p className="text-lg text-text-muted mb-8">
              Language: Italian | Starting: January 2025 | Duration: 8 weeks | Cost: 399€ including IVA
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <p className="text-text-secondary text-lg leading-relaxed">
              This course is dedicated to game designers who want to specialize in level design and strengthen their portfolios.
              It's hands-on: you'll refine a blockout from scratch in 8 weeks under the guidance of Edmondo Guerci, Senior Level Designer.
            </p>
          </motion.div>

          {/* Course Details Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background-tertiary rounded-xl p-6 border border-neutral-800"
            >
              <h3 className="heading-4 text-text-primary mb-2">Schedule</h3>
              <p className="text-text-secondary text-sm">
                Once a week, 3-hour sessions outside working hours (24 hours total) + assignments
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background-tertiary rounded-xl p-6 border border-neutral-800"
            >
              <h3 className="heading-4 text-text-primary mb-2">Capacity</h3>
              <p className="text-text-secondary text-sm">
                Limited to 6 participants to ensure personalized guidance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background-tertiary rounded-xl p-6 border border-neutral-800"
            >
              <h3 className="heading-4 text-text-primary mb-2">Deadline</h3>
              <p className="text-text-secondary text-sm">
                31st December 2025, or when the spots are all filled
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background-tertiary rounded-xl p-6 border border-neutral-800"
            >
              <h3 className="heading-4 text-text-primary mb-2">Price</h3>
              <p className="text-text-secondary text-sm">
                399€ including IVA
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements & Details */}
      <section className="py-12 bg-background-tertiary/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background-tertiary rounded-xl p-6 border border-neutral-800"
            >
              <h3 className="heading-3 text-text-primary mb-4">
                Requirements
              </h3>
              <p className="text-text-secondary leading-relaxed">
                <strong className="text-text-primary">Basic game design knowledge</strong>, preferably a graduation in game design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background-tertiary rounded-xl p-6 border border-neutral-800"
            >
              <h3 className="heading-3 text-text-primary mb-4">
                Important
              </h3>
              <p className="text-text-secondary leading-relaxed">
                <strong className="text-text-primary">Lessons will be recorded</strong>, but live participation is recommended.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-secondary/20 via-background-tertiary to-accent/20 rounded-2xl p-12 text-center border border-neutral-800 max-w-4xl mx-auto"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              Contact <span className="gradient-text">info</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              If you're interested in the course, fill out the form below and ask for additional information
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get More Information
                  <FaArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
