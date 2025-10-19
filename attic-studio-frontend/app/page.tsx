'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaGamepad, FaUsers, FaCode, FaArrowRight, FaChartLine } from 'react-icons/fa'
import Button from '@/components/ui/Button'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-primary via-background-secondary to-background-primary">
      {/* Hero Section - Fatewalkers Focus */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Fullscreen Logo Animation Video */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute inset-0 overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            style={{
              filter: 'blur(2px) brightness(0.85)',
            }}
          >
            <source src="/videos/logo-animation.mp4?v=2" type="video/mp4" />
          </video>

          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/60" />
        </motion.div>

        {/* Content */}
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h1 className="heading-hero mb-6">
              <span className="gradient-text">System-Driven RPGs</span>
              <br />
              for a Wider Audience
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="body-large max-w-3xl mx-auto mb-8"
            >
              We bring the immense player freedom and replayability of games like RimWorld and Kenshi
              to midcore players through accessible design, modern UX, and shorter sessions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/games">
                <Button size="lg" variant="primary">
                  Discover Fatewalkers
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Our Story
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 border-2 border-secondary/60 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-3 bg-secondary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fatewalkers Section */}
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
                <span className="gradient-text">Fatewalkers</span>
                <br />
                Our Debut Title
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                A third-person highly replayable tactical RPG about dreams - and the winding path to achieve them.
                A fresh take on the RPG experience for modern players: expect roguelike runs with decisions that
                lead to permanent character growth.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <FaGamepad className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-text-secondary">Modular characters and trait system</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCode className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-text-secondary">Procedural generation within handcrafted levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaUsers className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-text-secondary">Tactical combat and party system</span>
                </li>
              </ul>
              <Link href="/games">
                <Button variant="primary">
                  Learn More
                  <FaArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl border border-neutral-800 flex items-center justify-center"
            >
              <FaGamepad className="text-6xl text-secondary/50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do - 3 Revenue Streams */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              What <span className="gradient-text">We Do</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Three revenue streams to support creative independence and long-term studio stability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Original IPs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background-tertiary rounded-2xl p-8 border border-neutral-800 hover:border-secondary/50 transition-all hover:shadow-xl hover:shadow-secondary/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-6">
                <FaRocket className="text-2xl text-white" />
              </div>
              <h3 className="heading-3 text-text-primary mb-4">
                Original IPs
              </h3>
              <p className="text-text-secondary mb-4">
                Publisher-funded original titles like Fatewalkers. Our goal: build reusable tools and design
                frameworks to scale efficiently and become a leading studio in system-driven RPGs.
              </p>
              <Link href="/games" className="text-secondary hover:text-secondary-glow transition-colors inline-flex items-center gap-2">
                Explore Projects
                <FaArrowRight />
              </Link>
            </motion.div>

            {/* Work-for-Hire */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background-tertiary rounded-2xl p-8 border border-neutral-800 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center mb-6">
                <FaCode className="text-2xl text-white" />
              </div>
              <h3 className="heading-3 text-text-primary mb-4">
                Work-for-Hire
              </h3>
              <p className="text-text-secondary mb-4">
                Selected development projects for external partners in the system-driven RPG niche.
                We build the same technology and creative foundations while supporting studio growth.
              </p>
              <Link href="/services" className="text-accent hover:text-accent-glow transition-colors inline-flex items-center gap-2">
                Our Services
                <FaArrowRight />
              </Link>
            </motion.div>

            {/* Attic Hatchling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background-tertiary rounded-2xl p-8 border border-neutral-800 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <FaUsers className="text-2xl text-white" />
              </div>
              <h3 className="heading-3 text-text-primary mb-4">
                Attic Hatchling
              </h3>
              <p className="text-text-secondary mb-4">
                Our mentorship program for aspiring game developers. A small, sustainable platform
                for talent scouting, industry visibility, and community impact.
              </p>
              <Link href="/services#mentorship" className="text-primary-light hover:text-secondary transition-colors inline-flex items-center gap-2">
                Join Program
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Positioning */}
      <section className="section-padding bg-background-tertiary/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl border border-neutral-800 flex items-center justify-center">
                <FaChartLine className="text-6xl text-secondary/50" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <h2 className="heading-2 text-text-primary mb-6">
                Opening a <span className="gradient-text">New Market Space</span>
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Games like RimWorld, Kenshi, and Dwarf Fortress have sold over 12 million copies combined.
                The hardcore simulation space is saturated - but the midcore space is wide open.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                We're bringing <strong className="text-text-primary">depth in small doses</strong>: replayable systems,
                player-driven progression, and modern UX to a broader audience seeking something smaller,
                smarter, and endlessly replayable.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background-tertiary rounded-lg p-4 border border-neutral-800">
                  <div className="text-3xl font-bold gradient-text mb-1">12M+</div>
                  <div className="text-sm text-text-secondary">Units Sold</div>
                </div>
                <div className="bg-background-tertiary rounded-lg p-4 border border-neutral-800">
                  <div className="text-3xl font-bold gradient-text mb-1">Wide Open</div>
                  <div className="text-sm text-text-secondary">Midcore Space</div>
                </div>
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
            className="bg-gradient-to-r from-secondary/20 via-background-tertiary to-accent/20 rounded-2xl p-12 text-center border border-neutral-800"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              Ready to <span className="gradient-text">Join Our Journey</span>?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Whether you're interested in our games, mentorship program, or partnership opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
