'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaGraduationCap, FaUsers, FaLightbulb, FaHandshake, FaStar, FaDiscord, FaArrowRight, FaHeart } from 'react-icons/fa'
import Button from '@/components/ui/Button'

export default function MentorshipTrainingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-hero mb-6 text-text-primary">
              We guide game developers
              <br />
              to <span className="gradient-text">take off</span>
            </h1>

            {/* Attic Hatchlings Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <Image
                src="/images/mentorship/Logo gialloP1.png"
                alt="Attic Hatchlings"
                width={150}
                height={150}
                className="h-24 w-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"
              />
            </motion.div>

            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              We believe that supporting the future of gaming means supporting the next generation of developers.
            </p>

            <p className="text-lg text-text-muted mb-12 max-w-3xl mx-auto">
              That's why we built <strong className="text-text-primary">Attic Hatchlings</strong>, a free mentorship community open to developers
              of all levels who are finding their path after game development academies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://discord.gg/3eajWBkGyD"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="primary">
                  <FaDiscord className="mr-2" />
                  Join Attic Hatchlings
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-2 text-text-primary mb-6 text-center">
              <span className="gradient-text">Why</span>
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed text-center">
              Finding a job in the gaming industry has never been harder. Junior talent often feels left alone after
              academies end, and connecting with experienced professionals can seem impossible. If we don't address this,
              talented developers risk never fully developing the skills they need — and the industry risks losing the
              creators of tomorrow, especially in Italy.
            </p>
            <p className="text-text-secondary leading-relaxed text-center">
              We help juniors navigate this challenging landscape, keeping them motivated and increasing their chances of
              success through mentorship, specialized training, feedback, and a supportive community during the toughest
              moments in the industry we love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-background-tertiary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              Our <span className="gradient-text">Programs</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Mentorship Community */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background-tertiary rounded-xl p-8 border border-neutral-800 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <FaUsers className="text-2xl text-white" />
              </div>
              <h3 className="heading-3 text-text-primary mb-3">
                Free Mentorship Community
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Attic Hatchlings is our free mentorship program on Discord.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Post your CV and portfolio to get expert feedback, ask for career advice, or find peers to create your own projects.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                You can also book a free live mentorship session, open to the community, held once a week on Discord.
              </p>
              <a
                href="https://discord.gg/3eajWBkGyD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors inline-flex items-center gap-2 font-semibold"
              >
                Join on Discord
                <FaArrowRight />
              </a>
            </motion.div>

            {/* Private Mentorships */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background-tertiary rounded-xl p-8 border border-neutral-800 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center mb-6">
                <FaHandshake className="text-2xl text-white" />
              </div>
              <h3 className="heading-3 text-text-primary mb-3">
                Private Mentorships
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                For faster, in-depth feedback and private mentorship beyond the community schedule, we offer sessions at
                accessible prices, fully reinvested into our first game prototype.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed italic">
                Even if you don't book a private session, chatting and asking for advice is always free: the community
                is yours to use as much as you like!
              </p>
            </motion.div>

            {/* Premium Courses */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background-tertiary rounded-xl p-8 border border-neutral-800 hover:border-secondary/50 transition-all hover:shadow-xl hover:shadow-secondary/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-6">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h3 className="heading-3 text-text-primary mb-3">
                Training & Tutoring
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We partnered with Digital Bros Game Academy to provide tutoring for students of the Game Design Online Master's program.
              </p>
              <Link
                href="https://dbgameacademy.it/corsi-online/master-online-game-design/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors inline-flex items-center gap-2 font-semibold"
              >
                Learn more
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Academies */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-background-tertiary rounded-2xl p-8 border border-neutral-800">
              <h2 className="heading-2 text-text-primary mb-4">
                Are you a <span className="gradient-text">game dev academy</span>? Get in touch!
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Are you a game development academy? We love collaborating on training, classes, and potential partnerships
                with Attic Hatchlings.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donate Section (placeholder) */}
      <section className="section-padding bg-background-tertiary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-background-elevated rounded-2xl p-8 border border-neutral-800">
              <FaHeart className="text-5xl text-primary mx-auto mb-4" />
              <h2 className="heading-3 text-text-primary mb-4">
                Support Our Mission
              </h2>
              <p className="text-text-secondary text-sm italic">
                (We'll open a Buy me a coffee account soon – still handling some bureaucratic matters!)
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
