import type { CSSProperties } from "react";
import Image from "next/image";
import { cacheLife } from "next/cache";
import type { Category, Locale, Tech } from "@/types/cv";
import { cv } from "@/data/cv";
import { numberLocale, pick } from "@/lib/i18n";
import { monthScale, toMonths } from "@/lib/timeline";
import { Section } from "@/components/site/Section/Section";
import styles from "./Timeline.module.css";

const categories: Category[] = ["lang", "data", "int", "plat"];

/** Para tecnologías sin ícono: iniciales ("Servicios SOAP" → "SS", "Kafka" → "Ka"). */
function initials(name: string) {
  const words = name.split(/\s+/);
  return words.length > 1 ? words.map((w) => w[0]).join("").slice(0, 2).toUpperCase() : name.slice(0, 2);
}

/** Posición y ancho (en % del gráfico) de un período. */
function place(left: number, right: number): CSSProperties {
  return { left: `${left}%`, width: `${right - left}%` };
}

/**
 * Línea de tiempo de tecnologías: cuándo y cuánto se usó cada una.
 * Se calcula con la fecha de hoy y se cachea un día, así las barras y los años avanzan solos.
 */
export async function Timeline({ locale }: { locale: Locale }) {
  "use cache";
  cacheLife("days");

  const { timeline: text, ui } = cv.content[locale];
  const { start, eras, techs } = cv.timeline;
  const today = new Date();
  const x = monthScale(start, today);
  const firstYear = Number(start.slice(0, 4));
  const years = Array.from({ length: today.getFullYear() - firstYear }, (_, i) => firstYear + 1 + i);

  function duration(tech: Tech) {
    const months = tech.spans.reduce((sum, s) => sum + toMonths(s.to, today) - toMonths(s.from, today), 0);
    if (months < 12) return `${Math.round(months)} ${ui.months}`;
    const value = (months / 12).toLocaleString(numberLocale[locale], { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    return `${value} ${ui.years}`;
  }

  return (
    <Section id="timeline" eyebrow={text.eyebrow} title={text.title}>
      <div className={styles.card}>
        <ul className={styles.list}>
          <li className={styles.eras} aria-hidden="true">
            <span />
            <div className={styles.track}>
              {eras.map((era) => (
                <span key={era.company} className={styles.era} style={place(x(toMonths(era.from, today)), x(toMonths(era.to, today)))}>
                  {era.company}
                </span>
              ))}
            </div>
            <span />
          </li>

          {techs.map((tech) => {
            const name = pick(tech.name, locale);
            const live = tech.spans.some((s) => s.to === "now");
            return (
              <li key={name} className={styles.row} data-category={tech.category} data-live={live || undefined}>
                <span className={styles.label}>
                  <span className={styles.icon} aria-hidden="true">
                    {tech.icon ? (
                      <Image src={`/icons/tech/${tech.icon}.svg`} alt="" width={18} height={18} className={styles.logo} />
                    ) : (
                      initials(name)
                    )}
                  </span>
                  <span className={styles.name}>
                    <strong>{name}</strong>
                    <small>{tech.where}</small>
                  </span>
                </span>
                <span className={styles.track}>
                  {tech.spans.map((span) => (
                    <span
                      key={span.from}
                      className={styles.bar}
                      data-live={span.to === "now" || undefined}
                      style={place(x(toMonths(span.from, today)), x(toMonths(span.to, today)))}
                    />
                  ))}
                </span>
                <span className={styles.years}>{duration(tech)}</span>
              </li>
            );
          })}

          <li className={styles.axis} aria-hidden="true">
            <span />
            <div className={styles.track}>
              {years.map((year) => (
                <span key={year} className={styles.tick} data-odd={year % 2 === 1 || undefined} style={{ left: `${x(year * 12)}%` }}>
                  {year}
                </span>
              ))}
            </div>
            <span />
          </li>
        </ul>
      </div>

      <ul className={styles.legend}>
        {categories.map((category) => (
          <li key={category} className={styles.key} data-category={category}>
            {text.legend[category]}
          </li>
        ))}
        <li className={`${styles.key} ${styles.liveKey}`}>{text.liveLegend}</li>
      </ul>
    </Section>
  );
}
