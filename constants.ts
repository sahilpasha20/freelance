import { ServiceItem, PortfolioItem, TestimonialItem, PackageItem, FAQItem } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Wedding Photography',
    description: 'Cinematic storytelling of your big day, capturing every tear, smile, and ritual.',
    iconName: 'Heart',
  },
  {
    id: 's2',
    title: 'Pre-Wedding & Couples',
    description: 'Romantic, relaxed sessions in beautiful locations celebrating your chemistry.',
    iconName: 'Camera',
  },
  {
    id: 's3',
    title: 'Maternity Shoots',
    description: 'Celebrating the glow of motherhood with elegant, comfortable portraiture.',
    iconName: 'Sparkles',
  },
  {
    id: 's4',
    title: 'Newborn & Kids',
    description: 'Tender moments with your little ones, handled with safety and patience.',
    iconName: 'Baby',
  },
  {
    id: 's5',
    title: 'Family Portraits',
    description: 'Timeless family heirlooms that freeze your bond in a beautiful frame.',
    iconName: 'Users',
  },
  {
    id: 's6',
    title: 'Events & Celebrations',
    description: 'From anniversaries to intimate gatherings, we document the joy.',
    iconName: 'PartyPopper',
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 'p1', category: 'Wedding', title: 'Deepika & Rahul', imageUrl: 'https://picsum.photos/seed/wed1/600/800' },
  { id: 'p2', category: 'Maternity', title: 'Waiting for Miracle', imageUrl: 'https://picsum.photos/seed/mat1/600/800' },
  { id: 'p3', category: 'Newborn', title: 'Baby Aarav', imageUrl: 'https://picsum.photos/seed/new1/600/800' },
  { id: 'p4', category: 'Wedding', title: 'Royal Jaipur Wedding', imageUrl: 'https://picsum.photos/seed/wed2/600/800' },
  { id: 'p5', category: 'Family', title: 'The Verma Family', imageUrl: 'https://picsum.photos/seed/fam1/600/800' },
  { id: 'p6', category: 'Event', title: 'Golden Jubilee', imageUrl: 'https://picsum.photos/seed/evt1/600/800' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Ananya & Vikram',
    type: 'Wedding Photography',
    quote: "The team was invisible yet everywhere. They captured moments we didn't even know happened. Truly magical experience!",
    rating: 5,
  },
  {
    id: 't2',
    name: 'Meera K.',
    type: 'Maternity Shoot',
    quote: "I was so nervous, but they made me feel like a queen. The photos are the most beautiful things I own.",
    rating: 5,
  },
  {
    id: 't3',
    name: 'The Kapoor Family',
    type: 'Family Portrait',
    quote: "Patience is their superpower. Managing two toddlers isn't easy, but Rare Moments did it with a smile.",
    rating: 5,
  },
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'pkg1',
    name: 'Essential',
    idealFor: 'Portraits, Maternity, Mini Family',
    features: ['1-2 Hour Session', '1 Location', '20 High-Res Edited Images', 'Online Gallery'],
  },
  {
    id: 'pkg2',
    name: 'Signature',
    idealFor: 'Engagement, Half-Day Events',
    features: ['4-6 Hour Coverage', '2 Locations', '50+ High-Res Edited Images', 'Short Cinematic Teaser', 'Printed Photobook'],
  },
  {
    id: 'pkg3',
    name: 'Luxury',
    idealFor: 'Weddings, Full-Day Events',
    features: ['Full Day Coverage', 'Multiple Photographers', 'Unlimited Edited Images', 'Cinematic Wedding Film', 'Premium Leather Album'],
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "How early should I book my shoot?",
    answer: "For weddings, we recommend booking 3-6 months in advance. For portrait sessions, 2-3 weeks is usually sufficient.",
  },
  {
    question: "Do you travel outside Bangalore?",
    answer: "Absolutely! We love traveling to capture stories. Travel and accommodation charges would be extra based on location.",
  },
  {
    question: "How many edited photos will I receive?",
    answer: "It depends on the package, but typically 40-50 photos for portrait sessions and 300+ for full weddings.",
  },
  {
    question: "What should we wear for the shoot?",
    answer: "We provide a detailed style guide after booking to help you coordinate colors and styles that look best on camera.",
  },
];
