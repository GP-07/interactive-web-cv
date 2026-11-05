import type { Locale } from "@/types/cv";
import { cv } from "@/data/cv";
import { Section } from "@/components/site/Section/Section";
import styles from "./Projects.module.css";

/** Proyectos por fuera del trabajo en relación de dependencia: pocos y breves. */
export function Projects({ locale }: { locale: Locale }) {
  const { projects } = cv.content[locale];

  return (
    <Section id="projects" eyebrow={projects.eyebrow} title={projects.title}>
      {projects.items.map((project) => (
        <article key={project.name} className={styles.card}>
          <header className={styles.head}>
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.meta}>{project.meta}</p>
          </header>
          <p>{project.description}</p>
          <div className={styles.stack}>
            <span className={styles.stackLabel}>{projects.stackLabel}</span>
            <ul className={styles.tags}>
              {project.stack.map((tech) => (
                <li key={tech.name} className={styles.tag} data-category={tech.category}>
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </Section>
  );
}
