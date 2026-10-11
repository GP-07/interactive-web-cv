import type { CSSProperties, ElementType, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Code.module.css";

/*
  Piezas para escribir contenido "como código": líneas numeradas,
  tokens con color de sintaxis y bloques de texto legible.
*/

type TokenKind =
  | "keyword"
  | "string"
  | "function"
  | "type"
  | "comment"
  | "number"
  | "property"
  | "title"
  | "muted";

export function Tok({ kind, children }: { kind: TokenKind; children: ReactNode }) {
  return <span className={styles[kind]}>{children}</span>;
}

/** Una línea del editor. Sin children, es una línea en blanco. */
export function Line({ indent = 0, children }: { indent?: number; children?: ReactNode }) {
  return (
    <div className={styles.line}>
      <div className={styles.content} style={{ "--indent": indent } as CSSProperties}>
        {children}
      </div>
    </div>
  );
}

/** Texto corrido con tipografía de lectura. */
export function Prose({
  children,
  large = false,
  muted = false,
}: {
  children: ReactNode;
  large?: boolean;
  muted?: boolean;
}) {
  return <p className={cx(styles.prose, large && styles.proseLarge, muted && styles.muted)}>{children}</p>;
}

export function Bullet({ children }: { children: ReactNode }) {
  return <p className={cx(styles.prose, styles.bullet)}>{children}</p>;
}

/** Título con su marca de markdown ("#", "##", ...) a la vista. */
export function MdHeading({
  level,
  as: Tag = "p",
  children,
}: {
  level: 1 | 2 | 3;
  as?: ElementType;
  children: ReactNode;
}) {
  return (
    <Tag className={cx(styles.heading, styles[`h${level}`])}>
      <span className={styles.markup}>{"#".repeat(level)} </span>
      {children}
    </Tag>
  );
}

/** Ítem de lista de markdown: "- **Etiqueta:** valor". */
export function MdListItem({ label, children }: { label: string; children: ReactNode }) {
  return (
    <p className={styles.prose}>
      <span className={styles.markup}>- </span>
      <strong className={styles.strong}>{label}:</strong> {children}
    </p>
  );
}

/** "nombre: [chip, chip, chip]" */
export function ChipList({ name, items }: { name: string; items: string[] }) {
  return (
    <div className={styles.chips}>
      <span>
        <span className={styles.property}>{name}</span>:
      </span>
      <ul className={styles.chipList}>
        {items.map((item) => (
          <li key={item} className={styles.chip}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CodeLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export function Caret() {
  return <span className={styles.caret} aria-hidden="true" />;
}
