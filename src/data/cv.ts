import type { CV } from "@/types/cv";

// CONTENIDO DE EJEMPLO: reemplazar con el CV real.
export const cv: CV = {
  name: "Guido Pallas",
  title: "Software Engineer",
  summary:
    "Construyo productos web de punta a punta: interfaces cuidadas, APIs prolijas y todo lo que hay en el medio. Me interesa que el software sea rápido, accesible y fácil de mantener.",
  facts: [
    { label: "Base", value: "Buenos Aires, AR" },
    { label: "Ahora", value: "Senior Frontend Engineer en Acme Corp" },
    { label: "Estudios", value: "Ingeniería en Sistemas" },
    { label: "Disponibilidad", value: "abierto a propuestas" },
  ],
  availability: "Disponible para trabajar",
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "Acme Corp",
      period: "mar 2022 → presente",
      location: "remoto",
      highlights: [
        "Lideré la migración del panel principal a Next.js y reduje el tiempo de carga un 40%.",
        "Diseñé un sistema de componentes compartido entre 4 equipos de producto.",
        "Acompañé a 3 desarrolladores junior con revisiones de código y pair programming.",
      ],
      stack: ["React", "Next.js", "TypeScript", "GraphQL", "Playwright"],
    },
    {
      role: "Full Stack Developer",
      company: "Nimbus Labs",
      period: "jun 2019 → feb 2022",
      location: "Buenos Aires",
      highlights: [
        "Desarrollé una API de pagos que procesa más de 20.000 transacciones por día.",
        "Automaticé el pipeline de despliegue y bajé los releases de 2 horas a 15 minutos.",
      ],
      stack: ["Node.js", "PostgreSQL", "Docker", "AWS"],
    },
    {
      role: "Desarrollador Web",
      company: "Freelance",
      period: "ene 2017 → may 2019",
      location: "freelance",
      highlights: ["Entregué 12 sitios y aplicaciones para comercios y estudios profesionales."],
      stack: ["JavaScript", "PHP", "MySQL"],
    },
  ],
  projects: [
    {
      name: "Ruta Verde",
      year: 2025,
      type: "personal",
      description:
        "App que calcula la huella de carbono de cada viaje urbano y sugiere alternativas en transporte público o bicicleta.",
      stack: ["Next.js", "Mapbox", "Supabase"],
    },
    {
      name: "Panel de Métricas",
      year: 2023,
      type: "trabajo",
      description:
        "Dashboard interno en tiempo real para el equipo comercial, con alertas configurables y exportación de reportes.",
      stack: ["React", "WebSockets", "D3"],
    },
    {
      name: "Este sitio",
      year: 2026,
      type: "personal",
      description: "Mi CV con forma de editor de código. Cada archivo es una sección.",
      stack: ["Next.js", "TypeScript", "CSS Modules"],
    },
  ],
  skills: {
    intro: "Herramientas que uso a diario, agrupadas por área",
    groups: [
      { name: "lenguajes", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
      { name: "frontend", items: ["React", "Next.js", "CSS", "Storybook"] },
      { name: "backend", items: ["Node.js", "Express", "GraphQL"] },
      { name: "datos_y_cloud", items: ["PostgreSQL", "AWS", "Docker", "Vercel"] },
      { name: "testing", items: ["Jest", "Playwright", "GitHub Actions"] },
    ],
  },
  education: {
    degrees: [
      {
        title: "Ingeniería en Sistemas de Información",
        institution: "Universidad de ejemplo",
        period: "2012 – 2018",
      },
    ],
    languages: [
      { name: "Español", level: "nativo" },
      { name: "Inglés", level: "avanzado (C1)" },
    ],
  },
  contact: {
    intro: "Abierto a puestos full-time y freelance. El email es la vía más rápida.",
    email: "guido@ejemplo.dev",
    links: [
      { url: "https://www.linkedin.com/", display: "linkedin.com/in/tu-usuario" },
      { url: "https://github.com/", display: "github.com/tu-usuario" },
    ],
    closing: "Gracias por pasar ✦",
  },
};
