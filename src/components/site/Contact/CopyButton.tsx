"use client";

import { useState } from "react";

export function CopyButton({
  text,
  label,
  doneLabel,
  className,
}: {
  text: string;
  label: string;
  doneLabel: string;
  className?: string;
}) {
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
    <button type="button" className={className} onClick={copy} aria-live="polite">
      {copied ? doneLabel : label}
    </button>
  );
}
