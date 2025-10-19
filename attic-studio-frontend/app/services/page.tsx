'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaCode, FaUsers, FaGamepad, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa'
import Button from '@/components/ui/Button'

// Services data based on Business Plan revenue streams
const services = [
  {
    id: 'original-ips',
    icon: FaRocket,
    title: 'Publisher-Funded Original IPs',
    tagline: 'Building the future of system-driven RPGs',
    description: 'Fatewalkers is our debut title - a systems-driven RPG designed to open a new market space and kickstart our proprietary tech. Our goal is to build reusable tools and design frameworks to scale efficiently and become a leading studio in this genre.',
    features: [
      'Modular characters and trait systems',
      'Procedural generation within handcrafted levels',
      'Tactical combat and party mechanics',
      'Replayable roguelike progression',
    ],
    color: 'from-secondary to-primary',
    cta: {
      text: 'Explore Fatewalkers',
      href: '/games',
    },
  },
  {
    id: 'work-for-hire',
    icon: FaCode,
    title: 'Selected Work-for-Hire Projects',
    tagline: 'Expert development in system-driven RPGs',
    description: 'We\'re open to developing licensed or original titles for external partners - as long as we stay in the systems-driven RPGs niche. With the right opportunity, we\'re also open to building from work-for-hire if it allows us to develop the same technology and creative foundations.',
    features: [
      'System-driven RPG expertise',
      'Proven track record on PC/console titles',
      'Fast-prototyping culture',
      'Cost-efficient structure',
    ],
    color: 'from-accent to-secondary',
    cta: {
      text: 'Partner with Us',
      href: '/contact',
    },
  },
  {
    id: 'mentorship',
    icon: FaUsers,
    title: 'The Attic Hatchling: Mentorship Program',
    tagline: 'Growing the next generation of game developers',
    description: 'A mentorship initiative by our founders, already tested with dozens of aspiring devs. We plan to grow it into a small, sustainable platform for talent scouting, industry visibility, and minor overhead support - always aligned with our studio values.',
    features: [
      'One-on-one mentorship from industry veterans',
      'Hands-on game development guidance',
      'Portfolio review and career advice',
      'Community of aspiring developers',
    ],
    color: 'from-primary to-accent',
    cta: {
      text: 'Join the Program',
      href: '/contact',
    },
  },
]

// Why choose us - Strengths from Business Plan
const strengths = [
  {
    icon: FaGamepad,
    title: 'Experienced Founders',
    description: 'Senior core team with proven track record across licensed and original titles for PC and consoles.',
  },
  {
    icon: FaLightbulb,
    title: 'Fast-Prototyping Culture',
    description: 'We recognize and scrap creative ideas that don\'t work, iterating quickly toward excellence.',
  },
  {
    icon: FaHandshake,
    title: 'Cost-Efficient Structure',
    description: 'Lean, agile team focused on delivering quality without unnecessary overhead.',
  },
  {
    icon: FaChartLine,
    title: 'Long-Term Vision',
    description: 'Clear niche focus and roadmap for multiple games, building reusable tech and frameworks.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-primary via-background-secondary to-background-primary">
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
              What <span className="gradient-text">We Do</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Three revenue streams designed to support creative independence and long-term studio stability
              while we build the future of accessible system-driven RPGs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => {
        const Icon = service.icon
        const isEven = index % 2 === 0

        return (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${index % 2 === 1 ? 'bg-background-tertiary/30' : ''}`}
          >
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={isEven ? 'order-1' : 'order-1 md:order-2'}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h2 className="heading-2 text-text-primary mb-3">
                    {service.title}
                  </h2>
                  <p className="text-secondary font-semibold mb-6">
                    {service.tagline}
                  </p>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-secondary mt-1">•</span>
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.cta.href}>
                    <Button variant="primary">
                      {service.cta.text}
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={isEven ? 'order-2' : 'order-2 md:order-1'}
                >
                  <div className={`aspect-square bg-gradient-to-br ${service.color} opacity-10 rounded-2xl border border-neutral-800 flex items-center justify-center`}>
                    <Icon className="text-8xl text-secondary/30" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Why Choose Us */}
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
              Why <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Experienced team, proven methodology, and clear vision for the future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background-tertiary rounded-xl p-6 border border-neutral-800 hover:border-secondary/50 transition-all hover:shadow-xl hover:shadow-secondary/10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="heading-4 text-text-primary mb-3">
                    {strength.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {strength.description}
                  </p>
                </motion.div>
              )
            })}
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Whether you're a publisher looking for a development partner, or an aspiring dev seeking mentorship
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/about">
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
