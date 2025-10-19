// Game Types
export interface Game {
  id: number
  title: string
  slug: string
  tagline: string
  description: string
  releaseDate: Date
  status: 'released' | 'in-development' | 'coming-soon'
  platforms: string[]
  genre: string[]
  thumbnail?: Media
  coverImage?: Media
  gallery?: Media[]
  trailerUrl?: string
  storeLinks?: StoreLink[]
  features: string[]
  technologies: string[]
  teamCredits?: string
  seo?: SEO
  publishedAt: Date
  featured: boolean
  categories?: Category[]
}

// Course Types
export interface Course {
  id: number
  title: string
  slug: string
  description: string
  shortDescription: string
  thumbnail?: Media
  instructorName: string
  instructorBio?: string
  instructorPhoto?: Media
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: number
  format: 'online' | 'in-person' | 'hybrid'
  price: number
  currency: string
  topics: string[]
  learningObjectives: string[]
  requirements: string[]
  targetAudience: string
  syllabus: string
  nextSessions?: Date[]
  maxStudents?: number
  enrolledStudents?: number
  rating?: number
  testimonials?: Testimonial[]
  featured: boolean
  badge?: 'new' | 'best-seller' | 'starting-soon' | null
  seo?: SEO
  publishedAt: Date
}

// Blog Types
export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage?: Media
  author?: TeamMember
  categories?: Category[]
  tags: string[]
  readingTime: number
  featured: boolean
  views: number
  seo?: SEO
  publishedAt: Date
}

// Team Types
export interface TeamMember {
  id: number
  name: string
  slug: string
  role: string
  bio: string
  photo?: Media
  email?: string
  socialLinks?: SocialLink[]
  featured: boolean
  order: number
}

// Service Types
export interface Service {
  id: number
  title: string
  slug: string
  description: string
  shortDescription: string
  icon?: Media
  features: string[]
  technologies: string[]
  projects?: Game[]
  order: number
}

// Testimonial Types
export interface Testimonial {
  id: number
  authorName: string
  authorRole?: string
  authorCompany?: string
  authorPhoto?: Media
  content: string
  rating: number
  featured: boolean
  relatedTo?: Game | Course
}

// Category Types
export interface Category {
  id: number
  name: string
  slug: string
  description?: string
  type: 'game' | 'blog' | 'course'
}

// Common Types
export interface Media {
  id: number
  name: string
  alternativeText?: string
  caption?: string
  width?: number
  height?: number
  formats?: MediaFormats
  url: string
  previewUrl?: string
}

export interface MediaFormats {
  thumbnail?: MediaFormat
  small?: MediaFormat
  medium?: MediaFormat
  large?: MediaFormat
}

export interface MediaFormat {
  url: string
  width: number
  height: number
  size: number
}

export interface SEO {
  metaTitle?: string
  metaDescription?: string
  metaImage?: Media
  metaKeywords?: string[]
  metaRobots?: string
  structuredData?: any
  canonicalURL?: string
}

export interface StoreLink {
  platform: string
  url: string
}

export interface SocialLink {
  platform: string
  url: string
}

// API Response Types
export interface StrapiResponse<T> {
  data: T
  meta?: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiSingleResponse<T> {
  data: {
    id: number
    attributes: T
  }
  meta?: any
}

export interface StrapiCollectionResponse<T> {
  data: Array<{
    id: number
    attributes: T
  }>
  meta?: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}