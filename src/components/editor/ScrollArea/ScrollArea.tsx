"use client";

import type { ReactNode } from "react";
import { useActiveSection } from "@/components/editor/ActiveSection/ActiveSectionContext";
import styles from "./ScrollArea.module.css";

/** El área del editor que scrollea. Las secciones (Server Components) llegan como children. */
export function ScrollArea({ children }: { children: ReactNode }) {
  const { scrollerRef } = useActiveSection();

  return (
    <main ref={scrollerRef} className={styles.scroll}>
      {children}
    </main>
  );
}
