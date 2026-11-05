import type { CV, TechTag } from "@/types/cv";

/** Igual en los dos idiomas. */
const yachtStack: TechTag[] = [
  { name: "Java", category: "lang" },
  { name: "Spring Boot", category: "lang" },
  { name: "React", category: "lang" },
  { name: "PostgreSQL", category: "data" },
  { name: "Stripe", category: "int" },
];

export const cv: CV = {
  name: "Guido Pallas",
  email: "guidopallas@gmail.com",
  links: [{ url: "https://www.linkedin.com/in/guidopallas", display: "linkedin.com/in/guidopallas" }],

  profile: {
    jobTitle: "Software Engineer",
    worksFor: "InvGate",
    alumniOf: "UADE",
    location: { city: "Barcelona", country: "ES" },
    knowsAbout: [
      "Software Engineering", "Backend Development", "Python", "Django", "Java", "Spring Boot", "Hibernate",
      "PostgreSQL", "MongoDB", "REST APIs", "Microservices", "Event-Driven Architecture", "Hexagonal Architecture",
      "Kafka", "JMS", "AWS", "SOAP Web Services", "Observability", "ELK", "Performance Optimization", "Angular",
      "Claude Code",
    ],
  },

  timeline: {
    start: "2016-08",
    eras: [
      { company: "Ayi & Asociados", from: "2016-08", to: "2018-03" },
      { company: "IT Resources · Monsanto", from: "2018-03", to: "2020-02" },
      { company: "Santander", from: "2020-02", to: "2022-03" },
      { company: "InvGate", from: "2022-03", to: "now" },
    ],
    // Ordenadas por relevancia hoy: primero lo que está en uso.
    techs: [
      { name: "Python · Django", where: "InvGate", category: "lang", icon: "python", spans: [{ from: "2022-03", to: "now" }] },
      {
        name: "PostgreSQL",
        where: "IT Resources · InvGate",
        category: "data",
        icon: "postgresql",
        spans: [{ from: "2018-03", to: "2020-02" }, { from: "2022-03", to: "now" }],
      },
      { name: "Claude Code", where: "InvGate", category: "plat", icon: "claude", spans: [{ from: "2026-01", to: "now" }] },
      { name: "Java", where: "Ayi · IT Resources · Santander", category: "lang", icon: "java", spans: [{ from: "2016-08", to: "2022-03" }] },
      { name: "Spring Boot", where: "IT Resources · Santander", category: "lang", icon: "spring", spans: [{ from: "2018-03", to: "2022-03" }] },
      { name: "MongoDB", where: "Santander", category: "data", icon: "mongodb", spans: [{ from: "2020-02", to: "2022-03" }] },
      { name: { es: "Servicios SOAP", en: "SOAP services" }, where: "Santander", category: "int", spans: [{ from: "2020-02", to: "2022-03" }] },
      { name: "Kafka", where: "IT Resources", category: "int", icon: "kafka", spans: [{ from: "2018-03", to: "2020-02" }] },
      { name: "AWS", where: "IT Resources", category: "plat", icon: "aws", spans: [{ from: "2018-03", to: "2020-02" }] },
      {
        name: { es: "ELK · observabilidad", en: "ELK · observability" },
        where: "IT Resources",
        category: "plat",
        icon: "elasticsearch",
        spans: [{ from: "2018-03", to: "2020-02" }],
      },
      { name: "Angular", where: "IT Resources", category: "lang", icon: "angular", spans: [{ from: "2018-03", to: "2020-02" }] },
    ],
  },

  // Conceptos que no aparecen como texto en la página: solo van al perfil schema.org y a <meta name="keywords">.
  seoKeywords: [
    "DB", "Cache", "Index", "Query analysis", "Metrics / Observability", "APIs", "Request / wait times",
    "Queues", "Async processing", "Timeouts", "Retries", "Idempotency",
  ],

  content: {
    es: {
      meta: {
        title: "Guido Pallas · Ingeniero de software backend · Python y Django",
        description:
          "Guido Pallas, ingeniero de software backend en Barcelona o remoto. Python, Django, Java y PostgreSQL. Soluciones a la medida del producto, sin sobreingeniería.",
      },
      nav: {
        label: "Secciones",
        timeline: "Trayectoria",
        learnings: "Aprendizajes",
        projects: "Proyectos",
        now: "Ahora",
        contact: "Contacto",
      },
      ui: {
        languageLabel: "Idioma",
        themeLabel: "Tema",
        light: "Claro",
        dark: "Oscuro",
        copy: "Copiar email",
        copied: "Copiado",
        years: "años",
        months: "meses",
      },
      hero: {
        eyebrow: "Ingeniero en Informática · Universidad Argentina de la Empresa",
        locationsLabel: "Ubicación",
        locations: ["Barcelona", "Remoto"],
        titleStart: "Guido Pallas,",
        titleHighlight: "ingeniero de software backend.",
        lead: "Diseño soluciones a la medida de lo que el producto necesita hoy: sin sobreingeniería, y fáciles de cambiar cuando haga falta. Antes de escribir código me aseguro de entender bien el problema, y defino la solución junto a producto y negocio.",
        facts: [
          { label: "Experiencia", value: "10 años, desde 2016", category: "lang" },
          { label: "Sectores", value: "Banca · Agro · SaaS", category: "data" },
          { label: "Trabajo con", value: "Python · Java", category: "int" },
          { label: "Hablo", value: "Español · Inglés", category: "plat" },
        ],
      },
      timeline: {
        eyebrow: "Trayectoria",
        title: "Con qué trabajé, dónde y por cuánto tiempo.",
        legend: {
          lang: "Lenguajes y frameworks",
          data: "Datos",
          int: "Integración y mensajería",
          plat: "Plataforma y herramientas",
        },
        liveLegend: "Color intenso: en uso hoy",
      },
      learnings: {
        eyebrow: "Recorrido",
        title: "Aprendizajes",
        intro:
          "En cada etapa tuve que arrancar casi de cero con algo nuevo, y de cada una me quedó algo. Lo que se repitió en todas está en el centro.",
        diagramLabel:
          "Diagrama de siete conjuntos superpuestos: seis aprendizajes y uno vacío por venir. En el centro, lo que comparten todos.",
        sets: [
          { name: ["Performance", "testing"], hue: "orange" },
          { name: ["SOA / OSB"], hue: "teal" },
          { name: ["Servicios", "Java"], hue: "cobalt" },
          { name: ["Microservicios"], hue: "rose" },
          { name: ["Python", "a escala"], hue: "violet" },
          { name: ["AI-first", "mindset"], hue: "green" },
        ],
        next: ["¿Lo próximo?"],
        coreLabel: "En todas",
        core: ["Foco en el producto", "Diseño de soluciones", "Criterio", "Calidad", "Performance"],
        note: ["Siempre hay algo más", "por aprender."],
      },
      projects: {
        eyebrow: "Proyectos",
        title: "Por fuera del trabajo.",
        stackLabel: "Stack",
        items: [
          {
            name: "Alquiler de yates",
            meta: "Freelance · 2021–2022",
            description:
              "Un sistema para alquilar yates, hecho en equipo. El alquiler se confirma solo si Stripe aprueba el pago, y si llegan dos pedidos al mismo tiempo por el mismo yate, uno solo se lo queda: nunca se alquila dos veces.",
            stack: yachtStack,
          },
        ],
      },
      now: {
        eyebrow: "Ahora · octubre de 2026",
        title: "Actualmente.",
        items: [
          {
            label: "Trabajo",
            text: "En InvGate, cuidando la performance de un producto que maneja muchísimos datos de infraestructura IT.",
            category: "lang",
          },
          {
            label: "Me interesa",
            text: "La observabilidad: métricas, trazas y alertas para entender qué le pasa a un sistema antes de que se caiga.",
            category: "int",
          },
          {
            label: "AI-first",
            text: "Trabajo con Claude Code: planifico, escribo tests e implemento con agentes, sin bajar la vara de calidad.",
            category: "plat",
          },
        ],
      },
      contact: { title: "¿Te interesó algo de esto? Escribime y lo charlamos." },
      footer: { tagline: "Ingeniero de software · Backend" },
    },

    en: {
      meta: {
        title: "Guido Pallas · Backend Software Engineer · Python & Django",
        description:
          "Guido Pallas, backend software engineer in Barcelona or remote. Python, Django, Java and PostgreSQL. Solutions sized to the product, with no over-engineering.",
      },
      nav: {
        label: "Sections",
        timeline: "Track record",
        learnings: "What I've learned",
        projects: "Projects",
        now: "Now",
        contact: "Contact",
      },
      ui: {
        languageLabel: "Language",
        themeLabel: "Theme",
        light: "Light",
        dark: "Dark",
        copy: "Copy email",
        copied: "Copied",
        years: "yrs",
        months: "mo",
      },
      hero: {
        eyebrow: "Computer Engineer · Universidad Argentina de la Empresa",
        locationsLabel: "Location",
        locations: ["Barcelona", "Remote"],
        titleStart: "Guido Pallas,",
        titleHighlight: "backend software engineer.",
        lead: "I design solutions sized to what the product needs today: no over-engineering, and easy to change when the time comes. Before writing any code I make sure I understand the problem, and I shape the solution together with product and business.",
        facts: [
          { label: "Experience", value: "10 years, since 2016", category: "lang" },
          { label: "Sectors", value: "Banking · Agri · SaaS", category: "data" },
          { label: "I work with", value: "Python · Java", category: "int" },
          { label: "I speak", value: "Spanish · English", category: "plat" },
        ],
      },
      timeline: {
        eyebrow: "Track record",
        title: "What I've worked with, where, and for how long.",
        legend: {
          lang: "Languages and frameworks",
          data: "Data",
          int: "Integration and messaging",
          plat: "Platform and tools",
        },
        liveLegend: "Solid colour: in use today",
      },
      learnings: {
        eyebrow: "Journey",
        title: "What I've learned",
        intro:
          "Every stage had me starting almost from scratch with something new, and each one left something behind. What carried over through all of them is in the middle.",
        diagramLabel:
          "Diagram of seven overlapping sets: six things learned and an empty one still to come. In the middle, what they all share.",
        sets: [
          { name: ["Performance", "testing"], hue: "orange" },
          { name: ["SOA / OSB"], hue: "teal" },
          { name: ["Java", "services"], hue: "cobalt" },
          { name: ["Microservices"], hue: "rose" },
          { name: ["Python", "at scale"], hue: "violet" },
          { name: ["AI-first", "mindset"], hue: "green" },
        ],
        next: ["What's next?"],
        coreLabel: "In all of them",
        core: ["Product focus", "Solution design", "Judgment", "Quality", "Performance"],
        note: ["There's always", "more to learn."],
      },
      projects: {
        eyebrow: "Projects",
        title: "Outside my day job.",
        stackLabel: "Stack",
        items: [
          {
            name: "Yacht rentals",
            meta: "Freelance · 2021–2022",
            description:
              "A system for renting yachts, built as a team. A rental is only confirmed if Stripe approves the payment, and if two requests for the same yacht come in at the same time, only one gets it: a yacht is never rented twice.",
            stack: yachtStack,
          },
        ],
      },
      now: {
        eyebrow: "Now · October 2026",
        title: "Currently.",
        items: [
          {
            label: "Working",
            text: "At InvGate, looking after the performance of a product that handles tons of IT infrastructure data.",
            category: "lang",
          },
          {
            label: "Interested in",
            text: "Observability: metrics, traces and alerts to understand what's going on in a system before it goes down.",
            category: "int",
          },
          {
            label: "AI-first",
            text: "I work with Claude Code: planning, writing tests and building with agents, without lowering the bar on quality.",
            category: "plat",
          },
        ],
      },
      contact: { title: "Anything here caught your eye? Drop me a line and let's talk." },
      footer: { tagline: "Software engineer · Backend" },
    },
  },
};
