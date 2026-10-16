import type { FileLanguage, SectionMeta } from "@/types/sections";

export const sections = {
  about: { id: "sobre-mi", label: "Sobre mí", file: "README.md", language: "markdown" },
  experience: { id: "experiencia", label: "Experiencia", file: "experience.ts", language: "typescript" },
  skills: { id: "stack", label: "Stack", file: "skills.yaml", language: "yaml" },
  education: { id: "estudios", label: "Estudios", file: "education.md", language: "markdown" },
  contact: { id: "contacto", label: "Contacto", file: "contact.sh", language: "shell" },
} satisfies Record<string, SectionMeta>;

/** Orden en que aparecen en la página y en el breadcrumb. */
export const sectionOrder: SectionMeta[] = [
  sections.about,
  sections.experience,
  sections.skills,
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
