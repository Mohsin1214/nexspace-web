import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Furniture & Workspace Solutions",
  description: "Premium office furniture, home interiors, and workspace design from NexSpace. Serving businesses in Germany and Pakistan.",
};

const ENVIRONMENTS = [
  { icon: "business_center", title: "Office Environments",       color: "#006780" },
  { icon: "chair_alt",       title: "Home Interiors",             color: "#845400" },
  { icon: "school",          title: "Educational Spaces",         color: "#2f3131" },
  { icon: "restaurant",      title: "Restaurant & Hospitality",   color: "#845400" },
];

const SIGNATURE_PRODUCTS = [
  { name: "Executive Pro Desk",    category: "Office", price: "From €1,200" },
  { name: "Ergonomic Task Chair",  category: "Office", price: "From €450"   },
  { name: "Modular Sofa System",   category: "Home",   price: "From €2,800" },
  { name: "Conference Table",      category: "Office", price: "From €3,500" },
  { name: "Lounge Armchair",       category: "Home",   price: "From €890"   },
  { name: "Height-Adjust Desk",    category: "Office", price: "From €750"   },
];

export default function FurniturePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-28 bg-[#f3f3f3] relative overflow-hidden">
        <div className="container-ns relative z-10">
          <p className="label-pill">Premium Workspaces</p>
          <h1
            className="text-4xl lg:text-6xl font-extrabold text-[#1a1c1c] mb-6 max-w-2xl tracking-tight"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.02em" }}
          >
            Designing Spaces That{" "}
            <em className="text-[#845400] not-italic">Inspire Productivity</em>
          </h1>
          <p className="text-[#5f5e5e] text-lg max-w-xl leading-relaxed mb-10">
            We curate and supply premium furniture for offices, homes, and
            hospitality spaces — with installation and interior design services.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Design Your Space</Link>
            <Link href="#catalogue" className="btn-ghost">Browse Catalogue</Link>
          </div>
        </div>
        {/* Decorative shape */}
        <div className="absolute right-0 top-0 bottom-0 w-2/5 hidden lg:block">
          <div className="w-full h-full bg-gradient-to-br from-[#ffddb6]/40 to-[#d6c3b0]/20" />
        </div>
      </section>

      {/* Specialized Environments */}
      <section className="section-padding bg-[#f9f9f9]">
        <div className="container-ns">
          <p className="label-pill">Specialised Environments</p>
          <h2 className="headline-lg text-[#1a1c1c] mb-14" style={{ fontFamily: "Manrope, sans-serif" }}>
            Spaces We Design For
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {ENVIRONMENTS.map((env) => (
              <div
                key={env.title}
                className="group aspect-square rounded-xl flex flex-col items-center justify-center gap-4 soft-drift hover:-translate-y-1.5 cursor-pointer"
                style={{ backgroundColor: env.color }}
              >
                <span className="material-symbols-outlined text-5xl text-white/80">{env.icon}</span>
                <p className="text-white font-semibold text-sm text-center px-4">{env.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Series */}
      <section id="catalogue" className="section-padding bg-[#f3f3f3]">
        <div className="container-ns">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="label-pill">Catalogue</p>
              <h2 className="headline-lg text-[#1a1c1c]" style={{ fontFamily: "Manrope, sans-serif" }}>
                Signature Series
              </h2>
            </div>
            <Link href="/contact" className="btn-ghost text-sm hidden lg:inline-flex">
              Request Full Catalogue
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SIGNATURE_PRODUCTS.map((p) => (
              <div key={p.name} className="bg-[#ffffff] rounded-xl overflow-hidden shadow-[0px_8px_24px_rgba(26,28,28,0.05)] group soft-drift hover:shadow-[0px_20px_40px_rgba(26,28,28,0.10)] hover:-translate-y-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#e8e8e8] to-[#d6c3b0] flex items-center justify-center">
                  <span className="material-symbols-outlined text-5xl text-[#847463]/50">chair_alt</span>
                </div>
                <div className="p-5">
                  <span className="label-md text-[#845400]">{p.category}</span>
                  <h3 className="font-bold text-[#1a1c1c] mt-1.5 mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {p.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#845400]">{p.price}</span>
                    <Link href="/contact" className="text-xs text-[#5f5e5e] hover:text-[#845400] transition-colors flex items-center gap-1">
                      Enquire <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Your Space CTA */}
      <section className="section-padding bg-[#1a1c1c]">
        <div className="container-ns text-center">
          <p className="label-md text-[#ffb347]/60 mb-4">Custom Projects</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#f9f9f9] mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
            Design Your Space
          </h2>
          <p className="text-[#f9f9f9]/50 max-w-lg mx-auto mb-10 leading-relaxed">
            Tell us your requirements and our interior design team will create a
            custom layout and furniture proposal for your space.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Design Consultation
          </Link>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
