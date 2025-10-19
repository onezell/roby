'use client'

import { use, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaStar, FaClock, FaUsers, FaGraduationCap, FaCheckCircle, FaPlayCircle, FaCalendarAlt, FaShieldAlt, FaArrowLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Button from '@/components/ui/Button'
import CourseCard from '@/components/ui/CourseCard'

// Mock data - will be replaced with Strapi data
const mockCourse = {
  id: 1,
  title: 'Sviluppo Giochi con Unity - Corso Completo',
  slug: 'unity-corso-completo',
  tagline: 'Diventa un Unity Developer professionista partendo da zero',
  description: `Questo corso completo ti guiderà attraverso ogni aspetto dello sviluppo di videogiochi con Unity,
  dalla configurazione iniziale alla pubblicazione del tuo primo gioco. Imparerai a creare gameplay coinvolgenti,
  implementare fisica realistica, sviluppare AI per i nemici, e ottimizzare le performance per diverse piattaforme.

  Il corso è strutturato per accompagnarti passo dopo passo, con progetti pratici che ti permetteranno di
  applicare immediatamente ciò che impari. Alla fine del corso, avrai sviluppato almeno 3 giochi completi
  e avrai tutte le competenze necessarie per iniziare la tua carriera come Unity Developer.`,
  thumbnail: '/images/course-unity-hero.jpg',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  instructorName: 'Marco Rossi',
  instructorBio: `Marco Rossi è un Senior Unity Developer con oltre 10 anni di esperienza nello sviluppo di videogiochi.
  Ha lavorato su titoli AAA e indie di successo, pubblicando oltre 20 giochi su diverse piattaforme.
  La sua passione per l'insegnamento lo ha portato a formare centinaia di sviluppatori in tutto il mondo.`,
  instructorPhoto: '/images/instructor-marco.jpg',
  level: 'Principiante',
  duration: 60,
  format: 'Online',
  price: 299,
  originalPrice: 499,
  currency: '€',
  topics: ['Unity', 'C#', 'Game Design', '3D', 'Physics', 'AI', 'Optimization'],
  learningObjectives: [
    'Padroneggiare l\'interfaccia e gli strumenti di Unity',
    'Programmare in C# per lo sviluppo di videogiochi',
    'Creare e animare personaggi 3D',
    'Implementare sistemi di fisica e collisioni',
    'Sviluppare AI per nemici e NPC',
    'Ottimizzare le performance per diverse piattaforme',
    'Pubblicare giochi su Steam, App Store e Google Play',
    'Monetizzare i tuoi giochi con ads e in-app purchases',
  ],
  requirements: [
    'Computer con Windows 10/11, macOS o Linux',
    'Almeno 8GB di RAM (16GB consigliati)',
    'Connessione internet stabile',
    'Nessuna esperienza di programmazione richiesta',
  ],
  targetAudience: 'Principianti assoluti che vogliono imparare lo sviluppo di videogiochi, hobbisti che vogliono trasformare la loro passione in professione, sviluppatori web che vogliono entrare nel game development.',
  rating: 4.8,
  totalRatings: 324,
  enrolledStudents: 1234,
  lastUpdated: 'Ottobre 2024',
  language: 'Italiano',
  certificate: true,
  moneyBackGuarantee: 30,
  modules: [
    {
      id: 1,
      title: 'Introduzione a Unity e Setup',
      duration: '3 ore',
      lessons: [
        { id: 1, title: 'Benvenuto nel corso', duration: '5:00', preview: true },
        { id: 2, title: 'Installazione di Unity Hub e Unity Editor', duration: '12:30', preview: true },
        { id: 3, title: 'Tour dell\'interfaccia di Unity', duration: '18:45', preview: false },
        { id: 4, title: 'Il tuo primo progetto Unity', duration: '22:15', preview: false },
      ]
    },
    {
      id: 2,
      title: 'Fondamenti di C# per Unity',
      duration: '8 ore',
      lessons: [
        { id: 5, title: 'Variabili e tipi di dato', duration: '25:00', preview: false },
        { id: 6, title: 'Condizioni e cicli', duration: '30:00', preview: false },
        { id: 7, title: 'Funzioni e metodi', duration: '28:00', preview: false },
        { id: 8, title: 'Classi e oggetti', duration: '35:00', preview: false },
      ]
    },
    {
      id: 3,
      title: 'GameObject e Componenti',
      duration: '6 ore',
      lessons: [
        { id: 9, title: 'Cosa sono i GameObject', duration: '20:00', preview: false },
        { id: 10, title: 'Transform e movimento', duration: '25:00', preview: false },
        { id: 11, title: 'Collider e Rigidbody', duration: '30:00', preview: false },
        { id: 12, title: 'Prefab e istanziazione', duration: '22:00', preview: false },
      ]
    },
    {
      id: 4,
      title: 'Progetto 1: Platform Game 2D',
      duration: '12 ore',
      lessons: [
        { id: 13, title: 'Setup del progetto', duration: '15:00', preview: false },
        { id: 14, title: 'Movimento del personaggio', duration: '45:00', preview: false },
        { id: 15, title: 'Sistema di salto e gravità', duration: '40:00', preview: false },
        { id: 16, title: 'Nemici e ostacoli', duration: '50:00', preview: false },
      ]
    },
  ],
  testimonials: [
    {
      id: 1,
      authorName: 'Luigi Verdi',
      authorRole: 'Indie Game Developer',
      content: 'Questo corso mi ha dato tutte le basi per iniziare la mia carriera. Ora lavoro come Unity Developer!',
      rating: 5,
      authorPhoto: '/images/testimonial-1.jpg'
    },
    {
      id: 2,
      authorName: 'Anna Bianchi',
      authorRole: 'Student',
      content: 'Spiegazioni chiare e progetti pratici. Marco è un insegnante eccezionale che sa rendere semplici anche i concetti più complessi.',
      rating: 5,
      authorPhoto: '/images/testimonial-2.jpg'
    },
    {
      id: 3,
      authorName: 'Roberto Neri',
      authorRole: 'Web Developer',
      content: 'Venendo dal web development, questo corso mi ha aiutato a fare il salto nel game dev senza difficoltà.',
      rating: 4,
      authorPhoto: '/images/testimonial-3.jpg'
    },
  ],
  faqs: [
    {
      question: 'Ho bisogno di esperienza di programmazione?',
      answer: 'No, il corso parte dalle basi assolute. Ti insegneremo tutto ciò che devi sapere su C# e Unity.'
    },
    {
      question: 'Quanto tempo ho per completare il corso?',
      answer: 'Hai accesso a vita al corso. Puoi seguirlo al tuo ritmo senza scadenze.'
    },
    {
      question: 'Riceverò un certificato?',
      answer: 'Sì, al completamento del corso riceverai un certificato verificabile di Attic Studio.'
    },
    {
      question: 'Posso fare domande durante il corso?',
      answer: 'Certamente! Avrai accesso alla community e supporto diretto dall\'istruttore.'
    },
  ],
  relatedCourses: [
    {
      id: 2,
      title: 'Game Design Fundamentals',
      slug: 'game-design-fundamentals',
      shortDescription: 'Padroneggia l\'arte del game design',
      thumbnail: '/images/course-design.jpg',
      instructorName: 'Laura Bianchi',
      instructorPhoto: '/images/instructor-laura.jpg',
      level: 'Principiante',
      duration: 30,
      format: 'Online',
      price: 199,
      currency: '€',
      rating: 4.9,
      enrolledStudents: 892,
      badge: 'Nuovo',
    },
    {
      id: 3,
      title: 'Unreal Engine 5 - Livello Avanzato',
      slug: 'unreal-engine-5-advanced',
      shortDescription: 'Porta le tue skills Unreal al livello successivo',
      thumbnail: '/images/course-unreal.jpg',
      instructorName: 'Giovanni Verdi',
      instructorPhoto: '/images/instructor-giovanni.jpg',
      level: 'Avanzato',
      duration: 80,
      format: 'Hybrid',
      price: 499,
      currency: '€',
      rating: 4.7,
      enrolledStudents: 456,
      badge: null,
    },
  ]
}

export default function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [activeTab, setActiveTab] = useState('overview')
  const [expandedModules, setExpandedModules] = useState<number[]>([1])
  const [showAllFaqs, setShowAllFaqs] = useState(false)

  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    )
  }

  const tabs = [
    { id: 'overview', label: 'Panoramica' },
    { id: 'curriculum', label: 'Programma' },
    { id: 'instructor', label: 'Istruttore' },
    { id: 'reviews', label: 'Recensioni' },
    { id: 'faq', label: 'FAQ' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-primary via-background-secondary to-background-primary">
      {/* Breadcrumb */}
      <div className="container-custom pt-8">
        <Link href="/courses" className="inline-flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors">
          <FaArrowLeft />
          <span>Torna ai corsi</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge and Category */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent-cyan text-background-primary text-sm font-semibold rounded-full">
                    Best Seller
                  </span>
                  <span className="text-text-muted">Unity • Game Development</span>
                </div>

                {/* Title */}
                <h1 className="heading-1 text-text-primary mb-4">
                  {mockCourse.title}
                </h1>

                {/* Tagline */}
                <p className="text-xl text-text-secondary mb-6">
                  {mockCourse.tagline}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-text-secondary">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm ${
                            i < Math.floor(mockCourse.rating)
                              ? 'text-accent-yellow'
                              : 'text-neutral-700'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{mockCourse.rating}</span>
                    <span className="text-text-muted">({mockCourse.totalRatings} recensioni)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-accent-purple" />
                    <span>{mockCourse.enrolledStudents} studenti</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-accent-cyan" />
                    <span>{mockCourse.duration} ore</span>
                  </div>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-4 mt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan" />
                  <div>
                    <p className="text-text-muted text-sm">Creato da</p>
                    <p className="text-text-primary font-semibold">{mockCourse.instructorName}</p>
                  </div>
                </div>
              </motion.div>

              {/* Video Preview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-video bg-background-tertiary rounded-xl overflow-hidden border border-neutral-800"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <button className="flex items-center gap-3 px-6 py-3 bg-accent-cyan/20 hover:bg-accent-cyan/30 text-accent-cyan rounded-lg transition-colors">
                    <FaPlayCircle className="text-3xl" />
                    <span className="font-semibold">Guarda l'anteprima del corso</span>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Enrollment Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-24 bg-background-tertiary rounded-xl p-6 border border-neutral-800"
              >
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-bold text-text-primary">
                      {mockCourse.currency}{mockCourse.price}
                    </span>
                    <span className="text-xl text-text-muted line-through">
                      {mockCourse.currency}{mockCourse.originalPrice}
                    </span>
                  </div>
                  <p className="text-accent-green text-sm font-semibold">
                    Risparmia {Math.round((1 - mockCourse.price / mockCourse.originalPrice) * 100)}%
                  </p>
                </div>

                {/* Enroll Button */}
                <Button variant="primary" size="lg" className="w-full mb-4">
                  Iscriviti Ora
                </Button>

                <Button variant="outline" size="lg" className="w-full mb-6">
                  Aggiungi al Carrello
                </Button>

                {/* Money Back Guarantee */}
                <div className="flex items-center gap-3 p-4 bg-background-elevated rounded-lg mb-6">
                  <FaShieldAlt className="text-accent-green text-xl" />
                  <div>
                    <p className="text-text-primary text-sm font-semibold">
                      Garanzia 30 giorni
                    </p>
                    <p className="text-text-muted text-xs">
                      Soddisfatti o rimborsati
                    </p>
                  </div>
                </div>

                {/* Course Includes */}
                <div className="space-y-3">
                  <h3 className="text-text-primary font-semibold mb-3">
                    Questo corso include:
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent-cyan mt-0.5" />
                      <span className="text-text-secondary">{mockCourse.duration} ore di video on-demand</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent-cyan mt-0.5" />
                      <span className="text-text-secondary">Progetti pratici scaricabili</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent-cyan mt-0.5" />
                      <span className="text-text-secondary">Accesso a vita</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent-cyan mt-0.5" />
                      <span className="text-text-secondary">Certificato di completamento</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="text-accent-cyan mt-0.5" />
                      <span className="text-text-secondary">Accesso su mobile e TV</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-20 z-20 bg-background-tertiary/95 backdrop-blur-sm border-y border-neutral-800">
        <div className="container-custom">
          <div className="flex gap-8 overflow-x-auto py-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap pb-2 px-1 font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'text-accent-cyan border-b-2 border-accent-cyan'
                    : 'text-text-muted hover:text-text-secondary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {/* What you'll learn */}
                  <div>
                    <h2 className="heading-3 text-text-primary mb-6">
                      Cosa imparerai
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {mockCourse.learningObjectives.map((objective, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <FaCheckCircle className="text-accent-green mt-1 flex-shrink-0" />
                          <span className="text-text-secondary">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h2 className="heading-3 text-text-primary mb-6">
                      Requisiti
                    </h2>
                    <ul className="space-y-3">
                      {mockCourse.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-accent-cyan">•</span>
                          <span className="text-text-secondary">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Description */}
                  <div>
                    <h2 className="heading-3 text-text-primary mb-6">
                      Descrizione
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-text-secondary whitespace-pre-line">
                        {mockCourse.description}
                      </p>
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div>
                    <h2 className="heading-3 text-text-primary mb-6">
                      A chi è rivolto questo corso
                    </h2>
                    <p className="text-text-secondary">
                      {mockCourse.targetAudience}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Curriculum Tab */}
              {activeTab === 'curriculum' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <div className="mb-6">
                    <h2 className="heading-3 text-text-primary mb-2">
                      Contenuto del corso
                    </h2>
                    <p className="text-text-muted">
                      {mockCourse.modules.length} moduli • {mockCourse.modules.reduce((acc, m) => acc + m.lessons.length, 0)} lezioni • {mockCourse.duration} ore totali
                    </p>
                  </div>

                  {mockCourse.modules.map(module => (
                    <div
                      key={module.id}
                      className="bg-background-tertiary rounded-lg border border-neutral-800 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-background-elevated transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-text-primary font-semibold">
                            Modulo {module.id}: {module.title}
                          </span>
                          <span className="text-text-muted text-sm">
                            {module.lessons.length} lezioni • {module.duration}
                          </span>
                        </div>
                        {expandedModules.includes(module.id) ? (
                          <FaChevronUp className="text-text-muted" />
                        ) : (
                          <FaChevronDown className="text-text-muted" />
                        )}
                      </button>

                      {expandedModules.includes(module.id) && (
                        <div className="border-t border-neutral-800">
                          {module.lessons.map(lesson => (
                            <div
                              key={lesson.id}
                              className="px-6 py-3 flex items-center justify-between hover:bg-background-elevated transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <FaPlayCircle className="text-text-muted text-sm" />
                                <span className="text-text-secondary">
                                  {lesson.title}
                                </span>
                                {lesson.preview && (
                                  <span className="px-2 py-1 bg-accent-cyan/20 text-accent-cyan text-xs rounded">
                                    Anteprima
                                  </span>
                                )}
                              </div>
                              <span className="text-text-muted text-sm">
                                {lesson.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Instructor Tab */}
              {activeTab === 'instructor' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan flex-shrink-0" />
                    <div>
                      <h2 className="heading-3 text-text-primary mb-2">
                        {mockCourse.instructorName}
                      </h2>
                      <p className="text-accent-cyan mb-4">Senior Unity Developer</p>
                      <div className="flex items-center gap-6 text-text-muted text-sm mb-6">
                        <div className="flex items-center gap-2">
                          <FaStar className="text-accent-yellow" />
                          <span>4.8 Valutazione</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaUsers />
                          <span>5,234 Studenti</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaGraduationCap />
                          <span>12 Corsi</span>
                        </div>
                      </div>
                      <p className="text-text-secondary whitespace-pre-line">
                        {mockCourse.instructorBio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {/* Rating Overview */}
                  <div className="bg-background-tertiary rounded-lg p-6 border border-neutral-800">
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-text-primary mb-2">
                          {mockCourse.rating}
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`text-lg ${
                                i < Math.floor(mockCourse.rating)
                                  ? 'text-accent-yellow'
                                  : 'text-neutral-700'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-text-muted text-sm">
                          {mockCourse.totalRatings} recensioni
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-6">
                    {mockCourse.testimonials.map(review => (
                      <div
                        key={review.id}
                        className="bg-background-tertiary rounded-lg p-6 border border-neutral-800"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="text-text-primary font-semibold">
                                  {review.authorName}
                                </h4>
                                <p className="text-text-muted text-sm">
                                  {review.authorRole}
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <FaStar
                                    key={i}
                                    className={`text-sm ${
                                      i < review.rating
                                        ? 'text-accent-yellow'
                                        : 'text-neutral-700'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-text-secondary">
                              {review.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* FAQ Tab */}
              {activeTab === 'faq' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <h2 className="heading-3 text-text-primary mb-6">
                    Domande Frequenti
                  </h2>
                  {mockCourse.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-background-tertiary rounded-lg p-6 border border-neutral-800"
                    >
                      <h3 className="text-text-primary font-semibold mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-text-secondary">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Sidebar - Empty for spacing in tabs */}
            <div className="lg:col-span-1"></div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-20 bg-background-tertiary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-text-primary mb-8">
              Corsi Correlati
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockCourse.relatedCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}