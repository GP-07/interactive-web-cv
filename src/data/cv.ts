import type { CV } from "@/types/cv";

// CONTENIDO DE EJEMPLO: reemplazar con el CV real.
export const cv: CV = {
  name: "Guido Pallas",
  title: "Software Engineer",
  summary:
    "Passionate about building high-quality solutions within teams that value respect and a positive work environment. On my side, I always try to foster the same mindset, while also encouraging collective growth. I enjoy taking on design challenges that push me to think about the algorithms, patterns, and architectures that best fit each context. I value both the process and the outcome, which is why I like being involved in every part of the software development cycle.",
  facts: [
    { label: "Base", value: "Barcelona, ES" },
    { label: "Now", value: "Open to work" },
    { label: "Degree", value: "Computer Engineer" },
  ],
  availability: "Open to work",
  experience: [
    {
      role: "Software Engineer",
      company: "InvGate",
      period: "March 2022 → presente",
      highlights: [
        "Product: InvGate Asset Management",
        "Focus on performance, scalability, and asynchronous processing challenges in a data-intensive environment with large volumes of interconnected asset data. Contribute to maintaining a reliable and efficient experience for enterprise customers managing complex IT infrastructures.",
      ],
      stack: ["Python 3", "Django 5.2", "PostgreSQL", "MySQL", "Claude code"],
    },
    {
      role: "Software Engineer",
      company: "Santander Tecnología",
      period: "February 2020 → March 2022",
      highlights: [
        "Product: DEBIN",
        "Implemented critical components using Ports and Adapters architecture, improving maintainability while contributing to key architecture and product decisions. Strengthened expertise in distributed systems design and technical trade-off analysis, while also mentoring a new team member during onboarding.",
      ],
      stack: ["Java 11", "Springboot", "MongoDB", "SOAP Web services"],
    },
    {
      role: "Full Stack Developer",
      company: "IT Resources",
      period: "March 2018 → February 2020",
      highlights: [
        "Client: Monsanto/Bayer",
        "Project: Barter",
        "Owned services end-to-end in a microservice event-driven architecture. From analysis and development to their deploy on AWS and monitoring and support. Gained expertise in scalable event-driven systems, observability, and production incident resolution."
      ],
      stack: ["Java 8", "Springboot", "Hibernate", "PostgreSQL", "AWS", "Angular 5", "Kafka", "ELK"],
    },
    {
      role: "Software Developer",
      company: "Ayi & Asociados",
      period: "August 2016 → March 2018",
      highlights: [
        "Omnichannel platform team",
        "The main challenge was rapidly gaining proficiency in Java with EJB for backend service development and Angular 2 for frontend implementation, while also adapting to and reviewing legacy AngularJS implementations already in use by existing clients."
      ],
      stack: ["Java core", "Java EJB", "Angular 2"],
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
        title: "IT Engineering",
        institution: "UADE",
        period: "2019",
      },
    ],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Advanced" },
    ],
  },
  contact: {
    intro: "Abierto a puestos full-time y freelance. El email es la vía más rápida.",
    email: "guidopallas@gmail.com",
    links: [
      { url: "https://www.linkedin.com/in/guidopallas", display: "linkedin.com/in/guidopallas" },
    ],
  },
};
