"use client";

import { RulerCarousel, type CarouselItem } from "@/components/ui/ruler-carousel";

export function Demo() {
  const originalItems: CarouselItem[] = [
    { id: 1, title: "KUHINJE PO MERI" },
    { id: 2, title: "DNEVNE SOBE" },
    { id: 3, title: "PLAKARI I GARDEROBERI" },
    { id: 4, title: "KUPATILA" },
    { id: 5, title: "SPAVAĆE SOBE" },
    { id: 6, title: "DEČIJE SOBE" },
    { id: 7, title: "PREDSOBLJA" },
    { id: 8, title: "KANCELARIJSKI NAMEŠTAJ" },
    { id: 9, title: "TRPEZARIJE" },
    { id: 10, title: "TV KOMODE" },
    { id: 11, title: "POLICE I BIBLIOTEKE" },
    { id: 12, title: "KOMODE I VITRINE" },
    { id: 13, title: "KLUB STOLOVI" },
    { id: 14, title: "ZIDNI PANELI" },
    { id: 15, title: "ENTERIJERI PO MERI" },
    { id: 16, title: "UGRADNI NAMEŠTAJ" },
    { id: 17, title: "NAMEŠTAJ ZA LOKALE" },
    { id: 18, title: "DRVENE DEKORACIJE" },
  ];

  return (
    <div className="w-full">
      <RulerCarousel originalItems={originalItems} />
    </div>
  );
}
