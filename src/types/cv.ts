export type Locale = "es" | "en";

/** Un valor con una versión por idioma. */
export type Localized<T> = Record<Locale, T>;

/**
 * Las cuatro familias de color del sitio. Cada una significa siempre lo mismo:
 * lenguajes y frameworks, datos, integración y mensajería, plataforma y herramientas.
 */
export type Category = "lang" | "data" | "int" | "plat";

/** Mes en formato "AAAA-MM". */
export type YearMonth = `${number}-${number}`;

export interface Fact {
  label: string;
  value: string;
  category: Category;
}

export interface Era {
  company: string;
  from: YearMonth;
  to: YearMonth | "now";
}

export interface TechSpan {
  from: YearMonth;
  to: YearMonth | "now";
}

export interface Tech {
  /** Texto plano si se dice igual en los dos idiomas. */
  name: string | Localized<string>;
  /** Dónde se usó, en el orden de los períodos. */
  where: string;
  category: Category;
  /** Archivo en public/icons/tech/, sin extensión. Sin ícono, se muestran las iniciales. */
  icon?: string;
  spans: TechSpan[];
}

export interface Tag {
  label: string;
  category: Category;
}

export interface Step {
  label: string;
  text: string;
  category: Category;
}

export interface PathPoint {
  layer: string;
  checks: string[];
}

export interface ReasoningCase {
  id: string;
  category: Category;
  kicker: string;
  tabTitle: string;
  quote: string;
  steps: Step[];
  pathLabel: string;
  path: PathPoint[];
}

export interface NowItem {
  label: string;
  text: string;
  category: Category;
}

export interface ContactLink {
  url: string;
  display: string;
}

/** Todo el texto de la página en un idioma. */
export interface SiteContent {
  meta: { title: string; description: string };
  nav: { label: string; timeline: string; reasoning: string; now: string; contact: string };
  ui: {
    languageLabel: string;
    themeLabel: string;
    light: string;
    dark: string;
    copy: string;
    copied: string;
    years: string;
    months: string;
  };
  hero: { eyebrow: string; titleStart: string; titleHighlight: string; lead: string; facts: Fact[] };
  timeline: { eyebrow: string; title: string; legend: Record<Category, string>; liveLegend: string };
  reasoning: {
    eyebrow: string;
    title: string;
    tabsLabel: string;
    checksTitle: string;
    involvesLabel: string;
    cases: ReasoningCase[];
  };
  now: { eyebrow: string; title: string; items: NowItem[] };
  contact: { title: string };
  footer: { tagline: string };
}

export interface CV {
  name: string;
  email: string;
  links: ContactLink[];
  /** Datos para schema.org (los leen Google y las herramientas de búsqueda de candidatos). */
  profile: { jobTitle: string; worksFor: string; alumniOf: string; knowsAbout: string[] };
  timeline: { start: YearMonth; eras: Era[]; techs: Tech[] };
  /** Términos en inglés, iguales en los dos idiomas: por id de situación. */
  reasoningTags: Record<string, Tag[]>;
  content: Localized<SiteContent>;
}
