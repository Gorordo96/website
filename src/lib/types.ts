export interface Link {
  name: 'GitHub' | 'LinkedIn';
  url: string;
}

export interface HeroData {
  name: string;
  title: string;
  location: string;
  links: Link[];
}

export interface AboutData {
  description: string;
}

export interface Education {
  category: string;
  institution: string;
  degree: string;
  date: string;
  details?: string;
}

export interface Course {
  title: string;
  institution: string;
  certificateUrl: string;
}

export interface Media {
  type: 'image' | 'video';
  url: string;
  placeholder: string;
  hint: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  dates: string;
  summary: string;
  detailedDescription: string; // Markdown
  media?: Media[];
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  education: Education[];
  courses: Course[];
  experience: Experience[];
}
