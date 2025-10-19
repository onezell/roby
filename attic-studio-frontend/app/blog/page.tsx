'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaClock, FaUser, FaTag, FaSearch, FaArrowRight } from 'react-icons/fa'
import Button from '@/components/ui/Button'

// Mock blog data
const mockPosts = [
  {
    id: 1,
    title: 'Il Futuro del Gaming: Tendenze 2025',
    slug: 'futuro-gaming-2025',
    excerpt: 'Esploriamo le tecnologie emergenti che stanno ridefinendo il panorama videoludico, dall\'AI generativa al cloud gaming di nuova generazione.',
    content: 'Content here...',
    coverImage: '/images/blog-1.jpg',
    author: { name: 'Marco Rossi', role: 'Lead Developer' },
    categories: ['Tecnologia', 'Trends'],
    tags: ['AI', 'Cloud Gaming', 'VR', 'Metaverse'],
    readingTime: 8,
    publishedAt: '2024-10-15',
    featured: true,
  },
  {
    id: 2,
    title: 'Unity vs Unreal: Quale Scegliere nel 2024',
    slug: 'unity-vs-unreal-2024',
    excerpt: 'Una guida completa per scegliere il motore di gioco giusto per il tuo progetto, analizzando pro e contro di Unity e Unreal Engine.',
    coverImage: '/images/blog-2.jpg',
    author: { name: 'Laura Bianchi', role: 'Game Designer' },
    categories: ['Tutorial', 'Development'],
    tags: ['Unity', 'Unreal Engine', 'Game Engines'],
    readingTime: 12,
    publishedAt: '2024-10-10',
    featured: true,
  },
  {
    id: 3,
    title: 'Come Creare un GDD Efficace',
    slug: 'creare-gdd-efficace',
    excerpt: 'Il Game Design Document è fondamentale per ogni progetto. Scopri come strutturarlo per massimizzare la produttività del team.',
    coverImage: '/images/blog-3.jpg',
    author: { name: 'Giovanni Verdi', role: 'Creative Director' },
    categories: ['Game Design', 'Tutorial'],
    tags: ['GDD', 'Documentation', 'Planning'],
    readingTime: 10,
    publishedAt: '2024-10-05',
    featured: false,
  },
  {
    id: 4,
    title: 'Ottimizzazione Mobile: Best Practices',
    slug: 'ottimizzazione-mobile-games',
    excerpt: 'Tecniche avanzate per ottimizzare le performance dei tuoi giochi mobile e garantire un\'esperienza fluida su tutti i dispositivi.',
    coverImage: '/images/blog-4.jpg',
    author: { name: 'Alessandro Conti', role: 'Mobile Developer' },
    categories: ['Mobile', 'Optimization'],
    tags: ['Performance', 'Mobile', 'Unity', 'Tips'],
    readingTime: 6,
    publishedAt: '2024-09-28',
    featured: false,
  },
]

const categories = ['Tutti', 'Tecnologia', 'Tutorial', 'Game Design', 'Development', 'Mobile', 'Trends']

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tutti')

  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Tutti' || post.categories.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  const featuredPost = mockPosts.find(post => post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-primary via-background-secondary to-background-primary">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
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
              Attic Studio <span className="gradient-text">Blog</span>
            </h1>
            <p className="body-large text-text-secondary max-w-3xl mx-auto mb-8">
              Insights, tutorials e news dal mondo del game development
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <input
                type="text"
                placeholder="Cerca articoli..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 bg-background-elevated border border-neutral-700 text-text-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-cyan"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-neutral-800">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background-tertiary rounded-2xl overflow-hidden border border-neutral-800 hover:border-accent-cyan/50 transition-all"
            >
              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="aspect-video bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 rounded-xl" />
                  <div className="flex flex-col justify-center">
                    <span className="text-accent-cyan text-sm font-semibold mb-2">
                      ARTICOLO IN EVIDENZA
                    </span>
                    <h2 className="heading-2 text-text-primary mb-4 hover:text-accent-cyan transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-text-secondary mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-text-muted text-sm">
                      <span className="flex items-center gap-1">
                        <FaUser /> {featuredPost.author.name}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock /> {featuredPost.readingTime} min
                      </span>
                      <span>{featuredPost.publishedAt}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-background-tertiary rounded-xl overflow-hidden border border-neutral-800 hover:border-accent-cyan/50 transition-all h-full group">
                    <div className="aspect-video bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20" />
                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        {post.categories.map(cat => (
                          <span key={cat} className="text-xs px-2 py-1 bg-background-elevated text-accent-cyan rounded">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h3 className="heading-4 text-text-primary mb-3 group-hover:text-accent-cyan transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-text-muted text-sm">
                        <span className="flex items-center gap-1">
                          <FaClock /> {post.readingTime} min
                        </span>
                        <span>{post.publishedAt}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Carica Altri Articoli
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-background-tertiary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="heading-2 text-text-primary mb-4">
              Non Perdere i Nuovi Articoli
            </h2>
            <p className="text-text-secondary mb-8">
              Iscriviti alla newsletter per ricevere insights e tutorial esclusivi
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-4 py-3 bg-background-elevated border border-neutral-700 text-text-primary rounded-lg"
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