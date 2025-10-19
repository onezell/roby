'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaClock, FaUser, FaTag, FaArrowLeft, FaTwitter, FaLinkedin, FaFacebook, FaLink } from 'react-icons/fa'
import Button from '@/components/ui/Button'

// Mock data
const mockPost = {
  id: 1,
  title: 'Il Futuro del Gaming: Tendenze 2025',
  slug: 'futuro-gaming-2025',
  content: `
## L'evoluzione del gaming nel 2025

Il mondo dei videogiochi sta attraversando una rivoluzione senza precedenti. Le tecnologie emergenti stanno ridefinendo non solo come giochiamo, ma anche come creiamo e condividiamo esperienze interattive.

### AI Generativa nel Game Development

L'intelligenza artificiale generativa sta trasformando il processo di sviluppo. Ora possiamo:
- Creare asset 3D complessi in pochi minuti
- Generare dialoghi e narrative dinamiche
- Ottimizzare automaticamente il level design

### Cloud Gaming di Nuova Generazione

Il cloud gaming ha finalmente raggiunto la maturità tecnologica necessaria per offrire esperienze AAA senza compromessi:
- Latenza ridotta a meno di 10ms
- Streaming 4K a 120fps
- Accesso istantaneo a librerie infinite

### Il Metaverso Gaming

I confini tra giochi diversi stanno scomparendo. Il futuro è un ecosistema interconnesso dove:
- Gli asset sono trasferibili tra piattaforme
- Le economie virtuali sono integrate
- Le esperienze sociali sono persistenti

## Implicazioni per gli Sviluppatori

Questi cambiamenti richiedono nuove competenze e approcci:

1. **Pensiero sistemico**: Progettare per ecosistemi, non solo giochi singoli
2. **Competenze AI**: Integrare e gestire sistemi di AI generativa
3. **Design modulare**: Creare contenuti riutilizzabili e scalabili

## Conclusione

Il 2025 sarà un anno di trasformazione radicale per l'industria gaming. Chi saprà adattarsi a questi cambiamenti avrà opportunità incredibili di innovare e crescere.
  `,
  excerpt: 'Esploriamo le tecnologie emergenti che stanno ridefinendo il panorama videoludico.',
  coverImage: '/images/blog-featured.jpg',
  author: {
    name: 'Marco Rossi',
    role: 'Lead Developer',
    bio: 'Senior Unity Developer con oltre 10 anni di esperienza nel gaming.',
    avatar: '/images/author-marco.jpg'
  },
  categories: ['Tecnologia', 'Trends'],
  tags: ['AI', 'Cloud Gaming', 'VR', 'Metaverse', 'Future Tech'],
  readingTime: 8,
  publishedAt: '2024-10-15',
  updatedAt: '2024-10-16',
}

