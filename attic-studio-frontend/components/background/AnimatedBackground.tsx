'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>([])

  useEffect(() => {
    // Generate random particles (stars)
    const particleCount = 50
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0a1128] to-[#0d1b3a]" />

      {/* Organic flowing shapes - febucci style */}
      <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="blueGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#639FCF', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#1250A1', stopOpacity: 0.4 }} />
          </linearGradient>
          <linearGradient id="blueGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#7db8ff', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#639FCF', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>

        {/* Flowing organic shapes */}
        <motion.path
          d="M-100,200 Q100,50 300,150 T700,100 Q900,150 1100,50"
          fill="none"
          stroke="url(#blueGrad1)"
          strokeWidth="60"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: [0.3, 0.6, 0.3],
            d: [
              "M-100,200 Q100,50 300,150 T700,100 Q900,150 1100,50",
              "M-100,180 Q150,80 350,120 T750,130 Q950,120 1100,80",
              "M-100,200 Q100,50 300,150 T700,100 Q900,150 1100,50"
            ]
          }}
          transition={{
            pathLength: { duration: 3 },
            d: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <motion.path
          d="M1920,400 Q1600,300 1300,450 T800,350 Q500,400 200,300"
          fill="none"
          stroke="url(#blueGrad2)"
          strokeWidth="50"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: [0.2, 0.5, 0.2],
            d: [
              "M1920,400 Q1600,300 1300,450 T800,350 Q500,400 200,300",
              "M1920,420 Q1650,350 1350,420 T850,380 Q550,370 200,330",
              "M1920,400 Q1600,300 1300,450 T800,350 Q500,400 200,300"
            ]
          }}
          transition={{
            pathLength: { duration: 3, delay: 0.5 },
            d: { duration: 18, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <motion.path
          d="M-50,600 Q250,500 500,600 T1000,550 Q1300,600 1600,500"
          fill="none"
          stroke="#639FCF"
          strokeWidth="40"
          strokeLinecap="round"
          opacity="0.15"
          animate={{
            d: [
              "M-50,600 Q250,500 500,600 T1000,550 Q1300,600 1600,500",
              "M-50,580 Q280,530 530,580 T1030,570 Q1330,570 1600,530",
              "M-50,600 Q250,500 500,600 T1000,550 Q1300,600 1600,500"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Floating orbs - blue */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-2xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(99, 159, 207, 0.8) 0%, transparent 70%)',
        }}
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(125, 184, 255, 0.6) 0%, transparent 70%)',
        }}
      />

      {/* Floating particles (stars) */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -100, -200]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear'
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)'
          }}
        />
      ))}

      {/* Yellow dots scattered - febucci style */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full bg-accent"
          style={{
            left: `${10 + (i * 6.5)}%`,
            top: `${15 + (i % 3) * 25}%`,
            opacity: 0.4
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-60" />
    </div>
  )
}
