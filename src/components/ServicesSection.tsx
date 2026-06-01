"use client";

import { ServiceCarousel, type Service } from "@/components/ui/services-card";
import { ChefHat, LayoutGrid, Sofa, Ruler } from "lucide-react";

const services: Service[] = [
  {
    number: "001",
    title: "Kuhinje po meri",
    description: "Funkcionalne i estetski savršene kuhinje prilagođene svakom prostoru i stilu.",
    icon: ChefHat,
    gradient: "from-amber-100 to-amber-200",
    image: "/images/kuhinje-po-meri.png",
  },
  {
    number: "002",
    title: "Garderoberi",
    description: "Pametni sistemi za odlaganje koji maksimalno koriste svaki centimetar prostora.",
    icon: LayoutGrid,
    gradient: "from-stone-100 to-stone-200",
    image: "/images/garderoberi.png",
  },
  {
    number: "003",
    title: "Dnevne sobe",
    description: "Elegantni nameštaj za dnevni boravak koji spaja udobnost i moderan dizajn.",
    icon: Sofa,
    gradient: "from-orange-100 to-orange-200",
    image: "/images/dnevne-sobe.png",
  },
  {
    number: "004",
    title: "Nameštaj po meri",
    description: "Svaki komad izrađen prema vašim merama, potrebama i ukusu.",
    icon: Ruler,
    gradient: "from-yellow-100 to-yellow-200",
    image: "/images/namestaj-po-meri.png",
  },
];

export default function ServicesSection() {
  return (
    <div
      id="usluge"
      className="w-full bg-[#f8f8f8] flex flex-col items-center justify-center px-6 py-6"
      style={{ fontFamily: "var(--font-montserrat)" }}
    >
      <div className="text-left w-full mb-6" style={{ maxWidth: "1216px" }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tighter text-[#1a1a1a]">Usluge</h2>
      </div>
      <ServiceCarousel services={services} />
    </div>
  );
}
