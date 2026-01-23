"use client";

import oceanWavesUnderwater from "@/assets/ocean-water-waves-underwater.jpg";
import { Award, Droplets, Leaf, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  AnimatedBackground,
  AnimatedFeatureCard,
  AnimatedIcon,
  AnimatedSection,
} from "./animated";

/**
 * AboutSection - Client Component (now using translations)
 * All animations are handled by client components
 */
export function AboutSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Leaf,
      title: t("about.features.sustainable.title"),
      description: t("about.features.sustainable.description"),
    },
    {
      icon: Sparkles,
      title: t("about.features.brand.title"),
      description: t("about.features.brand.description"),
    },
    {
      icon: Award,
      title: t("about.features.quality.title"),
      description: t("about.features.quality.description"),
    },
    {
      icon: Users,
      title: t("about.features.partner.title"),
      description: t("about.features.partner.description"),
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-linear-to-br from-cyan-950 via-blue-950 to-blue-900">
      {/* Underwater background image with parallax */}
      <AnimatedBackground className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={oceanWavesUnderwater}
            alt="Underwater waves"
            className="w-full h-[120%] object-cover"
            quality={70}
            sizes="100vw"
            placeholder="blur"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-cyan-950/60 via-blue-950/80 to-blue-900/60" />
      </AnimatedBackground>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-3 glass-button px-8 py-4 rounded-full mb-10 text-cyan-100">
            <Droplets className="w-5 h-5" />
            <span className="text-sm tracking-[0.3em] uppercase">
              {t("about.badge")}
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-white">
            {t("about.title")} <br />
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t("about.titleHighlight")}
            </span>
          </h2>

          <p className="text-xl text-cyan-100/90 max-w-3xl mx-auto leading-relaxed">
            {t("about.description")}
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {features.map((feature, index) => (
            <AnimatedFeatureCard key={index} index={index}>
              {/* Icon */}
              <AnimatedIcon>
                <feature.icon className="w-full h-full" />
              </AnimatedIcon>

              {/* Content */}
              <h3 className="text-2xl mb-4 text-white">{feature.title}</h3>
              <p className="text-cyan-100/80 leading-relaxed">
                {feature.description}
              </p>
            </AnimatedFeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
