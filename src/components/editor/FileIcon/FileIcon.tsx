import type { FileLanguage } from "@/types/sections";
import { cx } from "@/lib/cx";
import styles from "./FileIcon.module.css";

const glyphs: Record<FileLanguage, string> = {
  markdown: "M↓",
  typescript: "TS",
  json: "{}",
  yaml: "!",
  shell: "$_",
};

export function FileIcon({ language, className }: { language: FileLanguage; className?: string }) {
  return (
    <span className={cx(styles.icon, styles[language], className)} aria-hidden="true">
      {glyphs[language]}
    </span>
  );
}
