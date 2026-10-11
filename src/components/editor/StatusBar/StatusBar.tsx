import { cx } from "@/lib/cx";
import { ThemeToggle } from "@/components/editor/ThemeToggle/ThemeToggle";
import { LanguageIndicator } from "./LanguageIndicator";
import styles from "./StatusBar.module.css";

export function StatusBar({ availability, languages }: { availability?: string; languages: string[] }) {
  return (
    <footer className={styles.bar}>
      <div className={styles.group}>
        <span className={styles.item}>⎇ main</span>
        {availability && (
          <span className={styles.item}>
            <i className={styles.dot} aria-hidden="true" />
            {availability}
          </span>
        )}
      </div>
      <div className={styles.group}>
        <LanguageIndicator languages={languages} className={cx(styles.item, styles.hideSmall)} />
        <span className={cx(styles.item, styles.hideSmall)}>UTF-8</span>
        <ThemeToggle className={cx(styles.item, styles.button)} />
      </div>
    </footer>
  );
}
