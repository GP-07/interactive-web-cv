import type { Locale } from "@/types/cv";
import { cv } from "@/data/cv";
import styles from "./Hero.module.css";

export function Hero({ locale }: { locale: Locale }) {
  const { hero } = cv.content[locale];

  return (
    <div className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.pill}>{hero.eyebrow}</p>
        <h1 className={styles.title}>
          {hero.titleStart} <mark className={styles.highlight}>{hero.titleHighlight}</mark>
        </h1>
        <p className={styles.lead}>{hero.lead}</p>
        <dl className={styles.facts}>
          {hero.facts.map((fact) => (
            <div key={fact.label} className={styles.fact} data-category={fact.category}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
