'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaCode, FaUsers, FaGamepad, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa'
import Button from '@/components/ui/Button'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-1 mb-6 text-text-primary">
              We help game studios <br />
              and digital projects <span className="gradient-text">fly</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              We combine creative insight and production know-how, working with a wide network of professionals
              to help your projects reach their full potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videogame Production */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-6">
                <FaRocket className="text-3xl text-white" />
              </div>
              <h2 className="heading-2 text-text-primary mb-3">
                Videogame Production
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                We offer external production and project management support for teams of any size.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                You'll always work with a senior producer, with the flexibility to scale support by adding associate
                or junior producers as needed.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Whether you're handling an extra project, facing a temporary workload peak, or prefer not to hire internally,
                we can help keep your milestones on track.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We've shipped multiple titles and know how to navigate any production challenge.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl border border-neutral-800 flex items-center justify-center">
                <FaRocket className="text-8xl text-secondary/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Game Design */}
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
              <div className="aspect-square bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl border border-neutral-800 flex items-center justify-center">
                <FaGamepad className="text-8xl text-accent/30" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mb-6">
                <FaGamepad className="text-3xl text-white" />
              </div>
              <h2 className="heading-2 text-text-primary mb-3">
                Game Design
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Need expert feedback, creative direction, or an extra pair of hands? We've got you covered.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Our experience spans racing, action-adventure, and RPG projects, with a special focus on level design
                and system-driven, replayable experiences.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We can provide targeted consultancy or connect you with a designer from our network, matching your needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Co-development and Work-for-Hire */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                <FaCode className="text-3xl text-white" />
              </div>
              <h2 className="heading-2 text-text-primary mb-3">
                Co-development and Work-for-Hire
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                We collaborate with publishers and studios through flexible co-development setups.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                From individual features to large production segments, we can assemble a dedicated team that fits
                your scope and budget.
              </p>
              <p className="text-text-secondary leading-relaxed">
                If your project needs experienced support to reach its full potential, we're ready to help it take off.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-neutral-800 flex items-center justify-center">
                <FaCode className="text-8xl text-primary/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beyond Game Development */}
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
              <div className="aspect-square bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl border border-neutral-800 flex items-center justify-center">
                <FaLightbulb className="text-8xl text-secondary/30" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6">
                <FaLightbulb className="text-3xl text-white" />
              </div>
              <h2 className="heading-2 text-text-primary mb-3">
                Beyond Game Development
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Our expertise extends beyond games: we've worked on gamification, web development, and digital campaigns
                for major companies.
              </p>
              <p className="text-text-secondary leading-relaxed">
                From apps and platforms to full websites, we bring game production standards and modern UX thinking to
                every digital project. With us, you get the creative discipline of a game studio applied to your wider
                digital goals.
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
            className="bg-gradient-to-r from-secondary/20 via-background-tertiary to-accent/20 rounded-2xl p-12 text-center border border-neutral-800"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              Get in <span className="gradient-text">touch</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Ready to work together on your next project?
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
