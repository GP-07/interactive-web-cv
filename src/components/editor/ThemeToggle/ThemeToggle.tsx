"use client";

/** Alterna entre tema claro y oscuro. Sin elección explícita, manda la preferencia del sistema. */
export function ThemeToggle({ className }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const current =
      root.dataset.theme ?? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    root.dataset.theme = current === "dark" ? "light" : "dark";
  }

  return (
    <button type="button" className={className} onClick={toggle} aria-label="Toggle light and dark theme">
      ◐ Theme
    </button>
  );
}
