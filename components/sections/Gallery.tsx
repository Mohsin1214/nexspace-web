"use client";

import { useState } from "react";
import Link from "next/link";

const PLACEHOLDER_ITEMS = [
  { id: "1", title: "Dashboard UI",       category: "UI_DESIGN",      tags: ["Figma", "Dashboard"],  span: "col-span-2" },
  { id: "2", title: "NexSpace Logo",      category: "LOGO_BRANDING",  tags: ["Branding", "Logo"],    span: "" },
  { id: "3", title: "Mobile App UI",      category: "UI_DESIGN",      tags: ["Mobile", "App"],       span: "" },
  { id: "4", title: "Brand Identity",     category: "LOGO_BRANDING",  tags: ["Startup", "Brand"],    span: "" },
  { id: "5", title: "Print Design",       category: "GRAPHIC_DESIGN", tags: ["Print", "Poster"],     span: "" },
  { id: "6", title: "Illustration Set",   category: "ILLUSTRATION",   tags: ["Art", "Digital"],      span: "col-span-2" },
];

const CATEGORY_LABELS: Record<string, string> = {
  UI_DESIGN:      "UI Design",
  GRAPHIC_DESIGN: "Graphic Design",
  LOGO_BRANDING:  "Logo & Branding",
  ILLUSTRATION:   "Illustration",
};

const FILTERS = ["All", "UI_DESIGN", "LOGO_BRANDING", "GRAPHIC_DESIGN", "ILLUSTRATION"];

interface GalleryProps { full?: boolean; }

export default function Gallery({ full = false }: GalleryProps) {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = active === "All"
    ? PLACEHOLDER_ITEMS
    : PLACEHOLDER_ITEMS.filter((i) => i.category === active);

  const displayed = full ? filtered : filtered.slice(0, 6);

  return (
    <section id="gallery" className="section-padding bg-[#f3f3f3]">
      <div className="container-ns">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <p className="label-pill">Design Work</p>
            <h2 className="headline-lg text-[#1a1c1c]" style={{ fontFamily: "Manrope, sans-serif" }}>
              Design Gallery
            </h2>
          </div>
          {full && (
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium soft-drift ${
                    active === f
                      ? "bg-[#845400] text-white"
                      : "bg-white text-[#5f5e5e] hover:text-[#845400] border border-[#d6c3b0]/30"
                  }`}
                >
                  {f === "All" ? "All" : CATEGORY_LABELS[f]}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayed.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative overflow-hidden rounded-xl bg-[#ffffff] shadow-[0px_4px_16px_rgba(26,28,28,0.06)] soft-drift hover:shadow-[0px_20px_40px_rgba(26,28,28,0.12)] cursor-pointer ${item.span}`}
            >
              {/* Image placeholder */}
              <div className="aspect-square w-full bg-gradient-to-br from-[#ffddb6]/40 to-[#e8e8e8] flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-[#845400]/20">image</span>
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-[#1a1c1c]/80 flex flex-col items-center justify-center gap-3 transition-opacity duration-[600ms] ease-[cubic-bezier(0.2,0,0,1)] ${hovered === item.id ? "opacity-100" : "opacity-0"}`}>
                <span className="material-symbols-outlined text-2xl text-white">zoom_in</span>
                <p className="font-semibold text-white text-sm text-center px-4">{item.title}</p>
                <p className="text-white/50 text-xs">{CATEGORY_LABELS[item.category]}</p>
                <div className="flex gap-2 flex-wrap justify-center px-4">
                  {item.tags.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 bg-white/15 rounded text-xs text-white/70">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!full && (
          <div className="mt-12">
            <Link href="/gallery" className="btn-primary">View Full Gallery</Link>
          </div>
        )}
      </div>
    </section>
  );
}
