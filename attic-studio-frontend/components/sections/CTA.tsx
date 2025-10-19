'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient - Attic Studio brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-background/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Pronto a Creare il Tuo
            <span className="block mt-2">Prossimo Grande Gioco?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Trasforma la tua visione in realtà con il supporto dei nostri esperti
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-neutral-100 hover:shadow-xl hover:shadow-white/50 px-8 border-2 border-white"
              >
                Inizia il Tuo Progetto
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 hover:shadow-lg"
              >
                Scopri i Servizi
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-16 border-t border-white/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-white/80">Progetti Completati</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-white/80">Studenti Formati</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-white/80">Anni di Esperienza</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-white/80">Clienti Soddisfatti</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}