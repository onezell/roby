'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GameCard } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

// Mock data - sostituire con dati reali da Strapi
const allGames = [
  {
    id: 1,
    title: 'Mystic Odyssey',
    tagline: 'Un\'avventura epica attraverso mondi mistici e incantati',
    thumbnail: '/images/game1.jpg',
    href: '/games/mystic-odyssey',
    platforms: ['PC', 'PS5', 'Xbox'],
    genre: ['Adventure', 'RPG'],
    status: 'released',
    year: 2024
  },
  {
    id: 2,
    title: 'Cyber Nexus',
    tagline: 'Combatti per la sopravvivenza in un futuro distopico',
    thumbnail: '/images/game2.jpg',
    href: '/games/cyber-nexus',
    platforms: ['PC', 'Mobile'],
    genre: ['Action', 'Sci-Fi'],
    status: 'released',
    year: 2024
  },
  {
    id: 3,
    title: 'Puzzle Realms',
    tagline: 'Risolvi enigmi impossibili per salvare il regno',
    thumbnail: '/images/game3.jpg',
    href: '/games/puzzle-realms',
    platforms: ['Mobile', 'Switch'],
    genre: ['Puzzle', 'Strategy'],
    status: 'in-development',
    year: 2025
  },
  {
    id: 4,
    title: 'Dragon\'s Legacy',
    tagline: 'Esplora terre leggendarie e affronta creature mitiche',
    thumbnail: '/images/game4.jpg',
    href: '/games/dragons-legacy',
    platforms: ['PC', 'PS5'],
    genre: ['RPG', 'Fantasy'],
    status: 'released',
    year: 2023
  },
  {
    id: 5,
    title: 'Space Pioneers',
    tagline: 'Colonizza nuovi mondi nella frontiera spaziale',
    thumbnail: '/images/game5.jpg',
    href: '/games/space-pioneers',
    platforms: ['PC'],
    genre: ['Strategy', 'Simulation'],
    status: 'coming-soon',
    year: 2025
  },
  {
    id: 6,
    title: 'Neon Racers',
    tagline: 'Gareggia attraverso città cyberpunk al neon',
    thumbnail: '/images/game6.jpg',
    href: '/games/neon-racers',
    platforms: ['PC', 'Mobile', 'Switch'],
    genre: ['Racing', 'Arcade'],
    status: 'released',
    year: 2024
  }
]

const platforms = ['Tutti', 'PC', 'Mobile', 'PS5', 'Xbox', 'Switch']
const genres = ['Tutti', 'Adventure', 'RPG', 'Action', 'Puzzle', 'Strategy', 'Racing', 'Sci-Fi', 'Fantasy', 'Simulation', 'Arcade']
const statuses = ['Tutti', 'released', 'in-development', 'coming-soon']

export default function GamesPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('Tutti')
  const [selectedGenre, setSelectedGenre] = useState('Tutti')
  const [selectedStatus, setSelectedStatus] = useState('Tutti')

  const filteredGames = allGames.filter(game => {
    const platformMatch = selectedPlatform === 'Tutti' || game.platforms.includes(selectedPlatform)
    const genreMatch = selectedGenre === 'Tutti' || game.genre.includes(selectedGenre)
    const statusMatch = selectedStatus === 'Tutti' || game.status === selectedStatus
    return platformMatch && genreMatch && statusMatch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="heading-1 mb-4">
              Il Nostro <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="body-large text-neutral-600 max-w-2xl mx-auto">
              Esplora i giochi che abbiamo creato con passione e dedizione
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Platform Filter */}
            <div className="flex gap-2">
              <span className="text-sm font-medium text-neutral-600 self-center">Piattaforma:</span>
              <div className="flex flex-wrap gap-2">
                {platforms.map(platform => (
                  <Button
                    key={platform}
                    variant={selectedPlatform === platform ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedPlatform(platform)}
                  >
                    {platform}
                  </Button>
                ))}
              </div>
            </div>

            {/* Genre Filter */}
            <div className="flex gap-2">
              <span className="text-sm font-medium text-neutral-600 self-center">Genere:</span>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="flex gap-2">
              <span className="text-sm font-medium text-neutral-600 self-center">Stato:</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="Tutti">Tutti</option>
                <option value="released">Rilasciato</option>
                <option value="in-development">In Sviluppo</option>
                <option value="coming-soon">In Arrivo</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredGames.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGames.map((game, index) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
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
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-neutral-600">
                Nessun gioco trovato con i filtri selezionati.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPlatform('Tutti')
                  setSelectedGenre('Tutti')
                  setSelectedStatus('Tutti')
                }}
                className="mt-4"
              >
                Resetta Filtri
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}