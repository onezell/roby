# Attic Studio - Documento di Progetto Completo
## Agenzia di Sviluppo Videogiochi e Formazione

**Data:** 17 Ottobre 2025  
**Cliente:** Attic Studio  
**Riferimento Design:** febucci.com

---

## 1. Executive Summary

Attic Studio è un'agenzia di sviluppo videogiochi che offre anche corsi di formazione nel settore gaming. Il progetto prevede la realizzazione di un sito web moderno, pulito e accattivante che rispecchi l'estetica minimalista e professionale di febucci.com, utilizzando tecnologie all'avanguardia (2025) e un sistema di gestione contenuti headless (Strapi).

### Obiettivi Principali
- Creare una presenza online professionale per Attic Studio
- Presentare portfolio di giochi sviluppati
- Promuovere corsi di formazione nel settore gaming
- Facilitare il contatto con potenziali clienti e studenti
- Sistema CMS flessibile e moderno per gestione autonoma dei contenuti

---

## 2. Analisi del Design di Riferimento: febucci.com

### Caratteristiche Stilistiche Identificate

**Layout e Struttura:**
- Design minimalista e pulito
- Ampio uso di spazi bianchi (whitespace)
- Sezioni full-width con contenuti centrati
- Navigazione semplice e intuitiva
- Footer informativo ma essenziale

**Tipografia:**
- Titoli grandi e bold per catturare l'attenzione
- Testo body leggibile e ben spaziato
- Gerarchia tipografica chiara

**Colori:**
- Palette sobria e professionale
- Contrasti netti per leggibilità
- Uso strategico di accent color per CTA

**Animazioni:**
- Transizioni fluide e naturali
- Scroll animations discrete
- Hover effects eleganti
- Parallax subtili

**Immagini:**
- Immagini di alta qualità a piena larghezza
- Focus sul contenuto visivo
- Proporzioni equilibrate

---

## 3. Stack Tecnologico

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Linguaggio:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animazioni:** Framer Motion
- **Gestione Form:** React Hook Form + Zod
- **HTTP Client:** Axios / Fetch API

### Backend/CMS
- **Headless CMS:** Strapi 5
- **Database:** PostgreSQL
- **API:** REST + GraphQL
- **Autenticazione:** JWT / NextAuth

### Hosting e Deployment
- **Platform:** Coolify (VPS)
- **Frontend:** Next.js (Node.js server)
- **Backend:** Strapi container
- **Database:** PostgreSQL container
- **Reverse Proxy:** Nginx/Traefik (gestito da Coolify)
- **SSL:** Let's Encrypt automatico

### Tools e Utilities
- **Version Control:** Git + GitHub/GitLab
- **Package Manager:** pnpm
- **Code Quality:** ESLint + Prettier
- **Testing:** Vitest + React Testing Library (opzionale)

---

## 4. Architettura del Progetto

### Struttura Directory Frontend

```
attic-studio-frontend/
├── src/
│   ├── app/
│   │   ├── (routes)/
│   │   │   ├── page.tsx                 # Homepage
│   │   │   ├── about/
│   │   │   │   └── page.tsx            # Chi siamo
│   │   │   ├── games/
│   │   │   │   ├── page.tsx            # Portfolio giochi
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx        # Dettaglio gioco
│   │   │   ├── services/
│   │   │   │   └── page.tsx            # Servizi
│   │   │   ├── courses/
│   │   │   │   ├── page.tsx            # Catalogo corsi
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx        # Dettaglio corso
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx            # Blog list
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx        # Articolo blog
│   │   │   ├── contact/
│   │   │   │   └── page.tsx            # Contatti
│   │   │   └── team/
│   │   │       └── page.tsx            # Team
│   │   ├── layout.tsx                   # Root layout
│   │   ├── globals.css                  # Stili globali
│   │   └── fonts/
│   │       ├── agandir/                 # Font titoli
│   │       └── raleway/                 # Font paragrafi
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedGames.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── CoursesPreview.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── CTA.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Badge.tsx
│   │   ├── animations/
│   │   │   ├── FadeIn.tsx
│   │   │   ├── SlideIn.tsx
│   │   │   ├── ParallaxSection.tsx
│   │   │   └── ScrollReveal.tsx
│   │   └── forms/
│   │       ├── ContactForm.tsx
│   │       └── NewsletterForm.tsx
│   ├── lib/
│   │   ├── strapi/
│   │   │   ├── api.ts                   # Strapi API client
│   │   │   ├── queries.ts               # Query functions
│   │   │   └── types.ts                 # TypeScript types
│   │   ├── utils/
│   │   │   ├── formatters.ts
│   │   │   └── helpers.ts
│   │   └── constants.ts
│   └── types/
│       └── index.ts                      # Global types
├── public/
│   ├── images/
│   ├── icons/
│   └── videos/
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── .env.local
```

### Struttura Strapi Backend

