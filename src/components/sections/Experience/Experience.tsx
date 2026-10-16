import { Fragment } from "react";
import { cv } from "@/data/cv";
import { sections } from "@/data/sections";
import { FileSection } from "@/components/editor/FileSection/FileSection";
import { Bullet, ChipList, Line, Tok } from "@/components/editor/Code/Code";
import { techHues } from "@/lib/tech";

export function Experience() {
  // Mismo color para la misma tecnología en todos los trabajos, sin importar la versión.
  const hues = techHues(
    cv.experience.flatMap((job) => job.stack),
    cv.skills.groups.flatMap((group) => group.items.map((skill) => skill.name)),
  );

  return (
    <FileSection section={sections.experience}>
      <Line>
        <Tok kind="keyword">export const</Tok> <Tok kind="property">experience</Tok>: <Tok kind="type">Job</Tok>
        {"[] = ["}
      </Line>
      {cv.experience.map((job, i) => (
        <Fragment key={`${job.company}-${job.period}`}>
          <Line indent={1}>
            <Tok kind="comment">{`// ${job.period}`}</Tok>
          </Line>
          <Line indent={1}>
            {"{ "}
            <Tok kind="property">role</Tok>: <Tok kind="title">{`"${job.role}"`}</Tok>,{" "}
            <Tok kind="property">company</Tok>: <Tok kind="string">{`"${job.company}"`}</Tok>,
          </Line>
          <Line indent={2}>
            <Tok kind="property">highlights</Tok>: [
          </Line>
          {job.highlights.map((highlight) => (
            <Line key={highlight} indent={3}>
              <Bullet>{highlight}</Bullet>
            </Line>
          ))}
          <Line indent={2}>],</Line>
          <Line indent={2}>
            <ChipList name="stack" items={job.stack} hueOf={(tech) => hues.get(tech)} />
          </Line>
          <Line indent={1}>{"},"}</Line>
          {i < cv.experience.length - 1 && <Line />}
        </Fragment>
      ))}
      <Line>];</Line>
    </FileSection>
  );
}
