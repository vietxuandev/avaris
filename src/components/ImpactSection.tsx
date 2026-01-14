"use client";

import glassBottleWater from "@/assets/glass-bottle-water-droplets.jpg";
import { Droplet, Heart, Leaf, Recycle, Shield, Sparkles } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  AnimatedImpactCard,
  AnimatedBenefitCard,
  AnimatedSectionHeader,
  AnimatedParallaxBackground,
} from "./animated";

/**
 * ImpactSection - Client Component (using translations)
 * All animations are handled by client components
 */
export function ImpactSection() {
  const { t } = useTranslation();

  const stats = [
    {
      number: t("impact.stats.reusable.number"),
      label: t("impact.stats.reusable.label"),
      description: t("impact.stats.reusable.description"),
      icon: Recycle,
    },
    {
      number: t("impact.stats.safe.number"),
      label: t("impact.stats.safe.label"),
      description: t("impact.stats.safe.description"),
      icon: Shield,
    },
    {
      number: t("impact.stats.quality.number"),
      label: t("impact.stats.quality.label"),
      description: t("impact.stats.quality.description"),
      icon: Sparkles,
    },
    {
      number: t("impact.stats.friendly.number"),
      label: t("impact.stats.friendly.label"),
      description: t("impact.stats.friendly.description"),
      icon: Leaf,
    },
  ];

  const benefits = [
    {
      icon: Recycle,
      title: t("impact.benefits.sustainable.title"),
      description: t("impact.benefits.sustainable.description"),
    },
    {
      icon: Sparkles,
      title: t("impact.benefits.premium.title"),
      description: t("impact.benefits.premium.description"),
    },
    {
      icon: Shield,
      title: t("impact.benefits.safety.title"),
      description: t("impact.benefits.safety.description"),
    },
    {
      icon: Leaf,
      title: t("impact.benefits.ocean.title"),
      description: t("impact.benefits.ocean.description"),
    },
    {
      icon: Droplet,
      title: t("impact.benefits.temperature.title"),
      description: t("impact.benefits.temperature.description"),
    },
    {
      icon: Heart,
      title: t("impact.benefits.responsibility.title"),
      description: t("impact.benefits.responsibility.description"),
    },
  ];
  return (
    <section className="py-32 relative overflow-hidden bg-linear-to-br from-cyan-50 via-blue-50 to-cyan-100">
      {/* Background image with parallax - glass bottle */}
      <AnimatedParallaxBackground speed={0.2}>
        <div className="absolute inset-0 opacity-15">
          <Image
            src={glassBottleWater}
            alt="Glass bottle with water"
            className="w-full h-[120%] object-cover"
            quality={70}
            sizes="100vw"
            placeholder="blur"
          />
        </div>
      </AnimatedParallaxBackground>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSectionHeader
          badge={t("impact.badge")}
          description={t("impact.description")}
        >
          {t("impact.title")} <br />
          <span className="bg-linear-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">
            {t("impact.titleHighlight")}
          </span>
        </AnimatedSectionHeader>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-24">
          {stats.map((stat, index) => (
            <AnimatedImpactCard
              key={index}
              index={index}
              number={stat.number}
              label={stat.label}
              description={stat.description}
            >
              <stat.icon className="w-full h-full" />
            </AnimatedImpactCard>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedBenefitCard
              key={index}
              index={index}
              title={benefit.title}
              description={benefit.description}
            >
              <benefit.icon className="w-full h-full" />
            </AnimatedBenefitCard>
          ))}
        </div>
      </div>
    </section>
  );
}
