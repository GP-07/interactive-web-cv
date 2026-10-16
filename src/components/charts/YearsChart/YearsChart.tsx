import type { CSSProperties } from "react";
import Image from "next/image";
import type { Skill } from "@/types/cv";
import styles from "./YearsChart.module.css";

/**
 * Escala del eje Y: hasta el año entero siguiente al máximo, con marcas cada 1 o 2 años.
 * Varios gráficos que se comparan entre sí deben recibir la misma escala.
 */
export function yScale(maxValue: number) {
  const step = maxValue > 8 ? 2 : 1;
  const max = Math.ceil(maxValue / step) * step;
  const ticks = Array.from({ length: max / step + 1 }, (_, i) => i * step);
  return { max, ticks };
}

/** Para tecnologías sin ícono: iniciales ("Spring Boot" → "SB", "Python" → "Py"). */
function initials(name: string) {
  const words = name.split(/\s+/);
  return words.length > 1 ? words.map((w) => w[0]).join("").slice(0, 2).toUpperCase() : name.slice(0, 2);
}

function formatYears(years: number) {
  return Number.isInteger(years) ? String(years) : years.toFixed(1);
}

/**
 * Panel con columnas de años de experiencia, de menor a mayor: la tecnología con más años queda a la derecha.
 * Cada columna muestra su valor al pasar el mouse o al enfocarla (teclado o toque).
 */
export function YearsChart({
  title,
  items,
  unit,
  scale,
}: {
  title: string;
  items: Skill[];
  unit: string;
  scale: ReturnType<typeof yScale>;
}) {
  const sorted = [...items].sort((a, b) => a.years - b.years);
  const { max, ticks } = scale;

  return (
    <figure className={styles.chart}>
      <figcaption className={styles.title}>{title}</figcaption>
      <div className={styles.scroller}>
        <div className={styles.inner} style={{ "--columns": sorted.length } as CSSProperties}>
          <span className={styles.unit} aria-hidden="true">
            {unit}
          </span>

          <div className={styles.plot}>
            {ticks.map((tick) => (
              <div
                key={tick}
                className={styles.tick}
                style={{ "--at": `${(tick / max) * 100}%` } as CSSProperties}
                aria-hidden="true"
              >
                <span className={styles.tickLabel}>{tick}</span>
              </div>
            ))}

            <ol className={styles.columns}>
              {sorted.map((skill) => {
                const value = `${formatYears(skill.years)} ${unit}`;
                return (
                  <li key={skill.name} className={styles.slot} tabIndex={0}>
                    <span
                      className={styles.bar}
                      style={{ "--height": `${(skill.years / max) * 100}%` } as CSSProperties}
                    >
                      <span className={styles.tooltip} aria-hidden="true">
                        <strong>{skill.name}</strong> · {value}
                      </span>
                    </span>
                    <span className={styles.srOnly}>{`${skill.name}: ${value}`}</span>
                  </li>
                );
              })}
            </ol>
          </div>

          <ol className={styles.axis} aria-hidden="true">
            {sorted.map((skill) => (
              <li key={skill.name} className={styles.icon} title={skill.name}>
                {skill.icon ? (
                  <Image src={`/icons/tech/${skill.icon}.svg`} alt="" width={20} height={20} className={styles.logo} />
                ) : (
                  initials(skill.name)
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </figure>
  );
}
