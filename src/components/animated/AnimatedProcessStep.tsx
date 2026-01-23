"use client";

import { motion, useInView } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";

interface AnimatedProcessStepProps {
  index: number;
  title: string;
  description: string;
  image?: StaticImageData;
  glowStart?: number;
  cycleDuration?: number;
}

/**
 * Client component for animated process steps
 * Separated for server component optimization
 */
export function AnimatedProcessStep({
  index,
  title,
  description,
  image,
  glowStart = 0,
  cycleDuration = 6,
}: AnimatedProcessStepProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
      className="flex flex-col items-center relative"
    >
      {/* Title - Positioned absolutely above icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
        className="absolute bottom-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 text-center w-48"
      >
        <h3 className="text-lg text-white font-semibold">{title}</h3>
      </motion.div>

      {/* Icon Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: 0.8 + index * 0.15,
          type: "spring",
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="relative"
      >
        {/* Glass outer ring */}
        <div className="relative">
          {/* Glow effect layer */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              filter: "blur(20px)",
              backgroundColor: "rgba(34, 211, 238, 0.8)",
            }}
            animate={{
              opacity: [0, 0, 1, 0, 0],
              scale: [1, 1, 1.1, 1, 1],
            }}
            transition={{
              duration: cycleDuration,
              repeat: Infinity,
              ease: "linear",
              times: [
                0,
                Math.max(0.001, (glowStart - 0.05) / cycleDuration),
                Math.max(0.002, glowStart / cycleDuration),
                Math.min(0.997, (glowStart + 0.5) / cycleDuration),
                1,
              ],
            }}
          />
          <motion.div
            className="relative w-32 h-32 glass-dark rounded-full p-1 shadow-2xl border"
            animate={{
              borderColor: [
                "rgba(148, 163, 184, 0.3)",
                "rgba(148, 163, 184, 0.3)",
                "rgba(34, 211, 238, 1)",
                "rgba(148, 163, 184, 0.3)",
                "rgba(148, 163, 184, 0.3)",
              ],
            }}
            transition={{
              duration: cycleDuration,
              repeat: Infinity,
              ease: "linear",
              times: [
                0,
                Math.max(0.001, (glowStart - 0.05) / cycleDuration),
                Math.max(0.002, glowStart / cycleDuration),
                Math.min(0.997, (glowStart + 0.5) / cycleDuration),
                1,
              ],
            }}
          >
            {/* Inner gradient circle with image */}
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
              {/* Top reflection */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/30 to-transparent rounded-t-full" />
              {image && (
                <div className="w-16 h-16 relative z-10">
                  <Image
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain"
                    width={64}
                    height={64}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Description - Positioned absolutely below icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
        className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 text-center w-48"
      >
        <div className="glass-dark border border-cyan-400/30 rounded-lg px-4 py-2 shadow-lg">
          <p className="text-sm leading-relaxed text-cyan-100/90">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Client component for animated process timeline progress line
 */
export function AnimatedProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="hidden lg:block absolute top-16 left-0 right-0 h-1 z-0"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
        className="h-full origin-left relative overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, rgba(34,211,238,0.3) 0%, rgba(6,182,212,0.8) 50%, rgba(34,211,238,0.3) 100%)",
        }}
      >
        {/* Flowing animation */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-300/50 to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
}

/**
 * Client component for animated certification card
 */
export function AnimatedCertificationCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 1.8 }}
      className="max-w-4xl mx-auto"
    >
      {/* Content will be passed as children */}
    </motion.div>
  );
}

interface AnimatedCertBadgeProps {
  index: number;
  name: string;
  description: string;
}

/**
 * Client component for animated certification badges
 */
export function AnimatedCertBadge({
  index,
  name,
  description,
}: AnimatedCertBadgeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: 2.2 + index * 0.1,
        type: "spring",
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="glass-button rounded-2xl px-10 py-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10"
    >
      <p className="text-2xl mb-2 text-cyan-200">{name}</p>
      <p className="text-sm text-cyan-100/70">{description}</p>
    </motion.div>
  );
}
