"use client";

import { ReactNode } from "react";

interface AnimatedBackgroundProps {
  children: ReactNode;
  className?: string;
}

/**
 * Client component for fixed background - no parallax to prevent flickering
 * Separated from server components for better SEO
 */
export function AnimatedBackground({
  children,
  className = "",
}: AnimatedBackgroundProps) {
  return <div className={className}>{children}</div>;
}
