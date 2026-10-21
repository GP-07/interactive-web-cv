import type { CSSProperties } from "react";
import type { Hue, Locale } from "@/types/cv";
import { cv } from "@/data/cv";
import { Section } from "@/components/site/Section/Section";
import styles from "./Learnings.module.css";

/* Geometría del diagrama: elipses iguales repartidas alrededor del centro, todas lo atraviesan. */
const RX = 230;
const RY = 116;
const OFFSET = 100;
const LINE = 24;

const hueVar: Record<Hue, string> = {
  orange: "var(--color-orange)",
  teal: "var(--color-teal)",
  cobalt: "var(--color-cobalt)",
  rose: "var(--color-rose)",
  violet: "var(--color-violet)",
};

interface Petal {
  key: string;
  name: string[];
  color: string;
  future: boolean;
  deg: number;
  cx: number;
  cy: number;
  /** Punto donde va el título, en la parte del conjunto que no comparte con nadie. */
  lx: number;
  ly: number;
}

const round = (n: number) => Math.round(n * 10) / 10;

function petals(sets: { name: string[]; color: string }[], next: string[]): Petal[] {
  const all = [...sets.map((s) => ({ ...s, future: false })), { name: next, color: "var(--color-text-muted)", future: true }];
  return all.map((s, i) => {
    const deg = -90 + (i * 360) / all.length;
    const a = (deg * Math.PI) / 180;
    const r = OFFSET + RX * 0.66;
    return {
      key: s.name.join(" "),
      name: s.name,
      color: s.color,
      future: s.future,
      deg,
      cx: round(OFFSET * Math.cos(a)),
      cy: round(OFFSET * Math.sin(a)),
      lx: round(r * Math.cos(a)),
      ly: round(r * Math.sin(a)),
    };
  });
}

/**
 * Aprendizajes como conjuntos superpuestos: cada uno es algo que se aprendió desde cero,
 * el punteado es lo que viene y la intersección es lo que se mantuvo en todos.
 */
export function Learnings({ locale }: { locale: Locale }) {
  const { learnings: text } = cv.content[locale];
  const items = petals(
    text.sets.map((s) => ({ name: s.name, color: hueVar[s.hue] })),
    text.next,
  );
  const future = items[items.length - 1];
  const tip = { x: round((OFFSET + RX * 0.82) * Math.cos((future.deg * Math.PI) / 180)), y: round((OFFSET + RX * 0.82) * Math.sin((future.deg * Math.PI) / 180)) };
  const coreTop = -((text.core.length - 1) * 19) / 2 + 6;
  const ellipse = (p: Petal) => ({ cx: p.cx, cy: p.cy, rx: RX, ry: RY, transform: `rotate(${p.deg} ${p.cx} ${p.cy})` });

  // La intersección: un rectángulo recortado por todos los conjuntos, uno dentro de otro.
  let core = <rect className={styles.core} x={-220} y={-220} width={440} height={440} fill="url(#learn-core)" />;
  for (let i = items.length - 1; i >= 0; i--) core = <g clipPath={`url(#learn-clip-${i})`}>{core}</g>;

  return (
    <Section id="learnings" eyebrow={text.eyebrow} title={text.title} intro={text.intro}>
      <figure className={styles.figure}>
        <svg className={styles.venn} viewBox="-450 -380 900 760" role="img" aria-labelledby="learnings-diagram">
          <title id="learnings-diagram">{text.diagramLabel}</title>
          <defs>
            <radialGradient id="learn-core" cx="0.5" cy="0.5" r="0.7">
              <stop offset="0" stopColor="var(--color-core-from)" />
              <stop offset="1" stopColor="var(--color-core-to)" />
            </radialGradient>
            <marker id="learn-tip" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" className={styles.tipHead} />
            </marker>
            {items.map((p, i) => (
              <clipPath key={p.key} id={`learn-clip-${i}`}>
                <ellipse {...ellipse(p)} />
              </clipPath>
            ))}
          </defs>

          {items.map((p) => (
            <ellipse
              key={p.key}
              {...ellipse(p)}
              className={p.future ? styles.future : styles.set}
              style={{ "--c": p.color } as CSSProperties}
            />
          ))}

          {core}
          <text className={styles.coreLabel} x={0} y={coreTop - 22}>
            {text.coreLabel.toUpperCase()}
          </text>
          {text.core.map((line, i) => (
            <text key={line} className={styles.coreText} x={0} y={coreTop + i * 19}>
              {line}
            </text>
          ))}

          {items.map((p, i) => (
            <g key={p.key} style={{ "--c": p.color } as CSSProperties}>
              {p.name.map((line, k) => (
                <text key={line} className={styles.name} x={p.lx} y={round(p.ly + (k - (p.name.length - 1) / 2) * LINE)}>
                  {line}
                </text>
              ))}
              <text className={styles.num} x={p.lx} y={p.ly}>
                {p.future ? "?" : i + 1}
              </text>
            </g>
          ))}

          <g className={styles.note}>
            {text.note.map((line, i) => (
              <text key={line} x={-440} y={-345 + i * 24}>
                {line}
              </text>
            ))}
            <path
              className={styles.arrow}
              markerEnd="url(#learn-tip)"
              d={`M-330 -305 C -330 -250, ${tip.x - 70} ${tip.y - 50}, ${tip.x - 18} ${tip.y - 14}`}
            />
          </g>
        </svg>

        {/* En el celular reemplaza a los nombres del dibujo; en pantallas grandes queda para lectores de pantalla. */}
        <figcaption className={styles.key}>
          <ol>
            {items.map((p, i) => (
              <li key={p.key} data-future={p.future || undefined} style={{ "--c": p.color } as CSSProperties}>
                <span className={styles.keyNum} aria-hidden="true">
                  {p.future ? "?" : i + 1}
                </span>
                {p.future ? `${p.name.join(" ")} ${text.note.join(" ")}` : p.name.join(" ")}
              </li>
            ))}
            <li data-core>
              <span className={styles.keyNum} aria-hidden="true">
                ★
              </span>
              {text.coreLabel}: {text.core.join(", ")}
            </li>
          </ol>
        </figcaption>
      </figure>
    </Section>
  );
}
