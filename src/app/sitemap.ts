import type { MetadataRoute } from "next";
import { localePath, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { es: `${siteUrl}${localePath.es}`, en: `${siteUrl}${localePath.en}` };
  return locales.map((locale) => ({
    url: `${siteUrl}${localePath[locale]}`,
    changeFrequency: "monthly",
    priority: locale === "es" ? 1 : 0.9,
    alternates: { languages },
  }));
}
