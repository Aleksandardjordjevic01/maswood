import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://maswood.rs";
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/#usluge`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/#galerija`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#o-nama`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/#kontakt`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
