'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import CourseCard from '@/components/ui/CourseCard'
import { FaFilter, FaSearch, FaStar, FaClock, FaUsers, FaGraduationCap } from 'react-icons/fa'

// Mock data - will be replaced with Strapi data
const mockCourses = [
  {
    id: 1,
    title: 'Sviluppo Giochi con Unity - Corso Completo',
    slug: 'unity-corso-completo',
    description: 'Impara a creare videogiochi professionali con Unity, dall\'installazione alla pubblicazione',
    shortDescription: 'Corso completo per diventare Unity Developer',
    thumbnail: '/images/course-unity.jpg',
    instructorName: 'Marco Rossi',
    instructorPhoto: '/images/instructor-marco.jpg',
    level: 'Principiante',
    duration: 60,
    format: 'Online',
    price: 299,
    currency: '€',
    topics: ['Unity', 'C#', 'Game Design', '3D'],
    rating: 4.8,
    enrolledStudents: 1234,
    badge: 'Best Seller',
    featured: true,
  },
  {
    id: 2,
    title: 'Game Design Fundamentals',
    slug: 'game-design-fundamentals',
    description: 'Scopri i principi del game design e impara a progettare meccaniche di gioco coinvolgenti',
    shortDescription: 'Padroneggia l\'arte del game design',
    thumbnail: '/images/course-design.jpg',
    instructorName: 'Laura Bianchi',
    instructorPhoto: '/images/instructor-laura.jpg',
    level: 'Principiante',
    duration: 30,
    format: 'Online',
    price: 199,
    currency: '€',
    topics: ['Game Design', 'Level Design', 'UX'],
    rating: 4.9,
    enrolledStudents: 892,
    badge: 'Nuovo',
    featured: true,
  },
  {
    id: 3,
    title: 'Unreal Engine 5 - Livello Avanzato',
    slug: 'unreal-engine-5-advanced',
    description: 'Tecniche avanzate di sviluppo con Unreal Engine 5 per creare giochi AAA',
    shortDescription: 'Porta le tue skills Unreal al livello successivo',
    thumbnail: '/images/course-unreal.jpg',
    instructorName: 'Giovanni Verdi',
    instructorPhoto: '/images/instructor-giovanni.jpg',
    level: 'Avanzato',
    duration: 80,
    format: 'Hybrid',
    price: 499,
    currency: '€',
    topics: ['Unreal Engine', 'Blueprints', 'C++', 'Rendering'],
    rating: 4.7,
    enrolledStudents: 456,
    badge: null,
    featured: false,
  },
  {
    id: 4,
    title: 'Character Art per Videogiochi',
    slug: 'character-art-videogiochi',
    description: 'Crea personaggi memorabili per videogiochi con tecniche di modellazione e texturing',
    shortDescription: 'Modellazione 3D e concept art per personaggi',
    thumbnail: '/images/course-character.jpg',
    instructorName: 'Sofia Romano',
    instructorPhoto: '/images/instructor-sofia.jpg',
    level: 'Intermedio',
    duration: 45,
    format: 'Online',
    price: 249,
    currency: '€',
    topics: ['3D Art', 'Blender', 'Substance Painter', 'ZBrush'],
    rating: 4.6,
    enrolledStudents: 678,
    badge: null,
    featured: false,
  },
  {
    id: 5,
    title: 'Mobile Game Development con Flutter',
    slug: 'mobile-game-flutter',
    description: 'Sviluppa giochi mobile cross-platform utilizzando Flutter e Flame Engine',
    shortDescription: 'Crea giochi mobile per iOS e Android',
    thumbnail: '/images/course-mobile.jpg',
    instructorName: 'Alessandro Conti',
    instructorPhoto: '/images/instructor-alessandro.jpg',
    level: 'Intermedio',
    duration: 40,
    format: 'Online',
    price: 229,
    currency: '€',
    topics: ['Mobile', 'Flutter', 'Dart', 'Flame Engine'],
    rating: 4.5,
    enrolledStudents: 345,
    badge: 'In Partenza',
    featured: false,
  },
  {
    id: 6,
    title: 'Sound Design per Videogiochi',
    slug: 'sound-design-videogiochi',
    description: 'Impara a creare soundscapes immersivi e effetti sonori per videogiochi',
    shortDescription: 'Audio professionale per gaming',
    thumbnail: '/images/course-sound.jpg',
    instructorName: 'Matteo Ferrari',
    instructorPhoto: '/images/instructor-matteo.jpg',
    level: 'Intermedio',
    duration: 25,
    format: 'Online',
    price: 179,
    currency: '€',
    topics: ['Audio', 'FMOD', 'Wwise', 'Sound Design'],
    rating: 4.8,
    enrolledStudents: 234,
    badge: null,
    featured: false,
  },
]

