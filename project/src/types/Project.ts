export interface Project {
  [x: string]: string | undefined;
  id: number;
  slug: string;
  title: string;
  icon: string;
  description: string;
  tags: string[];
  gradient: string;
  status?: 'Released' | 'Early Access' | 'Coming Soon';
  rating: number;
  reviews: number;
  downloads: string;
  type: 'Flutter App' | 'Website' | 'Web App';
  features: string[];
  screenshots: string[];
}