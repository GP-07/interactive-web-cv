import { cv } from "@/data/cv";
import { sections } from "@/data/sections";
import { FileSection } from "@/components/editor/FileSection/FileSection";
import { Caret, Line, MdHeading, MdListItem, Prose } from "@/components/editor/Code/Code";

export function About() {
  return (
    <FileSection section={sections.about}>
      <Line>
        <MdHeading level={1} as="h1">
          {cv.name}
          <Caret />
        </MdHeading>
      </Line>
      <Line />
      <Line>
        <MdHeading level={2}>{cv.title}</MdHeading>
      </Line>
      <Line />
      <Line>
        <Prose large>{cv.summary}</Prose>
      </Line>
      <Line />
      {cv.facts.map((fact) => (
        <Line key={fact.label}>
          <MdListItem label={fact.label}>{fact.value}</MdListItem>
        </Line>
      ))}
    </FileSection>
  );
}