```
attic-studio-backend/
├── src/
│   ├── api/
│   │   ├── game/
│   │   │   ├── content-types/
│   │   │   ├── controllers/
│   │   │   ├── routes/
│   │   │   └── services/
│   │   ├── course/
│   │   ├── blog-post/
│   │   ├── team-member/
│   │   ├── service/
│   │   ├── testimonial/
│   │   └── project-category/
│   ├── extensions/
│   └── plugins/
├── config/
│   ├── database.ts
│   ├── server.ts
│   └── admin.ts
├── public/
├── package.json
└── .env
```

---

## 5. Struttura delle Pagine

### 5.1 Homepage (`/`)

**Sezioni:**

1. **Hero Section**
   - Titolo principale accattivante
   - Sottotitolo descrittivo
   - CTA primaria ("Scopri i nostri giochi" / "Esplora i corsi")
   - Immagine/video hero di grande impatto
   - Scroll indicator animato

2. **About Preview**
   - Breve introduzione ad Attic Studio
   - Mission e vision in sintesi
   - Link "Scopri di più"

3. **Featured Games**
   - Griglia di 3-4 giochi principali
   - Card con immagine, titolo, breve descrizione
   - Hover effects accattivanti
   - Link al portfolio completo

4. **Services Overview**
   - 3-4 servizi principali (Game Development, Game Design, Art & Animation, Consulenza)
   - Icone personalizzate
   - Descrizioni concise

5. **Courses Preview**
   - Highlight di 2-3 corsi di punta
   - Badge "Nuovo" o "Best Seller"
   - CTA "Vedi tutti i corsi"

6. **Testimonials**
   - Slider con recensioni di clienti/studenti
   - Foto, nome, ruolo
   - Stelle rating

7. **Latest Blog Posts**
   - 3 articoli più recenti
   - Card con immagine, data, titolo, excerpt

8. **CTA Finale**
   - Call to action potente
   - Form contatto o link pagina contatti

**Animazioni:**
- Fade in su scroll per sezioni
- Parallax subtile sul hero
- Hover animations sulle card
- Counter animations per statistiche (se presenti)

---

### 5.2 About / Chi Siamo (`/about`)

**Contenuto:**
- Storia di Attic Studio
- Vision e Mission
- Valori aziendali
- Timeline/Milestone
- Team preview o link alla pagina team
- Statistiche aziendali (progetti completati, clienti soddisfatti, anni di esperienza)
- Immagini dello studio/workspace

**Design Elements:**
- Layout narrativo con alternanza immagini/testo
- Sezione team con foto circolari
- Timeline verticale animata
- Citazioni/Quote dal fondatore

---

### 5.3 Games / Portfolio Giochi (`/games`)

**Pagina Lista:**
- Griglia responsive di giochi (2-3 colonne)
- Filtri per:
  - Categoria (Mobile, PC, Console, VR)
  - Genre (Action, Puzzle, Strategy, etc.)
  - Anno di rilascio
  - Stato (Released, In Development)
- Sorting (più recenti, A-Z, popolari)
- Hover effects avanzati (preview gameplay, trailer)
- Paginazione o infinite scroll

**Pagina Dettaglio Gioco (`/games/[slug]`):**
- Hero image/video
- Nome del gioco
- Tagline
- Descrizione completa
- Caratteristiche principali
- Piattaforme disponibili
- Data di rilascio
- Gallery di screenshot
- Video trailer embeddato
- Link store/download
- Team credits
- Tecnologie utilizzate
- Related games

---

### 5.4 Services / Servizi (`/services`)

**Servizi Offerti:**
1. **Game Development**
   - Sviluppo completo giochi
   - Porting multipiattaforma
   - Prototipazione rapida

2. **Game Design**
   - Concept e Game Design Document
   - Level Design
   - Gameplay mechanics design

3. **Art & Animation**
   - 2D/3D Art
   - Character design
   - Animazioni e VFX

4. **Audio Design**
   - Sound effects
   - Musica originale
   - Voice over

5. **Consulenza e Mentoring**
   - Code review
   - Pipeline optimization
   - Scalabilità architettura

**Layout:**
- Cards per ogni servizio con icona
- Descrizione dettagliata
- Progetti di esempio
- Tecnologie/Tools utilizzati
- CTA "Richiedi preventivo"

---

### 5.5 Courses / Corsi di Formazione (`/courses`)

**Pagina Lista:**
- Grid di corsi disponibili
- Filtri:
  - Livello (Principiante, Intermedio, Avanzato)
  - Argomento (Unity, Unreal, Game Design, Art, etc.)
  - Formato (Online, Presenza, Hybrid)
  - Durata
- Badge: "Nuovo", "Best Seller", "In partenza"
- Sorting

**Card Corso:**
- Immagine thumbnail
- Titolo corso
- Instructor
- Durata (ore)
- Livello
- Prezzo
- Rating
- Numero studenti
- Date prossime sessioni

**Pagina Dettaglio Corso (`/courses/[slug]`):**
- Hero con video intro
- Descrizione completa del corso
- Cosa imparerai (learning objectives)
- Programma/Moduli
- Requisiti
- A chi è rivolto
- Instructor bio e foto
- Testimonianze studenti
- FAQ
- Prezzo e modalità di pagamento
- CTA iscrizione
- Corsi correlati

---

### 5.6 Blog (`/blog`)

