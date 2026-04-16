import type { Metadata } from "next";
import Portfolio  from "@/components/sections/Portfolio";
import CtaBanner  from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse NexSpace's project portfolio — IT infrastructure, software development, and workspace design projects across Germany and Pakistan.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <section className="pt-16 pb-4 bg-[#f9f9f9]">
        <div className="container-ns">
          <p className="label-pill">PortFolio</p>
        </div>
      </section>
      <Portfolio full />
      <CtaBanner />
    </div>
  );
}
