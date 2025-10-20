'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-secondary/20">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Brand Column */}
          <div className="text-center md:text-left">
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
            <p className="text-sm text-text-muted mb-4">
              Building accessible system-driven RPGs for a wider audience.
            </p>
          </div>

          {/* Company Info */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold text-text-primary mb-4">Company Information</h3>
            <div className="space-y-2 text-sm text-text-muted">
              <p>Attic Studio srls</p>
              <p>Via Monte Rosa 21, 20149 Milano</p>
              <p>P.IVA / CODICE FISCALE: 14394580964</p>
              <p>
                <a 
                  href="mailto:roberta.migliori@atticstudio.games"
                  className="text-secondary hover:text-secondary-glow transition-colors"
                >
                  roberta.migliori@atticstudio.games
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-secondary/20">
          <div className="text-center">
            <p className="text-sm text-text-muted">
              © {new Date().getFullYear()} Attic Studio srls. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
