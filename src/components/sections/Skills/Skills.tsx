import type { CSSProperties } from "react";
import { cv } from "@/data/cv";
import { sections } from "@/data/sections";
import { FileSection } from "@/components/editor/FileSection/FileSection";
import { YearsChart, yScale } from "@/components/charts/YearsChart/YearsChart";
import styles from "./Skills.module.css";

export function Skills() {
  const { unit, groups } = cv.skills;
  // Misma escala en todos los paneles, para que las alturas se puedan comparar entre sí.
  const scale = yScale(Math.max(...groups.flatMap((group) => group.items.map((skill) => skill.years))));
  // Cada panel ocupa un ancho proporcional a sus columnas: así todas las columnas miden lo mismo.
  const columns = groups.map((group) => `minmax(0, ${group.items.length}fr)`).join(" ");

  return (
    <FileSection section={sections.skills}>
      <div className={styles.panels} style={{ "--panel-columns": columns } as CSSProperties}>
        {groups.map((group) => (
          <YearsChart key={group.title} title={group.title} items={group.items} unit={unit} scale={scale} />
        ))}
      </div>
    </FileSection>
  );
}
