import type { Locale } from "@/types/cv";
import { cv } from "@/data/cv";
import styles from "./Footer.module.css";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className={styles.footer}>
      <span>© {cv.name}</span>
      <span>{cv.content[locale].footer.tagline}</span>
    </footer>
  );
}
