"use client";

import { type ReactNode } from "react";

interface AnimatedParallaxBackgroundProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Parallax speed multiplier (default: 0.2)
}

/**
 * Client component for backgrounds - fixed position without parallax to prevent flickering
 * Optimized for performance
 */
export function AnimatedParallaxBackground({
  children,
  className = "",
  speed = 0.2,
}: AnimatedParallaxBackgroundProps) {
  return <div className={`absolute inset-0 ${className}`}>{children}</div>;
}
