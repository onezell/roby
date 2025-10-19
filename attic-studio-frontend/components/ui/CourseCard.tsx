'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaStar, FaClock, FaUsers, FaGraduationCap, FaTag } from 'react-icons/fa'

interface Course {
  id: number
  title: string
  slug: string
  shortDescription: string
  thumbnail: string
  instructorName: string
  instructorPhoto: string
  level: string
  duration: number
  format: string
  price: number
  currency: string
  rating: number
  enrolledStudents: number
  badge?: string | null
}

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Principiante':
        return 'text-accent-green border-accent-green'
      case 'Intermedio':
        return 'text-accent-yellow border-accent-yellow'
      case 'Avanzato':
        return 'text-accent-pink border-accent-pink'
      default:
        return 'text-text-secondary border-neutral-700'
    }
  }

  const getBadgeColor = (badge: string) => {
    switch(badge) {
      case 'Best Seller':
        return 'bg-accent-cyan text-background-primary'
      case 'Nuovo':
        return 'bg-accent-green text-white'
      case 'In Partenza':
        return 'bg-accent-orange text-white'
      default:
        return 'bg-neutral-700 text-text-primary'
    }
  }

  return (
    <Link href={`/courses/${course.slug}`}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="group h-full bg-background-tertiary rounded-xl overflow-hidden border border-neutral-800/50 hover:border-accent-cyan/50 transition-all duration-300"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-background-elevated">
          {course.badge && (
            <div className="absolute top-4 left-4 z-10">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getBadgeColor(course.badge)}`}>
                {course.badge}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="w-full h-full bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 flex items-center justify-center">
            <FaGraduationCap className="text-4xl text-text-muted" />
          </div>
          {/* Replace with actual image when available */}
          {/* <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          /> */}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="heading-4 text-text-primary line-clamp-2 group-hover:text-accent-cyan transition-colors">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary text-sm line-clamp-2">
            {course.shortDescription}
          </p>

          {/* Instructor */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan" />
            <span className="text-text-secondary text-sm">{course.instructorName}</span>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-text-muted">
            <div className="flex items-center gap-1">
              <FaClock className="text-accent-cyan" />
              <span>{course.duration}h</span>
            </div>
            <div className={`px-2 py-1 border rounded-md text-xs font-medium ${getLevelColor(course.level)}`}>
              {course.level}
            </div>
            <div className="flex items-center gap-1">
              <FaUsers className="text-accent-purple" />
              <span>{course.enrolledStudents}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-sm ${
                    i < Math.floor(course.rating)
                      ? 'text-accent-yellow'
                      : 'text-neutral-700'
                  }`}
                />
              ))}
            </div>
            <span className="text-text-secondary text-sm font-medium">
              {course.rating.toFixed(1)}
            </span>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-text-primary">
                {course.currency}{course.price}
              </span>
            </div>
            <motion.span
              className="text-accent-cyan text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all"
              whileHover={{ x: 5 }}
            >
              Scopri di più →
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}