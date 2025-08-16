export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface Project {
  name: string;
  technologies: string[];
  description: string;
  achievements?: string[];
}

export interface Skill {
  name: string;
  level: string;
}

export interface Skills {
  languages: Skill[];
  frameworks: Skill[];
  databases: Skill[];
  devops: Skill[];
  cloud: Skill[];
  methodologies: Skill[];
}

export interface Education {
  degree?: string;
  certification?: string;
  institution: string;
  duration: string;
  gpa?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  contact?: any;
  error?: string;
} 