const levels = ['Tutti', 'Principiante', 'Intermedio', 'Avanzato']
const formats = ['Tutti', 'Online', 'In-Person', 'Hybrid']
const topics = ['Tutti', 'Unity', 'Unreal Engine', 'Game Design', '3D Art', 'Programming', 'Mobile', 'Audio', 'C#', 'C++']
const sortOptions = [
  { value: 'popular', label: 'Più Popolari' },
  { value: 'latest', label: 'Più Recenti' },
  { value: 'price-low', label: 'Prezzo: Basso-Alto' },
  { value: 'price-high', label: 'Prezzo: Alto-Basso' },
  { value: 'rating', label: 'Valutazione' },
]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('Tutti')
  const [selectedFormat, setSelectedFormat] = useState('Tutti')
  const [selectedTopic, setSelectedTopic] = useState('Tutti')
  const [sortBy, setSortBy] = useState('popular')
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 1000])

  // Filter courses
  let filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = selectedLevel === 'Tutti' || course.level === selectedLevel
    const matchesFormat = selectedFormat === 'Tutti' || course.format === selectedFormat
    const matchesTopic = selectedTopic === 'Tutti' || course.topics.includes(selectedTopic)
    const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1]

    return matchesSearch && matchesLevel && matchesFormat && matchesTopic && matchesPrice
  })

  // Sort courses
  filteredCourses = [...filteredCourses].sort((a, b) => {
    switch(sortBy) {
      case 'latest':
        return b.id - a.id
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'popular':
      default:
        return b.enrolledStudents - a.enrolledStudents
    }
  })

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
            className="text-center"
          >
            <h1 className="heading-1 mb-4 text-text-primary">
              Impara a Creare <span className="gradient-text">Videogiochi</span>
            </h1>
            <p className="body-large text-text-secondary max-w-3xl mx-auto mb-8">
              Corsi professionali tenuti da esperti del settore per trasformare la tua passione in una carriera
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cerca corsi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 bg-background-elevated border border-neutral-700 text-text-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-200 placeholder:text-text-muted"
                />
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="sticky top-20 z-30 py-4 bg-background-tertiary/95 backdrop-blur-sm border-y border-neutral-800">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-background-elevated text-text-secondary border border-neutral-700 rounded-lg hover:border-accent-cyan transition-colors"
            >
              <FaFilter />
              Filtri
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex flex-wrap items-center gap-4">
              {/* Level Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-muted">Livello:</span>
                <div className="flex gap-2">
                  {levels.map(level => (
                    <Button
                      key={level}
                      variant={selectedLevel === level ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedLevel(level)}
                    >
                      {level}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Format Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-muted">Formato:</span>
                <select
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="px-4 py-2 bg-background-elevated border border-neutral-700 text-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan text-sm"
                >
                  {formats.map(format => (
                    <option key={format} value={format}>{format}</option>
                  ))}
                </select>
              </div>

              {/* Topic Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-muted">Argomento:</span>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="px-4 py-2 bg-background-elevated border border-neutral-700 text-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan text-sm"
                >
                  {topics.map(topic => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-text-muted">Ordina:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-background-elevated border border-neutral-700 text-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan text-sm"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filters (Collapsible) */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pt-4 border-t border-neutral-800"
            >
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-text-muted mb-2 block">Livello</label>
                  <div className="flex flex-wrap gap-2">
                    {levels.map(level => (
                      <Button
                        key={level}
                        variant={selectedLevel === level ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedLevel(level)}
                      >
                        {level}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-text-muted mb-2 block">Formato</label>
                  <select
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value)}
                    className="w-full px-4 py-2 bg-background-elevated border border-neutral-700 text-text-primary rounded-lg"
                  >
                    {formats.map(format => (
                      <option key={format} value={format}>{format}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm text-text-muted mb-2 block">Argomento</label>
                  <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full px-4 py-2 bg-background-elevated border border-neutral-700 text-text-primary rounded-lg"
                  >
                    {topics.map(topic => (
                      <option key={topic} value={topic}>{topic}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Results count */}
          <div className="mb-8">
            <p className="text-text-secondary">
              Trovati <span className="text-accent-cyan font-semibold">{filteredCourses.length}</span> corsi
            </p>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-text-secondary mb-4">
                Nessun corso trovato con i filtri selezionati
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedLevel('Tutti')
                  setSelectedFormat('Tutti')
                  setSelectedTopic('Tutti')
                  setSortBy('popular')
                }}
              >
                Resetta Filtri
              </Button>
            </div>
          )}

          {/* Load More Button */}
          {filteredCourses.length > 6 && (
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Carica Altri Corsi
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-transparent to-accent-cyan/10" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-4 text-text-primary">
              Resta Aggiornato sui Nuovi Corsi
            </h2>
            <p className="body-large text-text-secondary mb-8 max-w-2xl mx-auto">
              Iscriviti alla newsletter per ricevere informazioni sui nuovi corsi e offerte esclusive
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-4 py-3 bg-background-elevated border border-neutral-700 text-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan"
              />
              <Button variant="primary">
                Iscriviti
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}