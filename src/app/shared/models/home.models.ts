export type UserSummary = {
  name: string;
  greeting: string;
  avatarUrl?: string;
};

export type CarouselSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  actionLabel?: string;
};

export type ServiceIcon =
  | 'link'
  | 'medical'
  | 'employees'
  | 'catalog'
  | 'payroll'
  | 'finance'
  | 'health'
  | 'clock'
  | 'play'
  | 'support';

export type ServiceCard = {
  id: string;
  title: string;
  icon: ServiceIcon;
  route?: string;
};

export type BottomNavItem = 'home' | 'profile' | 'notifications';