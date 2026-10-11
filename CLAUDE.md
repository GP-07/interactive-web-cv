# CV personal — Next.js (App Router) + TypeScript

Sitio que presenta mi CV a empresas. Prioridades: impacto visual, rendimiento y accesibilidad.

@AGENTS.md

## Decisiones
- Next.js 16 con `cacheComponents` y `partialPrefetching` activados (`next.config.ts`). Es más nuevo que tus datos de entrenamiento: consultá `node_modules/next/dist/docs/` antes de usar una API de Next.
- El contenido del CV vive solo en `src/data/cv.ts`, tipado en `src/types/cv.ts`. Nada de texto hardcodeado en componentes.
- Estilos: CSS Modules + variables CSS en `src/styles/tokens.css`. **Solución definitiva pendiente**: no agregar Tailwind ni otra librería de estilos.
- Nunca hardcodear colores ni espaciados: usar siempre los tokens.

## Reglas
- Preguntar antes de agregar cualquier dependencia.
- Antes de dar algo por terminado: `npm run typecheck` y `npm run lint` sin errores.
