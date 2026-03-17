"use client";

import product1 from "@/assets/DSC03935.jpg";
import product4 from "@/assets/DSC04063.jpg";
import product5 from "@/assets/DSC04082.jpg";
import product9 from "@/assets/DSC04247.jpg";
import product10 from "@/assets/DSC04273.jpg";
import product11 from "@/assets/DSC04276.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "./animated/AnimatedSection";

const products = [
  {
    id: 1,
    image: product1,
  },
  {
    id: 4,
    image: product4,
  },
  {
    id: 5,
    image: product5,
  },
  {
    id: 9,
    image: product9,
  },
  {
    id: 10,
    image: product10,
  },
  {
    id: 11,
    image: product11,
  },
];

export function ProductSection() {
  const { t } = useTranslation();

  return (
    <section
      id="products"
      className="py-32 relative overflow-hidden bg-linear-to-br from-slate-50 via-cyan-50/30 to-blue-50/40"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold tracking-wider text-cyan-600 uppercase bg-cyan-50 px-4 py-2 rounded-full">
              {t("product.badge")}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900 tracking-tight"
          >
            {t("product.title")}{" "}
            <span className="bg-linear-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">
              {t("product.titleHighlight")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t("product.description")}
          </motion.p>
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {products.map((product, index) => (
                  <CarouselItem
                    key={product.id}
                    className="basis-1/2 md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="p-1 sm:p-2 md:p-4"
                    >
                      <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
                        {/* Image Container */}
                        <div className="relative aspect-3/4 overflow-hidden">
                          <Image
                            src={product.image}
                            alt="AVARIS Water Bottle"
                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </motion.div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center mt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-slate-600 text-lg"
          >
            {t("product.tagline")}
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}
