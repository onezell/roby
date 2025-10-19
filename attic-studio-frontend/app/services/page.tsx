'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FaGamepad, FaPaintBrush, FaCode, FaMusic, FaLightbulb, FaRocket,
  FaCube, FaMobileAlt, FaDesktop, FaVrCardboard, FaCheckCircle,
  FaArrowRight, FaBrain, FaChartLine, FaUsers, FaCogs, FaTrophy, FaHandshake
} from 'react-icons/fa'
import Button from '@/components/ui/Button'

// Services data
const services = [
  {
    id: 'game-development',
    title: 'Game Development',
    shortDescription: 'Sviluppo completo di videogiochi per tutte le piattaforme',
    description: `Trasformiamo le tue idee in videogiochi completi e pronti per il mercato.
    Dal concept iniziale al lancio finale, gestiamo ogni aspetto dello sviluppo con
    competenza e passione. Il nostro team multidisciplinare garantisce risultati di
    qualità AAA anche per progetti indie.`,
    icon: FaGamepad,
    color: 'from-accent-cyan to-accent-purple',
    features: [
      'Sviluppo completo end-to-end',
      'Prototipazione rapida',
      'Porting multipiattaforma',
      'Ottimizzazione performance',
      'Integrazione multiplayer',
      'Sistemi di monetizzazione',
    ],
    technologies: ['Unity', 'Unreal Engine', 'Godot', 'C++', 'C#', 'JavaScript'],
    projects: [
      { title: 'Mystic Odyssey', platform: 'PC/Console' },
      { title: 'Cyber Nexus', platform: 'Mobile/PC' },
      { title: 'Dragon\'s Legacy', platform: 'PS5/Xbox' },
    ],
  },
  {
    id: 'game-design',
    title: 'Game Design',
    shortDescription: 'Progettazione di meccaniche di gioco e level design coinvolgenti',
    description: `Creiamo esperienze di gioco memorabili attraverso un design attento e innovativo.
    Dalle meccaniche di base ai sistemi complessi, progettiamo ogni elemento per massimizzare
    il coinvolgimento e il divertimento del giocatore.`,
    icon: FaLightbulb,
    color: 'from-accent-purple to-accent-pink',
    features: [
      'Game Design Document completo',
      'Meccaniche di gioco innovative',
      'Level design professionale',
      'Bilanciamento gameplay',
      'Narrative design',
      'User experience optimization',
    ],
    technologies: ['Figma', 'Miro', 'Unity', 'Unreal', 'PlaytestCloud'],
    projects: [
      { title: 'Puzzle Realms', platform: 'Mobile' },
      { title: 'Space Pioneers', platform: 'PC' },
      { title: 'Neon Racers', platform: 'Multi-platform' },
    ],
  },
  {
    id: 'art-animation',
    title: 'Art & Animation',
    shortDescription: '2D/3D art, character design e animazioni professionali',
    description: `Diamo vita ai tuoi personaggi e mondi con arte e animazioni di alta qualità.
    Il nostro team di artisti crea asset visivi straordinari che catturano l'immaginazione
    e definiscono l'identità visiva del tuo gioco.`,
    icon: FaPaintBrush,
    color: 'from-accent-pink to-accent-orange',
    features: [
      'Character design e modeling',
      '2D/3D asset creation',
      'Animazione personaggi',
      'Environment art',
      'UI/UX design',
      'Visual effects (VFX)',
    ],
    technologies: ['Blender', 'Maya', 'Substance Painter', 'ZBrush', 'Photoshop', 'Spine'],
    projects: [
      { title: 'Fantasy Warriors', platform: 'Mobile' },
      { title: 'Sci-Fi Adventures', platform: 'PC/Console' },
      { title: 'Cartoon Racing', platform: 'Switch' },
    ],
  },
  {
    id: 'audio-design',
    title: 'Audio Design',
    shortDescription: 'Sound effects, musica originale e voice over professionali',
    description: `Creiamo paesaggi sonori immersivi che amplificano l'esperienza di gioco.
    Dalla musica epica agli effetti sonori dettagliati, ogni elemento audio è
    progettato per coinvolgere emotivamente il giocatore.`,
    icon: FaMusic,
    color: 'from-accent-orange to-accent-yellow',
    features: [
      'Composizione musica originale',
      'Sound effects design',
      'Voice over e doppiaggio',
      'Audio spaziale 3D',
      'Mix e mastering',
      'Implementazione audio dinamico',
    ],
    technologies: ['FMOD', 'Wwise', 'Pro Tools', 'Logic Pro', 'Ableton Live', 'Reaper'],
    projects: [
      { title: 'Epic Symphony', platform: 'AAA Game' },
      { title: 'Ambient Worlds', platform: 'VR Experience' },
      { title: 'Action Beats', platform: 'Mobile Game' },
    ],
  },
  {
    id: 'consulting',
    title: 'Consulenza e Mentoring',
    shortDescription: 'Supporto esperto per ottimizzare i tuoi progetti di gioco',
    description: `Offriamo consulenza professionale per aiutarti a superare le sfide tecniche
    e creative del game development. Dal code review all'ottimizzazione delle pipeline,
    siamo qui per portare il tuo progetto al livello successivo.`,
    icon: FaBrain,
    color: 'from-accent-yellow to-accent-green',
    features: [
      'Code review e optimization',
      'Architecture consulting',
      'Pipeline optimization',
      'Team training',
      'Technical mentoring',
      'Project management support',
    ],
    technologies: ['Git', 'Jenkins', 'Docker', 'AWS', 'Agile', 'Scrum'],
    projects: [
      { title: 'Studio Transformation', platform: 'Enterprise' },
      { title: 'Pipeline Optimization', platform: 'AAA Studio' },
      { title: 'Team Training', platform: 'Indie Teams' },
    ],
  },
  {
    id: 'vr-ar',
    title: 'VR/AR Development',
    shortDescription: 'Esperienze immersive per realtà virtuale e aumentata',
    description: `Sviluppiamo esperienze VR e AR all'avanguardia che trasportano gli utenti
    in nuove dimensioni. Dalle applicazioni educative ai giochi immersivi,
    sfruttiamo al massimo le tecnologie XR.`,
    icon: FaVrCardboard,
    color: 'from-accent-green to-accent-cyan',
    features: [
      'VR game development',
      'AR applications',
      'Mixed reality experiences',
      'Hand tracking integration',
      'Spatial computing',
      'Cross-platform XR',
    ],
    technologies: ['Unity XR', 'Unreal VR', 'OpenXR', 'ARCore', 'ARKit', 'Meta SDK'],
    projects: [
      { title: 'VR Training Sim', platform: 'Quest 3' },
      { title: 'AR Museum', platform: 'Mobile AR' },
      { title: 'MR Workspace', platform: 'HoloLens' },
    ],
  },
]