const relatedPosts = [
  {
    id: 2,
    title: 'Unity vs Unreal: Quale Scegliere nel 2024',
    slug: 'unity-vs-unreal-2024',
    excerpt: 'Una guida completa per scegliere il motore giusto.',
    readingTime: 12,
    publishedAt: '2024-10-10',
  },
  {
    id: 3,
    title: 'Come Creare un GDD Efficace',
    slug: 'creare-gdd-efficace',
    excerpt: 'Il Game Design Document è fondamentale per ogni progetto.',
    readingTime: 10,
    publishedAt: '2024-10-05',
  },
]

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-primary via-background-secondary to-background-primary">
      {/* Header */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors mb-8">
            <FaArrowLeft />
            <span>Torna al Blog</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Categories */}
            <div className="flex gap-2 mb-4">
              {mockPost.categories.map(cat => (
                <span key={cat} className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan text-sm rounded-full">
                  {cat}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="heading-1 text-text-primary mb-6">
              {mockPost.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-text-muted">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan" />
                <div>
                  <p className="text-text-primary font-semibold">{mockPost.author.name}</p>
                  <p className="text-sm">{mockPost.author.role}</p>
                </div>
              </div>
              <span className="flex items-center gap-2">
                <FaClock /> {mockPost.readingTime} min di lettura
              </span>
              <span>{mockPost.publishedAt}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-video bg-gradient-to-br from-accent-purple/30 to-accent-cyan/30 rounded-2xl overflow-hidden"
          />
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 prose prose-invert max-w-none"
            >
              <div className="text-text-secondary space-y-6 [&>h2]:heading-3 [&>h2]:text-text-primary [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:heading-4 [&>h3]:text-text-primary [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-text-secondary [&>p]:leading-relaxed [&>ul]:text-text-secondary [&>ul]:space-y-2 [&>ol]:text-text-secondary [&>ol]:space-y-2 [&>li]:ml-6 [&>blockquote]:border-l-4 [&>blockquote]:border-accent-cyan [&>blockquote]:pl-4 [&>blockquote]:italic">
                {mockPost.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index}>{paragraph.replace('## ', '')}</h2>
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={index}>{paragraph.replace('### ', '')}</h3>
                  } else if (paragraph.startsWith('- ')) {
                    return <li key={index}>{paragraph.replace('- ', '')}</li>
                  } else if (paragraph.startsWith('1. ')) {
                    return <li key={index}>{paragraph.replace(/^\d+\. /, '')}</li>
                  } else if (paragraph.trim()) {
                    return <p key={index}>{paragraph}</p>
                  }
                  return null
                })}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-neutral-800">
                <div className="flex items-center gap-3 flex-wrap">
                  <FaTag className="text-text-muted" />
                  {mockPost.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-background-elevated text-text-secondary text-sm rounded-lg">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-neutral-800">
                <p className="text-text-primary font-semibold mb-4">Condividi questo articolo</p>
                <div className="flex gap-3">
                  <button className="p-3 bg-background-elevated rounded-lg hover:bg-accent-cyan/20 transition-colors">
                    <FaTwitter className="text-text-secondary" />
                  </button>
                  <button className="p-3 bg-background-elevated rounded-lg hover:bg-accent-cyan/20 transition-colors">
                    <FaLinkedin className="text-text-secondary" />
                  </button>
                  <button className="p-3 bg-background-elevated rounded-lg hover:bg-accent-cyan/20 transition-colors">
                    <FaFacebook className="text-text-secondary" />
                  </button>
                  <button className="p-3 bg-background-elevated rounded-lg hover:bg-accent-cyan/20 transition-colors">
                    <FaLink className="text-text-secondary" />
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Author Bio */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-background-tertiary rounded-xl p-6 border border-neutral-800"
              >
                <h3 className="heading-4 text-text-primary mb-4">L'Autore</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan" />
                  <div>
                    <p className="text-text-primary font-semibold">{mockPost.author.name}</p>
                    <p className="text-text-muted text-sm">{mockPost.author.role}</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm">
                  {mockPost.author.bio}
                </p>
              </motion.div>

              {/* Related Posts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-background-tertiary rounded-xl p-6 border border-neutral-800"
              >
                <h3 className="heading-4 text-text-primary mb-4">Articoli Correlati</h3>
                <div className="space-y-4">
                  {relatedPosts.map(post => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                      <div className="group cursor-pointer">
                        <h4 className="text-text-primary font-semibold mb-1 group-hover:text-accent-cyan transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-text-muted text-sm line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 rounded-xl p-6 border border-neutral-800"
              >
                <h3 className="heading-4 text-text-primary mb-2">Newsletter</h3>
                <p className="text-text-secondary text-sm mb-4">
                  Ricevi gli ultimi articoli direttamente nella tua inbox
                </p>
                <input
                  type="email"
                  placeholder="La tua email"
                  className="w-full px-4 py-2 mb-3 bg-background-elevated border border-neutral-700 text-text-primary rounded-lg"
                />
                <Button variant="primary" size="sm" className="w-full">
                  Iscriviti
                </Button>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}