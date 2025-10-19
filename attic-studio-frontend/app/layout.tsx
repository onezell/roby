import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Attic Studio - Sviluppo Videogiochi e Formazione',
  description: 'Agenzia di sviluppo videogiochi che offre anche corsi di formazione nel settore gaming',
  keywords: ['sviluppo videogiochi', 'game development', 'corsi gaming', 'unity', 'unreal engine'],
  authors: [{ name: 'Attic Studio' }],
  creator: 'Attic Studio',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://atticstudio.com',
    siteName: 'Attic Studio',
    title: 'Attic Studio - Sviluppo Videogiochi e Formazione',
    description: 'Agenzia di sviluppo videogiochi che offre anche corsi di formazione nel settore gaming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Attic Studio - Sviluppo Videogiochi e Formazione',
    description: 'Agenzia di sviluppo videogiochi che offre anche corsi di formazione nel settore gaming',
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
    <html lang="it" className={`scroll-smooth ${agrandir.variable}`}>
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