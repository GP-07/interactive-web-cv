import type { ReactNode } from "react";
import { RootDocument, siteMetadata } from "@/components/site/RootDocument";
import "../globals.css";

export const metadata = siteMetadata("es");

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="es">{children}</RootDocument>;
}
