export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  rating?: number;
  reviews?: string;
  date?: string;
  status?: 'live' | 'development' | 'coming-soon';
}