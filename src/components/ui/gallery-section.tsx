"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "/gallery/slika1.jpeg", alt: "Maswood kuhinja po meri Beograd" },
  { src: "/gallery/slika2.jpeg", alt: "Maswood garderober po meri Beograd" },
  { src: "/gallery/slika3.jpeg", alt: "Maswood nameštaj po meri Beograd" },
  { src: "/gallery/slika4.jpeg", alt: "Maswood dnevna soba po meri Beograd" },
  { src: "/gallery/slika5.jpeg", alt: "Maswood izrada nameštaja Beograd" },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);

  const openImage = (i: number) => {
    setSelected(i);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelected(null);
    document.body.style.overflow = "";
  };

  return (
    <section id="galerija" className="py-10 md:py-16 px-4 sm:px-6" style={{ fontFamily: "var(--font-montserrat)" }}>
      <div className="mx-auto" style={{ maxWidth: "1216px" }}>
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <p className="text-[#cc9a6e] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3">
            Naši radovi
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-[#1a1a1a]">
            Galerija.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-2xl cursor-pointer bg-[#f0e8df] aspect-[3/2]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => openImage(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => closeImage()}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[selected].src}
                alt={images[selected].alt}
                className="w-full rounded-2xl object-cover max-h-[80vh]"
              />
              <button
                onClick={() => closeImage()}
                className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 transition-colors"
              >
                <X size={20} />
              </button>
              <p className="mt-3 text-white/80 text-sm text-center">{images[selected].alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
