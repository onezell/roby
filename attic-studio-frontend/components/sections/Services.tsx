'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: 'Game Development',
    description: 'Sviluppo completo di videogiochi multipiattaforma con tecnologie all\'avanguardia',
    icon: '🎮',
    features: ['Unity & Unreal Engine', 'Multiplayer', 'VR/AR Support'],
    color: 'primary'
  },
  {
    id: 2,
    title: 'Game Design',
    description: 'Progettazione di gameplay coinvolgenti e meccaniche innovative',
    icon: '🎨',
    features: ['Concept Design', 'Level Design', 'Game Balance'],
    color: 'secondary'
  },
  {
    id: 3,
    title: 'Art & Animation',
    description: 'Creazione di asset grafici e animazioni di alta qualità',
    icon: '✨',
    features: ['2D/3D Art', 'Character Design', 'Visual Effects'],
    color: 'accent'
  },
  {
    id: 4,
    title: 'Consulenza',
    description: 'Supporto tecnico e strategico per i tuoi progetti di gaming',
    icon: '💡',
    features: ['Code Review', 'Optimization', 'Tech Stack Planning'],
    color: 'neutral'
  }
]

const colorClasses = {
  primary: 'bg-primary/10 text-primary border border-primary/30 group-hover:bg-primary group-hover:text-white',
  secondary: 'bg-secondary/10 text-secondary border border-secondary/30 group-hover:bg-secondary group-hover:text-white',
  accent: 'bg-accent/10 text-accent-800 border border-accent/30 group-hover:bg-accent group-hover:text-primary',
  neutral: 'bg-neutral-200 text-neutral-700 border border-neutral-300 group-hover:bg-neutral-300 group-hover:text-neutral-900'
}

export default function Services() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            I Nostri <span className="gradient-text">Servizi</span>
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Offriamo soluzioni complete per portare la tua idea di gioco dalla concezione al lancio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/services#${service.title.toLowerCase().replace(' ', '-')}`}>
                <div className="group h-full bg-background-elevated rounded-xl p-6 border border-neutral-200 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={cn(
                      'w-16 h-16 rounded-lg flex items-center justify-center text-3xl mb-4 transition-all duration-300',
                      colorClasses[service.color as keyof typeof colorClasses]
                    )}
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="heading-4 mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="body-small text-text-muted mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-text-muted">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <span className="text-primary font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                      Scopri di più →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}