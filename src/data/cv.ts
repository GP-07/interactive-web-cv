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
      period: "March 2022 → present",
      highlights: [
        "Product: InvGate Asset Management",
        "Focus on performance, scalability, and asynchronous processing challenges in a data-intensive environment with large volumes of interconnected asset data. Contribute to maintaining a reliable and efficient experience for enterprise customers managing complex IT infrastructures.",
      ],
      stack: ["Python 3", "Django 5.2", "PostgreSQL", "Claude code"],
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
    unit: "years",
    groups: [
      {
        title: "Current stack",
        items: [
          { name: "PostgreSQL", years: 6.5, icon: "postgresql" },
          { name: "Python", years: 4.5, icon: "python" },
          { name: "Django", years: 4.5, icon: "django" },
          { name: "Claude Code", years: 1.5, icon: "claude" },
        ],
      },
      {
        title: "Also in my toolbox",
        items: [
          { name: "Java", years: 5.5, icon: "java" },
          { name: "Spring Boot", years: 4, icon: "spring" },
          { name: "Angular", years: 3.5, icon: "angular" },
          { name: "MongoDB", years: 2, icon: "mongodb" },
          { name: "AWS", years: 2, icon: "aws" },
          { name: "Kafka", years: 2, icon: "kafka" },
          { name: "ELK", years: 2, icon: "elasticsearch" },
        ],
      },
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
    intro: "Open to full-time and freelance roles. Email is the fastest way to reach me.",
    email: "guidopallas@gmail.com",
    links: [
      { url: "https://www.linkedin.com/in/guidopallas", display: "linkedin.com/in/guidopallas" },
    ],
  },
};
