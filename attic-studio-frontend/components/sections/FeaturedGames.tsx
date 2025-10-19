'use client'

import { motion } from 'framer-motion'
import { GameCard } from '@/components/ui/Card'
import Link from 'next/link'
import Button from '@/components/ui/Button'

// Mock data - sostituire con dati reali da Strapi
const mockGames = [
  {
    id: 1,
    title: 'Mystic Odyssey',
    tagline: 'Un\'avventura epica attraverso mondi mistici e incantati',
    thumbnail: '/images/games/mystic-odyssey.svg',
    href: '/games/mystic-odyssey',
    platforms: ['PC', 'PS5', 'Xbox'],
    genre: ['Adventure', 'RPG']
  },
  {
    id: 2,
    title: 'Cyber Nexus',
    tagline: 'Combatti per la sopravvivenza in un futuro distopico',
    thumbnail: '/images/games/cyber-nexus.svg',
    href: '/games/cyber-nexus',
    platforms: ['PC', 'Mobile'],
    genre: ['Action', 'Sci-Fi']
  },
  {
    id: 3,
    title: 'Puzzle Realms',
    tagline: 'Risolvi enigmi impossibili per salvare il regno',
    thumbnail: '/images/games/puzzle-realms.svg',
    href: '/games/puzzle-realms',
    platforms: ['Mobile', 'Switch'],
    genre: ['Puzzle', 'Strategy']
  }
]

export default function FeaturedGames() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            I Nostri <span className="gradient-text">Giochi</span>
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Esplora le nostre creazioni più recenti e immergiti in mondi straordinari
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GameCard
                title={game.title}
                tagline={game.tagline}
                thumbnail={game.thumbnail}
                href={game.href}
                platforms={game.platforms}
                genre={game.genre}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/games">
            <Button variant="outline" size="lg">
              Scopri Tutti i Giochi
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}