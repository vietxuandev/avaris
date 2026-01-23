"use client";

import glassBottleWater from "@/assets/glass-bottle-water-droplets.jpg";
import { Heart, Shield, Sparkles } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  AnimatedBenefitCard,
  AnimatedParallaxBackground,
  AnimatedSectionHeader,
} from "./animated";

/**
 * ImpactSection - Client Component (using translations)
 * All animations are handled by client components
 */
export function ImpactSection() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Shield,
      title: t("impact.benefits.safety.title"),
      description: t("impact.benefits.safety.description"),
    },
    {
      icon: Heart,
      title: t("impact.benefits.responsibility.title"),
      description: t("impact.benefits.responsibility.description"),
    },
    {
      icon: Sparkles,
      title: t("impact.benefits.premium.title"),
      description: t("impact.benefits.premium.description"),
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
        <AnimatedSectionHeader badge={t("impact.badge")}>
          {t("impact.title")} <br />
          <span className="bg-linear-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">
            {t("impact.titleHighlight")}
          </span>
        </AnimatedSectionHeader>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
