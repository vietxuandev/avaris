"use client";

import Image from "next/image";
import { AnimatedSection } from "./animated/AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.png";
import { motion } from "motion/react";

const products = [
  {
    id: 1,
    image: product1,
    title: "AVARIS trong không gian hiện đại",
    description: "Sự kết hợp hoàn hảo giữa thiết kế và công năng",
  },
  {
    id: 2,
    image: product2,
    title: "Chai thủy tinh cao cấp",
    description: "Thiết kế sang trọng, bền vững với môi trường",
  },
  {
    id: 3,
    image: product3,
    title: "Đẳng cấp trong từng chi tiết",
    description: "Trải nghiệm sản phẩm thực tế chất lượng",
  },
  {
    id: 4,
    image: product4,
    title: "Phong cách sống bền vững",
    description: "Lựa chọn hoàn hảo cho môi trường xanh",
  },
];

export function ProductSection() {
  return (
    <section
      id="products"
      className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50/40"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl"
        />
      </div>

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
              Sản phẩm thực tế
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900 tracking-tight"
          >
            Khám phá{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">
              AVARIS
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Trải nghiệm sản phẩm chai thủy tinh cao cấp của chúng tôi trong
            không gian sống thực tế
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
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="p-4"
                    >
                      <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
                        {/* Image Container */}
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.title}
                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index === 0}
                          />
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-xl font-bold mb-2 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                            {product.title}
                          </h3>
                          <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            {product.description}
                          </p>
                        </div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
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
