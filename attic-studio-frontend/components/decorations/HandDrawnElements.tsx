'use client'

import { motion } from 'framer-motion'

interface HandDrawnElementsProps {
  variant?: 'hero' | 'section'
}

export default function HandDrawnElements({ variant = 'section' }: HandDrawnElementsProps) {
  if (variant === 'hero') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blue circle decoration - top right */}
        <motion.svg
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#639FCF"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            style={{
              strokeDasharray: "283",
              opacity: 0.6,
            }}
          />
        </motion.svg>

        {/* Yellow brush stroke - left side */}
        <motion.svg
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-1/3 left-5 w-24 h-24 md:w-40 md:h-40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M10,50 Q30,20 50,40 T90,50"
            stroke="#F8C457"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            style={{ opacity: 0.5 }}
          />
        </motion.svg>

        {/* Small blue loop - bottom left */}
        <motion.svg
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-32 left-20 w-20 h-20 md:w-32 md:h-32"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M20,50 Q40,20 60,50 Q80,80 50,80 Q20,80 20,50"
            stroke="#1250A1"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
            style={{ opacity: 0.4 }}
          />
        </motion.svg>

        {/* Yellow circle - bottom right */}
        <motion.svg
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-20 right-32 w-16 h-16 md:w-24 md:h-24"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#F8C457"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            style={{ opacity: 0.5 }}
          />
        </motion.svg>
      </div>
    )
  }

  // Section variant - simpler decorations
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Small blue circle - top right */}
      <svg
        className="absolute top-10 right-10 w-16 h-16 opacity-30"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="#639FCF"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      {/* Yellow accent - left side */}
      <svg
        className="absolute bottom-10 left-10 w-20 h-20 opacity-40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10,50 Q30,30 50,50 T90,50"
          stroke="#F8C457"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
