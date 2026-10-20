import type { Locale } from "@/types/cv";
import { cv } from "@/data/cv";
import { localePath, locales } from "@/lib/i18n";
import { ThemeSwitch } from "./ThemeSwitch";
import styles from "./Header.module.css";

/** Iniciales del nombre para la marca: "Guido Pallas" → "GP". */
function initials(name: string) {
  return name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Header({ locale }: { locale: Locale }) {
  const { nav, ui } = cv.content[locale];
  const links = [
    { id: "timeline", label: nav.timeline },
    { id: "reasoning", label: nav.reasoning },
    { id: "now", label: nav.now },
    { id: "contact", label: nav.contact },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top">
          <span className={styles.mark} aria-hidden="true">
            {initials(cv.name)}
          </span>
          {cv.name}
        </a>

        <nav className={styles.nav} aria-label={nav.label}>
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.tools}>
          {/* Cada idioma es otra página: links reales, no un cambio de texto en el navegador */}
          <div className={styles.segmented} role="group" aria-label={ui.languageLabel}>
            {locales.map((option) => (
              <a
                key={option}
                href={localePath[option]}
                hrefLang={option}
                lang={option}
                className={styles.option}
                aria-current={option === locale ? "page" : undefined}
              >
                {option.toUpperCase()}
              </a>
            ))}
          </div>
          <ThemeSwitch label={ui.themeLabel} light={ui.light} dark={ui.dark} />
        </div>
      </div>
    </header>
  );
}
