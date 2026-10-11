import type { ReactNode } from "react";
import styles from "./EditorWindow.module.css";

/** La ventana del editor: breadcrumb, contenido y barra de estado. */
export function EditorWindow({
  breadcrumb,
  statusBar,
  children,
}: {
  breadcrumb: ReactNode;
  statusBar: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className={styles.window}>
      {breadcrumb}
      {children}
      {statusBar}
    </div>
  );
}
