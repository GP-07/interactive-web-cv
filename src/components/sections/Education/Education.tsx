import { Fragment } from "react";
import { cv } from "@/data/cv";
import { sections } from "@/data/sections";
import { FileSection } from "@/components/editor/FileSection/FileSection";
import { Line, MdHeading, MdListItem, Prose } from "@/components/editor/Code/Code";

export function Education() {
  return (
    <FileSection section={sections.education}>
      <Line>
        <MdHeading level={2} as="h3">
          Education
        </MdHeading>
      </Line>
      <Line />
      {cv.education.degrees.map((degree) => (
        <Fragment key={degree.title}>
          <Line>
            <MdHeading level={3} as="h4">
              {degree.title}
            </MdHeading>
          </Line>
          <Line>
            <Prose muted>{`${degree.institution} · ${degree.period}`}</Prose>
          </Line>
          <Line />
        </Fragment>
      ))}
      <Line>
        <MdHeading level={2} as="h3">
          Languages
        </MdHeading>
      </Line>
      <Line />
      {cv.education.languages.map((language) => (
        <Line key={language.name}>
          <MdListItem label={language.name}>{language.level}</MdListItem>
        </Line>
      ))}
    </FileSection>
  );
}
