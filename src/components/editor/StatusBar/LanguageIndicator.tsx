"use client";

import { useActiveSection } from "@/components/editor/ActiveSection/ActiveSectionContext";

/** Lenguaje del "archivo" que se está leyendo. */
export function LanguageIndicator({ languages, className }: { languages: string[]; className?: string }) {
  const { activeIndex } = useActiveSection();
  return <span className={className}>{languages[activeIndex]}</span>;
}
