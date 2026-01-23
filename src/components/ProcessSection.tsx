"use client";

import cleaningImg from "@/assets/cleaning.png";
import collectionImg from "@/assets/collection.png";
import consumptionImg from "@/assets/consumption.png";
import fillingImg from "@/assets/filling.png";
import filtrationImg from "@/assets/filtration.png";
import haccLogo from "@/assets/hacc.png";
import isoLogo from "@/assets/iso.png";
import packagingImg from "@/assets/packaging.png";
import underwaterLightRays from "@/assets/underwater-light-rays.jpg";
import { RotateCcw } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AnimatedParallaxBackground,
  AnimatedProcessStep,
  AnimatedSection,
} from "./animated";

/**
 * ProcessSection - Client Component (using translations)
 * All animations are handled by client components
 */
export function ProcessSection() {
  const { t } = useTranslation();
  const desktopGridRef = useRef<HTMLDivElement>(null);
  const mobileGridRef = useRef<HTMLDivElement>(null);

  const [timings, setTimings] = useState({
    cycleDuration: 6,
    desktop: {
      topDuration: 2,
      rightDuration: 1,
      bottomDuration: 2,
      leftDuration: 1,
      topDelay: 4,
      rightDelay: 5,
      bottomDelay: 4,
      leftDelay: 5,
    },
    mobile: {
      topDuration: 1,
      rightDuration: 2,
      bottomDuration: 1,
      leftDuration: 2,
      topDelay: 5,
      rightDelay: 4,
      bottomDelay: 5,
      leftDelay: 4,
    },
  });

  useEffect(() => {
    const calculateTimings = () => {
      const cycleDuration = 6;

      // Desktop calculations
      if (desktopGridRef.current) {
        const rect = desktopGridRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const perimeter = 2 * (width + height);

        const topDuration = (width / perimeter) * cycleDuration;
        const rightDuration = (height / perimeter) * cycleDuration;
        const bottomDuration = (width / perimeter) * cycleDuration;
        const leftDuration = (height / perimeter) * cycleDuration;

        setTimings((prev) => ({
          ...prev,
          desktop: {
            topDuration,
            rightDuration,
            bottomDuration,
            leftDuration,
            topDelay: cycleDuration - topDuration,
            rightDelay: cycleDuration - rightDuration,
            bottomDelay: cycleDuration - bottomDuration,
            leftDelay: cycleDuration - leftDuration,
          },
        }));
      }

      // Mobile calculations
      if (mobileGridRef.current) {
        const rect = mobileGridRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const perimeter = 2 * (width + height);

        const topDuration = (width / perimeter) * cycleDuration;
        const rightDuration = (height / perimeter) * cycleDuration;
        const bottomDuration = (width / perimeter) * cycleDuration;
        const leftDuration = (height / perimeter) * cycleDuration;

        setTimings((prev) => ({
          ...prev,
          mobile: {
            topDuration,
            rightDuration,
            bottomDuration,
            leftDuration,
            topDelay: cycleDuration - topDuration,
            rightDelay: cycleDuration - rightDuration,
            bottomDelay: cycleDuration - bottomDuration,
            leftDelay: cycleDuration - leftDuration,
          },
        }));
      }
    };

    // Calculate on mount
    calculateTimings();

    // Recalculate on resize
    window.addEventListener("resize", calculateTimings);
    return () => window.removeEventListener("resize", calculateTimings);
  }, []);

  const processSteps = [
    {
      image: cleaningImg,
      title: t("process.steps.cleaning.title"),
      description: t("process.steps.cleaning.description"),
    },
    {
      image: filtrationImg,
      title: t("process.steps.filtration.title"),
      description: t("process.steps.filtration.description"),
    },
    {
      image: fillingImg,
      title: t("process.steps.filling.title"),
      description: t("process.steps.filling.description"),
    },
    {
      image: packagingImg,
      title: t("process.steps.packaging.title"),
      description: t("process.steps.packaging.description"),
    },
    {
      image: consumptionImg,
      title: t("process.steps.consumption.title"),
      description: t("process.steps.consumption.description"),
    },
    {
      image: collectionImg,
      title: t("process.steps.collection.title"),
      description: t("process.steps.collection.description"),
    },
  ];

  const { cycleDuration, desktop, mobile } = timings;

  return (
    <section
      id="process"
      className="py-32 px-4 relative overflow-hidden bg-linear-to-br from-blue-950 via-cyan-950 to-blue-900"
    >
      {/* Underwater light rays background with parallax */}
      <AnimatedParallaxBackground speed={0.2}>
        <div className="absolute inset-0 opacity-25">
          <Image
            src={underwaterLightRays}
            alt="Underwater light rays"
            className="w-full h-[120%] object-cover"
            quality={70}
            sizes="100vw"
            placeholder="blur"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-blue-950/70 via-cyan-950/80 to-blue-900/70" />
      </AnimatedParallaxBackground>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-24">
          <div className="inline-flex items-center gap-3 glass-button px-8 py-4 rounded-full mb-10 text-cyan-100">
            <RotateCcw className="w-5 h-5" />
            <span className="text-sm tracking-[0.3em] uppercase">
              {t("process.badge")}
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-white">
            {t("process.title")} <br />
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t("process.titleHighlight")}
            </span>
          </h2>

          <p className="text-xl text-cyan-100/90 max-w-3xl mx-auto">
            {t("process.description")}
          </p>
        </AnimatedSection>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto mb-24 px-4">
          {/* Desktop View - 3x3 Grid */}
          <div
            ref={desktopGridRef}
            className="hidden md:grid grid-cols-3 gap-x-32 relative"
          >
            {/* Top Row - Items 0, 1, 2 */}
            {[0, 1, 2].map((idx) => {
              const alignment =
                idx === 0
                  ? "justify-start"
                  : idx === 1
                    ? "justify-center"
                    : "justify-end";
              const glowStart = idx * 1;
              return (
                <div key={idx} className={`flex ${alignment} relative z-10`}>
                  <AnimatedProcessStep
                    index={idx}
                    title={processSteps[idx].title}
                    description={processSteps[idx].description}
                    image={processSteps[idx].image}
                    glowStart={glowStart}
                    cycleDuration={cycleDuration}
                  />
                </div>
              );
            })}

            {/* Middle Row - Center title with placeholders */}
            <div />
            <div className="py-20 text-center">
              <motion.h3
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-3xl md:text-4xl font-bold text-white mb-2"
              >
                {t("process.journey")}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-xl md:text-2xl bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              >
                {t("process.sustainable")}
              </motion.p>
            </div>
            <div />

            {/* Bottom Row - Items 5, 4, 3 (right to left) */}
            {[5, 4, 3].map((idx, colIdx) => {
              const alignment =
                colIdx === 0
                  ? "justify-start"
                  : colIdx === 1
                    ? "justify-center"
                    : "justify-end";
              const glowStart = 5 - colIdx;
              return (
                <div key={idx} className={`flex ${alignment} relative z-10`}>
                  <AnimatedProcessStep
                    index={idx}
                    title={processSteps[idx].title}
                    description={processSteps[idx].description}
                    image={processSteps[idx].image}
                    glowStart={glowStart}
                    cycleDuration={cycleDuration}
                  />
                </div>
              );
            })}

            {/* TOP horizontal line → */}
            <div className="absolute top-15.5 inset-x-15.5 h-1 bg-linear-to-r from-cyan-400/50 via-cyan-500 to-cyan-400/50 z-0 overflow-hidden">
              <motion.div
                className="absolute top-0 w-20 h-full bg-linear-to-r from-transparent via-white to-transparent opacity-60"
                initial={{ left: "-5rem" }} // w-20 = 5rem
                animate={{ left: "100%" }}
                transition={{
                  duration: desktop.topDuration,
                  repeat: Infinity,
                  repeatDelay: desktop.topDelay,
                  ease: "linear",
                  delay: 0,
                }}
              />
            </div>

            {/* RIGHT vertical line ↓ */}
            <div className="absolute right-15.5 inset-y-15.5 w-1 bg-linear-to-b from-cyan-400/50 via-cyan-500 to-cyan-400/50 z-0 overflow-hidden">
              <motion.div
                className="absolute left-0 w-full h-20 bg-linear-to-b from-transparent via-white to-transparent opacity-60"
                initial={{ top: "-5rem" }} // h-20 = 5rem
                animate={{ top: "100%" }}
                transition={{
                  duration: desktop.rightDuration,
                  repeat: Infinity,
                  repeatDelay: desktop.rightDelay,
                  delay: desktop.topDuration,
                  ease: "linear",
                }}
              />
            </div>

            {/* BOTTOM horizontal line ← */}
            <div className="absolute bottom-15.5 inset-x-15.5 h-1 bg-linear-to-r from-cyan-400/50 via-cyan-500 to-cyan-400/50 z-0 overflow-hidden">
              <motion.div
                className="absolute top-0 w-20 h-full bg-linear-to-r from-transparent via-white to-transparent opacity-60"
                initial={{ left: "100%" }}
                animate={{ left: "-5rem" }}
                transition={{
                  duration: desktop.bottomDuration,
                  repeat: Infinity,
                  repeatDelay: desktop.bottomDelay,
                  delay: desktop.topDuration + desktop.rightDuration,
                  ease: "linear",
                }}
              />
            </div>

            {/* LEFT vertical line ↑ */}
            <div className="absolute left-15.5 inset-y-15.5 w-1 bg-linear-to-b from-cyan-500 to-cyan-400/50 z-0 overflow-hidden">
              <motion.div
                className="absolute left-0 w-full h-20 bg-linear-to-b from-transparent via-white to-transparent opacity-60"
                initial={{ top: "100%" }}
                animate={{ top: "-5rem" }}
                transition={{
                  duration: desktop.leftDuration,
                  repeat: Infinity,
                  repeatDelay: desktop.leftDelay,
                  delay:
                    desktop.topDuration +
                    desktop.rightDuration +
                    desktop.bottomDuration,
                  ease: "linear",
                }}
              />
            </div>
          </div>

          {/* Mobile View - 2x3 Grid */}
          <div
            ref={mobileGridRef}
            className="md:hidden grid grid-cols-2 gap-x-8 gap-y-40 relative"
          >
            {[0, 1, 5, 2, 4, 3].map((idx, position) => {
              const alignment =
                position % 2 === 0 ? "justify-start" : "justify-end";
              const glowStart = idx;
              return (
                <div key={idx} className={`flex ${alignment} relative z-10`}>
                  <AnimatedProcessStep
                    index={idx}
                    title={processSteps[idx].title}
                    description={processSteps[idx].description}
                    image={processSteps[idx].image}
                    glowStart={glowStart}
                    cycleDuration={cycleDuration}
                  />
                </div>
              );
            })}

            {/* Connecting Lines */}
            <div className="absolute top-15.5 inset-x-15.5 h-1 bg-linear-to-r from-cyan-400/50 via-cyan-500 to-cyan-400/50 z-0 overflow-hidden">
              <motion.div
                className="absolute top-0 w-12 h-full bg-linear-to-r from-transparent via-white to-transparent opacity-60"
                animate={{ left: ["0%", "100%"] }}
                transition={{
                  duration: mobile.topDuration,
                  repeat: Infinity,
                  repeatDelay: mobile.topDelay,
                  ease: "linear",
                }}
              />
            </div>

            <div className="absolute right-15.5 inset-y-15.5 w-1 bg-linear-to-b from-cyan-400/50 via-cyan-500 to-cyan-400/50 z-0 overflow-hidden">
              <motion.div
                className="absolute left-0 w-full h-12 bg-linear-to-b from-transparent via-white to-transparent opacity-60"
                animate={{ top: ["0%", "100%"] }}
                transition={{
                  duration: mobile.rightDuration,
                  repeat: Infinity,
                  repeatDelay: mobile.rightDelay,
                  ease: "linear",
                  delay: mobile.topDuration,
                }}
              />
            </div>

            <div className="absolute bottom-15.5 inset-x-15.5 h-1 bg-linear-to-r from-cyan-400/50 via-cyan-500 to-cyan-400/50 z-0 overflow-hidden">
              <motion.div
                className="absolute bottom-0 w-12 h-full bg-linear-to-r from-transparent via-white to-transparent opacity-60"
                animate={{ left: ["100%", "0%"] }}
                transition={{
                  duration: mobile.bottomDuration,
                  repeat: Infinity,
                  repeatDelay: mobile.bottomDelay,
                  ease: "linear",
                  delay: mobile.topDuration + mobile.rightDuration,
                }}
              />
            </div>

            <div className="absolute left-15.5 inset-y-15.5 w-1 bg-linear-to-b from-cyan-400/50 via-cyan-500 to-cyan-400/50 z-0 overflow-hidden">
              <motion.div
                className="absolute left-0 w-full h-12 bg-linear-to-b from-transparent via-white to-transparent opacity-60"
                animate={{ top: ["100%", "0%"] }}
                transition={{
                  duration: mobile.leftDuration,
                  repeat: Infinity,
                  repeatDelay: mobile.leftDelay,
                  ease: "linear",
                  delay:
                    mobile.topDuration +
                    mobile.rightDuration +
                    mobile.bottomDuration,
                }}
              />
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            {t("process.certifications.title") || "Chứng nhận chất lượng"}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass-dark border border-cyan-400/30 rounded-2xl p-8 shadow-xl"
            >
              <Image
                src={isoLogo}
                alt="ISO Certification"
                className="h-32 md:h-40 w-auto brightness-0 invert"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass-dark border border-cyan-400/30 rounded-2xl p-8 shadow-xl"
            >
              <Image
                src={haccLogo}
                alt="HACCP Certification"
                className="h-32 md:h-40 w-auto brightness-0 invert"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
