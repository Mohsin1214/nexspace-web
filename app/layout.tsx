import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "NexSpace — IT Solutions & Premium Workspace",
    template: "%s | NexSpace",
  },
  description:
    "NexSpace delivers integrated IT solutions and premium furniture systems that evolve with your business. Serving Germany and Pakistan with architectural precision.",
  keywords: [
    "IT company", "IT solutions", "office furniture", "workspace design",
    "software development", "network infrastructure", "Germany", "Pakistan",
    "NexSpace",
  ],
  authors:  [{ name: "NexSpace" }],
  creator:  "NexSpace",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexspace.com"
  ),
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexspace.com",
    title:       "NexSpace — IT Solutions & Premium Workspace",
    description: "Integrated IT solutions and premium workspace design for businesses in Germany and Pakistan.",
    siteName:    "NexSpace",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "NexSpace — IT Solutions & Premium Workspace",
    description: "Integrated IT solutions and premium workspace design.",
  },
  robots: {
    index: true, follow: true,
    googleBot: {
      index: true, follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Material Symbols (used throughout for icons) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-[#f9f9f9] text-[#1a1c1c] antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
