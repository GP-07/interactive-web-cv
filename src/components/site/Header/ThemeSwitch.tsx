"use client";

import { useSyncExternalStore } from "react";
import styles from "./Header.module.css";

type Theme = "light" | "dark";

/* El tema vive en <html data-theme>: el script del <head> lo pone antes de pintar y este control lo cambia. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const getTheme = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");
const getServerTheme = (): Theme => "light";

function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Sin almacenamiento (modo privado): el tema se aplica igual, solo que no se recuerda.
  }
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z" />
    </svg>
  );
}

export function ThemeSwitch({ label, light, dark }: { label: string; light: string; dark: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  const options = [
    { value: "light" as const, text: light, icon: <SunIcon /> },
    { value: "dark" as const, text: dark, icon: <MoonIcon /> },
  ];

  return (
    <div className={styles.segmented} role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={styles.option}
          aria-pressed={theme === option.value}
          onClick={() => setTheme(option.value)}
        >
          {option.icon}
          <span>{option.text}</span>
        </button>
      ))}
    </div>
  );
}
