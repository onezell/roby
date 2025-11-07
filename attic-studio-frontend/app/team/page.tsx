'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaBriefcase } from 'react-icons/fa'
import Button from '@/components/ui/Button'
import Link from 'next/link'

// Mock team data
const teamMembers = [
  {
    id: 1,
    name: 'Marco Rossi',
    role: 'CEO & Founder',
    department: 'Leadership',
    bio: 'Visionario del gaming con oltre 15 anni di esperienza. Ha fondato Attic Studio con la missione di creare esperienze videoludiche innovative.',
    photo: '/images/team/marco.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/marco',
      twitter: 'https://twitter.com/marco',
      github: 'https://github.com/marco',
    },
  },
  {
    id: 2,
    name: 'Laura Bianchi',
    role: 'Creative Director',
    department: 'Design',
    bio: 'Game designer pluripremiata specializzata in narrative design e meccaniche innovative. Ha lavorato su oltre 20 titoli di successo.',
    photo: '/images/team/laura.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 3,
    name: 'Giovanni Verdi',
    role: 'Technical Director',
    department: 'Engineering',
    bio: 'Esperto di architetture scalabili e ottimizzazione. Guida il team tecnico nella creazione di soluzioni all\'avanguardia.',
    photo: '/images/team/giovanni.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: 4,
    name: 'Sofia Romano',
    role: 'Lead Artist',
    department: 'Art',
    bio: 'Artista 3D con una passione per la creazione di mondi immersivi. Specializzata in character design e environment art.',
    photo: '/images/team/sofia.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 5,
    name: 'Alessandro Conti',
    role: 'Lead Developer',
    department: 'Engineering',
    bio: 'Unity expert con focus su gameplay programming e sistemi multiplayer. Ama trasformare idee complesse in codice elegante.',
    photo: '/images/team/alessandro.jpg',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 6,
    name: 'Giulia Ferrari',
    role: 'UX/UI Designer',
    department: 'Design',
    bio: 'Designer specializzata in interfacce intuitive e accessibili. Crea esperienze utente che deliziano e coinvolgono.',
    photo: '/images/team/giulia.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 7,
    name: 'Matteo Russo',
    role: 'Sound Designer',
    department: 'Audio',
    bio: 'Compositore e sound designer che crea paesaggi sonori immersivi. Ha vinto numerosi premi per le sue colonne sonore.',
    photo: '/images/team/matteo.jpg',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 8,
    name: 'Elena Martini',
    role: 'Marketing Manager',
    department: 'Marketing',
    bio: 'Stratega del marketing digitale con esperienza nel gaming. Costruisce community e lancia prodotti di successo.',
    photo: '/images/team/elena.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
]

const departments = ['Tutti', 'Leadership', 'Engineering', 'Design', 'Art', 'Audio', 'Marketing']

export default function TeamPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('Tutti')

  const filteredMembers = teamMembers.filter(member =>
    selectedDepartment === 'Tutti' || member.department === selectedDepartment
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-1 mb-6 text-text-primary">
              Incontra il <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Professionisti appassionati uniti dalla voglia di creare esperienze di gioco straordinarie.
              Ogni membro del team porta competenze uniche e una visione condivisa dell'eccellenza.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 border-b border-neutral-800">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {departments.map(dept => (
              <Button
                key={dept}
                variant={selectedDepartment === dept ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-background-tertiary rounded-xl overflow-hidden border border-neutral-800 hover:border-accent-cyan/50 transition-all hover:-translate-y-2">
                  {/* Photo */}
                  <div className="aspect-square bg-gradient-to-br from-accent-purple/30 to-accent-cyan/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {/* Placeholder avatar */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="heading-4 text-text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent-cyan text-sm font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="p-2 bg-background-elevated rounded-lg hover:bg-accent-cyan/20 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin className="text-text-muted hover:text-accent-cyan" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="p-2 bg-background-elevated rounded-lg hover:bg-accent-cyan/20 transition-colors"
                          aria-label="Twitter"
                        >
                          <FaTwitter className="text-text-muted hover:text-accent-cyan" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="p-2 bg-background-elevated rounded-lg hover:bg-accent-cyan/20 transition-colors"
                          aria-label="GitHub"
                        >
                          <FaGithub className="text-text-muted hover:text-accent-cyan" />
                        </a>
                      )}
                      <button
                        className="p-2 bg-background-elevated rounded-lg hover:bg-accent-cyan/20 transition-colors"
                        aria-label="Email"
                      >
                        <FaEnvelope className="text-text-muted hover:text-accent-cyan" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-background-tertiary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-accent-purple/20 via-background-tertiary to-accent-cyan/20 rounded-2xl p-12 text-center border border-neutral-800"
          >
            <FaBriefcase className="text-5xl text-accent-cyan mx-auto mb-6" />
            <h2 className="heading-2 text-text-primary mb-4">
              Unisciti al <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Siamo sempre alla ricerca di talenti appassionati.
              Se ami i videogiochi e vuoi fare la differenza, vogliamo conoscerti!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Invia il tuo CV
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Posizioni Aperte
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              La Nostra <span className="gradient-text">Cultura</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Un ambiente di lavoro che favorisce creatività, collaborazione e crescita personale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Work-Life Balance',
                description: 'Orari flessibili e smart working per un equilibrio perfetto',
                icon: '⚖️',
              },
              {
                title: 'Crescita Continua',
                description: 'Formazione costante e opportunità di sviluppo professionale',
                icon: '📈',
              },
              {
                title: 'Team Building',
                description: 'Eventi regolari e attività per rafforzare lo spirito di squadra',
                icon: '🎮',
              },
              {
                title: 'Progetti Innovativi',
                description: 'Lavora su giochi all\'avanguardia con tecnologie cutting-edge',
                icon: '🚀',
              },
              {
                title: 'Ambiente Inclusivo',
                description: 'Diversità e inclusione sono i nostri valori fondamentali',
                icon: '🌈',
              },
              {
                title: 'Benefit Competitivi',
                description: 'Pacchetto retributivo completo con bonus e benefit extra',
                icon: '💎',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-background-tertiary rounded-xl p-6 border border-neutral-800 hover:border-accent-cyan/50 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="heading-4 text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import { useState } from 'react'