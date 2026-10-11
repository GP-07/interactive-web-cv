import type { ReactNode } from "react";
import type { SectionMeta } from "@/types/sections";
import { FileIcon } from "@/components/editor/FileIcon/FileIcon";
import styles from "./FileSection.module.css";

/** Una sección del CV presentada como un archivo abierto en el editor. */
export function FileSection({ section, children }: { section: SectionMeta; children: ReactNode }) {
  const titleId = `${section.id}-title`;

  return (
    <section id={section.id} className={styles.section} aria-labelledby={titleId}>
      <header className={styles.header}>
        <h2 id={titleId} className={styles.label}>
          {section.label}
        </h2>
        <span className={styles.file}>
          <FileIcon language={section.language} />
          {section.file}
        </span>
      </header>
      <div className={styles.code}>{children}</div>
    </section>
  );
}
