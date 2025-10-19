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
  return (
    <Tag className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={gradient ? 'gradient-text' : ''}
      >
        {children}
      </motion.div>
    </Tag>
  );
}
