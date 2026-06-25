'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  /** maps to the data-r responsive hook attribute */
  dataR?: string;
}

/**
 * Scroll-reveal wrapper (Framer Motion) — replaces the original CSS
 * load-time reveal. Fades/translates each block into place once when it
 * enters the viewport. Final resting state is opacity:1 / no transform,
 * so the layout is pixel-identical to the approved design.
 */
export default function Reveal({
  children,
  style,
  className,
  delay = 0,
  y = 24,
  duration = 0.7,
  dataR,
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      data-r={dataR}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
