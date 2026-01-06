"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

interface AnimatedParallaxBackgroundProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Parallax speed multiplier (default: 0.2)
}

/**
 * Client component for parallax backgrounds
 * Optimized with hardware acceleration to prevent flickering
 */
export function AnimatedParallaxBackground({
  children,
  className = "",
  speed = 0.2,
}: AnimatedParallaxBackgroundProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Use transform3d for hardware acceleration
  const y = useTransform(scrollYProgress, [0, 1], [0, -speed * 300]);

  return (
    <motion.div
      ref={ref}
      className={`absolute inset-0 ${className}`}
      style={{
        y,
        transform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
}
