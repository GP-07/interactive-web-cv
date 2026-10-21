import type { CV } from "@/types/cv";

export const cv: CV = {
  name: "Guido Pallas",
  email: "guidopallas@gmail.com",
  links: [{ url: "https://www.linkedin.com/in/guidopallas", display: "linkedin.com/in/guidopallas" }],

  profile: {
    jobTitle: "Software Engineer",
    worksFor: "InvGate",
    alumniOf: "UADE",
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
        title: "Guido Pallas · Ingeniero de software backend",
        description:
          "Guido Pallas, ingeniero de software backend. Diez años construyendo software pensado para crecer: Python, Django, Java, Spring Boot, PostgreSQL, Kafka.",
      },
      nav: { label: "Secciones", timeline: "Trayectoria", learnings: "Aprendizajes", now: "Ahora", contact: "Contacto" },
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
        eyebrow: "Ingeniero de software · Backend",
        titleStart: "Hace diez años que construyo software",
        titleHighlight: "pensado para crecer.",
        lead: "Sistemas con muchos datos, mucha gente usándolos al mismo tiempo y equipos que necesitan poder cambiarlos sin miedo. Trabajé en banca, agroindustria y software para empresas.",
        facts: [
          { label: "Experiencia", value: "10 años, desde 2016", category: "lang" },
          { label: "Sectores", value: "Banca · Agro · SaaS", category: "data" },
          { label: "Trabajo con", value: "Python · Java", category: "int" },
          { label: "Hablo", value: "Español · Inglés", category: "plat" },
        ],
      },
      timeline: {
        eyebrow: "Trayectoria",
        title: "Qué usé, dónde y durante cuánto tiempo.",
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
          "Estos son los aprendizajes que me dejaron mis diferentes experiencias y que hoy forman gran parte de mi conocimiento. Siempre estoy dispuesto a aprender nuevas tecnologías, formas de trabajo y herramientas, porque me nutren y me forman como un mejor profesional.",
        diagramLabel:
          "Diagrama de seis conjuntos superpuestos: cinco aprendizajes y uno vacío por venir. En el centro, lo que comparten todos.",
        sets: [
          { name: ["Performance", "testing"], hue: "orange" },
          { name: ["SOA / OSB"], hue: "teal" },
          { name: ["Servicios", "Java"], hue: "cobalt" },
          { name: ["Microservicios"], hue: "rose" },
          { name: ["Python", "a escala"], hue: "violet" },
        ],
        next: ["¿Lo próximo?"],
        coreLabel: "En todas",
        core: ["Foco en el producto", "Diseño de soluciones", "Criterio", "Calidad", "Performance"],
        note: ["Siempre hay algo más", "por aprender."],
      },
      now: {
        eyebrow: "Ahora · octubre de 2026",
        title: "En qué estoy.",
        items: [
          {
            label: "Trabajo",
            text: "En InvGate, en el rendimiento de un producto que gestiona grandes volúmenes de datos de infraestructura IT.",
            category: "lang",
          },
          {
            label: "Me interesa",
            text: "La observabilidad: métricas, trazas y alertas que ayuden a entender un sistema antes de que falle.",
            category: "int",
          },
          { label: "Exploro", text: "Cómo sumar asistentes de IA al desarrollo sin perder calidad.", category: "plat" },
        ],
      },
      contact: { title: "Si algo de esto te despertó curiosidad, escribime." },
      footer: { tagline: "Ingeniero de software · Backend" },
    },

    en: {
      meta: {
        title: "Guido Pallas · Backend software engineer",
        description:
          "Guido Pallas, backend software engineer. Ten years building software designed to grow: Python, Django, Java, Spring Boot, PostgreSQL, Kafka.",
      },
      nav: { label: "Sections", timeline: "Track record", learnings: "What I've learned", now: "Now", contact: "Contact" },
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
        eyebrow: "Software engineer · Backend",
        titleStart: "For ten years I've been building software",
        titleHighlight: "designed to grow.",
        lead: "Systems with lots of data, lots of people using them at the same time, and teams that need to change them without fear. I've worked in banking, agribusiness and enterprise software.",
        facts: [
          { label: "Experience", value: "10 years, since 2016", category: "lang" },
          { label: "Sectors", value: "Banking · Agri · SaaS", category: "data" },
          { label: "I work with", value: "Python · Java", category: "int" },
          { label: "I speak", value: "Spanish · English", category: "plat" },
        ],
      },
      timeline: {
        eyebrow: "Track record",
        title: "What I've used, where, and for how long.",
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
          "These are the lessons my different roles left me, and today they make up a big part of what I know. I'm always open to learning new technologies, ways of working and tools, because they help me grow into a better professional.",
        diagramLabel:
          "Diagram of six overlapping sets: five things learned and an empty one still to come. In the middle, what they all share.",
        sets: [
          { name: ["Performance", "testing"], hue: "orange" },
          { name: ["SOA / OSB"], hue: "teal" },
          { name: ["Java", "services"], hue: "cobalt" },
          { name: ["Microservices"], hue: "rose" },
          { name: ["Python", "at scale"], hue: "violet" },
        ],
        next: ["What's next?"],
        coreLabel: "In all of them",
        core: ["Product focus", "Solution design", "Judgment", "Quality", "Performance"],
        note: ["There's always", "more to learn."],
      },
      now: {
        eyebrow: "Now · October 2026",
        title: "What I'm up to.",
        items: [
          {
            label: "Working",
            text: "At InvGate, on the performance of a product that manages large volumes of IT infrastructure data.",
            category: "lang",
          },
          {
            label: "Interested in",
            text: "Observability: metrics, traces and alerts that help you understand a system before it fails.",
            category: "int",
          },
          { label: "Exploring", text: "How to bring AI assistants into development without losing quality.", category: "plat" },
        ],
      },
      contact: { title: "If any of this sparked your curiosity, write to me." },
      footer: { tagline: "Software engineer · Backend" },
    },
  },
};
