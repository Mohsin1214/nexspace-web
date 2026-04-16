import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with NexSpace. Our architectural consultants and IT specialists are ready to transform your workspace.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="pt-16 pb-4 bg-[#f9f9f9]">
        <div className="container-ns">
          <p className="label-pill">Get In Touch</p>
          <h1
            className="text-5xl lg:text-7xl font-extrabold text-[#1a1c1c] leading-[1.05] tracking-[-0.02em] mb-5"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Connect with Us
          </h1>
          <p className="text-[#524535] text-xl max-w-2xl leading-[1.6]">
            Our architectural consultants and IT specialists are ready to
            transform your commercial workspace into a digital-first masterpiece.
          </p>
        </div>
      </section>
      <Contact />
    </div>
  );
}
