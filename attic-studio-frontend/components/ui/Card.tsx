'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  variant?: 'default' | 'bordered' | 'shadow'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, variant = 'default', children, ...props }, ref) => {
    const baseStyles = 'bg-background-elevated rounded-xl overflow-hidden transition-all duration-300'

    const variants = {
      default: 'border border-neutral-200 shadow-sm',
      bordered: 'border-2 border-neutral-300',
      shadow: 'shadow-lg shadow-primary/10',
    }

    const hoverStyles = hover ? 'hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30' : ''

    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -4 } : {}}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

interface GameCardProps {
  title: string
  tagline: string
  thumbnail: string
  href: string
  platforms?: string[]
  genre?: string[]
}

export function GameCard({ title, tagline, thumbnail, href, platforms = [], genre = [] }: GameCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full group cursor-pointer">
        <div className="relative aspect-video overflow-hidden bg-neutral-100">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="heading-4 mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="body-small text-text-muted mb-4 line-clamp-2">
            {tagline}
          </p>
          <div className="flex flex-wrap gap-2">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="px-2 py-1 bg-neutral-100 border border-neutral-300 text-text-secondary text-xs rounded-md"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  )
}

interface CourseCardProps {
  title: string
  instructor: string
  thumbnail: string
  href: string
  duration: number
  level: 'beginner' | 'intermediate' | 'advanced'
  price: number
  badge?: 'new' | 'best-seller' | 'starting-soon' | null
}

export function CourseCard({
  title,
  instructor,
  thumbnail,
  href,
  duration,
  level,
  price,
  badge
}: CourseCardProps) {
  const levelColors = {
    beginner: 'bg-secondary/20 text-secondary-700 border border-secondary/50',
    intermediate: 'bg-accent/20 text-accent-800 border border-accent/50',
    advanced: 'bg-primary/20 text-primary-700 border border-primary/50',
  }

  const badgeColors = {
    'new': 'bg-secondary text-white shadow-lg shadow-secondary/30',
    'best-seller': 'bg-accent text-primary shadow-lg shadow-accent/30',
    'starting-soon': 'bg-primary text-white shadow-lg shadow-primary/30',
  }

  return (
    <Link href={href}>
      <Card className="h-full group cursor-pointer">
        <div className="relative aspect-video overflow-hidden bg-neutral-100">
          {badge && (
            <div className="absolute top-4 left-4 z-10">
              <span className={cn('px-3 py-1 text-sm font-bold rounded-full', badgeColors[badge])}>
                {badge.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            </div>
          )}
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="heading-4 mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-text-muted mb-4">
            con {instructor}
          </p>
          <div className="flex items-center gap-4 mb-4 text-sm">
            <span className="text-text-secondary">{duration} ore</span>
            <span className={cn('px-2 py-1 rounded-md text-xs font-semibold', levelColors[level])}>
              {level}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              €{price}
            </span>
            <motion.span
              className="text-primary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
            >
              Scopri di più →
            </motion.span>
          </div>
        </div>
      </Card>
    </Link>
  )
}

interface BlogCardProps {
  title: string
  excerpt: string
  thumbnail: string
  href: string
  author: string
  date: string
  readingTime: number
  category?: string
}

export function BlogCard({
  title,
  excerpt,
  thumbnail,
  href,
  author,
  date,
  readingTime,
  category
}: BlogCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full group cursor-pointer">
        <div className="relative aspect-video overflow-hidden bg-neutral-100">
          {category && (
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 bg-secondary/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-secondary">
                {category}
              </span>
            </div>
          )}
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="heading-4 mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="body-small text-text-muted mb-4 line-clamp-3">
            {excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <span>{author}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
            <span>{readingTime} min</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default Card