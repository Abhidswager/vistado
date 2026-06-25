import profileData from '@/content/profile.json';
import servicesData from '@/content/services.json';
import projectsData from '@/content/projects.json';
import testimonialsData from '@/content/testimonials.json';
import faqData from '@/content/faq.json';

import type {
  Profile,
  Service,
  ProjectsData,
  Testimonial,
  Faq,
} from '@/lib/types';

/**
 * Central content access. Every editable string / list lives in /content/*.json
 * — edit those files to change copy, stats, services, projects, reviews or FAQ
 * without touching component code.
 */
export const profile = profileData as Profile;
export const services = servicesData as Service[];
export const projects = projectsData as ProjectsData;
export const testimonials = testimonialsData as Testimonial[];
export const faqs = faqData as Faq[];

/** Brand gradient used across the UI (kept identical to the approved design). */
export const BRAND_GRAD = 'linear-gradient(135deg,#FF7A2E,#FF5A1F)';

/** Pre-filled WhatsApp deep link built from the profile contact info. */
export function whatsappLink(): string {
  const { whatsappNumber, whatsappMessage } = profile.contact;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}
