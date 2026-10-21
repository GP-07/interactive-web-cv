import { Bricolage_Grotesque, Figtree, IBM_Plex_Mono } from "next/font/google";

const display = Bricolage_Grotesque({ variable: "--font-display-face", subsets: ["latin"], weight: ["600", "700"] });
const sans = Figtree({ variable: "--font-sans-face", subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono-face", subsets: ["latin"], weight: ["500"] });

/** Clases que definen las variables de las tres tipografías en <html>. */
export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`;
