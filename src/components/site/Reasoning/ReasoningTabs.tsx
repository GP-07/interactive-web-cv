"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import type { Category } from "@/types/cv";
import styles from "./Reasoning.module.css";

interface TabMeta {
  id: string;
  kicker: string;
  title: string;
  category: Category;
}

/**
 * Pestañas accesibles: se recorren con Tab y con las flechas.
 * Los paneles llegan ya renderizados desde el servidor; acá solo se elige cuál se ve.
 */
export function ReasoningTabs({ label, tabs, panels }: { label: string; tabs: TabMeta[]; panels: ReactNode[] }) {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    const next = (index + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
    setSelected(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className={styles.tabsBlock}>
      <div className={styles.tabs} role="tablist" aria-label={label}>
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-controls={`panel-${tab.id}`}
            aria-selected={i === selected}
            tabIndex={i === selected ? 0 : -1}
            className={styles.tab}
            data-category={tab.category}
            onClick={() => setSelected(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            <small>{tab.kicker}</small>
            <span>{tab.title}</span>
          </button>
        ))}
      </div>

      {tabs.map((tab, i) => (
        <div key={tab.id} role="tabpanel" id={`panel-${tab.id}`} aria-labelledby={`tab-${tab.id}`} hidden={i !== selected}>
          {panels[i]}
        </div>
      ))}
    </div>
  );
}
