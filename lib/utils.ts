// ─── NexSpace Utilities ──────────────────────────────────────────────────────

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export function slugify(str: string): string {
  return str.toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length).trimEnd() + "...";
}

// ─── Site Config ─────────────────────────────────────────────────────────────
export const SITE_CONFIG = {
  name:        "NexSpace",
  tagline:     "IT Solutions & Premium Workspace",
  description: "NexSpace delivers integrated IT solutions and premium furniture systems that evolve with your business. Serving Germany and Pakistan with architectural precision.",
  url:         process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexspace.com",
  email:       "info@nexspace.com",
  offices: {
    germany: {
      label:   "Germany Office",
      address: "Kurfürstendamm 210, 10719 Berlin, Germany",
      phone:   "+49 30 12 345678",
      email:   "germany@nexspace.com",
    },
    pakistan: {
      label:   "Pakistan Office",
      address: "Level 5, Centaurus F-8, Islamabad, Pakistan",
      phone:   "+92 51 8891515",
      email:   "pakistan@nexspace.com",
    },
  },
  social: {
    github:    "https://github.com/Mohsin1214",
    linkedin:  "https://linkedin.com/company/nexspace",
    twitter:   "https://twitter.com/nexspace",
    instagram: "https://instagram.com/nexspace",
  },
};

// ─── Category Labels ──────────────────────────────────────────────────────────
export const PROJECT_CATEGORY_LABELS: Record<string, string> = {
  WEB_DEVELOPMENT: "Web Development",
  MOBILE_APP:      "Mobile App",
  UI_UX_DESIGN:    "UI/UX Design",
  BRANDING:        "Branding",
  ECOMMERCE:       "E-Commerce",
  OTHER:           "Other",
};

export const GALLERY_CATEGORY_LABELS: Record<string, string> = {
  UI_DESIGN:      "UI Design",
  GRAPHIC_DESIGN: "Graphic Design",
  LOGO_BRANDING:  "Logo & Branding",
  ILLUSTRATION:   "Illustration",
  MOTION:         "Motion",
  OTHER:          "Other",
};
