import type { Locale } from "@/types/cv";
import { cv } from "@/data/cv";
import styles from "./Hero.module.css";

export function Hero({ locale }: { locale: Locale }) {
  const { hero, ui } = cv.content[locale];

  return (
    <div className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.tags}>
          <p className={styles.pill}>{hero.eyebrow}</p>
          <ul className={styles.locations} aria-label={hero.locationsLabel}>
            {hero.locations.map((place) => (
              <li key={place} className={styles.location}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
                  <circle cx="12" cy="10" r="2.3" />
                </svg>
                {place}
              </li>
            ))}
            <li className={styles.location}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12.5l2.8 2.7L16 9.5" />
              </svg>
              {hero.workEligibility}
            </li>
          </ul>
        </div>
        <h1 className={styles.title}>
          {hero.titleStart} <mark className={styles.highlight}>{hero.titleHighlight}</mark>
        </h1>
        <p className={styles.lead}>{hero.lead}</p>
        <a className={styles.download} href={cv.resume.url} download={cv.resume.fileName}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 4v11M7 10.5l5 5 5-5M5 19.5h14" />
          </svg>
          {ui.downloadCv}
        </a>
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
