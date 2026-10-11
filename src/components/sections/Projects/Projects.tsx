import { Fragment } from "react";
import { cv } from "@/data/cv";
import { sections } from "@/data/sections";
import { FileSection } from "@/components/editor/FileSection/FileSection";
import { ChipList, CodeLink, Line, Prose, Tok } from "@/components/editor/Code/Code";

export function Projects() {
  return (
    <FileSection section={sections.projects}>
      <Line>[</Line>
      {cv.projects.map((project, i) => (
        <Fragment key={project.name}>
          <Line indent={1}>{"{"}</Line>
          <Line indent={2}>
            <Tok kind="property">{'"name"'}</Tok>: <Tok kind="title">{`"${project.name}"`}</Tok>,{" "}
            <Tok kind="property">{'"year"'}</Tok>: <Tok kind="number">{project.year}</Tok>,{" "}
            <Tok kind="property">{'"type"'}</Tok>: <Tok kind="string">{`"${project.type}"`}</Tok>,
          </Line>
          <Line indent={2}>
            <Prose>{project.description}</Prose>
          </Line>
          <Line indent={2}>
            <ChipList name={'"stack"'} items={project.stack} />
          </Line>
          {project.url && (
            <Line indent={2}>
              <Tok kind="property">{'"url"'}</Tok>: <CodeLink href={project.url}>{project.url}</CodeLink>
            </Line>
          )}
          <Line indent={1}>{i < cv.projects.length - 1 ? "}," : "}"}</Line>
        </Fragment>
      ))}
      <Line>]</Line>
    </FileSection>
  );
}
