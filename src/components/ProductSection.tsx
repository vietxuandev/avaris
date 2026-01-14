"use client";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.png";
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

export function ProductSection() {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      image: product1,
      title: t("product.items.premium.title"),
      description: t("product.items.premium.description"),
    },
    {
      id: 2,
      image: product2,
      title: t("product.items.space.title"),
      description: t("product.items.space.description"),
    },
    {
      id: 4,
      image: product4,
      title: t("product.items.lifestyle.title"),
      description: t("product.items.lifestyle.description"),
    },
    {
      id: 3,
      image: product3,
      title: t("product.items.detail.title"),
      description: t("product.items.detail.description"),
    },
  ];
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
                            alt={product.title}
                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index === 0}
                          />
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 md:p-6 text-white">
                          <h3 className="text-sm sm:text-base md:text-xl font-bold mb-1 sm:mb-2 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                            {product.title}
                          </h3>
                          <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            {product.description}
                          </p>
                        </div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
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
            Sản phẩm cao cấp, thiết kế tinh tế, thân thiện với môi trường
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}
