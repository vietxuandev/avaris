"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { useCallback } from "react";

export function HeroSection() {
  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Parallax scroll effects
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]); // Background moves slower
  const contentY = useTransform(scrollY, [0, 1000], [0, 100]); // Content moves slightly
  const opacity = useTransform(scrollY, [0, 400], [1, 0]); // Fade out on scroll

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/tvc.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-linear-to-br from-cyan-900/30 via-blue-900/20 to-blue-900/40" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            {/* Centered Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center max-w-4xl"
              style={{ y: contentY, opacity }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8 flex flex-col items-center"
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 text-white drop-shadow-2xl">
                  AVARIS
                </h1>
                <div className="h-1.5 w-32 bg-white/70 rounded-full backdrop-blur-sm shadow-lg" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl mb-12 text-white/95 leading-relaxed drop-shadow-md"
              >
                Chai thủy tinh cao cấp, tái sử dụng - Kết hợp hoàn hảo giữa đẳng
                cấp và trách nhiệm với môi trường
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="glass-button text-white px-12 py-8 text-lg rounded-4xl hover:bg-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  Begin your sustainable future now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Glass Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-center"
        >
          <div className="glass-button w-8 h-12 rounded-full mx-auto mb-2 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-white rounded-full shadow-lg"
            />
          </div>
          <p className="text-sm text-white/90 drop-shadow">Scroll</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
