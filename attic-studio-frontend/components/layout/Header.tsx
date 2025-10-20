'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <nav className="container-custom">
        <div className="flex items-center justify-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-12 sm:h-14 md:h-16 w-auto"
            >
              <Image
                src="/images/logo-white.png"
                alt="Attic Studio"
                width={180}
                height={180}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                priority
                unoptimized
              />
            </motion.div>
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}
