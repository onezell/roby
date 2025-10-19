'use client'

import { motion } from 'framer-motion'
import { CourseCard } from '@/components/ui/Card'
import Link from 'next/link'
import Button from '@/components/ui/Button'

// Mock data - sostituire con dati reali da Strapi
const mockCourses = [
  {
    id: 1,
    title: 'Unity Game Development Masterclass',
    instructor: 'Marco Rossi',
    thumbnail: '/images/courses/unity-masterclass.svg',
    href: '/courses/unity-masterclass',
    duration: 40,
    level: 'beginner' as const,
    price: 299,
    badge: 'best-seller' as const
  },
  {
    id: 2,
    title: 'Advanced Game Design Patterns',
    instructor: 'Laura Bianchi',
    thumbnail: '/images/courses/game-design-patterns.svg',
    href: '/courses/game-design-patterns',
    duration: 25,
    level: 'advanced' as const,
    price: 399,
    badge: 'new' as const
  },
  {
    id: 3,
    title: '3D Character Art con Blender',
    instructor: 'Giuseppe Verdi',
    thumbnail: '/images/courses/3d-character-art.svg',
    href: '/courses/3d-character-art',
    duration: 35,
    level: 'intermediate' as const,
    price: 349,
    badge: 'starting-soon' as const
  }
]

export default function CoursesPreview() {
  return (
    <section className="section-padding bg-gradient-to-b from-background-primary to-background-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            Formazione <span className="gradient-text">Gaming</span>
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Impara dai migliori professionisti del settore e porta le tue competenze al livello successivo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CourseCard
                title={course.title}
                instructor={course.instructor}
                thumbnail={course.thumbnail}
                href={course.href}
                duration={course.duration}
                level={course.level}
                price={course.price}
                badge={course.badge}
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
          <Link href="/courses">
            <Button variant="primary" size="lg">
              Esplora Tutti i Corsi
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}