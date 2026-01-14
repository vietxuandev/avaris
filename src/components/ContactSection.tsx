"use client";

import oceanBlueSurface from "@/assets/ocean-blue-water-surface.jpg";
import { Globe, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  AnimatedContactCard,
  AnimatedParallaxBackground,
  AnimatedSection,
} from "./animated";

/**
 * ContactSection - Client Component (using translations)
 * All animations are handled by client components
 */
export function ContactSection() {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden bg-linear-to-br from-cyan-950 via-blue-950 to-blue-900"
    >
      {/* Ocean water surface background with parallax */}
      <AnimatedParallaxBackground speed={0.15}>
        <div className="absolute inset-0 opacity-30">
          <Image
            src={oceanBlueSurface}
            alt="Ocean water surface"
            className="w-full h-[120%] object-cover"
            quality={70}
            sizes="100vw"
            placeholder="blur"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-cyan-950/60 via-blue-950/80 to-blue-900/60" />
      </AnimatedParallaxBackground>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-3 glass-button px-8 py-4 rounded-full mb-10 text-cyan-100">
            <Mail className="w-5 h-5" />
            <span className="text-sm tracking-[0.3em] uppercase">
              {t("contact.badge")}
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-white">
            {t("contact.title")} <br />
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t("contact.titleHighlight")}
            </span>
          </h2>

          <p className="text-xl text-cyan-100/90">{t("contact.description")}</p>
        </AnimatedSection>

        {/* Contact Info Cards - Grid Layout */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Website Card */}
          <AnimatedContactCard
            index={0}
            label={t("contact.info.website.label")}
            value={t("contact.info.website.value")}
            href={`https://${t("contact.info.website.value")}`}
          >
            <Globe className="w-full h-full" />
          </AnimatedContactCard>

          {/* Email Card */}
          <AnimatedContactCard
            index={1}
            label={t("contact.info.email.label")}
            value={t("contact.info.email.value")}
            href={`mailto:${t("contact.info.email.value")}`}
          >
            <Mail className="w-full h-full" />
          </AnimatedContactCard>

          {/* Phone Card */}
          <AnimatedContactCard
            index={2}
            label={t("contact.info.phone.label")}
            value={t("contact.info.phone.value")}
            href={`tel:${t("contact.info.phone.value").replace(/\./g, "")}`}
          >
            <Phone className="w-full h-full" />
          </AnimatedContactCard>

          {/* LinkedIn Card */}
          <AnimatedContactCard
            index={3}
            label={t("contact.info.linkedin.label")}
            value={t("contact.info.linkedin.value")}
            href={`https://www.linkedin.com/company/${t(
              "contact.info.linkedin.value"
            )}`}
          >
            <Linkedin className="w-full h-full" />
          </AnimatedContactCard>
        </div>
      </div>
    </section>
  );
}
