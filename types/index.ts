// ─── NexSpace Global Types ───────────────────────────────────────────────────

export type ProjectCategory =
  | "WEB_DEVELOPMENT"
  | "MOBILE_APP"
  | "UI_UX_DESIGN"
  | "BRANDING"
  | "ECOMMERCE"
  | "OTHER";

export type GalleryCategory =
  | "UI_DESIGN"
  | "GRAPHIC_DESIGN"
  | "LOGO_BRANDING"
  | "ILLUSTRATION"
  | "MOTION"
  | "OTHER";

export type MessageStatus = "UNREAD" | "READ" | "REPLIED" | "ARCHIVED";

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDesc?: string;
  coverImage: string;
  images: string[];
  tags: string[];
  category: ProjectCategory;
  clientName?: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
  published: boolean;
  order: number;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDesc?: string;
  icon: string;
  features: string[];
  price?: string;
  featured: boolean;
  published: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: GalleryCategory;
  tags: string[];
  featured: boolean;
  published: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  order: number;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  content: string;
  rating: number;
  featured: boolean;
  published: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  service?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
