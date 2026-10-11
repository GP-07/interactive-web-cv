"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";

/** Distancia desde el borde superior a partir de la cual una sección cuenta como "actual". */
const ACTIVE_OFFSET_PX = 120;

interface ActiveSectionValue {
  activeIndex: number;
  scrollToSection: (id: string) => void;
  scrollerRef: RefObject<HTMLElement | null>;
  progressRef: RefObject<HTMLDivElement | null>;
}

const ActiveSectionContext = createContext<ActiveSectionValue | null>(null);

/**
 * Sigue el scroll del editor: qué sección se está leyendo y cuánto se avanzó.
 * La barra de progreso se actualiza directo en el DOM para no re-renderizar en cada frame.
 */
export function ActiveSectionProvider({ sectionIds, children }: { sectionIds: string[]; children: ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const update = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const top = scroller.scrollTop;
    const max = scroller.scrollHeight - scroller.clientHeight;
    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, top / max) : 1})`;
    }

    let index = 0;
    sectionIds.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el && el.offsetTop - ACTIVE_OFFSET_PX <= top) index = i;
    });
    // La última sección puede ser más corta que la pantalla: al llegar al final, se marca igual.
    if (max > 0 && top >= max - 4) index = sectionIds.length - 1;
    setActiveIndex(index);
  }, [sectionIds]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    // Si se entra con un link a una sección (#experiencia), se arranca ahí.
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    if (target) scroller.scrollTo({ top: target.offsetTop, behavior: "instant" });

    scroller.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      scroller.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [update]);

  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target || !scrollerRef.current) return;
    scrollerRef.current.scrollTo({ top: target.offsetTop });
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  const value = useMemo(
    () => ({ activeIndex, scrollToSection, scrollerRef, progressRef }),
    [activeIndex, scrollToSection],
  );

  return <ActiveSectionContext.Provider value={value}>{children}</ActiveSectionContext.Provider>;
}

export function useActiveSection() {
  const value = useContext(ActiveSectionContext);
  if (!value) throw new Error("useActiveSection debe usarse dentro de <ActiveSectionProvider>");
  return value;
}
