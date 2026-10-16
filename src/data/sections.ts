import type { FileLanguage, SectionMeta } from "@/types/sections";

export const sections = {
  about: { id: "sobre-mi", label: "Sobre mí", file: "README.md", language: "markdown" },
  skills: { id: "stack", label: "Stack", file: "skills.yaml", language: "yaml" },
  experience: { id: "experiencia", label: "Experiencia", file: "experience.ts", language: "typescript" },
  education: { id: "estudios", label: "Estudios", file: "education.md", language: "markdown" },
  contact: { id: "contacto", label: "Contacto", file: "contact.sh", language: "shell" },
} satisfies Record<string, SectionMeta>;

/** Orden en que aparecen en la página y en el breadcrumb. */
export const sectionOrder: SectionMeta[] = [
  sections.about,
  sections.skills,
  sections.experience,
  sections.education,
  sections.contact,
];

export const languageNames: Record<FileLanguage, string> = {
  markdown: "Markdown",
  typescript: "TypeScript",
  json: "JSON",
  yaml: "YAML",
  shell: "Shell",
};
