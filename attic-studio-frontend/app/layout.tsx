import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Attic Studio | Game Development | Services & Consulting | Mentoring and Training',
  description: 'Game development studio based in Milan, Italy. We build original IPs, provide consulting and work-for-hire services, and mentor the next generation of game developers through Attic Hatchlings.',
  keywords: ['game development', 'video games', 'game design', 'level design', 'consulting', 'work-for-hire', 'mentorship', 'Milan', 'Italy', 'RPG', 'system-driven games'],
  authors: [{ name: 'Attic Studio' }],
  creator: 'Attic Studio',
  other: {
    'geo.region': 'IT-MI',
    'geo.placename': 'Milan',
    'geo.position': '45.464664;9.188540',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://staging.atticstudio.games',
    siteName: 'Attic Studio',
    title: 'Attic Studio | Game Development | Services & Consulting | Mentoring and Training',
    description: 'Game development studio based in Milan, Italy. We build original IPs, provide consulting and work-for-hire services, and mentor the next generation of game developers.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnimatedBackground from '@/components/background/AnimatedBackground'
import localFont from 'next/font/local'

const agrandir = localFont({
  src: [
    {
      path: '../public/fonts/agrandir/Agrandir-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/agrandir/Agrandir-TextBold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-agrandir',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${agrandir.variable}`}>
      <body className="min-h-screen bg-background antialiased font-body relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}