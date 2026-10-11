export type FileLanguage = "markdown" | "typescript" | "json" | "yaml" | "shell";

/** Cada sección del CV se presenta como un archivo del editor. */
export interface SectionMeta {
  id: string;
  label: string;
  file: string;
  language: FileLanguage;
}
