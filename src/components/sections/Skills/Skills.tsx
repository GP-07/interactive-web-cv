import type { CSSProperties } from "react";
import { cv } from "@/data/cv";
import { sections } from "@/data/sections";
import { FileSection } from "@/components/editor/FileSection/FileSection";
import { Line, Tok } from "@/components/editor/Code/Code";
import { SkillBar } from "@/components/editor/SkillBar/SkillBar";
import styles from "./Skills.module.css";

export function Skills() {
  const { intro, levels, items } = cv.skills;
  // Ancho del nombre más largo (+1 por los dos puntos), para alinear todas las barras.
  const nameWidth = Math.max(...items.map((skill) => skill.name.length)) + 1;

  return (
    <FileSection section={sections.skills}>
      <Line>
        <Tok kind="comment">{`# ${intro}`}</Tok>
      </Line>
      <Line />
      <ul className={styles.list} style={{ "--name-width": `${nameWidth}ch` } as CSSProperties}>
        {items.map((skill) => {
          const label = levels[skill.level - 1];
          return (
            <li key={skill.name}>
              <Line>
                <span className={styles.row}>
                  <span className={styles.name}>
                    <Tok kind="property">{skill.name}</Tok>:
                  </span>
                  <SkillBar level={skill.level} label={label} />
                  <Tok kind="comment">{`# ${label}`}</Tok>
                </span>
              </Line>
            </li>
          );
        })}
      </ul>
    </FileSection>
  );
}