**Pagina Lista:**
- Grid articoli (2-3 colonne)
- Featured post in evidenza (full-width)
- Categorie sidebar
- Tag cloud
- Search bar
- Sorting (recenti, popolari)

**Pagina Articolo (`/blog/[slug]`):**
- Hero image
- Titolo
- Metadata (autore, data, tempo lettura, categorie)
- Contenuto formattato (rich text)
- Code syntax highlighting (per tutorial tecnici)
- Immagini/video embedded
- Social share buttons
- Author bio box
- Related posts
- Comments section (opzionale, Disqus/custom)

---

### 5.7 Team (`/team`)

**Contenuto:**
- Grid membri del team
- Ogni card con:
  - Foto professionale
  - Nome
  - Ruolo
  - Breve bio
  - Social links (LinkedIn, Twitter, Portfolio)
- Modal o pagina dettaglio per bio estesa
- Sezione "Join us" per recruiting

---

### 5.8 Contact / Contatti (`/contact`)

**Elementi:**
- Form contatto:
  - Nome
  - Email
  - Telefono (opzionale)
  - Tipo richiesta (dropdown)
  - Messaggio
  - reCAPTCHA
  - Button submit
- Informazioni contatto:
  - Email
  - Telefono
  - Indirizzo
  - Social media links
- Google Maps embedded (se presente sede fisica)
- Orari di apertura
- FAQ sezione (domande frequenti)

---

### 5.9 Pagine Aggiuntive

**Legal:**
- Privacy Policy (`/privacy`)
- Cookie Policy (`/cookies`)
- Terms of Service (`/terms`)

**Altre:**
- 404 Page (personalizzata, accattivante)
- Sitemap (generata automaticamente da Next.js)

---

## 6. Content Types Strapi

### 6.1 Game (Collection Type)

```typescript
interface Game {
  id: number
  title: string
  slug: string
  tagline: string
  description: string // Rich text
  releaseDate: Date
  status: 'released' | 'in-development' | 'coming-soon'
  platforms: string[] // ['PC', 'Mobile', 'Console']
  genre: string[]
  thumbnail: Media
  coverImage: Media
  gallery: Media[] // Multiple images
  trailerUrl: string
  storeLinks: {
    platform: string
    url: string
  }[]
  features: string[] // Key features
  technologies: string[]
  teamCredits: string // Rich text
  seo: SEO
  publishedAt: Date
  featured: boolean
  categories: Relation<Category>
}
```

### 6.2 Course (Collection Type)

```typescript
interface Course {
  id: number
  title: string
  slug: string
  description: string // Rich text
  shortDescription: string
  thumbnail: Media
  instructorName: string
  instructorBio: string
  instructorPhoto: Media
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: number // hours
  format: 'online' | 'in-person' | 'hybrid'
  price: number
  currency: string
  topics: string[]
  learningObjectives: string[]
  requirements: string[]
  targetAudience: string
  syllabus: string // Rich text with modules
  nextSessions: Date[]
  maxStudents: number
  enrolledStudents: number
  rating: number
  testimonials: Relation<Testimonial>
  featured: boolean
  badge: 'new' | 'best-seller' | 'starting-soon' | null
  seo: SEO
  publishedAt: Date
}
```

### 6.3 Blog Post (Collection Type)

```typescript
interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string // Rich text with markdown support
  coverImage: Media
  author: Relation<TeamMember>
  categories: Relation<Category>[]
  tags: string[]
  readingTime: number // minutes
  featured: boolean
  views: number
  seo: SEO
  publishedAt: Date
}
```

### 6.4 Team Member (Collection Type)

```typescript
interface TeamMember {
  id: number
  name: string
  slug: string
  role: string
  bio: string // Rich text
  photo: Media
  email: string
  socialLinks: {
    platform: string
    url: string
  }[]
  featured: boolean
  order: number
}
```

### 6.5 Service (Collection Type)

```typescript
interface Service {
  id: number
  title: string
  slug: string
  description: string // Rich text
  shortDescription: string
  icon: Media
  features: string[]
  technologies: string[]
  projects: Relation<Game>[] // Example projects
  order: number
}
```

### 6.6 Testimonial (Collection Type)

```typescript
interface Testimonial {
  id: number
  authorName: string
  authorRole: string
  authorCompany: string
  authorPhoto: Media
  content: string
  rating: number // 1-5
  featured: boolean
  relatedTo: Relation<Game | Course>
}
```

### 6.7 Category (Collection Type)

```typescript
interface Category {
  id: number
  name: string
  slug: string
  description: string
  type: 'game' | 'blog' | 'course'
}
```

### 6.8 SEO Component (reusable)

```typescript
interface SEO {
  metaTitle: string
  metaDescription: string
  metaImage: Media
  metaKeywords: string[]
  metaRobots: string
  structuredData: JSON
  canonicalURL: string
}
```

---

## 7. Design System

### 7.1 Tipografia

**Font Titoli: Agandir**
```css
/* Assumendo che Agandir sia disponibile localmente */
@font-face {
  font-family: 'Agandir';
  src: url('/fonts/agandir/Agandir-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Agandir';
  src: url('/fonts/agandir/Agandir-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}
```

