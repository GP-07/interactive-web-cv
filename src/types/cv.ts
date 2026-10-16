export interface Fact {
  label: string;
  value: string;
}

export interface Job {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  name: string;
  year: number;
  type: string;
  description: string;
  stack: string[];
  url?: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Degree {
  title: string;
  institution: string;
  period: string;
}

export interface SpokenLanguage {
  name: string;
  level: string;
}

export interface ContactLink {
  url: string;
  display: string;
}

export interface CV {
  name: string;
  title: string;
  summary: string;
  facts: Fact[];
  /** Texto de la barra de estado. Si no está, no se muestra el indicador. */
  availability?: string;
  experience: Job[];
  skills: {
    intro: string;
    groups: SkillGroup[];
  };
  education: {
    degrees: Degree[];
    languages: SpokenLanguage[];
  };
  contact: {
    intro: string;
    email: string;
    links: ContactLink[];
  };
}
