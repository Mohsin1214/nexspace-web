import type { Metadata } from "next";
import About    from "@/components/sections/About";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about NexSpace — our story, mission, values, and the team behind your digital and physical workspace transformations.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="pt-20 pb-8 bg-[#f9f9f9]">
        <div className="container-ns">
          <p className="label-pill">Our Story</p>
          <h1
            className="text-5xl lg:text-7xl font-extrabold text-[#1a1c1c] leading-[1.05] tracking-[-0.02em] max-w-2xl"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Built on Trust.<br />
            <em className="text-[#845400] not-italic">Driven by Innovation.</em>
          </h1>
        </div>
      </section>

      <About full />
      <CtaBanner />
    </div>
  );
}
