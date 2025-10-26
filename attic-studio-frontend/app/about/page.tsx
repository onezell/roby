'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaUsers, FaLightbulb, FaHandshake, FaTrophy, FaCode } from 'react-icons/fa'
import Button from '@/components/ui/Button'
import Image from 'next/image'

// Founders data - REAL from Business Plan
const founders = [
  {
    name: 'Roberta Migliori',
    role: 'Business Developer and Producer',
    bio: 'Former Executive Producer at 3DClouds (60-person studio) and Brand Manager at Slitherine Games. Expert in planning, budgeting, team coordination, and publisher relations. Shipped 7 PC/console games in under 4 years.',
    image: '/team/roberta.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Edmondo Guerci',
    role: 'Creative Director',
    bio: 'Senior Game Designer, currently Lead Designer on an unannounced project with system-driven design. Previously worked as a Level Designer on Enotria: The Last Song (AA Soulslike) and Hot Wheels Unleashed — Game Awards nominee for Best Sports/Racing.',
    image: '/team/edmondo.jpg',
    linkedin: 'https://linkedin.com',
  },
]

// Timeline milestones - REAL from Business Plan
const milestones = [
  {
    period: 'Q1-Q2 2025',
    title: 'Groundwork',
    description: 'Assembled a complete senior team and defined a clear design identity. Created first working prototype of Fatewalkers in three months.',
    icon: FaRocket,
  },
  {
    period: 'Q3-Q4 2025',
    title: 'Building the Brand',
    description: 'Launching Attic Hatchling mentorship program and building online presence. Working toward vertical slice for publisher funding.',
    icon: FaUsers,
  },
  {
    period: 'Q1-Q2 2026',
    title: 'Community Focus',
    description: 'Opening Steam page and sharing demos on itch.io to build community, gather feedback, and test assumptions with real data.',
    icon: FaHandshake,
  },
  {
    period: 'Q3-Q4 2026+',
    title: 'Funding & Growth',
    description: 'Securing publisher funding with stronger build and early community metrics. Continuing to refine and improve market fit.',
    icon: FaTrophy,
  },
]

// Values - Based on Business Plan strengths
const values = [
  {
    title: 'Experience',
    description: 'Experienced founders with proven track record across licensed and original titles for PC and consoles.',
    icon: FaTrophy,
    color: 'from-secondary to-primary',
  },
  {
    title: 'Innovation',
    description: 'Fast-prototyping culture: we recognize and scrap creative ideas that don\'t work, iterating toward excellence.',
    icon: FaLightbulb,
    color: 'from-accent to-secondary',
  },
  {
    title: 'Community',
    description: 'The Attic Hatchling mentorship program with community impact, talent scouting, and industry visibility.',
    icon: FaUsers,
    color: 'from-primary to-accent',
  },
  {
    title: 'Sustainability',
    description: 'Cost-efficient structure and clear long-term vision focused on owning our niche in system-driven RPGs.',
    icon: FaCode,
    color: 'from-secondary to-accent',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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
            <h1 className="heading-1 mb-6 text-text-primary">
              We Create <span className="gradient-text">Accessible</span> System-Driven <span className="gradient-text">RPGs</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Attic Studio is an experienced development team with a proven track record across licensed
              and original titles for PC and consoles. We're bringing the depth of system-driven games
              like RimWorld and Kenshi to a wider, midcore audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background-tertiary rounded-2xl p-8 border border-neutral-800 hover:border-secondary/50 transition-colors"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-6">
                <FaRocket className="text-2xl text-white" />
              </div>
              <h2 className="heading-3 text-text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-text-secondary mb-6">
                Bring the immense player freedom and replayability of system-driven games to broader audiences
                through easier onboarding, shorter sessions, and modern UX design.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span className="text-text-secondary">Easier onboarding for new players</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span className="text-text-secondary">Shorter, smarter sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span className="text-text-secondary">Strong replayability and depth</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background-tertiary rounded-2xl p-8 border border-neutral-800 hover:border-accent/50 transition-colors"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center mb-6">
                <FaLightbulb className="text-2xl text-white" />
              </div>
              <h2 className="heading-3 text-text-primary mb-4">
                Our Vision
              </h2>
              <p className="text-text-secondary mb-6">
                Own our niche. Become the go-to studio for accessible, system-driven RPGs, building reusable
                tech and design frameworks to scale efficiently across multiple titles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-text-secondary">Lead in system-driven game innovation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-text-secondary">Build scalable tools and frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-text-secondary">Define new standards in the genre</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
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
              Meet the <span className="gradient-text">Founders</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Experienced professionals channeling years of building games together into a vision of our own
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-background-tertiary rounded-2xl p-8 border border-neutral-800 hover:border-secondary/50 transition-all hover:shadow-xl hover:shadow-secondary/10"
              >
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="heading-3 text-text-primary mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-secondary font-semibold mb-4">
                      {founder.role}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              From first prototype to building a sustainable indie studio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background-tertiary rounded-xl p-6 border border-neutral-800 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-xl text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-secondary font-bold text-sm">
                        {milestone.period}
                      </span>
                      <h3 className="heading-4 text-text-primary mt-1 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              The principles that guide our decisions and define who we are as a studio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-background-tertiary rounded-xl p-6 border border-neutral-800 hover:border-secondary/50 transition-all h-full hover:shadow-xl hover:shadow-secondary/10 hover:-translate-y-1">
                    <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-xl text-white" />
                    </div>
                    <h3 className="heading-4 text-text-primary mb-2">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {value.description}
                    </p>
                  </div>
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
              Want to Learn More?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Explore our debut title Fatewalkers or check out our mentorship program
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/games">
                <Button variant="primary" size="lg">
                  Discover Fatewalkers
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
