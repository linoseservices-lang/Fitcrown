
import { NavItem, Product, Member, EventItem } from './types';

export const COLORS = {
  primary: '#2D5A27', // Earthy Green
  secondary: '#4B3621', // Earthy Brown
  accent: '#D4AF37', // Gold
  light: '#F8F9FA',
  dark: '#1A1A1A',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Training', path: '/training' },
  { label: 'Products', path: '/products' },
  { label: 'Membership', path: '/membership' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Premium Dried Ginger',
    description: 'A-grade sun-dried ginger pieces, perfect for processing and exports.',
    price: 4500,
    category: 'Spices',
    image: 'https://picsum.photos/seed/ginger/400/400',
    inStock: true,
  },
  {
    id: 'p2',
    name: 'Smoked Crayfish Large',
    description: 'Traditionally smoked and preserved for maximum flavor retention.',
    price: 8500,
    category: 'Seafood',
    image: 'https://picsum.photos/seed/crayfish/400/400',
    inStock: true,
  },
  {
    id: 'p3',
    name: 'Pure Cocoa Powder',
    description: 'Ethically sourced cocoa beans processed into fine, unsweetened powder.',
    price: 6000,
    category: 'Beverage',
    image: 'https://picsum.photos/seed/cocoa/400/400',
    inStock: true,
  },
  {
    id: 'p4',
    name: 'Dehydrated Garlic Chips',
    description: 'Long shelf-life garlic chips for industrial and domestic culinary use.',
    price: 3200,
    category: 'Spices',
    image: 'https://picsum.photos/seed/garlic/400/400',
    inStock: true,
  },
];

export const MOCK_MEMBERS: Member[] = [
  {
    id: 'm1',
    name: 'Dr. Samuel Okonkwo',
    role: 'Soil Scientist',
    location: 'Lagos',
    expertise: ['Soil Analysis', 'Irrigation'],
    image: 'https://picsum.photos/seed/member1/200/200',
  },
  {
    id: 'm2',
    name: 'Engr. Fatima Bello',
    role: 'Agro-Processor',
    location: 'Kano',
    expertise: ['Milling', 'Packaging'],
    image: 'https://picsum.photos/seed/member2/200/200',
  },
  {
    id: 'm3',
    name: 'Chief Jacob Ade',
    role: 'Export Specialist',
    location: 'Ibadan',
    expertise: ['Logistics', 'Global Markets'],
    image: 'https://picsum.photos/seed/member3/200/200',
  },
];

export const MOCK_EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'Agro-Export Masterclass 2024',
    date: 'Oct 15, 2024',
    location: 'Ibadan (Agric Villa)',
    type: 'Physical',
    price: '₦25,000',
  },
  {
    id: 'e2',
    title: 'Digital Agribusiness Strategy',
    date: 'Nov 02, 2024',
    location: 'Zoom Webinar',
    type: 'Online',
    price: '₦10,000',
  },
];
