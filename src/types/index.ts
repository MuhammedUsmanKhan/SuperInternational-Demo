export interface HeroModelProps {
  modelPath: string;
  scale?: number | [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  autoRotate?: boolean;
  interactive?: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  volume: string;
  capacity?: string;
  moq?: string;
  material: string;
  neckSize?: string;
  image: string;
  description: string;
  featured?: boolean;
  tag?: string;
  specs?: {
    height: string;
    diameter: string;
    weight: string;
    finish: string;
  };
}

export interface ProductCategory {
  id: string;
  title: string;
  count: number;
  image: string;
  iconName: string;
  description: string;
}

export interface StrengthFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  metric?: string;
  metricLabel?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  designation: string;
  company: string;
  logo: string;
  rating: number;
  highlight: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: 'square' | 'portrait' | 'landscape';
}

export interface ClientPartner {
  name: string;
  category: string;
  tier: string;
  logoText: string;
  accent?: string;
}

// 3D Circular Hero Banner Types
export type ThemeColor3D = 'indigo-blue' | 'amber-gold' | 'emerald-teal' | 'cyan-violet';

export interface SlideData3D {
  id: number;
  category: string;
  badge?: { text: string; icon?: 'sparkles' | 'flame' | 'shield' | 'rocket' };
  title: string;
  highlightText?: string;
  description: string;
  primaryButton: { text: string; href?: string; onClick?: () => void };
  secondaryButton?: { text: string; href?: string; onClick?: () => void };
  image: string;
  theme: ThemeColor3D;
  trustSignals?: { text: string }[];
  metrics?: { value: string; label: string }[];
}
