import { cv } from "@/data/cv";
import { sections } from "@/data/sections";
import { FileSection } from "@/components/editor/FileSection/FileSection";
import { CodeLink, Line, Tok } from "@/components/editor/Code/Code";
import { CopyButton } from "@/components/editor/CopyButton/CopyButton";

export function Contact() {
  const { intro, email, links, closing } = cv.contact;

  return (
    <FileSection section={sections.contact}>
      <Line>
        <Tok kind="comment">#!/usr/bin/env bash</Tok>
      </Line>
      <Line>
        <Tok kind="comment">{`# ${intro}`}</Tok>
      </Line>
      <Line />
      <Line>
        <Tok kind="function">echo</Tok> <Tok kind="property">$EMAIL</Tok>
      </Line>
      <Line>
        <a href={`mailto:${email}`}>
          <Tok kind="string">{email}</Tok>
        </a>
        <CopyButton text={email} />
      </Line>
      <Line />
      {links.map((link) => (
        <Line key={link.url}>
          <Tok kind="function">open</Tok> <CodeLink href={link.url}>{link.display}</CodeLink>
        </Line>
      ))}
      <Line />
      <Line>
        <Tok kind="comment">{`# ${closing}`}</Tok>
      </Line>
    </FileSection>
  );
}
