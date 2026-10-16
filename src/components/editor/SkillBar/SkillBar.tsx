import type { SkillLevel } from "@/types/cv";
import { cx } from "@/lib/cx";
import styles from "./SkillBar.module.css";

const SEGMENTS = [1, 2, 3, 4, 5] as const;

/** Barra de 5 segmentos que muestra el nivel de experiencia en una tecnología. */
export function SkillBar({ level, label }: { level: SkillLevel; label: string }) {
  return (
    <span className={styles.bar} role="img" aria-label={`${label}, ${level}/5`}>
      {SEGMENTS.map((segment) => (
        <span key={segment} className={cx(styles.segment, segment <= level && styles.filled)} />
      ))}
    </span>
  );
}
