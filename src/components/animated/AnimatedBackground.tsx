"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

interface AnimatedBackgroundProps {
  children: ReactNode;
  className?: string;
}

/**
 * Client component for parallax background
 * Optimized with hardware acceleration to prevent flickering
 */
export function AnimatedBackground({
  children,
  className = "",
}: AnimatedBackgroundProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Use transform3d for hardware acceleration
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.div
      ref={ref}
      className={className}
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
