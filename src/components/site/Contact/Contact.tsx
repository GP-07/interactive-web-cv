import type { Locale } from "@/types/cv";
import { cv } from "@/data/cv";
import { CopyButton } from "./CopyButton";
import styles from "./Contact.module.css";

export function Contact({ locale }: { locale: Locale }) {
  const { contact, ui } = cv.content[locale];

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.inner}>
        <h2 id="contact-title" className={styles.title}>
          {contact.title}
        </h2>
        <div className={styles.mail}>
          <a href={`mailto:${cv.email}`}>{cv.email}</a>
          <CopyButton text={cv.email} label={ui.copy} doneLabel={ui.copied} className={styles.button} />
        </div>
        {cv.links.length > 0 && (
          <ul className={styles.links}>
            {cv.links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.display}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
