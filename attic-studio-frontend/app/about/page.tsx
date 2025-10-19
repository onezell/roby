'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaGamepad, FaUsers, FaTrophy, FaCode, FaLightbulb, FaHandshake, FaGraduationCap, FaArrowRight } from 'react-icons/fa'
import Button from '@/components/ui/Button'

// Timeline data
const milestones = [
  {
    year: '2018',
    title: 'La Nascita di Attic Studio',
    description: 'Fondato da un gruppo di sviluppatori appassionati con il sogno di creare videogiochi innovativi.',
    icon: FaRocket,
  },
  {
    year: '2019',
    title: 'Primo Gioco Pubblicato',
    description: 'Lancio di "Mystic Odyssey", il nostro primo titolo che ha raggiunto oltre 100k download.',
    icon: FaGamepad,
  },
  {
    year: '2020',
    title: 'Espansione del Team',
    description: 'Il team cresce a 15 persone, aggiungendo artisti, designer e sound engineer di talento.',
    icon: FaUsers,
  },
  {
    year: '2021',
    title: 'Premio "Indie Game of the Year"',
    description: 'Cyber Nexus vince il prestigioso premio come miglior gioco indie dell\'anno.',
    icon: FaTrophy,
  },
  {
    year: '2022',
    title: 'Lancio Divisione Formazione',
    description: 'Iniziamo a condividere le nostre conoscenze attraverso corsi professionali di game development.',
    icon: FaGraduationCap,
  },
  {
    year: '2023',
    title: 'Partnership Globali',
    description: 'Collaborazioni con major publisher e università per progetti innovativi e formazione.',
    icon: FaHandshake,
  },
  {
    year: '2024',
    title: 'Studio All\'Avanguardia',
    description: 'Nuovo studio con tecnologie VR/AR e motion capture per produzione AAA.',
    icon: FaLightbulb,
  },
]

// Values data
const values = [
  {
    title: 'Innovazione',
    description: 'Spingiamo costantemente i confini di ciò che è possibile nel gaming.',
    icon: FaLightbulb,
    color: 'from-accent-cyan to-accent-purple',
  },
  {
    title: 'Qualità',
    description: 'Ogni progetto è curato nei minimi dettagli per offrire esperienze memorabili.',
    icon: FaTrophy,
    color: 'from-accent-purple to-accent-pink',
  },
  {
    title: 'Passione',
    description: 'Il gaming è nel nostro DNA e guida ogni decisione che prendiamo.',
    icon: FaGamepad,
    color: 'from-accent-pink to-accent-orange',
  },
  {
    title: 'Community',
    description: 'Creiamo giochi che uniscono le persone e costruiscono comunità durature.',
    icon: FaUsers,
    color: 'from-accent-orange to-accent-yellow',
  },
  {
    title: 'Formazione',
    description: 'Condividiamo le nostre conoscenze per far crescere la prossima generazione.',
    icon: FaGraduationCap,
    color: 'from-accent-yellow to-accent-green',
  },
  {
    title: 'Eccellenza',
    description: 'Puntiamo sempre all\'eccellenza tecnica e creativa in ogni aspetto.',
    icon: FaCode,
    color: 'from-accent-green to-accent-cyan',
  },
]

