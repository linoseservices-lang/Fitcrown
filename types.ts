
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  location: string;
  expertise: string[];
  image: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'Physical' | 'Online';
  price: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  image: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export interface Subscriber {
  id: string;
  email: string;
  joinDate: string;
  status: 'Active' | 'Unsubscribed';
}

export type UserRole = 'Admin' | 'Subscriber' | 'Guest';
