import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { Locale } from "@/types/cv";
import { cv } from "@/data/cv";
import { fontVariables } from "@/lib/fonts";
import { localePath } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

/** Aplica el tema guardado antes de pintar, para que quien eligió oscuro no vea un destello claro. */
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

/** Metadatos de cada idioma, con los links cruzados (hreflang) que usan los buscadores. */
export function siteMetadata(locale: Locale): Metadata {
  const { meta } = cv.content[locale];
  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePath[locale],
      languages: { es: localePath.es, en: localePath.en, "x-default": localePath.es },
    },
    openGraph: {
      type: "profile",
      title: meta.title,
      description: meta.description,
      url: localePath[locale],
      locale: locale === "es" ? "es_ES" : "en_GB",
    },
  };
}

/** <html> de cada idioma. Hay un layout raíz por idioma para que `lang` sea el correcto desde el servidor. */
export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} data-theme="light" className={fontVariables} suppressHydrationWarning>
      {/* La regla es para el router "pages"; en App Router <head> en el layout raíz es lo indicado. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
