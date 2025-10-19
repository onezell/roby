'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGamepad, FaDice, FaUsers, FaBrain, FaMap, FaStar, FaArrowRight } from 'react-icons/fa'
import Button from '@/components/ui/Button'

// Fatewalkers features from Business Plan
const gameFeatures = [
  {
    icon: FaGamepad,
    title: 'Tactical Combat',
    description: 'Third-person tactical combat with deep party mechanics and strategic decision-making',
  },
  {
    icon: FaDice,
    title: 'Modular Character System',
    description: 'Trait-based character building with endless customization possibilities',
  },
  {
    icon: FaMap,
    title: 'Procedural Generation',
    description: 'Handcrafted levels with procedural elements for infinite replayability',
  },
  {
    icon: FaBrain,
    title: 'Systems-Driven Design',
    description: 'Emergent gameplay where player choices create unique stories',
  },
  {
    icon: FaStar,
    title: 'Roguelike Progression',
    description: 'Permanent character growth through meaningful decisions across multiple runs',
  },
  {
    icon: FaUsers,
    title: 'Party Dynamics',
    description: 'Build and manage your party with complex relationship and synergy systems',
  },
]

const gameStats = [
  { label: 'Genre', value: 'Tactical RPG' },
  { label: 'Platform', value: 'PC / Console' },
  { label: 'Players', value: 'Single Player' },
  { label: 'Status', value: 'In Development' },
]

export default function GamesPage() {
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-full text-secondary text-sm font-semibold">
                Our Debut Title
              </span>
            </motion.div>

            <h1 className="heading-hero mb-6 text-text-primary">
              <span className="gradient-text">Fatewalkers</span>
            </h1>

            <p className="text-2xl text-text-secondary mb-8 leading-relaxed">
              A third-person highly replayable tactical RPG about dreams — and the winding path to achieve them
            </p>

            <p className="text-lg text-text-muted mb-12 max-w-3xl mx-auto">
              A fresh take on the RPG experience for modern players: expect roguelike runs with decisions that
              lead to permanent character growth, wrapped in a system-driven design philosophy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Get Updates
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

      {/* Game Stats */}
      <section className="section-padding bg-background-tertiary/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gameStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-background-elevated rounded-xl border border-neutral-800"
              >
                <div className="text-sm text-text-muted mb-2">{stat.label}</div>
                <div className="text-xl font-semibold text-secondary">{stat.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
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
              Core <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Built on the foundation of player freedom, emergent gameplay, and endless replayability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameFeatures.map((feature, index) => {
              const Icon = feature.icon

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background-tertiary rounded-xl p-8 border border-neutral-800 hover:border-secondary/50 transition-all hover:shadow-xl hover:shadow-secondary/10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="heading-4 text-text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Game Vision */}
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
                Opening a <span className="gradient-text">New Market Space</span>
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Games like RimWorld, Kenshi, and Dwarf Fortress have sold over 12 million copies combined,
                proving the massive appetite for system-driven gameplay.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                But these games demand hundreds of hours and steep learning curves. <strong className="text-text-primary">The midcore space is wide open.</strong>
              </p>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Fatewalkers brings that immense player freedom and replayability to a broader audience through
                accessible design, modern UX, and shorter sessions. <strong className="text-text-primary">Depth in small doses.</strong>
              </p>
              <div className="bg-background-elevated rounded-xl p-6 border border-neutral-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaStar className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-text-primary font-semibold mb-1">Our Goal</div>
                    <div className="text-sm text-text-muted">
                      Bring system-driven RPGs to players who want depth without the time commitment
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl border border-neutral-800 flex items-center justify-center">
                <FaGamepad className="text-8xl text-secondary/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-2 text-text-primary mb-6">
              Built to <span className="gradient-text">Last</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Fatewalkers is more than a game — it's the foundation of our proprietary tech and design frameworks.
            </p>
            <p className="text-text-secondary mb-12 leading-relaxed">
              We're building reusable tools and systems that will power multiple titles, allowing us to scale
              efficiently and become a leading studio in system-driven RPGs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 bg-background-tertiary rounded-xl border border-neutral-800"
            >
              <div className="text-4xl font-bold gradient-text mb-2">12M+</div>
              <div className="text-sm text-text-secondary">Units sold by similar games</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-background-tertiary rounded-xl border border-neutral-800"
            >
              <div className="text-4xl font-bold gradient-text mb-2">Midcore</div>
              <div className="text-sm text-text-secondary">Wide open market space</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-background-tertiary rounded-xl border border-neutral-800"
            >
              <div className="text-4xl font-bold gradient-text mb-2">Accessible</div>
              <div className="text-sm text-text-secondary">Modern UX & shorter sessions</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-tertiary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-secondary/20 via-background-tertiary to-accent/20 rounded-2xl p-12 text-center border border-neutral-800"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              Stay Updated on <span className="gradient-text">Fatewalkers</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Want to know more about Fatewalkers or discuss partnership opportunities?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
