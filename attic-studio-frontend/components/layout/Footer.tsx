'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const footerLinks = {
  company: {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Games', href: '/games' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  services: {
    title: 'Services',
    links: [
      { name: 'Original IPs', href: '/services#original-ips' },
      { name: 'Work-for-Hire', href: '/services#work-for-hire' },
      { name: 'Attic Hatchling', href: '/services#mentorship' },
    ],
  },
  connect: {
    title: 'Connect',
    links: [
      { name: 'LinkedIn', href: 'https://linkedin.com' },
      { name: 'Twitter', href: 'https://twitter.com' },
      { name: 'Email', href: 'mailto:roberta.migliori@atticstudio.games' },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-secondary/20">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
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
            <p className="text-sm text-text-muted mb-4 max-w-xs">
              Building accessible system-driven RPGs for a wider audience. Bringing depth in small doses.
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
