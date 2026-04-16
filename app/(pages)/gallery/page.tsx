import type { Metadata } from "next";
import Gallery  from "@/components/sections/Gallery";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Design Gallery",
  description: "Browse NexSpace's design gallery — UI designs, branding, logos, illustrations, and graphic design work.",
};

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <section className="pt-16 pb-4 bg-[#f9f9f9]">
        <div className="container-ns">
          <p className="label-pill">Creative Work</p>
          <h1
            className="text-5xl lg:text-7xl font-extrabold text-[#1a1c1c] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Design Gallery
          </h1>
        </div>
      </section>
      <Gallery full />
      <CtaBanner />
    </div>
  );
}
