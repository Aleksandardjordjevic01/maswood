"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    icon: "/icons/olovka-metar.svg",
    iconWidth: 72,
    iconHeight: 72,
    alt: "Nameštaj po meri",
    title: "Nameštaj po meri",
    description: "Savršeno uklopljen u vaš prostor i stil života.",
  },
  {
    icon: "/icons/priznanje.svg",
    iconWidth: 55,
    iconHeight: 55,
    alt: "Vrhunski kvalitet",
    title: "Vrhunski kvalitet",
    description: "Koristimo samo proverene materijale i okove.",
  },
  {
    icon: "/icons/isporuka.svg",
    iconWidth: 64,
    iconHeight: 64,
    alt: "Pouzdana isporuka",
    title: "Pouzdana isporuka",
    description: "Tačnost, rokovi i profesionalna ugradnja.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-12" style={{ fontFamily: "var(--font-montserrat)" }}>
      <div className="mx-auto" style={{ maxWidth: "1216px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-xl p-8 min-h-[180px] flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="flex-1 flex items-center justify-start h-16 mb-4">
                <Image
                  src={feature.icon}
                  width={feature.iconWidth}
                  height={feature.iconHeight}
                  alt={feature.alt}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-base font-bold uppercase tracking-[0.12em] text-[#1a1a1a]">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mt-1">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
