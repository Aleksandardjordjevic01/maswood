import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const BASE_URL = "https://maswood.rs";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Maswood — Nameštaj po meri Beograd | Kuhinje, Garderoberi, Dnevne sobe",
    template: "%s | Maswood Beograd",
  },
  description:
    "Maswood — izrada nameštaja po meri u Beogradu. Kuhinje po meri, garderoberi, dnevne sobe i nameštaj na meru. Vrhunski kvalitet, precizna izrada, besplatna konsultacija. Srbija i Beograd.",
  keywords: [
    "nameštaj po meri Beograd",
    "kuhinje po meri Beograd",
    "garderoberi po meri Beograd",
    "nameštaj po meri Srbija",
    "kuhinje na meru Beograd",
    "izrada nameštaja Beograd",
    "kuhinjski nameštaj Beograd",
    "nameštaj na meru",
    "nameštaj Beograd",
    "garderoberi Beograd",
    "dnevne sobe po meri Beograd",
    "spavaća soba po meri Beograd",
    "ugradni ormarići Beograd",
    "stolarski radovi Beograd",
    "stolarija Beograd",
    "kuhinja po meri cena",
    "ormarići po meri Beograd",
    "moderni nameštaj Beograd",
    "nameštaj po narudžbini Beograd",
    "Maswood Beograd",
    "Maswood nameštaj",
    "furniture Belgrade",
    "custom furniture Belgrade Serbia",
    "kuhinja Beograd",
    "ugaona kuhinja Beograd",
    "nameštaj po meri cena Beograd",
    "izrada kuhinja Beograd",
  ],
  authors: [{ name: "Maswood", url: BASE_URL }],
  creator: "Maswood",
  publisher: "Maswood",
  applicationName: "Maswood",
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Maswood — Nameštaj po meri Beograd | Kuhinje, Garderoberi, Dnevne sobe",
    description:
      "Maswood — izrada nameštaja po meri u Beogradu. Kuhinje po meri, garderoberi, dnevne sobe i nameštaj na meru. Vrhunski kvalitet, precizna izrada, besplatna konsultacija.",
    url: BASE_URL,
    siteName: "Maswood",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Maswood — Nameštaj po meri Beograd",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maswood — Nameštaj po meri Beograd",
    description:
      "Kuhinje po meri, garderoberi i nameštaj na meru u Beogradu. Vrhunski kvalitet i precizna izrada.",
    images: ["/images/hero-bg.png"],
  },
  category: "furniture",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "Maswood",
  alternateName: "Maswood Beograd",
  description:
    "Izrada nameštaja po meri u Beogradu — kuhinje, garderoberi, dnevne sobe i nameštaj na meru. Vrhunski kvalitet i precizna izrada.",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  image: `${BASE_URL}/images/hero-bg.png`,
  telephone: "+381612459075",
  priceRange: "$$",
  currenciesAccepted: "RSD",
  paymentAccepted: "Gotovina, prenos",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beograd",
    addressRegion: "Grad Beograd",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.8125,
    longitude: 20.4612,
  },
  areaServed: [
    { "@type": "City", name: "Beograd" },
    { "@type": "Country", name: "Srbija" },
  ],
  sameAs: ["https://www.instagram.com/maswood_beograd/"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nameštaj po meri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kuhinje po meri Beograd",
          description: "Funkcionalne i estetski savršene kuhinje prilagođene svakom prostoru i stilu.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Garderoberi po meri Beograd",
          description: "Pametni sistemi za odlaganje koji maksimalno koriste svaki centimetar prostora.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dnevne sobe po meri Beograd",
          description: "Elegantni nameštaj za dnevni boravak koji spaja udobnost i moderan dizajn.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nameštaj po meri Beograd",
          description: "Svaki komad izrađen prema vašim merama, potrebama i ukusu.",
        },
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Početna",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Usluge",
      item: `${BASE_URL}/#usluge`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Galerija",
      item: `${BASE_URL}/#galerija`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Kontakt",
      item: `${BASE_URL}/#kontakt`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={cn("h-full", "antialiased", montserrat.variable, "font-sans", geist.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
