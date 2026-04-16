"use client";

import { useState } from "react";
import Link from "next/link";

const PLACEHOLDER_PROJECTS = [
  {
    id: "1",
    title:       "The Digital Atrium",
    subtitle:    "Berlin, Germany",
    category:    "IT Infrastructure",
    description: "Complete IT overhaul for a 12-floor commercial tower. Structured cabling, server room design, and managed services deployment.",
    tags:        ["Network", "IT Support", "Enterprise"],
    large:       true,
  },
  {
    id: "2",
    title:       "Smart Office Islamabad",
    subtitle:    "Islamabad, Pakistan",
    category:    "Workspace Design",
    description: "Integrated furniture and IT fit-out for a 200-person co-working space.",
    tags:        ["Furniture", "IT", "Co-working"],
    large:       false,
  },
  {
    id: "3",
    title:       "Metro Data Centre",
    subtitle:    "Lahore, Pakistan",
    category:    "Software Development",
    description: "Custom ERP and cloud migration for a regional logistics firm.",
    tags:        ["Software", "Cloud", "ERP"],
    large:       false,
  },
];

const FILTERS = ["All", "IT Infrastructure", "Workspace Design", "Software Development"];

interface PortfolioProps { full?: boolean; }

export default function Portfolio({ full = false }: PortfolioProps) {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? PLACEHOLDER_PROJECTS
    : PLACEHOLDER_PROJECTS.filter((p) => p.category === active);

  const displayed = full ? filtered : filtered;

  return (
    <section id="projects" className="section-padding bg-[#f9f9f9]">
      <div className="container-ns">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-6">
            <p className="label-pill">Our Work</p>
            <h2 className="headline-lg text-[#1a1c1c]" style={{ fontFamily: "Manrope, sans-serif" }}>
              Our Work
            </h2>
          </div>
          <div className="lg:col-span-6 lg:text-right flex lg:justify-end items-end">
            <p className="text-[#5f5e5e] text-sm max-w-sm leading-relaxed">
              A curated selection of our architectural and digital projects
              across two continents.
            </p>
          </div>
        </div>

        {/* Filters */}
        {full && (
          <div className="flex flex-wrap gap-3 mb-12">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium soft-drift ${
                  active === f
                    ? "bg-[#845400] text-white shadow-[0px_4px_12px_rgba(132,84,0,0.25)]"
                    : "bg-white text-[#5f5e5e] hover:text-[#845400] border border-[#d6c3b0]/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {displayed.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl bg-[#1a1c1c] soft-drift hover:shadow-[0px_24px_48px_rgba(26,28,28,0.18)] cursor-pointer ${
                project.large ? "md:col-span-2" : ""
              }`}
            >
              {/* Image area */}
              <div
                className={`w-full bg-gradient-to-br from-[#2f3131] to-[#1a1c1c] flex items-center justify-center ${
                  project.large ? "h-80 lg:h-96" : "h-56"
                }`}
              >
                <span className="material-symbols-outlined text-5xl text-[#ffb347]/30">
                  {project.category === "IT Infrastructure" ? "hub" :
                   project.category === "Software Development" ? "code" : "chair"}
                </span>
              </div>

              {/* Content overlay */}
              <div className="p-7 text-[#f9f9f9]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="label-md text-[#ffb347]/70">{project.subtitle}</span>
                  <span className="text-[#f9f9f9]/20 text-xs">·</span>
                  <span className="label-md text-[#ffb347]/70">{project.category}</span>
                </div>
                <h3
                  className={`font-extrabold text-[#f9f9f9] mb-3 tracking-tight ${
                    project.large ? "text-2xl lg:text-3xl" : "text-lg"
                  }`}
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-[#f9f9f9]/50 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-white/10 rounded text-xs text-[#f9f9f9]/70">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.id}`}
                    className="text-xs font-semibold text-[#ffb347] hover:underline flex items-center gap-1 shrink-0">
                    View Case <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!full && (
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
            <Link href="/contact" className="btn-ghost">
              Start a Project
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
