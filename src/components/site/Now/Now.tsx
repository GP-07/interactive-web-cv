import type { Locale } from "@/types/cv";
import { cv } from "@/data/cv";
import { Section } from "@/components/site/Section/Section";
import styles from "./Now.module.css";

export function Now({ locale }: { locale: Locale }) {
  const { now } = cv.content[locale];

  return (
    <Section id="now" eyebrow={now.eyebrow} title={now.title}>
      <ul className={styles.list}>
        {now.items.map((item) => (
          <li key={item.label} className={styles.item} data-category={item.category}>
            <span className={styles.label}>{item.label}</span>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
