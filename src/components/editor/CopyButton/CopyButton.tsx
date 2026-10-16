"use client";

import { useState } from "react";
import styles from "./CopyButton.module.css";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Sin permiso de portapapeles: el texto sigue visible para copiarlo a mano.
    }
  }

  return (
    <button type="button" className={styles.button} onClick={copy}>
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
