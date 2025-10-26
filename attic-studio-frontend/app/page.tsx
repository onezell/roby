'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaRocket, FaGamepad, FaUsers, FaCode, FaArrowRight, FaChartLine } from 'react-icons/fa'
import Button from '@/components/ui/Button'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-primary via-background-secondary to-background-primary">
      {/* Hero Section */}
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
              A game dev startup
              <br />
              finding its <span className="gradient-text">wings</span>
              <br />
              <span className="text-text-secondary text-4xl md:text-5xl">while helping others fly too</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="body-large max-w-3xl mx-auto mb-8"
            >
              We build our own games, support studios and publishers in design and production,
              and mentor new developers to build the talent behind every project.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/services">
                <Button size="lg" variant="primary">
                  Discover What We Do
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
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

      {/* Quickload Accelerator Section */}
      <section className="section-padding bg-background-tertiary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              Accelerated by <span className="gradient-text">Quickload</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-4">
              powered by OGR, Microsoft and 34BigThings
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-text-secondary leading-relaxed">
              We were selected for the 2025/2026 edition of Quickload, the gaming acceleration program in Turin
              supporting innovative game studios throughout Europe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
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
              We make games, help others create theirs, and guide new developers to take off
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Attic Hatchlings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background-tertiary rounded-2xl p-8 border border-neutral-800 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <FaUsers className="text-2xl text-white" />
              </div>
              <h3 className="heading-3 text-text-primary mb-4">
                Attic Hatchlings
              </h3>
              <p className="text-text-secondary mb-4">
                Our free mentorship community for aspiring game developers in Italy is fully open to both mentors and mentees.
                Every week, we host live sessions with industry guests or provide hands-on mentorship.
                For developers looking to specialize beyond standard academies, we also offer premium courses.
              </p>
              <a
                href="https://discord.gg/3eajWBkGyD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light hover:text-secondary transition-colors inline-flex items-center gap-2"
              >
                Join us on Discord
                <FaArrowRight />
              </a>
            </motion.div>

            {/* Consulting & Work-for-Hire */}
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
                Consulting & Work-for-Hire
              </h3>
              <p className="text-text-secondary mb-4">
                We help studios and publishers bring their games to life, offering design, co-dev, and project management services.
                Our expertise also extends to digital projects outside the gaming industry, applying the same expertise and
                know-how that drives our own game development.
              </p>
              <Link href="/services" className="text-accent hover:text-accent-glow transition-colors inline-flex items-center gap-2">
                Find out more
                <FaArrowRight />
              </Link>
            </motion.div>

            {/* Original IPs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background-tertiary rounded-2xl p-8 border border-neutral-800 hover:border-secondary/50 transition-all hover:shadow-xl hover:shadow-secondary/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-6">
                <FaRocket className="text-2xl text-white" />
              </div>
              <h3 className="heading-3 text-text-primary mb-4">
                Original IPs
              </h3>
              <p className="text-text-secondary mb-4">
                We design system-driven, highly replayable games. Our first demo is in development, stay tuned to see what we're building.
              </p>
              <div className="text-secondary font-semibold">
                Coming soon
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding bg-background-tertiary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              <span className="gradient-text">Founders</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto italic">
              We are creatives who can execute
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Roberta Migliori */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background-tertiary rounded-2xl p-8 border border-neutral-800 hover:border-secondary/50 transition-all hover:shadow-xl hover:shadow-secondary/10"
            >
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-secondary/30">
                  <Image
                    src="/images/founders/roberta.jpg"
                    alt="Roberta Migliori"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="heading-3 text-text-primary mb-2">
                    Roberta Migliori
                  </h3>
                  <p className="text-secondary font-semibold mb-4 italic">
                    Business Developer and Producer
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Experienced producer who has managed full production cycles from planning to release.
                    She oversees production and business development at Attic Studio.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/robertamigliori/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary-glow transition-colors text-sm inline-flex items-center gap-2"
                  >
                    LinkedIn Profile
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Edmondo Guerci */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background-tertiary rounded-2xl p-8 border border-neutral-800 hover:border-secondary/50 transition-all hover:shadow-xl hover:shadow-secondary/10"
            >
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-secondary/30">
                  <Image
                    src="/images/founders/edmondo.jpg"
                    alt="Edmondo Guerci"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="heading-3 text-text-primary mb-2">
                    Edmondo Guerci
                  </h3>
                  <p className="text-secondary font-semibold mb-4 italic">
                    Creative Director
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Game designer with lead experience on system-driven projects and a background spanning AA and AAA productions.
                    He guides Attic Studio's creative vision from concept to gameplay execution.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/edmondo-guerci-585269b3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary-glow transition-colors text-sm inline-flex items-center gap-2"
                  >
                    LinkedIn Profile
                    <FaArrowRight />
                  </a>
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
              Get in <span className="gradient-text">touch</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Whether you're interested in our games, mentorship program, or partnership opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
