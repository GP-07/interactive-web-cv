"use client";

import { useEffect, useRef } from "react";
import type { SectionMeta } from "@/types/sections";
import { FileIcon } from "@/components/editor/FileIcon/FileIcon";
import { useActiveSection } from "@/components/editor/ActiveSection/ActiveSectionContext";
import styles from "./Breadcrumb.module.css";

/** Breadcrumb fijo: se pinta a medida que se avanza y permite saltar entre secciones. */
export function Breadcrumb({ root, items }: { root: string; items: SectionMeta[] }) {
  const { activeIndex, scrollToSection, progressRef } = useActiveSection();
  const listRef = useRef<HTMLOListElement>(null);

  // En pantallas angostas el breadcrumb no entra entero: mantiene visible la sección actual.
  useEffect(() => {
    const list = listRef.current;
    const current = list?.children[activeIndex] as HTMLElement | undefined;
    if (!list || !current) return;
    const left = current.offsetLeft - (list.clientWidth - current.offsetWidth) / 2;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    list.scrollTo({ left: Math.max(0, left), behavior: reduceMotion ? "auto" : "smooth" });
  }, [activeIndex]);

  return (
    <nav className={styles.breadcrumb} aria-label="Secciones del CV">
      <span className={styles.root}>{root}</span>
      <ol ref={listRef} className={styles.list}>
        {items.map((item, i) => {
          const state = i < activeIndex ? "done" : i === activeIndex ? "current" : "todo";
          return (
            <li key={item.id} className={styles.item}>
              <a
                href={`#${item.id}`}
                className={styles.crumb}
                data-state={state}
                aria-current={state === "current" ? "location" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                <FileIcon language={item.language} className={styles.icon} />
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
      <div ref={progressRef} className={styles.progress} aria-hidden="true" />
    </nav>
  );
}
