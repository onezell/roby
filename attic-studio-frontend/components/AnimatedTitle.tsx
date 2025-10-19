'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTitleProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  gradient?: boolean;
}

export default function AnimatedTitle({
  children,
  className = '',
  as: Tag = 'h1',
  gradient = false,
}: AnimatedTitleProps) {
  const words = children.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <Tag className={className}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`flex flex-wrap gap-x-2 ${gradient ? 'gradient-text' : ''}`}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block ${
              gradient && index % 2 === 0 ? 'text-glow-cyan' : ''
            }`}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </Tag>
  );
}
