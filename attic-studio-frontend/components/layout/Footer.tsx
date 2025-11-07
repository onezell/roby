'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const footerLinks = {
  company: {
    title: 'Company',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'Games', href: '/games' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  connect: {
    title: 'Connect',
    links: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/atticstudio-games/' },
      { name: 'Email', href: 'mailto:hello@atticstudio.games' },
      { name: 'Discord', href: 'https://discord.gg/3eajWBkGyD' },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-secondary/20">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-10 w-auto"
              >
                <Image
                  src="/images/logo-white.png"
                  alt="Attic Studio"
                  width={160}
                  height={160}
                  className="h-10 w-auto object-contain"
                  unoptimized
                />
              </motion.div>
            </Link>
            <p className="text-sm text-text-muted mb-4 max-w-xs">
              Building accessible system-driven RPGs for a wider audience.
            </p>
            <p className="text-xs text-text-muted/70">
              📍 Milan, Italy
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="md:col-span-1">
              <h3 className="font-semibold text-text-primary mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-secondary-glow transition-all duration-300"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-secondary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted">
              © {new Date().getFullYear()} Attic Studio. All rights reserved.
            </p>
            <p className="text-xs text-text-muted/70">
              Crafted with <span className="text-secondary">passion</span> for system-driven RPGs
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
