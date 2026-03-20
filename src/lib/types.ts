export interface Job {
  name: string;
  acronym: string;
  href: string;
  startDate: string;
  endDate: string;
  title: string;
  noteworthyTasks: string[];
}

export interface ExperienceAboutPage extends Job {
  displayText: string;
}

export interface About {
  name: string;
  description: string;
  currentExperience: Job;
  notableExperiences: ExperienceAboutPage[];
  skills: string[];
}

export interface CurrentOrg {
  webpage: string;
  name: string;
  onelinerJD: string;
}

export interface Bio {
  greet: string;
  name: string;
  oneliner: string;
  description: string;
  currentOrg?: CurrentOrg;
}

export type IconName = "github" | "instagram" | "linkedin" | "twitter" | "codepen" | "external";

export interface SocialProfile {
  href: string;
  label: string;
  icon: IconName;
}

export interface Social {
  mail: string;
  profiles: SocialProfile[];
}

export interface Project {
  name: string;
  description: string;
  github: string;
  externalLink: string;
  tools: string[];
  imageSrc: string;
}

export interface NavLink {
  href: string;
  displayText: string;
  animationDelayMs: number;
}
