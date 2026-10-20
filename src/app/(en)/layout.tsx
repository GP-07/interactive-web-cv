import type { ReactNode } from "react";
import { RootDocument, siteMetadata } from "@/components/site/RootDocument";
import "../globals.css";

export const metadata = siteMetadata("en");

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
