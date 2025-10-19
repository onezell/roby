'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaGraduationCap, FaUsers, FaLightbulb, FaHandshake, FaStar, FaRocket, FaArrowRight } from 'react-icons/fa'
import Button from '@/components/ui/Button'

// Program benefits from Business Plan
const programBenefits = [
  {
    icon: FaGraduationCap,
    title: 'One-on-One Mentorship',
    description: 'Direct guidance from industry veterans with years of experience in game development and production',
  },
  {
    icon: FaLightbulb,
    title: 'Hands-On Game Dev Guidance',
    description: 'Practical advice on design, production, and career development in the game industry',
  },
  {
    icon: FaHandshake,
    title: 'Portfolio Review',
    description: 'Professional feedback on your work and guidance to build a portfolio that stands out',
  },
  {
    icon: FaUsers,
    title: 'Community of Aspiring Developers',
    description: 'Join a network of talented developers sharing the same passion and ambition',
  },
  {
    icon: FaStar,
    title: 'Industry Visibility',
    description: 'Connect with professionals and get recognized in the game development community',
  },
  {
    icon: FaRocket,
    title: 'Career Acceleration',
    description: 'Fast-track your growth with personalized advice tailored to your goals and strengths',
  },
]

// Mentors from Business Plan (real founders)
const mentors = [
  {
    name: 'Roberta Migliori',
    role: 'Business Developer & Producer',
    bio: 'Former Executive Producer at 3DClouds (60-person studio) and Brand Manager at Slitherine Games, with extensive experience in production and business development.',
    image: '/images/roberta.jpg',
  },
  {
    name: 'Edmondo Guerci',
    role: 'Creative Director',
    bio: 'Senior Game Designer with a focus on system-driven design, currently Lead Designer on an unannounced project with deep emergent gameplay mechanics.',
    image: '/images/edmondo.jpg',
  },
]

// How it works
const howItWorksSteps = [
  {
    step: '01',
    title: 'Apply',
    description: 'Reach out through our contact form and tell us about yourself, your experience, and your goals',
  },
  {
    step: '02',
    title: 'Review',
    description: 'We review your application and portfolio to understand how we can best support your growth',
  },
  {
    step: '03',
    title: 'Match',
    description: 'Get matched with one of our mentors based on your needs and aspirations',
  },
  {
    step: '04',
    title: 'Grow',
    description: 'Start your mentorship journey with regular sessions, feedback, and guidance',
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-primary via-background-secondary to-background-primary">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
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
              <span className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary-light text-sm font-semibold">
                Mentorship Program
              </span>
            </motion.div>

            <h1 className="heading-hero mb-6 text-text-primary">
              The <span className="gradient-text">Attic Hatchling</span>
            </h1>

            <p className="text-2xl text-text-secondary mb-8 leading-relaxed">
              Growing the next generation of game developers
            </p>

            <p className="text-lg text-text-muted mb-12 max-w-3xl mx-auto">
              A mentorship initiative by our founders, already tested with dozens of aspiring developers.
              We're growing it into a sustainable platform for talent scouting, industry visibility,
              and community impact — always aligned with our studio values.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Apply Now
                  <FaArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  About Our Studio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              What You'll <span className="gradient-text">Get</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Comprehensive mentorship designed to accelerate your game development career
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programBenefits.map((benefit, index) => {
              const Icon = benefit.icon

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background-tertiary rounded-xl p-8 border border-neutral-800 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="heading-4 text-text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Meet the Mentors */}
      <section className="section-padding bg-background-tertiary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              Meet Your <span className="gradient-text">Mentors</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Learn from industry veterans who've shipped successful titles and built teams
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-background-elevated rounded-2xl p-8 border border-neutral-800"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-6 flex items-center justify-center border-2 border-primary/30">
                    <FaUsers className="text-5xl text-primary/70" />
                  </div>
                  <h3 className="heading-3 text-text-primary mb-2">
                    {mentor.name}
                  </h3>
                  <p className="text-secondary font-semibold mb-4">
                    {mentor.role}
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    {mentor.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Simple steps to start your mentorship journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((stepItem, index) => (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-background-tertiary rounded-xl p-6 border border-neutral-800 h-full">
                  <div className="text-5xl font-bold gradient-text mb-4 opacity-30">
                    {stepItem.step}
                  </div>
                  <h3 className="heading-4 text-text-primary mb-3">
                    {stepItem.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="section-padding bg-background-tertiary/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 text-text-primary mb-6">
                Who Should <span className="gradient-text">Apply</span>
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                The Attic Hatchling is designed for aspiring game developers who are serious about building a career in the industry.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold mb-1">Junior Developers</h4>
                    <p className="text-text-secondary text-sm">Looking to break into the industry or level up their skills</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold mb-1">Career Changers</h4>
                    <p className="text-text-secondary text-sm">Transitioning from other fields into game development</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold mb-1">Self-Taught Developers</h4>
                    <p className="text-text-secondary text-sm">Need guidance on best practices and industry standards</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold mb-1">Students & Recent Graduates</h4>
                    <p className="text-text-secondary text-sm">Want real-world insights beyond academic learning</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-neutral-800 flex items-center justify-center">
                <FaGraduationCap className="text-8xl text-primary/50" />
              </div>
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
            className="bg-gradient-to-r from-primary/20 via-background-tertiary to-accent/20 rounded-2xl p-12 text-center border border-neutral-800"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              Ready to <span className="gradient-text">Start Your Journey</span>?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Join the Attic Hatchling mentorship program and accelerate your game development career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Apply Now
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  Learn About Our Studio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
