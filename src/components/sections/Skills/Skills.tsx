import { cv } from "@/data/cv";
import { sections } from "@/data/sections";
import { FileSection } from "@/components/editor/FileSection/FileSection";
import { ChipList, Line, Tok } from "@/components/editor/Code/Code";

export function Skills() {
  return (
    <FileSection section={sections.skills}>
      <Line>
        <Tok kind="comment">{`# ${cv.skills.intro}`}</Tok>
      </Line>
      <Line />
      {cv.skills.groups.map((group) => (
        <Line key={group.name}>
          <ChipList name={group.name} items={group.items} />
        </Line>
      ))}
    </FileSection>
  );
}
