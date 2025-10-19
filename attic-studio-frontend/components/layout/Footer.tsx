'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const footerLinks = {
  company: {
    title: 'Azienda',
    links: [
      { name: 'Chi Siamo', href: '/about' },
      { name: 'Team', href: '/team' },
      { name: 'Carriere', href: '/careers' },
      { name: 'Contatti', href: '/contact' },
    ],
  },
  services: {
    title: 'Servizi',
    links: [
      { name: 'Game Development', href: '/services#game-development' },
      { name: 'Game Design', href: '/services#game-design' },
      { name: 'Art & Animation', href: '/services#art-animation' },
      { name: 'Consulenza', href: '/services#consulting' },
    ],
  },
  resources: {
    title: 'Risorse',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Corsi', href: '/courses' },
      { name: 'Portfolio', href: '/games' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
  legal: {
    title: 'Legale',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Termini di Servizio', href: '/terms' },
    ],
  },
}

const socialLinks = [
  { name: 'Twitter', href: '#', icon: 'X' },
  { name: 'LinkedIn', href: '#', icon: 'in' },
  { name: 'GitHub', href: '#', icon: 'GH' },
  { name: 'YouTube', href: '#', icon: 'YT' },
]

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-secondary/20">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-10 w-auto"
              >
                <Image
                  src="/logo-white.png"
                  alt="Attic Studio"
                  width={160}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-sm text-text-muted mb-4">
              Creiamo esperienze di gioco memorabili e formiamo la prossima generazione di game developer.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-background-tertiary border border-secondary/30 rounded-full flex items-center justify-center text-text-muted hover:bg-secondary hover:text-background-primary hover:border-secondary hover:shadow-glow-cyan transition-all"
                  aria-label={social.name}
                >
                  <span className="text-xs font-bold">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="col-span-1">
              <h3 className="font-semibold text-text-primary mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-secondary-glow transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-secondary/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Iscriviti alla Newsletter
              </h3>
              <p className="text-sm text-text-muted">
                Ricevi aggiornamenti sui nostri progetti e corsi.
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="La tua email"
                className="input flex-1"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-primary"
              >
                Iscriviti
              </motion.button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-secondary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted">
              © {new Date().getFullYear()} Attic Studio. Tutti i diritti riservati.
            </p>
            <p className="text-xs text-text-muted/70">
              Crafted with <span className="text-accent">passion</span> for gaming
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}