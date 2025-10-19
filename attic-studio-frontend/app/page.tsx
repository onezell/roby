import Hero from '@/components/sections/Hero'
import FeaturedGames from '@/components/sections/FeaturedGames'
import Services from '@/components/sections/Services'
import CoursesPreview from '@/components/sections/CoursesPreview'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero
        title="Creiamo Mondi Digitali Straordinari"
        subtitle="Attic Studio è un'agenzia di sviluppo videogiochi che trasforma idee innovative in esperienze di gioco memorabili"
        primaryCTA={{ text: 'Scopri i Nostri Giochi', href: '/games' }}
        secondaryCTA={{ text: 'Inizia un Progetto', href: '/contact' }}
      />

      <FeaturedGames />

      <Services />

      <CoursesPreview />

      <Testimonials />

      <CTA />
    </>
  )
}