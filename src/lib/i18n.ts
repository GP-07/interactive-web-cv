import type { Locale, Localized } from "@/types/cv";

export const locales: Locale[] = ["es", "en"];

/** Español en la raíz, inglés en /en: cada idioma es una página real que los buscadores indexan por separado. */
export const localePath: Localized<string> = { es: "/", en: "/en" };

/** Formato de números de cada idioma ("4,6" / "4.6"). */
export const numberLocale: Localized<string> = { es: "es-ES", en: "en-GB" };

/** Devuelve el texto en el idioma pedido, o el texto plano si es igual en los dos. */
export function pick(value: string | Localized<string>, locale: Locale) {
  return typeof value === "string" ? value : value[locale];
}
