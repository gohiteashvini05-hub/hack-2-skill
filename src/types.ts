export type TabType = 'home' | 'explore' | 'services' | 'projects' | 'contact';

export interface LivingSphere {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: 'living' | 'bedroom' | 'kitchen' | 'dining' | 'urban' | 'office';
  materials: string[];
  dimensions: string;
  lightingSpec: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  location: string;
  style: string;
  scale: string;
  scope: string;
  completedYear: string;
  image: string;
  gallery: string[];
  description: string;
  clientQuote?: string;
  clientName?: string;
  architect: string;
  materials: string[];
  typology: string;
  features: string[];
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
  typicalTimeline: string;
  scaleCoverage: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  origin: string;
  tactileFeel: string;
  acousticRating: string;
  recommendedUse: string;
  colorHex: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
  rating: number;
}

export interface ConsultationSubmission {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  propertyType: string;
  aestheticTendency: string;
  approxSqFt?: string;
  consultationDate?: string;
  consultationTime?: string;
  appointmentMode: 'atelier' | 'onsite' | 'virtual';
  notes?: string;
  createdAt: string;
  status: 'Confirmed' | 'Under Review' | 'Scheduled';
}