// Process steps
const process = [
  {
    step: 1,
    title: 'Discovery',
    description: 'Analizziamo le tue esigenze e definiamo gli obiettivi del progetto',
    icon: FaLightbulb,
  },
  {
    step: 2,
    title: 'Planning',
    description: 'Creiamo un piano dettagliato con timeline e milestone chiari',
    icon: FaChartLine,
  },
  {
    step: 3,
    title: 'Development',
    description: 'Il nostro team inizia lo sviluppo con aggiornamenti regolari',
    icon: FaCogs,
  },
  {
    step: 4,
    title: 'Testing',
    description: 'Test approfonditi per garantire qualità e performance ottimali',
    icon: FaUsers,
  },
  {
    step: 5,
    title: 'Launch',
    description: 'Lanciamo il tuo progetto e forniamo supporto post-lancio',
    icon: FaRocket,
  },
]

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-primary via-background-secondary to-background-primary">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
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
              Servizi <span className="gradient-text">Professionali</span> per il Gaming
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Dal concept al lancio, offriamo servizi completi di sviluppo videogiochi
              con competenza tecnica e creatività senza compromessi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="bg-background-tertiary rounded-xl p-6 border border-neutral-800 hover:border-accent-cyan/50 transition-all h-full hover:shadow-xl hover:shadow-accent-cyan/10 hover:-translate-y-2">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-2xl text-white" />
                    </div>
                    <h3 className="heading-4 text-text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="text-accent-cyan text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                      Scopri di più <FaArrowRight />
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Details Modal/Section */}
      {selectedService && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background-primary/95 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background-tertiary rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const service = services.find(s => s.id === selectedService)
              if (!service) return null
              const Icon = service.icon

              return (
                <>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="text-3xl text-white" />
                      </div>
                      <div>
                        <h2 className="heading-2 text-text-primary">
                          {service.title}
                        </h2>
                        <p className="text-text-muted">
                          Servizio Professionale
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-text-muted hover:text-text-primary transition-colors text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-8 text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="heading-4 text-text-primary mb-4">
                      Cosa Include
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <FaCheckCircle className="text-accent-green flex-shrink-0" />
                          <span className="text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="heading-4 text-text-primary mb-4">
                      Tecnologie Utilizzate
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-background-elevated border border-neutral-700 rounded-lg text-text-secondary text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Example Projects */}
                  <div className="mb-8">
                    <h3 className="heading-4 text-text-primary mb-4">
                      Progetti di Esempio
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {service.projects.map((project, index) => (
                        <div
                          key={index}
                          className="bg-background-elevated rounded-lg p-4 border border-neutral-800"
                        >
                          <h4 className="text-text-primary font-semibold mb-1">
                            {project.title}
                          </h4>
                          <p className="text-text-muted text-sm">
                            {project.platform}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4">
                    <Link href="/contact">
                      <Button variant="primary" size="lg">
                        Richiedi Preventivo
                      </Button>
                    </Link>
                    <Link href="/games">
                      <Button variant="outline" size="lg">
                        Vedi Portfolio
                      </Button>
                    </Link>
                  </div>
                </>
              )
            })()}
          </motion.div>
        </motion.section>
      )}

      {/* Process Section */}
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
              Il Nostro <span className="gradient-text">Processo</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Un approccio strutturato per garantire risultati eccezionali in ogni progetto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink opacity-30" />

            {process.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="w-24 h-24 mx-auto bg-background-tertiary border-2 border-accent-cyan/50 rounded-full flex items-center justify-center mb-4 relative z-10">
                    <Icon className="text-3xl text-accent-cyan" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent-cyan text-background-primary rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="heading-4 text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Perché Scegliere <span className="gradient-text">Attic Studio</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              La combinazione perfetta di creatività, competenza tecnica e passione
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaTrophy,
                title: 'Esperienza Comprovata',
                description: 'Oltre 50 giochi sviluppati con successo',
              },
              {
                icon: FaUsers,
                title: 'Team Multidisciplinare',
                description: '30+ professionisti specializzati',
              },
              {
                icon: FaRocket,
                title: 'Tecnologie All\'Avanguardia',
                description: 'Sempre aggiornati con le ultime innovazioni',
              },
              {
                icon: FaHandshake,
                title: 'Partnership Affidabile',
                description: 'Supporto completo dal concept al post-lancio',
              },
            ].map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-3xl text-accent-cyan" />
                  </div>
                  <h3 className="heading-4 text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-transparent to-accent-cyan/10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background-tertiary rounded-2xl p-12 text-center border border-neutral-800"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              Inizia il Tuo <span className="gradient-text">Progetto</span> Oggi
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Raccontaci la tua idea e ti aiuteremo a trasformarla in un videogioco di successo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Richiedi Consulenza Gratuita
                </Button>
              </Link>
              <Link href="/games">
                <Button variant="outline" size="lg">
                  Vedi i Nostri Lavori
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}