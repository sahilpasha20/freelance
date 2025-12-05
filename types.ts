export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; 
}

export interface PortfolioItem {
  id: string;
  category: 'Wedding' | 'Maternity' | 'Newborn' | 'Family' | 'Event';
  imageUrl: string;
  title: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  type: string;
  quote: string;
  rating: number;
}

export interface PackageItem {
  id: string;
  name: string;
  idealFor: string;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}