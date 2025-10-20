'use client'

import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-primary via-background-secondary to-background-primary">
      {/* Hero Section - Coming Soon */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fullscreen Logo Animation Video */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute inset-0 overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            style={{
              filter: 'blur(2px) brightness(0.85)',
            }}
          >
            <source src="/videos/logo-animation.mp4?v=2" type="video/mp4" />
          </video>

          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/60" />
        </motion.div>

        {/* Content */}
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h1 className="heading-hero mb-6">
              <span className="gradient-text">Coming Soon</span>
            </h1>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
