'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import AnimatedTitle from '@/components/AnimatedTitle'
import HandDrawnElements from '@/components/decorations/HandDrawnElements'

interface HeroProps {
  title: string
  subtitle: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  backgroundImage?: string
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
        </div>
      )}

      {/* Fullscreen Logo Animation Video - Blurred Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-sm opacity-40"
          style={{
            filter: 'blur(8px) brightness(0.7)',
          }}
        >
          <source src="/videos/logo-animation.mp4?v=2" type="video/mp4" />
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/80" />
      </motion.div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <AnimatedTitle
            as="h1"
            className="heading-hero mb-6"
            gradient={true}
          >
            {title}
          </AnimatedTitle>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="body-large max-w-3xl mx-auto mb-8"
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {primaryCTA && (
              <Link href={primaryCTA.href}>
                <Button size="lg" variant="primary">
                  {primaryCTA.text}
                </Button>
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button size="lg" variant={backgroundImage ? 'outline' : 'outline'}>
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-secondary/60 rounded-full flex justify-center shadow-glow-cyan"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-secondary rounded-full mt-2 shadow-glow-cyan"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}