export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  challenges: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  icon?: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "Languages"
  | "Frameworks"
  | "Backend"
  | "Databases"
  | "Cloud"
  | "Marketing"
  | "Testing"
  | "Development Tools";

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TimelineEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  type: "work" | "education" | "milestone";
}

