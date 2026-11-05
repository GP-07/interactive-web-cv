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

/** Tonos de la paleta, para dibujos donde cada elemento lleva su propio color. */
export type Hue = "orange" | "teal" | "cobalt" | "rose" | "violet" | "green";

/** Un conjunto del diagrama de aprendizajes: cada línea del nombre va en un renglón. */
export interface LearningSet {
  name: string[];
  hue: Hue;
}

/** Una etiqueta de tecnología, con el color de su familia. */
export interface TechTag {
  name: string;
  category: Category;
}

export interface Project {
  name: string;
  /** Tipo de trabajo y período: "Freelance · 2021–2022". */
  meta: string;
  description: string;
  stack: TechTag[];
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
  nav: { label: string; learnings: string; timeline: string; projects: string; now: string; contact: string };
  ui: {
    languageLabel: string;
    themeLabel: string;
    light: string;
    dark: string;
    copy: string;
    copied: string;
    downloadCv: string;
    years: string;
    months: string;
  };
  hero: {
    eyebrow: string;
    /** Dónde puedo trabajar: van como etiquetas al lado de la de arriba. */
    locationsLabel: string;
    locations: string[];
    /** Ciudadanía y permiso de trabajo: lo primero que filtra un recruiter. */
    workEligibility: string;
    titleStart: string;
    titleHighlight: string;
    lead: string;
    facts: Fact[];
  };
  timeline: { eyebrow: string; title: string; legend: Record<Category, string>; liveLegend: string };
  learnings: {
    eyebrow: string;
    title: string;
    intro: string;
    /** Descripción del dibujo para lectores de pantalla. */
    diagramLabel: string;
    sets: LearningSet[];
    /** El conjunto vacío, punteado: lo que está por venir. */
    next: string[];
    coreLabel: string;
    /** Lo que se mantuvo en todas las etapas: va en la intersección. */
    core: string[];
    /** Nota con flecha hacia el conjunto vacío, un renglón por elemento. */
    note: string[];
  };
  projects: { eyebrow: string; title: string; stackLabel: string; items: Project[] };
  now: { eyebrow: string; title: string; items: NowItem[] };
  contact: { title: string };
  footer: { tagline: string };
}

export interface CV {
  name: string;
  email: string;
  links: ContactLink[];
  /** CV apto ATS para descargar (en public/), generado desde resume/cv-en.html. */
  resume: { url: string; fileName: string };
  /** Datos para schema.org (los leen Google y las herramientas de búsqueda de candidatos). */
  profile: {
    jobTitle: string;
    worksFor: string;
    alumniOf: string;
    /** Ciudad y país (código ISO de dos letras) donde vivo. */
    location: { city: string; country: string };
    knowsAbout: string[];
  };
  timeline: { start: YearMonth; eras: Era[]; techs: Tech[] };
  /** Palabras clave para buscadores que no aparecen como texto visible: van a schema.org y a <meta name="keywords">. */
  seoKeywords: string[];
  content: Localized<SiteContent>;
}
