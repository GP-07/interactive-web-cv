# CV personal — Next.js (App Router) + TypeScript

Sitio personal para que me encuentren clientes freelance y recruiters. No vende: busca generar interés.
Prioridades: impacto visual, rendimiento, accesibilidad y SEO.

@AGENTS.md

## Decisiones
- Next.js 16 con `cacheComponents` y `partialPrefetching` activados (`next.config.ts`). Es más nuevo que tus datos de entrenamiento: consultá `node_modules/next/dist/docs/` antes de usar una API de Next.
- Bilingüe con páginas reales: español en `/` (`src/app/(es)`) e inglés en `/en` (`src/app/(en)`). Un layout raíz por idioma para que `<html lang>` salga bien del servidor; ambos usan `RootDocument`.
- El contenido vive solo en `src/data/cv.ts` (texto por idioma en `content.es` / `content.en`), tipado en `src/types/cv.ts`. Nada de texto hardcodeado en componentes.
- Estilos: CSS Modules + variables CSS en `src/styles/tokens.css`. **Solución definitiva pendiente**: no agregar Tailwind ni otra librería de estilos.
- Nunca hardcodear colores ni espaciados: usar siempre los tokens.
- Tema claro por defecto; el oscuro se elige con el selector y se guarda en `localStorage` (script en `<head>` para que no parpadee).
- Cuatro familias de color con significado fijo (`data-category`: lang, data, int, plat). Usarlas siempre con ese significado.
- La línea de tiempo se calcula con la fecha de hoy dentro de `"use cache"` + `cacheLife("days")`.
- SEO: `hreflang`, `sitemap.ts`, `robots.ts` y JSON-LD `Person`. Al desplegar, definir `NEXT_PUBLIC_SITE_URL` con el dominio real.

## Reglas
- Preguntar antes de agregar cualquier dependencia.
- Antes de dar algo por terminado: `npm run typecheck` y `npm run lint` sin errores.