**Font Paragrafi: Raleway**
```css
/* Importato da Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');
```

**Tailwind Config:**
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Agandir', 'sans-serif'],
        body: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '1.1' }],
        'h1': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.2' }],
        'h2': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.3' }],
        'h3': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.4' }],
        'h4': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.5' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.75' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
      },
    },
  },
}
```

### 7.2 Palette Colori

**Ispirazione da febucci.com (da adattare in base a branding Attic Studio):**

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // Main primary
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',  // Main secondary
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        accent: {
          orange: '#f97316',
          green: '#22c55e',
          red: '#ef4444',
          yellow: '#eab308',
        },
      },
    },
  },
}
```

**Modalità Chiara/Scura (opzionale):**
- Implementare theme toggle con `next-themes`
- CSS variables per gestione dinamica colori

### 7.3 Spacing e Layout

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      spacing: {
        'section': 'clamp(4rem, 8vw, 8rem)',      // Padding verticale sezioni
        'container': 'clamp(1rem, 3vw, 2rem)',    // Padding orizzontale container
      },
      maxWidth: {
        'container': '1280px',
        'prose': '65ch',
      },
    },
  },
}
```

### 7.4 Componenti UI Base

**Button:**
```typescript
// Varianti: primary, secondary, outline, ghost
// Sizes: sm, md, lg
// States: default, hover, active, disabled, loading
```

**Card:**
```typescript
// Varianti: default, hover-lift, bordered
// Layouts: vertical, horizontal
```

**Input:**
```typescript
// Types: text, email, textarea, select
// States: default, focus, error, disabled
```

### 7.5 Animazioni Framer Motion

**Preset Animazioni:**

```typescript
// lib/animations/variants.ts

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export const slideUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
}

export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Scroll-triggered animations
export const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}
```

---

## 8. Integrazione Next.js + Strapi

### 8.1 Setup Strapi API Client

```typescript
// lib/strapi/api.ts
import axios from 'axios'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN

