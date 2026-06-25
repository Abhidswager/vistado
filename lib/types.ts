export interface Stat {
  num: string;
  label: string;
}

export interface Tool {
  name: string;
  pct: number;
}

export interface Education {
  school: string;
  degree: string;
  years: string;
}

export interface Experience {
  company: string;
  role: string;
  years: string;
  tasks: string[];
}

export interface Achievement {
  org: string;
  title: string;
  date: string;
  cred: string;
}

export interface ContactInfo {
  founder: string;
  brandTagline: string;
  email: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappMessage: string;
  location: string;
  gstNote: string;
}

export interface Social {
  linkedin: string;
  instagram: string;
  behance: string;
  facebook: string;
  whatsapp: string;
}

export interface Seo {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  keywords: string[];
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  brand: string;
  role: string;
  availability: string;
  heroDescription: string;
  heroImage: string;
  aboutImage: string;
  about: {
    headingPre: string;
    headingEm: string;
    headingPost: string;
    paragraphs: string[];
  };
  badges: string[];
  heroStats: Stat[];
  aboutStats: Stat[];
  marqueeWords: string[];
  tools: Tool[];
  education: Education[];
  experience: Experience[];
  achievements: Achievement[];
  contact: ContactInfo;
  social: Social;
  footerNote: string;
  seo: Seo;
}

export interface Service {
  num: string;
  title: string;
  desc: string;
  features: string[];
  image: string;
  imageAlt: string;
}

export interface Project {
  name: string;
  category: string;
  image: string;
  url: string;
}

export interface ProjectsData {
  categories: string[];
  items: Project[];
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  avatar: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}
