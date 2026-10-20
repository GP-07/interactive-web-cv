import type { CV, Step } from "@/types/cv";

/** Los cuatro pasos de cada situación usan siempre el mismo color. */
const stepColors: Step["category"][] = ["lang", "int", "data", "plat"];
const steps = (labels: string[], texts: string[]): Step[] =>
  texts.map((text, i) => ({ label: labels[i], text, category: stepColors[i] }));

const stepLabels = {
  es: ["Primero pregunto", "Miro", "Decido", "Evito"],
  en: ["First I ask", "I look at", "I decide", "I avoid"],
};

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

  reasoningTags: {
    performance: [
      { label: "DB", category: "data" },
      { label: "Cache", category: "data" },
      { label: "Index", category: "data" },
      { label: "Query analysis", category: "data" },
      { label: "Metrics / Observability", category: "plat" },
      { label: "APIs", category: "int" },
      { label: "Request / wait times", category: "lang" },
    ],
    integration: [
      { label: "APIs", category: "int" },
      { label: "Queues", category: "int" },
      { label: "Async processing", category: "int" },
      { label: "Timeouts", category: "lang" },
      { label: "Retries", category: "lang" },
      { label: "Idempotency", category: "lang" },
      { label: "Metrics / Observability", category: "plat" },
    ],
  },

  content: {
    es: {
      meta: {
        title: "Guido Pallas · Ingeniero de software backend",
        description:
          "Guido Pallas, ingeniero de software backend. Diez años construyendo software pensado para crecer: Python, Django, Java, Spring Boot, PostgreSQL, Kafka.",
      },
      nav: { label: "Secciones", timeline: "Trayectoria", reasoning: "Cómo razono", now: "Ahora", contact: "Contacto" },
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
      reasoning: {
        eyebrow: "Cómo razono",
        title: "Dos situaciones frecuentes y cómo las abordaría.",
        tabsLabel: "Situaciones",
        checksTitle: "Puntos a revisar",
        involvesLabel: "Involucra",
        cases: [
          {
            id: "performance",
            category: "data",
            kicker: "Rendimiento",
            tabTitle: "La aplicación se puso lenta",
            quote: "La aplicación se puso lenta y nadie sabe por qué.",
            steps: steps(stepLabels.es, [
              "¿Desde cuándo pasa? ¿Es todo o algunas pantallas? ¿Coincide con un despliegue o con más uso?",
              "El recorrido completo de una solicitud, medido, antes de opinar. La intuición sobre dónde está el problema suele fallar.",
              "Atacar los 2 o 3 puntos que explican la mayor parte de la demora y volver a medir para confirmarlo.",
              "Sumar servidores a ciegas. Es caro y suele esconder el problema en lugar de resolverlo.",
            ]),
            pathLabel: "Recorrido de una solicitud",
            path: [
              {
                layer: "Navegador",
                checks: [
                  "¿Cuánto tarda en llegar la primera respuesta?",
                  "¿Cuánto pesa lo que descarga cada pantalla y cuántas solicitudes hace?",
                ],
              },
              {
                layer: "Balanceador",
                checks: [
                  "¿Cuántas solicitudes por segundo recibe y cuándo son los picos?",
                  "¿Hay errores o tiempos de espera agotados? ¿Reparte bien entre instancias?",
                ],
              },
              {
                layer: "Aplicación",
                checks: [
                  "¿Cómo están la CPU y la memoria al procesar?",
                  "¿Cuánto tarda cada endpoint en el percentil 95, no en promedio?",
                  "¿Cuántas consultas dispara una sola solicitud? (el clásico N+1)",
                ],
              },
              {
                layer: "Caché",
                checks: ["¿Se usa algún sistema de caché? ¿Qué porcentaje de aciertos tiene?", "¿Cuándo y cómo se invalida?"],
              },
              {
                layer: "Base de datos",
                checks: [
                  "¿Cuánto tarda la consulta y qué dice su plan de ejecución?",
                  "¿Qué índices involucra? ¿Falta alguno o hay alguno que no se usa?",
                  "¿Hay bloqueos o conexiones agotadas?",
                ],
              },
            ],
          },
          {
            id: "integration",
            category: "int",
            kicker: "Arquitectura · Asincronía",
            tabTitle: "Integrar un sistema externo poco confiable",
            quote: "Hay que integrar un sistema externo que no siempre responde.",
            steps: steps(stepLabels.es, [
              "Si no responde, ¿el usuario tiene que esperar o puede seguir? ¿Cuánto tarda y cuánto falla hoy? ¿Qué límites de uso tiene?",
              "Si la operación tiene que ser inmediata o puede resolverse en segundo plano.",
              "Aislarlo detrás de un adaptador propio y, si puede esperar, pasar por una cola con reintentos seguros.",
              "Que una falla externa tumbe todo el sistema, o que un reintento ejecute dos veces lo mismo (por ejemplo, un cobro).",
            ]),
            pathLabel: "Recorrido de una operación",
            path: [
              {
                layer: "Aplicación",
                checks: ["¿Qué ve el usuario mientras tanto?", "¿Cada operación tiene un estado claro: pendiente, hecha o fallida?"],
              },
              {
                layer: "Adaptador",
                checks: [
                  "¿Cada llamada tiene un tiempo límite?",
                  "¿El contrato es propio, para poder cambiar de proveedor sin tocar el resto?",
                ],
              },
              {
                layer: "Cola",
                checks: [
                  "¿Cuántos mensajes hay pendientes y cuánto hace que espera el más viejo?",
                  "¿Hay una cola de errores para lo que no se pudo procesar?",
                ],
              },
              {
                layer: "Worker",
                checks: [
                  "¿Los reintentos esperan cada vez más entre uno y otro?",
                  "Si un mensaje se procesa dos veces, ¿el resultado es el mismo? (idempotencia)",
                ],
              },
              {
                layer: "Sistema externo",
                checks: [
                  "¿Qué tasa de errores y qué latencia tiene?",
                  "¿Dejamos de llamarlo cuando está caído? (circuit breaker)",
                  "¿Respetamos sus límites de uso?",
                ],
              },
            ],
          },
        ],
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
      nav: { label: "Sections", timeline: "Track record", reasoning: "How I reason", now: "Now", contact: "Contact" },
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
      reasoning: {
        eyebrow: "How I reason",
        title: "Two common situations and how I'd approach them.",
        tabsLabel: "Situations",
        checksTitle: "Points to check",
        involvesLabel: "Involves",
        cases: [
          {
            id: "performance",
            category: "data",
            kicker: "Performance",
            tabTitle: "The app got slow",
            quote: "The app got slow and nobody knows why.",
            steps: steps(stepLabels.en, [
              "Since when? Is it everything or a few screens? Does it match a deploy or more traffic?",
              "The full path of a request, measured, before giving an opinion. Gut feeling about where the problem is tends to be wrong.",
              "To tackle the 2 or 3 spots that explain most of the delay, then measure again to confirm.",
              "Adding servers blindly. It's expensive and usually hides the problem instead of fixing it.",
            ]),
            pathLabel: "Path of a request",
            path: [
              {
                layer: "Browser",
                checks: [
                  "How long until the first byte arrives?",
                  "How much does each screen download, and how many requests does it make?",
                ],
              },
              {
                layer: "Load balancer",
                checks: [
                  "How many requests per second, and when are the peaks?",
                  "Any errors or timeouts? Is load spread evenly across instances?",
                ],
              },
              {
                layer: "Application",
                checks: [
                  "How are CPU and memory while processing?",
                  "How long does each endpoint take at the 95th percentile, not on average?",
                  "How many queries does a single request trigger? (the classic N+1)",
                ],
              },
              { layer: "Cache", checks: ["Is there a cache at all? What's its hit rate?", "When and how is it invalidated?"] },
              {
                layer: "Database",
                checks: [
                  "How long does the query take, and what does its execution plan say?",
                  "Which indexes are involved? Is one missing, or unused?",
                  "Any locks or exhausted connections?",
                ],
              },
            ],
          },
          {
            id: "integration",
            category: "int",
            kicker: "Architecture · Async",
            tabTitle: "Integrating an unreliable external system",
            quote: "We need to integrate an external system that doesn't always respond.",
            steps: steps(stepLabels.en, [
              "If it doesn't respond, does the user have to wait, or can they move on? How slow and how flaky is it today? What usage limits does it have?",
              "Whether the operation must be immediate or can be resolved in the background.",
              "To isolate it behind an adapter we own and, if it can wait, route it through a queue with safe retries.",
              "Letting an external failure take the whole system down, or a retry doing the same thing twice (a payment, for example).",
            ]),
            pathLabel: "Path of an operation",
            path: [
              {
                layer: "Application",
                checks: ["What does the user see in the meantime?", "Does every operation have a clear state: pending, done or failed?"],
              },
              {
                layer: "Adapter",
                checks: ["Does every call have a timeout?", "Is the contract ours, so the provider can change without touching the rest?"],
              },
              {
                layer: "Queue",
                checks: [
                  "How many messages are pending, and how old is the oldest one?",
                  "Is there a dead-letter queue for what couldn't be processed?",
                ],
              },
              {
                layer: "Worker",
                checks: [
                  "Do retries back off, waiting longer each time?",
                  "If a message is processed twice, is the result the same? (idempotency)",
                ],
              },
              {
                layer: "External system",
                checks: [
                  "What are its error rate and latency?",
                  "Do we stop calling it while it's down? (circuit breaker)",
                  "Do we respect its rate limits?",
                ],
              },
            ],
          },
        ],
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