export const strapiAPI = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    ...(STRAPI_API_TOKEN && {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`
    })
  }
})

// Helper per costruire URL immagini
export const getStrapiMedia = (url: string | null): string | null => {
  if (!url) return null
  if (url.startsWith('http')) return url
  return `${STRAPI_URL}${url}`
}

// Helper per populate completo
export const buildPopulateQuery = (fields: string[]): string => {
  return fields.map((field, index) => `populate[${index}]=${field}`).join('&')
}
```

### 8.2 Query Functions

```typescript
// lib/strapi/queries.ts
import { strapiAPI, buildPopulateQuery } from './api'
import type { Game, Course, BlogPost } from '@/types'

// Games
export async function getAllGames(): Promise<Game[]> {
  const populate = buildPopulateQuery(['thumbnail', 'coverImage', 'categories'])
  const { data } = await strapiAPI.get(`/games?${populate}&sort=publishedAt:desc`)
  return data.data
}

export async function getGameBySlug(slug: string): Promise<Game | null> {
  const populate = buildPopulateQuery(['thumbnail', 'coverImage', 'gallery', 'categories'])
  const { data } = await strapiAPI.get(`/games?filters[slug][$eq]=${slug}&${populate}`)
  return data.data[0] || null
}

export async function getFeaturedGames(limit: number = 3): Promise<Game[]> {
  const populate = buildPopulateQuery(['thumbnail', 'coverImage'])
  const { data } = await strapiAPI.get(
    `/games?filters[featured][$eq]=true&${populate}&pagination[limit]=${limit}`
  )
  return data.data
}

// Courses
export async function getAllCourses(): Promise<Course[]> {
  const populate = buildPopulateQuery(['thumbnail', 'instructorPhoto'])
  const { data } = await strapiAPI.get(`/courses?${populate}&sort=publishedAt:desc`)
  return data.data
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const populate = buildPopulateQuery([
    'thumbnail',
    'instructorPhoto',
    'testimonials',
    'testimonials.authorPhoto'
  ])
  const { data } = await strapiAPI.get(`/courses?filters[slug][$eq]=${slug}&${populate}`)
  return data.data[0] || null
}

// Blog Posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const populate = buildPopulateQuery(['coverImage', 'author', 'author.photo', 'categories'])
  const { data } = await strapiAPI.get(`/blog-posts?${populate}&sort=publishedAt:desc`)
  return data.data
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const populate = buildPopulateQuery(['coverImage', 'author', 'author.photo', 'categories', 'tags'])
  const { data } = await strapiAPI.get(`/blog-posts?filters[slug][$eq]=${slug}&${populate}`)
  return data.data[0] || null
}

// Team Members
export async function getTeamMembers(): Promise<TeamMember[]> {
  const { data } = await strapiAPI.get('/team-members?populate=*&sort=order:asc')
  return data.data
}

// Testimonials
export async function getFeaturedTestimonials(limit: number = 6): Promise<Testimonial[]> {
  const { data } = await strapiAPI.get(
    `/testimonials?filters[featured][$eq]=true&populate=*&pagination[limit]=${limit}`
  )
  return data.data
}
```

### 8.3 Next.js Data Fetching

**Static Generation (Consigliato per performance):**

```typescript
// app/games/page.tsx
import { getAllGames } from '@/lib/strapi/queries'

export const revalidate = 3600 // Revalidate ogni ora

export default async function GamesPage() {
  const games = await getAllGames()
  
  return (
    <div>
      {/* Render games */}
    </div>
  )
}
```

**Dynamic Routes:**

```typescript
// app/games/[slug]/page.tsx
import { getGameBySlug, getAllGames } from '@/lib/strapi/queries'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const games = await getAllGames()
  return games.map((game) => ({
    slug: game.attributes.slug,
  }))
}

export default async function GamePage({ params }: { params: { slug: string } }) {
  const game = await getGameBySlug(params.slug)
  
  if (!game) {
    notFound()
  }
  
  return (
    <div>
      {/* Render game details */}
    </div>
  )
}
```

**Incremental Static Regeneration (ISR):**
- Utilizzare `revalidate` per aggiornare contenuti periodicamente
- Ottimo compromesso tra performance e freshness

---

## 9. Deployment su Coolify

### 9.1 Prerequisiti

- VPS con Docker e Coolify installati
- Dominio configurato (es. atticstudio.com)
- Repository Git (GitHub/GitLab)
- SSL certificate (Let's Encrypt automatico via Coolify)

### 9.2 Configurazione Progetti

**Backend Strapi:**

1. **Dockerfile Strapi** (se non già presente):
```dockerfile
FROM node:20-alpine AS base

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]
```

2. **Environment Variables in Coolify:**
```env
NODE_ENV=production
DATABASE_CLIENT=postgres
DATABASE_HOST=postgres_service_name
DATABASE_PORT=5432
DATABASE_NAME=attic_studio_strapi
DATABASE_USERNAME=strapi_user
DATABASE_PASSWORD=secure_password_here
DATABASE_SSL=false

JWT_SECRET=your_jwt_secret_here
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
APP_KEYS=your_app_keys_here

HOST=0.0.0.0
PORT=1337
PUBLIC_URL=https://cms.atticstudio.com
```

3. **Setup PostgreSQL in Coolify:**
   - Creare nuovo Database service
   - Collegare a progetto Strapi
   - Configurare persistent volume

4. **Deploy Strapi:**
   - Configurare build from Git repository
   - Branch: `main` o `production`
   - Auto-deploy on push
   - Dominio: `cms.atticstudio.com`
   - SSL: Let's Encrypt automatic

**Frontend Next.js:**

1. **Dockerfile Next.js:**
```dockerfile
FROM node:20-alpine AS base

# Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN corepack enable pnpm && pnpm run build

# Runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

2. **next.config.js per standalone:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.atticstudio.com',
      },
    ],
  },
}

module.exports = nextConfig
```

3. **Environment Variables in Coolify:**
```env
NEXT_PUBLIC_SITE_URL=https://atticstudio.com
NEXT_PUBLIC_STRAPI_URL=https://cms.atticstudio.com
STRAPI_API_TOKEN=your_strapi_api_token_here
```

4. **Deploy Frontend:**
   - Repository Git separato o monorepo
   - Branch: `main` o `production`
   - Build command: `pnpm install && pnpm build`
   - Start command: `node server.js`
   - Dominio: `atticstudio.com` e `www.atticstudio.com`
   - SSL: Let's Encrypt automatic

### 9.3 CI/CD Pipeline

**Workflow Suggerito:**

1. Push su `develop` branch → Deploy su staging environment
2. Merge su `main` → Deploy automatico su production
3. Webhook Strapi → Revalidate Next.js on content update

**Webhook Setup (Strapi → Next.js):**

```typescript
// app/api/revalidate/route.ts
import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }
  
  const body = await request.json()
  const { model, slug } = body
  
  try {
    // Revalidate specific paths based on model
    if (model === 'game') {
      revalidatePath('/games')
      revalidatePath(`/games/${slug}`)
    } else if (model === 'blog-post') {
      revalidatePath('/blog')
      revalidatePath(`/blog/${slug}`)
    } else if (model === 'course') {
      revalidatePath('/courses')
      revalidatePath(`/courses/${slug}`)
    }
    
    return NextResponse.json({ revalidated: true })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
```

**Configurazione Webhook in Strapi:**
- Settings → Webhooks
- URL: `https://atticstudio.com/api/revalidate?secret=YOUR_SECRET`
- Events: `entry.create`, `entry.update`, `entry.delete`

### 9.4 Backup Strategy

1. **Database PostgreSQL:**
   - Backup automatici giornalieri via Coolify
   - Retention: 7 giorni
   - Backup offsite su S3/Backblaze (opzionale)

2. **Media Files (Strapi uploads):**
   - Volume persistente Docker
   - Sync periodico su storage cloud (S3, Cloudflare R2)

3. **Git Repository:**
   - Codice già versionato
   - Tag release per rollback

---

## 10. Performance Optimization

### 10.1 Next.js Optimization

- **Image Optimization:**
  - `next/image` component per lazy loading e ottimizzazione automatica
  - WebP format
  - Responsive images con srcset
  
- **Font Optimization:**
  - `next/font` per caricamento ottimizzato font locali
  - Font subsetting
  - FOUT/FOIT mitigation

- **Code Splitting:**
  - Dynamic imports per componenti pesanti
  - Route-based code splitting automatico
  
- **Caching:**
  - ISR per pagine dinamiche
  - CDN caching headers
  - Service Worker (opzionale PWA)

### 10.2 Strapi Optimization

- **Database:**
  - Indexes su campi ricercati (slug, publishedAt)
  - Connection pooling
  
- **API:**
  - Response caching (Redis opzionale)
  - GraphQL per query specifiche
  - Pagination per liste lunghe
  
- **Media:**
  - Image responsive formats in Strapi
  - CDN per media files (Cloudflare, BunnyCDN)

### 10.3 Monitoring

- **Performance:**
  - Google Lighthouse CI
  - Core Web Vitals monitoring
  - Vercel Analytics (se deployed su Vercel) o alternative
  
- **Errors:**
  - Sentry integration
  - Log aggregation (Loki, CloudWatch)
  
- **Uptime:**
  - UptimeRobot o Pingdom
  - Status page (Statuspage.io)

---

## 11. SEO Strategy

### 11.1 Technical SEO

- **Metadata:** Dinamici per ogni pagina via Strapi SEO component
- **Sitemap:** Generato automaticamente (`next-sitemap`)
- **Robots.txt:** Configurato appropriatamente
- **Canonical URLs:** Per evitare contenuto duplicato
- **Structured Data:** JSON-LD per Game, Course, Article, Organization
- **Open Graph:** Per social sharing ottimale
- **Twitter Cards:** Metadata specifici

### 11.2 Content SEO

- **Keyword Research:** Focus su gaming development keywords
- **Blog Strategy:** Tutorial tecnici, case studies, industry insights
- **Alt Text:** Tutte le immagini con alt text descrittivo
- **Internal Linking:** Struttura logica tra pagine
- **Loading Speed:** Ottimizzazione aggressive per performance

### 11.3 Local SEO (se applicabile)

- **Google My Business:** Se presenza fisica
- **Local Schema Markup**
- **NAP Consistency:** Name, Address, Phone

---

## 12. Security

### 12.1 Frontend Security

- **Environment Variables:** Mai esporre secrets nel client
- **XSS Protection:** React's built-in escaping + CSP headers
- **CSRF Protection:** Token-based per forms
- **HTTPS:** Sempre e solo HTTPS (enforced da Coolify)
- **Dependencies:** Regular updates e security audits (`npm audit`)

### 12.2 Backend Security

- **Authentication:** JWT con refresh tokens
- **Authorization:** Role-based access control in Strapi
- **API Rate Limiting:** Protezione da abuse
- **Input Validation:** Su tutti gli endpoints
- **SQL Injection:** Prevenzione via ORM (Strapi)
- **CORS:** Configurato correttamente per frontend domain

### 12.3 Infrastructure Security

- **Firewall:** VPS firewall configurato (solo porte necessarie)
- **SSH:** Key-based authentication, no password
- **Updates:** Sistema operativo e Docker aggiornati
- **Backups:** Encrypted backups
- **Secrets Management:** Variabili ambiente sicure in Coolify

---

## 13. Accessibility (A11y)

- **Semantic HTML:** Uso corretto di tag HTML5
- **ARIA Labels:** Dove necessario per screen readers
- **Keyboard Navigation:** Tutti gli elementi interattivi accessibili da tastiera
- **Focus States:** Visibili e chiari
- **Color Contrast:** WCAG AA compliance minimo (AAA preferred)
- **Alt Text:** Descrizioni significative per immagini
- **Form Labels:** Sempre associati correttamente
- **Skip Links:** Per navigazione rapida
- **Responsive Text:** Leggibile su tutti i device
- **Testing:** Lighthouse accessibility audit + manual testing

---

## 14. Testing Strategy

### 14.1 Frontend Testing

- **Unit Tests:** Componenti UI (Vitest + React Testing Library)
- **Integration Tests:** Flussi utente completi
- **E2E Tests:** Playwright o Cypress per critical paths
- **Visual Regression:** Chromatic o Percy (opzionale)
- **Accessibility Tests:** axe-core integration

### 14.2 Backend Testing

- **API Tests:** Postman/Insomnia collections
- **Load Testing:** K6 o Artillery per stress test
- **Security Tests:** OWASP ZAP scan

### 14.3 Manual Testing

- **Browser Testing:** Chrome, Firefox, Safari, Edge
- **Device Testing:** Desktop, Tablet, Mobile
- **User Acceptance Testing:** Stakeholder review

---

## 15. Content Strategy

### 15.1 Launch Content

**Homepage:**
- Hero con video/immagine impattante
- 3 giochi featured
- Overview servizi
- 2-3 testimonianze
- CTA contatto

**Games Portfolio:**
- Minimo 6-8 giochi per lancio
- Mix di progetti completati e in sviluppo
- Varietà di generi e piattaforme

**Courses:**
- 3-5 corsi pronti con programma completo
- Date sessioni prossimi mesi
- Testimonianze studenti (se disponibili)

**Blog:**
- 5-10 articoli pubblicati
- Mix di tutorial, case studies, news
- Cadenza pubblicazione: 1-2 articoli/settimana

**Team:**
- Profili completi membri core team
- Foto professionali

### 15.2 Content Guidelines

- **Tone of Voice:** Professionale ma accessibile, appassionato
- **Language:** Italiano (con possibilità di espansione in inglese)
- **Imagery:** Alta qualità, coerente con brand
- **Video:** Trailer giochi, demo corsi, dietro le quinte

---

## 16. Analytics e Tracking

### 16.1 Tools

- **Google Analytics 4:** Traffico, comportamento utenti
- **Google Search Console:** Performance ricerca organica
- **Hotjar / Microsoft Clarity:** Heatmaps e recordings
- **Custom Events:** Tracking interazioni specifiche (download, iscrizioni corsi, form submit)

### 16.2 KPIs

- **Traffic:** Visite, pageviews, bounce rate
- **Engagement:** Tempo sulla pagina, pagine/sessione
- **Conversions:** Form contatti, iscrizioni corsi, click progetti
- **SEO:** Ranking keywords, impressioni, CTR
- **Performance:** Core Web Vitals scores

---

## 17. Maintenance Plan

### 17.1 Regular Tasks

**Settimanale:**
- Pubblicazione nuovi contenuti blog
- Monitoraggio analytics
- Controllo uptime e performance

**Mensile:**
- Security updates (dependencies)
- Backup verification
- Content refresh (aggiornamento date, informazioni)
- SEO audit base

**Trimestrale:**
- Major feature updates
- Design refresh parziale
- A/B testing nuove funzionalità
- Comprehensive SEO audit

**Annuale:**
- Redesign/rebrand (se necessario)
- Server infrastructure review
- Budget review e pianificazione

### 17.2 Support

- **Bug Fixing:** SLA da definire (es. 24-48h per bug critici)
- **Content Updates:** Training per team Attic Studio su Strapi
- **Technical Support:** Retainer o ticket-based

---

## 18. Budget Estimate (Indicativo)

### 18.1 Sviluppo Iniziale

- **Design & Branding:** €2.000 - €4.000
- **Frontend Development:** €8.000 - €12.000
- **Backend/Strapi Setup:** €3.000 - €5.000
- **Content Creation:** €2.000 - €4.000
- **Testing & QA:** €1.500 - €2.500
- **Deployment & Training:** €1.000 - €2.000

**Totale Sviluppo:** €17.500 - €29.500

### 18.2 Costi Ricorrenti (Annuali)

- **Hosting VPS:** €120 - €300/anno (dipende da specifiche)
- **Dominio:** €15 - €30/anno
- **CDN (se esterno):** €0 - €300/anno
- **Backup Storage:** €50 - €150/anno
- **SSL Certificate:** €0 (Let's Encrypt)
- **Monitoring Tools:** €0 - €200/anno
- **Maintenance & Updates:** €1.500 - €3.000/anno

**Totale Ricorrente:** €1.685 - €3.980/anno

---

## 19. Timeline Progetto

### Fase 1: Discovery & Planning (1-2 settimane)
- Kickoff meeting
- Requirements gathering
- Content audit
- Wireframes
- Technical architecture

### Fase 2: Design (2-3 settimane)
- Moodboard e style guide
- Homepage design
- Inner pages design
- Mobile responsive design
- Design review e approval

### Fase 3: Development (6-8 settimane)
- Setup progetto (Next.js + Strapi)
- Strapi content types configuration
- Frontend components development
- API integration
- Animations implementation
- Responsive development

### Fase 4: Content & QA (2-3 settimane)
- Content migration a Strapi
- SEO optimization
- Testing (funzionale, cross-browser, performance)
- Bug fixing
- Accessibility audit

### Fase 5: Deployment & Launch (1 settimana)
- Setup Coolify production environment
- Final testing su staging
- DNS configuration
- Production deployment
- Post-launch monitoring

### Fase 6: Post-Launch Support (ongoing)
- Bug fixing immediato
- Performance monitoring
- User feedback integration

**Totale Progetto:** 12-17 settimane (~3-4 mesi)

---

## 20. Resources & Template Suggeriti

### 20.1 Next.js Templates da Considerare

Basandosi sulla ricerca effettuata, ecco alcuni template che potrebbero servire da ispirazione o base:

1. **Gamestorm - Gaming Studio React Next.js Template**
   - Template specifico per gaming studio
   - Built con Next.js 13 e TypeScript
   - Include home page, portfolio, team, blog
   - Pro: Già ottimizzato per gaming
   - Con: Richiede customizzazione per matching febucci.com style

2. **Portfolio Templates con Tailwind + Framer Motion**
   - Numerosi template open-source su GitHub
   - Esempi:
     - `Skolaczk/Portfolio` - Portfolio con Next.js, Tailwind, Framer Motion
     - `Metaverse-Nabeel/portfolio_next_JS` - Clean portfolio template
   - Pro: Ottima base per design minimalista
   - Con: Necessita adattamento per content gaming-specific

3. **Custom Development (Consigliato)**
   - Partire da Next.js starter pulito
   - Costruire componenti custom ispirandosi a febucci.com
   - Massima flessibilità e brand identity
   - Codice ottimizzato e manutenibile

### 20.2 UI Component Libraries Consigliate

- **shadcn/ui:** Componenti Radix UI + Tailwind (highly recommended)
- **Headless UI:** Di Tailwind Labs, ottimo per componenti accessibili
- **Radix UI:** Primitives per componenti complessi
- **Framer Motion:** Per tutte le animazioni

### 20.3 Strapi Resources

- **Official Docs:** https://docs.strapi.io
- **Strapi Next.js Guide:** https://strapi.io/integrations/nextjs-cms
- **Community Plugins:** Strapi Market per funzionalità extra

---

## 21. Conclusioni e Next Steps

### 21.1 Punti di Forza della Proposta

✅ **Stack Moderno (2025):** Next.js 15, React 18, TypeScript, Tailwind 4  
✅ **Performance Eccellente:** SSG/ISR per caricamenti ultra-rapidi  
✅ **Gestione Contenuti Flessibile:** Strapi headless CMS con pieno controllo  
✅ **Design Ispirato:** Replica dell'eleganza di febucci.com  
✅ **Scalabilità:** Architettura pronta per crescita futura  
✅ **SEO-Friendly:** Ottimizzazione nativa per motori di ricerca  
✅ **Developer Experience:** Stack piacevole e produttivo  
✅ **Deployment Semplificato:** Coolify per gestione hosting unificata  

### 21.2 Prossimi Passi

1. **Review Documento:** Attic Studio valuta proposta e fornisce feedback
2. **Refinement:** Aggiustamenti basati su feedback
3. **Approval:** Conferma budget, timeline, requisiti
4. **Kickoff:** Inizio ufficiale progetto
5. **Design Phase:** Creazione mockup dettagliati
6. **Development:** Costruzione effettiva del sito

### 21.3 Domande da Definire

Prima di iniziare lo sviluppo, è necessario chiarire:

- **Branding:** Logo, colori brand specifici Attic Studio?
- **Content:** Chi fornisce testi, immagini, video?
- **Hosting:** Dettagli VPS (già disponibile o da configurare)?
- **Domain:** Dominio già registrato?
- **Language:** Solo italiano o multilingua futuro?
- **E-commerce:** Vendita corsi online o iscrizione manuale?
- **User Accounts:** Necessari login studenti/clienti?
- **Blog Author:** Chi scriverà contenuti? Necessario CMS semplificato?
- **Budget:** Conferma range budget indicato?

---

## 22. Contatti e Supporto

Per qualsiasi domanda o chiarimento su questo documento di progetto:

**Project Manager:** [Nome]  
**Email:** [email@atticstudio.com]  
**Telefono:** [numero]

**Developer Contact:** [Nome Developer]  
**Email:** [dev@agency.com]

---

## Appendici

### Appendice A: Glossario Tecnico

- **SSG (Static Site Generation):** Generazione pagine statiche al build time
- **ISR (Incremental Static Regeneration):** Aggiornamento pagine statiche on-demand
- **Headless CMS:** CMS che fornisce solo backend/API, senza frontend accoppiato
- **API Route:** Endpoint serverless in Next.js
- **Component:** Blocco UI riutilizzabile in React
- **Hook:** Funzionalità React per gestire stato e lifecycle
- **JWT (JSON Web Token):** Standard per autenticazione sicura
- **CDN (Content Delivery Network):** Rete distribuzione contenuti per performance

### Appendice B: Checklist Pre-Launch

#### Content
- [ ] Tutti i testi revisionati e approvati
- [ ] Immagini ottimizzate e con alt text
- [ ] Video caricati e testati
- [ ] Metadata SEO completi per tutte le pagine
- [ ] Footer links (privacy, terms) completi

#### Technical
- [ ] Tutti i form testati e funzionanti
- [ ] Email notifications configurate
- [ ] 404 page customizzata
- [ ] Sitemap generato
- [ ] Robots.txt configurato
- [ ] Analytics installato e testato
- [ ] SSL certificate attivo
- [ ] Performance test (Lighthouse >90)
- [ ] Cross-browser testing completato
- [ ] Mobile responsive verificato

#### SEO
- [ ] Google Search Console configurato
- [ ] Google Analytics configurato
- [ ] Structured data implementato
- [ ] Social media meta tags
- [ ] Canonical URLs impostati

#### Security
- [ ] Environment variables in produzione
- [ ] Rate limiting attivo
- [ ] CORS configurato
- [ ] Security headers (CSP, HSTS, etc.)
- [ ] Backup automatici funzionanti

#### Legal
- [ ] Privacy policy pubblicata
- [ ] Cookie policy pubblicata
- [ ] Terms of service pubblicati
- [ ] GDPR compliance verificato

---

**Fine Documento**

*Questo documento è stato creato il 17 Ottobre 2025 ed è soggetto a modifiche in base a feedback e requisiti emergenti durante lo sviluppo del progetto.*