// Stats data
const stats = [
  { number: '50+', label: 'Giochi Sviluppati' },
  { number: '2M+', label: 'Giocatori Attivi' },
  { number: '30+', label: 'Professionisti' },
  { number: '95%', label: 'Clienti Soddisfatti' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-primary via-background-secondary to-background-primary">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
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
              Creiamo <span className="gradient-text">Esperienze</span> che Ispirano
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Attic Studio è più di un'agenzia di sviluppo videogiochi.
              Siamo un team di sognatori, innovatori e artigiani digitali che trasformano
              idee audaci in realtà interattive straordinarie.
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
              className="bg-background-tertiary rounded-2xl p-8 border border-neutral-800 hover:border-accent-cyan/50 transition-colors"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-lg flex items-center justify-center mb-6">
                <FaRocket className="text-2xl text-white" />
              </div>
              <h2 className="heading-3 text-text-primary mb-4">
                La Nostra Mission
              </h2>
              <p className="text-text-secondary mb-6">
                Creare videogiochi che non solo intrattengono, ma ispirano, educano e connettono
                le persone attraverso esperienze interattive uniche e memorabili. Vogliamo
                spingere i confini della creatività e dell'innovazione nel gaming.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-1">•</span>
                  <span className="text-text-secondary">Sviluppare giochi che raccontano storie significative</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-1">•</span>
                  <span className="text-text-secondary">Innovare con tecnologie all'avanguardia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-1">•</span>
                  <span className="text-text-secondary">Formare la prossima generazione di sviluppatori</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background-tertiary rounded-2xl p-8 border border-neutral-800 hover:border-accent-purple/50 transition-colors"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-pink rounded-lg flex items-center justify-center mb-6">
                <FaLightbulb className="text-2xl text-white" />
              </div>
              <h2 className="heading-3 text-text-primary mb-4">
                La Nostra Vision
              </h2>
              <p className="text-text-secondary mb-6">
                Diventare un punto di riferimento globale nello sviluppo di videogiochi indie e AAA,
                riconosciuti per la nostra creatività, eccellenza tecnica e capacità di creare
                esperienze che lasciano un segno duraturo nel cuore dei giocatori.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent-purple mt-1">•</span>
                  <span className="text-text-secondary">Essere leader nell'innovazione gaming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-purple mt-1">•</span>
                  <span className="text-text-secondary">Creare un ecosistema di talenti creativi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-purple mt-1">•</span>
                  <span className="text-text-secondary">Definire nuovi standard di qualità</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-transparent to-accent-cyan/10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-text-secondary">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
              Il Nostro <span className="gradient-text">Percorso</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Dai primi passi nel garage di casa fino a diventare uno studio riconosciuto a livello internazionale
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-pink opacity-30" />

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon
                const isLeft = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`inline-block ${isLeft ? 'md:ml-auto' : ''}`}>
                        <div className="bg-background-tertiary rounded-xl p-6 border border-neutral-800 hover:border-accent-cyan/50 transition-all hover:shadow-lg hover:shadow-accent-cyan/10">
                          <span className="text-accent-cyan font-bold text-lg">
                            {milestone.year}
                          </span>
                          <h3 className="heading-4 text-text-primary mt-2 mb-3">
                            {milestone.title}
                          </h3>
                          <p className="text-text-secondary">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-full flex items-center justify-center shadow-lg shadow-accent-cyan/30">
                        <Icon className="text-2xl text-white" />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                )
              })}
            </div>
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
              I Nostri <span className="gradient-text">Valori</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              I principi che guidano ogni nostra decisione e definiscono chi siamo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="bg-background-tertiary rounded-xl p-6 border border-neutral-800 hover:border-accent-cyan/50 transition-all h-full hover:shadow-xl hover:shadow-accent-cyan/10 hover:-translate-y-2">
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-2xl text-white" />
                    </div>
                    <h3 className="heading-4 text-text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              Il Team Dietro la <span className="gradient-text">Magia</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Un gruppo di professionisti appassionati uniti dalla voglia di creare qualcosa di straordinario
            </p>

            {/* Team grid preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="aspect-square rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 border border-neutral-800"
                />
              ))}
            </div>

            <Link href="/team">
              <Button variant="primary" size="lg">
                Conosci il Team Completo
                <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Workspace Gallery */}
      <section className="py-20 bg-background-tertiary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              Il Nostro <span className="gradient-text">Studio</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Uno spazio creativo dove le idee prendono vita
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 aspect-video bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 rounded-xl border border-neutral-800"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="aspect-video bg-gradient-to-br from-accent-cyan/20 to-accent-pink/20 rounded-xl border border-neutral-800"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-video bg-gradient-to-br from-accent-pink/20 to-accent-orange/20 rounded-xl border border-neutral-800"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 aspect-video bg-gradient-to-br from-accent-orange/20 to-accent-yellow/20 rounded-xl border border-neutral-800"
            />
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
            className="bg-gradient-to-r from-accent-purple/20 via-background-tertiary to-accent-cyan/20 rounded-2xl p-12 text-center border border-neutral-800"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              Pronto a Creare Qualcosa di <span className="gradient-text">Straordinario</span>?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Che tu voglia sviluppare un gioco o imparare a crearne uno, siamo qui per aiutarti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Inizia un Progetto
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="outline" size="lg">
                  Esplora i Corsi
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}