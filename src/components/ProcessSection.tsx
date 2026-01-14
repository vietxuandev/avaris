"use client";

import underwaterLightRays from "@/assets/underwater-light-rays.jpg";
import {
  CheckCircle2,
  Droplet,
  Filter,
  Package,
  RotateCcw,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  AnimatedProcessStep,
  AnimatedProcessTimeline,
  AnimatedCertBadge,
  AnimatedParallaxBackground,
  AnimatedSection,
} from "./animated";

/**
 * ProcessSection - Client Component (using translations)
 * All animations are handled by client components
 */
export function ProcessSection() {
  const { t } = useTranslation();

  const processSteps = [
    {
      icon: Droplet,
      title: t("process.steps.source.title"),
      description: t("process.steps.source.description"),
    },
    {
      icon: Filter,
      title: t("process.steps.filter.title"),
      description: t("process.steps.filter.description"),
    },
    {
      icon: Package,
      title: t("process.steps.bottle.title"),
      description: t("process.steps.bottle.description"),
    },
    {
      icon: CheckCircle2,
      title: t("process.steps.check.title"),
      description: t("process.steps.check.description"),
    },
    {
      icon: Truck,
      title: t("process.steps.delivery.title"),
      description: t("process.steps.delivery.description"),
    },
    {
      icon: RotateCcw,
      title: t("process.steps.recycle.title"),
      description: t("process.steps.recycle.description"),
    },
  ];
  return (
    <section
      id="process"
      className="py-32 relative overflow-hidden bg-linear-to-br from-blue-950 via-cyan-950 to-blue-900"
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
            <Droplet className="w-5 h-5" />
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
        <div className="max-w-7xl mx-auto mb-24">
          {/* Steps Container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 relative">
            {/* Flowing progress line - Desktop */}
            <AnimatedProcessTimeline />

            {processSteps.map((step, index) => (
              <AnimatedProcessStep
                key={index}
                index={index}
                title={step.title}
                description={step.description}
              >
                <step.icon className="w-full h-full" />
              </AnimatedProcessStep>
            ))}
          </div>
        </div>

        {/* Certifications Card */}
        <AnimatedSection delay={1.8}>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-linear-to-r from-cyan-400/20 via-blue-500/20 to-cyan-400/20 rounded-[3rem] blur-3xl" />

              {/* Glass card */}
              <div className="glass-dark rounded-[3rem] p-12 md:p-16 relative overflow-hidden border border-white/10">
                {/* Top reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/10 to-transparent rounded-t-[3rem] pointer-events-none" />

                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-8 glass-button rounded-2xl flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-cyan-300" />
                  </div>

                  <h4 className="text-3xl md:text-4xl mb-6 text-white">
                    {t("process.certifications.title")}
                  </h4>

                  <p className="text-lg mb-10 max-w-2xl mx-auto text-cyan-100/80">
                    {t("process.certifications.description")}
                  </p>

                  <div className="flex flex-wrap justify-center gap-6 items-center">
                    {[
                      {
                        name: t("process.certifications.iso.name"),
                        desc: t("process.certifications.iso.description"),
                      },
                      {
                        name: t("process.certifications.haccp.name"),
                        desc: t("process.certifications.haccp.description"),
                      },
                    ].map((cert, i) => (
                      <AnimatedCertBadge
                        key={i}
                        index={i}
                        name={cert.name}
                        description={cert.desc}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
