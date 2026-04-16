import { NextResponse } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexspace.com";

const STATIC_ROUTES = [
  { path: "/",            priority: "1.0",  changefreq: "weekly"  },
  { path: "/it-services", priority: "0.9",  changefreq: "monthly" },
  { path: "/furniture",   priority: "0.9",  changefreq: "monthly" },
  { path: "/projects",    priority: "0.8",  changefreq: "weekly"  },
  { path: "/about",       priority: "0.7",  changefreq: "monthly" },
  { path: "/gallery",     priority: "0.7",  changefreq: "weekly"  },
  { path: "/contact",     priority: "0.6",  changefreq: "yearly"  },
];

export async function GET() {
  const today = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_ROUTES.map(
  (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
).join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type":  "application/xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
